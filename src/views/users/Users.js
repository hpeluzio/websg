import React, { useCallback, useEffect, useState } from 'react';
import { CDataTable, CBadge } from '@coreui/react';
import moment from 'moment';

import UserService from 'src/services/UserService';

import { Container } from './styles';

const Users = () => {
  const [details, setDetails] = useState([]);
  const [users, setUsers] = useState([]);

  const loadUsers = useCallback(async () => {
    const _response = await UserService.index();
    console.log(_response);
    setUsers(_response.data);
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const fields = [
    { key: 'id', _style: { width: '5%' }, label: 'id' },
    { key: 'email', _style: { width: '20%' }, label: 'E-mail' },
    { key: 'role', label: 'Role' },
    { key: 'created_at', label: 'Criado' },
    { key: 'updated_at', label: 'Atualizado' },
    // { key: 'status', label: 'Status' },
    // {
    //   key: 'show_details',
    //   label: 'Detalhes',
    //   _style: { width: '1%' },
    //   sorter: false,
    //   filter: false,
    // },
  ];

  const getBadge = status => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <Container>
      <CDataTable
        items={users}
        fields={fields}
        columnFilter
        tableFilter={{ label: 'Filtrar', placeholder: 'Digite algo' }}
        // footer
        itemsPerPageSelect={{ label: 'Items por página' }}
        itemsPerPage={20}
        hover
        sorter
        pagination
        scopedSlots={{
          status: item => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),

          created_at: item => (
            <td>{moment(item.created_at).format('DD/MM/YY, H:mm:ss')}</td>
          ),
          updated_at: item => (
            <td>{moment(item.updated_at).format('DD/MM/YY, H:mm:ss')}</td>
          ),
        }}
      />
    </Container>
  );
};

export default Users;
