(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5105],
  {
    38274: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Baloo 2', 'Baloo 2 Fallback'",
          fontStyle: "normal",
        },
        className: "__className_3276a6",
      };
    },
    54059: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 77886)),
        Promise.resolve().then(s.bind(s, 78118)),
        Promise.resolve().then(s.bind(s, 61779)),
        Promise.resolve().then(s.t.bind(s, 38274, 23));
    },
    78118: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => m });
      var l = s(95155),
        a = s(5772),
        c = s(12115),
        r = s(78340);
      let d = (0, r.A)("chevron-up", [
          ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
        ]),
        x = (0, r.A)("chevron-down", [
          ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
        ]);
      var i = s(36691),
        n = s(59185),
        o = s(54078);
      function m() {
        let { t: e } = (0, o.o)(),
          t = "https://spydoge-be.onrender.com",
          [s, r] = (0, c.useState)(!0),
          [m, h] = (0, c.useState)(!0),
          [f, p] = (0, c.useState)(null),
          [u, j] = (0, c.useState)(!0),
          [w, N] = (0, c.useState)("0"),
          [b, v] = (0, c.useState)(!1),
          { address: g, isConnected: y } = (0, i.w)();
        (0, c.useEffect)(() => {
          (async () => {
            try {
              let e = await fetch(`${t}/api/order/user-dashboard`),
                s = await e.json();
              p(s);
            } catch (e) {
              console.error("Error fetching data:", e);
            } finally {
              j(!1);
            }
          })();
        }, []),
          (0, c.useEffect)(() => {
            let e = async () => {
              if (!y || !g) return void N("0");
              v(!0);
              try {
                let e = await n.A.post(
                  `${t}/api/order/get-balance`,
                  { wallet_address: g },
                  { timeout: 1e4 }
                );
                if (e.data.status && void 0 !== e.data.data) {
                  let t = parseFloat(e.data.data);
                  N(t.toLocaleString("en-US", { maximumFractionDigits: 0 }));
                } else N("0");
              } catch (e) {
                console.error("Error fetching user balance:", e), N("0");
              } finally {
                v(!1);
              }
            };
            e();
            let s = setInterval(e, 3e4);
            return () => clearInterval(s);
          }, [y, g]);
        let k = g ? `${g.slice(0, 12)}.....${g.slice(-4)}` : "";
        return u
          ? (0, l.jsx)("p", {
              className: "text-center text-gray-500",
              children: "Loading...",
            })
          : f
          ? (0, l.jsxs)("div", {
              className: "flex flex-col bg-[#FFEC95] text-black items-center  ",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "w-full bg-[#FFEC95] shadow-lg flex flex-row justify-between items-center text-black text-left p-4 md:p-6 md:px-14 font-semibold",
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-xs md:text-sm",
                          children: e("Your Balance"),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "flex flex-col justify-center items-center gap-1 mt-1",
                          children: (0, l.jsxs)("h2", {
                            className: "text-sm md:text-2xl font-bold ",
                            children: ["  ", (y && w) || "0", " SPYD"],
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className: "text-xs md:text-sm",
                          children: e("Total Holders"),
                        }),
                        (0, l.jsx)("h2", {
                          className: "text-xs md:text-2xl font-bold",
                          children: f.totalHolder,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className: "text-xs md:text-sm text-right",
                          children: e("Total Sold"),
                        }),
                        (0, l.jsxs)("h2", {
                          className: "text-xs md:text-2xl font-bold ",
                          children: [f.totalSold, " SPYD"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full flex items-center justify-between bg-[#C4B1F3] px-4 text-black md:px-14 py-3 cursor-pointer",
                  onClick: () => r(!s),
                  children: [
                    (0, l.jsxs)("h2", {
                      className: "font-bold text-lg md:text-xl flex  gap-2",
                      children: [
                        (0, l.jsx)(a.default, {
                          src: "/crown.webp",
                          alt: "coin",
                          width: 100,
                          height: 100,
                          className:
                            "rounded-full object-cover w-8 md:w-12 h-8 md:h-12",
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex flex-col ",
                          children: [
                            (0, l.jsx)("p", { children: e("Top") }),
                            (0, l.jsx)("p", {
                              className: "text-[#A23D00]",
                              children: e("Leaderboard"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s
                      ? (0, l.jsx)(d, { className: "w-5 h-5" })
                      : (0, l.jsx)(x, { className: "w-5 h-5" }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: `w-full text-xs md:text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                    s ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`,
                  children: f.ranks?.map((e, t) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className: `flex flex-row items-center justify-between text-left px-2 md:px-14 py-2 md:py-4 ${
                          t % 2 == 0 ? "bg-[#FFADAF]" : "bg-[#C9EEFF]"
                        } text-black`,
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, l.jsx)(a.default, {
                                src: "/logo.png",
                                alt: "coin",
                                width: 100,
                                height: 100,
                                className:
                                  "rounded-full object-cover w-8 md:w-12 h-8 md:h-12",
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsxs)("p", {
                                    className:
                                      "text-sm md:text-xl font-semibold",
                                    children: [
                                      e._from.slice(0, 6),
                                      "...",
                                      e._from.slice(-4),
                                    ],
                                  }),
                                  (0, l.jsx)("p", {
                                    className:
                                      "text-[8px] md:text-xs opacity-75",
                                    children: "Address QTY",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "text-right w-[80px] md:w-[200px]",
                            children: [
                              (0, l.jsxs)("p", {
                                className: "font-bold md:text-xl",
                                children: [e.total_tokens, " SPYD"],
                              }),
                              (0, l.jsxs)("p", {
                                className:
                                  "text-[8px] md:text-xs opacity-75 text-right",
                                children: [
                                  "$",
                                  parseFloat(e.total_usd).toFixed(2),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "flex items-center justify-center w-[50px] justify-center self-center",
                            children:
                              "1" === e.rank
                                ? (0, l.jsx)(a.default, {
                                    src: "/rank1.webp",
                                    alt: "Rank 1",
                                    width: 600,
                                    height: 600,
                                    className: "w-7 md:w-full",
                                  })
                                : "2" === e.rank
                                ? (0, l.jsx)(a.default, {
                                    src: "/rank2.webp",
                                    alt: "Rank 2",
                                    width: 600,
                                    height: 600,
                                    className: "w-7 md:w-full",
                                  })
                                : "3" === e.rank
                                ? (0, l.jsx)(a.default, {
                                    src: "/rank3.webp",
                                    alt: "Rank 3",
                                    width: 600,
                                    height: 600,
                                    className: "w-7 md:w-full",
                                  })
                                : (0, l.jsx)("span", {
                                    className:
                                      " md:text-2xl text-black font-bold",
                                    children: e.rank,
                                  }),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full flex items-center justify-between bg-[#FFEC95] px-4  md:px-14 py-3 cursor-pointer ",
                  onClick: () => h(!m),
                  children: [
                    (0, l.jsxs)("h2", {
                      className:
                        "font-bold text-lg md:text-xl flex  gap-2 items-center ",
                      children: [
                        (0, l.jsx)(a.default, {
                          src: "/swap.webp",
                          alt: "coin",
                          width: 100,
                          height: 100,
                          className: " object-cover w-16",
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex flex-col ",
                          children: [
                            (0, l.jsx)("p", { children: "Your" }),
                            (0, l.jsx)("p", {
                              className: "",
                              children: "Swaps",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: " hover:bg-gray-200 rounded-md p-2",
                      children: m
                        ? (0, l.jsx)(d, { className: "w-5 h-5" })
                        : (0, l.jsx)(x, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: `w-full text-xs md:text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                    m ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`,
                  children: (0, l.jsxs)("div", {
                    className:
                      "text-center h-[250px] flex flex-col items-center justify-center  text-xl",
                    children: [
                      (0, l.jsx)("p", {
                        children: y ? k : e("Wallet not Connected"),
                      }),
                      (0, l.jsx)("p", { children: "No Swaps" }),
                    ],
                  }),
                }),
              ],
            })
          : (0, l.jsx)("p", {
              className: "text-center text-red-500",
              children: "No data found.",
            });
      }
    },
  },
  (e) => {
    e.O(
      0,
      [7777, 6961, 6711, 3718, 8500, 5807, 8388, 5024, 8441, 3794, 7358],
      () => e((e.s = 54059))
    ),
      (_N_E = e.O());
  },
]);
