import { StyleSheet } from "react-native";

export const colors = {
    background: '#f8f3ef',
    header: '#523d35',
    surface: '#1b1208e1',
    primary: '#523d35',
    text: '#223030',
    // textSecondary: '#f8f3ef',
    alert: '#ff5252',
}

export const globalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 25,
        paddingTop: 50,
    },
   
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 10,
        textAlign: 'center',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        alignSelf: 'center',
    }
})