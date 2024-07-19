import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {sliderImages} from '../constants/index';

import Carousel from 'react-native-reanimated-carousel';

const ImageSlider = () => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop={true}
        width={width}
        height={width/2}
        autoPlay={true}
        data={sliderImages}
        scrollAnimationDuration={1000}
        renderItem={({item, index}) => (
            <Image source={item} style={{ width: width, height: width/2 }} />
        )}
      />
    </View>
  );
};

export default ImageSlider;
