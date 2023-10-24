# Knack Coding Challenge - Take Home Exercise

Read the problem statement [here](./PROBLEM_STATEMENT.md)

In this implementation the goal was finding in the schema receive on the JSON file, for the live version, and look inside the Objects array to remove any duplicated Object and inside every Object look for duplicated Fields. The same logic was applied for the Scenes and Views for every live Version.

Was this was not clear in the statement, the rule used to determine if an entry (Object, Field, Scene and View) is a duplicated, is look if they have another entry in the same parent with the same Name or \_id, this can be configured for each entity, at this point I'm looking for those 2 fields for the 4 entities.

To reach the goals of a code that would be easy to maintain and scale, all the functionalities are very isolated with their own responsibility, to make it easier to future changes, even that some implementations looks very similar, they are separated because they can change for different reasons in the future and this was taking in account in the development process.

## Environment

- Node 20 (LTS): 20.8.1
- npm 10.1.0

## How to install

`npm install`

## How to run

- Run locally with: `npm run start:dev`
- Run unit tests with: `npm run test`

## Code Quality Implementations

- Unit tests coverage treshold of at least 90%
- Use of ESLint for static code analysis
- Git hooks to run lint on every commit and unit tests on every push to the repository

## Considerations and TODO items to improve

> All of these considerations can be easily solved by jusk asking the owner of the User Story, but I make some decisions to don't be blocked in the exercise

- As I said in the introduction of this README, it was not clear for me the criteria to determine if some entry is a duplication, like if some identifier properties can't be equal or if it's only duplciated if all object is the same, so I used as the rule if the name or \_id are equal, but it's easy to change this in the code.

- I didn't had time to make a complete mapping of the types of the schema object, just make the implementation of the fields that I was using to solve the deduplication, because in the real world we will already have this model implemented, I choose to not waste time making all this model for have the type of the entire schema.

- I was wondering if the versions array can be a point of duplication as well, in case of having 2 live versions in the same schema, as the problem statement don't tell nothing about it, in this implementation the code will dedup every live version, but it can be probably a root of bugs and a good implementation to check for more than one live version

- Other thing that I think that can be done, but it's not direct asked in the statement, is to keep the version with duplications inside the versions array but not live, and add another version object with status live and with the objects deduplicated, this way we can keep history, but as the statement don't tell anything and keeping as historial of a corrupted version can also cause another bugs, I choose to fix the current live version

- Reading one last time the statement, I saw that even telling about the Scenes and Views, the statement tell us the following: "The purpose of this coding exercise is to create a Node.js application that can programmatically **remove all duplicate fields and objects** from the given mock application schema and output a new sanitized version". It makes think that tha Scenes and Views don't need to be deduplicated, I had implemented because the logic of having two entities with same identifier fields like \_id make me believe that can cause errors in the interface for the user when loading and presenting the contents, so I implemented the deduplication of Scene and Views as well, but to keep just Objects and Fields, we can just edit the entry point index.ts file to keep the same scenes array in the live version on line 23

- I added a TODO as well in the code about reading and writing the JSON file synchronously, I left this for the end and had no time to change the implementation, but I prefer dont make this sync because thinking on large files, because we will block our event loop and possible further executions of the process code, for a simplier code like this exercise it's not a problem, but thinking in scale, this is a point to change and improve
