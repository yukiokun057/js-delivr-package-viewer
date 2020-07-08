<template>
  <v-app>
    <WidgetSearch />
    <WidgetPackages @item-clicked="itemClicked" />
    <DialogPackageInfo ref="dialog-package-info" />
  </v-app>
</template>

<script>
import WidgetSearch from './components/widgets/widget-search.vue';
import WidgetPackages from './components/widgets/packages/widget-packages.vue';
import DialogPackageInfo from './components/modals/dialog-package-info.vue';

export default {
  name: 'App',
  components: { WidgetSearch, WidgetPackages, DialogPackageInfo },
  methods: {
    async itemClicked(item) {
      console.log(`app: package clicked: ${item.name}`);
      this.$refs['dialog-package-info'].pop(item.name);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
