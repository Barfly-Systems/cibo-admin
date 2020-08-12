import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GetAllImages_Result } from 'src/app/models/get-all-images-result.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {

  imageList: GetAllImages_Result[] = [];

  constructor(private api: ApiService, public dialogRef: MatDialogRef<ImageSelectorComponent>) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages = () => {
    this.api.getProductCategoryImages().subscribe(data => {
      console.log(data);
      this.imageList = data;
    })
  }

  selectImage = (image: GetAllImages_Result) => {
    this.dialogRef.close(image);
  }

}
