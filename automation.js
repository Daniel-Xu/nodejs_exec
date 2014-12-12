
// helper function 
function generateEmailName(){
    
    var name = ['Allison', 'Arthur', 'Ana', 'Alex', 'Arlene', 'Alberto', 'Barry', 'Bertha', 'Bill', 'Bonnie', 'Bret', 'Beryl', 'Chantal', 'Cristobal', 'Claudette', 'Charley', 'Cindy', 'Chris', 'Dean', 'Dolly', 'Danny', 'Danielle', 'Dennis', 'Debby', 'Erin', 'Edouard', 'Erika', 'Earl', 'Emily', 'Ernesto', 'Felix', 'Fay', 'Fabian', 'Frances', 'Franklin', 'Florence', 'Gabielle', 'Gustav', 'Grace', 'Gaston', 'Gert', 'Gordon', 'Humberto', 'Hanna', 'Henri', 'Hermine', 'Harvey', 'Helene', 'Iris', 'Isidore', 'Isabel', 'Ivan', 'Irene', 'Isaac', 'Jerry', 'Josephine', 'Juan', 'Jeanne', 'Jose', 'Joyce', 'Karen', 'Kyle', 'Kate', 'Karl', 'Katrina', 'Kirk', 'Lorenzo', 'Lili', 'Larry', 'Lisa', 'Lee', 'Leslie', 'Michelle', 'Marco', 'Mindy', 'Maria', 'Michael', 'Noel', 'Nana', 'Nicholas', 'Nicole', 'Nate', 'Nadine', 'Olga', 'Omar', 'Odette', 'Otto', 'Ophelia', 'Oscar', 'Pablo', 'Paloma', 'Peter', 'Paula', 'Philippe', 'Patty', 'Rebekah', 'Rene', 'Rose', 'Richard', 'Rita', 'Rafael', 'Sebastien', 'Sally', 'Sam', 'Shary', 'Stan', 'Sandy', 'Tanya', 'Teddy', 'Teresa', 'Tomas', 'Tammy', 'Tony', 'Van', 'Vicky', 'Victor', 'Virginie', 'Vince', 'Valerie', 'Wendy', 'Wilfred', 'Wanda', 'Walter', 'Wilma', 'William', 'Kumiko', 'Aki', 'Miharu', 'Chiaki', 'Michiyo', 'Itoe', 'Nanaho', 'Reina', 'Emi', 'Yumi', 'Ayumi', 'Kaori', 'Sayuri', 'Rie', 'Miyuki', 'Hitomi', 'Naoko', 'Miwa', 'Etsuko', 'Akane', 'Kazuko', 'Miyako', 'Youko', 'Sachiko', 'Mieko', 'Toshie', 'Junko']

    var index = Math.floor(Math.random()*name.length)

    var mail = ["@gmail.com", "@qq.com", "@163.com", "@yahoo.com"]
    var mailIndex = Math.floor(Math.random()*mail.length)
    
    return name[index] + makeid(3) + mail[mailIndex]
}

function makeid(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makeStr(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function makeFirstname() {

    var index = Math.floor(Math.random()*name.length)
    return name[index]
}

function makeLastname(){

    var index = Math.floor(Math.random()*name.length)
    return name[index]
}

var casper = require('casper').create()
var email = generateEmailName()
//var password = generatePassword()

var firstname = makeStr(5)
var lastname = makeStr(5)
var refer = "xiaolian"

console.log('email is: ', email)
console.log('firstname is: ', firstname)
console.log('lastname is: ', lastname)






//start to navigate

casper.start("https://www.parkingpanda.com/signup", function(){
    if(! this.exists('input#txtEmail') || !this.exists('input#txtFirstName') || !this.exists('input#txtLastName') ||
      !this.exists('input#txtPhone') || !this.exists('input#txtPassword') || !this.exists('input#txtInviteCode') || 
      !this.exists('form[action="signup"]')){
        this.exit()
    }else {
        this.echo('form is valid for submitting')
    }

    this.fillSelectors('form[action="signup"]', {
        'input#txtEmail': email,
        'input#txtFirstName' : firstname,
        'input#txtLastName' : lastname,  
        'input#txtPhone': "2023789876", 
        'input#txtPassword': "meiyoumima1", 
        'input#txtInviteCode': "xiaolian" 
    })
})

casper.then(function() {
    
    if(this.exists('input[type="submit"]')){
        this.echo('submit exist')
    }

    this.click('input[type="submit"]');
});

//submit form and jump to credits page
casper.waitForUrl('https://www.parkingpanda.com/credits', function() {
    this.echo("right address")
    //this.capture("picture.png")
    this.click("a#lnkFindParking")
}, function onErr(){
    this.capture("err.png")
    this.echo("jumping to credits page fails").exit()
}, 10000)


//fill in search box 
casper.waitForText("Find and Reserve Parking", function(){
    
    if(this.exists('form[action="./"]')) {
        this.echo("search form exists")
    }
    if(this.exists('input#txtSearch')) {
        this.echo("search input box exists")
    }

    //fill the bootstrap autobox
    //this.sendKeys('form[action="./"] input#txtSearch', '990 21st St NW, Washington, DC, United States', {keepFocus: false});
    this.sendKeys('form[action="./"] input#txtSearch', '1101 15th st nw', {keepFocus: false});
    this.click('input[type="submit"]');
}, function onErr(){
    this.capture("err.png")
    this.echo("jumping to find parking page fails").exit()
}, 10000)

//search for low price parking
casper.waitForText("Duration", function() {
       this.echo("process for the first searching... ")
       this.fillSelectors("form#parkingpanda", {
            'select#ddlSearchStartTime': 1700,
            'select#ddlSearchEndTime':   2000
       })
       this.click('input[type="submit"]')

       //search 5:00-8:00 to get the $5 parking
      
}, function(){
    this.capture("err.png")
    this.echo("search failed, no valid duration").exit()
}, 10000)

//go to low price parking detail page 
casper.waitForText("$4.00", function(){
    this.echo("Congratulations, there's 4 dollars parking slot")

    //this.click("div#idLocation540>a")
    this.click("div#idLocation1763>a")

}, function(){
    this.capture("err.png")
    this.echo("can not find low price parking! ")
    this.exit()
}, 10000)

//fill in car type and start to pay
casper.waitForText("Reservation Details", function() {
    this.echo('reservation details')
    this.fillSelectors("form#parkingpanda", {
        'input#txtVehicleInformation': "cc honton",
    })

    this.click('input[type="submit"]')

}, function(){
    this.capture("err.png")
    this.echo("cannot access the pay button").exit()
}, 10000)

// finished pay the reservation
casper.waitForText("Give $5 Get $5", function() {
    this.capture('picture.png')
    this.echo("pay successfully").exit()
}, function(){
    this.capture("err.png")
    this.echo("cannot pay for the reservation").exit()
},10000)


//run
casper.run(function(){

})
