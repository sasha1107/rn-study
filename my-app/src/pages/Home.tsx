import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen({ navigation, route }: { navigation: any; route: any }) {
    const headerStyle = () => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: 'yellow',
            headerTitleStyles: {
                fontWeight: 'bold',
                color: 'green'
            }
        })
    }
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);
    
    headerStyle();
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
            <Button
                title='Go to Details'
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
            <Button
                title='Create post'
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
    );
}