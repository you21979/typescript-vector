/**
 *  ベクトルライブラリ
 */
export interface IVec3{
    x:number;
    y:number;
    z:number;
}
export module Vec3{
    export class Vec implements IVec3{
        constructor(
            public x:number,
            public y:number,
            public z:number
        ){}
        public clone():Vec{
            return createVector(this);
        }
        public distance():number{
            return distance(this);
        }
        public normalize():IVec3{
            return normalize(this);
        }
        public cross(v:IVec3):IVec3{
            return cross(this, v);
        }
        public add(v1:IVec3):void{
            var w:IVec3 = additional(this,v1);
            this.x = w.x;
            this.y = w.y;
            this.z = w.z;
        }
        public sub(v1:IVec3):void{
            var w:IVec3 = subtract(this,v1);
            this.x = w.x;
            this.y = w.y;
            this.z = w.z;
        }
    }
    /**
     *  新規にvec3を作成する
     */
    export function createVector(v1:IVec3):Vec{
        return new Vec(v1.x,v1.y,v1.z);
    }
    /**
     *  ベクトルの複製を作る
     */
    export function clone(v1:IVec3):IVec3{
        return {
            x : v1.x,
            y : v1.y,
            z : v1.z
        };
    }
    /**
     *  足し算
     */
    export function additional(v1:IVec3,v2:IVec3):IVec3{
        return {
            x : v1.x + v2.x,
            y : v1.y + v2.y,
            z : v1.z + v2.z
        };
    }
    /**
     *  引き算
     */
    export function subtract(v1:IVec3,v2:IVec3):IVec3{
        return {
            x : v1.x - v2.x,
            y : v1.y - v2.y,
            z : v1.z - v2.z
        };
    }
    /**
     *  掛け算
     */
    export function multiplication(v1:IVec3,v2:IVec3):IVec3{
        return {
            x:v1.x * v2.x,
            y:v1.y * v2.y,
            z:v1.z * v2.z
        };
    }
    /**
     *  割算
     */
    export function division(v1:IVec3,v2:IVec3):IVec3{
        return {
            x:v1.x / v2.x,
            y:v1.y / v2.y,
            z:v1.z / v2.z
        };
    }
    /**
     *  掛け算
     */
    export function muls(v1:IVec3,s:number):IVec3{
        return {
            x:v1.x * s,
            y:v1.y * s,
            z:v1.z * s
        };
    }
    /**
     *  割算
     */
    export function divs(v1:IVec3,s:number):IVec3{
        return {
            x:v1.x / s,
            y:v1.y / s,
            z:v1.z / s
        };
    }
    /**
     *  角度を求める
     */
    export function dot(v1:IVec3,v2:IVec3):number{
        return  v1.x * v2.x +
                v1.y * v2.y +
                v1.z * v2.z;
    }
    /**
     *  法線ベクトルを求める
     */
    export function cross(v1:IVec3,v2:IVec3):IVec3{
        return {
            x : v1.y * v2.z - v1.z * v2.y,
            y : v1.z * v2.x - v1.z * v2.z,
            z : v1.x * v2.y - v1.z * v2.x
        };
    }
    /**
     *  距離を求める
     */
    export function distance(v1:IVec3):number{
        return Math.sqrt(_distance(v1));
    }
    /**
     *  距離を求める(ルート無し)
     */
    export function _distance(v1:IVec3):number{
        return ( v1.x * v1.x + v1.y * v1.y + v1.z + v1.z );
    }
    /**
     *  向きを求める
     */
    export function normalize(v1:IVec3):IVec3{
        var d:number = distance(v1);
        return {
            x : v1.x / d,
            y : v1.y / d,
            z : v1.z / d
        };
    }
}
