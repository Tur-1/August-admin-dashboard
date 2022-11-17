<template>
    <div class="card border-0 shadow p-2 pb-4 mb-4">
        <div class="card-header mx-lg-4 p-0 py-3 py-lg-3 mb-4 mb-md-0">
            <h3 class="h5 mb-0">permissions</h3>
        </div>
        <div class="card-body">

            <div class="col-12 col-lg-6">
                <FormSelect id="Role" :options="['Admin', 'content editor']" defaultOption="-- select role --" />
            </div>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="role">
                        <h6 class="permission-page-name">brands</h6>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="1"
                                id="permission-1">
                            <label class="form-check-label" for="permission-1">
                                Create Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="2"
                                id="permission-2">
                            <label class="form-check-label" for="permission-2">
                                Update Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="3"
                                id="permission-3">
                            <label class="form-check-label" for="permission-3">
                                View Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="4"
                                id="permission-4">
                            <label class="form-check-label" for="permission-4">
                                Access Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="5"
                                id="permission-5">
                            <label class="form-check-label" for="permission-5">
                                Delete Brands
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="role">
                        <h6 class="permission-page-name">brands</h6>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="1"
                                id="permission-1">
                            <label class="form-check-label" for="permission-1">
                                Create Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="2"
                                id="permission-2">
                            <label class="form-check-label" for="permission-2">
                                Update Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="3"
                                id="permission-3">
                            <label class="form-check-label" for="permission-3">
                                View Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="4"
                                id="permission-4">
                            <label class="form-check-label" for="permission-4">
                                Access Brands
                            </label>
                        </div>
                        <div class="form-check permissions-checkbox">
                            <input class="form-check-input" type="checkbox" name="permissions[]" value="5"
                                id="permission-5">
                            <label class="form-check-label" for="permission-5">
                                Delete Brands
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import FormSelect from "@/components/FormSelect/index.vue"

</script>
 