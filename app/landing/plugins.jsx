"use client";
import { useEffect } from 'react';
import { CountUp } from 'countup.js';
import noUiSlider from'../js/nouislider.min.js';
import Typed from '../js/typedjs.js'
// import CountUp from '../js/countup.min.js'
import Rellax from'../js/rellax.min.js'
import VanillaTilt from '../js/tilt.min.js'  
import Choices from '../js/choices.min.js'
import Parallax from'../js/parallax.min.js'
import anime from'../js/anime.min.js'


const usePlugins = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Inicialización de CountUp
      const initializeCountUp = (id) => {
        const element = document.getElementById(id);
        if (element) {
          const countUp = new CountUp(id, element.getAttribute('countTo'));
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
        }
      };
      initializeCountUp('state1');
      initializeCountUp('state2');
      initializeCountUp('state3');

      // Inicialización de VanillaTilt
      const tiltElements = document.querySelectorAll('.tilt');
      tiltElements.forEach(element => {
        VanillaTilt.init(element);
      });

      // Inicialización de Choices.js
      const choiceElement = document.querySelector('.js-choice');
      if (choiceElement) {
        new Choices(choiceElement, {
          searchEnabled: true,
          itemSelectText: '',
          shouldSort: false
        });
      }

      // Inicialización de Rellax
      if (document.querySelector('.rellax')) {
        new Rellax('.rellax');
      }

      // Inicialización de Parallax
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        new Parallax(element);
      });

      // Inicialización de noUiSlider
      const slider = document.getElementById('slider');
      if (slider && !slider.noUiSlider) {  // Verificar si noUiSlider ya está inicializado
        noUiSlider.create(slider, {
          start: [20, 80],
          connect: true,
          range: {
            min: 0,
            max: 100
          }
        });
      }

      // Inicialización de anime.js
      anime({
        targets: '.anime',
        translateX: 250,
        duration: 800
      });

      // Inicialización de Typed.js
      const typedElement = document.querySelector('.typed-element');
      if (typedElement) {
        new Typed(typedElement, {
          strings: ["Here you can put some strings to type", "Here is another string"],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true
        });
      }
    }
  }, []);
};

const PluginInitializer = () => {
  usePlugins();


};

export default PluginInitializer;
