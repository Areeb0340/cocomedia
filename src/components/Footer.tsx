import { Link } from "react-router-dom";
import cocobinoLogo from "@/assets/cocobino-logo.png";

const Footer = () => (
  <footer className="bg-[#111111] border-t border-[#2a2a2a] py-14 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-[140px]">

      {/* Brand Column */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
           <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
             <img src={cocobinoLogo} alt="Cocobino Media" className="w-8 h-8 rounded-lg" />
             <span className="font-heading text-xl font-bold text-gradient">Cocobino Media</span>
           </button>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Professional video editing, 2D/3D animation, and design illustration services.
          Let's bring your creative vision to life.
        </p>
        <div className="text-gray-500 text-sm mt-1">
          <p> Office 955, 85 Dunstall Hill, Wolverhampton, WV6 OSR, United Kingdom</p>
         
        </div>
      </div>

      {/* Contact Column */}
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-base">Contact</h3>
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <p>
            Phone:{" "}
            <a href="tel:+11234567890" className="text-[#E8820C] hover:underline">
             +447988522032
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:hello@cocobinomedia.com" className="text-[#E8820C] hover:underline">
             Info@cocobinomedia.com
            </a>
          </p>
        </div>
      </div>

      {/* Quick Links Column */}
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-base">Quick Links</h3>
        <ul className="flex flex-col gap-2 text-sm">
          {[
            { label: "Terms & Conditions", anchor: "terms" },
            { label: "Privacy Policy", anchor: "privacy" },
            { label: "Refund Policy", anchor: "refund" },
            { label: "Shipping Policy", anchor: "shipping" },
            { label: "Contact Us", anchor: null },
            { label: "About Us", anchor: null },
          ].map(({ label, anchor }) => (
            <li key={label}>
              {anchor ? (
                <Link
                  to={`/policies#${anchor}`}
                  className="text-gray-400 hover:text-[#E8820C] transition-colors duration-200"
                >
                  {label}
                </Link>
              ) : (
                <a href="#" className="text-gray-400 hover:text-[#E8820C] transition-colors duration-200">
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#2a2a2a] text-center">
      <p className="text-gray-500 text-sm">
        © 2026 Cocobino Media. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;