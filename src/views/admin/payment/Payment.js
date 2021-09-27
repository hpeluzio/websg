import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import PaymentService from 'src/services/PaymentService';

import {
  Container,
  RaffleContent,
  Row,
  Column,
  Column2,
  Text,
  Text2,
} from './styles';

const Payment = () => {
  const [payment, setPayment] = useState({});
  let { id } = useParams();

  const loadPayment = useCallback(async () => {
    const _response = await PaymentService.getPayment({ id });
    setPayment(_response.data);
  }, [id]);

  useEffect(() => {
    loadPayment();
  }, [loadPayment]);

  useEffect(() => {
    console.log(payment);
  }, [payment]);

  return (
    <Container>
      <RaffleContent>
        <Row>
          <Column>
            <Text>Identificador:</Text>
          </Column>
          <Column2>
            <Text2>{0}</Text2>
          </Column2>
        </Row>
      </RaffleContent>
    </Container>
  );
};

export default Payment;
