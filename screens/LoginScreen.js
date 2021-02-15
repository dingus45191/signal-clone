import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { Image, Input } from 'react-native-elements'


const LoginScreen = () => {
    return (
      <View>
        <StatusBar style="light" />
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/225px-Signal-Logo.svg.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.inputContainer}>
          <Input placeholder="Email" autoFocus type="email" />
          <Input placeholder="Password"secureTextEntry type="password" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{

    }
})

export default LoginScreen
