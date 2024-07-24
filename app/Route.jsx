import HomeScreen from './src/Screens/HomeScreen';
import Exercises from './src/Screens/Exercises';
import User from './src/Screens/User';
import ExerciseDetailsScreen from './src/Screens/ExerciseDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen
          name="ExerciseDetailsScreen"
          component={ExerciseDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainRoute;
