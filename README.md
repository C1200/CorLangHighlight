# CorLangHighlight

CorLangHighlight is a language definition of
[CorLang](https://c1200.js.org/CorLang/) for
[highlight.js](https://highlightjs.org/)

## Usage

Import hljs and CorLangHighlight:

```html
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/C1200/CorLangHighlight/CorLangHighlight.min.js"></script>
</head>
```

Register language:

```html
<script>
  hljs.registerLanguage("corlang", corlang);
</script>
```