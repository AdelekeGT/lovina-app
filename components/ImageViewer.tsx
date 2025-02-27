import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type ImageViewerProps = {
    imageSource: string;
};

export default function ImageViewer({ imageSource }: ImageViewerProps) {
    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
