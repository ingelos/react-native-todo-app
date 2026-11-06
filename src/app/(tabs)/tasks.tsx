import AddTaskButton from "@/components/AddTaskButton";
import { globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskCard from "../../components/TaskCard";
import { useTasks } from "../../context/TaskContext";


export default function TasksScreen() {
    const { tasks, toggleShownOnHome } = useTasks();

    return (
        <View style={globalStyles.screen}>
            <Text style={globalStyles.title}>All tasks</Text>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TaskCard task={item} onToggleHome={() => toggleShownOnHome(item.id)} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
            <View style={styles.footer}>
                <AddTaskButton
                    onPress={() => router.push('/add-task')}
                />
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 25,
        paddingVertical: 15,
        gap: 12,
    },
    footer: {
    paddingTop: 15,
    paddingBottom: 15,
    gap: 12,
  },
})