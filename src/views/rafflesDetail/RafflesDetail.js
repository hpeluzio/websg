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
  const [raffle, setRaffle] = useState([]);
  const [games, setGames] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    // console.log(location.pathname); // result: '/secondpage'
    // console.log(location.search.get('id')); // result: '?query=abc'
  }, [id]);

  const loadRaffle = useCallback(async () => {
    const _response = await RaffleService.detail({ id });
    console.log(_response);
    setRaffle(_response.data[0]);
    setGames(_response.data[0].games);
  }, [id]);

  useEffect(() => {
    loadRaffle();
  }, [loadRaffle]);

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
    }
  }, []);

  const fields = [
    { key: 'id', _style: { width: '5%' }, label: 'id' },
    { key: 'name', label: 'Nome do jogo' },
    { key: 'numbers', label: 'Números' },
    { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Jogado' },
  ];

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
        // columnFilter
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
        }}
      />
    </Container>
  );
};

export default RafflesDetail;
