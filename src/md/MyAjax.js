import FetchJsonp from "fetch-jsonp"
import axios from "axios"
import jsonp from "jsonp"
import $ from "jquery"
export default {
  fetch(url,successCallback,failCallBack){
    /*
     * 语法简洁，更加语义化
基于标准 Promise 实现，支持 async/await
同构方便，使用 isomorphic-fetch
     */
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
//      console.log(data);
        successCallback(data)
      }).catch(function(e) {
//      console.log("Oops, error");
      failCallBack(e)
      });
  },
  fetchJsonp(url,configObj,successCallback,failCallBack){
    FetchJsonp(url,configObj).then(function(response) {
        return response.json();
      }).then(function(data) {
//      console.log(data);
        successCallback(data)
      }).catch(function(e) {
//      console.log("Oops, error");
      failCallBack(e)
      });
  },
  axiosGet(url,paramsObj,successCallback,failCallBack){
    /**
     * axios.get('/user',{
      params:{
        ID:12345
      }
    })
     */
    axios.get(url,paramsObj)
    .then(function(response){
      successCallback(response);
    })
    .catch(function(err){
      failCallBack(err);
    });
  },
  axiosPost(url,paramsObj,successCallback,failCallBack){
    /**
     * axios.post(url,{
      firstName:'Fred',
      lastName:'Flintstone'
    })
     */
    axios.post(url,paramsObj)
    .then(function(res){
     successCallback(res);
    })
    .catch(function(err){
      failCallBack(err);
    });
  },
  jsonp(url,paramsObj,successCallback,failCallBack){
    jsonp(url, paramsObj, function (err, data) {
        if (err) {
         failCallBack(err.message);
        } else {
          successCallback(data);
        }
      });
  },
  ajax(obj,successCallback,failCallBack){
    $.ajax({
    	 type:obj.type,
      url:obj.url,
      data:obj.data,
    	success(data){
        successCallback(data);
      },
      fail(err){
        failCallBack(data);
      }
    });
  },
   ajaxJsonp(obj,successCallback,failCallBack){
    $.ajax({
      type:obj.type,
      url:obj.url,
      data:obj.data,
      dataType:obj.dataType,
      jsonp:obj.jsonp,                          //服务器端获取回调函数名的key
      success(data){
        successCallback(data);
      },
      fail(err){
        failCallBack(data);
      }
    });
  }
}
