// @ts-check
import { test, expect } from '@playwright/test';
import{homepage} from './data/home.js';
import path from 'path';
const home=require('./data/home.json');

test.describe('testing homepage',async ()=>{
test.beforeEach('launching web',async({page})=>{
await page.goto('/');
//asertion to verify title
await expect(page).toHaveTitle(home.title);
})
test('testing getbyrole',async ({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await hp.primarybtn.click();
await hp.togglebtn.click();
await hp.usernamefield.click();
await hp.usernamefield.fill(home.logincredentials[0].username);
await hp.checkbox.click();
await hp.hmlink.click();
})
test('getbytext locatorss',async({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await expect(hp.textloc).toBeVisible();
await hp.submitbt.click();
})
test('test getbylabel',async({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await hp.emaillabel.fill(home.userdata.email);
await hp.passwordlabel.fill(home.userdata.password)
})
test('test placeholders ',async({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await hp.namepc.fill(home.userdata.name);
await hp.phonepc.fill(home.userdata.cell);
await hp.productsear.fill(home.userdata.searchproduct)
await hp.searchbtn.click();
await hp.express.check();
})
test('verify getbyalttext',async ({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
hp.img.scrollIntoViewIfNeeded();
await expect(hp.img).toBeVisible();
})
test('test getbytitle',async ({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await hp.homelink.hover();
await page.waitForTimeout(2000);
await expect(hp.homelink).toBeVisible();
await hp.savebt.click();
})
test('verify getbytestid',async ({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await expect(hp.testid).toContainText(home.userdata.emailidcheck)
})
test('test single file upload',async ({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();
await hp.singlefilechoose.click();
await page.waitForTimeout(2000);
const filepath= path.resolve("tests/uploadfiles/test1.txt");
await hp.singlefilechoose.setInputFiles(filepath);
await page.waitForTimeout(3000);
await hp.uploadfile1.click();
await expect(hp.statussinglefile).toBeVisible();
})
test('verify multiplefiles',async({page})=>{
const hp= new homepage(page);
await hp.playwrightpract.click();   
await hp.multifilechose.click();
const path1=path.resolve("tests/uploadfiles/test1.txt");
const path2=path.resolve("tests/uploadfiles/test2.txt");
await hp.multifilechose.setInputFiles([path1,path2]);
await hp.uploadttwofile.click();
await expect(hp.multistatus).toBeVisible();
});
})
test.describe('test of static webtable',async ()=>{
test.beforeEach('launching web',async({page})=>{
const hp=new homepage(page);
await page.goto('./')
await hp.playwrightpract.click(); 
})
test("verify headedrs",async ({page})=>{
const hp=new homepage(page);
const headr=await hp.headers.allTextContents();
expect( headr).toEqual(['BookName','Author','Subject','Price']);
console.log('g',headr);
})
test('count columns',async({page})=>{
const hp=new homepage(page);
const col= await hp.headers.count();
expect(col).toBe(4)
console.log('f',col)
})
test('verify specific author',async({page})=>{
const hp=new homepage(page);
hp.author.scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
expect(hp.author).toContainText('Animesh');
})
test('verify subject for specific book for author',async ({page})=>{
const hp=new homepage(page);
await hp.subject.scrollIntoViewIfNeeded();
expect(hp.subject).toContainText('Javascript'); 
});
test('verify price for specific author',async({page})=>{
const hp=new homepage(page);
const price=await hp.priceauthor.allTextContents();
// @ts-ignore
const pr=price.map((p)=>Number(p.replace(/[^0-9.]/g,'').trim()));
console.log('pr',pr)
console.log('price',price);
const uniq=new Set(pr)
expect(uniq.size).toBe(pr.length);
console.log('price list is unique',uniq);
})
test('sum oall prices ',async ({page})=>{
const hp=new homepage(page);
const prices=await hp.allprice.allTextContents();
// @ts-ignore
const per=prices.reduce((sum,sumtotal)=>sum+Number(sumtotal.replace(/[^0-9.]/g,'').trim()),0);
console.log('f',per);
expect(per).toBe(7100);
})
test('verify uniq all subjects',async ({page})=>{
const hp=new homepage(page);
const sub=await hp.allsubject.allTextContents();
const uniq=[
    // @ts-ignore
    ...new Set(sub.map((removeDuplicates)=>removeDuplicates.trim().toLowerCase()))
]
console.log('all subjects',uniq);
})
test('validate pagination tables sum of all prices',async({page})=>{
const hp=new homepage(page);
const pagenum=await hp.pages.count();
console.log("pagenum",pagenum);
let totalsum=0;
//looping through pages
for(let p=0;p<pagenum;p++){
const pagelink=await hp.pages.nth(p);
const ptext=  await pagelink.textContent();
await pagelink.click();
console.log(`clicked page${ptext}`);
const rows=await hp.row.count();
console.log(rows);
//looping through rows
for(let i=0;i<rows;i++){
const pricestext=await hp.tbprices.nth(i).textContent();
const pricevalue=parseFloat(pricestext.replace("$","").trim());
totalsum+=pricevalue;
console.log(`price value row${i+1} :${pricevalue}`);
}
}
console.log(`total sum all${totalsum}`)
})
test('verify pagination data',async ({page})=>{
const hp=new homepage(page);
const rows=await hp.row.count();
console.log("row",rows);
const pag=await hp.pages.count()
for (let p=0;p<pag;p++){
const pagelink=await hp.pages.nth(p);
const ptext=await pagelink.textContent();
await pagelink.click();
console.log(`clicked page${ptext}`);
for(let t=0;t<rows;t++){
const rowdata=await hp.row.nth(t).textContent();
console.log(`data for row${t+1} :`,rowdata);
}
}
})
test('verify 3forms inputs',async({page})=>{
const hp=new homepage(page);
const values=home.userdata.formsdata;
const input=await hp.inputs.count();
for(let i=0;i<input;i++){
const inputfield=await hp.inputs.nth(i);
inputfield.scrollIntoViewIfNeeded();
await inputfield.fill(values[i]);
await hp.submitbtn.nth(i).click();
expect(inputfield).toContain(values[i]);
}
});
test("shadow dom ",async ({page})=>{
const hp=new homepage(page);
await hp.dominput.fill('durga');
});
});


