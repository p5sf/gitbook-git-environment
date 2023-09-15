# Maven

## 下载安装

官网下载：https://archive.apache.org/dist/maven/maven-3/

```shell
wget http://mirrors.cnnic.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.6.3-bin.tar.gz

# 解压安装
tar -zxvf apache-maven-3.6.3-bin.tar.gz -C /usr/local
```

## 配置环境

修改配置环境变量

```shell
vi /etc/profile 

export MAVEN_HOME=/usr/local/apache-maven-3.6.3
export PATH=$PATH:$MAVEN_HOME/bin
```

刷新生效

```shell
source /etc/profile

# 验证是否成功
mvn -v
```



![Snipaste_2022-05-01_15-14-25](https://java-note-pic.oss-cn-beijing.aliyuncs.com/java/202205011514647.png)



## 配置仓库

配置Maven本地仓库

```shell
# 进入安装路径并添加仓库保存地址
cd /usr/local/apache-maven-3.6.3

mkdir -p .m2/repository
```

修改配置文件：`vi conf/setting.xml`

```xml
# 添加本地仓库路径
<localRepository>/usr/local/apache-maven-3.5.4/.m2/repository</localRepository>

# 添加阿里云镜像仓库
<mirros>
	<mirror>
      	<id>alimaven</id>
      	<name>aliyun maven</name>
      	<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      	<mirrorOf>central</mirrorOf>
	</mirror>
</mirrors>
```

## 创建脚本

创建 install_maven.sh 脚本

```sh
#!/bin/bash
# 定义要安装的 Maven 版本
MAVEN_VERSION="3.6.3"

# 定义安装目录
INSTALL_DIR="/opt"
cd ${INSTALL_DIR}

# 下载并解压 Maven
wget "https://downloads.apache.org/maven/maven-3/${MAVEN_VERSION}/binaries/apache-maven-${MAVEN_VERSION}-bin.tar.gz"
tar -vf apache-maven-${MAVEN_VERSION}-bin.tar.gz

# 移动 Maven 到安装目录
mv apache-maven-${MAVEN_VERSION} maven

# 配置环境变量
echo "export PATH=${INSTALL_DIR}/maven/bin:$PATH" | tee /etc/profile.d/maven.sh
source /etc/profile.d/maven.sh

# 验证安装
mvn --version
echo "clear temp"

rm -rf apache-maven-${MAVEN_VERSION}-bin.tar.gz
```

执行脚本

```shell
chmod +x install_maven.sh
./install_maven.sh
```

