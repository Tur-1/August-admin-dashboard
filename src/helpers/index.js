
import useAuthStore from '@/Auth/store/AuthStore';
import { reactive } from 'vue'
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

export const skeletonLoading = reactive({
    isLoading: false,
    show()
    {
        this.isLoading = true;
    },
    hide()
    {
        this.isLoading = false;
    }
});


export const isUnprocessableContent = (error) =>
{
    return error && error.response?.status == 422
}

export const onlyGuestCanAccess = (toMetaRoute) =>
{
    return useAuthStore().isAuthenticated && toMetaRoute.guest
}

export const isNotAuthenticated = (error) =>
{
    return error && error.response?.status == 401
}
export const isNotAuthorized = (error) =>
{
    return error && error.response?.status == 403
}
export const isNotFound = (error) =>
{
    return error && error.response?.status == 404
}



