FROM node:10.14.1 as build-stage
MAINTAINER ElliotXX "https://github.com/elliotxx"

# 拷贝当前目录到镜像中
COPY . /root/douyin_front/
WORKDIR /root/douyin_front/

# 安装一些常用工具
RUN apt-get update
RUN apt-get install -y vim wget htop

# 安装语言支持
RUN apt-get install -y locales

# Ensure that we always use UTF-8 and with Canadian English locale
RUN locale-gen en_CA.UTF-8

# print()时在控制台显示中文
ENV PYTHONIOENCODING=utf-8

# support Chinese
ENV LC_ALL=en_CA.UTF-8
ENV LANG=en_CA.UTF-j
ENV LANGUAGE=en_CA.UTF-8

# install dependencies
RUN npm install

# build for production with minification
RUN npm run build

# 生产/上线阶段
FROM nginx:1.14.2 as production-stage
COPY --from=build-stage /root/douyin_front/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
