const express = require('express');

const QuestionService = require('./services.js');

const {
  validateFields
} = require('../../utils/verify.js');

const router = express.Router();

router.post('/add/MCQ', async (req, res, next) => {
  const {
    testKey,
    body,
    answers,
    correctAnswers
  } = req.body;

  try {

    const answersList = answers.split(';');
    const correctAnswersList = correctAnswers.split(';');


    console.log(answersList + " ---- " + correctAnswersList);

    await QuestionService.addMCQ(testKey, body, answersList, correctAnswersList);

    res.send('Question added');
    res.status(201).end();
  } catch (err) {
    // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js
    next(err);
  }
});


router.post('/get/MCQ', async (req, res, next) => {
  const {
    testKey
  } = req.body;

  try {

    console.log(testKey);
    const data = await QuestionService.getMCQ(testKey);

    res.status(200).json(data);
    res.status(200).end();
  } catch (err) {
    // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js
    next(err);
  }
});



module.exports = router;
