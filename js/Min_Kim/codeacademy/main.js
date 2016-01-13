/**
 * Created by Min on 2015-12-28.
 */
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"



var friends = {};

friends.bill = {
    firstName:"Bill",
    lastName:"Gates",
    number: "1111111",
    address: ['one', 'two']
};
friends.steve = {
    firstName:"Steve",
    lastName:"Jobs",
    number: "12323",
    address: ['one', 'two']

};

function list(object) {

    for(var key in object) {
        console.log(key);

    }

}
