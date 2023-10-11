var express = require('express');
var router = express.Router();
var db = require('../db');
const moment = require('moment');

// 提交报名表单
router.post('/submit', function (req, res, next) {
  const form = req.body;
  const sqlStr = `INSERT INTO form SET ?`;
  const nowDate = moment(new Date()).format("YYYY-MM-DD HH:DD:MM");
  const data = { name: form.name, phone: form.phone, gender: form.gender, createDate: nowDate, date: moment(form.date).format("YYYY-MM-DD HH:DD:MM"), type: form.type.join(','), desc: form.desc }
  db.query(sqlStr, data, (err, result) => {
    if (err) {
      return res.send({
        code: 400,
        msg: err.msg
      })
    }
    res.send({
      code: 200,
      msg: "提交成功",
    })
  })
});
// 获取新报名申请
router.get('/new', function (req, res, next) {
  const sqlStr = `select * from form`;
  db.query(sqlStr, (err, result) => {
    if (err) return res.send({
      code: 400,
      msg: err.msg
    })
    res.send({
      code: 200,
      msg: "请求成功",
      data: result
    })
  })
});
// 删除报名申请
router.post('/delete', function (req, res, next) {
  const id = req.query.id;
  const sqlStr = `delete from form where id = ?`;
  db.query(sqlStr, id, (err, result) => {
    if (err) return res.send({
      code: 400,
      msg: err.msg
    })
    res.send({
      code: 200,
      msg: "删除成功",
    })
  })
});
module.exports = router;
