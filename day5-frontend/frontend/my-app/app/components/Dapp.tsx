"use client";

import { useEffect, useState } from "react";
import { getBlockchainValue } from "../../src/services/blockchain.service";
import Link from "next/link";

export default function Dapp() {
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    getBlockchainValue()
      .then(setValue)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded shadow space-y-4">
      <h2 className="font-semibold">Latest Value (Client)</h2>
      {value ? (
        <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}

      {/* Tombol navigasi */}
      <Link href="/">
        <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded">
          Latest Value(Server)
        </button>
      </Link>
    </div>
  );
}
