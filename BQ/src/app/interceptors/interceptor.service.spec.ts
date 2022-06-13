// import { TestBed, getTestBed } from '@angular/core/testing';
// import { InterceptorService } from './interceptor.service';
// import { AuthService } from '../services/http.service';
// import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import { HTTP_INTERCEPTORS } from '@angular/common/http'


// describe('InterceptorService', () => {
//   let service: AuthService;
//   let injector: TestBed;
//   let httpMock: HttpTestingController;
//   const API_URL = 'http://localhost:8080';

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientTestingModule],
//       providers: [
//         AuthService, {
//           provide: HTTP_INTERCEPTORS,
//           useClass: InterceptorService,
//           multi: true,
//         }
//       ]
//     })
//   });

//   injector = getTestBed()

//   httpMock = injector.get(HttpTestingController)

//   afterEach(()=>{
//     httpMock.verify();
//   })

//   it('should add headers', () => {
//     // service.login('grace.hopper@systers.xyz', '123456');
//     expect(service.login('grace.hopper@systers.xyz', '123456')).toBeTruthy();
//   });
// });
