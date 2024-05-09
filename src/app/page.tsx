import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center text-2xl">NextJs PWA app</h1>
      <br />
      <div className="flex gap-2">
        <Link href={"/todo"} className="p-2 rounded bg-amber-400 text-black font-bold" >TODO</Link>
        <Link href={"/color"} className="p-2 rounded bg-amber-400 text-black font-bold" >COLOR</Link>
        <Link href={"/sum"} className="p-2 rounded bg-amber-400 text-black font-bold" >SUM</Link>
      </div>
    </main>
  );
}
