# Start

1. add style 
`"node_modules/bootstrap/dist/css/bootstrap.css"` to angular.json

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| title | string  | null | title |
| confirm | boolean  | false | show confirm modal |
| modalClass | string  | card-body | Modal class |
| yesButtonText | string  | Yes |  Agree button form confirm modal |
| noButtonText | string  | No | Disagree button form confirm modal |
| manager | DynamicModalManager  | null | Action manager for modal |




| Output | Return | Description |
| --- | --- | --- |
| actionDone | true | List all new or modified files |
| submit | any | Return params passed to show modal |




#Methods 

DynamicModalManager

| Method | Type | Default | Params |
| --- | --- | --- | --- |
| show | Subject  | Subject | IDynamicModalShowAction or null |
| hide | Subject  | Subject | null |

IDynamicModalShowAction

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| config | any  | {} | Bootstrap modal config |
| params | IDynamicModalShowActionParams  | {} | any |


IDynamicModalShowActionParams

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string  | null |  null |
| body | any  | null | null |



# NgxSysCommon

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project ngx-sys-common` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-sys-common`.
> Note: Don't forget to add `--project ngx-sys-common` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-sys-common` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-sys-common`, go to the dist folder `cd dist/ngx-sys-common` and run `npm publish`.

## Running unit tests

Run `ng test ngx-sys-common` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
