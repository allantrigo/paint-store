import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paint } from 'src/app/interfaces/Paint';
import { PaintService } from 'src/app/services/paint/paint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private paintService: PaintService, private router: Router) {}
  email = '';
  pages: number[] = [];
  paints: Paint[] = [];

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigateByUrl('/login');
    }
    this.email = localStorage.getItem('email')!;
    this.paintService.fetch().subscribe((value) => {
      this.pages = Array(value.total_pages)
        .fill(1)
        .map((x, i) => i + 1);
      console.log(this.pages);
      this.paints = value.data;
    });
  }

  changePage(page: number) {
    this.paintService.fetch(page).subscribe((value) => {
      this.pages = Array(value.total_pages)
        .fill(1)
        .map((x, i) => i + 1);
      console.log(this.pages);
      this.paints = value.data;
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }
}
