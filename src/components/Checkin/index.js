import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, CheckinText, CheckinDate } from './styles';

const Checkin = ({ number, date }) => {
  const dateFormatted = useMemo(
    () => formatRelative(parseISO(date), new Date(), { locale: pt }),
    [date]
  );

  return (
    <Container>
      <CheckinText>{`Check-in #${number}`}</CheckinText>
      <CheckinDate>{dateFormatted}</CheckinDate>
    </Container>
  );
};

export default Checkin;
