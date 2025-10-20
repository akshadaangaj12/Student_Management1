import React from 'react'
import { coursesData, productsData, studentsData,  } from '../data/MockData';
import { Avatar, Button, Card, Col, List, Progress, Row, Statistic, Tag } from 'antd';
import{ ContactsOutlined, UserOutlined } from '@ant-design/icons';
import { STATUS_COLORS } from '../utils/Constant';


export default function DashboradScreen() {

    const activeStudents = studentsData.filter(s => s.status === 'active').length;
    const BeginnerStudents = coursesData.filter(s => s.level === 'Beginner').length;
    console.log("Beginner",BeginnerStudents);
    const StatusCoures = coursesData.filter(co => co.status=== 'draft').length;
    console.log(StatusCoures,"draft");
  const averageProgress = Math.round(
    studentsData.reduce((acc, s) => acc + s.progress, 0) / studentsData.length
  );

  // 1. filter ->Get only avialabel products( stock >0)
  // filter use for find or search a data
  const availableproducts =productsData.filter(p => p.stock > 0);
  console.log("Available Product:", availableproducts);

  //2. Map -> Get only names of products
//map use for new array from and change or modify the array

  const productName =productsData.map((p) => {
    return p.name
  });
  console.log("Product Names:",productName)

  //filter find a product with price >10000
  const findPriceGreaterThan10000 = productsData.filter((product) =>{
    return product.price >10000;
  });
  console.log("findPriceGreaterThan10000",findPriceGreaterThan10000);

   // find a product which have a category Electronics
  const findcategory = productsData.filter((product) =>{
    return product.category ==="Electronics";
  });
  console.log("findcategory",findcategory);
  
   // find a product which have a category Clothing
  const category = productsData.filter((product) =>{
    return product.category ==="Clothing";
  });
  console.log("category",category);

  //find a product which have a product price <2000
  const findPriceLessThan2000 = productsData.filter((product) =>{
    return product.price <2000;
  });
  console.log("findPriceLessThan2000",findPriceLessThan2000);

  //find product have product name as book
  const NameAsBook = productsData.filter((product) =>{
      return product.name === "Book";
  });
  console.log("NameAsBook",NameAsBook);

  //find a product with stock which is between 10 to 40
  const productsInStockRange = productsData.filter(product => {
  return product.stock >= 10 && product.stock <= 40;
});

console.log(productsInStockRange);

//find a product which has id as 3
const findid = productsData.filter((pr) => {
  return pr.id ===3;
})
console.log("findid",findid);

//find a even number an array
const number = [1,2,3,4,5,6,7,8,9,10];
const findnumber = number.filter((num) => {
 return num%2===0;
});
console.log("findnumber",findnumber);

//find a odd num
const num =number.filter((n) => {
return n%2!==0;
});
console.log("num",num);

//multiply by 2 using map function
const numb = number.map((num)=> {
  console.log("numb",num);

return num*2;
});
console.log("numb",numb);

const nameArray = ["akshata","samruddhi","naina","dipali","vaishanavi"];
//convert each name into Upper case
const namArray = nameArray.map((array)=> {
return array.toUpperCase();
});
console.log("namArray",namArray);

//convert name into lower case
const nameAr = nameArray.map((array)=> {
return array.toLowerCase();
});
console.log("nameAr",nameAr);

//to make of aaray inside name make 1st letter as capital
const namearr = nameArray.map((n) => {
return n.charAt(0).toUpperCase() +n.slice(1).toLowerCase();
});
console.log("namearr",namearr);

const ObjectName =[
{ id: 1,
name: "Samu",  
category: "hindu-maratha"
},
{ id: 2, 
name: "naina",  
category: "hindu-maratha" 
}, 
{ id: 3,
name: "dipa",  
category: "hindu-maratha"
}, 
{ id: 4, 
name: "akshata",  
category: "hindu-maratha" },
{ id: 5, 
name: "vaisa",  
category: "hindu-maratha"}
];

const id = ObjectName.map((d)=>{
  return d.id;
})
console.log("id",id);

const Data = ObjectName.map((data)=>{
  return Object.keys(data); //it is in build method 

});
console.log ("Data",Data);



// Number Array 

// - Given an array of numbers [1, 2, 3, 4, 5], use .map() to square each number.
          const arraynumber= [1, 2, 3, 4, 5];
          
          const squareNumber=arraynumber.map((num)=>{
          return num*num;
        });
      console.log("number",squareNumber);

// - Given [5, 10, 15, 20], use .map() to subtract 2 from every number.
            const SubsractNumber=[5,10,16,25];
            const subtract=SubsractNumber.map((num)=>{
            return num-2;
        });
      console.log("sub",subtract);

// - Given[10, 20, 30], use .map() to convert each number into a string (like '10', '20', '30').

    const stringNumber=[10, 20, 30];
    const string = stringNumber.map(num => {
      return num.toString();
    });
    console.log("string",string);


// - Given [100, 200, 300], use .map() to divide each number by 10.
      const divideNumber= [100, 200, 300];
      const divide=divideNumber.map(num => {
        return num/10;
      });
          console.log("Devide",divide);

// - Given [2, 4, 6, 8], use .map() to return half of each number.

const halfNumber=[2, 4, 6, 8];
const half=halfNumber.map(num => {
  return num/2;
});
  console.log("half",half);



// String Array 

// - Given ['apple', 'banana', 'cherry'], use .map() to convert all words to uppercase.

const fruits = ['apple', 'banana', 'cherry'];
const stringToUppercase = fruits.map((fru) =>{ 
  return fru.toUpperCase()
});
console.log("all fruits convert to uppercase",stringToUppercase); 

// - Given ['rohan', 'neha', 'nisha'], use .map() to capitalize the first letter only (e.g., 'Rohan').

const studentnames= ['rohan', 'neha', 'nisha'];
const capitalOfFirstLetter=studentnames.map(name => {
  return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
});
console.log("capital of first letter of string ", capitalOfFirstLetter); 

// - Given ['cat', 'dog', 'fish'], use .map() to add the word “animal” after each element (e.g., 'cat animal').

const animal = ['cat', 'dog', 'fish']
const animalName = animal.map(animal => { 
  return animal + 'animal';
});
console.log(" animal after each element",animalName); 


// - Given ['red', 'green', 'blue'], use .map() to prefix each string with Color:
// #56473 this way color code 
const colors =['red','green','blue'];

const colorCodes ={
  red:'#ff0000',
  green:'#00ff00',
  blue:'#0000ff'
};

const resultOfColorCodes =colors.map(c => `${c}: ${colorCodes[c]}`);
console.log("color with color code :", resultOfColorCodes);


// - Given ['sneha@gmail.com', 'pallavi@yahoo.com'], use .map() to extract the domain name (like 'gmail.com', 'yahoo.com').
//spilt use for sperate the string value

const emails =  ['sneha@gmail.com', 'pallavi@yahoo.com'];
const resultOfDomain = emails.map(e => e.split('@')[1]);

console.log("show Domain name from email : " , resultOfDomain);

const email =  ['sneha@gmail.com', 'pallavi@yahoo.com'];
const resultOfDomainName = email.map(e => e.split('@')[0]);

console.log("show Domain name from email : " , resultOfDomainName);



// - Given
// [{name:'Rohan', age:20}, {name:'Pallavi', age:22}]
// use .map() to return only the names.

const people = [
  {name:'Rohan', age:20},
   {name:'Pallavi', age:22}
  ];
  // dot . 

  // console.log(people)
const names = people.map(person =>{
return person.name;
});
console.log("names",names); 

// - Given
// [{price:100}, {price:200}, {price:300}]
// use .map() to add ₹10 to each price.

const prices = 
[{price:100}, 
  {price:200}, 
  {price:300}];
const updatedPrices = prices.map(item => {
return item.price+10;
});
console.log("add ₹10 to each price",updatedPrices); 


// - Given
// [{city:'Delhi'}, {city:'Pune'}, {city:'Mumbai'}]
// use .map() to append “City” to each city name.
//1
const cities = 
[{city:'Delhi'}, 
{city:'Pune'}, 
{city:'Mumbai'}];
const updatedCities = cities.map(item => {
return item.city + "city";
});
console.log("append City to each city name",updatedCities); 

//2.
const data =
[{city:'Delhi'}, 
{city:'Pune'}, 
{city:'Mumbai'}];

const addCitySuffix = data.map(item => `${item.city}city`);
console.log("Add city as text to every city :",addCitySuffix);
// - Given
// [{id:1, score:50}, {id:2, score:75}]
// use .map() to increase each score by 10 points.

const scores =
[{id:1, score:50},
  {id:2, score:75}];
const updatedScores = scores.map(item => {
  return item.score+10;
});
console.log("updatedScores",updatedScores); 

// - Given
// [{first:'Pallavi', last:'Shintre'}, {first:'Rohan', last:'Shintre'}]
// use .map() to combine first and last name into a single full name (e.g., 'Pallavi Shintre').

const namess = 
[{first:'Pallavi', last:'Shintre'},
  {first:'Rohan', last:'Shintre'}];
const fullNames = namess.map(person => {
  return person.first+person.last;
});
console.log("fullNames",fullNames);

//For Each
//iteration , modification
const arrayNumber =[1,2,3,4,5,6];
const arrayNew = []
arrayNumber.forEach((a)=>{
arrayNew.push(a*2);
});
  console.log ("multiply by 2",arrayNew);
  



// - Print only uppercase names using forEach()
//   const names = ["rohan", "pallavi", "suchit"];
const names1 = ["rohan", "pallavi", "suchit"];
const newNames= []
newNames.forEach((a)=>{
a.toUpperCase();
console.log("uppercase names using forEach",names1);
});

// map() 

// - Convert each student name to uppercase using map()
//   const students = ["rohan", "pallavi", "suchit"];

 const students = ["rohan", "pallavi", "suchit"];
 const uppercase = students.map((u)=>{
  return u.toUpperCase();
 });
 console.log("each student name uppercase",uppercase);


// - Add 5 bonus marks to each student’s score
//   const marks = [75, 80, 92, 60];

const marks = [75, 80, 92, 60];
const mark = marks.map((m) => {
return m+5;
});
console.log("Add 5 bonus marks to each student's score",mark);

// - Extract student names from array of objects
//   const data = [
//     { name: "Rohan", age: 20 },
//     { name: "Pallavi", age: 21 }
//   ];
    const data1 = [
      { name: "Rohan", age: 20 },
      { name: "Pallavi", age: 21 }
    ];
    const name = data1.map((n)=>{
      return n.name;
    })
    console.log("Extract student names",name);



// - Convert numbers into strings with “marks: ” prefix
//   const scores = [10, 20, 30];
const score = [10, 20, 30];
const string1 = score.map((s)=> {
return 'marks'+s;
});
console.log("numbers into strings with “marks:",string1);

// - Return array of students’ roll numbers multiplied by 10
//   const rollNos = [1, 2, 3, 4];

const rollNos = [1, 2, 3, 4];
const multiply = rollNos.map((r)=> {
return r*10;
});
console.log("roll numbers multiplied by 10:",multiply);

// filter() 

// - Find students who scored above 80
//   const marks = [70, 85, 90, 60, 95];

const marks1 = [70, 85, 90, 60, 95];
const scored = marks1.filter((a) => {
return a>=80;
});
console.log("scored above 80",scored);

// - Filter out students whose status is "inactive"
//   const students = [
//    { name: "Rohan", status: "active" },
//    { name: "Pallavi", status: "inactive" }
//   ];

 const students1 = [
    { name: "Rohan", status: "active" },
    { name: "Pallavi", status: "inactive" }
  ];
  const status =students1.filter((s)=>{
    return s.status === "inactive";
  })
  console.log("students whose status is inactive:",status);


// - Get all even roll numbers
//   const rollNos = [1, 2, 3, 4, 5];
const rollNos1 = [1, 2, 3, 4, 5];
const evenNo= rollNos1.filter((e)=>{
return e%2===0;
});
console.log("all even roll numbers",evenNo);


// - Filter names starting with “S”
//   const names = ["Samir", "Rohan", "Suchit", "Pallavi"];

const studentnames1 = ["Samir", "Rohan", "Suchit", "Pallavi"];
const starting = studentnames1.filter((n)=>{
return n.startsWith("S");
});
console.log("names starting with S",starting);

// - Filter all students older than 18 years
// const data = [
//   { name: "Rohan", age: 17 },
//   { name: "Pallavi", age: 19 }
// ];

const data4 = [
  { name: "Rohan", age: 17 },
  { name: "Pallavi", age: 19 }
];
const age = data4.filter((a)=>{
return a.age>=18;
});
console.log("all students older than 18 years",age);


// Home Work :
// Questions:

// - Print each student’s name from this array using forEach()
//   const students = ["Rohan", "Pallavi", "Suchit", "Samir"];
const students12=["Rohan", "Pallavi", "Suchit", "Samir"];
students12.forEach(e => {
 
});
 console.log("Print each student’s name",students12);


// - Using forEach(), print "Roll No X: StudentName" for each student from
//   const students = [{id: 1, name: "Rohan"}, {id: 2, name: "Pallavi"}];
const studentsRollno = [{id: 1, name: "Rohan"}, {id: 2, name: "Pallavi"}];
studentsRollno.forEach( rollno =>{

});
console.log("print rollno and student name",studentsRollno)

// - Add all numbers from this array using forEach()
//   const marks = [10, 20, 30, 40];
const marks3 = [10, 20, 30, 40];
marks3.forEach( m =>{

});

// - Create an array of objects and use forEach() to print —
// “<name> scored <marks> marks.”

  



  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1 style={{ margin: 0, color: '#1890ff' }}>Dashboard Overview</h1>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Welcome back! Here's what's happening with your students.
        </div>
      </div>
      
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Total Students"
              value={studentsData.length}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Active Students"
              value={activeStudents}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Average Progress"
              value={averageProgress}
              suffix="%"
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Total Courses"
              value={4}
              valueStyle={{ color: '#eb2f96' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Card 
            title="Recent Students" 
            extra={<Button type="link">View All</Button>}
            className="dashboard-card"
          >
            <List
              itemLayout="horizontal"
              dataSource={studentsData.slice(0, 4)}
              renderItem={student => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={student.name}
                    description={`${student.course}- ${student.progress}% complete`}/>
                  <Tag color={STATUS_COLORS[student.status]}>
                    {student.status.toUpperCase()}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Progress Overview" className="dashboard-card">
            {studentsData.slice(0, 5).map(student => (
              <div key={student.id} style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '8px' 
                }}>
                  <span style={{ fontWeight: '500' }}>{student.name}</span>
                  <span style={{ color: '#666' }}>{student.progress}%</span>
                </div>
                <Progress 
                  percent={student.progress} 
                  showInfo={false}
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
</div>
);
  
}
