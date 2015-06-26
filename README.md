# flux-boilerplate-webpack
"start": "webpack-dev-server --hot --inline --colors", <br/>
"build": "webpack",

npm start (http://localhost:8080)<br/>
npm run build


#Components / View
Add actions via their event handlers,
```
var appActions = require('../actions/appActions');
  addItem: function() {
    appActions.addItem(item);
}
```
  
#Actions
Dispatch a type of action along side the data
```
var appDispatcher = require('../dispatcher/appDispatcher');
  addItem: function(item) {
    appDispatcher.dispatch({
      type: 'add-item',
      item: item
  });
}
```

#Dispatcher
Just an instance of a ronery dispatcher 
```
var Dispatcher = require('flux').Dispatcher;
module.exports = new Dispatcher();
```

#Store
Registers the dispatcher, and picks up any disptached data
```
dispatcherIndex: appDispatcher.register(function (payload) {
  switch(payload.type) {
    case 'add-item':
    addItem(payload.item);
    break;
    }
  }
```   
  Emits change event if data is updated, allows the Components/Views to register event listeners
```  
var appStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }
}
```

#Components/Views (again)
Listen for any event changes and update state accordingly
```
componentWillMount:function(){
  var _this = this;
  appStore.addChangeListener( function() {
    _this.setState(appStore.getItems())
  });
}
```
