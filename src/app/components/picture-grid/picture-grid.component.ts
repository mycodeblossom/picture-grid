import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { DeviceDetectorService } from 'ngx-device-detector';

import { LoaderService } from '../../loader.service';
import { Picture } from '../../model/picture';

@Component({
  selector: 'app-picture-grid',
  templateUrl: './picture-grid.component.html',
  styleUrls: ['./picture-grid.component.scss']
})
export class PictureGridComponent implements OnInit {

  pictureList: Picture[] = [];
  pictureListToDisplay: Picture[] = [];

  loading: boolean = true;
  error: boolean = false;
  hasNextPage = true;

  isMobileDevice;
  searchKey: any;

  private lastPageLoaded = 0;

  constructor(private loader: LoaderService, private deviceService: DeviceDetectorService) {
    this.isMobileDevice = this.deviceService.isMobile();
  }

  ngOnInit() {
    this.loadPictures();
  }

  loadPictures() {
    this.loading = true;
    this.loader
      .getPicturePage(this.lastPageLoaded)
      .pipe(take(1))
      .subscribe(
        data => {
          // alternative solution for sorting the list:
          // this.pictureList = this.pictureList
          //   .concat(data)
          //   .sort((a, b) => a.redValue - b.redValue)
          this.error = false;

          if (data.length === 0) {
            this.hasNextPage = false;
          } else {
            const sortedPictureList = data.sort(this.compareRedValue);
            if (this.pictureList.length === 0) {
              // first load
              this.pictureList = sortedPictureList;
            } else {
              // insert new postion of images in existing list
              let start = 0;
              sortedPictureList.forEach(element => {
                start = this.findIndex(start, this.pictureList, element);
                this.pictureList.splice(start, 0, element);
              });
            }

            this.filterPictureListToDisplay();
            this.lastPageLoaded++;
          }
          this.loading = false;
        },
        error => {
          console.log(error);
          this.loading = false;
          this.error = true;
        });
  }

  searchKeyChanged(newSearchKey) {
    this.searchKey = newSearchKey.target.value;
    this.filterPictureListToDisplay();
  }

  filterPictureListToDisplay() {
    if (this.searchKey && this.searchKey !== '') {
      this.pictureListToDisplay = this.pictureList.filter(picture => picture.title.search(this.searchKey) >= 0);
    } else {
      this.pictureListToDisplay = this.pictureList;
    }
  }

  trackByFn(index, item) {
    return item.url;
  }

  findIndex(start, arr: Picture[], item: Picture) {
    const end = arr.length - 1;
    if (start > end) {
      return end;
    }
    if (
      this.compareRedValue(arr[start], item) > 0
    ) {
      return start;
    }
    return this.findIndex(start + 1, arr, item);
  }

  compareRedValue(a, b) {
    return a.redValue - b.redValue
  }
}
