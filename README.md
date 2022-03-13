171. Introduction
    add a feature: adding the 'like' functionality:
    1. many to many relationships in EF (implemented using a join table)
        * we'll need to configure this relationship ourselves
        * we'll take a look at Fluent API: https://docs.microsoft.com/en-us/ef/core/modeling/relationships
            * Fluent API is a way to configure the relationships in the model
            * tell Entity Framework that: AppUser [-Has One-] -> SourceUser [-With Many-] -> LikedUser
            * and on the other side:      AppUser [-Has One-] -> LikedUser [-With Many-] -> LikedByUser
            * so this is what we'll be setting up in this section

    2. configure entities in DbContext

172. Adding a likes entity
173. Adding a likes repository
174. Implementing the likes repository

