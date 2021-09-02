import React from 'react'

import { StyleSheet, View } from 'react-native'

import { Title, Text } from 'react-native-paper'

import ThemeColor from '../utils/ThemeColor'
import kindList from '../data/kind'
import methodList from '../data/method'
import sizeList from '../data/size'

export default function Result(props){

    const {showTotal, size, kind, method, quantity} = props
    let div;
    let descuento = 0;

    if(method == '0'){
        descuento = 15
    } else {
        descuento = 5
    }

    if(showTotal){
        let total = (
            (parseFloat(sizeList[size]['price']) +
            parseFloat(kindList[kind]['price'])) *
            parseInt(quantity)
        )
        total = total - (total*(descuento/100))
        div = <View style={style.principalCard}>
            <Title style={style.resumeTitle}>Resumen</Title>
            <View style={style.rowContainer}>
                <Text style={style.columnContainer}>Cantidad solicitada:</Text>
                <Text style={style.columnContainerCenter}>{quantity}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.columnContainer}>Tamaño:</Text>
                <Text style={style.columnContainerCenter}>{sizeList[size]['label']}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.columnContainer}>Tipo de café:</Text>
                <Text style={style.columnContainerCenter}>{kindList[kind]['label']}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.columnContainer}>Tipo de pago:</Text>
                <Text style={style.columnContainerCenter}>{methodList[method]['label']}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.columnContainer}>Descuento(%):</Text>
                <Text style={style.columnContainerCenter}>{descuento + '%'}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.columnContainer}>Total:</Text>
                <Text style={style.columnContainerCenter}>{'$' + total}</Text>
            </View>
        </View>
    } else {
        div = <View style={style.principalCard}></View>
    }
    return div
}

const style = StyleSheet.create({
    principalCard: {
        flex: 5,
        backgroundColor: ThemeColor.secondary,
        margin: 20
    },
    resumeTitle: {
        alignSelf: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        flex: 1
    },
    columnContainer: {
        flex: 2,
        paddingLeft: 10
    },
    columnContainerCenter: {
        flex: 2,
        paddingLeft: 10,
        textAlign: 'center'
    }
})