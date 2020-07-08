<template>
  <v-app>
    <WidgetSearch />
    <WidgetPackages @item-clicked="itemClicked" />
  </v-app>
</template>

<script>
import WidgetSearch from './components/widgets/widget-search.vue';
import WidgetPackages from './components/widgets/packages/widget-packages.vue';

export default {
  name: 'App',
  components: { WidgetSearch, WidgetPackages },
  methods: {
    itemClicked(item) {
      console.log(`app: package clicked: ${item.name}`);
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
