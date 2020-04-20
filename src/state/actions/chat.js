/* eslint-disable import/prefer-default-export */

import * as types from '../types';

import firebase from 'firebase';

const config =
  process.env.NODE_ENV === 'production'
    ? {
        apiKey: 'AIzaSyAxCmkZQ-Q8Mz2rWuig2bq4KxtOL-hdOQs',
        authDomain: 'lambdadooreuflex-production.firebaseapp.com',
        databaseURL: 'https://lambdadooreuflex-production.firebaseio.com',
        projectId: 'lambdadooreuflex-production',
        storageBucket: 'lambdadooreuflex-production.appspot.com',
        messagingSenderId: '153366108245',
        appId: '1:153366108245:web:2785a15f13142177085cdc',
        measurementId: 'G-PYFFRYC2S1',
      }
    : {
        // test environment
        apiKey: 'AIzaSyBlZZO9b4zhxVyiJ8de9HAm3UZDDLwwB3U',
        authDomain: 'lambdadooreuflex-c4b3e.firebaseapp.com',
        databaseURL: 'https://lambdadooreuflex-c4b3e.firebaseio.com',
        projectId: 'lambdadooreuflex-c4b3e',
        storageBucket: 'lambdadooreuflex-c4b3e.appspot.com',
        messagingSenderId: '1071325469722',
        appId: '1:1071325469722:web:59c2d2c5d5a03de8dd05a3',
        measurementId: 'G-ECBBE3VTFN',
      };

firebase.initializeApp(config);

const db = firebase.firestore();

export const openChat = (
  fromUserID,
  fromUserName,
  toUserID,
  toUserName
) => dispatch => {
  Promise.all([
    db
      .collection('chats')
      .where('toUserID', '==', toUserID)
      .where('fromUserID', '==', fromUserID)
      // .limit(1)
      .get(),
    db
      .collection('chats')
      .where('toUserID', '==', fromUserID)
      .where('fromUserID', '==', toUserID)
      // .limit(1)
      .get(),
  ]).then(results => {
    let found = false;
    results.forEach(result => {
      if (result.size) {
        found = true;

        db.collection('chats')
          .doc(result.docs[0].id)
          .update({
            open: true,
          });
        // putInState(result, dispatch);
      }
    });
    if (!found) {
      db.collection('chats')
        .add({
          fromUserName: fromUserName,
          fromUserID: fromUserID,
          toUserID: toUserID,
          toUserName: toUserName,
          open: true,
          createdAt: new Date(),
          read: true,
          userNotified: false,
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    }
  });
};

export const getChats = (fromUserID, toUserID) => (dispatch, getState) => {
  db.collection('chats')
    .where('toUserID', '==', getState().authState.credentials.id)
    .where('open', '==', true)

    .onSnapshot(function(querySnapshot) {
      putInState(querySnapshot, dispatch);
    });

  db.collection('chats')
    .where('fromUserID', '==', getState().authState.credentials.id)
    .where('open', '==', true)

    .onSnapshot(function(querySnapshot) {
      putInState(querySnapshot, dispatch);
    });
};

const putInState = (querySnapshot, dispatch) => {
  const chats = [];
  querySnapshot.forEach(function(doc) {
    doc.ref
      .collection('messages')
      .orderBy('sentAt', 'asc')
      .onSnapshot(function(messageSnapshot) {
        const messages = [];

        messageSnapshot.forEach(message => {
          messages.push(message.data());
        });

        dispatch({
          type: types.SET_CHAT_MESSAGES,
          payload: {
            messages,
            docID: doc.id,
          },
        });
      });
    dispatch({
      type: types.GET_OPEN_CHATS,
      payload: { ...doc.data(), messages: [], docID: doc.id },
    });
  });
};

export const sendMessage = (
  message,
  chatID,
  fromUserID,
  toUserID
) => dispatch => {
  db.collection('chats')
    .doc(chatID)
    .collection('messages')
    .add({
      fromUserID: fromUserID,
      message: message,
      sentAt: new Date(),
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });

  db.collection('chats')
    .doc(chatID)
    .update({
      read: false,
    });
};
export const closeChat = chatID => dispatch => {
  db.collection('chats')
    .doc(chatID)
    .update({
      open: false,
    })
    .then(function() {
      dispatch({
        type: types.CLOSE_CHAT,
        payload: chatID,
      });
      console.log('Document successfully updated!');
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};

export const markAsRead = chatID => dispatch => {
  db.collection('chats')
    .doc(chatID)
    .update({
      read: true,
    });
};
