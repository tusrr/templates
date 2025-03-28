/*!
 * ScrollSmoother 3.11.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function r() {
        return "undefined" != typeof window
    }
    function s() {
        return I || r() && (I = window.gsap) && I.registerPlugin && I
    }
    var I, M, L, O, U, K, N, q, D, V, j, G, Y, J, t = (ScrollSmoother.register = function register(e) {
        return M || (I = e || s(),
        r() && window.document && (L = window,
        O = document,
        U = O.documentElement,
        K = O.body),
        I && (N = I.utils.toArray,
        q = I.utils.clamp,
        j = I.parseEase("expo"),
        J = I.core.context || function() {}
        ,
        D = I.core.globals().ScrollTrigger,
        I.core.globals("ScrollSmoother", ScrollSmoother),
        K && D && (G = D.core._getVelocityProp,
        Y = D.core._inputObserver,
        ScrollSmoother.refresh = D.refresh,
        M = 1))),
        M
    }
    ,
    function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t),
        r && _defineProperties(e, r),
        e
    }(ScrollSmoother, [{
        key: "progress",
        get: function get() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]),
    ScrollSmoother);
    function ScrollSmoother(e) {
        var o = this;
        M || ScrollSmoother.register(I) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        e = this.vars = e || {},
        V && V.kill(),
        J(V = this);
        function wa() {
            return B.update(-_)
        }
        function ya() {
            return n.style.overflow = "visible"
        }
        function Aa(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(),
            t._time = t._dur,
            t._tTime = t._tDur),
            g = !1,
            e.animation.progress(e.progress, !0)
        }
        function Ba(e, t) {
            (e !== _ && !u || t) && (P && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
            n._gsap.y = e + "px"),
            R = e - _,
            _ = e,
            D.isUpdating || D.update())
        }
        function Ca(e) {
            return arguments.length ? (e < 0 && (e = 0),
            z.y = -e,
            g = !0,
            u ? _ = -e : Ba(-e),
            k(e),
            this) : -_
        }
        function Ea(e) {
            m.scrollTop = 0,
            e.target.contains && e.target.contains(m) || T && !1 === T(o, e) || (D.isInViewport(e.target) || e.target === d || o.scrollTo(e.target, !1, "center center"),
            d = e.target)
        }
        function Fa(e) {
            var r, n, o, i;
            b.forEach(function(t) {
                r = t.pins,
                i = t.markers,
                e.forEach(function(e) {
                    t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (n = e.start,
                    o = (n - t.start - t.offset) / t.ratio - (n - t.start),
                    r.forEach(function(e) {
                        return o -= e.distance / t.ratio - e.distance
                    }),
                    e.setPositions(n + o, e.end + o),
                    e.markerStart && i.push(I.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
                    e.pin && 0 < e.end && (o = e.end - e.start,
                    r.push({
                        start: e.start,
                        end: e.end,
                        distance: o,
                        trig: e
                    }),
                    t.setPositions(t.start, t.end + o),
                    t.vars.onRefresh(t)))
                })
            })
        }
        function Ga() {
            h || Aa(i),
            z.y = -k(),
            Ba(z.y),
            H || i.animation.progress(I.utils.clamp(0, 1, f / -i.end)),
            h && (i.progress -= .001,
            i.update()),
            ya(),
            requestAnimationFrame(ya),
            b && (b.forEach(function(e) {
                var t = e.start
                  , r = e.auto ? Math.min(D.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio
                  , n = (r - e.end) / 2;
                t -= n,
                r -= n,
                e.offset = n || 1e-4,
                e.pins.length = 0,
                e.setPositions(Math.min(t, r), Math.max(t, r)),
                e.vars.onRefresh(e)
            }),
            Fa(D.sort())),
            B.reset()
        }
        function Ha() {
            return D.addEventListener("refresh", Ga)
        }
        function Ia() {
            return b && b.forEach(function(e) {
                return e.vars.onRefresh(e)
            })
        }
        function Ja() {
            return b && b.forEach(function(e) {
                return e.vars.onRefreshInit(e)
            }),
            Ia
        }
        function Ka(t, r, n, o) {
            return function() {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + A + t) || ("speed" === t ? 1 : 0)),
                o.setAttribute("data-" + A + t, e),
                "auto" === e ? e : parseFloat(e)
            }
        }
        function La(r, e, t, n) {
            function zb() {
                e = s(),
                t = f(),
                o = parseFloat(e) || 1,
                c = (a = "auto" === e) ? 0 : .5,
                l && l.kill(),
                l = t && I.to(r, {
                    ease: j,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }),
                i && (i.ratio = o,
                i.autoSpeed = a)
            }
            function Ab() {
                g.y = h + "px",
                g.renderTransform(1),
                zb()
            }
            function Eb(e) {
                if (a) {
                    Ab();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || U, i = e.getBoundingClientRect(), s = o.getBoundingClientRect(), a = s.top - i.top, l = s.bottom - i.bottom, c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t), u = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (L.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, -c * r / (2 * r - 1)) * (t || 1),
                        u += t ? -n * t : -n / 2,
                        c += n),
                        {
                            change: c,
                            offset: u
                        }
                    }(r, q(0, 1, -e.start / (e.end - e.start)));
                    v = t.change,
                    u = t.offset
                } else
                    v = (e.end - e.start) * (1 - o),
                    u = 0;
                d.forEach(function(e) {
                    return v -= e.distance * (1 - o)
                }),
                e.vars.onUpdate(e),
                l && l.progress(1)
            }
            var o, i, a, l, c, u, s = Ka("speed", e, n, r), f = Ka("lag", t, n, r), h = I.getProperty(r, "y"), g = r._gsap, d = [], p = [], v = 0;
            return zb(),
            (1 !== o || a || l) && (Eb(i = D.create({
                trigger: a ? r.parentNode : r,
                scroller: m,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: Ab,
                onRefresh: Eb,
                onKill: function onKill(e) {
                    var t = b.indexOf(e);
                    0 <= t && b.splice(t, 1),
                    Ab()
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = h + v * (e.progress - c), i = d.length, s = 0;
                    if (e.offset) {
                        if (i) {
                            for (r = -_,
                            n = e.end; i--; ) {
                                if ((t = d[i]).trig.isActive || r >= t.start && r <= t.end)
                                    return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001,
                                    t.trig.update(0, 0, 1),
                                    l.resetTo("y", parseFloat(g.y), -R, !0),
                                    H && l.progress(1)));
                                r > t.end && (s += t.distance),
                                n -= t.distance
                            }
                            o = h + s + v * ((I.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                        }
                        o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0
                        }(o + u),
                        p.length && !a && p.forEach(function(e) {
                            return e(o - s)
                        }),
                        l ? (l.resetTo("y", o, -R, !0),
                        H && l.progress(1)) : (g.y = o + "px",
                        g.renderTransform(1))
                    }
                }
            })),
            I.core.getCache(i.trigger).stRevert = Ja,
            i.startY = h,
            i.pins = d,
            i.markers = p,
            i.ratio = o,
            i.autoSpeed = a,
            r.style.willChange = "transform"),
            i
        }
        var n, m, t, i, b, s, a, l, c, u, r, f, h, g, d, p = e.smoothTouch, v = e.onUpdate, w = e.onStop, S = e.smooth, T = e.onFocusIn, E = e.normalizeScroll, x = this, C = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver(function() {
            return D.isRefreshing || i.refresh()
        }
        ), A = e.effectsPrefix || "", k = D.getScrollFunc(L), P = 1 === D.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === S || !1 === S ? 0 : parseFloat(S) || .8, _ = 0, R = 0, H = 1, B = G(0), z = {
            y: 0
        };
        function refreshHeight() {
            return t = n.clientHeight,
            n.style.overflow = "visible",
            K.style.height = t + "px",
            t - L.innerHeight
        }
        Ha(),
        D.addEventListener("killAll", Ha),
        I.delayedCall(.5, function() {
            return H = 0
        }),
        this.scrollTop = Ca,
        this.scrollTo = function(e, t, r) {
            var n = I.utils.clamp(0, D.maxScroll(L), isNaN(e) ? o.offset(e, r) : +e);
            t ? u ? I.to(o, {
                duration: P,
                scrollTop: n,
                overwrite: "auto",
                ease: j
            }) : k(n) : Ca(n)
        }
        ,
        this.offset = function(e, t) {
            var r, n = (e = N(e)[0]).style.cssText, o = D.create({
                trigger: e,
                start: t || "top top"
            });
            return b && Fa([o]),
            r = o.start,
            o.kill(!1),
            e.style.cssText = n,
            I.core.getCache(e).uncache = 1,
            r
        }
        ,
        this.content = function(e) {
            if (arguments.length) {
                var t = N(e || "#smooth-content")[0] || K.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "",
                C && C.observe(n),
                I.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                P || I.set(n, {
                    clearProps: "transform"
                })),
                this
            }
            return n
        }
        ,
        this.wrapper = function(e) {
            return arguments.length ? (m = N(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = O.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = O.createElement("div")).classList.add("ScrollSmoother-wrapper"),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
                t
            }(n),
            l = m.getAttribute("style") || "",
            refreshHeight(),
            I.set(m, P ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : m
        }
        ,
        this.effects = function(e, t) {
            if (b = b || [],
            !e)
                return b.slice(0);
            (e = N(e)).forEach(function(e) {
                for (var t = b.length; t--; )
                    b[t].trigger === e && b[t].kill()
            });
            t = t || {};
            var r, n, o = t.speed, i = t.lag, s = [];
            for (r = 0; r < e.length; r++)
                (n = La(e[r], o, i, r)) && s.push(n);
            return b.push.apply(b, s),
            s
        }
        ,
        this.sections = function(e, t) {
            if (s = s || [],
            !e)
                return s.slice(0);
            var r = N(e).map(function(t) {
                return D.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0",
                        t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0),
            r
        }
        ,
        this.content(e.content),
        this.wrapper(e.wrapper),
        this.render = function(e) {
            return Ba(e || 0 === e ? e : _)
        }
        ,
        this.getVelocity = function() {
            return B.getVelocity(-_)
        }
        ,
        D.scrollerProxy(m, {
            scrollTop: Ca,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && K.scrollHeight
            },
            fixedMarkers: !1 !== e.fixedMarkers && !!P,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: L.innerWidth,
                    height: L.innerHeight
                }
            }
        }),
        D.defaults({
            scroller: m
        });
        var F = D.getAll().filter(function(e) {
            return e.scroller === L || e.scroller === m
        });
        F.forEach(function(e) {
            return e.revert(!0)
        }),
        i = D.create({
            animation: I.fromTo(z, {
                y: 0
            }, {
                y: function y() {
                    return -refreshHeight()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    if (this._dur) {
                        var e = g;
                        e && (Aa(i),
                        z.y = _),
                        Ba(z.y, e),
                        wa(),
                        v && !u && v(x)
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(e) {
                if (b) {
                    var t = D.getAll().filter(function(e) {
                        return !!e.pin
                    });
                    b.forEach(function(r) {
                        r.vars.pinnedContainer || t.forEach(function(e) {
                            if (e.pin.contains(r.trigger)) {
                                var t = r.vars;
                                t.pinnedContainer = e.pin,
                                r.vars = null,
                                r.init(t, r.animation)
                            }
                        })
                    })
                }
                var r = e.getTween();
                h = r && r._end > r._dp._time,
                f = _,
                z.y = 0,
                P && (m.style.pointerEvents = "none",
                m.scrollTop = 0,
                setTimeout(function() {
                    return m.style.removeProperty("pointer-events")
                }, 50))
            },
            id: "ScrollSmoother",
            scroller: L,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: refreshHeight,
            onScrubComplete: function onScrubComplete() {
                B.reset(),
                w && w(o)
            },
            scrub: P || !0
        }),
        this.smooth = function(e) {
            return arguments.length && (P = e || 0),
            arguments.length ? i.scrubDuration(e) : i.getTween() ? i.getTween().duration() : 0
        }
        ,
        i.getTween() && (i.getTween().vars.ease = e.ease || j),
        this.scrollTrigger = i,
        e.effects && this.effects(!0 === e.effects ? "[data-" + A + "speed], [data-" + A + "lag]" : e.effects, {}),
        e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections),
        F.forEach(function(e) {
            e.vars.scroller = m,
            e.init(e.vars, e.animation)
        }),
        this.paused = function(e, t) {
            return arguments.length ? (!!u !== e && (e ? (i.getTween() && i.getTween().pause(),
            k(-_),
            B.reset(),
            (r = D.normalizeScroll()) && r.disable(),
            (u = D.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return Ca(-_)
                }
            })).nested = Y(U, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(),
            u.kill(),
            u = 0,
            r && r.enable(),
            i.progress = (-_ - i.start) / (i.end - i.start),
            Aa(i))),
            this) : !!u
        }
        ,
        this.kill = this.revert = function() {
            o.paused(!1),
            Aa(i),
            i.kill();
            for (var e = (b || []).concat(s || []), t = e.length; t--; )
                e[t].kill();
            D.scrollerProxy(m),
            D.removeEventListener("killAll", Ha),
            D.removeEventListener("refresh", Ga),
            m.style.cssText = l,
            n.style.cssText = c;
            var r = D.defaults({});
            r && r.scroller === m && D.defaults({
                scroller: L
            }),
            o.normalizer && D.normalizeScroll(!1),
            clearInterval(a),
            V = null,
            C && C.disconnect(),
            K.style.removeProperty("height"),
            L.removeEventListener("focusin", Ea)
        }
        ,
        this.refresh = function(e, t) {
            return i.refresh(e, t)
        }
        ,
        E && (this.normalizer = D.normalizeScroll(!0 === E ? {
            debounce: !0,
            content: !P && n
        } : E)),
        D.config(e),
        "overscrollBehavior"in L.getComputedStyle(K) && I.set([K, U], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in L.getComputedStyle(K) && I.set([K, U], {
            scrollBehavior: "auto"
        }),
        L.addEventListener("focusin", Ea),
        a = setInterval(wa, 250),
        "loading" === O.readyState || requestAnimationFrame(function() {
            return D.refresh()
        })
    }
    t.version = "3.11.2",
    t.create = function(e) {
        return V && e && V.content() === N(e.content)[0] ? V : new t(e)
    }
    ,
    t.get = function() {
        return V
    }
    ,
    s() && I.registerPlugin(t),
    e.ScrollSmoother = t,
    e.default = t;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});