import Cookies from "universal-cookie";

type SetLoginCookieProps = {
  accessToken: string;
  swatId: string;
  centerId: string;
  centerName: string;
};

export function setLoginCookie({
  accessToken,
  swatId,
  centerId,
  centerName,
}: SetLoginCookieProps) {
  // console.log("set");
  const cookies = new Cookies();

  cookies.set(
    "admin-cookie",
    `swatId=${encodeURIComponent(swatId)};accessToken=${encodeURIComponent(
      accessToken
    )};centerId=${encodeURIComponent(centerId)};centerName=${encodeURIComponent(
      centerName
    )}`,
    { sameSite: "none", secure: true, path: "/" }
  );
  cookies.set("swatId", encodeURIComponent(swatId), {
    sameSite: "none",
    secure: true,
    path: "/",
  });
  cookies.set("accessToken", encodeURIComponent(accessToken), {
    sameSite: "none",
    secure: true,
    path: "/",
  });
  cookies.set("centerName", encodeURIComponent(centerName), {
    sameSite: "none",
    secure: true,
    path: "/",
  });
  cookies.set("centerId", encodeURIComponent(centerId), {
    sameSite: "none",
    secure: true,
    path: "/",
  });
  cookies.set("x-washswat-token", encodeURIComponent(accessToken), {
    sameSite: "none",
    secure: true,
    path: "/",
  });
}

export function setLogoutCookie() {
  const cookies = new Cookies();
  cookies.remove("admin-cookie", {
    path: "/",
  });
  cookies.remove("accessToken", {
    path: "/",
  });
  cookies.remove("swatId", {
    path: "/",
  });
  cookies.remove("centerName", {
    path: "/",
  });
  cookies.remove("centerId", {
    path: "/",
  });
}

export function getCookie(cookieName: string) {
  const cookies = new Cookies();
  const cookie = cookies.get(cookieName);

  return cookie;
}
