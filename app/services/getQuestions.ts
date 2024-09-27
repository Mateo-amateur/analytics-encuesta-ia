import { Question } from "../types"

export async function getQuestions() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/questions.json`)
  const json: {questions: Question[]} = await res.json()
  return json
}