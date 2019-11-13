
import * as axios from 'axios';
import { getApiNoAuthLB } from "../utils"


const BASE_URL_KSSKS = 'http://localhost:3000/api/containerdsc';
const BASE_URLS = 'http://localhost:3000/api/containerdsc';

function uploaddsc(formData,id) {
  const urls = `${BASE_URLS}/${id}/upload`;
  const containerUrls = `${BASE_URLS}`;
    return axios.post(containerUrls, { name : id } )
    .then(function (res) {
      return axios.post(urls, formData)
    }).then(x => x.data)
    // add url field
    .then(x => x.map(img => Object.assign({},
      img, { url: `${BASE_URLS}/imagesdsc/${img.id}` })));
}

function uploadKSSKdsc(formData) {
    const urls = `${BASE_URL_KSSKS}/imagesdsc/upload`;
    return axios.post(urls, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${BASE_URL_KSSKS}/imagesdsc/${img.id}` })));
  }

 function downloadImagedsc(window, file){
  return getApiNoAuthLB()
  .get('containerdsc/imagesdsc/download/'+file)
  .then(function(response){
      return response.config
  })
  .catch (function(err){
      console.log(err)
  })
}

export {uploaddsc, uploadKSSKdsc, downloadImagedsc }
