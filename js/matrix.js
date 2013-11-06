/*
 * HTML5 Canvas Matrix Digital Rain
 * Copyright (c) 2013 Koroshiya
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

    function digiRain() {

        var rainheight = 14;
        var freq = 0.5;
        var speed = 80;

        var digirain = document.getElementById("DigiRain");
        digirain.width = window.innerWidth;
        digirain.height = window.innerHeight;
        var width = digirain.width;
        var height = digirain.height;
        var context = digirain.getContext("2d");
        context.font = "bold 12px verdana,sans-serif";
        //context

        var GLOBAL_DIV_ARRAY = new Array(width);
        var j = -1;
        var i;
        while(++j <= width){
            i = -1;
            GLOBAL_DIV_ARRAY[j] = new Array(height);
            var glob_row = GLOBAL_DIV_ARRAY[j];
            while(++i <= height){
                glob_row[i] = String.fromCharCode(12448 + Math.random() * 96);
            }
        }

        var rainDrops = [];

        this.makeItRain = function() {
            digirain.width = digirain.width;
            if (Math.random() < freq) {
                var c = Math.floor(Math.random() * width);
                var droplet = new digiRainDroplet(c, rainheight, height, GLOBAL_DIV_ARRAY, context);
                rainDrops.push(droplet);
            }
            var rainTemp = [];
            var drop;
            var i = -1;
            while(++i < rainDrops.length){
                drop = rainDrops[i];
                if(!drop.fall()){rainTemp.push(drop);}
            }
            rainDrops = rainTemp;

        };

        setInterval(this.makeItRain, speed);

    };

// Raindrop class
function digiRainDroplet(col, rh, windowheight, GLOBAL_DIV_ARRAY, context) {
    
    var rainheight = Math.floor(Math.random() * rh) + 10;
    var dead = false;
    var row = -1;
    var rSpeed = 7 + Math.random() * 14;

    this.fall = function() {
            row++;
            var glob_row = GLOBAL_DIV_ARRAY[col];
            if (row < windowheight){
                context.fillStyle = '#DAFFDA';
                context.fillText(glob_row[row], col, row*rSpeed);
                context.fillStyle = '#0F0';
                var i = 0;
                while(++i < rainheight && row >= i){
                    context.fillStyle = "rgba(0, 255, 0, " + (1.0 - (i / 10)) + ")";
                    context.fillText(glob_row[row-i], col, ((row-i)*rSpeed));
                }
                
            }
            if ((row - rainheight) >= 0) {
                if ((row - rainheight) > windowheight) {
                    dead = true;
                }
            }
        return dead;
    };
}

digiRain();
