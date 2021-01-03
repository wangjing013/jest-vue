export const findTestWarpper = (warpper, selector) => {
  return warpper.find(`[data-test="${selector}"]`)
}
