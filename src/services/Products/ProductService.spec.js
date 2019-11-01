import request from "supertest"
import fetch from "node-fetch"
import { APIBaseURL } from "../../configs/APIBaseUrl"
import { ProductListSchema } from "../../schemas/products.schema"

import * as productService from "./ProductsService"

const api = request(APIBaseURL)
global.fetch = fetch

describe("Testing Products API", () => {
  it("should API return 200", () => {
    api.get("/products").expect(200)
  })

  it("should API return an array", () => {
    api
      .get("/products")
      .expect(200)
      .end((req, res) => {
        expect(Array.isArray(res.body)).toBe(true)
      })
  })

  it("should API match list schema", async () => {
    const { body } = await api.get("/products").expect(200)
    const { error } = ProductListSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })

  it("should service getAll match list schema", async () => {
    const body = await productService.getAll()
    const { error } = ProductListSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })

  it("should service call match list schema", async () => {
    const body = await productService.getAllByFilter("id=1")
    const { error } = ProductListSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })
})
