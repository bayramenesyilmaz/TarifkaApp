import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import CategoryBox from '../components/CategoryBox';
import useFetch from '../useFetch/useFetch';

function Category({ navigation }) {

    const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')

    function handlePress(category) {
        navigation.navigate('Meals', { category })
    }

    function renderCategory({ item }) {
        return <CategoryBox category={item} onPress={() => handlePress(item.strCategory)} />
    }

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <View style={styles.error_container}>
            <Text style={styles.error_title}>ERROR</Text>
            <Text style={styles.error_text}>{error}</Text>
        </View>
    }

    return (

        <SafeAreaView style={styles.container}>

            <FlatList
                data={data.categories}
                renderItem={renderCategory}
                keyExtractor={item => item.idCategory}
            />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange"
    },
    error_container: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    error_title: {
        fontSize: 40,
        backgroundColor: "red",
        color: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    error_text: {
        fontSize: 20,
        color: "white"
    }
})

export default Category