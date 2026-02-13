import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { F2C } from './F2C.jsx';
import { Cube } from './Cube.jsx';
import { Membership } from './Membership.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      < F2C fahrenheit={32} />
      < F2C fahrenheit={70} />
      < F2C fahrenheit={210} />
      < Cube height={1} />
      < Cube height={2} />
      < Cube height={3} />
      < Membership friends={0} />
      < Membership friends={1} />
      < Membership friends={2} />
      < Membership friends={4} />
    </View>
  );
}

