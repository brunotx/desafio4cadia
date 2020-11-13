import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  opened = true;
  public userId: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.router.snapshot.children[0].params.id;
  }

  toggleSider() {
    this.opened = !this.opened;
  }
}
