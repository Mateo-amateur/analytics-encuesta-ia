import { BackArrowIcon } from "../component/Icons"
import questions from "../questions.json"
import Link from "next/link"
import { getResultByQuestion } from "../services/getResultByQuestion"

export default async function Details({ params }: { params: { id: string } }) {
  const { id } = params
  const question = questions.questions.find(q => q.id === Number(id) + 1)
  const data = await getResultByQuestion(Number(id))
  let total = 0
  for (const r of data) {
    total += r.respuestas
  }
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#283c50]">
      <Link href="/" style={{ top: "calc(100dvh - 56px)" }} className="fixed right-14">
        <BackArrowIcon />
      </Link>

      <h1 className="text-2xl">{question?.question}</h1>
      <ul className="flex flex-col gap-2">
        {question?.options.map((o) => {

          const quantity = data.find(r => r.name === o.value)
          const porcentaje = typeof quantity?.name === "string"
            ? Number(quantity?.respuestas) / total * 100
            : 0
          return (
            <li className="flex justify-between items-center p-2 border-2 border-blue-200 rounded-3xl" key={o.value} >
              <div style={{ width: `${porcentaje}%`, backgroundColor: porcentaje ? "" : "transparent" }} className="bg-blue-500 text-blue-100 rounded-2xl p-3">
                {o.text}
              </div>
              {porcentaje}%
            </li>
          )
        })}
      </ul>
    </div>
  )
}