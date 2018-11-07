<template>
    <el-container>

        <!-- <el-header>
            上传数据文件
        </el-header> -->

        <el-main>
            <router-link to="/downloadVideo" style="text-decoration: none; color: white;">
                <el-tooltip class="item" effect="dark" content="下载指定短链接的抖音视频" placement="right">
                    <el-button type="primary" icon="el-icon-download
">视频下载</el-button>
                </el-tooltip>
            </router-link>
        </el-main>

    </el-container>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
        };
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>