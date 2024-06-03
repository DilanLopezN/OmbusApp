import { View, Text, Platform } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import RequestSvg from '../../assets/requests.svg'
import FollowUpSvg from '../../assets/followup.svg'
import MaleIconSvg from '../../assets/genderman.svg'
import WomanIconSvg from '../../assets/genderfemale.svg'


const gender = "MALE"

const TabsLayout = () => {
  return (
     <>
     <Tabs>
      <Tabs.Screen name="requests" options={
        {
          title: 'Solicitações',
          tabBarActiveTintColor: "black",
          tabBarActiveBackgroundColor: "#e9e9e9",
          headerShown: false,
  
          tabBarIcon: () => <RequestSvg fill='black' color="black"  width={32} height={32} />
          
        }
      } />

    <Tabs.Screen name="follow-up" options={
        {
          title: 'Acompanhamento',
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarActiveBackgroundColor: "#e9e9e9",
          tabBarIcon: () => <FollowUpSvg fill='black' color="black"  width={32} height={32} />
        }
      } />

    <Tabs.Screen name="profile" options={
        {
          title: 'Meu Perfil',
          tabBarActiveTintColor: "black",
          tabBarActiveBackgroundColor: "#e9e9e9",
          headerShown: false,
          tabBarIcon: () => gender == "MALE" ? <MaleIconSvg fill='black' color="black"  width={32} height={32} /> : <WomanIconSvg fill='black' color="black"  width={32} height={32} />
          
        }
      } />
     </Tabs>
     </>
  )
}

export default TabsLayout