import api from "@/api";



const getCustomers = (obj) =>
{

    return api().get(obj.url ?? "/customers", { params: { search: obj.search } });
}
const storeNewCustomer = (fields) =>
{

    return api().post("/customers/store", fields);
}
const updateCustomer = (fields, id) =>
{

    return api().post("/customers/update/" + id, fields);
}
const getCustomer = (id) =>
{
    return api().post("/customers/show/" + id);
}
const deleteCustomer = (id) =>
{
    return api().post("/customers/delete/" + id);
}

export default {
    storeNewCustomer,
    updateCustomer,
    getCustomer,
    getCustomers,
    deleteCustomer
}