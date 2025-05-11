export default function Footer() {
    return (
      <footer className="text-center py-8 border-t border-[#333] mt-12 bg-[#1C1C1E] text-[#BFA980]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-lg mb-2">Luxora Interiors</h4>
              <p className="text-sm">
                Bringing elegance and luxury into your living spaces. We specialize in personalized designs that reflect your lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/gallery" className="hover:underline">Gallery</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
              <p className="text-sm">123 Elegance Lane, Victoria Island, Lagos</p>
              <p className="text-sm">Phone: +234 812 345 6789</p>
              <p className="text-sm">Email: info@luxorainteriors.com</p>
            </div>
          </div>
          <p className="text-sm mt-8">&copy; 2025 Luxora Interiors. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  