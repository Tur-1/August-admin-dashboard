import { reactive } from 'vue';


let showingEntries = reactive({
    activeEntrie: 10,
    entries: [
        {
            number: 5,
        },
        {
            number: 10,
        },
        {
            number: 20,
        },
    ],
    setActiveEntrie(entrie)
    {
        this.activeEntrie = entrie
    },

});


export default showingEntries;