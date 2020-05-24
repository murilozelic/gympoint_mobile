import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  HelpOrderHeader,
  HelpOrderAnswered,
  AnswerText,
  HelpOrderDate,
  HelpOrderQuestion,
  ButtonWrapper,
} from './styles';

const HelpOrder = ({ answered, date, question, onPress }) => {
  const dateFormatted = useMemo(
    () => formatRelative(parseISO(date), new Date(), { locale: pt }),
    [date]
  );

  return (
    <Container>
      <ButtonWrapper onPress={onPress}>
        <HelpOrderHeader>
          {answered ? (
            <HelpOrderAnswered>
              <Icon name="check-circle" size={16} color="#42cb59" />
              <AnswerText answered={answered}>Respondido</AnswerText>
            </HelpOrderAnswered>
          ) : (
            <HelpOrderAnswered>
              <Icon name="check-circle" size={16} color="#999" />
              <AnswerText answered={answered}>Sem resposta</AnswerText>
            </HelpOrderAnswered>
          )}

          <HelpOrderDate>{dateFormatted}</HelpOrderDate>
        </HelpOrderHeader>
        <HelpOrderQuestion ellipsizeMode="tail" numberOfLines={2}>
          {question}
        </HelpOrderQuestion>
      </ButtonWrapper>
    </Container>
  );
};

export default HelpOrder;
