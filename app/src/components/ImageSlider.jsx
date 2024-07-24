import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {sliderImages} from '../constants/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Carousel from 'react-native-reanimated-carousel';

const ImageSlider = () => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{height: width / 2, marginTop: 20}}>
      <Carousel
        loop={true}
        width={width}
        height={width / 2}
        autoPlay={true}
        data={sliderImages}
        scrollAnimationDuration={1000}
        renderItem={({item, index}) => (
        
            <Image source={item} style={{width:wp(90), height: width / 2,borderRadius:30,marginLeft:20,marginRight:20}} />
       
        )}
      />
    </View>
  );
};


export default ImageSlider;
