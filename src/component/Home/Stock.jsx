
import React from "react";

export default function Stock() {
  return (
    <div className="space-y-4">

      {/* Top Tabs */}
      <div className="bg-white rounded-xl shadow flex text-xs overflow-hidden">
        <button className="flex-1 bg-purple-700 text-white py-2">
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
        <div className="flex-1 bg-purple-700 text-white rounded-lg p-2 text-center">
          <p className="text-xs">Total Stock In</p>
          <p className="font-semibold">89.0L</p>
        </div>

        <div className="flex-1 bg-purple-700 text-white rounded-lg p-2 text-center">
          <p className="text-xs">Total Stock Out</p>
          <p className="font-semibold">42.0L</p>
        </div>
      </div>

      {/* In & Out Transactions */}
      <div className="bg-white rounded-xl shadow p-3">

        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-sm">In & Out Transactions</h3>
          <button className="text-purple-700 text-xs font-semibold">
            + Add New
          </button>
        </div>

        <table className="w-full text-xs">
          <thead className="text-gray-500">
            <tr>
              <th className="text-left py-1">Date</th>
              <th className="text-left">Item</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Current</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr>
              <td>Mon, Feb 26</td>
              <td>Line 90 Pearl</td>
              <td className="text-green-600">Stock</td>
              <td>+20L</td>
              <td>48L</td>
            </tr>

            <tr>
              <td>Mon, Feb 26</td>
              <td>Clear Coat 2K</td>
              <td className="text-red-600">Used</td>
              <td>-5L</td>
              <td>55L</td>
            </tr>

            <tr>
              <td>Sun, Feb 25</td>
              <td>Standard</td>
              <td className="text-green-600">Restock</td>
              <td>+15L</td>
              <td>60L</td>
            </tr>

            <tr>
              <td>Sat, Feb 24</td>
              <td>Primer Filler 2K</td>
              <td className="text-red-600">Used</td>
              <td>-3L</td>
              <td>3L</td>
            </tr>
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

          <tbody className="text-gray-700">
            <tr>
              <td>Mon, Feb 26</td>
              <td>Line 90 Pearl</td>
              <td>28L</td>
              <td>10L</td>
              <td>AED 180/L</td>
            </tr>

            <tr>
              <td>Mon, Feb 26</td>
              <td>Clear Coat 2K</td>
              <td>60L</td>
              <td>15L</td>
              <td>AED 95/L</td>
            </tr>

            <tr>
              <td>Sun, Feb 25</td>
              <td>Standard</td>
              <td>15L</td>
              <td>15L</td>
              <td>AED 60/L</td>
            </tr>

            <tr>
              <td>Sat, Feb 24</td>
              <td>Primer Filler 2K</td>
              <td>5L</td>
              <td>5L</td>
              <td>AED 80/L</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}
