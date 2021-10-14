import api from 'src/config/api';

class PaymentService {
  async getPayment({ id }) {
    const _response = await api
      .get(`/payment/getpayment/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async getSignature({ id }) {
    const _response = await api
      .get(`/payment/getsignature/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }
}

export default new PaymentService();
