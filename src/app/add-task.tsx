import { colors, globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTasks } from "../context/TaskContext.js";


export default function AddTaskScreen() {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('secondary');
    const [isFocused, setIsFocused] = useState(false);

    const { addTask } = useTasks();

    const handleAddTask = () => {
        if (!name.trim()) return;

        addTask(name.trim(), priority);
        router.replace('/');

    };

    const handleCancel = () => {
        router.replace('/');
    }

    const priorities = ['urgent', 'secondary', 'additional'];


    return (
        <View style={globalStyles.container}>

            <Text style={globalStyles.title}>Add Task</Text>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Task name</Text>

                <TextInput
                    style={styles.input}
                    placeholder={isFocused ? '' : 'What do you need to do?'}
                    placeholderTextColor={colors.text}
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>

            <View style={styles.formGroup}>

                <Text style={styles.label}>Priority</Text>

                <View style={styles.priorityContainer}>
                    {priorities.map(item => {
                        const selected = priority === item;

                        return (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.priorityButton,
                                    selected && styles.selectedPriority
                                ]}
                                onPress={() => setPriority(item)}
                            >
                                <Text style={[
                                    styles.priorityText,
                                    selected && styles.selectedPriorityText
                                ]}
                                >
                                    {selected ? "✓" : ''}
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                    }

                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={handleCancel}
                    >
                        <Text style={styles.cancelButtonText}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={handleAddTask}
                    >
                        <Text style={styles.addButtonText}>
                            Add task
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    formGroup: {
        width: '100%',
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        borderWidth: 2,
        fontWeight: '200',
        borderRadius: 10,
        width: '100%',
        height: 50,
        paddingHorizontal: 14,
        fontSize: 16,
    },
    priorityContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 8,
    },
    priorityButton: {
        flex: 1,
        height: 48,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    selectedPriority: {
        backgroundColor: '#2e2f23',
    },
    priorityText: {
        fontSize: 14,
        color: '#555555',
        textTransform: 'capitalize',
    },
    selectedPriorityText: {
        color: colors.background,
        fontWeight: '700',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor:'#d1d5db',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#555555',
        fontSize: 16,
        fontWeight: '600',
    },
    addButton: {
        flex: 1,
        height: 50,
        backgroundColor: '#734e30',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    }
})