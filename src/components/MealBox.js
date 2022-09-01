import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from "react-native";
import styles from "./MealBoxStyle";

function MealBox({ meal, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.mealBox} >
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={{ uri: meal.strMealThumb }}>
                    <Text numberOfLines={1} style={styles.text}>{meal.strMeal}</Text>
                </ImageBackground>

            </View>

        </TouchableWithoutFeedback>
    )
}

export default MealBox