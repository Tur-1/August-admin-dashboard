<template>
  <thead>
    <tr>
      <th class="border-bottom">
        <div class="form-check dashboard-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="userCheck55"
            value=""
          />
          <label class="form-check-label" for="userCheck55"> </label>
        </div>
      </th>
      <th class="border-bottom" v-for="field in fields">{{ field }}</th>
    </tr>
  </thead>
</template>

<script setup>
defineProps(["fields"]);
</script>
