<template>
  <div v-show="links.length > 3" class="card-footer px-3 border-0">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          v-for="link in links"
          :class="{ active: link.active }"
        >
          <button
            :disabled="link.url == null || link.active == true"
            role="button"
            @click="changePage(link.url)"
            class="page-link"
            v-html="link.label"
          >

          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
const props = defineProps({
  links: Array,
});


const emits = defineEmits(["onPageChange"]);

const changePage = (url) => {
  window.scrollTo(0, 0);

  emits("onPageChange", url);
};
</script>
