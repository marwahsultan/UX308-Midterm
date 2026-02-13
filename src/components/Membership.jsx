import {
    Text,
    View,
} from 'react-native';
import { membership } from "../membership.js";

export function Membership({ friends }) {
    return (
        <View>
            <Text>membership({friends}) returned {membership(friends)}</Text>
        </View>
    );
}