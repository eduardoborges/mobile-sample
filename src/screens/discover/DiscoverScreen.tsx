import React from 'react';
import {
  Dimensions, FlatList, Image, ScrollView, View,
} from 'react-native';
import { faker } from '@faker-js/faker';
import { FlashList } from '@shopify/flash-list';
import {
  Container, Column, Columns, Card, Heading, P,
} from '~/components';
import { formatBRL, range } from '~/utils';
import { theme } from '~/theme';

export default function DiscoverScreen() {
  const width = Dimensions.get('window').width - 50;

  return (
    <Container title="Olá">
      <Heading size={2}>Lojas Próximas</Heading>
      <View style={{ marginHorizontal: 10 }}>

        <ScrollView horizontal snapToAlignment="start" snapToInterval={width - 5} decelerationRate="fast">
          <Columns>
            {range(1, 20).map((item) => (
              <Column m={[0, 5]} key={item}>
                <Card>
                  <Image
                    source={{
                      uri: 'https://picsum.photos/500/500',
                    }}
                    style={{
                      borderRadius: 10,
                      width: width - 10,
                      height: 400,
                      resizeMode: 'cover',
                    }}
                  />
                </Card>
              </Column>
            ))}
          </Columns>
        </ScrollView>
      </View>

      {/*  */}
      <Columns multiline>
        <FlashList
          numColumns={2}
          estimatedItemSize={200}
          data={range(1, 200)}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Column width="100%" p={5} key={item}>
              <Card>
                <Image
                  source={{
                    uri: 'https://picsum.photos/200/150',
                  }}
                  style={{
                    width: '100%',
                    aspectRatio: 5 / 4,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                />
                <Columns multiline>
                  <Column p={[10, 10]}>
                    <Heading size={4} color={theme.colors.success}>
                      {formatBRL(faker.commerce.price())}
                    </Heading>
                  </Column>
                  <Column p={[0, 0, 10, 10]}>
                    <P size="s">
                      {faker.commerce.productName()}
                    </P>
                  </Column>
                </Columns>
              </Card>
            </Column>
          )}
        />
      </Columns>
    </Container>
  );
}
