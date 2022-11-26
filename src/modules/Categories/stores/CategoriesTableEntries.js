import { reactive } from 'vue';


let CategoriesTableEntries = reactive({
    activeEntrie: 10,
    data: [
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


export default CategoriesTableEntries;