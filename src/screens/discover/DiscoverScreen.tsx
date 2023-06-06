import React from 'react';
import { FlatList, Image, ScrollView } from 'react-native';
import { faker } from '@faker-js/faker';
import {
  Container, Column, Columns, Card, Heading, P,
} from '~/components';
import { formatBRL, range } from '~/utils';
import { theme } from '~/theme';

export default function DiscoverScreen() {

  return (
    <Container title="Olá">
      <Heading size={2}>Lojas Próximas</Heading>

      <ScrollView horizontal snapToInterval={250}>
        <Columns>
          {range(1, 20).map((item) => (
            <Column m={5}>
              <Card>
                <Image
                  source={{
                    uri: `https://picsum.photos/500/500/${item}`,
                  }}
                  style={{
                    borderRadius: 10,
                    width: 300,
                    height: 400,
                    resizeMode: 'cover',
                  }}
                />
              </Card>
            </Column>
          ))}
        </Columns>
      </ScrollView>

      {/*  */}
      <Columns multiline>
        <FlatList
          numColumns={2}
          data={range(1, 200)}
          renderItem={({ item }) => (
            <Column width="50%" p={5} key={item}>
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
