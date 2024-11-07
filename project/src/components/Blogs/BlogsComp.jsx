import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/japan.jpg";
import Img4 from "../../assets/places/Singapore.jpg";
import Img5 from "../../assets/places/thailand.jpg";
import Img11 from "../../assets/places/dubai.jpg";

// New images for local (Philippine) destinations
import Img6 from "../../assets/places/boracay.jpg";
import Img7 from "../../assets/places/puerto princesa.jpg";
import Img8 from "../../assets/places/baler.jpg";
import Img9 from "../../assets/places/cavite.jpg";
import Img10 from "../../assets/places/bukidnon.jpg";
import Img12 from "../../assets/places/cebu.jpg";

const BlogsData = [
  // International Spots
  {
    id: 1,
    image: Img1,
    title: "Top Places to Visit in India",
    description:
      "India offers an incredible blend of history, culture, and natural beauty. From the iconic Taj Mahal in Agra, a symbol of love and architectural wonder, to the pink-hued city of Jaipur with its historic palaces, India captivates travelers at every turn. Venture south to Kerala to experience serene backwaters, lush landscapes, and vibrant traditions, or explore the bustling markets and towering forts of Delhi. India’s diverse regions offer everything from Himalayan adventures to tranquil beaches, making it a top choice for world travelers.",
    author: "Travel Writer",
    date: "April 22, 2024",
    category: "International",
  },
  {
    id: 2,
    image: Img2,
    title: "Top Places to Visit in the US",
    description:
      "The United States is a vast and varied landscape of experiences, from bustling cities to breathtaking national parks. In New York City, visitors can enjoy iconic sights like Times Square, the Statue of Liberty, and Central Park. Travel west to the Grand Canyon for one of nature’s most awe-inspiring sights, or experience the glamour and excitement of Hollywood in Los Angeles. With destinations like the beaches of Hawaii, the Rocky Mountains, and historic New Orleans, the US offers something unforgettable for every type of traveler.",
    author: "Explorer",
    date: "April 22, 2024",
    category: "International",
  },
  {
    id: 3,
    image: Img3,
    title: "Top Places to Visit in Japan",
    description:
      "Japan seamlessly blends ancient traditions with cutting-edge modernity, making it a must-visit destination. Begin in Tokyo, where neon-lit skyscrapers and bustling streets offer endless excitement, from high-end shopping districts to historic temples. Kyoto charms visitors with its tranquil gardens, ancient shrines, and seasonal cherry blossoms, while Osaka is famous for its vibrant food scene and welcoming locals. Japan’s rural areas, including the scenic mountains and hot springs of Hokkaido, provide peaceful retreats for a truly diverse travel experience.",
    author: "Culture Enthusiast",
    date: "April 22, 2024",
    category: "International",
  },
  {
    id: 4,
    image: Img4,
    title: "Top Places to Visit in Singapore",
    description:
      "Singapore is a vibrant city-state that captivates with its stunning blend of nature and urban design. Discover the futuristic Gardens by the Bay, where towering Supertrees illuminate the night sky, or stroll through the bustling streets of Chinatown and Little India to experience diverse cultures and flavors. The Marina Bay Sands offers breathtaking skyline views, while Sentosa Island provides beaches and thrilling attractions for families. Singapore’s efficient public transport makes it easy to explore this innovative city packed with world-class experiences.",
    author: "Travel Blogger",
    date: "May 15, 2024",
    category: "International",
  },
  {
    id: 5,
    image: Img5,
    title: "Top Places to Visit in Thailand",
    description:
      "Thailand’s appeal lies in its diverse landscapes, rich culture, and welcoming spirit. Bangkok, the capital, is a lively mix of ancient temples and modern shopping, with the Grand Palace and Wat Arun as highlights. Escape to Phuket or Koh Samui for stunning beaches, water sports, and vibrant nightlife. Northern Thailand offers lush mountains and hill tribe villages, where Chiang Mai and Chiang Rai provide a quieter, culturally rich experience. Thailand is a destination that rewards exploration, with friendly locals and endless adventure.",
    author: "Adventure Seeker",
    date: "June 10, 2024",
    category: "International",
  },
  {
    id: 11,
    image: Img11,
    title: "Top Places to Visit in Dubai",
    description:
      "Dubai is a city of contrasts, where ultra-modern skyscrapers meet ancient traditions. Experience the luxury and innovation of the Burj Khalifa, the world’s tallest building, and shop at the extravagant Dubai Mall. Take a desert safari for a taste of Bedouin life, complete with camel rides and dune bashing. Visit the Dubai Marina for stunning waterfront views, or explore the vibrant souks that showcase Dubai's rich heritage. With luxury hotels, pristine beaches, and an international food scene, Dubai is a dazzling and unique travel destination.",
    author: "Travel Guru",
    date: "August 5, 2024",
    category: "International",
  },

  // Local (Philippines) Spots
  {
    id: 6,
    image: Img6,
    title: "Boracay Beach",
    description:
      "Famous for its powdery white sands and crystal-clear waters, Boracay Beach in the Philippines is a tropical paradise that draws travelers from around the world. The island’s vibrant nightlife, watersports, and lively beach parties make it a perfect spot for those seeking both relaxation and excitement. Boracay’s rich coral reefs provide excellent opportunities for snorkeling and diving, while sunset boat rides offer unforgettable views. Despite its popularity, Boracay retains a laid-back charm that captures the essence of island life.",
    author: "Philippine Tourism",
    date: "May 15, 2024",
    category: "Local",
  },
  {
    id: 7,
    image: Img7,
    title: "Puerto Princesa",
    description:
      "Puerto Princesa is known for its stunning natural wonders, most notably the UNESCO World Heritage-listed Underground River. This subterranean river stretches beneath limestone karsts, offering a unique and breathtaking experience for nature lovers. In addition to the river, Puerto Princesa is surrounded by lush rainforests, stunning beaches, and a variety of wildlife. It is an ecotourism destination that promises adventure and relaxation, as well as a glimpse into the Philippines' commitment to preserving its natural beauty.",
    author: "Philippine Tourism",
    date: "May 20, 2024",
    category: "Local",
  },
  {
    id: 8,
    image: Img8,
    title: "Baler",
    description:
      "Known as the birthplace of surfing in the Philippines, Baler attracts adventure seekers and beach lovers alike. The waves at Sabang Beach make it a perfect spot for beginners and pros alike. Beyond the surf, Baler offers waterfalls, caves, and historical sites, including the Baler Church, which holds a special place in Filipino history. With a mix of natural beauty and cultural significance, Baler is a must-visit for those looking to experience the outdoors and the warmth of a seaside community.",
    author: "Philippine Tourism",
    date: "June 5, 2024",
    category: "Local",
  },
  {
    id: 9,
    image: Img9,
    title: "Cavite",
    description:
      "Cavite is steeped in history and natural beauty, offering travelers an array of cultural landmarks and scenic spots. This province played a pivotal role in the Philippine Revolution and is home to historic sites like the Aguinaldo Shrine. With its mountain views, beach resorts, and waterfalls, Cavite also appeals to nature enthusiasts. Cavite’s blend of history and natural attractions makes it an ideal getaway for those seeking a deeper understanding of Philippine heritage alongside scenic landscapes.",
    author: "Philippine Tourism",
    date: "June 15, 2024",
    category: "Local",
  },
  {
    id: 10,
    image: Img10,
    title: "Bukidnon",
    description:
      "Nestled in the highlands of Mindanao, Bukidnon is known for its cool climate, pine trees, and adventurous attractions. Visitors can explore the Dahilayan Adventure Park, home to Asia's longest dual zipline, or hike through scenic mountain trails. The province's pineapple plantations, rolling hills, and ranches give it a unique rural charm. Bukidnon is an ideal destination for travelers looking to escape the heat and enjoy outdoor adventures in a refreshing, natural setting.",
    author: "Philippine Tourism",
    date: "June 20, 2024",
    category: "Local",
  },
  {
    id: 12,
    image: Img12,
    title: "Cebu Island Adventures",
    description:
      "Cebu is an island of diverse experiences, combining historical landmarks with natural wonders. Discover the famed Magellan’s Cross in Cebu City, explore the Spanish-colonial architecture, or dive into the island’s vibrant underwater world at Moalboal. Cebu’s beaches, especially on neighboring islands, offer pristine sands and clear waters perfect for diving and snorkeling. With its bustling city life, scenic mountains, and rich history, Cebu is a dynamic destination that captures the heart of the Philippines.",
    author: "Local Guide",
    date: "July 25, 2024",
    category: "Local",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>

          {/* International Section */}
          <h2 className="my-4 text-2xl font-semibold">
            International Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {BlogsData.filter((item) => item.category === "International").map(
              (item) => (
                <BlogCard key={item.id} {...item} />
              )
            )}
          </div>

          {/* Local Section */}
          <h2 className="my-4 text-2xl font-semibold">Local Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.filter((item) => item.category === "Local").map(
              (item) => (
                <BlogCard key={item.id} {...item} />
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
