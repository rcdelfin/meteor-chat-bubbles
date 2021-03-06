This package is based on packages [kristerv:chat-bubbles](https://atmospherejs.com/kristerv/chat-bubbles).

The package is compatible with Meteor 1.3.1.

[DEMO](http://chat-bubbles.meteor.com)

ChatBubbles is a [Meteor.js](http://meteor.com) chat app that enables you to talk to your potential customers. Basically you can have a **chat bubble for the guests** on the front page:

![client chat](https://raw.githubusercontent.com/KristerV/meteor-chat-bubbles/master/readme/client.gif)

and an **admin view** with client status shown and notifications.

![Admin view](https://raw.githubusercontent.com/KristerV/meteor-chat-bubbles/master/readme/admin.png)

## Installing

    meteor add rcdelfin:chat-bubbles

## Using

1. For the client either use `{{> chatBubbles}}` or `this.render('chatBubbles')` anywhere.
2. The admin view is at route `/chatBubbles`.
3. Give a user admin rights with `Roles.addUsersToRoles(userId, ['admin'])`
4. Add [custom configurations](#custom-config)

### Admin view

The admin view is shared by all admins and the client you're speaking to can't differenciate between many. This is by design to keep the customer experience simple. Keep this in mind so you don't have more than one person talking at any one time.

### Archive old

There is a button in the admin view at the bottom of the page that cleans up old chats.

![archive](https://raw.githubusercontent.com/KristerV/meteor-chat-bubbles/master/readme/archive.png)

What this button does:

1. Deletes any completely empty messages  
2. Archives any old messages.
3. These actions **affect offline user chats only.**

**Archived messages** can't be found anywhere at the moment. If you need to see them, go straight to the databse and search with `db.chatBubbles.find({archieved: true}).pretty()`.

**How old is old** be determined with [ChatBubbles.hoursOld](#custom-config)

## Custom config

Here are all the non-CSS customization options

    ChatBubblesDefaults = {
    	image: "",
    	hoursOld: 2,
    	appName: ""
    }

- **image**: the image that you want to display next to the client chat. At the moment only one is supported.
- **hoursOld**: When pressing the "Archive old" button, how many hours is old?
- **appName**: Displayed on top of the notifications.

## Styling

To **modify elements** just override the CSS.

To **remove all styling** from the chat use

    {{> chatBubbles style="unstyled"}}

or

    this.render('chatBubbles', {data: {style: "unstyled"}});

## ToDo

- Tests
- Statistics (what starting words have more success, how many guests want to chat, how many give their email)
- yogiben:admin integration
