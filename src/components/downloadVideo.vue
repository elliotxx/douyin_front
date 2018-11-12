<template>
    <el-container>

        <el-header>
            下载指定短链接的无水印抖音视频
        </el-header>

        <el-main v-loading="isloading" :element-loading-text="loading_text">
            <el-input class="searchBar" @keyup.enter.native="onSubmit" v-model="shortUrlText" placeholder="请输入视频短链接"></el-input>
            <el-button type="primary" @click="onSubmit">解析</el-button>
            
            <!-- <div id="dplayer" rel="noreferrer"></div> -->
            
            <!-- 展示解析结果 -->
            <el-card v-if="downloadUrl != ''" style="margin: 0 auto; width:40%;margin-top: 10px;">

                <a :href="downloadUrl" rel="noreferrer" target="_blank">
                    <el-button type="primary" class="button" icon="el-icon-download">下载短视频</el-button>
                </a>
                <el-button type="success" class="button" @click="watchLink">查看下载链接</el-button>
                <el-button type="warning" class="button" @click="clean" style="margin:0px">清除</el-button>
            </el-card>

            <!-- 展示下载链接容器 -->
            <el-card v-if="isWatchLink && downloadUrl !=''" style="margin: 0 auto; width:40%;margin-top: 10px;text-align: left;">
                <pre><a :href="downloadUrl">{{ downloadUrl }}</a></pre>
            </el-card>

        </el-main>
    </el-container>
</template>

<script>
// import DPlayer from "dplayer/dist/DPlayer.min.js";
// import "dplayer/dist/DPlayer.min.css";

export default {
    name: "downloadVideo",
    data() {
        return {
            shortUrlText: "",
            downloadUrl: "",
            isloading: false,
            loading_text: "解析短链接文本中……",
            isWatchLink: false
        };
    },
    mounted() {
        // 结束 loading
        this.isloading = false;
    },
    methods: {
        onSubmit() {
            // 开始 loading
            this.isloading = true;
            this.isWatchLink = false;
            this.downloadUrl = "";
            console.log(this.isloading);
            // 解析视频短链接地址的抖音视频下载地址
            var shortUrlText = this.shortUrlText;
            var d = this.shortUrlText.lastIndexOf("http://");
            d = d === -1 ? this.shortUrlText.lastIndexOf("https://") : d;
            if (d === -1) {
                this.$message.error("请输入正确的短链接文本");
                // 结束 loading
                this.isloading = false;
                return;
            }
            var shortUrl = this.shortUrlText.substr(d);
            var c = shortUrl.indexOf(" ");
            if (c !== -1) {
                shortUrl = shortUrl.substring(0, c);
            }
            this.$message("匹配到短链接：" + shortUrl);

            // 根据短链接请求 API 获取下载地址
            this.loading_text = "正在解析短视频地址……";
            this.$axios
                .get(
                    this.douyinhost +
                        "/api/v1/downloadvideo/" +
                        "?url=" +
                        shortUrl
                )
                .then(resp => {
                    // 获取下载链接
                    console.log(resp.data);
                    this.downloadUrl = resp.data.downloadUrl;
                    console.log(this.downloadUrl);

                    // 结束 loading
                    this.isloading = false;

                    // 配置 dplayer
                    // var player = new DPlayer({
                    //     container: document.getElementById("dplayer"), // 对应 div 中的 id
                    //     preload: "none",
                    //     video: {
                    //         // 视频配置
                    //         url: this.downloadUrl // 把 OSS 中上传视频得到链接放到这儿
                    //     }
                    //     // danmaku:{   // 弹幕配置
                    //     //     id:"demo",     //本视频弹幕的唯一标识
                    //     //     api:"https://api.diygod.me/dplayer/"
                    //     // }
                    // });
                    // window.dplayers || (window.dplayers = []);
                    // window.dplayers.push(player);

                    return;
                })
                .catch(resp => {
                    console.log(
                        "请求失败：" + resp.status + "," + resp.statusText
                    );
                    // this.$message.error(
                    //     "请求失败：" + resp.status + "," + resp.statusText
                    // );
                    // 结束 loading
                    this.isloading = false;
                    return;
                });
        },
        clean() {
            // 清除下载链接
            this.downloadUrl = "";
        },
        watchLink() {
            // 是否查看源码
            this.isWatchLink = !this.isWatchLink;
        }
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
    text-align: center;
}
.el-header {
    padding: 10px;
}
.searchBar {
    width: 40%;
}
/* pre 内容自动换行 */
pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: Merriweather, 冬青黑体简体中文, "Microsoft YaHei", 微软雅黑,
        SimSun, 宋体, Heiti, 黑体, droid_sansregular, arial, serif;
    margin: 5px;
}
a:link,
a:visited,
a:hover {
    text-decoration: none;
    word-break: break-all;
}
a:link,
a:visited {
    color: #e6a23c;
}
a:hover {
    background-color: #e6a23c;
    color: white;
}
</style>
