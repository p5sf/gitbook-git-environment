# 入门

- [ ] 脚本安装JDK
- [ ] MySQL 集群和主从
- [ ] Redis 集群和哨兵





初始化配置Linux 环境，安装编程基础软件以及配置，如果不想购买云服务器，可以使用Vmware Workstation 搭建 Linux环境学习测试，并下载Xshell 工具进行远程连接使用

Linux 环境搭建主要有三种方式

1. 直接安装在物理机上. 但是由于 Linux 桌面使用起来非常不友好, 不推荐.
2. 使用虚拟机软件, 将 Linux 搭建在虚拟机上，主要用于测试学习，但比较臃肿不方便
3. 使用云服务器, 可以直接在 腾讯云或华为云等服务器厂商处直接购买一个云服务器，也是开发常见的方式

如果想搭建开发编程环境，需要提前安装如下

- 安装虚拟机 Vmware
- 虚拟机添加centos 镜像
- 进行网络配置
- 安装远程链接 xshell



## 虚拟机

下载虚拟机 [Vmware Workstation](https://www.vmware.com/cn/products/workstation-pro.html)

![1757925-20190907153221098-1695676653.png](https://s2.loli.net/2023/09/15/d8Eglj4IOo6MN93.png)

## 下载镜像

安装Linux环境

虚拟机安装之后，还没安装操作系统，这时需要先下载 Linux的发行版本，其中部分较为主流的 Linux 发行版如下，可以随意挑选一个

- [Debian](https://www.debian.org/releases/stable/installmanual)
- [Ubuntu](https://www.ubuntu.com/download/desktop/install-ubuntu-desktop)
- [Fedora](https://docs.fedoraproject.org/en-US/Fedora/25/html/Installation_Guide/index.html)
- [Arch Linux](https://wiki.archlinux.org/index.php/Installation_guide_(简体中文))
- [Elementary OS](https://elementary.io/zh_CN/docs/installation#installation)
- [Deepin](https://wiki.deepin.org/?title=原生安装)
- [Gentoo Linux](https://www.gentoo.org/get-started/)

镜像下载地址

网易开源镜像站:http://mirrors.163.com/

阿里云官方镜像站:[http://mirrors.aliyun.com](http://mirrors.aliyun.com/)

Linux发行版下载:https://linux.cn/article-4130-1.html

## 网络环境

配置网络环境：修改网卡配置文件

```shell
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

更改配置：注意网关必须处于同一网段

```shell
BOOTPROTO="static"	
ONBOOT="yes"			
IPADDR=192.168.44.180	
DNS1=114.114.114.114		
NETMASK=255.255.255.0  	
GATEWAY=192.168.44.2

//使用静态IP无法自动自动解析域名,需要修改一个resolv.conf文件，加上以下域名服务器解析地址
//或者直接添加DNS1=114.114.114.1 14
vim /etc/resolv.conf
nameserver 114.114.114.114
nameserver 8.8.8.8
```

## 远程链接

安装 [Xshell](https://www.xshell.com/zh/free-for-home-school/)

XShell 是一种流行且简单的网络程序，可以在Windows界面下来访问远端不同系统下的服务器，从而达到远程控制终端的目的

访问Xshell 官网，填写姓名和邮箱即可获取下载地址

![2792711-20220404205912497-1908647810.png](https://s2.loli.net/2023/09/15/ZSLe13VqAsp4xDm.png)



## 安装脚本

Linux 环境一键安装常用的环境配置，不用一个个安装命令，直接运行脚本自动安装环境

将软件包放在 /home/pack 目录下，再运行脚本 sh build.sh

https://github.com/zxc2305/linux

https://github.com/JeramTough/LinuxWebEnv

