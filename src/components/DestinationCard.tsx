import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"
import type { Destination } from "@/data/mockData"

interface DestinationCardProps {
  destination: Destination
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Heritage":
        return "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
      case "Adventure":
        return "bg-red-100 text-red-800 border-red-200 hover:bg-red-200"
      case "Cultural":
        return "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200"
      case "Nature":
        return "bg-green-100 text-green-800 border-green-200 hover:bg-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
    }
  }

  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3, ease: "easeOut" }} className="h-full">
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-card group">
        <div className="relative h-56 overflow-hidden">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${getTypeColor(destination.type)} font-medium transition-colors duration-200`}>
              {destination.type}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>4.8</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Overlay content */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white">
              <h3 className="text-xl font-serif font-bold mb-1 line-clamp-1">{destination.name}</h3>
              <div className="flex items-center text-white/90 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{destination.location}</span>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{destination.description}</p>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>2-3 days</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-primary font-semibold">From ₹5,999</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                size="sm"
              >
                View Details
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-4 border-border hover:border-primary hover:text-primary transition-colors duration-200 bg-transparent"
              >
                ♡
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default DestinationCard
