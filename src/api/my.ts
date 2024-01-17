import { http } from "@/utils/http";
import type {
  ApifoxModel,
  EmptyObject,
  aResult,
  hResult,
  lResult,
  mEmptyObject,
  mResult,
  msResult,
  pResult,
} from "./type/myType";

//登录
export const login = (EmptyOb: EmptyObject) => {
  return http<lResult>({
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

//新建
export const member = (data: mEmptyObject) => {
  return http<mResult>({
    url: "/member/address",
    method: "POST",
    data,
  });
};

//修改地址
export const Modify = (id: string, data: mEmptyObject) => {
  return http<mResult>({
    url: `/member/address/${id}`,
    method: "PUT",
    data,
  });
};

//获取修改数据
export const Modifys = (id: string) => {
  return http<msResult>({
    url: `/member/address/${id}`,
    method: "GET",
  });
};
