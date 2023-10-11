<template>
    <div class="con">
        <div class="form">
            <div class="t">
                <img src="/logo.svg" alt="">
                <p>欢迎登录驾校报名系统</p>
            </div>
            <el-form @keydown.enter="onSubmit" class="b" label-position="top" label-width="100px" :model="form"
                style="max-width: 460px">
                <el-form-item required label="用户名">
                    <el-input v-model="form.name" clearable />
                </el-form-item>
                <el-form-item required label="密码">
                    <el-input v-model="form.pwd" clearable show-password />
                </el-form-item>
                <div class="btn">
                    <el-button type="primary" round @click="onSubmit">登录</el-button>
                    <p>没有账号？<a @click="toRegister">点击注册</a></p>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ElNotification } from 'element-plus'
import router from '@/router';
import request from '@/request';

const form = reactive({
    name: '',
    pwd: ''
})
const onSubmit = () => {
    if (form.name === '' || form.pwd === '') {
        ElNotification({
            title: '失败',
            message: '用户名或密码不能为空！',
            type: 'error',
        })
        return
    }
    request.post('/user/login', form).then((res: any) => {
        if (res.code === 200) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            ElNotification({
                title: '成功',
                message: res.msg,
                type: 'success',
            })
            router.push('/')
        } else if (res.code === 400) {
            ElNotification({
                title: '失败',
                message: res.msg,
                type: 'error',
            })
        }

    }).catch(() => {
        ElNotification({
            title: '失败',
            message: '请检查网络',
            type: 'error',
        })
    })
}

const toRegister = () => {
    router.push('/register')
}
</script>

<style lang="less" scoped>
.con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #EFF3F5;

    .form {
        height: 25rem;
        width: 30rem;
        background-color: white;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;

        .t {
            display: flex;
            flex-direction: column;
            margin: 1rem;
            font-size: 1.5rem;

            img {
                height: 4.5rem;
            }
        }

        .b {
            .btn {
                display: flex;
                flex-direction: column;

                .el-button {
                    width: 100%;
                }

                p {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: end;

                    a {
                        cursor: pointer;
                        color: red;
                    }
                }
            }
        }
    }
}
</style>