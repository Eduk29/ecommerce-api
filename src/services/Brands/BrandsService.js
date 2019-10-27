import { APIBaseURL } from "../../configs/APIBaseUrl"

export const getAll = () => {
  return fetch(`${APIBaseURL}/brands`)
    .then(response => response.json())
    .then(body => body)
}
