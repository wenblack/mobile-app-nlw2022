import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'

import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';

import logo from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';


export function Game() {
  const [ads, setAds] = useState<DuoCardProps[]>([])

  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()


  function handleReturnToHome() {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.100.53:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => {
        setAds(data)
        console.log(data)
      })
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleReturnToHome}>
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
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.bannerImg}
          resizeMode='contain'
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          horizontal
          keyExtractor={item => item.id}
          data={ads}
          renderItem={({ item }) => (
            <DuoCard data={item} />
          )}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
