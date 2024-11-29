export function parseCssValue(cssValue: string) {
  if (cssValue.includes('var(')) {
    let regexSearch = /var\(.+?\)/.exec(cssValue);
    let innerVarValue = ''
    if (regexSearch) {
      innerVarValue = regexSearch[1]
    }

    return getComputedStyle(document.body).getPropertyValue(innerVarValue);
  }

  return cssValue
}