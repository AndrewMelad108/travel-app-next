"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loading";
export default function Results() {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const fetchFlights = () => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_URL_NEXT_API
      }/api/flights?value=${searchParams.get("destination")}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setFlights(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setFlights([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchFlights();
  }, []);
  useEffect(() => {
    fetchFlights();
  }, [searchParams]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-cover">
      <h1 className="no-data">Search Results</h1>
      {flights.length > 0 && (
        <div className="container">
          {flights.map((flight) => (
            <Card key={flight.id} flight={flight} />
          ))}
        </div>
      )}
    </div>
  );
}
