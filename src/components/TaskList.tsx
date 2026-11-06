import { useTasks } from "@/context/TaskContext";
import { SectionList, StyleSheet, Text } from "react-native";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks }) {

    const {toggleShownOnHome} = useTasks();

    const priorityOrder = {
        urgent: 1,
        secondary: 2,
        additional: 3
    };

    const sections = Object.keys(priorityOrder)
        .sort((a, b) => priorityOrder[a] - priorityOrder[b])
        .map(priority => ({
            title: priority,
            data: tasks.filter(task => task.priority === priority)
        }))
        .filter(section => section.data.length > 0);

    return (
        <SectionList
            sections={sections}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TaskCard 
                    task={item} 
                    onToggleHome={() => toggleShownOnHome(item.id)}/>
            )}
            renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>
                    {section.title.toUpperCase()}
                </Text>
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
    sectionHeader: {
        fontSize: 14,
        marginTop: 16,
        marginBottom: 5,
    },
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