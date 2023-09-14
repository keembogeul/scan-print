"use client";
import { useEffect } from "react";
import { setLoginCookie } from "./cookie-utils";

export default function GlobalInit() {
  useEffect(() => {
    // setLoginCookie({
    //   accessToken:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOiIyLjAiLCJzeXN0ZW1UeXBlIjoiQSIsInVpZCI6MzYyNSwic3dhdElkIjoiYm9ubmllQHdhc2hzd2F0LmNvbSIsImtvTmFtZSI6IuuztOuLiCIsImlhdCI6MTY5MzUzMTE2NSwiZXhwIjoxNzI1MDY3MTY1fQ.WukO_DmHoLOB0Om2GMK7QWSYZhG-aZlzn3Xy5qi0vnc",
    //   swatId: "bonnie@washswat.com",
    //   centerId: "5a2e1e94733b2cb619c3c0c2",
    //   centerName: "바림공장",
    // });
  }, []);

  return <></>;
}
