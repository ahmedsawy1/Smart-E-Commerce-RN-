
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const fcmToken = await messaging().getToken();
    console.log('fcm Token:', fcmToken);
  }
}

const backgroundMessageHandler = () => {
  // Register background handler
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
};


export {requestUserPermission, backgroundMessageHandler};