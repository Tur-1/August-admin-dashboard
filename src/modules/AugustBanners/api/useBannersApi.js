import api from "@/api";



const getAll = () =>
{
    return api().get('getAllbanners');
}

const storeNewBanner = (fields) =>
{

    return api().post("bannersstore", fields);
}
const updateBanner = ({ fields, id }) =>
{

    return api().post("bannersupdate/" + id, fields);
}
const getBanner = (id) =>
{
    return api().post("bannersshow/" + id);
}
const deleteBanner = (id) =>
{
    return api().post("bannersdelete/" + id);
}

export default {
    storeNewBanner,
    updateBanner,
    getBanner,
    getAll,
    deleteBanner
}