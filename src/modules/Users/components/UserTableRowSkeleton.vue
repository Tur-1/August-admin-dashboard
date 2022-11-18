<template>
  <tr v-for="i in 6">
    <td>
      <div class="form-check dashboard-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="userCheck1"
        />
        <label class="form-check-label" for="userCheck1"></label>
      </div>
    </td>
    <td>
      <a href="#" class="d-flex align-items-center placeholder-wave">
        <span class="avatar rounded-circle me-3 placeholder" alt="Avatar" />
        <div class="placeholder-wave d-flex flex-column col-8">
          <span class="fw-bold placeholder mb-1 col-8"></span>
          <div class="small text-gray placeholder col-11"></div>
        </div>
      </a>
    </td>
    <td class="placeholder-wave">
      <span class="fw-normal placeholder col-5"> </span>
    </td>
    <td class="placeholder-wave">
      <span class="placeholder col-6"></span>
    </td>
    <td class="placeholder-wave">
      <span class="placeholder col-8"></span>
    </td>
    <td class="placeholder-wave">
      <span class="placeholder col-6"></span>
    </td>
  </tr>
</template>
