<template>
    <el-row justify="center" align="middle" :gutter="20">
        <el-col class="menu" :span="4">
            <el-menu router :default-active="route.path" active-text-color="red">
                <div class="til">车型选择</div>
                <el-menu-item index="/practice/select/小车">
                    <img src="/img/test/xc.webp" alt="">
                    <span>小车</span>
                </el-menu-item>
                <el-menu-item index="/practice/select/货车">
                    <img src="/img/test/hc.webp" alt="">
                    <span>货车</span>
                </el-menu-item>
                <el-menu-item index="/practice/select/客车">
                    <img src="/img/test/kc.webp" alt="">
                    <span>客车</span>
                </el-menu-item>
                <el-menu-item index="/practice/select/摩托车">
                    <img src="/img/test/mtc.webp" alt="">
                    <span>摩托车</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="16">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>


<style lang="less" scoped>
.el-row {
    margin-top: 2.5rem;
}

.til {
    margin: 34px 0 30px 28px;
    font-size: 24px;
    font-weight: 600;
    color: #101D37;
    line-height: 28px;
}

.menu {
    height: 60vh;
    background-color: white;
    border-radius: 1rem;
    img{
        height: 2rem;
    }

    span {
        font-size: 1rem;
        font-weight: 600;
        margin-left: 1rem;
    }
}
</style>