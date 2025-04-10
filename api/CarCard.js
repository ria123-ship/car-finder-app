// components/CarCard.js

export default function CarCard({ car }) {
  return (
    <div className="border p-4 rounded shadow-md hover:shadow-xl">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{car.name}</h2>
      <p className="text-gray-600">₹{car.price}</p>
      <p className="text-sm text-gray-500">{car.fuel} • {car.seats} seats</p>
    </div>
  );
}
