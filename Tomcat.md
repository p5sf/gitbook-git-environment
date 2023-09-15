# Tomcat 安装

## 下载解压

```shell
wegt https://dlcdn.apache.org/tomcat/tomcat-10/v10.0.22/bin/apache-tomcat-10.0.22.tar.gz
tar -zxvf apache-tomcat-10.0.21.tar.gz -C /usr/local
```

## 启动服务

```
cd /usr/local/apache-tomcat-8.5.27/
 ./bin/startup.sh 
```

<img src="https://java-note-pic.oss-cn-beijing.aliyuncs.com/java/202205011512136.png"/>



## 开启端口

```shell
# 开启8080端口
firewall-cmd --zone=public --add-port=8080/tcp --permanent

# 重启端口生效
systemctl restart firewalld
```

## 验证成功

<img src="https://java-note-pic.oss-cn-beijing.aliyuncs.com/java/202205011511834.png"/>

