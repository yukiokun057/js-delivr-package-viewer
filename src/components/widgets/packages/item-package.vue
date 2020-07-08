<template>
  <v-container class="package-container" @click="itemClicked">
    <!-- title and link-buttons -->
    <v-row no-gutters>
      <v-col sm="8" cols="12" class="package-name-wrapper">
        <span class="package-name">{{ item.name }}</span>
      </v-col>
      <v-col sm="4" cols="12">
        <div class="package-buttons">
          <v-btn v-show="item.homepage" icon large :href="item.homepage">
            <v-icon>mdi-link</v-icon>
          </v-btn>
          <v-btn v-if="item.repository" icon large :href="item.repository.url">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <!-- details -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters>
          <a class="package-owner" :href="item.owner.link">
            <v-img
              v-if="item.owner.avatar"
              alt="owner-avatar"
              height="20"
              width="20"
              contain
              :src="item.owner.avatar"
            />
            {{ item.owner.name }}
          </a>
          <v-chip class="package-version" small outlined :ripple="false">
            <v-avatar left>
              <v-icon small>mdi-tag</v-icon>
            </v-avatar>
            {{ item.version }}
          </v-chip>
          <v-chip class="package-license" small outlined :ripple="false">
            <v-avatar left>
              <v-icon small>mdi-license</v-icon>
            </v-avatar>
            {{ item.license }}
          </v-chip>
        </v-row>
        <v-row no-gutters>
          <p class="package-description">{{ item.description }}</p>
        </v-row>
        <v-row no-gutters class="package-keywords">
          <v-chip
            v-for="(keyword, index) in item.keywords.slice(0, 7)"
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
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    itemClicked() {
      console.log(`item-package: package clicked: ${this.item.name}`);
      this.$emit('item-clicked', this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.package-container {
  .package-name-wrapper {
    text-align: start;
  }
  .package-buttons {
    float: right;
  }
  .package-owner {
    display: inline-flex;
    vertical-align: middle;
  }
  .details-container {
    float: left;
  }
}

.package-container {
  padding: 10px 4px 0px 10px;
  &:hover {
    background-color: rgb(250, 250, 250);
  }
  .package-name-wrapper {
    overflow-wrap: break-word;
    word-break: break-word;
    .package-name {
      cursor: default;
      font-size: 24px;
      font-weight: 600;
      color: #000;
      display: inline-block;
      margin: 0;
    }
  }
  .package-owner {
    margin-right: 10px;
    color: #000;
    font-size: 16px;
    text-decoration: none;
    .v-image {
      margin-right: 10px;
    }
  }
  .package-version {
    margin-right: 10px;
  }
  .package-description {
    margin: 10px 0 0;
    font-size: 15px;
    font-weight: 600;
    text-align: start;
    overflow-wrap: break-word;
    word-break: break-word;
    opacity: 0.7;
  }
  .package-keywords {
    margin-top: 20px;
    margin-bottom: 20px;
    .keyword-chip ~ .keyword-chip {
      margin-left: 4px;
    }
  }
}
</style>
