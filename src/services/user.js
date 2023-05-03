import axios from "axios";

export const get_user = (u, p) => axios.get('http://127.0.0.1:9000/api/account/' + u + '/' + p);

export const create_user = (dataForm) => axios({
    method: 'post',
    url: 'http://127.0.0.1:9000/api/account',
    data: dataForm
});

export const update_user = (dataForm) => axios({
    method: 'put',
    url: 'http://127.0.0.1:9000/api/account',
    params: {
        id: localStorage.getItem("id")
    },
    data: dataForm
});

export const get_product = () => axios.get("http://127.0.0.1:9001/api/product")
export const add_product = (data) => axios.post("http://127.0.0.1:9001/api/product", data)
export const edit_product = (data, id) => axios.put("http://127.0.0.1:9001/api/product/" + id, data)
export const delete_product = (id) => axios.delete("http://127.0.0.1:9001/api/product/" + id)

export const get_sell = () => axios.get("http://127.0.0.1:9001/api/sell")
export const add_sell = (data) => axios.post("http://127.0.0.1:9001/api/sell", data)
export const edit_sell = (data, id) => axios.put("http://127.0.0.1:9001/api/sell/" + id, data)
export const delete_sell = (id) => axios.delete("http://127.0.0.1:9001/api/sell/" + id)

export const add_report = (data) => axios.post("http://127.0.0.1:9001/api/report", data)