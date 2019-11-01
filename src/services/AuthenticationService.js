import Api from './Api'

export default {
  getPastEvents (credentials) {
    return Api().get('getPastEvents', credentials)
  },
  getUpcomingEvents (credentials) {
    return Api().get('getUpcomingEvents', credentials)
  },
  // register (credentials) {
  //   return Api().post('register', credentials)
  // },
  // login (credentials) {
  //   return Api().post('login', credentials)
  // },
  // upload (credentials) {
  //   return Api().post('upload', credentials)
  // },
  // getFiles (credentials) {
  //   return Api().get('getFiles', credentials)
  // }
}
