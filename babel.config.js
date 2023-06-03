module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
    ['babel-plugin-root-import', {
      rootPathSuffix: './src/',
      rootPathPrefix: '~/',
    }],
  ],
};