import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

export type OptionId = string;

export interface DvdOption {
  id: OptionId;
  title: string;
  director: string;
  year: number;
  oskars: number; 
  poster: string; // dataurl or url
}

@Component({
  selector: 'dvd-select',
  templateUrl: './dvd-select.component.html',
  styleUrls: ['./dvd-select.component.scss']
})
export class DvdSelectComponent implements OnChanges {
  @Input() options: DvdOption[] = [];
  @Input() selected?: OptionId;
  @Output() optionSelected = new EventEmitter<DvdOption>();

  open = false;

  selectedOption?: DvdOption;

  ngOnChanges(): void {
    if (this.options && this.selected) {
      this.selectedOption = this.options?.find(({id}) => id === this.selected)
    } else {
      this.selectedOption = undefined;
    }
  }

  select(option: DvdOption): void {
    this.open = false;
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
