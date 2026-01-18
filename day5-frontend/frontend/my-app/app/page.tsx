import Dapp from "@/components/Dapp";
import {
  getBlockchainValue,
  getBlockchainEvents,
} from "@/services/blockchain.service";

export default async function HomePage() {
  const value = await getBlockchainValue();
  const events = await getBlockchainEvents();

  return (
    <main className="p-6 space-y-6 bg-black min-h-screen text-white">
      <h1 className="text-xl font-bold">Blockchain Data (Server)</h1>

      <section>
        <h2 className="font-semibold">Latest Value</h2>
        <pre className="text-xs bg-gray-900 p-3 rounded">
          {JSON.stringify(value, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="font-semibold">Events</h2>
        <pre className="text-xs bg-gray-900 p-3 rounded">
          {JSON.stringify(events, null, 2)}
        </pre>
      </section>

      {/* Client dApp */}
      <Dapp />
    </main>
  );
}
