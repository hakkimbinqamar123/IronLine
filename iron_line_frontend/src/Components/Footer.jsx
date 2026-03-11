import logo from "../assets/Images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0F2A44] via-[#173E73] to-[#0B243A] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

          {/* ================= COMPANY INFO ================= */}
          <div className="space-y-4">
            <img src={logo} alt="Iron Line" className="h-18 w-28" />

            <p className="text-sm text-white/80 leading-relaxed">
              Iron Line Contracting delivers safe, high-quality pipeline and construction services with
              precision and integrity. Built strong. Built to last.
            </p>

            <div className="text-sm space-y-1.5 text-white/75">
              <p>📍 TOWER1, FLOOR 3, AL DANA, <br /> ABU DHABI, UNITED ARAB EMIRATES</p>
              {/* <p>📞 +234 (1) 700 1260</p>
              <p>✉️ info@ironlinegroup.com</p> */}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
              <li><Link to="/operations" className="hover:text-white">Our Operations</Link></li>
              <li><Link to="/news" className="hover:text-white">News</Link></li>
              <li><Link to="/contacts" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>



          {/* ================= CONTACT FORM ================= */}
          <div>
            <h4 className="font-semibold mb-2 tracking-wide">
              Contact Us
            </h4>

            <form className="space-y-3">
              <div>
                <label className="block text-xs mb-1 text-white/70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 rounded-lg text-sm
                             bg-white text-gray-800
                             focus:outline-none focus:ring-2
                             focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-xs mb-1 text-white/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 rounded-lg text-sm
                             bg-white text-gray-800
                             focus:outline-none focus:ring-2
                             focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-xs mb-1 text-white/70">
                  Message
                </label>
                <textarea
                  rows={2}
                  placeholder="How can we help you?"
                  className="w-full px-3 py-2 rounded-lg text-sm
                             bg-white text-gray-800 resize-none
                             focus:outline-none focus:ring-2
                             focus:ring-blue-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#173E73]
                           py-2 rounded-lg text-sm font-semibold
                           hover:bg-gray-100 transition"
              >
                Send Message
              </button>

              <p className="text-[11px] text-white/60 text-center">
                We usually respond within 24 hours.
              </p>
            </form>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/20" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center
                        py-4 text-sm text-white/70 gap-4">

          <p>© 2026 Iron Line International. All rights reserved.</p>

          <div className="flex gap-5">
            <h3 to="/privacy-policy" className="hover:text-white">Privacy Policy</h3>
            <h3 to="/terms" className="hover:text-white">Terms of Use</h3>
            <h3 to="/sitemap" className="hover:text-white">Site Map</h3>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
