<template>
    <div class="container">
        <div class="header">
            <div class="left">
                <img src="/logo.svg" alt="">
                <span>驾校报名系统</span>
            </div>
            <div class="right">
                <div class="input">
                    <el-input v-model="search" placeholder="请输入">
                        <template #prepend>
                            <el-select v-model="select" placeholder="请选择" style="width: 5.5rem">
                                <el-option label="驾校" value="1" />
                                <el-option label="教练" value="2" />
                                <el-option label="陪练" value="3" />
                                <el-option label="综合" value="3" />
                            </el-select>
                        </template>
                        <template style="width: 5.5rem" #append>
                            <img style="height: 1rem;" src="/search.svg" alt="">
                        </template>
                    </el-input>
                </div>
                <div class="btn" v-show="user.role == 1">
                    <img style="height: 1.2rem;" src="/backstage.svg" alt="">
                    <a href="/manage">驾校管理</a>
                </div>
                <el-button-group v-show="!isLogin">
                    <el-button @click="router.push('/login')">登录</el-button>
                    <el-button @click="router.push('/register')">注册</el-button>
                </el-button-group>
                <el-button v-show="isLogin" @click="logout">退出登录</el-button>
            </div>
        </div>
        <div class="menu">
            <el-menu router :default-active="route.path" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/practice">模拟考试</el-menu-item>
                <el-menu-item index="/form">学员报名</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElNotification } from 'element-plus'

const route = useRoute();
const router = useRouter();

const select = ref('');
const search = ref('');
const isLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''

const logout = () => {
    localStorage.clear();
    ElNotification({
        title: '成功',
        message: "退出成功！",
        type: 'success',
    })
    window.location.href = '/';
}
</script>

<style lang="less" scoped>
.container {
    width: 75rem;
    min-width: 75rem;

    .header {
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2.5rem;

        .left {
            display: flex;
            align-items: center;
        }

        .right {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 60%;

            .btn {
                display: flex;
                align-items: center;

                a {
                    line-height: 1.2rem;
                    margin-left: 0.2rem;
                }
            }
        }
    }

    .menu {
        width: 100%;
    }
}
</style>