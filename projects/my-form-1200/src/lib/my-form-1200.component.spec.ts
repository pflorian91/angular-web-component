import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForm1200Component } from './my-form-1200.component';

describe('MyForm1200Component', () => {
  let component: MyForm1200Component;
  let fixture: ComponentFixture<MyForm1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyForm1200Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyForm1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
