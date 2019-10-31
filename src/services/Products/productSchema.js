import joi from "joi"

export const productSchema = joi.object().keys({
  id: joi
    .number()
    .integer()
    .required(),
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.string().required(),
  url: joi.string().required(),
  stock: joi
    .number()
    .integer()
    .required(),
  brandId: joi
    .number()
    .integer()
    .required(),
  categoryId: joi
    .number()
    .integer()
    .required(),
})
