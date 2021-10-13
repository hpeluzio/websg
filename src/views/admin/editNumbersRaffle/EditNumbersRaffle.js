import React, { useCallback, useEffect, useState } from 'react';

import RaffleService from 'src/services/RaffleService';

import {
  Container,
  RaffleContent,
  Row,
  RowButton,
  NumberInput,
  SaveButton,
  CancelButton,
  Loader,
} from './styles';

const EditNumbersRaffle = ({ close, raffle, loadRaffle }) => {
  const [loading, setLoading] = useState(false);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [num6, setNum6] = useState('');

  // useEffect(() => {
  //   console.log(num1);
  // }, [num1]);

  useEffect(() => {
    if (raffle.numbers !== null) {
      setNum1(raffle.numbers.split(',')[0]);
      setNum2(raffle.numbers.split(',')[1]);
      setNum3(raffle.numbers.split(',')[2]);
      setNum4(raffle.numbers.split(',')[3]);
      setNum5(raffle.numbers.split(',')[4]);
      setNum6(raffle.numbers.split(',')[5]);
    }
  }, [raffle.numbers]);

  const validateNumbers = useCallback(() => {
    if (
      Number(num1) >= 1 &&
      Number(num1) <= 60 &&
      Number(num2) >= 1 &&
      Number(num2) <= 60 &&
      Number(num3) >= 1 &&
      Number(num3) <= 60 &&
      Number(num4) >= 1 &&
      Number(num4) <= 60 &&
      Number(num5) >= 1 &&
      Number(num5) <= 60 &&
      Number(num6) >= 1 &&
      Number(num6) <= 60
    ) {
      // console.log('aq');
      return true;
    }
    return false;
  }, [num1, num2, num3, num4, num5, num6]);

  const saveRaffle = useCallback(async () => {
    if (validateNumbers()) {
      var confirmation = window.confirm('Deseja salvar estes números?');

      if (confirmation === true) {
        setLoading(true);
        const _response = await RaffleService.updateNumbers({
          id: raffle.id,
          numbers: [
            Number(num1),
            Number(num2),
            Number(num3),
            Number(num4),
            Number(num5),
            Number(num6),
          ],
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
  }, [
    validateNumbers,
    loadRaffle,
    raffle.id,
    num1,
    num2,
    num3,
    num4,
    num5,
    num6,
  ]);

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
            <NumberInput
              type="text"
              value={num1}
              onChange={e => setNum1(e.target.value)}
            />
            <NumberInput
              type="text"
              value={num2}
              onChange={e => setNum2(e.target.value)}
            />
            <NumberInput
              type="text"
              value={num3}
              onChange={e => setNum3(e.target.value)}
            />
            <NumberInput
              type="text"
              value={num4}
              onChange={e => setNum4(e.target.value)}
            />
            <NumberInput
              type="text"
              value={num5}
              onChange={e => setNum5(e.target.value)}
            />
            <NumberInput
              type="text"
              value={num6}
              onChange={e => setNum6(e.target.value)}
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

export default EditNumbersRaffle;
