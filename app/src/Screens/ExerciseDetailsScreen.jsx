import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-virtualized-view';
import Animated, {FadeInDown} from 'react-native-reanimated';

const ExerciseDetailsScreen = ({navigation, route}) => {
  const item = route.params.item;
  // console.log('ExerciseDEtails Screen', item);
  return (
    <View className="flex-1 flex">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{uri: item.gifUrl}}
          contentFit="cover"
          style={{height: wp(100), width: wp(100)}}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mx-2 absolute rounded-full mt-2 right-0">
        <Text
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            color: '#fff',
            backgroundColor: 'red',
            textAlign: 'center',
            fontSize: 28,
            fontWeight: '600',
          }}>
          X
        </Text>
      </TouchableOpacity>

      {/* Details of Exercise */}
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{fontSize: hp(3.5)}}
          className="font-semibold text-neutral-800 tracking-wide">
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{fontSize: hp(2)}}
          className="text-neutral-700 tracking-wide">
          Equipment :
          <Text className="text-neutral-800 font-bold"> {item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{fontSize: hp(2)}}
          className="text-neutral-700 tracking-wide">
          Secondary Muscles :
        </Animated.Text>
        {item?.secondaryMuscles.map((secondaryMuscles, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay(300).duration(300).springify()}
              key={secondaryMuscles}
              className="text-neutral-800 font-bold">
              {secondaryMuscles}
            </Animated.Text>
          );
        })}
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{fontSize: hp(2)}}
          className="text-neutral-700 tracking-wide">
          Target Muscles :
          <Text className="text-neutral-800 font-bold"> {item?.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(500).duration(300).springify()}
          style={{fontSize: hp(3)}}
          className="font-semibold text-neutral-800 tracking-wide">
          Instructions :
        </Animated.Text>
        {item.instructions.map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay((index + 6) * 100)
                .duration(300)
                .springify()}
              key={instruction}
              style={{fontSize: hp(1.7)}}
              className="text-neutral-800">
              {instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default ExerciseDetailsScreen;
