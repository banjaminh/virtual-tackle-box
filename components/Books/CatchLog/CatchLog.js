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
import { deleteCatch, getCatches } from '../../../fetchCalls';

import { CatchLogStylesheet as styles } from './CatchLogStylesheet';

export default function CatchLog() {
  const [catches, setCatches] = useState([]);

  const navigation = useNavigation();

  function navToBooks() {
    navigation.navigate('BooksDashboard');
  }

  async function fetchCatches() {
    const catches = await getCatches();
    setCatches(catches.data);
  }

  async function delCatch(id) {
    await deleteCatch(undefined, id);
    fetchCatches();
  }

  useEffect(() => {
    fetchCatches();
  }, []);

  const catchCards = catches.map(c => {
    const { id } = c;
    const {
      species,
      weight,
      length,
      spot_name,
      latitude,
      longitude,
      lure,
      photo_url
    } = c.attributes;

    return (
      <View style={styles.catchCard} key={id} testID={`${id}`}>
        <TouchableOpacity onPress={() => delCatch(id)}>
          <Text>X</Text>
        </TouchableOpacity>
        <View>
          <Text>Species: {species}</Text>
          <Text>Weight: {weight}</Text>
          <Text>Length: {length}</Text>
        </View>
        <View>
          <Text>Fishing Spot: {spot_name}</Text>
        </View>
        <View>
          <Text>Lure: {lure}</Text>
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
        centerComponent={{ text: 'Catch Log', style: { fontSize: 25 } }}
        backgroundColor='#F0EAD6'
      />
      <ScrollView style={{ height: '100%', backgroundColor: '#F0EAD6' }}>
        <View style={styles.catchCardContainer}>{catches && catchCards}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
