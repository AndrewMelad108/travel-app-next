'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Results() {
  const [flights, setFlights] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const apiUrl = `${process.env.URL_NEXT_API}/api/flights`;
  const fetchFlights = async () => {
      const response = await fetch(`${apiUrl}`);
      const {data} = await response.json();
      const destination = searchParams.get('destination'); 
      setFlights(
        data.filter((flight) =>
          destination ? flight.destination.toLowerCase() === destination.toLowerCase() : true
        )
      );
   
  };
  useEffect(() => {
    fetchFlights();
  }, [searchParams]); 

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Search Results</h1>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li
              key={flight.id}
              onClick={() => router.push(`/details/${flight.id}`)}
              style={{
                cursor: 'pointer',
                margin: '1rem 0',
                border: '1px solid #ccc',
                padding: '1rem',
              }}
            >
              <strong>{flight.airline}</strong> - ${flight.price} to {flight.destination}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found for "{searchParams.get('destination') || 'your search'}"</p>
      )}
    </div>
  );
}
