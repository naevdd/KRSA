import React from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView className="bg-gradient-to-b from-white to-blue-500 h-full">
      <ScrollView>
        <View className="w-full h-screen p-4">
          <Text className="text-red-500 text-center mx-auto pt-10 pb-7 text-3xl font-pblack">KERALA ROAD SAFETY AUTHORITY</Text>
          <Text className="text-red-400 text-center mx-auto pb-10 font-pregular">Established under KRSA Act 2007 - Government of Kerala</Text>
          <Text className="text-yellow-400 text-center mx-auto pb-6 text-3xl font-pblack">About</Text>
          <Text className="text-white text-center pb-24 font-pregular">
          The Kerala Road Safety Authority is a statutory body established under KRSA Act of 2007 by the Government of Kerala. The Kerala Road Safety Authority with dedicated Road Safety Fund focus to
           improve Road Safety in the State by providing support to stake-holding departments and District Road Safety Councils (DRSC). The Authority aims to reduce the risk of deaths and serious injuries from road crashes through multi-sectoral road safety interventions that specifically target high-risk locations and vulnerable road users. The Authority acts as
           the nodal agency for coordination & implementation of Road Safety Programs in the State. With the support of stakeholders, KRSA will act to make Kerala’s roads safe for all modes of traffic.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
