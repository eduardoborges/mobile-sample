import { Platform } from 'react-native';
import { getDeviceNameSync, hasNotch } from 'react-native-device-info';

export { hasNotch } from 'react-native-device-info';

export function getNotchHeight() {
  if (!hasNotch()) return 0;
  if (Platform.OS === 'android') return 0;

  if (getDeviceNameSync().includes('iPhone 14')) return 50;
  if (getDeviceNameSync().includes('iPhone 13')) return 47;
  if (getDeviceNameSync().includes('iPhone 12')) return 47;
  if (getDeviceNameSync().includes('iPhone 11')) return 34;
  if (getDeviceNameSync().includes('iPhone 10')) return 34;
  if (getDeviceNameSync().includes('iPhone 8')) return 20;
  if (getDeviceNameSync().includes('iPhone 7')) return 20;
  if (getDeviceNameSync().includes('iPhone 6')) return 20;

  return 0;
}
