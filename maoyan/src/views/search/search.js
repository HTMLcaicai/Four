import React from "react"
import "../../assets/Search/index.css"
import "../../assets/Search/font/iconfont.css"
// import axios from"axios"
export  default class Search extends React.Component{
    constructor(){
        super()
        this.state={
            movies:[],
            arr:[],
            flag:1
        }
    }
    render(){
        return(
            <div className={"App"}>

              <div className="header1">猫眼电影
                <div className="back"
                onClick={()=>this.props.history.go(-1)}
                >
                    <i className="iconfont icon-xiala1-xiangzuo"></i>
                </div>
              </div>

              <div className="searchMovie">
                    <div className="searchMovie1">
                        <i className="iconfont icon-sousuo"></i>
                        <input type="text" placeholder="搜电影、搜影院" className="search-input"
                        ref="searchMovies"
                        onKeyUp={this.getsearch.bind(this,1)}>
                        </input>
                        
                        <div className="del-wd">
                            {
                               
                          this.state.flag===2? <i className="iconfont icon-delete"
                             ref="delV" onClick={this.delV.bind(this)}
                           ></i>:<></>
                            }
                       
                            
                        </div>
                        
                    </div>

                    <div className="cancel"
                    onClick={this.cancelSearch.bind(this)}
                    >
                        取消
                    </div>
              </div>

              {/* 渲染 */}
           
              <div className="movieList">
           
                    {
                    this.state.flag===2? <h3>电影/电视剧/综艺</h3>: <></>
                    }
                    
                    {
            this.state.arr.map(v=>(
                <div key={v.id}>
                     <div className="list">
                        <div className="movieCell">
                          <img src={v.img.replace("w.h","64.90")}>
                          </img> 

                         <div className="movieInfo">
                             <div className="nameScore">
                                 <p className="nameT">
            <span className="nameOne">{v.nm}</span>
                                 </p>
                                 <span className="score">
                                     <span className="num">
                                      {v.sc}   分
                                     </span>
                                 </span>
                             </div>

                             <div className="dsetion">
                                <div className="ditems">
                                    <p className="dName">
                                    {v.enm}
                                    </p>
                                    <p className="catogary">
                                    爱情,青春
                                    </p>
                                    <p className="release">
                                    {v.rt}
                                    </p>
                                </div>
                                <div className="buy-btn">
                                    购票
                                </div>
                             </div>
                        </div>  
                        </div>
                    </div>
                    
                </div>
            ))
           
               
            }
                   

              </div>

            </div>
        )
    }

   async getsearch(id=1){
       
     
      const {data}= await this.$axios.get("/y/ajax/search" ,{
          params:{
              kw:this.refs.searchMovies.value,
              cityId:id
          }
      })
      const{movies}=data
      if(data.movies){
        var len = movies.list.length
        var arr = []
         for( var i=0 ;i<len;i++){
               arr.push(movies.list[i])
           }
         this.setState({
           movies,
           arr,
           flag:2
         })
      }else{
        this.setState({
            movies:[],
            arr:[],
            flag:1
          })
      }
     
      
    }

     cancelSearch(){
         this.props.history.push("/")
         this.refs.searchMovies.value=""
     }
     delV(){
        this.refs.searchMovies.value=""
        this.setState({
            movies:[],
            arr:[],
            flag:1
        })
     }
    componentDidMount(){
        // this.getsearch()
    }
}