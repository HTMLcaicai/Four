import React from 'react';

class TheatreDetail extends React.Component{
    constructor(){
        super();
        this.state={
            cinemaData:{},
            showData:{},
            dealList:[]
        }
    }
    render(){
        return(
            <div>
                详情页
            </div>
        )
    }
    getTheatreDetail(id){

        this.$axios.get("/ajax/cinemaDetail?cinemaId="+id).then((data)=>{
            console.log(data)
            // const {cinemaData,showData,dealList}=data;
            // console.log(cinemaData,showData,dealList)
        })
    }
    componentDidMount(){
        this.getTheatreDetail(this.props.match.params.id/1);
        console.log(1,this.props.match.params.id)
    }
}
export default TheatreDetail