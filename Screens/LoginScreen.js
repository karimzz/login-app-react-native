import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { thems } from '../Thems'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'




export default function LoginScreen() {

  // For Moving Between Screen  
  const navigation = useNavigation() ; 

  return (
    <View className="flex-1 bg-white" style={{backgroundColor : thems.MainColor}} >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=>navigation.goBack()} className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl">
            <Text >Go Back</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image source={require('./../assets/person.webp')} style={{width : 200 , height : 200}} />
        </View>

      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius :50 ,borderTopRightRadius :50}}>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput className="p-4 bg-gray-100 mb-3 text-gray-700 rounded-2xl"
          placeholder='Enter Email'
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput secureTextEntry className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
          placeholder='Enter Password'
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700" >Forget Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-4 rounded-2xl bg-yellow-400">
            <Text className="text-gray-700 font-bold text-center">Login</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
        <View className="flex-row justify-center space-x-5">
          <TouchableOpacity  className="bg-gray-100 p-2 rounded-2xl">
            <Image className="w-10 h-10" source={require("./../assets/gogole.png")} />
          </TouchableOpacity>
          <TouchableOpacity  className="bg-gray-100 p-2 rounded-2xl">
            <Image className="w-10 h-10" source={require("./../assets/apple.png")} />
          </TouchableOpacity>
          <TouchableOpacity  className="bg-gray-100 p-2 rounded-2xl">
            <Image className="w-10 h-10" source={require("./../assets/facebook.webp")} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-gray-500 font-semibold" >Don't have an account ?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
              <Text className="font-semibold text-yellow-500">  SignUp </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}