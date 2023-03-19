// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/pages/Home';
import { DetailsScreen } from './src/pages/Detail';
import { CreatePostScreen } from './src/pages/CreatePost';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Overview' }}
                />
                <Stack.Screen name='Details' component={DetailsScreen} />
                <Stack.Screen name='CreatePost' component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
