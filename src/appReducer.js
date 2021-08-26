function appReducer(state = {Products:[]}, action)
{
    switch(action.type)
    {
        case "ADD" :

            let indexForAdd = state.Products.findIndex(x => x.Name === action.payload.Name);
            if(indexForAdd >= 0)
            {
                let arr = state.Products;
                arr[indexForAdd] = action.payload;
                return{...state,Products:arr}
            }
            else
            return {...state,Products:[...state.Products,action.payload]}

        case "REMOVE":
            let arr = state.Products;
            let index = arr.findIndex(x => x.Name === action.payload);
            if(index >= 0)
            {
                console.log(index)
                arr.splice(index,1)
            }
            return {...state,Products:arr}

        default:
            return state;
    }
}
export default appReducer;