import { http } from "@/utils/http";
import type {
  ApifoxModel,
  EmptyObject,
  aResult,
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

//地址管理
export const addre = () => {
  return http<aResult[]>({
    url: "/member/address",
    method: "GET",
  });
};
