import api from "@/api";



const getOrders = (obj) =>
{

    return api().get(obj.url ?? "orders");
}
const storeNewOrder = (fields) =>
{

    return api().post("orders/store", fields);
}
const updateOrder = (fields, id) =>
{

    return api().put("orders/update/" + id, fields);
}
const getOrder = (id) =>
{
    return api().post("orders/show/" + id);
}
const deleteOrder = (id) =>
{
    return api().delete("orders/delete/" + id);
}

export default {
    getOrders,
    storeNewOrder,
    updateOrder,
    getOrder,
    deleteOrder
}