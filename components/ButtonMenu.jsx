import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import home from '../assets/images/house-solid.png'
import duties from '../assets/images/clipboards.png'
import favorites from '../assets/images/heart.png'
import profile from '../assets/images/user-regular.png'

export default function ButtonMenu() {

    const navigation = useNavigation();

    const styles = {
        image: {
            height: 22,
            marginBottom: 5,
            marginTop: 5,
            width: 22,
        },
        pressable: {
            alignItems: 'center',
            backgroundColor: '#fff',
            height: 80,
            justifyContent: 'center',
            marginBottom: 5,
            width: '25%',
        },
        text: {
            color: '#6D7a78',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
        }
    };

    return (
        <View style={{
            alignItems: 'flex-end',
            bottom: 0,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
        }}>
            <Pressable
                style={styles.pressable}
                onPress={() => alert("aqui vai o roteamento navigation.navigate('Home')")}
            >
                <Image source={home} style={styles.image} />
                <Text style={styles.text}>
                    Home
                </Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => alert("aqui vai o roteamento navigation.navigate('Duties')")}
            >
                <Image source={duties} style={styles.image} />
                <Text style={styles.text}>
                    Plantões
                </Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => alert("aqui vai o roteamento navigation.navigate('Favorites')")}
            >
                <Image source={favorites} style={styles.image} />
                <Text style={styles.text}>
                    Favoritos
                </Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => alert("aqui vai o roteamento navigation.navigate('MyAccount')")}
            >
                <Image source={profile} style={{
                    height: 23,
                    justifyContent: 'flex-start',
                    marginBottom: 4,
                    marginTop: 6,
                    width: 20,
                }} />
                <Text style={styles.text}>
                    Minha Conta
                </Text>
            </Pressable>
        </View>
    )
}
