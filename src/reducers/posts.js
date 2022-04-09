export default (posts = [], action) =>{
 switch (action.type) {
    case 'UPDATE':
      // output of map is an array, single post in map if post._id is equal to the action.payload which is the update post then we want to return the action.payload whixh is the updated post otherwise return just the post as it was without any updates
      return posts.map((post) => post._id ===action.payload._id ? action.payload : post);
     case 'FETCH_ALL':
        //our actual posts action.payload from actions
        return action.payload;
     case 'CREATE':
        return [ ...posts, action.payload];
 
     default:
         return posts;
 }

}