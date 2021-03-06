import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

export type OptionId = string;

export interface CdOption {
  id: OptionId;
  artist: string;
  song: string;
  cover: string; // dataurl or url
}

@Component({
  selector: 'cd-select',
  templateUrl: './cd-select.component.html',
  styleUrls: ['./cd-select.component.scss']
})
export class CdSelectComponent implements OnChanges {
  @Input() options: CdOption[] = [];
  @Input() selected?: OptionId;
  @Output() optionSelected = new EventEmitter<CdOption>();

  open = false;

  selectedOption?: CdOption;

  ngOnChanges(): void {
    if (this.options && this.selected) {
      this.selectedOption = this.options?.find(({id}) => id === this.selected)
    } else {
      this.selectedOption = undefined;
    }
  }

  select(option: CdOption): void {
    this.open = false;
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
