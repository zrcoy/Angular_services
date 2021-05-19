import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  count: number = 0;

  constructor(
    private accountService: AccountsService,
    private counterService: CounterService
  ) {
    this.counterService.updateCounter.subscribe((newCount: number) => {
      this.count = newCount;
    });
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
