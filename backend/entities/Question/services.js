"use strict";

const {
  MCQuestion
} = require('../../data/connection.js');

const {
    generateToken
} = require('../../security/Jwt/index.js');

const {
    ServerError
} = require('../../utils/error.js');

const {
    hash,
    compare
} = require('../../security/Password/index.js');

const {
  sendEmail
} = require('../../utils/email.js')

const addMCQ = async (testKey, body, answers, correctAnswers) => {
    const question = new MCQuestion({
        testKey,
        body,
        answers,
        correctAnswers
    });
    //console.log("new user to register:",user);
    //console.log(question)
    await question.save();
    //
};

const getMCQ = async (testCode) => {
    console.log(testCode);
    const data = await MCQuestion.find({"testKey":testCode});
    console.log(data);
    if (data === null) {
        throw new ServerError(`No questions with testKey ${testCode} found`, 404);
    }

    return data;

    //throw new ServerError("Combinatia de username si parola nu este buna!", 404);
};
//
//
// const activate = async (confirmationLink) => {
//   const user = await Users.findOne({hashkey:confirmationLink});
//   if (user === null) {
//       throw new ServerError(`Token invalid sau expirat.`, 404);
//   }
//   await Users.updateOne({_id: user._id},{$set:{active:true}},{ upsert: true });
//   console.log("User " + user.name + " confirmed his email");
// }

module.exports = {
    addMCQ,
    getMCQ
}
