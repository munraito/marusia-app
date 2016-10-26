export default class SessionApi {
    static login(credentials) {
        const request = new Request(`http://localhost:8080/oauth/token?username=${credentials.name}&password=${credentials.password}&grant_type=password&scope=read%20write`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': `Basic ${btoa('web:')}`
            })
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
