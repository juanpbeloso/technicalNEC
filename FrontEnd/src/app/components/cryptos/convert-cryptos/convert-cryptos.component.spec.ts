import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertCryptosComponent } from './convert-cryptos.component';

describe('ConvertCryptosComponent', () => {
  let component: ConvertCryptosComponent;
  let fixture: ComponentFixture<ConvertCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertCryptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
