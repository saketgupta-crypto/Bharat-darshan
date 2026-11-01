import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground indian-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold gold-accent">Bharat Darshan</h3>
                <p className="text-sm text-secondary-foreground/80">Incredible India</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Discover the soul of India through authentic travel experiences. From heritage monuments to natural
              wonders, we bring you closer to the incredible diversity of Bharat.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Destinations", href: "/destinations" },
                { name: "Hotels", href: "/hotels" },
                { name: "Tour Guides", href: "/guides" },
                { name: "Itinerary Planner", href: "/itinerary" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary-foreground">Popular Destinations</h4>
            <ul className="space-y-2">
              {[
                "Taj Mahal, Agra",
                "Kerala Backwaters",
                "Rajasthan Deserts",
                "Goa Beaches",
                "Himachal Mountains",
                "Golden Temple, Amritsar",
              ].map((destination) => (
                <li key={destination}>
                  <span className="text-secondary-foreground/80 text-sm hover:text-primary cursor-pointer transition-colors">
                    {destination}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80 text-sm">info@bharatdarshan.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  123 Heritage Street,
                  <br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 Bharat Darshan. All rights reserved. Made with ❤️ for Incredible India.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
