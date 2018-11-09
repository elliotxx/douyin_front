<template>
    <el-container style="text-align: center;">

        <el-header>
            该网站提供抖音的web端辅助功能，帮助抖音用户更方便的使用抖音！
        </el-header>

        <el-main>
            <router-link to="/downloadVideo" style="text-decoration: none; color: white; display: block; margin: 15px 0px;">
                <el-tooltip class="item" effect="dark" content="下载指定短链接的抖音视频" placement="right">
                    <el-button type="primary" icon="el-icon-download
">视频下载</el-button>
                </el-tooltip>
            </router-link>

            <router-link to="/downloadVideo" style="text-decoration: none; color: white; display: block; margin: 15px 0px;">
                <el-tooltip class="item" effect="dark" content="下载指定用户收藏的BGM" placement="right">
                    <el-button type="primary" icon="el-icon-download
">BGM下载</el-button>
                </el-tooltip>
            </router-link>

            <router-link to="/downloadVideo" style="text-decoration: none; color: white; display: block; margin: 15px 0px;">
                <el-tooltip class="item" effect="dark" content="下载指定短链接的抖音视频" placement="right">
                    <el-button type="primary" icon="el-icon-download
">视频推荐</el-button>
                </el-tooltip>
            </router-link>

            <router-link to="/downloadVideo" style="text-decoration: none; color: white; display: block; margin: 15px 0px;">
                <el-tooltip class="item" effect="dark" content="下载指定短链接的抖音视频" placement="right">
                    <el-button type="primary" icon="el-icon-download
">视频下载</el-button>
                </el-tooltip>
            </router-link>
        </el-main>

        <el-footer style="position: absolute; bottom:0px; width: 250px; left:50%; margin-left:-125px;">
            备案号：鲁ICP备17002520号
        </el-footer>

    </el-container>
</template>

<script>
export default {
    name: "home",
    data() {
        return {};
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>