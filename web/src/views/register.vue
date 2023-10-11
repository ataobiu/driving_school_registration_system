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
                <el-form-item required label="确认密码">
                    <el-input v-model="form.repwd" clearable show-password />
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="form.nickname" clearable show-password />
                </el-form-item>
                <div class="btn">
                    <el-button type="primary" round @click="onSubmit">注册</el-button>
                    <a @click="router.back">返回</a>
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
    pwd: '',
    repwd: '',
    nickname: '',

})
const onSubmit = () => {
    if (form.name === '' || form.pwd === '') {
        ElNotification({
            title: 'error',
            message: '用户名或密码不能为空！',
            type: 'error',
        })
        return
    } else if (form.pwd !== form.repwd) {
        ElNotification({
            title: 'error',
            message: '两次输入密码不一致',
            type: 'error',
        })
        return
    }
    request.post('/user/register', form).then((res: any) => {
        if (res.code === 200) {
            ElNotification({
                title: '成功',
                message: res.msg,
                type: 'success',
            })
            router.push('/login')
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
        height: 35rem;
        width: 35rem;
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
                align-items: end;

                .el-button {
                    width: 100%;
                }

                a {
                    margin-top: 1rem;
                    cursor: pointer;
                    color: red;
                }
            }
        }
    }
}
</style>