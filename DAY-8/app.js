console.log(team);

var team ="age"

const obj = {

    name :"burak",
    "sur name":"yılmaz",
    yas:33,
    hobi:["reading","biking","hiking"],
    isMarried:true,
    getFullName : function(){ return `${obj.name} and ${obj["sur name"]}`}

}
console.log(obj.name)
console.log(obj["sur name"])
console.log(obj.getFullName())
obj.name ="ahmet"
console.log(obj.name);
obj.hobi.push("okuma")
console.log(obj.hobi)
obj.order ="new"
// console.log(obj)
console.log(obj.hobi.splice(0,3))
console.log(obj.hobi)

const user = Object.assign({},obj)
const user1 ={...obj}
user.name ="ali"
console.log(obj.name)
console.log(Object.entries(user1)[Object.entries(user1).length-1][0]);
console.log(obj.hasOwnProperty("nome"))

Object.freeze(obj)
Object.seal(obj)
