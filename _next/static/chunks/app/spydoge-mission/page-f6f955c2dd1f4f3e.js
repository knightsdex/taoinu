(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4337],
  {
    11524: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 23578));
    },
    23578: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => n });
      var s = l(95155),
        r = l(12115);
      l(98500);
      var a = l(73321);
      let n = () => {
        let [e, t] = (0, r.useState)(!0),
          l = (0, a.useRouter)(),
          [n, o] = (0, r.useState)(!1),
          [c, i] = (0, r.useState)(!1),
          [d, m] = (0, r.useState)(!1),
          [u, x] = (0, r.useState)(!1),
          h = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = setTimeout(() => t(!1), 2e3),
              l = () => o(!!document.fullscreenElement);
            return (
              document.addEventListener("fullscreenchange", l),
              window.matchMedia("(min-width: 1024px)").matches,
              localStorage.getItem("spydoge_v1_popup") || x(!0),
              () => {
                clearTimeout(e),
                  document.removeEventListener("fullscreenchange", l);
              }
            );
          }, []),
          (0, s.jsxs)("div", {
            className:
              "min-h-screen bg-[#020617] text-white font-sans flex flex-col items-center justify-center p-2 relative overflow-hidden",
            children: [
              d &&
                (0, s.jsx)("div", {
                  className:
                    "fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center px-4",
                  children: (0, s.jsxs)("div", {
                    className:
                      "relative max-w-lg w-full bg-slate-900 border border-green-500/40 rounded-2xl p-8",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full bg-green-500 text-black text-[10px] font-bold text-center py-1 rounded-t-2xl",
                        children: "\uD83D\uDE80 MISSION VERSION UPDATE",
                      }),
                      (0, s.jsxs)("div", {
                        className: "mt-6 text-center",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-2xl font-black text-green-400",
                            children: "SPYDOGE MISSION V1",
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-4 text-gray-300",
                            children: "This is Version 1 of the mission.",
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-3 text-gray-400",
                            children:
                              "Version 2 update arriving next week with major upgrades like player, mission and many more.",
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => {
                              localStorage.setItem("spydoge_v1_popup", "true"),
                                m(!1);
                            },
                            className:
                              "mt-6 w-full py-3 bg-green-500 text-black font-bold rounded-lg",
                            children: "▶ START MISSION",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (0, s.jsxs)("div", {
                ref: h,
                className: `relative w-full transition-all duration-500 
          ${
            n
              ? "h-screen w-screen max-w-none p-0 m-0 border-0 rounded-none bg-black"
              : "max-w-7xl border border-cyan-500/30 px-8 py-10 lg:py-1 lg:pb-2 rounded-sm bg-slate-950/50 backdrop-blur-md"
          }`,
                children: [
                  !n &&
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-row justify-between items-center mb-1",
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("h1", {
                              className:
                                "text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-none",
                              children: [
                                "MISSION: ",
                                (0, s.jsx)("span", {
                                  className: "text-green-500",
                                  children: "PLAY",
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-cyan-400 font-mono text-xs tracking-[0.2em] mt-1 uppercase",
                              children: "// Unleash Your Inner Agent",
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => {
                            document.fullscreenElement
                              ? document.exitFullscreen()
                              : h.current?.requestFullscreen().catch((e) => {
                                  console.error(`Error: ${e.message}`);
                                });
                          },
                          className:
                            "py-2 bg-transparent border-2 border-green-500 text-green-500 font-black text-sm px-4 hidden lg:flex",
                          children: "ACTIVATE FULLSCREEN",
                        }),
                      ],
                    }),
                  u &&
                    (0, s.jsx)("div", {
                      className:
                        "fixed inset-0 z-[998] bg-slate-950 flex flex-col items-center justify-center p-6 text-center lg:hidden",
                      children: (0, s.jsxs)("div", {
                        className:
                          "relative bg-gradient-to-br from-black via-gray-900 to-black border border-yellow-500/40 rounded-2xl p-6 shadow-[0_0_20px_rgba(252,228,21,0.25)] overflow-hidden w-full max-w-sm",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-full bg-yellow-500 text-black text-[10px] font-bold tracking-widest text-center py-1",
                            children: "⚠ CLASSIFIED ACCESS",
                          }),
                          (0, s.jsxs)("div", {
                            className: "mt-6 text-center",
                            children: [
                              (0, s.jsx)("h2", {
                                className:
                                  "text-xl font-extrabold text-yellow-400 tracking-wider animate-pulse",
                                children: "\uD83D\uDD76 SPYDOGE MISSION",
                              }),
                              (0, s.jsxs)("p", {
                                className:
                                  "text-sm mt-3 text-gray-300 leading-relaxed",
                                children: [
                                  "Agent, this mission is optimized for",
                                  " ",
                                  (0, s.jsx)("span", {
                                    className: "text-white font-semibold",
                                    children: "Desktop Command Centers",
                                  }),
                                  ".",
                                ],
                              }),
                              (0, s.jsxs)("p", {
                                className: "text-xs mt-2 text-gray-500",
                                children: [
                                  "For full controls & immersive gameplay —",
                                  (0, s.jsxs)("span", {
                                    className: "text-yellow-400 font-semibold",
                                    children: [" ", "switch to PC or Laptop."],
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "mt-4 text-[11px] text-red-400 tracking-widest animate-pulse",
                                children:
                                  "\uD83D\uDD12 MOBILE ACCESS RESTRICTED",
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => l.push("/"),
                                className:
                                  "mt-6 w-full py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300",
                                children: "BACK TO HOME",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  (0, s.jsxs)("div", {
                    className: `relative mt-5 lg:mt-0 ${
                      n
                        ? "h-full w-full"
                        : "aspect-video rounded-xl lg:border-2 border-cyan-500/40 lg:overflow-hidden"
                    }`,
                    children: [
                      e &&
                        (0, s.jsx)("div", {
                          className:
                            "absolute inset-0 z-30 bg-slate-950 flex items-center justify-center hidden lg:flex",
                          children: (0, s.jsx)("div", {
                            className:
                              "w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin",
                          }),
                        }),
                      (0, s.jsx)("iframe", {
                        src: "https://game.spydoge.com/?autoplay=1&controls=0&loop=1&mute=1",
                        className:
                          "w-full hidden lg:block h-full border-none relative z-10",
                        allow: "autoplay; gamepad; keyboard",
                        allowFullScreen: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    73321: (e, t, l) => {
      "use strict";
      var s = l(74645);
      l.o(s, "usePathname") &&
        l.d(t, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        l.o(s, "useRouter") &&
          l.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        l.o(s, "useSearchParams") &&
          l.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
  },
  (e) => {
    e.O(0, [8500, 8441, 3794, 7358], () => e((e.s = 11524))), (_N_E = e.O());
  },
]);
