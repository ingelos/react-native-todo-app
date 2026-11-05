import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size}) => (
            <Ionicons 
              name='home' 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
 
      <Tabs.Screen
        name='tasks'
        options={{
          title: 'All tasks',
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
              name='list' 
              size={size} 
              color={color} 
            />
          ),
        }}
        />
    </Tabs>
  )
}