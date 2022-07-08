
var city = {
   name:"Pune",
   pin:412345,
   state:null,
   country:"IND",
};

// data update operation
city.pin = 454545;
city.state = "Maharashtra";

// adding new key & value
city.gov = "SG"

// delete operation
delete city.pin;

//view way
console.log(city.name);
console.log(city);

