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
import EditNumbersRaffle from '../editNumbersRaffle/EditNumbersRaffle';

import {
  Container,
  RaffleContent,
  Row,
  ButtonRow,
  Column,
  Left,
  Right,
  // ColumnEditNumbersForm,
  Text,
  Text2,
  NumbersContainer,
  Number,
  AddButton,
  EditButton,
  EditAllButton,
} from './styles';

import SignatureCollapse from '../signatureCollapse/SignatureCollapse';
import NoItemsViewSlot from 'src/components/NoItemsViewSlot';
import countGameHits from 'src/utils/countGameHits';

const RafflesDetail = () => {
  const [raffle, setRaffle] = useState({});
  const [details, setDetails] = useState([]);
  const [games, setGames] = useState([]);
  const [showEditRaffle, setShowEditRaffle] = useState(false);
  const [showEditNumbersRaffle, setShowEditNumbersRaffle] = useState(false);
  const [totalPrize, setTotalPrize] = useState(0);
  let { id } = useParams();

  // useEffect(() => {
  //   console.log(raffle);
  // }, [raffle]);

  useEffect(() => {
    if (showEditRaffle === true) {
      setShowEditNumbersRaffle(false);
    }
  }, [showEditRaffle]);

  useEffect(() => {
    if (showEditNumbersRaffle === true) {
      setShowEditRaffle(false);
    }
  }, [showEditNumbersRaffle]);

  const loadRaffle = useCallback(async () => {
    const _response = await RaffleService.detailAdmin({ id });
    const { data } = await RaffleService.getTotalPrizeOfSpecificRaffle({ id });
    setRaffle(_response.data);
    setGames(_response.data.games);
    setTotalPrize(data);
  }, [id]);

  useEffect(() => {
    loadRaffle();
  }, [loadRaffle, raffle.numbers]);

  const statusHandler = useCallback(status => {
    if (status === 'notchecked') {
      return 'N??o visualizado';
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
      return 'Ainda n??o realizado';
    } else return numbers;
  }, []);

  const checkWonColor = useCallback(
    game => {
      if (raffle.numbers === null) {
        return <div>-</div>;
      }
      if (countGameHits(game, raffle) < 6) {
        return <div>N??o</div>;
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
    if (status === 'approved')
      return <div style={{ fontWeight: 'bold', color: 'green' }}>Aprovado</div>;
    if (status === 'authorized')
      return (
        <div style={{ fontWeight: 'bold', color: 'green' }}>Autorizado</div>
      );
    if (status === 'in_process')
      return (
        <div style={{ fontWeight: 'bold', color: 'orange' }}>Processando</div>
      );
    if (status === 'pending')
      return (
        <div style={{ fontWeight: 'bold', color: 'orange' }}>Pendente</div>
      );
    if (status === 'rejected')
      return <div style={{ fontWeight: 'bold', color: 'red' }}>Rejeitado</div>;
  }, []);

  const fields = [
    { key: 'id', _style: { width: '1%' }, label: 'id' },
    { key: 'name', label: 'Nome do jogo' },
    { key: 'numbers', label: 'N??meros' },
    // { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Jogado' },
    // { key: 'payment_id', _style: { width: '1%' }, label: 'Pagamento' },
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
              <Left>
                <Text>Identificador:</Text>
              </Left>
              <Right>
                <Text2>{raffle.id}</Text2>
              </Right>
            </Column>
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
                <Text>In??cio:</Text>{' '}
              </Left>
              <Right>
                <Text2>{moment(raffle.init).format('DD/MM/YY, H:mm:ss')}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text>T??rmino:</Text>{' '}
              </Left>
              <Right>
                <Text2>{moment(raffle.end).format('DD/MM/YY, H:mm:ss')}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text> Pr??mio Acumulado:</Text>{' '}
              </Left>
              <Right>
                <Text2>{totalPrize.toFixed(2).replace(/\./g, ',')}</Text2>
              </Right>
            </Column>
            <Column>
              <Left>
                <Text>N??meros:</Text>{' '}
              </Left>
              <Right>
                <Text2>{numbersHandler(raffle.numbers)}</Text2>
              </Right>
            </Column>
          </Row>
          <ButtonRow>
            <EditAllButton onClick={() => setShowEditRaffle(!showEditRaffle)}>
              <CIcon name="cil-pencil" className="mfe-2" />
              Editar dados deste sorteio
            </EditAllButton>

            {raffle.numbers === null && (
              <AddButton
                onClick={() =>
                  setShowEditNumbersRaffle(!showEditNumbersRaffle)
                }>
                <CIcon name="cil-pencil" className="mfe-2" />
                Editar n??meros do sorteio {raffle.name}
              </AddButton>
            )}
            {raffle.numbers !== null && (
              <EditButton
                onClick={() =>
                  setShowEditNumbersRaffle(!showEditNumbersRaffle)
                }>
                <CIcon name="cil-pencil" className="mfe-2" />
                Editar n??meros do sorteio {raffle.name}
              </EditButton>
            )}
          </ButtonRow>
        </RaffleContent>
        {showEditRaffle && (
          <EditRaffle
            close={setShowEditRaffle}
            raffle={raffle}
            loadRaffle={loadRaffle}
          />
        )}
        {showEditNumbersRaffle && (
          <EditNumbersRaffle
            close={setShowEditNumbersRaffle}
            raffle={raffle}
            loadRaffle={loadRaffle}
          />
        )}
        <CDataTable
          items={games}
          fields={fields}
          columnFilter
          footer
          // outlined={true}
          // border={true}
          // clickableRows={true}
          tableFilter={{ label: ' ', placeholder: 'Filtrar' }}
          itemsPerPageSelect={{ label: 'Items por p??gina' }}
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
            status: item => <td>{statusHandler(item.status)}</td>,
            payment_id: item => (
              <td>
                <a href={`/admin/payment/${item.payment.platform_payment_id}`}>
                  Detalhes
                </a>
              </td>
            ),
            type: item => <td>{item.payment.type}</td>,
            payment_date: item => (
              <td>
                {moment(item.payment.created_at).format('DD/MM/YY, H:mm:ss')}
              </td>
            ),
            won: item => <td>{checkWonColor(item)}</td>,
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
              if (item.payment.type === 'single') {
                return (
                  <CCollapse show={details.includes(index)}>
                    <PaymentCollapse
                      game={item}
                      show={details.includes(index)}
                    />
                  </CCollapse>
                );
              } else if (item.payment.type === 'signature') {
                return (
                  <CCollapse show={details.includes(index)}>
                    <SignatureCollapse
                      game={item}
                      show={details.includes(index)}
                    />
                  </CCollapse>
                );
              }
            },
          }}
        />
      </Container>
    );
};

export default RafflesDetail;
