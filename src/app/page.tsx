// app/posts/page.ts
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page(props: Props) {
  const query = props.searchParams;

  function createPage(item) {
    const page = document.createElement("div");
    page.className = "page";

    const qrCode = document.createElement("div");
    qrCode.className = "qrCode";

    const qr = document.createElement("img");
    qr.src = `https://${host}/support/qrCode/${item.qrCode}/H`;
    qrCode.appendChild(qr);

    const qrCode2 = qrCode.cloneNode(true);
    qrCode2.className = "qrCode2";

    const qrCode3 = qrCode.cloneNode(true);
    qrCode3.className = "qrCode3";

    const qrCode4 = qrCode.cloneNode(true);
    qrCode4.className = "qrCode4";

    const tastNumberAgent = document.createElement("div");
    tastNumberAgent.className = "tastNumberAgent";
    tastNumberAgent.innerHTML = `<div>${item.taskNumber} / ${item.assignSwatId}</div>`;

    const assignSwatId = document.createElement("div");
    assignSwatId.className = "assignSwatId";
    assignSwatId.innerHTML = `<div>${item.koName} / ${item.assignSwatId}</div>`;

    const barcodeId = document.createElement("div");
    barcodeId.className = "barcodeId";
    barcodeId.innerHTML = `<div>${item.premium}${item.barcodeId}</div>`;

    const taskNumber = document.createElement("div");
    taskNumber.className = "taskNumber";
    taskNumber.innerHTML = `<div>/${item.taskNumber}${item.premium}</div>`;

    const nextStep = document.createElement("div");
    nextStep.className = "nextStep";
    nextStep.innerHTML = `<div>${item.nextStep}</div>`;

    const laundrySector = document.createElement("div");
    laundrySector.className = "laundrySector";
    laundrySector.innerHTML = `<div>${item.laundrySector}</div>`;

    if (item.premium === "") {
      laundrySector.style.right = "18%";
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
    window.parent.postMessage({ receive: "print" }, "*");
  }

  const item = {
    koName: query.koName || "",
    taskNumber: query.taskNumber || "",
    assignSwatId: query.assignSwatId || "",
    barcodeId: query.barcodeId || "",
    qrCode: query.qrCode || "",
    nextStep: query.nextStep || "",
    premium: query.premium || "",
  };
  return <h1>My Page</h1>;
}
