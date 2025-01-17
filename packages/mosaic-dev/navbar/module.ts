import { Component, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McDropdownModule } from '@ptsecurity/mosaic/dropdown';
import { McLinkModule } from '@ptsecurity/mosaic/link';

import { McIconModule } from '../../mosaic/icon';
import { McNavbarModule, McNavbar, McNavbarItem } from '../../mosaic/navbar';


@Component({
    selector: 'app',
    templateUrl: './template.html',
    styleUrls: ['../main.scss', './styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarDemoComponent {

    @ViewChild('verticalNavbar', {static: false}) navbar: McNavbar;

    readonly minNavbarWidth: number = 940;

    get collapsedNavbarWidth(): number {
        return this._collapsedNavbarWidth;
    }

    set collapsedNavbarWidth(value: number) {
        if (value < this.minNavbarWidth) { return; }

        this._collapsedNavbarWidth = value;
    }

    private _collapsedNavbarWidth: number = 1280;

    collapsedNavbarWidthChange() {
        this.navbar.updateCollapsed();
    }

    onItemClick(event: MouseEvent, disabledItem?: McNavbarItem) {
        if (disabledItem?.disabled) { return; }

        alert(`innerText: ${(<HTMLElement> event.target).innerText}`);
    }
}


@NgModule({
    declarations: [NavbarDemoComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        McNavbarModule,
        McIconModule,
        McButtonModule,
        FormsModule,
        McDropdownModule,
        McLinkModule
    ],
    bootstrap: [NavbarDemoComponent]
})
export class DemoModule {}
