import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import MealBox from '../components/MealBox';
import useFetch from '../useFetch/useFetch';

function Meals({ route, navigation }) {
  const meal = route.params.category;

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);

  function handleMeal(id) {
    navigation.navigate("Detail", { id })
  }

  function renderMeals({ item }) {
    return <MealBox meal={item} onPress={() => handleMeal(item.idMeal)} />
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
    <View style={styles.container}>

      <FlatList
        data={data.meals}
        renderItem={renderMeals}
        keyExtractor={item => item.idMeal}
      />

    </View>
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

export default Meals