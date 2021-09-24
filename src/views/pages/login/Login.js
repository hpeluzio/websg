import React, { useCallback, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from 'src/redux/actions/session/sessionActions';
import { useHistory } from 'react-router-dom';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import SessionService from 'src/services/SessionService';
import { colors } from 'src/styles';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(s => s.session.token);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Form validation
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorLog, setErrorLog] = useState('');

  useEffect(() => {
    if (token !== null) {
      history.push('/home');
    }
  }, [history, token]);

  const validateFieldEmail = useCallback(() => {
    if (email === '') {
      setErrorEmail('Preencha seu e-mail corretamente.');
      return false;
    } else {
      setErrorEmail('');
      return true;
    }
  }, [email]);

  const validateFieldPassword = useCallback(() => {
    if (password === '') {
      setErrorPassword('Preencha uma senha corretamente.');
      return false;
    } else {
      setErrorPassword('');
      return true;
    }
  }, [password]);

  const login = useCallback(async () => {
    if (validateFieldEmail() && validateFieldPassword()) {
      const { status, data } = await SessionService.login({
        email: 'h@v.com',
        password: 'qweqwe',
      });
      // console.log('Login', status, data);

      if (status === 200) {
        dispatch(setSession({ user: data.user, token: data.token }));
        history.push('/home');
      } else if (status === 401) {
        setErrorLog('Login ou senha incorretos.');
      } else {
        setErrorLog('Ocorreu algum erro.');
      }
    }
  }, [history, dispatch, validateFieldEmail, validateFieldPassword]);

  return (
    <div className="/*c-app c-default-layout flex-row align-items-center*/">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    {/* <p className="text-muted">Sign In to your account</p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        onBlur={validateFieldEmail}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        onBlur={validateFieldPassword}
                      />
                    </CInputGroup>
                    {errorEmail !== '' && (
                      <p style={{ color: 'red' }}>{errorEmail}</p>
                    )}
                    {errorPassword !== '' && (
                      <p style={{ color: 'red' }}>{errorPassword}</p>
                    )}
                    {errorLog !== '' && (
                      <p style={{ color: 'red' }}>{errorLog}</p>
                    )}
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="success"
                          className="px-4"
                          onClick={login}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        {/* <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5 d-md-down-none"
                style={{ width: '44%', background: colors.primaryDark }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Bolão da Sorte</h2>
                    <p>
                      Seja muito bem vindo ao Diamante Beneficente Web. Neste
                      site você pode salvar todas as informações para
                      auditorias.
                    </p>
                    {/* <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
