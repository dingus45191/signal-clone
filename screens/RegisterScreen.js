import React from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { View, Text } from 'react-native'

const RegisterScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom:50}}>Create a Signal Account</Text>
            <View>
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
