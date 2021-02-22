import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { merge } from "webpack-merge";

import { description, keywords, productName } from "./package.json";

interface Environment {
    mode?: "development" | "production";
}

const commonConfig: Configuration = {
    entry: {
        app: path.resolve(__dirname, "src/webapp/index.ts")
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build/out"),
        publicPath: "/"
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
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/resources/templates/index.ejs"),
            templateParameters: {
                description,
                keywords,
                productName,
                title: productName
            }
        })
    ]
};

const devServer: WebpackDevServer.Configuration = {
    historyApiFallback: true,
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
