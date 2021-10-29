import api from 'src/config/api';

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

  async updateRaffle({ id, name }) {
    const _response = await api
      .patch(`/raffle/${id}`, { name })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async updateNumbers({ id, numbers }) {
    const _response = await api
      .patch(`/raffle/${id}`, { numbers })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async getTotalPrizeOfLastRaffle() {
    const _response = await api
      .get('/raffle/gettotalprize/last')
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async getTotalPrizeOfSpecificRaffle({ id }) {
    const _response = await api
      .get(`/raffle/gettotalprize/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new RaffleService();
