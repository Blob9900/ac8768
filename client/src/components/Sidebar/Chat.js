import React from 'react';
import { Box } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
}));

const Chat = ({ conversation, unreadMessages, setActiveChat }) => {
  const classes = useStyles();
  const { otherUser } = conversation;

  const handleClick = async (conversation) => {
    await setActiveChat(conversation.otherUser.username);
  };

  const countUnreadMessages = (conversation, unreadMessageTable) => {
    let unreadCount = 0;

    //Check that there are unread messages.
    if (unreadMessageTable.length !== 0) {
      //Search unreadMessageTable for the current conversation.
      const extractedEntry = unreadMessageTable.filter(entry => entry.conversationId === conversation.id);
      //Check that an entry was extracted at all.
      if (extractedEntry.length > 0) {
        unreadCount = extractedEntry[0].unreadCount;
      }
    }

    return unreadCount;
  }

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} unreadMessages={countUnreadMessages(conversation, unreadMessages)} />
    </Box>
  );
};

export default Chat;
