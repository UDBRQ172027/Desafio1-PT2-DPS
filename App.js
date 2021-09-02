import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Snackbar } from 'react-native-paper';

import Footer from './src/components/Footer';
import HeaderBar from './src/components/HeaderBar';
import Result from './src/components/Result';
import ThemeColor from './src/utils/ThemeColor';

export default function App() {

  const [size, setSize] = useState("")
  const [kind, setKind] = useState("")
  const [method, setMethod] = useState("")
  const [quantity, setQuantity] = useState('')
  const [showTotal, setShowTotal] = useState(false)
  const [error, setError] = useState(null)

  const calculate = () => {
    setShowTotal(false)
    let error = ''
    if(size.trim() == '' || size.length == 0){
      error += 'Selecciona el tamaño del café\n'
      setError(error)
    }
    if (kind.trim() == '' || kind.length == 0) {
      error += 'Selecciona el tipo de café\n'
      setError(error)
    }
    if (method.trim() == '' || method.length == 0) {
      error += 'Selecciona el tipo de pago\n'
      setError(error)
    }
    quantityNumber = parseInt(quantity)
    if (Number.isNaN(quantityNumber)) {
      error += 'La cantidad debe ser un numero entero'
      setError(error)
    } else if (quantityNumber <= 0) {
      error += 'La cantidad debe ser mayor a cero'
      setError(error)
    }
    if(size && kind && method && quantity) {
      setError(null)
      setShowTotal(true)
    } else {
      setShowTotal(false)
    }
  }

  useEffect(() => {
    setShowTotal(false)
  }, [size, kind, method, quantity])

  return (
    <View style={style.containerMain}>
      <HeaderBar
        size={size}
        setSize={setSize}
        kind={kind}
        setKind={setKind}
        method={method}
        setMethod={setMethod}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <View style={style.bottomZone}>
        <Result showTotal={showTotal} size={size} kind={kind} method={method} quantity={quantity} />
        <Footer calculate={calculate} />
      </View>
      <Snackbar
        visible={error}
        onDismiss={() => setError(null)}
        action={{
          label: 'X'
        }}
      >{error}</Snackbar>
    </View>
  );
}

const style = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column'
  },
  upperZone: {
    flex: 3
  },
  bottomZone: {
    flex: 3,
    backgroundColor: ThemeColor.secondary
  }
})