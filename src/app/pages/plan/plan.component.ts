import {Component, OnDestroy, OnInit} from '@angular/core';
import {Plan} from '../../model/Plan';
import {User} from '../../model/User';
import {PlanService} from '../../service/plan.service';
import {EventHandlerService} from '../../service/eventHandler.service';
import {ConfirmationService} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {PlanCreateComponent} from './create/plan-create.component';
import {EventContext} from '../../model/context/EventContext';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit, OnDestroy {
  plans: Plan[];
  loggedUser: User;
  selectedPlan: Plan | undefined;
  ref: DynamicDialogRef | undefined;

  constructor(
    private eventHandler: EventHandlerService,
    private planService: PlanService,
    private confirmationService: ConfirmationService,
    private router: Router,
    public dialogService: DialogService,
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.plans = [];
  }

  ngOnInit(): void {
    if (!this.loggedUser.id) {
      this.router.navigate(['/login']);
    } else {
      this.loadPlans();
    }
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  loadPlans(): void {
    this.planService.findAllByUserId(this.loggedUser.id)
      .then(planList => {
        this.plans = planList;
      })
      .catch(() => this.eventHandler.handleError('An error has occurred'));
  }

  selectPlan(plan: Plan): void {
  }

  confirmCreate(): void {
    this.ref = this.dialogService.open(PlanCreateComponent, {
      header: 'Create new plan',
      width: '30%',
      contentStyle: {'max-height': '300px', overflow: 'auto'},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((eventContext: EventContext) => {
      if (eventContext) {
        this.eventHandler.handleCustomEvent(eventContext);
      }

      this.loadPlans();
    });
  }

  confirmDelete(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this plan?',
      accept: () => {
        this.deletePlan(id);
      }
    });
  }

  deletePlan(id: number): void {
    this.planService.delete(id)
      .then(() => {
        this.eventHandler.handleSuccess('Plan was removed successfully');
        this.loadPlans();
      })
      .catch(() => this.eventHandler.handleError('An error has occurred'));
  }
}
