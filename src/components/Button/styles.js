import { StyleSheet } from 'react-native';
import {COLORS} from "../../utils/theme";

export default StyleSheet.create({
    root: {
        backgroundColor: COLORS.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 14,
    },
    text: {
        color: COLORS.white,
    },
});
