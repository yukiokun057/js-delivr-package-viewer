<template>
  <v-dialog content-class="dialog-package-info" v-model="isShown" max-width="666px">
    <v-card active-class="package-info" height="300">
      <!-- loading -->
      <div v-if="isLoading" class="dialog-loading-wrapper">
        <v-progress-circular color="black" indeterminate />
      </div>
      <!-- content -->
      <div v-else class="dialog-content-wrapper">
        <!-- header -->
        <div class="package-info__header header">
          <v-card-title class="header__item dialog-title">{{packageName}}</v-card-title>
          <div class="header__item">
            <v-btn icon @click="close()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
        <!-- body -->
        <v-container class="package-info__body">
          <v-row no-gutters>
            <v-col cols="12">
              <v-row no-gutters>
                <v-container class="property-title" fluid>Author:</v-container>
                <span class="package-owner">{{ authorName }}</span>
                <a
                  v-if="authorEmail"
                  class="package-owner-email"
                  :href="authorEmailLink"
                >{{ authorEmail }}</a>
              </v-row>
              <v-row no-gutters>
                <v-container class="property-title" fluid>Package info:</v-container>
                <v-chip class="package-version" small outlined :ripple="false">
                  <v-avatar left>
                    <v-icon small>mdi-tag</v-icon>
                  </v-avatar>
                  Latest: {{ version }}
                </v-chip>
                <v-chip class="package-license" small outlined :ripple="false">
                  <v-avatar left>
                    <v-icon small>mdi-license</v-icon>
                  </v-avatar>
                  {{ license }}
                </v-chip>
              </v-row>
              <v-row no-gutters>
                <v-container class="property-title" fluid>Description:</v-container>
                <span class="package-description">{{ description }}</span>
              </v-row>
              <v-row no-gutters class="package-keywords">
                <v-container class="property-title" fluid>Keywords:</v-container>
                <v-chip
                  v-for="(keyword, index) in keywords"
                  :key="`${index}-${keyword}`"
                  class="keyword-chip"
                  small
                  outlined
                  :ripple="false"
                >{{ keyword }}</v-chip>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
      isLoading: false,
      packageObject: null,
    };
  },
  computed: {
    packageName() {
      return this.packageObject == null ? '' : this.packageObject.name;
    },
    authorName() {
      return this.packageObject == null || this.packageObject.author == null
        ? ''
        : this.packageObject.author.name;
    },
    authorEmail() {
      return this.packageObject == null || this.packageObject.author == null
        ? ''
        : this.packageObject.author.email;
    },
    authorEmailLink() {
      return this.packageObject == null || this.packageObject.author == null
        ? ''
        : `mailto:${this.packageObject.author.email}`;
    },
    version() {
      return this.packageObject == null
        ? ''
        : this.packageObject['dist-tags'].latest;
    },
    license() {
      return this.packageObject == null ? '' : this.packageObject.license;
    },
    description() {
      return this.packageObject == null ? '' : this.packageObject.description;
    },
    keywords() {
      return this.packageObject == null ? '' : this.packageObject.keywords;
    },
  },
  methods: {
    async pop(packageName) {
      try {
        this.isShown = true;
        this.isLoading = true;
        await this.fetchPackage(packageName);
      } finally {
        this.isLoading = false;
      }
    },
    close() {
      this.isShown = false;
      this.packageObject = null;
    },
    async fetchPackage(packageName) {
      this.packageObject = await this.$store.dispatch(
        'packages/fetchPackage',
        packageName,
      );
    },
  },
};
</script>

<style lang="scss">
.dialog-loading-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  &__item {
    align-items: center;
    &:last-child {
      margin-right: 10px;
    }
  }
}
.dialog-title {
  cursor: default;
  font-size: 24px;
  font-weight: 600;
  color: #000;
  display: inline-block;
  margin: 0;
}

.package-owner {
  margin-right: 10px;
  color: #000;
  font-size: 16px;
  text-decoration: none;
}
.package-owner-email {
  margin-right: 10px;
  color: rgb(37, 37, 37);
  font-size: 16px;
  text-decoration: none;
}
.package-version {
  margin-right: 10px;
}
.package-description {
  font-size: 15px;
  font-weight: 600;
  text-align: start;
  overflow-wrap: break-word;
  word-break: break-word;
  opacity: 0.7;
}
.package-keywords {
  margin-bottom: 20px;
  .keyword-chip ~ .keyword-chip {
    margin-left: 4px;
  }
}
.property-title {
  padding: 0;
  text-align: left;
  font-size: 10px;
  color: rgb(165, 165, 165);
}
</style>
