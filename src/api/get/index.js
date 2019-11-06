
import * as axios from 'axios';

const BASE_URL_KSSK = 'http://localhost:3000/api/container';
const BASE_URL = 'http://localhost:3000/api/container';

function getting(formData,id) {
  const url = `${BASE_URL}/${id}/upload`;
  const containerUrl = `${BASE_URL}`;
    return axios.get(containerUrl, { name : id } )
    .then(function (res) {
      return axios.get(url, formData)
    }).then(x => x.data)
    // add url field
    .then(x => x.map(img => Object.assign({},
      img, { url: `${BASE_URL}/images/${img.id}` })));
}

function gettingSSK(formData) {
    const url = `${BASE_URL_KSSK}/images/upload`;
    return axios.get(url, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${BASE_URL_KSSK}/images/${img.id}` })));
  }


export { getting, gettingSSK }
