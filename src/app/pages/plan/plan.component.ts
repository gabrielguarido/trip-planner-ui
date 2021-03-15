import {Component} from '@angular/core';
import {Plan} from '../../model/Plan';
import {User} from '../../model/User';
import {PlanService} from '../../service/plan.service';
import {EventHandlerService} from '../../service/eventHandler.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  plans: Plan[];
  loggedUser: User;
  selectedPlan: Plan | undefined;

  constructor(
    private eventHandler: EventHandlerService,
    private planService: PlanService
  ) {
    this.loggedUser = this.loadLoggedUser();
    this.plans = this.loadPlans();
  }

  loadLoggedUser(): User {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  loadPlans(): Plan[] {
    return this.loggedUser.planSet;
  }

  selectPlan(plan: Plan): void {
  }

  deletePlan(id: number): void {
    this.planService.delete(id)
      .then(() => {
        this.eventHandler.handleSuccess('Plan was removed successfully');
      })
      .catch(() => this.eventHandler.handleError('An error has occurred'));
  }
}
