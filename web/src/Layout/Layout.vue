<template>
    <div class="layout">
        <el-container>
            <el-header class="header">
                <Header></Header>
            </el-header>
            <el-main class="main">
                <router-view></router-view>
                
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.layout {
    width: 100vw;
    background: #EFF3F5;

    .header {
        height: 10rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .main {
        height: calc(100vh - 10rem);

    }
}
</style>