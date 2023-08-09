import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { 
  SettingScreen,
  CalendarScreen,
  HomeScreen,
  CreatePostScreen,
  DetailsScreen
} from './src/pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const LogoTitle = () => (
  <Entypo name="emoji-flirt" size={24} color="black" />

);

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerTitle: () => <LogoTitle />,
                }}
            />
            <Stack.Screen name='Details' component={DetailsScreen} />
            <Stack.Screen name='CreatePost' component={CreatePostScreen} />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Entypo name='home' size={24} color={focused ? '#2997FF' : 'gray'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={CalendarScreen}
                options={{
                    title: '캘린더',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Entypo name='calendar' size={24} color={focused ? '#2997FF' : 'gray'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Notification'
                component={CreatePostScreen}
                options={{
                    title: '알림',
                    tabBarIcon: ({ color, size, focused}) => (
                        <Entypo name='bell' size={24} color={focused ? '#2997FF' : 'gray'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Message'
                component={SettingScreen}
                options={{
                    title: '설정',
                    tabBarIcon: ({ color, size,focused }) => (
                      <Entypo name="cog" size={24} color={focused ? '#2997FF' : 'gray'}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

export default App;
