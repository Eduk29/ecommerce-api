// import joi from "joi"
import request from "supertest"

const api = request("https://my-json-server.typicode.com/eduk29/ecommerce/")

describe("Testing Product API", () => {
  it("Return 200", () => {
    api.get("/products").expect(200)
  })

  it("Returns an Array", () => {
    api
      .get("/products")
      .expect(200)
      .end((req, res) => {
        expect(Array.isArray(res.body)).toBe(true)
      })
  })

  // it('Returns at least 1 item', () => {
  //     return api.get('/products', async (req, res, next) => {
  //         const { body } = res;
  //         const productSchema = joi.object().keys({
  //             id: joi.number().integer().required(),
  //             name: joi.string().required(),
  //             description: joi.string().required(),
  //             price: joi.string().required(),
  //             url: joi.string().required(),
  //             stock: joi.number().integer().required(),
  //             brandId: joi.number().integer().required(),
  //             categoryId: joi.number().integer().required()
  //         })

  //         const result = Joi.validate(body, productSchema);

  //         const { value, error} = result;
  //         await console.log(value);
  //         return result
  //     })
  // })
})
