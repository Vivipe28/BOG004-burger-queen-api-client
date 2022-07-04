import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a title', () =>{
  //   expect(component.title).toBe('Producto')
  // })

  it('should say Producto', () => {
    const span = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(span.innerHTML).toBe('Producto');
  })

  it('should call alert', () => {
    spyOn(window, "alert");

    let buttonElement = fixture.debugElement.query(By.css('.delete'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    expect(window.alert).toHaveBeenCalledWith("Estas seguro de eliminar la orden?")
  })
});
