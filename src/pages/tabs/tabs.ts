import { Component } from '@angular/core';

import { TransactionPage } from '../about/transactions';
import { HomePage } from '../home/home';
import { GoalPage } from '../goal/goal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TransactionPage;
  tab2Root: any = HomePage;
  tab3Root: any = GoalPage;

  constructor() {

  }
}
