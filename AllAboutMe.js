var firstname ="Drew";
console.log(firstname);



var lastname = "Wellman";
console.log(lastname);



var age =19;
console.log(age); 



var likesTravel =false;
console.log(likesTravel)


var movieArray = ['Planes, Trains, and Automobiles','Casino','Pink Panther']
console.log(movieArray[0])
console.log(movieArray[1])
console.log(movieArray[2])


var williamObject = {
    firstName: "William",
    lastName: "Kimball",
    age: 21,
    hobbies: ["calligraphy", "travel", "banjo"]
  }
  
  console.log(williamObject.hobbies[0])


fullName = `${firstname} ${lastname}`;
console.log(fullName);



var x="2";
console.log(x);



var y="4";
console.log(y);



var total= x+y;
console.log(total);



var tempArray = [85,84,73,90];
console.log(tempArray[1]);



var favorite = "My favorite weather is ";
var favoriteTotal= favorite+tempArray[2];
console.log(favoriteTotal);



tempArray.push(100);
console.log(tempArray[4]);



var months = ['Jan','March','April','June'];
months.splice(1,0,'Feb');
months.splice(4,1,'May');
console.log(months);




console.log('The three movies I put in my array were ${movieArray[0]}')


var leahObject ={
    firstname: "Leah",
    lastname: "Gwin",
    age: 27
}
console.log(leahObject.firstname);
console.log(leahObject.lastname);
console.log(leahObject.age);


alert("you ever just sit in your truck?")


var temperature = ['71'];

var conditions =['cloudy'];

var sunriseTime = ['7:17 AM'];

var sunsetTime = ['7:24 PM'];
console.log(temperature);
console.log(conditions);
console.log(sunriseTime);
console.log(sunsetTime);


var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
console.log(55);
console.log(32);


console.log(highTemperatures[2]);
console.log(lowTemperatures[5]);


var temperature = ['71 Fahrenheit'];
console.log(temperature);
var conditions = ['cloudy'];
console.log(conditions);



var currentWeather = ("It's 71 degrees F and sunny.");
console.log(currentWeather);


var todaysWeather = {
    temperature: {
        high: 71,
        low: 54 
    },
    conditons: "sunny",
    astronomy: {
        sunrise: "7:43 AM",
        sunset: "5:09 PM"
    }
}
console.log(todaysWeather)


var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
   console.log(weatherForecast)

var Saturday = {
    hightemp: 50,
    sunrise: "7:44 AM"
}
console.log(Saturday)

var Sunday ={
    conditions: "chance of rain",
    sunset: "5:07 PM"
}
console.log(Sunday)

var sundayWeather =
    ("The conditions on Sunday will be cloudy with a chance of rain. The high will be 47 degrees Fahrenheit with a low of 35 degrees Fahrenheit. The sun will rise at 7:45 AM and set at 5:07 PM.");

console.log(sundayWeather);

var williamGrades = [62, 97, 99, 85, 73, 97];

function getAvg(williamGrades) {
  const total = williamGrades.reduce((acc, c) => acc + c, 0);
  return total / williamGrades.length;
}

const average = getAvg(williamGrades);
console.log(average);


var tomcruiseObject = {
    firstName: "Tom",
    lastname: "Cruise",
    age: 57, 
    favoriteFood: "pasta",
}
console.log(tomcruiseObject)


var tomsFood = 
 "Tom Cruise's favorite food is pasta."   

console.log(tomsFood)


var time ="hello";

if (time === "morning"){
  console.log("Good morning!");
} else if (time === "afternoon"){
  console.log("Good afternoon!");
} else if (time === "evening"){
  console.log("Good evening!");
} else {
  console.log("Hello!");
}


