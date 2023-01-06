import api from "@/api";



const getAll = () =>
{
    return api().get('banners');
}

const storeNewBanner = (fields) =>
{

    return api().post("banners/store", fields);
}
const updateBanner = ({ fields, id }) =>
{

    return api().post("banners/update/" + id, fields);
}
const getBanner = (id) =>
{
    return api().post("banners/show/" + id);
}
const deleteBanner = (id) =>
{
    return api().delete("banners/delete/" + id);
}

export default {
    storeNewBanner,
    updateBanner,
    getBanner,
    getAll,
    deleteBanner
}