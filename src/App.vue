<template>
  <div id="app">
    <WidgetSearch />// TODO: place here package viewer component
  </div>
</template>

<script>
import WidgetSearch from './components/widgets/widget-search.vue';

export default {
  name: 'app',
  components: { WidgetSearch },
};
</script>

<style lang="scss">
#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
