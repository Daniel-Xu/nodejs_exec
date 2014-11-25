

// helper function 
function generateEmailName(){

    var email = makeid(8) + "@gmail.com"
    return email
}

function generatePassword() {
    return makeid(7)

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

var casper = require('casper').create()
var email = generateEmailName()
//var password = generatePassword()

var firstname = makeStr(5)
var lastname = makeStr(5)
var refer = "danielx"

console.log('email is: ', email)
console.log('firstname is: ', firstname)
console.log('lastname is: ', lastname)

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
        'input#txtInviteCode': "danielx" 
    })
})

casper.then(function() {
    
    if(this.exists('input[type="submit"]')){
        this.echo('submit exist')
    }

    this.click('input[type="submit"]');
});

casper.waitForUrl('https://www.parkingpanda.com/credits', function() {
    this.echo("right address")

    //this.capture("picture.png")
    
    this.click("a#lnkFindParking")
    
})

//spend money 
casper.waitForText("Find and Reserve Parking", function(){
    
    if(this.exists('form[action="./"]')) {
        this.echo("search form exists")
    }
    if(this.exists('input#txtSearch')) {
        this.echo("search input box exists")
    }

    //fill the bootstrap autobox
    this.sendKeys('form[action="./"] input#txtSearch', '990 21st St NW, Washington, DC, United States', {keepFocus: false});
    this.click('input[type="submit"]');


    this.waitForText("Duration", function() {
       this.echo("process for the first searching... ")
       this.fillSelectors("form#parkingpanda", {
            'select#ddlSearchStartTime': 1700,
            'select#ddlSearchEndTime':   2000
       })

       this.click('input[type="submit"]')

       //search 5:00-8:00 to get the $5 parking
       this.waitForText("$5.00", function(){
           this.echo("Congratulations, there's 5 dollars parking slot")

           this.click("div#idLocation540>a")

           this.waitForText("Reservation Details", function() {
               this.echo('reservation details')
               this.click('input[type="submit"]')

               // finished pay the reservation
               this.waitForText("Give $5 Get $5", function() {
                   this.capture('picture.png')
                   this.echo("pay successfully").exit()
               }, function(){
                   this.capture("err.png")
                   this.echo("cannot pay for the reservation").exit()
               },100000)

           }, function(){
               this.capture("err.png")
               this.echo("cannot access the pay button").exit()
           
           }, 50000)

       }, function(){
            this.echo("cannot set the start time and end time for $5")
       }, 50000)
    }, function(){
        this.capture("err.png")
        this.echo("search failed, no duration").exit()
    }, 50000)

})





//run
casper.run(function(){

})
