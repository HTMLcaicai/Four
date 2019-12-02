export const upCurrentCityData = payload => (
    {
        type: "UP_CURRENT_CITY_DATA",
        payload
    }
)
export const upCurrentCityId = payload =>(
    {
        type:"UP_CURRENT_CITY_ID",
        payload
    }
)
export const upCurrentSubId = payload =>(
    {
        type:"UP_CURRENT_SUB_ID",
        payload

    }
)

export const upStoreOrStation = payload =>(
    {
        type:"UP_STORE_OR_STATION",
        payload
    }
)
export default {
    getCurrentCityData(ci = 1) {
        return (dispatch) => {
            this.$axios.get("/y/ajax/filterCinemas", {
                params: {
                    ci,
                }
            }).then(({data}) => {
                const {subItems} = data.district
                const subway = data.subway.subItems
                const brand = data.brand.subItems
                const service = data.service.subItems
                const hallType = data.hallType.subItems
                console.log(data)
                dispatch(upCurrentCityData({subItems,subway,brand,service,hallType}))
            })
        }

    },
    getAreaId(cityId,e) {
        return (dispatch)=>{
            var array = []
            const subItems =  this.props.subItems
            var length = e.target.parentElement.children.length
            if(e.target.getAttribute("name")==="span"){
                return false
            }
            for(var i=0;i<length;i++){
                e.target.parentElement.children[i].setAttribute("id","emptyForck")
            }
            e.target.setAttribute("id","currentCityForck")
            subItems.forEach((v, index, arr) => {
                if (v.id == cityId) {
                    array.push(v.subItems)
                    const subItemsId = array[0]
                    // console.log(subItemsId)
                    dispatch(upCurrentCityId({subItemsId}))
                }
            })
        }
    },
    storeOrstation(e){
        return (dispatch)=>{
            let storeAndsationId = 0
            if(e.target.innerText!=="商区"){
               storeAndsationId = 1
            }else{
                storeAndsationId = 0
            }
            var length = e.target.parentElement.children.length
            for(var i=0;i<length;i++){
                e.target.parentElement.children[i].setAttribute("id","nostoreAndsationId")
            }
            e.target.setAttribute("id","storeAndsationId")
           dispatch(upStoreOrStation({storeAndsationId}))
        }
    },
    getSubId(subId,e){
        return (dispatch)=>{
            var array = []
            const subway =  this.props.subway
            var length = e.target.parentElement.children.length
            if(e.target.getAttribute("name")==="span"){
                return false
            }
            for(var i=0;i<length;i++){
                e.target.parentElement.children[i].setAttribute("id","emptyForck")
            }
            e.target.setAttribute("id","currentCityForck")
            subway.forEach((v, index, arr) => {
                if (v.id == subId) {
                    array.push(v.subItems)
                    const subways = array[0]
                    // console.log(subItemsId)
                    dispatch(upCurrentSubId({subways}))
                }
            })
        }
    }
}