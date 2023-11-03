import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  encryptionKey: 'app',
  id: 'shoppbud',
});
