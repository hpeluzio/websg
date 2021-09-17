import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { CDataTable } from '@coreui/react';
import moment from 'moment';
import RaffleService from 'src/services/RaffleService';

const Raffles = () => {
  const [raffles, setRaffles] = useState([]);
  const history = useHistory();

  const loadRaffles = useCallback(async () => {
    const _response = await RaffleService.index();
    // console.log('raffles: ', _response);
    setRaffles(_response.data);
  }, []);

  useEffect(() => {
    loadRaffles();
  }, [loadRaffles]);

  const onRowClicked = useCallback(
    item => {
      history.push({
        pathname: `/admin/rafflesdetail/${item.id}`,
        // search: `?id=${item.id}`,
        // state: { detail: response.data }
      });
    },
    [history],
  );

  const fields = [
    // { key: 'id', _style: { width: '5%' }, label: 'id' },
    { key: 'name', label: 'Número do sorteio' },
    { key: 'init', label: 'Início' },
    { key: 'end', label: 'Término' },
    { key: 'numbers', _style: { width: '15%' }, label: 'Números' },
  ];

  return (
    <Container>
      <CDataTable
        items={raffles}
        fields={fields}
        // columnFilter
        tableFilter={{ label: ' ', placeholder: 'Filtrar' }}
        // footer
        itemsPerPageSelect={{ label: 'Items por página' }}
        itemsPerPage={20}
        hover
        sorter
        pagination
        onRowClick={item => onRowClicked(item)}
        scopedSlots={{
          init: item => (
            <td>{moment(item.init).format('DD/MM/YY, H:mm:ss')}</td>
          ),
          end: item => <td>{moment(item.end).format('DD/MM/YY, H:mm:ss')}</td>,
        }}
      />
    </Container>
  );
};

export default Raffles;