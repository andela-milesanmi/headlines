module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname,
    alias: {
      // Main: 'app/components/Main.jsx',
      // Nav: 'app/components/Header/Nav.jsx',
      // Home: 'app/components/Pages/Home.jsx',
      // About: 'app/components/Pages/About.jsx',
      // Contact: 'app/components/Pages/Contact.jsx',
      // openWeatherMap: 'app/api/openWeatherMap.jsx',
      // WeatherForm: 'app/components/Weather/WeatherForm.jsx',
      // WeatherMessage: 'app/components/Weather/WeatherMessage.jsx',
    },
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
