# Redis 安装

## 单机安装

### 下载解压

```shell
wget http://download.redis.io/releases/redis-4.0.2.tar.gz

# 下载GCC
yum install gcc-c++

# 解压到指定目录
tar -zxvf redis-4.0.2.tar.gz -C /usr/local

# 安装指定目录
cd /usr/local/redis-4.0.2
make install PREFIX=/usr/local/redis-4.0.2
```

### 修改配置

```properties
vim /etc/redis.conf

# 找到 bind 127.0.0.1，加上你的白名单IP，设置成 0.0.0.0 或者屏蔽都表示默认允许所有IP连接
# bind 127.0.0.1

# 找到 port 6379 这个为redis端口，根据需要修改
port 6379

# 修改以下配置为 yes,以守护进程的方式运行，就是关闭了远程连接窗口，redis依然运行
daemonize yes

# 修改 protected-mode 模式为no
protected-mode no

# 设置密码，默认是注释了的
requirepass password
```

### 服务启动

```shell
#指定配置文件启动(前台启动)
bin/redis-server ./redis.conf

#指定配置文件启动(后台启动)
bin/redis-server& ./redis.conf
```

![349354-20200213181558066-643842427.png](https://s2.loli.net/2023/09/15/mNYFu4bf7DvKWZq.png)



查看Redis 是否进行

```shell
ps -aux | grep redis

# 端口监听查看方式
netstat -lanp | grep 6379
```



### 连接Redis

```shell
# 远程连接
./bin/redis-cli -h 192.168.232.75 -p 6379

# 本地连接
./bin/redis-cli -a root@123

# 关闭Redis
./bin/redis-cli shutdown
```



打开防火墙

```shell
#开启指定端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent

# 重启防火墙
firewall-cmd --reload
```



## 搭建集群





## 哨兵模式

https://gitee.com/cicadasmile/butte-java-note/blob/master/doc/linux/L04%E3%80%81Redis%E5%93%A8%E5%85%B5%E6%A8%A1%E5%BC%8F.md

192.168.72.129 主服务
192.168.72.130 从服务
192.168.72.131 从服务

### 配置服务

配置主服务



配置从服务

配置

```

```





