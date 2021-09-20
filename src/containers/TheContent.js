import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';
import { useSelector } from 'react-redux';

// routes config
import common from 'src/routes/public';
import user from 'src/routes/user';
import admin from 'src/routes/admin';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const PublicRoute = ({ component: Component, ...rest }) => {
  const render = props => {
    return <Component {...props} />;
  };
  return <Route {...rest} render={render} />;
};

const UserRoute = ({ component: Component, ...rest }) => {
  const role = useSelector(s => s.session.user.role);

  const render = props => {
    if (role === 'user' || role === 'admin') {
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  };
  return <Route {...rest} render={render} />;
};

const AdminRoute = ({ component: Component, ...rest }) => {
  const role = useSelector(s => s.session.user.role);

  const render = props => {
    if (role === 'admin') {
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  };
  return <Route {...rest} render={render} />;
};

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {common.map((route, idx) => {
              return (
                route.component && (
                  <UserRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            {user.map((route, idx) => {
              return (
                route.component && (
                  <UserRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            {admin.map((route, idx) => {
              return (
                route.component && (
                  <AdminRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
