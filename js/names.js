const fullName =
{ firstName: 'Steven' ,
  lastName: 'Roduta'}

function person(){
    return {
        nome: 'fullName.firstName',
        cognome: 'fullName.lastName'
    }   
}

const hobbies = 
{hobbyOne: 'karaoke',
 hobbyTwo:'hiking',
 hobbyThree:'cooking'}

function things(hobbyOne, hobbyTwo , hobbyThree){
    return [hobbyOne, hobbyTwo , hobbyThree]
}


module.exports = {fullName , person , hobbies , things}


