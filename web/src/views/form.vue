<template>
    <div class="ctn">
        <div class="bg">
            <div class="form">
                <el-form :model="form" label-width="120px">
                    <el-form-item required label="姓名">
                        <el-input size="large" clearable v-model.lazy.trim="form.name" />
                    </el-form-item>
                    <el-form-item required label="联系方式(手机号)">
                        <el-input size="large" maxlength="11" clearable v-model.lazy.trim.number="form.phone" />
                    </el-form-item>
                    <el-form-item label="先生/女士">
                        <el-radio-group v-model="form.gender">
                            <el-radio label="男" />
                            <el-radio label="女" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item required label="预计到校时间">
                        <el-date-picker size="large" v-model="form.date" type="date" placeholder="选择一个时间"
                            style="width: 100%" />
                    </el-form-item>
                    <el-form-item required label="驾照类型(多选)">
                        <el-checkbox-group size="large" v-model="form.type">
                            <el-checkbox label="小车" name="type" />
                            <el-checkbox label="货车" name="type" />
                            <el-checkbox label="客车" name="type" />
                            <el-checkbox label="摩托车" name="type" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="留言">
                        <el-input size="large" maxlength="200" clearable v-model.lazy.trim="form.desc"
                            :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import request from '@/request';
import { ElNotification } from 'element-plus'

const form = reactive({
    name: '',
    phone: '',
    date: '',
    gender: '',
    type: [],
    desc: ''
})

const onSubmit = () => {
    if (form.date == '' || form.name == '' || form.phone == '' || form.type.length == 0) {
        ElNotification({
            title: '失败',
            message: "必填项不能为空",
            type: 'error',
        })
        return
    }
    request.post('/form/submit', form).then((res: any) => {

        if (res.code === 200) {
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
}
</script>

<style lang="less" scoped>
.ctn {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .bg {
        background-color: white;
        min-width: 75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
    }

    .form {
        margin: 2rem 0;

        .el-button {
            width: 100%;
        }
    }
}
</style>