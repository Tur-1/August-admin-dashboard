<template>
    <tr v-for="i in 10">
        <td>
            <div class="form-check dashboard-check">
                <input class="form-check-input" type="checkbox" value="" id="userCheck1" />
                <label class="form-check-label" for="userCheck1"></label>
            </div>
        </td>
        <td>
            <a href="#" class="d-flex align-items-center placeholder-wave">
                <span class="avatar rounded-circle me-3 placeholder" alt="Avatar" />
                <div class="placeholder-wave d-flex flex-column ">
                    <span class="fw-bold placeholder mb-1 col-8">Roy Fe</span>
                    <div class="small text-gray placeholder">info@example.com</div>
                </div>
            </a>
        </td>
        <td class=" placeholder-wave">
            <span class="fw-normal placeholder col-5">
                10 Feb
            </span>
        </td>
        <td class="placeholder-wave">
            <span class="fw-normal d-flex align-items-center placeholder col-3">
                Phone
            </span>
        </td>

        <td class="placeholder-wave">
            <span class="placeholder col-4">...</span>
        </td>
    </tr>
</template>
 