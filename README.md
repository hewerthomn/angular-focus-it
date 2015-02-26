# Angular FocusIt module

AngularJS module to focus an HTML input element.


## Installation

Run the bower's install command or download this repository.

```
bower install angular-focus-it
```


Include the `angular-focus-it.min.js` file.

```html
<script src="bower_components/angular-focus-it/angular-focus-it.min.js"></script>
```


## Configuration

Add the `focusIt` module in your app dependencies.

```javascript
angular.module('app', [
	
	'focusIt'

])
```

## Usage

To use in your controller, add `focus` in your controller dependencies.

```javascript
.controller('HomeCtrl', ['$scope', 'focus', function($scope, focus) {
	focus('name');
}]);
```


Using in the directives:


* The `focus-id` attribute to set the id of the target element to focus.
* The `focus-on` attribute to set the event name to trigger the focus.

```html
<button type="button" focus-id="age" focus-on="click">Focus age</button>
```


## Example

[Demo online](example/index.html)


## License

Angular FocusIt is freely distributable under the terms of the [MIT license](LICENSE).
