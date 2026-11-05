import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTasks } from "../context/TaskContext.js";


export default function TaskCard({ task }) {
    const { toggleTask, deleteTask } = useTasks();

    return (
        <View style={[styles.card]}>
            <TouchableOpacity
                onPress={() => toggleTask(task.id)}
                style={{ flex: 1 }}
            >
                <Text style={{
                    textDecorationLine: task.completed ? 'line-through' : 'none',
                    opacity: task.completed ? 0.5 : 1,
                }}>
                    {task.name}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => deleteTask(task.id)}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
    },
    value: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 4,
    }
})

