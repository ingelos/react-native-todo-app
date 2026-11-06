import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    onPress: () => void;
}

export default function AddTaskButton({onPress}: Props) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                + Add Task
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    }
})