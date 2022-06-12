import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuViewComponent } from './menu-view.component';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { AuthService } from '../../services/http.service';

describe('MenuViewComponent', () => {
  let component: MenuViewComponent;
  let fixture: ComponentFixture<MenuViewComponent>;
  // let service: AuthService;
  // let httpMock: HttpTestingController;
  // let httpClient: HttpClient

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
      declarations: [ MenuViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // service = TestBed.inject(AuthService)
  // httpMock = TestBed.get(HttpTestingController);
  // httpClient = TestBed.inject(HttpClient);

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
