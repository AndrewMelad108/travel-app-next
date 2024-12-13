export default async function Details({ params }) {
  const { id } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_URL_NEXT_API}/api/flights/${id}`;
  const response = await fetch(`${apiUrl}`);
  const result = await response.json();
  const flight = await result.data;
  if (!flight) {
    return <p>Flight not found!</p>;
  }

  return (
    <div className="bg-cover">
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
