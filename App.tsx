import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import FormInputController from './src/components/controllers/FormInputController';
import {yupResolver} from '@hookform/resolvers/yup';
import {fromSchema} from './src/constants/schemas/authSchemas';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(fromSchema),
  });

  const submit = data => {
    console.log(data);
    Alert.alert(JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <Text>React Hook From Example In React Native</Text>

      <FormInputController
        control={control}
        name={'username'}
        placeholder={'User Name'}
        errors={errors}
      />

      <FormInputController
        control={control}
        name="email"
        placeholder="Enter Your Email"
        errors={errors}
      />

      <FormInputController
        control={control}
        name={'password'}
        placeholder={'Password'}
        props={{
          secureTextEntry: true,
        }}
        errors={errors}
      />

      <Button title="submit" onPress={handleSubmit(submit)} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginTop: 18,
    borderColor: 'gray',
  },
  textError: {
    color: 'red',
  },
});
