import { useLoadingSpinner } from '@/components/LoadingSpinner';
import { reactive } from 'vue';

let FormStore = reactive({
    fields: {},
    errors: {},
    onProgress: false,
    showProgress()
    {
        this.onProgress = true;

        useLoadingSpinner.show();
    },

    hideProgress()
    {
        useLoadingSpinner.hide();
        this.onProgress = false;
    },
    clearErrors()
    {
        this.errors = {};
    },

    addValuesToField()
    {

    },
    setFields(fields)
    {
        this.fields = fields;
    },
    appendFields(fields)
    {

        let field;
        for (field in fields)
        {
            this.fields[field] = fields[field];
        }
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


export default FormStore;