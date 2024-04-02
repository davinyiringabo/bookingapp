import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { HomeIcon, MagnifyingGlassIcon, BookOpenIcon, UserCircleIcon } from "react-native-heroicons/solid";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
            padding: 5,
            height: 80,
            paddingVertical: 20,
            paddingBottom: 15          
        },
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[{ fontFamily: "Poppins-Bold", color:"#9E9E9E" }, focused && { color: "#e91e63" }]}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[{ fontFamily: "Poppins-Bold", color:"#9E9E9E" }, focused && { color: "#e91e63" }]}>Search</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassIcon color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Booking" component={BookingScreen} options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[{ fontFamily: "Poppins-Bold", color:"#9E9E9E" }, focused && { color: "#e91e63" }]}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <BookOpenIcon color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[{ fontFamily: "Poppins-Bold", color:"#9E9E9E" }, focused && { color: "#e91e63" }]}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <UserCircleIcon color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
