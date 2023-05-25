import createHttp from './http.service';
class AuthService {
    constructor() {
        this.http = createHttp('');
    }

    async createLogin(data) {
        return (await this.http.post('/login', data)).data;
    }
}

export default new AuthService();
