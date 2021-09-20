import store from 'src/redux/store';

const hasRole = async route => {
  const state = store.getState();
  const role = await state.session.user.role;

  if (route.role.indexOf(role) === -1) {
    console.log('No permission');
    return false;
  } else {
    console.log('Has granted');
    return true;
  }
};

export default hasRole;
