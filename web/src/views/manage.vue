<template>
    <div class="ctn">
        <div class="main">
            <h1>新的报名申请：</h1>
            <el-table stripe :data="tableData" height="35rem" style="width: 100%">
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="phone" label="联系方式" />
                <el-table-column prop="gender" label="性别" />
                <el-table-column prop="createDate" label="报名时间" />
                <el-table-column prop="date" label="预约时间" />
                <el-table-column prop="type" label="驾照类型" />
                <el-table-column prop="desc" label="学员留言" width="180" show-overflow-tooltip />
                <el-table-column fixed="right" label="操作" width="120">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="delRow(scope.$index, scope.row)">
                            <img style="height: 2rem;" src="/del.svg" alt="">
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" align-center>
            <span>确认删除吗？</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">返回</el-button>
                    <el-button type="primary" @click="delHandle">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import request from '@/request';
import { ElNotification } from 'element-plus'

const tableData = ref([{
    name: '',
    phone: '',
    createDate: '',
    date: '',
    gender: '',
    type: [],
    desc: ''
}])

const centerDialogVisible = ref(false)
const selectId = ref()
const selectRow = ref()
const delRow = (index: String, id: Number) => {
    centerDialogVisible.value = true;
    selectRow.value = index;
    selectId.value = id;
}
const delHandle = () => {
    const id = selectId.value.id;
    request.post(`/form/delete?id=${id}`).then((res: any) => {
        if (res.code == 200) {
            ElNotification({
                title: '成功',
                message: res.msg,
                type: 'success',
            })
            tableData.value.splice(selectRow.value, 1)
        }
        centerDialogVisible.value = false;
    }).catch(err => {
        ElNotification({
            title: '失败',
            message: err.msg,
            type: 'error',
        })
    })
}

onMounted(() => {
    request.get('/form/new',).then((res: any) => {
        if (res.code === 200) {
            tableData.value = res.data
            ElNotification({
                title: '成功',
                message: res.msg,
                type: 'success',
            })
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
})
</script>

<style lang="less" scoped>
.ctn {
    background-color: white;
    height: 75vh;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-self: center;

    .main {
        margin: 1rem;
        width: 75rem;
    }
}
</style>