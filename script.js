let car1 = {};

let car2 ={
    imgUrl: './imgas.car1',
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    color: 'silver',
    features: ['bluetooth', 'backup camera', 'leather seats']
}
car1.imgUrl= './*images/car1';
car.make = 'Jeep';
car.model ='Wrangle';
car.year = '2020';
car.color = 'black';
car.features = ['bluetooth', 'backup camera', 'leather seat', 'heated seats']

let myarr = ['apple', 'banana']

let car1ImgUrl = document.quertySelector( '#car1 .imgUrl1');
let car1Make = document.querySelector('#car1 .make');
let car1Model1 = document.querySelector('#car1 .model');
let car1Year = document.querySelector('#car1 .year');
let car1Color = document.querySelector('#car1 .color');
let car1Features = document.querySelector('#car1 .features');

car1ImgUrl.quertySelector('img').setAttribute('src', car1.imgUrl);
car1ImgUrl.quertySelector('img').setAttribute('style', 'width: 200px');

car1Make.innerHTML = car1.make;
car1Model.innerHTML = car1.model;
car1Year.innerHTML = car1.year;
car1Color.innerHTML = car1.color;
car1Features.innerHTML = car1.features;

let table = document.getElementsByTagName('table')[0];
table.style.borderCollapse = 'collapse';
//table.setAttribute('style', 'border-collapse');


let car2Make = document.querySelector('#car2 .make');
let car2Model1 = document.querySelector('#car2 .model');
let car2Year = document.querySelector('#car2 .year');
let car2Color = document.querySelector('#car2 .color');
let car2Features = document.querySelector('#car2 .features');

car2Make.innerHTML = car2.make;
car2Model.innerHTML = car2.model;
car2Year.innerHTML = car2.year;
car2Color.innerHTML = car2.color;
car2Features.innerHTML = car2.features;

let table = document.getElementsByTagName('table')[0];