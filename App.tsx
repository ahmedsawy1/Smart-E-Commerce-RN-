import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import FormInput from './src/components/inputs/FormInput';

const formSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email Is Required'),
  full_name: yup.string().min(3, 'full name must be at least 3 characters'),
  password: yup.string().min(8, 'Password must be at least 8 characters'),
});

export default function App() {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = data => {
    console.log(data);
    Alert.alert('Successful', JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Login Form</Text>
      <FormInput control={control} name={'email'} placeholder="email" />
      <FormInput control={control} name={'full_name'} placeholder="full name" />
      <FormInput
        control={control}
        name={'password'}
        placeholder="password"
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  },
});
