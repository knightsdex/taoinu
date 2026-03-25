(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    39331: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 86564));
    },
    73776: () => {},
    79368: () => {},
    86564: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => eh });
      var s = a(95155),
        n = a(12115),
        i = a(9673),
        r = a(39092),
        l = a.n(r),
        d = a(5772),
        o = a(98500),
        c = a.n(o),
        p = a(36691),
        m = a(2982),
        x = a(98769),
        u = a(36872),
        h = a(98315),
        f = a(76215),
        y = a(13618),
        b = a(78102),
        g = a(91514),
        w = a(36174),
        j = a(84731),
        v = a(55621),
        N = a.n(v),
        k = a(4638),
        _ = a(59185);
      function T({ message: e, duration: t = 3e3 }) {
        let [a, i] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
          if (e) {
            i(!0);
            let e = setTimeout(() => i(!1), t);
            return () => clearTimeout(e);
          }
        }, [e, t]),
        a)
          ? (0, s.jsx)("div", {
              className: "relative",
              children: (0, s.jsx)("div", {
                className:
                  "fixed top-16 left-1/2 -translate-x-1/2 bg-green-300 text-gray-800 px-2 md:px-10 py-5 text-sm  md:text-medium md:py-5 rounded shadow-lg z-[9999] animate-slideDown ",
                children: e,
              }),
            })
          : null;
      }
      let S = [
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_nativeExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_stablecoinPrice",
                type: "uint256",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "buyTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_stablecoinAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_stablecoinAmount",
                type: "uint256",
              },
            ],
            name: "buyTokensWithStablecoin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "endSale",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "newRate",
                type: "uint256",
              },
            ],
            name: "ExchangeRateUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          { anonymous: !1, inputs: [], name: "SaleEnded", type: "event" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "newPrice",
                type: "uint256",
              },
            ],
            name: "StablecoinPriceUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "nativeAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
              },
            ],
            name: "TokensPurchased",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "stablecoinAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
              },
            ],
            name: "TokensPurchasedWithStablecoin",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "newRate", type: "uint256" },
            ],
            name: "updateNativeExchangeRate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "newPrice", type: "uint256" },
            ],
            name: "updateStablecoinPrice",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawNative",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_stablecoinAddress",
                type: "address",
              },
            ],
            name: "withdrawStablecoins",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawUnsoldTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "nativeAmount",
                type: "uint256",
              },
            ],
            name: "calculateTokensForNative",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "stablecoinAmount",
                type: "uint256",
              },
            ],
            name: "calculateTokensForStablecoin",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MAX_SUPPLY",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nativeTokenExchangeRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "saleActive",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "stablecoinPricePerToken",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSold",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        E = [
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_nativeExchangeRate",
                type: "uint256",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "newRate",
                type: "uint256",
              },
            ],
            name: "ExchangeRateUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "SaleEnded", type: "event" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "newPrice",
                type: "uint256",
              },
            ],
            name: "StablecoinPriceUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "nativeAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
              },
            ],
            name: "TokensPurchased",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "stablecoinAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint8",
                name: "stablecoinDecimals",
                type: "uint8",
              },
            ],
            name: "TokensPurchasedWithStablecoin",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "MAX_SUPPLY",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "buyTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_stablecoinAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_stablecoinAmount",
                type: "uint256",
              },
            ],
            name: "buyTokensWithStablecoin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "nativeAmount",
                type: "uint256",
              },
            ],
            name: "calculateTokensForNative",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "stablecoinAmount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "stablecoinAddress",
                type: "address",
              },
            ],
            name: "calculateTokensForStablecoin",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "endSale",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "stablecoinAddress",
                type: "address",
              },
            ],
            name: "getStablecoinDecimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nativeTokenExchangeRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "saleActive",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "spydPriceUSD",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSold",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "newRate", type: "uint256" },
            ],
            name: "updateNativeExchangeRate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "newPriceUSD", type: "uint256" },
            ],
            name: "updateStablecoinPrice",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawNative",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawUnsoldTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
      var A = a(54078),
        C = a(92881),
        D = a(81131);
      let P = () => {
          let e = new Date("2026-03-31T23:59:59").getTime(),
            [t, a] = (0, n.useState)(i());
          function i() {
            let t = e - new Date().getTime();
            return t < 0
              ? { d: 0, h: 0, m: 0, s: 0 }
              : {
                  d: Math.floor(t / 864e5),
                  h: Math.floor((t % 864e5) / 36e5),
                  m: Math.floor((t % 36e5) / 6e4),
                  s: Math.floor((t % 6e4) / 1e3),
                };
          }
          return ((0, n.useEffect)(() => {
            let e = setInterval(() => {
              a(i());
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          0 === t.d && 0 === t.h && 0 === t.m && 0 === t.s)
            ? null
            : (0, s.jsxs)("div", {
                className:
                  "flex justify-center px-3 py-2 mb-1  space-x-6 md:space-x-10 bg-black bg-[url('/newyeargif.gif')] bg-cover bg-center border border-black bg-no-repeat ",
                children: [
                  (0, s.jsx)(B, { item: t.d, suffix: "Days" }),
                  (0, s.jsx)(B, { item: t.h, suffix: "Hours" }),
                  (0, s.jsx)(B, { item: t.m, suffix: "Minutes" }),
                  (0, s.jsx)(B, { item: t.s, suffix: "Seconds" }),
                ],
              });
        },
        B = ({ item: e, suffix: t }) => {
          let [a, n] = e.toString().padStart(2, "0").split("");
          return (0, s.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
              (0, s.jsx)("span", {
                className: " text-[10px] text-white md:text-sm uppercase",
                children: t,
              }),
              (0, s.jsxs)("div", {
                className: "flex space-x-2 md:space-x-1",
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "w-[20px]  md:w-[30px] bg-white  text-center rounded px-1 py-0.5 md:py-2 font-bold text-[12px] md:text-sm",
                    children: a,
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "w-[20px]  md:w-[30px] bg-white  text-center rounded px-1 py-0.5 md:py-2 font-bold  text-[12px] md:text-sm",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        },
        F = (0, k.U)([
          "function approve(address spender, uint256 amount) external returns (bool)",
          "function allowance(address owner, address spender) external view returns (uint256)",
          "function balanceOf(address account) external view returns (uint256)",
          "function decimals() external view returns (uint8)",
        ]),
        M = {
          ethereum: {
            chainId: g.r.id,
            spydoge: "0x388557f766C1296D0033d8F964193597bBa27ae9",
            usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          },
          bsc: {
            chainId: w.N.id,
            spydoge: "0x14624026BBC6A64D8b773AD56920dD44A10F243C",
            usdt: "0x55d398326f99059fF775485246999027B3197955",
          },
        },
        I = {
          ETH: {
            name: "ETH",
            symbol: "ETH",
            chainId: g.r.id,
            chainName: "ETH",
            image: "/eth.webp",
            contractAddress: null,
            decimals: 18,
            chain: "eth",
            currency: "ETH",
          },
          USDT_ETH: {
            name: "USDT (ETH)",
            symbol: "USDT",
            chainId: g.r.id,
            chainName: "ETH",
            image: "/usdtethh.webp",
            contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            decimals: 6,
            chain: "eth",
            currency: "USDT",
          },
          BNB: {
            name: "BNB",
            symbol: "BNB",
            chainId: w.N.id,
            chainName: "BSC",
            image: "/bnb.webp",
            contractAddress: null,
            decimals: 18,
            chain: "bsc",
            currency: "BNB",
          },
          USDT_BSC: {
            name: "USDT (BSC)",
            symbol: "USDT",
            chainId: w.N.id,
            chainName: "BSC",
            image: "/usdtbsc.webp",
            contractAddress: "0x55d398326f99059fF775485246999027B3197955",
            decimals: 18,
            chain: "bsc",
            currency: "USDT",
          },
        },
        $ = "https://spydoge-be.onrender.com",
        O = [
          {
            name: "+20,000 SPYD as Bonus \uD83C\uDF81",
            amount: 100,
            value: "a",
            checked: !1,
            net_amount: 100,
            display: !1,
          },
          {
            name: "$25 Worth of Bonus SPYD \uD83C\uDF81",
            amount: 500,
            value: "A",
            checked: !1,
            net_amount: 500,
            display: !1,
          },
          {
            name: "Early Adopter Badge \uD83C\uDFC6",
            amount: 1e3,
            value: "B",
            checked: !1,
            net_amount: 1500,
            display: !1,
          },
          {
            name: "VIP Community Access \uD83D\uDD11",
            amount: 1e3,
            value: "C",
            checked: !1,
            net_amount: 2500,
            display: !1,
          },
          {
            name: "Premium Holder Benefits \uD83D\uDE0E",
            amount: 2500,
            value: "D",
            checked: !1,
            net_amount: 5e3,
            display: !1,
          },
        ],
        U = (e) => {
          for (let t = e.length - 1; t >= 0; t--) if (e[t].checked) return t;
          return -1;
        };
      function Y() {
        let e,
          { t } = (0, A.o)(),
          { data: a } = (0, D.A)(),
          [i, r] = (0, n.useState)(""),
          [o, v] = (0, n.useState)(!1),
          [k, B] = (0, n.useState)(I.ETH),
          [Y, R] = (0, n.useState)(""),
          [L, z] = (0, n.useState)("0"),
          [G, H] = (0, n.useState)("0"),
          [V, W] = (0, n.useState)("0"),
          [q, X] = (0, n.useState)(!1),
          [J, Q] = (0, n.useState)(null),
          [K, Z] = (0, n.useState)(null),
          [ee, et] = (0, n.useState)(null),
          [ea, es] = (0, n.useState)({ eth: 0, bnb: 0 }),
          [en, ei] = (0, n.useState)("0"),
          [er, el] = (0, n.useState)(!1),
          { address: ed, isConnected: eo } = (0, p.w)(),
          [ec, ep] = (0, n.useState)(!1),
          [em, ex] = (0, n.useState)(null),
          { disconnect: eu } = (0, m.u)(),
          { open: eh } = (0, b.o1)(),
          { switchChain: ef } = (0, x.R)(),
          ey = (0, u.i)(),
          [eb, eg] = (0, n.useState)(null),
          {
            writeContract: ew,
            data: ej,
            isPending: ev,
            error: eN,
          } = (0, h.x)(),
          { writeContract: ek, data: e_, isPending: eT } = (0, h.x)(),
          {
            writeContract: eS,
            data: eE,
            isPending: eA,
            error: eC,
          } = (0, h.x)(),
          { isLoading: eD, isSuccess: eP } = (0, f.g)({ hash: ej }),
          { isLoading: eB, isSuccess: eF } = (0, f.g)({ hash: e_ }),
          { isLoading: eM, isSuccess: eI } = (0, f.g)({ hash: eE }),
          [e$, eO] = (0, n.useState)("0"),
          [eU, eY] = (0, n.useState)(!1),
          [eR, eL] = (0, n.useState)(!1),
          ez = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          ez.current?.focus();
        }, []),
          (0, n.useEffect)(() => {
            (async () => {
              try {
                let e = await fetch(`${$}/api/order/user-dashboard`),
                  t = await e.json();
                H(t);
              } catch (e) {
                console.error("Error fetching data:", e);
              }
            })();
          }, []),
          (0, n.useEffect)(() => {
            let e = async () => {
              try {
                let e = await _.A.get(`${$}/api/prices`);
                e.data.success && e.data.prices && es(e.data.prices);
              } catch (e) {
                console.error("Error fetching prices:", e);
              }
            };
            e();
            let t = setInterval(e, 6e4);
            return () => clearInterval(t);
          }, []),
          (0, n.useEffect)(() => {
            if (!Y || isNaN(Y) || 0 >= parseFloat(Y)) return void z("0");
            let e = 0,
              t = parseFloat(Y);
            "ETH" === k.currency
              ? (e = t * ea.eth)
              : "BNB" === k.currency
              ? (e = t * ea.bnb)
              : "USDT" === k.currency && (e = t),
              z(e.toFixed(2));
          }, [Y, k, ea]),
          (0, n.useEffect)(() => {
            (async () => {
              if (eo && ed)
                try {
                  let e = await _.A.post(`${$}/api/order/check-wallet`, {
                      wallet_address: ed,
                    }),
                    t = !e.data.user_exist;
                  e.data.user_exist;
                  let s = await _.A.post(`${$}/api/user/create-user`, {
                    wallet_address: ed,
                    userType: "wallet",
                  });
                  if (
                    s.data.data?.token &&
                    (Q(s.data.data.token),
                    localStorage.setItem("spydoge_token", s.data.data.token),
                    t && !eR)
                  ) {
                    let e = `spydoge_registered_${ed}`;
                    localStorage.getItem(e) ||
                      ((0, C.I7)({
                        full_url: window.location.href,
                        domain: window.location.host,
                        ip: a?.ip || "",
                        country: a?.name || "",
                        type: "CompleteRegistration",
                      }),
                      localStorage.setItem(e, "true"),
                      eL(!0));
                  }
                } catch (e) {
                  console.error("Error initializing user:", e);
                }
            })();
          }, [eo, ed, a, eR]),
          (0, n.useEffect)(() => {
            let e = async () => {
              if (!eo || !ed) return void ei("0");
              el(!0);
              try {
                let e = await _.A.post(
                  `${$}/api/order/get-balance`,
                  { wallet_address: ed },
                  { timeout: 1e4 }
                );
                if (e.data.status && void 0 !== e.data.data) {
                  let t = parseFloat(e.data.data);
                  ei(t.toLocaleString("en-US", { maximumFractionDigits: 0 }));
                } else ei("0");
              } catch (e) {
                console.error("Error fetching user balance:", e), ei("0");
              } finally {
                el(!1);
              }
            };
            e();
            let t = setInterval(e, 3e4);
            return () => clearInterval(t);
          }, [eo, ed]),
          (0, n.useEffect)(() => {
            K ||
              Z(
                `click_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
              );
          }, []),
          (0, n.useEffect)(() => {
            (async () => {
              try {
                let e = await _.A.get(`${$}/api/get-current-round`);
                e.data.success && et(e.data.data);
              } catch (e) {
                console.error("Error fetching round data:", e);
              }
            })();
          }, []);
        let eG = eo
            ? ey === g.r.id
              ? M.ethereum
              : ey === w.N.id
              ? M.bsc
              : null
            : k.chainId === g.r.id
            ? M.ethereum
            : k.chainId === w.N.id
            ? M.bsc
            : null,
          eH = (e = eo ? ey : k.chainId) === g.r.id ? E : e === w.N.id ? S : E,
          { data: eV, isLoading: eW } = (0, y.Q)({
            address: eG?.spydoge,
            abi: S,
            functionName: "calculateTokensForNative",
            args:
              Y && !isNaN(Y) && parseFloat(Y) > 0
                ? [j.g5(Y.toString())]
                : void 0,
            enabled: !!(eG?.spydoge && Y && null === k.contractAddress),
            chainId: eo ? ey : k.chainId,
          }),
          { data: eq, isLoading: eX } = (0, y.Q)({
            address: eG?.spydoge,
            abi: S,
            functionName: "totalSold",
            watch: !0,
            enabled: !!eG?.spydoge,
          });
        (0, n.useEffect)(() => {
          void 0 !== eq &&
            eO(
              parseFloat(j.ck(eq)).toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })
            );
        }, [eq]);
        let { data: eJ, isLoading: eQ } = (0, y.Q)({
            address: eG?.spydoge,
            abi: eH,
            functionName: "calculateTokensForStablecoin",
            args:
              Y && !isNaN(Y) && parseFloat(Y) > 0 && k.contractAddress
                ? (eo ? ey : k.chainId) === g.r.id
                  ? [j.XS(Y.toString(), k.decimals), k.contractAddress]
                  : [j.XS(Y.toString(), k.decimals)]
                : void 0,
            enabled: !!(eG?.spydoge && Y && k.contractAddress),
            chainId: eo ? ey : k.chainId,
          }),
          { data: eK } = (0, y.Q)({
            address: k.contractAddress,
            abi: F,
            functionName: "allowance",
            args: [ed, eG?.spydoge],
            enabled: !!(k.contractAddress && ed && eG?.spydoge),
          });
        (0, n.useEffect)(() => {
          eY(null === k.contractAddress ? eW : eQ),
            null === k.contractAddress && eV
              ? W(parseFloat(j.ck(eV)).toFixed(0))
              : k.contractAddress && eJ
              ? W(parseFloat(j.ck(eJ)).toFixed(0))
              : (!Y || isNaN(Y) || 0 >= parseFloat(Y)) && W("0");
        }, [eV, eJ, Y, k, eW, eQ]);
        let [eZ, e0] = (0, n.useState)("0");
        (0, n.useEffect)(() => {
          ee?.funds_raised_cumulative &&
            ee?.round_target &&
            e0(
              (
                (parseFloat(ee.funds_raised_cumulative) /
                  parseFloat(ee.round_target)) *
                100
              ).toFixed(2)
            );
        }, [ee]),
          (0, n.useEffect)(() => {
            (async () => {
              try {
                let e = await _.A.get(`${$}/api/get-info`);
                e.data &&
                  eg({
                    country: e.data.name || "",
                    city: e.data.capital || "",
                    ip: e.data.ip || "",
                  });
              } catch (e) {
                console.error("Error fetching user location:", e),
                  eg({ country: "Unknown", city: "Unknown", ip: "" });
              }
            })();
          }, []);
        let e2 = async () => {
            try {
              if (!J) throw Error("Authentication required");
              let e = {
                  value: Y,
                  currency: k.currency,
                  token_quantity: V,
                  round_value: ee?.price_per_token || 0.0012,
                  round_number: ee?.round || 12,
                  purchase_usd_amount: parseFloat(L),
                  fromAddress: ed,
                  clickId: K,
                  chain: k.chain,
                  referral_url: window.location.href,
                  referral_domain: window.location.hostname,
                  country: eb?.country || "Unknown",
                  ip_address: eb?.ip || "",
                },
                t = await _.A.post(`${$}/api/order/create-order`, e, {
                  headers: {
                    Authorization: J,
                    "Content-Type": "application/json",
                  },
                });
              if (t.data.status)
                return (
                  (0, C.I7)({
                    full_url: window.location.href,
                    domain: window.location.host,
                    ip: a?.ip || "",
                    country: a?.name || "",
                    type: "InitiateCheckout",
                  }),
                  t.data
                );
            } catch (e) {
              throw (console.error("Error creating order:", e), e);
            }
          },
          e1 = async (e) => {
            try {
              let t = await _.A.post(
                `${$}/api/order/check-transaction`,
                { value: Y, fromAddress: ed, clickId: K, txnHash: e },
                { timeout: 3e4 }
              );
              if (t.data && !0 === t.data.success)
                return (
                  (0, C.I7)({
                    full_url: window.location.href,
                    domain: window.location.host,
                    ip: a?.ip || "",
                    country: a?.name || "",
                    type: "Purchase",
                  }),
                  { success: !0, alreadyVerified: t.data.alreadyVerified || !1 }
                );
              return (
                console.error(
                  "❌ Transaction verification failed:",
                  t.data?.message
                ),
                {
                  success: !1,
                  message: t.data?.message || "Verification failed",
                }
              );
            } catch (e) {
              if (
                (console.error("❌ Error verifying transaction:", e),
                "ECONNABORTED" === e.code)
              )
                return {
                  success: !1,
                  message:
                    "Verification timeout - please check your order status",
                };
              return {
                success: !1,
                message:
                  e.response?.data?.message ||
                  e.message ||
                  "Verification failed",
              };
            }
          };
        (0, n.useEffect)(() => {
          (async () => {
            if (eP || eI) {
              let e = ej || eE;
              try {
                r("Transaction successful! Verifying..."),
                  await new Promise((e) => setTimeout(e, 3e3));
                let t = await e1(e);
                if (t.success) {
                  R(""),
                    W("0"),
                    z("0"),
                    X(!1),
                    setTimeout(async () => {
                      el(!0);
                      try {
                        let e = await _.A.post(
                          `${$}/api/order/get-balance`,
                          { wallet_address: ed },
                          { timeout: 1e4 }
                        );
                        if (e.data.status && void 0 !== e.data.data) {
                          let t = parseFloat(e.data.data);
                          ei(
                            t.toLocaleString("en-US", {
                              maximumFractionDigits: 0,
                            })
                          );
                        }
                      } catch (e) {
                        console.error("Error refreshing balance:", e);
                      } finally {
                        el(!1);
                      }
                    }, 2e3);
                  let e = t.alreadyVerified
                    ? `Transaction was already verified! You have ${V} SPYDOGE tokens.`
                    : `Transaction successful! You received ${V} SPYDOGE tokens.`;
                  r(e),
                    Z(
                      `click_${Date.now()}_${Math.random()
                        .toString(36)
                        .substr(2, 9)}`
                    ),
                    e5().catch(console.warn);
                } else
                  console.error("Verification failed:", t.message),
                    r(
                      `Transaction sent but verification failed: ${
                        t.message
                      }. Please contact support with transaction hash: ${e.substring(
                        0,
                        10
                      )}...`
                    ),
                    X(!1);
              } catch (t) {
                console.error("Error processing transaction:", t),
                  r(
                    `Transaction completed but verification error occurred. Transaction hash: ${e.substring(
                      0,
                      10
                    )}... Please contact support.`
                  ),
                  X(!1);
              }
            }
          })();
        }, [eP, eI, ej, eE]),
          (0, n.useEffect)(() => {
            if (eN || eC) {
              X(!1);
              let e = eN || eC;
              console.error("Transaction error:", e),
                e.message?.includes("rejected")
                  ? r("Transaction rejected by user")
                  : e.message?.includes("insufficient funds")
                  ? r("Insufficient funds for transaction")
                  : r("Transaction failed: ");
            }
          }, [eN, eC]);
        let e5 = async () => {
            try {
              if (!window.ethereum || !eG?.spydoge) return !1;
              let e = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: {
                    address: eG.spydoge,
                    symbol: "SPYD",
                    decimals: 18,
                    image:
                      "https://i.pinimg.com/736x/6b/8b/cf/6b8bcf3e49de5200839c83096aacdd8a.jpg",
                  },
                },
              });
              return e && r("SPYD token added to your wallet!"), e;
            } catch (e) {
              return console.error("Failed to add token:", e), !1;
            }
          },
          e4 = async () => {
            if (eo) eu(), Q(null), localStorage.removeItem("spydoge_token");
            else
              try {
                if (!eh) {
                  console.error("❌ open function is undefined!"),
                    r("Wallet modal unavailable. Please refresh the page.");
                  return;
                }
                await eh().catch((e) => {
                  throw (
                    (console.error("\uD83D\uDCA5 Error during open():", e), e)
                  );
                }),
                  setTimeout(() => {
                    document.querySelector("w3m-modal");
                  }, 100);
              } catch (e) {
                console.error("❌ Error opening wallet modal:", e),
                  console.error("Error details:", {
                    message: e.message,
                    stack: e.stack,
                    name: e.name,
                  }),
                  r("Failed to open wallet. Error: " + e.message);
              }
          },
          e6 = async (e) => {
            let t = I[e];
            if ((B(t), v(!1), eo && ey !== t.chainId))
              try {
                await ef({ chainId: t.chainId }),
                  (0, C.I7)({
                    full_url: window.location.href,
                    domain: window.location.host,
                    ip: a?.ip || "",
                    country: a?.name || "",
                    type: "AddPaymentInfo",
                  });
              } catch (e) {
                console.error("Failed to switch chain:", e);
              }
          },
          e3 = async () => {
            if (!eo || !ed || !eG)
              return void r("Please connect your wallet first!");
            if (!J)
              return void r(
                "Authentication required. Please reconnect your wallet."
              );
            if (!Y || 0 >= Number(Y))
              return void r("Please enter a valid amount");
            if (10 > parseFloat(L))
              return void r(
                `Minimum purchase amount is $10 USD. Current amount: $${L} USD`
              );
            if (ey !== k.chainId)
              try {
                await ef({ chainId: k.chainId });
                return;
              } catch (e) {
                r("Please switch to the correct network");
                return;
              }
            X(!0);
            try {
              let e = await e2();
              if (!e || !e.res?.data?.id) throw Error("Failed to create order");
              if (null === k.contractAddress)
                ew({
                  address: eG.spydoge,
                  abi: eH,
                  functionName: "buyTokens",
                  value: j.g5(Y),
                });
              else {
                let e = j.XS(Y.toString(), k.decimals),
                  t = eK || 0n;
                if (t > 0n && t < e && ey === g.r.id && 6 === k.decimals) {
                  ep(!0),
                    ex(Y),
                    ek({
                      address: k.contractAddress,
                      abi: F,
                      functionName: "approve",
                      args: [eG.spydoge, 0n],
                      gas: 100000n,
                    });
                  return;
                }
                t < e
                  ? ek({
                      address: k.contractAddress,
                      abi: F,
                      functionName: "approve",
                      args: [eG.spydoge, e],
                      gas: 100000n,
                    })
                  : eS({
                      address: eG.spydoge,
                      abi: eH,
                      functionName: "buyTokensWithStablecoin",
                      args: [k.contractAddress, e],
                      gas: 400000n,
                    });
              }
            } catch (e) {
              console.error("Buy error:", e),
                X(!1),
                r("Transaction failed: " + (e.message || e));
            }
          };
        (0, n.useEffect)(() => {
          if (eF && k.contractAddress && eG)
            try {
              if (ec && em) {
                ep(!1);
                let e = j.XS(em, k.decimals);
                ek({
                  address: k.contractAddress,
                  abi: F,
                  functionName: "approve",
                  args: [eG.spydoge, e],
                  gas: 100000n,
                }),
                  ex(null);
              } else {
                let e = j.XS(Y, k.decimals);
                eS({
                  address: eG.spydoge,
                  abi: eH,
                  functionName: "buyTokensWithStablecoin",
                  args: [k.contractAddress, e],
                  gas: 400000n,
                });
              }
            } catch (e) {
              console.error("Error after approval:", e),
                X(!1),
                ep(!1),
                ex(null),
                r("Failed to proceed after approval: " + e.message);
            }
        }, [eF, ec, em]);
        let [e8, e7] = (0, n.useState)([]);
        (0, n.useEffect)(() => {
          let e = parseFloat(L);
          e > 0
            ? e7((t) => {
                let a = O.map((a, s) => {
                  let n = e >= a.net_amount - 0.01;
                  if (0 === t.length || t.every((e) => !e.display))
                    return { ...a, checked: n, display: n };
                  let i = t[s],
                    r = O.slice(0, s).every((t, a) => e >= t.net_amount - 0.01);
                  return n && r
                    ? i && i.display && !i.checked && s === U(t) + 1
                      ? i
                      : { ...a, checked: !0, display: !0 }
                    : n
                    ? { ...a, checked: !1, display: !!i && i.display }
                    : { ...a, checked: !1, display: !1 };
                });
                return JSON.stringify(a) !== JSON.stringify(t) ? a : t;
              })
            : e7([]);
        }, [L]);
        let e9 = (e) => {
            if (q || ev || eT || eA) return;
            let t = e8.map((t) =>
              t.value === e ? { ...t, checked: !t.checked, display: !0 } : t
            );
            e7(t);
            let a = t.findIndex((t) => t.value === e);
            if (-1 !== a && !t[a].checked) {
              let e = a > 0 ? t[a - 1].net_amount + 1 : 0,
                s = 0;
              e > 0
                ? ("USDT" === k.currency
                    ? (s = e)
                    : "ETH" === k.currency
                    ? (s = e / ea.eth)
                    : "BNB" === k.currency && (s = e / ea.bnb),
                  R(s.toFixed(4)))
                : R("0");
            }
          },
          te = U(e8),
          tt = O.find((e) => parseFloat(L) < e.net_amount);
        return (
          (0, n.useEffect)(() => {
            e7([]);
          }, [k.chainId]),
          (0, s.jsx)("div", {
            children: (0, s.jsx)("div", {
              className: `text-black text-lg  bg-white px-0 border-2 border-black mt-5 w-[99%] md:w-full  mx-auto  flex items-end self-center justify-center  ${
                N().className
              } font-bold  h-fit items-center rounded-[20px] `,
              children: (0, s.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "rounded-t-[20px] flex items-center justify-between bg-[#074345] px-4 py-2 shadow-lg",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center  gap-3",
                        children: [
                          (0, s.jsx)(d.default, {
                            src: "/walletlogo.webp",
                            alt: "logo",
                            width: 400,
                            height: 400,
                            className: "w-8 md:w-10 object-contain",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-white text-lg md:text-xl font-black tracking-tight",
                            children: "SPYDOGE",
                          }),
                        ],
                      }),
                      (0, s.jsx)(c(), {
                        href: "#mission-view",
                        className: "",
                        children: (0, s.jsxs)("div", {
                          className:
                            "jsx-73a3b4c451212066 group relative inline-flex items-center justify-center transition-all duration-300 active:scale-95",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "jsx-73a3b4c451212066 absolute -inset-1 bg-green-500/20 rounded-lg blur-md group-hover:bg-green-500/40 transition-all duration-500",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "jsx-73a3b4c451212066 relative overflow-hidden bg-slate-900 border-2 border-green-500/50 px-3 md:px-8 py-3 rounded-sm transform -skew-x-12 group-hover:border-green-400 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "jsx-73a3b4c451212066 absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-green-500/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]",
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "jsx-73a3b4c451212066 relative flex items-center gap-3 transform skew-x-12",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "jsx-73a3b4c451212066 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]",
                                    }),
                                    (0, s.jsxs)("span", {
                                      className:
                                        "jsx-73a3b4c451212066 text-sm md:text-xl font-black italic tracking-tighter text-white uppercase",
                                      children: [
                                        "SPYDOGE ",
                                        (0, s.jsx)("span", {
                                          className:
                                            "jsx-73a3b4c451212066 text-green-500 group-hover:text-green-300 transition-colors",
                                          children: "MISSION",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "jsx-73a3b4c451212066 absolute -top-2 -right-4 w-2 h-2 border-t border-r border-cyan-400 opacity-50",
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "jsx-73a3b4c451212066 absolute -bottom-2 -left-4 w-2 h-2 border-b border-l border-cyan-400 opacity-50",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)(l(), {
                              id: "73a3b4c451212066",
                              children:
                                "@keyframes shimmer{0%{left:-100%}100%{left:100%}}",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", { children: (0, s.jsx)(P, {}) }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex px-3 gap-5 md:gap-0 justify-between items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "flex md:font-bold font-semibold flex-col justify-end items-end",
                        children: (0, s.jsx)("div", {
                          children: (0, s.jsxs)("div", {
                            className: "flex gap-1 text-[#392128]",
                            children: [
                              t("PRESALE IS"),
                              " ",
                              (0, s.jsx)("span", {
                                className: "text-green-600",
                                children: t("LIVE"),
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "bg-green-600 rounded-full h-2 w-2 text-green-600 flex justify-center items-center self-center dot",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex gap-1 justify-self-center bg-[#FEBD01] px-6 mb-1 md:my-0 py-0 md:py-1 w-fit md:px-3 md:py-1 rounded-full shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]",
                          children: [
                            (0, s.jsx)("p", { children: t("Stage") }),
                            (0, s.jsx)("p", {
                              children: ee?.round + 12 || "0",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "bg-[#074345] text-white flex justify-center items-center text-[15px] justify-self-center justify-center justify-self-center items-center px-6 md:px-3 py-1 rounded-md my-2 md:my-2 shadow-[0px_-3px_0px_0px_white] md:mt-1",
                    children: (0, s.jsxs)("p", {
                      className: "",
                      children: [
                        (0, s.jsxs)("strong", {
                          className: "",
                          children: [t("Current Price"), " SPYD = "],
                        }),
                        "$",
                        ee?.price_per_token ? ee?.price_per_token : "0",
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex px-3 gap-2 md:gap-0 justify-between items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "flex  font-semibold flex-col justify-end items-end",
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex text-sm gap-1 text-black  font-semibold",
                          children: [
                            (0, s.jsxs)("p", {
                              className: "",
                              children: [t("Next Price"), ":"],
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-392128]",
                              children: [
                                "$",
                                ee?.percent_increase_from_last_round,
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex gap-1 text-sm text-black   font-semibold",
                          children: [
                            (0, s.jsxs)("p", {
                              className: "",
                              children: [t("Listing Price"), ":"],
                            }),
                            (0, s.jsx)("p", {
                              className: "text-[#392128]",
                              children: "$0.06",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("hr", { className: "border-[#392127] my-1" }),
                  (0, s.jsxs)("div", {
                    className: "text-black font-semibold text-sm md:text-lg",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex justify-center items-center gap-2",
                        children: [
                          (0, s.jsxs)("p", {
                            className: "",
                            children: [t("USD Raised"), ":"],
                          }),
                          (0, s.jsxs)("p", {
                            children: [
                              "$",
                              ee?.funds_raised_cumulative
                                ? Number(
                                    ee?.funds_raised_cumulative
                                  )?.toLocaleString("en-US") || 0
                                : "0",
                            ],
                          }),
                          (0, s.jsxs)("p", {
                            children: [
                              "/ $",
                              ee?.round_target?.toLocaleString("en-US") || 0,
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex justify-center items-center gap-1",
                        children: [
                          (0, s.jsxs)("p", {
                            className: "",
                            children: [t("Tokens Sold"), ":"],
                          }),
                          (0, s.jsx)("p", {
                            children:
                              eX && !e$
                                ? "Loading..."
                                : G.totalSold?.toLocaleString("en-US"),
                          }),
                          (0, s.jsx)("p", { children: "/ 40,000,000,000" }),
                        ],
                      }),
                      eo &&
                        (0, s.jsxs)("div", {
                          className:
                            "flex text-sm justify-self-center items-center bg-[#D78229]  md:text-sm  w-fit gap-1 my-1 md:mt-1 text-white px-4 rounded-full",
                          style: { backdropFilter: "blur(10px)" },
                          children: [
                            (0, s.jsx)("p", { children: t("Your Balance") }),
                            (0, s.jsx)("p", {
                              className: "font-bold ",
                              children: er ? "Loading..." : en,
                            }),
                            (0, s.jsx)("p", {
                              className: "font-bold",
                              children: "SPYD",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mx-3 my-2 md:my-3 border border-[#392128] rounded-full overflow-hidden relative h-6 md:h-5 ",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "h-full rounded-full  transition-[width] duration-1000 ease-out  bg-[#FEBD01] animate-progress-striped",
                        style: { width: `${eZ}%` },
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium text-black",
                        children: eX ? "Loading..." : `${eZ}%`,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex  justify-around gap-2 px-5 py-2 md:py-0",
                    children: [
                      (0, s.jsxs)("div", {
                        onClick: () => e6("ETH"),
                        className: `[box-shadow:0px_2px_6px_#00000040] flex justify-center items-center px-3 md:px-3 py-1 md:py-1 rounded-full gap-1 cursor-pointer transition-all ${
                          "ETH" === k.name
                            ? "bg-[#44B134] text-white [box-shadow:0px_2px_0px_0px_#049658]"
                            : "bg-white [box-shadow:-2px_0px_0px_0px_#392128] hover:bg-gray-100"
                        }`,
                        children: [
                          (0, s.jsx)(d.default, {
                            src: "/eth.webp",
                            alt: "eth",
                            width: 100,
                            height: 100,
                            className: "w-6 md:w-8 h-6 md:h-8 rounded-full",
                          }),
                          (0, s.jsx)("p", {
                            className: `text-lg md:text-lg font-semibold ${
                              "ETH" === k.name ? "text-white" : "text-black"
                            }`,
                            children: "ETH",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        onClick: () => e6("BNB"),
                        className: ` [box-shadow:0px_2px_6px_#00000040] flex justify-center items-center px-3 md:px-3 py-1 rounded-full  gap-1 cursor-pointer transition-all ${
                          "BNB" === k.name
                            ? "bg-[#44B134] text-white [box-shadow:0px_2px_6px_#00000040]"
                            : "bg-white [box-shadow:0px_2px_6px_#00000040]"
                        }`,
                        children: [
                          (0, s.jsx)(d.default, {
                            src: "/bnb.webp",
                            alt: "bnb",
                            width: 100,
                            height: 100,
                            className: "w-4 md:w-6 h-4 md:h-6 rounded-full",
                          }),
                          (0, s.jsx)("p", {
                            className: `text-lg md:text-lg font-semibold ${
                              "BNB" === k.name ? "text-white" : "text-black"
                            }`,
                            children: "BNB",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        onClick: () => v(!0),
                        className:
                          " [box-shadow:0px_2px_6px_#00000040] flex items-center bg-white px-3 md:px-3 py-1 rounded-full gap-1  cursor-pointer hover:bg-gray-100 transition-all",
                        children: [
                          (0, s.jsx)(d.default, {
                            src: k.image,
                            alt: "selected",
                            width: 100,
                            height: 100,
                            className: "w-5 md:w-8 h-5 md:h-8 rounded-full",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-lg md:text-lg text-black font-semibold",
                            children: "USDT" === k.symbol ? "USDT " : k.symbol,
                          }),
                          (0, s.jsx)("span", {
                            className: "text-black",
                            children: "▼",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "fixed inset-0 bg-black bg-opacity-50 z-40",
                          onClick: () => v(!1),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "fixed w-[90%] max-w-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/40 border-2 border-white flex flex-col z-50 rounded-lg",
                          style: { backdropFilter: "blur(5px)" },
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center justify-between w-full px-4 py-4 border-b border-gray-600",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-xl text-black font-semibold",
                                  children: t("Select Token"),
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () => v(!1),
                                  className:
                                    "text-black text-2xl hover:text-red-600 transition-colors",
                                  children: "✕",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "max-h-80 overflow-y-auto",
                              children: Object.entries(I).map(([e, t]) =>
                                (0, s.jsxs)(
                                  "div",
                                  {
                                    onClick: () => e6(e),
                                    className:
                                      "flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-black hover:bg-opacity-10 transition-colors border-b border-gray-600 last:border-b-0",
                                    children: [
                                      (0, s.jsx)(d.default, {
                                        src: t.image,
                                        alt: t.name,
                                        width: 100,
                                        height: 100,
                                        className: "w-10 h-10 rounded-full",
                                      }),
                                      (0, s.jsxs)("div", {
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-lg text-black font-semibold",
                                            children: t.name,
                                          }),
                                          (0, s.jsx)("p", {
                                            className: "text-sm text-gray-700",
                                            children: t.chainName,
                                          }),
                                        ],
                                      }),
                                      k === t &&
                                        (0, s.jsx)("div", {
                                          className:
                                            "ml-auto text-[#05B468] text-xl",
                                          children: "✓",
                                        }),
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row gap-2 md:gap-3 justify-between text-sm  py-2 md:py-3 items-center px-3 ",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex justify-between gap-2 items-center border-2 border-[#382027] rounded-lg px-2 w-full  md:w-[60%]",
                        children: [
                          (0, s.jsx)("input", {
                            type: "number",
                            ref: ez,
                            name: "amount",
                            id: "amount",
                            className:
                              "placeholder-black text-black font-semibold py-2 md:py-2 tracking-wider w-[80%] bg-transparent focus:outline-none [&::-webkit-inner-spin-button]:appearance-none  [&::-webkit-outer-spin-button]:appearance-none  [appearance:textfield] ",
                            placeholder: "0",
                            min: "0",
                            value: Y,
                            onChange: (e) => R(e.target.value),
                            disabled: q || ev || eT || eA || eD || eB || eM,
                          }),
                          (0, s.jsx)("div", {
                            className: "flex items-center gap-1",
                            children: (0, s.jsx)(d.default, {
                              src: k.image,
                              alt: k.name,
                              width: 100,
                              height: 100,
                              className: "w-6 h-6 rounded-full",
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex justify-between w-full md:w-[250px] items-center border-2 border-[#382027] rounded-lg px-2",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-[80%] py-2 md:py-2 flex items-center justify-start min-h-[30px] ",
                            children:
                              void 0 === eV &&
                              void 0 === eJ &&
                              Y &&
                              parseFloat(Y) > 0
                                ? (0, s.jsx)("div", {
                                    className:
                                      "w-5 h-5 border-2 border-gray-300 border-t-[#074345] rounded-full animate-spin flex-shrink-0",
                                  })
                                : (0, s.jsx)("input", {
                                    type: "text",
                                    name: "spydoge",
                                    id: "spydoge",
                                    className:
                                      "text-black font-semibold tracking-wider w-full  bg-transparent focus:outline-none",
                                    placeholder: "0",
                                    value: V,
                                    readOnly: !0,
                                  }),
                          }),
                          (0, s.jsx)(d.default, {
                            src: "/walletlogo.webp",
                            alt: "spydoge",
                            width: 1e3,
                            height: 100,
                            className: "w-8 h-8 rounded-full flex-shrink-0",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Y &&
                    parseFloat(Y) > 0 &&
                    (0, s.jsxs)("div", {
                      className:
                        "text-left mx-3 text-gray-700 text-sm md:text-lg font-semibold mb-1 md:mb-0",
                      children: [
                        (0, s.jsx)("span", { className: "", children: "≈ " }),
                        (0, s.jsxs)("span", {
                          className: "",
                          children: ["$", L, " USD"],
                        }),
                        "USDT" !== k.currency &&
                          (0, s.jsxs)("span", {
                            className: "text-gray-900  ml-1",
                            children: [
                              "( 1 ",
                              k.currency,
                              " = $",
                              "ETH" === k.currency
                                ? ea.eth.toFixed(2)
                                : ea.bnb.toFixed(2),
                              " )",
                            ],
                          }),
                      ],
                    }),
                  Y &&
                    10 > parseFloat(L) &&
                    parseFloat(Y) > 0 &&
                    (0, s.jsxs)("div", {
                      className: "mx-3 text-red-500 text-sm mt-1",
                      children: [
                        "⚠️ Minimum purchase: $",
                        10,
                        " USD (Need $",
                        (10 - parseFloat(L)).toFixed(2),
                        " more)",
                      ],
                    }),
                  parseFloat(L) > 0 &&
                    (0, s.jsxs)("div", {
                      className:
                        "mx-3 mb-2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      children: [
                        e8.filter((e) => e.display).length > 0 &&
                          (0, s.jsxs)("div", {
                            className:
                              "bg-gray-100 rounded-lg px-3 py-1 mb-1 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                            children: [
                              (0, s.jsxs)("p", {
                                className:
                                  "text-black font-semibold mb-1 text-sm",
                                children: [t("Bonus Included"), ":"],
                              }),
                              (0, s.jsx)("div", {
                                className: "space-y-1",
                                children: e8
                                  .filter((e) => e.display)
                                  .map((e, a) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className: `flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] gap-2 text-xs ${
                                          te < a ? "cursor-pointer" : ""
                                        }`,
                                        onClick: () => te < a && e9(e.value),
                                        children: [
                                          (0, s.jsx)("input", {
                                            type: "checkbox",
                                            checked: e.checked,
                                            onChange: () => {},
                                            className:
                                              "accent-green-500 cursor-pointer w-4 h-4",
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: "text-black",
                                            children: [
                                              e.name,
                                              " (",
                                              e.checked ? t("Free") : "",
                                              (0, s.jsxs)("span", {
                                                className: e.checked
                                                  ? "line-through text-gray-400"
                                                  : "",
                                                children: ["$", e.amount],
                                              }),
                                              ")",
                                            ],
                                          }),
                                          te === a &&
                                            (0, s.jsx)("button", {
                                              onClick: (t) => {
                                                t.stopPropagation(),
                                                  e9(e.value);
                                              },
                                              className:
                                                "ml-auto text-red-400 hover:text-red-600",
                                              children: "✕",
                                            }),
                                        ],
                                      },
                                      e.value
                                    )
                                  ),
                              }),
                            ],
                          }),
                        tt &&
                          5e3 > parseFloat(L) &&
                          tt.net_amount - parseFloat(L) > 0.5 &&
                          (0, s.jsxs)("div", {
                            className:
                              "bg-blue-100 border border-blue-400 rounded-lg p-2 cursor-pointer hover:bg-blue-200 transition-colors  flex items-start gap-2",
                            onClick: () => {
                              let e = tt.net_amount,
                                t = 0;
                              "USDT" === k.currency
                                ? (t = e)
                                : "ETH" === k.currency
                                ? ea.eth > 0 && (t = e / ea.eth)
                                : "BNB" === k.currency &&
                                  ea.bnb > 0 &&
                                  (t = e / ea.bnb),
                                t > 0 && R(t.toFixed(6));
                            },
                            children: [
                              (0, s.jsx)("input", {
                                type: "checkbox",
                                checked: !1,
                                onChange: () => {},
                                className: "mt-0.5 cursor-pointer",
                              }),
                              (0, s.jsxs)("p", {
                                className: "text-black text-xs flex-1",
                                children: [
                                  t("Add"),
                                  " ",
                                  (0, s.jsxs)("span", {
                                    className: "font-bold",
                                    children: [
                                      "$",
                                      (tt.net_amount - parseFloat(L)).toFixed(
                                        2
                                      ),
                                    ],
                                  }),
                                  " ",
                                  t("more to get"),
                                  " ",
                                  (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: tt.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row  border-1 border-black  mb-2 gap-2 md:gap-1 mx-3",
                    children: [
                      (0, s.jsx)("button", {
                        onClick: eo ? e3 : e4,
                        disabled:
                          eo &&
                          (!Y ||
                            0 >= Number(Y) ||
                            10 > parseFloat(L) ||
                            q ||
                            ev ||
                            eT ||
                            eA ||
                            eD ||
                            eB ||
                            eM),
                        className:
                          "disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#049658] transition-colors cursor-pointer  w-full py-1 md:py-1 border-2  w-full  bg-[#44B134] text-white flex md:text-lg justify-center text-lg border items-center  z-30 rounded-lg ",
                        children: (() => {
                          if (!eo) return t(t("Connect Wallet"));
                          if (ey !== k.chainId)
                            return `Switch to ${k.chainName}`;
                          if (ev) return "Confirming Purchase...";
                          if (eT) return "Confirming Approval...";
                          if (eA) return "Confirming Purchase...";
                          if (eD) return "Processing Purchase...";
                          if (eB) return "Processing Approval...";
                          if (eM) return "Processing Purchase...";
                          if (q) return "Preparing Transaction...";
                          if (k.contractAddress && void 0 !== eK && Y)
                            try {
                              let e = j.XS(Y, k.decimals);
                              if ((eK || 0n) < e) return `Approve ${k.symbol}`;
                            } catch (e) {
                              console.error("Error calculating allowance:", e);
                            }
                          return `Buy with ${k.symbol}`;
                        })(),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "rounded-lg w-full flex  flex-row text-white justify-between text-sm md:text-lg gap-2 md:gap-1  text-sm items-center",
                        children: [
                          (0, s.jsx)(c(), {
                            href: "/how-to-buy",
                            className:
                              "bg-[#607EEA] block border  text-center w-full  font-semibold rounded-lg py-2 md:py-2 px-2 hover:bg-[#049658] transition-colors cursor-pointer ",
                            children: t("How to Buy"),
                          }),
                          eo &&
                            (0, s.jsx)("button", {
                              onClick: e4,
                              className:
                                "w-full border px-1  py-2 md:py-2  bg-red-500 text-white  text-center rounded-lg hover:bg-red-600 transition-colors cursor-pointer font-semibold",
                              children: t("Disconnect"),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(T, { message: i }),
                  eo &&
                    (0, s.jsxs)("div", {
                      className:
                        " md:bg-[#064343] flex self-center rounded-lg mb-2 text-center w-full md:w-[94%] md:ml-3  py-1 text-white gap-2 md:gap-4  self-center justify-self-enter ",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex md:pl-20 w-full md:w-fit items-center mx-3 justify-around rounded-lg  flex-col justify-center  self-center justify-self-center bg-[#064343] text-[17.5px] md:text-[18px]  self-center ",
                          children: [
                            (0, s.jsxs)("p", {
                              children: [
                                "Connected: ",
                                ed ? `${ed.slice(0, 6)}...${ed.slice(-4)}` : "",
                              ],
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-xs opacity-75",
                              children: [
                                "Chain: ",
                                k.chainName,
                                ",  ",
                                J && "✓Authenticated",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "rounded-full hidden md:flex self-center justify-center",
                          children: (0, s.jsx)("button", {
                            onClick: e5,
                            className:
                              " text-xs bg-white text-black p-2 font-bold hover:bg-gray-200 transition-colors rounded-full walletbtn ",
                            children: (0, s.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: "2",
                              stroke: "currentColor",
                              className: "md:w-6 w-4  md:h-6 inline-block ",
                              children: (0, s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M7 17L17 7m0 0H7m10 0v10",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  eo &&
                    ey !== k.chainId &&
                    (0, s.jsxs)("div", {
                      className:
                        "bg-yellow-100 border-2 border-yellow-300  text-yellow-800 p-2 rounded-lg text-center text-sm mx-3 mt-2 absolute",
                      children: ["Please switch to ", k.chainName, " network"],
                    }),
                ],
              }),
            }),
          })
        );
      }
      function R() {
        let { data: e } = (0, D.A)(),
          { t } = (0, A.o)();
        return (0, s.jsx)("div", {
          id: "home",
          className:
            " bg-cover md:bg-center bg-no-repeat md:flex relative  lg:pl-20 lg:pr-10 mt-[-6%] md:mt-0  bg-[url('/spy1.png')]  before:content-['']  before:absolute before:inset-0  before:bg-black/20  before:backdrop-blur-[2px]  before:z-0 ",
          children: (0, s.jsxs)("div", {
            className:
              "flex flex-col md:flex-row w-full pt-5 gap-10 md:gap-0 align-items-center items-center max-w-[1000px] mx-auto justify-center md:justify-between",
            children: [
              (0, s.jsx)("div", {
                className:
                  "pt-10 md:pt-0 h-full  md:w-2/3 md:py-0 md:pb-32 flex items-center self-center",
                children: (0, s.jsx)("div", {
                  className:
                    "flex flex-col md:flex-row relative w-full h-fit z-10  justify-end",
                  children: (0, s.jsxs)("div", {
                    className:
                      "text-white font-bold md:text-[18px] flex items-center font-luckiest  [-webkit-text-stroke:0.6px_black]  [text-shadow:-1px_1px_1px_black,0px_1px_0px_black,1px_1px_0px_black,1px_-1px_1px_black,0px_-1px_0px_black,-1px_-1px_0px_black]  md:absolute md:left-[90px]  text-center flex flex-col items-center justify-center",
                    children: [
                      "BUY NOW – TAO INU is Live on Ethereum",
                      (0, s.jsx)("br", {}),
                      "Not just a meme coin — this is a token on chain. ",
                      (0, s.jsx)("br", {}),
                      "The TINU is live, with a full high-graphics experience in development.",
                      (0, s.jsx)(c(), {
                        href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x388557f766C1296D0033d8F964193597bBa27ae9",
                        children: (0, s.jsx)("button", {
                          className:
                            "  bg-gradient-to-r from-[#0f2027] via-[#1a2a3a] to-[#0f2027] text-[#00f5ff]  font-bold  py-3 px-8  rounded-xl  mt-3  border border-[#00f5ff] uppercase tracking-wider shadow-[0_0_15px_#00f5ff] hover:text-white  hover:bg-[#00f5ff]  hover:shadow-[0_0_25px_#00f5ff] transition-all duration-300 ",
                          children: "BUY NOW",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: "pb-20 md:pb-10 z-10 flex justify-center",
                children: (0, s.jsx)(i.P.div, {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { duration: 0.6 },
                  className: "w-full max-w-5xl", // 👈 increase this (e.g. max-w-6xl or max-w-[1200px])
                  children: (0, s.jsx)("iframe", {
                    src: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x388557f766C1296D0033d8F964193597bBa27ae9",
                    width: "100%",
                    height: "600",
                    style: { border: "none", borderRadius: "12px" },
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var L = a(61779);
      function z() {
        let { t: e } = (0, A.o)();
        return (0, s.jsxs)("section", {
          id: "roadmap",
          className:
            " w-full  bg-[url('/phasesbg.png')]  bg-cover bg-top  pt-32 -mt-32 pb-0  relative ",
          children: [
            (0, s.jsxs)("div", {
              className:
                "hidden md:block relative max-w-[2000px]  md:w-7xl mx-auto mt-10 px-2 md:px-20",
              children: [
                (0, s.jsx)("img", {
                  src: "/top.png",
                  alt: "top",
                  className:
                    "w-full max-w-[700px] mx-auto pointer-events-none select-none",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col-reverse md:flex-row h-[300px] items-end gap-10   mt-40 ",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "relative md:w-[500px] flex flex-col",
                      children: [
                        (0, s.jsx)(d.default, {
                          src: "/Phase1.png",
                          alt: "phase1",
                          width: 800,
                          height: 400,
                          className: " w-[350px] flex self-end    z-40",
                        }),
                        (0, s.jsx)("img", {
                          src: "/phase3.png",
                          alt: "phase3",
                          className:
                            "w-[380px] hidden md:block -bottom-20 absolute z-10",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "   text-left flex flex-col w-full items-start h-full",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 01",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] font-bold [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:0.5px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Operation Banana Briefcase"),
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex justify-between   w-full",
                          children: [
                            (0, s.jsxs)("ul", {
                              className:
                                "text-black [font-family:'poppins'] mt-4 text-md font-semibold space-y-2",
                              children: [
                                (0, s.jsx)("li", {
                                  children: "• Community kickoff with presale",
                                }),
                                (0, s.jsx)("li", {
                                  children: "• Early agents recruitment",
                                }),
                                (0, s.jsx)("li", {
                                  children: "• website & whitepaper release",
                                }),
                                (0, s.jsx)("li", {
                                  children:
                                    "• First meme drop & security audit",
                                }),
                              ],
                            }),
                            // (0, s.jsx)("div", {
                            //   children: (0, s.jsx)(d.default, {
                            //     src: "/gift.png",
                            //     alt: "logo",
                            //     width: 400,
                            //     height: 400,
                            //     className: "w-[200px] hidden md:block   z-10",
                            //   }),
                            // }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row h-[550px] items-end gap-0 mt-0 w-fit justify-self-end",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "text-center md:text-left  h-[400px] flex flex-col  max-w-lg mx-auto ",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 02",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Rookie Missions"),
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "text-black [font-family:'poppins'] mt-4 text-md font-semibold space-y-2",
                          children: [
                            (0, s.jsx)("li", { children: "• Token launch" }),
                            (0, s.jsx)("li", {
                              children: "• Listed on top exchanges and Uniswap",
                            }),
                            (0, s.jsx)("li", {
                              children: "• Liquidity secured and locked",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "• Listings on CoinGecko & viral campaigns start",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "relative w-[250px] md:w-[350px] mx-auto",
                      children: [
                        (0, s.jsx)("img", {
                          src: "/Phase2.png",
                          alt: "phase2",
                          className:
                            "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[70%] w-[250px] md:w-[500px] z-40",
                        }),
                        (0, s.jsx)("img", {
                          src: "/phase4.png",
                          className: "w-full relative z-10",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row h-[400px] items-end gap-5 mt-16 w-full",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "relative w-[250px] md:w-[380px] ",
                      children: [
                        (0, s.jsx)("img", {
                          src: "/Phase5.png",
                          alt: "phase3gif",
                          className:
                            "absolute left-40 top-0 -translate-x-1/2 -translate-y-[80%] w-[250px] md:w-[550px] z-40",
                        }),
                        (0, s.jsx)("img", {
                          src: "/phase3.png",
                          alt: "phase3",
                          className: "w-[350px] w-fit relative z-10",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-center md:text-left  h-[500px] flex flex-col  max-w-lg ",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 03",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Secret Listings & Double Agents"),
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "text-black [font-family:'poppins'] mt-4 text-md font-semibold space-y-2",
                          children: [
                            (0, s.jsxs)("li", {
                              children: [
                                "• ",
                                e(
                                  "Cross-chain launch on Solana and other blockchains"
                                ),
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "• ",
                                e("Major CEX listings & project partnerships"),
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children: "• Meme Vault beta & staking live",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row h-[400px] items-end w-fit justify-self-end mt-40 mb-0",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "text-left h-fit  absolute flex flex-col justify-center  -ml-20 pb-60",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 04",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Full-Time Agent"),
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "text-black [font-family:'poppins'] mt-4 text-md font-semibold space-y-2",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "•  Meme Vault testing with rewards for active Agents",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "• Focus on stability, organic growth, and transparent listings",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "• Gradual expansion toward wider market exposure",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "relative w-[250px] md:w-[900px]  flex justify-end ",
                      children: [
                        (0, s.jsx)("img", {
                          src: "/4phase.png",
                          alt: "phase4",
                          className:
                            "absolute left-3/4 top-0 -translate-x-1/2 -translate-y-[70%] w-[250px] md:w-[500px] z-40",
                        }),
                        (0, s.jsx)("img", {
                          src: "/phase4.png",
                          alt: "phase4",
                          className: "w-fit  z-10",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "md:hidden relative px-5 flex flex-col gap-20",
              children: [
                (0, s.jsx)("img", {
                  src: "/top.png",
                  alt: "top",
                  className: "w-full  mx-auto pointer-events-none select-none",
                }),
                (0, s.jsxs)("div", {
                  className: "",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "  text-left flex flex-col w-full  ",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 01",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] font-bold [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Operation Banana Briefcase"),
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex justify-between   w-full",
                          children: [
                            (0, s.jsxs)("ul", {
                              className:
                                "text-black [font-family:'poppins'] mt-4 text-xs font-semibold space-y-2",
                              children: [
                                (0, s.jsx)("li", {
                                  children:
                                    "• Communnity kick off with presale",
                                }),
                                (0, s.jsx)("li", {
                                  children: "• Early agents recruitment",
                                }),
                                (0, s.jsx)("li", {
                                  children: "• website & whitepaper release",
                                }),
                                (0, s.jsx)("li", {
                                  children:
                                    "• First meme drop & security audit",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {}),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "relative md:w-[500px] flex flex-col",
                      children: (0, s.jsx)(d.default, {
                        src: "/Phase1.png",
                        alt: "phase1",
                        width: 800,
                        height: 400,
                        className: " w-[300px] flex self-end    z-40",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-10",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-left ",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 02",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Rookie Missions"),
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "text-black [font-family:'poppins'] mt-4 text-xs font-semibold space-y-2",
                          children: [
                            (0, s.jsx)("li", { children: "• Token launch" }),
                            (0, s.jsx)("li", {
                              children: "• Listed on top exchanges and Uniswap",
                            }),
                            (0, s.jsx)("li", {
                              children: "• Liquidity secured and locked",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "• Listings on CoinGecko & viral campaigns start",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "relative w-[250px] md:w-[350px] mx-auto",
                      children: (0, s.jsx)("img", {
                        src: "/Phase2.gif",
                        alt: "phase2",
                        className: " w-[250px] z-40",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-left flex flex-col  max-w-lg ",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 03",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Secret Listings & Double Agents"),
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "text-black [font-family:'poppins'] mt-4 text-xs font-semibold space-y-2",
                          children: [
                            (0, s.jsxs)("li", {
                              children: [
                                "• ",
                                e(
                                  "Cross-chain launch on Solana and other blockchains"
                                ),
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "• ",
                                e("Major CEX listings & project partnerships"),
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children: "• Meme Vault beta & staking live",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "relative w-[250px] md:w-[380px] mt-5 ",
                      children: (0, s.jsx)("img", {
                        src: "/Phase3.gif",
                        alt: "phase3gif",
                        className: " w-[250px]  z-40",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-left  w-fit ",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-black bg-white w-fit px-4 py-2 [font-family:'poppins'] border border-black rounded-full",
                          children: "Phase 04",
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-[#00FFAE] [text-shadow:0px_4px_0px_black]  [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:black] text-3xl md:text-4xl font-luckiest mt-3",
                          children: e("Full-Time Agent"),
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "text-black [font-family:'poppins'] mt-4 text-xs font-semibold space-y-2",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "•  Meme Vault testing with rewards for active Agents",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "• Focus on stability, organic growth, and transparent listings",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "• Gradual expansion toward wider market exposure",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "",
                      children: (0, s.jsx)("img", {
                        src: "/4phase.gif",
                        alt: "phase4gif",
                        className: " w-[500px]  z-40",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var G = a(77886);
      function H({ question: e, answer: t, id: a, isOpen: n, onClick: i }) {
        return (0, s.jsxs)("div", {
          className: "rounded-xl mb-10 overflow-hidden",
          children: [
            (0, s.jsxs)("button", {
              onClick: i,
              className:
                "w-full flex justify-between   items-center text-left font-bold text-black",
              children: [
                (0, s.jsx)("span", {
                  className:
                    "flex items-center justify-center rounded-full text-white z-30",
                  children: (0, s.jsx)("h1", {
                    className:
                      "absolute border-8 px-3 py-1 [text-shadow:4px_4px_1px_#FDFDD2] border-black text-2xl  md:text-4xl bg-gradient-to-b from-[#FEF671] to-[#75DFFC] rounded-md  text-[#01032A]",
                    children: a,
                  }),
                }),
                (0, s.jsxs)("span", {
                  className:
                    "flex justify-between  text-[#01032A] w-full p-3 py-2  text-xs md:text-3xl items-center ml-10 md:ml-20",
                  children: [
                    e,
                    (0, s.jsx)("span", {
                      className:
                        "flex items-center justify-center w-5 h-5 rounded-full text-black",
                      children: n ? "▲" : "▼",
                    }),
                  ],
                }),
              ],
            }),
            n &&
              (0, s.jsx)("div", {
                className:
                  " text-xs md:text-lg  text-black  py-5 ml-14 font-normal md:ml-24 rounded-b-[40px] ",
                children: t,
              }),
          ],
        });
      }
      function V() {
        let [e, t] = (0, n.useState)(0),
          { t: a } = (0, A.o)(),
          i = [
            {
              id: 1,
              question: a("What is TAO INU?"),
              answer: a(
                "A fun memecoin built around the idea of Inu as a secret agent. It mixes humour, memes, and community vibes with crypto."
              ),
            },
            {
              id: 2,
              question: a("How can I buy Tao Inu?"),
              answer: a(
                "Right now through the presale on official links. After launch, it will be available on exchanges using Bitcoin, Ethereum, or other crypto."
              ),
            },
            {
              id: 3,
              question: a("Is Tao Inu legit and safe?"),
              answer: a(
                "Yes, it is an active project with a growing community, but like all crypto, it carries risks. Always use official links and invest wisely."
              ),
            },
            {
              id: 4,
              question: a("How to join the Tao Inu community?"),
              answer: a(
                "Join their Telegram, or Twitter. The community shares memes, updates, and presale info in a fun and friendly way."
              ),
            },
          ];
        return (0, s.jsxs)("section", {
          className:
            "relative py-14 px-10 md:px-16 bg-[url('/newyearfaq.png')] bg-cover bg-top bg-no-repeat flex flex-col justify-center self-center items-center [font-family:'Skranji',cursive]",
          children: [
            (0, s.jsx)("div", {
              className:
                "bg-[url('/newyearhead.png')] bg-cover bg-top bg-no-repeat p-5 md:p-10",
              children: (0, s.jsx)(d.default, {
                src: "/image(3).webp",
                alt: "logo",
                width: 400,
                height: 400,
                className: "w-32 md:w-64",
              }),
            }),
            (0, s.jsx)("div", {
              className: "w-full max-w-5xl mt-20 ",
              children: i.map((a, n) =>
                (0, s.jsx)(
                  H,
                  { ...a, isOpen: e === n, onClick: () => t(e === n ? 0 : n) },
                  n
                )
              ),
            }),
          ],
        });
      }
      var W = a(67635),
        q = a(66731),
        X = a.n(q);
      function J() {
        let { t: e } = (0, A.o)(),
          [t, a] = (0, n.useState)(!1),
          [i, r] = (0, n.useState)(0),
          d = [
            {
              label: "Presale",
              value: "14,000,000,000 $SPYD",
              color: "from-[#ACC1FF] to-[#4169E1]",
            },
            {
              label: "Chain Reserve",
              value: "6,000,000,000 $SPYD",
              color: "from-[#C9EEFF] to-[#53A9D1]",
            },
            {
              label: "Cex Reserve",
              value: "5,000,000,000 $SPYD",
              color: "from-[#FFADAF] to-[#BA474A]",
            },
            {
              label: "Staking & Reward",
              value: "5,000,000,000 $SPYD",
              color: "from-[#FFEC95] to-[#B59C27]",
            },
            {
              label: "Marketing",
              value: "4,000,000,000 $SPYD",
              color: "from-[#B1E67C] to-[#66AA22]",
            },
            {
              label: "Liquidity",
              value: "6,000,000,000 $SPYD",
              color: "from-[#EDBDEF] to-[#B975BC]",
            },
          ];
        return (0, s.jsx)("div", {
          id: "tokenomics",
          className: `${
            X().className
          } w-full min-h-screen flex items-center justify-center`,
          children: (0, s.jsxs)("div", {
            className:
              "w-full max-w-[86%] mt-10 md:mt-40 mb-20   rounded-3xl border border-[#053D3F] p-3 md:p-10 border-2 backdrop-blur-[10px]  shadow-2xl",
            children: [
              (0, s.jsx)("h1", {
                className:
                  "text-3xl md:mb-14  [text-shadow:4px_4px_2px_#607EEA] md:text-6xl text-center font-bold text-[#9A383A] ",
                children: e("Our Tokenomics"),
              }),
              (0, s.jsxs)("div", {
                className:
                  "flex text-sm md:text-xl justify-between my-7 md:my-0 md:mb-8 text-white gap-2 font-semibold",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-row gap-1 md:gap-3 bg-[#607EEA] px-4 py-3 rounded-lg shadow",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "text-black",
                        children: [e("Name"), ":"],
                      }),
                      " ",
                      (0, s.jsx)("span", { children: "TAO INU" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-row gap-1 md:gap-3 bg-[#607EEA] px-4 py-3 rounded-lg shadow",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "text-black",
                        children: [e("Symbol"), ":"],
                      }),
                      " ",
                      (0, s.jsx)("span", { children: "TINU" }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "text-center ",
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "text-3xl md:text-[140px] font-extrabold text-black tracking-wide pb-2 md:pb-16 md:py-5",
                    children: "1,000,000,000",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex justify-between text-xs md:text-sm text-gray-700 mt-1 ",
                    children: [
                      
                      (0, s.jsx)("span", { children: "TOTAL SUPPLY" }),
                    ],
                  }),
                ],
              }),
              
              (0, s.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 text-center text-[#141313]  text-xl md:text-[20px]  gap-6 mt-10 mb-10",
                style: { fontFamily: "'Fredoka One', cursive" },
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "bg-[#607EEA] rounded-xl flex flex-row  gap-3 shadow-lg md:p-6 py-1 md:py-3 justify-center border-[#3d73ff] border-2 [box-shadow:3px_3px_5px_black] transition-transform hover:scale-[1.01]",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-xs md:text-xl text-[#000]",
                        children: "LP:",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center h-fit justify-center gap-3",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "md:hidden text-white text-xs md:text-lg",
                            children: "LOCKED",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "hidden md:block text-white text-xs md:text-lg",
                            children: "LOCKED",
                          }),
                          
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "bg-[#607EEA] rounded-xl flex flex-row  gap-3 shadow-lg md:p-6 py-1 md:py-3 justify-center border-[#3d73ff] border-2 [box-shadow:3px_3px_5px_black] transition-transform hover:scale-[1.01]",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-xs md:text-xl text-[#000]",
                        children: "Contract:",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center h-fit justify-center gap-3",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "md:hidden text-white text-xs md:text-lg",
                            children: "Renounced",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "hidden md:block text-white text-xs md:text-lg",
                            children: "Renounced",
                          }),
                          
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "bg-[#607EEA] rounded-xl flex flex-row  gap-3 shadow-lg md:p-6 py-1 md:py-3 justify-center border-[#3d73ff] border-2 [box-shadow:3px_3px_5px_black] transition-transform hover:scale-[1.01]",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-xs md:text-xl text-[#000]",
                        children: "ETH Contract Address:",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center h-fit justify-center gap-3",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "md:hidden text-white text-xs md:text-lg",
                            children: "0x388.....ae9",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "hidden md:block text-white text-xs md:text-lg",
                            children: "0x388557.....Ba27ae9",
                          }),
                          (0, s.jsx)(W.A, {
                            size: 22,
                            className:
                              "cursor-pointer text-white hover:scale-110 transition-transform",
                            onClick: () => {
                              navigator.clipboard.writeText(
                                "0x388557f766C1296D0033d8F964193597bBa27ae9"
                              ),
                                a("eth"),
                                setTimeout(() => a(!1), 1500);
                            },
                          }),
                          "eth" === t &&
                            (0, s.jsx)("span", {
                              className:
                                "text-white text-sm font-semibold animate-fade-in",
                              children: "Copied!",
                            }),
                        ],
                      }),
                    ],
                  }),
                  
                ],
              }),
            ],
          }),
        });
      }
      function Q() {
        let { t: e } = (0, A.o)();
        return (0, s.jsx)("div", {
          className: " bg-[url('/buybg.png')] bg-cover bg-no-repeat bg-center",
          children: (0, s.jsxs)("div", {
            className: "pt-20 max-w-[1920px] mx-auto ",
            children: [
              (0, s.jsxs)("h1", {
                className:
                  "text-center  text-4xl md:text-8xl font-extrabold md:mt-20 [font-family:'Skranji',cursive] [text-shadow:5px_5px_0px_#6289B3]",
                children: [e("How to Buy"), " ?"],
              }),
              
              (0, s.jsx)(J, {}),
            ],
          }),
        });
      }
      var K = a(12618),
        Z = a.n(K);
      let ee = [
        {
          title: "Not Just a Meme Coin",
          desc: "SpyDoge is built beyond hype — combining community, interaction, and a growing ecosystem.",
        },
        {
          title: "Interactive System",
          desc: "Users engage, compete, and move through a live network driven by activity and strategy.",
        },
        {
          title: "Game Evolution",
          desc: "Transitioning into a full mission-based gameplay experience with real mechanics.",
        },
        {
          title: "SpyVerse Vision",
          desc: "A connected graphical universe where agents interact in a larger intelligence world.",
        },
        {
          title: "VR Expansion",
          desc: "Future experiences will allow users to step inside the SpyVerse environment.",
        },
        {
          title: "Early Positioning",
          desc: "Early participants gain the strongest advantage as the ecosystem expands.",
        },
      ];
      function et() {
        let [e, t] = (0, n.useState)(0);

      }
      function ea() {
        let e = [
            { name: "CoinGape", img: "/coingape.png" },
            { name: "BINANCE", img: "/binance.png" },
            { name: "Cointraffic", img: "/cointraffic.png" },
            { name: "Crypto promo", img: "/cryptopromo.png" },
            { name: "BSC Newspaper", img: "/bsc.png" },
            { name: "CoinTrendo", img: "/coint.png" },
            { name: "CoinGape", img: "/coingape.png" },
            { name: "BINANCE", img: "/binance.png" },
            { name: "Cointraffic", img: "/cointraffic.png" },
            { name: "Crypto promo", img: "/cryptopromo.png" },
            { name: "BSC Newspaper", img: "/bsc.png" },
            { name: "CoinTrendo", img: "/coint.png" },
            { name: "CoinGape", img: "/coingape.png" },
            { name: "BINANCE", img: "/binance.png" },
            { name: "Cointraffic", img: "/cointraffic.png" },
            { name: "Crypto promo", img: "/cryptopromo.png" },
            { name: "BSC Newspaper", img: "/bsc.png" },
            { name: "CoinTrendo", img: "/coint.png" },
          ],
          t = [...e, ...e, ...e];
        // return (0, s.jsx)("div", {
        //   className: "bg-[#B46FCC] py-4 overflow-hidden",
        //   children: (0, s.jsxs)("div", {
        //     className: "flex items-center gap-10 px-2 md:px-5 ",
        //     children: [
        //       (0, s.jsx)("h1", {
        //         className:
        //           "text-white text-lg md:text-4xl whitespace-nowrap   [-webkit-text-stroke:1px_black] [text-shadow:-1px_4px_1px_#000000] ",
        //         style: { fontFamily: "'Luckiest Guy', cursive" },
        //         children: "FEATURED IN",
        //       }),
        //       (0, s.jsx)("div", {
        //         className: "relative overflow-hidden w-full",
        //         children: (0, s.jsx)("div", {
        //           className: "flex animate-scroll whitespace-nowrap",
        //           children: t.map((e, t) =>
        //             (0, s.jsxs)(
        //               "div",
        //               {
        //                 className: "flex items-center gap-2 px-9",
        //                 style: { fontFamily: "'Poppins', sans-serif" },
        //                 children: [
        //                   (0, s.jsx)(d.default, {
        //                     src: e.img,
        //                     alt: e.name,
        //                     width: 1200,
        //                     height: 1200,
        //                     className: "w-40 h-10",
        //                   }),
        //                   (0, s.jsx)("span", {
        //                     className:
        //                       "text-white text-xl font-semibold whitespace-nowrap",
        //                     children: e.name,
        //                   }),
        //                 ],
        //               },
        //               t
        //             )
        //           ),
        //         }),
        //       }),
        //     ],
        //   }),
        // });
      }
      let es = () => {
        let [e, t] = (0, n.useState)("/step1.jpg"),
          [a, i] = (0, n.useState)(120);
        return (
          (0, n.useEffect)(() => {
            i(Math.floor(31 * Math.random()) + 120);
          }, []),
          (0, s.jsx)("section", {
            id: "mission-view",
            className:
              "bg-slate-950 text-white md:py-20  md:px-6 font-sans overflow-hidden",
            
          })
        );
      };
      var en = a(94928),
        ei = a(31069),
        er = a(47149),
        el = a(53961),
        ed = a(80642);
      let eo = [
          { name: "AgentShadow", score: 1240 },
          { name: "DogeSniper", score: 1180 },
          { name: "CryptoHunter", score: 1110 },
          { name: "SpyAlpha", score: 1040 },
          { name: "NightAgent", score: 980 },
          { name: "GhostByte", score: 940 },
          { name: "ZeroTrace", score: 900 },
          { name: "DarkCipher", score: 860 },
          { name: "PhantomX", score: 820 },
          { name: "NeoAgent", score: 780 },
        ],
        ec = [
          (e, t) => `💰 ${e} secured ${t} SPYD`,
          (e) => `🚀 ${e} entered a mission`,
          (e) => `⚡ ${e} upgraded gear`,
          (e) => `⚠️ ${e} failed a mission`,
          (e) => `🔥 ${e} climbed leaderboard`,
        ];
      function ep() {
        let [e, t] = (0, n.useState)(eo),
          [a, r] = (0, n.useState)([
            "\uD83D\uDD25 AgentShadow started a high-value mission",
            "\uD83D\uDE80 DogeSniper entered stealth mode",
            "⚡ CryptoHunter upgraded gear",
            "\uD83D\uDCB0 SpyAlpha secured 120 SPYD",
          ]),
          [l, d] = (0, n.useState)(312),
          o = (0, n.useRef)({});
        (0, n.useEffect)(() => {
          let e = setInterval(() => {
            t((e) =>
              e.map((e) => {
                let t = Math.random(),
                  a = 0;
                a =
                  t < 0.55
                    ? Math.floor(25 * Math.random())
                    : t < 0.85
                    ? -Math.floor(20 * Math.random())
                    : 0;
                let s = Math.max(0, e.score + a);
                return (
                  (o.current[e.name] = e.score), { ...e, score: s, change: a }
                );
              })
            );
            let e = `Agent${Math.floor(200 * Math.random())}`,
              a = Math.floor(200 * Math.random()),
              s = (0, ec[Math.floor(Math.random() * ec.length)])(e, a);
            r((e) => [s, ...e].slice(0, 12)),
              d((e) =>
                Math.max(120, e + (Math.floor(20 * Math.random()) - 10))
              );
          }, 4200);
          return () => clearInterval(e);
        }, []);
        let p = [...e].sort((e, t) => t.score - e.score);
        
      }
      function em() {
        let { t: e } = (0, A.o)();
        return (0, s.jsxs)("div", {
          className: "",
          children: [
            (0, s.jsx)("div", {
              className: ` ${
                Z().className
              } flex w-full bg-[url('/mobnew.png')]  md:bg-[url('/whyspyd.png')]  bg-top bg-cover bg-no-repeat flex h-[800px] md:h-[800px] 2xl:h-[900px] md:pt-24 pb-5  items-center px-3`,
              children: (0, s.jsx)("div", {
                className:
                  "flex max-w-[4000px] mx-auto items-start self-start md:justify-center md:items-end md:self-end pt-10 md:pt-0 pb-10",
                children: (0, s.jsxs)("div", {
                  className: "md:w-[77%] ",
                  children: [
                    (0, s.jsxs)("h1", {
                      className:
                        " text-center text-3xl md:text-6xl font-luckiest tracking-wide [text-shadow:-3px_-2px_1px_black,-2px_5px_0px_black,4px_5px_0px_black,0px_0px_40px_white] [-webkit-text-stroke:1.5px_black]  text-white  mb-6  ",
                      children: [
                        "WHAT IS ",
                        (0, s.jsx)("span", {
                          className: "text-[#27FBFF]",
                          children: "TAO INU?",
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-white text-md [text-shadow:-3px_-2px_10px_#64B7E8] md:text-xl font-bold text-center leading-6 [-webkit-text-stroke:1px_black] md:leading-8 [font-family:'poppins'] ",
                      children: e(
                        "TINU is a decentralized meme token that's all about community, fun, and innovation. We're inspired by the cutting-edge technology of the Bittensor network and aim to bring people together through our token and Bittensor AI-powered tools. WOOF!"
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsx)(ea, {}),
            (0, s.jsx)(et, {}),
            (0, s.jsx)(ep, {}),
            (0, s.jsx)("div", { className: "", children: (0, s.jsx)(es, {}) }),
          ],
        });
      }
      var ex = a(55007);
      function eu() {
        let e = [
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
            { name: "SPYDOGE", img: "/logo.png" },
          ],
          t = [...e, ...e, ...e];
        return (0, s.jsx)("div", {
          className: "bg-[#B46FCC] py-4 overflow-hidden",
          children: (0, s.jsx)("div", {
            className: "flex items-center gap-10 px-0 md:px-0 ",
            children: (0, s.jsx)("div", {
              className: "relative overflow-hidden w-full",
              children: (0, s.jsx)("div", {
                className: "flex animate-scroll whitespace-nowrap",
                children: t.map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "flex items-center gap-3 px-8",
                      style: { fontFamily: "'Poppins', sans-serif" },
                      children: [
                        (0, s.jsx)(d.default, {
                          src: "/logo.png",
                          alt: e.name,
                          width: 40,
                          height: 40,
                          className: "w-10 h-10",
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "text-white text-xl font-semibold whitespace-nowrap",
                          children: "TAO INU",
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            }),
          }),
        });
      }
      function eh() {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              let e = window.scrollY,
                a = document.documentElement.scrollHeight,
                s = window.innerHeight;
              window.innerWidth < 768
                ? e + s < a - 600
                  ? t(!0)
                  : t(!1)
                : e > 100 && e + s < a - 250
                ? t(!0)
                : t(!1);
            };
            return (
              window.addEventListener("scroll", e),
              e(),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(L.default, {}),
              (0, s.jsx)("div", {
                className: `fixed bottom-0 right-0 md:right-5  z-40 transition-opacity duration-300 ${
                  e ? "opacity-100" : "opacity-0 pointer-events-none"
                } `,
                children: (0, s.jsx)(ex.A, { direction: "up" }),
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(R, {}),
                  (0, s.jsx)(eu, {}),
                  (0, s.jsx)(em, {}),
                  (0, s.jsx)(z, {}),
                  (0, s.jsx)(Q, {}),
                  (0, s.jsx)(V, {}),
                ],
              }),
              (0, s.jsx)(G.default, {}),
            ],
          })
        );
      }
    },
    92881: (e, t, a) => {
      "use strict";
      a.d(t, { Bx: () => n, I7: () => i });
      var s = a(59185);
      a(34015);
      let n = {
          Purchase: "Purchase",
          InitiateCheckout: "InitiateCheckout",
          CompleteRegistration: "CompleteRegistration",
          AddPaymentInfo: "AddPaymentInfo",
          PageView: "PageView",
        },
        i = async (e) => {
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
    99432: () => {},
  },
  (e) => {
    e.O(
      0,
      [
        7334, 7777, 6212, 6711, 9268, 4946, 3718, 8500, 5807, 1444, 9673, 6873,
        8388, 5024, 8441, 3794, 7358,
      ],
      () => e((e.s = 39331))
    ),
      (_N_E = e.O());
  },
]);
