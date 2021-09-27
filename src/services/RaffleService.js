import api from 'src/config/apiWithLoading';

class RaffleService {
  async index() {
    const _response = await api
      .get('/raffle')
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async detail({ id }) {
    const _response = await api
      .get(`/raffle/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async detailAdmin({ id }) {
    const _response = await api
      .get(`/raffle/admin/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }
}

export default new RaffleService();
