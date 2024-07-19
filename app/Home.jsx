import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeInDown} from 'react-native-reanimated';
import User from './User';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Home = () => {
   
  return (
    <NavigationContainer>
      <Stack.Navigator
         initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;


const HomeScreen = ({navigation}) => {

  return (
    <View className="flex-1 flex justify-end ">
      <StatusBar style="dark-content" hidden={true} />
      <Image
        className="h-full w-full absolute"
        source={require('../assets/images/welcome.png')}
      />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{width: wp(100), height: hp(100)}}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 0.8}}
        className="flex justify-end pb-12 space-y-8">
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center">
          <Text
            style={{fontSize: hp(5)}}
            className="text-white font-bold tracking-wide">
            Best
            <Text className="text-rose-500"> Workouts</Text>
          </Text>
          <Text
            style={{fontSize: hp(5)}}
            className="text-white font-bold tracking-wide">
            For You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).springify()}>
          <TouchableOpacity
            onPress={() => navigation.navigate('User')}
            style={{height: hp(7), width: wp(80)}}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200">
            <Text
              style={{fontSize: hp(3)}}
              className="text-white font-bold tracking-widest ">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};


