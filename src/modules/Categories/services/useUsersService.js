import useUsersApi from "@/modules/Users/api/useUsersApi";
import userForm from "@/modules/Users/stores/userForm";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { ref } from "vue";
import users from "@/modules/Users/stores/users";
import perPage from "@/modules/Users/stores/perPage";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";


export default function useUsersService()
{

    let onProgress = ref({
        destroy: false,
        store: false,
        update: false,
        index: false
    });


    const setPerPage = (per_page) =>
    {
        perPage.set(per_page)
        getUsers();
    }

    const getUsers = async (url) =>
    {

        onProgress.value.index = true;

        let response = await useUsersApi.getUsers({ perPage: perPage.number, url: url });

        users.value.list = response.data;
        users.value.filtered = response.data.data;
        users.value.pagination = response.data.pagination;


        onProgress.value.index = false;
    }
    const storeNewUser = async () =>
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
        onProgress.value.destroy = true;
        let response = await useUsersApi.deleteUser(id);

        users.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        onProgress.value.destroy = false;

    };
    return {
        updateUser,
        storeNewUser,
        userForm,
        getUsers,
        users,
        onProgress,
        setPerPage,
        perPage,
        deleteUser,

    }

}