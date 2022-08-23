export default (state={},action) =>{
    switch(action.type){
        case "+":
            return {
                ...state,
                num: state.num+action.payload.value
            }
        case '-':
            return{
                ...state,
                num: state.num-action.payload.value
            }
        default:
            return state;
    }
}