"use client"

import { Register } from "../types"
import { Card } from "./Card"
import { CardContent } from "./CardContent"
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle"
import { questions } from "../questions.json"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import users from "../mocks/users.json"

export default function Response({ registers, index }: { registers: Register[], index: number }) {
  registers = users
  type dataItem = {
    name: string
    respuestas: number
  }
  const data: dataItem[] = []
  for (const response of registers) {
    let res = response.response1
    if (index === 2) res = response.response2
    if (index === 3) res = response.response3
    if (index === 4) res = response.response4
    const existingResponse = data.find(i => i.name === res.toString())
    if (existingResponse) {
      existingResponse.respuestas++
    } else {
      data.push({ name: res.toString(), respuestas: 1 })
    }
  }

  const Colors = [
    "#70acdb",
    "#ffb300",
    "#00FFBF",
    "#ff8000"
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{questions[index]?.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="respuestas" fill={Colors[index]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}