<template>
  <v-app>
    <v-main>
      <WidgetSearch />
      <WidgetPackages @item-clicked="itemClicked" />
      <DialogPackageInfo ref="dialog-package-info" />
    </v-main>
    <v-footer app color="#fafafa">
      <div class="author-container author--text">
        <a href="https://gitlab.com/danildanil_" class="author-link author--text author--text-link">
          <v-img
            src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png"
            height="32"
            width="20"
            alt="gitlab-icon"
          />Danil Danilchenko,
        </a>
        2020
      </div>
    </v-footer>
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
.author-container {
  display: flex;
  align-items: center;
  .author-link {
    margin-right: 4px;
    display: flex;
    align-items: center;
    .v-image {
      margin-right: 4px;
    }
  }
}
.author--text {
  font-size: 16px;
  font-weight: 600;
  color: #000 !important;
}
.author--text-link {
  text-decoration: none;
}

#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
