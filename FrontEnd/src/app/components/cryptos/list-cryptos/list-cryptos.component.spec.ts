import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCryptosComponent } from './list-cryptos.component';

describe('ListCryptosComponent', () => {
  let component: ListCryptosComponent;
  let fixture: ComponentFixture<ListCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCryptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
