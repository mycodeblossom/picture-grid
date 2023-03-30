import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DeviceDetectorService } from 'ngx-device-detector';

import { PictureGridComponent } from './picture-grid.component';
import { PictureComponent } from '../picture/picture.component';


describe('PictureGridComponent', () => {
  let component: PictureGridComponent;
  let fixture: ComponentFixture<PictureGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureGridComponent, PictureComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers:[DeviceDetectorService]
    })
      .compileComponents();
  }));

  beforeEach(
    () => {
    fixture = TestBed.createComponent(PictureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
