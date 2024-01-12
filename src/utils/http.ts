import type { dataType } from "./type/dataType";
import { userUserStore } from "./../stores/user";
const basURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";

const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    if (!config.url.startsWith("https")) {
      config.url = basURL + config.url;
    }

    config.header = {
      ...config.header,
      "source-client": "miniapp",
    };
    const stores = userUserStore();
    if (stores.token) {
      config.header.Authorization = stores.token;
    }

    return config;
  },
};
uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("upload", httpInterceptor);

export const http = <T = any>(options: UniApp.RequestOptions) => {
  return new Promise<dataType<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res: UniApp.RequestSuccessCallbackResult) => {
        if (res.statusCode == 200) {
          if ((res.data as dataType<T>).code == 1) {
            return resolve(res.data as dataType<T>);
          }
          ShowRoast(res.data as dataType<T>);
        }
        if (res.statusCode == 401) {
          const store = userUserStore();
          store.token = "";
          uni.navigateTo({ url: "/pages/login/login" });
          return reject(res);
        }
        ShowRoast(res.data as dataType<T>);
        reject(res);
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        reject(err);
      },
    });
  });
};

//错误提示
const ShowRoast = (res: dataType<any>) => {
  uni.showToast({
    icon: "none",
    title: res.msg || "请求错误",
  });
};
