import { useEffect, useState } from "react";
// const locationList = {
//   english: {
//     Dhaka: {},
//     Chittagong: {},
//     Rajshahi: {},
//     Khulna: {},
//     Barisal: {},
//     Sylhet: {},
//     Rangpur: {},
//     Mymensingh: {},
//   },
//   bangla: {
//     ঢাকা: {},
//     চট্টগ্রাম: {},
//     রাজশাহী: {},
//     খুলনা: {},
//     বরিশাল: {},
//     সিলেট: {},
//     রংপুর: {},
//     ময়মনসিংহ: {},
//   },
// };

export default function useSelectLocation() {
  const [selectedLocation, setSelectedLocation] = useState({
    division: "",
    district: "",
    upazila: "",
  });

  const [locationList, setLocationList] = useState({
    divisions: [],
    districts: [],
    upazilas: [],
  });

  useEffect(() => {
    fetch("/api/divisions", { cache: "force-cache" })
      .then((res) => res.json())
      .then((data) => setLocationList({ ...locationList, divisions: data }))
      .catch(console.log);
    if (selectedLocation.division) {
      fetch(`/api/districts?division=${selectedLocation.division}`)
        .then((res) => res.json())
        .then((data) => setLocationList({ ...locationList, districts: data }))
        .catch(console.log);
    }
    if (selectedLocation.district) {
      fetch(`/api/upazilas?district=${selectedLocation.district}`)
        .then((res) => res.json())
        .then((data) => setLocationList({ ...locationList, upazilas: data }))
        .catch(console.log);
    }
  }, [selectedLocation]);

  return { selectedLocation, setSelectedLocation, ...locationList };
}
