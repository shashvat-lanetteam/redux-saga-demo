export default (state={data:{}},action)=>{
    switch (action.type){
        case 'test':
            return {...state,data:action.payload};
        default:
            return {...state};
    }
};