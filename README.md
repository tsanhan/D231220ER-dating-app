152. Introduction:
    1. implement paging (pagination), sorting and filtering in the client and the api
    2. deferred execution (doing it later) using IQueryable
    3. using .net core Action Filters (on every received action in the api, we can do something)
    4. adding a TimeAgo pipe to the client
    5. implement caching in the client for paginated resources
    * http://localhost:5001/api/users?pageNumber=1&pageSize=5
    IQueryable<User> => var query _context.Users.Where(x => x.Gender == gender)
                                                .OrderBy(x => x.UserName)
                                                .Take(5)// pagination: take pageSize
                                                .Skip(0)// pagination: skip (pageNumber-1)
                                                .AsQueryable()
    .ToList()
    .ToListAsync()
    .ToArrayAsync()
    .ToDictionary() 
    .Count()
    1. get the total number of relevant items
    2. get the items based on 1. and the pagination parameters
153. Adding a paged list class
154. Adding helper classes for pagination
155. Using the pagination classes
156. Setting up client pagination
157. Using the angular bootstrap pagination component
158. Adding filtering to the API
159. Adding additional filters
160. Cleaning up the member service
161. Adding filter buttons to the client
