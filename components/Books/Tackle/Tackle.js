import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getLures } from '../../../fetchCalls';

import { TackleStylesheet as styles } from './TackleStylesheet';

export default function CatchLog() {
  const [lures, setLures] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchLures() {
      const lures = await getLures();
      setLures(lures.data);
    }

    fetchLures();
  }, []);

  function navToBooks() {
    navigation.navigate('book');
  }

  const lureCards = lures.map(lure => {
    const { id } = lure;
    const { brand, variety, color, weight } = lure.attributes;

    return (
      <View style={styles.lureCard} key={id} testID={`${id}`}>
        <View>
          <Text>Brand: {brand}</Text>
          <Text>Type: {variety}</Text>
        </View>
        <View>
          <Text>Color: {color}</Text>
          <Text>Weight: {weight}</Text>
        </View>
      </View>
    );
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#F0EAD6' }}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={navToBooks}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Tacklebox', style: { fontSize: 25 } }}
        backgroundColor='#F0EAD6'
      />
      <ScrollView style={{ height: '100%', backgroundColor: '#F0EAD6' }}>
        <View style={styles.lureCardContainer}>{lures && lureCards}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
