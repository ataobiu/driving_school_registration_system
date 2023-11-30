<template>
    <div class="container">
        <el-tabs type="border-card">
            <el-tab-pane :label="route.params.name + '科目一（交规）'">
                <div class="active">
                    <ul class="t">
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/g5.webp" alt="">
                                </div>
                                <p>模拟考试</p>
                                <span>模拟在线真实考场</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/g1.webp" alt="">
                                </div>
                                <p>顺序练习</p>
                                <span>按顺序练习做题</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="b">
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/g2.webp" alt="">
                                </div>
                                <p>专项练习</p>
                                <span>分门别类重点突破</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/g3.webp" alt="">
                                </div>
                                <p>章节练习</p>
                                <span>按照法规章节逐步分类</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/g6.webp" alt="">
                                </div>
                                <p>易错题</p>
                                <span>准确把握考试难点</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/g4.webp" alt="">
                                </div>
                                <p>错题本</p>
                                <span>全部错题（<i>0</i>题）</span>
                            </a>
                        </li>
                    </ul>
                    <div class="note">
                        2023<span class="title">{{ route.params.name }}科目一</span>考试
                        考试形式为上机考试，<span class="num">100</span>道题，考试时间<span class="time">45</span>分钟，满分100分，<span
                            class="pass">90</span>分合格。
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane :label="route.params.name + '小车科目四（安全文明驾驶）'">
                <div class="active">
                    <ul class="t">
                        <li style="background-color: #34a1ff;">
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/b5.webp" alt="">
                                </div>
                                <p>模拟考试</p>
                                <span>模拟在线真实考场</span>
                            </a>
                        </li>
                        <li style="background-color: #34a1ff;">
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/b1.webp" alt="">
                                </div>
                                <p>顺序练习</p>
                                <span>按顺序练习做题</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="b">
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/b3.webp" alt="">
                                </div>
                                <p>专项练习</p>
                                <span>分门别类重点突破</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/b2.webp" alt="">
                                </div>
                                <p>章节练习</p>
                                <span>按照法规章节逐步分类</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/b6.webp" alt="">
                                </div>
                                <p>易错题</p>
                                <span>准确把握考试难点</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'/practice/exam/' + route.params.name">
                                <div>
                                    <img src="/img/test/b4.webp" alt="">
                                </div>
                                <p>错题本</p>
                                <span>全部错题（<i>0</i>题）</span>
                            </a>
                        </li>
                    </ul>
                    <div class="note">
                        2023<span class="title">{{ route.params.name }}车科目四</span>考试
                        考试形式为上机考试，<span class="num">50</span>道题，考试时间<span class="time">45</span>分钟，满分100分，<span
                            class="pass">90</span>分合格。
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();


</script>

<style lang="less" scoped>
.container {
    height: 60vh;
    overflow: hidden;

    .el-tabs {
        height: 100%;
        border-radius: 1rem;
        overflow: hidden;

    }

    .active {
        margin: 2rem 0;

        .t {
            display: flex;
            justify-content: space-around;

            li {
                width: 49%;
                height: 5rem;
                border: 1px solid #ccc;
                border-radius: 1rem;
                background-color: #3dd3ac;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    div {
                        background-color: white;
                        border-radius: 50%;
                        margin: 0.75rem;

                        img {
                            height: 2.5rem;
                            margin: 0.5rem;
                        }
                    }

                    p {
                        margin-top: 0.5rem;
                        font-size: 1.2rem;
                        color: #fff;
                        font-weight: 600;

                    }

                    span {
                        color: white;
                        margin-top: 1rem;
                        margin-left: 1rem;
                    }
                }
            }
        }

        .b {
            display: flex;
            justify-content: start;
            flex-flow: wrap;

            li {
                width: 17rem;
                border: 1px solid #ccc;
                border-radius: 1rem;
                margin: 1rem 1rem 0;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;


                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        height: 2.5rem;
                        margin: 0.5rem;
                    }

                    p {
                        font-size: 1.2rem;
                        font-weight: 600;

                    }

                    span {
                        margin-left: 1rem;
                    }
                }
            }

        }

        .note {
            margin-top: 1rem;
        }

        ul,
        li {
            list-style: none;
        }
    }
}
</style>