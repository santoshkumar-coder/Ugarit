import React, { useState } from "react";

function BrandConsumption() {
  const brands = [
    {
      name: "Sikkens",
      total: "6.6L",
      mix: "6.0L",
      usage: "0.5L",
      revenue: "AED 1078",
      color: "bg-purple-700",
      dot: "bg-purple-700"
    },
    {
      name: "Standox",
      total: "6.6L",
      mix: "6.0L",
      usage: "0.5L",
      revenue: "AED 1078",
      color: "bg-blue-700",
      dot: "bg-blue-700"
    }
  ];

  return (
    <div className="p-4 ">

      {/* Title */}
      <h2 className="text-purple-800 font-semibold mb-4">
        Brand - wise Consumption
      </h2>

      <div className="space-y-3">

        {brands.map((brand, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-3 shadow-md"
          >

            {/* Header */}
            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${brand.dot}`}></span>
                <span className="font-semibold text-gray-800">
                  {brand.name}
                </span>
              </div>

              <span className="font-semibold text-gray-800">
                {brand.total}
              </span>

            </div>

            {/* Progress Line */}
            <div className="w-full h-1 bg-gray-200 rounded mt-2">
              <div className={`h-1 rounded ${brand.color} w-[80%]`}></div>
            </div>

            {/* Footer */}
            <div className="flex justify-between text-xs text-gray-600 mt-2">

              <span>Mix: {brand.mix}</span>

              <span>Usage: {brand.usage}</span>

              <span className="text-purple-700 font-medium">
                Rev: {brand.revenue}
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

function MonthlySummary() {
  return (
    <div className="p-4 ">

      {/* Title */}
      <h2 className="text-purple-800 font-semibold mb-3">
        Monthly Summary
      </h2>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-4">

        {/* Month */}
        <p className="text-center font-medium text-gray-700 mb-3">
          February 2026
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">

          {/* Total Mixes */}
          <div className="bg-gray-100 rounded-md p-3 text-center">
            <div className="text-purple-700 text-xl">🎨</div>
            <p className="font-semibold text-gray-800">3</p>
            <p className="text-xs text-gray-500">Total Mixes</p>
          </div>

          {/* Revenue */}
          <div className="bg-gray-100 rounded-md p-3 text-center">
            <div className="text-green-600 text-xl">💳</div>
            <p className="font-semibold text-gray-800">AED 1456</p>
            <p className="text-xs text-gray-500">Total Mixes</p>
          </div>

          {/* Profit */}
          <div className="bg-gray-100 rounded-md p-3 text-center">
            <div className="text-blue-600 text-xl">📈</div>
            <p className="font-semibold text-gray-800">AED 416</p>
            <p className="text-xs text-gray-500">Profit</p>
          </div>

          {/* Non Sale */}
          <div className="bg-gray-100 rounded-md p-3 text-center">
            <div className="text-purple-700 text-xl">💧</div>
            <p className="font-semibold text-gray-800">2.8L</p>
            <p className="text-xs text-gray-500">Non scale usage</p>
          </div>

        </div>

      </div>
    </div>
  );
}



export default function Report() {
  const [activeTab, setActiveTab] = useState("date");

  return (
    <div className=" rounded-xl flex text-xs overflow-hidden">
      <div className="w-[370px] p-4 rounded-lg">
        {/* Header */}
        <h2 className="text-sm font-semibold text-[#81256C] mb-3">
          Mixing of paints
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 ">
          <div className="bg-white rounded-lg p-3">
            <p className="text-[#81256C] font-bold text-lg">23.4</p>
            <p className="text-xs text-gray-500">Total Mix</p>
          </div>

          <div className="bg-white rounded-lg p-3">
            <p className="text-[#81256C] font-bold text-lg">AED 52,730</p>
            <p className="text-xs text-gray-500">Total Revenue</p>
          </div>

          <div className="bg-white rounded-lg p-3">
            <p className="text-[#81256C] font-bold text-lg">AED 8,550</p>
            <p className="text-xs text-gray-500">Profit</p>
          </div>

          <div className="bg-white rounded-lg p-3">
            <p className="text-[#81256C] font-bold text-lg">AED 21,245</p>
            <p className="text-xs text-gray-500">Stock Impact</p>
          </div>
        </div>

        {/* Non Sale */}
        <div className="bg-white rounded-lg p-3 mt-3 flex justify-between text-sm">
          <span className="font-semibold text-[#81256C]">3.8L</span>
          <span className="text-gray-500">Non - sale Usage</span>
        </div>

        {/* Usage */}
        <div className="mt-4">
          <h3 className="text-xs text-[#81256C] mb-2">Usage Of Paints</h3>

          <div className="flex gap-2 mb-3 justify-between bg-white rounded-lg p-2">
            {["date", "brand", "monthly"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-xs ${
                  activeTab === tab
                    ? "bg-[#81256C] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {tab === "date"
                  ? "By Date"
                  : tab === "brand"
                    ? "By Brand"
                    : "Monthly"}
              </button>
            ))}
          </div>

          {/* Report Card */}
        {
          activeTab == "date" && (
            <>
              <div className="bg-white rounded-lg p-3 text-xs shadow-sm">
            {/* Date */}
            <p className="text-gray-500 mb-3 font-medium">Thu, Feb 19</p>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Card */}
              <div className="shadow-sm border-l-3 border-[#81256C]  rounded-md p-2 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-[#81256C] font-semibold">Skilens</span>
                  <span className="text-gray-500 text-[10px]">4 Mixes</span>
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="bg-purple-100 text-[#81256C] px-2 py-0.5 rounded text-[10px]">
                    AED 1,660
                  </span>

                  <span className="text-[#81256C] font-semibold text-[11px]">
                    7.2L
                  </span>
                </div>

                <p className="text-gray-400 text-[10px] mt-1">Revenue</p>
              </div>

              {/* Card */}
              <div className="shadow-sm border-l-3 border-green-500  rounded-md p-2 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-[#81256C] font-semibold">Standex</span>
                  <span className="text-gray-500 text-[10px]">2 Mixes</span>
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="bg-purple-100 text-[#81256C] px-2 py-0.5 rounded text-[10px]">
                    AED 847
                  </span>

                  <span className="text-[#81256C] font-semibold text-[11px]">
                    1.0L
                  </span>
                </div>

                <p className="text-gray-400 text-[10px] mt-1">Revenue</p>
              </div>

              {/* Card */}
              <div className="shadow-sm border-l-3 border-blue-500  rounded-md p-2 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-[#81256C] font-semibold">Holtex</span>
                  <span className="text-gray-500 text-[10px]">3 Mixes</span>
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="bg-purple-100 text-[#81256C] px-2 py-0.5 rounded text-[10px]">
                    AED 1,253
                  </span>

                  <span className="text-[#81256C] font-semibold text-[11px]">
                    7.0L
                  </span>
                </div>

                <p className="text-gray-400 text-[10px] mt-1">Usage</p>
              </div>

              {/* Card */}
              <div className="shadow-sm border-l-3 border-[#81256C]  rounded-md p-2 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-[#81256C] font-semibold">
                    HoltexLux
                  </span>
                  <span className="text-gray-500 text-[10px]">3 Mixes</span>
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="bg-purple-100 text-[#81256C] px-2 py-0.5 rounded text-[10px]">
                    AED 1,253
                  </span>

                  <span className="text-[#81256C] font-semibold text-[11px]">
                    0.5L
                  </span>
                </div>

                <p className="text-gray-400 text-[10px] mt-1">Usage</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 bg-gray-100 rounded-md p-2 flex justify-between text-[11px]">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-[#81256C]">4 Mixes</span>
                <span className="text-gray-500">Revenue</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-semibold text-[#81256C]">AED 1,660</span>
                <span className="text-gray-500">Revenue</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-semibold text-blue-600">2.8L</span>
                <span className="text-gray-500">Usage</span>
              </div>
            </div>
          </div>
            </>
          )
        }
        {
          activeTab === "brand" && (
            <BrandConsumption/>
          )
        }

        {
          activeTab === "monthly" && (
            <MonthlySummary/>
          )
        }
        </div>
      </div>
    </div>
  );
}
