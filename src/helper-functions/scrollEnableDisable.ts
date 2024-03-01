// contains functions that lock and unlock the scroll
export const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

export const enableScroll = () => {
  document.body.style.overflow = "scroll";
};
