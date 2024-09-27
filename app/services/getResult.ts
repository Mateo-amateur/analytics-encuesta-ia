import { Register } from "../types"

export async function getResults() {
  return fetch("https://encuesta-enj.api.mateoapiana.website/register", { cache: 'no-store' })
  .then(res=> res.json())
  .then((data: Register[])=> {
    return data
  })
}