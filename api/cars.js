// pages/api/cars.js

const cars = [
  {
    id: "1",
    name: "Honda Civic",
    price: 1200000,
    fuel: "Petrol",
    seats: 5,
    image: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9uZGElMjBDaXZpY3xlbnwwfHwwfHx8MA%3D%3D" // 🖼️ Real image
  },
  {
    id: "2",
    name: "Toyota Fortuner",
    price: 3500000,
    fuel: "Diesel",
    seats: 7,
    image: "https://images.unsplash.com/photo-1664783856972-ac9922d7b2d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG95b3RhJTIwRm9ydHVuZXJ8ZW58MHx8MHx8fDA%3D"
  }
];

export default function handler(req, res) {
  res.status(200).json(cars);
}
