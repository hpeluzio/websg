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

const Signature = () => {
  const [payment, setPayment] = useState({});
  let { id } = useParams();

  const loadPayment = useCallback(async () => {
    const _response = await PaymentService.getSignature({ id });
    setPayment(_response.data);
  }, [id]);

  useEffect(() => {
    loadPayment();
  }, [loadPayment]);

  // useEffect(() => {
  //   console.log(payment);
  // }, [payment]);

  const getBadge = status => {
    if (status === 'authorized') return 'green';
    if (status === 'pending') return 'orange';
    else return 'red';
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
        {payment.payer_email && (
          <Row>
            <Column>
              <Text>E-mail</Text>
            </Column>
            <Column2>
              <Text2>{payment.payer_email}</Text2>
            </Column2>
          </Row>
        )}
        {payment.reason && (
          <Row>
            <Column>
              <Text>Plano</Text>
            </Column>
            <Column2>
              <Text2>{payment.reason}</Text2>
            </Column2>
          </Row>
        )}
        {payment && (
          <Row>
            {/* <Column>
              <Text>Outras info ??teis</Text>
            </Column> */}
            <Column2>
              <pre>{JSON.stringify(payment, null, 2)}</pre>
            </Column2>
          </Row>
        )}
      </RaffleContent>
    </Container>
  );
};

export default Signature;
