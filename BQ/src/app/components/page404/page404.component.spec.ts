import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { Page404Component } from './page404.component';

describe('Page404Component', () => {
    let component: Page404Component;
    let fixture: ComponentFixture<Page404Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
            declarations: [Page404Component]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Page404Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
