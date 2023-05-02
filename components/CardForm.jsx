import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function CardForm() {

    const navigation = useNavigation();

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardCPF, setCardCPF] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardCVV, setCardCVV] = useState('');

    const handleCardNumber = (text) => {
        const handledNumber = text
            .replace(/[^0-9]/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim();
        setCardNumber(handledNumber);
    }

    const handleCardName = (text) => {
        const handledName = text.toUpperCase();
        setCardName(handledName);
    }

    const handleCardCPF = (text) => {
        const handledCPF = text
            .replace(/[^\d]/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{2})$/, '$1-$2');
        setCardCPF(handledCPF);
    }

    const handleCardExpiration = (text, keyCode) => {
        const handledExpiration = text
            .replace(/[^0-9]/g, '')
            .replace(/(.{2})/, '$1/')
            .trim();

        setCardExpiration(handledExpiration);
    }

    const handleCardCVV = (text) => {
        const handledCVV = text
            .replace(/[^0-9]/g, '')
            .replace(/(.{3})/, '$1')
        setCardCVV(handledCVV);
    }


    return (
        <View style={{
            flex: 3.5,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <TextInput
                // keyboardType='numeric'
                maxLength={16}
                style={{
                    paddingLeft: 20,
                    height: 50,
                    width: 310,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    borderColor: '#D8D8D8',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    marginTop: 10,
                    fontSize: 14,
                }}
                placeholderTextColor={'#5D5D5D'}
                placeholder="Número do cartão"
                value={cardNumber}
                onChangeText={handleCardNumber}
            />
            <TextInput
                style={{
                    paddingLeft: 20,
                    height: 50,
                    width: 310,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    borderColor: '#D8D8D8',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                }}
                placeholderTextColor={'#5D5D5D'}
                placeholder="Nome do titular"
                value={cardName}
                onChangeText={handleCardName}
            />
            <TextInput
                style={{
                    paddingLeft: 20,
                    height: 50,
                    width: 310,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    borderColor: '#D8D8D8',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    color: '#424F4D'
                }}
                placeholderTextColor={'#5D5D5D'}
                placeholder="CPF do titular"
                value={cardCPF}
                maxLength={14}
                onChangeText={handleCardCPF}
            />
            <TextInput
                style={{
                    paddingLeft: 20,
                    height: 50,
                    width: 310,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    borderColor: '#D8D8D8',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    color: '#424F4D'
                }}
                placeholderTextColor={'#5D5D5D'}
                placeholder="Validade"
                value={cardExpiration}
                maxLength={5}
                onChangeText={handleCardExpiration}
            />
            <TextInput
                style={{
                    paddingLeft: 20,
                    height: 50,
                    width: 310,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    borderColor: '#D8D8D8',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    color: '#424F4D'
                }}
                placeholderTextColor={'#5D5D5D'}
                placeholder="Código de Segurança"
                value={cardCVV}
                maxLength={3}
                onChangeText={handleCardCVV}
            />
        </View>
    )
}
