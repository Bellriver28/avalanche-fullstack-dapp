// app/page.tsx
import { getBlockchainValue, getBlockchainEvents } from "../src/services/blockchain.service";
import Link from "next/link";

export default async function HomePage() {
  // Server-side fetch
  const value = await getBlockchainValue();
  const events = await getBlockchainEvents();

  return (
    <main className="p-6 space-y-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold">Blockchain Data</h1>

      {/* Server Component: Latest Value */}
      <section className="bg-gray-900 p-4 rounded shadow">
        <h2 className="font-semibold">Latest Value (Server)</h2>
        <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>
      </section>

      {/* Server Component: Events */}
      <section className="bg-gray-900 p-4 rounded shadow">
        <h2 className="font-semibold">Events (Server)</h2>
        <pre className="text-xs">{JSON.stringify(events, null, 2)}</pre>
      </section>

      {/* Client Component: Tombol navigasi ke Dapp */}
      <section className="bg-gray-900 p-4 rounded shadow">
        <h2 className="font-semibold">Client Interaction</h2>
        <Link href="/dapp">
          <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded">
            Go to Dapp Page(client)
          </button>
        </Link>
      </section>
    </main>
  );
}
