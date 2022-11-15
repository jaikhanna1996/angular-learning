import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructrulDirectiveComponent } from './structrul-directive.component';

describe('StructrulDirectiveComponent', () => {
  let component: StructrulDirectiveComponent;
  let fixture: ComponentFixture<StructrulDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructrulDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructrulDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
