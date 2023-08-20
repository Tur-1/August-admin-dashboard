import { useLoadingSpinner } from '@/components/LoadingSpinner';
import { reactive } from 'vue';

let FormStore = reactive({
    fields: {},
    errors: [],
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
        this.clearErrors();
        this.fields = fields;
    },
    appendFields(newFields)
    {

        let field;
        for (field in newFields)
        {
            if (!this.fields.hasOwnProperty(newFields))
            {
                this.fields[field] = newFields[field];
            }

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
    setErrors(error) 
    {
        if (error && error.response?.status == 422)
        {
            this.errors = response.data.errors;
        }
    }
})


export default FormStore;