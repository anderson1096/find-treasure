let getRandomNumber =  (size) => {
   rand = Math.random() * size;
   return Math.floor(rand);
}

let getDistance = (e, target) => {
   let diffX = e.offsetX - target.x;
   let diffY = e.offsetY - target.y;
   return Math.sqrt(diffX ** 2 + diffY ** 2);
}

let getDistanceHint = (distance) => {
   if (distance < 30){
      return "Hirviendo"
   }else if(distance < 40){
      return "Muy Caliente"
   }else if(distance < 60){
      return "Cálido"
   }else if(distance < 100){
      return "Tibio"
   }else if(distance < 120){
      return "Templado";
   }else if(distance < 160){
      return "Frío";
   }else if(distance < 240){
      return "Muy frío";
   }else{
      return "Congelado"
   }
}

   
