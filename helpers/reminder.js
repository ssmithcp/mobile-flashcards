import AsyncStorage from '@react-native-community/async-storage';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

/**
 * This code was adapted from an example from udacity.com
 * Originally, this code was used in the UdaciFitness demo app
 */

const NOTIFICATION_KEY = '@@ssmith-flash-card-notification@@'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Keep studying!',
    body: "You haven't looked at any flash cards today!",
    ios: {
      sound: true,
    },
  }
}

export function setLocalNotification() {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications
                .cancelAllScheduledNotificationsAsync()
                .then(() => {
                  let tomorrow = new Date()
                  tomorrow.setDate(tomorrow.getDate() + 1)
                  tomorrow.setHours(20)
                  tomorrow.setMinutes(0)

                  Notifications.scheduleNotificationAsync({
                    content: createNotification(),
                    trigger: tomorrow,
                  })
                  .then(() => {
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                    console.log('reminder set!')
                  })
                })
            }
          })
      }
    })
}
