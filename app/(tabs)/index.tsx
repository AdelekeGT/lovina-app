import { Text, View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('../../assets/images/placeholder-image.jpeg');

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={PlaceholderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label='Take a photo' />
                <Button label='Choose a photo' theme='primary' />
            </View>
            <Text style={styles.text}>Welcome to Lovina</Text>
            <Text style={styles.text2}>
                I am making this app to see how I can learn how to work with
                react Native
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
    text: {
        color: '#fff',
    },
    text2: {
        color: '#fff',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
