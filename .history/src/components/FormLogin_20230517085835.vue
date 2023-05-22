<template>
    <div class="container">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
                <img
                    src="https://blocks.primevue.org/images/blocks/logos/hyper.svg"
                    alt="Image"
                    height="50"
                    class="mb-3"
                />
                <div class="text-900 text-3xl font-medium mb-3">
                    Welcome Back
                </div>
                <span class="text-600 font-medium line-height-3"
                    >Don't have an account?</span
                >
                <a
                    class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
                    >Create today!</a
                >
            </div>

            <div>
                <label for="email1" class="block text-900 font-medium mb-2"
                    >UserName</label
                >
                <InputText
                    v-model="taiKhoan"
                    id="email1"
                    type="text"
                    placeholder="Email address"
                    class="w-full mb-3"
                />

                <label for="password1" class="block text-900 font-medium mb-2"
                    >Password</label
                >
                <InputText
                    v-model="matKhau"
                    id="password1"
                    type="password"
                    placeholder="Password"
                    class="w-full mb-3"
                />

                <div class="flex align-items-center justify-content-end mb-6">
                    <div class="flex align-items-center">
                        <Checkbox
                            id="rememberme1"
                            :binary="true"
                            v-model="checked1"
                            @click="showPwd"
                            class="mr-2"
                        ></Checkbox>
                        <label for="rememberme1">Hiện mật khẩu</label>
                    </div>
                </div>

                <Button
                    label="Sign In"
                    icon="pi pi-user"
                    class="w-full"
                    @click="handleLogin"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { encodeBase64 } from '@progress/kendo-file-saver';
import axios from 'axios';
import { ref } from 'vue';
const taiKhoan = ref('');
const matKhau = ref('');
const checked1 = ref(false);

function showPwd() {
    if (checked1 === true) {
        document.querySelector('#password1').type = 'text';
    } else {
        document.querySelector('#password1').type = 'password';
    }
}

async function handleLogin() {
    let result = await axios.post(
        'https://api-cokyvina.vnpttravinh.vn/xac-thuc/dang-nhap',
        {
            taiKhoan: taiKhoan.value,
            matKhau: encodeBase64(matKhau.value),
        }
    );

    console.log(result);
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>
