import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css',
})
export class CommunicationComponent  {
  public inputData = input.required<number>();
  public onOutputChange = output<number>();

  public inputModelValue = model('ALLAN');

  changeOutput() {
    const x = Math.floor(Math.random() * 100 + 1);
    this.onOutputChange.emit(x);
  }
}
