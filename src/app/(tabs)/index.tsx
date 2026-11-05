import HomeHeader from "@/components/HomeHeader";
import TaskCard from "@/components/TaskCard";
import { globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTasks } from "../../context/TaskContext.js";

export default function HomeScreen() {
  const { tasks } = useTasks();

  const priorityOrder = {
    urgent: 1,
    secondary: 2,
    additional: 3
  };

  const sortedTasks = [...tasks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>
        ToDo Today
      </Text>
      
      <HomeHeader />
      
      <FlatList
        style={styles.taskList}
        data={sortedTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No tasks yet. Add your first task!
          </Text>
        }
      />
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
  },
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

