import React from "react"
import "../css/myMove.css"
export default class MyMove extends React.Component {
    constructor(){
        super();
        this.state = {
            orderlist:{"orderlist":[{"ui":{"cate":300},"gift":{"giftFlag":2},"promotion":{},"migrate":{"allow":false,"role":"unmigrate","display":false},"award":{},"movie":{"id":248172,"name":"复仇者联盟4：终局之战","img":"http://p0.meituan.net/w.h/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg","eggsDesc":""},"show":{"startTime":1556278200000,"dim":"3D","language":"英语","showTime":"2019-04-26 周五 19:30"},"id":20964532834,"order":{"uniqueStatus":10,"payLimitMin":14,"leftPaySecond":0,"payStatus":1,"sellMoney":70,"fixStatus":1,"isMigrate":0,"groupRelationFlag":2,"orderTime":1556248670000,"payTime":1556248916000,"fixTime":1556248919000},"cinema":{"id":16028,"takePlace":"影院内自助取票机或影院前台","allowRefund":0,"name":"天智国际影城(运城学院店)","migrate":{"allow":true}},"refund":{"detailUrl":"http://m.maoyan.com/order/20964532834/refund?_v_=yes&cinemaId=16028","refundProgress":0,"allow":0,"shouldDisplayRefund":0,"notAllowRefundReason":""},"seats":{"hallName":"1号影厅","count":2,"sectionName":"","list":[{"rowId":"6","columnId":"5","type":"N"},{"rowId":"6","columnId":"6","type":"N"}]},"pricePackages":{},"comment":{"id":0,"status":0,"score":0},"user":{},"exchange":{"originId":"074714","qrcode":"074714|619280","exchangeCodeName":"验证码","originIdName":"序列号","exchangeCode":"619280"},"otherStatus":"已完成"},{"ui":{"cate":300},"gift":{"giftFlag":2},"promotion":{},"migrate":{"allow":false,"role":"unmigrate","display":false},"award":{},"movie":{"id":1240159,"name":"来电狂响","img":"http://p1.meituan.net/w.h/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg","eggsDesc":"片尾有2个彩蛋，不要错过哦"},"show":{"startTime":1546774200000,"dim":"2D","language":"国语","showTime":"2019-01-06 周日 19:30"},"id":20601201577,"order":{"uniqueStatus":10,"payLimitMin":14,"leftPaySecond":0,"payStatus":1,"sellMoney":49.8,"fixStatus":1,"isMigrate":0,"groupRelationFlag":2,"orderTime":1546769835000,"payTime":1546769886000,"fixTime":1546769887000},"cinema":{"id":16028,"takePlace":"影院内自助取票机或影院前台","allowRefund":0,"name":"天智国际影城(运城学院店)","migrate":{"allow":true}},"refund":{"detailUrl":"http://m.maoyan.com/order/20601201577/refund?_v_=yes&cinemaId=16028","refundProgress":0,"allow":0,"shouldDisplayRefund":0,"notAllowRefundReason":""},"seats":{"hallName":"3号影厅","count":2,"sectionName":"","list":[{"rowId":"6","columnId":"8","type":"R"},{"rowId":"6","columnId":"7","type":"L"}]},"pricePackages":{},"comment":{"id":0,"status":0,"score":0},"user":{},"exchange":{"originId":"578988","qrcode":"578988|676647","exchangeCodeName":"验证码","originIdName":"序列号","exchangeCode":"676647"},"otherStatus":"已完成"},{"ui":{"cate":300},"gift":{"giftFlag":2},"promotion":{},"migrate":{"allow":false,"role":"unmigrate","display":false},"award":{},"movie":{"id":249342,"name":"海王","img":"http://p0.meituan.net/w.h/movie/c106904da68edd848afd4a320976d051346321.jpg","eggsDesc":"片尾有1个彩蛋，不要错过哦"},"show":{"startTime":1544612400000,"dim":"3D","language":"英语","showTime":"2018-12-12 周三 19:00"},"id":20550678360,"order":{"uniqueStatus":10,"payLimitMin":14,"leftPaySecond":0,"payStatus":1,"sellMoney":45.6,"fixStatus":1,"isMigrate":0,"groupRelationFlag":2,"orderTime":1544607707000,"payTime":1544607721000,"fixTime":1544607737000},"cinema":{"id":16238,"takePlace":"影院内猫眼取票机","allowRefund":1,"name":"幕唯影院(运城学院店)","migrate":{"allow":true}},"refund":{"detailUrl":"http://m.maoyan.com/order/20550678360/refund?_v_=yes&cinemaId=16238","refundProgress":0,"allow":0,"shouldDisplayRefund":0,"notAllowRefundReason":"您的订单已取票，无法退款"},"seats":{"hallName":"1号厅","count":2,"sectionName":"","list":[{"rowId":"6","columnId":"7","type":"N"},{"rowId":"6","columnId":"8","type":"N"}]},"pricePackages":{},"comment":{"id":0,"status":0,"score":0},"user":{},"exchange":{"originId":"491642","qrcode":"491642|176281","exchangeCodeName":"验证码","originIdName":"取票号","exchangeCode":"176281"},"otherStatus":"已完成"}]}
        }
    }
    render() {
        return (
            <div>
                <header className="navbar  ">
                    {/* <span></span> */}
                    <h1 className="nav-header2" onClick = {this.goBack.bind(this)}>《</h1>
                    <h1 className="nav-header1" >我的电影订单</h1>
                </header>
                {
                    this.state.orderlist.orderlist.map((v,i)=>(
                        <div className="order-list" key = {i}>
                            <div className="order-item mb-line-tb">
                                <div className="order-title mb-line-b">
                                    <a className="cinema-name line-ellipsis">
                                        {v.cinema.name}  >
                                    </a>
                                </div>
                                <a className="order-detail-link">
                                    <div className="order-info">
                                        <img src={v.movie.img.replace("w.h","57.80")} alt="" />
                                        <div className="order-desc">
                                            <div className="movie-name line-ellipsis">{v.movie.name}&nbsp;&nbsp;<span>2张</span></div>
                                            <div className="showTime line-ellipsis">{v.show.showTime}</div>
                                            <div className="position line-ellipsis">{v.seats.hallName}&nbsp;&nbsp;
                                                {
                                                    v.seats.list.map((m,i)=>(
                                                        <span key={i}>{m.rowId}排{m.columnId}座</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="order-more  mb-line-t">
                                    <div className="price">总价：<span>{v.order.sellMoney}</span></div>
                                    <div className="status">{v.otherStatus}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    goBack(){
        this.props.history.go(-1)
    }
}