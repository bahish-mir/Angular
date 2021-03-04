import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.scss']
})

export class ItemComponent {
  @Input() public value: number;
  @Output() public selectEvent = new EventEmitter<number>();

  public selectValue(): void {
    this.selectEvent.next(this.value);
  }
}
