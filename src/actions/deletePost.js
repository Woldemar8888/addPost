const deletePostAction =( id )=>{
    return {
        type: 'DELETE_POST',
        payload: id
    }
}

export default deletePostAction;