import { useTasks } from "@/context/TaskContext";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function TaskCard({ task }) {
    const { toggleTask, deleteTask } = useTasks();

    const priorityColors = {
        urgent: {
            background: '#aebca6',
            border: '#747b70',
        },
        secondary: {
            background: '#bca28b',
            border: '#8d7d6e',
        },
        additional: {
            background: '#e7d6c6',
            border: '#ae9076',
        },
    };

    const colors = priorityColors[task.priority];

    return (

        <View
            style={[styles.card,
            {
                backgroundColor: colors.background,
                borderColor: colors.border,
            },
            task.completed && styles.completedCard,
            ]}>
            <TouchableOpacity
                onPress={() => toggleTask(task.id)}
                style={styles.checkbox}
            >
                <Ionicons
                    name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
                    size={24}
                    color={colors.text}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => toggleTask(task.id)}
                style={styles.taskName}
            >
                <Text style={[styles.taskText, {
                    color: colors.text,
                }]}
                >
                    {task.name}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => deleteTask(task.id)}
                style={styles.deleteButton}
            >
                <Ionicons  
                    name='trash-outline'
                    size={20}
                />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 8,
        // minHeight: 50,
    },
    checkbox: {
        marginRight: 12,
    },
    taskName: {
        flex: 1,
    },
    taskText: {
        fontSize: 16,
        fontWeight: '500'
    },
    completedCard: {
        opacity: 0.65,
    },
    completedText: {
        textDecorationLine: 'line-through',
    },
    deleteButton: {
        padding: 5,
        marginLeft: 10,
    },
})

