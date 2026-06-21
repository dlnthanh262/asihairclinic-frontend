<template>
  <nuxt-link class="text-decoration-none d-inline-block" :to="to">
    <div class="btn-black btn-hover text-center learn-more-button">
      <p class="text-uppercase mb-0 fw-bold learn-more-button__label">{{ label }}</p>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.learn-more-button {
  min-width: 220px;
  padding: 0.875rem 2rem !important;
  border-radius: 0;
}

.learn-more-button__label {
  font-weight: 700;
  font-size: 1rem;
}
</style>
