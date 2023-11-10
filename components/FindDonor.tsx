"use client";
import React, { useEffect, useState } from "react";
import useLocation from "@/hooks/useLocation";

type Divition = {
  _id: string;
  name: string;
  bn_name: string;
};

export default function FindDonor() {
  const [location, setLocation] = useState({
    division: "",
    district: "",
    upazila: "",
  });

  const { divisions, districts, upazilas } = useLocation(location); //custom hook

  return (
    <form>
      <select
        name="divition"
        className="px-3 py-1 border"
        onChange={(e) =>
          setLocation((prev) => ({ ...prev, division: e.target.value }))
        }
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
        className="px-3 py-1 border"
        onChange={(e) =>
          setLocation((prev) => ({ ...prev, district: e.target.value }))
        }
      >
        <option className="hidden" value="0">
          {location.division ? "Select District" : "Select Divition First"}
        </option>
        {districts.map(({ _id, name }, index) => (
          <option key={index} value={_id}>
            {name}
          </option>
        ))}
      </select>
      <select
        name="upazila"
        className="px-3 py-1 border"
        onChange={(e) =>
          setLocation((prev) => ({ ...prev, upazila: e.target.value }))
        }
      >
        <option className="hidden" value="0">
          {location.district ? "Select Uppazila" : "Select District First"}
        </option>
        {upazilas.map(({ _id, name }, index) => (
          <option key={index} value={_id}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
}
