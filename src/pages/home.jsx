import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import home from "../assets/home.jpg";

export default function Home() {
  

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white font-[Poppins]">
      <Navbar />
      <main>
        <section className="flex flex-col lg:flex-row items-center px-6 py-16 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-[Playfair Display] text-[#F4F4F4] mb-4">Elegance in Every Corner</h2>
            <p className="text-[#BFA980] mb-6">
              At Luxora, we bring your dream spaces to life with timeless elegance and luxurious design.
              Our philosophy blends modern sophistication with classic sensibilities to create personalized sanctuaries.
            </p>
            <ul className="text-[#F4F4F4] list-disc ml-6 mb-6">
              <li>Custom luxury interior design services</li>
              <li>Expert consultations and space planning</li>
              <li>Access to exclusive materials and décor</li>
            </ul>
            <button
              className="bg-[#BFA980] text-black px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              View Gallery
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            src= {home}
            alt="Interior Design"
            className="rounded-2xl shadow-lg lg:w-1/2 w-full"
          />
        </section>

        <section className="bg-[#2A2A2C] px-6 py-12 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-[Playfair Display] text-[#F4F4F4] mb-4"
          >
            Why Choose Us?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#BFA980] max-w-2xl mx-auto"
          >
            Our attention to detail, commitment to excellence, and refined taste have earned us the trust of clients across the nation. We craft designs that reflect your lifestyle and elevate your living experience.
          </motion.p>
        </section>

        <section className="px-6 py-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-[Playfair Display] text-center text-[#BFA980] mb-8"
          >
            Services We Offer
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {["Luxury Home Styling", "Space Planning", "Custom Furniture Design"].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-[#2A2A2C] p-6 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-[#F4F4F4] mb-2">{service}</h4>
                <p className="text-[#BFA980] text-sm">
                  Elevate your space with our tailored approach to elegance and functionality.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-[#2A2A2C] px-6 py-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-[Playfair Display] text-center text-[#F4F4F4] mb-8"
          >
            What Our Clients Say
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[{
              name: "Mrs. Adesuwa O.",
              comment: "Luxora transformed my home into a sanctuary. Their attention to detail is unmatched."
            }, {
              name: "Chuka N.",
              comment: "The best interior designers in Lagos. Their taste is exquisite and very client-focused."
            }].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#1C1C1E] p-6 rounded-xl shadow-lg"
              >
                <p className="text-[#BFA980] italic mb-2">"{testimonial.comment}"</p>
                <h5 className="text-[#F4F4F4] font-semibold">- {testimonial.name}</h5>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
</div>
  );
}
