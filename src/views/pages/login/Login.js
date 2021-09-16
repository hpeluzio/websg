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

  // useEffect(() => {
  //   console.log('password', email, password );
  // }, [password, email]);

  const login = useCallback(async () => {
    console.log('login');
    if (validateFieldEmail() && validateFieldPassword()) {
      console.log('login2');
      const { status, data } = await SessionService.login({
        email: 'h@v.com',
        password: 'qweqwe',
      });
      console.log('Login', status, data);

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
    <div className="c-app c-default-layout flex-row align-items-center">
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
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
