import { APIBaseURL } from "../../configs/APIBaseUrl"

export const getAll = () => {
  return fetch(`${APIBaseURL}/categories`)
    .then(response => response.json())
    .then(body => body)
}
