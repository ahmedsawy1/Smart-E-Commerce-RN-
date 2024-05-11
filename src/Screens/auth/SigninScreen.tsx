import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormInputController from '../../components/controllers/FormInputController'
import { useForm } from 'react-hook-form'
import { rS } from '../../styles/responsive'
import MainButton from '../../components/buttons/MainButton'

const SignInScreen = () => {
    const {control} = useForm({})

  return (
    <View style={styles.container}>
      <FormInputController
        control={control}
        name="email"
        placeholder="Email"
        props={{
          keyboardType: 'email-address',
        }}
      />

      <FormInputController
        control={control}
        name="password"
        placeholder="Password"
        props={{
          secureTextEntry: true,
        }}
      />

      <MainButton
        title="Sign In"
        style={{
          marginTop: 20,
        }}
      />
    </View>
  );
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        paddingHorizontal: rS(20)
    }
})