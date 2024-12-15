import Image from "next/image";
import ImageCard from "../../../public/assest/images/pexels-taryn-elliott-6624558.jpg";
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
    <div className="bg-cover details-flex ">
      <div className="details">
        <h1 className="title-name">Flight Details</h1>
        <div className="details-content">
          <div className="data">
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
          <Image
            className="image"
            src={ImageCard}
            height={150}
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
