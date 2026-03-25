(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    39269: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => a });
      var s = i(12115);
      let a = () => (
        (0, s.useEffect)(() => {
          let e = (e) => e.preventDefault(),
            t = (e) => {
              ("F12" === e.key ||
                (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
                (e.ctrlKey && "u" === e.key)) &&
                e.preventDefault();
            },
            i = setInterval(() => {
              let e = Date.now();
              Date.now() - e > 100 && window.location.replace("about:blank");
            }, 1e3);
         
        }, []),
        null
      );
    },
    54802: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => l });
      var s = i(95155),
        a = i(12115),
        n = i(73321),
        r = i(92881),
        u = i(81131);
      function o() {
        let e = (0, n.usePathname)(),
          t = (0, n.useSearchParams)(),
          { data: i } = (0, u.A)();
        return (
          (0, a.useEffect)(() => {
            if (!i?.ip || !i?.name) return;
            let e = window.location.href;
            (0, r.I7)({
              full_url: e,
              domain: window.location.host,
              ip: i.ip,
              country: i.name,
              type: r.Bx.PageView,
            });
          }, [e, t, i?.ip, i?.name]),
          null
        );
      }
      function l() {
        return (0, s.jsx)(a.Suspense, {
          fallback: null,
          children: (0, s.jsx)(o, {}),
        });
      }
    },
    66872: () => {},
    73776: () => {},
    79368: () => {},
    90500: (e, t, i) => {
      Promise.resolve().then(i.bind(i, 92151)),
        Promise.resolve().then(i.bind(i, 39269)),
        Promise.resolve().then(i.bind(i, 54802)),
        Promise.resolve().then(i.t.bind(i, 66872, 23)),
        Promise.resolve().then(i.bind(i, 98936));
    },
    92151: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => r });
      var s = i(95155),
        a = i(54078),
        n = i(81131);
      function r({ children: e }) {
        let { data: t, isLoading: i } = (0, n.A)();
        return (0, s.jsx)(a.I, { userLocation: t, children: e });
      }
    },
    92881: (e, t, i) => {
      "use strict";
      i.d(t, { Bx: () => a, I7: () => n });
      var s = i(59185);
      i(34015);
      let a = {
          Purchase: "Purchase",
          InitiateCheckout: "InitiateCheckout",
          CompleteRegistration: "CompleteRegistration",
          AddPaymentInfo: "AddPaymentInfo",
          PageView: "PageView",
        },
        n = async (e) => {
          try {
            return (
              await s.A.post(
                "https://spydoge-be.onrender.com/api/add-campaign-logs",
                e
              )
            ).data;
          } catch (e) {}
        };
    },
    98936: (e, t, i) => {
      "use strict";
      i.d(t, { Web3ModalProvider: () => M });
      var s = i(95155),
        a = i(78102),
        n = i(69515),
        r = i(15130),
        u = i(91514),
        o = i(36174),
        l = i(5858),
        c = i(65531),
        h = i(31967),
        d = i(98216),
        f = class extends d.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, i) {
            let s = t.queryKey,
              a = t.queryHash ?? (0, l.F$)(s, t),
              n = this.get(a);
            return (
              n ||
                ((n = new c.X({
                  client: e,
                  queryKey: s,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: i,
                  defaultOptions: e.getQueryDefaults(s),
                })),
                this.add(n)),
              n
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            h.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, l.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, l.MK)(e, t))
              : t;
          }
          notify(e) {
            h.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            h.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            h.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        m = i(53390),
        y = class extends d.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#i = new Map()),
              (this.#s = 0);
          }
          #t;
          #i;
          #s;
          build(e, t, i) {
            let s = new m.s({
              client: e,
              mutationCache: this,
              mutationId: ++this.#s,
              options: e.defaultMutationOptions(t),
              state: i,
            });
            return this.add(s), s;
          }
          add(e) {
            this.#t.add(e);
            let t = p(e);
            if ("string" == typeof t) {
              let i = this.#i.get(t);
              i ? i.push(e) : this.#i.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = p(e);
              if ("string" == typeof t) {
                let i = this.#i.get(t);
                if (i)
                  if (i.length > 1) {
                    let t = i.indexOf(e);
                    -1 !== t && i.splice(t, 1);
                  } else i[0] === e && this.#i.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = p(e);
            if ("string" != typeof t) return !0;
            {
              let i = this.#i.get(t),
                s = i?.find((e) => "pending" === e.state.status);
              return !s || s === e;
            }
          }
          runNext(e) {
            let t = p(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let i = this.#i.get(t)?.find((t) => t !== e && t.state.isPaused);
              return i?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            h.jG.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#i.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, l.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, l.nJ)(e, t));
          }
          notify(e) {
            h.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return h.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(l.lQ)))
            );
          }
        };
      function p(e) {
        return e.options.scope?.id;
      }
      var g = i(20562),
        b = i(1681);
      function v(e) {
        return {
          onFetch: (t, i) => {
            let s = t.options,
              a = t.fetchOptions?.meta?.fetchMore?.direction,
              n = t.state.data?.pages || [],
              r = t.state.data?.pageParams || [],
              u = { pages: [], pageParams: [] },
              o = 0,
              c = async () => {
                let i = !1,
                  c = (0, l.ZM)(t.options, t.fetchOptions),
                  h = async (e, s, a) => {
                    let n;
                    if (i) return Promise.reject();
                    if (null == s && e.pages.length) return Promise.resolve(e);
                    let r =
                        (Object.defineProperty(
                          (n = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: s,
                            direction: a ? "backward" : "forward",
                            meta: t.options.meta,
                          }),
                          "signal",
                          {
                            enumerable: !0,
                            get: () => (
                              t.signal.aborted
                                ? (i = !0)
                                : t.signal.addEventListener("abort", () => {
                                    i = !0;
                                  }),
                              t.signal
                            ),
                          }
                        ),
                        n),
                      u = await c(r),
                      { maxPages: o } = t.options,
                      h = a ? l.ZZ : l.y9;
                    return {
                      pages: h(e.pages, u, o),
                      pageParams: h(e.pageParams, s, o),
                    };
                  };
                if (a && n.length) {
                  let e = "backward" === a,
                    t = { pages: n, pageParams: r },
                    i = (
                      e
                        ? function (e, { pages: t, pageParams: i }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, i[0], i)
                              : void 0;
                          }
                        : w
                    )(s, t);
                  u = await h(t, i, e);
                } else {
                  let t = e ?? n.length;
                  do {
                    let e = 0 === o ? r[0] ?? s.initialPageParam : w(s, u);
                    if (o > 0 && null == e) break;
                    (u = await h(u, e)), o++;
                  } while (o < t);
                }
                return u;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    c,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    i
                  ))
              : (t.fetchFn = c);
          },
        };
      }
      function w(e, { pages: t, pageParams: i }) {
        let s = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[s], t, i[s], i) : void 0;
      }
      var q = class {
          #a;
          #n;
          #r;
          #u;
          #o;
          #l;
          #c;
          #h;
          constructor(e = {}) {
            (this.#a = e.queryCache || new f()),
              (this.#n = e.mutationCache || new y()),
              (this.#r = e.defaultOptions || {}),
              (this.#u = new Map()),
              (this.#o = new Map()),
              (this.#l = 0);
          }
          mount() {
            this.#l++,
              1 === this.#l &&
                ((this.#c = g.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#a.onFocus());
                })),
                (this.#h = b.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#a.onOnline());
                })));
          }
          unmount() {
            this.#l--,
              0 === this.#l &&
                (this.#c?.(),
                (this.#c = void 0),
                this.#h?.(),
                (this.#h = void 0));
          }
          isFetching(e) {
            return this.#a.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#n.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#a.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              i = this.#a.build(this, t),
              s = i.state.data;
            return void 0 === s
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  i.isStaleByTime((0, l.d2)(t.staleTime, i)) &&
                  this.prefetchQuery(t),
                Promise.resolve(s));
          }
          getQueriesData(e) {
            return this.#a
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, i) {
            let s = this.defaultQueryOptions({ queryKey: e }),
              a = this.#a.get(s.queryHash),
              n = a?.state.data,
              r = (0, l.Zw)(t, n);
            if (void 0 !== r)
              return this.#a.build(this, s).setData(r, { ...i, manual: !0 });
          }
          setQueriesData(e, t, i) {
            return h.jG.batch(() =>
              this.#a
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, i)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#a.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#a;
            h.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let i = this.#a;
            return h.jG.batch(
              () => (
                i.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries({ type: "active", ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let i = { revert: !0, ...t };
            return Promise.all(
              h.jG.batch(() => this.#a.findAll(e).map((e) => e.cancel(i)))
            )
              .then(l.lQ)
              .catch(l.lQ);
          }
          invalidateQueries(e, t = {}) {
            return h.jG.batch(() =>
              (this.#a.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                    t
                  )
            );
          }
          refetchQueries(e, t = {}) {
            let i = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              h.jG.batch(() =>
                this.#a
                  .findAll(e)
                  .filter((e) => !e.isDisabled() && !e.isStatic())
                  .map((e) => {
                    let t = e.fetch(void 0, i);
                    return (
                      i.throwOnError || (t = t.catch(l.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(l.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let i = this.#a.build(this, t);
            return i.isStaleByTime((0, l.d2)(t.staleTime, i))
              ? i.fetch(t)
              : Promise.resolve(i.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(l.lQ).catch(l.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = v(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(l.lQ).catch(l.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = v(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return b.t.isOnline()
              ? this.#n.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#a;
          }
          getMutationCache() {
            return this.#n;
          }
          getDefaultOptions() {
            return this.#r;
          }
          setDefaultOptions(e) {
            this.#r = e;
          }
          setQueryDefaults(e, t) {
            this.#u.set((0, l.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#u.values()],
              i = {};
            return (
              t.forEach((t) => {
                (0, l.Cp)(e, t.queryKey) && Object.assign(i, t.defaultOptions);
              }),
              i
            );
          }
          setMutationDefaults(e, t) {
            this.#o.set((0, l.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#o.values()],
              i = {};
            return (
              t.forEach((t) => {
                (0, l.Cp)(e, t.mutationKey) &&
                  Object.assign(i, t.defaultOptions);
              }),
              i
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#r.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, l.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === l.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#r.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#a.clear(), this.#n.clear();
          }
        },
        P = i(35625),
        C = i(12115);
      let O = "c55ee9fafec7eed17c257a4f0b260cc9",
        Q = (0, n.Bn)({
          chains: [u.r, o.N],
          projectId: O,
          metadata: {
            name: "SPYDOGE",
            description: "SPYDOGE Token Presale",
            url: "https://spydoge.com",
            icons: ["https://spydoge.com/walletlogo.webp"],
          },
          auth: {
            socials: void 0,
            email: !1,
            showWallets: !0,
            walletFeatures: !1,
          },
        }),
        D = new q({
          defaultOptions: { queries: { refetchOnWindowFocus: !1, retry: 1 } },
        }),
        E = null;
      function M({ children: e }) {
        let [t, i] = (0, C.useState)(!1);
        return ((0, C.useEffect)(() => {
          if ((i(!0), !E))
            try {
              (E = (0, a.Pg)({
                wagmiConfig: Q,
                projectId: O,
                chains: [u.r, o.N],
                defaultChain: u.r,
                themeMode: "light",
                themeVariables: { "--w3m-z-index": "9999" },
                enableAnalytics: !1,
                enableOnramp: !1,
                featuredWalletIds: [
                  "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
                  "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
                ],
                excludeWalletIds: [
                  "google",
                  "facebook",
                  "twitter",
                  "discord",
                  "github",
                  "apple",
                ],
                termsConditionsUrl: void 0,
                privacyPolicyUrl: void 0,
              })),
                console.log("✅ Web3Modal created successfully"),
                setTimeout(() => {
                  let e = document.querySelector("w3m-modal");
                  console.log("\uD83D\uDCCD Modal element after creation:", e);
                  let t = document.createElement("style");
                  (t.textContent = `
            w3m-modal [data-testid*="social"],
            w3m-modal wui-email-input,
            w3m-modal wui-separator[text*="or"],
            w3m-modal wui-flex[data-testid="w3m-connecting-widget"] > wui-flex:first-child,
            w3m-connecting-social-view,
            w3m-email-login-widget,
            w3m-social-login-list,
            [data-view="ConnectingSocial"],
            [data-view="EmailVerifyOtp"],
            [data-view="EmailVerifyDevice"] {
              display: none !important;
            }
          `),
                    document.head.appendChild(t);
                }, 500);
            } catch (e) {
              console.error("❌ Error creating Web3Modal:", e);
            }
        }, []),
        t)
          ? (0, s.jsx)(r.x, {
              config: Q,
              reconnectOnMount: !0,
              children: (0, s.jsx)(P.Ht, { client: D, children: e }),
            })
          : null;
      }
    },
    99432: () => {},
  },
  (e) => {
    e.O(0, [7513, 9268, 4946, 3718, 1444, 8388, 8441, 3794, 7358], () =>
      e((e.s = 90500))
    ),
      (_N_E = e.O());
  },
]);
