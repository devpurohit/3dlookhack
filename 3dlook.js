!(function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    r.d(
                        n,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = "/"),
        r((r.s = 145));
})([
    ,
    function (e, t) {
        e.exports = function (e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        };
    },
    ,
    function (e, t, r) {
        e.exports = r(22);
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "m", function () {
            return u;
        }),
            r.d(t, "o", function () {
                return f;
            }),
            r.d(t, "n", function () {
                return d;
            }),
            r.d(t, "q", function () {
                return l;
            }),
            r.d(t, "r", function () {
                return h;
            }),
            r.d(t, "e", function () {
                return p;
            }),
            r.d(t, "g", function () {
                return w;
            }),
            r.d(t, "i", function () {
                return v;
            }),
            r.d(t, "j", function () {
                return y;
            }),
            r.d(t, "t", function () {
                return b;
            }),
            r.d(t, "u", function () {
                return x;
            }),
            r.d(t, "h", function () {
                return E;
            }),
            r.d(t, "f", function () {
                return k;
            }),
            r.d(t, "a", function () {
                return S;
            }),
            r.d(t, "b", function () {
                return O;
            }),
            r.d(t, "v", function () {
                return j;
            }),
            r.d(t, "k", function () {
                return P;
            }),
            r.d(t, "p", function () {
                return T;
            }),
            r.d(t, "l", function () {
                return A;
            }),
            r.d(t, "d", function () {
                return _;
            }),
            r.d(t, "s", function () {
                return I;
            }),
            r.d(t, "c", function () {
                return L;
            });
        var n = r(1),
            o = r.n(n),
            i = (r(21), r(25));
        function a(e) {
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (e = (function (e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return s(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t);
                    })(e))
                ) {
                    var t = 0,
                        r = function () {};
                    return {
                        s: r,
                        n: function () {
                            return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: r,
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var n,
                o,
                i = !0,
                a = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]();
                },
                n: function () {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function (e) {
                    (a = !0), (o = e);
                },
                f: function () {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (a) throw o;
                    }
                },
            };
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        var u = function (e) {
                var t = "";
                for (var r in e) "" !== t && (t += "&"), (t += "".concat(r, "=").concat(encodeURIComponent(e[r])));
                return t;
            },
            f = function () {
                var e = window.location.hash.indexOf("?") + 1,
                    t = window.location.hash.substr(e);
                return (t = decodeURIComponent(t)).split("&").reduce(function (e, t) {
                    var r = t.split("=");
                    return (e[r[0]] = r[1]), e;
                }, {});
            },
            d = function () {
                var e = window.location.search.substr(1);
                return (e = decodeURIComponent(e)).split("&").reduce(function (e, t) {
                    var r = t.split("=");
                    return (e[r[0]] = r[1]), e;
                }, {});
            },
            l = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    n = r || f().origin || window.location.origin;
                window.parent.postMessage({ command: "saia-pf-widget.".concat(e), data: t }, n);
            },
            h = function (e) {
                for (var t = Object.entries(e), r = {}, n = 0; n < t.length; n += 1) {
                    var o = t[n];
                    r[o[0]] = o[1].size;
                }
                return r;
            },
            p = function (e) {
                var t = (0.3937 * e) / 12,
                    r = Math.floor(t),
                    n = Math.round(12 * (t - r));
                return 12 === n && ((r += 1), (n = 0)), { ft: r, in: n };
            },
            m = function (e) {
                return 2.54 * e;
            },
            g = function (e) {
                return 12 * e;
            },
            w = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return m(g(e) + parseInt(t, 10));
            },
            v = function (e) {
                return Math.round(0.45359237 * e);
            },
            y = function () {
                var e = !1;
                return (
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                        navigator.userAgent
                    ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            navigator.userAgent.substr(0, 4)
                        )) &&
                        (e = !0),
                    e
                );
            },
            b = function (e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
            },
            x = function (e) {
                return /^[0-9,\-, , (, ), \+]*$/.test(e.trim());
            },
            E = function (e) {
                return new Promise(function (t, r) {
                    var n = new FileReader();
                    n.addEventListener("load", function () {
                        var e = new DataView(n.result);
                        if (65496 !== e.getUint16(0, !1)) return t(-2);
                        for (var r = e.byteLength, o = 2; o < r; ) {
                            var i = e.getUint16(o, !1);
                            if (((o += 2), 65505 === i)) {
                                if (((o += 2), 1165519206 !== e.getUint32(o, !1))) return t(-1);
                                var a = 18761 === e.getUint16((o += 6), !1);
                                o += e.getUint32(o + 4, a);
                                var s = e.getUint16(o, a);
                                o += 2;
                                for (var c = 0; c < s; c += 1) if (274 === e.getUint16(o + 12 * c, a)) return t(e.getUint16(o + 12 * c + 8, a));
                            } else {
                                if (65280 !== (65280 & i)) return t(-1);
                                o += e.getUint16(o, !1);
                            }
                        }
                        return t(-1);
                    }),
                        n.addEventListener("error", function (e) {
                            return r(e);
                        }),
                        n.readAsArrayBuffer(e);
                });
            },
            k = function (e, t) {
                return new Promise(function (r, n) {
                    var o = new FileReader();
                    o.addEventListener("load", function () {
                        if (!t || t <= 1) return r(o.result);
                        var e = new Image();
                        return (
                            e.addEventListener("load", function () {
                                var n = document.createElement("canvas"),
                                    o = n.getContext("2d"),
                                    i = e.width,
                                    a = e.height;
                                switch (((n.width = i), (n.height = a), t)) {
                                    case 2:
                                        o.translate(i, 0), o.scale(-1, 1);
                                        break;
                                    case 3:
                                        o.translate(i, a), o.rotate(1 * Math.PI);
                                        break;
                                    case 4:
                                        o.translate(0, a), o.scale(1, -1);
                                        break;
                                    case 5:
                                        (n.width = a), (n.height = i), o.rotate(0.5 * Math.PI), o.scale(1, -1);
                                        break;
                                    case 6:
                                        (n.width = a), (n.height = i), o.rotate(0.5 * Math.PI), o.translate(0, -a);
                                        break;
                                    case 7:
                                        (n.width = a), (n.height = i), o.rotate(1.5 * Math.PI), o.translate(-i, a), o.scale(1, -1);
                                        break;
                                    case 8:
                                        (n.width = a), (n.height = i), o.translate(0, i), o.rotate(1.5 * Math.PI);
                                }
                                o.drawImage(e, 0, 0, i, a), r(n.toDataURL("image/jpeg", 0.95));
                            }),
                            (e.src = o.result),
                            null
                        );
                    }),
                        o.addEventListener("error", function (e) {
                            n(e);
                        }),
                        o.readAsDataURL(e);
                });
            },
            S = function () {
                var e = Object(i.b)(navigator.userAgent);
                return "Mac OS" === e || "iOS" === e ? "safari" : "chrome";
            },
            O = function () {
                var e = S(),
                    t = Object(i.a)(navigator.userAgent);
                return (
                    !(
                        window.navigator.userAgent.includes("Mint Browser") ||
                        window.navigator.userAgent.includes("UCBrowser") ||
                        window.navigator.userAgent.includes("OPT") ||
                        window.navigator.userAgent.includes("EdgA") ||
                        window.navigator.userAgent.includes("MiuiBrowser") ||
                        window.navigator.userAgent.includes("Puffin") ||
                        window.navigator.userAgent.includes("DuckDuckGo")
                    ) &&
                    ("safari" !== e || "safari" === t || "ios" === t) &&
                    !("chrome" === e && "chrome" !== t)
                );
            },
            j = function (e) {
                return new Promise(function (t) {
                    setTimeout(function () {
                        return t();
                    }, e);
                });
            },
            P = function () {
                try {
                    var e = sessionStorage.getItem("widgetPf");
                    if (null === e) return;
                    return JSON.parse(e);
                } catch (t) {
                    return;
                }
            },
            T = function (e) {
                try {
                    var t = JSON.stringify(e);
                    sessionStorage.setItem("widgetPf", t);
                } catch (r) {}
            },
            A = function (e, t) {
                e
                    .updateState(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? c(Object(r), !0).forEach(function (t) {
                                          o()(e, t, r[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                    : c(Object(r)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                      });
                            }
                            return e;
                        })({}, t, { processStatus: "", lastActiveDate: Date.now() })
                    )
                    .then(function () {
                        return Promise.resolve();
                    }),
                    setInterval(function () {
                        e.updateState({ lastActiveDate: Date.now() }).then(function () {
                            return Promise.resolve();
                        });
                    }, 3e3);
            },
            _ = function (e) {
                return e / 2.54;
            },
            I = function () {
                var e = document.body;
                navigator.onLine ? e.classList.remove("offline") : e.classList.add("offline");
            },
            L = function () {
                var e,
                    t = a(document.querySelectorAll("select"));
                try {
                    for (t.s(); !(e = t.n()).done; ) {
                        e.value.blur();
                    }
                } catch (r) {
                    t.e(r);
                } finally {
                    t.f();
                }
            };
    },
    ,
    ,
    function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function (e, t) {
        function r(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        e.exports = function (e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e;
        };
    },
    ,
    function (e, t) {
        function r(e, t, r, n, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value;
            } catch (u) {
                return void r(u);
            }
            s.done ? t(c) : Promise.resolve(c).then(n, o);
        }
        e.exports = function (e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (o, i) {
                    var a = e.apply(t, n);
                    function s(e) {
                        r(a, o, i, s, c, "next", e);
                    }
                    function c(e) {
                        r(a, o, i, s, c, "throw", e);
                    }
                    s(void 0);
                });
            };
        };
    },
    ,
    ,
    function (e, t, r) {
        "use strict";
        var n = r(30),
            o = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === o.call(e);
        }
        function a(e) {
            return "undefined" === typeof e;
        }
        function s(e) {
            return null !== e && "object" === typeof e;
        }
        function c(e) {
            return "[object Function]" === o.call(e);
        }
        function u(e, t) {
            if (null !== e && "undefined" !== typeof e)
                if (("object" !== typeof e && (e = [e]), i(e))) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
                else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === o.call(e);
            },
            isBuffer: function (e) {
                return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
            },
            isFormData: function (e) {
                return "undefined" !== typeof FormData && e instanceof FormData;
            },
            isArrayBufferView: function (e) {
                return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
            },
            isString: function (e) {
                return "string" === typeof e;
            },
            isNumber: function (e) {
                return "number" === typeof e;
            },
            isObject: s,
            isUndefined: a,
            isDate: function (e) {
                return "[object Date]" === o.call(e);
            },
            isFile: function (e) {
                return "[object File]" === o.call(e);
            },
            isBlob: function (e) {
                return "[object Blob]" === o.call(e);
            },
            isFunction: c,
            isStream: function (e) {
                return s(e) && c(e.pipe);
            },
            isURLSearchParams: function (e) {
                return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return ("undefined" === typeof navigator || ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) && "undefined" !== typeof window && "undefined" !== typeof document;
            },
            forEach: u,
            merge: function e() {
                var t = {};
                function r(r, n) {
                    "object" === typeof t[n] && "object" === typeof r ? (t[n] = e(t[n], r)) : (t[n] = r);
                }
                for (var n = 0, o = arguments.length; n < o; n++) u(arguments[n], r);
                return t;
            },
            deepMerge: function e() {
                var t = {};
                function r(r, n) {
                    "object" === typeof t[n] && "object" === typeof r ? (t[n] = e(t[n], r)) : (t[n] = "object" === typeof r ? e({}, r) : r);
                }
                for (var n = 0, o = arguments.length; n < o; n++) u(arguments[n], r);
                return t;
            },
            extend: function (e, t, r) {
                return (
                    u(t, function (t, o) {
                        e[o] = r && "function" === typeof t ? n(t, r) : t;
                    }),
                    e
                );
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
        };
    },
    ,
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var r = (function (e, t) {
                            var r = e[1] || "",
                                n = e[3];
                            if (!n) return r;
                            if (t && "function" === typeof btoa) {
                                var o = (function (e) {
                                        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
                                            r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
                                        return "/*# ".concat(r, " */");
                                    })(n),
                                    i = n.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
                                    });
                                return [r].concat(i).concat([o]).join("\n");
                            }
                            return [r].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
                    }).join("");
                }),
                (t.i = function (e, r, n) {
                    "string" === typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (n)
                        for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (o[a] = !0);
                        }
                    for (var s = 0; s < e.length; s++) {
                        var c = [].concat(e[s]);
                        (n && o[c[0]]) || (r && (c[2] ? (c[2] = "".concat(r, " and ").concat(c[2])) : (c[2] = r)), t.push(c));
                    }
                }),
                t
            );
        };
    },
    function (e, t, r) {
        "use strict";
        var n = (function () {
                var e;
                return function () {
                    return "undefined" === typeof e && (e = Boolean(window && document && document.all && !window.atob)), e;
                };
            })(),
            o = (function () {
                var e = {};
                return function (t) {
                    if ("undefined" === typeof e[t]) {
                        var r = document.querySelector(t);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                            try {
                                r = r.contentDocument.head;
                            } catch (n) {
                                r = null;
                            }
                        e[t] = r;
                    }
                    return e[t];
                };
            })(),
            i = [];
        function a(e) {
            for (var t = -1, r = 0; r < i.length; r++)
                if (i[r].identifier === e) {
                    t = r;
                    break;
                }
            return t;
        }
        function s(e, t) {
            for (var r = {}, n = [], o = 0; o < e.length; o++) {
                var s = e[o],
                    c = t.base ? s[0] + t.base : s[0],
                    u = r[c] || 0,
                    f = "".concat(c, " ").concat(u);
                r[c] = u + 1;
                var d = a(f),
                    l = { css: s[1], media: s[2], sourceMap: s[3] };
                -1 !== d ? (i[d].references++, i[d].updater(l)) : i.push({ identifier: f, updater: p(l, t), references: 1 }), n.push(f);
            }
            return n;
        }
        function c(e) {
            var t = document.createElement("style"),
                n = e.attributes || {};
            if ("undefined" === typeof n.nonce) {
                var i = r.nc;
                i && (n.nonce = i);
            }
            if (
                (Object.keys(n).forEach(function (e) {
                    t.setAttribute(e, n[e]);
                }),
                "function" === typeof e.insert)
            )
                e.insert(t);
            else {
                var a = o(e.insert || "head");
                if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t);
            }
            return t;
        }
        var u = (function () {
            var e = [];
            return function (t, r) {
                return (e[t] = r), e.filter(Boolean).join("\n");
            };
        })();
        function f(e, t, r, n) {
            var o = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
            if (e.styleSheet) e.styleSheet.cssText = u(t, o);
            else {
                var i = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
        }
        function d(e, t, r) {
            var n = r.css,
                o = r.media,
                i = r.sourceMap;
            if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet))
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        var l = null,
            h = 0;
        function p(e, t) {
            var r, n, o;
            if (t.singleton) {
                var i = h++;
                (r = l || (l = c(t))), (n = f.bind(null, r, i, !1)), (o = f.bind(null, r, i, !0));
            } else
                (r = c(t)),
                    (n = d.bind(null, r, t)),
                    (o = function () {
                        !(function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(r);
                    });
            return (
                n(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n((e = t));
                    } else o();
                }
            );
        }
        e.exports = function (e, t) {
            (t = t || {}).singleton || "boolean" === typeof t.singleton || (t.singleton = n());
            var r = s((e = e || []), t);
            return function (e) {
                if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                    for (var n = 0; n < r.length; n++) {
                        var o = a(r[n]);
                        i[o].references--;
                    }
                    for (var c = s(e, t), u = 0; u < r.length; u++) {
                        var f = a(r[u]);
                        0 === i[f].references && (i[f].updater(), i.splice(f, 1));
                    }
                    r = c;
                }
            };
        };
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return m;
        });
        var n = r(7),
            o = r.n(n),
            i = r(8),
            a = r.n(i),
            s = r(1),
            c = r.n(s),
            u = r(21),
            f = r.n(u);
        function d(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? d(Object(r), !0).forEach(function (t) {
                          c()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : d(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
            }
            return e;
        }
        var h = { status: "created" },
            p = l({}, h),
            m = (function () {
                function e(t) {
                    o()(this, e), c()(this, "flowId", null), (this.key = t), (this.axios = f.a.create()), (this.axios.defaults.headers = { Authorization: "UUID ".concat(t) });
                }
                return (
                    a()(e, [
                        {
                            key: "resetGlobalState",
                            value: function () {
                                p = l({}, h);
                            },
                        },
                        {
                            key: "setFlowId",
                            value: function (e) {
                                this.flowId = e;
                            },
                        },
                        {
                            key: "create",
                            value: function (e) {
                                return (
                                    (p = l({}, p, {}, e)),
                                    this.axios({ url: "".concat("https://saia.3dlook.me", "/api/v2/persons/widget/"), method: "POST", headers: { Authorization: "PUBLIC ".concat(this.key) }, data: { state: l({}, p) } }).then(function (e) {
                                        return e.data;
                                    })
                                );
                            },
                        },
                        {
                            key: "get",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.flowId;
                                return this.axios({ url: "".concat("https://saia.3dlook.me", "/api/v2/persons/widget/").concat(e, "/"), method: "GET" }).then(function (e) {
                                    var t = e.data.state;
                                    return (p = l({}, p, {}, t)), e.data;
                                });
                            },
                        },
                        {
                            key: "update",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.flowId;
                                return this.axios({ url: "".concat("https://saia.3dlook.me", "/api/v2/persons/widget/").concat(t, "/"), method: "PATCH", data: l({}, e, { state: l({}, p, {}, e.state) }) }).then(function (e) {
                                    return e.data;
                                });
                            },
                        },
                        {
                            key: "updateState",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.flowId;
                                return (
                                    (p = l({}, p, {}, e)),
                                    this.axios({ url: "".concat("https://saia.3dlook.me", "/api/v2/persons/widget/").concat(t, "/"), method: "PATCH", data: { state: l({}, p) } }).then(function (e) {
                                        return e.data;
                                    })
                                );
                            },
                        },
                        {
                            key: "widgetDeactivate",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.flowId;
                                return this.axios({ url: "".concat("https://saia.3dlook.me", "/api/v2/persons/widget/").concat(e, "/deactivate/"), method: "POST", data: {} }).then(function (e) {
                                    return e.data;
                                });
                            },
                        },
                        {
                            key: "updateLocalState",
                            value: function (e) {
                                p = l({}, p, {}, e);
                            },
                        },
                    ]),
                    e
                );
            })();
    },
    ,
    ,
    ,
    function (e, t, r) {
        e.exports = r(59);
    },
    function (e, t, r) {
        var n = (function (e) {
            "use strict";
            var t = Object.prototype,
                r = t.hasOwnProperty,
                n = "function" === typeof Symbol ? Symbol : {},
                o = n.iterator || "@@iterator",
                i = n.asyncIterator || "@@asyncIterator",
                a = n.toStringTag || "@@toStringTag";
            function s(e, t, r, n) {
                var o = t && t.prototype instanceof f ? t : f,
                    i = Object.create(o.prototype),
                    a = new E(n || []);
                return (
                    (i._invoke = (function (e, t, r) {
                        var n = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return S();
                            }
                            for (r.method = o, r.arg = i; ; ) {
                                var a = r.delegate;
                                if (a) {
                                    var s = y(a, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s;
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                                    r.dispatchException(r.arg);
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var f = c(e, t, r);
                                if ("normal" === f.type) {
                                    if (((n = r.done ? "completed" : "suspendedYield"), f.arg === u)) continue;
                                    return { value: f.arg, done: r.done };
                                }
                                "throw" === f.type && ((n = "completed"), (r.method = "throw"), (r.arg = f.arg));
                            }
                        };
                    })(e, r, a)),
                    i
                );
            }
            function c(e, t, r) {
                try {
                    return { type: "normal", arg: e.call(t, r) };
                } catch (n) {
                    return { type: "throw", arg: n };
                }
            }
            e.wrap = s;
            var u = {};
            function f() {}
            function d() {}
            function l() {}
            var h = {};
            h[o] = function () {
                return this;
            };
            var p = Object.getPrototypeOf,
                m = p && p(p(k([])));
            m && m !== t && r.call(m, o) && (h = m);
            var g = (l.prototype = f.prototype = Object.create(h));
            function w(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function v(e, t) {
                var n;
                this._invoke = function (o, i) {
                    function a() {
                        return new t(function (n, a) {
                            !(function n(o, i, a, s) {
                                var u = c(e[o], e, i);
                                if ("throw" !== u.type) {
                                    var f = u.arg,
                                        d = f.value;
                                    return d && "object" === typeof d && r.call(d, "__await")
                                        ? t.resolve(d.__await).then(
                                              function (e) {
                                                  n("next", e, a, s);
                                              },
                                              function (e) {
                                                  n("throw", e, a, s);
                                              }
                                          )
                                        : t.resolve(d).then(
                                              function (e) {
                                                  (f.value = e), a(f);
                                              },
                                              function (e) {
                                                  return n("throw", e, a, s);
                                              }
                                          );
                                }
                                s(u.arg);
                            })(o, i, n, a);
                        });
                    }
                    return (n = n ? n.then(a, a) : a());
                };
            }
            function y(e, t) {
                var r = e.iterator[t.method];
                if (void 0 === r) {
                    if (((t.delegate = null), "throw" === t.method)) {
                        if (e.iterator.return && ((t.method = "return"), (t.arg = void 0), y(e, t), "throw" === t.method)) return u;
                        (t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return u;
                }
                var n = c(r, e.iterator, t.arg);
                if ("throw" === n.type) return (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), u;
                var o = n.arg;
                return o
                    ? o.done
                        ? ((t[e.resultName] = o.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = void 0)), (t.delegate = null), u)
                        : o
                    : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), u);
            }
            function b(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function x(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function E(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(b, this), this.reset(!0);
            }
            function k(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" === typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            i = function t() {
                                for (; ++n < e.length; ) if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                                return (t.value = void 0), (t.done = !0), t;
                            };
                        return (i.next = i);
                    }
                }
                return { next: S };
            }
            function S() {
                return { value: void 0, done: !0 };
            }
            return (
                (d.prototype = g.constructor = l),
                (l.constructor = d),
                (l[a] = d.displayName = "GeneratorFunction"),
                (e.isGeneratorFunction = function (e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
                }),
                (e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, l) : ((e.__proto__ = l), a in e || (e[a] = "GeneratorFunction")), (e.prototype = Object.create(g)), e;
                }),
                (e.awrap = function (e) {
                    return { __await: e };
                }),
                w(v.prototype),
                (v.prototype[i] = function () {
                    return this;
                }),
                (e.AsyncIterator = v),
                (e.async = function (t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new v(s(t, r, n, o), i);
                    return e.isGeneratorFunction(r)
                        ? a
                        : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                          });
                }),
                w(g),
                (g[a] = "Generator"),
                (g[o] = function () {
                    return this;
                }),
                (g.toString = function () {
                    return "[object Generator]";
                }),
                (e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return (
                        t.reverse(),
                        function r() {
                            for (; t.length; ) {
                                var n = t.pop();
                                if (n in e) return (r.value = n), (r.done = !1), r;
                            }
                            return (r.done = !0), r;
                        }
                    );
                }),
                (e.values = k),
                (E.prototype = {
                    constructor: E,
                    reset: function (e) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(x), !e))
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;
                        function n(r, n) {
                            return (a.type = "throw"), (a.arg = e), (t.next = r), n && ((t.method = "next"), (t.arg = void 0)), !!n;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), u) : this.complete(a);
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            u
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, t, r) {
                        return (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }), "next" === this.method && (this.arg = void 0), u;
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = n;
        } catch (o) {
            Function("r", "regeneratorRuntime = r")(n);
        }
    },
    ,
    ,
    function (e, t, r) {
        "use strict";
        (function (e) {
            r.d(t, "a", function () {
                return a;
            }),
                r.d(t, "b", function () {
                    return s;
                });
            var n = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["vivaldi", /Vivaldi\/([0-9\.]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /Edg\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FBAV\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/],
                ],
                o = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/],
                ];
            function i(e) {
                return (
                    "" !== e &&
                    n.reduce(function (t, r) {
                        var n = r[0],
                            o = r[1];
                        if (t) return t;
                        var i = o.exec(e);
                        return !!i && [n, i];
                    }, !1)
                );
            }
            function a(e) {
                var t = i(e);
                return t ? t[0] : null;
            }
            function s(e) {
                for (var t = 0, r = o.length; t < r; t++) {
                    var n = o[t],
                        i = n[0];
                    if (n[1].exec(e)) return i;
                }
                return null;
            }
        }.call(this, r(34)));
    },
    ,
    function (e, t, r) {
        var n = r(55),
            o = r(56),
            i = r(57),
            a = r(58);
        e.exports = function (e) {
            return n(e) || o(e) || i(e) || a();
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(21),
            o = r.n(n);
        var i = class {
            constructor(e, t) {
                if (!e) throw new Error("host is not specified");
                if (!t) throw new Error("axios is not specified");
                (this.axios = t), (this.api = `${e}persons/`);
            }
            create(e) {
                if (!e) throw new Error("No person's parameters passed");
                if (!e.gender) throw new Error("gender is not specified");
                if (!e.height) throw new Error("height is not specified");
                const t = {};
                return (
                    e.measurementsType && (t.measurements_type = e.measurementsType),
                    this.axios({
                        url: this.api,
                        method: "post",
                        data: {
                            height: e.height,
                            gender: e.gender,
                            front_image: e.frontImage,
                            side_image: e.sideImage,
                            weight: e.weight,
                            weight_top_border: e.weightTopBorder,
                            weight_bottom_border: e.weightBottomBorder,
                            phone_position: e.deviceCoordinates,
                        },
                        params: t,
                    }).then((t) => {
                        if (!e.frontImage && !e.sideImage) return t.data.id;
                        const r = t.headers.location;
                        return /\/queue\/(.*)\//g.exec(r)[1];
                    })
                );
            }
            get(e) {
                if (!e) throw new Error("id is not specified");
                return this.axios({ url: `${this.api}${e}/`, method: "get" }).then((e) => e.data);
            }
            update(e, t) {
                if (!e) throw new Error("id is not specified");
                if (!t) throw new Error("params is not specified");
                if (!t.gender && !t.height && !t.frontImage && !t.sideImage) throw new Error("params is empty");
                return this.axios({
                    url: `${this.api}${e}/`,
                    method: "patch",
                    data: {
                        height: t.height,
                        gender: t.gender,
                        front_image: t.frontImage,
                        side_image: t.sideImage,
                        weight: t.weight,
                        weight_top_border: t.weightTopBorder,
                        weight_bottom_border: t.weightBottomBorder,
                        phone_position: t.deviceCoordinates,
                    },
                }).then((e) => e.data);
            }
            updateAndCalculate(e, t) {
                if (!e) throw new Error("id is not specified");
                if (!t) throw new Error("params is not specified");
                if (!t.gender && !t.height && !t.frontImage && !t.sideImage) throw new Error("params is empty");
                const r = {};
                return (
                    t.measurementsType && (r.measurements_type = t.measurementsType),
                    this.axios({
                        url: `${this.api}${e}/`,
                        method: "put",
                        data: {
                            height: t.height,
                            gender: t.gender,
                            front_image: t.frontImage,
                            side_image: t.sideImage,
                            weight: t.weight,
                            weight_top_border: t.weightTopBorder,
                            weight_bottom_border: t.weightBottomBorder,
                            phone_position: t.deviceCoordinates,
                        },
                        params: r,
                    }).then((e) => {
                        const t = e.headers.location;
                        return /\/queue\/(.*)\//g.exec(t)[1];
                    })
                );
            }
            calculate(e) {
                if (!e) throw new Error("id is not specified");
                return this.axios({ url: `${this.api}${e}/calculate/`, method: "get" }).then((e) => {
                    const t = e.headers.location;
                    return /\/queue\/(.*)\//g.exec(t)[1];
                });
            }
        };
        var a = class {
            constructor(e, t) {
                if (!e) throw new Error("host is not specified");
                if (!t) throw new Error("axios is not specified");
                (this.axios = t), (this.api = `${e}queue/`), (this.person = new i(e, this.axios)), (this.cachedPersonId = null);
            }
            get(e) {
                if (!e) throw new Error("id is not specified");
                return this.axios({ url: `${this.api}${e}/`, method: "get" }).then((e) => {
                    if (e.headers.location) {
                        const t = e.headers.location.match(/\/\d+\//gm);
                        this.cachedPersonId = t[0].replace(/\//g, "");
                    }
                    return e.data;
                });
            }
            checkStatus(e, t) {
                return new Promise((r, n) => {
                    const o = setInterval(() => {
                        this.get(e)
                            .then((e) => {
                                void 0 === e.is_successful && (clearInterval(o), r(e));
                            })
                            .catch((e) => {
                                n(e), clearInterval(o);
                            });
                    }, t);
                });
            }
            getResults(e, t, r) {
                if (!e) throw new Error("id is not specified");
                const n = t || 2e3;
                return new Promise((t, o) => {
                    this.checkStatus(e, n)
                        .then((e) => {
                            t(e);
                        })
                        .catch((e) =>
                            "Network Error" === e.message || "Request failed with status code 401" === e.message
                                ? this.person
                                      .get(r || this.cachedPersonId)
                                      .then((e) => t(e))
                                      .catch((e) => o(e))
                                : o(e)
                        );
                });
            }
        };
        var s = class {
            constructor(e, t) {
                if (!e) throw new Error("host is not specified");
                if (!t) throw new Error("axios is not specified");
                (this.axios = t), (this.api = `${e}products/`);
            }
            get(e) {
                if (!e) throw new Error("url is not specified");
                return this.axios({ url: `${this.api}product/`, method: "get", params: { url: e } }).then((e) => e.data);
            }
            getSize(e) {
                if (!e) throw new Error("params is not specified");
                if (!e.height) throw new Error("height is not specified");
                if (!e.gender) throw new Error("gender is not specified");
                if (!e.hips) throw new Error("hips is not specified");
                if (!e.chest) throw new Error("chest is not specified");
                if (!e.waist) throw new Error("waist is not specified");
                if (!e.url) throw new Error("url is not specified");
                return this.axios({ url: `${this.api}product/get-size/`, method: "post", data: e }).then((e) => e.data);
            }
            getRecommendations(e) {
                if (!e) throw new Error("params is not specified");
                if (!e.gender) throw new Error("gender is not specified");
                if (!e.hips) throw new Error("hips is not specified");
                if (!e.chest) throw new Error("chest is not specified");
                if (!e.waist) throw new Error("waist is not specified");
                if (!e.url) throw new Error("url is not specified");
                return this.axios({ url: `${this.api}size/recommendation/`, method: "post", data: e }).then((e) => e.data);
            }
        };
        var c = class {
            constructor(e, t) {
                if (!e) throw new Error("host is not specified");
                if (!t) throw new Error("axios is not specified");
                (this.axios = t), (this.api = `${e}sizecharts/`);
            }
            getSize(e) {
                if (!e) throw new Error("params is not specified");
                if (!e.gender) throw new Error("gender is not specified");
                if (!e.hips) throw new Error("hips is not specified");
                if (!e.chest) throw new Error("chest is not specified");
                if (!e.waist) throw new Error("waist is not specified");
                if (!e.body_part) throw new Error("body_part is not specified");
                if (!e.brand) throw new Error("brand is not specified");
                const t = !!e.customRecommendation;
                return this.axios({ url: `${this.api}${t ? "custom/" : ""}size/recommendation${t ? `/${e.customRecommendation}` : ""}/`, method: "get", params: e })
                    .then((e) => e.data)
                    .catch((e) => (e.response && 404 === e.response.status ? Promise.resolve(null) : Promise.reject(e)));
            }
        };
        var u = class {
            constructor(e, t) {
                if (!e) throw new Error("host is not specified");
                if (!t) throw new Error("axios is not specified");
                (this.axios = t), (this.api = `${e}measurements/mtm-clients/`);
            }
            create(e) {
                if (!e) throw new Error("No mtm client's parameters passed");
                if (!e.unit) throw new Error("unit is not specified");
                return this.axios({ url: this.api, method: "post", data: { first_name: e.firstName, last_name: e.lastName, unit: e.unit, phone: e.phone, email: e.email, source: e.source, notes: e.notes, widget_id: e.widgetId } }).then(
                    (e) => e.data.id
                );
            }
            update(e, t) {
                if (!e) throw new Error("No mtm client's id passed");
                if (!t) throw new Error("No mtm client's parameters passed");
                return this.axios({ url: `${this.api}${e}/`, method: "patch", data: { ...t } }).then((e) => e.data.id);
            }
            createPerson(e, t) {
                if (!e) throw new Error("No mtm client id passed");
                if (!t) throw new Error("No mtm client's parameters passed");
                if (!t.gender) throw new Error("gender is not specified");
                if (!t.height) throw new Error("height is not specified");
                const r = {};
                return (
                    t.measurementsType && (r.measurements_type = t.measurementsType),
                    this.axios({
                        url: `${this.api}${e}/persons/`,
                        method: "post",
                        data: { height: t.height, gender: t.gender, front_image: t.frontImage, side_image: t.sideImage, weight: t.weight, weight_top_border: t.weightTopBorder, weight_bottom_border: t.weightBottomBorder },
                        params: r,
                    }).then((e) => {
                        if (!t.frontImage && !t.sideImage) return e.data.id;
                        const r = e.headers.location;
                        return /\/queue\/(.*)\//g.exec(r)[1];
                    })
                );
            }
        };
        t.a = class {
            constructor(e = {}) {
                if (!e.host) throw new Error("You need to specify API host URL");
                if (!e.key) throw new Error("You need to specify API key");
                (this.host = e.host),
                    (this.key = e.key),
                    (this.axios = o.a.create()),
                    (this.axios.defaults.headers = { Authorization: `APIKey ${this.key}` }),
                    (this.person = new i(this.host, this.axios)),
                    (this.queue = new a(this.host, this.axios)),
                    (this.product = new s(this.host, this.axios)),
                    (this.sizechart = new c(this.host, this.axios)),
                    (this.mtmClient = new u(this.host, this.axios));
            }
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                return e.apply(t, r);
            };
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, r) {
            if (!t) return e;
            var i;
            if (r) i = r(t);
            else if (n.isURLSearchParams(t)) i = t.toString();
            else {
                var a = [];
                n.forEach(t, function (e, t) {
                    null !== e &&
                        "undefined" !== typeof e &&
                        (n.isArray(e) ? (t += "[]") : (e = [e]),
                        n.forEach(e, function (e) {
                            n.isDate(e) ? (e = e.toISOString()) : n.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e));
                        }));
                }),
                    (i = a.join("&"));
            }
            if (i) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)), (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
            }
            return e;
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
        };
    },
    function (e, t, r) {
        "use strict";
        (function (t) {
            var n = r(13),
                o = r(64),
                i = { "Content-Type": "application/x-www-form-urlencoded" };
            function a(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var s = {
                adapter: (function () {
                    var e;
                    return ("undefined" !== typeof XMLHttpRequest || ("undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t))) && (e = r(35)), e;
                })(),
                transformRequest: [
                    function (e, t) {
                        return (
                            o(t, "Accept"),
                            o(t, "Content-Type"),
                            n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e)
                                ? e
                                : n.isArrayBufferView(e)
                                ? e.buffer
                                : n.isURLSearchParams(e)
                                ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                                : n.isObject(e)
                                ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
                                : e
                        );
                    },
                ],
                transformResponse: [
                    function (e) {
                        if ("string" === typeof e)
                            try {
                                e = JSON.parse(e);
                                localStorage.setItem('uuid', e.uuid);
                                console.log('Rahul!!!', e);
                            } catch (t) {}
                        return e;
                    },
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (e) {
                    return e >= 200 && e < 300;
                },
                headers: { common: { Accept: "application/json, text/plain, */*" } },
            };
            n.forEach(["delete", "get", "head"], function (e) {
                s.headers[e] = {};
            }),
                n.forEach(["post", "put", "patch"], function (e) {
                    s.headers[e] = n.merge(i);
                }),
                (e.exports = s);
        }.call(this, r(34)));
    },
    function (e, t) {
        var r,
            n,
            o = (e.exports = {});
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function a() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === i || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
            try {
                return r(e, 0);
            } catch (t) {
                try {
                    return r.call(null, e, 0);
                } catch (t) {
                    return r.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                r = "function" === typeof setTimeout ? setTimeout : i;
            } catch (e) {
                r = i;
            }
            try {
                n = "function" === typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
                n = a;
            }
        })();
        var c,
            u = [],
            f = !1,
            d = -1;
        function l() {
            f && c && ((f = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && h());
        }
        function h() {
            if (!f) {
                var e = s(l);
                f = !0;
                for (var t = u.length; t; ) {
                    for (c = u, u = []; ++d < t; ) c && c[d].run();
                    (d = -1), (t = u.length);
                }
                (c = null),
                    (f = !1),
                    (function (e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                        try {
                            n(e);
                        } catch (t) {
                            try {
                                return n.call(null, e);
                            } catch (t) {
                                return n.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function p(e, t) {
            (this.fun = e), (this.array = t);
        }
        function m() {}
        (o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            u.push(new p(e, t)), 1 !== u.length || f || s(h);
        }),
            (p.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = m),
            (o.addListener = m),
            (o.once = m),
            (o.off = m),
            (o.removeListener = m),
            (o.removeAllListeners = m),
            (o.emit = m),
            (o.prependListener = m),
            (o.prependOnceListener = m),
            (o.listeners = function (e) {
                return [];
            }),
            (o.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
                return "/";
            }),
            (o.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = r(65),
            i = r(31),
            a = r(67),
            s = r(70),
            c = r(71),
            u = r(36);
        e.exports = function (e) {
            return new Promise(function (t, f) {
                var d = e.data,
                    l = e.headers;
                n.isFormData(d) && delete l["Content-Type"];
                var h = new XMLHttpRequest();
                if (e.auth) {
                    var p = e.auth.username || "",
                        m = e.auth.password || "";
                    l.Authorization = "Basic " + btoa(p + ":" + m);
                }
                var g = a(e.baseURL, e.url);
                if (
                    (h.open(e.method.toUpperCase(), i(g, e.params, e.paramsSerializer), !0),
                    (h.timeout = e.timeout),
                    (h.onreadystatechange = function () {
                        if (h && 4 === h.readyState && (0 !== h.status || (h.responseURL && 0 === h.responseURL.indexOf("file:")))) {
                            var r = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null,
                                n = { data: e.responseType && "text" !== e.responseType ? h.response : h.responseText, status: h.status, statusText: h.statusText, headers: r, config: e, request: h };
                            o(t, f, n), (h = null);
                        }
                    }),
                    (h.onabort = function () {
                        h && (f(u("Request aborted", e, "ECONNABORTED", h)), (h = null));
                    }),
                    (h.onerror = function () {
                        f(u("Network Error", e, null, h)), (h = null);
                    }),
                    (h.ontimeout = function () {
                        var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(u(t, e, "ECONNABORTED", h)), (h = null);
                    }),
                    n.isStandardBrowserEnv())
                ) {
                    var w = r(72),
                        v = (e.withCredentials || c(g)) && e.xsrfCookieName ? w.read(e.xsrfCookieName) : void 0;
                    v && (l[e.xsrfHeaderName] = v);
                }
                if (
                    ("setRequestHeader" in h &&
                        n.forEach(l, function (e, t) {
                            "undefined" === typeof d && "content-type" === t.toLowerCase() ? delete l[t] : h.setRequestHeader(t, e);
                        }),
                    n.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials),
                    e.responseType)
                )
                    try {
                        h.responseType = e.responseType;
                    } catch (y) {
                        if ("json" !== e.responseType) throw y;
                    }
                "function" === typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress),
                    "function" === typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken &&
                        e.cancelToken.promise.then(function (e) {
                            h && (h.abort(), f(e), (h = null));
                        }),
                    void 0 === d && (d = null),
                    h.send(d);
            });
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(66);
        e.exports = function (e, t, r, o, i) {
            var a = new Error(e);
            return n(a, t, r, o, i);
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = function (e, t) {
            t = t || {};
            var r = {},
                o = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                a = [
                    "baseURL",
                    "url",
                    "transformRequest",
                    "transformResponse",
                    "paramsSerializer",
                    "timeout",
                    "withCredentials",
                    "adapter",
                    "responseType",
                    "xsrfCookieName",
                    "xsrfHeaderName",
                    "onUploadProgress",
                    "onDownloadProgress",
                    "maxContentLength",
                    "validateStatus",
                    "maxRedirects",
                    "httpAgent",
                    "httpsAgent",
                    "cancelToken",
                    "socketPath",
                ];
            n.forEach(o, function (e) {
                "undefined" !== typeof t[e] && (r[e] = t[e]);
            }),
                n.forEach(i, function (o) {
                    n.isObject(t[o]) ? (r[o] = n.deepMerge(e[o], t[o])) : "undefined" !== typeof t[o] ? (r[o] = t[o]) : n.isObject(e[o]) ? (r[o] = n.deepMerge(e[o])) : "undefined" !== typeof e[o] && (r[o] = e[o]);
                }),
                n.forEach(a, function (n) {
                    "undefined" !== typeof t[n] ? (r[n] = t[n]) : "undefined" !== typeof e[n] && (r[n] = e[n]);
                });
            var s = o.concat(i).concat(a),
                c = Object.keys(t).filter(function (e) {
                    return -1 === s.indexOf(e);
                });
            return (
                n.forEach(c, function (n) {
                    "undefined" !== typeof t[n] ? (r[n] = t[n]) : "undefined" !== typeof e[n] && (r[n] = e[n]);
                }),
                r
            );
        };
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            this.message = e;
        }
        (n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (n.prototype.__CANCEL__ = !0),
            (e.exports = n);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(3),
            o = r.n(n),
            i = r(10),
            a = r.n(i),
            s = r(27),
            c = r.n(s),
            u = r(1),
            f = r.n(u),
            d = r(7),
            l = r.n(d),
            h = r(8),
            p = r.n(h),
            m = r(28),
            g = r(4),
            w = r(17);
        function v(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? v(Object(r), !0).forEach(function (t) {
                          f()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : v(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
            }
            return e;
        }
        r(82);
        var b = r(84),
            x = r(85),
            E = 0,
            k = (function () {
                function e(t) {
                    if (
                        (l()(this, e),
                        (E += 1),
                        (this.defaults = y(
                            {
                                container: ".saia-widget-container",
                                key: "",
                                widgetUrl: "https://mtm-widget.3dlook.me",
                                brand: "",
                                bodyPart: "",
                                returnUrl: "".concat(window.location.origin).concat(window.location.pathname),
                                returnUrlDesktop: !1,
                                buttonTitle: "GET MEASURED",
                            },
                            t,
                            { product: y({ description: "", imageUrl: "", url: "".concat(window.location.origin).concat(window.location.pathname) }, t.product), id: E }
                        )),
                        !this.defaults.container)
                    )
                        throw new Error("Please provide a container CSS selector");
                    if (!this.defaults.key) throw new Error("Please provide API key");
                    if (!this.defaults.widgetUrl) throw new Error("Please provide a widget url");
                    (this.buttonEl = null), (this.api = new m.a({ host: "".concat("https://saia.3dlook.me", "/api/v2/"), key: this.defaults.key || null }));
                }
                return (
                    p()(
                        e,
                        [
                            {
                                key: "init",
                                value: function () {
                                    var e = this;
                                    this.checkGetParamsForMeasurements();
                                    var t = "saia-mtm-button--".concat(this.defaults.id),
                                        r = b.replace("{{classes}}", t).replace("{{buttonTitle}}", this.defaults.buttonTitle);
                                    document.querySelector(this.defaults.container).insertAdjacentHTML("beforeend", r);
                                    var n = document.querySelector(".saia-mtm-drop");
                                    n || document.body.insertAdjacentHTML("beforeend", x),
                                        (n = document.querySelector(".saia-mtm-drop")),
                                        (this.modal = n),
                                        (this.buttonEl = document.querySelector(".saia-mtm-button--".concat(this.defaults.id))),
                                        (this.buttonEl.type = "button"),
                                        this.buttonEl.addEventListener("click", function () {
                                            return e.showWidget();
                                        }),
                                        window.addEventListener(
                                            "message",
                                            function (t) {
                                                var r = t.data,
                                                    n = r.command,
                                                    o = r.data,
                                                    i = JSON.parse(localStorage.getItem("saia-pf-widget-data"));
                                                switch (n) {
                                                    case "saia-pf-widget.close":
                                                        e.modal.classList.remove("active"), (e.modal.querySelector("iframe").src = "");
                                                        break;
                                                    case "saia-pf-widget.data":
                                                        i && i.persons && !i.persons.includes(o.personId) ? (o.persons = [].concat(c()(i.persons), [i.personId])) : (o.persons = [o.personId]),
                                                            localStorage.setItem("saia-pf-widget-data", JSON.stringify(o));
                                                        break;
                                                    case "saia-pf-widget.recommendations":
                                                        e.displaySize(o);
                                                }
                                            },
                                            !1
                                        ),
                                        (this.isMobile = Object(g.j)());
                                },
                            },
                            {
                                key: "checkGetParamsForMeasurements",
                                value: function () {
                                    var e = Object(g.o)();
                                    if (e.chest && e.height && e.hips && e.waist && e.gender) {
                                        var t = { hips: parseFloat(e.hips), chest: parseFloat(e.chest), waist: parseFloat(e.waist), gender: e.gender, height: parseFloat(e.height), personId: parseFloat(e.personId) };
                                        e.inseam && (t.inseam = parseFloat(e.inseam)),
                                            e.low_hips && (t.low_hips = parseFloat(e.low_hips)),
                                            e.thigh && (t.thigh = parseFloat(e.thigh)),
                                            localStorage.setItem("saia-pf-widget-data", JSON.stringify(t));
                                    }
                                },
                            },
                            {
                                key: "checkButtonVisibility",
                                value: function () {
                                    return (
                                        !!window.location.href.includes("demo.html") ||
                                        (this.defaults.brand && this.defaults.bodyPart
                                            ? Promise.resolve()
                                            : this.api.product.get(this.defaults.product.url).then(function (e) {
                                                  return e.length ? e[0].widget_is_visible : !("widget_is_visible" in e) || e.widget_is_visible;
                                              }))
                                    );
                                },
                            },
                            {
                                key: "showWidget",
                                value: function () {
                                    this.isMobile || this.modal.classList.toggle("active");
                                    var e = ""
                                        .concat(this.defaults.widgetUrl, "?key=")
                                        .concat(this.defaults.key, "#/?origin=")
                                        .concat(window.location.origin, "&returnUrl=")
                                        .concat(this.defaults.returnUrl, "&returnUrlDesktop=")
                                        .concat(this.defaults.returnUrlDesktop);
                                    this.defaults.product.url && (e += "&product=".concat(this.defaults.product.url)),
                                        this.defaults.product.description && (e += "&product_description=".concat(this.defaults.product.description)),
                                        this.defaults.product.imageUrl && (e += "&image=".concat(this.defaults.product.imageUrl)),
                                        this.defaults.brand && this.defaults.bodyPart && ((e += "&brand=".concat(this.defaults.brand)), (e += "&body_part=".concat(this.defaults.bodyPart))),
                                        this.defaults.fakeSize && (e += "&fakeSize=".concat(this.defaults.fakeSize)),
                                        this.defaults.productId && (e += "&productId=".concat(this.defaults.productId)),
                                        this.defaults.photosFromGallery && (e += "&photosFromGallery=".concat(this.defaults.photosFromGallery)),
                                        this.isMobile ? (window.location = e) : (this.modal.querySelector("iframe").src = e);
                                },
                            },
                            {
                                key: "getSize",
                                value: (function () {
                                    var e = a()(
                                        o.a.mark(function e() {
                                            var t, r, n;
                                            return o.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (!(t = JSON.parse(localStorage.getItem("saia-pf-widget-data")))) {
                                                                    e.next = 14;
                                                                    break;
                                                                }
                                                                if ((delete t.personId, !this.defaults.brand || !this.defaults.bodyPart)) {
                                                                    e.next = 9;
                                                                    break;
                                                                }
                                                                return (e.next = 6), this.api.sizechart.getSize(y({}, t, { brand: this.defaults.brand, body_part: this.defaults.bodyPart }));
                                                            case 6:
                                                                (n = e.sent), (e.next = 12);
                                                                break;
                                                            case 9:
                                                                return (e.next = 11), this.api.product.getRecommendations(y({}, t, { url: this.defaults.product.url }));
                                                            case 11:
                                                                n = e.sent;
                                                            case 12:
                                                                return n && (r = Object(g.r)(n)), e.abrupt("return", r);
                                                            case 14:
                                                                return e.abrupt("return", null);
                                                            case 15:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "displaySize",
                                value: function (e) {
                                    e && (this.buttonEl.innerHTML = "<span>YOUR PERFECT FIT: ".concat(e.normal, "</span>"));
                                },
                            },
                        ],
                        [
                            {
                                key: "createWidget",
                                value: (function () {
                                    var e = a()(
                                        o.a.mark(function e(t) {
                                            var r, n, i;
                                            return o.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (r = new w.a(t)), (e.next = 3), r.create();
                                                        case 3:
                                                            return (n = e.sent), (i = n.uuid), e.abrupt("return", Promise.resolve(i));
                                                        case 6:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]
                    ),
                    e
                );
            })();
        (window.SaiaMTMButton = k), (t.default = k);
    },
    ,
    function (e, t, r) {
        var n = r(29);
        e.exports = function (e) {
            if (Array.isArray(e)) return n(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        };
    },
    function (e, t, r) {
        var n = r(29);
        e.exports = function (e, t) {
            if (e) {
                if ("string" === typeof e) return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
            }
        };
    },
    function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = r(30),
            i = r(60),
            a = r(37);
        function s(e) {
            var t = new i(e),
                r = o(i.prototype.request, t);
            return n.extend(r, i.prototype, t), n.extend(r, t), r;
        }
        var c = s(r(33));
        (c.Axios = i),
            (c.create = function (e) {
                return s(a(c.defaults, e));
            }),
            (c.Cancel = r(38)),
            (c.CancelToken = r(73)),
            (c.isCancel = r(32)),
            (c.all = function (e) {
                return Promise.all(e);
            }),
            (c.spread = r(74)),
            (e.exports = c),
            (e.exports.default = c);
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = r(31),
            i = r(61),
            a = r(62),
            s = r(37);
        function c(e) {
            (this.defaults = e), (this.interceptors = { request: new i(), response: new i() });
        }
        (c.prototype.request = function (e) {
            "string" === typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
                (e = s(this.defaults, e)).method ? (e.method = e.method.toLowerCase()) : this.defaults.method ? (e.method = this.defaults.method.toLowerCase()) : (e.method = "get");
            var t = [a, void 0],
                r = Promise.resolve(e);
            for (
                this.interceptors.request.forEach(function (e) {
                    t.unshift(e.fulfilled, e.rejected);
                }),
                    this.interceptors.response.forEach(function (e) {
                        t.push(e.fulfilled, e.rejected);
                    });
                t.length;

            )
                r = r.then(t.shift(), t.shift());
            return r;
        }),
            (c.prototype.getUri = function (e) {
                return (e = s(this.defaults, e)), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
            }),
            n.forEach(["delete", "get", "head", "options"], function (e) {
                c.prototype[e] = function (t, r) {
                    return this.request(n.merge(r || {}, { method: e, url: t }));
                };
            }),
            n.forEach(["post", "put", "patch"], function (e) {
                c.prototype[e] = function (t, r, o) {
                    return this.request(n.merge(o || {}, { method: e, url: t, data: r }));
                };
            }),
            (e.exports = c);
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        function o() {
            this.handlers = [];
        }
        (o.prototype.use = function (e, t) {
            return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
        }),
            (o.prototype.eject = function (e) {
                this.handlers[e] && (this.handlers[e] = null);
            }),
            (o.prototype.forEach = function (e) {
                n.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                });
            }),
            (e.exports = o);
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = r(63),
            i = r(32),
            a = r(33);
        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
            return (
                s(e),
                (e.headers = e.headers || {}),
                (e.data = o(e.data, e.headers, e.transformRequest)),
                (e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
                n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                    delete e.headers[t];
                }),
                (e.adapter || a.adapter)(e).then(
                    function (t) {
                        return s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t;
                    },
                    function (t) {
                        return i(t) || (s(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                    }
                )
            );
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = function (e, t, r) {
            return (
                n.forEach(r, function (r) {
                    e = r(e, t);
                }),
                e
            );
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = function (e, t) {
            n.forEach(e, function (r, n) {
                n !== t && n.toUpperCase() === t.toUpperCase() && ((e[t] = r), delete e[n]);
            });
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(36);
        e.exports = function (e, t, r) {
            var o = r.config.validateStatus;
            !o || o(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t, r, n, o) {
            return (
                (e.config = t),
                r && (e.code = r),
                (e.request = n),
                (e.response = o),
                (e.isAxiosError = !0),
                (e.toJSON = function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                    };
                }),
                e
            );
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(68),
            o = r(69);
        e.exports = function (e, t) {
            return e && !n(t) ? o(e, t) : t;
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ];
        e.exports = function (e) {
            var t,
                r,
                i,
                a = {};
            return e
                ? (n.forEach(e.split("\n"), function (e) {
                      if (((i = e.indexOf(":")), (t = n.trim(e.substr(0, i)).toLowerCase()), (r = n.trim(e.substr(i + 1))), t)) {
                          if (a[t] && o.indexOf(t) >= 0) return;
                          a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r;
                      }
                  }),
                  a)
                : a;
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = n.isStandardBrowserEnv()
            ? (function () {
                  var e,
                      t = /(msie|trident)/i.test(navigator.userAgent),
                      r = document.createElement("a");
                  function o(e) {
                      var n = e;
                      return (
                          t && (r.setAttribute("href", n), (n = r.href)),
                          r.setAttribute("href", n),
                          {
                              href: r.href,
                              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                              host: r.host,
                              search: r.search ? r.search.replace(/^\?/, "") : "",
                              hash: r.hash ? r.hash.replace(/^#/, "") : "",
                              hostname: r.hostname,
                              port: r.port,
                              pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
                          }
                      );
                  }
                  return (
                      (e = o(window.location.href)),
                      function (t) {
                          var r = n.isString(t) ? o(t) : t;
                          return r.protocol === e.protocol && r.host === e.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              };
    },
    function (e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = n.isStandardBrowserEnv()
            ? {
                  write: function (e, t, r, o, i, a) {
                      var s = [];
                      s.push(e + "=" + encodeURIComponent(t)),
                          n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                          n.isString(o) && s.push("path=" + o),
                          n.isString(i) && s.push("domain=" + i),
                          !0 === a && s.push("secure"),
                          (document.cookie = s.join("; "));
                  },
                  read: function (e) {
                      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                      return t ? decodeURIComponent(t[3]) : null;
                  },
                  remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              };
    },
    function (e, t, r) {
        "use strict";
        var n = r(38);
        function o(e) {
            if ("function" !== typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e;
            });
            var r = this;
            e(function (e) {
                r.reason || ((r.reason = new n(e)), t(r.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (o.source = function () {
                var e;
                return {
                    token: new o(function (t) {
                        e = t;
                    }),
                    cancel: e,
                };
            }),
            (e.exports = o);
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
        var n = r(16),
            o = r(83);
        "string" === typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
        var i = { insert: "head", singleton: !1 },
            a = (n(o, i), o.locals ? o.locals : {});
        e.exports = a;
    },
    function (e, t, r) {
        (t = r(15)(!1)).push([
            e.i,
            ".visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.saia-widget-container{margin:20px 0}.saia-mtm-button{font-family:Roboto Light,sans-serif;font-size:14px;letter-spacing:3px;line-height:16px;padding:0 10px;border:1px solid #343239;min-height:50px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;text-transform:uppercase;-webkit-transition:all .25s ease-out;-o-transition:all .25s ease-out;transition:all .25s ease-out;font-weight:300;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#343239;color:#fff}@media (max-width:1200px){.saia-mtm-button{padding:5px 10px}}.saia-mtm-button:hover{background-color:#fff;color:#000}.saia-mtm-button:hover svg{fill:#000}.saia-mtm-button svg{fill:#fff;-webkit-transition:fill .25s ease-out;-o-transition:fill .25s ease-out;transition:fill .25s ease-out;display:block;margin-right:15px}@media (max-width:1200px){.saia-mtm-button svg{margin-right:10px;display:none}}.saia-mtm-drop{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);z-index:99999999;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none}.saia-mtm-drop.active{display:-webkit-box;display:-ms-flexbox;display:flex}.saia-mtm-drop iframe{width:100%;height:100%}.saia-mtm-drop__container{max-width:600px;width:100%;max-height:705px;height:100%;background:#fff}@media (max-width:768px){.saia-mtm-drop__container{max-width:100%;max-height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}}",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t) {
        e.exports = '<button class="saia-mtm-button {{classes}}"> <span>{{buttonTitle}}</span> </button> ';
    },
    function (e, t) {
        e.exports = '<div class=saia-mtm-drop> <div class=saia-mtm-drop__container> <iframe frameborder=0 allow="geolocation; camera; gyroscope; accelerometer"></iframe> </div> </div> ';
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(3),
            o = r.n(n),
            i = r(10),
            a = r.n(i),
            s = r(53);
        a()(
            o.a.mark(function e() {
                var t, r, n, i, a, c, u;
                return o.a.wrap(
                    function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.prev = 0),
                                        (t = document.querySelector(".saia-widget-container")),
                                        (r = document.getElementById("saia-mtm-integration")),
                                        (n = r.getAttribute("data-public-key")),
                                        (i = r.getAttribute("data-button-title")),
                                        (e.next = 7),
                                        s.default.createWidget(n)
                                    );
                                case 7:
                                    (a = e.sent),
                                        t || ((c = document.querySelector("form[action='/cart/add']")), ((u = document.createElement("div")).className = "saia-widget-container"), c.parentNode.insertBefore(u, c)),
                                        new s.default({ key: a, widgetUrl: "https://mtm-widget.3dlook.me", buttonTitle: i || "GET MEASURED" }).init(),
                                        (e.next = 16);
                                    break;
                                case 13:
                                    (e.prev = 13), (e.t0 = e.catch(0)), e.t0 && e.t0.response && e.t0.response.data ? console.error(e.t0.response.data.detail) : console.error(e.t0.message);
                                case 16:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[0, 13]]
                );
            })
        )();
    },
]);
