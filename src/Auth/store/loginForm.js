

import { reactive } from 'vue';

let loginForm = reactive({
    fields: {
        email: "",
        password: "",
    },
    errors: {
        email: null,
        password: null,
    },
    onProgress: false,
    showProgress()
    {
        this.onProgress = true;


    },

    hideProgress()
    {
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
    setErrors(response) 
    {
        if (response.status == 422)
        {
            this.errors = response.data.errors;
        }
    }
})


export default loginForm;