'use strict';
const dis = document.querySelector('.display');
const btn = document.querySelectorAll('button');

btn.forEach(tap =>
  tap.addEventListener('click', () => {
    const disV = dis.textContent.trim();
    const tapV = tap.textContent.trim();

    if (tap.classList.contains('rst')) {
      dis.textContent = '0';
      return;
    }
    if (tap.classList.contains('bk')) {
      if (disV.length <= 1) {
        dis.textContent = '0';
      } else {
        dis.textContent = disV.slice(0, -1);
      }
      return;
    }
    if (tap.classList.contains('result')) {
      const finalR = disV.replace(/×/g, '*').replace(/÷/g, '/');
      const finalRValue = new Function('return ' + finalR)();
      dis.textContent = Number.isInteger(finalRValue)
        ? finalRValue
        : finalRValue.toFixed(4);
      return;
    }
    const lastOp = disV.slice(-1);
    const operator = ['-', '+', '÷', '×'];
    if (operator.includes(lastOp) && operator.includes(tapV)) {
      dis.textContent = disV.slice(0, -1) + tapV;
      return;
    }

    if (disV === '0') {
      dis.textContent = tapV;
    } else {
      dis.textContent += tapV;
    }
  })
);
