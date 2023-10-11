<!--  -->
<template>
    <div class="container">
        <div class="carousel">
            <el-carousel height="25rem">
                <el-carousel-item v-for="item in imgCarousel" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="main">
            <h1>学车流程</h1>
            <div class="flow">
                <div class="flow_item">
                    <img src="/img/flow/1.webp" alt="">
                    <span>找驾校</span>
                </div>
                <div class="flow_item">
                    <img src="/img/flow/2.webp" alt="">
                    <span>科目一</span>
                </div>
                <div class="flow_item">
                    <img src="/img/flow/3.webp" alt="">
                    <span>科目二</span>
                </div>
                <div class="flow_item">
                    <img src="/img/flow/4.webp" alt="">
                    <span>科目三</span>
                </div>
                <div class="flow_item">
                    <img src="/img/flow/5.webp" alt="">
                    <span>科目四</span>
                </div>
                <div class="flow_item">
                    <img src="/img/flow/6.webp" alt="">
                    <span>拿本</span>
                </div>
            </div>
            <h1>小车理论考试</h1>
            <div class="test">
                <div class="left testCommenClass">
                    <div class="til">科目一交规</div>
                    <ul>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/g1.webp" alt="">
                                </div>
                                <span>顺序练习</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/g2.webp" alt="">
                                </div>
                                <span>章节练习</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/g3.webp" alt="">
                                </div>
                                <span>专项练习</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/g4.webp" alt="">
                                </div>
                                <span>易错题</span>
                            </a>
                        </li>
                    </ul>
                    <div class="foot">
                        <a href="">
                            <img src="/img/test/g5.webp" alt="">
                            <span>模拟考试</span>
                        </a>
                    </div>
                </div>
                <div class="right testCommenClass">
                    <div class="til">科目四安全文明驾驶</div>
                    <ul>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/b1.webp" alt="">
                                </div>
                                <span>顺序练习</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/b2.webp" alt="">
                                </div>
                                <span>章节练习</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/b3.webp" alt="">
                                </div>
                                <span>专项练习</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <img src="/img/test/b4.webp" alt="">
                                </div>
                                <span>易错题</span>
                            </a>
                        </li>
                    </ul>
                    <div class="foot" style="background-color: #34a1ff;">
                        <a href="">
                            <img src="/img/test/b5.webp" alt="">
                            <span>模拟考试</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imgCarousel = ref([
    '/img/carousel1.png',
    '/img/carousel2.png',
    '/img/carousel3.png',
])
</script>

<style lang="less" scoped>
.el-carousel__item {
    background-color: #d3dce6;
    border-radius: 1rem;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 75rem;

    .carousel {
        width: 75rem;
    }

    .main {
        width: 75rem;

        h1 {
            margin: 1rem 0;
            font-size: 2rem;
            margin-top: 2rem;
        }

        .flow {
            background-color: white;
            width: 100%;
            max-width: 75rem;
            height: 12.5rem;
            border-radius: 1rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .flow_item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                margin: 1rem 0;

                img {
                    height: 6rem;
                }
            }

            .flow_item:hover {
                transition: all 1s;
                transform: scale(1.5);
            }

        }

        .test {
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            margin: 1.25rem 0 0 0;

            .testCommenClass {
                background-color: white;
                width: 49%;
                border-radius: 1rem;

                .til {
                    margin: 1.875rem 0 0.3125rem 0;
                    font-size: 1.75rem;
                    font-weight: 600;
                    color: #101D37;
                    line-height: 2.5rem;
                    text-align: center;
                }

                ul {
                    overflow: hidden;
                    box-sizing: border-box;
                    padding: 0 1.875rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-flow: wrap;
                }

                li {
                    list-style: none;
                    float: left;
                    width: 16.125rem;
                    height: 5.625rem;
                    margin: 1.25rem 0 0 0;
                    border-radius: 1.25rem;
                    border: 1px solid #E3E7E9;
                    transition: all linear 0.3s;
                    background-position: -01.25rem !important;
                    box-sizing: border-box;

                    a {
                        font-size: 0.75rem;
                        cursor: pointer;
                        ;

                        div {
                            float: left;
                            width: 3.5rem;
                            height: 3.5rem;
                            margin: 0px 15px 0 30px;
                            border-radius: 50%;
                            background: #E8FFF7;


                        }

                        span {
                            font-size: 1.5rem;
                            font-weight: 500;
                            line-height: 2.5rem;
                        }

                        img {
                            display: block;
                            width: 2.5rem;
                            height: 2.5rem;
                            margin: 0.5rem;
                        }
                    }
                }

                li:nth-child(2n) {
                    margin-left: 10px;
                }

                li a {
                    display: block;
                    padding-top: 17px;
                }

                li:hover {
                    transform: translateY(-6px)
                }

                .foot {
                    position: relative;
                    background-color: #3dd3ac;
                    background-size: contain;
                    width: 33.125rem;
                    height: 5.625rem;
                    margin: 15px auto 0;
                    transition: all ease 0.4s;
                    border-radius: 20px;
                    padding: 0 2rem;


                    a {
                        cursor: pointer;
                        display: flex;
                        align-items: center;

                        img {
                            height: 5rem;
                            margin: 0.5rem;
                        }

                        span {
                            font-size: 1.5rem;
                            font-weight: 500;
                            line-height: 5rem;
                            color: white;
                        }
                    }
                }

                .foot:hover {
                    transform: translateY(-6px)
                }

            }

        }
    }

}
</style>
