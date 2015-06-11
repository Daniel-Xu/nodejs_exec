function getAttendees(peopleInvited, responses){
  return peopleInvited.filter(function(ele) {

    var result = true;
    for(var i = 0; i < responses.length; ++i) {
      if(responses[i].name === ele && responses[i].response === 'declined') {
        result = false;
        break;
      }
    }
    return result;
  })

}


var people = ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman',
              'Jack Frost', 'Cupid', 'Father Time'];
var responses = [
     {name: 'Easter Bunny', response: 'declined'},
     {name: 'Jack Frost', response: 'declined'},
     {name: 'Tooth Fairy', response: 'accepted'}
   ];
var attend = getAttendees(people, responses);
console.log(attend)
