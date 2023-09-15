# Node 安装

## 下载解压

官网下载：https://nodejs.org/en/download/releases/

![r9o0v9tiwz.png](https://s2.loli.net/2023/09/15/9FalDwcoLGIk8iH.png)

获取下载地址

```shell
wget https://nodejs.org/dist/v10.9.0/node-v12.20.2-linux-x64.tar.xz 
tar xf node-v12.20.2-linux-x64.tar.xz  -C /usr/local  
```

## 配置环境

```shell
vi ~/.bash_profile
# 导入Node安装路径
export PATH=/usr/local/node-v12.20.2-linux-x64/bin:$PATH
```

![Snipaste_2022-04-30_22-57-21](https://java-note-pic.oss-cn-beijing.aliyuncs.com/java/202204302257885.png)

刷新环境变量

```shell
source ~/.bash_profile
```

## 验证Node

```shell
node -v
npm version
```

## 加速Npm

使用淘宝的cnpm 

```shell
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

