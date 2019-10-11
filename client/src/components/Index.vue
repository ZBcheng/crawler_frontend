<template style="margin-top: 0;">
    <form class=" col s12" method="GET" @submit.prevent="getWords" id="log_form">
        <div id="app">
            <div class=" row col 12 z-depth-5" style="opacity: 0.8;">
                <nav class="navbar black">
                    <div class="nav-wrapper">
                        <div class="input-field" style="margin-left: 18%; margin-right: 18%">
                            <input type="search" name="key_words" v-model="keywords" id="search_info">
                            <label class="label-icon" for="search_info"><i class="material-icons"
                                    style="color: white">search</i></label>
                        </div>
                    </div>
                    <div class="nav z-depth-5">
                        <ul class="tabs">
                            <li class=" tab col s2" style="margin-left: 18%"><a href="#" class="active"
                                    @click="getBack">首页</a>
                            </li>
                            <li class="tab col s2"><a href="#zhihu">知乎</a></li>
                            <li class="tab col s2 disabled"><a href="#bilibili">哔哩哔哩</a></li>
                        </ul>
                    </div>
                </nav>
                <!-- <ul class="sidenav" id="mobile-demo">
            </ul> -->
                <!-- <div id="jianshu" class="col s12">简书</div>
                    <div id="zhihu" class="col s12">知乎</div>
                    <div id="bilibili" class="col s12">哔哩哔哩</div> -->
            </div>

            <!-- 轮播图 -->
            <div v-if="render_card == 'no'" class="row col 12"
                style="padding-top: 4%; padding-left: 18%; padding-right: 18%;">
                <div class="col s12">
                    <div class="card">
                        <div class="card-image">
                            <img src="/static/images/test_image.png">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 推送文章 -->
            <div v-if="render_card == 'no'" class="row col 12"
                style="padding-top: 0%; padding-left: 18%; padding-right: 18%;">
                <div class="col s8">
                    <div class="row">
                        <div class="col s12">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/static/images/test_image2.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s4" style="float: right">
                    <div class="row">
                        <div class="card-panel z-depth-1">
                            <div class="row valign-wrapper">
                                <div class="col s3">
                                    <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                    <!-- notice the "circle" class -->
                                </div>
                                <div class="col s9">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="collection">
                            <a href="#!" class="collection-item active">推荐作者</a>
                            <a href="#!" class="collection-item">
                                <div class="row valign-wrapper">
                                    <div class="col s3">
                                        <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                        <!-- notice the "circle" class -->
                                    </div>
                                    <div class="col s9">
                                        <span class="black-text">
                                            This is a square image. Add the "circle" class to it to make it appear
                                            circular.
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#!" class="collection-item">
                                <div class="row valign-wrapper">
                                    <div class="col s3">
                                        <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                        <!-- notice the "circle" class -->
                                    </div>
                                    <div class="col s9">
                                        <span class="black-text">
                                            This is a square image. Add the "circle" class to it to make it appear
                                            circular.
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#!" class="collection-item">
                                <div class="row valign-wrapper">
                                    <div class="col s3">
                                        <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                        <!-- notice the "circle" class -->
                                    </div>
                                    <div class="col s9">
                                        <span class="black-text">
                                            This is a square image. Add the "circle" class to it to make it appear
                                            circular.
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 搜索结果 -->
            <div v-if="render_card == 'yes'" class="row col 12"
                style="padding-top: 3%; padding-left: 18%; padding-right: 18%;">
                <div class="col s7">
                    <div v-for="article in this.article_list">
                        <div class="row" slot="">
                            <div class="col s12 m12">
                                <div class="card">
                                    <div class="card-content">
                                        <span class=" card-title">{{ article.title }}</span>
                                        <p>{{ article.content }}</p>
                                    </div>

                                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i
                                            class="material-icons">add</i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右边栏 -->
                <div class="col s4" style="float: right">
                    <!-- 个人信息 -->
                    <div class="row">
                        <div class="card-panel z-depth-1">
                            <div class="row valign-wrapper">
                                <div class="col s3">
                                    <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                    <!-- notice the "circle" class -->
                                </div>
                                <div class="col s9">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 推荐作者 -->
                    <div class="row">
                        <div class="collection">
                            <a href="#!" class="collection-item active">推荐作者</a>
                            <a href="#!" class="collection-item">
                                <div class="row valign-wrapper">
                                    <div class="col s3">
                                        <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                        <!-- notice the "circle" class -->
                                    </div>
                                    <div class="col s9">
                                        <span class="black-text">
                                            This is a square image. Add the "circle" class to it to make it appear
                                            circular.
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#!" class="collection-item">
                                <div class="row valign-wrapper">
                                    <div class="col s3">
                                        <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                        <!-- notice the "circle" class -->
                                    </div>
                                    <div class="col s9">
                                        <span class="black-text">
                                            This is a square image. Add the "circle" class to it to make it appear
                                            circular.
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#!" class="collection-item">
                                <div class="row valign-wrapper">
                                    <div class="col s3">
                                        <img src="/static/images/person.jpg" alt="" class="circle responsive-img">
                                        <!-- notice the "circle" class -->
                                    </div>
                                    <div class="col s9">
                                        <span class="black-text">
                                            This is a square image. Add the "circle" class to it to make it appear
                                            circular.
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>


        </div>
        <!-- <h1 v-if="render_card == 'no'" style="padding-top: 100px">
            {{ keywords }}
        </h1> -->
    </form>
</template>



<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<script>
    import axios from 'axios'

    export default {
        name: 'Index',
        data() {
            return {
                keywords: '',
                article_list: '',
                render_card: 'no'
            };
        },
        mounted: function () {
            window.addEventListener('load', function () {
                M.AutoInit()
            })
        },
        methods: {
            getWords() {
                var path = 'http://127.0.0.1:5000/?key_words=' + String(this.keywords)
                axios.get(path, {
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET",
                        "Access-Control-Allow-Headers": "Content-Type",
                    }
                })
                    .then(response => {
                        window.console.log("hello")
                        this.article_list = eval(response.data)
                        window.console.log(this.article_list)
                        this.render_card = 'yes'
                        // window.console.log(this.article_list[0].title)
                        // window.location.reload()
                        window.console.log(this.render_card)
                    })
                    .catch(response => {
                        return response.data
                    })
            },
            onSubmit() {
                document.getElementById("log_form").submit()
            },
            getBack() {
                this.render_card = 'no'
            }
        }
    }
</script>