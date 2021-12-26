8. Getting to know the API project files
9. Creating our first Entity
10. Introduction to Entity Framework
    what is EF?

    - an object relational mapper is used to translate our code to SQL commands
    - it's good because ADO.net was problematic (open/close connections, manual operations ("strings") => error prone)
    - so microsoft introduces EF

    now we have | we'll add now | well have later
    ^           |   // EF //    | Id    UserName
    AppUser     |   DbContext   |  1    Bob
                (acts as bridge)   2    Tom

    DbContext allows us to write Linq Queries:

    DbContext.Users.Add(new User{Id = 4, Name="John"}) => sqlite provider => INSERT INTO Users (Id, Name) VALUES (4, "John")

    - EF work with DB Providers
    - for Dev we'll use Sql Lite (no need to install, using a file)
    - not for production, great for dev (portable, just adds a file to project)
    - later we'll change this

    so our provider is responsible for the translation

    summery. EF Features:
    1. Querying
    2. Change Tracking (in our entities to be submitted to db)
    3. Saving (CRUD), DBContext will provide the SaveChanges (well see that)
    4. Concurrency (preventing overriding changes made by another user)
    5. Transactions (Transaction managment (like rollback))
    6. Caching (first level - returned objects caching - same query => data from cache)
    7. Built-in conventions (conventions to help build schema (like the Id prop name))
    8. Configurations (to override conventions)
    9. Migrations (the ability to create schema  - generate db on command)

    - this is all called 'code first' and it's better because it's more convenient for developers





 
11. Adding Entity Framework to our project
12. Adding a DbContext class
13. Creating the Connection string.
14. Creating the DB using EF Code first migrations
15. Adding a new API Controller
16. Making our code Asynchronous
17. Saving our code into Source control

18. Section 1 Summary
1. used doentet cli to create app, solution file gitignore file 
2. implemented basic API functionality, controller and endpoints
3. installed entity framework, get data
4. project structure
5. configuration of the variables of our app
6. source control

next up:
- setting our angular app to get the data from there
