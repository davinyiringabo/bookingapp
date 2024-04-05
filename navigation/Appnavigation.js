import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import MainNavigator from "./MainScreens";
import RecentlyBookedScreen from "../screens/RecentlyBookedScreen";
import NotificationsScreen from "../screens/NotificationScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import NotificationSettingsScreen from "../screens/NotificationSettingsScreen";
import HelpSettingsScreen from "../screens/HelpSettingsScreen";
import HotelScreen from "../screens/HotelScreen";
import PaymentSettingsScreen from "../screens/PaymentSettingsScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verify" component={VerifyCodeScreen} />
        <Stack.Screen name="Reset" component={ResetPasswordScreen} />
        <Stack.Screen name="App" component={MainNavigator} />
        <Stack.Screen name="RecentBooking" component={RecentlyBookedScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Bookmarks" component={BookmarkScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettingsScreen}
        />
        <Stack.Screen name="HelpSettings" component={HelpSettingsScreen} />
        <Stack.Screen name="Hotel" component={HotelScreen} />
        <Stack.Screen name="PaymentSettings" component={PaymentSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
