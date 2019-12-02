import React from "react"
export default class Position extends React.Component{
    constructor(){
        super()
        this.state={
            cityList:[]
        }
    }
    render(){
        return (
            <div className={"citysBody"}>
                <div className={"citysCommon"}>
                    <div>
                        <h3 className={"citysTitle"}>定位城市</h3>
                        <span className={"losePosition"}>定位失败，请点击重试</span>
                    </div>
                    <div>
                        <h3 className={"citysTitle"}>最近访问城市</h3>
                            <span className={"cityOne"}>北京</span>
                            <span className={"cityOne"}>上海</span>
                            <span className={"cityOne"}>天津</span>
                            <span className={"cityOne"}>深圳</span>
                    </div>
                    <div>
                        <h3 className={"citysTitle"}>热门城市</h3>
                        <span className={"cityOne"}>北京</span>
                        <span className={"cityOne"}>上海</span>
                        <span className={"cityOne"}>天津</span>
                        <span className={"cityOne"}>成都</span>
                        <span className={"cityOne"}>青岛</span>
                        <span className={"cityOne"}>郑州</span>
                        <span className={"cityOne"}>杭州</span>
                        <span className={"cityOne"}>深圳</span>
                        <span className={"cityOne"}>广州</span>
                        <span className={"cityOne"}>南京</span>
                        <span className={"cityOne"}>武汉</span>
                    </div>
                    <div className={"positionHot"}>
                        <span className={"hotCity"}>定位最近热门城市</span>
                        <p>
                            <a href="#A">A</a>
                            <a href="#B">B</a>
                            <a href="#C">C</a>
                            <a href="#D">D</a>
                            <a href="#E">E</a>
                            <a href="#F">F</a>
                            <a href="#G">G</a>
                            <a href="#H">H</a>
                            <a href="#J">J</a>
                            <a href="#K">K</a>
                            <a href="#L">L</a>
                            <a href="#M">M</a>
                            <a href="#N">N</a>
                            <a href="#P">P</a>
                            <a href="#Q">Q</a>
                            <a href="#R">R</a>
                            <a href="#S">S</a>
                            <a href="#T">T</a>
                            <a href="#W">W</a>
                            <a href="#X">X</a>
                            <a href="#Y">Y</a>
                            <a href="#Z">Z</a>
                        </p>

                    </div>
                    <div>
                        {
                            this.state.cityList.map((v,index,arr)=>(
                                <div key={v.id}>
                                    {
                                        v.py.substr(0,1)==="a" && v.id===150 ? <h3 id={"A"} className={"citysTitle"}>A</h3> : <h3></h3>
                                        | v.py.substr(0,1)==="b" && v.id===1 ? <h3 id={"B"}className={"citysTitle"}>B</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="c" && v.id===45 ? <h3 id={"C"} className={"citysTitle"}>C</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="d" && v.id===65? <h3 id={"D"} className={"citysTitle"}>D</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="e" && v.id===144 ? <h3 id={"E"} className={"citysTitle"}>E</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="f" && v.id===44 ? <h3 id={"F"} className={"citysTitle"}>F</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="g" && v.id===20 ? <h3  id={"G"} className={"citysTitle"}>G</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="h" && v.id===50 ? <h3 id={"H"} className={"citysTitle"}>H</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="j" && v.id===98 ? <h3 id={"J"} className={"citysTitle"}>J</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="k" && v.id===114 ? <h3 id={"K"} className={"citysTitle"}>k</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="l" && v.id===106 ? <h3 id={"L"} className={"citysTitle"}>l</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="m" && v.id===175 ? <h3 id={"M"} className={"citysTitle"}>M</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="n" && v.id===51 ? <h3 id={"N"} className={"citysTitle"}>N</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="p" && v.id===158 ? <h3 id={"P"} className={"citysTitle"}>P</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="q" && v.id===60 ? <h3 id={"Q"} className={"citysTitle"}>Q</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="r" && v.id===228 ? <h3 id={"R"} className={"citysTitle"}>R</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="s" && v.id===10 ? <h3 id={"S"} className={"citysTitle"}>S</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="t" && v.id===40? <h3 id={"T"} className={"citysTitle"}>T</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="w" && v.id===52? <h3 id={"W"} className={"citysTitle"}>W</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="x" && v.id===42 ? <h3 id={"X"} className={"citysTitle"}>X</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="y" && v.id===104 ? <h3 id={"Y"} className={"citysTitle"}>Y</h3> : <h3></h3>
                                       | v.py.substr(0,1)==="z" && v.id===73 ? <h3 id={"Z"} className={"citysTitle"}>Z</h3> : <h3></h3>

                                    }
                                    <div  className="citys" onClick={this.tpId.bind(this)} cityid={v.id}>
                                         {v.nm}
                                    </div>
                                </div>


                            ))
                        }
                    </div>

                </div>

            </div>
        )
    }
    async getCityList(){
        var {data} =await this.$axios.get("/m/cityList");
        var initial = data.cityList[0].data;
        var len = data.cityList[0].data.length;
        for(var j=0;j<len-1;j++){
            for(var i=0;i<len-1;i++){
                if(initial[i].py.substr(0,1)>initial[i+1].py.substr(0,1)){
                    var a = initial[i];
                    initial[i] = initial[i+1];
                    initial[i+1] = a;
                }
            }
        }
        // console.log(initial)
       this.setState({
           cityList:data.cityList[0].data
       })
    }
    async tpId(e){
       const cityJust =  e.target.innerText
        document.querySelector(".forPosition").style.display="block"
        document.querySelector(".citysBody").style.display="none"
        const {data} = await this.$axios.get("/y/ajax/cinemaList/",{
            params:{
                offset:0,
                limit:20,
                updateShowDay:true,
                cityId:e.target.getAttribute("cityid")
            }
        })
        // console.log( document.querySelector(".clickPosition").innerText)
        document.querySelector(".clickPosition").innerText = cityJust
        console.log(data)
    }
    componentDidMount(){
        this.getCityList()
    }

}