export default class ProxyDB {
  constructor(url) {
    this.url = url;
  }

  async getData(path = '') {
    const requestUrl = `${this.url}/${path}`;
    const method = 'GET';
    let response;

    await fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = '';
      });

    return response;
  }

  async getDataById(id, path = '') {
    const requestUrl = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'GET';
    let response;

    await fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = '';
      });

    return response;
  }

  async post(data, path = '') {
    const requestUrl = `${this.url}/${path}`;
    const method = 'POST';
    let response;

    await fetch(requestUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async put(data, id, path = '') {
    const requestUrl = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'PUT';
    let response;

    await fetch(requestUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async delete(id, path = '') {
    const requestUrl = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'DELETE';
    let response;

    await fetch(requestUrl, {
      method,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }
}
