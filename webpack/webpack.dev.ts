import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import 'webpack-dev-server';

import commonConfig from './webpack.common';

const isMSW = process.env.MOCK_SERVICE_WORKER === 'true';

const devConfig: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        hot: true,
        open: true,
        port: 3000,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.MOCK_SERVICE_WORKER': JSON.stringify(isMSW),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

export default merge(commonConfig, devConfig);
