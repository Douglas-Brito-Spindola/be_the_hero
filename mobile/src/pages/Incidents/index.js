import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import Styles from './styles';
import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de 0 casos.
                </Text>
            </View>
        </View>
    );
}

