import { NextResponse } from "next/server";
export async function GET(req) {
  const DB = [
    { id: 1, destination: 'Cairo', price: 450, airline: 'EgyptAir' },
    { id: 2, destination: 'Paris', price: 380, airline: 'Air France' },
    { id: 3, destination: 'New York', price: 600, airline: 'Emirates' },
    { id: 4, destination: 'Dubai', price: 320, airline: 'British Airways' },
    { id: 5, destination: 'London', price: 410, airline: 'Air Egypt' },
    { id: 6, destination: 'Cairo', price: 220, airline: 'EgyptAir' },
    { id: 7, destination: 'Paris', price: 500, airline: 'Air France' },
    { id: 8, destination: 'New York', price: 550, airline: 'Emirates' },
    { id: 9, destination: 'Dubai', price: 340, airline: 'British Airways' },
    { id: 10, destination: 'London', price: 460, airline: 'Air Egypt' },
    { id: 11, destination: 'Cairo', price: 490, airline: 'EgyptAir' },
    { id: 12, destination: 'Paris', price: 390, airline: 'Air France' },
    { id: 13, destination: 'New York', price: 610, airline: 'Emirates' },
    { id: 14, destination: 'Dubai', price: 310, airline: 'British Airways' },
    { id: 15, destination: 'London', price: 430, airline: 'Air Egypt' },
    { id: 16, destination: 'Cairo', price: 470, airline: 'EgyptAir' },
    { id: 17, destination: 'Paris', price: 320, airline: 'Air France' },
    { id: 18, destination: 'New York', price: 540, airline: 'Emirates' },
    { id: 19, destination: 'Dubai', price: 330, airline: 'British Airways' },
    { id: 20, destination: 'London', price: 420, airline: 'Air Egypt' },
    { id: 21, destination: 'Cairo', price: 460, airline: 'EgyptAir' },
    { id: 22, destination: 'Paris', price: 400, airline: 'Air France' },
    { id: 23, destination: 'New York', price: 620, airline: 'Emirates' },
    { id: 24, destination: 'Dubai', price: 350, airline: 'British Airways' },
    { id: 25, destination: 'London', price: 440, airline: 'Air Egypt' },
    { id: 26, destination: 'Cairo', price: 230, airline: 'EgyptAir' },
    { id: 27, destination: 'Paris', price: 480, airline: 'Air France' },
    { id: 28, destination: 'New York', price: 630, airline: 'Emirates' },
    { id: 29, destination: 'Dubai', price: 360, airline: 'British Airways' },
    { id: 30, destination: 'London', price: 450, airline: 'Air Egypt' }
  ];
  
  return NextResponse.json(
 	{ success: true, 
      data: [...DB]  
     },
 	{ status: 200 }
);
}