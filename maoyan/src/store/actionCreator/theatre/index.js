export const upCinemas=payload=>(
    {
        type:"UP_CINEMAS",
        payload
    }
)
export default {
    getCinemaList(offset=20){
        console.log(1,offset)
        return (dispatch)=>{
            this.$axios.get("/ajax/cinemaList",{
                params:{
                    offset,
                    limit:20
                }
            }).then(({data})=>{
                console.log(data);
                const {cinemas}=data;
                const {offset,limit}=data.paging;
                dispatch(upCinemas({offset,limit,cinemas}))
            })
        }
    }
}