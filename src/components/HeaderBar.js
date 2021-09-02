import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Title, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

import sizeList from '../data/size';
import flavorList from '../data/kind';
import payMethodList from '../data/method';

export default function HeaderBar(props) {

    const {
        size,
        setSize,
        kind,
        setKind,
        method,
        setMethod,
        quantity,
        setQuantity
    } = props

    const [showSizes, setShowSizes] = useState(false)
    const [showFlavors, setShowFlavors] = useState(false)
    const [showMethods, setShowMethods] = useState(false)

    return(
        <View style={styles.headerDiv} >
            <Title style={styles.centerTitle}>Coffe shop</Title>
            <View style={styles.spacerStyle} />
            <DropDown
                label='Tamaño'
                mode="outlined"
                visible={showSizes}
                showDropDown={() => setShowSizes(true)}
                onDismiss={() => setShowSizes(false)}
                list={sizeList}
                value={size}
                setValue={setSize}
            />
            <View style={styles.spacerStyle} />
            <DropDown
                label='Tipo de café'
                mode="outlined"
                visible={showFlavors}
                showDropDown={() => setShowFlavors(true)}
                onDismiss={() => setShowFlavors(false)}
                list={flavorList}
                value={kind}
                setValue={setKind}
            />
            <View style={styles.spacerStyle} />
            <DropDown
                label='Forma de pago'
                mode="outlined"
                visible={showMethods}
                showDropDown={() => setShowMethods(true)}
                onDismiss={() => setShowMethods(false)}
                list={payMethodList}
                value={method}
                setValue={setMethod}
            />
            <View style={styles.spacerStyle} />
            <TextInput
                placeholder='0'
                keyboardType='numeric'
                label='Cantidad'
                mode='outlined'
                value={quantity}
                onChangeText={text => setQuantity(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerDiv: {
        padding: 15
    },
    centerTitle: {
        textAlign: 'center',
        marginTop: 20
    },
    spacerStyle: {
        marginBottom: 10
    }
})