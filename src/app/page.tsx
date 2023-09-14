"use client";
import QRCode from "./QRCode";
import { useEffect, useState } from "react";

type Props = {
  params: {};
  searchParams: { [key: string]: string };
};

export default function Page(props: Props) {
  const query = props.searchParams;
  const [params, setParams] = useState(query);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 자동으로 인쇄 대화 상자를 열도록 합니다.

    setParams(query);
  }, [query, query.barcodeId]);

  return (
    <>
      <div className="wrap">
        <div>
          <QRCode value={params.qrCode} />
          <div className="absolute flex top-[5%] left-[5%] text-left">
            {params.taskNumber} / {params.assignSwatId}
          </div>
          <div className="absolute flex top-[5%] right-[2%]">
            {params.koName} / {params.assignSwatId}
          </div>
          <div className="absolute flex top-[30%] left-[5%] text-left">
            {params.premium}
            {params.barcodeId}
          </div>
          <div className="absolute flex top-[30%] right-[2%] text-right">
            /{params.taskNumber}
            {params.premium}
          </div>
          <div className="absolute flex top-[38%] right-[34%] text-right text-xs">
            {params.nextStep}
          </div>
          <div
            className={`${
              params.premium === "" ? "right-[18%]" : "right-[22%]"
            } absolute flex top-[30%] text-right text-sm`}
          >
            {params.laundrySector}
          </div>
        </div>
      </div>
    </>
  );
}
