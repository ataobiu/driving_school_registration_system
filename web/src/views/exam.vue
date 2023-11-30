<!-- 考试页面 -->
<template>
    <div class="ctn">
        <h1>考试类型：<span>{{ route.params.name }}</span></h1>
        <el-row class="exam" :gutter="20">
            <el-col :span="16">
                <el-card class="box-card">
                    <div class="top">
                        <p>{{ currentQuest + 1 }} . {{ exams[currentQuest]?.content }}</p>
                    </div>
                    <div class="center">
                        <p v-for="(item, index) in (exams[currentQuest]?.anwser)" :key="index">{{ anwserOption[index] + '.'
                            +
                            item }}</p>
                    </div>
                    <div class="bottom">
                        <div>
                            <span>您的选择：</span>
                            {{ anwserOption[userAnwser[currentQuest]?.anwser] }}
                        </div>
                        <div>
                            <span>请选择：</span>
                            <el-button :class="userAnwser[currentQuest]?.anwser === index ? 'active' : ''"
                                @click="updateUserSelect(exams[currentQuest]?.id, index)"
                                v-for="(item, index) in (exams[currentQuest]?.anwser)" type="success" plain>
                                {{ anwserOption[index] }}
                            </el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <ul>
                        <li :class="currentQuest === index ? 'active' : ''" @click="currentSelect(index)"
                            v-for="(item, index) in (exams.length)" :key="index">
                            {{ index + 1 }}
                        </li>
                    </ul>
                </el-card>
            </el-col>
        </el-row>
        <div class="btn">
            <el-button type="primary" @click="preQuest">上一题</el-button>
            <el-button type="primary" @click="nextQuest">下一题</el-button>
            <el-button type="danger" @click="centerDialogVisible = true">交卷</el-button>
        </div>
        <el-dialog style="border-radius: 1rem;" v-model="centerDialogVisible" width="20%" align-center>
            <span style="display: flex;justify-content: center;">确认提交答案吗？</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">返回</el-button>
                    <el-button type="primary" @click="submitAnwser">
                        确认
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog style="border-radius: 1rem;" v-model="gradeDialogVisible" width="20%" align-center>
            <span style="display: flex;justify-content: center;">您的成绩为{{ grade }}分</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="gradeDialogVisible = false">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import request from '@/request';
import { ElNotification } from 'element-plus'

const route = useRoute();
const currentQuest = ref<number>(0);
const currentSelect = (index: number) => {
    currentQuest.value = index;
    userSelectAnswer.value = ''
}
const anwserOption: string[] = ['A', 'B', 'C', 'D'];

const exams = ref<{ id: number, content: string, anwser: string[] }[]>([])

// 用户选择的选项
const userSelectAnswer = ref()
// 记录用户答题信息
const userAnwser = ref<{ id: number, anwser: number }[]>([])
const updateUserSelect = (id: number, index: number) => {
    userSelectAnswer.value = index
    const anwser = userAnwser.value.find((item) => item.id === id)
    if (anwser) {
        anwser.anwser = index
    } else {
        userAnwser.value.push({ id, anwser: index })
    }
    localStorage.setItem('userAnwser', JSON.stringify(userAnwser.value))
}
const preQuest = () => {
    if (currentQuest.value === 0) return;
    currentQuest.value -= 1
}
const nextQuest = () => {
    if (currentQuest.value === exams.value.length - 1) return;
    currentQuest.value += 1
}
const centerDialogVisible = ref<boolean>(false)
const gradeDialogVisible = ref<boolean>(false)
const submitAnwser = async () => {
    const result = await getGrade();
    if (result === 1) {
        centerDialogVisible.value = false;
        gradeDialogVisible.value = true;
    } else {
        ElNotification({
            title: '失败',
            message: '请检查网络！',
            type: 'error',
        })
        return
    }
}
const getExams = async () => {
    try {
        const res: any = await request.get('/exam/');
        if (res.code === 200) {
            exams.value = res.msg;
        } else if (res.code === 400) {
            console.log(res.msg);
        }
    } catch (err) {
        console.log(err);
    }
};
const grade = ref<number>()
const getGrade = async () => {
    const data: any = userAnwser.value
    try {
        const res: any = await request.post('/exam/grade', data);
        if (res.code === 200) {
            grade.value = res.msg;
            return 1;
        } else if (res.code === 400) {
            console.log(res.msg);
            return 0;
        }
    } catch (err) {
        console.log(err);
    }
}
onMounted(() => {
    getExams();
    userAnwser.value = JSON.parse(localStorage.getItem('userAnwser') || '[]')

});
</script>

<style lang="less" scoped>
.ctn {
    h1 {
        margin-bottom: 2rem;

        span {
            font-size: 1.5rem;
            font-weight: 300;
        }
    }

    .exam {

        .box-card {
            height: 25rem;
            border-radius: 1rem;

            ul {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                line-height: 2rem;

                li {
                    cursor: pointer;
                    width: 2rem;
                    height: 2rem;
                    border: 1px solid #999;

                    &:hover {
                        background-color: #998;
                    }
                }
            }

            .top {
                height: 4rem;
                text-indent: 2rem;
            }

            .center {
                height: 10rem;
                margin: 2rem;

                p {
                    margin: .5rem;
                }
            }

            .bottom {
                height: 4rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
        }
    }

    .btn {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
    }
}

.active {
    background-color: #999;
}
</style>