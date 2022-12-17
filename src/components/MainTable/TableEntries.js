import { reactive } from 'vue';


let TableEntries = reactive({
    activeEntrie: 10,
    data: [
        {
            number: 5,
            active: false,
        },
        {
            number: 10,
            active: true,
        },
        {
            number: 20,
            active: false,
        },
    ],
    setActiveEntrie(entrie)
    {
        this.activeEntrie = entrie

        for (const entr in this.data)
        {
            this.data[entr].active = false;
            if (this.data[entr].number == this.activeEntrie)
            {

                this.data[entr].active = true;
            }
        }
    },
});


export default TableEntries;