import request from "supertest"
import { APIBaseURL } from "../../configs/APIBaseUrl"
import { ProductListSchema, ProductSchema } from "../../schemas/products.schema"

const api = request(APIBaseURL)

describe("Testing Products API", () => {
  it("should return 200", () => {
    api.get("/products").expect(200)
  })

  it("should return an array", () => {
    api
      .get("/products")
      .expect(200)
      .end((req, res) => {
        expect(Array.isArray(res.body)).toBe(true)
      })
  })

  it("should match list schema", async () => {
    const { body } = await api.get("/products").expect(200)
    const { error } = ProductListSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })

  it("should match schema", async () => {
    const { body } = await api.get("/products/1").expect(200)
    const { error } = ProductSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })
})
