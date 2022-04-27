const { Op, Sequelize } = require("sequelize");
const db = require("../db");
const Message = require("./message");

// A conversation stores the IDs of all the users participating in it.

const Conversation = db.define("conversation", {
  userIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
});

// You would never use the below function in the new group chat paradigm.
// But you also don't need a findConversationByUser function anyways since you can search by ID.
// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id]
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id]
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
