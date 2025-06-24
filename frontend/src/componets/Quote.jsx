import React, { useEffect, useState } from "react";
const Quote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/quote`)
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch(() => setQuote("Error fetching quote of the day    "));
  }, []);
  return (
    <div>
      <h2>Quote</h2>
      <blockquote>{quote}</blockquote>
    </div>
  );
};
export default Quote;
