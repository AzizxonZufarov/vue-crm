import localize from '@/filters/localize.filter'

export default {
  bind(el, { value, modifiers }) {
    M.Tooltip.init(el, {
      html: modifiers.noloc ? value : localize(value)
    })
  },
  unbind(el) {
    const tooltip = M.Tooltip.getInstance(el)

    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
