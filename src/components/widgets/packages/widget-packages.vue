<template>
  <WidgetWrapper>
    <v-data-iterator
      :items="items"
      :page="page"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <!-- items -->
      <template v-slot:default="props">
        <v-list three-line>
          <template v-for="(item, index) in props.items">
            <ItemPackage
              :key="`${index}-${item.name}`"
              :item="item"
              @item-clicked="packageClicked"
            />
            <v-divider
              v-if="index + 1 < props.items.length"
              :key="index"
            />
          </template>
        </v-list>
      </template>
      <template v-slot:footer>
        <v-row
          v-if="numberOfPages > 0"
          no-gutters
          class="footer-container"
          align="center"
          justify="center"
        >
          <v-spacer />

          <span class="mr-4">Page {{ page }} of {{ numberOfPages }}</span>
          <v-btn
            fab
            dark
            class="mr-1"
            @click="previousPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/common/widget.vue';
import ItemPackage from './item-package.vue';

export default {
  components: {
    WidgetWrapper,
    ItemPackage,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    numberOfPages() {
      return this.$store.state.packages.pages;
    },
    items() {
      console.log('get items', this.$store.state.packages.items);
      return this.$store.state.packages.items;
    },
  },
  watch: {
    page(val) {
      const shouldLoad = this.$store.getters['packages/shouldLoadNextPart'](
        val,
        this.itemsPerPage,
      );
      if (shouldLoad) this.$store.dispatch('packages/continueSearch');
    },
  },
  methods: {
    packageClicked(item) {
      console.log(`widget-packages: package clicked: ${item.name}`);
      this.$emit('item-clicked', item);
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    previousPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  margin-top: 8px;
  text-align: center;
}
</style>
