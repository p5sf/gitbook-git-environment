# Zookeeper

## 单机安装

> zookeeper 安装需要JDK 环境，所以提前准备 [JDK](Java.md) 环境

### 下载解压

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz

tar -zxvf zookeeper-3.4.14.tar.gz -C /usr/local
```



### 修改配置







### 开放端口





### 启动服务

```sh
# 启动 zookeeper
sh /usr/local/zookeeper/zookeeper-3.3.6/bin/zkServer.sh start

#停止 zookeeper
sh /usr/local/zookeeper/zookeeper-3.3.6/bin/zkServer.sh stop

# 查看zookeeper 状态
sh /usr/local/zookeeper/zookeeper-3.3.6/bin/zkServer.sh status
```

 每次敲入命令太过麻烦，可以修改配置环境变量简化命令：vim /etc/profile

```shell
export ZOOKEEPER_HOME=/usr/local/zookeeper/zookeeper-3.3.6
export PATH=$ZOOKEEPER_HOME/bin:$PATH
export PATH
```

刷新配置文件

```shell
source /etc/profile
```

启动服务

```shell
zkServer.sh start

zkServer.sh stop

zkServer.sh restart
```



## 搭建集群

> 在单机性能不足的情况下，增加多台服务器依次增强服务，本教程默认三个节点

https://github.com/pengcgithub/java-development-environment/blob/master/zookeeper/zookeeper%E9%9B%86%E7%BE%A4.md