## Integration

Each page is made with a series of Component, some are specific to the page, and some are common to the whole website.

The common components are:
* `AppHeader` for the header with global navigation,
* `AppFooter` for the footer,
* `AppBackground` which displayed either a static background color, or the animated gradient,
* `PageReveal` for the first-page-viewed intro animation, and the reveal one on each page,
* `CustomCursor` for a custom cursor in page with components that need it

They are some CSS variables that must be set on each page, for the color scheme of the page:
* `--primary-color` (hexadecimal format): it set the main color for the page, generally used as background color or accent color in UI
* `--primary-contrast-color` (hexadecimal or string): Foreground color in combination with primary color, to improve text's readability
* `--secondary-color` (hexadecimal format, optional): Secondary color for gradients in titles or audio button in Insight for example.

You could set them with inline CSS in the `<head>` of the page, applying them to the `:root` selector for instance.
