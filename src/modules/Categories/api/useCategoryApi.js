import api from "@/api";



const getAllCategories = ({ perPage, url }) =>
{
    return api().get(url ?? "/categories", { params: { per_page: perPage } });
}

export default {
    getAllCategories,

}