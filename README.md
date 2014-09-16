# Mobile Development Cheatsheet

## Table of contents

1. [HTML](#html)
    1.1 [Meta Tags](#meta)
        1.1.1 [Viewport](#meta-viewport)
        1.1.2 [Phone Number Detection](#meta-phone-number-detection)
    1.2 [Input fields](#input)
        1.2.1 [Date](#input-date)
        1.2.2 [Auto Zoom](#input-zoom)
2. [CSS](#css)
    2.1 [`background-attachement: fixed`](#background-fixed)
    2.2 [Momentum Scrolling on elements](#momentum-scrolling)
    2.3 [Fix Google Maps, Lightbox etc. when using `box-sizing: border-box`](#border-box)
    2.4 [Translate Hardware Acceleration](#translate)
3. [Javascript](#js)
4. [Miscellaneous](#misc)
    4.1 [ICS](#ics)

## <a name="html"></a>1. HTML

### <a name="meta"></a>1.1 Meta-Tags

#### <a name="meta-viewport"></a>1.1.1 Viewport

Base viewport Meta-Tag:
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Additional parameters:
```HTML
/* disable user zooming */
<meta name="viewport" content="user-scalable=no">

/* zoom level on start 120% */
<meta name="viewport" content="initial-scale=1.2">

/* set maximum and minimum zoom level */
<meta name="viewport" content="minimum-scale=0.8, maximum-scale=1.2">
```

Source:
- https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag

#### <a name="meta-phone-number-detection"></a>1.1.2 Phone Number Detection

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

### <a name="input"></a>1.2 Input Fields

#### <a name="input-date"></a>1.2.1 Date

iOS updates the value immediately if any date part is changed. Android lets you set the whole date. Also the iOS date input triggers a blur event, Android doesn't.

#### <a name="input-zoom"></a>1.2.2 Auto Zoom

Setting the `font-size` to 16px on input fields disables the auto zoom in Safari and Chrome.

## <a name="css"></a>2. CSS

### <a name="background-fixed"></a>2.1 `background-attachement: fixed`

Put the CSS background-declarations into a wrapping `<div>` instead of `<html>` or `<body>`. Set this to `min-height: 100%` and it should work.

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

### <a name="momentum-scrolling"></a>2.2 Momentum Scrolling

This adds ongoing scrolling to elements on the page, as the page itself does. Only works in iOS Safari.

```CSS
.element {
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
```

### <a name="border-box"></a>2.3 Fix Google Maps, Lightbox etc. when using `box-sizing: border-box`

Some scripts like Google Maps API or lightbox don't work correctly with `box-sizing: border-box` and cause them to not display properly. Therefore the elements have to be resetted:

```CSS
.element {
	box-sizing: content-box;
}
```

### <a name="translate"></a>2.4 Translate Hardware Acceleration

The ```translate3d``` method uses GPU acceleration if available in the used browser, the simple 2d methods like ```translateX``` don't.

## <a name="js"></a>3. Javascript

## <a name="misc"></a>4. Miscellaneous

### <a name="ics"></a>4.1 ICS

#### .ics Support by OS/Browser ####
		|iOS	|Android
---		|---	|---
Safari	|yes	|-
Chrome	|no		|no
Opera	|no		|not tested
