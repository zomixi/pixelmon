---
title:
  zh-CN: 思维导图 Mind
  en-US: Mind Usage
order: 1
---

## zh-CN

思维导图 Mind 例子。根据数据结构渲染思维导图

## en-US

Mind of usage.

```ts
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'mind-demo',
  template: `
  <p-ggeditor type="mind" [data]="data" [style]="{width: '70%', height: 400}"></p-ggeditor>
  `,
})
export class MindDemoComponent implements OnDestroy {
  data = {
    roots: [{
      label: '中心主题',
      children: [{
        label: '分支主题 1',
      }, {
        label: '分支主题 2',
      }, {
        label: '分支主题 3',
        children: [{
          label: '分支主题 3-1',
        }]
      }],
    }]
  };

  constructor() {}

  ngOnDestroy() {
  }
}
```
