# Mockspital

## Build

```bash
ng build
cd dist
zip -r ../builds/dist_0.0.1.zip *
cd ..
rm -rf dist
```

## Findings

### Customize the HTML shell

./src/index.html

### Customize the menu

- Items: ./src/app/pages/pages-menu.ts
- Code:
  - ./src/app/@theme/layouts/one-column/one-column.layout.ts
  - ./src/app/@theme/layouts/two-columns/two-columns.layout.ts
  - ./src/app/@theme/layouts/three-columns/three-columns.layout.ts
  - ./src/app/@theme/layouts/sample/sample.layout.ts
- [Nebular doc on Sidebar](https://akveo.github.io/nebular/#/docs/components/sidebar)
- [Nebular icons](http://akveo.com/ngx-admin/#/pages/ui-features/icons)
  - Names: .nb-alert, .nb-angle-double-left, .nb-arrow-down, .nb-arrow-dropdown, .nb-arrow-dropleft, .nb-arrow-dropright, .nb-arrow-dropup, .nb-arrow-left, .nb-arrow-retweet, .nb-arrow-right, .nb-arrow-thin-down, .nb-arrow-thin-left, .nb-arrow-thin-right, .nb-arrow-thin-up, .nb-arrow-up, .nb-audio, .nb-bar-chart, .nb-checkmark, .nb-chevron-down, .nb-chevron-down-outline, .nb-chevron-left, .nb-chevron-left-outline, .nb-chevron-right, .nb-chevron-right-outline, .nb-chevron-up, .nb-chevron-up-outline, .nb-close, .nb-close-circled, .nb-cloudy, .nb-coffee-maker, .nb-compose, .nb-edit, .nb-email, .nb-flame-circled, .nb-gear, .nb-grid-a, .nb-grid-a-outline, .nb-grid-b, .nb-grid-b-outline, .nb-heart, .nb-home, .nb-keypad, .nb-layout-centre, .nb-layout-default, .nb-layout-one-column, .nb-layout-sidebar-left, .nb-layout-sidebar-right, .nb-layout-two-column, .nb-lightbulb, .nb-list, .nb-location, .nb-locked, .nb-loop, .nb-loop-circled, .nb-menu, .nb-notifications, .nb-paper-plane, .nb-partlysunny, .nb-pause, .nb-pause-outline, .nb-person, .nb-phone, .nb-play, .nb-play-outline, .nb-plus, .nb-plus-circled, .nb-power, .nb-power-circled, .nb-rainy, .nb-roller-shades, .nb-search, .nb-shuffle, .nb-skip-backward, .nb-skip-backward-outline, .nb-skip-forward, .nb-skip-forward-outline, .nb-snowy-circled, .nb-square, .nb-square-outline, .nb-star, .nb-sunny, .nb-sunny-circled, .nb-tables, .nb-title, .nb-trash, .nb-volume-high, .nb-volume-mute

### Customize the header

- Template: ./src/app/@theme/components/header/header.component.html
- Code: ./src/app/@theme/components/header/header.component.ts

### Customize the main dashboard

- Template: ./src/app/pages/dashboard/dashboard.component.html

### Create a new page

#### Create the component

```bash
ng generate component pages/hospitals --spec=false
```

#### Add it to the router

```angular
import { HospitalsComponent } from './hospitals/hospitals.component';
// ...
  children: [
    // ...
    {
      path: 'hospitals',
      component: HospitalsComponent,
    },
    // ...
```