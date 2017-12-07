var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: 'js/bundle.js',
        devtoolModuleFilenameTemplate: function (info) {
            return info.absoluteResourcePath;
        }
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        {
            "pixi.js": "PIXI",
            "stats.js": "Stats",
            "phaser-ce": "Phaser"
        }
    ],
    module: {
        rules: [{
                test: /\.(jpg|png|svg|xml|lol)$/,
                loader: 'file-loader',

                options: {
                    name: 'data/images/img-[hash].[ext]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/public"),
        compress: true,
        port: 3000,
        historyApiFallback: {
            index: '/index.html'
          }
    },
    plugins: [
        new webpack.DefinePlugin({
            'DEBUG': false,

            // Do not modify these manually, you may break things...
            'DEFAULT_GAME_WIDTH': /*[[DEFAULT_GAME_WIDTH*/800/*DEFAULT_GAME_WIDTH]]*/,
            'DEFAULT_GAME_HEIGHT': /*[[DEFAULT_GAME_HEIGHT*/500/*DEFAULT_GAME_HEIGHT]]*/,
            'MAX_GAME_WIDTH': /*[[MAX_GAME_WIDTH*/888/*MAX_GAME_WIDTH]]*/,
            'MAX_GAME_HEIGHT': /*[[MAX_GAME_HEIGHT*/600/*MAX_GAME_HEIGHT]]*/,
            'SCALE_MODE': JSON.stringify(/*[[SCALE_MODE*/'USER_SCALE'/*SCALE_MODE]]*/),

            // The items below most likely the ones you should be modifying
            'GOOGLE_WEB_FONTS': JSON.stringify([ // Add or remove entries in this array to change which fonts are loaded
                'Mystery Quest'
            ]),
            'SOUND_EXTENSIONS_PREFERENCE': JSON.stringify([ // Re-order the items in this array to change the desired order of checking your audio sources (do not add/remove/modify the entries themselves)
                'webm', 'ogg', 'm4a', 'mp3', 'aac', 'ac3', 'caf', 'flac', 'mp4', 'wav'
            ])
        })
    ],
}