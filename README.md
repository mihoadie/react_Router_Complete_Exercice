# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

npm install react-router-dom@5

.env file with the link of the firebase realtime database used to fetch and post data
REACT_APP_API_URL=https://react-router-dom-d0b56-default-rtdb.europe-west1.firebasedatabase.app/

# making routing available with BrowserRouter in INDEX.JS

{BrowserRouter} in index.js

# MANAGING ROUTES AND SWITCH CASE with 'exact' and 'path' props. ALSO MANAGING Redirect with path. All in APP.JS

{Route} (with path and exact props), {Switch} and {Redirect} in App.js

# MANAGING NESTED ROUTES

nested route with again {Route} in src/Pages/QuoteDetails.js with in addition {useParams} to get URL params and also DYNAMIC PATH Mnagement

# MANAGE NAVLINK with activeClassName prop to highlight in the navBar where we are currently navigating through

NavLink with activeClassName prop in the src/components/Layout/MainNavigation.js and Layout.js files to be used as a href links, but with the advantage of not refreshing the page, and NavLink being also an option to highlight the curent link we are navigating through (with activeClassName) -compared to classic Link from react router dom

# MANAGE DYNAMIC LINKS. do not forget that LINK is IDEAL because it is like a href but without refreshing the page!

Link (after importing {link} from 'react-router-dom') with dynamic route in the to={`/quotes/${id}`}is used in QuoteItem.js (src/components/Quotes/QuoteItem.js)

# MANAGE ERROR PAGE IF URL IS NOT CORRECT => just before the final ending SWITCH , as last ROUTES, we ADD A ROUTE WITH PATH='\*'

to manage not convenient path/url, we can go back to our app.js, where all main route are edited with switch
and we can put, after all other routes, just before the closgin switch, a last route with path='\*' meaning that: if no route have been found in the switch case of the above routes, then we can show a notFound Page! => NotFound.js file in /pages/NotFound

# PROGRAMING USER REDIRECTION AFTER ONCLICK FOR EXAMPLE (USEHISTORY AND .PUSH OR .REPLACE)

TO NAVIGATE PROGRAMATICALLY AFER CLICKING ON A BUTTON FOR EXAMPLE
in NewQuote page, we use useHistory ! to prgramatically navigate after an action
useHistory contains various actions, including PUSH (allows to go back with the back button on the browser)
or REPLACE (back option is not possible!)
ex: history = useHistory() after importing {useHistory} from 'react-router-dom'
and then: history.push('/quotes')
watch carefully because a .push will make the component re render! important to notice for potential useEffect or so on!

# MANAGING PROMPTS BEFORE REDIRECTION

TRICK: we can use the onFocus prop from a form in html, to for example manage prompt options of the router
we can for example, in a form, put a onFocus prop associated to a function handlefocus. that handlefocus function could set a state (ex: const [hasFocus, setHasFocus] = useState(false)) TO TRUE (meaning that there is a focus in the form with possible data entered though). and then, we add a prompt from {prompt} from 'react-router-dom'. that prompt component has two props: when and message. when can be linked to our state, saying for example when={hasFocus} message={(location)=>"Are you Sure to leave" + location.pathname}
indeed, message is a prop that automacally recevive a function with locaiton attribute (console.log JSON.stringify(location) helps us knwoing exactly with sub attibute we can use, like pathname).
AND THE FINALITY IS THAT if the user accidentaly click on another link or go back in the page, the prompt will appear (alert) if obviously the hasFocus state is true!

# MANAGING QUERY PARAMS (with useHistory to have access to .push method aand then useLocation to be used into the new URLSearchParams JS function and finally the .get method available from the URLSearchParams returned object). here below step by step

difference between params in our routes, and params query (like sorting in ascending or descending order)
params are mandatory
params query parameter are optional

to do so, we can use, for example a button with onClick={changeSortingHandler}

- where const changeSortingHandler = () =>{ history.push('/quotes?sorts=asc&limit=10')}
- obviously with const history = useHistory() (after importing useHistory from react-router-dom)
- and to read params query, we can use useLocation from react-router-dom with locationDetails = useLocation() and console.log(locationDetails). and after that, we can declare const queryParams = new URLSearchParams(locationDetails.search). And finally declare const resultat = queryParams.get ('sorts') putting between the brackets the name of the param we are looking for, in case we have various params in the URL (ex: const resultatbis = queryParams.get('limit') )

# BONUS: managing sorting elements ascending or descending (ex: src/components/Quotes/QuoteList.js)--> a function sortQuotes that uses the sort Method from JS

# last but not least, we can also make route management much flexible with useRouteMatch hook

to do so, we can declare const match = useRouteMatch() after importing useRouteMatch from 'react-router-dom'. and then, as a nested route in a component, like QuoteDetails.js for example (managing the potential comments based on URL param ID, then write: Route with prop path={`${match.path}/comments`)

and also, in quoteList.js, we could optimize the code of redirecting the istory.push with:
history.push({
pathname: location.pathname,
search: `?sort=${(isSortingAscending ? "desc" : "asc")}`
})
beacause push from useHostory can accept object with pathname and search as keys

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
