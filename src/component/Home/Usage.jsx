import React,{ useState } from 'react'

function Usage() {
   const [mode, setMode] = useState("stock");
   const [paintOption, setPaintOption] = useState(false)

  return (
    <>
    <div className="space-y-4">

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow p-4">

        <h2 className="font-semibold text-gray-700 mb-3">
          Record Paint Usage
        </h2>

        {/* Toggle Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMode("stock")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium 
            ${mode === "stock"
                ? "bg-[#81256C] text-white"
                : "border text-gray-600"
            }`}
          >
            ☰ From Stock
          </button>

          <button
            onClick={() => setMode("entry")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium 
            ${mode === "entry"
                ? "bg-purple-700 text-white"
                : "border text-gray-600"
            }`}
          >
            ＋ New Entry
          </button>
        </div>

        {/* Select Paint */}
        <div className="mb-3">
          <label className="text-xs font-semibold text-gray-500">
            SELECT PAINT
          </label>
          <input onClick={()=>setPaintOption(true)} placeholder='select the paint' className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"/>
         
          
        </div>

        {/* Quantity */}
        <div className="mb-3">
          <label className="text-xs font-semibold text-gray-500">
            QUANTITY
          </label>
          <input
            type="text"
            placeholder="Enter quantity used"
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
          />
        </div>

        {/* Reason */}
        <div className="mb-3">
          <label className="text-xs font-semibold text-gray-500">
            REASON REQUIRED
          </label>
          <select className="w-full border rounded-lg px-3 py-2 mt-1 text-sm">
            <option>Select reason for usage</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="text-xs font-semibold text-gray-500">
            NOTES
          </label>
          <textarea
            rows="3"
            placeholder="Additional Information"
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
          />
        </div>
      </div>

      {/* Record Button */}
      <button className="w-full border-2 border-[#81256C] text-[#81256C] py-2 rounded-lg font-medium bg-white">
        ✔ Record Usage
      </button>

      {/* Recent Usage */}
      <div>
        <h3 className="text-sm font-semibold text-[#81256C] mb-2">
          Recent Usage
        </h3>

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-3 mb-2">
          <div className="flex justify-between text-sm font-medium">
            <p>Autobase Plus Black</p>
            <p className="text-[#81256C]">0.5L</p>
          </div>

          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded mt-1 inline-block">
            Machine Tint Change
          </span>

          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <p>Changed machine from white to black</p>
            <p>2/9/2026</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-3">
          <div className="flex justify-between text-sm font-medium">
            <p>Thinner NC</p>
            <p className="text-[#81256C]">2L</p>
          </div>

          <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded mt-1 inline-block">
            Internal Use
          </span>

          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <p>Cleaning spray guns</p>
            <p>2/7/2026</p>
          </div>
        </div>

      </div>
    </div>

    {
        paintOption && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <div className="bg-white rounded-lg p-4 w-[300px]">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">
                        Select Paint from Stock
                    </h2>
                    <ol onClick={()=> setPaintOption(false)} className='list-none space-y-1.5  text-gray-600'>
                        <li>Sikkens - Auto Plus White</li>
                        <li>Sikkens - Auto Plus Black</li>
                        <li>Sikkens - Auto Plus Red</li>
                        <li>Sikkens - Auto Plus Silver</li>
                        <li>Sikkens - Auto Plus Basecoat</li>
                    </ol>
                </div>
            </div>
        )
    }
    </>
  );
}

export default Usage