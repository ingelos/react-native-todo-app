import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>ToDo Today</Text>
      <HomeHeader />
      <Link href='/tasks' style={{ fontSize: 18, color: '#007bff' }}>
        Go to Tasks
      </Link>
    </ScrollView>
  );
}

