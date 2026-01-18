'use client';

import { useState } from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useReadContract,
  useWriteContract,
} from 'wagmi';
import { injected } from 'wagmi/connectors';

const CONTRACT_ADDRESS = '0x6cdd17e67679650bb637345f9511a8f4b703a0d3';

const ABI = [
  { name: 'getValue', type: 'function', stateMutability: 'view', inputs: [], outputs: [{ type: 'uint256' }] },
  { name: 'setValue', type: 'function', stateMutability: 'nonpayable', inputs: [{ type: 'uint256' }], outputs: [] },
];

export default function Dapp() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [inputValue, setInputValue] = useState('');

  const { data: value, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: 'getValue',
  });

  const { writeContract, isPending } = useWriteContract();

  return (
    <div className="max-w-md border border-gray-700 rounded-lg p-6 space-y-4">
      <h2 className="font-bold">Wallet dApp</h2>

      {!isConnected ? (
        <button onClick={() => connect({ connector: injected() })} className="bg-white text-black px-4 py-2 rounded">
          Connect Wallet
        </button>
      ) : (
        <>
          <p className="text-xs">{address}</p>
          <button onClick={() => disconnect()} className="text-red-400 text-sm underline">Disconnect</button>
        </>
      )}

      <p className="text-xl">Value: {value?.toString()}</p>
      <button onClick={() => refetch()} className="underline text-sm">Refresh</button>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 bg-black border border-gray-600 rounded"
      />

      <button
        onClick={() =>
          writeContract({
            address: CONTRACT_ADDRESS,
            abi: ABI,
            functionName: 'setValue',
            args: [BigInt(inputValue)],
          })
        }
        disabled={isPending}
        className="w-full bg-blue-600 py-2 rounded"
      >
        Set Value
      </button>
    </div>
  );
}

