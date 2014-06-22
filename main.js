var a1 = {
    
    manufacturer: 'Chevy',
    model: 'Spark',
    year: 2014,
    doors: 44,
    engine: 4.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'compact',
    color: 'blue',
    lowsale: 8000,
    highsale: 10000,
    instock: 10,
    ordered: 4
};


var a2 = {
    
    manufacturer: 'Chevy',
    model: 'Sonic',
    year: 2014,
    doors: 2,
    engine: 3.8,
    trans: 'manual',
    fourwd: 'no',
    convertable: 'no',
    size: 'compact',
    color: 'red',
    lowsale: 9000,
    highsale: 11000,
    instock: 9,
    ordered: 3
};


var a3 = {
    
    manufacturer: 'Chevy',
    model: 'Cruize',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'mid',
    color: 'black',
    lowsale: 10000,
    highsale: 12000,
    instock: 7,
    ordered: 5
};


var a4 = {
    
    manufacturer: 'Chevy',
    model: 'Malibu',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'mid',
    color: 'white',
    lowsale: 11000,
    highsale: 13000,
    instock: 57,
    ordered: 5
};


var a5 = {
    
    manufacturer: 'Chevy',
    model: 'Impala',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'large',
    color: 'orange',
    lowsale: 12000,
    highsale: 14000,
    instock: 700,
    ordered: 5
};


var a6 = {
    
    manufacturer: 'Chevy',
    model: 'Volt',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'small',
    color: 'black',
    lowsale: 13000,
    highsale: 15000,
    instock: 17,
    ordered: 1
};


var a7 = {
    
    manufacturer: 'Chevy',
    model: 'Camaro',
    year: 2014,
    doors: 2,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'yes',
    size: 'small',
    color: 'green',
    lowsale: 18000,
    highsale: 20000,
    instock: 7,
    ordered: 35
};


var a8 = {
    
    manufacturer: 'Chevy',
    model: 'Corvette',
    year: 2014,
    doors: 2,
    engine: 8.8,
    trans: 'manual',
    fourwd: 'no',
    convertable: 'yes',
    size: 'small',
    color: 'black',
    lowsale: 110000,
    highsale: 140000,
    instock: 8,
    ordered: 5
};


var a9 = {
    
    manufacturer: 'Chevy',
    model: 'Equinox',
    year: 2014,
    doors: 5,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'large',
    color: 'blue',
    lowsale: 16000,
    highsale: 18000,
    instock: 9,
    ordered: 7
};


var a10 = {
    
    manufacturer: 'Chevy',
    model: 'Traverse',
    year: 2014,
    doors: 5,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'large',
    color: 'silver',
    lowsale: 17000,
    highsale: 19000,
    instock: 11,
    ordered: 5
};


var a11 = {
    
    manufacturer: 'Chevy',
    model: 'Tahoe',
    year: 2014,
    doors: 2,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'no',
    convertable: 'no',
    size: 'large',
    color: 'tan',
    lowsale: 15000,
    highsale: 19000,
    instock: 17,
    ordered: 15
};


var a12 = {
    manufacturer: 'Chevy',
    model: 'Suburban',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'yes',
    convertable: 'no',
    size: 'large',
    color: 'black',
    lowsale: 14000,
    highsale: 21000,
    instock: 1,
    ordered: 0
};


var a13 = {
    manufacturer: 'Chevy',
    model: 'Silverado',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'auto',
    fourwd: 'yes',
    convertable: 'no',
    size: 'mid',
    color: 'white',
    lowsale: 10000,
    highsale: 18000,
    instock: 19,
    ordered: 3
};

var a14 = {
    manufacturer: 'Jeep',
    model: 'Wrangler',
    year: 2014,
    doors: 4,
    engine: 3.8,
    trans: 'manual',
    fourwd: 'yes',
    convertable: 'yes',
    size: 'large',
    color: 'black',
    lowsale: 20000,
    highsale: 38000,
    instock: 15,
    ordered: 3
};

var cars = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14];

// List the model that is priced lowest.
$(function() {
    var lowest_number = cars[0].highsale;
    var lowest_index = 0;
        for (i in cars){
            if(cars[i].highsale < lowest_number){
                lowest_index = i;
            }
        }
    $(".1").append(cars[lowest_index].model)
});


// list the vehicles between 20K & 40K.
$(function() {    
    for (i in cars){
        if (cars[i].highsale <= 40000 && cars[i].highsale >= 20000){
           $(".2").append(cars[i].model)
    }
    }
});
// Find all the car models made by Chevy.
$(function() {  
    for (i in cars){
        if(cars[i].manufacturer === "Chevy"){
            $(".3").append(cars[i].model)
        }
    }
});
// list model of vehicles that need to be ordered when 4 remain.
$(function() {      
    for(i in cars){
        if (cars[i].instock <=4){
            $(".4").append(cars[i].model)
        }
    }
});
// list model of vehicles over-ordered if more than 10 in stock.
$(function() {      
    for (i in cars){
        if (cars[i].instock >=10){
            $(".5").append(cars[i].model)
        }
    }
});
// list all vehicles in stock over 20
$(function() {      
    for (i in cars){
        if (cars[i].instock > 20){
            $(".6").append(cars[i].model)
        }
    }
});
// list vehicles that are convertable.
$(function() {      
    for (i in cars){
        if(cars[i].convertable === "yes"){
            $(".7").append(cars[i].model)
        }
    }
});
// list vehicles that are convertable with 4 dooors.
$(function() {      
    for (i in cars){
        if (cars[i].convertable==="yes" && cars[i].doors ===4){
            $(".8").append(cars[i].model)
        }
    }
});
// list all vehicles in stock over 20 and number in inventory.
$(function() {      
    for(i in cars){
        if (cars[i].instock >20){
            $(".9").append(cars[i].model).append(cars[i].instock)
        }
    }
});

// list all 2 door vehicles
$(function() {      
    for (i in cars){
        if (cars[i].doors === 2){
            $(".10").append(cars[i].model)
        }
    }
});
// list all 2wd & convertable vehicles.
$(function() {  
    for (i in cars){
        if (cars[i].fourwd === "no" && cars[i].convertable === "yes"){
            $(".11").append(cars[i].model)
        }
    }
});
// list all the small and large vehicles.
$(function() {    
    for (i in cars){
        if(cars[i].size === "small" || cars[i].size === "large"){
            $(".12").append(cars[i].model)
        };
    };
});
// list the number of corvettes in stock.
$(function() {      
    for (i in cars){
        if (cars[i].model === "Corvette"){
            $(".13").append(cars[i].model)
        };
    };
});

// list the 4wd vehicles.
$(function() {      
    for (i in cars){
        if (cars[i].fourwd === "yes"){
            $(".14").append(cars[i].model)
        }
    }
});
// list the vehicles under 13k.
$(function() {  
    for (i in cars){
        if (cars[i].lowsale <13000){
            $(".15").append(cars[i].model)
        }
    }
});

// list the vehicles over 30k.
$(function() {  
    for (i in cars){
        if (cars[i].lowsale > 30000){
            $(".16").append(cars[i].model)
        }
    }
});

// List the model that is priced highest.
$(function() {
    var highest_number = cars[i].highsale;
    var highest_index=0;
        for(i in cars){
            if(cars[i].highsale > highest_number){
                highest_index=i;
            }
        }
    $(".17").html(cars[highest_index].model)
});


// List the model that is least stocked.
$(function() {
    var lowest_number = cars[0].instock;
    var lowest_index = 0;
        for (i in cars){
            if(cars[i].instock < lowest_number){
                lowest_index = i;
            }
        }
    $(".18").append(cars[lowest_index].model)
});

// List the model that is most stocked.
$(function() {
    var highest_number = cars[3].instock;
    var highest_index=0;
        for(i in cars){
            if(cars[i].instock > highest_number){
                highest_index=i;
            }
        }
    $(".19").html(cars[highest_index].model).append(cars[highest_index].instock)
});

// List the cars with a manual transmission.
$(function(){
    for (i in cars){
        if (cars[i].trans === "manual"){
            $(".20").append(cars[i].model)
        };
    };
});
