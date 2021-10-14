import React, { useCallback, useEffect, useState } from 'react';
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
  LoaderContainer,
  Loader,
} from './styles';

const SignatureCollapse = ({ payment_id, show }) => {
  const [loading, setLoading] = useState({});
  const [payment, setPayment] = useState({});

  const loadPayment = useCallback(async () => {
    setLoading(true);
    const _response = await PaymentService.getSignature({ id: payment_id });
    setLoading(false);
    setPayment(_response.data);
  }, [payment_id]);

  useEffect(() => {
    if (show) {
      loadPayment();
    }
  }, [loadPayment, show]);

  // useEffect(() => {
  //   console.log(payment_id);
  //   console.log(show);
  // }, [payment_id, show]);

  const getBadge = status => {
    if (status === 'authorized') return 'green';
    if (status === 'pending') return 'orange';
    if (status === 'rejected') return 'red';
    else return 'black';
  };

  if (loading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  if (!loading)
    return (
      <Container>
        <RaffleContent>
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
          {payment.external_reference && (
            <Row>
              <Column>
                <Text>external_reference</Text>
              </Column>
              <Column2>
                <Text2>{payment.external_reference}</Text2>
              </Column2>
            </Row>
          )}
        </RaffleContent>
      </Container>
    );
};

export default SignatureCollapse;
