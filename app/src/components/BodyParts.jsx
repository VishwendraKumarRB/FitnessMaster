import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {bodyParts} from '../constants/index';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'

export default function BodyParts() {
    const navigation = useNavigation();

_onButtonPress = () => {
    navigation.navigate('Exercises');
}
  return (
    <View className="mx-4" style={{marginVertical: 10}}>
      <Text
        style={{fontSize: hp(3)}}
        className="font-semibold text-neutral-700">
        Exercises
      </Text>
      <FlatList
      style={{marginBottom:100}}
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => (
           <BodyPartCard index={index} item={item} onButtonPress={_onButtonPress} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({item, index, onButtonPress}) => {
  return (
    <TouchableOpacity
    onPress={onButtonPress}
      style={{width: wp(44), height: wp(52)}}
      className="flex justify-end p-4 mb-4">
      <Image
        source={item.image}
        resizeMode="cover"
        style={{width: wp(44), height: wp(52)}}
        className="rounded-[35px] absolute"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={{width: wp(44), height: hp(15)}}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        className="absolute bottom-0 rounded-b-[35px]"
      />
      <Text
        style={{fontSize: hp(2.3)}}
        className="text-white font-semibold text-center tracking-wide">
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};
