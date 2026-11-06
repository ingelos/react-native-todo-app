import { FlatList, StyleSheet, Text } from "react-native";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks }) {

    const priorityOrder = {
        urgent: 1,
        secondary: 2,
        additional: 3
    };

    const sortedTasks = [...tasks].sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return (
        <FlatList
            data={sortedTasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TaskCard task={item} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            ListEmptyComponent={
                <Text style={styles.emptyText}>
                    No tasks yet. Add your first task!
                </Text>
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingVertical: 15,
        gap: 12,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 30,
        color: '#888888',
    },

})