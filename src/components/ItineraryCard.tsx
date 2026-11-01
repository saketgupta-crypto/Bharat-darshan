import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, CheckCircle } from "lucide-react"

interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
}

interface ItineraryCardProps {
  day: ItineraryDay
}

const ItineraryCard = ({ day }: ItineraryCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="w-full">
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
        <CardContent className="p-0">
          <div className="flex">
            {/* Day Number */}
            <div className="bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center min-w-[100px]">
              <div className="text-2xl font-bold mb-1">Day</div>
              <div className="text-3xl font-serif">{day.day}</div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">{day.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                </div>

                {/* Activities */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-card-foreground">Today's Activities</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {day.activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3 hover:bg-muted/50 transition-colors duration-200"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Time and Location Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    Full Day
                  </Badge>
                  <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    Multiple Locations
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ItineraryCard
