export const findTestWarpper = (warpper, selector) => {
  return warpper.findAll(`[data-test="${selector}"]`)
}
