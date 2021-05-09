# IMDB Sample

## Notes

- I decied to use Typescript in this project because I feel like I'm the most productive with it at this point. Matter of fact there were decisions I walked backed on and I was glad typescript was here to make refactoring a little bit easier.
- I'm not super familiar with GraphQL but I gave it a shot. I was able to query, filter, sort and mutate data.
- Site was built mobile-first and is responsive with SCSS. It should look pretty decent on mobile devices.
- Unit and Snapshot tests with react-testing-library and jest
- Some typography elements and spacing were estimated but I tried my best to get it as close to the Abstract preview as possible - a SketchApp file would of been nice too.
- I feel like I can do more to the app definitely. However I think I've accomplished enough to start and facilitate conversation going forward.
- 
## Functional Requirements

- ✅ The first section contains the top 5 movies of the data set, according to rating. Document how you determined this order. Hovering over a movie in this section reveals a button that when clicked, navigates to a detailed view of the movie. This view should be on a separate route and should match the provided designs.

- ✅ The second section allows the end user to filter by genre. Clicking a filter should navigate to a new page showing the category and associated films as shown in the designs. This page is also sortable (see next step).

- ✅ The third section shows all movies with an option for the user to sort by an order of their choice. Clicking on a movie in this section links to the same detail view page as in the initial step.

## Optional Requirements

- Add a search bar that allows searching on 2 or more fields of the movie object. Search can be implemented client or server-side. Include a test for your search/filter function and document your decision.
- Add client or server-side pagination. Document your decision.
- ✅ Lazy load the images of the movie item component so they only appear once the component is visible.
- Add at least one chart or graph representing anything you feel is helpful to the end user.
- Add functionality where clicking on an image preview in the first section expands the image in a modal or light box.
- ✅  (kinda) Use the provided tracking functions (currently located in App.js) to track when the page initially loads and has completely finished rendering. Each function should be called a maximum of 1 time per page load.
- ✅  Add the ability to add comments to the details view page of the movie. Users should be able to view and create comments (bonus points if you add in updating and deleting as well). There is a one-to-many association between movies and comments. Follow the json-server \* documentation for querying and creating associations.
- Add any custom feature you think would benefit the end user. Document your decision making process.
