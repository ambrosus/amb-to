export const toggleMenu = (event: any) => {
  event.preventDefault();
  const parent = event.currentTarget.parentElement;
  parent.classList.toggle('menu--active');
};
