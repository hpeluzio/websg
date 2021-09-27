import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import moment from 'moment';

import {
  CDataTable,
  CBadge,
  CCardBody,
  CButton,
  CCollapse,
} from '@coreui/react';

import RaffleService from 'src/services/RaffleService';

import PaymentCollapse from 'src/views/admin/paymentCollapse/PaymentCollapse';

import {
  Container,
  RaffleContent,
  Row,
  Column,
  Column2,
  Text,
  Text2,
  NumbersContainer,
  Number,
} from './styles';

const RafflesDetail = props => {
  const history = useHistory();

  const [raffle, setRaffle] = useState({});
  const [details, setDetails] = useState([]);
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
      return <div>Não</div>;
    }
    return <div>-</div>;
  }, []);

  const treatNumbers = useCallback(numbers => {
    const numbersTreated = numbers.split(',');

    return (
      <NumbersContainer>
        {numbersTreated.map(n => {
          return <Number>{n}</Number>;
        })}
      </NumbersContainer>
    );
  }, []);

  // const onClickPaymentId = useCallback(
  //   payment_id => {
  //     console.log('onClickPaymentId');
  //     history.push({
  //       pathname: `/admin/payment/${payment_id}`,
  //       // search: `?id=${item.id}`,
  //       // state: { detail: response.data }
  //     });
  //   },
  //   [history],
  // );

  const toggleDetails = index => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

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
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];

  if (raffle)
    return (
      <Container>
        <RaffleContent>
          <Row>
            <Column>
              <Text>Identificador:</Text>
            </Column>
            <Column2>
              <Text2>{raffle.id}</Text2>
            </Column2>
          </Row>

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
            payment_id: item => (
              <td>
                <a href={`/admin/payment/${item.payment.id}`}>
                  {item.payment.id}
                </a>
                {/* <button onPress={() => onClickPaymentId(item.payment.id)}>
                  {item.payment.id}
                </button> */}
              </td>
            ),
            type: item => <td>{item.payment.type}</td>,
            payment_date: item => (
              <td>
                {moment(item.payment.created_at).format('DD/MM/YY, H:mm:ss')}
              </td>
            ),
            won: item => <td>{checkWonColor(item.won)}</td>,
            numbers: item => <td>{treatNumbers(item.numbers)}</td>,
            show_details: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(index);
                    }}>
                    {details.includes(index) ? 'Esconder' : 'Detalhes'}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    <PaymentCollapse
                      payment_id={item.payment.id}
                      show={details.includes(index)}
                    />
                  </CCardBody>
                </CCollapse>
              );
            },
          }}
        />
      </Container>
    );
};

export default RafflesDetail;
