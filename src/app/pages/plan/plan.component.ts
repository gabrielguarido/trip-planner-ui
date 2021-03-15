import {Component, OnInit} from '@angular/core';
import {Plan} from '../../model/Plan';
import {User} from '../../model/User';
import {PlanService} from '../../service/plan.service';
import {EventHandlerService} from '../../service/eventHandler.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans: Plan[];
  loggedUser: User;
  selectedPlan: Plan | undefined;

  constructor(
    private eventHandler: EventHandlerService,
    private planService: PlanService,
    private confirmationService: ConfirmationService,
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.plans = [];
  }

  ngOnInit(): void {
    this.loadPlans();
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
