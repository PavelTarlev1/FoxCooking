import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesCreateComponent } from './recepies-create.component';

describe('RecepiesCreateComponent', () => {
  let component: RecepiesCreateComponent;
  let fixture: ComponentFixture<RecepiesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepiesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
