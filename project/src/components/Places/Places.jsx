import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boracay.jpg";
import Img2 from "../../assets/places/puertoprincesa.jpg"; // Ensure the file name matches
import Img3 from "../../assets/places/baler.jpg";
import Img4 from "../../assets/places/japan.jpg";
import Img5 from "../../assets/places/tajmahal.jpg";
import Img6 from "../../assets/places/burj.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boracay",
    location: "Palawan",
    description:
      "Famous for its powdery white sands and crystal-clear waters. Boracay Beach in the Philippines is a tropical paradise that draws travelers from around the world.",
    price: 5000,
    type: "Relax with Nature",
  },
  {
    img: Img2,
    title: "Puerto Princesa",
    location: "Palawan",
    description:
      "Known for its stunning underground river and beautiful limestone cliffs, Puerto Princesa is a must-visit destination in the Philippines.",
    price: 4500,
    type: "Adventure",
  },
  {
    img: Img3,
    title: "Baler",
    location: "Aurora",
    description:
      "A popular surfing destination, Baler offers great waves, beautiful beaches, and a rich history.",
    price: 3000,
    type: "Surfing",
  },
  {
    img: Img4,
    title: "Japan",
    location: "Tokyo",
    description:
      "Experience the vibrant culture, delicious cuisine, and stunning landscapes of Japan.",
    price: 10000,
    type: "Cultural",
  },
  {
    img: Img5,
    title: "Taj Mahal",
    location: "Agra",
    description:
      "A symbol of love and one of the most iconic landmarks in the world, the Taj Mahal is a must-see.",
    price: 8000,
    type: "Historical",
  },
  {
    img: Img6,
    title: "Burj Khalifa",
    location: "Dubai",
    description:
      "The tallest building in the world, Burj Khalifa offers breathtaking views and luxurious experiences.",
    price: 12000,
    type: "Modern",
  },
];

const Places = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="my-4 text-2xl font-semibold">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {PlacesData.map((place, index) => (
          <PlaceCard key={index} {...place} />
        ))}
      </div>
    </div>
  );
};

export default Places;