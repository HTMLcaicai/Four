import React from "react";
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import {
    Link,
    withRouter
} from 'react-router-dom'
// 样式
import "../../assets/thearte/css/thearte.css";
import "../../assets/Home/font/iconfont.css"
import "../../assets/position/allCityPosition.css"
import "../../assets/position/position.css"
import "../../assets/common/reset.css"
// 组件
import theatreCreator from '../../store/actionCreator/theatre';
import Position from "../../components/common/position"
import AllCitysPosition from "../../components/common/allCitys"

class Theatre extends React.Component {

    render() {
        return (
            <div className={"App2"}>
                <div className={"forPosition"}>
                        <header>
                            <div className="header1">猫眼电影</div>
                        </header>
                        <div className={"toHeader"}>
                            <div className={"thearteNav"}>
                                <li onClick={this.getPosition}>
                                    <b className={"clickPosition"}>北京</b>
                                    <i className={"iconfont icon-xiala"}></i>
                                </li>
                                <li onClick={(Search)=>this.props.history.push("/search")}>
                                    <i className="iconfont icon-sousuo1"></i>
                                    <span>搜影院</span>
                                </li>
                            </div>
                            <AllCitysPosition></AllCitysPosition>

                {
                    this.props.cinemas.map(v => (
                        <div className="cinemas_item_a" key={v.id}>
                            <Link className="cinemas_link" to={"/theatreDetail/" + v.id}>
                                <div className="cinemas_item">
                                    <div className="cinemas_item_b cinemas_item_top">
                                        <span className="cinemas_nm">{v.nm}</span>
                                        <span className="cinemas_price">
                                            <span style={{ color: "red", fontSize: "18px" }}>{v.sellPrice}</span>
                                            <span>元起</span>
                                        </span>
                                    </div>
                                    <div className="cinemas_item_b cinemas_item_middle">
                                        <span className="cinemas_item_addr">{v.addr}</span>
                                        <span>{v.distance}</span>
                                    </div>
                                    <div className="cinemas_item_tag">
                                        <span className="cinemas_item_tag_a cinemas_item_tag_b" style={{ display: v.tag.allowRefund === 1 ? 'block' : 'none' }}>退</span>
                                        <span className="cinemas_item_tag_a cinemas_item_tag_b" style={{ display: v.tag.endorse === 1 ? 'block' : 'none' }}>改签</span>
                                        <span className="cinemas_item_tag_a cinemas_item_tag_c" style={{ display: v.tag.snack === 1 ? 'block' : 'none' }}>小吃卡</span>
                                        <span className="cinemas_item_tag_a cinemas_item_tag_c" style={{ display: v.tag.vipTag ? 'block' : 'none' }}>{v.tag.vipTag}</span>
                                    </div>
                                    <div className="cinemas_promotion">
                                        <span style={{ display: v.promotion.cardPromotionTag ? 'block' : 'none' }}>
                                            {v.promotion.cardPromotionTag}
                                        </span>

                                    </div>

                                </div>
                            </Link>


                        </div>
                    ))
                }
                <input type="button" onClick={this.props.getCinemaList.bind(this, this.props.offset + 20)} value="加载更多" /></div>
                </div>
                <Position></Position>
            </div>
        )
    }
    getPosition(){
        console.log(123213)
        console.log(document.querySelector(".citysBody"))
            document.querySelector(".App2 .forPosition").style.display="none"
            document.querySelector(".App2 .citysBody").style.display="block"

    }
    componentDidMount() {
        this.props.getCinemaList.call(this)
    }
}

function mapStateToProps({ theatre }) {
    return {
        offset: theatre.offset,
        limit: theatre.limit,
        cinemas: theatre.cinemas
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(theatreCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Theatre))