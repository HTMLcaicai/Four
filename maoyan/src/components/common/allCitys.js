import React,{Fragment} from "react"
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import {
    Link
} from 'react-router-dom'
import allCityCreator from "../../store/actionCreator/allCity";
 class allCitysPosition extends React.Component{
    render(){
        return(
            <div>
                <div className={"allCitysPosition"}>
                    <li className={"iconClass1"} onClick={this.getCurrentCity.bind(this)}><span>全城</span><i className={"iconfont icon-xiala"}></i></li>
                    <li className={"iconClass2"} onClick={this.getCurrentBrand.bind(this)}><span>品牌</span><i className={"iconfont icon-xiala"}></i></li>
                    <li className={"iconClass3"} onClick={this.getCurrentFeature.bind(this)}><span>特色</span><i className={"iconfont icon-xiala"}></i></li>
                </div>
                <div className={"allCityPositionActive"} flag="1">
                    <div className={"CurrentCity"}>
                        <span id={"storeAndsationId"} onClick={this.props.storeOrstation.bind(this)}>商区</span>
                        <span  onClick={this.props.storeOrstation.bind(this)}>地铁站</span>
                    </div>
                    <div className={"tabCity"}>
                        <ul>
                            {
                                this.props.storeAndsationId === 0 ? this.props.subItems.map(v => (
                                    <Fragment key={v.id}>
                                        {
                                            <li onClick={this.props.getAreaId.bind(this, v.id)}>{v.name}<span
                                                name="span">({v.count})</span></li>
                                        }
                                    </Fragment>
                                )) : this.props.subway.map(v => (
                                    <Fragment key={v.id}>
                                        <li onClick={this.props.getSubId.bind(this, v.id)}>{v.name}<span
                                            name="span">({v.count})</span></li>
                                    </Fragment>
                                    ))
                            }
                        </ul>
                        <div>
                            {
                                this.props.storeAndsationId === 0 ?this.props.subItemsId.map((v,index,arr)=>(
                                 <Fragment key={v.id}>
                                     {
                                         <p>
                                             <span><i className={"iconfont"}></i>{v.name}</span>
                                             <b>{v.count}</b>
                                         </p>
                                     }
                                 </Fragment>
                                )):this.props.subways.map((v,index,arr)=>(
                                    <Fragment key={v.id}>
                                        {
                                            <p>
                                                <span><i className={"iconfont"}></i>{v.name}</span>
                                                <b>{v.count}</b>
                                            </p>
                                        }
                                    </Fragment>
                                ))
                            }
                        </div>

                    </div>
                </div>

                <div className={"getCurrentBrand"} flag="1">
                    {
                        this.props.brand.map(v=>(
                                <div key={v.id} className={"brandNameOrCount"}>
                                    <span className={"allCityBrand"}>{v.name}</span>
                                    <span className={"allCityCount"}>{v.count}</span>
                                </div>

                        ))
                    }
                </div>
                <div className={"getCurrentFeature"} flag="1">
                        <div id={"CurrentFeatrue"}>
                            <h3>特色功能</h3>
                            <div className={"characteristic"}>
                                {
                                    this.props.service.map(v=>(
                                        <Fragment key={v.id}>
                                            <span>{v.name}</span>
                                        </Fragment>
                                    ))
                                }
                            </div>
                            <h3>特殊厅</h3>
                            <div className={"characteristic"}>
                                {
                                    this.props.hallType.map(v=>(
                                        <Fragment key={v.id}>
                                            <span>{v.name}</span>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        </div>
                        <div id="special-btn">
                            <span id="cancel-btn">重置</span>
                            <span id="confirm-btn">确定</span>
                        </div>
                </div>
            </div>
        )
    }
    arrows(num){
        var element = document.querySelector(".iconClass"+num+" .icon-xiala")
        var elementCommon = document.querySelector(".iconClass"+num+" .iconfont")
        // 清空
        for(var i=1;i<4;i++){
            var elementSpan = document.querySelector(".iconClass"+i+" span")
            var elementIcon = document.querySelector(".iconClass"+i+" .iconfont")
            elementSpan.style.color = "#777777"
            elementIcon.style.color = "#777777"
            elementIcon.setAttribute("class","iconfont icon-xiala")
        }
        if(element){
            elementCommon.setAttribute("class","iconfont icon-xiala2")
        }else{
            elementCommon.setAttribute("class","iconfont icon-xiala")

        }
    }
     getEleResult(num){
        var allCityPositionActive = document.querySelector(".allCityPositionActive");
         var getCurrentFeature = document.querySelector(".getCurrentFeature");
         var getCurrentBrand = document.querySelector(".getCurrentBrand");
         if(num===2){
             var Current = getCurrentBrand
             var otherC1 = getCurrentFeature
             var otherC2 = allCityPositionActive
         }else if(num===1){
             var Current = allCityPositionActive
             var otherC1 = getCurrentFeature
             var otherC2 = getCurrentBrand
         }else if(num===3){
             var Current = getCurrentFeature
             var otherC1 = allCityPositionActive
             var otherC2 = getCurrentBrand
         }
         var elementCommon = document.querySelector(".iconClass"+num+" .iconfont")
         var elementSpan = document.querySelector(".iconClass"+num+" span")
         if(Current.getAttribute("flag")==="1"){
             Current.style.display="block";
             otherC1.style.display = "none";
             otherC2.style.display = "none"
             Current.setAttribute("flag","0");
             otherC1.setAttribute("flag","1");
             otherC2.setAttribute("flag","1")
             elementCommon.style.color = "red"
             elementSpan.style.color = "red"
         }else if(Current.getAttribute("flag")!=="1"){
             Current.style.display="none";
             Current.setAttribute("flag","1");
         }
     }
     getCurrentCity(){
        this.arrows(1);
        this.getEleResult(1)
    }
     getCurrentBrand(){
        this.arrows(2)
        this.getEleResult(2)
    }
     getCurrentFeature(){
        this.arrows(3)
        this.getEleResult(3)
    }
    componentDidMount(){
        this.props.getCurrentCityData.call(this)
    }

}

function mapStateToProps({ allCity }) {
    return {
        subway:allCity.subway,
        subItems:allCity.subItems,
        subItemsId:allCity.subItemsId,
        subways:allCity.subways,
        storeAndsationId:allCity.storeAndsationId,
        brand:allCity.brand,
        hallType:allCity.hallType,
        service:allCity.service
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(allCityCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(allCitysPosition)