import { View, StyleSheet, Dimensions } from "react-native";

import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const screenWidth = Dimensions.get("window").width;

export default function SkeletonCard() {
    return (
        <MotiView
        style={styles.card}
        from={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
            loop: true,
            type: "timing",
            duration: 1000,
            delay: 300,
            easing: Easing.inOut(Easing.ease),
        }}
        >
        <View style={styles.image} />
        <View style={styles.textBlock} />
        <View style={[styles.textBlock, { width: '80%'}]} />
        </MotiView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#081f5c',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,

        // Sombra para profundidade
        shadowColor: "#334eac",
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    image: {
        width: "100%",
        height: screenWidth * 0.5,
        backgroundColor: "#7096d1",
        borderRadius: 16,
    },
    textBlock: {
        height: 16,
        backgroundColor: "#e7f1ff",
        marginTop: 12,
        borderRadius: 8,
    },
});