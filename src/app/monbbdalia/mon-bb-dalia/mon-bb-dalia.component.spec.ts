import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonBbDaliaComponent } from './mon-bb-dalia.component';

describe('MonBbDaliaComponent', () => {
  let component: MonBbDaliaComponent;
  let fixture: ComponentFixture<MonBbDaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonBbDaliaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonBbDaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
