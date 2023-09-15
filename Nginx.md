# Nginx 安装

Nginx 安装有两种方式，yum 安装和源码安装，这里使用源码安装



## 单机安装

### 下载解压

```shell
# 安装必要扩展
yum install gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel

# 下载
wget http://nginx.org/download/nginx-1.18.0.tar.gz

# 解压
tar -zxvf nginx-1.18.0.tar.gz -C /usr/local
```

### 配置文件

```shell
# 进入安装目录
cd /usr/local/nginx-1.18.0/

# 设置用户和组安装目录和新增SSL模块
./configure \
--user=nginx \
--group=nginx \
--prefix=/usr/local/nginx-1.18.0 \
--with-http_stub_status_module \
--with-http_ssl_module \
--with-http_realip_module \
--with-http_gzip_static_module
```

### 编译安装

```shell
# 编译 && 安装，默认安装位置 /usr/local/nginx
make
make && install
```

### 服务启动

```shell
# 查看版本
/usr/local/nginx/sbin/nginx -v

# 启动
/usr/local/nginx/sbin/nginx

# 重新载入配置文件
/usr/local/nginx/sbin/nginx -s reload

# 快速关闭 Nginx
/usr/local/nginx/sbin/nginx -s stop

# 启动
systemctl start nginx
```

设置开机启动

```shell
systemctl enable nginx
```

### 环境变量

> 简化命令，将软件启动路径添加到环境变量里

```shell
vi /etc/profile

# 添加Nginx的安装路径
PATH=$PATH:/usr/local/nginx/sbin
export PATH
```

### 开放端口

```shell
# 开启80端口
firewall-cmd --zone=public --add-port=80/tcp --permanent

# 重启端口生效
systemctl restart firewalld
```

### 验证成功

打开浏览器输入地址：http://192.168.32.132

<img src="https://java-note-pic.oss-cn-beijing.aliyuncs.com/java/202205011054354.png"/>

## 搭建高可用

### 安装

```shell
yum -y install keepalived

keepalived -v
```

### 修改配置

https://github.com/del-ent/dev-install-doc/blob/master/Nginx%2BKeepalived.md

```properties
vim /etc/keepalived/keepalived.conf

vrrp_script chk_nginx {
     script "/etc/keepalived/nginx_check.sh"    # 检测nginx状态的脚本路径
     interval 2                 # 检测时间间隔2s
     weight -20                 # 如果脚本的条件成立，权重-20
}

vrrp_instance VI_1 {
      state MASTER              # 服务状态；MASTER（工作状态）BACKUP（备用状态）
      interface eth0              # VIP绑定网卡
      virtual_router_id 51      # 虚拟路由ID，主、备节点必须一致
      mcast_src_ip 192.168.1.191  # 本机IP
      nopreempt                # 优先级高的设置，解决异常回复后再次抢占的问题
      priority 100              # 优先级；取值范围：0~254；MASTER > BACKUP
      advert_int 1              # 组播信息发送间隔，主、备节点必须一致，默认1s
      authentication {          # 验证信息；主、备节点必须一致
          auth_type PASS          # VRRP验证类型，PASS、AH两种
          auth_pass 1111          # VRRP验证密码，在同一个vrrp_instance下，主、从必须使用相同的密码才能正常通信
      }
    track_script {           # 将track_script块加入instance配置块
          chk_nginx         # 执行Nginx监控的服务
      }
      virtual_ipaddress {         # 虚拟IP池，主、备节点必须一致，可以定义多个VIP
          192.168.1.99          # 虚拟IP
      }
}
```

### 启动服务

```
# 开机启动
chkconfig keepalived on

# 启动服务
service keepalived start
```

