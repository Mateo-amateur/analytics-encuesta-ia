"use client"

import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts'
import { Card } from "./Card"
import { CardHeader } from './CardHeader'
import { CardTitle } from './CardTitle'
import { CardContent } from './CardContent'

type Register = {
  userEdge: number
}

type data = {
  name: string
  edge: number
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function Edge({ registers }: { registers: Register[] }) {
  if (registers === undefined || registers.length === 0) {
    return (
      <Card className="w-full max-w-3xl mx-auto bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Edge Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">No data available</p>
        </CardContent>
      </Card>
    )
  }

  // Process data for the chart
  const edges = registers.reduce((acc, register) => {
    const existingEdge = acc.find(i => i.name === register.userEdge.toString())
    if (existingEdge) {
      existingEdge.edge++
    } else {
      acc.push({ name: register.userEdge.toString(), edge: 1 })
    }
    return acc
  }, [] as data[])

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius * 0.8
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <Card className="w-full max-w-96 bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Edge Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width={400} height={500}>
            <Pie
              data={edges}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="edge"
            >
              {edges.map((entry, index) => {
                return (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                )
              })}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}