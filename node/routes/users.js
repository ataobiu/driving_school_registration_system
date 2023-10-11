var express = require('express');
var router = express.Router();
var db = require('../db');
const jwt = require('jsonwebtoken')

const secret = "Hash('哈哈')"
// 登录接口
router.post('/login', function (req, res, next) {
    const userinfo = req.body
    const sqlStr = `SELECT * FROM user where name = ?`
    db.query(sqlStr, userinfo.name, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.send({
            code: 400,
            msg: err.message
        })
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1 || userinfo.pwd !== results[0].pwd) return res.send({
            code: 400,
            msg: '用户名或密码错误，请重新输入！'
        })

        const data = { ...results[0], pwd: '' }
        // 生成 Token 字符串
        const token = jwt.sign(data, secret, {
            expiresIn: '10h', // token 有效期为 10 个小时
        })
        res.send({
            code: 200,
            message: '登录成功！',
            data: {
                data: data,
                token: 'Bearer ' + token
            }
        })
    })
});
// 注册接口
router.post('/register', function (req, res, next) {
    const userinfo = req.body

    // 定义sql语句
    const sqlStr = `SELECT * FROM user WHERE name=?`
    // 执行 SQL 语句并根据结果判断用户名是否被占用
    db.query(sqlStr, [userinfo.name], (err, results) => {
        // 执行sql语句失败
        if (err) {
            return res.send({ code: 400, msg: err.message });
        }
        // 判断用户名是否被占用
        if (results.length > 0) {
            return res.send({ code: 400, msg: '用户名被占用，请更换其他用户名！' })
        }
        const sqlStr = `INSERT INTO user SET ?`
        // 要插入的新数据
        const data = { name: userinfo.name, pwd: userinfo.pwd, nickname: userinfo.nickname };
        db.query(sqlStr, data, function (err) {
            // 执行 SQL 语句失败
            if (err) return res.send({
                code: 400,
                msg: err.message
            })
            res.send({
                code: 200,
                message: '注册成功！'
            })
        })
    });
})

module.exports = router;
