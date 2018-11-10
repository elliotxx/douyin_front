<template>
    <el-container>

        <el-header>
            该网站提供抖音的web端辅助功能，帮助抖音用户更方便的使用抖音！
        </el-header>

        <el-main>
            <router-link class="router_block" to="/downloadVideo">
                <el-tooltip effect="dark" content="下载指定短链接的无水印抖音视频" placement="right">
                    <el-button class="home_button" type="primary" icon="el-icon-download">视频下载</el-button>
                </el-tooltip>
            </router-link>

            <router-link class="router_block" to="/userInfo" >
                <el-tooltip effect="dark" content="获取指定抖音用户的信息" placement="right">
                    <el-button class="home_button" type="primary" icon="el-icon-search">用户信息查询</el-button>
                </el-tooltip>
            </router-link>

            <router-link class="router_block" to="/downloadVideo">
                <el-tooltip effect="dark" content="批量下载指定用户的所有作品" placement="right">
                    <el-button class="home_button" type="primary" icon="el-icon-download">用户作品下载</el-button>
                </el-tooltip>
            </router-link>

            <router-link class="router_block" to="/downloadVideo" >
                <el-tooltip effect="dark" content="下载指定用户收藏的BGM" placement="right">
                    <el-button class="home_button" type="primary" icon="el-icon-download">BGM下载</el-button>
                </el-tooltip>
            </router-link>

            <router-link class="router_block" to="/downloadVideo" >
                <el-tooltip effect="dark" content="下载指定短链接的抖音视频" placement="right">
                    <el-button class="home_button" type="primary" icon="el-icon-download">视频推荐</el-button>
                </el-tooltip>
            </router-link>

            <router-link class="router_block" to="/downloadVideo" >
                <el-tooltip effect="dark" content="下载指定短链接的抖音视频" placement="right">
                    <el-button class="home_button" type="primary" icon="el-icon-download">视频下载</el-button>
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
.el-container {
    text-align: center;
}
.el-header {
    padding: 10px;
}
.router_block {
    display: block; 
    margin: 15px auto; 
    width: 180px;
    height: 60px;
}
.home_button {
    width: 100%;
    height: 100%;
    font-size: 17px;
    border-radius: 10px;
}
</style>