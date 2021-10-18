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

const PaymentCollapse = ({ game, show }) => {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState({});

  const loadPayment = useCallback(async () => {
    setLoading(true);
    const _response = await PaymentService.getPayment({
      id: game.payment.platform_payment_id,
    });
    setLoading(false);
    setPayment(_response.data);
  }, [game.payment.platform_payment_id]);

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
    if (status === 'approved') return 'green';
    if (status === 'in_process') return 'orange';
    if (status === 'rejected') return 'red';
    else return 'black';
  };

  const statusHandler = useCallback(status => {
    if (status === 'notchecked') {
      return 'Não visualizado';
    }

    if (status === 'checked') {
      return 'Visualizado pelo jogador';
    }

    if (status === 'received') {
      return 'Pago para o jogador';
    }
  }, []);

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
                {/* <Text2>{payment.id}</Text2> */}
                <Text2>
                  <a href={`/admin/payment/${payment.id}`}>{payment.id}</a>
                </Text2>
              </Column2>
            </Row>
          )}
          {game.status && (
            <Row>
              <Column>
                <Text>Checado</Text>
              </Column>
              <Column2>
                <Text2>{statusHandler(game.status)}</Text2>
              </Column2>
            </Row>
          )}
          {payment.status && (
            <Row>
              <Column>
                <Text>Status do pagamento</Text>
              </Column>
              <Column2>
                <TextStatus color={getBadge(payment.status)}>
                  {payment.status}
                </TextStatus>
              </Column2>
            </Row>
          )}
          {payment.status_detail && (
            <Row>
              <Column>
                <Text>Detalhes status</Text>
              </Column>
              <Column2>
                <Text2>{payment.status_detail}</Text2>
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
        </RaffleContent>
      </Container>
    );
};

export default PaymentCollapse;
