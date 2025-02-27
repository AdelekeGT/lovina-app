import { View, StyleSheet } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View>
                <Link href={'/'} style={styles.button}>
                    Go back to Home Screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        color: '#fff',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'deeporange',
        borderRadius: 5,
    },
});
