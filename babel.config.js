module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@constants': './src/constants',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@store': './src/store',
          '@modules': './src/modules',
          '@reducers': './src/reducers',
          '@sagas': './src/sagas',
          '@localize': './src/localize',
          '@helpers': './src/helpers',
          '@service': './src/service',
        },
      },
    ],
  ],
};
