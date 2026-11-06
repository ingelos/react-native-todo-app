import AddTaskButton from "@/components/AddTaskButton";
import HomeHeader from "@/components/HomeHeader";
import TaskList from "@/components/TaskList";
import { useTasks } from "@/context/TaskContext";
import { globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { tasks } = useTasks();

  const homeTasks = tasks.filter(task => task.shownOnHome);

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>
        ToDo Today
      </Text>

      <HomeHeader />

      <TaskList tasks={homeTasks}/>
  
      <View style={styles.footer}>
        <AddTaskButton
          onPress={() => router.push('/add-task')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: 15,
    paddingBottom: 15,
    gap: 12,
  },
})

