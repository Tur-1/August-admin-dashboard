<template>
  <div class="card border-0 shadow p-0 pb-4 mb-4">
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="details">details</label>
          <light-editor v-model="FormStore.fields.details" />
        </div>
        <div class="col-12 col-lg-6">
          <label for="info_and_care">info and care</label>
          <light-editor v-model="FormStore.fields.info_and_care" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LightEditor } from "@hannanmiah/light-editor";
import { FormStore } from "@/components/BaseForm";
</script>
<style>
.editor-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  border-width: 1px;
}
button.editor-btn {
  background-color: #ccc;
  border-radius: 0.375rem;
  padding: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / 1);
  transition-duration: 0.3s;
  border: none;
  margin: 0 5px;
}
.editor-btn .icon {
  height: 1rem;
  width: 1rem;
}
.editor-toolbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom-width: 1px;
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / 1);
  padding: 0.5rem;
}
</style>
