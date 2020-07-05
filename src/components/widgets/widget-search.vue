<template>
  <WidgetWrapper>
    <v-text-field
      class="search-input"
      v-model="query"
      placeholder="search all of npm"
      prepend-inner-icon="search"
      autofocus
      full-width
      solo
      hide-details
      @keydown.enter="submit"
    >
      <template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-progress-circular v-if="isLoading" size="28" color="info" indeterminate />
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
      isLoading: true,
    };
  },
  methods: {
    submit() {
      console.log(`Submit query: [${this.query}] `);
    },
  },
};
</script>

<style lang="scss">
.search-input {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  width: 100%;
  display: block;
  padding: 18px 40px;
  border-radius: 3px;
  outline: 0;
}

.search-input--active {
  border: 1px solid #ff5627;
}
</style>
