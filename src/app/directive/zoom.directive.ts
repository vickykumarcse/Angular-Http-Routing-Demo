import { Directive, HostListener, Renderer2 } from "@angular/core";
import { ElementRef } from "@angular/core";
import { HostBinding } from "@angular/core";


@Directive({
    'selector': '[zoomHover]'
})
export class ZoomDirective{

    constructor(private el:ElementRef, private renderer:Renderer2){
        this.el = el.nativeElement;
    }

    @HostBinding('style.color') color = "black";

    @HostListener('mouseenter') onmouseenter(){
        this.renderer.setStyle(this.el, 'fontSize', '20px');
        this.renderer.setStyle(this.el, 'color', 'green');
    }

    @HostListener('mouseleave') onmouseleave(){
        this.renderer.setStyle(this.el, 'fontSize', '16px');   
        this.renderer.setStyle(this.el, 'color', 'black');
    }
}