<template>
    <li class="nav-item " :class="{ active: props.activeRouteNames.includes(route.name) }">
        <RouterLink :to="{ name: props.toRoute }" class="nav-link">
            <slot />
            <span class="sidebar-text">{{ props.title }}</span>
        </RouterLink>
    </li>
</template>

<script setup >
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();



const props = defineProps({
    title: {
        type: String,
        require: true,
    },
    toRoute: {
        type: String,
        require: true,
    },
    activeRouteNames: {
        type: Array,
        require: false,
    },
});


</script>
 