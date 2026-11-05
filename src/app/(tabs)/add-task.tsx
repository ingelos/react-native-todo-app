import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

export default function AddTaskScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Add Task</Text>
        </View>
    )
}