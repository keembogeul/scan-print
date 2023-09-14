// "use client";
// import { useEffect, useState } from "react";
// import styles from "./PrintPage.module.css";
// import Image from "next/image";

// type Props = {
//   info: {
//     host: string;
//     barcodeId: string;
//     qrCode: string;
//     nextStep: string;
//     premium: string;
//     taskNumber: string;
//     assignSwatId: string;
//     koName: string;
//     laundrySector: string;
//   };
// };

// function PrintPage({ info }: Props) {
//   const [itemInfo, setItemInfo] = useState(null);

//   const handleKeyUp = (e: KeyboardEvent): void => {
//     console.log(e.key);
//     if (e.key === "q" || e.key === "1") {
//       window.parent.postMessage({ receive: "washingComplete" }, "*");
//     } else if (e.key === "2") {
//       window.parent.postMessage({ receive: "reLaundry" }, "*");
//     } else if (e.key === "3") {
//       window.parent.postMessage({ receive: "repairNeeded" }, "*");
//     }
//   };

//   useEffect(() => {
//     let data;
//     let host: string;

//     window.parent.addEventListener("keyup", handleKeyUp);

//     window.addEventListener("message", receiveMessage); // 메세지 받기

//     function receiveMessage(e: {
//       data: { type: string; host: string; data: any };
//     }) {
//       if (e.data.type === "createPage") {
//         host = e.data.host;
//         document.body.innerHTML = "";
//         data = e.data.data;
//         const page = createPage(data);
//         document.body.appendChild(page);
//       }
//     }

//     host = info.host;
//     document.body.innerHTML = "";
//     data = {
//       barcodeId: info.barcodeId,
//       qrCode: info.qrCode,
//       nextStep: info.nextStep,
//       premium: info.premium,
//       taskNumber: info.taskNumber,
//       assignSwatId: info.assignSwatId,
//       koName: info.koName,
//       laundrySector: info.laundrySector,
//     };
//     const page = createPage(data);
//     document.body.appendChild(page);

//     function createPage(item: {
//       qrCode: string;
//       taskNumber: string;
//       assignSwatId: string;
//       koName: string;
//       premium: string;
//       barcodeId: string;
//       nextStep: string;
//       laundrySector: string;
//     }) {
//       const page = document.createElement("div");
//       page.className = styles.page;

//       const qrCode = document.createElement("div");
//       qrCode.className = styles.qrCode;

//       const qr = document.createElement("img");
//       qr.src = `https://${host}/support/qrCode/${item.qrCode}/H`;
//       qrCode.appendChild(qr);

//       const qrCode2 = qrCode.cloneNode(true) as HTMLDivElement;
//       qrCode2.className = styles.qrCode2;

//       const qrCode3 = qrCode.cloneNode(true) as HTMLDivElement;
//       qrCode3.className = styles.qrCode3;

//       const qrCode4 = qrCode.cloneNode(true) as HTMLDivElement;
//       qrCode4.className = styles.qrCode4;

//       const tastNumberAgent = document.createElement("div");
//       tastNumberAgent.className = styles.tastNumberAgent;
//       tastNumberAgent.innerHTML = `<div>${item.taskNumber} / ${item.assignSwatId}</div>`;

//       const assignSwatId = document.createElement("div");
//       assignSwatId.className = styles.assignSwatId;
//       assignSwatId.innerHTML = `<div>${item.koName} / ${item.assignSwatId}</div>`;

//       const barcodeId = document.createElement("div");
//       barcodeId.className = styles.barcodeId;
//       barcodeId.innerHTML = `<div>${item.premium}${item.barcodeId}</div>`;

//       const taskNumber = document.createElement("div");
//       taskNumber.className = styles.taskNumber;
//       taskNumber.innerHTML = `<div>/${item.taskNumber}${item.premium}</div>`;

//       const nextStep = document.createElement("div");
//       nextStep.className = styles.nextStep;
//       nextStep.innerHTML = `<div>${item.nextStep}</div>`;

//       const laundrySector = document.createElement("div");
//       laundrySector.className = styles.laundrySector;
//       laundrySector.innerHTML = `<div>${item.laundrySector}</div>`;

//       if (item.premium === "") {
//         laundrySector.style.right = "18%";
//       }

//       page.appendChild(qrCode);
//       page.appendChild(qrCode2);
//       page.appendChild(qrCode3);
//       page.appendChild(qrCode4);
//       page.appendChild(tastNumberAgent);
//       page.appendChild(assignSwatId);
//       page.appendChild(barcodeId);
//       page.appendChild(taskNumber);
//       page.appendChild(nextStep);
//       page.appendChild(laundrySector);

//       qr.onload = checkLoaded;

//       return page;
//     }

//     // 컴포넌트 언마운트 시 리스너 제거
//     return () => {
//       window.parent.removeEventListener("keyup", handleKeyUp);
//     };
//   }, [
//     info.assignSwatId,
//     info.barcodeId,
//     info.host,
//     info.koName,
//     info.laundrySector,
//     info.nextStep,
//     info.premium,
//     info.qrCode,
//     info.taskNumber,
//   ]);

//   function checkLoaded() {
//     window.print();
//     console.log("print");
//     window.parent.postMessage({ receive: "print" }, "*");
//   }

//   // You can replace this with your actual data
//   // const item = {
//   //   koName: "페이지",
//   //   taskNumber: 11147,
//   //   assignSwatId: "2023_A",
//   //   barcodeId: "810-9-99999",
//   //   qrCode: "810999999",
//   //   nextStep: "",
//   //   premium: "",
//   // };

//   return (
//     <div className={styles.page}>
//       <div className={styles.qrCode}>
//         <Image
//           src={`https://bo-devel.washswat.com/support/qrCode/${item.qrCode}/H`}
//           width={120}
//           height={120}
//           alt="qrCode"
//         ></Image>
//       </div>
//     </div>
//   ); // Change this to your actual content
// }

// export default PrintPage;
