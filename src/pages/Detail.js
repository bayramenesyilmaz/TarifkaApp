import React from 'react';
import { View, Text, Image, FlatList, Button, Linking, StyleSheet, SafeAreaView, Dimensions, TouchableHighlight, ActivityIndicator } from "react-native";
import useFetch from '../useFetch/useFetch';

function Detail({ route }) {
  const id = route.params.id;

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

  function renderMealInfo({ item }) {
    return <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.strMealThumb }} />
      <Text style={styles.title}>{item.strMeal}</Text>
      <Text style={styles.country}>{item.strArea}</Text>
      <Text style={styles.desc}>{item.strInstructions}</Text>
      <TouchableHighlight style={styles.button}>
        <Button  color="red" title='Watch on YouTube' onPress={() => Linking.openURL(item.strYoutube)} />
      </TouchableHighlight>
    </View>

  }

  if(loading){
    return <ActivityIndicator size="large" />
  }

  if(error){
    return <View style={styles.error_container}>
      <Text style={styles.error_title}>ERROR</Text>
      <Text style={styles.error_text}>{error}</Text>
    </View>
  }


  return (
    <SafeAreaView style={styles.body_container}>
      <FlatList
        data={data.meals}
        renderItem={renderMealInfo}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body_container: {
    padding: 10,
  },
  container: {
    backgroundColor: "#e0e0e0"
  },
  image: {
    width: Dimensions.get("window").width / 1.05,
    height: Dimensions.get("window").height / 2.8,
    resizeMode: "cover"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "brown",
    padding: 5
  },
  country: {
    fontSize: 20,
    fontWeight: "bold",
    color: "brown",
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  desc: {
    padding: 5,
    marginBottom: 25
  },
  button: {
    padding: 15,
  },
  error_container:{
    flex:1,
    backgroundColor:"orange",
    justifyContent:"center",
    alignItems:"center"
  },
  error_title:{
    fontSize:40,
    backgroundColor:"red",
    color:"white",
    padding:10,
    borderRadius:10,
    marginBottom:10
  },
  error_text:{
    fontSize:20,
    color:"white"
  }
})


export default Detail