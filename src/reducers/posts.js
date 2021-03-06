import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
   switch (action.type) {
      case DELETE:
         //keep all post except for the ones that are equal to action.payload
         return posts.filter((post) => post._id !== action.payload)
      //put two cases one below each other and they will both do the same thing so since both update and like are doing similar process the just add both cases removed LIKE later on
      case UPDATE:
         // output of map is an array, single post in map if post._id is equal to the action.payload which is the update post then we want to return the action.payload whixh is the updated post otherwise return just the post as it was without any updates
         return posts.map((post) => post._id === action.payload._id ? action.payload : post);
      case FETCH_ALL:
         //our actual posts action.payload from actions
         return action.payload;
      case CREATE:
         return [...posts, action.payload];

      default:
         return posts;
   }

}