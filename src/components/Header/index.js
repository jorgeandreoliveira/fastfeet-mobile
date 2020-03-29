import React from 'react';
import { Container, Text } from './styles';

export default function Header({data}) {
  return (
    <Container>
        <Text>{data}</Text>
    </Container>
  );
}
