import { useRoute } from '@react-navigation/native';

import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'

import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';

import logo from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';
import { THEME } from '../../theme';


export function Game() {
  const route = useRoute()
  const game = route.params as GameParams


  return (
    <Background>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}
