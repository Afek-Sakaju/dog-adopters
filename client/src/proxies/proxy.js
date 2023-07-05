import axios from 'axios';

export default class BaseProxy {
  constructor(url) {
    this.url = url;
  }

  async getData(path = '') {
    const requestUrl = `${this.url}/${path}`;
    const method = 'GET';

    try {
      const response = await axios.get(requestUrl, { withCredentials: true });
      return response;
    } catch (error) {
      console.error(
        `error:${error.response.status},method:${method},url:${requestUrl}`
      );
      return '';
    }
  }

  async getDataById(id, path = '') {
    const requestUrl = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'GET';

    try {
      const response = await axios.get(requestUrl, { withCredentials: true });
      return response;
    } catch (error) {
      console.error(
        `error:${error.response.status},method:${method},url:${requestUrl}`
      );
      return '';
    }
  }

  async post(data, path = '') {
    const requestUrl = `${this.url}/${path}`;
    const method = 'POST';

    try {
      const response = await axios.post(requestUrl, data, {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      console.error(
        `error:${error.response.status},method:${method},url:${requestUrl}`
      );
      return false;
    }
  }

  async put(data, id, path = '') {
    const requestUrl = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'PUT';

    try {
      await axios.put(requestUrl, data, {
        withCredentials: true,
      });
      return true;
    } catch (error) {
      console.error(
        `error:${error.response.status},method:${method},url:${requestUrl}`
      );
      return false;
    }
  }

  async delete(id, path = '') {
    const requestUrl = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'DELETE';

    try {
      await axios.delete(requestUrl, { withCredentials: true });
      return true;
    } catch (error) {
      console.error(
        `error:${error.response.status},method:${method},url:${requestUrl}`
      );
      return false;
    }
  }
}
