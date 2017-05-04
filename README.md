# Mobile Development Protips

A collection of useful mobile development tips.

1. [Use `viewport` meta tag](#use-viewport-meta-tag)
2. [Manually set `tel:` links](#manually-set-tel-links)
3. [Deviant input `type="date"` behaviour](#deviant-input-typedate-behaviour)
4. [Disable zoom on `input`-element focus](#disable-zoom-on-input-element-focus)
5. [Usage of `background-attachement: fixed`](#usage-of-background-attachement-fixed)
6. [Enable momentum scrolling on scrollable elements](#enable-momentum-scrolling-on-scrollable-elements)
7. [Reset browser specific input/button styles](#reset-browser-specific-inputbutton-styles)
8. [Disable text size adjustment](#disable-text-size-adjustment)
9. [Disable tap highlight colour](#disable-tap-highlight-colour)
10. [Usage of `overflow: hidden` on body](#usage-of-overflow-hidden-on-body)
11. [Disable dragging of Google maps](#disable-dragging-of-google-maps)


### Use `viewport` meta tag

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

**Source**: [https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

### Manually set `tel:` links

To disable the automatic telephone number detection use the following snippet in `<head>` area:

```HTML
<!-- Standard -->
<meta name="format-detection" content="telephone=no">

<!-- Blackberry -->
<meta http-equiv="x-rim-auto-match" content="none">
```

For manual phone number links use `<a href="tel:+49-123-456-78-9">+49 (0) 123 456 78-9</a>`.

The `href` telephone number should always use the correct country code, preceded by a `+`. All whitespace should replaced with `-`. Any non digit characters should be removed.

**Source**: [https://developer.apple.com/library/safari/featuredarticles/IphoneURLScheme_Reference/PhoneLinks/PhoneLinks.html](https://developer.apple.com/library/safari/featuredarticles/IphoneURLScheme_Reference/PhoneLinks/PhoneLinks.html)

### Deviant input `type="date"` behaviour

Safari for iOS updates the value immediately if any date part is changed via Datepicker. Android browsers lets you set the whole date. Also the iOS date input triggers a blur event, Android doesn't.

### Disable zoom on `input`-element focus

Setting the `font-size` to `16px` on input fields disables the auto zoom in iOS Safari and Chrome.

### Usage of `background-attachement: fixed`

Put the CSS background-declarations into a wrapping `<div>` instead of `<html>` or `<body>`. Set this to `min-height: 100%`.

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

**Source**: [http://catch404.net/2012/12/fixed-backgrounds-on-the-bad-that-is-all-mobile-browsers/](http://catch404.net/2012/12/fixed-backgrounds-on-the-bad-that-is-all-mobile-browsers/)

### Enable momentum scrolling on scrollable elements

This adds ongoing scrolling to elements on the page, as the page itself does. Only works in iOS Safari.

```CSS
.element {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
```

### Reset browser specific input/button styles

```CSS
input, textarea, button {
    -webkit-appearance: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}
```

### Disable text size adjustment

Disable text size adjustment in IE mobile and webkit-browsers. Do not use `none`, this causes bugs in webkit-Browsers!

```CSS
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
}
```

### Disable tap highlight colour

```CSS
html {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
```

### Usage of `overflow: hidden` on body

A simple `overflow: hidden` is not working on mobile browsers. To achieve that effect you have to set the position of the body to fixed.

```CSS
body {
    overflow: hidden;
    position: fixed;
}
```

### *deprecated*: Disable dragging of Google maps

The default Google maps options allow users to drag the map around. If a map on a mobile version of your site is full width it might be difficult to scroll further as you have to drag the site up, but the map part has to be avoided. Therefore the best thing is to disable dragging on mobile devices.

```JavaScript

var map new google.maps.Map("#map", {
  ...
  draggable: ($(window).width() < 768 ? false : true)
});
```

*Google updated maps to detect mobile touch devices and switches to two finger use for dragging. Therefore this is not needed anymore.*
