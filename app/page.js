"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
export default function Home() {
  const [destination, setDestination] = useState("");
  const router = useRouter();
  const videoLoop = "/assest/TRAVEL MEMORIES _ Short Cinematic film.mp4";
  const handleSearch = () => {
    router.push(`/results?destination=${destination}`);
  };

  return (
    <div>
      <video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={style.vedioLoading}
      ></video>
      <div className={style.content}>
        <h1>Travel Booking App</h1>
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
          Search
        </button>
      </div>
    </div>
  );
}
