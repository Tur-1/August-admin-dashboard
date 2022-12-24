<template>
  <div class="product-list-card" v-for="i in 6">
    <div
      class="product-list-card-image placeholder-wave"
      style="width: 318px; height: 340px"
    >
      <span src="..." class="placeholder w-100 h-100 rounded-0" />
    </div>
    <div class="product-list-card-body placeholder-wave">
      <span class="placeholder col-1 p-3 m-2"> </span>
      <span class="placeholder col-10 p-3"> </span>
      <span class="placeholder col-1 p-3 m-2"> </span>
      <span class="placeholder col-9 p-3 me-1"> </span>
      <span class="placeholder col-1 p-3"> </span>

      <span class="placeholder col-1 p-3 m-2"> </span>
      <span class="placeholder col-10 p-3"> </span>

      <div class="d-flex justify-content-between align-items-center">
        <span class="placeholder col-3 p-3 m-2"> </span>
        <span class="placeholder col-2 p-3 me-2"> </span>
      </div>
      <button
        type="button"
        class="w-100 btn btn-sm btn-gray-800 rounded-0 placeholder"
      ></button>
    </div>
  </div>
</template>
