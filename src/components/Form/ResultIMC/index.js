import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {
    
    return (
        <View style={styles.result}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.information}>{props.ResultIMC}</Text>
        </View>
    );
}