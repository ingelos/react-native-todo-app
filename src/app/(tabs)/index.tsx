import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TaskList from "../../components/TaskList";
import { useTasks } from "../../context/TaskContext.js";

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
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/add-task')}
        >
          <Text style={styles.addButtonText}>
            + Add Task
          </Text>
        </TouchableOpacity>
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
  addButton: {
    width: '85%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
  }
})

