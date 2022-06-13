import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './http.service';

describe('AuthService test', () => {
    let service : AuthService;
    let httpMock : HttpTestingController;
   
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), MatSnackBarModule]
        });
        
        service = TestBed.inject(AuthService)
        httpMock = TestBed.inject(HttpTestingController)
    });

    afterEach(() => {
        httpMock.verify();
    })


    it('Should be created', () => {
        expect(service).toBeTruthy();
    })

    it('Should make a login HTTP request', () =>{
        const responseObject = {accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhaXRlci5ob3BwZXJAc3lzdGVycy54eXoiLCJpYXQiOjE2NTUxNDk4NDgsImV4cCI6MTY1NTE1MzQ0OCwic3ViIjoiMyJ9.KsWP2pJlBKQjt7SgI4yP2dCeaash1WlMejUDHHkqtDc",
        user:{ 
        email: "waiter.hopper@systers.xyz",
        id: 3,
        roles: {waiter: true}}}

        service.login('waiter.hopper@systers.xyz','123456').subscribe((res)=>{
            expect(res).toBe(responseObject)
        })

        const req = httpMock.expectOne('http://localhost:8080/login')

        req.flush(responseObject)
    })
})