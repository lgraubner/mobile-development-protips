# Mobile CSS Boilerplate #

Base of any mobile layout/styling is the _viewport_ meta-tag.

```HTML
<meta name="viewport" content="width=device-width">
```

Additional parameters can control the zooming.

```HTML
/* disable user zooming */
<meta name="viewport" content="user-scalable=no">

/* zoom level on start 100% */
<meta name="viewport" content="initial-scale=1">

/* set maximum and minimum zoom level */
<meta name="viewport" content="minimum-scale=0.8, maximum-scale=1.2">
```

Source:
- https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag

### Telephone Number detection

To disable the automatic telephone number detection use the following snippet in `<head>` area:

```HTML
<!-- Safari -->
<meta name="format-detection" content="telephone=no">

<!-- Blackberry -->
<meta http-equiv="x-rim-auto-match" content="none">
```

For manual phone number links use `<a href="tel:123456789">I'm opening the telephone app</a>`.

Source:
- [https://developer.apple.com/library/safari/featuredarticles/IphoneURLScheme_Reference/PhoneLinks/PhoneLinks.html](https://developer.apple.com/library/safari/featuredarticles/IphoneURLScheme_Reference/PhoneLinks/PhoneLinks.html)

### Calendar file support
#### .ics Support by OS/Browser ####
		|iOS	|Android
---		|---	|---
Safari	|yes	|-
Chrome	|no		|no
Opera	|no		|not tested

### Opera Mini ###

The Opera Mini browser is throughout very buggy. Simple things as the `line-height` property are not supported.

### Fixing `background-attachement: fixed`

Put the CSS background-declarations to a wrapping `<div>` instead of `<html>` or `<body>`. Set this to `min-height: 100%` and it should work.

```CSS
body, html {
	height: 100%;
}

#bg {
	background-image: url('path/to/img.jpg');
	background-attachment: scroll;
	background-position: center top;
	background-repeat: no-repeat;
	display: block;
	width: 100%;
	min-height: 100%;
	z-index: -100;
	position: fixed;
	top: 0;
	left: 0;
}

```

Source:
- [http://catch404.net/2012/12/fixed-backgrounds-on-the-bad-that-is-all-mobile-browsers/](http://catch404.net/2012/12/fixed-backgrounds-on-the-bad-that-is-all-mobile-browsers/)

### Add momentum scrolling to elements ###

This adds ongoing scrolling to elements on the page, as the page itself does. Only works in iOS Safari.

```CSS
.element {
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
```

### `box-sizing: border-box` bugs in third party plugins ###

Some scripts like Google Maps API or lightbox don't work correctly with `box-sizing: border-box` and cause them to not display properly. Therefore the elements have to be resetted:

```CSS
.element {
	box-sizing: content-box;
}
```

### Different behaviour of date input field ###

iOS Updates the value immediately if any date part is changed. Android lets you set the whole date. Also the iOS date input triggers a blur event, Android doesn't.

### using translate ###

The ```translate3d``` method uses GPU acceleration if available in the used browser, the simple 2d methods like ```translateX``` don't.
