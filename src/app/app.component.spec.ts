import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PictureGridComponent } from './components/picture-grid/picture-grid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PictureComponent } from './components/picture/picture.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        PictureGridComponent,
        PictureComponent
      ],
      providers:[DeviceDetectorService]
    }).compileComponents();
  }));

  it('should create the app', 
  () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Picture Grid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Picture Grid');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('picture-grid-ds app is running!');
  // });
});
