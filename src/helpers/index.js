
export const isNotNull = (value) =>
{
    return value != null;
}

export const isNull = (value) =>
{
    return value == null;
}


export const appendFormData = (formData, fields) =>
{
    let field;


    for (field in fields)
    {
        if (Array.isArray(fields[field]))
        {

            fields[field].forEach((element, index) =>
            {
                formData.append(`${ field }[]`, JSON.stringify(element));

            });



        } else
        {
            formData.append(field, fields[field]);
        }

    }

    return formData;
}