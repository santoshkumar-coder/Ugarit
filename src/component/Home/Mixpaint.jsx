import React from 'react'

function Mixpaint() {
  return (
   <>
     <div className="bg-white rounded-2xl shadow-lg p-4 space-y-3">
          {/* Meter Name */}
          <div>
            <label className="text-sm font-medium text-purple-800">Meter Name:</label>
            <input
              type="text"
              placeholder="Enter customer name"
              className="w-full mt-1 border rounded-lg bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Vehicle */}
          <div>
            <label className="text-sm font-medium text-purple-800">
              Vehicle Make & Model (Optional)
            </label>
            <input
              type="text"
              placeholder="Enter Vehicle code or Model"
              className="w-full mt-1 border rounded-lg bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Colour Code */}
          <div>
            <label className="text-sm font-medium text-purple-800">
              Colour Code / Colour Name
            </label>
            <input
              type="text"
              placeholder="Enter Colour code or name"
              className="w-full mt-1 border bg-gray-100 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Paint Type */}
          <div>
            <div className="flex justify-between text-sm ">
              <label className="font-medium text-purple-800">Paint Type</label>
              <span className="text-purple-600 cursor-pointer text-xs">
                + Create new
              </span>
            </div>

            <select className="w-full mt-1 border bg-gray-100 rounded-lg px-3 py-2 text-sm">
              <option>Select Paint Type</option>
            </select>
          </div>

          {/* Brand */}
          <div>
            <div className="flex justify-between text-sm">
              <label className="font-medium text-purple-800">Brand</label>
              <span className="text-purple-600 cursor-pointer text-xs">
                + Create new
              </span>
            </div>

            <select className="w-full mt-1 border bg-gray-100 rounded-lg px-3 py-2 text-sm">
              <option>Select Brand type</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm font-medium text-purple-800">Quantity Mixed</label>
            <input
              type="text"
              placeholder="Enter Quantity Mixed"
              className="w-full mt-1 border rounded-lg bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Remarks */}
          <div>
            <label className="text-sm font-medium text-purple-800">Remarks (if any):</label>
            <textarea
              rows="3"
              className="w-full mt-1 border bg-gray-100 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-purple-700 text-white py-2 rounded-lg font-medium mt-2">
            + Create Mix
          </button>
        </div>
   </>
  )
}

export default Mixpaint