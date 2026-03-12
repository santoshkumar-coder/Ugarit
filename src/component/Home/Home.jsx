import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import mix_paint from "../utils/homepage/mix_paint.svg";
import report from "../utils/homepage/report.svg";
import stock from "../utils/homepage/stock.svg";
import usage from "../utils/homepage/usage.svg";
import Mixpaint from "./Mixpaint";
import Usage from "./Usage";
import Stock from "./Stock";
import Reports from "./Report";
export default function Home() {
  const [activeTab, setActiveTab] = useState("mix");
  return (
    <div className="h bg-white flex justify-center items-center">
      {/* Mobile Container */}
      <div className="w-full sm:w-[370px] min-h-screen bg-gradient-to-b from-purple-400 to-yellow-600 px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 text-white mb-4">
          <ArrowLeft size={20} />
          <h1 className="text-lg font-semibold">Mix Paint</h1>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow flex justify-between p-2 mb-4">
          <div
            onClick={() => setActiveTab("mix")}
            className={`text-center cursor-pointer ${activeTab === "mix" ? "text-purple-800" : "text-gray-500"}`}
          >
            <img src={mix_paint} alt="" className="mx-auto" />
            <p className="text-xs px-3">Mix Paint</p>
          </div>

          <div
            onClick={() => setActiveTab("usage")}
            className={`text-center cursor-pointer ${activeTab === "usage" ? "text-purple-800" : "text-gray-500"}`}
          >
            <img src={usage} alt="" stroke="currentColor" className={`mx-auto ${activeTab === "usage" ? "text-purple-800" : "text-gray-500"}`} />
            <p className="text-xs px-3">Usage</p>
          </div>

          <div
            onClick={() => setActiveTab("stock")}
            className={`text-center cursor-pointer ${activeTab === "stock" ? "text-purple-800" : "text-gray-500"}`}
          >
            <img src={stock} alt="" className="mx-auto" />
            <p className="text-xs px-3">Stock</p>
          </div>

          <div
            onClick={() => setActiveTab("report")}
            className={`text-center cursor-pointer ${activeTab === "report" ? "text-purple-800" : "text-gray-500"}`}
          >
            <img src={report} alt="" className="mx-auto" />
            <p className="text-xs px-3">Reports</p>
          </div>
        </div>

        {/* Form Card */}
        {activeTab === "mix" && <Mixpaint />}
        {activeTab === "usage" && <Usage />}
   
     
        {activeTab === "stock" && <Stock />}
        {activeTab === "report" && <Reports />}
      </div>
    </div>
  );
}
