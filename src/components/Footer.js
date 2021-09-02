import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, TouchableRipple } from 'react-native-paper';

export default function Footer(props) {
    const {calculate} = props
    return(
        <View style={style.footerDiv}>
            <TouchableRipple style={style.principalButton} rippleColor="rgba(0, 0, 0, .32)">
                <Button mode='contained' onPress={() => calculate()} >Calcular</Button>
            </TouchableRipple>
        </View>
    )
}

const style = StyleSheet.create({
    footerDiv: {
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 15
    },
    principalButton: {
        padding: 5
    }
})