import Vue from 'vue';

import packageService from './service.package';

const prepareServices = (store) => {
  store.$services = {
    packageService,
  };

  Vue.mixin({
    beforeCreate() {
      this.$services = store.$services;
    },
  });
};

export {
  prepareServices,
};
