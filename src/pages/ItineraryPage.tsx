import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { itineraries } from "@/data/mockData"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ItineraryCard from "@/components/ItineraryCard"
import { MapPin, Calendar, Users, Sparkles, Clock, ArrowRight } from "lucide-react"

export default function ItineraryPage() {
  const [destination, setDestination] = useState("")
  const [days, setDays] = useState("")
  const [travelers, setTravelers] = useState("")
  const [generatedItinerary, setGeneratedItinerary] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const destinations = ["Agra", "Kerala", "Rajasthan", "Goa", "Himachal Pradesh", "Tamil Nadu"]
  const dayOptions = ["3", "5", "7", "10", "14"]
  const travelerOptions = ["1", "2", "3-4", "5-8", "9+"]

  const handleGenerateItinerary = () => {
    if (!destination || !days || !travelers) return

    setIsGenerating(true)

    // Simulate AI processing
    setTimeout(() => {
      const matchingItinerary = itineraries.find(
        (itinerary) => itinerary.destination.toLowerCase() === destination.toLowerCase(),
      )

      if (matchingItinerary) {
        setGeneratedItinerary({
          ...matchingItinerary,
          travelers: travelers,
          customized: true,
        })
      } else {
        // Generate a generic itinerary for other destinations
        setGeneratedItinerary({
          id: "custom",
          destination: destination,
          days: Number.parseInt(days),
          title: `${days}-Day ${destination} Adventure`,
          description: `A carefully crafted ${days}-day journey through ${destination}, designed for ${travelers} traveler${
            travelers === "1" ? "" : "s"
          }.`,
          travelers: travelers,
          customized: true,
          dailyPlan: Array.from({ length: Number.parseInt(days) }, (_, index) => ({
            day: index + 1,
            title: `Day ${index + 1}: Explore ${destination}`,
            description: `Discover the highlights and hidden gems of ${destination}`,
            activities: [
              "Morning sightseeing tour",
              "Local cuisine experience",
              "Cultural immersion activity",
              "Evening leisure time",
            ],
          })),
        })
      }
      setIsGenerating(false)
    }, 2000)
  }

  const resetForm = () => {
    setDestination("")
    setDays("")
    setTravelers("")
    setGeneratedItinerary(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/itinerary.jpg?key=itinerary1')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 gold-accent">AI Itinerary Planner</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Let our intelligent system create the perfect travel plan tailored just for you
          </p>
        </motion.div>
      </section>

      {/* Itinerary Generator Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="shadow-xl border-0 bg-card indian-pattern">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-serif text-card-foreground flex items-center justify-center gap-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  Create Your Perfect Journey
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Answer a few questions and let our AI craft a personalized itinerary for your Indian adventure
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Destination Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Destination
                    </label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger className="h-12 border-border focus:border-primary">
                        <SelectValue placeholder="Choose destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest} value={dest}>
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </label>
                    <Select value={days} onValueChange={setDays}>
                      <SelectTrigger className="h-12 border-border focus:border-primary">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        {dayOptions.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day} days
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Travelers Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Travelers
                    </label>
                    <Select value={travelers} onValueChange={setTravelers}>
                      <SelectTrigger className="h-12 border-border focus:border-primary">
                        <SelectValue placeholder="Number of travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        {travelerOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option} {option === "1" ? "person" : "people"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    onClick={handleGenerateItinerary}
                    disabled={!destination || !days || !travelers || isGenerating}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating Your Itinerary...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate AI Itinerary
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Generated Itinerary */}
      {generatedItinerary && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Itinerary Header */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Your Personalized Itinerary</h2>
                <p className="text-lg text-muted-foreground">
                  Here's your custom {generatedItinerary.days}-day journey to {generatedItinerary.destination}
                </p>
              </div>

              {/* Itinerary Overview */}
              <Card className="shadow-lg border-0 bg-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="space-y-2">
                      <MapPin className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-2xl font-bold text-card-foreground">{generatedItinerary.destination}</div>
                      <div className="text-sm text-muted-foreground">Destination</div>
                    </div>
                    <div className="space-y-2">
                      <Calendar className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-2xl font-bold text-card-foreground">{generatedItinerary.days} Days</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                    <div className="space-y-2">
                      <Users className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-2xl font-bold text-card-foreground">{generatedItinerary.travelers}</div>
                      <div className="text-sm text-muted-foreground">Travelers</div>
                    </div>
                    <div className="space-y-2">
                      <Sparkles className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-2xl font-bold text-card-foreground">AI Crafted</div>
                      <div className="text-sm text-muted-foreground">Personalized</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Itinerary */}
              <div className="space-y-6">
                {generatedItinerary.dailyPlan.map((day: any, index: number) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ItineraryCard day={day} />
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold rounded-full"
                >
                  Book This Itinerary
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-semibold rounded-full bg-transparent"
                >
                  Customize Further
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={resetForm}
                  className="border-border hover:border-primary hover:text-primary px-8 py-3 font-semibold rounded-full bg-transparent"
                >
                  Create New Plan
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Sample Itineraries */}
      {!generatedItinerary && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Sample Itineraries</h2>
              <p className="text-lg text-muted-foreground">
                Get inspired by our pre-designed travel plans or create your own custom journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itineraries.map((itinerary, index) => (
                <motion.div
                  key={itinerary.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">
                              {itinerary.title}
                            </h3>
                            <div className="flex items-center text-muted-foreground text-sm mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{itinerary.destination}</span>
                              <Clock className="w-4 h-4 ml-4 mr-1" />
                              <span>{itinerary.days} days</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {itinerary.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-card-foreground">Highlights:</h4>
                          <div className="space-y-1">
                            {itinerary.dailyPlan.slice(0, 3).map((day: any, dayIndex: number) => (
                              <div key={dayIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span>
                                  Day {day.day}: {day.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                          onClick={() => {
                            setDestination(itinerary.destination)
                            setDays(itinerary.days.toString())
                            setTravelers("2")
                            handleGenerateItinerary()
                          }}
                        >
                          Use This Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
