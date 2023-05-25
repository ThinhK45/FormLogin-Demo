<script setup>
import { ref } from 'vue';
import { encodeBase64 } from '@progress/kendo-file-saver';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { mapActions, storeToRefs } from 'pinia';
import { useAuthStore } from '../../stores/Auth.store';
const router = useRouter();

const checked = ref(false);
const taiKhoan = ref('');
const matKhau = ref('');
const store = useAuthStore();
const { isUserLoggedIn } = storeToRefs(store);
const { login } = store;

// async function handleLogin() {
//     await axios
//         .post(
//             'https://api-cokyvina.vnpttravinh.vn/xac-thuc/dang-nhap',
//             {
//                 taiKhoan: taiKhoan.value,
//                 matKhau: encodeBase64(matKhau.value),
//             }
//             // {
//             //     headers: {
//             //         'x-access-token': response.data.data.accessToken,
//             //     },
//             // }
//         )
//         .then((response) => {
//             if (response.status == 200) {
//                 console.log(response);
//                 console.log(response.data.data.accessToken);
//                 return router.push({ name: 'accessDenied' });
//             }
//             // console.log(response);
//             // console.log(response.status);
//             // console.log(response.data.data.accessToken);
//             // return router.push({ name: 'accessDenied' });
//         })
//         .catch((error) => {
//             // console.log(error);
//             return router.push({ name: 'error' });
//         });
// }

// ...mapActions(useAuthStore, ['login'])
async function handleLogin(user) {
    try {
        await login(user);
        location.href = 'http://127.0.0.1:5173';
        console.log('thanh cong');
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div
        class="surface-ground flex align-items-center justify-content-center overflow-hidden"
    >
        <div
            class="flex flex-column align-items-center justify-content-center my-3"
        >
            <div
                style="
                    border-radius: 56px;
                    padding: 0.3rem;
                    background: linear-gradient(
                        180deg,
                        var(--primary-color) 10%,
                        rgba(33, 150, 243, 0) 30%
                    );
                "
            >
                <div
                    class="w-full surface-card py-8 px-5 sm:px-8"
                    style="border-radius: 53px"
                >
                    <div class="text-center mb-5">
                        <img
                            src="https://blocks.primevue.org/images/blocks/logos/hyper.svg"
                            alt="Image"
                            height="50"
                            class="mb-3"
                        />
                        <div class="text-900 text-3xl font-medium mb-3">
                            Welcome
                        </div>
                        <span class="text-600 font-medium"
                            >Sign in to continue</span
                        >
                    </div>

                    <div>
                        <label
                            for="username"
                            class="block text-900 text-xl font-medium mb-2"
                            >UserName</label
                        >
                        <InputText
                            id="username"
                            type="text"
                            placeholder="Email address"
                            class="w-full md:w-30rem mb-5"
                            style="padding: 1rem"
                            v-model="taiKhoan"
                        />

                        <label
                            for="password1"
                            class="block text-900 font-medium text-xl mb-2"
                            >Password</label
                        >
                        <Password
                            id="password1"
                            v-model="matKhau"
                            placeholder="Password"
                            :toggleMask="true"
                            class="w-full mb-3"
                            inputClass="w-full"
                            inputStyle="padding:1rem"
                        ></Password>

                        <div
                            class="flex align-items-center justify-content-between mb-5 gap-5"
                        >
                            <div class="flex align-items-center">
                                <Checkbox
                                    v-model="checked"
                                    id="rememberme1"
                                    binary
                                    class="mr-2"
                                ></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a
                                class="font-medium no-underline ml-2 text-right cursor-pointer"
                                style="color: var(--primary-color)"
                                >Forgot password?</a
                            >
                        </div>
                        <Button
                            label="Sign In"
                            class="w-full p-3 text-xl"
                            @click="handleLogin"
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
