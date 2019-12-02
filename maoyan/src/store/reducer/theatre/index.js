import stateInit from "../../state/theatre";
export default (state=stateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_CINEMAS"){
        state.offset=payload.offset;
        state.limit=payload.limit;
        state.cinemas=[
            ...state.cinemas,
            ...payload.cinemas
        ]
    }
    return state;
}