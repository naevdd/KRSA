// app/index.tsx
import React from 'react';
import {  View, ScrollView, SafeAreaView, Text, Button, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const router=useRouter()

  const navigateToHome = () => {
    router.push("/home");  // Navigate to Details screen
  };

  const navigateToTraffic = () => {
    router.push("/traffic");  // Navigate to Details screen
  };

  return (
    <SafeAreaView className="bg-primary">
          <ScrollView>
            <View className="w-full h-screen p-4 pt-10">
              <Text className="text-red-500 text-center mx-auto pt-10 pb-7 text-3xl font-pblack">KERALA ROAD SAFETY AUTHORITY</Text>
              <Text className="text-red-400 text-center mx-auto pb-14 font-pregular">Established under KRSA Act 2007 - Government of Kerala</Text>
              <Text className="text-yellow-400 text-center mx-auto pb-6 text-3xl font-pblack">About</Text>
              <Text className="text-white text-center pb-24 font-pregular">
              The Kerala Road Safety Authority is a statutory body established under KRSA Act of 2007 by the Government of Kerala. The Kerala Road Safety Authority with dedicated Road Safety Fund focus to
               improve Road Safety in the State by providing support to stake-holding departments and District Road Safety Councils (DRSC). The Authority aims to reduce the risk of deaths and serious injuries from road crashes through multi-sectoral road safety interventions that specifically target high-risk locations and vulnerable road users. The Authority acts as
               the nodal agency for coordination & implementation of Road Safety Programs in the State. With the support of stakeholders, KRSA will act to make Kerala’s roads safe for all modes of traffic.
              </Text>
            </View>
            <View className="p-4 pt-10 w-full h-screen">
              <Text className="text-2xl text-white font-pbold mb-6">
                OPTIONS
              </Text>
              {/* Use a flex container with wrapping */}
              <View className="flex flex-row flex-wrap">
                {/* Each button container takes 50% of the width, with fixed height and width */}
                <Link href="/home" className="w-1/2 p-2">
                  <View className="bg-blue-600 aspect-square h-40 w-40 flex justify-center items-center">
                    <Text className="text-white text-lg font-pregular text-center">Games</Text>
                  </View>
                </Link>

                <Link href="/traffic" className="w-1/2 p-2">
                  <View className="bg-blue-600 aspect-square h-40 w-40 flex justify-center items-center">
                    <Text className="text-white text-lg font-pregular text-center">Traffic Videos</Text>
                  </View>
                </Link>

                <Link href="/home" className="w-1/2 p-2">
                  <View className="bg-blue-600 aspect-square h-40 w-40 flex justify-center items-center">
                    <Text className="text-white text-lg font-pregular text-center">Other</Text>
                  </View>
                </Link>

                <Link href="/home" className="w-1/2 p-2">
                  <View className="bg-blue-600 aspect-square h-40 w-40 flex justify-center items-center">
                    <Text className="text-white text-lg font-pregular  text-center">Contact Us</Text>
                  </View>
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

  );
}
