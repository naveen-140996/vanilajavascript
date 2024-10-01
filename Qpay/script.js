// largest number in ana array

// input [2,3,4,-1,9,8,5]

// let arr = [2,3,4,-1,9,8,5];

// function largestNumber(arr){
//     let max = arr[0];
//     console.log(max)
//     for(let i=0;i<arr.length;i++){
//        num = arr[i];
//         if(num > max){
//             max = num;
//         }
        
//     }
//     console.log(max);
// }
// largestNumber(arr)

// longest word in a sentence 

// let text = "Welcome to Naveenmaster"

// function longestWord(text){
//     let words = text.split(" ");
//     console.log(words);
//     let longest = '';
//     for(let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     console.log(longest)
// }
// longestWord(text);

// function reverseArr(arr){
//     const lastIndex = arr.length - 1;
//     console.log(lastIndex   )
//     let reverseArr = arr.map((item,i,arr)=>{
//        return arr[lastIndex - i];
//     })
//     console.log(reverseArr);
// }
// reverseArr(arr)

// function countValue(sentence){
//     let words = sentence.split(" ");

//     let upperCase = words.map((item)=>{
//        return item[0].toUpperCase() + item.slice(1);
//     })
   
//     const result = upperCase.join(' ');
//     console.log(result);

// }
// countValue("naveen kumar")  // HEllo WoRlD  // HEllo


// decimal to binary number 
// input 13 

// 13 divided by 2 
// 0 is value retrun 0 
// remainder + binary number 

// function decimalToBinary(number){
//     if(number === 0 ){
//         return '0';
//     }
//     let binary = '';
//     while(number){
//         const remainder = number % 2;
//         console.log(remainder);
//         binary = remainder + binary;
//         console.log(binary)
//         number = Math.floor(number/2);
//         console.log(number)
//     }
//    return binary;

// }
// const binary = decimalToBinary(13);
// console.log(binary)

// input 

// let array = [1,2,3,4,5,6,7,8];

// output even number print new array 
// function givenArray(array){
//     const newArray  = array.filter((item)=>{
//         return item % 2 == 0;
//     })
//     return newArray;
// }

// const evenArray = givenArray(array);
// console.log(evenArray)

// let array = [1,2,3,4,5];

// function reverseArray(array){
//     let start = 0;
//     let end =  array.length - 1;
//     console.log(end,'end')

//     while(start < end){
//         let temp = array[start];
//         console.log(temp,'temp')
//         array[start] = array[end];
//         console.log(array[start],'swap')
//         array[end] = temp;
//         console.log(array[end],'swap2')

//         start++;
//         end--;
//     }
//     console.log(array)
// }
// reverseArray(array)

// input [1,2,5,10,1,8];

// let input = [2,5,10,1,8];

// function largestDiff(input){
//     if(input.length < 2 ){
//         return - 1;
//     }
//     let maxDiff = 0;
    
//     for(let i = 1; i < input.length - 1; i++){
//         const diff = Math.abs(input[i] - input[i-1]);
//         maxDiff = Math.max(maxDiff,diff)
//     }
//     console.log(maxDiff)
// }
// largestDiff(input)

// remove spl charcters

// Welcome! to codepravah!

// function removeSplChar(sentence){

//     let removeChar = '';

//     for(let char of sentence){
//         if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char === ' '){
//             removeChar += char;
//         }
//     }
//     console.log(removeChar)
// }
// removeSplChar('Welcome! to codepravah!')

// anagaram

// listen = silent 

// function reArrange(string){
//     const reverse = string.toLowerCase().split('').sort().join('');
// }
// reArrange("silent")

// function anagrams(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     const r1 =  reArrange(str1);
//     const r2 =  reArrange(str2);

//     return r1 === r2;
// }
// console.log(anagrams('listen','silent'))

// function sort(sentence){
//     const sortSentence = sentence.split(' ');
//     sortSentence.sort((a,b)=>{
//         return a.length - b.length;
//     })
//    const sortedSentence =  sortSentence.join(' ');
//     console.log(sortedSentence);

// }
// sort("welcome to codepravh")

// random password generate number

// function randomOtp(length){
    
//     let char = "aheriheoroeqrrefdbidfbifd1234567890";

//     let password = '';

//     for(let i=0;i<length;i++){
//         const r = Math.random();
//         const idx = Math.floor(r * char.length);
//         password += char[idx];
//     }
   
//     console.log(password)
// }
// randomOtp(10);

// function removeSpaces(sentence){

//     const word = sentence.split(' ');

//     const removeSpace = word.filter((words)=> words !== '');

//     const result = removeSpace.join(' ');

//     console.log(result)
// }
// removeSpaces('   welcome  to    codepravh  ')

// flip coin 

// function toss(){
//     const probelityOfHead = 0.5;

//     const r = Math.random();
//     console.log(r)

//     if(r < probelityOfHead){
//         console.log('heads');
//     }else{
//         console.log('tails');
//     }
// }
// toss();

// const Toss = document.querySelector('.toss');
// const result = document.getElementById('toss-update');
// Toss.addEventListener('click',function(){
//     const propbelity = 0.5;
//     const r = Math.random();

//     if(r < propbelity){
//         result.innerHTML = 'Head'
//     }else{
//         result.innerHTML = 'Tails'
//     }
// })


// input mississipi

// function frequency(string){
//     let frequency = {};

//     for(let char of string){
//         if(frequency[char]){
//             frequency[char]++;
//         }else{
//             frequency[char] = 1;
//         }
//     }
//     console.log(frequency)
// }
// frequency('mississipi')

// function countTimer(timer){
//    const intervalId =  setInterval(function(){
//         let minutes = parseInt(timer / 60);
//         let seconds = parseInt(timer % 60);

//         if(minutes < 10){
//              minutes = '0' + minutes;
//         }
//         if(seconds < 10){
//             seconds = '0' + seconds;
//        }

//        console.log(minutes + ':' + seconds);

//        if(timer === 0){
//         console.log('Times Up!');
//         clearInterval(intervalId)
//        }
//        timer--;
//     },1000)
// }
// countTimer(5)


// calculate overtime

// function calculateOverTime(startTime,endTime){
//     const standardMinutes = 8 * 60;
//     const [h1,m1,s1] = startTime.split(':');
//     const [h2,m2,s2] = endTime.split(':');
//     const start = new Date().setHours(h1,m1,s1);
//     const end = new Date().setHours(h2,m2,s2);
//     console.log(end)

//     const workingminutes = (end - start) / (1000 * 60);

//     if(workingminutes > standardMinutes){
//         const overtime = parseInt(workingminutes - standardMinutes);
//         const h = parseInt(overtime/60);
//         const m = parseInt(overtime%60);
//         console.log(h + 'hours,' + m + 'minutes');
//     }
    
// }
// calculateOverTime("09:00:00","19:30:00")

// function arrayToObject(array){
//     const obj = {};

//     array.forEach((element,index) => {
//         obj[index] = element;
//     });
//     console.log(obj);
// }
// let array  = ['apple','opple','orange']
// arrayToObject(array)

// grouped by item 

// function groupedByItem(array){
//     const groupedData = {};

//     array.forEach(element => {
//         const type = typeof element;
//         if(!groupedData[type]){
//             groupedData[type]= [element];
//         }else{
//             groupedData[type].push(element);
//         }
//     });
//     console.log(groupedData)

// }
// const array = ['apple',2,0,false,true,function(){},{key:'value'}];

// groupedByItem(array);

// let items = {
//     one:'1',
//     two:'2',
//     three:'3'
// }

// function obj(obj){ 

//     let objct = {};

//     Object.keys(obj).forEach((key)=>{
//         const value = obj[key];
//         objct[value]=key;

//     })
//     console.log(objct)
// }
// obj(items)


// function pair(obj){
//     let array = [];

//     Object.keys(obj).forEach((key)=>{

//         let pair = [key,obj[key]];
//         array.push(pair);
//     })
//     console.log(array)
// }

// pair(items);

// function objctToQuery(url,obj){
//     let queryString = '';

//     Object.keys(obj).forEach((key,index)=>{
//         let query = `${key}=${obj[key]}`
//         console.log(query)
//         if(index === 0){
//             queryString += '?' + query;
//         }else{
//             queryString += '&' + query;
//         }
//     })
//     queryString = url + queryString;

//     console.log(queryString)

// }

//  objctToQuery('www.search.com/search', {
//     name:'naveen',
//     id: 2121,
// })

// const obj1 = { a:'1',b:'2',c:'3'};
// const obj2 = { b:'3',c:'4',d:'5'};

// function diffrenceObject(obj1,obj2){

//     let diffrence = {}

//     Object.keys(obj1).forEach((key)=>{
//         if(!obj2[key]){
//             diffrence[key] = obj1[key];
//         }
//     })
//     Object.keys(obj2).forEach((key)=>{
//         if(!obj1[key]){
//             diffrence[key] = obj2[key];
//         }
//     })
//     console.log(diffrence)
// }
// diffrenceObject(obj1,obj2)

// const obj1 = {a:'1',b:'2',c:'3'};
// const obj2 = {b:'2',c:'3',d:'5'};

// function interSection(obj1,obj2){

//     let interSection = {};

//     Object.keys(obj1).forEach((key)=>{
//         if(obj2[key] && obj1[key] === obj2[key]){

//             interSection[key] = obj1[key]
//         }
//     })
//     console.log(interSection)
// }
// interSection(obj1,obj2)


// const arr = [1,2,1,3,4,6,7,8,3];

// function duplicates(arr){

//     let tracker = {};
//     let duplicates = [];

//     arr.forEach((ele)=>{
//         if(!tracker[ele]){
//             tracker[ele] = 1
//         }else{
//             tracker[ele]++;
//         }
//     })
//     for(let key in tracker){
//         if(tracker[key]>1){
//             duplicates.push(key);
//         }
//     }
//     console.log(tracker)
//     console.log(duplicates)
// }
// duplicates(arr)


// function Property(obj,property){

//     const result = {};

//   obj.forEach((val)=>{
//     const key = val[property];
//     if(!result[key]){
//         result[key]=[];
//     }
//     result[key].push(val)
//   })
//   return result;
// }

// const arr = [
//     {name:'naveen',age:29,color:'red'},
//     {name:'B',age:29,color:'red'},
//     {name:'C',age:29,color:'red'},
//     {name:'D',age:29,color:'Black'},
//     {name:'F',age:29,color:'Black'}
// ]

// const value = Property(arr,'color');
// console.log(value)

// const obj = {a:1,b:2,c:3};
// const mapper = {a:'beta',b:'ceta',c:'delta'}

// function keyMap(obj,keyMap){

//     let result = {};

//     Object.keys(obj).forEach((key)=>{

//       const newKey = keyMap[key] || key;

//       result[newKey] = obj[key];
//     })
//    console.log(result)
// }
// keyMap(obj,mapper)

// avg 
// const numbers = [10,20,30,40,50];


// function arr(number){
//     const sum = number.reduce((acc,cur)=>{
//        const sum =  acc += cur;
//        return sum;
//     },0)
//     const avg = sum / number.length;
//     console.log(avg)
// }
// arr(numbers);

// const numbers = [1,2,3,4,5,6,7];

// let even = 0;
// let odd = 0;

// function find(number){
//     for(let i=0;i<number.length;i++){
//         if(number[i] % 2 == 0){
//             even+=number[i];
           
//         }else{
//             odd+=number[i];
//         }
//     } 
//     console.log(even);
//     console.log(odd)
// }
// find(numbers);

// const arr = [
//     ['model','Bmw-2'],
//     ['color','Red'],
//     ['year','2022']
// ]

// function pair(arr){
//     const result = arr.reduce((acc,pair)=>{
//         const [key,value] = pair;
//         acc[key] = value;
//         return acc;
//     },{})
//     console.log(result)
// }
// pair(arr)


// const arr = ['a','b','c','a','c','d'];

// function unique(arr){

//     const result = arr.reduce((acc,cur)=>{
//         if(!acc[cur]){
//             acc[cur]=1;
//         }else{
//             acc[cur]++;
//         }
//         return acc;
//     },{})

//     const nonRepat = Object.keys(result).filter((key)=>  result[key] === 1);
//     console.log(nonRepat)
    
// }
// unique(arr);

// let arr = [1,2,4,3,3,3,3,3];

// function mostRepetedVal(arr){

//     let frequency = {};
//     let mostFrequency;

//     arr.forEach((ele)=>{
       
//         if(!frequency[ele]){
//             frequency[ele] = 1;
          
//         }else{
//             frequency[ele]++;
//             console.log(frequency[ele])
//         }
//         if(!mostFrequency || frequency[ele] > frequency[mostFrequency]){
//             mostFrequency = ele;
//         }
//     })
   
//     console.log(mostFrequency)
// }
// mostRepetedVal(arr)

// const num =[1,2,3,4,5,6,7,8,9];
// const target = 10;

// function find(num,target){
//      let result = [];

//     let left = 0;
//     let right = num.length - 1;


//     while(left < right){
//         const sum = num[left] + num[right]

//         if(sum === target){
//             result.push(num[left],num[right]);
//             left++;
//             right--;
//         }else if(sum < target){
//             left++;
//         }else{
//             right--;
//         }
//     }
//     console.log(result);
// }
// find(num,target)


// @input 7


// function factorial(n){

//     let result = 1;

//     for(let i=1;i<=n;i++){
//         result *= i;
        
//     }
//     return result;
// }
// console.log(factorial(5))


// const array = [1,2,[3,[4,5,[6]],7],8];

// function flatArray(array){
//     let result = [];
//     array.forEach((item)=>{
//         if(Array.isArray(item)){
//             const flat = flatArray(item);
//             console.log(flat,'flat')
//             result = [...result,...flat]
//             console.log(result,'spread')
//         }else{
//             result.push(item);
//         }
//     });
//     return result;
// }
// console.log(flatArray(array))


// function findLargest(number){

//     let max = -Infinity;

//     number.forEach((item)=>{
//         if(Array.isArray(item)){
//             const flat = findLargest(item);
//             max = Math.max(max,flat)
//         }else{
//             max = Math.max(max,item)
//         }
        
//     })
//     return max;
// }
// console.log(findLargest(array))

// const num = [1,2,3,4];

// function reduce(num,cb){

//     const result = num.reduce((item,val)=>{
//          const cbrs = cb(val)
//          item.push(cbrs);
//          return item;
//     },[])
//     return result;
// }
// function square(num){
//     return num * num;
// }
// console.log(reduce(num,square));


// remove adjecent duplicates

// function removeDuplicate(str){
//     if(str.length <= 1){
//         return str;
//     }
//     let res = str[0];

//     for(let i=1;i<str.length;i++){

//         console.log(str[i],'str')
//         if(str[i] !== str[i-1]){
//             res += str[i]
//         }
//     }
//     return res;
// }

// const str = 'aaaababcccbb';
// console.log(removeDuplicate(str))

// given number is armstrong number 

// function armStrong(n){

//    let sum = 0;
//    let numStr = n.toString();
//    let numDigits = numStr.length;
    
//     for(let i=0;i<numDigits;i++){
//         sum += Math.pow(parseInt(numStr[i]),numDigits);
//     }
//     return sum === n;
// }
// console.log(armStrong(123))

// longest string 'abcabcab'

// function longestString(str){
//     let start = 0;
//     let maxLength = 0;
//     console.log(maxLength,'max-length-1')
//     let charIndexMap = {};
//     console.log(charIndexMap,'2')

//     for(let i=0;i<str.length;i++){
//         const char = str[i];
//         console.log(char,'char-0')
//         if(charIndexMap[char] !== undefined && charIndexMap[char] >= start){
//             console.log(charIndexMap[char],'char-value-3');
//             start = charIndexMap[char] + 1;
//             console.log(start,'start-4')
//         }
//         charIndexMap[char]=i;
//         console.log(charIndexMap[char],'find-5')
//         maxLength = Math.max(maxLength,i-start + 1);
//         console.log(maxLength,'max-6') 
//     }
   
// }
// longestString('abcabcab');

// function longestWordPrefix(words){

//     if(words.length  === 0 ) return '';

//     words.sort();

//     let firstWord =words[0];
//     let lastWord = words[words.length - 1];

//     for(let i=0;i<firstWord.length;i++){

//         if(firstWord[i] !== lastWord[i]){
//             return firstWord.substring(0,i);
//         }
//     }
//     return firstWord;
// }

// const words = ['flight','fly','flow','flower']

// console.log(longestWordPrefix(words));



// function moveZerosFront(arr){
//     let zeroIndex = 0;

//     for(let i = 0; i < arr.length ; i++ ){
//         if(arr[i] === 0){
//             let temp = arr[zeroIndex];
//             arr[zeroIndex] = arr[i];
//             arr[i] = temp;
//             zeroIndex++;
//         }
//     }
   
// }
// let array = [1,2,-1,0,1,0];
// moveZerosFront(array);
// console.log(array)

// interleave two strings 

// input a12b1c3;

// 1.inital empty string a set pannaum 
// 2.loop pananum text;
// 3.condition check pananum number 
// splice pananum

// const string1 = 'abc';
// const string2 = '1234';


// function interLeave(str1,str2){

//     let result = '';

//     let maxLength = Math.max(str1.length,str2.length);
//     console.log(maxLength);

//     for(let i = 0 ; i < maxLength ; i++){
//         if(i < str1.length){
//             result += str1[i];
//         }
//         if(i < str2.length){
//             result += str2[i];
//         }
//     }
//     console.log(result)
// }
// interLeave(string1,string2)


// const input = [7,4,3,1,5,6];

// function maxProfit(input){
//     let minPrice = Infinity;
//     let max = 0;

//     for(let price of input){
//         if(price < minPrice){
//             minPrice = price;
//         }
//         else if(price-minPrice >max){
//             max = price - minPrice;
//         }
//     }
//     return max;
// }
// console.log(maxProfit(input));

// const fruits = ['banana','orange','apple'];

// const list = fruits.entries();

// function val(){
//     let text = '';

//     for(let x of list){
//         text += x + '<br/>';
//     }
//     document.getElementById('demo').innerHTML = text ;
// }
// val();

// const obj = {
//     foo:'bar',
//     navi:'navi',
//     age:25
// }

// for(let key of Object.entries(obj)){
//     console.log(key)
//     if(key == Object.entries('foo')){
//         console.log(false)
//     }else{
//         console.log(true)
//     }
// }

// let text = 'abchsdido'

// let result = Array.from(text);
// console.log(result)

// const arr = [1,2,3,4];

// for(let i = 0 ; i < arr.length ; i++){
//     arr[i] = arr[i] + i;
// }
// console.log(arr)

// const A = [1, 2, 3];
// const B = [4, 5];

// function samole(){
//     let result = A.shift();
//     B.push(result);
//     console.log(B)

//     let singlArray = A.concat(B);
//    console.log(singlArray)
// }
// samole()

// const arr = [10,2,4,7,14,5,20];

// function sort(arr){
//     let result = arr.sort((a,b)=>{
//         return a - b;
//     })
//     console.log(result);
// }
// sort(arr)

// const Object_Stud = {0: 20, 1: 40, 2: 30};

// // Subjects in the same order as the marks
// const subjects = ["Maths", "Physics", "Chemistry"];
// let higestValue  = '';
// let high = -1



// ;
// for (let key in Object_Stud){   
//     console.log(key,'key')
//     if(Object_Stud[key] > high){
//         high = Object_Stud[key];
//         console.log(high,'2')
//         higestValue = subjects[key];
//         console.log(higestValue,'3')
//     }

// }
// console.log(higestValue)

// const arr = [1,2,3,8,2,8];
// console.log(arr.length)

// let index = arr.lastIndexOf(2);

// console.log(index);
// function duplictaes(arr){
//     let duplicate = {};
//     let result = [];

//     arr.forEach((item)=>{
//         if(duplicate[item]){
//             duplicate[item] ++;
//         }else{
//             duplicate[item] = 1;
//         }
//     })

//     for(let key in duplicate){
//         if(duplicate[key] > 1){
//             result.push(key);
//     }
   
//     }
//     return result;
// }
// console.log(duplictaes(arr));


// const result = arr.filter((ele,index,arr)=>{
//     return arr.indexOf(ele) !== index;
// },[])
// console.log(result)


// const arr = [2,87,655,27,89,1];

// function max(arr){
//     let min= arr[0];

//     for(let i=0;i < arr.length;i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(max(arr))


// function secondLargest(arr){

//     let max = arr[0] ;
//     let secondLargest = 0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] > max){
//             secondLargest = max;
//             console.log(secondLargest,'secondLargest');
//             max = arr[i];
//             console.log(max,'max')
//         }else if(arr[i] > secondLargest && arr[i] !== max){
//             secondLargest = arr[i];
//             console.log(secondLargest,'final')
//         }
//     }
// }
// secondLargest(arr)


// const empArr = [
//     {name:'naveen',age:'20'},
//     {name:'raja',age:'23'},
//     {name:'Ibhu',age:'18'},
// ]

// const result = empArr.filter((item) => item.age <= 20);
// console.log(result)  // {name:'raja',age:'23'}  // {name\

// const arr = [1,2,4,5,8,10]

// function missingArray(){
//     let result = [];

//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     for(let i=min;i<=max;i++){
//         if(!arr.includes(i)){
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(missingArray(arr))

// prime number 

// function primeNumber(n){
//     if(n <= 1){
//         return 1;
//     }
//     for(let i=2;i<n;i++){
//         if(n % i === 0){
//             console.log(`${n} it is a prime number`)
//         }else{
//             console.log(`${n} it is not a prime number`)
//         }
//     }
//     return 1;
// }
// primeNumber(7);

// let text = 'naveen';

// function vowles(text){

//     let result = 'aeiouAEIOU';

//     for(let i=0;i<text.length;i++){
//         if(result.includes(text[i])){
//             console.log(text[i])
//             }
//         }

//     }
//     vowles(text);;


// const arr1 = [1,2,3,4,5];
// const arr2 = [4,1];

// const result = [...arr1,...arr2];

// const uniqueElement = [...new Set(result)];
// console.log(uniqueElement)

// window.addEventListener('load',()=>{
//     const preloader = document.querySelector('.image-bg');
//     preloader.classList.add('hide');
// })

// const app = () =>{

//     const song = document.querySelector('.song');
//     const play = document.querySelector('.play');
//     const outline = document.querySelector('.moving-outline circle');
//     const video = document.querySelector('.vid-container video')
//     const timeSelect = document.querySelectorAll('.time-select button');
//     const sounds = document.querySelectorAll('.sound-picker button');
//     const timeDisplay = document.querySelector('.time-display');

//     const outlineLength = outline.getTotalLength();
//    //duration

//    let fakeDuration = 120;

//    outline.style.strokeDasharray = outlineLength;
//    outline.style.strokeDashoffset = outlineLength;

// //   song change

//     sounds.forEach(sound =>{
//         sound.addEventListener('click',function () {
//             song.src = this.getAttribute('data-sound');
//             video.src = this.getAttribute('data-video');
//             checkPlaying(song);
//         })
//     })

//    play.addEventListener('click',()=>{
//         checkPlaying(song)
//    });

//    timeSelect.forEach((option)=>{
//         option.addEventListener('click',function(){
//             fakeDuration = this.getAttribute("data-time");
//             timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
//         })
//    })

//    const checkPlaying = song =>{
//         if(song.paused){
//             song.play();
//             video.play();
//             play.src = './assets/svg/pause.svg';
//         }else{
//             song.pause();
//             video.pause();
//             play.src = './assets/svg/play.svg'
//         }
//    };
//    song.ontimeupdate = () =>{
//     let currentTime = song.currentTime;
//     let elapsed = fakeDuration - currentTime;
//     let seconds = Math.floor(elapsed % 60);
//     let minutes = Math.floor(elapsed / 60);

//     // let animate the progress bar

//     let progressBar = outlineLength - (currentTime / fakeDuration) * outlineLength;
//     outline.style.strokeDashoffset = progressBar;

//     // let display the time

//     timeDisplay.textContent = `${minutes} : ${seconds}`;

//     if(currentTime >= fakeDuration){
//         song.pause();
//         song.currentTime = 0;
//         video.pause();
//         play.src = './assets/svg/play.svg';
//     }
    
//    }

// }

// app();



// function evenNumber(){
//     let numbers = [1,2,3,4,5,6,7,8];
//     let evenNumbers = numbers.filter((num) => num % 2 == 1);
//     console.log(evenNumbers);
// }
// evenNumber();


// let x  = [1,2,4,5];

// let y = x;

// y.push(6);
// console.log(x);
// console.log(y);  



// function alternateReverseOrder(arr){

//     let oddNumbers = arr.filter((item)=> item % 2 !== 0).reverse();
//     console.log(oddNumbers)
//     let evenNumbers  = arr.filter((item)=>item % 2 === 0).reverse();
//     console.log(evenNumbers)

//     let result = [];

//     for (let i = 0; i < oddNumbers.length; i++) {
//         result.push(oddNumbers[i]); // Add odd number
//         result.push(evenNumbers[i]); // Add even number
//     }
//    return result;
// }


// let arr = [1,2,3,4,5,6,7,8];
// let final = alternateReverseOrder(arr);
// console.log(final)

// function customAlternateOddEven(arr) {
//     // Separate odd and even numbers
//     const oddNumbers = arr.filter(num => num % 2 !== 0).reverse();
//     const evenNumbers = arr.filter(num => num % 2 === 0).reverse();
//     console.log
//     let result = [];
    
//     // Alternate odd and even numbers
//     for (let i = 0; i < oddNumbers.length; i++) {
//         result.push(oddNumbers[i]); // Add odd number
//         if (i < evenNumbers.length) {
//             result.push(evenNumbers[i]); // Add even number
//         }
//     }
    
//     return result;
// }

// const A = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = customAlternateOddEven(A);
// console.log(result);


// let text = "hello";

// for(let i = text.length - 1; i >= 0 ; i--){
   
//     console.log(text[i])
// }


// let arr = [1,2,3,4];
// let arr2 = [1,2,5,6,7];

// let result = arr2.concat(...arr);

// const repetedVal = result.filter((item,index,arr)=>{
//      return arr.indexOf(item) !== index;
// })
// console.log(repetedVal);

// let arr = [1,2,3,4];
// let index = arr.indexOf();
// console.log(index);


// pattern programe


// function pattern(n){
//     for(let i=1;i<=n;i++){
//         let str = '*';
//         let space = ' '
//         console.log(space.repeat(n-i) + str.repeat(i * 2 - 1))
//     }
//     for(let j=i-1;j<=n;j--){
//         let str = '*';
//         let space = ' '
//         console.log(space.repeat(n-i) + str.repeat(j * 2 - 1))
//     }
// }
// pattern(5)

// let n = 5; 
// for (let i = 1; i <= n; i++) { 
//     let str = ''
//     for(let j = 1; j <= n ; ++j){ 
//         if(i+j==1+n||j==n) 
//         str+='* '; 
//         else
//         str+='  '; 
//     }   
//     console.log(str); 
// } 
// for (let i = n-1; i >= 1; i--) {     
//   let str = ''
//     for(let j = 1; j <= n ; ++j){ 
//         if(i+j==n+1||j==n) 
//         str+='* '; 
//         else
//         str+='  '; 
//     } 
//     console.log(str); 
// }




// this.name = "oracle";

// let website = {
//     name:'naveen',
//     age:20,
//     getName:function(){
//        return this.name
//     }
// }

// const value = website.getName();
// console.log(value)


// var reterive = website.getName;
// console.log(reterive())

// var final = reterive.bind(website);
// console.log(final())


// let geeks1 = {
//     name:'naveen',
//     age:20,
// }
// let geeks2= {
//     name:'kumar',
//     age:30,
// }
// let geeks3={
//     name:'vijayan',
//     age:40,
// }

// function printAll(){
//     console.log(this.name + " and the age is " + this.age);
// }

// let print1 = printAll.bind(geeks1);
// console.log(print1())


// let print2 = printAll.bind(geeks2);
// console.log(print2())



// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   console.log(person);
//   var person1 = {
//     firstName: "John",
//     lastName: "Doe"
//   }
//   console.log(person1)
  
//   var person2 = {
//     firstName: "Mary",
//     lastName: "Anne"
//   }
//   console.log(person2)
  
//   fn = person.fullName.bind(person2);
  
//   console.log(fn.call(person1, ["Oslo", "Norway"]));

//   var obj = {
//     objType: "Dog"
// }

// f = function(did_what, what) {
//     alert(this.objType + " " + did_what + " " + what);
// }

// f.call(obj, "ate", "food");


// function x() {
//     return this;
// }

// var obj = {
//     myName      : 'Robert',
//     myLocation  : 'Earth'
// }

// console.log(x.call(obj));

// emp={id:102,name:"Shyam Kumar",salary:40000}  
// document.write(emp.id+" "+emp.name+" "+emp.salary);  



// selectors 

// const todoInput = document.querySelector('.todo-input');
// const todoButton = document.querySelector('.todo-button');
// const todoList = document.querySelector('.todo-list');
// const select = document.querySelector('.filter-todo')


// // eventListeners
// todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteCheck);
// select.addEventListener('click',filterTodo)


// // function

// function addTodo(event){

//     event.preventDefault();

//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');

//     const newTodo = document.createElement('li');
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);

//     const checkButton = document.createElement('button');
//     checkButton.innerHTML = '<i class="fas fa-check"></i>';
//     checkButton.classList.add('complete-btn');
//     todoDiv.appendChild(checkButton);

//     const trashButton = document.createElement('button');
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add('trash-btn');
//     todoDiv.appendChild(trashButton);

//     todoList.appendChild(todoDiv);

//     todoInput.value = ''
// }

// function deleteCheck(e){
//     const item = e.target;
//     if(item.classList[0] === 'trash-btn'){
//        const todo = item.parentElement;
// // adding animation 
//        todo.classList.add('fall');

//        todo.addEventListener('transitionend',function(){
//         todo.remove();
//        })
     
//     }
//     if(item.classList[0] === 'complete-btn'){
//         const todo = item.parentElement;
//         todo.classList.toggle('completed');
//     }
// }

// function filterTodo(e){
//     const todos = Array.from(todoList.childNodes).filter(todo => todo.nodeType === 1);
//     console.log(todos);
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                   break;
//                   case "completed":
//                     if(todo.classList.contains("completed")){
//                         todo.style.display = "flex";
//                         }else{
//                             todo.style.display = "none";
//                             }
//                             break;
//                         }
//                     })
//                 }


// function tag(strings,...values){f
//     console.log(strings,'str');
//     console.log(values)
//     return strings[0] + values[0].toUpperCase() + strings[1];
// }
// let person = 'Bob'
// console.log(tag`Hello ${person}!`);
