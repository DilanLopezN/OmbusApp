import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import UserSignIn from './signInUsers';
import UserSignUp from './signUpUsers';

const AuthLayout = () => {
  type AuthRoutes = {
    signInUsers: undefined;
    signUpUsers: undefined;
  }

  type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()
  return (

    <Navigator screenOptions={{ headerShown: false }} >
      <Screen options={{ headerShown: false }} name="signInUsers" component={UserSignIn} />
      <Screen name="signUpUsers" component={UserSignUp} />
    </Navigator>

  )
}

export default AuthLayout