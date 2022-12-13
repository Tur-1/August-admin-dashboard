
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
        formData.append(field, fields[field]);
    }

    return formData;
}