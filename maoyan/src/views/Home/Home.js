import React from "react"
import Position from "../../components/common/position"
import  "../../assets/position/position.css"
import  "../../assets/common/reset.css"
import  "../../assets/Home/font/iconfont.css"
import  "../../assets/Home/css/index.css"
import "../../assets/router/index.css"
import{
    Link,
    withRouter
} from "react-router-dom"
 class Home extends React.Component{
    constructor(){
        super()
        this.state={
            movieList:[]
        }
    }
    render(){
        return(
            <div className={"App"}>
                <div className={"forPosition"}>
                    <header>
                        <div className="header1">猫眼电影</div>
                        <div className="headerApp">

                            <i className="iconfont icon-maoyan"></i>
                            <div className="appLeft">
                                <p className="logo">猫眼</p>
                                <span>在线选座，热门影讯，爱上看电影</span>
                            </div>
                            <div>
                                <p className="openApp">打开APP</p>
                            </div>
                        </div>
                    </header>
                    <nav className="logoNav">
                        <li className={"clickPosition"} onClick={this.getPosition}>北京</li>
                        <li className="play11"
                        >正在热映
                        </li>
                        <Link to={"/hot"} className="play12"
                        >即将上映 </Link>
                        <li className="playIncont"
                            onClick={(Search)=>this.props.history.push("/search")}
                        >
                            <i className="iconfont icon-sousuo1"></i>
                        </li>
                    </nav>
                    <section>
                        {
                            this.state.movieList.map(v=>(
                                <div key={v.id}>
                                    <div className="content">
                                        <div className={"contentTwo"}>
                                            <div className="contentL">
                                                <img src={v.img.replace("w.h","64.90")}></img>
                                            </div>
                                            <div className="contentM" >
                                                <h3>{v.nm}</h3>
                                                <p className="people">观众评 <span className="assess">{v.sc}</span></p>
                                                <p className="action">{v.star}</p>
                                                <p className="today">{v.showInfo}</p>
                                            </div>

                                        </div>
                                        <div className="contentR">
                                            <div className="buy">购票</div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                        <div type="button" onClick={this.getMovie.bind(this)}>加载更多....</div>
                    </section>
                </div>
                <Position></Position>
            </div>


        )
    }
    getPosition(){
        document.querySelector(".forPosition").style.display="none"
        document.querySelector(".citysBody").style.display="block"
    }
    async getMovie(token=""){
        const data= await this.$axios.get("/y/ajax/movieOnInfoList?")
        // console.log(data)
        const {movieList,total}=data.data
        this.setState({
            movieList:[
                ...this.state.movieList,
                ...movieList
            ]
        })
    }


    componentDidMount(){
        this.getMovie()
        console.log(this.props)
    }
}
export default withRouter(Home)