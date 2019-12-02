import React from "react"
import "../../assets/Home/font/iconfont.css"
import "../../assets/Home/hot/index.css"
// import "../../assets/router/index.css"
import axios from "axios"
import{
    Link,
    withRouter
} from "react-router-dom"
import Position from "../../components/common/position";

class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            offset: 0,
            limit: 1,
            comingBto: [],
            coming: []
        }
    }

    render() {
        return (
            <div className={"App"}>
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
                    <Link className="play21" to={"/"}

                    >正在热映 </Link>
                    <li className="play22"

                    >即将上映
                    </li>
                    <li className="playIncont"
                        onClick={(Search) => this.props.history.push("/search")}
                    >
                        <i className="iconfont icon-sousuo1"></i>
                    </li>
                </nav>
                {/* 内容 */}

                <div className="most-expected">
                    <p className="title">近期最受期待</p>
                    <div className="most-expected-list">
                        {
                            this.state.coming.map(v => (
                                <div key={v.id}>
                                    <div className="expected-item">
                                        <div className="itemImg">
                                            <img src={v.img.replace("w.h", "64.90")}></img>
                                            <span className="wish">
                                                <span className="wishNum"> {v.wish}</span>人想看
                                            </span>
                                        </div>
                                        <h5 className="hotName">{v.nm}</h5>
                                        <p className="date">{v.comingTitle}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                {/* 下部分 */}
                <div className="warp">
                    <div className="coming-list">
                        {
                            this.state.comingBto.map(v => (

                                <div key={v.id}>
                                    <p className="bottomDate">{v.comingTitle}</p>
                                    <div className="bottomMovie">
                                        <div className="movieMain">
                                            <div className="avatar">
                                                <div className="defautImg">
                                                    <img src={v.img.replace("w.h", "64.90")}></img>
                                                </div>
                                            </div>
                                            <div className="movieContent">
                                                <div className="contentMid">
                                                    <div className="movieTitle">
                                                        <div className="titleName">
                                                            {v.nm}
                                                        </div>
                                                    </div>
                                                    <div className="movieDetail">
                                                        <div className="wantNum">
                                                            <span className="person">
                                                                {v.wish}
                                                            </span>
                                                            <span className="p-suffix">人想看</span>
                                                        </div>
                                                        <div className="actor">
                                                            主演: {v.star}
                                                        </div>
                                                        <div className="playTime">
                                                            {v.rt}上映
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="want">
                                            <div className="wantButton">
                <span className="wantBtn">
                    想看
                </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            ))
                        }


                    </div>
                </div>

                <Position></Position>
            </div>
        )
    }

    async getMovies() {
        const {data} = await axios.get("/y/ajax/comingList?ci=1&token=&limit=12")

        const comingBto = data.coming
        this.setState({
            comingBto
        })
    }


    async getMost(offset = 0) {
        const data = await axios.get("/y/ajax/mostExpected?ci=1&limit=10&offset=0&token=",
            {

                params: {
                    offset,
                    limit: 10
                }
            }
        )
        var {coming} = data.data

        var {limit, offset} = data.data.paging
        console.log(data)
        this.setState({
            offset,
            limit,
            coming: [
                ...this.state.coming,
                ...coming
            ]

        })
    }

    getPosition() {
        document.querySelector(".forPosition").style.display = "none"
        document.querySelector(".citysBody").style.display = "block"
    }

    componentDidMount() {
        this.getMovies()
        this.getMost()
    }
}
export default withRouter(Hot)