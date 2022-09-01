import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from './pages/Category';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={
        {
          headerTitleAlign: 'center',
          headerTitleStyle: { color: "orange", fontWeight: "bold" },
          headerTintColor: "orange"
        }}>

        <Stack.Screen name='Category' component={Category} />
        <Stack.Screen name='Meals' component={Meals} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Router