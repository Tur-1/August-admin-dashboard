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
        <img
          class="rounded me-3 placeholder"
          style="height: 70px; width: 70px"
        />
      </a>
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
