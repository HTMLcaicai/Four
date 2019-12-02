export const upCinemas=payload=>(
    {
        type:"UP_CINEMAS",
        payload
    }
)
export default {
    getCinemaList(offset=0,cityId=1){
        return (dispatch)=>{
            this.$axios.get("/y/ajax/cinemaList",{
                params:{
                    offset,
                    limit:20,
                    cityId
                }
            }).then(({data})=>{
                const {cinemas}=data;
                const {offset,limit}=data.paging;
                dispatch(upCinemas({offset,limit,cinemas}))
            })
        }
    }
}