<template>
  <Transition name="bounce" mode="out-in">
    <div class="full-screen-image" v-if="showfullScreenImage">
      <img :src="fullScreenImage" />

      <button type="button" @click="showfullScreenImage = false">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </Transition>
</template>

<script setup></script>

<style lang="scss" scoped></style>
