<template>
    <el-container>

        <el-header>
            批量下载指定用户的所有作品
        </el-header>

        <el-main v-loading="isloading" :element-loading-text="loading_text">
            <el-input class="searchBar" @keyup.enter.native="onSubmit" v-model="shortID" placeholder="请输入抖音号或昵称（用抖音号搜索更准确呦，昵称默认显示第一个搜索结果）"></el-input>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            
            <el-card v-if="userInfo != ''" style="margin: 0 auto; width:40%;margin-top: 10px;">
                <!-- 头像 -->
                <div slot="header" class="clearfix">
                    <img :src="this.userInfo.avatar_url" alt="">
                </div>
                <!-- 用户信息 -->
                <el-table
                :data="userInfo.infos"
                :show-header="false"
                style="width: 100%">
                <el-table-column
                    prop="text">
                </el-table-column>
                <el-table-column
                    prop="value">
                </el-table-column>
                </el-table>
                <!-- 查看源码按钮 -->
                <el-button type="success" class="button" @click="watchJSON" style="margin-top: 20px;">查看源码</el-button>
            </el-card>
            
            <!-- 源码展示页面 -->
            <el-card v-if="isWatchJSON" style="margin: 0 auto; width:40%;margin-top: 10px;text-align: left;">
                <pre>{{ userJSON }}</pre>
            </el-card>

        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "downloadAllVideos",
    data() {
        return {
            shortID: "",
            userJSON: "",
            userInfo: "",
            isloading: false,
            loading_text: "努力搜索该抖音号中……",
            isWatchJSON: false
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
            console.log(this.isloading);

            // 根据短链接请求 API 获取下载地址
            this.$axios
                .get(
                    this.douyinhost + "/api/v1/downloadallvideos/" + "?shortid=" + this.shortID
                )
                .then(resp => {
                    // 获取用户信息
                    console.log(resp.data);
                    if (!resp.data.success) {
                        this.$message.error("搜索失败：" + resp.data.info);
                        this.isloading = false;
                        return;
                    }

                    // 结束 loading
                    this.isloading = false;

                    // 准备渲染数据
                    var user = resp.data.data.user;
                    this.userJSON = user;
                    this.userInfo = {
                        avatar_url: user.avatar_thumb.url_list[0],
                        infos: [
                            {
                                text: "昵称",
                                value: user.nickname
                            },
                            {
                                text: "UID",
                                value: user.uid
                            },
                            {
                                text: "抖音号",
                                value: user.short_id
                            },
                            {
                                text: "签名",
                                value: user.signature
                            },
                            {
                                text: "性别",
                                value: user.gender == 0 ? "男" : "女"
                            },
                            {
                                text: "出生日期",
                                value: user.birthday
                            },
                            {
                                text: "关注了多少人",
                                value: user.following_count
                            },
                            {
                                text: "多少人关注了TA",
                                value: user.follower_count
                            },
                            {
                                text: "作品数",
                                value: user.aweme_count
                            },
                            {
                                text: "动态数",
                                value: user.follower_count
                            },
                            {
                                text: "喜欢的视频数",
                                value: user.total_favorited
                            },
                            {
                                text: "当前位置",
                                value: user.location
                            },
                            {
                                text: "国家",
                                value: user.country
                            },
                            {
                                text: "省份",
                                value: user.province
                            },
                            {
                                text: "城市",
                                value: user.city
                            },
                            {
                                text: "区域",
                                value: user.district
                            },
                            {
                                text: "语言",
                                value: user.language
                            }
                        ]
                    };
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
        watchJSON() {
            // 是否查看源码
            this.isWatchJSON = !this.isWatchJSON;
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
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}
</style>
