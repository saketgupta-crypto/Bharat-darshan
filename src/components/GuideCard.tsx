import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Languages, Award, MessageCircle } from "lucide-react"
import type { Guide } from "@/data/mockData"

interface GuideCardProps {
  guide: Guide
}

const GuideCard = ({ guide }: GuideCardProps) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3, ease: "easeOut" }} className="h-full">
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-card group">
        <div className="relative h-56 overflow-hidden">
          <img
            src={guide.image || "/placeholder.svg"}
            alt={guide.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-medium flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {guide.rating}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white font-medium">Available</Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 line-clamp-1">{guide.name}</h3>
              <div className="flex items-center text-muted-foreground text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{guide.location}</span>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{guide.experience}</span>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-card-foreground">Languages</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {guide.languages.map((language, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-muted-foreground hover:bg-muted"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{guide.rating}</span>
                <span className="text-xs text-muted-foreground">(89 reviews)</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">₹2,500</div>
                <div className="text-xs text-muted-foreground">per day</div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                size="sm"
              >
                Book Guide
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-4 border-border hover:border-primary hover:text-primary transition-colors duration-200 bg-transparent"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default GuideCard
