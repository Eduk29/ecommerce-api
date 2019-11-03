import joi from "joi"

const CategorySchema = joi.object().keys({
  id: joi
    .number()
    .integer()
    .required(),
  value: joi.string().required(),
  key: joi.string().required(),
})

const CategoryListSchema = joi.array().items(CategorySchema)

export { CategoryListSchema, CategorySchema }
