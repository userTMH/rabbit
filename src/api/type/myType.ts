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
export type lResult = {
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

//#region 地址列表
/**
 * 数据信息
 */
export type aResult = {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 省市区(县)
   */
  fullLocation: string;
  /**
   * 收货地址id
   */
  id: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
  [property: string]: any;
};

//#endregion

//#region 新建
/**
 * empty object，收货地址：请求体参数
 */
export type mEmptyObject = {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
  [property: string]: any;
};
export type msResult = {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 完整行政区
   */
  fullLocation: string;
  /**
   * 收货地址id
   */
  id: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
};

export type mResult = {
  id: number;
  [property: string]: any;
};

//#endregion
