import Leonardo from "../../../public/images/leonardo.jpeg"
import Michaelangelo from "../../../public/images/michaelangelo.jpeg"
import Donatello from "../../../public/images/donatello.jpeg"
import Raphael from "../../../public/images/raphael.jpeg"

export default function() {
  return [
    {
      id: 1,
      name: "Leonardo",
      aka: "Leo",
      age: 17,
      image: Leonardo,
      description: "Leonardo is the cool, courageous leader of the Ninja Turtles and a devoted student of Ninjutsu, usually wearing a blue mask and wielding two katanas. Leader in blue." 
    },
    {
  	  id: 2,
      name: "Michaelangelo",
      aka: "Mickey",
      age: 17,
      image: Michaelangelo,
      description: "Michelangelo is the most comical of the Ninja Turtles, usually wearing an orange mask and wielding a pair of nunchucks."
    },
    {
  	  id: 3,
      name: "Donatello",
      aka: "Donnie",
      age: 16,
      image: Donatello,
      description: "Donatello is the scientist, inventor, engineer and technological genius of the Ninja Turtles, usually wearing a purple mask and wielding a bo-staff."
     },
     {
      id: 4,
      name: "Raphael",
      aka: "Raph",
      age: 18,
      image: Raphael,
      description: "Raphael is the bad boy of the Ninja Turtles, wearing a red mask and wielding a pair of sais."
     }
  ]
};