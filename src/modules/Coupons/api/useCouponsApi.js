import api from "@/api";



const getCoupons = (obj) =>
{

    return api().get(obj.url ?? "coupons");
}
const storeNewCoupon = (fields) =>
{

    return api().post("coupons/store", fields);
}
const updateCoupon = (fields, id) =>
{

    return api().put("coupons/update/" + id, fields);
}
const getCoupon = (id) =>
{
    return api().post("coupons/show/" + id);
}
const deleteCoupon = (id) =>
{
    return api().delete("coupons/delete/" + id);
}

export default {
    getCoupons,
    storeNewCoupon,
    updateCoupon,
    getCoupon,
    deleteCoupon
}