 for (var key in keysDown) {
     var value = Number(key);
     if (value == 37) { //left arrow
         this.paddle.move(-4, 0);
     }
     if (value == 39) { //right arrow
         this.paddle.move(4, 0);
     };
