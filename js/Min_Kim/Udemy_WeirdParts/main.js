/**
 * Created by Min on 2015-12-22.
 */

//console.log("Init");
//console.log(c);





//var a = 0;
//b();
//
//function b() {
//    console.log(c);
//    var c = 10;
//}
//
//
//
//
//
//function waitThreeSeconds() {
//    var ms = 3000 + new Date().getTime();
//    while (new Date() < ms){}
//    console.log('finished function');
//}
//
//function clickHandler() {
//    console.log('click event!');
//}
//
//document.addEventListener('click', clickHandler);
//
//waitThreeSeconds();
//console.log('finished execution');

//var a = 3 + 4;
//console.log(a);
//
//
//function log(a) {
//    a();
//}
//
//function b() {
//    console.log('hi');
//}
//
//log(b);

//var c = { greeting: 'hi' };
//var d;
//
//d = c;
//
//d.greeting = 'hello';
//console.log(c);


//var c = {
//    name: 'The c object',
//    log: function() {
//        this.name = 'Undated c object'; // 'this' belongs to the object. Not a global any more.
//        console.log(this);
//
//        var setname = function(newname) {
//            this.name = newname;
//        }
//        setname('Updated again! The c object');
//        console.log(this);
//
//    }
//}
//
//c.log();

//var d = {
//    name: 'd',
//    log: function() {
//        this.name = 'updated d';
//        console.log(this);
//
//        var e = function() {
//            this.name="e";
//            console.log(this);
//        }
//
//        e();
//
//    }
//}
//
//d.log();

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");