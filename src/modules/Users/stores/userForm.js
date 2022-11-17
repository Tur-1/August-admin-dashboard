import { ref } from 'vue';

let userForm = ref({
    fields: {
        email: '',
        name: '',
        phone_number: '',
        password: '',
        gender: '',
    },
    errors: {
        email: '',
        name: '',
        phone: '',
        password: '',
        gender: '',
    },
    onProgress: false,
    clearErrors()
    {
        let erorr;
        for (erorr in this.errors)
        {
            this.errors[erorr] = null;
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
            let errors = response.data.errors;

            let err;
            let field;
            for (err in errors)
            {

                for (field in this.errors)
                {

                    if (field == err)
                    {
                        this.errors[field] = errors[err][0];

                    }
                }
            }

        }
    }
})


export default userForm.value;