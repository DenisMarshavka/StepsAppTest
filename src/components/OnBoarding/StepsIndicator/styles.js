import {StyleSheet} from 'react-native';
import {COLORS} from "../../../utils/theme";

export default StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: COLORS.whiteLighten,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,

        minHeight: 70,
    },
    line: {
        height: 2,
        width: '100%',

        backgroundColor: 'red',
        position: 'absolute',
        top: '50%',
        left: '10%',
    },
    content: {
        position: 'absolute',
        top: '20%',
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
