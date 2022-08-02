import axios, {AxiosError, AxiosResponse} from 'axios';
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));
axios.defaults.baseURL = 'http://localhost:5018/api/';
axios.interceptors.response.use(async response => {
    await sleep();
    return response;
});
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => requests.get('beagles'),
    details: (id: number) => requests.get(`beagles/${id}`)
}

const agent = {
    Catalog
}

export default agent;