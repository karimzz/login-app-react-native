import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { thems } from '../Thems'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'



export default function LoginScreen() {

  return (
    <View className="flex-1 bg-white" style={{backgroundColor : thems.MainColor}} >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity>
            <ArrowLeftIcon/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}