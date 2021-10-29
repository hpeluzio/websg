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
  Left,
  Right,
  Text,
  Text2,
  NumbersContainer,
  Number,
} from './styles';

import countGameHits from 'src/utils/countGameHits';

import NoItemsViewSlot from 'src/components/NoItemsViewSlot';

const RafflesDetail = props => {
  const [raffle, setRaffle] = useState({});
  const [games, setGames] = useState([]);
  const [totalPrize, setTotalPrize] = useState(0);
  let { id } = useParams();

  const loadRaffle = useCallback(async () => {
    const _response = await RaffleService.detail({ id });
    const { data } = await RaffleService.getTotalPrizeOfSpecificRaffle({ id });
    setRaffle(_response.data);
    setGames(_response.data.games);
    setTotalPrize(data);
  }, [id]);

  useEffect(() => {
    loadRaffle();
  }, [loadRaffle]);

  const numbersHandler = useCallback(numbers => {
    if (numbers === null || numbers === undefined) {
      return 'Ainda não realizado';
    } else return numbers;
  }, []);

  const checkWonColor = useCallback(
    game => {
      if (raffle.numbers === null) {
        return <div>-</div>;
      }
      if (countGameHits(game, raffle) < 6) {
        return <div>Não</div>;
      }
      if (countGameHits(game, raffle) === 6) {
        return <div style={{ color: 'blue' }}>Sorteado</div>;
      }

      return <div>-</div>;
    },
    [raffle],
  );

  const isThisNumberInRaffle = useCallback(
    (number, raffleNumbers) => {
      // console.log(number);
      // console.log(raffle.numbers);

      if (raffleNumbers !== null) {
        let raffleNumArray = raffle.numbers.split(',');
        return raffleNumArray.includes(number);
      }
      return false;
    },
    [raffle],
  );

  const treatNumbers = useCallback(
    numbers => {
      const numbersTreated = numbers.split(',');

      return (
        <NumbersContainer>
          {numbersTreated.map((n, index) => {
            return (
              <Number key={index} hit={isThisNumberInRaffle(n, raffle.numbers)}>
                {n}
              </Number>
            );
          })}
        </NumbersContainer>
      );
    },
    [raffle.numbers, isThisNumberInRaffle],
  );

  const handleStatus = useCallback(status => {
    if (status === 'approved') return 'Ok';
    if (status === 'in_process') return 'Processando';
    if (status === 'rejected') return 'Rejeitado';
  }, []);

  const fields = [
    // { key: 'id', _style: { width: '5%' }, label: 'id' },
    { key: 'name', label: 'Nome do jogo' },
    { key: 'numbers', label: 'Números' },
    // { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Jogado' },
    { key: 'won', label: 'Prêmio' },
    // { key: 'pgtoStatus', label: 'Pgto' },
    // { key: 'payment_id', label: 'Pagamento' },
    // { key: 'type', label: 'Tipo' },
    // { key: 'payment_date', label: 'Data pgto' },
  ];

  if (raffle)
    return (
      <Container>
        <RaffleContent>
          <Row>
            <Column>
              <Left>
                <Text>Sorteio:</Text>{' '}
              </Left>
              <Right>
                <Text2>{raffle.name}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text>Início:</Text>{' '}
              </Left>
              <Right>
                <Text2>{moment(raffle.init).format('DD/MM/YY, H:mm:ss')}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text>Término:</Text>{' '}
              </Left>
              <Right>
                <Text2>{moment(raffle.end).format('DD/MM/YY, H:mm:ss')}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text> Prêmio Acumulado:</Text>{' '}
              </Left>
              <Right>
                <Text2>{totalPrize.toFixed(2).replace(/\./g, ',')}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text>Números:</Text>{' '}
              </Left>
              <Right>
                <Text2>{numbersHandler(raffle.numbers)}</Text2>
              </Right>
            </Column>
          </Row>
        </RaffleContent>

        <CDataTable
          items={games}
          fields={fields}
          // columnFilter
          // footer
          tableFilter={{ label: ' ', placeholder: 'Filtrar' }}
          responsive={true}
          itemsPerPageSelect={{ label: 'Items por página' }}
          itemsPerPage={20}
          hover
          sorter
          pagination
          noItemsViewSlot={
            <NoItemsViewSlot text={'Nenhum jogo neste sorteio'} />
          }
          // onRowClick={item => onRowClicked(item)}
          scopedSlots={{
            created_at: item => (
              <td>{moment(item.created_at).format('DD/MM/YY, H:mm:ss')}</td>
            ),
            won: item => <td>{checkWonColor(item)}</td>,
            numbers: item => <td>{treatNumbers(item.numbers)}</td>,
            pgtoStatus: item => <td>{handleStatus(item.payment.status)}</td>,
          }}
        />
      </Container>
    );
};

export default RafflesDetail;
