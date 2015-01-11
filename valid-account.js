var fs = require('fs');

function getAccountsFrom(filename) {
    var stream = fs.open(filename, 'r');
    var accounts = [];
    while(!stream.atEnd()) {
        var line = stream.readLine();
        accounts.push(line);
    }
    stream.close();

    return accounts;
}


var casper = require('casper').create();


function check(contents){

    //corner case
    if(contents.length === 0){
        casper.echo("All the accounts have been checked").exit();
    }


    //general case
    //casper.start("https://www.parkingpanda.com/login");
    casper.waitForUrl(/login.*/, function(){
        this.echo("success to land login page");

        if(! casper.exists('input#txtEmail') || !casper.exists('input#txtPassword') || !casper.exists('form#form1') ){

            this.echo("err happens");
            casper.exit();
        }else {
            this.echo("form is valid to login");
        }

        casper.fillSelectors('form#form1', {
            'input#txtEmail': contents[0],
            'input#txtPassword': "password", 
        })
        casper.then(function(){
        
            if(this.exists('input[type="submit"]')){
                this.echo('login submit exist')
            }

            this.click('input[type="submit"]');
        })
    })

    
    casper.waitForUrl("https://www.parkingpanda.com/", function(){
        this.echo(contents[0]+ " is valid!\n", "INFO");
    }, function(){
        this.echo(contents[0]+ " has been deleted!!!\n", "ERROR");
    });

    casper.then(function(){

        this.click("a#lnkLogout");

        this.waitForUrl("https://www.parkingpanda.com/", function(){
            this.thenClick("a#lnkLogin");

        });


    })

    casper.then(function(){
        check(contents.slice(1));
    });
    
}

casper.start("https://www.parkingpanda.com/login");
casper.then(function(){
    check(getAccountsFrom("account.txt"));
});


casper.run()

