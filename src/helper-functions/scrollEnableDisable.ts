// contains functions that lock and unlock the scroll
export const disableScroll = () => {
  document.body.style.overflowY = "hidden";
};

export const enableScroll = () => {
  document.body.style.overflowY = "scroll";
};
