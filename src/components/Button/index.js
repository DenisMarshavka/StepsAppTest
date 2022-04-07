import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import styles from './styles';

const Button = ({ onPress = () => null, title, style = {} }) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={[styles.root, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(Button);
