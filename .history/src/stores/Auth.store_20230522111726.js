import { defineStore } from 'pinia';
import AuthService from '../services/Auth.service';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);

    const isUserLoggedIn = computed((state) => {
        return !!state.user && !!state.user.accessToken;
    });
    function loadAuthState() {
        user = JSON.parse(localStorage.getItem('user'));
    }
    function logout() {
        user = null;
        localStorage.removeItem('user');
    }
    async function login(user) {
        const response = await AuthService.createLogin(user);
        if (!response.accessToken) {
            logout();
            throw new Error('Whoops, no access token found!');
        }
        user = response;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
    return { isUserLoggedIn, loadAuthState, logout, login };
});
