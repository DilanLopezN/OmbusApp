import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import LogoPrefeitura from '../assets/images/logo.png'
import LaptopIcon from '../assets/images/laptop.png'

export default function Index() {
  return (

    <View
      className="flex-1 justify-center items-center bg-slate-200"

    >


      <View className="flex flex-col items-center justify-center w-[380] h-[460] rounded-md bg-white">
        <View className="flex flex-col justify-start mb-4">
          <Text className="font-semibold text-base">Escolha uma opção de acesso:</Text>
          <Text className="text-zinc-500 text-sm">Utilize as opções abaixo!</Text>
        </View>

        <Image className="w-[328] h-[200]" source={LogoPrefeitura} />
        <View className="flex flex-row w-full gap-2" >
          <View className="bg-blue-500  w-[116] h-[88] rounded-md items-center justify-center" >
            <Image source={LaptopIcon} className="w-9 h-9" tintColor="white" />
            <Text className="font-normal text-sm m-1 text-white">OUVIDORIA</Text>
          </View>
          <View className="bg-red-500   w-[116] h-[88] rounded-md items-center justify-center" >
            <Image source={LaptopIcon} className="w-9 h-9" tintColor="white" />
            <Text className="font-normal text-sm m-1 text-white">SECRETARIA</Text>
          </View>
          <Link href="/signInUsers">
            <View className="bg-green-500 w-[116] h-[88] rounded-md items-center justify-center" >
              <Image source={LaptopIcon} className="w-9 h-9" tintColor="white" />
              <Text className="font-normal text-sm m-1 text-white">ATENDIMENTO</Text>
            </View>
          </Link>

        </View>



      </View>


    </View>

  );
}
