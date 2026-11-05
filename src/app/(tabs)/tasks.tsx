import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function TasksScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>All tasks</Text>
            <Link href='/add-task' style={{ fontSize: 18, color: '#007bff'}}>
                Add New Task
            </Link>
        </ScrollView>
    )
}