import React, { useEffect, useState } from "react";
const HealthTip = () => {
  const [tip, setTip] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/healtTip`)
      .then(res => res.json())
      .then(data => setTip(data.Tip))
      .catch(() => setTip("Error fetching health tip"));
  }, []);
  return (
    <div>
      <h2>Health Tip</h2>
      <p>{tip}</p>
    </div>
  );
};
export default HealthTip;