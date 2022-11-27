import { reactive } from 'vue';

let CategoryForm = reactive({
    fields: {
        category_id: '',
        section_id: '',
        name: '',
        image: {},
    },
    errors: {},
    onProgress: false,
    clearErrors()
    {
        this.errors = {};
    },
    clearFields()
    {

        let field;
        for (field in this.fields)
        {
            this.fields[field] = '';
        }
    },
    setErrors(response) 
    {
        if (response.status == 422)
        {
            this.errors = response.data.errors;

        }
    }
})


export default CategoryForm;