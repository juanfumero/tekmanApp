import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstructionsComponent } from './dialog-instructions.component';

describe('DialogInstructionsComponent', () => {
  let component: DialogInstructionsComponent;
  let fixture: ComponentFixture<DialogInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
