export function isMobile() {
  let width = window.$(window).width();
  return (width <= 575.98);
}

export function isMobileLandscape() {
  let width = window.$(window).width();
  return (width >= 576) && (width <= 767.98);
}

export function fromLandscapedMobile() {
  let width = window.$(window).width();
  return (width >= 576);
}

export function isTablet() {
  let width = window.$(window).width();
  return (width >= 768) && (width <= 991.98);
}

export function fromTablet() {
  let width = window.$(window).width();
  return (width >= 768);
}

export function isDesktop() {
  let width = window.$(window).width();
  return (width >= 992) && (width <= 1199.98);
}

export function fromDesktop() {
  let width = window.$(window).width();
  return (width >= 992);
}

export function isLarge() {
  let width = window.$(window).width();
  return (width >= 1200) && (width <= 1439.98);
}

export function fromLarge() {
  let width = window.$(window).width();
  return (width >= 1200);
}

export function isExtraLarge() {
  let width = window.$(window).width();
  return (width >= 1440);
}

export function fromExtraLarge() {
  let width = window.$(window).width();
  return (width >= 1440);
}