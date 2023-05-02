import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { View, Text, KeyboardAvoidingView, Pressable, Image } from 'react-native'

import arrow from '../assets/images/arrow-left-47-32.png'
import ButtonMenu from '../components/ButtonMenu';
import CardForm from '../components/CardForm';
import CustomFonts from '../components/CustomFonts';

export default function PaymentScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Pagamento',
      headerStyle: {
        backgroundColor: '#006557',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
      },
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Pressable
          style={{
            alignContent: 'flex-start',
            height: '100%',
            justifyContent: 'center',
            width: 57,
          }}
          onPress={() => navigation.goBack()}>
          <Image source={arrow}
            style={{
              height: 35,
              width: 35,
            }}
          />

        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <CustomFonts>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        style={{ flex: 1 }}>
        <View style={{
          alignItems: 'center',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Text style={
            {
              color: '#424F4D',
              fontFamily: 'Montserrat-Medium',
              fontSize: 18,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 60,
            }
          }>
            Insira os dados para concluir a contratação via cartão de crédito.
          </Text>
          <CardForm />
          <View style={{ flex: 2 }}>
            <Pressable
              style={{
                backgroundColor: '#07689f',
                width: 310,
                justifyContent: 'center',
                borderRadius: 3,
              }}
              onPress={() => alert('Nesse onPress() irá toda a lógica de verificação do cartão e dar andamento a transação.')} underlayColor="#fff">
              <Text style={{
                color: '#fff',
                fontFamily: 'Montserrat-Medium',
                fontSize: 18,
                paddingBottom: 10,
                paddingTop: 10,
                textAlign: 'center',
              }}>
                Pagar
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.goBack()} // Aqui deixei o onPress() para voltar para a tela anterior já que não depende do padrão de nome das outras telas
              underlayColor="#07689F"> 
              <Text style={{
                color: '#07689F',
                fontSize: 18,
                fontFamily: 'Montserrat-Medium',
                paddingTop: 15,
                textAlign: 'center',
              }}>
                Voltar
              </Text>
            </Pressable>
          </View>
          <ButtonMenu />
        </View>
      </KeyboardAvoidingView>
    </CustomFonts>
  )
}
