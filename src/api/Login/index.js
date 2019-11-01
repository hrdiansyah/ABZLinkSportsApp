import { getApiNoAuth } from '../utils.js'

export default {

    loginUser(window, email, password) {
    // let self = this;
    return getApiNoAuth()
<<<<<<< HEAD
      .get('/users/'+email+'/' + password)
=======
      .get('/users/',email, password )
>>>>>>> aa45cccad64996419c1ce8482c58f8494cfc20cd
      .then(function(response) {
        console.log(response);
        return response.data;
      })
      .catch(function(err) {
        console.log(err);
      })
  }
}

// loginUser(window, email, password) {
//   // let self = this;
//   return getApiNoAuth()
//     .get('/users/'+ email+'/' + password)
//     .then(function(response) {
//       console.log(response);
//       return response.data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     })
// }