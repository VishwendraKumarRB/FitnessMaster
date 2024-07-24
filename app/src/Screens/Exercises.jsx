import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchExercisesByBodyPart} from '../../api';
import {ImageIndex} from '../../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import {ScrollView} from 'react-native-virtualized-view';

const Exercises = ({navigation, route}) => {
  const [exercises, setExercises] = useState([]);
  const item = route.params.item;
  //  console.log("Exercise",item)
  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);
  const getExercises = async bodypart => {
    let data = await fetchExercisesByBodyPart(bodypart);
    // console.log("apidata is:",data)
    setExercises(data);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{width: wp(100), height: hp(45)}}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-rose-500 m-4 absolute rounded-full">
        <Image
          source={ImageIndex.goBackImage}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
      </TouchableOpacity>

      {/* Exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{fontSize: hp(3)}}
          className="font-semibold text-neutral-700">
          {item.name} exercises
        </Text>
      </View>
      <View className="m-5 mb-5">
        <ExerciseList data={exercises} />
      </View>
    </ScrollView>
  );
};

export default Exercises;
