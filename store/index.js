export const state = () => ({
  main: [],
  main2: [],
  catalog: [],
  vacancies: [],
  contacts: [],
  history: [],
  about: {},
  licenses: [],
  news: [],
  partners: [],
  modals: {
    buy: {
      isOpened: false
    }
  }
})

export const mutations = {
  addMain(state, data) {
    state.main = data
  },
  addMainMore(state, data) {
    state.main2 = data
  },
  addCatalog(state, data) {
    state.catalog = data
  },
  addVacancies(state, data) {
    state.vacancies = data
  },
  addContacts(state, data) {
    state.contacts = data
  },
  addAbout(state, data) {
    state.about = data
  },
  addHistory(state, data) {
    state.history = data
  },
  addLicenses(state, data) {
    state.licenses = data
  },
  addNews(state, data) {
    state.news = data
  },
  addPartners(state, data) {
    state.partners = data
  },
  toggleBuyModal(state, data) {
    state.modals.buy = data;
  }
}

export const actions = {
  addMain(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('slider.php')
        .then((response) => {
          resolve(response);
          context.commit('addMain', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addMainMore(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('main.php')
        .then((response) => {
          resolve(response);
          context.commit('addMainMore', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addCatalog(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('catalog/sections.php')
        .then((response) => {
          context.commit('addCatalog', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addVacancies(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('vacancy.php')
        .then((response) => {
          context.commit('addVacancies', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addContacts(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('contact.php')
        .then((response) => {
          context.commit('addContacts', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addAbout(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('about.php')
        .then((response) => {
          context.commit('addAbout', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addHistory(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('history.php')
        .then((response) => {
          context.commit('addHistory', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addLicenses(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('license.php')
        .then((response) => {
          context.commit('addLicenses', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addNews(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('news.php')
        .then((response) => {
          context.commit('addNews', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addPartners(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('client.php')
        .then((response) => {
          context.commit('addPartners', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  toggleModal(context, data) {
    if (data.type === 'buy') {
      context.commit('toggleBuyModal', {
        isOpened: data.isOpened
      });
    }
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('addMain');
    await dispatch('addMainMore');
    await dispatch('addCatalog');
    await dispatch('addVacancies');
    await dispatch('addContacts');
    await dispatch('addAbout');
    await dispatch('addHistory');
    await dispatch('addLicenses');
    await dispatch('addNews');
    await dispatch('addPartners');
  }
}

export const getters = {
  getMain(state) {
    return state.main;
  },
  getMainMore(state) {
    return state.main2;
  },
  getCatalog(state) {
    return state.catalog;
  },
  getVacancies(state) {
    return state.vacancies;
  },
  getModals(state) {
    return state.modals;
  },
  getContacts(state) {
    return state.contacts;
  },
  getAbout(state) {
    return state.about;
  },
  getHistory(state) {
    return state.history;
  },
  getLicenses(state) {
    return state.licenses;
  },
  getNews(state) {
    return state.news;
  },
  getPartners(state) {
    return state.partners;
  },
}
