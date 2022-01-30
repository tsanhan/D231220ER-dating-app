Section 8 Extending the API:
1. Entity Framework Relationships
2. Entity Framework Conventions (using conventions to let EF figure out the relationships) 
3. Seeding Data into the Database (the lazy approach)
4. the repository pattern (abstracting our work away from the dbcontext)
5. Using AutoMapper utility to map our models to our DTOs

84. Introduction
85. Extending the user entity
86. Adding a DateTime extension to calculate age
87. Entity Framework relationships
88. Generating seed data
89. Seeding data part one
90. Seeding data part two
91. The repository pattern
 why? 
    1. encapsulation of the logic
    2. DRY: reduces duplicate query logic
    3. it helps with testing
    4. we can change the ORM
92. Creating a repository
93. Updating the users controller
96. Using AutoMapper
97. Configuring AutoMapper
98. Using AutoMapper queryable extensions
99. Section 8 summary
    1. EF Relationship: understand the one to many relationship
    2. EF Conventions: fully define relationship (photo being added it added to a user)
    3. Seeding Data into the Database: the lazy way
    4. The Repository Pattern: a bit more architecture (some will argue that's not necessary, but when it comes to testing it's a good idea)
    5. Using AutoMapper:
        * configure AutoMapper and using the queryable extensions to use projection from our repository into our DTOs, 
        * so we don't handle the mapping in the controller, but in the repository
        * as it's one of it's jobs too, to get the data from the DB and return it in a presentable format TO the controller

