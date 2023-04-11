## Integration

This component must be included at the root level of any pages, whether they included a `Hero` or `AppFooter` component or none, because it is also used as background for the mobile version of `AppMenu` component within `AppHeader`.

## Options

* The `gradient` option is to enable either a variant with the animated `ColorGradient` component, or with a static background color set from the CSS variable `--primary-color`.

* The `config` option is just a choice among up to 6 presets we made for the `ColorGradient` component.
The related config files can be found in `src/components/ColorGradient/webgl/settings/`, they are named `gradient-settings-%config%.json` where `%config%` is a number between 1 and 6.

  * Those files are exported from the `ColorGradient` component with `tweak` option enabled. You can play with the settings and once you're happy with the results, you can export the settings as JSON and save them in the folder mentioned above.

* The `autoplay` argument is just a convenient development option to autostart drawing gradient when using `ColorGradient` or `AppBackground` component standalone in Storybook.
Because when the `AppBackground` is included in page with other components, it starts playing only when visible, i.e. when the `Hero` or the `AppFooter` is visible in the viewport, and it pauses otherwise.
