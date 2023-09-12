"use client"

import { useEffect } from 'react';

const PrintPage = () => {
  useEffect(() => {
    let data;
    let host;

    window.parent.addEventListener('keyup', (e) => {
      console.log(e.keyCode);
      if (e.keyCode === 81) {
        window.parent.postMessage({ receive: 'washingComplete' }, '*');
      } else if (e.keyCode === 49) {
        window.parent.postMessage({ receive: 'washingComplete' }, '*');
      } else if (e.keyCode === 50) {
        window.parent.postMessage({ receive: 'reLaundry' }, '*');
      } else if (e.keyCode === 51) {
        window.parent.postMessage({ receive: 'repairNeeded' }, '*');
      }
    });

    window.addEventListener('message', receiveMessage); // 메세지 받기

    function receiveMessage(e) {
      if (e.data.type === 'createPage') {
        host = e.data.host;
        document.body.innerHTML = '';
        data = e.data.data;
        const page = createPage(data);
        document.body.appendChild(page);
      }
    }

    function createPage(item) {
      const page = document.createElement('div');
      page.className = 'page';

      const qrCode = document.createElement('div');
      qrCode.className = 'qrCode';

      const qr = document.createElement('img');
      qr.src = `https://${host}/support/qrCode/${item.qrCode}/H`;
      qrCode.appendChild(qr);

      const qrCode2 = qrCode.cloneNode(true);
      qrCode2.className = 'qrCode2';

      const qrCode3 = qrCode.cloneNode(true);
      qrCode3.className = 'qrCode3';

      const qrCode4 = qrCode.cloneNode(true);
      qrCode4.className = 'qrCode4';

      const tastNumberAgent = document.createElement('div');
      tastNumberAgent.className = 'tastNumberAgent';
      tastNumberAgent.innerHTML = `<div>${item.taskNumber} / ${item.assignSwatId}</div>`;

      const assignSwatId = document.createElement('div');
      assignSwatId.className = 'assignSwatId';
      assignSwatId.innerHTML = `<div>${item.koName} / ${item.assignSwatId}</div>`;

      const barcodeId = document.createElement('div');
      barcodeId.className = 'barcodeId';
      barcodeId.innerHTML = `<div>${item.premium}${item.barcodeId}</div>`;

      const taskNumber = document.createElement('div');
      taskNumber.className = 'taskNumber';
      taskNumber.innerHTML = `<div>/${item.taskNumber}${item.premium}</div>`;

      const nextStep = document.createElement('div');
      nextStep.className = 'nextStep';
      nextStep.innerHTML = `<div>${item.nextStep}</div>`;

      const laundrySector = document.createElement('div');
      laundrySector.className = 'laundrySector';
      laundrySector.innerHTML = `<div>${item.laundrySector}</div>`;

      if (item.premium === '') {
        laundrySector.style.right = '18%';
      }

      page.appendChild(qrCode);
      page.appendChild(qrCode2);
      page.appendChild(qrCode3);
      page.appendChild(qrCode4);
      page.appendChild(tastNumberAgent);
      page.appendChild(assignSwatId);
      page.appendChild(barcodeId);
      page.appendChild(taskNumber);
      page.appendChild(nextStep);
      page.appendChild(laundrySector);

      qr.onload = checkLoaded;

      return page;
    }

    function checkLoaded() {
      window.print();
      window.parent.postMessage({ receive: 'print' }, '*');
    }
  }, []);

  // You can replace this with your actual data
  const item = {
    koName: '페이지',
    taskNumber: 11147,
    assignSwatId: '2023_A',
    barcodeId: '810-9-99999',
    qrCode: '810999999',
    nextStep: '',
    premium: '',
  };

  return <div>Print Page</div>; // Change this to your actual content
};

export default PrintPage;
