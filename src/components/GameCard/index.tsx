import {
  ImageBackground,
  TouchableOpacity,
  Text,
  TouchableOpacityProps
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';


export interface CardProps {
  id: string,
  title: string,
  _count: { ads: number },
  bannerUrl: string

}

interface Props extends TouchableOpacityProps {
  data: CardProps
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}
        resizeMode='contain'
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>

          <Text style={styles.ads}>
            {data._count.ads} Anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}