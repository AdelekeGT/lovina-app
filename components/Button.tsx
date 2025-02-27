import { Text, StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type buttonProps = {
    label: string;
    theme?: 'primary' | 'secondary';
};

export default function Button({ label, theme }: buttonProps) {
    if (theme === 'primary') {
        return (
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => alert('Button Pressed')}
                >
                    <FontAwesome
                        name='picture-o'
                        size={18}
                        color='#fff'
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>;
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        padding: 3,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
				borderWidth: 4,
				borderColor: '#f01d71',
    },
});
