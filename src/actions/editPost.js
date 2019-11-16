const editPostAction =( obj )=>{
    return {
        type: 'EDIT_POST',
        payload: obj
    }
}

export default editPostAction;