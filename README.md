# IMDB Sample

## Notes

- I decided to use Typescript in this project because I feel like I'm the most productive with it at this point. Matter of fact - there were decisions I walked backed on and I was glad typescript was here to make refactoring a little bit easier.
- Added Prettier for formating and ESlint for linting (with some exceptions). Airbnb is my usual guiding light with these tools.
- I skipped a lot of runtime validation checks and relied heavily on typescript compile time validation and type gaurding for better or worst.
- I'm not super familiar with GraphQL but I gave it a shot. I was able to query, filter, sort and mutate data.
- Site was built mobile-first and is responsive with SCSS. It should look pretty decent on mobile devices.
- There are unit and snapshot tests with react-testing-library and jest.
- Some typography elements and spacing were estimated but I tried my best to get it as close to the Abstract preview as possible - a SketchApp file would of been nice too.
- I wish I could of shown off more Context and Reducer related things. However the app was simple enough that prop drilling was sufficient.
- Decent lighthouse scores with all things considered.
- I feel like I can do more to the app definitely. However I think I've accomplished enough to start and facilitate conversation going forward.
## Required Functions

- ✅ The first section contains the top 5 movies of the data set, according to rating. Document how you determined this order. Hovering over a movie in this section reveals a button that when clicked, navigates to a detailed view of the movie. This view should be on a separate route and should match the provided designs.

- ✅ The second section allows the end user to filter by genre. Clicking a filter should navigate to a new page showing the category and associated films as shown in the designs. This page is also sortable (see next step).

- ✅ The third section shows all movies with an option for the user to sort by an order of their choice. Clicking on a movie in this section links to the same detail view page as in the initial step.

## Optional Functions

- Add a search bar that allows searching on 2 or more fields of the movie object. Search can be implemented client or server-side. Include a test for your search/filter function and document your decision.
  - Would of love to do this. I would try to this on the server-side with GraphQL as I would think this would be the most performant. I will probably pick this up later just so that I can learn!
    - I got hung up on querying partial matches and returning data.
    - I was definitely able to filter but only on whole matches.
    - I think I would of tried to write a custom resolver if possible here to handle this.
  - How I would do it on the client side (but I don't think I would recommend it.)
    - Create a controlled search bar and create state to hold the query value
    - Get unpaginated list of movies (not happy about this) once the query is greater than zero
    - Loop through list and do a string comparison on the title and genre
    - If the movie object doesn't match, then apply CSS to hide the poster (I have found this is quicker than rerendering the list)
    - Apply styles to the matched string query to highlight it.
- Add client or server-side pagination. Document your decision.
    - I would probably do this on the server side too
    - It looks like the movie result set returns a paginated set
    - I would simply query the movie meta data and get the total count, divide by N of per page results, get my pages and highlight the current one
- ✅ Lazy load the images of the movie item component so they only appear once the component is visible.
- Add at least one chart or graph representing anything you feel is helpful to the end user.
    - In the detail view, I would use chart.js and create a scatter plot of different user selected metrics like popularity, vote count, vote average against other movies in movie's genre 
- Add functionality where clicking on an image preview in the first section expands the image in a modal or light box.
    - Instead, I thought it would be the better experience if the user clicked on the image and it just directed them to the movie detail page. I think this functionality would be suited better in the detail view.
- ✅ (kinda) Use the provided tracking functions (currently located in App.js) to track when the page initially loads and has completely finished rendering. Each function should be called a maximum of 1 time per page load.
  - It's not exactly what you asked for however I did include React's native Profiler to get timing metrics. I found this task hard to do with functional components and without proper lifecycle events.
- ✅ Add the ability to add comments to the details view page of the movie. Users should be able to view and create comments (bonus points if you add in updating and deleting as well). There is a one-to-many association between movies and comments. Follow the json-server \* documentation for querying and creating associations.
- Add any custom feature you think would benefit the end user. Document your decision making process.
  - Small microanimations here and there
  - CTA on the homepage to see more movies


## Total Time Spent
~ 25-30 hours (Finding time was the hardest part 😅 )

## Setup and installation

This application is built with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and uses a [json-server](https://github.com/typicode/json-server) built around [the movie database](https://www.themoviedb.org/).

To get started, ensure you have the correct dependencies installed and run the following commands:

1. `yarn install`
2. `yarn start`
