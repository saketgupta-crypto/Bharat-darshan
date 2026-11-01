import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getUserById, bookTripForUser } from "@/data/userData";
import { itineraries } from "@/data/mockData";
import { MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [bookedTrips, setBookedTrips] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    
    if (!userId) {
      navigate('/auth/login');
      return;
    }
    
    // Get user data
    const userData = getUserById(userId);
    if (!userData) {
      navigate('/auth/login');
      return;
    }
    
    setUser(userData);
    
    // Get booked trips data
    if (userData.bookedTrips) {
      const tripsWithDetails = userData.bookedTrips.map(booking => {
        const itinerary = itineraries.find(it => it.id === booking.itineraryId);
        return {
          ...booking,
          itinerary
        };
      }).filter(booking => booking.itinerary);
      
      setBookedTrips(tripsWithDetails);
    }
    
    setLoading(false);
  }, [navigate]);

  const handleBookTrip = (itineraryId: string) => {
    if (!user) return;
    
    const success = bookTripForUser(user.id, itineraryId, 'confirmed');
    
    if (success) {
      toast({
        title: "Trip booked!",
        description: "Your trip has been successfully booked.",
      });
      
      // Refresh booked trips
      const updatedUser = getUserById(user.id);
      if (updatedUser && updatedUser.bookedTrips) {
        const tripsWithDetails = updatedUser.bookedTrips.map(booking => {
          const itinerary = itineraries.find(it => it.id === booking.itineraryId);
          return {
            ...booking,
            itinerary
          };
        }).filter(booking => booking.itinerary);
        
        setBookedTrips(tripsWithDetails);
      }
    } else {
      toast({
        title: "Error",
        description: "Failed to book trip. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Welcome back, {user?.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Plan and manage your trips
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Name</h3>
                <p className="text-muted-foreground">{user?.name}</p>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
              <div>
                <h3 className="font-medium">Member since</h3>
                <p className="text-muted-foreground">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('userId');
                  }
                  navigate('/auth/login');
                }}
              >
                Logout
              </Button>
            </CardContent>
          </Card>

          {/* Booked Trips */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Booked Trips</CardTitle>
                <CardDescription>Trips you have booked with us</CardDescription>
              </CardHeader>
              <CardContent>
                {bookedTrips.length > 0 ? (
                  <div className="space-y-4">
                    {bookedTrips.map((booking) => (
                      <div key={booking.itineraryId} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{booking.itinerary?.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {booking.itinerary?.description}
                            </p>
                            <div className="mt-2 flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{booking.itinerary?.destination}</span>
                              <Clock className="w-4 h-4 ml-3 mr-1" />
                              <span>{booking.itinerary?.days} days</span>
                            </div>
                            <div className="mt-2">
                              <Badge variant="secondary">
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </Badge>
                              <span className="ml-2 text-sm text-muted-foreground">
                                Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You haven't booked any trips yet.</p>
                    <Button className="mt-4" asChild>
                      <Link to="/itinerary">Browse Itineraries</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Available Itineraries */}
            <Card>
              <CardHeader>
                <CardTitle>Available Itineraries</CardTitle>
                <CardDescription>Browse and book new travel experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {itineraries.map((itinerary) => (
                    <Card key={itinerary.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">{itinerary.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{itinerary.destination}</span>
                            <Clock className="w-4 h-4 ml-3 mr-1" />
                            <span>{itinerary.days} days</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {itinerary.description}
                          </p>
                          <Button 
                            className="w-full mt-2" 
                            onClick={() => handleBookTrip(itinerary.id)}
                          >
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}