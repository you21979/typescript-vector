import vector3 = module("../vector3");
var v3 = vector3.Vec3;
var v:vector3.IVec3 = v3.createVector({
    x:1.111,
    y:3.333,
    z:2.222,
});
var s = v3.distance(v);
console.log(v);
console.log(s);
