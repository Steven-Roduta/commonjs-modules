const fullName =
{ firstName: 'Steven' ,
  lastName: 'Roduta'}

function sum(firstName, lastName){
    return firstName + lastName
    
}


module.exports = {fullName , sum , hobbies , things}

const hobbies = 
{hobbyOne: 'karaoke',
 hobbyTwo:'hiking',
 hobbyThree:'cooking'}

function things(hobbyOne, hobbyTwo , hobbyThree){
    return hobbyOne + hobbyTwo + hobbyThree
}
