import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ExerciseDetailsScreen = ({navigation, route}) => {
  const item = route.params.item;
  console.log('ExerciseDEtails Screen', item);
  return (
    <View>
      <Text>ExerciseDetailsScreen
      {/* {item.id} */}

      </Text>
    </View>
  );
};

export default ExerciseDetailsScreen;

