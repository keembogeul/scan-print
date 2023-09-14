"use client";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { useEffect } from "react";

type Props = {
  value: string;
};
export default function QRCode({ value }: Props) {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 자동으로 인쇄 대화 상자를 열도록 합니다.
    window.print();
  }, []);
  return (
    <>
      <QRCodeSVG
        value={value}
        className="absolute flex top-[55%] left-[-5%] h-[40%]"
      />
      <QRCodeSVG
        value={value}
        className="absolute flex top-[55%] left-[18%] h-[40%]"
      />
      <QRCodeSVG
        value={value}
        className="absolute flex top-[55%] right-[18%] h-[40%]"
      />
      <QRCodeSVG
        value={value}
        className="absolute flex top-[55%] right-[-7%] h-[40%]"
      />
    </>
  );
}
