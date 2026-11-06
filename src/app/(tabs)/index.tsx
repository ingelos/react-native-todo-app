import AddTaskButton from "@/components/AddTaskButton";
import HomeHeader from "@/components/HomeHeader";
import TaskList from "@/components/TaskList";
import { useTasks } from "@/context/TaskContext";
import { globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { tasks } = useTasks();

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>
        ToDo Today
      </Text>

      <HomeHeader />

      <TaskList tasks={tasks}/>
  
      <View style={styles.footer}>
        <AddTaskButton
          onPress={() => router.push('/add-task')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
  },
  listContent: {
    paddingTop: 15,
    paddingBottom: 15,
    gap: 12,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#888888',
  },

  footer: {
    paddingTop: 15,
    paddingBottom: 15,
    gap: 12,
  },

})

