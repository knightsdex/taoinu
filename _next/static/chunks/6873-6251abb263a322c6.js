(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6873],
  {
    2982: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => c });
      var r = n(48934);
      async function i(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            i = t.get(r);
          n = i?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var s = n(42482),
        o = n(90633);
      let a = [];
      function u(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, o.b)(a, t)
          ? a
          : ((a = t), t);
      }
      var l = n(12115);
      function c(e = {}) {
        let t = (0, s.U)(e),
          n = { mutationFn: (e) => i(t, e), mutationKey: ["disconnect"] },
          a = (0, r.n)({ ...e.mutation, ...n });
        return {
          ...a,
          connectors: (function (e = {}) {
            let t = (0, s.U)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => u(e), n, { equalityFn: o.b });
                })(t, { onChange: e }),
              () => u(t),
              () => u(t)
            );
          })({ config: t }).map((e) => e.connector),
          disconnect: a.mutate,
          disconnectAsync: a.mutateAsync,
        };
      }
    },
    12618: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Baloo 2', 'Baloo 2 Fallback'",
          fontStyle: "normal",
        },
        className: "__className_3276a6",
      };
    },
    13618: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => l });
      var r = n(27854),
        i = n(59017),
        s = n(16591),
        o = n(47002),
        a = n(36872),
        u = n(42482);
      function l(e = {}) {
        let { abi: t, address: n, functionName: c, query: h = {} } = e,
          f = e.code,
          d = (0, u.U)(e),
          m = (0, a.i)({ config: d }),
          p = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let s = t.abi;
                if (!s) throw Error("abi is required");
                let { functionName: o, scopeKey: a, ...u } = n[1],
                  l = (() => {
                    let e = n[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw Error("address or code is required");
                  })();
                if (!o) throw Error("functionName is required");
                return (function (e, t) {
                  let { chainId: n, ...s } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.T)(o, r.J, "readContract")(s);
                })(e, { abi: s, functionName: o, args: u.args, ...l, ...u });
              },
              queryKey: (function (e = {}) {
                let { abi: t, ...n } = e;
                return ["readContract", (0, s.xO)(n)];
              })(t),
            };
          })(d, { ...e, chainId: e.chainId ?? m }),
          v = !!((n || f) && t && c && (h.enabled ?? !0));
        return (0, o.IT)({
          ...h,
          ...p,
          enabled: v,
          structuralSharing: h.structuralSharing ?? s.I_,
        });
      }
    },
    16591: (e, t, n) => {
      "use strict";
      n.d(t, { I_: () => i, Zi: () => s, xO: () => a });
      var r = n(5858);
      function i(e, t) {
        return (0, r.BH)(e, t);
      }
      function s(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!o(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!o(n) && !!n.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function o(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function a(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: s,
          maxPages: o,
          meta: a,
          networkMode: u,
          queryFn: l,
          queryHash: c,
          queryKey: h,
          queryKeyHashFn: f,
          retry: d,
          retryDelay: m,
          structuralSharing: p,
          getPreviousPageParam: v,
          getNextPageParam: g,
          initialPageParam: y,
          _optimisticResults: b,
          enabled: w,
          notifyOnChangeProps: _,
          placeholderData: S,
          refetchInterval: C,
          refetchIntervalInBackground: x,
          refetchOnMount: F,
          refetchOnReconnect: R,
          refetchOnWindowFocus: I,
          retryOnMount: E,
          select: A,
          staleTime: N,
          suspense: k,
          throwOnError: U,
          config: j,
          connector: O,
          query: M,
          ...T
        } = e;
        return T;
      }
    },
    22143: (e, t, n) => {
      "use strict";
      n.d(t, {
        HF: () => u,
        aj: () => o,
        gC: () => s,
        nk: () => i,
        xU: () => a,
      });
      var r = n(40515);
      class i extends r.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      r.C;
      class s extends r.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      r.C;
      class o extends r.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class a extends r.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class u extends r.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    23333: () => {},
    31069: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(78340).A)("crown", [
        [
          "path",
          {
            d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
            key: "1vdc57",
          },
        ],
        ["path", { d: "M5 21h14", key: "11awu3" }],
      ]);
    },
    36872: (e, t, n) => {
      "use strict";
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, { i: () => o });
      var i = n(12115),
        s = n(42482);
      function o(e = {}) {
        let t = (0, s.U)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
    39092: (e, t, n) => {
      "use strict";
      e.exports = n(73279).style;
    },
    47002: (e, t, n) => {
      "use strict";
      n.d(t, { IT: () => s });
      var r = n(4109),
        i = n(16591);
      function s(e) {
        let t = (0, r.I)({ ...e, queryKeyHashFn: i.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
    47149: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(78340).A)("flame", [
        [
          "path",
          {
            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
            key: "96xj49",
          },
        ],
      ]);
    },
    48934: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => c });
      var r = n(12115),
        i = n(53390),
        s = n(31967),
        o = n(98216),
        a = n(5858),
        u = class extends o.Q {
          #e;
          #t = void 0;
          #n;
          #r;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#i();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, a.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, a.EN)(t.mutationKey) !== (0, a.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.state.status === "pending" &&
                  this.#n.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#i(), this.#s(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#i(),
              this.#s();
          }
          mutate(e, t) {
            return (
              (this.#r = t),
              this.#n?.removeObserver(this),
              (this.#n = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(e)
            );
          }
          #i() {
            let e = this.#n?.state ?? (0, i.$)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #s(e) {
            s.jG.batch(() => {
              if (this.#r && this.hasListeners()) {
                let t = this.#t.variables,
                  n = this.#t.context,
                  r = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                e?.type === "success"
                  ? (this.#r.onSuccess?.(e.data, t, n, r),
                    this.#r.onSettled?.(e.data, null, t, n, r))
                  : e?.type === "error" &&
                    (this.#r.onError?.(e.error, t, n, r),
                    this.#r.onSettled?.(void 0, e.error, t, n, r));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        l = n(35625);
      function c(e, t) {
        let n = (0, l.jE)(t),
          [i] = r.useState(() => new u(n, e));
        r.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let o = r.useSyncExternalStore(
            r.useCallback((e) => i.subscribe(s.jG.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          c = r.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(a.lQ);
            },
            [i]
          );
        if (o.error && (0, a.GU)(i.options.throwOnError, [o.error]))
          throw o.error;
        return { ...o, mutate: c, mutateAsync: o.mutate };
      }
    },
    53961: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(78340).A)("zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
    55621: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Baloo 2', 'Baloo 2 Fallback'",
          fontStyle: "normal",
        },
        className: "__className_3276a6",
      };
    },
    59017: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
      n.d(t, { T: () => r });
    },
    66731: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Baloo 2', 'Baloo 2 Fallback'",
          fontStyle: "normal",
        },
        className: "__className_3276a6",
      };
    },
    67635: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(78340).A)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    73279: (e, t, n) => {
      "use strict";
      var r = n(87358);
      n(23333);
      var i = n(12115),
        s = i && "object" == typeof i && "default" in i ? i : { default: i },
        o = void 0 !== r && r.env && !0,
        a = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        u = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              i = t.optimizeForSpeed,
              s = void 0 === i ? o : i;
            l(a(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              l("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = s),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var u =
              "undefined" != typeof window &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = u ? u.getAttribute("content") : null;
          }
          var t,
            n = e.prototype;
          return (
            (n.setOptimizeForSpeed = function (e) {
              l(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                l(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (n.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (n.inject = function () {
              var e = this;
              if (
                (l(!this._injected, "sheet already injected"),
                (this._injected = !0),
                "undefined" != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (n.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (n.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (n.insertRule = function (e, t) {
              if (
                (l(a(e), "`insertRule` accepts only strings"),
                "undefined" == typeof window)
              )
                return (
                  "number" != typeof t &&
                    (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    o ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (n.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var n =
                  "undefined" != typeof window
                    ? this.getSheet()
                    : this._serverSheet;
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                l(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (n.deleteRule = function (e) {
              if ("undefined" == typeof window)
                return void this._serverSheet.deleteRule(e);
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                l(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (n.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                "undefined" != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (n.cssRules = function () {
              var e = this;
              return "undefined" == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, n) {
                    return (
                      n
                        ? (t = t.concat(
                            Array.prototype.map.call(
                              e.getSheetForTag(n).cssRules,
                              function (t) {
                                return t.cssText === e._deletedRulePlaceholder
                                  ? null
                                  : t;
                              }
                            )
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (n.makeStyleTag = function (e, t, n) {
              t &&
                l(
                  a(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName("head")[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
            }),
            (t = [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(e.prototype, t),
            e
          );
        })();
      function l(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var c = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        h = {};
      function f(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return h[r] || (h[r] = "jsx-" + c(e + "-" + n)), h[r];
      }
      function d(e, t) {
        "undefined" == typeof window &&
          (t = t.replace(/\/style/gi, "\\/style"));
        var n = e + t;
        return (
          h[n] || (h[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), h[n]
        );
      }
      var m = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              s = void 0 !== i && i;
            (this._sheet =
              r || new u({ name: "styled-jsx", optimizeForSpeed: s })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof s &&
                (this._sheet.setOptimizeForSpeed(s),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                "undefined" == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var s = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = s), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found"
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var i = f(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return d(i, e);
                      })
                    : [d(i, t)],
                };
              }
              return { styleId: f(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        p = i.createContext(null);
      p.displayName = "StyleSheetContext";
      var v = s.default.useInsertionEffect || s.default.useLayoutEffect,
        g = "undefined" != typeof window ? new m() : void 0;
      function y(e) {
        var t = g || i.useContext(p);
        return (
          t &&
            ("undefined" == typeof window
              ? t.add(e)
              : v(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (y.dynamic = function (e) {
        return e
          .map(function (e) {
            return f(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = y);
    },
    76215: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => d });
      var r = n(94747),
        i = n(1864),
        s = n(33828),
        o = n(76900),
        a = n(59017);
      async function u(e, t) {
        let { chainId: n, timeout: u = 0, ...l } = t,
          c = e.getClient({ chainId: n }),
          h = (0, a.T)(c, i.n, "waitForTransactionReceipt"),
          f = await h({ ...l, timeout: u });
        if ("reverted" === f.status) {
          let e = (0, a.T)(c, s.x, "getTransaction"),
            { from: t, ...n } = await e({ hash: f.transactionHash }),
            i = (0, a.T)(c, o.T, "call"),
            u = await i({
              ...n,
              account: t,
              data: n.input,
              gasPrice: "eip1559" !== n.type ? n.gasPrice : void 0,
              maxFeePerGas: "eip1559" === n.type ? n.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === n.type ? n.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            u?.data ? (0, r.IQ)(`0x${u.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...f, chainId: c.chain.id };
      }
      var l = n(16591),
        c = n(47002),
        h = n(36872),
        f = n(42482);
      function d(e = {}) {
        let { hash: t, query: n = {} } = e,
          r = (0, f.U)(e),
          i = (0, h.i)({ config: r }),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { hash: r, ...i } = n[1];
                if (!r) throw Error("hash is required");
                return u(e, { ...i, onReplaced: t.onReplaced, hash: r });
              },
              queryKey: (function (e = {}) {
                let { onReplaced: t, ...n } = e;
                return ["waitForTransactionReceipt", (0, l.xO)(n)];
              })(t),
            };
          })(r, { ...e, chainId: e.chainId ?? i }),
          o = !!(t && (n.enabled ?? !0));
        return (0, c.IT)({ ...n, ...s, enabled: o });
      }
    },
    80642: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => b });
      var r = n(95155),
        i = n(12115),
        s = n(39551),
        o = n(28819),
        a = n(4524),
        u = n(15131),
        l = n(1138),
        c = n(24866);
      function h(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      class f extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              n = ((0, l.s)(e) && e.offsetWidth) || 0,
              r = this.props.sizeRef.current;
            (r.height = t.offsetHeight || 0),
              (r.width = t.offsetWidth || 0),
              (r.top = t.offsetTop),
              (r.left = t.offsetLeft),
              (r.right = n - r.width - r.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: e, isPresent: t, anchorX: n, root: s }) {
        let o = (0, i.useId)(),
          a = (0, i.useRef)(null),
          u = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: l } = (0, i.useContext)(c.Q),
          d = (function (...e) {
            return i.useCallback(
              (function (...e) {
                return (t) => {
                  let n = !1,
                    r = e.map((e) => {
                      let r = h(e, t);
                      return n || "function" != typeof r || (n = !0), r;
                    });
                  if (n)
                    return () => {
                      for (let t = 0; t < r.length; t++) {
                        let n = r[t];
                        "function" == typeof n ? n() : h(e[t], null);
                      }
                    };
                };
              })(...e),
              e
            );
          })(a, e?.ref);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: r, top: i, left: c, right: h } = u.current;
            if (t || !a.current || !e || !r) return;
            let f = "left" === n ? `left: ${c}` : `right: ${h}`;
            a.current.dataset.motionPopId = o;
            let d = document.createElement("style");
            l && (d.nonce = l);
            let m = s ?? document.head;
            return (
              m.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            ${f}px !important;
            top: ${i}px !important;
          }
        `),
              () => {
                m.contains(d) && m.removeChild(d);
              }
            );
          }, [t]),
          (0, r.jsx)(f, {
            isPresent: t,
            childRef: a,
            sizeRef: u,
            children: i.cloneElement(e, { ref: d }),
          })
        );
      }
      let m = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: s,
        custom: a,
        presenceAffectsLayout: l,
        mode: c,
        anchorX: h,
        root: f,
      }) => {
        let m = (0, o.M)(p),
          v = (0, i.useId)(),
          g = !0,
          y = (0, i.useMemo)(
            () => (
              (g = !1),
              {
                id: v,
                initial: t,
                isPresent: n,
                custom: a,
                onExitComplete: (e) => {
                  for (let t of (m.set(e, !0), m.values())) if (!t) return;
                  s && s();
                },
                register: (e) => (m.set(e, !1), () => m.delete(e)),
              }
            ),
            [n, m, s]
          );
        return (
          l && g && (y = { ...y }),
          (0, i.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [n]),
          i.useEffect(() => {
            n || m.size || !s || s();
          }, [n]),
          "popLayout" === c &&
            (e = (0, r.jsx)(d, {
              isPresent: n,
              anchorX: h,
              root: f,
              children: e,
            })),
          (0, r.jsx)(u.t.Provider, { value: y, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var v = n(79196);
      let g = (e) => e.key || "";
      function y(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let b = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: u,
        presenceAffectsLayout: l = !0,
        mode: c = "sync",
        propagate: h = !1,
        anchorX: f = "left",
        root: d,
      }) => {
        let [p, b] = (0, v.xQ)(h),
          w = (0, i.useMemo)(() => y(e), [e]),
          _ = h && !p ? [] : w.map(g),
          S = (0, i.useRef)(!0),
          C = (0, i.useRef)(w),
          x = (0, o.M)(() => new Map()),
          [F, R] = (0, i.useState)(w),
          [I, E] = (0, i.useState)(w);
        (0, a.E)(() => {
          (S.current = !1), (C.current = w);
          for (let e = 0; e < I.length; e++) {
            let t = g(I[e]);
            _.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1);
          }
        }, [I, _.length, _.join("-")]);
        let A = [];
        if (w !== F) {
          let e = [...w];
          for (let t = 0; t < I.length; t++) {
            let n = I[t],
              r = g(n);
            _.includes(r) || (e.splice(t, 0, n), A.push(n));
          }
          return "wait" === c && A.length && (e = A), E(y(e)), R(w), null;
        }
        let { forceRender: N } = (0, i.useContext)(s.L);
        return (0, r.jsx)(r.Fragment, {
          children: I.map((e) => {
            let i = g(e),
              s = (!h || !!p) && (w === I || _.includes(i));
            return (0, r.jsx)(
              m,
              {
                isPresent: s,
                initial: (!S.current || !!n) && void 0,
                custom: t,
                presenceAffectsLayout: l,
                mode: c,
                root: d,
                onExitComplete: s
                  ? void 0
                  : () => {
                      if (!x.has(i)) return;
                      x.set(i, !0);
                      let e = !0;
                      x.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (N?.(), E(C.current), h && b?.(), u && u());
                    },
                anchorX: f,
                children: e,
              },
              i
            );
          }),
        });
      };
    },
    84731: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        for (let r in t) {
          let i = t[r],
            s = n ? n[r] : null;
          s &&
            (function (e, t, n) {
              let r = t.split("|").map((e) => e.trim());
              for (let n = 0; n < r.length; n++)
                switch (t) {
                  case "any":
                    return;
                  case "bigint":
                  case "boolean":
                  case "number":
                  case "string":
                    if (typeof e === t) return;
                }
              let i = Error(`invalid value for type ${t}`);
              throw (
                ((i.code = "INVALID_ARGUMENT"),
                (i.argument = `value.${n}`),
                (i.value = e),
                i)
              );
            })(i, s, r),
            Object.defineProperty(e, r, {
              enumerable: !0,
              value: i,
              writable: !1,
            });
        }
      }
      function i(e, t) {
        if (null == e) return "null";
        if ((null == t && (t = new Set()), "object" == typeof e)) {
          if (t.has(e)) return "[Circular]";
          t.add(e);
        }
        if (Array.isArray(e))
          return "[ " + e.map((e) => i(e, t)).join(", ") + " ]";
        if (e instanceof Uint8Array) {
          let t = "0123456789abcdef",
            n = "0x";
          for (let r = 0; r < e.length; r++)
            (n += t[e[r] >> 4]), (n += t[15 & e[r]]);
          return n;
        }
        if ("object" == typeof e && "function" == typeof e.toJSON)
          return i(e.toJSON(), t);
        switch (typeof e) {
          case "boolean":
          case "number":
          case "symbol":
            return e.toString();
          case "bigint":
            return BigInt(e).toString();
          case "string":
            return JSON.stringify(e);
          case "object": {
            let n = Object.keys(e);
            return (
              n.sort(),
              "{ " + n.map((n) => `${i(n, t)}: ${i(e[n], t)}`).join(", ") + " }"
            );
          }
        }
        return "[ COULD NOT SERIALIZE ]";
      }
      function s(e, t, n, s) {
        if (!e)
          throw (function (e, t, n) {
            let s,
              o = e;
            {
              let r = [];
              if (n) {
                if ("message" in n || "code" in n || "name" in n)
                  throw Error(`value will overwrite populated values: ${i(n)}`);
                for (let e in n) {
                  if ("shortMessage" === e) continue;
                  let t = n[e];
                  r.push(e + "=" + i(t));
                }
              }
              r.push(`code=${t}`),
                r.push("version=6.15.0"),
                r.length && (e += " (" + r.join(", ") + ")");
            }
            switch (t) {
              case "INVALID_ARGUMENT":
                s = TypeError(e);
                break;
              case "NUMERIC_FAULT":
              case "BUFFER_OVERRUN":
                s = RangeError(e);
                break;
              default:
                s = Error(e);
            }
            return (
              r(s, { code: t }),
              n && Object.assign(s, n),
              null == s.shortMessage && r(s, { shortMessage: o }),
              s
            );
          })(t, n, s);
      }
      function o(e, t, n, r) {
        s(e, t, "INVALID_ARGUMENT", { argument: n, value: r });
      }
      n.d(t, { ck: () => I, g5: () => E, XS: () => R }),
        ["NFD", "NFC", "NFKD", "NFKC"].reduce((e, t) => {
          try {
            if ("test" !== "test".normalize(t)) throw Error("bad");
            if ("NFD" === t) {
              let e = String.fromCharCode(233).normalize("NFD"),
                t = String.fromCharCode(101, 769);
              if (e !== t) throw Error("broken");
            }
            e.push(t);
          } catch (e) {}
          return e;
        }, []);
      let a = BigInt(0),
        u = BigInt(1);
      function l(e, t) {
        let n = f(e, "value"),
          r = BigInt(m(t, "width"));
        return (s(n >> r === a, "overflow", "NUMERIC_FAULT", {
          operation: "fromTwos",
          fault: "overflow",
          value: e,
        }),
        n >> (r - u))
          ? -((~n & ((u << r) - u)) + u)
          : n;
      }
      function c(e, t) {
        return f(e, "value") & ((u << BigInt(m(t, "bits"))) - u);
      }
      function h(e, t) {
        switch (typeof e) {
          case "bigint":
            return e;
          case "number":
            return (
              o(Number.isInteger(e), "underflow", t || "value", e),
              o(
                e >= -0x1fffffffffffff && e <= 0x1fffffffffffff,
                "overflow",
                t || "value",
                e
              ),
              BigInt(e)
            );
          case "string":
            try {
              if ("" === e) throw Error("empty string");
              if ("-" === e[0] && "-" !== e[1]) return -BigInt(e.substring(1));
              return BigInt(e);
            } catch (n) {
              o(
                !1,
                `invalid BigNumberish string: ${n.message}`,
                t || "value",
                e
              );
            }
        }
        o(!1, "invalid BigNumberish value", t || "value", e);
      }
      function f(e, t) {
        let n = h(e, t);
        return (
          s(n >= a, "unsigned value cannot be negative", "NUMERIC_FAULT", {
            fault: "overflow",
            operation: "getUint",
            value: e,
          }),
          n
        );
      }
      let d = "0123456789abcdef";
      function m(e, t) {
        switch (typeof e) {
          case "bigint":
            return (
              o(
                e >= -0x1fffffffffffff && e <= 0x1fffffffffffff,
                "overflow",
                t || "value",
                e
              ),
              Number(e)
            );
          case "number":
            return (
              o(Number.isInteger(e), "underflow", t || "value", e),
              o(
                e >= -0x1fffffffffffff && e <= 0x1fffffffffffff,
                "overflow",
                t || "value",
                e
              ),
              e
            );
          case "string":
            try {
              if ("" === e) throw Error("empty string");
              return m(BigInt(e), t);
            } catch (n) {
              o(!1, `invalid numeric string: ${n.message}`, t || "value", e);
            }
        }
        o(!1, "invalid numeric value", t || "value", e);
      }
      let p = BigInt(-1),
        v = BigInt(0),
        g = BigInt(1),
        y = BigInt(5),
        b = {},
        w = "0000";
      for (; w.length < 80; ) w += w;
      function _(e) {
        let t = w;
        for (; t.length < e; ) t += t;
        return BigInt("1" + t.substring(0, e));
      }
      function S(e, t, n) {
        let r = BigInt(t.width);
        if (t.signed) {
          let t = g << (r - g);
          s(null == n || (e >= -t && e < t), "overflow", "NUMERIC_FAULT", {
            operation: n,
            fault: "overflow",
            value: e,
          }),
            (e = e > v ? l(c(e, r), r) : -l(c(-e, r), r));
        } else {
          let t = g << r;
          s(null == n || (e >= 0 && e < t), "overflow", "NUMERIC_FAULT", {
            operation: n,
            fault: "overflow",
            value: e,
          }),
            (e = ((e % t) + t) % t & (t - g));
        }
        return e;
      }
      function C(e) {
        "number" == typeof e && (e = `fixed128x${e}`);
        let t = !0,
          n = 128,
          r = 18;
        if ("string" == typeof e)
          if ("fixed" === e);
          else if ("ufixed" === e) t = !1;
          else {
            let i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            o(i, "invalid fixed format", "format", e),
              (t = "u" !== i[1]),
              (n = parseInt(i[2])),
              (r = parseInt(i[3]));
          }
        else if (e) {
          let i = e,
            s = (e, t, n) =>
              null == i[e]
                ? n
                : (o(
                    typeof i[e] === t,
                    "invalid fixed format (" + e + " not " + t + ")",
                    "format." + e,
                    i[e]
                  ),
                  i[e]);
          (t = s("signed", "boolean", t)),
            (n = s("width", "number", n)),
            (r = s("decimals", "number", r));
        }
        o(
          n % 8 == 0,
          "invalid FixedNumber width (not byte aligned)",
          "format.width",
          n
        ),
          o(
            r <= 80,
            "invalid FixedNumber decimals (too large)",
            "format.decimals",
            r
          );
        let i = (t ? "" : "u") + "fixed" + String(n) + "x" + String(r);
        return { signed: t, width: n, decimals: r, name: i };
      }
      class x {
        format;
        #o;
        #a;
        #u;
        _value;
        constructor(e, t, n) {
          !(function (e, t, n) {
            if ((null == n && (n = ""), e !== t)) {
              let e = n,
                t = "new";
              n && ((e += "."), (t += " " + n)),
                s(
                  !1,
                  `private constructor; use ${e}from* methods`,
                  "UNSUPPORTED_OPERATION",
                  { operation: t }
                );
            }
          })(e, b, "FixedNumber"),
            (this.#a = t),
            (this.#o = n);
          const i = (function (e, t) {
            let n = "";
            e < v && ((n = "-"), (e *= p));
            let r = e.toString();
            if (0 === t) return n + r;
            for (; r.length <= t; ) r = w + r;
            let i = r.length - t;
            for (
              r = r.substring(0, i) + "." + r.substring(i);
              "0" === r[0] && "." !== r[1];

            )
              r = r.substring(1);
            for (; "0" === r[r.length - 1] && "." !== r[r.length - 2]; )
              r = r.substring(0, r.length - 1);
            return n + r;
          })(t, n.decimals);
          r(this, { format: n.name, _value: i }), (this.#u = _(n.decimals));
        }
        get signed() {
          return this.#o.signed;
        }
        get width() {
          return this.#o.width;
        }
        get decimals() {
          return this.#o.decimals;
        }
        get value() {
          return this.#a;
        }
        #l(e) {
          o(
            this.format === e.format,
            "incompatible format; use fixedNumber.toFormat",
            "other",
            e
          );
        }
        #c(e, t) {
          return new x(b, (e = S(e, this.#o, t)), this.#o);
        }
        #h(e, t) {
          return this.#l(e), this.#c(this.#a + e.#a, t);
        }
        addUnsafe(e) {
          return this.#h(e);
        }
        add(e) {
          return this.#h(e, "add");
        }
        #f(e, t) {
          return this.#l(e), this.#c(this.#a - e.#a, t);
        }
        subUnsafe(e) {
          return this.#f(e);
        }
        sub(e) {
          return this.#f(e, "sub");
        }
        #d(e, t) {
          return this.#l(e), this.#c((this.#a * e.#a) / this.#u, t);
        }
        mulUnsafe(e) {
          return this.#d(e);
        }
        mul(e) {
          return this.#d(e, "mul");
        }
        mulSignal(e) {
          this.#l(e);
          let t = this.#a * e.#a;
          return (
            s(
              t % this.#u === v,
              "precision lost during signalling mul",
              "NUMERIC_FAULT",
              { operation: "mulSignal", fault: "underflow", value: this }
            ),
            this.#c(t / this.#u, "mulSignal")
          );
        }
        #m(e, t) {
          return (
            s(e.#a !== v, "division by zero", "NUMERIC_FAULT", {
              operation: "div",
              fault: "divide-by-zero",
              value: this,
            }),
            this.#l(e),
            this.#c((this.#a * this.#u) / e.#a, t)
          );
        }
        divUnsafe(e) {
          return this.#m(e);
        }
        div(e) {
          return this.#m(e, "div");
        }
        divSignal(e) {
          s(e.#a !== v, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this,
          }),
            this.#l(e);
          let t = this.#a * this.#u;
          return (
            s(
              t % e.#a === v,
              "precision lost during signalling div",
              "NUMERIC_FAULT",
              { operation: "divSignal", fault: "underflow", value: this }
            ),
            this.#c(t / e.#a, "divSignal")
          );
        }
        cmp(e) {
          let t = this.value,
            n = e.value,
            r = this.decimals - e.decimals;
          return (r > 0 ? (n *= _(r)) : r < 0 && (t *= _(-r)), t < n)
            ? -1
            : +(t > n);
        }
        eq(e) {
          return 0 === this.cmp(e);
        }
        lt(e) {
          return 0 > this.cmp(e);
        }
        lte(e) {
          return 0 >= this.cmp(e);
        }
        gt(e) {
          return this.cmp(e) > 0;
        }
        gte(e) {
          return this.cmp(e) >= 0;
        }
        floor() {
          let e = this.#a;
          return (
            this.#a < v && (e -= this.#u - g),
            (e = (this.#a / this.#u) * this.#u),
            this.#c(e, "floor")
          );
        }
        ceiling() {
          let e = this.#a;
          return (
            this.#a > v && (e += this.#u - g),
            (e = (this.#a / this.#u) * this.#u),
            this.#c(e, "ceiling")
          );
        }
        round(e) {
          if ((null == e && (e = 0), e >= this.decimals)) return this;
          let t = this.decimals - e,
            n = y * _(t - 1),
            r = this.value + n,
            i = _(t);
          return S((r = (r / i) * i), this.#o, "round"), new x(b, r, this.#o);
        }
        isZero() {
          return this.#a === v;
        }
        isNegative() {
          return this.#a < v;
        }
        toString() {
          return this._value;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return x.fromString(this.toString(), e);
        }
        static fromValue(e, t, n) {
          let r = null == t ? 0 : m(t),
            i = C(n),
            o = h(e, "value"),
            a = r - i.decimals;
          if (a > 0) {
            let t = _(a);
            s(
              o % t === v,
              "value loses precision for format",
              "NUMERIC_FAULT",
              { operation: "fromValue", fault: "underflow", value: e }
            ),
              (o /= t);
          } else a < 0 && (o *= _(-a));
          return S(o, i, "fromValue"), new x(b, o, i);
        }
        static fromString(e, t) {
          let n = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          o(
            n && n[2].length + n[3].length > 0,
            "invalid FixedNumber string value",
            "value",
            e
          );
          let r = C(t),
            i = n[2] || "0",
            a = n[3] || "";
          for (; a.length < r.decimals; ) a += w;
          s(
            a.substring(r.decimals).match(/^0*$/),
            "too many decimals for format",
            "NUMERIC_FAULT",
            { operation: "fromString", fault: "underflow", value: e }
          ),
            (a = a.substring(0, r.decimals));
          let u = BigInt(n[1] + i + a);
          return S(u, r, "fromString"), new x(b, u, r);
        }
        static fromBytes(e, t) {
          let n = (function (e) {
              if (e instanceof Uint8Array) {
                let t = "0x0";
                for (let n of e) (t += d[n >> 4]), (t += d[15 & n]);
                return BigInt(t);
              }
              return h(e);
            })(
              (function (e, t, n) {
                if (e instanceof Uint8Array) return n ? new Uint8Array(e) : e;
                if (
                  "string" == typeof e &&
                  e.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)
                ) {
                  let t = new Uint8Array((e.length - 2) / 2),
                    n = 2;
                  for (let r = 0; r < t.length; r++)
                    (t[r] = parseInt(e.substring(n, n + 2), 16)), (n += 2);
                  return t;
                }
                o(!1, "invalid BytesLike value", t || "value", e);
              })(e, "value", !1)
            ),
            r = C(t);
          return (
            r.signed && (n = l(n, r.width)),
            S(n, r, "fromBytes"),
            new x(b, n, r)
          );
        }
      }
      let F = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function R(e, t) {
        o("string" == typeof e, "value must be a string", "value", e);
        let n = 18;
        if ("string" == typeof t) {
          let e = F.indexOf(t);
          o(e >= 0, "invalid unit", "unit", t), (n = 3 * e);
        } else null != t && (n = m(t, "unit"));
        return x.fromString(e, { decimals: n, width: 512 }).value;
      }
      function I(e) {
        let t = 18;
        return (
          (t = m(18, "unit")),
          x.fromValue(e, t, { decimals: t, width: 512 }).toString()
        );
      }
      function E(e) {
        return R(e, 18);
      }
    },
    94928: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(78340).A)("trophy", [
        [
          "path",
          {
            d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
            key: "1n3hpd",
          },
        ],
        [
          "path",
          {
            d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
            key: "rfe1zi",
          },
        ],
        ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
        ["path", { d: "M4 22h16", key: "57wxv0" }],
        [
          "path",
          {
            d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
            key: "1mhfuq",
          },
        ],
        ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
      ]);
    },
    98315: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => m });
      var r = n(48934),
        i = n(16405),
        s = n(59017),
        o = n(74696),
        a = n(79829),
        u = n(51011),
        l = n(96685),
        c = n(22143);
      async function h(e, t = {}) {
        let n,
          { assertChainId: r = !0 } = t;
        if (t.connector) {
          let { connector: r } = t;
          if (
            "reconnecting" === e.state.status &&
            !r.getAccounts &&
            !r.getChainId
          )
            throw new c.HF({ connector: r });
          let [i, s] = await Promise.all([
            r.getAccounts().catch((e) => {
              if (null === t.account) return [];
              throw e;
            }),
            r.getChainId(),
          ]);
          n = { accounts: i, chainId: s, connector: r };
        } else n = e.state.connections.get(e.state.current);
        if (!n) throw new c.gC();
        let i = t.chainId ?? n.chainId,
          s = await n.connector.getChainId();
        if (r && s !== i)
          throw new c.xU({ connectionChainId: i, connectorChainId: s });
        let f = n.connector;
        if (f.getClient) return f.getClient({ chainId: i });
        let d = (0, u.J)(t.account ?? n.accounts[0]);
        if (
          (d && (d.address = (0, l.b)(d.address)),
          t.account &&
            !n.accounts.some(
              (e) => e.toLowerCase() === d.address.toLowerCase()
            ))
        )
          throw new c.aj({ address: d.address, connector: f });
        let m = e.chains.find((e) => e.id === i),
          p = await n.connector.getProvider({ chainId: i });
        return (0, o.U)({
          account: d,
          chain: m,
          name: "Connector Client",
          transport: (e) => (0, a.I)(p)({ ...e, retryCount: 0 }),
        });
      }
      async function f(e, t) {
        let n,
          { account: r, chainId: o, connector: a, ...u } = t;
        n =
          "object" == typeof r && r?.type === "local"
            ? e.getClient({ chainId: o })
            : await h(e, {
                account: r ?? void 0,
                assertChainId: !1,
                chainId: o,
                connector: a,
              });
        let l = (0, s.T)(n, i.E, "writeContract");
        return await l({
          ...u,
          ...(r ? { account: r } : {}),
          chain: o ? { id: o } : null,
        });
      }
      var d = n(42482);
      function m(e = {}) {
        var t;
        let n =
            ((t = (0, d.U)(e)),
            { mutationFn: (e) => f(t, e), mutationKey: ["writeContract"] }),
          i = (0, r.n)({ ...e.mutation, ...n });
        return {
          ...i,
          mutate: i.mutate,
          mutateAsync: i.mutateAsync,
          writeContract: i.mutate,
          writeContractAsync: i.mutateAsync,
        };
      }
    },
    98769: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => d });
      var r = n(48934),
        i = n(22143),
        s = n(40515);
      s.C;
      class o extends s.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
      async function a(e, t) {
        let { addEthereumChainParameter: n, chainId: r } = t,
          s = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (s) {
          let e = s.connector;
          if (!e.switchChain) throw new o({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: r,
          });
        }
        let a = e.chains.find((e) => e.id === r);
        if (!a) throw new i.nk();
        return e.setState((e) => ({ ...e, chainId: r })), a;
      }
      var u = n(90633);
      let l = [];
      function c(e) {
        let t = e.chains;
        return (0, u.b)(l, t) ? l : ((l = t), t);
      }
      var h = n(12115),
        f = n(42482);
      function d(e = {}) {
        let t = (0, f.U)(e),
          n = { mutationFn: (e) => a(t, e), mutationKey: ["switchChain"] },
          i = (0, r.n)({ ...e.mutation, ...n });
        return {
          ...i,
          mutate: i.mutate,
          mutateAsync: i.mutateAsync,
          chains: (function (e = {}) {
            let t = (0, f.U)(e);
            return (0, h.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: t }),
          switchChain: i.mutate,
          switchChainAsync: i.mutateAsync,
        };
      }
    },
  },
]);
