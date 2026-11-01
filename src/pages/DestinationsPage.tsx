import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { destinations } from "@/data/mockData"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DestinationCard from "@/components/DestinationCard"
import { Search, Filter, MapPin } from "lucide-react"

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string>("All")

  const destinationTypes = ["All", "Heritage", "Adventure", "Cultural", "Nature"]

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || destination.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/123.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 gold-accent">Discover Destinations</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Explore the incredible diversity of India - from ancient heritage sites to breathtaking natural wonders
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-card rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search destinations, locations, or experiences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base border-border focus:border-primary"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 mr-4">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
                </div>
                {destinationTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full ${
                      selectedType === type
                        ? "bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                {selectedType === "All" ? "All Destinations" : `${selectedType} Destinations`}
              </h2>
            </div>
            <div className="text-muted-foreground">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? "s" : ""} found
            </div>
          </motion.div>

          {/* Destinations Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <DestinationCard destination={destination} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No destinations found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("All")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Start Your Indian Adventure?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Let our expert guides help you create unforgettable memories across incredible India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold rounded-full"
              >
                Plan Your Trip
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold rounded-full bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
