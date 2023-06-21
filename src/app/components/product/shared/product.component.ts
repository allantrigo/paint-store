import { Component, Input } from '@angular/core';
import { Paint } from 'src/app/interfaces/Paint';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() paint!: Paint;
}
