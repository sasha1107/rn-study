import React from 'react'
import { View, Text, Button } from 'react-native';

const Calendar = ({ navigation, route }: { navigation: any; route: any }) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>달력</Text>
        </View>
    );
}

export default Calendar