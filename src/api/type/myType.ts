/**
 * empty object
 */
export type EmptyObject = {
  /**
   * 用户名或手机号
   */
  account: string;
  /**
   * 密码
   */
  password: string;
};
/**
 * 用户信息
 */
export type mResult = {
  avatar: string;
  /**
   * 生日
   */
  birthday: string;
  /**
   * 城市编码
   */
  cityCode: string;
  /**
   * 性别，男、女、未知
   */
  gender: string;
  /**
   * 用户ID
   */
  id: number;
  /**
   * 手机号
   */
  mobile: string;
  nickname: string;
  /**
   * 职业
   */
  profession: string;
  /**
   * 省份编码
   */
  provinceCode: string;
  token: string;
  [property: string]: any;
};

//#region 获取信息
/**
 * 返回信息
 */
export type hResult = {
  /**
   * 账号名称
   */
  account: string;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 生日
   */
  birthday: null | string;
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string;
  /**
   * 性别，男、女、未知
   */
  gender: Gender;
  /**
   * 用户Id
   */
  id: string;
  /**
   * 昵称
   */
  nickname: null | string;
  /**
   * 职业
   */
  profession: null | string;
  [property: string]: any;
};
//#endregion

//#region 个人信息-修改：请求体参数
export type ApifoxModel = {
  /**
   * 生日 YYYY-MM-DD
   */
  birthday?: null | string;
  /**
   * 城市编码
   */
  cityCode?: null | string;
  /**
   * 区/县编码
   */
  countyCode?: null | string;
  /**
   * 性别，男、女、未知
   */
  gender?: Gender;
  /**
   * 昵称
   */
  nickname?: null | string;
  /**
   * 职业
   */
  profession?: null | string;
  /**
   * 省份编码
   */
  provinceCode?: null | string;
  [property: string]: any;
};

/**
 * 性别，男、女、未知
 */
export enum Gender {
  女 = "女",
  男 = "男",
}
/**
 * 返回信息
 */
export type pResult = {
  /**
   * 账号名称
   */
  account: string;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 生日
   */
  birthday: string;
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string;
  /**
   * 性别，男、女、未知
   */
  gender: Gender;
  /**
   * 用户Id
   */
  id: string;
  /**
   * 昵称
   */
  nickname: string;
  /**
   * 职业
   */
  profession: string;
  /**
   * token
   */
  token: string;
  [property: string]: any;
};
//#endregion
