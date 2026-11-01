import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { guides } from "@/data/mockData"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GuideCard from "@/components/GuideCard"
import { Search, Filter, Users } from "lucide-react"

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All")

  const languages = ["All", "English", "Hindi", "French", "German", "Malayalam"]

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.experience.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLanguage = selectedLanguage === "All" || guide.languages.includes(selectedLanguage)

    return matchesSearch && matchesLanguage
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/guides.jpg?key=guide1')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 gold-accent">Expert Guides</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Discover India through the eyes of passionate local experts who bring stories to life
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
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search guides by name, location, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base border-border focus:border-primary"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 mr-4">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Language:</span>
                </div>
                {languages.map((language) => (
                  <Button
                    key={language}
                    variant={selectedLanguage === language ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(language)}
                    className={`rounded-full ${
                      selectedLanguage === language
                        ? "bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {language}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Professional Guides</h2>
            </div>
            <div className="text-muted-foreground">
              {filteredGuides.length} guide{filteredGuides.length !== 1 ? "s" : ""} available
            </div>
          </motion.div>

          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GuideCard guide={guide} />
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
              <div className="text-6xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No guides found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or language preferences to find suitable guides.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedLanguage("All")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
