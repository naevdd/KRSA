// app/_layout.tsx
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding until fonts are loaded.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load your custom fonts.
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  // Hide the splash screen once fonts are loaded.
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // While fonts are loading, render nothing.
  if (!fontsLoaded && !error) {
    return null;
  }

  // Render the Expo Router's Stack without an extra provider.
  return <Stack screenOptions={{ headerShown: false, animation: "none" }} />;
}
