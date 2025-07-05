import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mfe-order-nx-welcome',
    imports: [CommonModule],
    template: `
        <h1>Hello orders app</h1>
    `,
    styles: [],
    encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
