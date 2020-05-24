import React, { useMemo } from 'react';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
  Container,
  HelpOrder,
  QuestionHeader,
  HeaderText,
  Time,
  Text,
  AnswerHeader,
} from './styles';

const HelpOrderDetails = ({ route }) => {
  const { item } = route.params;

  const date = item.createdAt;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(date), new Date(), { locale: pt }),
    [date]
  );

  return (
    <Container>
      <HelpOrder>
        <QuestionHeader>
          <HeaderText>PERGUNTA</HeaderText>
          <Time>{dateFormatted}</Time>
        </QuestionHeader>
        <Text>{item.question}</Text>

        <AnswerHeader>
          <HeaderText>RESPOSTA</HeaderText>
        </AnswerHeader>
        <Text>{item.answer || 'Sem resposta'}</Text>
      </HelpOrder>
    </Container>
  );
};

export default HelpOrderDetails;
