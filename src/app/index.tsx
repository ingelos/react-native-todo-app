import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>ToDo Today</Text>
      <HomeHeader />
    </View>
  );
}

