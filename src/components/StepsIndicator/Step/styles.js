import {StyleSheet} from 'react-native';
import {COLORS} from "../../../utils/theme";

export default StyleSheet.create({
    root: {
        alignItems: 'center',
        width: '100%',
    },
    circle: {
        height: 24,
        width: 24,

        borderRadius: 24,
        borderStyle: 'solid',
        borderColor: COLORS.white,
        borderWidth: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    circleNumberText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: '500',
    },
    title: {
        marginTop: 12,
        color: COLORS.white,
        fontSize: 12,
        fontWeight: '400',
    },
});
