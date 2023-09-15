# JDK

Linux 安装JDK分为两种：手动安装和 yum 安装，这里默认使用手动安装

### 查看是否安装

> 卸载原生的Java软件环境，如果有请先卸载

```shell
java -version
rpm -aq | grep java

# 卸载开头为Java的安装包
yum -y   remove java-1.7.0-openjdk-1.7.0.141-2.6.10.5.el7.x86_64
yum -y remove java-1.8.0-openjdk-1.8.0.131-11.b12.el7.x86_64
... 省略 ...
```

### 下载上传软件

下载链接：https://www.oracle.com/java/technologies/downloads/

方式一：yum 安装

```java
yum install -y java-1.8.0-openjdk.x86_64
```

![](https://github.com/muxianliangqin/learn-note-of-linux/raw/main/jdk/images/yum%E5%AE%89%E8%A3%85jdk11.png)

这种方式不需要手动配置环境，直接默认配置，但不够灵活

```shell
# 查看JDK版本 
java -version
```

![Linux-jdk.png](https://s2.loli.net/2023/09/15/V3cGQ6L5B2vDNnJ.png)



---



方式二：手动下载 [JDK8 download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

解压配置

```
tar -zxvr jdk-8u161-linux-x64.tar.gz -C /usr/local 
```

### 配置环境变量

编辑 `/etc/profile` ⽂件，在⽂件尾部加⼊JDK 环境配置

```
JAVA_HOME=/usr/local/java/jdk1.8.0_161
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
```

### 加载生效配置

```
source /etc/profile
```

### 查看是否成功

```shell
java -version

# 查看安装位置
which java
```

如果出现以下，则说明配置成功

![Linux-jdk.png](https://s2.loli.net/2023/09/15/V3cGQ6L5B2vDNnJ.png)

## 配置脚本

> 请提前下载JDK软件，并上传到Linux里面，这里默认使用方式二

创建shell 脚本 install.sh

```shell
#! /bin/bash
# sh 文件名 jdk文件路径
filename=$1
if [ -z "$filename" ]; then
        echo '尚未指定jdk路径！'
        exit
elif (test ! -e ${filename})  then
        echo '指定文件不存在，请检查后再试！'
        exit
elif [ ${filename:0-6} == 'tar.gz' ]; then
        echo '文件未解压，请先解压......'
        exit
elif [ ${filename:0:1} != '/' ]; then
        echo '请输入绝对路径'
        exit
else
        echo "export JAVA_HOME=${filename}" >> /etc/profile
        echo "export PATH=\${JAVA_HOME}/bin:$PATH">> /etc/profile
        echo "export CLASSPATH=.:\${JAVA_HOME}/lib/dt.jar:\${JAVA_HOME}/lib/tools.jar">> /etc/profile
        source /etc/profile
        java -version
        echo '环境变量配置成功......'
fi
```

赋予权限

```shell
chmod 755 install.sh

# 生效配置文件
source install.sh
```

查看是否成功

```shell
java -version
```

