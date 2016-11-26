import Leonardo from "../../../public/images/leonardo.png"
import Michaelangelo from "../../../public/images/michaelangelo.png"
import Donatello from "../../../public/images/donatello.png"
import Raphael from "../../../public/images/raphael.png"

export default function() {
  return [
    {
      id: 1,
      name: "leonardo",
      aka: "leo",
      age: "eternally < 20",
      image: Leonardo,
      description: "leonardo is the cool, courageous leader of the ninja turtles and a devoted student of ninjutsu, usually wearing a blue mask and wielding two katanas. leader in blue." 
    },
    {
  	  id: 2,
      name: "michaelangelo",
      aka: "mickey",
      age: "eternally < 20",
      image: Michaelangelo,
      description: "michelangelo is the most comical of the ninja turtles, usually wearing an orange mask and wielding a pair of nunchucks."
    },
    {
  	  id: 3,
      name: "donatello",
      aka: "donnie",
      age: "eternally < 20",
      image: Donatello,
      description: "donatello is the scientist, inventor, engineer and technological genius of the ninja turtles, usually wearing a purple mask and wielding a bo-staff."
     },
     {
      id: 4,
      name: "raphael",
      aka: "raph",
      age: "eternally < 20",
      image: Raphael,
      description: "raphael is the bad boy of the ninja turtles, wearing a red mask and wielding a pair of sais."
     }
  ]
};