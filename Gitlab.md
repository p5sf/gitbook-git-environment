# Gitlab 安装

## Git安装

> 如果想使用Gitlab,，请提前安装Git





## Gitlab安装

gitlab实现项目自动发布的功能

### 安装依赖

```shell
wget http://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-11.6.10-ce.0.el7.x86_64.rpm
chmod 777 gitlab-ce-11.6.10-ce.0.el7.x86_64.rpm
rpm -ivh gitlab-ce-11.6.10-ce.0.el7.x86_64.rpm

# 安装相关依赖
yum -y install policycoreutils-python
```

### 修改配置

修改配置文件：`vi /etc/gitlab/gitlab.rb`

```yaml
external_url 'http://192.168.31.32:8083/gitlab'
unicorn['port'] = 8083
```

### 重启服务

```shell
# 重启配置
gitlab-ctl reconfigure
gitlab-ctl restart
gitlab-ctl status
```

### 开放测试

```shell
systemctl stop firewalld.service
```



浏览器输入IP地址访问：http://192.168.31.32:8083/gitlab

![](https://github.com/cgDeepLearn/LinuxSetups/raw/master/pics/gitlab-changepass.png)

第一次进入后会出现修改密码的页面，其默认用户为 root

> [!danger]
>
> 可能因为内存swap空间不足，导致502错误，解决办法增加swap 空间或者增加虚拟机的内存空间

### 配置密钥

```shell
# 添加用户名和邮箱
$ git config --global user.name "[name]"
$ git config --global user.email "[email address]"

# 生成密钥
ssh-keygen -t rsa -C "your_email@youremail.com"
 cat ~/.ssh/id_rsa.pub
```

Gitlab 添加密钥 点击头像 -> Settings -> SSH keys 添加公钥

### 配置邮箱

配置邮箱发送邮件，修改配置文件：` vim /etc/gitlab/gitlab.rb` 

```
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "你的QQ号@qq.com"
gitlab_rails['smtp_password'] = "QQ邮箱授权码"
gitlab_rails['smtp_domain'] = "smtp.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = "你的QQ号@qq.com"
```

刷新配置文件

```
gitlab-rails console
Notify.test_email('你的QQ号@qq.com', '邮件主题', '邮件内容').deliver_now
```

- 查看邮件 **[SMTP#qq-exmail](https://docs.gitlab.com/omnibus/settings/smtp.html#qq-exmail)**



