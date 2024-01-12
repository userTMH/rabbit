import { http } from "@/utils/http";
import type { EmptyObject, mResult } from "./type/myType";

//登录
export const login = (EmptyOb: EmptyObject) => {
  return http<mResult>({
    url: "/login",
    method: "POST",
    data: EmptyOb,
  });
};
