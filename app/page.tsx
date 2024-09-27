import { Edge } from "./component/edge";
import Response from "./component/Response";
import { getResults } from "./services/getResult";
import 'charts.css';

// eslint-disable-next-line import/no-unused-modules
export default async function Home() {
  const registers = await getResults()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#283c50]">
      <header>
        <h1 className="text-4xl text-center">Analíticas de la encuesta sobre la Inteligencia Artificial</h1>
      </header>
      <main className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 row-start-2 items-center sm:items-start">
        <Edge registers={registers} />
        <Response registers={registers} index={0} />
        <Response registers={registers} index={1} />
        <Response registers={registers} index={2} />
        <Response registers={registers} index={3} />
      </main>
    </div>
  );
}
