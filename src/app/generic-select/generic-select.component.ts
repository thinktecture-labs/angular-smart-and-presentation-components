import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, TemplateRef } from '@angular/core';

export type OptionId = string;


@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss']
})
export class GenericSelecetComponent<T = any> implements OnChanges {
  @Input() options: T[] = [];
  @Input() selected?: any;
  @Input() key!: keyof T;
  @Output() optionSelected = new EventEmitter<T>();

  open = false;

  selectedOption?: T;

  @ContentChild('trigger', {read: TemplateRef}) triggerRef!: TemplateRef<T>
  @ContentChild('option', {read: TemplateRef}) optionRef!: TemplateRef<T>

  ngOnChanges(): void {
    if (this.options && this.selected) {
      this.selectedOption = this.options?.find((option) => option[this.key] === this.selected)
    } else {
      this.selectedOption = undefined;
    }
  }

  select(option: T): void {
    this.open = false;
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
