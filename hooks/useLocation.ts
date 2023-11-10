import { useEffect, useState } from "react";

type Location = {
  division: string;
  district: string;
  upazila: string;
};

export default function useLocation(location: Location) {
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
    if (location.division) {
      fetch(`/api/districts?division=${location.division}`)
        .then((res) => res.json())
        .then((data) => setLocationList({ ...locationList, districts: data }))
        .catch(console.log);
    }
    if (location.district) {
      fetch(`/api/upazilas?district=${location.district}`)
        .then((res) => res.json())
        .then((data) => setLocationList({ ...locationList, upazilas: data }))
        .catch(console.log);
    }
  }, [location]);

  return locationList;
}
