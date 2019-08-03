import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'advanced-filter',
  template: '<ng-content> </ng-content>',
})
export class AdvancedFilterComponent implements OnInit {
  @Input() field = ''; // 对应域
  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>; // 模板

  constructor() {}

  ngOnInit() {}
}