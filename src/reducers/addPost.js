const initialState = {
    text: 'Hurray',
    time: new Date().toLocaleTimeString(),
    posts: [
        {
        text: 'Hurray',
        time: new Date().toLocaleTimeString()
        }       
    ]
}

const addPostReducers =(state=initialState, action)=>{
       switch(action.type){
        case 'ADD_POST': {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(action.payload);   
            return stateCopy;
        }
        case 'EDIT_POST': {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts[action.payload.id].text = action.payload.text;
            return stateCopy;
        }
        case 'DELETE_POST': {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.splice(action.payload.id, 1)
            return stateCopy; 
           }      
        default :
            return state     
    }
}
export default addPostReducers ;