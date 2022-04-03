181. Introduction
    * this is another type of many to many relationship.
    * adding to this relationship the ability to box and unbox an unread messages.
    * using query params in angular
    * these messages will be on a different tab on on the details, so we want to be able to use a direct route to go there, we'll use query params to do that.
    * using route resolvers: the ability to get data when a route is activated but before the component is constructed


182. Settging up the entities for messaging
183. Setting up the message repository
184. Setting up the automapper profiles
185. Adding a message controller
186. Getting the messages from the Repo
187. Getting the message thread for 2 users
188. Setting up the Angular app for messaging
189. Designing the inbox
190. Adding the message thread in the client
191. Styling the message thread
192. Activating the message tab
193. Using query params
194. Using route resolvers
195. Sending messages
196. Fixing the messages component
197. Deleting messages on the API
198. Deleting messages on the client (+ understand event propagation)
199. Section 15 summary:
    1. more many to many relationships, what are do you think about how this M2M relationship has implemented?
        * for me messages makes more sense, it;s not just likes, there is content the joint table represents
    2. looking at query params, putting them in the url and reading them from the url
    3. using route resolvers as means to get data before the component constructs (so life's easier without conditionals)

