"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5024],
  {
    55007: (e, s, t) => {
      t.d(s, { A: () => c });
      var l = t(95155),
        a = t(12115),
        i = t(54078),
        r = t(63090),
        n = t(30063),
        o = t.n(n);
      function c({ direction: e }) {
        let [s, t] = (0, a.useState)(!1),
          { locale: n, changeLanguage: c } = (0, i.o)(),
          [d, x] = (0, a.useState)(!1),
          h = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (s && h.current && !e) {
              let e = h.current.getBoundingClientRect(),
                s = window.innerHeight - e.bottom,
                t = e.top;
              x(s < 200 && t > s);
            } else "up" === e ? x(!0) : "down" === e && x(!1);
          }, [s, e]),
          (0, l.jsxs)("div", {
            className: `${o().className} relative inline-block text-left`,
            children: [
              (0, l.jsxs)("button", {
                ref: h,
                className:
                  "flex gap-3 text-md items-center text-black px-6 [box-shadow:0px_4px_0px_0px_black] py-3 font-semibold rounded-b-md transition bg-white hover:bg-pink-500 hover:shadow-lg",
                onClick: () => t(!s),
                children: [
                  (0, l.jsx)("span", {
                    className: "text-md",
                    children: r.kC[n],
                  }),
                  " ",
                  r.ip[n],
                  (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-5 h-5 text-black",
                    children: (0, l.jsx)("path", { d: "M6 9l6 6 6-6" }),
                  }),
                ],
              }),
              s &&
                (0, l.jsx)("div", {
                  className: `absolute w-40 rounded-md shadow-lg ring-1 ring-black  ring-opacity-5 py-1 z-30 text-black   font-semibold 
            ${
              d
                ? "bottom-full mb-2 bg-pink-500 "
                : "top-full mt-2 bg-pink-500   "
            }
          `,
                  children: (0, l.jsx)("div", {
                    className:
                      "  bg-pink-500 overflow-y-auto h-80 custom-scroll",
                    style: {
                      scrollbarWidth: "thin",
                      scrollbarColor: "pink black",
                    },
                    children: r.IB.map((e) =>
                      (0, l.jsx)(
                        "li",
                        {
                          className: "flex items-center",
                          children: (0, l.jsxs)("button", {
                            className: `dropdown-item flex items-center w-full justify-start py-2 px-4 ${
                              n === e
                                ? "bg-orange-500 text-white"
                                : "hover:bg-gray-100"
                            }`,
                            onClick: () => {
                              c(e), t(!1);
                            },
                            children: [
                              (0, l.jsx)("span", {
                                className: "me-2",
                                children: r.kC[e],
                              }),
                              " ",
                              r.ip[e],
                            ],
                          }),
                        },
                        e
                      )
                    ),
                  }),
                }),
            ],
          })
        );
      }
    },
    61779: (e, s, t) => {
      t.d(s, { default: () => u });
      var l = t(95155),
        a = t(5772),
        i = t(98500),
        r = t.n(i),
        n = t(12115),
        o = t(73321),
        c = t(36691),
        d = t(54078);
      t(55007);
      var x = t(81131),
        h = t(63090),
        p = t(27015),
        m = t.n(p);
      function f({ direction: e }) {
        let [s, t] = (0, n.useState)(!1),
          { locale: a, changeLanguage: i } = (0, d.o)(),
          [r, o] = (0, n.useState)(!1),
          c = (0, n.useRef)(null);
        // return (
        //   (0, n.useEffect)(() => {
        //     if (s && c.current && !e) {
        //       let e = c.current.getBoundingClientRect(),
        //         s = window.innerHeight - e.bottom,
        //         t = e.top;
        //       o(s < 200 && t > s);
        //     } else "up" === e ? o(!0) : "down" === e && o(!1);
        //   }, [s, e]),
        //   (0, l.jsxs)("div", {
        //     className: `${m().className} relative inline-block text-left`,
        //     children: [
        //       (0, l.jsxs)("button", {
        //         ref: c,
        //         className:
        //           "flex gap-3 text-md items-center text-black px-6 [box-shadow:0px_4px_0px_0px_black] py-1 font-semibold rounded-md border border-black transition bg-[#FB9203] hover:bg-pink-500 hover:shadow-lg",
        //         onClick: () => t(!s),
        //         children: [
        //           (0, l.jsx)("span", {
        //             className: "text-md",
        //             children: h.kC[a],
        //           }),
        //           " ",
        //           h.ip[a],
        //           (0, l.jsx)("svg", {
        //             xmlns: "http://www.w3.org/2000/svg",
        //             viewBox: "0 0 24 24",
        //             fill: "none",
        //             stroke: "currentColor",
        //             strokeWidth: "2",
        //             strokeLinecap: "round",
        //             strokeLinejoin: "round",
        //             className: "w-5 h-5 text-black",
        //             children: (0, l.jsx)("path", { d: "M6 9l6 6 6-6" }),
        //           }),
        //         ],
        //       }),
        //       s &&
        //         (0, l.jsx)("div", {
        //           className: `absolute w-40 rounded-md shadow-lg ring-1 ring-black  ring-opacity-5 py-1 z-30 text-black   font-semibold 
        //     ${
        //       r
        //         ? "bottom-full mb-2 bg-pink-500 "
        //         : "top-full mt-2 bg-pink-500   "
        //     }
        //   `,
        //           children: (0, l.jsx)("div", {
        //             className:
        //               "  bg-pink-500 overflow-y-auto h-80 custom-scroll",
        //             style: {
        //               scrollbarWidth: "thin",
        //               scrollbarColor: "pink black",
        //             },
        //             children: h.IB.map((e) =>
        //               (0, l.jsx)(
        //                 "li",
        //                 {
        //                   className: "flex items-center",
        //                   children: (0, l.jsxs)("button", {
        //                     className: `dropdown-item flex items-center w-full justify-start py-2 px-4 ${
        //                       a === e
        //                         ? "bg-orange-500 text-white"
        //                         : "hover:bg-gray-100"
        //                     }`,
        //                     onClick: () => {
        //                       i(e), t(!1);
        //                     },
        //                     children: [
        //                       (0, l.jsx)("span", {
        //                         className: "me-2",
        //                         children: h.kC[e],
        //                       }),
        //                       " ",
        //                       h.ip[e],
        //                     ],
        //                   }),
        //                 },
        //                 e
        //               )
        //             ),
        //           }),
        //         }),
        //     ],
        //   })
        // );
      }
      var g = t(20144),
        b = t.n(g);
      function w() {
        let { t: e } = (0, d.o)(),
          s = [, , , , ,].fill(
            (0, l.jsxs)("span", {
              children: [
                (0, l.jsx)("span", {
                  className: "text-black font-bold",
                  children: "Scam Alert:",
                }),
                " ",
                (0, l.jsx)("span", {
                  children:
                    "Safety Warning : Always verify our official website: www.spydoge.com. SpyDoge (SPYD) is NOT listed on any platform and is still in the presale stage. Do NOT click unknown links, share personal information, or send funds to anyone claiming to be from the team. Stay safe.| Beware of Scams! | The SpyDoge Team will NEVER contact you directly through social media or messaging apps.",
                }),
              ],
            })
          );
        
      }
      function u() {
        let { t: e } = (0, d.o)(),
          { data: s } = (0, x.A)(),
          [t, i] = (0, n.useState)(!1),
          h = (0, o.usePathname)(),
          [p, m] = (0, n.useState)(h);
        (0, n.useEffect)(() => {
          m(window.location.pathname + window.location.hash);
        }, [h]);
        let { address: g, isConnected: u } = (0, c.w)();
        g && (g.slice(0, 6), g.slice(-4));
        let j = (e) =>
            `px-5 flex self-center items-center py-1 border border-black rounded-lg tracking-widest cursor-pointer shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-black transition hover:bg-white hover:shadow-lg duration-300 ${
              p === e ? "bg-white " : "bg-[#FB9203] "
            }`,
          v = [
            { path: "/#home", label: e("Home") },
            { path: "/#roadmap", label: e("Roadmap") },
            { path: "/#tokenomics", label: e("Tokenomics") },
          ];
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className: `${b().className} relative w-full   z-50`,
            children: [
              (0, l.jsxs)("nav", {
                className: " w-full h-fit bg-[#B468C6] items-center py-1",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "flex justify-between items-center lg:hidden px-5",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex items-center py-1",
                        children: [
                          (0, l.jsx)(a.default, {
                            src: "/logo.png",
                            alt: "Logo",
                            width: 100,
                            height: 100,
                            className: "w-10",
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "font-bold tracking-wide text-xl uppercase ",
                            children: e("spydoge"),
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        onClick: () => i(!0),
                        children: (0, l.jsx)(a.default, {
                          src: "/hum.webp",
                          width: 100,
                          height: 100,
                          alt: "Menu",
                          className: "w-5",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "hidden lg:flex px-5 justify-between items-center py-1",
                    children: [
                      (0, l.jsx)(r(), {
                        href: "/",
                        children: (0, l.jsxs)("div", {
                          className: "hidden md:flex gap-2 items-center",
                          children: [
                            (0, l.jsx)(a.default, {
                              src: "/logo.png",
                              alt: "Logo",
                              width: 100,
                              height: 100,
                              className: "w-10",
                            }),
                            (0, l.jsx)("div", {
                              className: " tracking-widest text-2xl  uppercase",
                              children: e("TAO INU"),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "hidden lg:flex items-center gap-5 text-[11px] ",
                        children: [
                          // (0, l.jsx)("div", {
                          //   className: j(),
                          //   children: (0, l.jsx)(r(), {
                          //     href: "https://spydoge.s3.us-east-1.amazonaws.com/whitepaper.pdf",
                          //     target: "_blank",
                          //     children: e("Whitepaper"),
                          //   }),
                          // }),
                          v.map((e) =>
                            (0, l.jsx)(
                              r(),
                              {
                                href: e.path,
                                className: "",
                                onClick: () => m(e.path),
                                children: (0, l.jsx)("button", {
                                  className: j(e.path),
                                  children: e.label,
                                }),
                              },
                              e.path
                            )
                          ),
                          (0, l.jsx)(f, { direction: "down" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("div", { className: "", children: (0, l.jsx)(w, {}) }),
              (0, l.jsxs)("div", {
                className: `fixed top-0 right-0 h-full w-64 bg-[rgba(192,51,182,1)] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                  t ? "translate-x-0" : "translate-x-full"
                }`,
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex justify-between p-4 lg:hidden",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, l.jsx)(a.default, {
                            src: "/logo.png",
                            alt: "Logo",
                            width: 100,
                            height: 100,
                            className: "w-10",
                          }),
                          (0, l.jsx)("p", {
                            className: "font-bold tracking-wide text-xl",
                            children: "SPYDOGE",
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        onClick: () => i(!1),
                        children: (0, l.jsx)("p", {
                          className: "font-bold text-black",
                          children: "X",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("nav", {
                    className: "flex flex-col gap-4 px-6 py-5",
                    children: v.map((e) =>
                      (0, l.jsx)(
                        r(),
                        {
                          href: e.path,
                          onClick: () => {
                            m(e.path), i(!1);
                          },
                          children: (0, l.jsx)("button", {
                            className: j(e.path),
                            children: e.label,
                          }),
                        },
                        e.path
                      )
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: `px-7 mx-5 w-fit py-2  rounded-lg font-bold tracking-wider cursor-pointer shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FB9203] transition-colors text-black transition hover:bg-white hover:shadow-lg duration-300 
             `,
                    // children: (0, l.jsx)(r(), {
                    //   href: "https://spydoge.s3.us-east-1.amazonaws.com/whitepaper.pdf",
                    //   target: "_blank",
                    //   children: e("Whitepaper"),
                    // }),
                  }),
                ],
              }),
              t &&
                (0, l.jsx)("div", {
                  className: "fixed inset-0 bg-black/50 z-40",
                  onClick: () => i(!1),
                }),
            ],
          }),
        });
      }
    },
    77886: (e, s, t) => {
      t.d(s, { default: () => f });
      var l = t(95155),
        a = t(98500),
        i = t.n(a),
        r = t(5772),
        n = t(8238),
        o = t(56204),
        c = t(12505),
        d = t(35092),
        x = t.n(d),
        h = t(55007),
        p = t(54078),
        m = t(36691);
      function f() {
        let { t: e } = (0, p.o)(),
          { address: s, isConnected: t } = (0, m.w)(),
          a = s ? `${s.slice(0, 6)}...${s.slice(-4)}` : "";
        return (0, l.jsx)("div", {
          id: "contact-us",
          className: ` ${x().className} `,
          children: (0, l.jsx)("footer", {
            className: "bg-[url('/footer.png')] bg-cover bg-no-repeat w-full ",
            children: (0, l.jsxs)("div", {
              className:
                "max-w-[1500px] mx-auto px-3 md:px-16 pt-[70px] pb-[40px]",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "hidden  md:flex flex-col md:flex-row justify-between items-center items-start gap-8 mb-10",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex-1 max-w-[300px] relative flex justify-center items-center",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute w-48 h-48 bg-gradient-to-r from-white to-white rounded-full blur-2xl",
                        }),
                        (0, l.jsx)(r.default, {
                          src: "/footlogo.png",
                          alt: "Virtupace VR Headset",
                          width: 400,
                          height: 400,
                          className: "w-72 relative z-10",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "absolute bottom-0 w-40 h-10 bg-gradient-to-r from-black to-black rounded-full blur-lg",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex-2 max-w-[370px] md:px-4 pt-10 text-center lg:text-left",
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            " text-[16px] tracking-wider leading-6 font-montserrat",
                          children: e(
                            "Tao Inu isn’t just a coin it’s a classified operation. No rugs, No taxes, Just stealth, memes, and green candles. Join the mission, agent. The world of memes needs you."
                          ),
                        }),
                        // (0, l.jsxs)("div", {
                        //   className: "mt-5 text-white",
                        //   children: [
                        //     " ",
                        //     e("Contact Us"),
                        //     " : team@spydoge.com",
                        //   ],
                        // }),
                        
                        (0, l.jsx)("p", {
                          className: "text-gray-300 text-xs text-left pt-16",
                          children: e("\xa9 2026 Tao Inu All rights reserved."),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "flex-2 text-[16px] grid grid-cols-2 pt-10 md:gap-14",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "flex flex-col gap-10 font-bold",
                              children: [
                                (0, l.jsx)(i(), {
                                  href: "/#home",
                                  children: (0, l.jsx)("span", {
                                    className:
                                      "text-white hover:text-pink-500 cursor-pointer",
                                    children: e("Home"),
                                  }),
                                }),
                                // (0, l.jsx)("a", {
                                //   href: "https://spydoge.s3.us-east-1.amazonaws.com/whitepaper.pdf",
                                //   target: "_blank",
                                //   className:
                                //     "text-white hover:text-pink-500 cursor-pointer",
                                //   children: e("Whitepaper"),
                                // }),
                                // (0, l.jsx)(i(), {
                                //   href: "/dashboard",
                                //   children: (0, l.jsx)("span", {
                                //     className:
                                //       "text-white hover:text-pink-500 cursor-pointer",
                                //     children: e("Dashboard"),
                                //   }),
                                // }),
                              ],
                            }),
                            // (0, l.jsxs)("div", {
                            //   className: "flex flex-col gap-10 font-bold",
                            //   children: [
                            //     (0, l.jsx)(i(), {
                            //       href: "/",
                            //       children: (0, l.jsx)("span", {
                            //         className:
                            //           "text-white hover:text-pink-500 cursor-pointer",
                            //         children: e("TAKEAWAY"),
                            //       }),
                            //     }),
                            //     (0, l.jsx)(i(), {
                            //       href: "/terms-and-conditions",
                            //       children: (0, l.jsx)("span", {
                            //         className:
                            //           "text-white hover:text-pink-500 cursor-pointer",
                            //         children: e("Terms & Conditions"),
                            //       }),
                            //     }),
                            //     (0, l.jsx)(i(), {
                            //       href: "/privacy-policy",
                            //       children: (0, l.jsx)("span", {
                            //         className:
                            //           "text-white hover:text-pink-500 cursor-pointer",
                            //         children: e("Privacy Policy"),
                            //       }),
                            //     }),
                            //   ],
                            // }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "flex flex-col md:flex-row justify-between items-center gap-4 pt-20",
                          children: (0, l.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              // (0, l.jsx)("a", {
                              //   href: "https://www.instagram.com/spydogecoin/",
                              //   target: "_blank",
                              //   className:
                              //     "w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#AC8EFF] text-white hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                              //   children: (0, l.jsx)(n.A, { size: 25 }),
                              // }),
                              (0, l.jsx)("a", {
                                href: "https://t.me/taoinu_erc",
                                target: "_blank",
                                className:
                                  "w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#AC8EFF] text-white hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                                children: (0, l.jsx)(o.A, { size: 25 }),
                              }),
                              (0, l.jsx)("a", {
                                href: "https://x.com/taoinu_erc",
                                target: "_blank",
                                className:
                                  "w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#AC8EFF] text-white hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                                children: (0, l.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: 25,
                                  height: 25,
                                  fill: "white",
                                  viewBox: "0 0 24 24",
                                  children: (0, l.jsx)("path", {
                                    d: "M18.244 2H21.5l-7.57 8.68L22 22h-6.845l-5.358-6.447L3.756 22H.5l8.092-9.292L2 2h6.963l4.835 5.838L18.244 2zm-2.403 18h2.356L8.284 4h-2.52l10.077 16z",
                                  }),
                                }),
                              }),
                              // (0, l.jsx)("a", {
                              //   href: "https://discord.com/channels/1410942968101081223/1410942968923426892",
                              //   target: "_blank",
                              //   rel: "noopener noreferrer",
                              //   className:
                              //     "w-[50px] h-[50px] rounded-full bg-[#AC8EFF] text-white flex items-center justify-center hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                              //   "aria-label": "Discord",
                              //   children: (0, l.jsx)(c.O4U, {
                              //     className: "w-8 h-8",
                              //   }),
                              // }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "md:hidden flex flex-col-reverse justify-between items-center ",
                  children: [
                    (0, l.jsx)("div", {
                      className: "flex flex-row ",
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col text-center pt-4",
                        children: [
                          (0, l.jsx)("p", {
                            className:
                              " text-[16px] tracking-widest leading-6 font-montserrat",
                            children: e(
                              "Tao Inu isn’t just a coin it’s a classified operation. No rugs, No taxes, Just stealth, memes, and green candles. Join the mission, agent. The world of memes needs you."
                            ),
                          }),
                          (0, l.jsxs)("div", {
                            className: "mt-5 text-white",
                            children: [
                              " ",
                              e("Contact Us"),
                              " : team@spydoge.com",
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex flex-row justify-center lg:justify-start items-center gap-4 text-sm font-semibold mt-5",
                            children: [
                              (0, l.jsx)(h.A, { direction: "up" }),
                              (0, l.jsx)(i(), {
                                href: "/#home",
                                children: (0, l.jsx)("button", {
                                  className:
                                    "bg-white [box-shadow:0px_4px_0px_0px_black] text-black px-4 py-3 rounded-b-md transition hover:bg-pink-500 hover:shadow-lg",
                                  children: t ? a : e("Connect Wallet"),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "text-gray-300 text-xs text-center mt-5 pt-4 border-t",
                            children: e(
                              "\xa9 2025 Spydoge All rights reserved."
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "flex-2 text-[16px]  w-full flex flex-row  justify-between pt-0 gap-2",
                          children: [
                            // (0, l.jsx)("div", {
                            //   className: "flex-1 flex items-center",
                            //   children: (0, l.jsx)(r.default, {
                            //     src: "/footlogo.png",
                            //     alt: "Virtupace VR Headset",
                            //     width: 400,
                            //     height: 400,
                            //     className: "w-32 relative z-10",
                            //   }),
                            // }),
                            (0, l.jsxs)("div", {
                              className: "flex text-xs items-center gap-2",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col gap-5 font-bold",
                                  children: [
                                    (0, l.jsx)(i(), {
                                      href: "/#home",
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "text-white hover:text-pink-500 cursor-pointer",
                                        children: e("Home"),
                                      }),
                                    }),
                                    // (0, l.jsx)("a", {
                                    //   href: "https://spydoge.s3.us-east-1.amazonaws.com/whitepaper.pdf",
                                    //   target: "_blank",
                                    //   className:
                                    //     "text-white hover:text-pink-500 cursor-pointer",
                                    //   children: e("Whitepaper"),
                                    // }),
                                    // (0, l.jsx)(i(), {
                                    //   href: "/dashboard",
                                    //   children: (0, l.jsx)("span", {
                                    //     className:
                                    //       "text-white hover:text-pink-500 cursor-pointer",
                                    //     children: e("Dashboard"),
                                    //   }),
                                    // }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col gap-5 font-bold",
                                  children: [
                                    (0, l.jsx)(i(), {
                                      href: "/",
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "text-white hover:text-pink-500 cursor-pointer",
                                        children: e("TAKEAWAY"),
                                      }),
                                    }),
                                    (0, l.jsx)(i(), {
                                      href: "/terms-and-conditions",
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "text-white hover:text-pink-500 cursor-pointer",
                                        children: e("Terms & Conditions"),
                                      }),
                                    }),
                                    (0, l.jsx)(i(), {
                                      href: "/privacy-policy",
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "text-white hover:text-pink-500 cursor-pointer",
                                        children: e("Privacy Policy"),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "flex flex-col md:flex-row justify-between items-center gap-4 py-5 border-b",
                          children: (0, l.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              // (0, l.jsx)("a", {
                              //   href: "https://www.instagram.com/spydogecoin/",
                              //   target: "_blank",
                              //   className:
                              //     "w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#AC8EFF] text-white hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                              //   children: (0, l.jsx)(n.A, { size: 25 }),
                              // }),
                              (0, l.jsx)("a", {
                                href: "https://t.me/taoinu_erc",
                                target: "_blank",
                                className:
                                  "w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#AC8EFF] text-white hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                                children: (0, l.jsx)(o.A, { size: 25 }),
                              }),
                              (0, l.jsx)("a", {
                                href: "https://x.com/taoinu_erc",
                                target: "_blank",
                                className:
                                  "w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#AC8EFF] text-white hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                                children: (0, l.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: 25,
                                  height: 25,
                                  fill: "white",
                                  viewBox: "0 0 24 24",
                                  children: (0, l.jsx)("path", {
                                    d: "M18.244 2H21.5l-7.57 8.68L22 22h-6.845l-5.358-6.447L3.756 22H.5l8.092-9.292L2 2h6.963l4.835 5.838L18.244 2zm-2.403 18h2.356L8.284 4h-2.52l10.077 16z",
                                  }),
                                }),
                              }),
                              // (0, l.jsx)("a", {
                              //   href: "https://discord.com/channels/1410942968101081223/1410942968923426892",
                              //   target: "_blank",
                              //   rel: "noopener noreferrer",
                              //   className:
                              //     "w-[40px] h-[40px] rounded-full bg-[#AC8EFF] text-white flex items-center justify-center hover:bg-[#505050] [box-shadow:3px_3px_0px_0px_black]",
                              //   "aria-label": "Discord",
                              //   children: (0, l.jsx)(c.O4U, {
                              //     className: "w-8 h-8",
                              //   }),
                              // }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
