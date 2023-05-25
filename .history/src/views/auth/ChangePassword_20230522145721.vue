<script setup>
import { ref } from 'vue';
import { encodeBase64 } from '@progress/kendo-file-saver';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const token = JSON.parse(localStorage.getItem('accessToken'));

const matKhauHienTai = ref('');
const matKhauMoi = ref('');
const xacNhanMatKhauMoi = ref('');
async function handleChangePassword() {
    await axios
        .put(
            'https://api-cokyvina.vnpttravinh.vn/nguoi-dung/doi-mat-khau',
            {
                matKhauHienTai: encodeBase64(matKhauHienTai.value),
                matKhauMoi: encodeBase64(matKhauMoi.value),
                xacNhanMatKhauMoi: encodeBase64(xacNhanMatKhauMoi.value),
            },
            {
                'x-access-token': token,
            }
        )
        .then((response) => {
            console.log('thanh cong');
            console.log(response);
            // return router.push({ name: 'accessDenied' });
            // return router.push();
        })
        .catch((error) => {
            // console.log(error);
            return router.push({ name: 'error' });
        });
}
function resetPassword() {
    matKhauHienTai.value = '';
    matKhauMoi.value = '';
    xacNhanMatKhauMoi.value = '';
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
                            Thay đổi mật khẩu
                        </div>
                    </div>

                    <div>
                        <label
                            for="password1"
                            class="block text-900 text-xl font-medium mb-2"
                            >Mật khẩu hiện tại</label
                        >
                        <Password
                            id="password1"
                            :feedback="false"
                            v-model="matKhauHienTai"
                            placeholder="Mật khẩu hiện tại"
                            :toggleMask="true"
                            class="w-full mb-3 md:w-30rem"
                            inputClass="w-full"
                            inputStyle="padding:1rem"
                        ></Password>
                        <!-- <InputText
                            id="password1"
                            type="password"
                            placeholder="Mật khẩu hiện tại"
                            class="w-full md:w-30rem mb-5"
                            style="padding: 1rem"
                            v-model="matKhauHienTai"
                        /> -->

                        <label
                            for="password2"
                            class="block text-900 font-medium text-xl mb-2"
                            >Mật Khẩu mới</label
                        >
                        <Password
                            id="password2"
                            :feedback="false"
                            v-model="matKhauMoi"
                            placeholder="Mật khẩu mới"
                            :toggleMask="true"
                            class="w-full mb-3"
                            inputClass="w-full"
                            inputStyle="padding:1rem"
                        ></Password>

                        <label
                            for="password3"
                            class="block text-900 font-medium text-xl mb-2"
                            >Xác nhận mật Khẩu mới</label
                        >
                        <Password
                            id="password3"
                            :feedback="false"
                            v-model="xacNhanMatKhauMoi"
                            placeholder="Xác nhận mật khẩu mới"
                            :toggleMask="true"
                            class="w-full mb-3"
                            inputClass="w-full"
                            inputStyle="padding:1rem"
                        ></Password>

                        <div class="flex justify-content-between">
                            <Button
                                label="Hủy"
                                class="w-5 p-3 text-l"
                                @click="resetPassword"
                            ></Button>
                            <Button
                                label="Lưu"
                                class="w-5 p-3 text-l"
                                @click="handleChangePassword"
                            ></Button>
                        </div>
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
