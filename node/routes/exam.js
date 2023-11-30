var express = require('express');
var router = express.Router();
var db = require('../db');
const moment = require('moment');

// 获取题库
router.get('/', function (req, res, next) {
    db.query('SELECT * FROM questions', function (err, result) {
        if (err) {
            console.log(err);
            return res.send({
                code: 400,
                msg: err.msg
            })
        }
        // 处理题库数据
        const processedResult = result.map(question => {
            const answerOptions = question.anwser.split('-').map(option => option.trim());
            return {
                id: question.id,
                content: question.content,
                anwser: answerOptions
            };
        });
        res.send({
            code: 200,
            msg: processedResult,
        })
    })
});

// 成绩对比
router.post('/grade', function (req, res, next) {
    const data = req.body;

    db.query('SELECT * FROM questions', function (err, result) {
        if (err) {
            console.log(err);
            return res.send({
                code: 400,
                msg: err.msg
            });
        }

        const questions = result; // 数据库中的问题数据
        let grade = 0;

        for (let i = 0; i < data.length; i++) {
            const questionId = data[i].id; // 前端发送的问题ID
            const answer = data[i].anwser; // 前端发送的答案索引

            // 在数据库中查找对应的问题
            const question = questions.find(q => q.id === questionId);
            console.log(question.is_correct);

            if (question && question.is_correct === answer) {
                grade += 5;
            }
        }

        res.send({
            code: 200,
            msg: grade,
        });
    });
});

module.exports = router;