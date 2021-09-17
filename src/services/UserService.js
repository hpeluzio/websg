import api from 'src/config/api';

class UserService {
  async index() {
    const _response = await api
      .get('/user')
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new UserService();
