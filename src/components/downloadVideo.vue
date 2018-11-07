<template>
    <el-container>

        <!-- <el-header>
            下载指定短链接的抖音视频
        </el-header> -->

        <el-main>
            <el-input v-model="shortUrlText" placeholder="请输入视频短链接" style="width: 40%;margin-top: 100px;"></el-input>
            <el-button type="primary" @click="onSubmit">解析</el-button>

            <el-card v-if="downloadUrl != ''" style="margin: 0 auto; width:40%;margin-top: 10px;">
                <a :href="downloadUrl" rel="noreferrer">
                    <el-button type="primary" class="button">下载短视频</el-button>
                </a>
            </el-card>

        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "upload",
    data() {
        return {
            shortUrlText: "",
            downloadUrl: "",
            host: "http://localhost:8000"
        };
    },
    mounted() {},
    methods: {
        onSubmit() {
            // 解析视频短链接地址的抖音视频下载地址
            var shortUrlText = this.shortUrlText;
            var d = this.shortUrlText.lastIndexOf("http://");
            d = d === -1 ? this.shortUrlText.lastIndexOf("https://") : d;
            if (d === -1) {
                this.$message.error("请输入正确的短链接文本");
            }
            var shortUrl = this.shortUrlText.substr(d);
            var c = shortUrl.indexOf(" ");
            if (c !== -1) {
                shortUrl = shortUrl.substring(0, c);
            }
            this.$message(shortUrl);

            // 根据短链接请求 API 获取下载地址
            this.$axios
                .get(this.host + "/api/v1/downloadvideo" + "?url=" + shortUrl)
                .then(resp => {
                    console.log(resp.data);
                    this.downloadUrl = resp.data.downloadUrl;
                    console.log(this.downloadUrl);
                })
                .catch(resp => {
                    console.log(
                        "请求失败：" + resp.status + "," + resp.statusText
                    );
                    return resp.data;
                });
        }
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}
</style>