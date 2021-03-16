import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanService} from '../../service/plan.service';
import {Plan} from '../../model/Plan';
import {ActivatedRoute, Router} from '@angular/router';
import {EventHandlerService} from '../../service/eventHandler.service';
import {Expense} from '../../model/Expense';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EventContext} from '../../model/context/EventContext';
import {User} from '../../model/User';
import {ExpenseService} from '../../service/expense.service';
import {ConfirmationService} from 'primeng/api';
import {ExpenseCreateComponent} from './create/expense-create.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, OnDestroy {
  loggedUser: User;
  selectedPlan: Plan | undefined;
  ref: DynamicDialogRef | undefined;
  expenses: Expense[];
  departureDate: string | undefined;
  returnDate: string | undefined;

  constructor(
    private planService: PlanService,
    private expenseService: ExpenseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventHandler: EventHandlerService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.expenses = [];
  }

  ngOnInit(): void {
    if (!this.loggedUser.id) {
      this.router.navigate(['/login']);
    } else {
      this.loadPlan();
    }
  }

  loadPeriod(): void {
    if (this.selectedPlan) {
      this.departureDate = this.selectedPlan.departureDate;
      this.returnDate = this.selectedPlan.returnDate;
    } else {
      this.departureDate = '';
      this.returnDate = '';
    }
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  loadPlan(): void {
    const routeId = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;

    if (routeId) {
      this.planService.findPlanById(routeId)
        .then(plan => {
          this.selectedPlan = plan;
          this.loadExpenses();
          this.loadPeriod();
        })
        .catch(() => {
          this.router.navigate(['/plan']);
        });
    } else {
      this.router.navigate(['/plan']);
    }
  }

  loadExpenses(): void {
    if (this.selectedPlan) {
      this.expenseService.findAllByPlanId(this.selectedPlan.id)
        .then(expenseList => {
          this.expenses = expenseList;
        })
        .catch(() => this.eventHandler.handleError('An error has occurred'));
    }
  }

  confirmCreate(): void {
    this.ref = this.dialogService.open(ExpenseCreateComponent, {
      header: 'Create new expense',
      width: '30%',
      contentStyle: {'max-height': '500px', overflow: 'auto'},
      baseZIndex: 10000,
      data: this.selectedPlan
    });

    this.ref.onClose.subscribe((eventContext: EventContext) => {
      if (eventContext) {
        this.eventHandler.handleCustomEvent(eventContext);
      }

      this.loadExpenses();
    });
  }

  confirmDelete(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this expense?',
      accept: () => {
        this.deleteExpense(id);
      }
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.delete(id)
      .then(() => {
        this.eventHandler.handleSuccess('Expense was removed successfully');
        this.loadExpenses();
      })
      .catch(() => this.eventHandler.handleError('An error has occurred'));
  }
}
