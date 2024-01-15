import { http } from "@/utils/http";
import type {
  ApifoxModel,
  EmptyObject,
  hResult,
  mResult,
  pResult,
} from "./type/myType";

//登录
export const login = (EmptyOb: EmptyObject) => {
  return http<mResult>({
    url: "/login",
    method: "POST",
    data: EmptyOb,
  });
};
//获取个人信息
export const profil = () => {
  return http<hResult>({
    url: "/member/profile",
    method: "GET",
  });
};

//修改个人信息
export const profile = (data: ApifoxModel) => {
  return http<pResult>({
    url: "/member/profile",
    method: "PUT",
    data,
  });
};
