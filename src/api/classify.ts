import { http } from "@/utils/http";
import type { cResult } from "./type/classifyType";
//分类
export const classify = () => {
  return http<cResult[]>({
    url: "/category/top",
    method: "GET",
  });
};
