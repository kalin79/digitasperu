export default {
  // state
  icon: '',
  label: '',
  backgroundColor: '',
  iconColor: '',
  withProgress: false,
  progress: 0,

  // mutations
  setIcon (icon) {
    this.icon = icon
  },
  setLabel (label) {
    this.label = label
  },
  setBackgroundColor (color) {
    this.backgroundColor = color
  },
  setIconColor (color) {
    this.iconColor = color
  },
  setStyle ({ icon, label, backgroundColor, iconColor, withProgress }) {
    this.setIcon(icon)
    this.setLabel(label)
    this.setBackgroundColor(backgroundColor)
    this.setIconColor(iconColor)
    this.withProgress = withProgress
  },
  showProgress () {
    this.withProgress = true
  },
  hideProgress () {
    this.withProgress = false
  },
  setProgress (progress) {
    this.progress = progress
  },
  clear () {
    this.icon = ''
  },
}
