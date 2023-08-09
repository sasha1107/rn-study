import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 20,
    }

})
export const Profile = ({name}: {name: string}) => {
    return (
        <View style={styles.container}>
            <View>
            <Text>
                <Avatar
                    size={40}
                    rounded
                    title={name.slice(0,1)}
                    containerStyle={{ backgroundColor: "blue" }}
                />
            </Text>
            </View>
            <View>
                <Text>
                    {name}
                </Text>
            </View>
        </View>
        )
};
