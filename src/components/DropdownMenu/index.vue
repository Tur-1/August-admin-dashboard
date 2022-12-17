<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-sm fs-6 px-1 py-0 dropdown-toggle shadow"
      id="dropdownMenuLink"
      style="border: 1px solid rgb(31 41 55 / 7%)"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <svg
        class="icon icon-xs"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
    </button>
    <div class="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({});
</script>
