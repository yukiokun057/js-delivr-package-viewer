const state = {
  query: '',
  items: [],
  page: 1,
  pages: 0,
  perPage: 30,
};

const getters = {
  shouldLoadNextPart: (state) => (uiPage, uiPerPage) => {
    const avalibleItems = state.page * state.perPage;
    const triggerPage = (avalibleItems - uiPerPage) / uiPerPage;
    if (uiPage === triggerPage) return true;
    return false;
  },
};

const actions = {
  async search({ commit, state }, query) {
    commit('RESET');
    commit('SET_QUERY', query);

    if (!query) return;
    const service = this.$services.packageService;
    const { items, nbPages } = await service.search(state.query, state.page, state.perPage);

    commit('APPEND_ITEMS', items);
    commit('SET_PAGES', nbPages);
  },
  async continueSearch({ commit, state }) {
    commit('SET_PAGE', state.page + 1);

    const service = this.$services.packageService;
    const { items, nbPages } = await service.search(state.query, state.page, state.perPage);

    commit('APPEND_ITEMS', items);
    commit('SET_PAGES', nbPages);
  },
  async fetchPackage({ }, packageName) {
    const service = this.$services.packageService;
    const packageObject = await service.fetchPackage(packageName);

    return packageObject;
  },
};

const mutations = {
  SET_PAGE: (state, page) => {
    state.page = page;
  },
  SET_PAGES: (state, pages) => {
    state.pages = pages;
  },
  SET_QUERY: (state, query) => {
    state.query = query;
  },
  APPEND_ITEMS: (state, items) => {
    items.map((item) => state.items.push(item));
  },
  RESET: (state) => {
    state.query = '';
    state.items = [];
    state.page = 1;
    state.pages = 0;
    state.perPage = 30;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
