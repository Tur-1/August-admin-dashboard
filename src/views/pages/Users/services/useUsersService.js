import useUsersApi from "@/views/pages/Users/api/useUsersApi";
import userForm from "@/views/pages/Users/stores/userForm";
import useToastNotification from "@/views/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { ref } from "vue";
import users from "@/views/pages/Users/stores/users";
import perPage from "@/views/pages/Users/stores/perPage";
import useConfirmModal from "@/views/components/ConfirmModal/useConfirmModal";


export default function useUsersService()
{

    let onProgress = ref(false);

    const setPerPage = (per_page) =>
    {
        perPage.set(per_page)
        getUsers();
    }

    const getUsers = async (page = 1) =>
    {

        onProgress.value = true;

        let response = await useUsersApi.getUsers(page, perPage.number);

        users.value.list = response.data;
        users.value.filtered = response.data.data;

        onProgress.value = false;
    }
    const createNewUser = async () =>
    {
        userForm.onProgress = true;
        userForm.clearErrors();

        try
        {
            let response = await useUsersApi.storeNewUser(userForm.fields);

            userForm.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            userForm.setErrors(error.response);
        }
        userForm.onProgress = false;

    };
    const updateUser = async (id) =>
    {
        userForm.onProgress = true;
        userForm.clearErrors();

        try
        {
            let response = await useUsersApi.updateUser(userForm.fields, id);

            userForm.fields = response.data.data.user;

            useToastNotification.open(response.data.data.message);
        } catch (error)
        {

            userForm.setErrors(error.response);
        }
        userForm.onProgress = false;

    };
    const deleteUser = async ({ id, index }) =>
    {
        onProgress.value = true;
        let response = await useUsersApi.deleteUser(id);

        users.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        onProgress.value = false;

    };
    return {
        updateUser,
        createNewUser,
        userForm,
        getUsers,
        users,
        onProgress,
        setPerPage,
        perPage,
        deleteUser
    }

}