"use client";
import React, { useEffect, useState } from "react";

type Divition = {
  _id: string;
  name: string;
  bn_name: string;
};

export default function FindDonor({ divisions }: { divisions: Divition[] }) {
  const [location, setLocation] = useState({
    division: "",
    district: "",
    upazila: "",
  });
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  useEffect(()=>{
    if(location.division){
      fetch(`/api/districts?division=${location.division}`)
      .then((res) => res.json())
      .then((data) => setDistricts(data));
    }
    if(location.district){
        fetch(`/api/upazilas?district=${location.district}`)
        .then((res) => res.json())
        .then((data) => setUpazilas(data));
    }
  },[location])

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
          {districts.length === 0 ? "Select Divition First" : "Select District"}
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
          {districts.length === 0 ? "Select District First" : "Select Uppazila"}
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
