import React, { useCallback, useEffect, useState } from 'react';

import RaffleService from 'src/services/RaffleService';

import {
  Container,
  RaffleContent,
  Row,
  RowButton,
  Label,
  Input,
  SaveButton,
  CancelButton,
  Loader,
} from './styles';

const EditRaffle = ({ close, raffle, loadRaffle }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    if (raffle.name !== null) {
      setName(raffle.name);
    }
  }, [raffle.name]);

  const validateName = useCallback(() => {
    if (name === '') {
      return false;
    }
    return true;
  }, [name]);

  const saveRaffle = useCallback(async () => {
    if (validateName()) {
      var confirmation = window.confirm('Deseja salvar os dados?');

      if (confirmation === true) {
        setLoading(true);
        const _response = await RaffleService.updateRaffle({
          id: raffle.id,
          name: Number(name),
        });
        console.log(_response);
        setLoading(false);
        if (_response.status === 200 || _response.status === 201) {
          loadRaffle();
          alert('Números do concurso atualizado com sucesso.');
        }

        if (_response.status !== 200 && _response.status !== 201) {
          alert(`${_response.data.message}`);
        }
      }
    } else {
      alert('Envie números com valor entre 1 e 60.');
    }
  }, [validateName, loadRaffle, raffle.id, name]);

  if (raffle && loading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (raffle && !loading)
    return (
      <Container>
        <RaffleContent>
          <Row>
            <Label>Número sorteio: </Label>
            <Input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Row>
        </RaffleContent>
        <RowButton>
          <CancelButton onClick={() => close(false)}>Cancelar</CancelButton>
          <SaveButton onClick={saveRaffle}>Salvar</SaveButton>
        </RowButton>
      </Container>
    );
};

export default EditRaffle;
