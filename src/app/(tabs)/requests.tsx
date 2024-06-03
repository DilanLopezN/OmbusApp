import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RequestCards from '@/src/components/RequestCards'

import SocialAssistance from '../../assets/images/assistencia_social.jpeg'
import CivilDefense from '../../assets/images/defesa_civil.jpeg'
import Education from '../../assets/images/educacao.jpeg'
import Environment from '../../assets/images/meio_ambiente.jpeg'
import Construction from '../../assets/images/obras.jpeg'
import Health from '../../assets/images/saude.jpeg'

const cardsMapper = [
  { id: 1, title: 'Assistencia Social', key: SocialAssistance},
  { id: 2, title: 'Defesa Civil', key: CivilDefense},
  { id: 3, title: 'Educação', key: Education},
  { id: 4, title: 'Meio Ambiente', key: Environment},
  { id: 5, title: 'Obras', key: Construction},
  { id: 6, title: 'Saúde', key: Health},
]

const Requests = () => {
  return (
  <>
    <Text className='m-2 text-zinc-900 font-bold'>Página de abertura de solicitações</Text>
    <View className='flex flex-wrap flex-1 w-full h-full mr-1 ml-1 items-center'>
    
    {
      cardsMapper.map((card) =><RequestCards key={card.id} title={card.title} src={card.key} />)
    }
  
  </View>  
  </>
)


}

export default Requests