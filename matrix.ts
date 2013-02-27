/**
 *  行列ライブラリ
 */
export interface IMtx{
    mtx:number[];
}
export var MTX_COL:number = 4;
export var MTX_ROW:number = 4;
export module Mtx{
    export class Mtx implements IMtx{
        public mtx:number[];
        constructor(){
            this.mtx = new Array(MTX_COL * MTX_ROW);
            var len:number = this.mtx.length;
            for(var i=0; i<len; ++i){
                this.mtx[i] = 0;
            }
        }
    }
}
