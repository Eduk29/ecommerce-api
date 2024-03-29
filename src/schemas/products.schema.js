import joi from "joi"

const ProductSchema = joi.object().keys({
  id: joi
    .number()
    .integer()
    .required(),
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.string().required(),
  urlImage: joi.string().required(),
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

const ProductListSchema = joi.array().items(ProductSchema)

export { ProductListSchema, ProductSchema }
