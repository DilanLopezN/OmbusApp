
import { Image, Text, View } from 'react-native'

interface RequestCardsProps {
  src: any
  title: string
}
const RequestCards = ({src, title}: RequestCardsProps) => {
  return (
    <View className='bg-white w-44  rounded-md  shadow-custom m-2 '>
      <View className='flex flex-col w-full items-center justify-center'>
    
      <Image className='w-3/6' source={src} />
      <Text className='text-zinc-900 font-bold'>{title}</Text>
      </View>
      
    </View>
  )
}

export default RequestCards