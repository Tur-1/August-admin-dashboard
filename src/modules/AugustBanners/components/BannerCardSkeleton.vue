<template>
  <div class="row">
    <div class="col-xl-4 col-lg-4 col-md-4 col-6" v-for="i in 12">
      <figure class="card border-1 m-3">
        <div class="card-header placeholder-wave p-0" style="height: 130px">
          <span class="card-img-top rounded-0 placeholder h-100" alt="..." />
        </div>

        <figcaption
          class="p-2 d-flex justify-content-between align-items-center"
        >
          <div class="d-flex flex-column m-2 placeholder-wave">
            <span class="placeholder mb-2" style="width: 90px"></span>

            <span class="placeholder" style="width: 50px"></span>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</template>
