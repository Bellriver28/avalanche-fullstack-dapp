import { getBlockchainValue, getBlockchainEvents } from "../src/services/blockchain.service";
import BlockchainValue from "./BlockchainValue";

export default async function HomePage() {
  const value = await getBlockchainValue();
  const events = await getBlockchainEvents();

  return (
    <main className="p-6 space-y-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold">Blockchain Data</h1>

      {/* Server Component */}
      <section className="bg-gray-900 p-4 rounded shadow">
        <h2 className="font-semibold">Latest Value (Server)</h2>
        <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>
      </section>

      <section className="bg-gray-900 p-4 rounded shadow">
        <h2 className="font-semibold">Events (Server)</h2>
        <pre className="text-xs">{JSON.stringify(events, null, 2)}</pre>
      </section>

      {/* Client Component */}
      <section className="bg-gray-900 p-4 rounded shadow">
        <h2 className="font-semibold">Change Value (Client)</h2>
        <BlockchainValue />
      </section>
    </main>
  );
}
