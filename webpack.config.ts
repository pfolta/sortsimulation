import childProcess from "child_process";
import path from "path";

import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { Configuration, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { merge } from "webpack-merge";

import { bugs, description, homepage, keywords, productName, repository, synopsis, version } from "./package.json";

interface Environment {
    mode?: "development" | "production";
}

const BUILD_CONSTANTS = {
    BUILD_DATE: Date.now(),
    BUILD_TIMEZONE: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ISSUES_URL: bugs.url,
    REPOSITORY_URL: repository.url,
    REVISION: childProcess.execSync("git describe --tags --always --first-parent --dirty").toString().trim(),
    VERSION: version
};

const commonConfig: Configuration = {
    entry: {
        app: path.resolve(__dirname, "src/app/index.tsx")
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build/dist"),
        publicPath: "/",
        assetModuleFilename: "assets/[name].[contenthash][ext]"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "vendors"
        }
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin() as any // See https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|woff|woff2)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public")
                }
            ]
        }),
        new DefinePlugin(Object.fromEntries(Object.entries(BUILD_CONSTANTS).map(([key, value]) => [`__${key}__`, JSON.stringify(value)]))),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/resources/templates/index.ejs"),
            templateParameters: {
                description,
                homepage,
                keywords,
                productName,
                title: `${productName} • ${synopsis}`
            }
        })
    ]
};

const devServer: WebpackDevServer.Configuration = {
    hot: true,
    inline: true,
    overlay: true
};

const developmentConfig: Configuration = {
    mode: "development",
    devtool: "source-map",
    devServer,
    plugins: [new HotModuleReplacementPlugin()]
};

const productionConfig: Configuration = {
    mode: "production",
    devtool: "cheap-module-source-map"
};

const config = (env: Environment): Configuration => {
    const mode = env.mode || "production";
    console.log(`Building ${productName} in ${mode} mode...`);
    return mode === "production" ? merge(commonConfig, productionConfig) : merge(commonConfig, developmentConfig);
};

export default config;
