import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryBoxStyle";

function CategoryBox({ category, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.categoryBox}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.text}>{category.strCategory}</Text>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default CategoryBox