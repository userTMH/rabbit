//#region  轮播图
/**
 * 数据
 */
export type Result = {
  /**
   * 跳转链接
   */
  hrefUrl: string;
  /**
   * id
   */
  id: string;
  /**
   * banner链接
   */
  imgUrl: string;
  /**
   * 跳转类型1、页面2、H5 3、小程序（小程序使用）
   */
  type: number;
};
export type ApifoxModel = {
  /**
   * 广告区域展示位置
   * 1 为首页（默认值）
   * 2 为商品分类页
   */
  distributionSite?: number;
};
//#endregion

//#region 分类

/**
 * 数据
 */
export type CResult = {
  /**
   * 展示图标
   */
  icon: string;
  /**
   * id
   */
  id: string;
  /**
   * 分类名称
   */
  name: string;
};
//#endregion

//#region 热门
/**
 * 数据信息
 */
export type HResult = {
  /**
   * 推荐说明
   */
  alt: string;
  /**
   * id
   */
  id: string;
  /**
   * 图片集合
   */
  pictures: string[];
  /**
   * 跳转地址
   */
  target: string;
  /**
   * 推荐标题
   */
  title: string;
  /**
   * 推荐类型
   */
  type: string;
};
//#endregion

//#region 猜你喜欢
//传参数
export type GApifoxModel = {
  /**
   * 页码默认值1
   */
  page?: number;
  /**
   * 页大小默认是10
   */
  pageSize?: number;
};
//返回数据
export type GResult = {
  /**
   * 总条数
   */
  counts: number;
  /**
   * 当前页数据
   */
  items: Item[];
  /**
   * 当前页数
   */
  page: number;
  /**
   * 总页数
   */
  pages: number;
  /**
   * 每页条数
   */
  pageSize: number;
};

export type Item = {
  /**
   * 商品描述
   */
  desc: string;
  /**
   * 商品折扣
   */
  discount: number;
  /**
   * id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 商品已下单数量
   */
  orderNum: number;
  /**
   * 商品图片
   */
  picture: string;
  /**
   * 商品价格
   */
  price: number;
};
//#endregion

//#region 特惠
//参数
export type preferenceType = {
  /**
   * 分页页码
   */
  page?: number;
  /**
   * 分页数据每页条数
   */
  pageSize?: number;
  /**
   * Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
   */
  subType?: string;
};
//返回值
export type pResult = {
  /**
   * 活动图片
   */
  bannerPicture: string;
  /**
   * id信息
   */
  id: string;
  /**
   * 子类选项集合
   */
  subTypes: SubType[];
  /**
   * 活动标题
   */
  title: string;
};

/**
 * 子类选项
 */
export type SubType = {
  goodsItems: GoodsItem;
  /**
   * 子类选项id
   */
  id: string;
  /**
   * 子类选项名称
   */
  title: string;
};

export type GoodsItem = {
  /**
   * 总数量
   */
  counts: string;
  /**
   * 商品集合
   */
  items: pItem[];
  /**
   * 页码
   */
  page: number;
  /**
   * 总页数
   */
  pages: number;
  /**
   * 页容量
   */
  pageSize: number;
  [property: string]: any;
};

/**
 * 商品项
 */
export type pItem = {
  /**
   * 商品描述
   */
  desc: string;
  /**
   * 商品id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 商品图片
   */
  picture: string;
  /**
   * 商品价格
   */
  price: string;
};
//#endregion

//#region 商品详情
/**
 * 商品信息
 */
export type dResult = {
  /**
   * 品牌信息
   */
  brand: Brand;
  /**
   * 所属分类，多级以数组形式体现，如[一级分类，二级分类，三级分类]
   */
  categories: Category[];
  /**
   * 收藏数量
   */
  collectCount: number;
  /**
   * 评价数量
   */
  commentCount: number;
  /**
   * 备注
   */
  desc: string;
  /**
   * 商品详情
   */
  details: Details;
  /**
   * 折扣
   */
  discount: number;
  evaluationInfo: null;
  /**
   * 24小时热销
   */
  hotByDay: HotByDay[];
  /**
   * id
   */
  id: string;
  /**
   * 库存
   */
  inventory: number;
  isCollect: null;
  /**
   * 是否为预售商品
   */
  isPreSale: boolean;
  /**
   * 主图图片集合
   */
  mainPictures: string[];
  /**
   * 主图视频集合
   */
  mainVideos: string[];
  /**
   * 商品名称
   */
  name: string;
  /**
   * 原价
   */
  oldPrice: string;
  /**
   * 当前价格
   */
  price: string;
  recommends: null;
  /**
   * 销量
   */
  salesCount: number;
  /**
   * 同类商品
   */
  similarProducts: SimilarProduct[];
  /**
   * sku集合
   */
  skus: Skus[];
  /**
   * 可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
   */
  specs: ResultSpec[];
  /**
   * spu编码
   */
  spuCode: string;
  /**
   * 用户收货地址列表
   */
  userAddresses: null;
  /**
   * 主图视频比例,1为1:1/16:9，2为3:4
   */
  videoScale: number;
  [property: string]: any;
};

/**
 * 品牌信息
 */
export type Brand = {
  desc: null;
  /**
   * 品牌id
   */
  id: string;
  /**
   * logo
   */
  logo: string;
  /**
   * 品牌名称
   */
  name: string;
  /**
   * 品牌英文名称
   */
  nameEn: string;
  /**
   * 图片
   */
  picture: string;
  place: null;
  type: null;
  [property: string]: any;
};

/**
 * 分类信息
 */
export type Category = {
  /**
   * 分类id
   */
  id: string;
  layer: number;
  /**
   * 分类名称
   */
  name: string;
  parent: null | Parent;
  [property: string]: any;
};

export type Parent = {
  id: string;
  layer: number;
  name: string;
  parent: null;
  [property: string]: any;
};

/**
 * 商品详情
 */
export type Details = {
  /**
   * 商品详情图片集合
   */
  pictures: string[];
  /**
   * 商品属性集合
   */
  properties: Property[];
  [property: string]: any;
};

/**
 * 属性信息
 */
export type Property = {
  /**
   * 属性名称
   */
  name: string;
  /**
   * 属性值
   */
  value: string;
  [property: string]: any;
};

/**
 * 商品信息
 */
export type HotByDay = {
  /**
   * 备注
   */
  desc: string;
  /**
   * 折扣
   */
  discount: null;
  /**
   * id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 销量
   */
  orderNum: number;
  /**
   * 商品图片链接
   */
  picture: string;
  /**
   * 价格
   */
  price: string;
  [property: string]: any;
};

/**
 * 商品信息
 */
export type SimilarProduct = {
  /**
   * 备注
   */
  desc: string;
  /**
   * 折扣
   */
  discount: null;
  /**
   * id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 销量
   */
  orderNum: number;
  /**
   * 商品图片链接
   */
  picture: string;
  /**
   * 价格
   */
  price: string;
  [property: string]: any;
};

/**
 * sku信息
 */
export type Skus = {
  /**
   * sku_id
   */
  id: string;
  /**
   * 库存
   */
  inventory: number;
  /**
   * 旧价格
   */
  oldPrice: string;
  /**
   * sku图片
   */
  picture?: string;
  /**
   * 价格
   */
  price: string;
  /**
   * sku编码
   */
  skuCode: string;
  /**
   * 规格集合(和详情中specs的顺序一定要保持一致)
   */
  specs: SkusSpec[];
  [property: string]: any;
};

/**
 * 规格信息
 */
export type SkusSpec = {
  /**
   * 规格名称
   */
  name: string;
  /**
   * 可选值名称
   */
  valueName: string;
  [property: string]: any;
};

/**
 * 可选规格信息
 */
export type ResultSpec = {
  id: string;
  /**
   * 规格名称
   */
  name: string;
  /**
   * 可选值集合
   */
  values: Value[];
  [property: string]: any;
};

/**
 * 可选值信息
 */
export type Value = {
  /**
   * 是否可售
   */
  available?: boolean;
  /**
   * 可选值备注
   */
  desc: string;
  /**
   * 可选值名称
   */
  name: string;
  /**
   * 可选值图片链接
   */
  picture: null | string;
  [property: string]: any;
};
//#endregion
