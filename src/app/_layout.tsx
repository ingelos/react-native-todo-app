import { Stack } from "expo-router";
import { TaskProvider } from '../context/TaskContext.js';

export default function RootLayout() {
  return (

    <TaskProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' />
      </Stack>
    </TaskProvider>
  );
}
