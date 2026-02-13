import {
    Text,
    View,
} from 'react-native';
import { f2C } from "../f2C.js";

export function F2C({ fahrenheit }) {
    return (
        <View>
            <Text>f2C({fahrenheit}) returned {f2C(fahrenheit)}</Text>
        </View>
    );
}