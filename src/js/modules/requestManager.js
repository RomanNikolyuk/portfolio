class RequestManager {
    static url = 'https://romanstudio.pp.ua/wp-json/api/';

    static works() {
        return this.sendRequest('works');
    }
    
    static work(alias) {
        return this.sendRequest('works/' + alias);
    }

    static async sendRequest(url) {

        const data = await fetch(this.url + url);

        return await data.json();
    }

    static submitForm(formData) {
        let body = new URLSearchParams();
        for (let [key, value] of formData) {
            body.append(key, value);
        }

        return fetch('https://romanstudio.pp.ua/wp-admin/admin-ajax.php?action=send_form', {
            method: "POST",
            body
        });
    }

}

export default RequestManager;