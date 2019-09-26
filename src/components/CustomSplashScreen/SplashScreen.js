import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require("../../assets/images/splash.png")}
                style={styles.backgroundImage}
            >
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>
                        Loading configuration...
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen;
