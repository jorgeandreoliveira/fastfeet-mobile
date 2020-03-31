import React from 'react';
import { Container, Text, SubText } from './styles';

export default function Header({text, subtext}) {
  return (
    <Container>
        <Text>{text}</Text>
        <SubText>{subtext}</SubText>
    </Container>
  );
}
