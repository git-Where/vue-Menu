
import config from '../../config/index'

const state = {
  showSettings: config.showSettings,
  fixedHeader: config.fixedHeader,
  sidebarLogo: config.sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
    console.log(state)
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

