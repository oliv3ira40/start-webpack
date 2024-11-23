const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// Alterne entre true e false para minificar ou não no watch
const shouldMinifyInWatch = true;

// Função para criar configurações múltiplas
const createConfig = (name, entry, outputPath, isProduction) => ({
  entry: {
    [name]: entry
  },
  output: {
    filename: 'static/js/[name].min.js', // Saída dinâmica para o JS
    path: path.resolve(__dirname, outputPath) // Caminho dinâmico para a saída
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].min.css' // Saída dinâmica para o CSS
    })
  ],
  optimization: {
    minimize: isProduction || shouldMinifyInWatch, // Minifica no watch apenas se shouldMinifyInWatch for true
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true
        },
        extractComments: isProduction ? false : true, // Remove comentários no JS apenas em produção
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: isProduction }, // Remove comentários no CSS apenas em produção
            },
          ],
        },
      }),
    ],
  },
  devtool: isProduction ? false : 'source-map',
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
});

// Configurações separadas para admin_interface e website
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return [
    // Configuração para admin_interface
    createConfig(
      'admin_interface',
      [
        './static/admin_interface/js/_main.js', // Arquivo de entrada do JS
        './static/admin_interface/scss/_main.scss' // Arquivo de entrada do SCSS
      ],
      'admin_interface', // Caminho de saída
      isProduction // Passa a variável isProduction para a função
    ),
    
    // Configuração para website
    createConfig(
      'website',
      [
        './static/website/js/_main.js', // Arquivo de entrada do JS
        './static/website/scss/_main.scss' // Arquivo de entrada do SCSS
      ],
      'website', // Caminho de saída
      isProduction // Passa a variável isProduction para a função
    )
  ];
};
