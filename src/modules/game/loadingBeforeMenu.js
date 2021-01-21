import Menu from '../Menu';

export const generateLoardingBeforeMenu = () => {
  let template = '';
  const loardingBeforeMenu = document.createElement('div');
  loardingBeforeMenu.className = 'loading-block';
  template += `
    <div id="sign" class="off"><div class="message off" id="ready"><span class="Neon" id="N">A</span><span class="Neon" id="E">li</span><span class="Neon" id="O">a</span><span class="Neon" id="N2">s</span></div></div>`;

  template += `<div class="loading-line" id="container"><div class="sign-wrap">
  <div class="sign"><div class="loader"><p class="loarder-start"><a class="loarder-start2" href="#">Loading<p><a>
    <div></div>
  </div>`;
  //   template += `<button id="toggle">Get started!</button><div></div>`;
  loardingBeforeMenu.innerHTML = template;
  return loardingBeforeMenu;
};

export function loadingBeforeMenu() {
  document.querySelector('.main').appendChild(generateLoardingBeforeMenu());
  gsap.from('#sign', { duration: 1, y: -700 });
  gsap.from('#container', { duration: 0.5, y: 500 });
  //   document.querySelector('#toggle').style.display = 'none';
  setTimeout(() => {
    document.querySelector('#ready').classList.remove('off');
    document.querySelector('#sign').classList.remove('off');
    document.querySelector('.loarder-start2').classList.add('loarder-start3');
    // document.querySelector('.loarder-start3').classList.remove('.loarder-start2');
    document.querySelector('.loarder-start2').innerHTML = 'Get Ready!';
    setTimeout(() => {
      gsap.to('#container', { duration: 0.5, y: 500 });
      setTimeout(() => {
        document.querySelector('#container').style.display = 'none';
        const menu = new Menu();
        menu.init();
        // document.querySelector('.loading-block').style.position = 'absolute';
        gsap.from('.menu', { duration: 1, y: 500 });
      }, 500);
    }, 1500);
    // gsap.to('.loader', { duration: 3, opacity: 0, scale: 0.5 });

    // document.querySelector('#toggle').style.display = 'inline-block';
  }, 4000);
}

// jackHarnerSig('light');
