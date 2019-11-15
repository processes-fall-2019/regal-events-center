import Api from './Api'

export default {
  getPastEvents (credentials) {
    return Api().get('getPastEvents', credentials)
  },
  getUpcomingEvents (credentials) {
    return Api().get('getUpcomingEvents', credentials)
  },
  sendEmail (credentials) {
    return Api().post('sendEmail', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  getAllEvents (credentials) {
    return Api().get('getAllEvents', credentials)
  },
  getAllVisitors (credentials) {
    return Api().get('getAllVisitors', credentials)
  },
  createAnEvent (credentials) {
    return Api().post('createAnEvent', credentials)
  },
  addVisitor (credentials) {
    return Api().post('addVisitor', credentials)
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
