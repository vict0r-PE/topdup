import Joi from "joi";
export const schema = Joi.object().keys({
  _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  password: Joi.string().regex(/^.{8,}$/),
  adminId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  productId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  categoryId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  seoId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  page: Joi.string(),
  quantity: Joi.string(),
  promotionId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  bannerId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  fbToken: Joi.string(),
  ggToken: Joi.string(),
  ggId: Joi.string(),
  //=======================Login - register=================//
  name: Joi.string(),
  phoneNumber: Joi.string().min(9).max(13),
  deviceName: Joi.string(),
  fbId: Joi.string(),
  ggId: Joi.string(),
  /*
    Password Regex:
    Password cần chứa ít nhất 1 chữ số, 1 kí tự viết thường, 1 kí tự viết hoa
    và password phải có ít nhất 8 kí tự
  */
  // Admin
  //=========Product==========//
  sale_title: Joi.string(),
  link: Joi.string(),
  image: Joi.string(),
  imageName: Joi.string(),
  sale_price: Joi.number(),
  start: Joi.number(),
  end: Joi.number(),
  stage: Joi.number(),
  //===========SEO==============//
  title: Joi.string(),
  content: Joi.string(),
  tags: Joi.array(),
  //===========Promotion===============//
  url: Joi.string(),
  name: Joi.string(),
  code: Joi.string(),

  //================Banner==============//
  position: Joi.number(),
  type: Joi.string(),
  // ================== search ================/
  keyword: Joi.string().max(20),

});
