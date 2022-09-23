import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, CardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {

  useEffect(() => {
    fetch('http://192.168.100.53:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
        console.log(data)
      })
  }, [])
  const [games, setGames] = useState<CardProps[]>([])

  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title='Encontre o seu duo!'
        subtitle='Selecione o jogo que deseja jogar'
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />





    </View>
  );
}