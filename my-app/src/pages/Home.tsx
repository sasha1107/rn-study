import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    const [time, setTime] = useState<Date | null>(null);

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            {!time && <Button
                title='출근'
                onPress={() => {
                    alert('출근');
                    setTime(new Date());
                }}
            />}
            {time && (
                <>
                <View>
                    <Text>오늘의 출근 시간</Text>
                    <Text
                        style={{ margin: 10 }}
                    >{`${time.getHours()} : ${time.getMinutes()}: ${time.getSeconds()}`}</Text>
                </View>
                <View>
                    <Text>퇴근까지</Text>
                    <Text
                        style={{ margin: 10 }}
                    >분 초 남음</Text>
                </View>
                </>
            )}
        </View>
    );
}
