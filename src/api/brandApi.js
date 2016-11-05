export default class BrandApi {
    static getAllBrands() {
        const access_token = sessionStorage.getItem('access_token');
        return fetch('http://localhost:8080/api/brands', {
            headers: new Headers({
                'Authorization': `Bearer ${access_token}`
            })
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}