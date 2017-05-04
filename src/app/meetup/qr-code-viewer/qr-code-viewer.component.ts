import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-qr-code-viewer',
  templateUrl: './qr-code-viewer.component.html',
  styleUrls: ['./qr-code-viewer.component.css']
})
export class QrCodeViewerComponent implements OnInit {


  @Input()
  value: string;

  constructor() { }

  ngOnInit() {
  }

}
