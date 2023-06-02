const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { cpus } = require('os');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  maxWorkers: cpus().length - 1,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
