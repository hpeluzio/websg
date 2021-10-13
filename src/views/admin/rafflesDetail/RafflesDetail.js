import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import {
  CDataTable,
  // CBadge,
  // CCardBody,
  CButton,
  CCollapse,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import RaffleService from 'src/services/RaffleService';

import PaymentCollapse from 'src/views/admin/paymentCollapse/PaymentCollapse';

import EditRaffle from '../editRaffle/EditRaffle';

import {
  Container,
  RaffleContent,
  Row,
  Column,
  Column2,
  ColumnEditForm,
  Text,
  Text2,
  NumbersContainer,
  Number,
  AddButton,
  EditButton,
} from './styles';

const RafflesDetail = props => {
  const [raffle, setRaffle] = useState({});
  const [details, setDetails] = useState([]);
  const [games, setGames] = useState([]);
  const [showEditRaffle, setShowEditRaffle] = useState(false);
  let { id } = useParams();

  // useEffect(() => {
  //   console.log(raffle);
  // }, [raffle]);

  const loadRaffle = useCallback(async () => {
    const _response = await RaffleService.detailAdmin({ id });
    setRaffle(_response.data);
    setGames(_response.data.games);
  }, [id]);

  useEffect(() => {
    loadRaffle();
  }, [loadRaffle, raffle.numbers]);

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
          {numbersTreated.map(n => {
            return (
              <Number hit={isThisNumberInRaffle(n, raffle.numbers)}>{n}</Number>
            );
          })}
        </NumbersContainer>
      );
    },
    [raffle.numbers, isThisNumberInRaffle],
  );

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

  const handleStatus = useCallback(status => {
    if (status === 'approved') return 'Ok';
    if (status === 'in_process') return 'Processando';
    if (status === 'rejected') return 'Rejeitado';
  }, []);

  const fields = [
    { key: 'id', _style: { width: '1%' }, label: 'id' },
    { key: 'name', label: 'Nome do jogo' },
    { key: 'numbers', label: 'Números' },
    { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Jogado' },
    { key: 'payment_id', label: 'Pagamento' },
    { key: 'pgtoStatus', label: 'Pgto' },
    { key: 'type', label: 'Tipo' },
    { key: 'payment_date', label: 'Data pgto' },
    { key: 'won', _style: { width: '5%' }, label: 'Sorteado' },
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
            <Column>
              <Text>Sorteio:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{raffle.name}</Text2>
            </Column2>
            <Column>
              <Text>Início:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{moment(raffle.init).format('DD/MM/YY, H:mm:ss')}</Text2>
            </Column2>
            <Column>
              <Text>Término:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{moment(raffle.end).format('DD/MM/YY, H:mm:ss')}</Text2>
            </Column2>
          </Row>

          <Row>
            <Column>
              <Text>Números:</Text>{' '}
            </Column>
            <Column2>
              <Text2>{numbersHandler(raffle.numbers)}</Text2>
            </Column2>

            <Row>
              <ColumnEditForm>
                {raffle.numbers === null && (
                  <AddButton onClick={() => setShowEditRaffle(!showEditRaffle)}>
                    <CIcon name="cil-pencil" className="mfe-2" />
                    Adicionar números da mega {raffle.name}
                  </AddButton>
                )}
                {raffle.numbers !== null && (
                  <EditButton
                    onClick={() => setShowEditRaffle(!showEditRaffle)}>
                    <CIcon name="cil-pencil" className="mfe-2" />
                    Editar números da MEGA {raffle.name}
                  </EditButton>
                )}
              </ColumnEditForm>
              {/* <Column2>
              <Text2>{numbersHandler(raffle.numbers)}</Text2>
            </Column2> */}
            </Row>
          </Row>
        </RaffleContent>
        {showEditRaffle && (
          <EditRaffle
            close={setShowEditRaffle}
            raffle={raffle}
            loadRaffle={loadRaffle}
          />
        )}
        <CDataTable
          items={games}
          fields={fields}
          columnFilter
          tableFilter={{ label: ' ', placeholder: 'Filtrar' }}
          footer
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
                <a href={`/admin/payment/${item.payment.platform_payment_id}`}>
                  {item.payment.platform_payment_id}
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
            pgtoStatus: item => <td>{handleStatus(item.payment.status)}</td>,
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
                  <PaymentCollapse
                    payment_id={item.payment.platform_payment_id}
                    show={details.includes(index)}
                  />
                </CCollapse>
              );
            },
          }}
        />
      </Container>
    );
};

export default RafflesDetail;
