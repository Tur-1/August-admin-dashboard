<template>
    <tr v-for="user in users" :key="user.id">
        <td>
            <div class="form-check dashboard-check">
                <input class="form-check-input" type="checkbox" value="" id="userCheck1" />
                <label class="form-check-label" for="userCheck1"></label>
            </div>
        </td>
        <td>
            <a href="#" class="d-flex align-items-center"><img src="@/assets/img/team/profile-picture-1.jpg"
                    class="avatar rounded-circle me-3" alt="Avatar" />
                <div class="d-block">
                    <span class="fw-bold">{{ user.name }}</span>
                    <div class="small text-gray">{{ user.email }}</div>
                </div>
            </a>
        </td>
        <td><span class="fw-normal">{{ user.created_at }}</span></td>

        <td>
            <DropdownMenu>
                <RouterLink class="dropdown-item d-flex align-items-center"
                    :to="{ name: 'update user', params: { id: user.id } }">
                    <i class="fa-solid fa-pen-to-square "></i>
                    Edit
                </RouterLink>

                <a role="button" class="dropdown-item d-flex align-items-center text-danger">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                </a>
            </DropdownMenu>
        </td>
    </tr>
</template>

<script setup>
import api from '@/api';
import DropdownMenu from '@/views/components/DropdownMenu/index.vue';

import { reactive } from 'vue';

let users = reactive([]);
let response = await api().get('/users');

users = response.data;
</script>
