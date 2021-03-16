import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {PlanService} from '../../../service/plan.service';
import {PlanCreationContext} from '../../../model/context/PlanCreationContext';
import {EventContext} from '../../../model/context/EventContext';
import {User} from '../../../model/User';

@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.css']
})
export class PlanCreateComponent {
  loggedUser: User;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private planService: PlanService,
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  create(country: string, departureDate: string, returnDate: string): void {
    departureDate = new Date(departureDate).toISOString().substring(0, 10);
    returnDate = new Date(returnDate).toISOString().substring(0, 10);

    this.planService.register(new PlanCreationContext(this.loggedUser.id, country, departureDate, returnDate))
      .then(() => {
        this.ref.close(new EventContext('success', 'Plan created successfully', country));
      })
      .catch(error => {
        let errorMessage = error.toString();
        if (error.status === 400) {
          errorMessage = 'The Return Date must be after the selected Departure Date';
        }
        this.ref.close(new EventContext('error', errorMessage, country));
      });
  }
}
