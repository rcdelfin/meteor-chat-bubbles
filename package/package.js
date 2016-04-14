Package.describe({
  name: 'rcdelfin:chat-bubbles',
  version: '0.4.6',
  summary: 'Chat with your potential customer for Meteor 1.3.1',
  git: 'https://github.com/rcdelfin/meteor-chat-bubbles',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.3.1')
  api.use('ecmascript')
  api.use(["templating", "mquandalle:jade@0.4.3", "less"], "client");
  api.use('iron:router@1.0.5')
  api.use('artwells:accounts-guest@0.1.5')
  api.use('alanning:roles@1.2.13')
  api.use('mizzao:user-status@0.6.4')
  api.use('momentjs:moment@2.10.3')
  api.addFiles('chat-bubble.js')
  api.addFiles('collections.js')
  api.addFiles('ChatBubblesConfig.js')
  api.addFiles('methods.js', 'server')
  api.addFiles('router.js')
  api.addFiles(['view/chatBubbles.jade', 'view/chatBubbles.less', 'view/chatBubbles.js'], 'client')
  api.export('ChatBubblesCollection')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('ecmascript')
  api.use('rcdelfin:chat-bubbles')
  api.addFiles('chat-bubble-tests.js')
})
