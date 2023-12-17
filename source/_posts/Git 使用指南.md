---
title: Git 使用指南
date: 2022-10-17
updated: 2023-10-16
tags:
  - 工具
---

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目

> 想快速上手请跳转[实例](#实例)章节

> 多用就会上手，一般常用的其实就那么几个

## Git 配置

Git 中存在一些决定 Git 在各个环节的具体工作方式和行为的环境变量，这些变量可以存放在三个不同的地方：

- **/etc/gitconfig** ：对系统中所有用户都适用的配置，使用 `git config --system` 读写该文件
- **~/.gitconfig** ：用户目录下的配置文件，只适用于当前用户，使用 `git config --global` 读写该文件
- 当前项目工作目录中的 **.git/config** ，该文件中的配置仅对当前项目有效，使用 `git config --local` 读写该文件

配置优先级为：当前目录 > 用户配置 > 系统配置

### git config

使用 `git config` 命令可以查看和设置 git 的相关配置信息

- `git config -e | --edit` ：编辑配置文件
- `--local` ：当前配置，未指定配置时默认读写该配置
- `--global` ：用户配置
- `--system` ：系统配置

**查看配置信息**

```bash
# 查看所有环境变量
git config --list

# 查看某个环境变量
git config user.name
```

**用户信息**

```bash
git config [--global] user.name "Camille"
git config [--global] user.email xxxxxxxxx@xx.com
```

> 每次 Git 提交都会使用该信息，优先设置

**文本编辑器**

设置 Git 默认使用的文本编辑器，默认为 Vim 

```bash
git config [--global] core.editor emacs
```

**差异分析工具**

设置 Git 在使用 `git diff` 命令时默认使用的差异分析工具：

```bash
git config [--global] merge.tool vimdiff
```

**添加配置项**

```bash
git config [–-local | –-global | –-system] –-add section.key value
```

`section` , `key` , `value` 三项都不能缺，否则会添加失败

```bash
git config --add site.name hisoten
```

**删除配置项**

```bash
git config [–-local | –-global | –-system] –-unset section.key
```

示例：

```bash
git config --unset site.name
```

## 工作区 & 暂存区 & 版本库

- **工作区（workspace）**：在电脑里能看到的目录
- **暂存区（staging area）**：一般存放在 **.git** 目录下的 index 文件（**.git/index**）中
- **版本库（repository）**：工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库

## 基本操作

> 遇事不决 `git help` 

### 创建仓库

#### git init

**`git init`** 用于创建一个空的 Git 仓库或初始化一个现有的 Git 仓库

Git 的大部分命令都需要在 Git 的仓库中才能运行，因此 **`git init`** 是使用 Git 的第一个命令

```bash
git init [<directory>]
```

- `directory` ：可选参数，指定初始化仓库的本地目录，默认为当前目录

初始化后，指定目录下会出现一个名为 **.git** 的目录，所有 Git 需要的数据和资源都存放在这个目录中

#### git clone

**git clone** 用于将现有 Git 仓库中的项目拷贝到新目录

```bash
git clone <repo> [<directory>]
```

- `repo` ：Git 版本仓库的地址
- `directory` ：可选参数，指定拷贝项目的本地目录，默认为当前目录

> 使用 **git clone** 拷贝的项目不需要再使用 **git init** 进行初始化

`git clone` 支持多种协议，除了 HTTP(s) 以外，还支持 SSH、Git、本地文件协议等

### 提交 & 修改

| 命令         | 说明                                   |
| ------------ | -------------------------------------- |
| `git add`    | 添加文件到暂存区                       |
| `git status` | 查看仓库当前的状态，显示有变更的文件   |
| `git diff`   | 比较文件的不同，即暂存区和工作区的差异 |
| `git commit` | 提交暂存区到本地仓库                   |
| `git reset`  | 回退版本                               |
| `git rm`     | 将文件从暂存区和工作区中删除           |
| `git mv`     | 移动或重命名工作区文件                 |

#### git add

**`git add`** 用于将将修改添加到暂存区

```bash
git add [-u | --update] [<file> | <directory> | .]
```

- `-u` / `--update` ：只更新所有跟踪文件的修改到暂存区，忽略未被跟踪的文件的修改
- `<file>` ：添加一个或多个文件到暂存区，文件之间用空格隔开
- `<directory>` ：添加指定目录到暂存区，包括其子目录
- `git add .` ：添加当前目录下的所有文件到暂存区

默认情况下，`git add` 命令不会添加忽略的文件([**.gitignore**](#.gitignore))，如果在命令行上显式指定了任何忽略的文件，`git add` 命令都将失败，并显示一个忽略文件的列表

使用 `-f` 或 `--force` 参数可以强制添加被忽略的文件：

```bash
git add -f .
```

#### git status

**`git status`** 用于查看工作目录和暂存区的状态，包括当前所处分支，上一次提交之后新增加的修改以及未被跟踪的文件列表

```bash
git status
```

```bash
# 输出结果
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   "\345\256\236\347\224\250\345\267\245\345\205\267/Git \344\275\277\347\224\250\346\214\207\345\215\227.md"

no changes added to commit (use "git add" and/or "git commit -a")
```

使用 **`-s`** 参数可以获得简短的输出结果：

```bash
git status -s
```

```bash
# 输出结果
M "\345\256\236\347\224\250\345\267\245\345\205\267/Git \344\275\277\347\224\250\346\214\207\345\215\227.md
```

> 简短输出结果只显示已跟踪文件的修改

**忽略 untracked 文件**

未被 `tracked` 的文件分为两类：

- 已添加到工作目录，但未执行 `git add` 添加到暂存区的文件
- 各种编译过程中产生的程序文件，如 `.pyc` ， `.obj` ，`.tmp` ， `.exe` 等

后者堆多了会使得 `git status` 输出很多没用的信息，应在 [**.gitignore**](#.gitignore) 文件中将这些文件设为忽略，这样就不会被标记为 untracked 文件

#### git diff

**`git diff`** 用于比较文件的不同，即比较文件在暂存区和工作区的差异

- `git diff` ：查看尚未缓存的改动
- `git diff -cached` ：查看已缓存的改动（暂存区和上一次提交的差异）

> `git status` 显示上次提交更新后的更改或者写入缓存的改动， 而 `git diff` 一行一行地显示这些改动具体是啥

#### git commit

**`git commit`** 用于将暂存区的内容添加到本地仓库中

```bash
git commit [<file> ...] -m [message]
```

- `<file>` ：指定提交到本地仓库的暂存区文件，默认为暂存区的全部文件
- `[message]` ：备注信息

> 如果没有设置 `-m` 选项，Git 会尝试打开一个编辑器以填写提交信息。 如果 Git 在配置中找不到相关信息，默认会打开 vim

使用 `-a` 参数可以自动将已被跟踪文件的修改提交到暂存区再提交到版本库：

```bash
git commit -am "initial commit"
```

> 未被跟踪的文件不受影响

#### git reset

**`git reset`** 用于回退版本，将当前 `HEAD` 复位到指定状态，一般用于撤消之前的一些操作，如：`git add` ， `git commit` 等

```bash
git reset [--mixed | --soft | --hard] [HEAD] [<file> ...]
```

- `--mixed` ：默认参数，重置暂存区的文件与上一次的提交保持一致，工作区文件内容保持不变
- `--soft` ：回退到某个版本
- `--hard` ：撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交
    - 可以根据 `commit_id` 回退版本
- `HEAD` ：指定回退版本
	- `HEAD` 或 `HEAD~0`  ：当前版本
	- `HEAD^` 或 `HEAD~1` ：上一个版本
	- `HEAD^^` 或 `HEAD~2`  ：上上一个版本
	- `HEAD^^^` 或 `HEAD~3`  ：上上上一个版本
	- ...
- `<file>` ：指定要回退版本的文件，默认全部文件

> 使用 `git reset HEAD <file>` 可以取消之前 `git add` 添加，但不希望包含在下一提交快照中的缓存

```bash
git commit -a -m "test"
git reset --soft HEAD^
# 此处省略各种修改
git commit -a -c ORIG_HEAD
```

> 执行 `git reset` 命令时，git 会把老的 `HEAD` 拷贝到文件 **.git/ORIG_HEAD** 中，在命令中可以使用 `ORIG_HEAD` 引用这个提交，即使用上次的提交信息重新提交

#### git rm

**`git rm`** 用于从工作区和缓存区中删除文件

使用  `git rm` 删除文件与手动删除文件的区别：

- 使用 `git rm` 来删除文件，这个删除操作会被 Git 记录
- 手动删除文件，仅仅是删除了物理文件，Git 不会记录这个删除操作

> 如果手动删除已经被提交到缓存区过的文件，运行 `git status` 时就会在 Changes not staged for commit 中提示该文件的删除没有更新到缓存区

将文件从暂存区和工作区中删除：

```bash
git rm <file>
```

如果要删除之前修改过并且添加到暂存区，则必须要用 `-f` 参数，强行从暂存区和工作区中删除修改后的文件：

```bash
git rm -f <file>
```

使用 `--cached` 参数可以仅把文件从暂存区域移除，保留当前工作目录中：

```bash
git rm -cached <file>
```

#### git mv

**`git mv`** 用于移动或重命名一个文件、目录或软连接

```bash
git mv [file] [newfile]
```

如果新文件名已经存在，但还是要重命名，可以使用 `-f` 参数

> 手动移动文件或目录时，运行 `git status` 时会发现，所有被移动的文件被记录为删除原文件，在新地址重新创建该文件

#### git tag

**`git tag`** 用于给项目某一个阶段的代码打标签，通常用来记录版本快照，以及创建 release 版本

> 标签本质上是某个 commit 的指针，但比 commit 号更方便记忆和管理

创建标签：

```bash
git tag <name> [<commit_id>]
```

创建标签时**默认**为当前的 commit 指针 `HEAD` 打标签，也可以通过 `commit_id` 指定需要打标签的 commit 

通过以下命令可以在打标签的同时添加标签信息：

```bash
git tag -a <tag_name> -m "tag_info" [<commit_id>]
```

查看已有标签：

```bash
git tag
```

查看某个标签的具体信息：

```bash
git show <tag_name>
```

标签的具体信息中包含关联的 commit 的 `commit_id` ，可用于回退到指定版本

> **README.md** 中通常会有版本更新记录，可以根据此进行版本回退

删除本地标签：

```bash
git tag -d <tag_name>
```

本地的 tag 信息通常不会自动推送到远程代码块，需要推送 tag 时可以使用以下命令：

```bash
git push origin --tags
```

### 分支操作

#### git branch

**`git branch`** 用于列出，创建或删除分支

查看已有分支：

```bash
git branch [-r | -a] [--list]
```

- `--list` ：列出现有的本地分支（无参数默认选项）
- `-r` ：列出远程分支
- `-a` ：列出所有本地分支和远程分支

创建新分支：

```bash
git branch <branch>
```

修改分支命名：

```bash
git branch -m [<oldbranch>] <newbranch>
```

> 省略旧分支名时修改当前分支命名

删除已有分支：

```bash
git branch -D <branch>
```

> 在删除现有分支之前，请切换到其他分支

#### git merge

**`git merge`** 用于将两个或两个以上的分支合并到一起

将指定分支（可以多个）合并到当前分支中，自动进行新的提交：

```bash
git merge <...branch>
```

#### git checkout

**`git checkout`** 用于切换分支或恢复工作树文件，更新工作树中的文件以匹配索引或指定树中的版本

切换到已有分支：

```bash
git checkout <branch>
```

切换到新分支：

```bash
git checkout -b new_branch
```

> `git checkout` 会重写工作区，比较危险

#### git stash

**`git stash`** 用于将工作目录中已有的更改暂时隐藏起来

在一些特殊的场合，需要隐藏已有的更改才能使得 git 正常工作，如拉取与已有更改有严重冲突的代码、或者在不提交更改的情况下切分支

隐藏当前工作目录下未提交的修改：

```bash
git stash [save]
```

> 调用没有任何参数的 `git stash` 相当于 `git stash save` 

还原被隐藏的修改：

```bash
git stash pop
```

### 远程操作

#### git remote

**`git remote`** 命令用于进行远程仓库的操作

查看所有远程仓库：

```bash
git remote -v
```

显示某个远程仓库的信息：

```bash
git remote show [remote]
```

- `remote` ：远程仓库地址

添加远程仓库：

```bash
git remote add [shortname] [url]
```

- `shortname` ：该远程仓库的别名
- `url` ：该远程仓库的 url

删除远程仓库：

```bash
git remote rm shortname
```

修改远程仓库的别名：

```bash
git remote rename old_name new_name
```

#### git fetch

**`git fetch`** 命令用于从远程仓库拉取代码

```bash
git fetch <远程主机名> <分支名>
```

拉取远程仓库指定分支的代码

拉取代码后，会显示与当前分支代码的差异，可以在确认无误后使用 `git merge` 进行合并

#### git pull

**`git pull`** 命令用于从远程仓库拉取代码并合并本地

> `git pull` 的功能相当于 `git fetch` 和  `git merge` 

```bash
git pull <远程主机名> <远程分支名>:[<本地分支名>]
```

- `<远程仓库别名>` ：要拉取的远程仓库的别名
- `<远程分支名>` ：指定要拉取的远程仓库分支
- `<本地分支名>` ：指定要合并的本地分支版本，省略时合并到当前分支

#### git push

**`git push`** 命令用于从将本地的分支版本上传到远程仓库的指定分支并合并

```bash
git push <远程仓库别名> <本地分支名>[:<远程分支名>]
```

- `<远程仓库别名>` ：要上传到的远程仓库的别名
- `<本地分支名>` ：指定要上传的本地分支版本
- `<远程分支名>` ：指定要上传到的远程仓库分支

```bash
git push origin master:master
```

> 如果推送的远程仓库分支不存在，则会被新建

如果本地分支名与远程分支名相同，则可以只填写本地分支名

```bash
git push origin master
```

如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略

```bash
git push origin
```

**无参数时的推送行为**

如果当前分支与多个主机存在追踪关系，则可以使用 `-u` 参数指定一个默认远程仓库，在不加任何参数使用 `git push` 时将会自动推送至该远程仓库

```bash
git push -u origin master
```

不带任何参数 `git push` 有两种推送方法：

- `simple` ：只推送当前分支，默认为该方法
- `matching` ：推送所有有对应的远程分支的本地分支

通过 git config 可以修改这个设置：

```bash
git config --global push.default simple
```

```bash
git config --global push.default matching
```

**全部推送**

使用 `–all` 参数，可以将本地的所有分支都推送到远程主机：

```bash
git push --all origin
```

**强制推送**

如果远程主机的版本比本地版本更新，推送时 Git 会报错，要求先在本地做 `git pull` 合并差异，然后再推送到远程主机

通常建议合并差异后再推送，但如果一定要推送的话，可以使用 --force 参数强制推送：

```bash
git push --force origin master
```

> 尽量避免使用 `–-force` 

**删除远程仓库的分支**

使用 `--delete` 参数，可以删除远程仓库的指定分支：

```bash
git push origin --delete master 
```

省略本地分支名，也可以删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支：

```bash
git push origin :master
```

## .gitignore

有些文件，比如日志，临时文件，编译的中间文件等实际上并不需要提交到代码库，因此不希望 Git 追踪这些文件，可以通过书写 **.gitignore** 文件来告诉 Git 哪些文件应该被忽略

> **.gitignore** 放在项目的根目录下

---

在 .gitingore 文件中，每一行指定一个忽略规则，Git 检查忽略规则的时候有多个来源，它的优先级如下（由高到低）：

- 从命令行中读取可用的忽略规则
- 当前目录定义的规则
- 父级目录定义的规则，依次递推
- **$GIT_DIR/info/exclude** 文件中定义的规则
- **core.excludesfile** 中定义的全局规则

在 .gitignore 文件中，每一行的忽略规则的语法如下：

```
空格不匹配任意文件，可作为分隔符，可用反斜杠转义
开头的文件标识注释，可以使用反斜杠进行转义
! 开头的模式标识否定，该文件将会再次被包含，如果排除了该文件的父级目录，则使用 ! 也不会再次被包含。可以使用反斜杠进行转义
/ 结束的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件
/ 开始的模式匹配项目跟目录
如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录
** 匹配多级目录，可在开始，中间，结束
? 通用匹配单个字符
* 通用匹配零个或多个字符
[] 通用匹配单个字符列表
```

常用匹配示例：

```
bin/: 忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin: 忽略根目录下的bin文件
/*.c: 忽略 cat.c，不忽略 build/cat.c
debug/*.obj: 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj
**/foo: 忽略/foo, a/foo, a/b/foo等
a/**/b: 忽略a/b, a/x/b, a/x/y/b等
!/bin/run.sh: 不忽略 bin 目录下的 run.sh 文件
*.log: 忽略所有 .log 文件
config.php: 忽略当前路径的 config.php 文件
```

---

❗ **.gitignore** 的设置只能让 Git 忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 **.gitignore** 是无效的，解决的办法是把本地缓存删除，然后再提交：

```bash
git rm -r --cached .

git add .

git commit -m "update .gitignore"
```

通过 `git check-ignore` 指令可以查看一个文件是基于哪一条规则被忽略：

```bash
git check-ignore -v test.md

> .gitignore:7:test.md    test.md
```

这个指令可以用于查找由于 **.gitignore** 规则书写错误而导致一些文件未被无法被添加到 Git 中的问题（虽然可以强制添加，但肯定还是 `git add .` 用起来更爽）

## 实例

> 太长不看，不如来点实用的.jpg

### 全新仓库的首次提交

```bash
git init

git add .

git commit -m "说明"

git branch -M main

git remote add origin https://github.com/………….git

git push -u origin main
```

### 更新代码

```bash
git pull

git status

git add .

git commit -m "说明"

git push
```

> 说明为每次提交必须添加的字段，用于简要概述此次提交的内容

### 删除远程关联

如果 clone 下来一个别人的仓库，在此基础上完成代码，推送到自己的仓库可能遇到 `error: remote origin already exists.` ，解决方法：

```bash
git remote rm origin

git remote add origin https://github.com/………….git

git push origin master
```

### 暂存修改切分支

当前分支有未保存修改时是不能切分支的，如果需要将当前修改保存到其他分支，需要暂存未保存的修改：

```bash
git stash

git checkout [-b] branch

git stash pop
```

### 拉取主分支同步更改

```bash
git checkout master

git pull

git checkout branch

git merge master
```

> 有冲突的话需要本地手动合并

### 在已 fork 项目中同步原始仓库新增的分支

```bash 
git remote add upstream <原始仓库的 git 链接>

git fetch upstream

git checkout -b <想要同步的分支名> upstream/<想要同步的分支名>

git push origin <想要同步的分支名>
```

## 其他

### 连接优化

国内连 Github 很容易炸，如果有魔法的话，可能更改代理端口来优化连接

```bash
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```

> 最后的端口号根据本机的代理端口设置

查看已有代理配置：

```bash
git config --global http.proxy # 查看 git 的 http 代理配置
git config --global https.proxy # 查看 git 的 https 代理配置
git config --global -l # 查看 git 的所有配置
```

清除已有的代理配置：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
