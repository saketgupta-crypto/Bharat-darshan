import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      alert("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsSubmitted(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Available 24/7 for your travel needs",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@bharatdarshan.com", "support@bharatdarshan.com"],
      description: "We respond within 2 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Heritage Street", "New Delhi, India 110001"],
      description: "Open Mon-Sat, 9 AM - 6 PM",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
      description: "Extended hours during peak season",
    },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Travelers" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: MapPin, value: "500+", label: "Destinations" },
    { icon: MessageCircle, value: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/contact2.jpg?key=contact1')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 gold-accent">Get In Touch</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Ready to embark on your Indian adventure? We're here to help you plan the perfect journey
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-foreground/80" />
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card className="shadow-xl border-0 bg-card indian-pattern">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-card-foreground flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-card-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="h-12 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-card-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="h-12 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-card-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="h-12 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-semibold text-card-foreground">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className="h-12 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-card-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                        required
                        rows={6}
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-foreground mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're here to help you plan your perfect Indian adventure. Reach out to us through any of the
                  following channels.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-card-foreground mb-2">{info.title}</h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="text-muted-foreground">
                                  {detail}
                                </div>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground/80">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <Card className="shadow-lg border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-card-foreground">Quick Questions?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-card-foreground text-sm">How quickly do you respond?</h4>
                        <p className="text-muted-foreground text-sm">
                          We typically respond within 2 hours during business hours.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground text-sm">Do you offer custom itineraries?</h4>
                        <p className="text-muted-foreground text-sm">
                          Yes! We specialize in creating personalized travel experiences.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground text-sm">What languages do you support?</h4>
                        <p className="text-muted-foreground text-sm">
                          We provide support in Hindi, English, and several regional languages.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't wait any longer. Let us help you discover the incredible beauty and rich heritage of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold rounded-full"
              >
                Plan Your Trip Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-semibold rounded-full bg-transparent"
              >
                Browse Destinations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
