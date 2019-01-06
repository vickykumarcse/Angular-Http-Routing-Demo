import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";


@Pipe({'name':'formatstr'})
export class FormatstrPipe implements PipeTransform{
    transform(str:string){
        return str.length>15?str.substring(0,15)+"...":str;
    }
}