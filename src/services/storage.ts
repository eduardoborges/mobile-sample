import { MMKVLoader } from 'react-native-mmkv-storage';

export const userStorage = new MMKVLoader()
  .withEncryption()
  .withInstanceID('userdata')
  .initialize();

export const settingsStorage = new MMKVLoader()
  .withInstanceID('settings')
  .initialize();
