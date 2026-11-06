import { globalStyles } from "@/styles/global";
import { FlatList, ScrollView, Text } from "react-native";
import TaskCard from "../../components/TaskCard";
import { useTasks } from "../../context/TaskContext";


export default function TasksScreen() {
    const { tasks } = useTasks();
    
    return (
        <ScrollView style={globalStyles.screen}>
            <Text style={globalStyles.title}>All tasks</Text>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({item }) => (
                    <TaskCard task={item}/>
                )}
                />
        </ScrollView>
    )
}