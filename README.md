# Where will we eat [react/flux]
"start": "webpack-dev-server --hot --inline --colors", <br/>
"build": "webpack",

npm start (http://localhost:8080)<br/>
npm run build

#Code Structure
Actions make the API calls, API returns a promise - action waits for a resolve/reject and then dispatches an event with its status [PENDING/FINISHED] <br/>
The Store naturally picks up the registered dispatches [and any payloads] and emits events, components listen re-render with new data
This stays true to the flux architecture and this means that any store can listen to the registered dispatches. The Logic stays within the API and no extra events need to emitted.<br/><br/>
More: http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/

#Four Square API
Lists eating places in the vicinity
