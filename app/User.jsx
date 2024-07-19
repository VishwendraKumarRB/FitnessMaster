import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from './src/components/ImageSlider';
const User = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />
      {/* Avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{fontSize: hp(4.5)}}
            className="font-bold tracking-wider text-neutral-700">
            READY TO
          </Text>
          <Text
            style={{fontSize: hp(4.5)}}
            className="font-bold tracking-wider text-rose-500">
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require('../assets/images/my.jpg')}
            style={{height: 60, width: 60, borderRadius: 30}}
          />
          <View className="bg-neutral-200 rounded-full flex justify-center items-center "
          style={{height:50,width:50,borderRadius:25,borderWidth:2,borderColor:"gray"}}>
            <Icon
              name="notifications"
              color="#ff0000"
              size={hp(3)}
            />
          </View>
        </View>
      </View>

      {/*Image Slider */}
      
      <View>
        {/* <ImageSlider/> */}
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({});
