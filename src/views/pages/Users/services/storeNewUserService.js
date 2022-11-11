import useUsersApi from "@/views/pages/Users/api/useUsersApi";
import userForm from "@/views/pages/Users/stores/userForm";

import useToastNotification from "@/views/components/Toast/useToastNotification";

const storeNewUser = async () =>
{
    userForm.onProgress = true;
    userForm.clearErrors();

    try
    {
        let response = await useUsersApi.storeNewUser(userForm.fields);


        useToastNotification.open(response.data.data.message);
    } catch (error)
    {

        userForm.setErrors(error.response);
    }
    userForm.onProgress = false;

};


export default { storeNewUser, userForm }