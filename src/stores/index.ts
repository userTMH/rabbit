import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const persist = {
  paths: ["token", "result"],
  // 调整为兼容多端的API
  storage: {
    setItem(key: string, value: any) {
      uni.setStorageSync(key, value);
    },
    getItem(key: string) {
      return uni.getStorageSync(key);
    },
  },
};
