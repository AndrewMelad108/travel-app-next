
export default async function Details({ params }) {
  const { id } = params;
  const response = await fetch(`${process.env.URL_NEXT_API}/flights/${id}`);
  const result = await response.json();
  const flight = await result.data ;
  if (!flight) {
    return <p>Flight not found!</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Flight Details</h1>
      <p>
        <strong>Airline:</strong> {flight.airline}
      </p>
      <p>
        <strong>Destination:</strong> {flight.destination}
      </p>
      <p>
        <strong>Price:</strong> ${flight.price}
      </p>
    </div>
  );
}
