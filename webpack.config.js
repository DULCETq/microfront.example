const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ver = require("./ver.js");
const {ModuleFederationPlugin} = require('webpack').container;
const isDev = process.env.MODE_BUILD === "development";

const version = isDev ? '0.0.0.0' : ver.version;
const moduleVersion = version.replaceAll('.', '_');
const containerName = `MCDis256_Microfront_EmptyFront_${moduleVersion}`;

const outputPath = isDev 
  ? path.resolve(__dirname, `dist/front/MCDis256_Microfront_EmptyFront.${version}`) 
  : path.resolve(__dirname, `dist/bin`);

console.info(`version: ${version}`);
console.info(`module version: ${moduleVersion}`);
console.info(`container name: ${containerName}`);
console.info(`output path: ${outputPath}`);

module.exports = {
  mode: isDev ? "development" : "production",
  entry: ["regenerator-runtime/runtime.js"],
  output: {
    filename: "js/[contenthash].js",
    path: outputPath,
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [{loader: "babel-loader"}],
      },
      {
        test: /\.ts$/,
        exclude: "/node_modules/",
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        exclude: "/node_modules/",
        use: [{loader: "vue-loader"}],
      },
      {
        test: /\.(s)?css$/,
        use: [
          {loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader},
          {loader: "css-loader"},
          {loader: "postcss-loader"},
          {loader: "sass-loader"},
        ],
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.(jp(e)?g|png|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[contenthash][ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[contenthash][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js", ".ts", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].css",
    }),
    new ModuleFederationPlugin({
      name: containerName,
      filename: 'remoteEntry.js',
      exposes: {
        './wccEntry': './src/microfronts/emptyFront'
      },
      shared: {
        '@mcdis/app': {},
        '@mcdis/app-ui': {},
        '@mcdis/design': {},
        'ix': {},
        'rxjs': {},
        'luxon': {},
        'monaco-editor': {import: false},
        'vue': {
          import: false
        },
        'vue-router': {
          import: false
        }
      }
    })
  ],
};
