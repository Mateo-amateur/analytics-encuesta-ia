import { getResults } from "../services/getResult"

type dataItem = {
  name: string
  respuestas: number
}

export async function getResultByQuestion(id:number) {
  const registers = await getResults()
  const data: dataItem[] = []
  for (const response of registers) {
    let res = response.response1
    if (id === 2) res = response.response2
    if (id === 3) res = response.response3
    if (id === 4) res = response.response4
    const existingResponse = data.find(i => i.name === res.toString())
    if (existingResponse) {
      existingResponse.respuestas++
    } else {
      data.push({ name: res.toString(), respuestas: 1 })
    }
  }
  return data
}