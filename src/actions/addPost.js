
const addPostAction =( post )=>{
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export default addPostAction;