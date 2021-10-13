import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import moment from 'moment';
import PaymentService from 'src/services/PaymentService';

import {
  Container,
  RaffleContent,
  Row,
  Column,
  Column2,
  Text,
  Text2,
  TextStatus,
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

  // useEffect(() => {
  //   console.log(payment);
  // }, [payment]);

  const getBadge = status => {
    if (status === 'approved') return 'green';
    else return 'yellow';
  };

  return (
    <Container>
      <RaffleContent>
        {payment.status && (
          <Row>
            <Column>
              <Text>Status</Text>
            </Column>
            <Column2>
              <TextStatus color={getBadge(payment.status)}>
                {payment.status}
              </TextStatus>
            </Column2>
          </Row>
        )}
        {payment.id && (
          <Row>
            <Column>
              <Text>Identificador</Text>
            </Column>
            <Column2>
              <Text2>{payment.id}</Text2>
            </Column2>
          </Row>
        )}

        {payment.status_detail && (
          <Row>
            <Column>
              <Text>Nome no cartão</Text>
            </Column>
            <Column2>
              <Text2>{payment.card.cardholder.name}</Text2>
            </Column2>
          </Row>
        )}
        {payment.status_detail && (
          <Row>
            <Column>
              <Text>Valor</Text>
            </Column>
            <Column2>
              <Text2>{payment.transaction_amount}</Text2>
            </Column2>
          </Row>
        )}

        {payment && (
          <Row>
            <Column>
              <Text>Outras info úteis</Text>
            </Column>
            <Column2>
              <pre>{JSON.stringify(payment, null, 2)}</pre>
            </Column2>
          </Row>
        )}
      </RaffleContent>
    </Container>
  );
};

export default Payment;
