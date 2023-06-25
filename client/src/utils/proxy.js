export default class ProxyDB {
  constructor(url) {
    this.url = url;
  }

  async getData(path = null) {
    const url = path ? `${this.url}/${path}` : this.url;
    const method = 'GET';
    let response;

    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async getDataById(id, path = null) {
    const url = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'GET';
    let response;

    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async post(data, path = null) {
    const url = path ? `${this.url}/${path}` : this.url;
    const method = 'POST';
    let response;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
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

  async put(data, id, path = null) {
    const url = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'PUT';
    let response;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
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

  async delete(id, path = null) {
    const url = path ? `${this.url}/${path}/${id}` : `${this.url}/${id}`;
    const method = 'DELETE';
    let response;

    await fetch(url, {
      method,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
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
