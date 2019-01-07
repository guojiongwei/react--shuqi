import React from 'react';
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import './../scss/Home.scss'
import './../scss/List.scss'
export default class Home extends React.Component {

constructor(props){
	super(props)
	this.state = {
		 list : [
          {
            icon:"iconfont icon-fenlei",
            name:"分类",
            path:"/kind",
            id:1
          },
          {
            icon:"iconfont icon-paihang",
            name:"排行",
            path:"/rank",
            id:2
          },
          {
            icon:"iconfont icon-nvsheng",
            name:"女频",
            path:"/kind",
            id:3
          },
          {
            icon:"iconfont icon-nansheng",
            name:"男频",
            path:"/kind",
            id:4
          },
          {
            icon:"iconfont icon-shudanmiaobian",
            name:"书单",
            path:"/kind",
            id:5
          }
        ],
        jingping:[],
        title:'',
        xiazai:'http://img-tailor.11222.cn/pm/book/operate/2017062711265649.png',
        girls:[],
        girl:'',
        boys:[],
        boy:''
	}
}
componentDidMount(){
	var that = this;
	$.ajax({
		url:'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1511012659&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=50F438A0BC3F1B640A49F04542DD1FBE&key=shuqiapi&_=1511012659929',		
		success:function(data){
			//console.log(data.data.module[3].content);
			that.setState({
				jingping:data.data.module[3].content,
				title:data.data.module[3].m_s_name
			})
		}
	})
	$.ajax({
		url:'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1511085060&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=FC8AB0DFF20A3EB7B3D963DA394BD0A8&key=shuqiapi&_=1511085060033',
		
		success:function(data){
			var datag = data.data.module[3];
			var datab = data.data.module[8];
		
			that.setState({
				girls:datag.content,
				girl:datag.m_s_name,
				boys:datab.content,
				boy:datab.m_s_name
			})
		}
	})
}
shuaxin(){
  var that = this;
	$.ajax({
		url:'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1511012659&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=50F438A0BC3F1B640A49F04542DD1FBE&key=shuqiapi&_=1511012659929',
		
		success:function(data){
			//console.log(data.data.module[3].content);
			that.setState({
				jingping:data.data.module[3].content,
				title:data.data.module[3].m_s_name
			})
		}
	})
  }


shuaxin1(){
	var that = this;
	$.ajax({
		url:'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1511085060&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=FC8AB0DFF20A3EB7B3D963DA394BD0A8&key=shuqiapi&_=1511085060033',
		
		success:function(data){
			var datag = data.data.module[3];
			var datab = data.data.module[8];
		
			that.setState({
				girls:datag.content,
				girl:datag.m_s_name
			})
		}
	})
}

shuaxin2(){
	var that = this;
	$.ajax({
		url:'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1511085060&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=FC8AB0DFF20A3EB7B3D963DA394BD0A8&key=shuqiapi&_=1511085060033',
		
		success:function(data){
			var datag = data.data.module[3];
			var datab = data.data.module[8];
		
			that.setState({
				boys:datab.content,
				boy:datab.m_s_name
			})
		}
	})
}


		render() {
			
			 const arr = [];
    for(var item of this.state.list){
      arr.push(<NavLink key={ item.id } to={ item.path }><li>
        <div className='icon'><p className={ item.icon }></p></div>
        <p>{ item.name }</p>
      </li></NavLink>)
    }
			var xiazai = this.state.xiazai;
			var title = this.state.title;
			var arr1 = [];
			var data = this.state.jingping
			for(var i =0;i<data.length;i++){
				//console.log(data[i])
			var item1 = data[i]
			item1.index = i;
			//console.log(i)
				arr1.push(<NavLink to={'/details1/'+item1.class_name+'/'+i+'/'+item1.author+'/'+item1.bid} key={i}><li>
				<img src={item1.book_cover} style={{width:'0.7rem',height:'0.9rem'}}/>
				<em style={{color:'#333'}}>{item1.bookname}</em><i>{item1.author_name}</i></li></NavLink>)
			}
			
			var arr2 = [];
			var arr3 = [];
			var title2 = this.state.girl;
			var data2 = this.state.girls;
			for(let i =0;i<data2.length;i++){
				if(i<4){
			var item2 = data2[i]
			item2.index = i;
			//console.log(i)
				arr2.push(<NavLink to={'/details1/'+item2.class_name+'/'+i+'/'+item2.author+'/'+item2.bid} key={i}><li>
				<img src={item2.book_cover} style={{width:'0.7rem',height:'0.9rem'}}/>
				<em style={{color:'#333'}}>{item2.bookname}</em><i>{item2.author_name}</i></li></NavLink>)
			}else{
				var item3 = data2[i]
			item3.index = i;
			//console.log(i)
				arr3.push(<NavLink to={'/details1/'+item3.class_name+'/'+i+'/'+item3.author+'/'+item3.bid} key={i}><div className='lis2'>
				<em style={{color:'#333'}}>{item3.bookname}</em><button style={{width:'0.5rem',color:'#999',height:'0.2rem',fontSize:'0.1rem'}}>{item3.first_cate_name}</button><button  style={{width:'0.33rem',height:'0.2rem',fontSize:'0.1rem',color:'#00c98d'}}>{item3.stat_name}</button>
				<p style={{color:'#999'}}>{item3.book_info}</p>
				</div></NavLink>)
			}
			}
			
			var arr4 = [];
			var arr5 = [];
			var title3 = this.state.boy;
			var data3 = this.state.boys;
			for(let i =0;i<data3.length;i++){
				if(i<4){
			var item2 = data3[i]
			item2.index = i;
			//console.log(i)
				arr4.push(<NavLink to={'/details1/'+item2.class_name+'/'+i+'/'+item2.author+'/'+item2.bid} key={i}><li>
				<img src={item2.book_cover} style={{width:'0.7rem',height:'0.9rem'}}/>
				<em style={{color:'#333'}}>{item2.bookname}</em><i>{item2.author_name}</i></li></NavLink>)
			}else{
				var item3 = data3[i]
			item3.index = i;
			//console.log(i)
				arr5.push(<NavLink to={'/details1/'+item3.class_name+'/'+i+'/'+item3.author+'/'+item3.bid} key={i}><div className='lis2'>
				<em style={{color:'#333'}}>{item3.bookname}</em><button style={{width:'0.5rem',color:'#999',height:'0.2rem',fontSize:'0.1rem'}}>{item3.first_cate_name}</button><button  style={{width:'0.33rem',height:'0.2rem',fontSize:'0.1rem',color:'#00c98d'}}>{item3.stat_name}</button>
				<p style={{color:'#999'}}>{item3.book_info}</p>
				</div></NavLink>)
			}
			}
				
			
				return(
					<div className = 'honeContent'>
						<div className='kind'>
						<ul>
						    {arr}
						    </ul>
						    <img style={{width:'100%',height:'0.6rem',marginTop:'-0.41rem'}} src={xiazai}/>
						   <div className='jingping'>
						   <h3>{title}</h3>
						   <ul className='ul1'>{arr1}</ul>
						   
						   <p onClick={this.shuaxin.bind(this)} style={{marginLeft:'1.6rem',marginTop:'0.1rem'}}>换一换<em style={{color:'#999',fontSize:'0.1rem'}} className='iconfont icon-shuaxin'></em></p>
						
						   </div>
						   
						   <div className='nvsheng'>
						   <h3>{title2}</h3>
						   <ul className='ul1'>{arr2}</ul>
						   <div className='ul2'>{arr3}
						   <p onClick={this.shuaxin1.bind(this)} style={{marginLeft:'1.6rem',marginTop:'0.1rem'}}>换一换<em style={{color:'#999',fontSize:'0.1rem'}} className='iconfont icon-shuaxin'></em></p>

						   </div>
						  
						   </div>
						   
						    <div className='nvsheng'>
						   <h3>{title3}</h3>
						   <ul className='ul1'>{arr4}</ul>
						   <div className='ul2'>{arr5}
						   <p onClick={this.shuaxin2.bind(this)} style={{marginLeft:'1.6rem',marginTop:'0.1rem'}}>换一换<em style={{color:'#999',fontSize:'0.1rem'}} className='iconfont icon-shuaxin'></em></p>

						   </div>
						  
						   </div>
						      <div style={{width:'100%',height:'2.5rem',textAlign:'center',background:'#f0f0f3'}}>
						<button style={{width:'80%',height:'0.42rem',background:'#00c98d',color:'#fff',borderRadius:'0.04rem',marginTop:'0.2rem',border:'1px solid #00c98d'}}>下载书旗小说客户端</button>
						<p style={{lineHeight:'0.4rem'}}>海量图书，更高品质阅读体验</p>
						<p style={{color:'#999'}}>©2016书旗网shuqi.com</p>
						<p style={{color:'#999'}}>粤ICP备13078413号-1</p>
						<p style={{color:'#999'}}>广州阿里巴巴文学信息技术有限公司 版权所有</p>
						<p style={{color:'#999'}}>广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
						<p style={{color:'#999'}}>020-39225959</p>
			
			      </div>
						   </div>
						
						   </div>
		)
	}
}