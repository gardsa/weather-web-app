# weather-web-app

## Notes

_Please do not supply your name or email address in this document. We're doing our best to remain unbiased._

### Date

_The date you're submitting this._

26th June 2024

### Location of deployed application

_If applicable, please provide the url where we can find and interact with your running application._

The application can be viewed at: https://gardsa.github.io/weather-web-app/

### Time spent

_How much time did you spend on the assignment? Normally, this is expressed in hours._

- 30min on project setup and planning
- 2hr on component development and styling
- 30min on tests
- 30min on deployment and write up
- Total: 3.5hr

### Assumptions made

_Use this section to tell us about any assumptions that you made when creating your solution._

My plan was as follows:

- find 5 day weather forecast design online
- 3 hourly increment (temp, feels like, high, low, current conditions - use icon URL below)
  - https://openweathermap.org/img/wn/${iconId}@2x.png
- use create-react-app + typescript to build
- use axios to retrieve data from API
- select styling library to best support responsive and accessibility considerations
  - mantine + CSS modules(most proficient in currently)
  - tailwind
  - material ui
  - styled components (thinkific appears to use already)
- write unit tests using react testing library

I ended up creating two views that the user can toggle between: a 3 hourly forecast, and a 5 day forecast (as the API provides the data split up in 3 hourly increments over 5 days). I assumed that the most important information for the user would be the temperature, and what kind of weather they could expect on that day (as indicated by the icon image). I would have liked to provide a "chance of rain" percentage value, but the API response did not support that, so I instead decided to show the humidity percentage in it's place.

I implemented both views (3 hourly and 5 days), as a weather app user myself, I value knowing the weather for the next day or so, as well as later on in the week, so that I can plan accordingly.

As the task indicated the app should be both responsive, I designed it mobile-first, and then tweaked the design at tablet/desktop screen sizes to better fit. To handle the accessibility directive, I used Mantine components where applicable (as I know this library supports accessibility). I also ensured that the Temperature component worked well for users who might be using assistive technologies, such as a screen-reader, by implementing an aria-label

### Shortcuts/Compromises made

_If applicable. Did you do something that you feel could have been done better in a real-world application? Please let us know._

I used create-react-app (CRA) instead of Next.js as I felt a solely React app would be more appropriate to handle the client-side fetching of the OpenWeather data. I have used Next.js in my professional work for the last couple of years, so was not aware CRA had been "deprecated" (see following links)

- https://help.mantine.dev/q/can-i-use-mantine-with-cra
- https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741

Had I seen this before I had committed to the CRA environment, I would have used Next.js as I am much more proficient in this framework. To get Mantine to work correctly with CRA, I had to "eject", allowing me to customize the build and configuration choices. However, this complicated the tests I was trying to get working (as mentioned below).

### Stretch goals attempted

_If applicable, use this area to tell us what stretch goals you attempted. What went well? What do you wish you could have done better? If you didn't attempt any of the stretch goals, feel free to let us know why._

**Add tests**

I used CRA and then ejected from it to support the component/theming library I wished to use. As CRA is now deprecated, I believe the eject process installed outdated versions of npm packages, meaning the jest setup was not up-to-date. I struggled to get any tests to run, and even when I did eventually get them to run, I was getting errors regarding the use of ESM vs CJS. I believe this was due to mismatched versions of the different testing tools I used (react-testing-library and jest). In retrospect, I would not have used CRA and the eject process, as I felt I lost control of the app configuration, and it became too complex to manage within the timeframe of this task.

**Use TypeScript**

I set up the project with TypeScript from the beginning, using the CRA documentation to add the correct packages and configuration. I built all my components using TypeScript, and used types to define my component properties and enums where applicable for set values. I found an [npm package](https://www.npmjs.com/package/openweathermap-ts) for OpenWeather that provided some types I was going to use for the API response. However, it seems the package was not up-to-date with the response returned from the API provided in the task document, so I copied the types from one of the package files and amended the types to fit the correct response.

### Instructions to run assignment locally

_If applicable, please provide us with the necessary instructions to run your solution._

Install the dependencies:

- run `yarn`

Run the app in development mode:

- run `yarn start`

View the app in the browser:

- visit [http://localhost:3000](http://localhost:3000)

Run the tests:

- run `yarn test` (**Note:** tests currently not working)

### What did you not include in your solution that you want us to know about?

_Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it._

I was disappointed not to get the tests working, as I feel I lost time on trying to fix the test configuration, rather than actually writing tests for all the components.

### Other information about your submission that you feel it's important that we know if applicable.

N/A

### Your feedback on this technical challenge

_Have feedback for how we could make this assignment better? Please let us know._

I think keeping this task very open to interpretation leaves room for the developer to make assumptions and choices, and then explain why they made those decisions. I have no suggestions on how to make the task better.
