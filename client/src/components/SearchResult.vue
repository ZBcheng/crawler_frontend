<template slot="header" style="margin-top: 0;">
    <form class="col s12" method="GET" @submit.prevent="getWords" id="log_form">
        <div id="app">
            <div class="row col 12 z-depth-4">
                <nav class="navbar white border: 1px">
                    <div class="nav-wrapper">
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i
                                class="material-icons">menu</i></a>
                        <div class="input-field">
                            <input type="search" name="key_words" v-model="keywords" id="search_info"
                                v-on:keyup.enter="getWords">
                            <label class="label-icon" for="search_info"><i class="material-icons"
                                    style="color: black">search</i></label>
                        </div>
                    </div>
                    <div class="nav">
                        <ul class="tabs">
                            <li class="tab col s4"><a href="#jianshu" class="active">简书</a>
                            </li>
                            <li class="tab col s4"><a href="#zhihu">知乎</a></li>
                            <li class="tab col s4 disabled"><a href="#bilibili">哔哩哔哩</a></li>
                        </ul>
                    </div>
                </nav>
                <!-- <ul class="sidenav" id="mobile-demo">
        </ul> -->
                <!-- <div id="jianshu" class="col s12">简书</div>
                <div id="zhihu" class="col s12">知乎</div>
                <div id="bilibili" class="col s12">哔哩哔哩</div> -->
            </div>

            <div class="row" style="padding-top: 3%; padding-left: 3%; padding-right: 3%">
                <div class="col s12 m6" style="float: left; padding-right: 1.5%">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6" style="float: right; padding-left: 1.5%">
                    <div class="card">
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i
                                class="material-icons">add</i></a>
                        <div class="card-content">
                            <span class="card-title">{{ this.article_list[0] }}</span>
                            <p>I am a very simple card. I am good a
                                I am convenient because I require little markup to use effectively.</p>

                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style="padding-top: 100px">
                {{ keywords }}
            </h1>
        </div>
    </form>
</template>





<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<script>
    import axios from 'axios'
    export default {
        name: 'SearchResult',
        data() {
            return {
                keywords: '',
                article_list: ''
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
                axios.get(path)
                    .then(function (response) {
                        this.article_list = response
                    })
            }
        }
    }
</script>