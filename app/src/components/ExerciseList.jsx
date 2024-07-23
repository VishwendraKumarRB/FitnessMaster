import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
// import { Image } from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const ExerciseList = ({data}) => {
  const navigation = useNavigation();
  _onExerciseBtnPress = item => {
    navigation.navigate('ExerciseDetailsScreen', {
      item: item,
    });
  };

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => (
          <ExerciseCard
            index={index}
            item={item}
            onExerciseBtnPress={_onExerciseBtnPress}
          />
        )}
      />
    </View>
  );
};

export default ExerciseList;

const ExerciseCard = ({item, index, onExerciseBtnPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          return onExerciseBtnPress(item);
        }}
        className="flex py-3 space-y-2">
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{uri: item.gifUrl}}
            // contentFit="cover"
            style={{width: wp(44), height: wp(52)}}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{fontSize: hp(1.7)}}
          className="text-neutral-700 font-semibold ml-1 tracking-wide">
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
