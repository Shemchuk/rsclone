import Menu from '../Menu';

export const generateLoardingBeforeMenu = () => {
  let template = '';
  const loardingBeforeMenu = document.createElement('div');
  loardingBeforeMenu.className = 'loading-block';
  template += `<div id="sign" class="off"><div class="message off" id="ready">`;
  template += `<span class="Neon" id="N">A</span><span class="Neon" id="E">li</span>`;
  template += `<span class="Neon" id="O">a</span><span class="Neon" id="N2">s</span>`;
  template += `</div></div>`;
  template += `<div class="loading-line" id="container"><div class="sign-wrap">`;
  template += `<div class="sign"><div class="loader">`;
  template += `<p class="loarder-start"><a class="loarder-start2">Loading</a></p>`;
  template += `<div></div>`;
  template += `</div>`;
  loardingBeforeMenu.innerHTML = template;
  return loardingBeforeMenu;
};

export function loadingBeforeMenu() {
  document.querySelector('.main').appendChild(generateLoardingBeforeMenu());
  gsap.from('#sign', { duration: 1, y: -1000 });
  gsap.from('#container', { duration: 0.5, y: 500 });
  setTimeout(() => {
    document.querySelector('#ready').classList.remove('off');
    document.querySelector('#sign').classList.remove('off');
    document.querySelector('.loarder-start2').classList.add('loarder-start3');
    document.querySelector('.loarder-start2').innerHTML = 'Get Ready!';
    setTimeout(() => {
      gsap.to('#container', { duration: 0.5, y: 1000 });
      setTimeout(() => {
        document.querySelector('#container').style.display = 'none';
        const menu = new Menu();
        menu.init();
        gsap.from('.menu', { duration: 1, y: 1000 });
      }, 500);
    }, 1500);
  }, 4000);
}
