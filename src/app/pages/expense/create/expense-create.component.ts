import {Component} from '@angular/core';
import {PlanService} from '../../../service/plan.service';
import {Router} from '@angular/router';
import {Plan} from '../../../model/Plan';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EventContext} from '../../../model/context/EventContext';
import {ExpenseService} from '../../../service/expense.service';
import {ExpenseCreationContext} from '../../../model/context/ExpenseCreationContext';

interface Currency {
  currency: string;
}

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent {
  currencies: Currency[] | undefined;
  selectedCurrency: Currency | undefined;
  selectedPlan: Plan | undefined;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private planService: PlanService,
    private expenseService: ExpenseService,
    private router: Router,
  ) {
    this.loadPlan();
  }

  loadPlan(): void {
    const planId = this.config.data.id;

    if (planId) {
      this.planService.findPlanById(planId)
        .then(plan => {
          this.selectedPlan = plan;
          this.loadCurrencies();
        })
        .catch(() => {
          this.router.navigate(['/plan']);
        });
    } else {
      this.router.navigate(['/plan']);
    }
  }

  loadCurrencies(): void {
    if (this.selectedPlan && this.selectedPlan?.expenseSet.length > 0) {
      this.currencies = [{currency: this.selectedPlan.expenseSet[0].currency}];
      this.selectedCurrency = this.selectedPlan.expenseSet[0];
    } else {
      this.selectedCurrency = {currency: 'BRL'};
      this.currencies = [
        {currency: 'BRL'},
        {currency: 'USD'},
        {currency: 'COP'},
        {currency: 'CAD'},
        {currency: 'EUR'},
      ];
    }
  }

  create(description: string, amount: number, currency: Currency): void {
    if (this.selectedPlan && this.selectedPlan.id) {
      this.expenseService.register(new ExpenseCreationContext(this.selectedPlan.id, description, amount, currency.currency))
        .then(() => {
          this.ref.close(new EventContext('success', 'Expense created successfully', description));
        })
        .catch(() => {
          this.ref.close(new EventContext('error', 'An error has occurred', description));
        });
    } else {
      this.ref.close(new EventContext('error', 'An error has occurred', description));
    }
  }
}
