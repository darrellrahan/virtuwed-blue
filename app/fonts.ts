import localFont from "next/font/local";

export const benton = localFont({
  src: [
    {
      path: "./fonts/benton/BentonModDisp-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/benton/BentonModDisp-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/benton/BentonModDisp-Semibold.otf",
      weight: "600",
    },
    {
      path: "./fonts/benton/BentonModDisp-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/benton/BentonModDisp-Black.otf",
      weight: "900",
    },
  ],
});

export const lovelyCoffee = localFont({
  src: "./fonts/lovely-coffee/LovelyCoffee.otf",
});
