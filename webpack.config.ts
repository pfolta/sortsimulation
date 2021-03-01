import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { merge } from "webpack-merge";

import { description, homepage, keywords, productName, synopsis } from "./package.json";

interface Environment {
    mode?: "development" | "production";
}

const commonConfig: Configuration = {
    entry: {
        app: path.resolve(__dirname, "src/app/index.tsx")
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build/dist"),
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "vendors"
        }
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
