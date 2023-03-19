// In App.js in a new project

import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/pages/Home';
import { DetailsScreen } from './src/pages/Detail';
import { CreatePostScreen } from './src/pages/CreatePost';
import HomeImg from './src/assets/image/home.png';

const Stack = createNativeStackNavigator();

const LogoTitle = () => (
    <Image
        style={{width: 40, height: 40}}
        source={HomeImg}
    />
)
function App() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerTitle: () => <LogoTitle />
                    }}
                />
                <Stack.Screen name='Details' component={DetailsScreen} />
                <Stack.Screen name='CreatePost' component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
