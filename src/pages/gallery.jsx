import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sittingroom from "../assets/sittingroom.jpg";
import bedroom from "../assets/bedroom.jpg";
import kitchen from "../assets/kitchen.jpg";
import office from "../assets/office.jpg";
import dining from "../assets/dining.jpg";
import hallway from "../assets/hallway.jpg";
import bathroom from "../assets/bathroom.jpg";
import library from "../assets/library.jpg";
import stairs from "../assets/stairs.jpg";
import patio from "../assets/patio.jpg";

export default function Gallery() {
  const galleryItems = [
    {
      src: sittingroom,
      desc: "Modern luxury living room with golden accents."
    },
    {
      src: bedroom,
      desc: "Sophisticated bedroom setup with velvet textures."
    },
    {
      src: kitchen,
      desc: "Minimalist kitchen with marble countertops."
    },
    {
      src: office,
      desc: "Artistic home office with warm lighting."
    },
    {
      src: dining,
      desc: "Elegant dining room with crystal chandelier."
    },
    {
      src: hallway,
      desc: "Stylish hallway with custom wood paneling."
    },
    {
      src: bathroom,
      desc: "Sleek bathroom design with matte finishes."
    },
    {
      src: library,
      desc: "Contemporary library with built-in shelves."
    },
    {
      src: stairs,
      desc: "Luxe staircase with custom railings."
    },
    {
      src: patio,
      desc: "Relaxing patio with cozy outdoor seating."
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white font-[Poppins] px-6 py-10">
      <Navbar />
      <h2 className="text-3xl font-[Playfair Display] text-center text-[#BFA980] mb-8">Our Design Gallery</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#2A2A2C] rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.src} alt={`Gallery ${index}`} className="w-full h-64 object-cover" />
            <p className="text-[#BFA980] px-4 py-3 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
