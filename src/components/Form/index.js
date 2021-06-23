import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura!")
    const [Imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e altura!")
    }



    return (
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.35'
                    keyboardType='numeric'
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => validationImc()}>
                    <Text style={styles.buttonText}>{textButton}</Text>
                </TouchableOpacity>

            </View>

            <ResultIMC messageResultIMC={messageIMC} ResultIMC={Imc} />

        </View>
    );
}