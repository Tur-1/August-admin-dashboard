
export const isNotNull = (value) =>
{
    return value != null;
}

export const isNull = (value) =>
{
    return value == null;
}


export const appendFormData = (formFields) =>
{
    let field;


    const formData = new FormData();
    for (field in formFields)
    {


        if (!Array.isArray(formFields[field]))
        {

            formData.append(field, formFields[field]);
        }


        if (Array.isArray(formFields[field]))
        {
            formFields[field].forEach((element, index) =>
            {
                formData.append(`${ field }[]`, JSON.stringify(element));

            });
        }

        if (Array.isArray(formFields[field]) && formFields[field][0] instanceof File)
        {
            formFields[field].forEach((element, index) =>
            {
                formData.append(`${ field }[${ index }]`, element);

            });
        }
    }
    return formData;
}

