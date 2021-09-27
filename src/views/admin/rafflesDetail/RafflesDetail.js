import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CDataTable } from '@coreui/react';
import moment from 'moment';

import RaffleService from 'src/services/RaffleService';
import {
  Container,
  RaffleContent,
  Row,
  Column,
  Column2,
  Text,
  Text2,
} from './styles';

const RafflesDetail = props => {
  const [raffle, setRaffle] = useState({});
  const [games, setGames] = useState([]);
  let { id } = useParams();

  const loadRaffle = useCallback(async () => {
    const _response = await RaffleService.detailAdmin({ id });
    setRaffle(_response.data);
    setGames(_response.data.games);
  }, [id]);

  useEffect(() => {
    loadRaffle();
  }, [loadRaffle]);

  // useEffect(() => {
  //   console.log(raffle);
  // }, [raffle]);

  const statusHandler = useCallback(status => {
    if (status === 'notchecked') {
      return 'Não visualizado';
    }

    if (status === 'checked') {
      return 'Visualizado';
    }

    if (status === 'received') {
      return 'Pago';
    }
  }, []);

  const numbersHandler = useCallback(numbers => {
    if (numbers === null || numbers === undefined) {
      return 'Ainda não realizado';
    } else return numbers;
  }, []);

  const checkWonColor = useCallback(won => {
    if (won === 'Sim') {
      return <div style={{ color: 'blue' }}>Sorteado</div>;
    }
    if (won === 'Não') {
      return <div style={{ color: 'red' }}>Não</div>;
    }
    return <div>-</div>;
  }, []);

  const fields = [
    { key: 'id', _style: { width: '5%' }, label: 'id' },
    { key: 'name', label: 'Nome do jogo' },
    { key: 'numbers', label: 'Números' },
    { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Jogado' },
    { key: 'payment_id', label: 'Pagamento' },
    { key: 'type', label: 'Tipo' },
    { key: 'payment_date', label: 'Data pgto' },
    { key: 'won', label: 'Sorteado' },
  ];

  if (raffle)
    return (
      <Container>
        <RaffleContent>
          {/* <Row>
          <Column>
            <Text>id:</Text>
          </Column>
          <Column>
            <Text2>{raffle.id}</Text2>
          </Column>
        </Row> */}

          <Row>
            <Column>
              <Text>Sorteio:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{raffle.name}</Text2>
            </Column2>
          </Row>

          <Row>
            <Column>
              <Text>Início:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{moment(raffle.init).format('DD/MM/YY, H:mm:ss')}</Text2>
            </Column2>
          </Row>

          <Row>
            <Column>
              <Text>Término:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{moment(raffle.end).format('DD/MM/YY, H:mm:ss')}</Text2>
            </Column2>
          </Row>

          <Row>
            <Column>
              <Text>Numeros:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{numbersHandler(raffle.numbers)}</Text2>
            </Column2>
          </Row>
        </RaffleContent>

        <CDataTable
          items={games}
          fields={fields}
          columnFilter
          tableFilter={{ label: ' ', placeholder: 'Filtrar' }}
          // footer
          itemsPerPageSelect={{ label: 'Items por página' }}
          itemsPerPage={20}
          hover
          sorter
          pagination
          // onRowClick={item => onRowClicked(item)}
          scopedSlots={{
            created_at: item => (
              <td>{moment(item.created_at).format('DD/MM/YY, H:mm:ss')}</td>
            ),
            status: item => <td>{statusHandler(item.status)}</td>,
            payment_id: item => <td>{item.payment.id}</td>,
            type: item => <td>{item.payment.type}</td>,
            payment_date: item => (
              <td>
                {moment(item.payment.created_at).format('DD/MM/YY, H:mm:ss')}
              </td>
            ),
            won: item => <td>{checkWonColor(item.won)}</td>,
          }}
        />
      </Container>
    );
};

export default RafflesDetail;
