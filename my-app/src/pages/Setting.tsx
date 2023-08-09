import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { Profile } from '../components/setting/Profile';
import { Switch, ListItem } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';

export default function SettingScreen({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    const [checked, setChecked] = useState(true);

    return (
        <ScrollView
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 100,
                padding: 18,
            }}
        >
            <Profile name='정수현' />

            <ListItem bottomDivider>
                <Entypo name='log-out' size={18} color='black' />
                <ListItem.Content>
                    <ListItem.Title>푸시 알림 설정</ListItem.Title>
                </ListItem.Content>
                <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(!checked)}
                />
            </ListItem>
            <ListItem bottomDivider>
                <Entypo name='log-out' size={18} color='black' />
                <ListItem.Content>
                    <ListItem.Title>로그아웃</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Entypo name='log-out' size={18} color='black' />
                <ListItem.Content>
                    <ListItem.Title>로그아웃</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Entypo name="bug" size={18} color="black" />
                <ListItem.Content>
                    <ListItem.Title>버그 제보</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Entypo name='log-out' size={18} color='black' />
                <ListItem.Content>
                    <ListItem.Title>로그아웃</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </ScrollView>
    );
}
