# Notifications with Native JS

This is a sample project demonstrating how to create notifications with the help of the Notifications API.

<a href="https://jolterix20.github.io/js-notifications/" target="_blank">Visit The Webpage</a>

To begin we need to request permission from the browser to allow notifications.
Once the permission is granted, we can create a notification using the Notification constructor.

The main components of a Notification object are:

1. Title
2. Options Object: (Listing only those with full support)
    - Body: Contains extra text to go with the title.
    - Tag: Acts like a unique ID and won't let you create more notifications, instead override the existing one.
    - Icon: Allows the user to use a custon icon for the notification.
    - Data: Any data that you want associated with the notification.
    - Lang: The language to use for the notification.
