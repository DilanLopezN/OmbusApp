import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/src/components/FormField'
import AtendimentoBackground from '../../assets/images/atendimentobg.jpg'
import { ImageBackground } from 'react-native'
import { Button } from '@/src/components/Button'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

type AuthRoutes = {
  signIn: undefined;
  signUpUsers: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const UserSignIn = () => {

  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleReturn = () => {
    navigation.goBack()
  };

  const handleSignUpUsers = () => {
    navigation.navigate('signUpUsers')
  };


  const styles = StyleSheet.create({
    backgroundImage: {
      resizeMode: 'contain',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor preta com 50% de opacidade
    }


  })

  return (

    <View className='flex-1'>

      <ImageBackground style={styles.backgroundImage} source={AtendimentoBackground} >
        <View style={styles.overlay}></View>
        <View className='w-full items-center justify-center'>
          {/* Conteúdo sobreposto */}
          <Text className='text-white text-lg font-semibold shadow-md'>Realize o login ou entre de forma anônima</Text>
          <View className='w-4/5 mt-6'>
            <FormField title='Usuário' placeholder='Seu login' value={form.login} handleChangeText={(e) => setForm({ ...form, login: e })} />
            <FormField title='Senha' placeholder='Sua senha' value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} />
            <Button title='Entrar' className="mt-4" buttonColor='sky.500' borderColor="black" outlineBorder={true} pressedColor='sky.600' textColor="white" />
            <Button onPress={() => handleSignUpUsers()} title='Entrar de forma anônima' className="mt-4" variant="green" buttonColor='green.500' borderColor="black" outlineBorder={true} pressedColor='green.700' textColor="white" />
          </View>
          <Text className='text-zinc-200 text-md font-semibold shadow-md mt-2'>Não possui conta ? crie uma aqui !</Text>
        </View>
      </ImageBackground>



    </View>


  )
}

export default UserSignIn


