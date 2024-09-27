import { Edge } from "./component/edge";
import { getResults } from "./services/getResult";
import 'charts.css';

// eslint-disable-next-line import/no-unused-modules
export default async function Home() {
  const registers = await getResults()
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-4xl text-center">Analíticas de la encuesta sobre la Inteligencia Artificial</h1>
      </header>
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Edge registers={registers} />
      </main>
    </div>
  );
}
