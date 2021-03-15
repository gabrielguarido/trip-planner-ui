import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {EventContext} from '../model/context/EventContext';

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

  handleCustomEvent = (eventContext: EventContext): void => {
    this.messageService.add({key: 'tst', severity: eventContext.severity, summary: eventContext.summary, detail: eventContext.detail});
  }
}
