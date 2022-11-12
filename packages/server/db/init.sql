-- 用户表

CREATE TABLE IF NOT EXISTS `user_info` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `username` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `nick` varchar(255) DEFAULT NULL,
    `detail_info` longtext DEFAULT NULL,
    `creat_time` varchar(20) DEFAULT NULL,
    `modified_time` varchar(20) DEFAULT NULL,
    `level` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `user_info` set username='admin123',email='admin123@example.com',password='123456';

-- 这里content存储markdown的格式
CREATE TABLE `essay` (
  `essay_id` int(11)  NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT '文章Id' ,
  `sort_id` int(11) DEFAULT NULL COMMENT '所属栏目Id',
  `title` varchar(200) DEFAULT NULL COMMENT '标题',
  `content` longtext COMMENT ' 内容',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `essay_status` varchar(50) DEFAULT NULL COMMENT '文章状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `essay` set essay_id=1,sort_id=1,title='测试',content='<p><b>1、什么是Vue?</b></p><p>vue真的太好用了，是前后段分离必不可少的开发框架之一……</p><p><br></p><p><i><u>2、Vue能干什么？</u></i></p><p>模拟数据</p><p><br></p>';

-- 用户id 文章id（主键）
CREATE TABLE `user_essay` (
  `essay_id` int(11) NOT NULL PRIMARY KEY COMMENT '文章Id',
  `use_id` int(11) NOT NULL
)

-- 文章id 分类

-- 专栏 文章id 


-- 发布文章
 -- 这里content存储html的格式
CREATE TABLE 'published' (
  `essay_id` int(11) NOT NULL PRIMARY KEY COMMENT '文章Id',
  `title` varchar(200) DEFAULT NULL COMMENT '标题',
  `cover` varchar(200) DEFAULT NULL COMMENT '封面',-- 添加封面
  `tag` varchar(200) DEFAULT NULL COMMENT '添加标签' -- 用，分割表示数组
)