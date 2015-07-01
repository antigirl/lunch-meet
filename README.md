# Where will we eat [react/flux]
"start": "webpack-dev-server --hot --inline --colors", <br/>
"build": "webpack",

npm start (http://localhost:8080)<br/>
npm run build

#Code Structure
API calls are now made via the actions.
Actions make the API calls, the API then dispatches an event with its status [PENDING/FINISHED]
The Store naturally picks up the registered dispatches [and any payloads] and emits events, components listen re-render with new data
This stays true to the flux architecture and this means that any store can listen to the registered dispatches. The Logic stays within the API and no extra events need to emitted.
More: http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/

#Four Square API
Lists eating places in the vicinity
