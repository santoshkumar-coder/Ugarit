
import React from "react";

export default function Stock() {
  return (
    <div className="space-y-4">

      {/* Top Tabs */}
      <div className="bg-white rounded-xl shadow flex text-xs overflow-hidden">
        <button className="flex-1 bg-[#81256C] text-white py-2">
          Material In & Out
        </button>
        <button className="flex-1 text-gray-600 py-2">
          New Stock Entry
        </button>
        <button className="flex-1 text-gray-600 py-2">
          Stock Items Display
        </button>
      </div>

      {/* Stock Summary */}
      <div className="flex gap-3">
        <div className="flex-1 bg-[#81256C] text-white rounded-lg p-2 text-center">
          <p className="text-xs">Total Stock In</p>
          <p className="font-semibold">89.0L</p>
        </div>

        <div className="flex-1 bg-[#81256C] text-white rounded-lg p-2 text-center">
          <p className="text-xs">Total Stock Out</p>
          <p className="font-semibold">42.0L</p>
        </div>
      </div>

      {/* In & Out Transactions */}
      <div className="bg-white rounded-xl shadow p-3">

        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xs">In & Out <span className="text-[#81256C]"
          >Transactions</span></h3>
          <button className="text-white bg-[#81256C] px-2 py-1 rounded-lg border border-[#81256C] text-xs font-semibold">
            + Add New
          </button>
        </div>

        <table className="w-full text-xs ">
          <thead className="text-gray-500">
            <tr className="bg-purple-100 ">
              <th className="text-left py-1">Date</th>
              <th className="text-left">Item</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Current</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 [&>tr>td]:py-0.5">
           {
            Array(5).fill(0).map((_, i) => (
               <tr className="py-1.5">
              <td>Mon, Feb 26</td>
              <td>Line 90 Pearl</td>
              <td className="text-green-600 text-center ">Stock</td>
              <td className="text-center">+20L</td>
              <td className="text-center">48L</td>
            </tr>
            ))
           }

           
          </tbody>
        </table>

        <p className="text-purple-700 text-xs mt-2 cursor-pointer">
          Show More
        </p>
      </div>

      {/* Stock Items Display */}
      <div className="bg-white rounded-xl shadow p-3">

        <h3 className="font-semibold text-sm mb-2">Stock Items Display</h3>

        <table className="w-full text-xs">
          <thead className="text-gray-500">
            <tr>
              <th className="text-left py-1">Date</th>
              <th className="text-left">Item</th>
              <th>Avail</th>
              <th>Min</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 [&>tr>td]:py-0.5">
            {
              Array(3).fill(0).map((_, i) => (
                <tr>
              <td>Mon, Feb 26</td>
              <td>Line 90 Pearl</td>
              <td className='text-center'>28L</td>
              <td className='text-center'>10L</td>
              <td className='text-center'>AED 180/L</td>
            </tr>))
            }

            
          </tbody>
        </table>

      </div>

    </div>
  );
}
