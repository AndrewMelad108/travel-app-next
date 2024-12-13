"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImageCard from "../../public/assest/images/pexels-taryn-elliott-6624558.jpg";
export default function Results() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [flights, setFlights] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const fetchFlights = async () => {
    console.log(process.env.URL_NEXT_API);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_NEXT_API}/api/flights`
    );
    const { data } = await response.json();
    const destination = searchParams.get("destination");
    setFlights(
      data.filter((flight) =>
        destination
          ? flight.destination.toLowerCase() === destination.toLowerCase()
          : true
      )
    );
  };
  useEffect(() => {
    fetchFlights();
  }, [searchParams]);

  return (
    <div className="bg-cover">
      <h1>Search Results</h1>
      {isClient && flights.length > 0 ? (
        <div className="container">
          {flights.map((flight) => (
            <div
              key={flight.id}
              onClick={() => router.push(`/details/${flight.id}`)}
              className="card"
            >
              <Image
                className="image"
                src={ImageCard}
                height={150}
                alt="Image Description"
              />
              <p>
                <span className="label">airline :</span>
                <strong>{flight.airline}</strong>
              </p>
              <p>
                <span className="label">destination :</span>
                <span>{flight.destination}</span>
              </p>
              <p>
                <span className="label">price :</span>
                <span>{flight.price}$</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>
          No flights found for "
          {searchParams.get("destination") || "your search"}"
        </p>
      )}
    </div>
  );
}
