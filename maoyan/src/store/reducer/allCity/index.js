import stateInit from "../../state/allCity";
export default (state=stateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_CURRENT_CITY_DATA"){
        // state.allCitysPosition=payload.allCitysPosition
        state.subItems=payload.subItems
        state.subway = payload.subway
        state.brand = payload.brand
        state.service = payload.service
        state.hallType = payload.hallType
    }
    if(type === "UP_CURRENT_CITY_ID"){
        state.subItemsId=payload.subItemsId
    }
    if(type === "UP_STORE_OR_STATION"){
        state.storeAndsationId = payload.storeAndsationId
    }
    if(type === "UP_CURRENT_SUB_ID"){
        state.subways = payload.subways
    }
    return state;
}