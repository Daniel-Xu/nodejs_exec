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
casper.start("https://www.codeschool.com/hall_passes/da8e7029ebda/claim_shared", function(){
    this.echo('Loading hall pass!')
})

casper.waitForText('Free 2-day Trial', function onSuccess(){
    this.click('a[ href="https://www.codeschool.com/hall_passes/e649777cf270/start?create_shared=true" ]')
    this.echo('click active button')

}, function onErr(){
    this.capture("err_codeschool.png")
    this.echo("fail to load hall pass page").exit()
})

casper.waitForText('Create Free Account', function onSuccess(){
    this.fillSelectors('#sign-up-form form', {
        'input#registration_email': email,
        'input#registration_username' : firstname+lastname,
        'input#registration_password' : "meiyoumima",  
    })

    this.click('input[type="submit"]');
}, function onErr(){
    this.capture("err_codeschool.png")
    this.echo("fail to fill form").exit()
})



//run
casper.run(function(){
    this.echo("finished").exit()

})
