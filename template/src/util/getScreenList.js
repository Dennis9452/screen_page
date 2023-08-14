import axios from "axios";
export function getScreenList(domainIp) {
  return new Promise( (resolve) => {
    const server = process.env.NODE_ENV === 'production' ? 
        domainIp === '99' ? 
        `/edgeReceive/deviceList` 
        : `http://192.168.22.100/edgeReceive/deviceList` 
      : `/edgeReceive${domainIp}/deviceList`
    axios.get(server,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then( (response) => {
      if(response) {
        console.log(response)
        const obj = {}
        obj[domainIp] = {
          data : response.data,
          isEmpty: false,
        } 
        resolve(obj)
      } 
    })
    .catch( () => {
      const obj = {}
        obj[domainIp] = {
          isEmpty: true
        }
      resolve(obj)
      console.error('connection error')
    })
      
  })
}