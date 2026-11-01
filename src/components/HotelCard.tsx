import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Wifi, Car, Utensils, Waves } from "lucide-react"
import type { Hotel } from "@/data/mockData"

interface HotelCardProps {
  hotel: Hotel
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="w-4 h-4" />
      case "parking":
        return <Car className="w-4 h-4" />
      case "restaurant":
      case "fine dining":
      case "traditional cuisine":
        return <Utensils className="w-4 h-4" />
      case "pool":
      case "spa":
        return <Waves className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3, ease: "easeOut" }} className="h-full">
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-card group">
        <div className="relative h-56 overflow-hidden">
          <img
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-medium">{hotel.rating} ⭐</Badge>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {formatPrice(hotel.pricePerNight)}/night
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 line-clamp-1">{hotel.name}</h3>
              <div className="flex items-center text-muted-foreground text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{hotel.location}</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-card-foreground">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.slice(0, 4).map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full text-xs text-muted-foreground"
                  >
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
                {hotel.amenities.length > 4 && (
                  <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full text-xs text-muted-foreground">
                    <span>+{hotel.amenities.length - 4} more</span>
                  </div>
                )}
              </div>
            </div>

            {/* Rating and Price */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{hotel.rating}</span>
                <span className="text-xs text-muted-foreground">(124 reviews)</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{formatPrice(hotel.pricePerNight)}</div>
                <div className="text-xs text-muted-foreground">per night</div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                size="sm"
              >
                Book Now
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-4 border-border hover:border-primary hover:text-primary transition-colors duration-200 bg-transparent"
              >
                Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default HotelCard
