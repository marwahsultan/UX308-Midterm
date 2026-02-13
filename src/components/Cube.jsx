import {
    Text,
    View,
} from 'react-native';
import { cube } from "../cube.js";

export function Cube({ height }) {
    return (
        <View>
            <Text>cube({height}) returned {cube(height)}</Text>
        </View>
    );
}