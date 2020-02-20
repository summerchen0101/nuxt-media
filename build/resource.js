require('dotenv').config()
const path = require('path')
const fs = require('fs-extra')
const git = require('simple-git/promise')

const frontendDir = 'web' // 設計端repository的前台資料夾名稱
const submoduleDir = 'resources' // 設計端repository名稱
const assetsDir = 'static' // 設計端repository名稱

const _root = process.cwd()
git()
  .submoduleUpdate()
  .then((res) => {
    fs.remove(path.join(_root, assetsDir))
      .then((res) => {
        fs.copy(path.join(_root, submoduleDir, frontendDir), path.join(_root, assetsDir))
          .then(() => console.log('copy successed!'))
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  })
  .catch((err) => {
    console.log(err)
  })
