import Webgl from './Webgl';
import raf from 'raf';

let webgl;

// webgl settings
webgl = new Webgl(window.innerWidth, window.innerHeight);
document.body.appendChild(webgl.renderer.domElement);

// handle resize
window.addEventListener('resize', resizeHandler);

// let's play !
animate();

function resizeHandler() {
  webgl.resize(window.innerWidth, window.innerHeight);
}

function animate() {
  raf(animate);

  webgl.render();
}
