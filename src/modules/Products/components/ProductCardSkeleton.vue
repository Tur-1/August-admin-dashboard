<template>
  <div class="product-list-card" v-for="i in 8">
    <div class="product-list-card-image placeholder-wave">
      <span
        src="..."
        class="placeholder w-100 rounded-0"
        style="height: 265px"
      />
    </div>
    <div class="product-list-card-body placeholder-wave">
      <span class="placeholder col-11 p-3 m-2 mt-3"> </span>
      <span class="placeholder col-11 p-3 m-2"> </span>
      <span class="placeholder col-11 p-3 m-2"> </span>

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
