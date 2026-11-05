import { StyleSheet } from "react-native";

export const colors = {
    background: '#f8f3ef',
    header:'#bb9d7c',
    primary: '#8e6e57',
    button: '#bcc4c4',
    text: '#583f2e'
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