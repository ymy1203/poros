import axios from "axios";

export const ajax = async (type,url,data) =>{
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  if(type == "GET"){
    let result = await axios.get(url,{
      params:data
    })
    return result;

  }else if(type == "POST"){
    let result = await axios.post(url, data)
    return result;
  }
}


export const getData = (paramas) =>ajax("GET","/src/",paramas)
