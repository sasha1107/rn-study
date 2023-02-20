import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [lotto, setLotto] = useState<number[]>([]);

  function makeLotto() {
    let lnumber:number[] = [];
    let rnumber:number = 0;

    let lottos = [];
    let a  = 0;
    for (let i = 1; i <= 45; i++) {
      lottos.push(i);
    }
    for (let i = 0; i < 45; i++) {
      rnumber = ~~(Math.random() * 45);
      a = lottos[i];
      lottos[i] = lottos[rnumber];
      lottos[rnumber] = a;
    }
    console.log(lottos);
    for (let i = 0; i < 6; i++) {
      lnumber.push(lottos[i]);
    }
    setLotto(lnumber);
  }

  useEffect(() => {
    makeLotto()  
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:100,}}>로또 앱</Text>
      <Button title='로또 번호 생성' onPress={()=> makeLotto()}></Button>
      <Text style={{fontSize: 25,}}>{lotto.toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assa: {
    color: 'salmon',
  },
  cnt: {
    fontSize: 50,
    marginTop: 20,
  }
});
