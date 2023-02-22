# kokkoro-plugin-kfc

> 肯德基疯狂星期四段子

## 安装

```shell
# 切换至 bot 目录
cd bot

# 安装 npm 包
npm i kokkoro-plugin-kfc
```

有关键字 `v50` 就会自动发送段子

## 环境变量

你可以在项目根目录下创建 `.env` 文件，修改 `KFC_DATE` 变量来自定义自动发送的时间，默认 `0 0 12 * * 4`（每周四中午十二点）

```ini
# KFC 时间
KFC_DATE=0 0 12 * * 4
```

因为插件的定时任务是在初始化时创建的，所以如果你修改了 `KFC_DATE` 变量，需要使用 `reload` 指令将其重新挂载才能生效。

## 鸣谢

https://github.com/whitescent/KFC-Crazy-Thursday
