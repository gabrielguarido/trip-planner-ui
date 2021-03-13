import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class EventHandlerService {
  constructor(
    private messageService: MessageService
  ) {
  }

  handleError = (errorMessage: string): void => {
    this.messageService.add({
      key: 'tst', severity: 'error', summary: 'Error!', detail: errorMessage
    });
  }

  handleSuccess = (successMessage: string): void => {
    this.messageService.add({key: 'tst', severity: 'success', summary: 'Success!', detail: successMessage});
  }
}
