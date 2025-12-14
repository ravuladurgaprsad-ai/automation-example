import {test,expect} from '@playwright/test';

test('api GET request',async({request})=>{
const response=await request.get("https://jsonplaceholder.typicode.com/posts/1");

const repjson=await response.json();
console.log(repjson)
const respbody=await response.body();
console.log(respbody)
const reshed=  response.headers();
console.log(reshed)
const reshedd= response.headersArray();
console.log(reshedd)
})

test('api post request',async({request})=>{
const response=await request.post("https://jsonplaceholder.typicode.com/posts",{
    data:{
        name:"durga",
        job:"qa"
    }
})
const resjson=await response.json();
expect(resjson.name).toBe("durga");
console.log(resjson);
expect(resjson).toHaveProperty('job');
expect(response.status()).toBe(201);

});

test('api put request',async({request})=>{
const response=await request.put("https://jsonplaceholder.typicode.com/posts/1",{
    data:{
        name:"durga",
        job:"qadd",
        code:"js"}

})
const respjson= await response.json();
console.log(respjson);
console.log(response.status());
expect(response.status()).toBe(200);
expect(respjson).toHaveProperty("code")
})
test('api patch request',async({request})=>{
const response=await request.patch("https://jsonplaceholder.typicode.com/posts/1",{
    data:{
        name:"durga parasd",
        }
    })
expect(response.status()).toBe(200);
console.log(await response.json());
})
