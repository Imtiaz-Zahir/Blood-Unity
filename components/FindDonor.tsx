"use client";
import React from "react";
import useSelectLocation from "@/hooks/useSelectLocation";

export default function FindDonor() {
  const {
    selectedLocation,
    setSelectedLocation,
    divisions,
    districts,
    upazilas,
  } = useSelectLocation(); //custom hook

  return (
    <form className="flex flex-col lg:flex-row items-center justify-center gap-5 text-xl font-semibold p-20">
      <select
        name="divition"
        className="py-3 px-5 border-2 border-black rounded"
        onChange={(e) =>
          setSelectedLocation((prev) => ({ ...prev, division: e.target.value,district:"",upazila:"" }))
        }
        value={selectedLocation.division}
        required
      >
        <option className="hidden" value="0">
          Select Divition
        </option>
        {divisions.map(({ _id, name }, index) => (
          <option key={index} value={_id}>
            {name}
          </option>
        ))}
      </select>
      <select
        name="district"
        className="py-3 px-5 border-2 border-black rounded"
        onChange={(e) =>
          setSelectedLocation((prev) => ({ ...prev, district: e.target.value,upazila:"" }))
        }
        value={selectedLocation.district}
      >
        <option className="hidden" value="0">
          {selectedLocation.division ? "Select District" : "Select Divition First"}
        </option>
        {districts.map(({ _id, name }, index) => (
          <option key={index} value={_id}>
            {name}
          </option>
        ))}
      </select>
      <select
        name="upazila"
        className="py-3 px-5 border-2 border-black rounded"
        onChange={(e) =>
          setSelectedLocation((prev) => ({ ...prev, upazila: e.target.value }))
        }
        value={selectedLocation.upazila}
      >
        <option className="hidden" value="0">
          {selectedLocation.district ? "Select Uppazila" : "Select District First"}
        </option>
        {upazilas.map(({ _id, name }, index) => (
          <option key={index} value={_id}>
            {name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="py-3 px-5 bg-red-600 hover:bg-blue-900 transition-all text-white rounded uppercase font-semibold flex gap-2 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4"
        >
          <path
            fill="#fff"
            d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
          ></path>
        </svg>
        Find Donors
      </button>
    </form>
  );
}
