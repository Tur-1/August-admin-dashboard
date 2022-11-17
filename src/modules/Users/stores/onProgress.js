import { ref } from 'vue';


let onProgress = ref({
    destroy: false,
    store: false,
    update: false,
    index: false
});

export default onProgress;