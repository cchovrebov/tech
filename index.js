'strict'

// Task 2 (5 min)

// Find and print in console the city located at latitude/longtitude 51.5074 and 0.1278 accordingly 

class Provider {
  /** 
    * Gets the weather for a given city 
    */
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`)
  }
  /** 
    * Gets the weather for a given city 
    */
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`)
  };
  /** 
    * Given Longtitude and latitude, this function returns a city 
    */

  static findCity(long, lat) {
    return Promise.resolve(`London`);
  };
};
console.log('================= TASK 2 ======================');
Provider.findCity(0.1278, 51.5074)
  .then(city => {
    // print in console the city
    console.log(city);

    // Print in console the weather for the city located at lat/long = 51.5074 and 0.1278
    Provider.getWeather(city)
      .then(weather => {
        // Print in console the weather
        console.log(weather);

        // Print in console in one line the weather and currency for a given city (London)
        Provider.getLocalCurrency(city)
          .then(currency => console.log(`${weather} ${currency}`));
      });
  });

// ========================================================

// Task 3 (25 min)

// The management ask to use React and NodeJS as base technology for this app (because of skills across the company). In future the company hope to build more functions around this app. You are asked to provide initial technical design for this app which should include the following points:
//     1. Frontend part:
//         1.a. Tools, frameworks, npm libraries you plan to use and why
//         1.b. Directory structure for source code folder
//         1.c. List of components which you’ll implement (with short description)
//         1.d. For one of the components also provide in which directory/-ies component’s file/-es will be located 
//         1.e. Benefits/drawbacks comparing with traditional (not-SPA) app approach
//         1.f. Any other comments and suggestions
//     2. Backend part:
//         2.a. Short description of API – URI, format, why needed
//         2.b. Framework
//         2.c. Any other comments and suggestions

// 1 Front-end part
// 1.a
// NPM libs:
// 1) react (allow to use react),
// 2) react-dom (allow react to work with DOM elements),
// 3) react-router (allow to connect router and display different pages depend on url path),
// 4) react-router-dom (allow use react router as component),
// 5) history (browser history required for react router),
// 6) react-redux (allow to use state management in the app),
// 7) redux-thunk (allow to use async calls in the state management)
// 8) axios (HTTP client)

// 1.b
// root
//   public
//   src
//      - components (reusable components)
//          ProfileListItem.jsx - Possible to split to smaller components (ProfileImg, ProfileTitle, ProfileTitle...)
//      - features (sepatate features connected to reducer)
//          profile-list
//            - ProfilesList.jsx - Feature display list of profiles
//            - profilesListSlice.js - Creates profiles list reducer
//          profile-view
//            - ProfileView.jsx - Feature display one specific profile data
//            - profileViewSlice.js - Creates profile view reducer
//      - store
//            - rootReducer.js - combining all reducers into store
//      - pages
//          ProfilesListPage.jsx - Page displays page of profiles list and other components if exist e.g (navigation, sidebar...)
//          ProfilesViewPage.jsx - Profile view page displays profile info and other components if exist e.g (navigation, sidebar...)
//      App.js - initialize redux store and router
//   .package.json

// 1.d
// Component - ProfileListItem
// Allocation src/components/
// Will be used in ProfilesList.jsx component, schema: App.js -> ProfilesListPage.jsx ->  ProfilesList.jsx -> ProfileListItem.jsx

// 1.e 
// Benefits:
// 1) Fast response to user actions. To execute a user’s request, an SPA loads a small JSON file instead of a new web page. Even with caching and lazy loading, MFAs take more time to get new data from a server than does an SPA. Also, the fact that the page doesn’t need to reload makes workflows that involve multiple screens more streamlined in SPAs than in regular web applications.
// 2) High performance and stability. Asynchronous requests, when done right, can reduce server load and require less bandwidth. The core logic of a single-page application is usually fully downloaded at the first request, making it possible to perform most operations offline, providing a great solution for poor internet connections.
// 3) Fast development. During the development of an SPA, the front end and back end can be separated, so two developers may work in parallel. Also, changing the front end doesn’t affect the back end, and vice versa.
// 4) Desktop-like user experience. An SPA allows you to port on-premises applications to the web without making big changes to the UI or established workflow. This speeds up web development and provides users with a high-quality and familiar experience.
// 5) Mobile-friendly. An SPA back end can be used to create a mobile application identical to the web app. It doesn’t require much adaptation, since an SPA is already designed as an application, not a website. This greatly speeds up mobile development.

//  Drawbacks
// 1) Lack of scalability. In regular web apps, functionality is spread across different pages, and it’s easy to make changes to individual pages. SPA components are designed to fit together in a certain way, and any changes to a widely used component may have a big impact across the application. This is why SPAs need to be created with foresight about future changes, allowing developers to take them into account at the design stage.
// 2) Issues with architectural changes. If you need, for example, to switch the framework of a regular MPA, you can easily do it by changing one page at a time. SPAs don’t allow for such incremental changes. You would need to port the entire application to a new framework at once. That’s why developers have to be extremely careful when working on an SPA’s architecture.
// 3) Poor search engine optimization (SEO). When a web crawler visits an SPA, it only indexes the main page and pays no attention to additional pages. Google is continuously updating its search algorithms to fix this issue, and SEO agencies have some workarounds to improve optimization. Still, SPAs aren’t always aren't always indexed correctly.
// 4) Requires JavaScript. Some users disable JavaScript in their browsers to speed up loading. Since SPAs fully depend on JavaScript frameworks, they can’t load in browsers with JavaScript disabled.
// 5) Routing for in-app navigation. Since web browsers use routing for bookmarking and navigation, your SPA allows the use of routing tools. There are several ways to enable this, such as using a hash in the URL or using the HTML 5 pushState, the latter being preferable. All popular frameworks for SPA development come with their native routing logic that does all the work for you. When developing routing, you also need to account for any cases when components aren’t loaded on time and make sure these scenarios are ironed out.
// 6) Memory leaks. Memory leaks within SPAs can be more severe than within multi-page applications, since the page is never fully reloaded but persists for a long time, which can slow down even fast machines. If an SPA is coded poorly, it can sometimes send even more requests to the server than an MPA.
// 7) Security considerations. With an SPA, clients download the whole application, which provides more opportunities for reverse engineering and finding vulnerabilities. You need to make sure that all single-page app security-related client-side logic (input validation, authentication, etc.) is doubled on the server for verification and that users are granted access only based on their roles regardless of the request.

// 1.a.f
// 1) Would suggest to use eslint or prettier configs to keep the app code style proper
// 2) All components should be well tested, would suggest add test config to track unit test
// coverage

// 2 Back-end part

// 2.a Short description of API – URI, format, why needed

// GET '/profiles' - returns list of profiles
// Return format array of profiles: 
// [{
//    firstName: string,
//    lastName: string,
//    imgUrl: string,
//    email: string,
// }]

// GET '/profiles/:id' - returns specific profile data
// Return format profile object: 
// {
//    firstName: string,
//    lastName: string,
//    imgUrl: string,
//    email: string,
//    ...moreDetails
// }

// 2.b Framework
// Possible to build the app without any frameworks but would suggest to use one of most popular frameworks Sails.js, it is MVC framework but also possible to use as RestAPI, 
// convinient to maintain an configure the app,
// has understandable app structure and beneficial features

// 2.c Any other comments and suggestions
// Would suggest to use eslint or prettier configs to keep the app code style proper
// All controllers and services should be well tested. Would suggest add test config to track unit test coverage

// ========================================================

// Task 4 (20 min)
// The helper function will behave differently based on the states:
//     • state is 'processing'  delay by 2 seconds, then fetch the next state
//     • state is 'error'  return the result object based on the error code provided (see below)
//     • state is 'success'  the function should return the object: { title: 'Order complete' message: null }
// Handling error codes:
//     • 'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }
//     • 'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }
//     • null = return from the helper with an object: { title: 'Error page', message: null }
//     • undefined = return from the helper with an object: { title: 'Error page', message: null }
// Example usage:
//  getProcessingPage([{ state: 'processing' }, { state: 'error' }])

// This code should return after 2 seconds with the object: { title: 'Error page', message: null }
// To-do:
//     • Provide the code and the code demonstrating how to run it

async function processData(data, index) {
  if (!index) {
    index = 0
  }

  switch (data[index].state) {
    case 'processing':
      await processWaiting();
      return processData(data, index + 1);
    case 'error':
      switch (data[index].errorCode) {
        case 'NO_STOCK':
          return { title: 'Error page', message: 'No stock has been found' }
        case 'INCORRECT_DETAILS':
          return { title: 'Error page', message: 'Incorrect details have been entered' }
        default:
          return { title: 'Error page', message: null }
      }
    case 'success':
      return { title: 'Order complete', message: null }

    default:
      return false
  }
}

async function processWaiting() {
  return new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      resolve('processing done.')
    }, 2000)
  })
}

function getProcessingPage(data) {
  return processData(data);
}

getProcessingPage([{ state: 'processing' }, { state: 'error' }]).then(data => {
  console.log('================= TASK 4 ======================');
  console.log(data);
});
// ========================================================

// Task 5 (20 min) 

// ---------------  Code review --------------------------
// Common mistakes
// Move the widget logic to separate component and import it to App.js to ensure reusability
// instead of writing the logic in the main app component

// 1 Line
// React declaration is not required in this case
// Line 5
// 1. Typo "setFeul" must be "setFuel"
// 2. Don't use var declaration, use const instead
// 3. Use null as initial value
// Line 6
// 1. Use const declaration
// Line 09
// 1. Make id path parameter passed to the url dynamic, it should be passed to parameters in the place using this component, and in the component shoul be passed from arguments to ensure reusability e.g. `https://new.world.com/fleet/${id}`.
// Line 12
// 1. "setFeul" must be "setFuel"
// Line 13
// 1. Remove console logs
// Line 18
// 1. Move "else" to the next line, "else if" should be in one line
// Line 19
// 1. Move "else" to the next line, "else if" should be in one line
// 2. Condition logic mistake, the red alert should be shown when the fuel consumed by cars more than 10k, but not greather than 0
// Line 24
// 1. Not required div block, the component can return just h1 tag
// Line 25
// 1. The inside inline condition logic can be formated by moving logic to the new line
// 2. Use '===' instead of '=='
// 3. Use single quotes for color value
// <h1 style={alertText == 'Need to buy more fuel'
//  ? {color:"red"} : {}}>...