import { http } from "@/utils/http";
import type {
  ApifoxModel,
  CResult,
  Result,
  GResult,
  GApifoxModel,
  HResult,
  preferenceType,
  pResult,
  dResult,
} from "./type/homeType";
//轮播图
export const home = (distributionSite: ApifoxModel) => {
  return http<Result[]>({
    url: "/home/banner",
    method: "GET",
  });
};
//分类
export const category = () => {
  return http<CResult[]>({
    url: "/home/category/mutli",
    method: "GET",
  });
};
//热门推荐
export const hot = () => {
  return http<HResult[]>({
    url: "/home/hot/mutli",
    method: "GET",
  });
};
//猜你喜欢
export const goods = (Query: GApifoxModel) => {
  return http<GResult>({
    url: "/home/goods/guessLike",
    method: "GET",
    data: Query,
  });
};
//特惠推荐
export const preference = (url: string, preference: preferenceType) => {
  return http<pResult>({
    method: "GET",
    url,
    data: preference,
  });
};
//商品详情
export const detail = (ApifoxModel: string) => {
  return http<dResult>({
    url: "/goods",
    method: "GET",
    data: ApifoxModel,
  });
};
