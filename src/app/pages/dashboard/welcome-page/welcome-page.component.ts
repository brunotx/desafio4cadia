import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public userId: string;

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    if (id !== null && id !== undefined) {
      this.userId = id;
    }
  }

  goTo(event) {
    this.route.navigateByUrl('dashboard/account/' + event + '/' + this.userId);
  }

}
