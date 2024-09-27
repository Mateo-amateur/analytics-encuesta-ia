export interface Register {
  id:           number
  response1:    number
  response2:    number
  response3:    number
  response4:    number
  userEdge:     number
  userlastname: string
  username:     string
}

type Option = {
  value: string
  text: string
}

type Question = {
  id: number
  question: string
  options: Option[]
}
