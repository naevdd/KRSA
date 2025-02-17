import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import WebView from 'react-native-webview';

const TrafficVideos = () => {
  const videos = [
    "https://www.youtube.com/embed/4xToP06-91o?si=bpDuC_q3Tvg1MSIg",
    "https://www.youtube.com/embed/SWNaaCUOoe0?si=zHHZzCwEjJKhGeQV",
    "https://www.youtube.com/embed/qJ5oYgQvLv4?si=YFQQ1Xey5mhe_S5S",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <View className="w-full h-screen bg-black px-4">
      <Text className="text-yellow-400 text-center pt-10 pb-5 text-2xl font-pbold">Traffic Videos</Text>
      
      <View className="w-full h-60">
        <WebView 
          source={{ uri: videos[currentVideoIndex] }} 
          style={{ flex: 1 }}
          allowsFullscreenVideo
        />
      </View>

      <View className="flex-row justify-between items-center mt-5">
        <TouchableOpacity
          className={`${
            currentVideoIndex === 0 ? "bg-gray-400" : "bg-yellow-400"
          } px-4 py-2 rounded-md`}
          onPress={() => setCurrentVideoIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentVideoIndex === 0}
        >
          <Text className="text-black font-pregular text-lg">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`${
            currentVideoIndex === videos.length - 1 ? "bg-gray-400" : "bg-yellow-400"
          } px-4 py-2 rounded-md`}
          onPress={() => setCurrentVideoIndex((prev) => Math.min(prev + 1, videos.length - 1))}
          disabled={currentVideoIndex === videos.length - 1}
        >
          <Text className="text-black font-pregular text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrafficVideos;
