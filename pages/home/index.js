import { View, Text } from 'react-native';
import {
  PrimaryButton
} from '../../components'
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <PrimaryButton 
            title="logout"
            onPress={() => navigation.push('Login')}
            />
      </View>
    );
  }

export default HomeScreen;