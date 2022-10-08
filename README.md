# Github Search Users 🔍
> PROD [Live] : https://react-github-search-users-prod.netlify.app

#### Github Search Users consists of a straightforward user interface where there is a 
 - **Login** page with a **`Login / Sign up`** button which on click opens a  popup window handled by Auth0.
   - The popup window gives options to log in or signup with email along with social logins i.e. *Google, LinkedIn*
   - After successful login and authentication, the user is taken to a dashboard.
 - **Dashboard** is where we have Navbar, Search form, and the static user profile information has been set by default.
   - **Navbar** will have the info of the user who logged in along with a **`Logout`** button which on click the user gets logged out.
   - **Search** form is used for searching a user profile with the username and will also show how many requests are remaining for the user can query.
   - User profile information consists of information about the user i.e. *user info, followers, and information about repositories in the form of **charts**.*
 - **Loading** GIF has been implemented, the **Error** component handles unknown route URLs and **Auth0** has been used to handle the authentication.
 - To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm start` to start up the development server on default port 3000.
 
#### Languages 
HTML, CSS, JavaScript, ECMAScript, React ~ ContextAPI - Hooks ~ useState, useEffect, useContext, React Router 6

#### API
https://api.github.com/

#### Deployment / Hosting

Netlify

---

## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from "react-icons/fi";
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Github API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)

---

_Note: I have developed this project as part of React and Projects Course taught by John Smilga._
