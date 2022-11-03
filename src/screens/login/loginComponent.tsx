import React from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import commonStyle, {Colors} from '../../assets/css/mainStyle';
import {LoginPayload} from '../../models/authModels';

const LoginComponent = ({onSubmit}: LoginComponentProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <SafeAreaView style={commonStyle.container}>
        <Text style={[commonStyle.fs6, commonStyle.mt5]}>Login</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            // eslint-disable-next-line no-useless-escape
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //email validation regex
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[commonStyle.textInput, commonStyle.mt10]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              placeholder="Enter your registered email id"
            />
          )}
          name="email"
        />
        {!!errors.email && (
          <Text style={commonStyle.errorTxt}>
            Please enter a valid email id
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[commonStyle.textInput, commonStyle.mt5]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your password"
              secureTextEntry
            />
          )}
          name="password"
        />

        {!!errors.password && (
          <Text style={commonStyle.errorTxt}>Please enter your password</Text>
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleSubmit(onSubmit)}
          style={[commonStyle.btn, commonStyle.mt8]}>
          <Text style={[commonStyle.btnTxt]}>LOGIN</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

interface LoginComponentProps {
  onSubmit: (formData: LoginPayload) => void;
}

export default LoginComponent;
