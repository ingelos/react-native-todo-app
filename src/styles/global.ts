import { StyleSheet } from "react-native";

export const colors = {
    background: '#f8f3ef',
    header:'#523d35',
    surface: '#2a2a4a',
    primary: '#523d35',
    text: '#223030',
    textSecondary: '#a0a0b0',
    alert: '#ff5252',
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})