import api from "@/api";



const getReviews = (obj) =>
{

    return api().get(obj.url ?? "reviews");
}
const storeNewReview = (fields) =>
{

    return api().post("reviews/store", fields);
}
const updateReview = (fields, id) =>
{

    return api().put("reviews/update/" + id, fields);
}
const getReview = (id) =>
{
    return api().post("reviews/show/" + id);
}
const deleteReview = (id) =>
{
    return api().delete("reviews/delete/" + id);
}

export default {
    getReviews,
    storeNewReview,
    updateReview,
    getReview,
    deleteReview
}