const mongoose = require('mongoose');

(async () => {
  try {

    //await mongoose.connect(`mongodb://${process.env.MHOST}:${process.env.MPORT}/${process.env.MDATABASE}`,
    //console.log("connecting to " + `mongodb://${process.env.MUSER}:${process.env.MPASSWORD}@${process.env.MHOST}:${process.env.MPORT}/${process.env.MDATABASE}`);
    await mongoose.connect(`mongodb://${process.env.MUSER}:${process.env.MPASSWORD}@${process.env.MHOST}:${process.env.MPORT}/${process.env.MDATABASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  } catch (e) {
    console.trace(e);
    console.log(e);
  }
})();

const Users = require('./models/User.js');
const MCQuestion = require('./models/MCQuestion.js');

module.exports = {
  Users,
  MCQuestion
}
