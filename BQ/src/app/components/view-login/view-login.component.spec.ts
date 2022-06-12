import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewLoginComponent } from './view-login.component';
import { AuthService } from '../../services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { of } from 'rxjs';

describe('ViewLoginComponent', () => {
  let component: ViewLoginComponent;
  let fixture: ComponentFixture<ViewLoginComponent>;
  let service: AuthService
  let httpClientSpy: {post: jasmine.Spy};
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoginComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), MatSnackBarModule], 
      providers: [AuthService]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    // const mockSnackbarMock = jasmine.createSpyObj(['open']);
    // service = new AuthService(httpClientSpy as any, routerSpy as any, mockSnackbarMock as any )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should returns a invalid form', () => {
    component.loginForm.controls['email'].setValue('cami@gmail.com')
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('should returns a valid form', () => {
    component.loginForm.controls['email'].setValue('cami@gmail.com')
    component.loginForm.controls['password'].setValue('1234466')
    expect(component.loginForm.invalid).toBeFalse();
  });

  it('created a form with username and password input and login button', () => {
    // const fixture = TestBed.createComponent(LoginComponent);
    const usernameContainer = fixture.debugElement.nativeElement.querySelector('#email');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#password');
    const loginBtnContainer = fixture.debugElement.nativeElement.querySelector('#login');
    expect(usernameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(loginBtnContainer).toBeDefined();
  });

  // it('loginService login() should called', (done:DoneFn) => {
  //   // component.loginForm.controls['email'].setValue('cami@gmail.com')
  //   // component.loginForm.controls['password'].setValue('1234466')
  //   const mockUserCredentials = {
  //     email: 'grace.hopper@systers.xyz',
  //     password: '123456'
  // }

  // const mockResultLogin = {
  //   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY1NDk4NDMzNywiZXhwIjoxNjU0OTg3OTM3LCJzdWIiOiIyIn0.M5DrxehQT3xOomAyFcFY4ywOTvuXPy4rTRNatoga65I",
  //   "user": {
  //     "email": "grace.hopper@systers.xyz",
  //     "roles": {
  //       "admin": true
  //     },
  //     "id": 2
  //   }
  // }
  //   httpClientSpy.post.and.returnValue(of(mockResultLogin))
  //   const {email, password} = mockUserCredentials;
  //   service.login(email, password)
  //   .subscribe(resultado => {
  //     expect(resultado).toEqual(mockResultLogin)
  //   })
  // })
  //   const button = fixture.debugElement.nativeElement.querySelector('#login');
  //   button.click();
  //   const testData = {email: 'cami@gmail.com', password: '1234466'}
  //   expect(component.login).toEqual(testData)
  //   done();
  // });
})
