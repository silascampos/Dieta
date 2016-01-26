(function() {
    var KasperskyLab = function(g) {
        function k(a) {
            return"undefined" === typeof a ? "undefined" : null === a ? "null" : Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
        }
        function e(a) {
            if (null === a || Infinity == a || -Infinity == a || a === h)
                return"null";
            var d = k(a);
            if ("Boolean" == d)
                return"" + a;
            if ("Number" == d)
                return window.isNaN(a) ? "null" : "" + a;
            if ("String" == d)
                return'"' + a + '"';
            if ("object" == typeof a) {
                e.check || (e.check = []);
                for (var c = 0, b = e.check.length; c < b; ++c)
                    if (e.check[c] === a)
                        throw new TypeError;
                e.check.push(a);
                c = "";
                if ("Array" ==
                        d) {
                    for (var d = 0, f = a.length; d < f; ++d)
                        c += e(a[d]) + ",";
                    e.check.pop();
                    return"[" + c.slice(0, -1) + "]"
                }
                for (f in a)
                    a.hasOwnProperty(f) && (c += '"' + f + '":' + e(a[f]) + ",");
                e.check.pop();
                return"{" + c.slice(0, -1) + "}"
            }
            return h
        }
        var h, l = {source: null, b: /^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/, a: function() {
                throw new SyntaxError("JSON syntax error");
            }, c: function(a) {
                this.source = a.input.slice(a[0].length);
                return this.b.exec(this.source)
            },
            f: function() {
                for (var a = this.b.exec(this.source), d = a && "]" != a[1], c = []; ; a = this.c(a)) {
                    a || this.a();
                    if (d)
                        c.push(this.d(a)), a = this.b.exec(this.source);
                    else if (a[1])
                        if ("]" == a[1])
                            break;
                        else
                            "," != a[1] && this.a();
                    else
                        this.a();
                    d = !d
                }
                return c
            }, g: function() {
                for (var a, d = !0, c = {}, b = this.b.exec(this.source); ; b = this.c(b))
                    if (b || this.a(), d) {
                        if (b[1] && "}" == b[1])
                            break;
                        else
                            (b[1] || b[2] || !b[3]) && this.a();
                        a = b[3];
                        (b = this.c(b)) && b[1] && ":" == b[1] || this.a();
                        d = !1
                    } else {
                        a || this.a();
                        c[a] = this.d(b);
                        b = this.c(this.b.exec(this.source));
                        if (b[1])
                            if ("}" ==
                                    b[1])
                                break;
                            else
                                "," != b[1] && this.a();
                        else
                            this.a();
                        a = h;
                        d = !0
                    }
                return c
            }, d: function(a) {
                if (a[1])
                    switch (a[1]) {
                        case "[":
                            return this.source = this.source.slice(a[0].length), this.f();
                        case "{":
                            return this.source = this.source.slice(a[0].length), this.g();
                        case "true":
                            return!0;
                        case "false":
                            return!1;
                        case "null":
                            return null;
                        default:
                            this.a()
                    }
                else if (a[2])
                    return+a[2];
                return a[3].replace(/\\(?:u(.{4})|(["\\\/\']))/g, function(a, c, b) {
                    return c ? String.fromCharCode(parseInt(c, 16)) : b
                })
            }, e: function(a) {
                if ("String" != k(a))
                    throw new TypeError;
                this.source = a;
                (a = this.b.exec(this.source)) || this.a();
                return this.d(a)
            }};
        g.JSONStringify = function(a) {
            return e(a)
        };
        g.JSONParse = function(a) {
            return l.e(a)
        };
        return g
    }.call(this, KasperskyLab || {});
    var KasperskyLab = function(c) {
        function s(a) {
            return"h3" === a.parentNode.tagName.toLowerCase() && "r" === a.parentNode.className.toLowerCase() ? !0 : !1
        }
        function p(a) {
            return"h2" !== a.parentNode.tagName.toLowerCase() || -1 === a.className.toLowerCase().indexOf("serp-item__title-link") && -1 === a.className.toLowerCase().indexOf("b-serp-item__title-link") ? !1 : !0
        }
        function t(a) {
            return-1 !== a.className.toLowerCase().indexOf("ac-1st") || -1 !== a.className.toLowerCase().indexOf("ac-21th") ? !0 : !1
        }
        function q(a) {
            return"h3" === a.parentNode.tagName.toLowerCase() &&
                    a.parentNode.parentNode && "hd" === a.parentNode.parentNode.className.toLowerCase() ? !0 : !1
        }
        function m(a) {
            return a.parentNode.parentNode && (-1 !== a.parentNode.parentNode.className.toLowerCase().indexOf("sb_tlst") || -1 !== a.parentNode.parentNode.className.toLowerCase().indexOf("b_algo")) || "h2" === a.parentNode.tagName.toLowerCase() && a.parentNode.parentNode && a.parentNode.parentNode.parentNode && -1 !== a.parentNode.parentNode.className.toLowerCase().indexOf("b_title") && -1 !== a.parentNode.parentNode.parentNode.className.toLowerCase().indexOf("b_algo") ?
                    !0 : !1
        }
        function u(a) {
            return"_blank" !== a.target.toLowerCase() || "res-head" !== a.parentNode.className.toLowerCase() && "result__title" !== a.parentNode.className.toLowerCase() ? !1 : !0
        }
        function r(a) {
            return"snippet_title" === a.parentNode.className.toLowerCase() ? !0 : !1
        }
        function v(a) {
            return"b-serp-item__link" === a.className.toLowerCase() ? !0 : !1
        }
        function w(a) {
            return"t" === a.parentNode.className.toLowerCase() ? !0 : !1
        }
        function x(a) {
            return"h3" === a.parentNode.tagName.toLowerCase() && a.parentNode.parentNode && a.parentNode.parentNode.parentNode &&
                    "web" === a.parentNode.parentNode.parentNode.className.toLowerCase() ? !0 : !1
        }
        function n(a) {
            return"web-result-title-link" === a.className.toLowerCase() ? !0 : !1
        }
        function l() {
            return!1
        }
        c.MaxRequestDelay = 2E3;
        c.Log = function() {
        };
        c.GetResourceSrc = function(a) {
            return(c.PREFIX || "http://gc.kis.scr.kaspersky-labs.com/") + (c.RES_SIGNATURE || "CE0A2501E9C1-154B-39B4-22A2-98DB47B1") + a
        };
        c.AddEventListener = function(a, b, c) {
            "addEventListener"in a ? a.addEventListener(b, function(a) {
                c(a || window.event)
            }, !1) : a.attachEvent("on" + b, function(b) {
                c.call(a, b || window.event)
            })
        };
        c.AddRemovableEventListener =
                function(a, b, c) {
                    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
                };
        c.RemoveEventListener = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
        };
        c.AddStyles = function(a) {
            if ("object" === typeof a && a.constructor === Array) {
                var b = document.createElement("style");
                b.type = "text/css";
                b.setAttribute("nonce", c.ContentSecurityPolicyNonceAttribute);
                for (var g = 0, e = a.length; g < e; ++g) {
                    var d = b, f = a[g];
                    d.styleSheet ? d.styleSheet.cssText += f + "\n" : d.appendChild(document.createTextNode(f))
                }
                document.head ?
                        document.head.appendChild(b) : document.getElementsByTagName("head")[0].appendChild(b)
            }
        };
        c.GetCurrentTime = function() {
            return(new Date).getTime()
        };
        c.GetPageScroll = function() {
            return{left: document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft, top: document.documentElement && document.documentElement.scrollTop || document.body.scrollTop}
        };
        c.GetPageHeight = function() {
            return document.documentElement.clientHeight || document.body.clientHeight
        };
        c.GetPageWidth = function() {
            return document.documentElement.clientWidth ||
                    document.body.clientWidth
        };
        try {
            var k = document.location.href, f = k.indexOf("://"), h;
            if (-1 !== f) {
                var d = k.substr(f + 3).toLowerCase();
                h = 0 === d.indexOf("www.google.") ? s : 0 === d.indexOf("yandex.") ? p : 0 === d.indexOf("search.yahoo.com") ? t : 0 === d.indexOf("search.yahoo.co.") ? q : 0 === d.indexOf("www.bing.com") ? m : 0 === d.indexOf("go.mail.ru") ? u : 0 === d.indexOf("nigma.ru") ? r : 0 === d.indexOf("www.nigma.ru") ? r : 0 === d.indexOf("nova.rambler.ru") ? v : 0 === d.indexOf("www.baidu.com") ? w : 0 === d.indexOf("www.baidu.jp") ? x : 0 === d.indexOf("www.ask.com") ?
                        n : l
            }
            c.IsLinkSearchResult = h
        } catch (b) {
            c.IsLinkSearchResult = l
        }
        return c
    }(KasperskyLab || {}), KasperskyLab = function(c) {
        c.Balloon = function(s, p, t, q) {
            function m() {
                h && clearTimeout(h);
                h = 0
            }
            function u() {
                m.call(k)
            }
            function r() {
                h || (m(), h = setTimeout(function() {
                    n()
                }, 200))
            }
            function v(b) {
                q && q(b || window.event) && n.call(k)
            }
            function w() {
                c.AddStyles([".kisb * { position: relative; display:block; overflow-x:hidden; width: auto; margin:0; padding:0; font-family: Verdana; line-height: 150%; text-indent:0; border:0; text-align:left; box-sizing:content-box; letter-spacing: normal;}",
                    ".kisb { z-index:2147483647; width: 280px; cursor:default; display:block;}", ".kisb a { text-decoration: underline; display:inline-block; }", ".kisb a:hover { text-decoration: none; }", ".kisb a, .kisb a:link, .kisb a:hover, .kisb a:visited { color: #008ccc;}"]);
                var b = document.createElement("div");
                b.className = "kisb";
                b.id = d;
                c.AddEventListener(b, "mouseout", r);
                c.AddEventListener(b, "mouseover", u);
                c.AddEventListener(b, "click", v);
                t(b);
                b.style.visibility = "hidden";
                document.body.appendChild(b);
                return b
            }
            function x(b) {
                b =
                        document.attachEvent && document.documentMode && 5 == document.documentMode ? {width: b.clientWidth || b.scrollWidth, height: b.clientHeight || b.scrollHeight} : b.getBoundingClientRect();
                return{width: b.width ? b.width : b.right - b.left, height: b.height ? b.height : b.bottom - b.top}
            }
            function n() {
                f && (f.style.visibility = "hidden")
            }
            function l(b, a, l) {
                (f = document.getElementById(d)) || (f = w());
                if ("visible" != f.style.visibility) {
                    var g = 0, e = 0, e = x(f);
                    if (1 == p)
                        g = b, e = a - (e.height ? e.height : 20);
                    else if (2 == p)
                        var g = c.GetPageWidth(), k = e.width / 2, g =
                            k > b ? 0 : k + b > g ? g - e.width : b - k, e = a + e.height > c.GetPageHeight() ? a - e.height : a;
                    else
                        g = b, e = a;
                    0 > e && (e = 0);
                    b = c.GetPageScroll();
                    e += b.top;
                    g += b.left;
                    f.style.position = "absolute";
                    f.style.left = Math.round(g).toString() + "px";
                    f.style.top = Math.round(e).toString() + "px";
                    f.style.visibility = "visible";
                    m();
                    h = setTimeout(function() {
                        n()
                    }, l)
                }
            }
            var k = this, f = null, h = null, d = "balloon_parent_div_" + s;
            this.ShowBalloon = function(b, a, c) {
                m();
                a ? h = setTimeout(function() {
                    var a = b();
                    a.isNeed ? l(a.x, a.y, c) : n()
                }, a) : (a = b(), l(a.x, a.y, c))
            }
        };
        return c
    }(KasperskyLab ||
            {});
    (function() {
        var kaspersyLabSessionInstance = null;
        (function(e) {
            function s() {
                return"&nocache=" + Math.floor(65536 * (1 + Math.random())).toString(16)
            }
            function x(g) {
                try {
                    var c = p.GetAsyncRequest();
                    c ? (c.open("GET", g), c.send()) : e.Log("Ajax is not supported. Cannot send to product request: " + g)
                } catch (a) {
                    e.Log("Sending error: " + (a.message || a) + " for: " + g)
                }
            }
            function u(g, c) {
                try {
                    e.Log(c), setTimeout(function() {
                        x(g + "/log?" + encodeURIComponent(c))
                    }, 0)
                } catch (a) {
                    e.Log("Sending log error: " + (a.message || a))
                }
            }
            function v(e) {
                return e ? "&plugins=" + encodeURIComponent(e) : ""
            }
            function C() {
                var g =
                        "undefined" !== typeof e.PLUGINS_LIST ? v(e.PLUGINS_LIST) : v(""), c = p.GetAsyncRequest(), a = t.length ? "&data=" + encodeURIComponent(e.JSONStringify({data: t})) : "";
                c.open("GET", y + l + "/init?url=" + encodeURIComponent(document.location.href) + g + a + s());
                c.onload = function() {
                    var a = c.responseText && e.JSONParse(c.responseText);
                    kaspersyLabSessionInstance = new D(a.ajaxId, a.sessionId, y);
                    for (var a = a.plugins, f = 0, g = a.length; f < g; ++f) {
                        var q = a[f], p = A[q.name];
                        p && p(KasperskyLab, kaspersyLabSessionInstance, q.settings, q.localization)
                    }
                };
                c.send(null)
            }
            var y = e.PREFIX || "http://gc.kis.scr.kaspersky-labs.com/", l = e.SIGNATURE || "1B74BD89-2A22-4B93-B451-1C9E1052A0EC";
            if (window[l])
                e.AddRunner = function() {
                };
            else {
                (function(e) {
                    for (var c = e.toLowerCase(), a = 0, n = document.scripts.length; a < n; ++a) {
                        var f = document.scripts[a];
                        if ("string" === typeof f.src && 76 < f.src.length && 0 < f.src.toLowerCase().indexOf(c) && /\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/main.js/.test(f.src)) {
                            window[e] = !0;
                            f.parentElement.removeChild(f);
                            break
                        }
                    }
                })(l);
                var p = function() {
                    var e = window.XMLHttpRequest && window.XMLHttpRequest.prototype.open,
                            c = window.XMLHttpRequest && window.XMLHttpRequest.prototype.send, a = window.XMLHttpRequest, n = window.XDomainRequest;
                    return{GetAsyncRequest: function() {
                            var f = n ? new n : new a;
                            n || (f.open = e, f.send = c);
                            f.onprogress = function() {
                            };
                            return f
                        }, GetSyncRequest: function() {
                            var f = new a;
                            f.open = e;
                            f.send = c;
                            f.onprogress = function() {
                            };
                            return f
                        }}
                }(), F = function(g) {
                    function c() {
                        try {
                            d && clearTimeout(d)
                        } catch (b) {
                        }
                        try {
                            m && (m.onload = function() {
                            }, m.onerror = function() {
                            }, m.abort())
                        } catch (e) {
                        }
                        m = d = null
                    }
                    function a() {
                        for (var b in h)
                            if (h.hasOwnProperty(b))
                                return!1;
                        return!0
                    }
                    function n() {
                        var b = e.MaxRequestDelay, d = e.GetCurrentTime(), a;
                        for (a in h)
                            try {
                                var f = h[a].onPing;
                                if (f) {
                                    var m = f(d);
                                    m < b && 0 < m && m < e.MaxRequestDelay && (b = m)
                                }
                            } catch (c) {
                                var g = h[a].onError;
                                g && g("UpdateDelay: " + (c.message || c))
                            }
                        k = b
                    }
                    function f(b) {
                        for (var e in h) {
                            var d = h[e].onError;
                            d && d(b)
                        }
                    }
                    function z(b) {
                        return b && (b = b.split(".", 2), 2 === b.length) ? b[0] : null
                    }
                    function q(b) {
                        return(b = h[b]) ? b.methods : null
                    }
                    function s(b, d, e) {
                        var a = q(b);
                        if (a && (a = a[d]))
                            try {
                                return a(e), u(g, d + " executed."), !0
                            } catch (f) {
                                u(g, "Call " + d + " in plugin " +
                                        b + " error: " + (f.message || f))
                            }
                        u(g, "Cannot call " + d + " for plugin " + b);
                        return!1
                    }
                    function l(b, d) {
                        try {
                            b.open("GET", d), b.onerror = function() {
                                w = !1;
                                f("AJAX ping network error!")
                            }, b.onload = function() {
                                try {
                                    w = !0;
                                    var d = b.responseText && e.JSONParse(b.responseText);
                                    if (!d || "undefined" === typeof d.parameters || "undefined" === typeof d.method)
                                        f("AJAX pong is not received. Product is deactivated");
                                    else if (d.method.length) {
                                        setTimeout(function() {
                                            m && l(m, r)
                                        }, 0);
                                        e.Log("Try to find js callback " + d.method);
                                        var a = z(d.method);
                                        a &&
                                                s(a, d.method, d.parameters)
                                    }
                                } catch (B) {
                                    f("onload error " + (B.message || B))
                                }
                            }, b.send(null)
                        } catch (a) {
                            f("Ajax send ping exception: " + (a.message || a))
                        }
                    }
                    var r = g + "/from", h = {}, k = e.MaxRequestDelay, d = null, m = null, w = !1;
                    this.RegisterMethod = function(b, d) {
                        var a = z(b);
                        if (a)
                            if (a = q(a)) {
                                if (a[b])
                                    throw"Already registered method " + b;
                                a[b] = d
                            } else
                                throw"Cannot registered " + b;
                    };
                    this.RegisterPlugin = function(b, e, c) {
                        if (h[b])
                            throw"Already started plugin " + b;
                        h[b] = {onError: c, onPing: e, methods: {}};
                        null === d && (n(), a() || (d = setTimeout(function E() {
                            try {
                                n(),
                                        a() || (m = m || p.GetAsyncRequest(), l(m, r), d = setTimeout(E, k))
                            } catch (b) {
                                f("Send ping request: " + (b.message || b))
                            }
                        }, k)))
                    };
                    this.UnregisterPlugin = function(b) {
                        delete h[b];
                        a() && c()
                    };
                    this.UnregisterAll = function() {
                        0 !== h.length && (c(), h = {})
                    };
                    this.IsEmpty = a;
                    this.IsProductConnected = function() {
                        return w
                    }
                }, D = function(g, c, a) {
                    function n(d, a, f, b) {
                        try {
                            var c = p.GetAsyncRequest();
                            c || b && b("Cannot create AJAX request!");
                            var g = !a || 0 === a.length;
                            g ? c.open("GET", h + "/to/" + d + "/?get" + s()) : c.open("POST", h + "/to/" + d);
                            var k = setTimeout(function() {
                                c.abort();
                                b && b("Cannot send AJAX request for calling " + d)
                            }, 12E4);
                            c.onerror = function() {
                                c.onerror = function() {
                                };
                                c.onload = function() {
                                };
                                b && b("AJAX request error for calling " + d)
                            };
                            c.onload = function() {
                                clearTimeout(k);
                                k = null;
                                c.onload = function() {
                                };
                                c.onerror = function() {
                                };
                                if (c.responseText) {
                                    if (f) {
                                        var d = e.JSONParse(c.responseText);
                                        f(d.result, d.parameters)
                                    }
                                    c = null
                                } else
                                    c = null, b && b("AJAX request with unsupported url type!")
                            };
                            c.send(g ? null : e.JSONStringify({result: 0, method: d, parameters: a}));
                            e.Log("Call native function " + d)
                        } catch (l) {
                            b &&
                                    b("AJAX request " + d + " exception: " + (l.message || l))
                        }
                    }
                    function f(d, a, c, b) {
                        try {
                            var f = p.GetSyncRequest();
                            if (!f)
                                return b && b("Cannot create AJAX request!"), !1;
                            var g = !a || 0 === a.length;
                            g ? f.open("GET", h + "/to/" + d + "/?get" + s(), !1) : f.open("POST", h + "/to/" + d, !1);
                            e.Log("SyncCall native function " + d);
                            f.send(g ? null : e.JSONStringify({result: 0, method: d, parameters: a}));
                            if (200 === f.status && f.responseText) {
                                if (c) {
                                    var k = e.JSONParse(f.responseText);
                                    c(k.result, k.parameters)
                                }
                                return!0
                            }
                        } catch (l) {
                            b && b("AJAX request " + d + " exception: " +
                                    (l.message || l))
                        }
                        return!1
                    }
                    function l() {
                        try {
                            if (k.UnregisterAll(), e.Log("session stopped"), k.IsProductConnected()) {
                                var d = h + "/shutdown?get" + s(), a;
                                a:{
                                    try {
                                        var c = p.GetSyncRequest();
                                        if (c) {
                                            c.open("GET", d, !1);
                                            c.send();
                                            a = 200 === c.status;
                                            break a
                                        }
                                    } catch (b) {
                                        e.Log("Sending error: " + (b.message || b) + " for: " + d)
                                    }
                                    a = !1
                                }
                                a || x(d)
                            }
                        } catch (f) {
                        }
                    }
                    function q(d) {
                        e.Log("DeactivatePlugin " + d);
                        k.UnregisterPlugin(d);
                        k.IsEmpty() && l()
                    }
                    function t(d, a, c) {
                        e.Log("ActivatePlugin " + d);
                        k.RegisterPlugin(d, a, function(a) {
                            c && c(a);
                            k.UnregisterPlugin(d);
                            k.IsEmpty() && l()
                        })
                    }
                    function v(a, c) {
                        e.Log("RegisterMethod " + a);
                        k.RegisterMethod(a, c)
                    }
                    var r = this, h = (a || "/") + g + "/" + c, k = new F(h);
                    this.Log = function(a) {
                        a && u(h, a)
                    };
                    this.InitializePlugin = function(a) {
                        a(function() {
                            t.apply(r, arguments)
                        }, function() {
                            v.apply(r, arguments)
                        }, function() {
                            n.apply(r, arguments)
                        }, function() {
                            q.apply(r, arguments)
                        }, function() {
                            return f.apply(r, arguments)
                        })
                    };
                    e.AddEventListener(window, "beforeunload", function() {
                        k.IsEmpty() || l()
                    })
                }, A = {}, t = [];
                e.AddRunner = function(e, c, a) {
                    A[e] = c;
                    a && t.push({plugin: e,
                        parameters: a})
                };
                e.ContentSecurityPolicyNonceAttribute = l;
                setTimeout(function() {
                    C()
                }, 0)
            }
        })(KasperskyLab);
        (function(ns)
        {
            ns.waitForApiInjection = function(isApiInjected, eventName, callback)
            {
                if (isApiInjected())
                {
                    callback();
                    return;
                }
                var subscription = createSubscription(eventName, onApiInjected)
                function onApiInjected()
                {
                    if (isApiInjected())
                    {
                        subscription.unsubscribe();
                        callback();
                    }
                }
            }
            function createSubscription(eventName, callback)
            {
                var windowEventsSupported = document.createEvent || window.addEventListener;
                return new (windowEventsSupported ? ModernSubscription : IeLegacySubscription)(eventName, callback);
            }
            function ModernSubscription(eventName, callback)
            {
                ns.AddRemovableEventListener(window, eventName, callback);
                this.unsubscribe = function()
                {
                    ns.RemoveEventListener(window, eventName, callback);
                }
            }
            function IeLegacySubscription(eventName, callback)
            {
                ns.AddRemovableEventListener(document.documentElement, 'propertychange', onPropertyChange);
                this.unsubscribe = function()
                {
                    ns.RemoveEventListener(document.documentElement, 'propertychange', onPropertyChange);
                }
                function onPropertyChange(event)
                {
                    if (event.propertyName == eventName)
                        callback();
                }
            }
        })(KasperskyLab || {});
        var tabIdPropertyName = KasperskyLab.LIGHT_PLUGIN_API_KEY || 'klTabId_kis';
        var scriptPluginId = Math.floor((1 + Math.random()) * 0x10000).toString(16);
        function isApiInjected()
        {
            return !!window[tabIdPropertyName];
        }
        function makeTopLevelArgument()
        {
            return window == window.top ? 'true' : 'false';
        }
        function removeTabIdProperty()
        {
            try {
                delete window[tabIdPropertyName];
            } catch (e) {
                window[tabIdPropertyName] = undefined;
            }
        }
        var documentInitParameters = isApiInjected() ? [String(window[tabIdPropertyName]), makeTopLevelArgument(), scriptPluginId] : null;
        KasperskyLab.AddRunner("light_doc", function(ns, session)
        {
            session.InitializePlugin(function(activatePlugin, _, callFunction)
            {
                activatePlugin('light_doc');

                if (documentInitParameters)
                {
                    removeTabIdProperty();
                    return;
                }

                ns.waitForApiInjection(isApiInjected, tabIdPropertyName, function()
                {
                    var tabId = String(window[tabIdPropertyName]);
                    removeTabIdProperty();
                    callFunction("light_doc.registerDocument", [
                        tabId,
                        document.URL,
                        makeTopLevelArgument(),
                        scriptPluginId
                    ]);
                });
            });
        }, documentInitParameters);
        (function(ns)
        {
            ns.IsPositionEqual = function(prevPos, currentPos)
            {
                return prevPos && currentPos && prevPos.top === currentPos.top && prevPos.left === currentPos.left;
            };

            ns.GetAbsoluteElementPosition = function(element)
            {
                var box = element.getBoundingClientRect();
                var scroll = ns.GetPageScroll();
                return {
                    left: box.left + scroll.left,
                    top: box.top + scroll.top,
                    right: box.right + scroll.left,
                    bottom: box.bottom + scroll.top
                };
            };
        })(KasperskyLab || {});
        (function(ns)
        {
            ns.ProtectableElementDetector = function(protectMode)
            {
                var m_typesForbidden = ['hidden', 'submit', 'radio', 'checkbox', 'button', 'image', 'number', 'email'];
                var m_protectMode = protectMode;
                /**
                 * @return {boolean}
                 */
                this.Test = function(element)
                {
                    if (m_protectMode < 2 || m_protectMode > 3)
                        return false;

                    var elementType = element.getAttribute('type');
                    elementType = elementType && elementType.toLowerCase();
                    if (m_protectMode === 2)
                    {
                        if (elementType != 'password')
                            return false;
                    }
                    else if (Includes(m_typesForbidden, elementType))
                    {
                        return false;
                    }
                    if (GetComputedStyle(element, 'display') === 'none')
                        return false;
                    var maxLength = parseInt(element.getAttribute('maxlength'), 10);
                    return typeof maxLength === 'number' && maxLength <= 3 ? false : !element.readOnly;
                };
                /**
                 * @return {boolean}
                 */
                function Includes(list, text)
                {
                    var i = 0, count = list.length;
                    for (; i < count; ++i)
                        if (list[i] === text)
                            return true;
                    return false;
                }
                /**
                 * @return {string}
                 */
                function GetComputedStyle(element, property)
                {
                    var value;
                    if (element.currentStyle)
                    {
                        value = element.currentStyle[property];
                    }
                    else
                    {
                        var styles = window.getComputedStyle(element, '');
                        if (styles)
                            value = styles.getPropertyValue(property);
                    }
                    return typeof value !== 'string' ? '' : value.toLowerCase();
                }
            }
        })(KasperskyLab || {});
        (function(ns)
        {
            ns.SecureInputTooltip = function(locales)
            {
                var m_tooltip,
                        // position helpers
                        m_curPosition,
                        m_top,
                        m_bottom,
                        m_pointer,
                        m_needRestoreFocus,
                        that = this;
                function CreateDivWithStyle(cssText)
                {
                    var div = document.createElement('div');
                    div.style.cssText = cssText;
                    return div;
                }

                function CreateTooltip()
                {
                    var balloonDiv = CreateDivWithStyle("position:absolute;display:block;width:auto;height:auto;padding:0;margin:0;text-align:left;border:none;border-radius:0;background:#transparent;z-index:2147483646;font-size:0px");
                    var iconDiv = CreateDivWithStyle("position:relative;display:block;height:auto;width:auto;padding:35px 10px 11px;margin:0;text-align:left;border:1px solid #B2B2B2;border-radius:5px;background:#fff url(" + KasperskyLab.GetResourceSrc('/vk/VkTooltipBanner.png') + ") 10px 9px no-repeat;z-index:2147483646;");
                    var close = CreateDivWithStyle("position:absolute;right:10px;top:6px;display:inline-block;height:16px;width:8px;padding:0;margin:0;text-align:left;background:url(" + KasperskyLab.GetResourceSrc('/vk/close_icon.png') + ") right center no-repeat;cursor:pointer;border:none;border-radius:0;white-space:nowrap;z-index:2147483646;");
                    var contentText = CreateDivWithStyle("position:static;display:block;width:auto;height:auto;padding:0;margin:0;font:11px/1 Arial,Helvetica,sans-serif;text-align:left;color:#000;border:none;border-radius:0;background:#transparent;white-space:nowrap;z-index:2147483646;");
                    m_top = CreateDivWithStyle("position:relative;display:block;width:32px;height:12px;padding:0;margin:0 0 -1px;text-align:left;border:none;border-radius:0;background:#transparent;z-index:2147483647;");
                    m_bottom = CreateDivWithStyle("position:relative;display:block;width:32px;height:12px;padding:0;margin:-1px 0 0;text-align:left;border:none;border-radius:0;background:#transparent;z-index:2147483647;");
                    m_pointer = CreateDivWithStyle("position:static;display:block;padding:0;margin:0;height:12px;width:100%;z-index:2147483647;");

                    balloonDiv.appendChild(m_top);
                    balloonDiv.appendChild(iconDiv);
                    balloonDiv.appendChild(m_bottom);

                    iconDiv.appendChild(close);
                    iconDiv.appendChild(contentText);

                    contentText.appendChild(document.createTextNode(locales["VkTooltipText"]));

                    close.onmouseover = function() {
                        m_needRestoreFocus = true;
                    };
                    close.onmouseout = function() {
                        m_needRestoreFocus = false;
                    };

                    m_tooltip = balloonDiv;
                }
                function PositionTooltipPointer(position)
                {
                    if (m_pointer.parentNode)
                        m_pointer.parentNode.removeChild(m_pointer);

                    var destinationDiv, pointerBackgroundImage;
                    if (position === "top")
                    {
                        pointerBackgroundImage = "url(" + ns.GetResourceSrc('/vk/pointer_top.png') + ") no-repeat right bottom";
                        destinationDiv = m_top;
                    }
                    else if (position === "bottom")
                    {
                        pointerBackgroundImage = "url(" + ns.GetResourceSrc('/vk/pointer_bottom.png') + ") no-repeat right top";
                        destinationDiv = m_bottom;
                    }
                    m_pointer.style.background = pointerBackgroundImage;
                    destinationDiv.appendChild(m_pointer);
                }
                function PositionTooltip(element)
                {
                    var inputPosition = ns.GetAbsoluteElementPosition(element);
                    if (!ns.IsPositionEqual(m_curPosition, inputPosition))
                    {
                        m_tooltip.style.left = inputPosition.left + "px";

                        var tooltipHeight = m_tooltip.offsetHeight;
                        var inputTopRelative = inputPosition.top - ns.GetPageScroll().top;
                        var clientHeightUnderInput = ns.GetPageHeight() - inputTopRelative - element.offsetHeight;
                        if ((clientHeightUnderInput > tooltipHeight - 1) ||
                                (inputPosition.top - tooltipHeight + 1 < 0))
                        {
                            m_tooltip.style.top = (inputPosition.top + element.offsetHeight - 1) + "px";
                            PositionTooltipPointer("top");
                        }
                        else
                        {
                            m_tooltip.style.top = (inputPosition.top - tooltipHeight + 1) + "px";
                            PositionTooltipPointer("bottom");
                        }
                        m_curPosition = inputPosition;
                    }
                }
                this.Show = function(element)
                {
                    document.body.appendChild(m_tooltip);
                    PositionTooltip(element);
                    var timer = setInterval(function() {
                        PositionTooltip(element);
                    }, 100);
                    this.Hide = function()
                    {
                        clearInterval(timer);
                        document.body.removeChild(m_tooltip);
                        if (m_needRestoreFocus)
                            setTimeout(function() {
                                element.focus();
                            }, 0);
                        m_tooltip = null;
                        this.Show = function() {
                        };
                        this.Hide = function() {
                        };
                    };
                    setTimeout(function()
                    {
                        that.Hide();
                    }, 3000);
                };
                this.Hide = function() {
                };
                CreateTooltip();
            };
        })(KasperskyLab || {});
        (function(ns)
        {
            ns.VirtualKeyboardInputIcon = function(clickCallback)
            {
                var m_curPosition,
                        m_iconDiv,
                        m_element;

                function CreateDivWithStyle(cssText)
                {
                    var div = document.createElement('div');
                    div.style.cssText = cssText;
                    return div;
                }
                function PositionIcon()
                {
                    var iconStyle = m_iconDiv.style,
                            inputPosition = ns.GetAbsoluteElementPosition(m_element);
                    if (!ns.IsPositionEqual(m_curPosition, inputPosition))
                    {
                        iconStyle.left = inputPosition.left + m_element.offsetWidth - 20 + 'px';
                        iconStyle.top = inputPosition.top + (m_element.offsetHeight - 16) / 2 + 'px';
                        m_curPosition = inputPosition;
                    }
                }

                function CreateIcon()
                {
                    m_iconDiv = CreateDivWithStyle('position:absolute;display:block;width:16px;height:16px;background:url(' + ns.GetResourceSrc('/vk/VkInputFieldIcon.png') + ') no-repeat center center;cursor:pointer;z-index:2147483647;font-size:0px');
                    ns.AddEventListener(m_iconDiv, 'mouseover', function()
                    {
                        m_iconDiv.style.filter = 'alpha(opacity=60)';	// IE8
                        m_iconDiv.style.opacity = 0.6;
                    });
                    ns.AddEventListener(m_iconDiv, 'mouseout', function()
                    {
                        m_iconDiv.style.filter = 'alpha(opacity=100)';	// IE8
                        m_iconDiv.style.opacity = 1;
                    });
                    ns.AddEventListener(m_iconDiv, 'click', clickCallback);
                }

                CreateIcon();

                // showing icon
                this.Show = function(element)
                {
                    this.Hide();
                    m_element = element;
                    document.body.appendChild(m_iconDiv);
                    PositionIcon();
                    var timer = setInterval(PositionIcon, 100);
                    this.Hide = function()
                    {
                        clearInterval(timer);
                        document.body.removeChild(m_iconDiv);
                        this.Hide = function() {
                        };
                    };
                };
                this.Hide = function() {
                };
            };
        })(KasperskyLab || {});
        KasperskyLab.AddRunner("vk", function(ns, session, settings, locales)
        {
            var VirtualKeyboard = function()
            {
                var m_callFunction, m_syncCallFunction;
                var m_virtualKeyboardIconShowMode = 0;
                var m_secureInputProtectMode = 0;
                var m_activeElement = null;
                var m_lastFocusedElement = null;

                // 0 - not protected
                // 1 - starting protect
                // 2 - protected
                // 3 - stopping protect
                var m_protectedState = 0;
                var m_enabledSecureInput = false;
                var m_protectChangeTimeout;

                var m_protectableVirtualKeyboardChecker = new ns.ProtectableElementDetector(settings.vkProtectMode);
                var m_protectableSecureInputChecker = null;
                var m_protectableVirtualKeyboardIconChecker = null;

                var m_attributeName = "vk_" + Math.floor((1 + Math.random()) * 0x10000).toString(16);

                function ShowVirtualKeyboard()
                {
                    if (m_lastFocusedElement)
                        m_lastFocusedElement.focus();
                    m_callFunction("vk.showKeyboard");
                }
                var m_tooltip = new ns.SecureInputTooltip(locales);
                var m_icon = new ns.VirtualKeyboardInputIcon(ShowVirtualKeyboard);
                var m_iconHideTimer;
                var m_postponeStart;
                var m_shutdown = false;
                session.InitializePlugin(function(activatePlugin, registerMethod, callFunction, deactivatePlugin, syncCallFunction) {
                    m_callFunction = callFunction;
                    m_syncCallFunction = syncCallFunction;
                    activatePlugin('vk', OnPing);
                    registerMethod('vk.settings', SetSettings);
                });
                /**
                 * @return {number}
                 */
                function OnPing()
                {
                    return ns.MaxRequestDelay;
                }

                function SetSettings(argumentList)
                {
                    var newVirtualKeyboardIconShowMode = parseInt(argumentList[0], 10);
                    var newSecureInputProtectMode = parseInt(argumentList[1], 10);
                    SetSettingsImpl(newVirtualKeyboardIconShowMode, newSecureInputProtectMode);
                }

                function SetSettingsImpl(newVirtualKeyboardIconShowMode, newSecureInputProtectMode)
                {
                    if (newSecureInputProtectMode != m_secureInputProtectMode)
                        m_protectableSecureInputChecker = new ns.ProtectableElementDetector(newSecureInputProtectMode);
                    if (newVirtualKeyboardIconShowMode != m_virtualKeyboardIconShowMode)
                        m_protectableVirtualKeyboardIconChecker = new ns.ProtectableElementDetector(newVirtualKeyboardIconShowMode);

                    if (newSecureInputProtectMode > m_secureInputProtectMode ||
                            newVirtualKeyboardIconShowMode > m_virtualKeyboardIconShowMode)
                    {
                        SetEventListenersToElements(document.getElementsByTagName('input'),
                                function(event) {
                                    OnElementFocus(event.target || event.srcElement);
                                },
                                function() {
                                    OnElementBlur();
                                });
                    }
                    // TODO: may be need send blur if current active element don't need protect

                    m_secureInputProtectMode = newSecureInputProtectMode;
                    m_virtualKeyboardIconShowMode = newVirtualKeyboardIconShowMode;
                }

                function NeedProtectElement(element)
                {
                    return m_protectableSecureInputChecker.Test(element) || m_protectableVirtualKeyboardChecker.Test(element);
                }

                function SetEventListenersToElement(element, focusHandler, blurHandler, currentFocusedElement)
                {
                    if (!NeedProtectElement(element))
                        return;

                    var secureInputValue = element.getAttribute(m_attributeName);
                    if (secureInputValue && secureInputValue === "subscribed")
                        return;
                    element.setAttribute(m_attributeName, "subscribed");
                    ns.AddEventListener(element, "focus", focusHandler);
                    ns.AddEventListener(element, "blur", blurHandler);
                    if (element === currentFocusedElement)
                        OnElementFocus(element);
                }

                function SetEventListenersToElements(elements, focusHandler, blurHandler)
                {
                    var currentFocusedElement = GetFocusedElement();
                    var i = 0, count = elements.length;
                    for (; i < count; ++i)
                        SetEventListenersToElement(elements[i], focusHandler, blurHandler, currentFocusedElement);
                }
                function GetFocusedElement()
                {
                    var element = document.activeElement;
                    if (document.hasFocus() &&
                            element &&
                            element.tagName.toLowerCase() === 'input')
                    {
                        return element;
                    }
                    return null;
                }

                function HandleStartProtectCallback(result, args, needSecureInputCall)
                {
                    if (m_protectedState === 3)	// 3 - stopping protect
                    {
                        if (result === 0)
                            StopProtect();
                        else
                            m_protectedState = 0;	// 0 - not protected
                        return;
                    }
                    if (result === 0)
                    {
                        if (!args || args.length < 1)
                        {
                            session.Log("ERR VK - unexpected arguments");
                            return;
                        }

                        m_enabledSecureInput = args[0] === "true";
                        m_protectedState = 2;	// 2 - protected

                        var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                        if (needSecureInput === needSecureInputCall)
                            ShowBalloons();
                        else
                            CheckProtectModeAndShowBalloons();
                        return;
                    }
                    else if (result === 1)
                    {
                        m_postponeStart = setTimeout(function() {
                            OnElementFocus(m_activeElement);
                        }, 100);
                    }
                    m_protectedState = 0;	// 0 - not protected
                }
                function StartProtect()
                {
                    var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                    m_callFunction("vk.startProtect", [needSecureInput.toString()], function(result, args) {
                        HandleStartProtectCallback(result, args, needSecureInput);
                    });
                    m_protectedState = 1;	// 1 - starting protect
                }

                function ChangeMode()
                {
                    var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                    m_callFunction("vk.changeMode", [needSecureInput.toString()], function(result, args) {
                        HandleStartProtectCallback(result, args, needSecureInput);
                    });
                    m_protectedState = 1;	// 1 - starting protect
                }
                function StopProtect()
                {
                    m_callFunction("vk.stopProtect", [], function(result)
                    {
                        if (m_protectedState === 1 && result === 0)	// 1 - starting protect
                        {
                            StartProtect();
                            return;
                        }
                        m_protectedState = 0;		// 0 - not protected
                        m_activeElement = null;
                    });
                    m_protectedState = 3;	// 3 - stopping protect
                }

                function ShowBalloons()
                {
                    if (m_enabledSecureInput)
                        m_tooltip.Show(m_activeElement);
                    if (m_protectableVirtualKeyboardIconChecker.Test(m_activeElement))
                        m_icon.Show(m_activeElement, ShowVirtualKeyboard);
                }

                function CheckProtectModeAndShowBalloons()
                {
                    var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                    if (needSecureInput != m_enabledSecureInput)
                        ChangeMode();
                    else
                        ShowBalloons();
                }
                function OnElementFocus(element)
                {
                    if (m_shutdown)
                        return;
                    if (m_iconHideTimer)
                    {
                        clearTimeout(m_iconHideTimer);
                        m_iconHideTimer = null;
                        m_icon.Hide();
                    }
                    if (!NeedProtectElement(element))
                    {
                        m_activeElement = null;
                        return;
                    }
                    m_activeElement = element;
                    m_lastFocusedElement = element;
                    clearTimeout(m_postponeStart);
                    clearTimeout(m_protectChangeTimeout);
                    m_protectChangeTimeout = setTimeout(function() {
                        ProcessFocus();
                    }, 0);
                }
                function OnElementBlur()
                {
                    if (m_shutdown)
                        return;
                    clearTimeout(m_postponeStart);
                    m_iconHideTimer = setTimeout(function() {
                        m_icon.Hide();
                    }, 500);
                    m_tooltip.Hide();
                    clearTimeout(m_protectChangeTimeout);
                    m_protectChangeTimeout = setTimeout(function() {
                        ProcessBlur();
                    }, 0);
                }
                function ProcessFocus()
                {
                    if (m_protectedState === 0)			// 0 - not protected
                        StartProtect();
                    else if (m_protectedState === 2) 	// 2 - protected
                        CheckProtectModeAndShowBalloons();
                    else if (m_protectedState === 3)	// 3 - stopping protect
                        m_protectedState = 1;			// 1 - starting protect
                }
                function ProcessBlur()
                {
                    if (m_protectedState === 2)	// 2 - protected
                        StopProtect();
                    else if (m_protectedState === 1)	// 1 - starting protect
                        m_protectedState = 3;	// 3 - stopping protect
                }
                SetSettingsImpl(settings.vkMode, settings.skMode);
                ns.AddEventListener(window, 'beforeunload', function()
                {
                    clearTimeout(m_protectChangeTimeout);
                    clearTimeout(m_postponeStart);
                    m_shutdown = true;
                });
            };
            var instance = null;
            if (document.readyState === "complete")
            {
                instance = new VirtualKeyboard();
            }
            else
            {
                ns.AddEventListener(window, "load", function() {
                    if (!instance)
                        instance = new VirtualKeyboard();
                });
            }
        });
        KasperskyLab.AddRunner("ob", function(c, b) {
            try {
                new function() {
                    function e(a) {
                        b.Log("ERR OB - " + (a.message || a))
                    }
                    function h(a) {
                        return 1E4 >= (a >= d ? a - d : 0) ? 500 : c.MaxRequestDelay
                    }
                    function k(a) {
                        1 > a.length ? b.Log("Wrong arguments for navigate" + a.length) : document.location.href = a[0]
                    }
                    var d = c.GetCurrentTime(), f = !0;
                    try {
                        f = window.self !== window.top
                    } catch (g) {
                        b.Log("Online banking cross domain frame! " + (g.message || g))
                    }
                    b.InitializePlugin(function(a, b, c, d) {
                        f ? c("ob.disconnect", []) : (a("ob", h, e), b("ob.navigate", k), b("ob.shutdown",
                                function() {
                                    d("ob")
                                }), c("ob.connect", [], function(a) {
                            0 != a && d("ob")
                        }, e))
                    })
                }
            } catch (e) {
                b.Log("Online banking exception " + (e.message || e))
            }
        });
        KasperskyLab.AddRunner("cb", function(f, c, n, b) {
            try {
                new function() {
                    function l(a) {
                        c.Log("ERR CB - " + (a.message || a))
                    }
                    function k(a) {
                        return 1E4 >= (a >= g ? a - g : 0) ? 500 : f.MaxRequestDelay
                    }
                    function q() {
                        c.Log("Start reload url " + document.readyState);
                        g = f.GetCurrentTime();
                        document.location.href = document.location.href
                    }
                    function r(a) {
                        g = f.GetCurrentTime();
                        if (2 !== a.length)
                            c.Log("ContentBlocker error: invalid parameter count " + a.length);
                        else if (h[a[0]])
                            h[a[0]](a[1]);
                        else
                            c.Log("ContentBlocker error: invalid challenge")
                    }
                    function s(a) {
                        g = f.GetCurrentTime();
                        1 === a.length && setTimeout(function() {
                            m("cb");
                            document.open();
                            document.write(a[0]);
                            document.close()
                        }, 0)
                    }
                    var g = f.GetCurrentTime(), h = [], p, m;
                    c.InitializePlugin(function(a, d, b, e) {
                        m = e;
                        p = b;
                        a("cb", k, l);
                        d("cb.reloadUrl", q);
                        d("cb.signReady", r);
                        d("cb.replaceDocumentWithHtml", s);
                        d("cb.shutdown", function() {
                            e("cb")
                        });
                        b("cb.connect", [], function(a) {
                            0 != a && e("cb")
                        }, function(a) {
                            l(a);
                            e("cb")
                        })
                    });
                    n.isProductInfoRequired && (window.KasperskyLab = function(a) {
                        var d = b.ProductName + " " + b.ProductVersion,
                                c = {productName: b.ProductName, productVersion: b.ProductVersion, productPPCSID: b.ProductPPCSID, deviceId: b.DeviceId, features: {isSafeMoneyInstalled: b.IsSafeMoneyInstalled, isSafeMoneyProtectionEnabled: n.isSafeMoneyProtectionEnabled}};
                        a._products = a._products || {};
                        a._products[d] = c;
                        a.getInstalledProducts = function() {
                            var e = [], b;
                            for (b in a._products)
                                e.push(a._products[b]);
                            return e
                        };
                        a.initProductInfoProvider = function(b) {
                            delete a.initProductInfoProvider;
                            a._products2 = a._products2 || {};
                            a._products2[d] = b;
                            a.getInstalledProducts2 =
                                    function(b, e, d) {
                                        for (var c in a._products2)
                                            a._products2[c](b, e, d)
                                    }
                        };
                        return a
                    }(window.KasperskyLab || {}), window.KasperskyLab.initProductInfoProvider(function(a, b, c) {
                        h[a] = c;
                        p("cb.signedProductInfo", [a, b], function(b) {
                            0 != b && (h[a] = null)
                        }, function(a) {
                            l(a);
                            m("cb")
                        })
                    }))
                }
            } catch (k) {
                c.Log("ContentBlocker exception " + (k.message || k))
            }
        });
        (function(h) {
            h.UrlAdvisorBalloon = function(f) {
                function p(e) {
                    return h.GetResourceSrc("/ua/" + e)
                }
                function y(e) {
                    if (1E10 <= e.low) {
                        var n = Math.floor(e.low / 1E10);
                        e.low %= 1E10;
                        e.high += n
                    }
                }
                function t(e) {
                    return E[e].name
                }
                function w(e) {
                    return f["CAT_" + e]
                }
                function u(e, n, c) {
                    if (n)
                        for (var f = 0, l = n.length; f < l; ++f) {
                            var k = document.createElement("span");
                            k.className = "kl_tag";
                            k.appendChild(document.createTextNode(c(n[f])));
                            e.appendChild(k)
                        }
                }
                function x(e) {
                    for (; 0 < e.childNodes.length; )
                        e.removeChild(e.childNodes[0])
                }
                function J(e) {
                    if (r) {
                        e =
                                e || window.event;
                        var f = r.getBoundingClientRect();
                        e.clientX > f.left && e.clientX < f.right && e.clientY > f.top && e.clientY < f.bottom || !r || (r.style.visibility = "hidden")
                    }
                }
                var E = [{name: "Unknown", bit: -1}, {name: f.PhishingName, bit: 62}, {name: f.MalwareName, bit: 63}], v = [{headerClass: "kl_header green", headerNode: f.UrlAdvisorBalloonHeaderGood, textNode: f.UrlAdvisorSetLocalContentOnlineGood, marker: "kl_marker allow"}, {headerClass: "kl_header grey", headerNode: f.UrlAdvisorBalloonHeaderSuspicious, textNode: f.UrlAdvisorSetLocalContentOnlineSuspicious,
                        marker: "kl_marker unknown"}, {headerClass: "kl_header red", headerNode: f.UrlAdvisorBalloonHeaderDanger, textNode: f.UrlAdvisorSetLocalContentOnlineDanger, marker: "kl_marker disallow"}], r = null;
                this.ShowBalloon = function(e, n, c, z, l) {
                    r = document.getElementById("balloon_parent_div");
                    if (!r) {
                        h.AddStyles([".kisb * { position: relative; display:block; overflow-x:hidden; width: auto; margin:0; padding:0; font-family: Verdana; line-height: 150%; text-indent:0; border:0; box-sizing:content-box; color:#000000; letter-spacing: normal; " +
                                    f.RtlStyle + "}", ".kisb { z-index:2147483647; width: 280px; cursor:default; display:block;}", ".kisb .kl_header { padding:27px 26px 10px 26px;  }", ".kisb .kl_header.red { background-image:url(" + p("header_red.png") + ");}", ".kisb .kl_header.grey { background-image:url(" + p("header_grey.png") + ");}", ".kisb .kl_header.green { background-image:url(" + p("header_green.png") + ");}", ".kisb .kl_content { background: url(" + p("content.png") + ") repeat-y top left; padding:10px 26px 10px 26px;}", ".kisb .kl_content .block { width: 228px!important; }",
                            ".kisb .kl_marker { margin-top: 5px; margin-bottom:10px; padding-top:2px; padding-left:25px; background-position-x: 0; background-position-y: 0; background-repeat: no-repeat; word-wrap: break-word;}", ".kisb .kl_marker.allow { background-image: url( " + p("allow.png") + ")}", ".kisb .kl_marker.disallow { background-image: url(" + p("disallow.png") + ")}", ".kisb .kl_marker.unknown { background-image: url(" + p("unknown.png") + ")}", ".kisb .kl_tag { display:inline-block; background: left top url(" + p("tag.png") + ") no-repeat; padding-left:12px; padding-right:5px; margin-right:5px; margin-bottom:5px; font-size: 7.5pt;}",
                            ".kisb .kl_external { margin-top: 15px; padding-top:2px; padding-left:20px; background-position-x: left; background-position-y: top; background-repeat: no-repeat;}", ".kisb .kl_external { background-image: url(" + p("external.png") + ")}", ".kisb .kl_footer { background: url(" + p("footer.png") + ") no-repeat bottom left; padding:6px 26px 22px 26px;}", ".kisb .kl_content * { font-size:8pt; }", ".kisb a { text-decoration: underline; display:inline-block; }", ".kisb a:hover { text-decoration: none; }", ".kisb a, .kisb a:link, .kisb a:hover, .kisb a:visited { color: #008ccc;}",
                            ".kisb .kl_header { font-size:12pt; color: #ffffff;  }", ".kisb .kl_footer a { font-size:8pt; color: #4d4d4d; text-decoration:underline; }"]);
                        var k = document.createElement("div");
                        k.className = "kisb";
                        k.id = "balloon_parent_div";
                        k.onmouseout = J;
                        var m = document.createElement("div");
                        m.id = "balloon_header";
                        k.appendChild(m);
                        m = document.createElement("div");
                        m.className = "kl_content";
                        var d = document.createElement("div");
                        d.className = "block";
                        m.appendChild(d);
                        var b = document.createElement("div");
                        b.className = "block";
                        b.id =
                                "balloon_content";
                        d.appendChild(b);
                        b = document.createElement("div");
                        b.className = "kl_marker allow";
                        b.id = "balloon_marker";
                        d.appendChild(b);
                        b = document.createElement("div");
                        b.id = "balloon_tags";
                        d.appendChild(b);
                        b = document.createElement("a");
                        b.href = "#";
                        b.id = "balloon_external";
                        b.className = "kl_external";
                        b.target = "_blank";
                        b.appendChild(document.createTextNode(f.UrlAdvisorSetLocalContentGotoForInfo));
                        d.appendChild(b);
                        k.appendChild(m);
                        m = document.createElement("div");
                        m.className = "kl_footer";
                        m.id = "balloon_footer";
                        d = document.createElement("a");
                        d.id = "balloon_terms";
                        d.target = "_blank";
                        d.appendChild(document.createTextNode(f.UrlAdvisorSetLocalContentTermsOfUsage));
                        m.appendChild(d);
                        k.appendChild(m);
                        k.style.visibility = "hidden";
                        document.body.appendChild(k);
                        r = k
                    }
                    var d = document.getElementById("balloon_header"), b = document.getElementById("balloon_content"), s = document.getElementById("balloon_marker"), g = document.getElementById("balloon_tags"), k = document.getElementById("balloon_external"), m = document.getElementById("balloon_terms");
                    x(d);
                    x(b);
                    x(s);
                    x(g);
                    d.className = v[c.rating - 1].headerClass;
                    d.appendChild(document.createTextNode(v[c.rating - 1].headerNode));
                    b.appendChild(document.createElement("b")).appendChild(document.createTextNode(v[c.rating - 1].textNode));
                    s.className = v[c.rating - 1].marker;
                    s.appendChild(document.createTextNode(c.url));
                    if (c.categories && 0 != c.categories.length || c.threats && 0 != c.threats.length)
                        g.appendChild(document.createElement("br")), g.appendChild(document.createElement("br")), g.appendChild(document.createTextNode(f.UrlAdvisorDescribeCategories +
                                ": ")), d = g.appendChild(document.createElement("div")), u(d, c.categories, w), u(d, c.threats, t);
                    z = z + "&act-exturl=" + encodeURIComponent(c.url) + "&act-threat-cat=" + (c.rating - 1) + "&act-content-cat=";
                    var g = c.threats, q = c.categories;
                    c = {high: 0, low: 0};
                    d = [];
                    if (g)
                        for (b = 0, s = g.length; b < s; ++b)
                            d.push(E[g[b]].bit);
                    if (q)
                        for (b = 0, s = q.length; b < s; ++b)
                            d.push(q[b] - 1);
                    b = 0;
                    for (s = d.length; b < s; ++b)
                        g = d[b], 0 > g || 64 <= g ? g = {high: 0, low: 0} : (q = {high: 0, low: Math.pow(2, Math.min(50, g))}, y(q), 50 < g && (q.low *= Math.pow(2, g - 50), q.high *= Math.pow(2, g -
                                50), y(q)), g = q), c.high += g.high, c.low += g.low, y(c);
                    d = "";
                    if (c.high)
                        for (d += c.high, b = c.low.toString().length; 10 > b; ++b)
                            d += "0";
                    d += c.low;
                    k.href = z + d + "&rpe=1";
                    m.href = l;
                    k = h.GetPageWidth();
                    l = r.getBoundingClientRect();
                    m = l.width ? l.width : l.right - l.left;
                    l = l.height ? l.height : l.bottom - l.top;
                    c = m / 2;
                    e = c > e ? 0 : c + e > k ? k - m : e - c;
                    k = h.GetPageHeight();
                    n = n + l > k ? n - l : n;
                    0 > n && (n = 0);
                    l = h.GetPageScroll();
                    n += l.top;
                    e += l.left;
                    r.style.position = "absolute";
                    r.style.top = Math.round(n).toString() + "px";
                    r.style.left = Math.round(e).toString() + "px";
                    r.style.visibility =
                            "visible"
                }
            }
        })(KasperskyLab || {});
        KasperskyLab.AddRunner("ua", function(h, f, p, y) {
            function t() {
                try {
                    u || (u = new w)
                } catch (h) {
                    f.Log("UrlAdvisor exception " + (h.message || h))
                }
            }
            var w = function() {
                function x(a) {
                    return 1E4 >= (a >= A ? a - A : 0) ? 500 : h.MaxRequestDelay
                }
                function t(a) {
                    f.Log("ERR UA - " + (a.message || a))
                }
                function u(a) {
                    try {
                        return a.href
                    } catch (d) {
                    }
                    try {
                        return a.getAttribute("href")
                    } catch (b) {
                    }
                    return""
                }
                function v(a) {
                    a = a.nextSibling;
                    return null !== a && a.name == B
                }
                function r(a, d) {
                    var b = 0;
                    a.onmouseout = function() {
                        b && (window.clearTimeout(b), b = 0)
                    };
                    a.onmouseover =
                            function(a) {
                                b || (a = a || window.event, b = window.setTimeout(function(a, b) {
                                    return function() {
                                        s.ShowBalloon(a, b, d, F, G)
                                    }
                                }(a.clientX, a.clientY), 300))
                            }
                }
                function e(a) {
                    for (var b = 0; b < a.length; b++)
                        for (var d = h.JSONParse(a[b]), e = 0; e < document.links.length; e++) {
                            var c = document.links[e];
                            if (d.url === u(c) && (!w || h.IsLinkSearchResult(c))) {
                                if (!v(c)) {
                                    var f = document.createElement("img");
                                    f.name = B;
                                    f.width = 12;
                                    f.height = 12;
                                    c.parentNode.insertBefore(f, c.nextSibling)
                                }
                                if (c = c.nextSibling)
                                    1 === d.rating ? (c.src = h.GetResourceSrc("/ua/UrlAdvisorGoodImage.png"),
                                            c.kis_status = 16) : 2 === d.rating ? (c.src = h.GetResourceSrc("/ua/UrlAdvisorSuspiciousImage.png"), c.kis_status = 8) : 3 === d.rating && (c.src = h.GetResourceSrc("/ua/UrlAdvisorDangerImage.png"), c.kis_status = 4), r(c, d)
                            }
                        }
                }
                function n() {
                    for (var a = document.getElementsByName(B); 0 < a.length; )
                        a[0].parentNode.removeChild(a[0])
                }
                function c(a) {
                    n();
                    0 < a.length && (q = (g = "0" != a[0]) && "Enabled" == C);
                    q && (w = !!(1 < a.length && 1 == a[1]), 2 < a.length && (G = a[2]), 3 < a.length && (F = a[3]));
                    d()
                }
                function z(a) {
                    0 < a.length && (n(), C = a[0], q = g && "Enabled" == C, d())
                }
                function l(a) {
                    try {
                        return!a.isContentEditable && !!a.parentNode && !v(a) && (!w || h.IsLinkSearchResult(a)) && "balloon_external" !== a.id && "balloon_terms" !== a.id
                    } catch (b) {
                        return f.Log("check link exception: " + (b.message || b)), !1
                    }
                }
                function k(a) {
                    if (1 == a.nodeType && "a" == a.nodeName.toLowerCase() && v(a))
                        a.parentNode.removeChild(a.nextSibling);
                    else
                        for (var b = 0; b < a.childNodes.length; ++b)
                            k(a.childNodes[b])
                }
                function m(a) {
                    if (!D)
                        if (1 == a.nodeType && "a" == a.nodeName.toLowerCase())
                            setTimeout(d, 500), D = !0;
                        else
                            for (var b = 0; b < a.childNodes.length; ++b)
                                m(a.childNodes[b])
                }
                function d() {
                    if (q) {
                        D = !1;
                        var a = [];
                        try {
                            for (var b = 0; b < document.links.length; b++) {
                                var c = document.links[b];
                                if (l(c)) {
                                    c[H] = !0;
                                    var d = u(c);
                                    d ? a.push(d) : h.Log("access to href blocked by browser")
                                }
                            }
                        } catch (e) {
                            f.Log("find links exception: " + (e.message || e))
                        }
                        a.length ? (I("ua.categorize", a, null, t), A = h.GetCurrentTime()) : f.Log("UA not found links for categorization")
                    } else
                        f.Log("skip categorize links because UA disabled")
                }
                function b() {
                    d();
                    window.addEventListener("DOMNodeInserted", function(a) {
                        m(a.target)
                    });
                    window.addEventListener("DOMNodeRemoved",
                            function(a) {
                                k(a.target)
                            })
                }
                var s = new h.UrlAdvisorBalloon(y), g = p.enable, q = g && "Enabled" === p.state, w = p.mode, F = p.infoUrl, G = p.termsUrl, D = !1, A = 0, H = "kl_" + h.GetCurrentTime(), B = "kl_" + h.GetCurrentTime(), C = p.state, I;
                f.InitializePlugin(function(a, b, d) {
                    I = d;
                    a("ua", x, t);
                    b("ua.verdict", e);
                    b("ua.settings", c);
                    b("ua.state", z)
                });
                (function() {
                    if ("addEventListener"in window)
                        b();
                    else {
                        d();
                        var a = setInterval(function() {
                            var a;
                            a:{
                                for (a = 0; a < document.links.length; a++) {
                                    var b = document.links[a];
                                    if (!b[H] && l(b)) {
                                        a = !0;
                                        break a
                                    }
                                }
                                a = !1
                            }
                            a &&
                                    d()
                        }, 1E4);
                        h.AddEventListener(window, "unload", function() {
                            clearInterval(a)
                        })
                    }
                })()
            }, u = null;
            "loading" === document.readyState ? document.addEventListener ? document.addEventListener("DOMContentLoaded", t, !0) : document.all && (document.write('<script type="text/javascript" id="DeferLoadTagName" defer="defer" src="javascript:void(0)">\x3c/script>'), document.getElementById("DeferLoadTagName").onreadystatechange = function() {
                "complete" == this.readyState && t()
            }) : t()
        });

    })();

})();
