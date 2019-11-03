import request from "supertest"
import fetch from "node-fetch"
import { APIBaseURL } from "../../configs/APIBaseUrl"
import { CategoryListSchema } from "../../schemas/categories.schema"

import * as categoriesService from "./CategoriesService"

const api = request(APIBaseURL)
global.fetch = fetch

describe("Testing Brand API", () => {
  it("should API return 200", () => {
    api.get("/categories").expect(200)
  })

  it("should API return an array", () => {
    api
      .get("/categories")
      .expect(200)
      .end((req, res) => {
        expect(Array.isArray(res.body)).toBe(true)
      })
  })

  it("should API match list schema", async () => {
    const { body } = await api.get("/categories").expect(200)
    const { error } = CategoryListSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })

  it("should service getAll match list schema", async () => {
    const body = await categoriesService.getAll()
    const { error } = CategoryListSchema.validate(body)
    if (error) throw new Error(`Schema Error: ${error.message}`)
  })
})
