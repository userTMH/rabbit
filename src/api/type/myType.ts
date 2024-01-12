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
