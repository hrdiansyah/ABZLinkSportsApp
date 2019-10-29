import VueResource from 'vue-resource'
import Vue from 'vue'
import { getApiNoAuth } from '../utils.js'

Vue.use(VueResource)

export default {

    loginUser(window, email, password) {
    // let self = this;
    return getApiNoAuth()
      .post("users/", email, password)
      .then(function(response) {
        console.log(response);
        return response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};