#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const getPathInfo = (p) => path.parse(p);

/**
 * @description // 递归读取文件，类似于webpack的require.context()
 * @param {String} directory 文件目录
 * @param {Boolean} useSubdirectories 是否查询子目录，默认false
 * @param {array} extList 查询文件后缀，默认 ['.js']
 */
const autoLoadFile = (
  directory,
  useSubdirectories = false,
  extList = [".js"]
) => {
  const filesList = [];
  // 递归读取文件
  function readFileList(directory, useSubdirectories, extList) {
    const files = fs.readdirSync(directory);
    files.forEach((item) => {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && useSubdirectories) {
        readFileList(path.join(directory, item), useSubdirectories, extList);
      } else {
        const info = getPathInfo(fullPath);
        extList.includes(info.ext) && filesList.push(fullPath);
      }
    });
  }
  readFileList(directory, useSubdirectories, extList);
  // 生成需要的对象
  const res = filesList.map((item) => ({
    path: item,
    data: require(item),
    ...getPathInfo(item),
  }));
  return res;
};

module.exports = autoLoadFile;
