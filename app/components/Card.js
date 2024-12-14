import React from "react";
import Image from "next/image";
import ImageCard from "../../public/assest/images/pexels-taryn-elliott-6624558.jpg";
import { useRouter } from "next/navigation";
export default function Card({ flight }) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/details/${flight.id}`)} className="card">
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
  );
}
