import createHttp from './http.service';
class AuthService {
    constructor() {
        this.http = createHttp('/');
    }
    async createLogin(data) {
        return (
            await this.http.post(
                'https://api-cokyvina.vnpttravinh.vn/xac-thuc/dang-nhap',
                data
            )
        ).data;
    }
}

export default new AuthService();
