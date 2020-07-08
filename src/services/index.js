import Vue from 'vue';

import search from './search';

const prepareServices = (store) => {
  store.$services = { searchService: search };

  Vue.mixin({
    beforeCreate() {
      this.$services = store.$services;
    },
  });
};

export {
  prepareServices,
};
