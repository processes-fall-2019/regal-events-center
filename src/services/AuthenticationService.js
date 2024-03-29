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
  sendConfirmationEmail (credentials) {
    return Api().post('sendConfirmationEmail', credentials)
  },
  deleteEvent (credentials) {
    return Api().delete('deleteEvent', credentials)
  },
  deleteVisitor (credentials) {
    return Api().delete('deleteVisitor', credentials)
  },
  markFinished (credentials) {
    return Api().post('markFinished', credentials)
  },
}
