import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Picture } from 'src/app/model/picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent implements OnInit {

  @Input() picture: Picture;
  @Input() isMobileDevice: boolean;

  shouldLoad: boolean = false;
  imageURL: string;
  showDarkTitle: boolean;
  imageTitle: string;

  private urlProperty:string = 'url';

  constructor() { }

  ngOnInit() {
    if (this.isMobileDevice) {
      this.urlProperty = 'thumbnailUrl'
    }
    if (this.picture) {
      this.imageURL = this.picture[this.urlProperty];
      if (this.picture.isLight) {
        this.showDarkTitle = true;
      } else {
        this.showDarkTitle = false;
      }
      this.imageTitle = this.picture.title;
      this.shouldLoad = true;
    }
  }

}
