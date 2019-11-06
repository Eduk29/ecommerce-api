import joi from "joi"

const BrandSchema = joi.object().keys({
  id: joi
    .number()
    .integer()
    .required(),
  value: joi.string().required(),
  key: joi.string().required(),
  productsId: joi.array().items(),
})

const BrandListSchema = joi.array().items(BrandSchema)

export { BrandListSchema, BrandSchema }
