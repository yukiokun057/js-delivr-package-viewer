<template>
  <WidgetWrapper>
    <v-text-field
      v-model="query"
      class="search-input"
      placeholder="search all of npm"
      prepend-inner-icon="mdi-magnify"
      color="black"
      autofocus
      full-width
      solo
      hide-details
      @keydown.enter="submit"
    >
      <template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-progress-circular v-if="isLoading" size="28" color="black" indeterminate />
        </v-fade-transition>
      </template>
    </v-text-field>
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/common/widget.vue';

export default {
  components: {
    WidgetWrapper,
  },
  data() {
    return {
      query: '',
      isLoading: false,
    };
  },
  methods: {
    async submit() {
      try {
        this.isLoading = true;
        console.log(`Submit query: [${this.query}] `);

        await this.$store.dispatch('packages/search', this.query);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  width: 100%;
  display: block;
  border-radius: 3px;
  outline: 0;
}
</style>
