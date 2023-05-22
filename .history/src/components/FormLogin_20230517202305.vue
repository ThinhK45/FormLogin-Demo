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
                <Password
                    toggleMask
                    v-model="matKhau"
                    id="password1"
                    type="password"
                    placeholder="Password"
                    class="pr-8 mb-3"
                />
                <!-- <InputText
                    toggleMask
                    v-model="matKhau"
                    id="password1"
                    type="password"
                    placeholder="Password"
                    class="w-full mb-3"
                /> -->

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
.p-input-icon-right > .p-inputtext {
    padding-right: 31.5rem !important;
}
</style>
