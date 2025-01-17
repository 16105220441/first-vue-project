(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver(s => {
        for (const r of s) if (r.type === "childList") for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
    }).observe(document, {childList: !0, subtree: !0});

    function n(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function o(s) {
        if (s.ep) return;
        s.ep = !0;
        const r = n(s);
        fetch(s.href, r)
    }
})();/**
 * @vue/shared v3.4.30
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **//*! #__NO_SIDE_EFFECTS__ */
function Al(e, t) {
    const n = new Set(e.split(","));
    return o => n.has(o)
}

const Ue = {}, uo = [], Et = () => {
    }, xd = () => !1,
    Ys = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Il = e => e.startsWith("onUpdate:"), Qe = Object.assign, Pl = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, Ed = Object.prototype.hasOwnProperty, Ae = (e, t) => Ed.call(e, t),
    ce = Array.isArray, fo = e => Xs(e) === "[object Map]",
    bc = e => Xs(e) === "[object Set]", pe = e => typeof e == "function",
    Ye = e => typeof e == "string", Sn = e => typeof e == "symbol",
    ze = e => e !== null && typeof e == "object",
    yc = e => (ze(e) || pe(e)) && pe(e.then) && pe(e.catch),
    wc = Object.prototype.toString, Xs = e => wc.call(e),
    Td = e => Xs(e).slice(8, -1), Cc = e => Xs(e) === "[object Object]",
    Rl = e => Ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Fo = Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Qs = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, kd = /-(\w)/g,
    Kt = Qs(e => e.replace(kd, (t, n) => n ? n.toUpperCase() : "")),
    Ad = /\B([A-Z])/g, zn = Qs(e => e.replace(Ad, "-$1").toLowerCase()),
    Zs = Qs(e => e.charAt(0).toUpperCase() + e.slice(1)),
    xr = Qs(e => e ? `on${Zs(e)}` : ""), yn = (e, t) => !Object.is(e, t),
    Er = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    }, Sc = (e, t, n, o = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: o,
            value: n
        })
    }, Id = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }, Pd = e => {
        const t = Ye(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Ci;
const xc = () => Ci || (Ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ol(e) {
    if (ce(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n], s = Ye(o) ? Bd(o) : Ol(o);
            if (s) for (const r in s) t[r] = s[r]
        }
        return t
    } else if (Ye(e) || ze(e)) return e
}

const Rd = /;(?![^(]*\))/g, Od = /:([^]+)/, $d = /\/\*[^]*?\*\//g;

function Bd(e) {
    const t = {};
    return e.replace($d, "").split(Rd).forEach(n => {
        if (n) {
            const o = n.split(Od);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }), t
}

function $l(e) {
    let t = "";
    if (Ye(e)) t = e; else if (ce(e)) for (let n = 0; n < e.length; n++) {
        const o = $l(e[n]);
        o && (t += o + " ")
    } else if (ze(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const Ld = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Dd = Al(Ld);

function Ec(e) {
    return !!e || e === ""
}

const Ie = e => Ye(e) ? e : e == null ? "" : ce(e) || ze(e) && (e.toString === wc || !pe(e.toString)) ? JSON.stringify(e, Tc, 2) : String(e),
    Tc = (e, t) => t && t.__v_isRef ? Tc(e, t.value) : fo(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s], r) => (n[Tr(o, r) + " =>"] = s, n), {})} : bc(t) ? {[`Set(${t.size})`]: [...t.values()].map(n => Tr(n))} : Sn(t) ? Tr(t) : ze(t) && !ce(t) && !Cc(t) ? String(t) : t,
    Tr = (e, t = "") => {
        var n;
        return Sn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    };
/**
 * @vue/reactivity v3.4.30
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let bt;

class kc {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = bt, !t && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(t) {
        if (this._active) {
            const n = bt;
            try {
                return bt = this, t()
            } finally {
                bt = n
            }
        }
    }

    on() {
        bt = this
    }

    off() {
        bt = this.parent
    }

    stop(t) {
        if (this._active) {
            let n, o;
            for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
            for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Ac(e) {
    return new kc(e)
}

function Nd(e, t = bt) {
    t && t.active && t.effects.push(e)
}

function Ic() {
    return bt
}

function Fd(e) {
    bt && bt.cleanups.push(e)
}

let Bn;

class Bl {
    constructor(t, n, o, s) {
        this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 5, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Nd(this, s)
    }

    get dirty() {
        if (this._dirtyLevel === 2) return !1;
        if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
            this._dirtyLevel = 1, xn();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed) {
                    if (n.computed.effect._dirtyLevel === 2) return tn(), !0;
                    if (Vd(n.computed), this._dirtyLevel >= 5) break
                }
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), tn()
        }
        return this._dirtyLevel >= 5
    }

    set dirty(t) {
        this._dirtyLevel = t ? 5 : 0
    }

    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = _n, n = Bn;
        try {
            return _n = !0, Bn = this, this._runnings++, Si(this), this.fn()
        } finally {
            xi(this), this._runnings--, Bn = n, _n = t
        }
    }

    stop() {
        this.active && (Si(this), xi(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Vd(e) {
    return e.value
}

function Si(e) {
    e._trackId++, e._depsLength = 0
}

function xi(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Pc(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function Pc(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}

let _n = !0, Xr = 0;
const Rc = [];

function xn() {
    Rc.push(_n), _n = !1
}

function tn() {
    const e = Rc.pop();
    _n = e === void 0 ? !0 : e
}

function Ll() {
    Xr++
}

function Dl() {
    for (Xr--; !Xr && Qr.length;) Qr.shift()()
}

function Oc(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const o = e.deps[e._depsLength];
        o !== t ? (o && Pc(o, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}

const Qr = [];

function $c(e, t, n) {
    Ll();
    for (const o of e.keys()) {
        let s;
        if (!e.computed && o.computed && o._runnings > 0 && (s ?? (s = e.get(o) === o._trackId))) {
            o._dirtyLevel = 2;
            continue
        }
        o._dirtyLevel < t && (s ?? (s = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o.computed && o._dirtyLevel === 2 && (o._shouldSchedule = !0), o._dirtyLevel = t), o._shouldSchedule && (s ?? (s = e.get(o) === o._trackId)) && (o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 3 && (o._shouldSchedule = !1, o.scheduler && Qr.push(o.scheduler)))
    }
    Dl()
}

const Bc = (e, t) => {
    const n = new Map;
    return n.cleanup = e, n.computed = t, n
}, Ms = new WeakMap, Ln = Symbol(""), Zr = Symbol("");

function pt(e, t, n) {
    if (_n && Bn) {
        let o = Ms.get(e);
        o || Ms.set(e, o = new Map);
        let s = o.get(n);
        s || o.set(n, s = Bc(() => o.delete(n))), Oc(Bn, s)
    }
}

function en(e, t, n, o, s, r) {
    const l = Ms.get(e);
    if (!l) return;
    let i = [];
    if (t === "clear") i = [...l.values()]; else if (n === "length" && ce(e)) {
        const a = Number(o);
        l.forEach((c, u) => {
            (u === "length" || !Sn(u) && u >= a) && i.push(c)
        })
    } else switch (n !== void 0 && i.push(l.get(n)), t) {
        case"add":
            ce(e) ? Rl(n) && i.push(l.get("length")) : (i.push(l.get(Ln)), fo(e) && i.push(l.get(Zr)));
            break;
        case"delete":
            ce(e) || (i.push(l.get(Ln)), fo(e) && i.push(l.get(Zr)));
            break;
        case"set":
            fo(e) && i.push(l.get(Ln));
            break
    }
    Ll();
    for (const a of i) a && $c(a, 5);
    Dl()
}

function Md(e, t) {
    const n = Ms.get(e);
    return n && n.get(t)
}

const jd = Al("__proto__,__v_isRef,__isVue"),
    Lc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Sn)),
    Ei = Ud();

function Ud() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...n) {
            const o = Pe(this);
            for (let r = 0, l = this.length; r < l; r++) pt(o, "get", r + "");
            const s = o[t](...n);
            return s === -1 || s === !1 ? o[t](...n.map(Pe)) : s
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...n) {
            xn(), Ll();
            const o = Pe(this)[t].apply(this, n);
            return Dl(), tn(), o
        }
    }), e
}

function Hd(e) {
    Sn(e) || (e = String(e));
    const t = Pe(this);
    return pt(t, "has", e), t.hasOwnProperty(e)
}

class Dc {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }

    get(t, n, o) {
        const s = this._isReadonly, r = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return r;
        if (n === "__v_raw") return o === (s ? r ? nf : Mc : r ? Vc : Fc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
        const l = ce(t);
        if (!s) {
            if (l && Ae(Ei, n)) return Reflect.get(Ei, n, o);
            if (n === "hasOwnProperty") return Hd
        }
        const i = Reflect.get(t, n, o);
        return (Sn(n) ? Lc.has(n) : jd(n)) || (s || pt(t, "get", n), r) ? i : Re(i) ? l && Rl(n) ? i : i.value : ze(i) ? s ? Uc(i) : Me(i) : i
    }
}

class Nc extends Dc {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, o, s) {
        let r = t[n];
        if (!this._isShallow) {
            const a = Wo(r);
            if (!js(o) && !Wo(o) && (r = Pe(r), o = Pe(o)), !ce(t) && Re(r) && !Re(o)) return a ? !1 : (r.value = o, !0)
        }
        const l = ce(t) && Rl(n) ? Number(n) < t.length : Ae(t, n),
            i = Reflect.set(t, n, o, s);
        return t === Pe(s) && (l ? yn(o, r) && en(t, "set", n, o) : en(t, "add", n, o)), i
    }

    deleteProperty(t, n) {
        const o = Ae(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && o && en(t, "delete", n, void 0), s
    }

    has(t, n) {
        const o = Reflect.has(t, n);
        return (!Sn(n) || !Lc.has(n)) && pt(t, "has", n), o
    }

    ownKeys(t) {
        return pt(t, "iterate", ce(t) ? "length" : Ln), Reflect.ownKeys(t)
    }
}

class zd extends Dc {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const qd = new Nc, Kd = new zd, Wd = new Nc(!0);
const Nl = e => e, er = e => Reflect.getPrototypeOf(e);

function ms(e, t, n = !1, o = !1) {
    e = e.__v_raw;
    const s = Pe(e), r = Pe(t);
    n || (yn(t, r) && pt(s, "get", t), pt(s, "get", r));
    const {has: l} = er(s), i = o ? Nl : n ? jl : Go;
    if (l.call(s, t)) return i(e.get(t));
    if (l.call(s, r)) return i(e.get(r));
    e !== s && e.get(t)
}

function gs(e, t = !1) {
    const n = this.__v_raw, o = Pe(n), s = Pe(e);
    return t || (yn(e, s) && pt(o, "has", e), pt(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function ps(e, t = !1) {
    return e = e.__v_raw, !t && pt(Pe(e), "iterate", Ln), Reflect.get(e, "size", e)
}

function Ti(e) {
    e = Pe(e);
    const t = Pe(this);
    return er(t).has.call(t, e) || (t.add(e), en(t, "add", e, e)), this
}

function ki(e, t) {
    t = Pe(t);
    const n = Pe(this), {has: o, get: s} = er(n);
    let r = o.call(n, e);
    r || (e = Pe(e), r = o.call(n, e));
    const l = s.call(n, e);
    return n.set(e, t), r ? yn(t, l) && en(n, "set", e, t) : en(n, "add", e, t), this
}

function Ai(e) {
    const t = Pe(this), {has: n, get: o} = er(t);
    let s = n.call(t, e);
    s || (e = Pe(e), s = n.call(t, e)), o && o.call(t, e);
    const r = t.delete(e);
    return s && en(t, "delete", e, void 0), r
}

function Ii() {
    const e = Pe(this), t = e.size !== 0, n = e.clear();
    return t && en(e, "clear", void 0, void 0), n
}

function vs(e, t) {
    return function (o, s) {
        const r = this, l = r.__v_raw, i = Pe(l), a = t ? Nl : e ? jl : Go;
        return !e && pt(i, "iterate", Ln), l.forEach((c, u) => o.call(s, a(c), a(u), r))
    }
}

function _s(e, t, n) {
    return function (...o) {
        const s = this.__v_raw, r = Pe(s), l = fo(r),
            i = e === "entries" || e === Symbol.iterator && l,
            a = e === "keys" && l, c = s[e](...o), u = n ? Nl : t ? jl : Go;
        return !t && pt(r, "iterate", a ? Zr : Ln), {
            next() {
                const {value: d, done: f} = c.next();
                return f ? {
                    value: d,
                    done: f
                } : {value: i ? [u(d[0]), u(d[1])] : u(d), done: f}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function sn(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Gd() {
    const e = {
        get(r) {
            return ms(this, r)
        }, get size() {
            return ps(this)
        }, has: gs, add: Ti, set: ki, delete: Ai, clear: Ii, forEach: vs(!1, !1)
    }, t = {
        get(r) {
            return ms(this, r, !1, !0)
        }, get size() {
            return ps(this)
        }, has: gs, add: Ti, set: ki, delete: Ai, clear: Ii, forEach: vs(!1, !0)
    }, n = {
        get(r) {
            return ms(this, r, !0)
        },
        get size() {
            return ps(this, !0)
        },
        has(r) {
            return gs.call(this, r, !0)
        },
        add: sn("add"),
        set: sn("set"),
        delete: sn("delete"),
        clear: sn("clear"),
        forEach: vs(!0, !1)
    }, o = {
        get(r) {
            return ms(this, r, !0, !0)
        },
        get size() {
            return ps(this, !0)
        },
        has(r) {
            return gs.call(this, r, !0)
        },
        add: sn("add"),
        set: sn("set"),
        delete: sn("delete"),
        clear: sn("clear"),
        forEach: vs(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = _s(r, !1, !1), n[r] = _s(r, !0, !1), t[r] = _s(r, !1, !0), o[r] = _s(r, !0, !0)
    }), [e, n, t, o]
}

const [Jd, Yd, Xd, Qd] = Gd();

function Fl(e, t) {
    const n = t ? e ? Qd : Xd : e ? Yd : Jd;
    return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(Ae(n, s) && s in o ? n : o, s, r)
}

const Zd = {get: Fl(!1, !1)}, ef = {get: Fl(!1, !0)}, tf = {get: Fl(!0, !1)};
const Fc = new WeakMap, Vc = new WeakMap, Mc = new WeakMap, nf = new WeakMap;

function of(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function sf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : of(Td(e))
}

function Me(e) {
    return Wo(e) ? e : Vl(e, !1, qd, Zd, Fc)
}

function jc(e) {
    return Vl(e, !1, Wd, ef, Vc)
}

function Uc(e) {
    return Vl(e, !0, Kd, tf, Mc)
}

function Vl(e, t, n, o, s) {
    if (!ze(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = s.get(e);
    if (r) return r;
    const l = sf(e);
    if (l === 0) return e;
    const i = new Proxy(e, l === 2 ? o : n);
    return s.set(e, i), i
}

function Dn(e) {
    return Wo(e) ? Dn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Wo(e) {
    return !!(e && e.__v_isReadonly)
}

function js(e) {
    return !!(e && e.__v_isShallow)
}

function Hc(e) {
    return e ? !!e.__v_raw : !1
}

function Pe(e) {
    const t = e && e.__v_raw;
    return t ? Pe(t) : e
}

function Ml(e) {
    return Object.isExtensible(e) && Sc(e, "__v_skip", !0), e
}

const Go = e => ze(e) ? Me(e) : e, jl = e => ze(e) ? Uc(e) : e;

class zc {
    constructor(t, n, o, s) {
        this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Bl(() => t(this._value), () => Os(this, this.effect._dirtyLevel === 3 ? 3 : 4)), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o
    }

    get value() {
        const t = Pe(this), n = t.effect._dirtyLevel;
        return (!t._cacheable || t.effect.dirty) && yn(t._value, t._value = t.effect.run()) && n !== 3 && Os(t, 5), qc(t), t.effect._dirtyLevel >= 2 && Os(t, 3), t._value
    }

    set value(t) {
        this._setter(t)
    }

    get _dirty() {
        return this.effect.dirty
    }

    set _dirty(t) {
        this.effect.dirty = t
    }
}

function rf(e, t, n = !1) {
    let o, s;
    const r = pe(e);
    return r ? (o = e, s = Et) : (o = e.get, s = e.set), new zc(o, s, r || !s, n)
}

function qc(e) {
    var t;
    _n && Bn && (e = Pe(e), Oc(Bn, (t = e.dep) != null ? t : e.dep = Bc(() => e.dep = void 0, e instanceof zc ? e : void 0)))
}

function Os(e, t = 5, n, o) {
    e = Pe(e);
    const s = e.dep;
    s && $c(s, t)
}

function Re(e) {
    return !!(e && e.__v_isRef === !0)
}

function L(e) {
    return Kc(e, !1)
}

function lf(e) {
    return Kc(e, !0)
}

function Kc(e, t) {
    return Re(e) ? e : new af(e, t)
}

class af {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Pe(t), this._value = n ? t : Go(t)
    }

    get value() {
        return qc(this), this._value
    }

    set value(t) {
        const n = this.__v_isShallow || js(t) || Wo(t);
        t = n ? t : Pe(t), yn(t, this._rawValue) && (this._rawValue, this._rawValue = t, this._value = n ? t : Go(t), Os(this, 5))
    }
}

function V(e) {
    return Re(e) ? e.value : e
}

const cf = {
    get: (e, t, n) => V(Reflect.get(e, t, n)), set: (e, t, n, o) => {
        const s = e[t];
        return Re(s) && !Re(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o)
    }
};

function Wc(e) {
    return Dn(e) ? e : new Proxy(e, cf)
}

function uf(e) {
    const t = ce(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = ff(e, n);
    return t
}

class df {
    constructor(t, n, o) {
        this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0
    }

    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }

    set value(t) {
        this._object[this._key] = t
    }

    get dep() {
        return Md(Pe(this._object), this._key)
    }
}

function ff(e, t, n) {
    const o = e[t];
    return Re(o) ? o : new df(e, t, n)
}

/**
 * @vue/runtime-core v3.4.30
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function bn(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (s) {
        tr(s, t, n)
    }
}

function Tt(e, t, n, o) {
    if (pe(e)) {
        const s = bn(e, t, n, o);
        return s && yc(s) && s.catch(r => {
            tr(r, t, n)
        }), s
    }
    if (ce(e)) {
        const s = [];
        for (let r = 0; r < e.length; r++) s.push(Tt(e[r], t, n, o));
        return s
    }
}

function tr(e, t, n, o = !0) {
    const s = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const l = t.proxy,
            i = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r;) {
            const c = r.ec;
            if (c) {
                for (let u = 0; u < c.length; u++) if (c[u](e, l, i) === !1) return
            }
            r = r.parent
        }
        const a = t.appContext.config.errorHandler;
        if (a) {
            xn(), bn(a, null, 10, [e, l, i]), tn();
            return
        }
    }
    hf(e, n, s, o)
}

function hf(e, t, n, o = !0) {
    console.error(e)
}

let Jo = !1, el = !1;
const ct = [];
let qt = 0;
const ho = [];
let fn = null, In = 0;
const Gc = Promise.resolve();
let Ul = null;

function Ge(e) {
    const t = Ul || Gc;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function mf(e) {
    let t = qt + 1, n = ct.length;
    for (; t < n;) {
        const o = t + n >>> 1, s = ct[o], r = Yo(s);
        r < e || r === e && s.pre ? t = o + 1 : n = o
    }
    return t
}

function Hl(e) {
    (!ct.length || !ct.includes(e, Jo && e.allowRecurse ? qt + 1 : qt)) && (e.id == null ? ct.push(e) : ct.splice(mf(e.id), 0, e), Jc())
}

function Jc() {
    !Jo && !el && (el = !0, Ul = Gc.then(Xc))
}

function gf(e) {
    const t = ct.indexOf(e);
    t > qt && ct.splice(t, 1)
}

function pf(e) {
    ce(e) ? ho.push(...e) : (!fn || !fn.includes(e, e.allowRecurse ? In + 1 : In)) && ho.push(e), Jc()
}

function Pi(e, t, n = Jo ? qt + 1 : 0) {
    for (; n < ct.length; n++) {
        const o = ct[n];
        if (o && o.pre) {
            if (e && o.id !== e.uid) continue;
            ct.splice(n, 1), n--, o()
        }
    }
}

function Yc(e) {
    if (ho.length) {
        const t = [...new Set(ho)].sort((n, o) => Yo(n) - Yo(o));
        if (ho.length = 0, fn) {
            fn.push(...t);
            return
        }
        for (fn = t, In = 0; In < fn.length; In++) {
            const n = fn[In];
            n.active !== !1 && n()
        }
        fn = null, In = 0
    }
}

const Yo = e => e.id == null ? 1 / 0 : e.id, vf = (e, t) => {
    const n = Yo(e) - Yo(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
};

function Xc(e) {
    el = !1, Jo = !0, ct.sort(vf);
    try {
        for (qt = 0; qt < ct.length; qt++) {
            const t = ct[qt];
            t && t.active !== !1 && bn(t, null, 14)
        }
    } finally {
        qt = 0, ct.length = 0, Yc(), Jo = !1, Ul = null, (ct.length || ho.length) && Xc()
    }
}

function _f(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || Ue;
    let s = n;
    const r = t.startsWith("update:"), l = r && t.slice(7);
    if (l && l in o) {
        const u = `${l === "modelValue" ? "model" : l}Modifiers`, {
            number: d,
            trim: f
        } = o[u] || Ue;
        f && (s = n.map(m => Ye(m) ? m.trim() : m)), d && (s = n.map(Id))
    }
    let i, a = o[i = xr(t)] || o[i = xr(Kt(t))];
    !a && r && (a = o[i = xr(zn(t))]), a && Tt(a, e, 6, s);
    const c = o[i + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[i]) return;
        e.emitted[i] = !0, Tt(c, e, 6, s)
    }
}

function Qc(e, t, n = !1) {
    const o = t.emitsCache, s = o.get(e);
    if (s !== void 0) return s;
    const r = e.emits;
    let l = {}, i = !1;
    if (!pe(e)) {
        const a = c => {
            const u = Qc(c, t, !0);
            u && (i = !0, Qe(l, u))
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !r && !i ? (ze(e) && o.set(e, null), null) : (ce(r) ? r.forEach(a => l[a] = null) : Qe(l, r), ze(e) && o.set(e, l), l)
}

function nr(e, t) {
    return !e || !Ys(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, zn(t)) || Ae(e, t))
}

let ft = null, or = null;

function Us(e) {
    const t = ft;
    return ft = e, or = e && e.type.__scopeId || null, t
}

function qn(e) {
    or = e
}

function Kn() {
    or = null
}

function D(e, t = ft, n) {
    if (!t || e._n) return e;
    const o = (...s) => {
        o._d && qi(-1);
        const r = Us(t);
        let l;
        try {
            l = e(...s)
        } finally {
            Us(r), o._d && qi(1)
        }
        return l
    };
    return o._n = !0, o._c = !0, o._d = !0, o
}

function kr(e) {
    const {
        type: t,
        vnode: n,
        proxy: o,
        withProxy: s,
        propsOptions: [r],
        slots: l,
        attrs: i,
        emit: a,
        render: c,
        renderCache: u,
        props: d,
        data: f,
        setupState: m,
        ctx: p,
        inheritAttrs: g
    } = e, _ = Us(e);
    let b, y;
    try {
        if (n.shapeFlag & 4) {
            const T = s || o, E = T;
            b = zt(c.call(E, T, u, d, m, f, p)), y = i
        } else {
            const T = t;
            b = zt(T.length > 1 ? T(d, {
                attrs: i,
                slots: l,
                emit: a
            }) : T(d, null)), y = t.props ? i : bf(i)
        }
    } catch (T) {
        jo.length = 0, tr(T, e, 1), b = h(yt)
    }
    let x = b;
    if (y && g !== !1) {
        const T = Object.keys(y), {shapeFlag: E} = x;
        T.length && E & 7 && (r && T.some(Il) && (y = yf(y, r)), x = wn(x, y, !1, !0))
    }
    return n.dirs && (x = wn(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (x.transition = n.transition), b = x, Us(_), b
}

const bf = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Ys(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, yf = (e, t) => {
    const n = {};
    for (const o in e) (!Il(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n
};

function wf(e, t, n) {
    const {props: o, children: s, component: r} = e, {
        props: l,
        children: i,
        patchFlag: a
    } = t, c = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return o ? Ri(o, l, c) : !!l;
        if (a & 8) {
            const u = t.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                const f = u[d];
                if (l[f] !== o[f] && !nr(c, f)) return !0
            }
        }
    } else return (s || i) && (!i || !i.$stable) ? !0 : o === l ? !1 : o ? l ? Ri(o, l, c) : !0 : !!l;
    return !1
}

function Ri(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < o.length; s++) {
        const r = o[s];
        if (t[r] !== e[r] && !nr(n, r)) return !0
    }
    return !1
}

function Cf({vnode: e, parent: t}, n) {
    for (; t;) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = n, t = t.parent; else break
    }
}

const Zc = "components", Sf = "directives";

function eu(e, t) {
    return tu(Zc, e, !0, t) || e
}

const xf = Symbol.for("v-ndc");

function Ef(e) {
    return tu(Sf, e)
}

function tu(e, t, n = !0, o = !1) {
    const s = ft || ot;
    if (s) {
        const r = s.type;
        if (e === Zc) {
            const i = v1(r, !1);
            if (i && (i === t || i === Kt(t) || i === Zs(Kt(t)))) return r
        }
        const l = Oi(s[e] || r[e], t) || Oi(s.appContext[e], t);
        return !l && o ? r : l
    }
}

function Oi(e, t) {
    return e && (e[t] || e[Kt(t)] || e[Zs(Kt(t))])
}

const Tf = e => e.__isSuspense;

function kf(e, t) {
    t && t.pendingBranch ? ce(e) ? t.effects.push(...e) : t.effects.push(e) : pf(e)
}

function sr(e, t, n = ot, o = !1) {
    if (n) {
        const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
            xn();
            const i = ss(n), a = Tt(t, n, e, l);
            return i(), tn(), a
        });
        return o ? s.unshift(r) : s.push(r), r
    }
}

const nn = e => (t, n = ot) => {
        (!ir || e === "sp") && sr(e, (...o) => t(...o), n)
    }, nu = nn("bm"), ht = nn("m"), ou = nn("bu"), su = nn("u"), os = nn("bum"),
    yo = nn("um"), Af = nn("sp"), If = nn("rtg"), Pf = nn("rtc");

function Rf(e, t = ot) {
    sr("ec", e, t)
}

function Nn(e, t) {
    if (ft === null) return e;
    const n = ar(ft), o = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [r, l, i, a = Ue] = t[s];
        r && (pe(r) && (r = {
            mounted: r,
            updated: r
        }), r.deep && vn(l), o.push({
            dir: r,
            instance: n,
            value: l,
            oldValue: void 0,
            arg: i,
            modifiers: a
        }))
    }
    return e
}

function En(e, t, n, o) {
    const s = e.dirs, r = t && t.dirs;
    for (let l = 0; l < s.length; l++) {
        const i = s[l];
        r && (i.oldValue = r[l].value);
        let a = i.dir[o];
        a && (xn(), Tt(a, n, 8, [e.el, i, e, t]), tn())
    }
}

function kt(e, t, n, o) {
    let s;
    const r = n;
    if (ce(e) || Ye(e)) {
        s = new Array(e.length);
        for (let l = 0, i = e.length; l < i; l++) s[l] = t(e[l], l, void 0, r)
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, r)
    } else if (ze(e)) if (e[Symbol.iterator]) s = Array.from(e, (l, i) => t(l, i, void 0, r)); else {
        const l = Object.keys(e);
        s = new Array(l.length);
        for (let i = 0, a = l.length; i < a; i++) {
            const c = l[i];
            s[i] = t(e[c], c, i, r)
        }
    } else s = [];
    return s
}/*! #__NO_SIDE_EFFECTS__ */
function re(e, t) {
    return pe(e) ? Qe({name: e.name}, t, {setup: e}) : e
}

const $s = e => !!e.type.__asyncLoader,
    tl = e => e ? Eu(e) ? ar(e) : tl(e.parent) : null,
    Vo = Qe(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => tl(e.parent),
        $root: e => tl(e.root),
        $emit: e => e.emit,
        $options: e => zl(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, Hl(e.update)
        }),
        $nextTick: e => e.n || (e.n = Ge.bind(e.proxy)),
        $watch: e => Qf.bind(e)
    }), Ar = (e, t) => e !== Ue && !e.__isScriptSetup && Ae(e, t), Of = {
        get({_: e}, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: o,
                data: s,
                props: r,
                accessCache: l,
                type: i,
                appContext: a
            } = e;
            let c;
            if (t[0] !== "$") {
                const m = l[t];
                if (m !== void 0) switch (m) {
                    case 1:
                        return o[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return r[t]
                } else {
                    if (Ar(o, t)) return l[t] = 1, o[t];
                    if (s !== Ue && Ae(s, t)) return l[t] = 2, s[t];
                    if ((c = e.propsOptions[0]) && Ae(c, t)) return l[t] = 3, r[t];
                    if (n !== Ue && Ae(n, t)) return l[t] = 4, n[t];
                    nl && (l[t] = 0)
                }
            }
            const u = Vo[t];
            let d, f;
            if (u) return t === "$attrs" && pt(e.attrs, "get", ""), u(e);
            if ((d = i.__cssModules) && (d = d[t])) return d;
            if (n !== Ue && Ae(n, t)) return l[t] = 4, n[t];
            if (f = a.config.globalProperties, Ae(f, t)) return f[t]
        },
        set({_: e}, t, n) {
            const {data: o, setupState: s, ctx: r} = e;
            return Ar(s, t) ? (s[t] = n, !0) : o !== Ue && Ae(o, t) ? (o[t] = n, !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0)
        },
        has({
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: o,
                    appContext: s,
                    propsOptions: r
                }
            }, l) {
            let i;
            return !!n[l] || e !== Ue && Ae(e, l) || Ar(t, l) || (i = r[0]) && Ae(i, l) || Ae(o, l) || Ae(Vo, l) || Ae(s.config.globalProperties, l)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function $i(e) {
    return ce(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let nl = !0;

function $f(e) {
    const t = zl(e), n = e.proxy, o = e.ctx;
    nl = !1, t.beforeCreate && Bi(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: r,
        methods: l,
        watch: i,
        provide: a,
        inject: c,
        created: u,
        beforeMount: d,
        mounted: f,
        beforeUpdate: m,
        updated: p,
        activated: g,
        deactivated: _,
        beforeDestroy: b,
        beforeUnmount: y,
        destroyed: x,
        unmounted: T,
        render: E,
        renderTracked: S,
        renderTriggered: P,
        errorCaptured: B,
        serverPrefetch: $,
        expose: F,
        inheritAttrs: I,
        components: A,
        directives: H,
        filters: Z
    } = t;
    if (c && Bf(c, o, null), l) for (const oe in l) {
        const fe = l[oe];
        pe(fe) && (o[oe] = fe.bind(n))
    }
    if (s) {
        const oe = s.call(n, n);
        ze(oe) && (e.data = Me(oe))
    }
    if (nl = !0, r) for (const oe in r) {
        const fe = r[oe],
            et = pe(fe) ? fe.bind(n, n) : pe(fe.get) ? fe.get.bind(n, n) : Et,
            lt = !pe(fe) && pe(fe.set) ? fe.set.bind(n) : Et,
            ee = J({get: et, set: lt});
        Object.defineProperty(o, oe, {
            enumerable: !0,
            configurable: !0,
            get: () => ee.value,
            set: _e => ee.value = _e
        })
    }
    if (i) for (const oe in i) ru(i[oe], o, n, oe);
    if (a) {
        const oe = pe(a) ? a.call(n) : a;
        Reflect.ownKeys(oe).forEach(fe => {
            Fn(fe, oe[fe])
        })
    }
    u && Bi(u, e, "c");

    function ne(oe, fe) {
        ce(fe) ? fe.forEach(et => oe(et.bind(n))) : fe && oe(fe.bind(n))
    }

    if (ne(nu, d), ne(ht, f), ne(ou, m), ne(su, p), ne(wo, g), ne(Co, _), ne(Rf, B), ne(Pf, S), ne(If, P), ne(os, y), ne(yo, T), ne(Af, $), ce(F)) if (F.length) {
        const oe = e.exposed || (e.exposed = {});
        F.forEach(fe => {
            Object.defineProperty(oe, fe, {
                get: () => n[fe],
                set: et => n[fe] = et
            })
        })
    } else e.exposed || (e.exposed = {});
    E && e.render === Et && (e.render = E), I != null && (e.inheritAttrs = I), A && (e.components = A), H && (e.directives = H)
}

function Bf(e, t, n = Et) {
    ce(e) && (e = ol(e));
    for (const o in e) {
        const s = e[o];
        let r;
        ze(s) ? "default" in s ? r = it(s.from || o, s.default, !0) : r = it(s.from || o) : r = it(s), Re(r) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: l => r.value = l
        }) : t[o] = r
    }
}

function Bi(e, t, n) {
    Tt(ce(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function ru(e, t, n, o) {
    const s = o.includes(".") ? pu(n, o) : () => n[o];
    if (Ye(e)) {
        const r = t[e];
        pe(r) && Ee(s, r)
    } else if (pe(e)) Ee(s, e.bind(n)); else if (ze(e)) if (ce(e)) e.forEach(r => ru(r, t, n, o)); else {
        const r = pe(e.handler) ? e.handler.bind(n) : t[e.handler];
        pe(r) && Ee(s, r, e)
    }
}

function zl(e) {
    const t = e.type, {mixins: n, extends: o} = t, {
        mixins: s,
        optionsCache: r,
        config: {optionMergeStrategies: l}
    } = e.appContext, i = r.get(t);
    let a;
    return i ? a = i : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(c => Hs(a, c, l, !0)), Hs(a, t, l)), ze(t) && r.set(t, a), a
}

function Hs(e, t, n, o = !1) {
    const {mixins: s, extends: r} = t;
    r && Hs(e, r, n, !0), s && s.forEach(l => Hs(e, l, n, !0));
    for (const l in t) if (!(o && l === "expose")) {
        const i = Lf[l] || n && n[l];
        e[l] = i ? i(e[l], t[l]) : t[l]
    }
    return e
}

const Lf = {
    data: Li,
    props: Di,
    emits: Di,
    methods: No,
    computed: No,
    beforeCreate: dt,
    created: dt,
    beforeMount: dt,
    mounted: dt,
    beforeUpdate: dt,
    updated: dt,
    beforeDestroy: dt,
    beforeUnmount: dt,
    destroyed: dt,
    unmounted: dt,
    activated: dt,
    deactivated: dt,
    errorCaptured: dt,
    serverPrefetch: dt,
    components: No,
    directives: No,
    watch: Nf,
    provide: Li,
    inject: Df
};

function Li(e, t) {
    return t ? e ? function () {
        return Qe(pe(e) ? e.call(this, this) : e, pe(t) ? t.call(this, this) : t)
    } : t : e
}

function Df(e, t) {
    return No(ol(e), ol(t))
}

function ol(e) {
    if (ce(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function dt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function No(e, t) {
    return e ? Qe(Object.create(null), e, t) : t
}

function Di(e, t) {
    return e ? ce(e) && ce(t) ? [...new Set([...e, ...t])] : Qe(Object.create(null), $i(e), $i(t ?? {})) : t
}

function Nf(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Qe(Object.create(null), e);
    for (const o in t) n[o] = dt(e[o], t[o]);
    return n
}

function lu() {
    return {
        app: null,
        config: {
            isNativeTag: xd,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let Ff = 0;

function Vf(e, t) {
    return function (o, s = null) {
        pe(o) || (o = Qe({}, o)), s != null && !ze(s) && (s = null);
        const r = lu(), l = new WeakSet;
        let i = !1;
        const a = r.app = {
            _uid: Ff++,
            _component: o,
            _props: s,
            _container: null,
            _context: r,
            _instance: null,
            version: b1,
            get config() {
                return r.config
            },
            set config(c) {
            },
            use(c, ...u) {
                return l.has(c) || (c && pe(c.install) ? (l.add(c), c.install(a, ...u)) : pe(c) && (l.add(c), c(a, ...u))), a
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c), a
            },
            component(c, u) {
                return u ? (r.components[c] = u, a) : r.components[c]
            },
            directive(c, u) {
                return u ? (r.directives[c] = u, a) : r.directives[c]
            },
            mount(c, u, d) {
                if (!i) {
                    const f = h(o, s);
                    return f.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(f, c) : e(f, c, d), i = !0, a._container = c, c.__vue_app__ = a, ar(f.component)
                }
            },
            unmount() {
                i && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(c, u) {
                return r.provides[c] = u, a
            },
            runWithContext(c) {
                const u = mo;
                mo = a;
                try {
                    return c()
                } finally {
                    mo = u
                }
            }
        };
        return a
    }
}

let mo = null;

function Fn(e, t) {
    if (ot) {
        let n = ot.provides;
        const o = ot.parent && ot.parent.provides;
        o === n && (n = ot.provides = Object.create(o)), n[e] = t
    }
}

function it(e, t, n = !1) {
    const o = ot || ft;
    if (o || mo) {
        const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : mo._context.provides;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && pe(t) ? t.call(o && o.proxy) : t
    }
}

function Mf() {
    return !!(ot || ft || mo)
}

const iu = {}, au = () => Object.create(iu),
    cu = e => Object.getPrototypeOf(e) === iu;

function jf(e, t, n, o = !1) {
    const s = {}, r = au();
    e.propsDefaults = Object.create(null), uu(e, t, s, r);
    for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
    n ? e.props = o ? s : jc(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r
}

function Uf(e, t, n, o) {
    const {props: s, attrs: r, vnode: {patchFlag: l}} = e,
        i = Pe(s), [a] = e.propsOptions;
    let c = !1;
    if ((o || l > 0) && !(l & 16)) {
        if (l & 8) {
            const u = e.vnode.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                let f = u[d];
                if (nr(e.emitsOptions, f)) continue;
                const m = t[f];
                if (a) if (Ae(r, f)) m !== r[f] && (r[f] = m, c = !0); else {
                    const p = Kt(f);
                    s[p] = sl(a, i, p, m, e, !1)
                } else m !== r[f] && (r[f] = m, c = !0)
            }
        }
    } else {
        uu(e, t, s, r) && (c = !0);
        let u;
        for (const d in i) (!t || !Ae(t, d) && ((u = zn(d)) === d || !Ae(t, u))) && (a ? n && (n[d] !== void 0 || n[u] !== void 0) && (s[d] = sl(a, i, d, void 0, e, !0)) : delete s[d]);
        if (r !== i) for (const d in r) (!t || !Ae(t, d)) && (delete r[d], c = !0)
    }
    c && en(e.attrs, "set", "")
}

function uu(e, t, n, o) {
    const [s, r] = e.propsOptions;
    let l = !1, i;
    if (t) for (let a in t) {
        if (Fo(a)) continue;
        const c = t[a];
        let u;
        s && Ae(s, u = Kt(a)) ? !r || !r.includes(u) ? n[u] = c : (i || (i = {}))[u] = c : nr(e.emitsOptions, a) || (!(a in o) || c !== o[a]) && (o[a] = c, l = !0)
    }
    if (r) {
        const a = Pe(n), c = i || Ue;
        for (let u = 0; u < r.length; u++) {
            const d = r[u];
            n[d] = sl(s, a, d, c[d], e, !Ae(c, d))
        }
    }
    return l
}

function sl(e, t, n, o, s, r) {
    const l = e[n];
    if (l != null) {
        const i = Ae(l, "default");
        if (i && o === void 0) {
            const a = l.default;
            if (l.type !== Function && !l.skipFactory && pe(a)) {
                const {propsDefaults: c} = s;
                if (n in c) o = c[n]; else {
                    const u = ss(s);
                    o = c[n] = a.call(null, t), u()
                }
            } else o = a
        }
        l[0] && (r && !i ? o = !1 : l[1] && (o === "" || o === zn(n)) && (o = !0))
    }
    return o
}

function du(e, t, n = !1) {
    const o = t.propsCache, s = o.get(e);
    if (s) return s;
    const r = e.props, l = {}, i = [];
    let a = !1;
    if (!pe(e)) {
        const u = d => {
            a = !0;
            const [f, m] = du(d, t, !0);
            Qe(l, f), m && i.push(...m)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!r && !a) return ze(e) && o.set(e, uo), uo;
    if (ce(r)) for (let u = 0; u < r.length; u++) {
        const d = Kt(r[u]);
        Ni(d) && (l[d] = Ue)
    } else if (r) for (const u in r) {
        const d = Kt(u);
        if (Ni(d)) {
            const f = r[u], m = l[d] = ce(f) || pe(f) ? {type: f} : Qe({}, f);
            if (m) {
                const p = Mi(Boolean, m.type), g = Mi(String, m.type);
                m[0] = p > -1, m[1] = g < 0 || p < g, (p > -1 || Ae(m, "default")) && i.push(d)
            }
        }
    }
    const c = [l, i];
    return ze(e) && o.set(e, c), c
}

function Ni(e) {
    return e[0] !== "$" && !Fo(e)
}

function Fi(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function Vi(e, t) {
    return Fi(e) === Fi(t)
}

function Mi(e, t) {
    return ce(t) ? t.findIndex(n => Vi(n, e)) : pe(t) && Vi(t, e) ? 0 : -1
}

const fu = e => e[0] === "_" || e === "$stable",
    ql = e => ce(e) ? e.map(zt) : [zt(e)], Hf = (e, t, n) => {
        if (t._n) return t;
        const o = D((...s) => ql(t(...s)), n);
        return o._c = !1, o
    }, hu = (e, t, n) => {
        const o = e._ctx;
        for (const s in e) {
            if (fu(s)) continue;
            const r = e[s];
            if (pe(r)) t[s] = Hf(s, r, o); else if (r != null) {
                const l = ql(r);
                t[s] = () => l
            }
        }
    }, mu = (e, t) => {
        const n = ql(t);
        e.slots.default = () => n
    }, zf = (e, t) => {
        const n = e.slots = au();
        if (e.vnode.shapeFlag & 32) {
            const o = t._;
            o ? (Qe(n, t), Sc(n, "_", o, !0)) : hu(t, n)
        } else t && mu(e, t)
    }, qf = (e, t, n) => {
        const {vnode: o, slots: s} = e;
        let r = !0, l = Ue;
        if (o.shapeFlag & 32) {
            const i = t._;
            i ? n && i === 1 ? r = !1 : (Qe(s, t), !n && i === 1 && delete s._) : (r = !t.$stable, hu(t, s)), l = t
        } else t && (mu(e, t), l = {default: 1});
        if (r) for (const i in s) !fu(i) && l[i] == null && delete s[i]
    };

function rl(e, t, n, o, s = !1) {
    if (ce(e)) {
        e.forEach((f, m) => rl(f, t && (ce(t) ? t[m] : t), n, o, s));
        return
    }
    if ($s(o) && !s) return;
    const r = o.shapeFlag & 4 ? ar(o.component) : o.el, l = s ? null : r, {
            i,
            r: a
        } = e, c = t && t.r, u = i.refs === Ue ? i.refs = {} : i.refs,
        d = i.setupState;
    if (c != null && c !== a && (Ye(c) ? (u[c] = null, Ae(d, c) && (d[c] = null)) : Re(c) && (c.value = null)), pe(a)) bn(a, i, 12, [l, u]); else {
        const f = Ye(a), m = Re(a);
        if (f || m) {
            const p = () => {
                if (e.f) {
                    const g = f ? Ae(d, a) ? d[a] : u[a] : a.value;
                    s ? ce(g) && Pl(g, r) : ce(g) ? g.includes(r) || g.push(r) : f ? (u[a] = [r], Ae(d, a) && (d[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value))
                } else f ? (u[a] = l, Ae(d, a) && (d[a] = l)) : m && (a.value = l, e.k && (u[e.k] = l))
            };
            l ? (p.id = -1, mt(p, n)) : p()
        }
    }
}

const mt = kf;

function Kf(e) {
    return Wf(e)
}

function Wf(e, t) {
    const n = xc();
    n.__VUE__ = !0;
    const {
            insert: o,
            remove: s,
            patchProp: r,
            createElement: l,
            createText: i,
            createComment: a,
            setText: c,
            setElementText: u,
            parentNode: d,
            nextSibling: f,
            setScopeId: m = Et,
            insertStaticContent: p
        } = e,
        g = (v, w, k, j = null, N = null, K = null, Y = void 0, q = null, G = !!w.dynamicChildren) => {
            if (v === w) return;
            v && !Pn(v, w) && (j = C(v), _e(v, N, K, !0), v = null), w.patchFlag === -2 && (G = !1, w.dynamicChildren = null);
            const {type: z, ref: X, shapeFlag: ie} = w;
            switch (z) {
                case lr:
                    _(v, w, k, j);
                    break;
                case yt:
                    b(v, w, k, j);
                    break;
                case Bs:
                    v == null && y(w, k, j, Y);
                    break;
                case Fe:
                    A(v, w, k, j, N, K, Y, q, G);
                    break;
                default:
                    ie & 1 ? E(v, w, k, j, N, K, Y, q, G) : ie & 6 ? H(v, w, k, j, N, K, Y, q, G) : (ie & 64 || ie & 128) && z.process(v, w, k, j, N, K, Y, q, G, W)
            }
            X != null && N && rl(X, v && v.ref, K, w || v, !w)
        }, _ = (v, w, k, j) => {
            if (v == null) o(w.el = i(w.children), k, j); else {
                const N = w.el = v.el;
                w.children !== v.children && c(N, w.children)
            }
        }, b = (v, w, k, j) => {
            v == null ? o(w.el = a(w.children || ""), k, j) : w.el = v.el
        }, y = (v, w, k, j) => {
            [v.el, v.anchor] = p(v.children, w, k, j, v.el, v.anchor)
        }, x = ({el: v, anchor: w}, k, j) => {
            let N;
            for (; v && v !== w;) N = f(v), o(v, k, j), v = N;
            o(w, k, j)
        }, T = ({el: v, anchor: w}) => {
            let k;
            for (; v && v !== w;) k = f(v), s(v), v = k;
            s(w)
        }, E = (v, w, k, j, N, K, Y, q, G) => {
            w.type === "svg" ? Y = "svg" : w.type === "math" && (Y = "mathml"), v == null ? S(w, k, j, N, K, Y, q, G) : $(v, w, N, K, Y, q, G)
        }, S = (v, w, k, j, N, K, Y, q) => {
            let G, z;
            const {props: X, shapeFlag: ie, transition: se, dirs: ge} = v;
            if (G = v.el = l(v.type, K, X && X.is, X), ie & 8 ? u(G, v.children) : ie & 16 && B(v.children, G, null, j, N, Ir(v, K), Y, q), ge && En(v, null, j, "created"), P(G, v, v.scopeId, Y, j), X) {
                for (const je in X) je !== "value" && !Fo(je) && r(G, je, null, X[je], K, v.children, j, N, $e);
                "value" in X && r(G, "value", null, X.value, K), (z = X.onVnodeBeforeMount) && Ht(z, j, v)
            }
            ge && En(v, null, j, "beforeMount");
            const Se = Gf(N, se);
            Se && se.beforeEnter(G), o(G, w, k), ((z = X && X.onVnodeMounted) || Se || ge) && mt(() => {
                z && Ht(z, j, v), Se && se.enter(G), ge && En(v, null, j, "mounted")
            }, N)
        }, P = (v, w, k, j, N) => {
            if (k && m(v, k), j) for (let K = 0; K < j.length; K++) m(v, j[K]);
            if (N) {
                let K = N.subTree;
                if (w === K) {
                    const Y = N.vnode;
                    P(v, Y, Y.scopeId, Y.slotScopeIds, N.parent)
                }
            }
        }, B = (v, w, k, j, N, K, Y, q, G = 0) => {
            for (let z = G; z < v.length; z++) {
                const X = v[z] = q ? mn(v[z]) : zt(v[z]);
                g(null, X, w, k, j, N, K, Y, q)
            }
        }, $ = (v, w, k, j, N, K, Y) => {
            const q = w.el = v.el;
            let {patchFlag: G, dynamicChildren: z, dirs: X} = w;
            G |= v.patchFlag & 16;
            const ie = v.props || Ue, se = w.props || Ue;
            let ge;
            if (k && Tn(k, !1), (ge = se.onVnodeBeforeUpdate) && Ht(ge, k, w, v), X && En(w, v, k, "beforeUpdate"), k && Tn(k, !0), z ? F(v.dynamicChildren, z, q, k, j, Ir(w, N), K) : Y || fe(v, w, q, null, k, j, Ir(w, N), K, !1), G > 0) {
                if (G & 16) I(q, w, ie, se, k, j, N); else if (G & 2 && ie.class !== se.class && r(q, "class", null, se.class, N), G & 4 && r(q, "style", ie.style, se.style, N), G & 8) {
                    const Se = w.dynamicProps;
                    for (let je = 0; je < Se.length; je++) {
                        const Be = Se[je], nt = ie[Be], Rt = se[Be];
                        (Rt !== nt || Be === "value") && r(q, Be, nt, Rt, N, v.children, k, j, $e)
                    }
                }
                G & 1 && v.children !== w.children && u(q, w.children)
            } else !Y && z == null && I(q, w, ie, se, k, j, N);
            ((ge = se.onVnodeUpdated) || X) && mt(() => {
                ge && Ht(ge, k, w, v), X && En(w, v, k, "updated")
            }, j)
        }, F = (v, w, k, j, N, K, Y) => {
            for (let q = 0; q < w.length; q++) {
                const G = v[q], z = w[q],
                    X = G.el && (G.type === Fe || !Pn(G, z) || G.shapeFlag & 70) ? d(G.el) : k;
                g(G, z, X, null, j, N, K, Y, !0)
            }
        }, I = (v, w, k, j, N, K, Y) => {
            if (k !== j) {
                if (k !== Ue) for (const q in k) !Fo(q) && !(q in j) && r(v, q, k[q], null, Y, w.children, N, K, $e);
                for (const q in j) {
                    if (Fo(q)) continue;
                    const G = j[q], z = k[q];
                    G !== z && q !== "value" && r(v, q, z, G, Y, w.children, N, K, $e)
                }
                "value" in j && r(v, "value", k.value, j.value, Y)
            }
        }, A = (v, w, k, j, N, K, Y, q, G) => {
            const z = w.el = v ? v.el : i(""), X = w.anchor = v ? v.anchor : i("");
            let {patchFlag: ie, dynamicChildren: se, slotScopeIds: ge} = w;
            ge && (q = q ? q.concat(ge) : ge), v == null ? (o(z, k, j), o(X, k, j), B(w.children || [], k, X, N, K, Y, q, G)) : ie > 0 && ie & 64 && se && v.dynamicChildren ? (F(v.dynamicChildren, se, k, N, K, Y, q), (w.key != null || N && w === N.subTree) && Kl(v, w, !0)) : fe(v, w, k, X, N, K, Y, q, G)
        }, H = (v, w, k, j, N, K, Y, q, G) => {
            w.slotScopeIds = q, v == null ? w.shapeFlag & 512 ? N.ctx.activate(w, k, j, Y, G) : Z(w, k, j, N, K, Y, G) : ae(v, w, G)
        }, Z = (v, w, k, j, N, K, Y) => {
            const q = v.component = f1(v, j, N);
            if (rr(v) && (q.ctx.renderer = W), h1(q), q.asyncDep) {
                if (N && N.registerDep(q, ne, Y), !v.el) {
                    const G = q.subTree = h(yt);
                    b(null, G, w, k)
                }
            } else ne(q, v, w, k, N, K, Y)
        }, ae = (v, w, k) => {
            const j = w.component = v.component;
            if (wf(v, w, k)) if (j.asyncDep && !j.asyncResolved) {
                oe(j, w, k);
                return
            } else j.next = w, gf(j.update), j.effect.dirty = !0, j.update(); else w.el = v.el, j.vnode = w
        }, ne = (v, w, k, j, N, K, Y) => {
            const q = () => {
                    if (v.isMounted) {
                        let {next: X, bu: ie, u: se, parent: ge, vnode: Se} = v;
                        {
                            const Zn = gu(v);
                            if (Zn) {
                                X && (X.el = Se.el, oe(v, X, Y)), Zn.asyncDep.then(() => {
                                    v.isUnmounted || q()
                                });
                                return
                            }
                        }
                        let je = X, Be;
                        Tn(v, !1), X ? (X.el = Se.el, oe(v, X, Y)) : X = Se, ie && Er(ie), (Be = X.props && X.props.onVnodeBeforeUpdate) && Ht(Be, ge, X, Se), Tn(v, !0);
                        const nt = kr(v), Rt = v.subTree;
                        v.subTree = nt, g(Rt, nt, d(Rt.el), C(Rt), v, N, K), X.el = nt.el, je === null && Cf(v, nt.el), se && mt(se, N), (Be = X.props && X.props.onVnodeUpdated) && mt(() => Ht(Be, ge, X, Se), N)
                    } else {
                        let X;
                        const {el: ie, props: se} = w, {bm: ge, m: Se, parent: je} = v,
                            Be = $s(w);
                        if (Tn(v, !1), ge && Er(ge), !Be && (X = se && se.onVnodeBeforeMount) && Ht(X, je, w), Tn(v, !0), ie && we) {
                            const nt = () => {
                                v.subTree = kr(v), we(ie, v.subTree, v, N, null)
                            };
                            Be ? w.type.__asyncLoader().then(() => !v.isUnmounted && nt()) : nt()
                        } else {
                            const nt = v.subTree = kr(v);
                            g(null, nt, k, j, v, N, K), w.el = nt.el
                        }
                        if (Se && mt(Se, N), !Be && (X = se && se.onVnodeMounted)) {
                            const nt = w;
                            mt(() => Ht(X, je, nt), N)
                        }
                        (w.shapeFlag & 256 || je && $s(je.vnode) && je.vnode.shapeFlag & 256) && v.a && mt(v.a, N), v.isMounted = !0, w = k = j = null
                    }
                }, G = v.effect = new Bl(q, Et, () => Hl(z), v.scope),
                z = v.update = () => {
                    G.dirty && G.run()
                };
            z.id = v.uid, Tn(v, !0), z()
        }, oe = (v, w, k) => {
            w.component = v;
            const j = v.vnode.props;
            v.vnode = w, v.next = null, Uf(v, w.props, j, k), qf(v, w.children, k), xn(), Pi(v), tn()
        }, fe = (v, w, k, j, N, K, Y, q, G = !1) => {
            const z = v && v.children, X = v ? v.shapeFlag : 0,
                ie = w.children, {patchFlag: se, shapeFlag: ge} = w;
            if (se > 0) {
                if (se & 128) {
                    lt(z, ie, k, j, N, K, Y, q, G);
                    return
                } else if (se & 256) {
                    et(z, ie, k, j, N, K, Y, q, G);
                    return
                }
            }
            ge & 8 ? (X & 16 && $e(z, N, K), ie !== z && u(k, ie)) : X & 16 ? ge & 16 ? lt(z, ie, k, j, N, K, Y, q, G) : $e(z, N, K, !0) : (X & 8 && u(k, ""), ge & 16 && B(ie, k, j, N, K, Y, q, G))
        }, et = (v, w, k, j, N, K, Y, q, G) => {
            v = v || uo, w = w || uo;
            const z = v.length, X = w.length, ie = Math.min(z, X);
            let se;
            for (se = 0; se < ie; se++) {
                const ge = w[se] = G ? mn(w[se]) : zt(w[se]);
                g(v[se], ge, k, null, N, K, Y, q, G)
            }
            z > X ? $e(v, N, K, !0, !1, ie) : B(w, k, j, N, K, Y, q, G, ie)
        }, lt = (v, w, k, j, N, K, Y, q, G) => {
            let z = 0;
            const X = w.length;
            let ie = v.length - 1, se = X - 1;
            for (; z <= ie && z <= se;) {
                const ge = v[z], Se = w[z] = G ? mn(w[z]) : zt(w[z]);
                if (Pn(ge, Se)) g(ge, Se, k, null, N, K, Y, q, G); else break;
                z++
            }
            for (; z <= ie && z <= se;) {
                const ge = v[ie], Se = w[se] = G ? mn(w[se]) : zt(w[se]);
                if (Pn(ge, Se)) g(ge, Se, k, null, N, K, Y, q, G); else break;
                ie--, se--
            }
            if (z > ie) {
                if (z <= se) {
                    const ge = se + 1, Se = ge < X ? w[ge].el : j;
                    for (; z <= se;) g(null, w[z] = G ? mn(w[z]) : zt(w[z]), k, Se, N, K, Y, q, G), z++
                }
            } else if (z > se) for (; z <= ie;) _e(v[z], N, K, !0), z++; else {
                const ge = z, Se = z, je = new Map;
                for (z = Se; z <= se; z++) {
                    const _t = w[z] = G ? mn(w[z]) : zt(w[z]);
                    _t.key != null && je.set(_t.key, z)
                }
                let Be, nt = 0;
                const Rt = se - Se + 1;
                let Zn = !1, bi = 0;
                const Io = new Array(Rt);
                for (z = 0; z < Rt; z++) Io[z] = 0;
                for (z = ge; z <= ie; z++) {
                    const _t = v[z];
                    if (nt >= Rt) {
                        _e(_t, N, K, !0);
                        continue
                    }
                    let Ut;
                    if (_t.key != null) Ut = je.get(_t.key); else for (Be = Se; Be <= se; Be++) if (Io[Be - Se] === 0 && Pn(_t, w[Be])) {
                        Ut = Be;
                        break
                    }
                    Ut === void 0 ? _e(_t, N, K, !0) : (Io[Ut - Se] = z + 1, Ut >= bi ? bi = Ut : Zn = !0, g(_t, w[Ut], k, null, N, K, Y, q, G), nt++)
                }
                const yi = Zn ? Jf(Io) : uo;
                for (Be = yi.length - 1, z = Rt - 1; z >= 0; z--) {
                    const _t = Se + z, Ut = w[_t],
                        wi = _t + 1 < X ? w[_t + 1].el : j;
                    Io[z] === 0 ? g(null, Ut, k, wi, N, K, Y, q, G) : Zn && (Be < 0 || z !== yi[Be] ? ee(Ut, k, wi, 2) : Be--)
                }
            }
        }, ee = (v, w, k, j, N = null) => {
            const {el: K, type: Y, transition: q, children: G, shapeFlag: z} = v;
            if (z & 6) {
                ee(v.component.subTree, w, k, j);
                return
            }
            if (z & 128) {
                v.suspense.move(w, k, j);
                return
            }
            if (z & 64) {
                Y.move(v, w, k, W);
                return
            }
            if (Y === Fe) {
                o(K, w, k);
                for (let ie = 0; ie < G.length; ie++) ee(G[ie], w, k, j);
                o(v.anchor, w, k);
                return
            }
            if (Y === Bs) {
                x(v, w, k);
                return
            }
            if (j !== 2 && z & 1 && q) if (j === 0) q.beforeEnter(K), o(K, w, k), mt(() => q.enter(K), N); else {
                const {leave: ie, delayLeave: se, afterLeave: ge} = q,
                    Se = () => o(K, w, k), je = () => {
                        ie(K, () => {
                            Se(), ge && ge()
                        })
                    };
                se ? se(K, Se, je) : je()
            } else o(K, w, k)
        }, _e = (v, w, k, j = !1, N = !1) => {
            const {
                type: K,
                props: Y,
                ref: q,
                children: G,
                dynamicChildren: z,
                shapeFlag: X,
                patchFlag: ie,
                dirs: se,
                memoIndex: ge
            } = v;
            if (ie === -2 && (N = !1), q != null && rl(q, null, k, v, !0), ge != null && (w.renderCache[ge] = void 0), X & 256) {
                w.ctx.deactivate(v);
                return
            }
            const Se = X & 1 && se, je = !$s(v);
            let Be;
            if (je && (Be = Y && Y.onVnodeBeforeUnmount) && Ht(Be, w, v), X & 6) be(v.component, k, j); else {
                if (X & 128) {
                    v.suspense.unmount(k, j);
                    return
                }
                Se && En(v, null, w, "beforeUnmount"), X & 64 ? v.type.remove(v, w, k, W, j) : z && (K !== Fe || ie > 0 && ie & 64) ? $e(z, w, k, !1, !0) : (K === Fe && ie & 384 || !N && X & 16) && $e(G, w, k), j && Te(v)
            }
            (je && (Be = Y && Y.onVnodeUnmounted) || Se) && mt(() => {
                Be && Ht(Be, w, v), Se && En(v, null, w, "unmounted")
            }, k)
        }, Te = v => {
            const {type: w, el: k, anchor: j, transition: N} = v;
            if (w === Fe) {
                Ke(k, j);
                return
            }
            if (w === Bs) {
                T(v);
                return
            }
            const K = () => {
                s(k), N && !N.persisted && N.afterLeave && N.afterLeave()
            };
            if (v.shapeFlag & 1 && N && !N.persisted) {
                const {leave: Y, delayLeave: q} = N, G = () => Y(k, K);
                q ? q(v.el, K, G) : G()
            } else K()
        }, Ke = (v, w) => {
            let k;
            for (; v !== w;) k = f(v), s(v), v = k;
            s(w)
        }, be = (v, w, k) => {
            const {bum: j, scope: N, update: K, subTree: Y, um: q, m: G, a: z} = v;
            ji(G), ji(z), j && Er(j), N.stop(), K && (K.active = !1, _e(Y, v, w, k)), q && mt(q, w), mt(() => {
                v.isUnmounted = !0
            }, w), w && w.pendingBranch && !w.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve())
        }, $e = (v, w, k, j = !1, N = !1, K = 0) => {
            for (let Y = K; Y < v.length; Y++) _e(v[Y], w, k, j, N)
        },
        C = v => v.shapeFlag & 6 ? C(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : f(v.anchor || v.el);
    let U = !1;
    const M = (v, w, k) => {
        v == null ? w._vnode && _e(w._vnode, null, null, !0) : g(w._vnode || null, v, w, null, null, null, k), U || (U = !0, Pi(), Yc(), U = !1), w._vnode = v
    }, W = {
        p: g,
        um: _e,
        m: ee,
        r: Te,
        mt: Z,
        mc: B,
        pc: fe,
        pbc: F,
        n: C,
        o: e
    };
    let ue, we;
    return {render: M, hydrate: ue, createApp: Vf(M, ue)}
}

function Ir({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Tn({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function Gf(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Kl(e, t, n = !1) {
    const o = e.children, s = t.children;
    if (ce(o) && ce(s)) for (let r = 0; r < o.length; r++) {
        const l = o[r];
        let i = s[r];
        i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = s[r] = mn(s[r]), i.el = l.el), !n && i.patchFlag !== -2 && Kl(l, i)), i.type === lr && (i.el = l.el)
    }
}

function Jf(e) {
    const t = e.slice(), n = [0];
    let o, s, r, l, i;
    const a = e.length;
    for (o = 0; o < a; o++) {
        const c = e[o];
        if (c !== 0) {
            if (s = n[n.length - 1], e[s] < c) {
                t[o] = s, n.push(o);
                continue
            }
            for (r = 0, l = n.length - 1; r < l;) i = r + l >> 1, e[n[i]] < c ? r = i + 1 : l = i;
            c < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o)
        }
    }
    for (r = n.length, l = n[r - 1]; r-- > 0;) n[r] = l, l = t[l];
    return n
}

function gu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : gu(t)
}

function ji(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].active = !1
}

const Yf = Symbol.for("v-scx"), Xf = () => it(Yf);

function pn(e, t) {
    return Wl(e, null, t)
}

const bs = {};

function Ee(e, t, n) {
    return Wl(e, t, n)
}

function Wl(e, t, {
    immediate: n,
    deep: o,
    flush: s,
    once: r,
    onTrack: l,
    onTrigger: i
} = Ue) {
    if (t && r) {
        const S = t;
        t = (...P) => {
            S(...P), E()
        }
    }
    const a = ot, c = S => o === !0 ? S : vn(S, o === !1 ? 1 : void 0);
    let u, d = !1, f = !1;
    if (Re(e) ? (u = () => e.value, d = js(e)) : Dn(e) ? (u = () => c(e), d = !0) : ce(e) ? (f = !0, d = e.some(S => Dn(S) || js(S)), u = () => e.map(S => {
        if (Re(S)) return S.value;
        if (Dn(S)) return c(S);
        if (pe(S)) return bn(S, a, 2)
    })) : pe(e) ? t ? u = () => bn(e, a, 2) : u = () => (m && m(), Tt(e, a, 3, [p])) : u = Et, t && o) {
        const S = u;
        u = () => vn(S())
    }
    let m, p = S => {
        m = x.onStop = () => {
            bn(S, a, 4), m = x.onStop = void 0
        }
    }, g;
    if (ir) if (p = Et, t ? n && Tt(t, a, 3, [u(), f ? [] : void 0, p]) : u(), s === "sync") {
        const S = Xf();
        g = S.__watcherHandles || (S.__watcherHandles = [])
    } else return Et;
    let _ = f ? new Array(e.length).fill(bs) : bs;
    const b = () => {
        if (!(!x.active || !x.dirty)) if (t) {
            const S = x.run();
            (o || d || (f ? S.some((P, B) => yn(P, _[B])) : yn(S, _))) && (m && m(), Tt(t, a, 3, [S, _ === bs ? void 0 : f && _[0] === bs ? [] : _, p]), _ = S)
        } else x.run()
    };
    b.allowRecurse = !!t;
    let y;
    s === "sync" ? y = b : s === "post" ? y = () => mt(b, a && a.suspense) : (b.pre = !0, a && (b.id = a.uid), y = () => Hl(b));
    const x = new Bl(u, Et, y), T = Ic(), E = () => {
        x.stop(), T && Pl(T.effects, x)
    };
    return t ? n ? b() : _ = x.run() : s === "post" ? mt(x.run.bind(x), a && a.suspense) : x.run(), g && g.push(E), E
}

function Qf(e, t, n) {
    const o = this.proxy,
        s = Ye(e) ? e.includes(".") ? pu(o, e) : () => o[e] : e.bind(o, o);
    let r;
    pe(t) ? r = t : (r = t.handler, n = t);
    const l = ss(this), i = Wl(s, r.bind(o), n);
    return l(), i
}

function pu(e, t) {
    const n = t.split(".");
    return () => {
        let o = e;
        for (let s = 0; s < n.length && o; s++) o = o[n[s]];
        return o
    }
}

function vn(e, t = 1 / 0, n) {
    if (t <= 0 || !ze(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, Re(e)) vn(e.value, t, n); else if (ce(e)) for (let o = 0; o < e.length; o++) vn(e[o], t, n); else if (bc(e) || fo(e)) e.forEach(o => {
        vn(o, t, n)
    }); else if (Cc(e)) {
        for (const o in e) vn(e[o], t, n);
        for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && vn(e[o], t, n)
    }
    return e
}

const rr = e => e.type.__isKeepAlive;

function wo(e, t) {
    vu(e, "a", t)
}

function Co(e, t) {
    vu(e, "da", t)
}

function vu(e, t, n = ot) {
    const o = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (sr(t, o, n), n) {
        let s = n.parent;
        for (; s && s.parent;) rr(s.parent.vnode) && Zf(o, t, n, s), s = s.parent
    }
}

function Zf(e, t, n, o) {
    const s = sr(t, e, o, !0);
    yo(() => {
        Pl(o[t], s)
    }, n)
}

const hn = Symbol("_leaveCb"), ys = Symbol("_enterCb");

function e1() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return ht(() => {
        e.isMounted = !0
    }), os(() => {
        e.isUnmounting = !0
    }), e
}

const Ct = [Function, Array], _u = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ct,
    onEnter: Ct,
    onAfterEnter: Ct,
    onEnterCancelled: Ct,
    onBeforeLeave: Ct,
    onLeave: Ct,
    onAfterLeave: Ct,
    onLeaveCancelled: Ct,
    onBeforeAppear: Ct,
    onAppear: Ct,
    onAfterAppear: Ct,
    onAppearCancelled: Ct
}, bu = e => {
    const t = e.subTree;
    return t.component ? bu(t.component) : t
}, t1 = {
    name: "BaseTransition", props: _u, setup(e, {slots: t}) {
        const n = Wt(), o = e1();
        return () => {
            const s = t.default && wu(t.default(), !0);
            if (!s || !s.length) return;
            let r = s[0];
            if (s.length > 1) {
                for (const f of s) if (f.type !== yt) {
                    r = f;
                    break
                }
            }
            const l = Pe(e), {mode: i} = l;
            if (o.isLeaving) return Pr(r);
            const a = Ui(r);
            if (!a) return Pr(r);
            let c = ll(a, l, o, n, f => c = f);
            zs(a, c);
            const u = n.subTree, d = u && Ui(u);
            if (d && d.type !== yt && !Pn(a, d) && bu(n).type !== yt) {
                const f = ll(d, l, o, n);
                if (zs(d, f), i === "out-in" && a.type !== yt) return o.isLeaving = !0, f.afterLeave = () => {
                    o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update())
                }, Pr(r);
                i === "in-out" && a.type !== yt && (f.delayLeave = (m, p, g) => {
                    const _ = yu(o, d);
                    _[String(d.key)] = d, m[hn] = () => {
                        p(), m[hn] = void 0, delete c.delayedLeave
                    }, c.delayedLeave = g
                })
            }
            return r
        }
    }
}, n1 = t1;

function yu(e, t) {
    const {leavingVNodes: n} = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null), n.set(t.type, o)), o
}

function ll(e, t, n, o, s) {
    const {
        appear: r,
        mode: l,
        persisted: i = !1,
        onBeforeEnter: a,
        onEnter: c,
        onAfterEnter: u,
        onEnterCancelled: d,
        onBeforeLeave: f,
        onLeave: m,
        onAfterLeave: p,
        onLeaveCancelled: g,
        onBeforeAppear: _,
        onAppear: b,
        onAfterAppear: y,
        onAppearCancelled: x
    } = t, T = String(e.key), E = yu(n, e), S = ($, F) => {
        $ && Tt($, o, 9, F)
    }, P = ($, F) => {
        const I = F[1];
        S($, F), ce($) ? $.every(A => A.length <= 1) && I() : $.length <= 1 && I()
    }, B = {
        mode: l, persisted: i, beforeEnter($) {
            let F = a;
            if (!n.isMounted) if (r) F = _ || a; else return;
            $[hn] && $[hn](!0);
            const I = E[T];
            I && Pn(e, I) && I.el[hn] && I.el[hn](), S(F, [$])
        }, enter($) {
            let F = c, I = u, A = d;
            if (!n.isMounted) if (r) F = b || c, I = y || u, A = x || d; else return;
            let H = !1;
            const Z = $[ys] = ae => {
                H || (H = !0, ae ? S(A, [$]) : S(I, [$]), B.delayedLeave && B.delayedLeave(), $[ys] = void 0)
            };
            F ? P(F, [$, Z]) : Z()
        }, leave($, F) {
            const I = String(e.key);
            if ($[ys] && $[ys](!0), n.isUnmounting) return F();
            S(f, [$]);
            let A = !1;
            const H = $[hn] = Z => {
                A || (A = !0, F(), Z ? S(g, [$]) : S(p, [$]), $[hn] = void 0, E[I] === e && delete E[I])
            };
            E[I] = e, m ? P(m, [$, H]) : H()
        }, clone($) {
            const F = ll($, t, n, o, s);
            return s && s(F), F
        }
    };
    return B
}

function Pr(e) {
    if (rr(e)) return e = wn(e), e.children = null, e
}

function Ui(e) {
    if (!rr(e)) return e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && pe(n.default)) return n.default()
    }
}

function zs(e, t) {
    e.shapeFlag & 6 && e.component ? zs(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function wu(e, t = !1, n) {
    let o = [], s = 0;
    for (let r = 0; r < e.length; r++) {
        let l = e[r];
        const i = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
        l.type === Fe ? (l.patchFlag & 128 && s++, o = o.concat(wu(l.children, t, i))) : (t || l.type !== yt) && o.push(i != null ? wn(l, {key: i}) : l)
    }
    if (s > 1) for (let r = 0; r < o.length; r++) o[r].patchFlag = -2;
    return o
}

const o1 = e => e.__isTeleport,
    Mo = e => e && (e.disabled || e.disabled === ""),
    Hi = e => typeof SVGElement < "u" && e instanceof SVGElement,
    zi = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    il = (e, t) => {
        const n = e && e.to;
        return Ye(n) ? t ? t(n) : null : n
    }, s1 = {
        name: "Teleport", __isTeleport: !0, process(e, t, n, o, s, r, l, i, a, c) {
            const {
                mc: u,
                pc: d,
                pbc: f,
                o: {insert: m, querySelector: p, createText: g, createComment: _}
            } = c, b = Mo(t.props);
            let {shapeFlag: y, children: x, dynamicChildren: T} = t;
            if (e == null) {
                const E = t.el = g(""), S = t.anchor = g("");
                m(E, n, o), m(S, n, o);
                const P = t.target = il(t.props, p), B = t.targetAnchor = g("");
                P && (m(B, P), l === "svg" || Hi(P) ? l = "svg" : (l === "mathml" || zi(P)) && (l = "mathml"));
                const $ = (F, I) => {
                    y & 16 && u(x, F, I, s, r, l, i, a)
                };
                b ? $(n, S) : P && $(P, B)
            } else {
                t.el = e.el;
                const E = t.anchor = e.anchor, S = t.target = e.target,
                    P = t.targetAnchor = e.targetAnchor, B = Mo(e.props),
                    $ = B ? n : S, F = B ? E : P;
                if (l === "svg" || Hi(S) ? l = "svg" : (l === "mathml" || zi(S)) && (l = "mathml"), T ? (f(e.dynamicChildren, T, $, s, r, l, i), Kl(e, t, !0)) : a || d(e, t, $, F, s, r, l, i, !1), b) B ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ws(t, n, E, c, 1); else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const I = t.target = il(t.props, p);
                    I && ws(t, I, null, c, 0)
                } else B && ws(t, S, P, c, 1)
            }
            Cu(t)
        }, remove(e, t, n, {um: o, o: {remove: s}}, r) {
            const {
                shapeFlag: l,
                children: i,
                anchor: a,
                targetAnchor: c,
                target: u,
                props: d
            } = e;
            if (u && s(c), r && s(a), l & 16) {
                const f = r || !Mo(d);
                for (let m = 0; m < i.length; m++) {
                    const p = i[m];
                    o(p, t, n, f, !!p.dynamicChildren)
                }
            }
        }, move: ws, hydrate: r1
    };

function ws(e, t, n, {o: {insert: o}, m: s}, r = 2) {
    r === 0 && o(e.targetAnchor, t, n);
    const {el: l, anchor: i, shapeFlag: a, children: c, props: u} = e,
        d = r === 2;
    if (d && o(l, t, n), (!d || Mo(u)) && a & 16) for (let f = 0; f < c.length; f++) s(c[f], t, n, 2);
    d && o(i, t, n)
}

function r1(e, t, n, o, s, r, {
    o: {
        nextSibling: l,
        parentNode: i,
        querySelector: a
    }
}, c) {
    const u = t.target = il(t.props, a);
    if (u) {
        const d = u._lpa || u.firstChild;
        if (t.shapeFlag & 16) if (Mo(t.props)) t.anchor = c(l(e), t, i(e), n, o, s, r), t.targetAnchor = d; else {
            t.anchor = l(e);
            let f = d;
            for (; f;) if (f = l(f), f && f.nodeType === 8 && f.data === "teleport anchor") {
                t.targetAnchor = f, u._lpa = t.targetAnchor && l(t.targetAnchor);
                break
            }
            c(d, t, u, n, o, s, r)
        }
        Cu(t)
    }
    return t.anchor && l(t.anchor)
}

const Gl = s1;

function Cu(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}

const Fe = Symbol.for("v-fgt"), lr = Symbol.for("v-txt"),
    yt = Symbol.for("v-cmt"), Bs = Symbol.for("v-stc"), jo = [];
let Bt = null;

function Q(e = !1) {
    jo.push(Bt = e ? null : [])
}

function l1() {
    jo.pop(), Bt = jo[jo.length - 1] || null
}

let Xo = 1;

function qi(e) {
    Xo += e
}

function Su(e) {
    return e.dynamicChildren = Xo > 0 ? Bt || uo : null, l1(), Xo > 0 && Bt && Bt.push(e), e
}

function ye(e, t, n, o, s, r) {
    return Su(R(e, t, n, o, s, r, !0))
}

function He(e, t, n, o, s) {
    return Su(h(e, t, n, o, s, !0))
}

function qs(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Pn(e, t) {
    return e.type === t.type && e.key === t.key
}

const xu = ({key: e}) => e ?? null, Ls = ({
                                              ref: e,
                                              ref_key: t,
                                              ref_for: n
                                          }) => (typeof e == "number" && (e = "" + e), e != null ? Ye(e) || Re(e) || pe(e) ? {
    i: ft,
    r: e,
    k: t,
    f: !!n
} : e : null);

function R(e, t = null, n = null, o = 0, s = null, r = e === Fe ? 0 : 1, l = !1, i = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && xu(t),
        ref: t && Ls(t),
        scopeId: or,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: o,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: ft
    };
    return i ? (Yl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ye(n) ? 8 : 16), Xo > 0 && !l && Bt && (a.patchFlag > 0 || r & 6) && a.patchFlag !== 32 && Bt.push(a), a
}

const h = i1;

function i1(e, t = null, n = null, o = 0, s = null, r = !1) {
    if ((!e || e === xf) && (e = yt), qs(e)) {
        const i = wn(e, t, !0);
        return n && Yl(i, n), Xo > 0 && !r && Bt && (i.shapeFlag & 6 ? Bt[Bt.indexOf(e)] = i : Bt.push(i)), i.patchFlag = -2, i
    }
    if (_1(e) && (e = e.__vccOpts), t) {
        t = a1(t);
        let {class: i, style: a} = t;
        i && !Ye(i) && (t.class = $l(i)), ze(a) && (Hc(a) && !ce(a) && (a = Qe({}, a)), t.style = Ol(a))
    }
    const l = Ye(e) ? 1 : Tf(e) ? 128 : o1(e) ? 64 : ze(e) ? 4 : pe(e) ? 2 : 0;
    return R(e, t, n, o, s, l, r, !0)
}

function a1(e) {
    return e ? Hc(e) || cu(e) ? Qe({}, e) : e : null
}

function wn(e, t, n = !1, o = !1) {
    const {props: s, ref: r, patchFlag: l, children: i, transition: a} = e,
        c = t ? qe(s || {}, t) : s, u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: c,
            key: c && xu(c),
            ref: t && t.ref ? n && r ? ce(r) ? r.concat(Ls(t)) : [r, Ls(t)] : Ls(t) : r,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: i,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Fe ? l === -1 ? 16 : l | 16 : l,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: a,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && wn(e.ssContent),
            ssFallback: e.ssFallback && wn(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        };
    return a && o && zs(u, a.clone(u)), u
}

function ke(e = " ", t = 0) {
    return h(lr, null, e, t)
}

function c1(e, t) {
    const n = h(Bs, null, e);
    return n.staticCount = t, n
}

function Jl(e = "", t = !1) {
    return t ? (Q(), He(yt, null, e)) : h(yt, null, e)
}

function zt(e) {
    return e == null || typeof e == "boolean" ? h(yt) : ce(e) ? h(Fe, null, e.slice()) : typeof e == "object" ? mn(e) : h(lr, null, String(e))
}

function mn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : wn(e)
}

function Yl(e, t) {
    let n = 0;
    const {shapeFlag: o} = e;
    if (t == null) t = null; else if (ce(t)) n = 16; else if (typeof t == "object") if (o & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), Yl(e, s()), s._c && (s._d = !0));
        return
    } else {
        n = 32;
        const s = t._;
        !s && !cu(t) ? t._ctx = ft : s === 3 && ft && (ft.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else pe(t) ? (t = {
        default: t,
        _ctx: ft
    }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ke(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function qe(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const s in o) if (s === "class") t.class !== o.class && (t.class = $l([t.class, o.class])); else if (s === "style") t.style = Ol([t.style, o.style]); else if (Ys(s)) {
            const r = t[s], l = o[s];
            l && r !== l && !(ce(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l)
        } else s !== "" && (t[s] = o[s])
    }
    return t
}

function Ht(e, t, n, o = null) {
    Tt(e, t, 7, [n, o])
}

const u1 = lu();
let d1 = 0;

function f1(e, t, n) {
    const o = e.type, s = (t ? t.appContext : e.appContext) || u1, r = {
        uid: d1++,
        vnode: e,
        type: o,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new kc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: du(o, s),
        emitsOptions: Qc(o, s),
        emit: null,
        emitted: null,
        propsDefaults: Ue,
        inheritAttrs: o.inheritAttrs,
        ctx: Ue,
        data: Ue,
        props: Ue,
        attrs: Ue,
        slots: Ue,
        refs: Ue,
        setupState: Ue,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {_: r}, r.root = t ? t.root : r, r.emit = _f.bind(null, r), e.ce && e.ce(r), r
}

let ot = null;
const Wt = () => ot || ft;
let Ks, al;
{
    const e = xc(), t = (n, o) => {
        let s;
        return (s = e[n]) || (s = e[n] = []), s.push(o), r => {
            s.length > 1 ? s.forEach(l => l(r)) : s[0](r)
        }
    };
    Ks = t("__VUE_INSTANCE_SETTERS__", n => ot = n), al = t("__VUE_SSR_SETTERS__", n => ir = n)
}
const ss = e => {
    const t = ot;
    return Ks(e), e.scope.on(), () => {
        e.scope.off(), Ks(t)
    }
}, Ki = () => {
    ot && ot.scope.off(), Ks(null)
};

function Eu(e) {
    return e.vnode.shapeFlag & 4
}

let ir = !1;

function h1(e, t = !1) {
    t && al(t);
    const {props: n, children: o} = e.vnode, s = Eu(e);
    jf(e, n, s, t), zf(e, o);
    const r = s ? m1(e, t) : void 0;
    return t && al(!1), r
}

function m1(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Of);
    const {setup: o} = n;
    if (o) {
        const s = e.setupContext = o.length > 1 ? p1(e) : null, r = ss(e);
        xn();
        const l = bn(o, e, 0, [e.props, s]);
        if (tn(), r(), yc(l)) {
            if (l.then(Ki, Ki), t) return l.then(i => {
                Wi(e, i, t)
            }).catch(i => {
                tr(i, e, 0)
            });
            e.asyncDep = l
        } else Wi(e, l, t)
    } else Tu(e, t)
}

function Wi(e, t, n) {
    pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ze(t) && (e.setupState = Wc(t)), Tu(e, n)
}

let Gi;

function Tu(e, t, n) {
    const o = e.type;
    if (!e.render) {
        if (!t && Gi && !o.render) {
            const s = o.template || zl(e).template;
            if (s) {
                const {
                    isCustomElement: r,
                    compilerOptions: l
                } = e.appContext.config, {
                    delimiters: i,
                    compilerOptions: a
                } = o, c = Qe(Qe({isCustomElement: r, delimiters: i}, l), a);
                o.render = Gi(s, c)
            }
        }
        e.render = o.render || Et
    }
    {
        const s = ss(e);
        xn();
        try {
            $f(e)
        } finally {
            tn(), s()
        }
    }
}

const g1 = {
    get(e, t) {
        return pt(e, "get", ""), e[t]
    }
};

function p1(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, g1),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function ar(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wc(Ml(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Vo) return Vo[n](e)
        }, has(t, n) {
            return n in t || n in Vo
        }
    })) : e.proxy
}

function v1(e, t = !0) {
    return pe(e) ? e.displayName || e.name : e.name || t && e.__name
}

function _1(e) {
    return pe(e) && "__vccOpts" in e
}

const J = (e, t) => rf(e, t, ir);

function Xl(e, t, n) {
    const o = arguments.length;
    return o === 2 ? ze(t) && !ce(t) ? qs(t) ? h(e, null, [t]) : h(e, t) : h(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && qs(n) && (n = [n]), h(e, t, n))
}

const b1 = "3.4.30";
/**
 * @vue/runtime-dom v3.4.30
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/const y1 = "http://www.w3.org/2000/svg",
    w1 = "http://www.w3.org/1998/Math/MathML",
    Qt = typeof document < "u" ? document : null,
    Ji = Qt && Qt.createElement("template"), C1 = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, o) => {
            const s = t === "svg" ? Qt.createElementNS(y1, e) : t === "mathml" ? Qt.createElementNS(w1, e) : n ? Qt.createElement(e, {is: n}) : Qt.createElement(e);
            return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s
        },
        createText: e => Qt.createTextNode(e),
        createComment: e => Qt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Qt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, o, s, r) {
            const l = n ? n.previousSibling : t.lastChild;
            if (s && (s === r || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling));) ; else {
                Ji.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
                const i = Ji.content;
                if (o === "svg" || o === "mathml") {
                    const a = i.firstChild;
                    for (; a.firstChild;) i.appendChild(a.firstChild);
                    i.removeChild(a)
                }
                t.insertBefore(i, n)
            }
            return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }, rn = "transition", Po = "animation", Qo = Symbol("_vtc"),
    rs = (e, {slots: t}) => Xl(n1, S1(e), t);
rs.displayName = "Transition";
const ku = {
    name: String,
    type: String,
    css: {type: Boolean, default: !0},
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
rs.props = Qe({}, _u, ku);
const kn = (e, t = []) => {
    ce(e) ? e.forEach(n => n(...t)) : e && e(...t)
}, Yi = e => e ? ce(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function S1(e) {
    const t = {};
    for (const A in e) A in ku || (t[A] = e[A]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: o,
        duration: s,
        enterFromClass: r = `${n}-enter-from`,
        enterActiveClass: l = `${n}-enter-active`,
        enterToClass: i = `${n}-enter-to`,
        appearFromClass: a = r,
        appearActiveClass: c = l,
        appearToClass: u = i,
        leaveFromClass: d = `${n}-leave-from`,
        leaveActiveClass: f = `${n}-leave-active`,
        leaveToClass: m = `${n}-leave-to`
    } = e, p = x1(s), g = p && p[0], _ = p && p[1], {
        onBeforeEnter: b,
        onEnter: y,
        onEnterCancelled: x,
        onLeave: T,
        onLeaveCancelled: E,
        onBeforeAppear: S = b,
        onAppear: P = y,
        onAppearCancelled: B = x
    } = t, $ = (A, H, Z) => {
        An(A, H ? u : i), An(A, H ? c : l), Z && Z()
    }, F = (A, H) => {
        A._isLeaving = !1, An(A, d), An(A, m), An(A, f), H && H()
    }, I = A => (H, Z) => {
        const ae = A ? P : y, ne = () => $(H, A, Z);
        kn(ae, [H, ne]), Xi(() => {
            An(H, A ? a : r), ln(H, A ? u : i), Yi(ae) || Qi(H, o, g, ne)
        })
    };
    return Qe(t, {
        onBeforeEnter(A) {
            kn(b, [A]), ln(A, r), ln(A, l)
        }, onBeforeAppear(A) {
            kn(S, [A]), ln(A, a), ln(A, c)
        }, onEnter: I(!1), onAppear: I(!0), onLeave(A, H) {
            A._isLeaving = !0;
            const Z = () => F(A, H);
            ln(A, d), ln(A, f), k1(), Xi(() => {
                A._isLeaving && (An(A, d), ln(A, m), Yi(T) || Qi(A, o, _, Z))
            }), kn(T, [A, Z])
        }, onEnterCancelled(A) {
            $(A, !1), kn(x, [A])
        }, onAppearCancelled(A) {
            $(A, !0), kn(B, [A])
        }, onLeaveCancelled(A) {
            F(A), kn(E, [A])
        }
    })
}

function x1(e) {
    if (e == null) return null;
    if (ze(e)) return [Rr(e.enter), Rr(e.leave)];
    {
        const t = Rr(e);
        return [t, t]
    }
}

function Rr(e) {
    return Pd(e)
}

function ln(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Qo] || (e[Qo] = new Set)).add(t)
}

function An(e, t) {
    t.split(/\s+/).forEach(o => o && e.classList.remove(o));
    const n = e[Qo];
    n && (n.delete(t), n.size || (e[Qo] = void 0))
}

function Xi(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}

let E1 = 0;

function Qi(e, t, n, o) {
    const s = e._endId = ++E1, r = () => {
        s === e._endId && o()
    };
    if (n) return setTimeout(r, n);
    const {type: l, timeout: i, propCount: a} = T1(e, t);
    if (!l) return o();
    const c = l + "end";
    let u = 0;
    const d = () => {
        e.removeEventListener(c, f), r()
    }, f = m => {
        m.target === e && ++u >= a && d()
    };
    setTimeout(() => {
        u < a && d()
    }, i + 1), e.addEventListener(c, f)
}

function T1(e, t) {
    const n = window.getComputedStyle(e), o = p => (n[p] || "").split(", "),
        s = o(`${rn}Delay`), r = o(`${rn}Duration`), l = Zi(s, r),
        i = o(`${Po}Delay`), a = o(`${Po}Duration`), c = Zi(i, a);
    let u = null, d = 0, f = 0;
    t === rn ? l > 0 && (u = rn, d = l, f = r.length) : t === Po ? c > 0 && (u = Po, d = c, f = a.length) : (d = Math.max(l, c), u = d > 0 ? l > c ? rn : Po : null, f = u ? u === rn ? r.length : a.length : 0);
    const m = u === rn && /\b(transform|all)(,|$)/.test(o(`${rn}Property`).toString());
    return {type: u, timeout: d, propCount: f, hasTransform: m}
}

function Zi(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, o) => ea(n) + ea(e[o])))
}

function ea(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function k1() {
    return document.body.offsetHeight
}

function A1(e, t, n) {
    const o = e[Qo];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

const Ws = Symbol("_vod"), Au = Symbol("_vsh"), go = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ws] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ro(e, t)
    }, mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    }, updated(e, {value: t, oldValue: n}, {transition: o}) {
        !t != !n && (o ? t ? (o.beforeEnter(e), Ro(e, !0), o.enter(e)) : o.leave(e, () => {
            Ro(e, !1)
        }) : Ro(e, t))
    }, beforeUnmount(e, {value: t}) {
        Ro(e, t)
    }
};

function Ro(e, t) {
    e.style.display = t ? e[Ws] : "none", e[Au] = !t
}

const I1 = Symbol(""), P1 = /(^|;)\s*display\s*:/;

function R1(e, t, n) {
    const o = e.style, s = Ye(n);
    let r = !1;
    if (n && !s) {
        if (t) if (Ye(t)) for (const l of t.split(";")) {
            const i = l.slice(0, l.indexOf(":")).trim();
            n[i] == null && Ds(o, i, "")
        } else for (const l in t) n[l] == null && Ds(o, l, "");
        for (const l in n) l === "display" && (r = !0), Ds(o, l, n[l])
    } else if (s) {
        if (t !== n) {
            const l = o[I1];
            l && (n += ";" + l), o.cssText = n, r = P1.test(n)
        }
    } else t && e.removeAttribute("style");
    Ws in e && (e[Ws] = r ? o.display : "", e[Au] && (o.display = "none"))
}

const ta = /\s*!important$/;

function Ds(e, t, n) {
    if (ce(n)) n.forEach(o => Ds(e, t, o)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const o = O1(e, t);
        ta.test(n) ? e.setProperty(zn(o), n.replace(ta, ""), "important") : e[o] = n
    }
}

const na = ["Webkit", "Moz", "ms"], Or = {};

function O1(e, t) {
    const n = Or[t];
    if (n) return n;
    let o = Kt(t);
    if (o !== "filter" && o in e) return Or[t] = o;
    o = Zs(o);
    for (let s = 0; s < na.length; s++) {
        const r = na[s] + o;
        if (r in e) return Or[t] = r
    }
    return t
}

const oa = "http://www.w3.org/1999/xlink";

function sa(e, t, n, o, s, r = Dd(t)) {
    o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(oa, t.slice(6, t.length)) : e.setAttributeNS(oa, t, n) : n == null || r && !Ec(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : Sn(n) ? String(n) : n)
}

function $1(e, t, n, o, s, r, l) {
    if (t === "innerHTML" || t === "textContent") {
        o && l(o, s, r), e[t] = n ?? "";
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            u = n == null ? "" : String(n);
        (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = Ec(n) : n == null && c === "string" ? (n = "", a = !0) : c === "number" && (n = 0, a = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    a && e.removeAttribute(t)
}

function B1(e, t, n, o) {
    e.addEventListener(t, n, o)
}

function L1(e, t, n, o) {
    e.removeEventListener(t, n, o)
}

const ra = Symbol("_vei");

function D1(e, t, n, o, s = null) {
    const r = e[ra] || (e[ra] = {}), l = r[t];
    if (o && l) l.value = o; else {
        const [i, a] = N1(t);
        if (o) {
            const c = r[t] = M1(o, s);
            B1(e, i, c, a)
        } else l && (L1(e, i, l, a), r[t] = void 0)
    }
}

const la = /(?:Once|Passive|Capture)$/;

function N1(e) {
    let t;
    if (la.test(e)) {
        t = {};
        let o;
        for (; o = e.match(la);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : zn(e.slice(2)), t]
}

let $r = 0;
const F1 = Promise.resolve(),
    V1 = () => $r || (F1.then(() => $r = 0), $r = Date.now());

function M1(e, t) {
    const n = o => {
        if (!o._vts) o._vts = Date.now(); else if (o._vts <= n.attached) return;
        Tt(j1(o, n.value), t, 5, [o])
    };
    return n.value = e, n.attached = V1(), n
}

function j1(e, t) {
    if (ce(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(o => s => !s._stopped && o && o(s))
    } else return t
}

const ia = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    U1 = (e, t, n, o, s, r, l, i, a) => {
        const c = s === "svg";
        t === "class" ? A1(e, o, c) : t === "style" ? R1(e, n, o) : Ys(t) ? Il(t) || D1(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : H1(e, t, o, c)) ? ($1(e, t, o, r, l, i, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sa(e, t, o, c, l, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), sa(e, t, o, c))
    };

function H1(e, t, n, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && ia(t) && pe(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return ia(t) && Ye(n) ? !1 : t in e
}

const z1 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}, q1 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
    return n[o] || (n[o] = s => {
        if (!("key" in s)) return;
        const r = zn(s.key);
        if (t.some(l => l === r || z1[l] === r)) return e(s)
    })
}, K1 = Qe({patchProp: U1}, C1);
let aa;

function W1() {
    return aa || (aa = Kf(K1))
}

const Iu = (...e) => {
    const t = W1().createApp(...e), {mount: n} = t;
    return t.mount = o => {
        const s = J1(o);
        if (!s) return;
        const r = t._component;
        !pe(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
        const l = n(s, !1, G1(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
    }, t
};

function G1(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function J1(e) {
    return Ye(e) ? document.querySelector(e) : e
}

const at = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n
}, Y1 = {};

function X1(e, t) {
    const n = eu("router-view");
    return Q(), He(n)
}

const Q1 = at(Y1, [["render", X1], ["__scopeId", "data-v-8b38ff86"]]);

function cl() {
}

const Ce = Object.assign, So = typeof window < "u",
    Wn = e => e !== null && typeof e == "object", Xe = e => e != null,
    Zo = e => typeof e == "function",
    Pu = e => Wn(e) && Zo(e.then) && Zo(e.catch);

function Z1(e) {
    return e = e.replace(/[^-|\d]/g, ""), /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}

const Ru = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
    e2 = () => So ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function ca(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(s => {
        var r;
        o = Wn(o) && (r = o[s]) != null ? r : ""
    }), o
}

function Pt(e, t, n) {
    return t.reduce((o, s) => (o[s] = e[s], o), {})
}

const Br = (e, t) => JSON.stringify(e) === JSON.stringify(t),
    ua = e => Array.isArray(e) ? e : [e], st = null, te = [Number, String],
    de = {type: Boolean, default: !0}, co = e => ({type: e, required: !0}),
    Dt = () => ({type: Array, default: () => []}),
    Ou = e => ({type: Number, default: e}), Je = e => ({type: te, default: e}),
    me = e => ({type: String, default: e});
var xo = typeof window < "u";

function da(e) {
    return xo ? requestAnimationFrame(e) : -1
}

function Cs(e) {
    da(() => da(e))
}

var t2 = e => e === window, fa = (e, t) => ({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
}), jn = e => {
    const t = V(e);
    if (t2(t)) {
        const n = t.innerWidth, o = t.innerHeight;
        return fa(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : fa(0, 0)
};

function wt(e) {
    const t = it(e, null);
    if (t) {
        const n = Wt(), {link: o, unlink: s, internalChildren: r} = t;
        o(n), yo(() => s(n));
        const l = J(() => r.indexOf(n));
        return {parent: t, index: l}
    }
    return {parent: null, index: L(-1)}
}

function n2(e) {
    const t = [], n = o => {
        Array.isArray(o) && o.forEach(s => {
            var r;
            qs(s) && (t.push(s), (r = s.component) != null && r.subTree && (t.push(s.component.subTree), n(s.component.subTree.children)), s.children && n(s.children))
        })
    };
    return n(e), t
}

var ha = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function o2(e, t, n) {
    const o = n2(e.subTree.children);
    n.sort((r, l) => ha(o, r.vnode) - ha(o, l.vnode));
    const s = n.map(r => r.proxy);
    t.sort((r, l) => {
        const i = s.indexOf(r), a = s.indexOf(l);
        return i - a
    })
}

function Ft(e) {
    const t = Me([]), n = Me([]), o = Wt();
    return {
        children: t, linkChildren: r => {
            Fn(e, Object.assign({
                link: a => {
                    a.proxy && (n.push(a), t.push(a.proxy), o2(o, t, n))
                }, unlink: a => {
                    const c = n.indexOf(a);
                    t.splice(c, 1), n.splice(c, 1)
                }, children: t, internalChildren: n
            }, r))
        }
    }
}

function $u(e) {
    let t;
    ht(() => {
        e(), Ge(() => {
            t = !0
        })
    }), wo(() => {
        t && e()
    })
}

function Vt(e, t, n = {}) {
    if (!xo) return;
    const {target: o = window, passive: s = !1, capture: r = !1} = n;
    let l = !1, i;
    const a = d => {
        if (l) return;
        const f = V(d);
        f && !i && (f.addEventListener(e, t, {capture: r, passive: s}), i = !0)
    }, c = d => {
        if (l) return;
        const f = V(d);
        f && i && (f.removeEventListener(e, t, r), i = !1)
    };
    yo(() => c(o)), Co(() => c(o)), $u(() => a(o));
    let u;
    return Re(o) && (u = Ee(o, (d, f) => {
        c(f), a(d)
    })), () => {
        u == null || u(), c(o), l = !0
    }
}

function s2(e, t, n = {}) {
    if (!xo) return;
    const {eventName: o = "click"} = n;
    Vt(o, r => {
        (Array.isArray(e) ? e : [e]).every(a => {
            const c = V(a);
            return c && !c.contains(r.target)
        }) && t(r)
    }, {target: document})
}

var Ss, Lr;

function r2() {
    if (!Ss && (Ss = L(0), Lr = L(0), xo)) {
        const e = () => {
            Ss.value = window.innerWidth, Lr.value = window.innerHeight
        };
        e(), window.addEventListener("resize", e, {passive: !0}), window.addEventListener("orientationchange", e, {passive: !0})
    }
    return {width: Ss, height: Lr}
}

var l2 = /scroll|auto|overlay/i, Bu = xo ? window : void 0;

function i2(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function Ql(e, t = Bu) {
    let n = e;
    for (; n && n !== t && i2(n);) {
        const {overflowY: o} = window.getComputedStyle(n);
        if (l2.test(o)) return n;
        n = n.parentNode
    }
    return t
}

function Lu(e, t = Bu) {
    const n = L();
    return ht(() => {
        e.value && (n.value = Ql(e.value, t))
    }), n
}

var xs;

function a2() {
    if (!xs && (xs = L("visible"), xo)) {
        const e = () => {
            xs.value = document.hidden ? "hidden" : "visible"
        };
        e(), window.addEventListener("visibilitychange", e)
    }
    return xs
}

var Du = Symbol("van-field");

function ls(e) {
    const t = it(Du, null);
    t && !t.customValue.value && (t.customValue.value = e, Ee(e, () => {
        t.resetValidation(), t.validateWithTrigger("onChange")
    }))
}

function c2(e) {
    const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}

function ma(e, t) {
    "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}

function Nu() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

function Fu(e) {
    ma(window, e), ma(document.body, e)
}

const u2 = e2();

function d2() {
    u2 && Fu(Nu())
}

const f2 = e => e.stopPropagation();

function At(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && f2(e)
}

function ul(e) {
    const t = V(e);
    if (!t) return !1;
    const n = window.getComputedStyle(t), o = n.display === "none",
        s = t.offsetParent === null && n.position !== "fixed";
    return o || s
}

const {width: cr, height: ur} = r2();

function h2(e) {
    const t = window.getComputedStyle(e);
    return t.transform !== "none" || t.perspective !== "none" || ["transform", "perspective", "filter"].some(n => (t.willChange || "").includes(n))
}

function m2(e) {
    let t = e.parentElement;
    for (; t;) {
        if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && h2(t)) return t;
        t = t.parentElement
    }
    return null
}

function Ve(e) {
    if (Xe(e)) return Ru(e) ? `${e}px` : String(e)
}

function g2(e) {
    if (Xe(e)) {
        if (Array.isArray(e)) return {width: Ve(e[0]), height: Ve(e[1])};
        const t = Ve(e);
        return {width: t, height: t}
    }
}

function is(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e), t
}

let Dr;

function p2() {
    if (!Dr) {
        const e = document.documentElement,
            t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        Dr = parseFloat(t)
    }
    return Dr
}

function v2(e) {
    return e = e.replace(/rem/g, ""), +e * p2()
}

function _2(e) {
    return e = e.replace(/vw/g, ""), +e * cr.value / 100
}

function b2(e) {
    return e = e.replace(/vh/g, ""), +e * ur.value / 100
}

function y2(e) {
    if (typeof e == "number") return e;
    if (So) {
        if (e.includes("rem")) return v2(e);
        if (e.includes("vw")) return _2(e);
        if (e.includes("vh")) return b2(e)
    }
    return parseFloat(e)
}

const w2 = /-(\w)/g, Vu = e => e.replace(w2, (t, n) => n.toUpperCase()),
    po = (e, t, n) => Math.min(Math.max(e, t), n);

function ga(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function C2(e, t = !0, n = !0) {
    t ? e = ga(e, ".", /\./g) : e = e.split(".")[0], n ? e = ga(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}

const {hasOwnProperty: S2} = Object.prototype;

function x2(e, t, n) {
    const o = t[n];
    Xe(o) && (!S2.call(e, n) || !Wn(o) ? e[n] = o : e[n] = Mu(Object(e[n]), o))
}

function Mu(e, t) {
    return Object.keys(t).forEach(n => {
        x2(e, t, n)
    }), e
}

var E2 = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
        end: "结束",
        start: "开始",
        title: "日期选择",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        monthTitle: (e, t) => `${e}年${t}月`,
        rangePrompt: e => `最多选择 ${e} 天`
    },
    vanCascader: {select: "请选择"},
    vanPagination: {prev: "上一页", next: "下一页"},
    vanPullRefresh: {pulling: "下拉即可刷新...", loosing: "释放即可刷新..."},
    vanSubmitBar: {label: "合计:"},
    vanCoupon: {
        unlimited: "无门槛",
        discount: e => `${e}折`,
        condition: e => `满${e}元可用`
    },
    vanCouponCell: {title: "优惠券", count: e => `${e}张可用`},
    vanCouponList: {
        exchange: "兑换",
        close: "不使用",
        enable: "可用",
        disabled: "不可用",
        placeholder: "输入优惠码"
    },
    vanAddressEdit: {
        area: "地区",
        areaEmpty: "请选择地区",
        addressEmpty: "请填写详细地址",
        addressDetail: "详细地址",
        defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {add: "新增地址"}
};
const pa = L("zh-CN"), va = Me({"zh-CN": E2}), T2 = {
    messages() {
        return va[pa.value]
    }, use(e, t) {
        pa.value = e, this.add({[e]: t})
    }, add(e = {}) {
        Mu(va, e)
    }
};
var k2 = T2;

function A2(e) {
    const t = Vu(e) + ".";
    return (n, ...o) => {
        const s = k2.messages(), r = ca(s, t + n) || ca(s, n);
        return Zo(r) ? r(...o) : r
    }
}

function dl(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n, o) => n + dl(e, o), "") : Object.keys(t).reduce((n, o) => n + (t[o] ? dl(e, o) : ""), "") : ""
}

function I2(e) {
    return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${dl(t, n)}`)
}

function le(e) {
    const t = `van-${e}`;
    return [t, I2(t), A2(t)]
}

const Gn = "van-hairline", ju = `${Gn}--top`, P2 = `${Gn}--left`,
    R2 = `${Gn}--bottom`, O2 = `${Gn}--surround`, Uu = `${Gn}--top-bottom`,
    $2 = `${Gn}-unset--top-bottom`, Cn = "van-haptics-feedback",
    Hu = Symbol("van-form"), _a = 5;

function Zl(e, {args: t = [], done: n, canceled: o, error: s}) {
    if (e) {
        const r = e.apply(null, t);
        Pu(r) ? r.then(l => {
            l ? n() : o && o()
        }).catch(s || cl) : r ? n() : o && o()
    } else n()
}

function he(e) {
    return e.install = t => {
        const {name: n} = e;
        n && (t.component(n, e), t.component(Vu(`-${n}`), e))
    }, e
}

const zu = Symbol();

function qu(e) {
    const t = it(zu, null);
    t && Ee(t, n => {
        n && e()
    })
}

const B2 = (e, t) => {
    const n = L(), o = () => {
        n.value = jn(e).height
    };
    return ht(() => {
        Ge(o);
        for (let s = 1; s <= 3; s++) setTimeout(o, 100 * s)
    }), qu(() => Ge(o)), Ee([cr, ur], o), n
};

function dr(e, t) {
    const n = B2(e);
    return o => h("div", {
        class: t("placeholder"),
        style: {height: n.value ? `${n.value}px` : void 0}
    }, [o()])
}

const [Ku, ba] = le("action-bar"), ei = Symbol(Ku),
    L2 = {placeholder: Boolean, safeAreaInsetBottom: de};
var D2 = re({
    name: Ku, props: L2, setup(e, {slots: t}) {
        const n = L(), o = dr(n, ba), {linkChildren: s} = Ft(ei);
        s();
        const r = () => {
            var l;
            return h("div", {
                ref: n,
                class: [ba(), {"van-safe-area-bottom": e.safeAreaInsetBottom}]
            }, [(l = t.default) == null ? void 0 : l.call(t)])
        };
        return () => e.placeholder ? o(r) : r()
    }
});
const Wu = he(D2);

function rt(e) {
    const t = Wt();
    t && Ce(t.proxy, e)
}

const Jn = {to: [String, Object], url: String, replace: Boolean};

function N2({to: e, url: t, replace: n, $router: o}) {
    e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function Yn() {
    const e = Wt().proxy;
    return () => N2(e)
}

const [F2, ya] = le("badge"), V2 = {
    dot: Boolean,
    max: te,
    tag: me("div"),
    color: String,
    offset: Array,
    content: te,
    showZero: de,
    position: me("top-right")
};
var M2 = re({
    name: F2, props: V2, setup(e, {slots: t}) {
        const n = () => {
                if (t.content) return !0;
                const {content: i, showZero: a} = e;
                return Xe(i) && i !== "" && (a || i !== 0 && i !== "0")
            }, o = () => {
                const {dot: i, max: a, content: c} = e;
                if (!i && n()) return t.content ? t.content() : Xe(a) && Ru(c) && +c > +a ? `${a}+` : c
            }, s = i => i.startsWith("-") ? i.replace("-", "") : `-${i}`,
            r = J(() => {
                const i = {background: e.color};
                if (e.offset) {
                    const [a, c] = e.offset, {position: u} = e, [d, f] = u.split("-");
                    t.default ? (typeof c == "number" ? i[d] = Ve(d === "top" ? c : -c) : i[d] = d === "top" ? Ve(c) : s(c), typeof a == "number" ? i[f] = Ve(f === "left" ? a : -a) : i[f] = f === "left" ? Ve(a) : s(a)) : (i.marginTop = Ve(c), i.marginLeft = Ve(a))
                }
                return i
            }), l = () => {
                if (n() || e.dot) return h("div", {
                    class: ya([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]), style: r.value
                }, [o()])
            };
        return () => {
            if (t.default) {
                const {tag: i} = e;
                return h(i, {class: ya("wrapper")}, {default: () => [t.default(), l()]})
            }
            return l()
        }
    }
});
const as = he(M2);
let j2 = 2e3;
const U2 = () => ++j2, [H2, oy] = le("config-provider"),
    z2 = Symbol(H2), [q2, wa] = le("icon"),
    K2 = e => e == null ? void 0 : e.includes("/"), W2 = {
        dot: Boolean,
        tag: me("i"),
        name: String,
        size: te,
        badge: te,
        color: String,
        badgeProps: Object,
        classPrefix: String
    };
var G2 = re({
    name: q2, props: W2, setup(e, {slots: t}) {
        const n = it(z2, null),
            o = J(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || wa());
        return () => {
            const {tag: s, dot: r, name: l, size: i, badge: a, color: c} = e,
                u = K2(l);
            return h(as, qe({
                dot: r,
                tag: s,
                class: [o.value, u ? "" : `${o.value}-${l}`],
                style: {color: c, fontSize: Ve(i)},
                content: a
            }, e.badgeProps), {
                default: () => {
                    var d;
                    return [(d = t.default) == null ? void 0 : d.call(t), u && h("img", {
                        class: wa("image"),
                        src: l
                    }, null)]
                }
            })
        }
    }
});
const Le = he(G2), [J2, Uo] = le("loading"),
    Y2 = Array(12).fill(null).map((e, t) => h("i", {class: Uo("line", String(t + 1))}, null)),
    X2 = h("svg", {
        class: Uo("circular"),
        viewBox: "25 25 50 50"
    }, [h("circle", {cx: "50", cy: "50", r: "20", fill: "none"}, null)]), Q2 = {
        size: te,
        type: me("circular"),
        color: String,
        vertical: Boolean,
        textSize: te,
        textColor: String
    };
var Z2 = re({
    name: J2, props: Q2, setup(e, {slots: t}) {
        const n = J(() => Ce({color: e.color}, g2(e.size))), o = () => {
            const r = e.type === "spinner" ? Y2 : X2;
            return h("span", {
                class: Uo("spinner", e.type),
                style: n.value
            }, [t.icon ? t.icon() : r])
        }, s = () => {
            var r;
            if (t.default) return h("span", {
                class: Uo("text"),
                style: {
                    fontSize: Ve(e.textSize),
                    color: (r = e.textColor) != null ? r : e.color
                }
            }, [t.default()])
        };
        return () => {
            const {type: r, vertical: l} = e;
            return h("div", {
                class: Uo([r, {vertical: l}]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [o(), s()])
        }
    }
});
const Eo = he(Z2), [e3, eo] = le("button"), t3 = Ce({}, Jn, {
    tag: me("button"),
    text: String,
    icon: String,
    type: me("default"),
    size: me("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: me("button"),
    loadingSize: te,
    loadingText: String,
    loadingType: String,
    iconPosition: me("left")
});
var n3 = re({
    name: e3, props: t3, emits: ["click"], setup(e, {emit: t, slots: n}) {
        const o = Yn(), s = () => n.loading ? n.loading() : h(Eo, {
            size: e.loadingSize,
            type: e.loadingType,
            class: eo("loading")
        }, null), r = () => {
            if (e.loading) return s();
            if (n.icon) return h("div", {class: eo("icon")}, [n.icon()]);
            if (e.icon) return h(Le, {
                name: e.icon,
                class: eo("icon"),
                classPrefix: e.iconPrefix
            }, null)
        }, l = () => {
            let c;
            if (e.loading ? c = e.loadingText : c = n.default ? n.default() : e.text, c) return h("span", {class: eo("text")}, [c])
        }, i = () => {
            const {color: c, plain: u} = e;
            if (c) {
                const d = {color: u ? c : "white"};
                return u || (d.background = c), c.includes("gradient") ? d.border = 0 : d.borderColor = c, d
            }
        }, a = c => {
            e.loading ? At(c) : e.disabled || (t("click", c), o())
        };
        return () => {
            const {
                tag: c,
                type: u,
                size: d,
                block: f,
                round: m,
                plain: p,
                square: g,
                loading: _,
                disabled: b,
                hairline: y,
                nativeType: x,
                iconPosition: T
            } = e, E = [eo([u, d, {
                plain: p,
                block: f,
                round: m,
                square: g,
                loading: _,
                disabled: b,
                hairline: y
            }]), {[O2]: y}];
            return h(c, {
                type: x,
                class: E,
                style: i(),
                disabled: b,
                onClick: a
            }, {default: () => [h("div", {class: eo("content")}, [T === "left" && r(), l(), T === "right" && r()])]})
        }
    }
});
const vt = he(n3), [o3, s3] = le("action-bar-button"), r3 = Ce({}, Jn, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
});
var l3 = re({
    name: o3, props: r3, setup(e, {slots: t}) {
        const n = Yn(), {parent: o, index: s} = wt(ei), r = J(() => {
            if (o) {
                const i = o.children[s.value - 1];
                return !(i && "isButton" in i)
            }
        }), l = J(() => {
            if (o) {
                const i = o.children[s.value + 1];
                return !(i && "isButton" in i)
            }
        });
        return rt({isButton: !0}), () => {
            const {
                type: i,
                icon: a,
                text: c,
                color: u,
                loading: d,
                disabled: f
            } = e;
            return h(vt, {
                class: s3([i, {last: l.value, first: r.value}]),
                size: "large",
                type: i,
                icon: a,
                color: u,
                loading: d,
                disabled: f,
                onClick: n
            }, {default: () => [t.default ? t.default() : c]})
        }
    }
});
const Ca = he(l3), [i3, Nr] = le("action-bar-icon"), a3 = Ce({}, Jn, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: te,
    iconClass: st,
    badgeProps: Object,
    iconPrefix: String
});
var c3 = re({
    name: i3, props: a3, setup(e, {slots: t}) {
        const n = Yn();
        wt(ei);
        const o = () => {
            const {
                dot: s,
                badge: r,
                icon: l,
                color: i,
                iconClass: a,
                badgeProps: c,
                iconPrefix: u
            } = e;
            return t.icon ? h(as, qe({
                dot: s,
                class: Nr("icon"),
                content: r
            }, c), {default: t.icon}) : h(Le, {
                tag: "div",
                dot: s,
                name: l,
                badge: r,
                color: i,
                class: [Nr("icon"), a],
                badgeProps: c,
                classPrefix: u
            }, null)
        };
        return () => h("div", {
            role: "button",
            class: Nr(),
            tabindex: 0,
            onClick: n
        }, [o(), t.default ? t.default() : e.text])
    }
});
const u3 = he(c3), fr = {
    show: Boolean,
    zIndex: te,
    overlay: de,
    duration: te,
    teleport: [String, Object],
    lockScroll: de,
    lazyRender: de,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: st,
    transitionAppear: Boolean,
    closeOnClickOverlay: de
}, Gu = Object.keys(fr);

function d3(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}

function hr() {
    const e = L(0), t = L(0), n = L(0), o = L(0), s = L(0), r = L(0), l = L(""),
        i = L(!0), a = () => l.value === "vertical",
        c = () => l.value === "horizontal", u = () => {
            n.value = 0, o.value = 0, s.value = 0, r.value = 0, l.value = "", i.value = !0
        };
    return {
        move: m => {
            const p = m.touches[0];
            n.value = (p.clientX < 0 ? 0 : p.clientX) - e.value, o.value = p.clientY - t.value, s.value = Math.abs(n.value), r.value = Math.abs(o.value);
            const g = 10;
            (!l.value || s.value < g && r.value < g) && (l.value = d3(s.value, r.value)), i.value && (s.value > _a || r.value > _a) && (i.value = !1)
        },
        start: m => {
            u(), e.value = m.touches[0].clientX, t.value = m.touches[0].clientY
        },
        reset: u,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: o,
        offsetX: s,
        offsetY: r,
        direction: l,
        isVertical: a,
        isHorizontal: c,
        isTap: i
    }
}

let Oo = 0;
const Sa = "van-overflow-hidden";

function f3(e, t) {
    const n = hr(), o = "01", s = "10", r = u => {
        n.move(u);
        const d = n.deltaY.value > 0 ? s : o, f = Ql(u.target, e.value), {
            scrollHeight: m,
            offsetHeight: p,
            scrollTop: g
        } = f;
        let _ = "11";
        g === 0 ? _ = p >= m ? "00" : "01" : g + p >= m && (_ = "10"), _ !== "11" && n.isVertical() && !(parseInt(_, 2) & parseInt(d, 2)) && At(u, !0)
    }, l = () => {
        document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", r, {passive: !1}), Oo || document.body.classList.add(Sa), Oo++
    }, i = () => {
        Oo && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", r), Oo--, Oo || document.body.classList.remove(Sa))
    }, a = () => t() && l(), c = () => t() && i();
    $u(a), Co(c), os(c), Ee(t, u => {
        u ? l() : i()
    })
}

function Ju(e) {
    const t = L(!1);
    return Ee(e, n => {
        n && (t.value = n)
    }, {immediate: !0}), n => () => t.value ? n() : null
}

const fl = () => {
    var e;
    const {scopeId: t} = ((e = Wt()) == null ? void 0 : e.vnode) || {};
    return t ? {[t]: ""} : null
}, [h3, m3] = le("overlay"), g3 = {
    show: Boolean,
    zIndex: te,
    duration: te,
    className: st,
    lockScroll: de,
    lazyRender: de,
    customStyle: Object
};
var p3 = re({
    name: h3, props: g3, setup(e, {slots: t}) {
        const n = L(), o = Ju(() => e.show || !e.lazyRender), s = l => {
            e.lockScroll && At(l, !0)
        }, r = o(() => {
            var l;
            const i = Ce(is(e.zIndex), e.customStyle);
            return Xe(e.duration) && (i.animationDuration = `${e.duration}s`), Nn(h("div", {
                ref: n,
                style: i,
                class: [m3(), e.className]
            }, [(l = t.default) == null ? void 0 : l.call(t)]), [[go, e.show]])
        });
        return Vt("touchmove", s, {target: n}), () => h(rs, {
            name: "van-fade",
            appear: !0
        }, {default: r})
    }
});
const v3 = he(p3), _3 = Ce({}, fr, {
    round: Boolean,
    position: me("center"),
    closeIcon: me("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: me("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
}), [b3, xa] = le("popup");
var y3 = re({
    name: b3,
    inheritAttrs: !1,
    props: _3,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {emit: t, attrs: n, slots: o}) {
        let s, r;
        const l = L(), i = L(), a = Ju(() => e.show || !e.lazyRender),
            c = J(() => {
                const S = {zIndex: l.value};
                if (Xe(e.duration)) {
                    const P = e.position === "center" ? "animationDuration" : "transitionDuration";
                    S[P] = `${e.duration}s`
                }
                return S
            }), u = () => {
                s || (s = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : U2(), t("open"))
            }, d = () => {
                s && Zl(e.beforeClose, {
                    done() {
                        s = !1, t("close"), t("update:show", !1)
                    }
                })
            }, f = S => {
                t("clickOverlay", S), e.closeOnClickOverlay && d()
            }, m = () => {
                if (e.overlay) return h(v3, qe({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: l.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, fl(), {onClick: f}), {default: o["overlay-content"]})
            }, p = S => {
                t("clickCloseIcon", S), d()
            }, g = () => {
                if (e.closeable) return h(Le, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [xa("close-icon", e.closeIconPosition), Cn],
                    classPrefix: e.iconPrefix,
                    onClick: p
                }, null)
            };
        let _;
        const b = () => {
            _ && clearTimeout(_), _ = setTimeout(() => {
                t("opened")
            })
        }, y = () => t("closed"), x = S => t("keydown", S), T = a(() => {
            var S;
            const {
                round: P,
                position: B,
                safeAreaInsetTop: $,
                safeAreaInsetBottom: F
            } = e;
            return Nn(h("div", qe({
                ref: i,
                style: c.value,
                role: "dialog",
                tabindex: 0,
                class: [xa({round: P, [B]: B}), {
                    "van-safe-area-top": $,
                    "van-safe-area-bottom": F
                }],
                onKeydown: x
            }, n, fl()), [(S = o.default) == null ? void 0 : S.call(o), g()]), [[go, e.show]])
        }), E = () => {
            const {position: S, transition: P, transitionAppear: B} = e,
                $ = S === "center" ? "van-fade" : `van-popup-slide-${S}`;
            return h(rs, {
                name: P || $,
                appear: B,
                onAfterEnter: b,
                onAfterLeave: y
            }, {default: T})
        };
        return Ee(() => e.show, S => {
            S && !s && (u(), n.tabindex === 0 && Ge(() => {
                var P;
                (P = i.value) == null || P.focus()
            })), !S && s && (s = !1, t("close"))
        }), rt({popupRef: i}), f3(i, () => e.show && e.lockScroll), Vt("popstate", () => {
            e.closeOnPopstate && (d(), r = !1)
        }), ht(() => {
            e.show && u()
        }), wo(() => {
            r && (t("update:show", !0), r = !1)
        }), Co(() => {
            e.show && e.teleport && (d(), r = !0)
        }), Fn(zu, () => e.show), () => e.teleport ? h(Gl, {to: e.teleport}, {default: () => [m(), E()]}) : h(Fe, null, [m(), E()])
    }
});
const cs = he(y3), [w3, St] = le("action-sheet"), C3 = Ce({}, fr, {
    title: String,
    round: de,
    actions: Dt(),
    closeIcon: me("cross"),
    closeable: de,
    cancelText: String,
    description: String,
    closeOnPopstate: de,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: de
}), S3 = [...Gu, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var x3 = re({
    name: w3,
    props: C3,
    emits: ["select", "cancel", "update:show"],
    setup(e, {slots: t, emit: n}) {
        const o = d => n("update:show", d), s = () => {
                o(!1), n("cancel")
            }, r = () => {
                if (e.title) return h("div", {class: St("header")}, [e.title, e.closeable && h(Le, {
                    name: e.closeIcon,
                    class: [St("close"), Cn],
                    onClick: s
                }, null)])
            }, l = () => {
                if (t.cancel || e.cancelText) return [h("div", {class: St("gap")}, null), h("button", {
                    type: "button",
                    class: St("cancel"),
                    onClick: s
                }, [t.cancel ? t.cancel() : e.cancelText])]
            }, i = d => {
                if (d.icon) return h(Le, {
                    class: St("item-icon"),
                    name: d.icon
                }, null)
            },
            a = (d, f) => d.loading ? h(Eo, {class: St("loading-icon")}, null) : t.action ? t.action({
                action: d,
                index: f
            }) : [h("span", {class: St("name")}, [d.name]), d.subname && h("div", {class: St("subname")}, [d.subname])],
            c = (d, f) => {
                const {
                    color: m,
                    loading: p,
                    callback: g,
                    disabled: _,
                    className: b
                } = d, y = () => {
                    _ || p || (g && g(d), e.closeOnClickAction && o(!1), Ge(() => n("select", d, f)))
                };
                return h("button", {
                    type: "button",
                    style: {color: m},
                    class: [St("item", {loading: p, disabled: _}), b],
                    onClick: y
                }, [i(d), a(d, f)])
            }, u = () => {
                if (e.description || t.description) {
                    const d = t.description ? t.description() : e.description;
                    return h("div", {class: St("description")}, [d])
                }
            };
        return () => h(cs, qe({
            class: St(),
            position: "bottom",
            "onUpdate:show": o
        }, Pt(e, S3)), {
            default: () => {
                var d;
                return [r(), u(), h("div", {class: St("content")}, [e.actions.map(c), (d = t.default) == null ? void 0 : d.call(t)]), l()]
            }
        })
    }
});
const E3 = he(x3), [T3, Zt, Ea] = le("picker"),
    Yu = e => e.find(t => !t.disabled) || e[0];

function k3(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n)) return "multiple";
        if (t.children in n) return "cascade"
    }
    return "default"
}

function Ns(e, t) {
    t = po(t, 0, e.length);
    for (let n = t; n < e.length; n++) if (!e[n].disabled) return n;
    for (let n = t - 1; n >= 0; n--) if (!e[n].disabled) return n;
    return 0
}

const Ta = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

function hl(e, t, n) {
    const o = e.findIndex(r => r[n.value] === t), s = Ns(e, o);
    return e[s]
}

function A3(e, t, n) {
    const o = [];
    let s = {[t.children]: e}, r = 0;
    for (; s && s[t.children];) {
        const l = s[t.children], i = n.value[r];
        if (s = Xe(i) ? hl(l, i, t) : void 0, !s && l.length) {
            const a = Yu(l)[t.value];
            s = hl(l, a, t)
        }
        r++, o.push(l)
    }
    return o
}

function I3(e) {
    const {transform: t} = window.getComputedStyle(e),
        n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}

function P3(e) {
    return Ce({text: "text", value: "value", children: "children"}, e)
}

const ka = 200, Aa = 300, R3 = 15, [Xu, Fr] = le("picker-column"),
    Qu = Symbol(Xu);
var O3 = re({
    name: Xu,
    props: {
        value: te,
        fields: co(Object),
        options: Dt(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: co(Number),
        swipeDuration: co(te),
        visibleOptionNum: co(te)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {emit: t, slots: n}) {
        let o, s, r, l, i;
        const a = L(), c = L(), u = L(0), d = L(0), f = hr(),
            m = () => e.options.length,
            p = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2, g = F => {
                let I = Ns(e.options, F);
                const A = -I * e.optionHeight, H = () => {
                    I > m() - 1 && (I = Ns(e.options, F));
                    const Z = e.options[I][e.fields.value];
                    Z !== e.value && t("change", Z)
                };
                o && A !== u.value ? i = H : H(), u.value = A
            }, _ = () => e.readonly || !e.options.length, b = F => {
                o || _() || (i = null, d.value = ka, g(F), t("clickOption", e.options[F]))
            }, y = F => po(Math.round(-F / e.optionHeight), 0, m() - 1),
            x = J(() => y(u.value)), T = (F, I) => {
                const A = Math.abs(F / I);
                F = u.value + A / .003 * (F < 0 ? -1 : 1);
                const H = y(F);
                d.value = +e.swipeDuration, g(H)
            }, E = () => {
                o = !1, d.value = 0, i && (i(), i = null)
            }, S = F => {
                if (!_()) {
                    if (f.start(F), o) {
                        const I = I3(c.value);
                        u.value = Math.min(0, I - p())
                    }
                    d.value = 0, s = u.value, r = Date.now(), l = s, i = null
                }
            }, P = F => {
                if (_()) return;
                f.move(F), f.isVertical() && (o = !0, At(F, !0));
                const I = po(s + f.deltaY.value, -(m() * e.optionHeight), e.optionHeight),
                    A = y(I);
                A !== x.value && t("scrollInto", e.options[A]), u.value = I;
                const H = Date.now();
                H - r > Aa && (r = H, l = I)
            }, B = () => {
                if (_()) return;
                const F = u.value - l, I = Date.now() - r;
                if (I < Aa && Math.abs(F) > R3) {
                    T(F, I);
                    return
                }
                const H = y(u.value);
                d.value = ka, g(H), setTimeout(() => {
                    o = !1
                }, 0)
            }, $ = () => {
                const F = {height: `${e.optionHeight}px`};
                return e.options.map((I, A) => {
                    const H = I[e.fields.text], {disabled: Z} = I,
                        ae = I[e.fields.value], ne = {
                            role: "button",
                            style: F,
                            tabindex: Z ? -1 : 0,
                            class: [Fr("item", {
                                disabled: Z,
                                selected: ae === e.value
                            }), I.className],
                            onClick: () => b(A)
                        }, oe = {
                            class: "van-ellipsis",
                            [e.allowHtml ? "innerHTML" : "textContent"]: H
                        };
                    return h("li", ne, [n.option ? n.option(I, A) : h("div", oe, null)])
                })
            };
        return wt(Qu), rt({stopMomentum: E}), pn(() => {
            const F = o ? Math.floor(-u.value / e.optionHeight) : e.options.findIndex(H => H[e.fields.value] === e.value),
                I = Ns(e.options, F), A = -I * e.optionHeight;
            o && I < F && E(), u.value = A
        }), Vt("touchmove", P, {target: a}), () => h("div", {
            ref: a,
            class: Fr(),
            onTouchstartPassive: S,
            onTouchend: B,
            onTouchcancel: B
        }, [h("ul", {
            ref: c,
            style: {
                transform: `translate3d(0, ${u.value + p()}px, 0)`,
                transitionDuration: `${d.value}ms`,
                transitionProperty: d.value ? "all" : "none"
            },
            class: Fr("wrapper"),
            onTransitionend: E
        }, [$()])])
    }
});
const [$3] = le("picker-toolbar"),
    mr = {title: String, cancelButtonText: String, confirmButtonText: String},
    B3 = ["cancel", "confirm", "title", "toolbar"], L3 = Object.keys(mr);
var D3 = re({
    name: $3,
    props: mr,
    emits: ["confirm", "cancel"],
    setup(e, {emit: t, slots: n}) {
        const o = () => {
            if (n.title) return n.title();
            if (e.title) return h("div", {class: [Zt("title"), "van-ellipsis"]}, [e.title])
        }, s = () => t("cancel"), r = () => t("confirm"), l = () => {
            var a;
            const c = (a = e.cancelButtonText) != null ? a : Ea("cancel");
            if (!(!n.cancel && !c)) return h("button", {
                type: "button",
                class: [Zt("cancel"), Cn],
                onClick: s
            }, [n.cancel ? n.cancel() : c])
        }, i = () => {
            var a;
            const c = (a = e.confirmButtonText) != null ? a : Ea("confirm");
            if (!(!n.confirm && !c)) return h("button", {
                type: "button",
                class: [Zt("confirm"), Cn],
                onClick: r
            }, [n.confirm ? n.confirm() : c])
        };
        return () => h("div", {class: Zt("toolbar")}, [n.toolbar ? n.toolbar() : [l(), o(), i()]])
    }
});
let N3 = 0;

function ti() {
    const e = Wt(), {name: t = "unknown"} = (e == null ? void 0 : e.type) || {};
    return `${t}-${++N3}`
}

function F3() {
    const e = L([]), t = [];
    return ou(() => {
        e.value = []
    }), [e, o => (t[o] || (t[o] = s => {
        e.value[o] = s
    }), t[o])]
}

const [Zu, Es] = le("swipe"), V3 = {
    loop: de,
    width: te,
    height: te,
    vertical: Boolean,
    autoplay: Je(0),
    duration: Je(500),
    touchable: de,
    lazyRender: Boolean,
    initialSwipe: Je(0),
    indicatorColor: String,
    showIndicators: de,
    stopPropagation: de
}, e0 = Symbol(Zu);
var M3 = re({
    name: Zu,
    props: V3,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {emit: t, slots: n}) {
        const o = L(), s = L(), r = Me({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
        });
        let l = !1;
        const i = hr(), {children: a, linkChildren: c} = Ft(e0),
            u = J(() => a.length),
            d = J(() => r[e.vertical ? "height" : "width"]),
            f = J(() => e.vertical ? i.deltaY.value : i.deltaX.value),
            m = J(() => r.rect ? (e.vertical ? r.rect.height : r.rect.width) - d.value * u.value : 0),
            p = J(() => d.value ? Math.ceil(Math.abs(m.value) / d.value) : u.value),
            g = J(() => u.value * d.value),
            _ = J(() => (r.active + u.value) % u.value), b = J(() => {
                const ee = e.vertical ? "vertical" : "horizontal";
                return i.direction.value === ee
            }), y = J(() => {
                const ee = {
                    transitionDuration: `${r.swiping ? 0 : e.duration}ms`,
                    transform: `translate${e.vertical ? "Y" : "X"}(${+r.offset.toFixed(2)}px)`
                };
                if (d.value) {
                    const _e = e.vertical ? "height" : "width",
                        Te = e.vertical ? "width" : "height";
                    ee[_e] = `${g.value}px`, ee[Te] = e[Te] ? `${e[Te]}px` : ""
                }
                return ee
            }), x = ee => {
                const {active: _e} = r;
                return ee ? e.loop ? po(_e + ee, -1, u.value) : po(_e + ee, 0, p.value) : _e
            }, T = (ee, _e = 0) => {
                let Te = ee * d.value;
                e.loop || (Te = Math.min(Te, -m.value));
                let Ke = _e - Te;
                return e.loop || (Ke = po(Ke, m.value, 0)), Ke
            }, E = ({pace: ee = 0, offset: _e = 0, emitChange: Te}) => {
                if (u.value <= 1) return;
                const {active: Ke} = r, be = x(ee), $e = T(be, _e);
                if (e.loop) {
                    if (a[0] && $e !== m.value) {
                        const C = $e < m.value;
                        a[0].setOffset(C ? g.value : 0)
                    }
                    if (a[u.value - 1] && $e !== 0) {
                        const C = $e > 0;
                        a[u.value - 1].setOffset(C ? -g.value : 0)
                    }
                }
                r.active = be, r.offset = $e, Te && be !== Ke && t("change", _.value)
            }, S = () => {
                r.swiping = !0, r.active <= -1 ? E({pace: u.value}) : r.active >= u.value && E({pace: -u.value})
            }, P = () => {
                S(), i.reset(), Cs(() => {
                    r.swiping = !1, E({pace: -1, emitChange: !0})
                })
            }, B = () => {
                S(), i.reset(), Cs(() => {
                    r.swiping = !1, E({pace: 1, emitChange: !0})
                })
            };
        let $;
        const F = () => clearTimeout($), I = () => {
            F(), +e.autoplay > 0 && u.value > 1 && ($ = setTimeout(() => {
                B(), I()
            }, +e.autoplay))
        }, A = (ee = +e.initialSwipe) => {
            if (!o.value) return;
            const _e = () => {
                var Te, Ke;
                if (!ul(o)) {
                    const be = {
                        width: o.value.offsetWidth,
                        height: o.value.offsetHeight
                    };
                    r.rect = be, r.width = +((Te = e.width) != null ? Te : be.width), r.height = +((Ke = e.height) != null ? Ke : be.height)
                }
                u.value && (ee = Math.min(u.value - 1, ee), ee === -1 && (ee = u.value - 1)), r.active = ee, r.swiping = !0, r.offset = T(ee), a.forEach(be => {
                    be.setOffset(0)
                }), I()
            };
            ul(o) ? Ge().then(_e) : _e()
        }, H = () => A(r.active);
        let Z;
        const ae = ee => {
            !e.touchable || ee.touches.length > 1 || (i.start(ee), l = !1, Z = Date.now(), F(), S())
        }, ne = ee => {
            e.touchable && r.swiping && (i.move(ee), b.value && (!e.loop && (r.active === 0 && f.value > 0 || r.active === u.value - 1 && f.value < 0) || (At(ee, e.stopPropagation), E({offset: f.value}), l || (t("dragStart", {index: _.value}), l = !0))))
        }, oe = () => {
            if (!e.touchable || !r.swiping) return;
            const ee = Date.now() - Z, _e = f.value / ee;
            if ((Math.abs(_e) > .25 || Math.abs(f.value) > d.value / 2) && b.value) {
                const Ke = e.vertical ? i.offsetY.value : i.offsetX.value;
                let be = 0;
                e.loop ? be = Ke > 0 ? f.value > 0 ? -1 : 1 : 0 : be = -Math[f.value > 0 ? "ceil" : "floor"](f.value / d.value), E({
                    pace: be,
                    emitChange: !0
                })
            } else f.value && E({pace: 0});
            l = !1, r.swiping = !1, t("dragEnd", {index: _.value}), I()
        }, fe = (ee, _e = {}) => {
            S(), i.reset(), Cs(() => {
                let Te;
                e.loop && ee === u.value ? Te = r.active === 0 ? 0 : ee : Te = ee % u.value, _e.immediate ? Cs(() => {
                    r.swiping = !1
                }) : r.swiping = !1, E({pace: Te - r.active, emitChange: !0})
            })
        }, et = (ee, _e) => {
            const Te = _e === _.value,
                Ke = Te ? {backgroundColor: e.indicatorColor} : void 0;
            return h("i", {
                style: Ke,
                class: Es("indicator", {active: Te})
            }, null)
        }, lt = () => {
            if (n.indicator) return n.indicator({
                active: _.value,
                total: u.value
            });
            if (e.showIndicators && u.value > 1) return h("div", {class: Es("indicators", {vertical: e.vertical})}, [Array(u.value).fill("").map(et)])
        };
        return rt({
            prev: P,
            next: B,
            state: r,
            resize: H,
            swipeTo: fe
        }), c({
            size: d,
            props: e,
            count: u,
            activeIndicator: _
        }), Ee(() => e.initialSwipe, ee => A(+ee)), Ee(u, () => A(r.active)), Ee(() => e.autoplay, I), Ee([cr, ur, () => e.width, () => e.height], H), Ee(a2(), ee => {
            ee === "visible" ? I() : F()
        }), ht(A), wo(() => A(r.active)), qu(() => A(r.active)), Co(F), os(F), Vt("touchmove", ne, {target: s}), () => {
            var ee;
            return h("div", {ref: o, class: Es()}, [h("div", {
                ref: s,
                style: y.value,
                class: Es("track", {vertical: e.vertical}),
                onTouchstartPassive: ae,
                onTouchend: oe,
                onTouchcancel: oe
            }, [(ee = n.default) == null ? void 0 : ee.call(n)]), lt()])
        }
    }
});
const t0 = he(M3), j3 = Symbol(),
    U3 = () => it(j3, null), [H3, z3] = le("swipe-item");
var q3 = re({
    name: H3, setup(e, {slots: t}) {
        let n;
        const o = Me({offset: 0, inited: !1, mounted: !1}), {
            parent: s,
            index: r
        } = wt(e0);
        if (!s) return;
        const l = J(() => {
            const c = {}, {vertical: u} = s.props;
            return s.size.value && (c[u ? "height" : "width"] = `${s.size.value}px`), o.offset && (c.transform = `translate${u ? "Y" : "X"}(${o.offset}px)`), c
        }), i = J(() => {
            const {loop: c, lazyRender: u} = s.props;
            if (!u || n) return !0;
            if (!o.mounted) return !1;
            const d = s.activeIndicator.value, f = s.count.value - 1,
                m = d === 0 && c ? f : d - 1, p = d === f && c ? 0 : d + 1;
            return n = r.value === d || r.value === m || r.value === p, n
        }), a = c => {
            o.offset = c
        };
        return ht(() => {
            Ge(() => {
                o.mounted = !0
            })
        }), rt({setOffset: a}), () => {
            var c;
            return h("div", {
                class: z3(),
                style: l.value
            }, [i.value ? (c = t.default) == null ? void 0 : c.call(t) : null])
        }
    }
});
const n0 = he(q3), [K3, sy] = le("picker-group"), W3 = Symbol(K3);
Ce({tabs: Dt(), activeTab: Je(0), nextStepText: String, showToolbar: de}, mr);
const o0 = Ce({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: Je(44),
    showToolbar: de,
    swipeDuration: Je(1e3),
    visibleOptionNum: Je(6)
}, mr), G3 = Ce({}, o0, {
    columns: Dt(),
    modelValue: Dt(),
    toolbarPosition: me("top"),
    columnsFieldNames: Object
});
var J3 = re({
    name: T3,
    props: G3,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = L(), s = L(e.modelValue.slice(0)), {parent: r} = wt(W3), {
            children: l,
            linkChildren: i
        } = Ft(Qu);
        i();
        const a = J(() => P3(e.columnsFieldNames)),
            c = J(() => y2(e.optionHeight)),
            u = J(() => k3(e.columns, a.value)), d = J(() => {
                const {columns: I} = e;
                switch (u.value) {
                    case"multiple":
                        return I;
                    case"cascade":
                        return A3(I, a.value, s);
                    default:
                        return [I]
                }
            }), f = J(() => d.value.some(I => I.length)),
            m = J(() => d.value.map((I, A) => hl(I, s.value[A], a.value))),
            p = J(() => d.value.map((I, A) => I.findIndex(H => H[a.value.value] === s.value[A]))),
            g = (I, A) => {
                if (s.value[I] !== A) {
                    const H = s.value.slice(0);
                    H[I] = A, s.value = H
                }
            }, _ = () => ({
                selectedValues: s.value.slice(0),
                selectedOptions: m.value,
                selectedIndexes: p.value
            }), b = (I, A) => {
                g(A, I), u.value === "cascade" && s.value.forEach((H, Z) => {
                    const ae = d.value[Z];
                    Ta(ae, H, a.value) || g(Z, ae.length ? ae[0][a.value.value] : void 0)
                }), Ge(() => {
                    t("change", Ce({columnIndex: A}, _()))
                })
            }, y = (I, A) => {
                const H = {columnIndex: A, currentOption: I};
                t("clickOption", Ce(_(), H)), t("scrollInto", H)
            }, x = () => {
                l.forEach(A => A.stopMomentum());
                const I = _();
                return Ge(() => {
                    t("confirm", I)
                }), I
            }, T = () => t("cancel", _()), E = () => d.value.map((I, A) => h(O3, {
                value: s.value[A],
                fields: a.value,
                options: I,
                readonly: e.readonly,
                allowHtml: e.allowHtml,
                optionHeight: c.value,
                swipeDuration: e.swipeDuration,
                visibleOptionNum: e.visibleOptionNum,
                onChange: H => b(H, A),
                onClickOption: H => y(H, A),
                onScrollInto: H => {
                    t("scrollInto", {currentOption: H, columnIndex: A})
                }
            }, {option: n.option})), S = I => {
                if (f.value) {
                    const A = {height: `${c.value}px`},
                        H = {backgroundSize: `100% ${(I - c.value) / 2}px`};
                    return [h("div", {
                        class: Zt("mask"),
                        style: H
                    }, null), h("div", {class: [$2, Zt("frame")], style: A}, null)]
                }
            }, P = () => {
                const I = c.value * +e.visibleOptionNum, A = {height: `${I}px`};
                return h("div", {
                    ref: o,
                    class: Zt("columns"),
                    style: A
                }, [E(), S(I)])
            }, B = () => {
                if (e.showToolbar && !r) return h(D3, qe(Pt(e, L3), {
                    onConfirm: x,
                    onCancel: T
                }), Pt(n, B3))
            };
        Ee(d, I => {
            I.forEach((A, H) => {
                A.length && !Ta(A, s.value[H], a.value) && g(H, Yu(A)[a.value.value])
            })
        }, {immediate: !0});
        let $;
        return Ee(() => e.modelValue, I => {
            !Br(I, s.value) && !Br(I, $) && (s.value = I.slice(0), $ = I.slice(0))
        }, {deep: !0}), Ee(s, I => {
            Br(I, e.modelValue) || ($ = I.slice(0), t("update:modelValue", $))
        }, {immediate: !0}), Vt("touchmove", At, {target: o}), rt({
            confirm: x,
            getSelectedOptions: () => m.value
        }), () => {
            var I, A;
            return h("div", {class: Zt()}, [e.toolbarPosition === "top" ? B() : null, e.loading ? h(Eo, {class: Zt("loading")}, null) : null, (I = n["columns-top"]) == null ? void 0 : I.call(n), P(), (A = n["columns-bottom"]) == null ? void 0 : A.call(n), e.toolbarPosition === "bottom" ? B() : null])
        }
    }
});
const vo = "000000",
    Y3 = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"],
    s0 = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"],
    an = (e = "", t = vo, n = void 0) => ({text: e, value: t, children: n});

function X3({areaList: e, columnsNum: t, columnsPlaceholder: n}) {
    const {city_list: o = {}, county_list: s = {}, province_list: r = {}} = e,
        l = +t > 1, i = +t > 2, a = () => {
            if (l) return n.length > 1 ? [an(n[1], vo, i ? [] : void 0)] : []
        }, c = new Map;
    Object.keys(r).forEach(f => {
        c.set(f.slice(0, 2), an(r[f], f, a()))
    });
    const u = new Map;
    if (l) {
        const f = () => {
            if (i) return n.length > 2 ? [an(n[2])] : []
        };
        Object.keys(o).forEach(m => {
            const p = an(o[m], m, f());
            u.set(m.slice(0, 4), p);
            const g = c.get(m.slice(0, 2));
            g && g.children.push(p)
        })
    }
    i && Object.keys(s).forEach(f => {
        const m = u.get(f.slice(0, 4));
        m && m.children.push(an(s[f], f))
    });
    const d = Array.from(c.values());
    if (n.length) {
        const f = i ? [an(n[2])] : void 0, m = l ? [an(n[1], vo, f)] : void 0;
        d.unshift(an(n[0], vo, m))
    }
    return d
}

const Q3 = he(J3), [Z3, eh] = le("area"), th = Ce({}, Pt(o0, s0), {
    modelValue: String,
    columnsNum: Je(3),
    columnsPlaceholder: Dt(),
    areaList: {type: Object, default: () => ({})}
});
var nh = re({
    name: Z3,
    props: th,
    emits: ["change", "confirm", "cancel", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = L([]), s = L(), r = J(() => X3(e)),
            l = (...c) => t("change", ...c), i = (...c) => t("cancel", ...c),
            a = (...c) => t("confirm", ...c);
        return Ee(o, c => {
            const u = c.length ? c[c.length - 1] : "";
            u && u !== e.modelValue && t("update:modelValue", u)
        }, {deep: !0}), Ee(() => e.modelValue, c => {
            if (c) {
                const u = o.value.length ? o.value[o.value.length - 1] : "";
                c !== u && (o.value = [`${c.slice(0, 2)}0000`, `${c.slice(0, 4)}00`, c].slice(0, +e.columnsNum))
            } else o.value = []
        }, {immediate: !0}), rt({
            confirm: () => {
                var c;
                return (c = s.value) == null ? void 0 : c.confirm()
            }, getSelectedOptions: () => {
                var c;
                return ((c = s.value) == null ? void 0 : c.getSelectedOptions()) || []
            }
        }), () => h(Q3, qe({
            ref: s,
            modelValue: o.value,
            "onUpdate:modelValue": c => o.value = c,
            class: eh(),
            columns: r.value,
            onChange: l,
            onCancel: i,
            onConfirm: a
        }, Pt(e, s0)), Pt(n, Y3))
    }
});
const oh = he(nh), [sh, to] = le("cell"), r0 = {
    tag: me("div"),
    icon: String,
    size: String,
    title: te,
    value: te,
    label: te,
    center: Boolean,
    isLink: Boolean,
    border: de,
    iconPrefix: String,
    valueClass: st,
    labelClass: st,
    titleClass: st,
    titleStyle: null,
    arrowDirection: String,
    required: {type: [Boolean, String], default: null},
    clickable: {type: Boolean, default: null}
}, rh = Ce({}, r0, Jn);
var lh = re({
    name: sh, props: rh, setup(e, {slots: t}) {
        const n = Yn(), o = () => {
            if (t.label || Xe(e.label)) return h("div", {class: [to("label"), e.labelClass]}, [t.label ? t.label() : e.label])
        }, s = () => {
            var a;
            if (t.title || Xe(e.title)) {
                const c = (a = t.title) == null ? void 0 : a.call(t);
                return Array.isArray(c) && c.length === 0 ? void 0 : h("div", {
                    class: [to("title"), e.titleClass],
                    style: e.titleStyle
                }, [c || h("span", null, [e.title]), o()])
            }
        }, r = () => {
            const a = t.value || t.default;
            if (a || Xe(e.value)) return h("div", {class: [to("value"), e.valueClass]}, [a ? a() : h("span", null, [e.value])])
        }, l = () => {
            if (t.icon) return t.icon();
            if (e.icon) return h(Le, {
                name: e.icon,
                class: to("left-icon"),
                classPrefix: e.iconPrefix
            }, null)
        }, i = () => {
            if (t["right-icon"]) return t["right-icon"]();
            if (e.isLink) {
                const a = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                return h(Le, {name: a, class: to("right-icon")}, null)
            }
        };
        return () => {
            var a;
            const {
                    tag: c,
                    size: u,
                    center: d,
                    border: f,
                    isLink: m,
                    required: p
                } = e, g = (a = e.clickable) != null ? a : m,
                _ = {center: d, required: !!p, clickable: g, borderless: !f};
            return u && (_[u] = !!u), h(c, {
                class: to(_),
                role: g ? "button" : void 0,
                tabindex: g ? 0 : void 0,
                onClick: n
            }, {
                default: () => {
                    var b;
                    return [l(), s(), r(), i(), (b = t.extra) == null ? void 0 : b.call(t)]
                }
            })
        }
    }
});
const Xn = he(lh), [ih, ah] = le("form"), ch = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: te,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: de,
    showErrorMessage: de,
    errorMessageAlign: String,
    validateTrigger: {type: [String, Array], default: "onBlur"}
};
var uh = re({
    name: ih,
    props: ch,
    emits: ["submit", "failed"],
    setup(e, {emit: t, slots: n}) {
        const {children: o, linkChildren: s} = Ft(Hu),
            r = _ => _ ? o.filter(b => _.includes(b.name)) : o,
            l = _ => new Promise((b, y) => {
                const x = [];
                r(_).reduce((E, S) => E.then(() => {
                    if (!x.length) return S.validate().then(P => {
                        P && x.push(P)
                    })
                }), Promise.resolve()).then(() => {
                    x.length ? y(x) : b()
                })
            }), i = _ => new Promise((b, y) => {
                const x = r(_);
                Promise.all(x.map(T => T.validate())).then(T => {
                    T = T.filter(Boolean), T.length ? y(T) : b()
                })
            }), a = _ => {
                const b = o.find(y => y.name === _);
                return b ? new Promise((y, x) => {
                    b.validate().then(T => {
                        T ? x(T) : y()
                    })
                }) : Promise.reject()
            }, c = _ => typeof _ == "string" ? a(_) : e.validateFirst ? l(_) : i(_),
            u = _ => {
                typeof _ == "string" && (_ = [_]), r(_).forEach(y => {
                    y.resetValidation()
                })
            },
            d = () => o.reduce((_, b) => (_[b.name] = b.getValidationStatus(), _), {}),
            f = (_, b) => {
                o.some(y => y.name === _ ? (y.$el.scrollIntoView(b), !0) : !1)
            },
            m = () => o.reduce((_, b) => (b.name !== void 0 && (_[b.name] = b.formValue.value), _), {}),
            p = () => {
                const _ = m();
                c().then(() => t("submit", _)).catch(b => {
                    t("failed", {
                        values: _,
                        errors: b
                    }), e.scrollToError && b[0].name && f(b[0].name)
                })
            }, g = _ => {
                At(_), p()
            };
        return s({props: e}), rt({
            submit: p,
            validate: c,
            getValues: m,
            scrollToField: f,
            resetValidation: u,
            getValidationStatus: d
        }), () => {
            var _;
            return h("form", {
                class: ah(),
                onSubmit: g
            }, [(_ = n.default) == null ? void 0 : _.call(n)])
        }
    }
});
const dh = he(uh);

function l0(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function fh(e, t) {
    if (l0(e)) {
        if (t.required) return !1;
        if (t.validateEmpty === !1) return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}

function hh(e, t) {
    return new Promise(n => {
        const o = t.validator(e, t);
        if (Pu(o)) {
            o.then(n);
            return
        }
        n(o)
    })
}

function Ia(e, t) {
    const {message: n} = t;
    return Zo(n) ? n(e, t) : n || ""
}

function mh({target: e}) {
    e.composing = !0
}

function Pa({target: e}) {
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

function gh(e, t) {
    const n = Nu();
    e.style.height = "auto";
    let o = e.scrollHeight;
    if (Wn(t)) {
        const {maxHeight: s, minHeight: r} = t;
        s !== void 0 && (o = Math.min(o, s)), r !== void 0 && (o = Math.max(o, r))
    }
    o && (e.style.height = `${o}px`, Fu(n))
}

function ph(e) {
    return e === "number" ? {
        type: "text",
        inputmode: "decimal"
    } : e === "digit" ? {type: "tel", inputmode: "numeric"} : {type: e}
}

function Jt(e) {
    return [...e].length
}

function Vr(e, t) {
    return [...e].slice(0, t).join("")
}

const [vh, xt] = le("field"), ni = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: te,
    formatter: Function,
    clearIcon: me("clear"),
    modelValue: Je(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: me("focus"),
    formatTrigger: me("onChange"),
    spellcheck: {type: Boolean, default: null},
    error: {type: Boolean, default: null},
    disabled: {type: Boolean, default: null},
    readonly: {type: Boolean, default: null}
}, _h = Ce({}, r0, ni, {
    rows: te,
    type: me("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: te,
    labelClass: st,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {type: Boolean, default: null}
});
var bh = re({
    name: vh,
    props: _h,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = ti(),
            s = Me({status: "unvalidated", focused: !1, validateMessage: ""}),
            r = L(), l = L(), i = L(), {parent: a} = wt(Hu), c = () => {
                var C;
                return String((C = e.modelValue) != null ? C : "")
            }, u = C => {
                if (Xe(e[C])) return e[C];
                if (a && Xe(a.props[C])) return a.props[C]
            }, d = J(() => {
                const C = u("readonly");
                if (e.clearable && !C) {
                    const U = c() !== "",
                        M = e.clearTrigger === "always" || e.clearTrigger === "focus" && s.focused;
                    return U && M
                }
                return !1
            }), f = J(() => i.value && n.input ? i.value() : e.modelValue),
            m = J(() => {
                var C;
                const U = u("required");
                return U === "auto" ? (C = e.rules) == null ? void 0 : C.some(M => M.required) : U
            }), p = C => C.reduce((U, M) => U.then(() => {
                if (s.status === "failed") return;
                let {value: W} = f;
                if (M.formatter && (W = M.formatter(W, M)), !fh(W, M)) {
                    s.status = "failed", s.validateMessage = Ia(W, M);
                    return
                }
                if (M.validator) return l0(W) && M.validateEmpty === !1 ? void 0 : hh(W, M).then(ue => {
                    ue && typeof ue == "string" ? (s.status = "failed", s.validateMessage = ue) : ue === !1 && (s.status = "failed", s.validateMessage = Ia(W, M))
                })
            }), Promise.resolve()), g = () => {
                s.status = "unvalidated", s.validateMessage = ""
            }, _ = () => t("endValidate", {
                status: s.status,
                message: s.validateMessage
            }), b = (C = e.rules) => new Promise(U => {
                g(), C ? (t("startValidate"), p(C).then(() => {
                    s.status === "failed" ? (U({
                        name: e.name,
                        message: s.validateMessage
                    }), _()) : (s.status = "passed", U(), _())
                })) : U()
            }), y = C => {
                if (a && e.rules) {
                    const {validateTrigger: U} = a.props, M = ua(U).includes(C),
                        W = e.rules.filter(ue => ue.trigger ? ua(ue.trigger).includes(C) : M);
                    W.length && b(W)
                }
            }, x = C => {
                var U;
                const {maxlength: M} = e;
                if (Xe(M) && Jt(C) > +M) {
                    const W = c();
                    if (W && Jt(W) === +M) return W;
                    const ue = (U = r.value) == null ? void 0 : U.selectionEnd;
                    if (s.focused && ue) {
                        const we = [...C], v = we.length - +M;
                        return we.splice(ue - v, v), we.join("")
                    }
                    return Vr(C, +M)
                }
                return C
            }, T = (C, U = "onChange") => {
                const M = C;
                C = x(C);
                const W = Jt(M) - Jt(C);
                if (e.type === "number" || e.type === "digit") {
                    const we = e.type === "number";
                    C = C2(C, we, we)
                }
                let ue = 0;
                if (e.formatter && U === e.formatTrigger) {
                    const {formatter: we, maxlength: v} = e;
                    if (C = we(C), Xe(v) && Jt(C) > +v && (C = Vr(C, +v)), r.value && s.focused) {
                        const {selectionEnd: w} = r.value, k = Vr(M, w);
                        ue = Jt(we(k)) - Jt(k)
                    }
                }
                if (r.value && r.value.value !== C) if (s.focused) {
                    let {selectionStart: we, selectionEnd: v} = r.value;
                    if (r.value.value = C, Xe(we) && Xe(v)) {
                        const w = Jt(C);
                        W ? (we -= W, v -= W) : ue && (we += ue, v += ue), r.value.setSelectionRange(Math.min(we, w), Math.min(v, w))
                    }
                } else r.value.value = C;
                C !== e.modelValue && t("update:modelValue", C)
            }, E = C => {
                C.target.composing || T(C.target.value)
            }, S = () => {
                var C;
                return (C = r.value) == null ? void 0 : C.blur()
            }, P = () => {
                var C;
                return (C = r.value) == null ? void 0 : C.focus()
            }, B = () => {
                const C = r.value;
                e.type === "textarea" && e.autosize && C && gh(C, e.autosize)
            }, $ = C => {
                s.focused = !0, t("focus", C), Ge(B), u("readonly") && S()
            }, F = C => {
                s.focused = !1, T(c(), "onBlur"), t("blur", C), !u("readonly") && (y("onBlur"), Ge(B), d2())
            }, I = C => t("clickInput", C), A = C => t("clickLeftIcon", C),
            H = C => t("clickRightIcon", C), Z = C => {
                At(C), t("update:modelValue", ""), t("clear", C)
            }, ae = J(() => {
                if (typeof e.error == "boolean") return e.error;
                if (a && a.props.showError && s.status === "failed") return !0
            }), ne = J(() => {
                const C = u("labelWidth"), U = u("labelAlign");
                if (C && U !== "top") return {width: Ve(C)}
            }), oe = C => {
                C.keyCode === 13 && (!(a && a.props.submitOnEnter) && e.type !== "textarea" && At(C), e.type === "search" && S()), t("keypress", C)
            }, fe = () => e.id || `${o}-input`, et = () => s.status, lt = () => {
                const C = xt("control", [u("inputAlign"), {
                    error: ae.value,
                    custom: !!n.input,
                    "min-height": e.type === "textarea" && !e.autosize
                }]);
                if (n.input) return h("div", {class: C, onClick: I}, [n.input()]);
                const U = {
                    id: fe(),
                    ref: r,
                    name: e.name,
                    rows: e.rows !== void 0 ? +e.rows : void 0,
                    class: C,
                    disabled: u("disabled"),
                    readonly: u("readonly"),
                    autofocus: e.autofocus,
                    placeholder: e.placeholder,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    enterkeyhint: e.enterkeyhint,
                    spellcheck: e.spellcheck,
                    "aria-labelledby": e.label ? `${o}-label` : void 0,
                    onBlur: F,
                    onFocus: $,
                    onInput: E,
                    onClick: I,
                    onChange: Pa,
                    onKeypress: oe,
                    onCompositionend: Pa,
                    onCompositionstart: mh
                };
                return e.type === "textarea" ? h("textarea", U, null) : h("input", qe(ph(e.type), U), null)
            }, ee = () => {
                const C = n["left-icon"];
                if (e.leftIcon || C) return h("div", {
                    class: xt("left-icon"),
                    onClick: A
                }, [C ? C() : h(Le, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            }, _e = () => {
                const C = n["right-icon"];
                if (e.rightIcon || C) return h("div", {
                    class: xt("right-icon"),
                    onClick: H
                }, [C ? C() : h(Le, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            }, Te = () => {
                if (e.showWordLimit && e.maxlength) {
                    const C = Jt(c());
                    return h("div", {class: xt("word-limit")}, [h("span", {class: xt("word-num")}, [C]), ke("/"), e.maxlength])
                }
            }, Ke = () => {
                if (a && a.props.showErrorMessage === !1) return;
                const C = e.errorMessage || s.validateMessage;
                if (C) {
                    const U = n["error-message"], M = u("errorMessageAlign");
                    return h("div", {class: xt("error-message", M)}, [U ? U({message: C}) : C])
                }
            }, be = () => {
                const C = u("labelWidth"), U = u("labelAlign"),
                    M = u("colon") ? ":" : "";
                if (n.label) return [n.label(), M];
                if (e.label) return h("label", {
                    id: `${o}-label`,
                    for: n.input ? void 0 : fe(),
                    onClick: W => {
                        At(W), P()
                    },
                    style: U === "top" && C ? {width: Ve(C)} : void 0
                }, [e.label + M])
            }, $e = () => [h("div", {class: xt("body")}, [lt(), d.value && h(Le, {
                ref: l,
                name: e.clearIcon,
                class: xt("clear")
            }, null), _e(), n.button && h("div", {class: xt("button")}, [n.button()])]), Te(), Ke()];
        return rt({
            blur: S,
            focus: P,
            validate: b,
            formValue: f,
            resetValidation: g,
            getValidationStatus: et
        }), Fn(Du, {
            customValue: i,
            resetValidation: g,
            validateWithTrigger: y
        }), Ee(() => e.modelValue, () => {
            T(c()), g(), y("onChange"), Ge(B)
        }), ht(() => {
            T(c(), e.formatTrigger), Ge(B)
        }), Vt("touchstart", Z, {
            target: J(() => {
                var C;
                return (C = l.value) == null ? void 0 : C.$el
            })
        }), () => {
            const C = u("disabled"), U = u("labelAlign"), M = ee(), W = () => {
                const ue = be();
                return U === "top" ? [M, ue].filter(Boolean) : ue || []
            };
            return h(Xn, {
                size: e.size,
                class: xt({error: ae.value, disabled: C, [`label-${U}`]: U}),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: ne.value,
                valueClass: xt("value"),
                titleClass: [xt("label", [U, {required: m.value}]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: M && U !== "top" ? () => M : null,
                title: W,
                value: $e,
                extra: n.extra
            })
        }
    }
});
const Vn = he(bh);
let $o = 0;

function yh(e) {
    e ? ($o || document.body.classList.add("van-toast--unclickable"), $o++) : $o && ($o--, $o || document.body.classList.remove("van-toast--unclickable"))
}

const [wh, no] = le("toast"),
    Ch = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"],
    Sh = {
        icon: String,
        show: Boolean,
        type: me("text"),
        overlay: Boolean,
        message: te,
        iconSize: te,
        duration: Ou(2e3),
        position: me("middle"),
        teleport: [String, Object],
        wordBreak: String,
        className: st,
        iconPrefix: String,
        transition: me("van-fade"),
        loadingType: String,
        forbidClick: Boolean,
        overlayClass: st,
        overlayStyle: Object,
        closeOnClick: Boolean,
        closeOnClickOverlay: Boolean,
        zIndex: te
    };
var i0 = re({
    name: wh, props: Sh, emits: ["update:show"], setup(e, {emit: t, slots: n}) {
        let o, s = !1;
        const r = () => {
            const d = e.show && e.forbidClick;
            s !== d && (s = d, yh(s))
        }, l = d => t("update:show", d), i = () => {
            e.closeOnClick && l(!1)
        }, a = () => clearTimeout(o), c = () => {
            const {
                icon: d,
                type: f,
                iconSize: m,
                iconPrefix: p,
                loadingType: g
            } = e;
            if (d || f === "success" || f === "fail") return h(Le, {
                name: d || f,
                size: m,
                class: no("icon"),
                classPrefix: p
            }, null);
            if (f === "loading") return h(Eo, {
                class: no("loading"),
                size: m,
                type: g
            }, null)
        }, u = () => {
            const {type: d, message: f} = e;
            if (n.message) return h("div", {class: no("text")}, [n.message()]);
            if (Xe(f) && f !== "") return d === "html" ? h("div", {
                key: 0,
                class: no("text"),
                innerHTML: String(f)
            }, null) : h("div", {class: no("text")}, [f])
        };
        return Ee(() => [e.show, e.forbidClick], r), Ee(() => [e.show, e.type, e.message, e.duration], () => {
            a(), e.show && e.duration > 0 && (o = setTimeout(() => {
                l(!1)
            }, e.duration))
        }), ht(r), yo(r), () => h(cs, qe({
            class: [no([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {[e.type]: !e.icon}]), e.className],
            lockScroll: !1,
            onClick: i,
            onClosed: a,
            "onUpdate:show": l
        }, Pt(e, Ch)), {default: () => [c(), u()]})
    }
});

function a0() {
    const e = Me({show: !1}), t = s => {
        e.show = s
    }, n = s => {
        Ce(e, s, {transitionAppear: !0}), t(!0)
    }, o = () => t(!1);
    return rt({open: n, close: o, toggle: t}), {
        open: n,
        close: o,
        state: e,
        toggle: t
    }
}

function c0(e) {
    const t = Iu(e), n = document.createElement("div");
    return document.body.appendChild(n), {
        instance: t.mount(n), unmount() {
            t.unmount(), document.body.removeChild(n)
        }
    }
}

const xh = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let Rn = [], Eh = !1, Ra = Ce({}, xh);
const Th = new Map;

function u0(e) {
    return Wn(e) ? e : {message: e}
}

function kh() {
    const {instance: e, unmount: t} = c0({
        setup() {
            const n = L(""), {open: o, state: s, close: r, toggle: l} = a0(),
                i = () => {
                },
                a = () => h(i0, qe(s, {onClosed: i, "onUpdate:show": l}), null);
            return Ee(n, c => {
                s.message = c
            }), Wt().render = a, {open: o, close: r, message: n}
        }
    });
    return e
}

function Ah() {
    if (!Rn.length || Eh) {
        const e = kh();
        Rn.push(e)
    }
    return Rn[Rn.length - 1]
}

function Un(e = {}) {
    if (!So) return {};
    const t = Ah(), n = u0(e);
    return t.open(Ce({}, Ra, Th.get(n.type || Ra.type), n)), t
}

const oi = e => t => Un(Ce({type: e}, u0(t))), Ih = oi("loading"),
    Ho = oi("success"), ml = oi("fail"), Ph = e => {
        Rn.length && (Rn.forEach(t => {
            t.close()
        }), Rn = [])
    };
he(i0);
const [Rh, Mr] = le("switch"), Oh = {
    size: te,
    loading: Boolean,
    disabled: Boolean,
    modelValue: st,
    activeColor: String,
    inactiveColor: String,
    activeValue: {type: st, default: !0},
    inactiveValue: {type: st, default: !1}
};
var $h = re({
    name: Rh,
    props: Oh,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = () => e.modelValue === e.activeValue, s = () => {
            if (!e.disabled && !e.loading) {
                const l = o() ? e.inactiveValue : e.activeValue;
                t("update:modelValue", l), t("change", l)
            }
        }, r = () => {
            if (e.loading) {
                const l = o() ? e.activeColor : e.inactiveColor;
                return h(Eo, {class: Mr("loading"), color: l}, null)
            }
            if (n.node) return n.node()
        };
        return ls(() => e.modelValue), () => {
            var l;
            const {
                size: i,
                loading: a,
                disabled: c,
                activeColor: u,
                inactiveColor: d
            } = e, f = o(), m = {fontSize: Ve(i), backgroundColor: f ? u : d};
            return h("div", {
                role: "switch",
                class: Mr({on: f, loading: a, disabled: c}),
                style: m,
                tabindex: c ? void 0 : 0,
                "aria-checked": f,
                onClick: s
            }, [h("div", {class: Mr("node")}, [r()]), (l = n.background) == null ? void 0 : l.call(n)])
        }
    }
});
const Bh = he($h), [Lh, Oa] = le("address-edit-detail"),
    $a = le("address-edit")[2];
var Dh = re({
    name: Lh,
    props: {
        show: Boolean,
        rows: te,
        value: String,
        rules: Array,
        focused: Boolean,
        maxlength: te,
        searchResult: Array,
        showSearchResult: Boolean
    },
    emits: ["blur", "focus", "input", "selectSearch"],
    setup(e, {emit: t}) {
        const n = L(),
            o = () => e.focused && e.searchResult && e.showSearchResult,
            s = c => {
                t("selectSearch", c), t("input", `${c.address || ""} ${c.name || ""}`.trim())
            }, r = () => {
                if (!o()) return;
                const {searchResult: c} = e;
                return c.map(u => h(Xn, {
                    clickable: !0,
                    key: (u.name || "") + (u.address || ""),
                    icon: "location-o",
                    title: u.name,
                    label: u.address,
                    class: Oa("search-item"),
                    border: !1,
                    onClick: () => s(u)
                }, null))
            }, l = c => t("blur", c), i = c => t("focus", c),
            a = c => t("input", c);
        return () => {
            if (e.show) return h(Fe, null, [h(Vn, {
                autosize: !0,
                clearable: !0,
                ref: n,
                class: Oa(),
                rows: e.rows,
                type: "textarea",
                rules: e.rules,
                label: $a("addressDetail"),
                border: !o(),
                maxlength: e.maxlength,
                modelValue: e.value,
                placeholder: $a("addressDetail"),
                onBlur: l,
                onFocus: i,
                "onUpdate:modelValue": a
            }, null), r()])
        }
    }
});
const [Nh, oo, ut] = le("address-edit"), d0 = {
    name: "",
    tel: "",
    city: "",
    county: "",
    country: "",
    province: "",
    areaCode: "",
    isDefault: !1,
    addressDetail: ""
}, Fh = {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showArea: de,
    showDetail: de,
    showDelete: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: te,
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    detailRows: Je(1),
    detailMaxlength: Je(200),
    areaColumnsPlaceholder: Dt(),
    addressInfo: {type: Object, default: () => Ce({}, d0)},
    telValidator: {type: Function, default: Z1}
};
var Vh = re({
    name: Nh,
    props: Fh,
    emits: ["save", "focus", "change", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
    setup(e, {emit: t, slots: n}) {
        const o = L(), s = Me({}), r = L(!1), l = L(!1),
            i = J(() => Wn(e.areaList) && Object.keys(e.areaList).length),
            a = J(() => {
                const {province: S, city: P, county: B, areaCode: $} = s;
                if ($) {
                    const F = [S, P, B];
                    return S && S === P && F.splice(1, 1), F.filter(Boolean).join("/")
                }
                return ""
            }), c = J(() => {
                var S;
                return ((S = e.searchResult) == null ? void 0 : S.length) && l.value
            }), u = S => {
                l.value = S === "addressDetail", t("focus", S)
            }, d = (S, P) => {
                t("change", {key: S, value: P})
            }, f = J(() => {
                const {validator: S, telValidator: P} = e, B = ($, F) => ({
                    validator: I => {
                        if (S) {
                            const A = S($, I);
                            if (A) return A
                        }
                        return I ? !0 : F
                    }
                });
                return {
                    name: [B("name", ut("nameEmpty"))],
                    tel: [B("tel", ut("telInvalid")), {
                        validator: P,
                        message: ut("telInvalid")
                    }],
                    areaCode: [B("areaCode", ut("areaEmpty"))],
                    addressDetail: [B("addressDetail", ut("addressEmpty"))]
                }
            }), m = () => t("save", s), p = S => {
                s.addressDetail = S, t("changeDetail", S)
            }, g = S => {
                s.province = S[0].text, s.city = S[1].text, s.county = S[2].text
            }, _ = ({selectedValues: S, selectedOptions: P}) => {
                S.some(B => B === vo) ? Un(ut("areaEmpty")) : (r.value = !1, g(P), t("changeArea", P))
            }, b = () => t("delete", s), y = S => {
                s.areaCode = S || ""
            }, x = () => {
                setTimeout(() => {
                    l.value = !1
                })
            }, T = S => {
                s.addressDetail = S
            }, E = () => {
                if (e.showSetDefault) {
                    const S = {
                        "right-icon": () => h(Bh, {
                            modelValue: s.isDefault,
                            "onUpdate:modelValue": P => s.isDefault = P,
                            onChange: P => t("changeDefault", P)
                        }, null)
                    };
                    return Nn(h(Xn, {
                        center: !0,
                        border: !1,
                        title: ut("defaultAddress"),
                        class: oo("default")
                    }, S), [[go, !c.value]])
                }
            };
        return rt({
            setAreaCode: y,
            setAddressDetail: T
        }), Ee(() => e.addressInfo, S => {
            Ce(s, d0, S), Ge(() => {
                var P;
                const B = (P = o.value) == null ? void 0 : P.getSelectedOptions();
                B && B.every($ => $ && $.value !== vo) && g(B)
            })
        }, {deep: !0, immediate: !0}), () => {
            const {disableArea: S} = e;
            return h(dh, {class: oo(), onSubmit: m}, {
                default: () => {
                    var P;
                    return [h("div", {class: oo("fields")}, [h(Vn, {
                        modelValue: s.name,
                        "onUpdate:modelValue": [B => s.name = B, B => d("name", B)],
                        clearable: !0,
                        label: ut("name"),
                        rules: f.value.name,
                        placeholder: ut("name"),
                        onFocus: () => u("name")
                    }, null), h(Vn, {
                        modelValue: s.tel,
                        "onUpdate:modelValue": [B => s.tel = B, B => d("tel", B)],
                        clearable: !0,
                        type: "tel",
                        label: ut("tel"),
                        rules: f.value.tel,
                        maxlength: e.telMaxlength,
                        placeholder: ut("tel"),
                        onFocus: () => u("tel")
                    }, null), Nn(h(Vn, {
                        readonly: !0,
                        label: ut("area"),
                        "is-link": !S,
                        modelValue: a.value,
                        rules: e.showArea ? f.value.areaCode : void 0,
                        placeholder: e.areaPlaceholder || ut("area"),
                        onFocus: () => u("areaCode"),
                        onClick: () => {
                            t("clickArea"), r.value = !S
                        }
                    }, null), [[go, e.showArea]]), h(Dh, {
                        show: e.showDetail,
                        rows: e.detailRows,
                        rules: f.value.addressDetail,
                        value: s.addressDetail,
                        focused: l.value,
                        maxlength: e.detailMaxlength,
                        searchResult: e.searchResult,
                        showSearchResult: e.showSearchResult,
                        onBlur: x,
                        onFocus: () => u("addressDetail"),
                        onInput: p,
                        onSelectSearch: B => t("selectSearch", B)
                    }, null), (P = n.default) == null ? void 0 : P.call(n)]), E(), Nn(h("div", {class: oo("buttons")}, [h(vt, {
                        block: !0,
                        round: !0,
                        type: "primary",
                        text: e.saveButtonText || ut("save"),
                        class: oo("button"),
                        loading: e.isSaving,
                        nativeType: "submit"
                    }, null), e.showDelete && h(vt, {
                        block: !0,
                        round: !0,
                        class: oo("button"),
                        loading: e.isDeleting,
                        text: e.deleteButtonText || ut("delete"),
                        onClick: b
                    }, null)]), [[go, !c.value]]), h(cs, {
                        show: r.value,
                        "onUpdate:show": B => r.value = B,
                        round: !0,
                        teleport: "body",
                        position: "bottom",
                        lazyRender: !1
                    }, {
                        default: () => [h(oh, {
                            modelValue: s.areaCode,
                            "onUpdate:modelValue": B => s.areaCode = B,
                            ref: o,
                            loading: !i.value,
                            areaList: e.areaList,
                            columnsPlaceholder: e.areaColumnsPlaceholder,
                            onConfirm: _,
                            onCancel: () => {
                                r.value = !1
                            }
                        }, null)]
                    })]
                }
            })
        }
    }
});
const Mh = he(Vh), [f0, jh] = le("radio-group"), Uh = {
    shape: String,
    disabled: Boolean,
    iconSize: te,
    direction: String,
    modelValue: st,
    checkedColor: String
}, h0 = Symbol(f0);
var Hh = re({
    name: f0,
    props: Uh,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = Ft(h0), s = r => t("update:modelValue", r);
        return Ee(() => e.modelValue, r => t("change", r)), o({
            props: e,
            updateValue: s
        }), ls(() => e.modelValue), () => {
            var r;
            return h("div", {
                class: jh([e.direction]),
                role: "radiogroup"
            }, [(r = n.default) == null ? void 0 : r.call(n)])
        }
    }
});
const zh = he(Hh), [m0, qh] = le("checkbox-group"), Kh = {
    max: te,
    shape: me("round"),
    disabled: Boolean,
    iconSize: te,
    direction: String,
    modelValue: Dt(),
    checkedColor: String
}, g0 = Symbol(m0);
var Wh = re({
    name: m0,
    props: Kh,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {children: o, linkChildren: s} = Ft(g0),
            r = i => t("update:modelValue", i), l = (i = {}) => {
                typeof i == "boolean" && (i = {checked: i});
                const {checked: a, skipDisabled: c} = i,
                    d = o.filter(f => f.props.bindGroup ? f.props.disabled && c ? f.checked.value : a ?? !f.checked.value : !1).map(f => f.name);
                r(d)
            };
        return Ee(() => e.modelValue, i => t("change", i)), rt({toggleAll: l}), ls(() => e.modelValue), s({
            props: e,
            updateValue: r
        }), () => {
            var i;
            return h("div", {class: qh([e.direction])}, [(i = n.default) == null ? void 0 : i.call(n)])
        }
    }
});
const Gh = he(Wh), [Jh, Ba] = le("tag"), Yh = {
    size: String,
    mark: Boolean,
    show: de,
    type: me("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
};
var Xh = re({
    name: Jh,
    props: Yh,
    emits: ["close"],
    setup(e, {slots: t, emit: n}) {
        const o = l => {
            l.stopPropagation(), n("close", l)
        }, s = () => e.plain ? {
            color: e.textColor || e.color,
            borderColor: e.color
        } : {color: e.textColor, background: e.color}, r = () => {
            var l;
            const {
                type: i,
                mark: a,
                plain: c,
                round: u,
                size: d,
                closeable: f
            } = e, m = {mark: a, plain: c, round: u};
            d && (m[d] = d);
            const p = f && h(Le, {
                name: "cross",
                class: [Ba("close"), Cn],
                onClick: o
            }, null);
            return h("span", {
                style: s(),
                class: Ba([m, i])
            }, [(l = t.default) == null ? void 0 : l.call(t), p])
        };
        return () => h(rs, {name: e.closeable ? "van-fade" : void 0}, {default: () => [e.show ? r() : null]})
    }
});
const Qh = he(Xh), si = {
    name: st,
    disabled: Boolean,
    iconSize: te,
    modelValue: st,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
};
var p0 = re({
    props: Ce({}, si, {
        bem: co(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: de,
        indeterminate: {type: Boolean, default: null}
    }), emits: ["click", "toggle"], setup(e, {emit: t, slots: n}) {
        const o = L(), s = f => {
            if (e.parent && e.bindGroup) return e.parent.props[f]
        }, r = J(() => {
            if (e.parent && e.bindGroup) {
                const f = s("disabled") || e.disabled;
                if (e.role === "checkbox") {
                    const m = s("modelValue").length, p = s("max"),
                        g = p && m >= +p;
                    return f || g && !e.checked
                }
                return f
            }
            return e.disabled
        }), l = J(() => s("direction")), i = J(() => {
            const f = e.checkedColor || s("checkedColor");
            if (f && e.checked && !r.value) return {
                borderColor: f,
                backgroundColor: f
            }
        }), a = J(() => e.shape || s("shape") || "round"), c = f => {
            const {target: m} = f, p = o.value,
                g = p === m || (p == null ? void 0 : p.contains(m));
            !r.value && (g || !e.labelDisabled) && t("toggle"), t("click", f)
        }, u = () => {
            var f, m;
            const {bem: p, checked: g, indeterminate: _} = e,
                b = e.iconSize || s("iconSize");
            return h("div", {
                ref: o,
                class: p("icon", [a.value, {
                    disabled: r.value,
                    checked: g,
                    indeterminate: _
                }]),
                style: a.value !== "dot" ? {fontSize: Ve(b)} : {
                    width: Ve(b),
                    height: Ve(b),
                    borderColor: (f = i.value) == null ? void 0 : f.borderColor
                }
            }, [n.icon ? n.icon({
                checked: g,
                disabled: r.value
            }) : a.value !== "dot" ? h(Le, {
                name: _ ? "minus" : "success",
                style: i.value
            }, null) : h("div", {
                class: p("icon--dot__icon"),
                style: {backgroundColor: (m = i.value) == null ? void 0 : m.backgroundColor}
            }, null)])
        }, d = () => {
            const {checked: f} = e;
            if (n.default) return h("span", {class: e.bem("label", [e.labelPosition, {disabled: r.value}])}, [n.default({
                checked: f,
                disabled: r.value
            })])
        };
        return () => {
            const f = e.labelPosition === "left" ? [d(), u()] : [u(), d()];
            return h("div", {
                role: e.role,
                class: e.bem([{
                    disabled: r.value,
                    "label-disabled": e.labelDisabled
                }, l.value]),
                tabindex: r.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: c
            }, [f])
        }
    }
});
const Zh = Ce({}, si, {shape: String}), [e4, t4] = le("radio");
var n4 = re({
    name: e4,
    props: Zh,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: o} = wt(h0),
            s = () => (o ? o.props.modelValue : e.modelValue) === e.name,
            r = () => {
                o ? o.updateValue(e.name) : t("update:modelValue", e.name)
            };
        return () => h(p0, qe({
            bem: t4,
            role: "radio",
            parent: o,
            checked: s(),
            onToggle: r
        }, e), Pt(n, ["default", "icon"]))
    }
});
const o4 = he(n4), [s4, r4] = le("checkbox"), l4 = Ce({}, si, {
    shape: String,
    bindGroup: de,
    indeterminate: {type: Boolean, default: null}
});
var i4 = re({
    name: s4,
    props: l4,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: o} = wt(g0), s = i => {
                const {name: a} = e, {max: c, modelValue: u} = o.props,
                    d = u.slice();
                if (i) !(c && d.length >= +c) && !d.includes(a) && (d.push(a), e.bindGroup && o.updateValue(d)); else {
                    const f = d.indexOf(a);
                    f !== -1 && (d.splice(f, 1), e.bindGroup && o.updateValue(d))
                }
            },
            r = J(() => o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue),
            l = (i = !r.value) => {
                o && e.bindGroup ? s(i) : t("update:modelValue", i), e.indeterminate !== null && t("change", i)
            };
        return Ee(() => e.modelValue, i => {
            e.indeterminate === null && t("change", i)
        }), rt({
            toggle: l,
            props: e,
            checked: r
        }), ls(() => e.modelValue), () => h(p0, qe({
            bem: r4,
            role: "checkbox",
            parent: o,
            checked: r.value,
            onToggle: l
        }, e), Pt(n, ["default", "icon"]))
    }
});
const v0 = he(i4), [a4, so] = le("address-item");
var c4 = re({
    name: a4,
    props: {
        address: co(Object),
        disabled: Boolean,
        switchable: Boolean,
        singleChoice: Boolean,
        defaultTagText: String,
        rightIcon: me("edit")
    },
    emits: ["edit", "click", "select"],
    setup(e, {slots: t, emit: n}) {
        const o = i => {
            e.switchable && n("select"), n("click", i)
        }, s = () => h(Le, {
            name: e.rightIcon,
            class: so("edit"),
            onClick: i => {
                i.stopPropagation(), n("edit"), n("click", i)
            }
        }, null), r = () => {
            if (t.tag) return t.tag(e.address);
            if (e.address.isDefault && e.defaultTagText) return h(Qh, {
                type: "primary",
                round: !0,
                class: so("tag")
            }, {default: () => [e.defaultTagText]})
        }, l = () => {
            const {address: i, disabled: a, switchable: c, singleChoice: u} = e,
                d = [h("div", {class: so("name")}, [`${i.name} ${i.tel}`, r()]), h("div", {class: so("address")}, [i.address])];
            return c && !a ? u ? h(o4, {
                name: i.id,
                iconSize: 18
            }, {default: () => [d]}) : h(v0, {
                name: i.id,
                iconSize: 18
            }, {default: () => [d]}) : d
        };
        return () => {
            var i;
            const {disabled: a} = e;
            return h("div", {
                class: so({disabled: a}),
                onClick: o
            }, [h(Xn, {border: !1, titleClass: so("title")}, {
                title: l,
                "right-icon": s
            }), (i = t.bottom) == null ? void 0 : i.call(t, Ce({}, e.address, {disabled: a}))])
        }
    }
});
const [u4, Ts, d4] = le("address-list"), f4 = {
    list: Dt(),
    modelValue: [...te, Array],
    switchable: de,
    disabledText: String,
    disabledList: Dt(),
    showAddButton: de,
    addButtonText: String,
    defaultTagText: String,
    rightIcon: me("edit")
};
var h4 = re({
    name: u4,
    props: f4,
    emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const o = J(() => !Array.isArray(e.modelValue)), s = (i, a, c) => {
                const u = () => n(c ? "editDisabled" : "edit", i, a),
                    d = m => n("clickItem", i, a, {event: m}), f = () => {
                        if (n(c ? "selectDisabled" : "select", i, a), !c) if (o.value) n("update:modelValue", i.id); else {
                            const m = e.modelValue;
                            m.includes(i.id) ? n("update:modelValue", m.filter(p => p !== i.id)) : n("update:modelValue", [...m, i.id])
                        }
                    };
                return h(c4, {
                    key: i.id,
                    address: i,
                    disabled: c,
                    switchable: e.switchable,
                    singleChoice: o.value,
                    defaultTagText: e.defaultTagText,
                    rightIcon: e.rightIcon,
                    onEdit: u,
                    onClick: d,
                    onSelect: f
                }, {bottom: t["item-bottom"], tag: t.tag})
            }, r = (i, a) => {
                if (i) return i.map((c, u) => s(c, u, a))
            },
            l = () => e.showAddButton ? h("div", {class: [Ts("bottom"), "van-safe-area-bottom"]}, [h(vt, {
                round: !0,
                block: !0,
                type: "primary",
                text: e.addButtonText || d4("add"),
                class: Ts("add"),
                onClick: () => n("add")
            }, null)]) : void 0;
        return () => {
            var i, a;
            const c = r(e.list), u = r(e.disabledList, !0),
                d = e.disabledText && h("div", {class: Ts("disabled-text")}, [e.disabledText]);
            return h("div", {class: Ts()}, [(i = t.top) == null ? void 0 : i.call(t), !o.value && Array.isArray(e.modelValue) ? h(Gh, {modelValue: e.modelValue}, {default: () => [c]}) : h(zh, {modelValue: e.modelValue}, {default: () => [c]}), d, u, (a = t.default) == null ? void 0 : a.call(t), l()])
        }
    }
});
const m4 = he(h4);

function g4(e, t) {
    let n = null, o = 0;
    return function (...s) {
        if (n) return;
        const r = Date.now() - o, l = () => {
            o = Date.now(), n = !1, e.apply(this, s)
        };
        r >= t ? l() : n = setTimeout(l, t)
    }
}

const [p4, jr] = le("back-top"), v4 = {
    right: te,
    bottom: te,
    zIndex: te,
    target: [String, Object],
    offset: Je(200),
    immediate: Boolean,
    teleport: {type: [String, Object], default: "body"}
};
var _4 = re({
    name: p4,
    inheritAttrs: !1,
    props: v4,
    emits: ["click"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        let s = !1;
        const r = L(!1), l = L(), i = L(), a = J(() => Ce(is(e.zIndex), {
            right: Ve(e.right),
            bottom: Ve(e.bottom)
        })), c = m => {
            var p;
            t("click", m), (p = i.value) == null || p.scrollTo({
                top: 0,
                behavior: e.immediate ? "auto" : "smooth"
            })
        }, u = () => {
            r.value = i.value ? c2(i.value) >= +e.offset : !1
        }, d = () => {
            const {target: m} = e;
            if (typeof m == "string") {
                const p = document.querySelector(m);
                if (p) return p
            } else return m
        }, f = () => {
            So && Ge(() => {
                i.value = e.target ? d() : Ql(l.value), u()
            })
        };
        return Vt("scroll", g4(u, 100), {target: i}), ht(f), wo(() => {
            s && (r.value = !0, s = !1)
        }), Co(() => {
            r.value && e.teleport && (r.value = !1, s = !0)
        }), Ee(() => e.target, f), () => {
            const m = h("div", qe({
                ref: e.teleport ? void 0 : l,
                class: jr({active: r.value}),
                style: a.value,
                onClick: c
            }, o), [n.default ? n.default() : h(Le, {
                name: "back-top",
                class: jr("icon")
            }, null)]);
            return e.teleport ? [h("div", {
                ref: l,
                class: jr("placeholder")
            }, null), h(Gl, {to: e.teleport}, {default: () => [m]})] : m
        }
    }
});
const b4 = he(_4), [y4, ro] = le("image"), w4 = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: te,
    height: te,
    radius: te,
    lazyLoad: Boolean,
    iconSize: te,
    showError: de,
    errorIcon: me("photo-fail"),
    iconPrefix: String,
    showLoading: de,
    loadingIcon: me("photo"),
    crossorigin: String,
    referrerpolicy: String
};
var C4 = re({
    name: y4,
    props: w4,
    emits: ["load", "error"],
    setup(e, {emit: t, slots: n}) {
        const o = L(!1), s = L(!0), r = L(), {$Lazyload: l} = Wt().proxy,
            i = J(() => {
                const _ = {width: Ve(e.width), height: Ve(e.height)};
                return Xe(e.radius) && (_.overflow = "hidden", _.borderRadius = Ve(e.radius)), _
            });
        Ee(() => e.src, () => {
            o.value = !1, s.value = !0
        });
        const a = _ => {
            s.value && (s.value = !1, t("load", _))
        }, c = () => {
            const _ = new Event("load");
            Object.defineProperty(_, "target", {
                value: r.value,
                enumerable: !0
            }), a(_)
        }, u = _ => {
            o.value = !0, s.value = !1, t("error", _)
        }, d = (_, b, y) => y ? y() : h(Le, {
            name: _,
            size: e.iconSize,
            class: b,
            classPrefix: e.iconPrefix
        }, null), f = () => {
            if (s.value && e.showLoading) return h("div", {class: ro("loading")}, [d(e.loadingIcon, ro("loading-icon"), n.loading)]);
            if (o.value && e.showError) return h("div", {class: ro("error")}, [d(e.errorIcon, ro("error-icon"), n.error)])
        }, m = () => {
            if (o.value || !e.src) return;
            const _ = {
                alt: e.alt,
                class: ro("img"),
                style: {objectFit: e.fit, objectPosition: e.position},
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy
            };
            return e.lazyLoad ? Nn(h("img", qe({ref: r}, _), null), [[Ef("lazy"), e.src]]) : h("img", qe({
                ref: r,
                src: e.src,
                onLoad: a,
                onError: u
            }, _), null)
        }, p = ({el: _}) => {
            const b = () => {
                _ === r.value && s.value && c()
            };
            r.value ? b() : Ge(b)
        }, g = ({el: _}) => {
            _ === r.value && !o.value && u()
        };
        return l && So && (l.$on("loaded", p), l.$on("error", g), os(() => {
            l.$off("loaded", p), l.$off("error", g)
        })), ht(() => {
            Ge(() => {
                var _;
                (_ = r.value) != null && _.complete && !e.lazyLoad && c()
            })
        }), () => {
            var _;
            return h("div", {
                class: ro({round: e.round, block: e.block}),
                style: i.value
            }, [m(), f(), (_ = n.default) == null ? void 0 : _.call(n)])
        }
    }
});
const Qn = he(C4), [S4, La] = le("cell-group"),
    x4 = {title: String, inset: Boolean, border: de};
var E4 = re({
    name: S4,
    inheritAttrs: !1,
    props: x4,
    setup(e, {slots: t, attrs: n}) {
        const o = () => {
                var r;
                return h("div", qe({class: [La({inset: e.inset}), {[Uu]: e.border && !e.inset}]}, n, fl()), [(r = t.default) == null ? void 0 : r.call(t)])
            },
            s = () => h("div", {class: La("title", {inset: e.inset})}, [t.title ? t.title() : e.title]);
        return () => e.title || t.title ? h(Fe, null, [s(), o()]) : o()
    }
});
const _0 = he(E4), [b0, T4] = le("row"), y0 = Symbol(b0), k4 = {
    tag: me("div"),
    wrap: de,
    align: String,
    gutter: {type: [String, Number, Array], default: 0},
    justify: String
};
var A4 = re({
    name: b0, props: k4, setup(e, {slots: t}) {
        const {children: n, linkChildren: o} = Ft(y0), s = J(() => {
            const i = [[]];
            let a = 0;
            return n.forEach((c, u) => {
                a += Number(c.span), a > 24 ? (i.push([u]), a -= 24) : i[i.length - 1].push(u)
            }), i
        }), r = J(() => {
            let i = 0;
            Array.isArray(e.gutter) ? i = Number(e.gutter[0]) || 0 : i = Number(e.gutter);
            const a = [];
            return i && s.value.forEach(c => {
                const u = i * (c.length - 1) / c.length;
                c.forEach((d, f) => {
                    if (f === 0) a.push({right: u}); else {
                        const m = i - a[d - 1].right, p = u - m;
                        a.push({left: m, right: p})
                    }
                })
            }), a
        }), l = J(() => {
            const {gutter: i} = e, a = [];
            if (Array.isArray(i) && i.length > 1) {
                const c = Number(i[1]) || 0;
                if (c <= 0) return a;
                s.value.forEach((u, d) => {
                    d !== s.value.length - 1 && u.forEach(() => {
                        a.push({bottom: c})
                    })
                })
            }
            return a
        });
        return o({spaces: r, verticalSpaces: l}), () => {
            const {tag: i, wrap: a, align: c, justify: u} = e;
            return h(i, {
                class: T4({
                    [`align-${c}`]: c,
                    [`justify-${u}`]: u,
                    nowrap: !a
                })
            }, {
                default: () => {
                    var d;
                    return [(d = t.default) == null ? void 0 : d.call(t)]
                }
            })
        }
    }
});
const [I4, P4] = le("col"), R4 = {tag: me("div"), span: Je(0), offset: te};
var O4 = re({
    name: I4, props: R4, setup(e, {slots: t}) {
        const {parent: n, index: o} = wt(y0), s = J(() => {
            if (!n) return;
            const {spaces: r, verticalSpaces: l} = n;
            let i = {};
            if (r && r.value && r.value[o.value]) {
                const {left: c, right: u} = r.value[o.value];
                i = {
                    paddingLeft: c ? `${c}px` : null,
                    paddingRight: u ? `${u}px` : null
                }
            }
            const {bottom: a} = l.value[o.value] || {};
            return Ce(i, {marginBottom: a ? `${a}px` : null})
        });
        return () => {
            const {tag: r, span: l, offset: i} = e;
            return h(r, {
                style: s.value,
                class: P4({[l]: l, [`offset-${i}`]: i})
            }, {
                default: () => {
                    var a;
                    return [(a = t.default) == null ? void 0 : a.call(t)]
                }
            })
        }
    }
});
const on = he(O4), [$4, Ot, ks] = le("dialog"), B4 = Ce({}, fr, {
    title: String,
    theme: String,
    width: te,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: st,
    transition: me("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: de,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: de,
    closeOnClickOverlay: Boolean
}), L4 = [...Gu, "transition", "closeOnPopstate"];
var w0 = re({
    name: $4,
    props: B4,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = L(), s = Me({confirm: !1, cancel: !1}),
            r = b => t("update:show", b), l = b => {
                var y;
                r(!1), (y = e.callback) == null || y.call(e, b)
            }, i = b => () => {
                e.show && (t(b), e.beforeClose ? (s[b] = !0, Zl(e.beforeClose, {
                    args: [b],
                    done() {
                        l(b), s[b] = !1
                    },
                    canceled() {
                        s[b] = !1
                    }
                })) : l(b))
            }, a = i("cancel"), c = i("confirm"), u = q1(b => {
                var y, x;
                if (b.target !== ((x = (y = o.value) == null ? void 0 : y.popupRef) == null ? void 0 : x.value)) return;
                ({
                    Enter: e.showConfirmButton ? c : cl,
                    Escape: e.showCancelButton ? a : cl
                })[b.key](), t("keydown", b)
            }, ["enter", "esc"]), d = () => {
                const b = n.title ? n.title() : e.title;
                if (b) return h("div", {class: Ot("header", {isolated: !e.message && !n.default})}, [b])
            }, f = b => {
                const {message: y, allowHtml: x, messageAlign: T} = e,
                    E = Ot("message", {"has-title": b, [T]: T}),
                    S = Zo(y) ? y() : y;
                return x && typeof S == "string" ? h("div", {
                    class: E,
                    innerHTML: S
                }, null) : h("div", {class: E}, [S])
            }, m = () => {
                if (n.default) return h("div", {class: Ot("content")}, [n.default()]);
                const {title: b, message: y, allowHtml: x} = e;
                if (y) {
                    const T = !!(b || n.title);
                    return h("div", {
                        key: x ? 1 : 0,
                        class: Ot("content", {isolated: !T})
                    }, [f(T)])
                }
            },
            p = () => h("div", {class: [ju, Ot("footer")]}, [e.showCancelButton && h(vt, {
                size: "large",
                text: e.cancelButtonText || ks("cancel"),
                class: Ot("cancel"),
                style: {color: e.cancelButtonColor},
                loading: s.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: a
            }, null), e.showConfirmButton && h(vt, {
                size: "large",
                text: e.confirmButtonText || ks("confirm"),
                class: [Ot("confirm"), {[P2]: e.showCancelButton}],
                style: {color: e.confirmButtonColor},
                loading: s.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: c
            }, null)]), g = () => h(Wu, {class: Ot("footer")}, {
                default: () => [e.showCancelButton && h(Ca, {
                    type: "warning",
                    text: e.cancelButtonText || ks("cancel"),
                    class: Ot("cancel"),
                    color: e.cancelButtonColor,
                    loading: s.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: a
                }, null), e.showConfirmButton && h(Ca, {
                    type: "danger",
                    text: e.confirmButtonText || ks("confirm"),
                    class: Ot("confirm"),
                    color: e.confirmButtonColor,
                    loading: s.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: c
                }, null)]
            }),
            _ = () => n.footer ? n.footer() : e.theme === "round-button" ? g() : p();
        return () => {
            const {width: b, title: y, theme: x, message: T, className: E} = e;
            return h(cs, qe({
                ref: o,
                role: "dialog",
                class: [Ot([x]), E],
                style: {width: Ve(b)},
                tabindex: 0,
                "aria-labelledby": y || T,
                onKeydown: u,
                "onUpdate:show": r
            }, Pt(e, L4)), {default: () => [d(), m(), _()]})
        }
    }
});
let gl;
const D4 = {
    title: "",
    width: "",
    theme: null,
    message: "",
    overlay: !0,
    callback: null,
    teleport: "body",
    className: "",
    allowHtml: !1,
    lockScroll: !0,
    transition: void 0,
    beforeClose: null,
    overlayClass: "",
    overlayStyle: void 0,
    messageAlign: "",
    cancelButtonText: "",
    cancelButtonColor: null,
    cancelButtonDisabled: !1,
    confirmButtonText: "",
    confirmButtonColor: null,
    confirmButtonDisabled: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !1
};
let N4 = Ce({}, D4);

function F4() {
    ({instance: gl} = c0({
        setup() {
            const {state: t, toggle: n} = a0();
            return () => h(w0, qe(t, {"onUpdate:show": n}), null)
        }
    }))
}

function C0(e) {
    return So ? new Promise((t, n) => {
        gl || F4(), gl.open(Ce({}, N4, e, {
            callback: o => {
                (o === "confirm" ? t : n)(o)
            }
        }))
    }) : Promise.resolve(void 0)
}

const ri = e => C0(Ce({showCancelButton: !0}, e)),
    S0 = he(w0), [x0, As] = le("dropdown-menu"), V4 = {
        overlay: de,
        zIndex: te,
        duration: Je(.2),
        direction: me("down"),
        activeColor: String,
        autoLocate: Boolean,
        closeOnClickOutside: de,
        closeOnClickOverlay: de,
        swipeThreshold: te
    }, E0 = Symbol(x0);
var M4 = re({
    name: x0, props: V4, setup(e, {slots: t}) {
        const n = ti(), o = L(), s = L(), r = L(0), {
                children: l,
                linkChildren: i
            } = Ft(E0), a = Lu(o), c = J(() => l.some(y => y.state.showWrapper)),
            u = J(() => e.swipeThreshold && l.length > +e.swipeThreshold),
            d = J(() => {
                if (c.value && Xe(e.zIndex)) return {zIndex: +e.zIndex + 1}
            }), f = () => {
                l.forEach(y => {
                    y.toggle(!1)
                })
            }, m = () => {
                e.closeOnClickOutside && f()
            }, p = () => {
                if (s.value) {
                    const y = jn(s);
                    e.direction === "down" ? r.value = y.bottom : r.value = ur.value - y.top
                }
            }, g = () => {
                c.value && p()
            }, _ = y => {
                l.forEach((x, T) => {
                    T === y ? x.toggle() : x.state.showPopup && x.toggle(!1, {immediate: !0})
                })
            }, b = (y, x) => {
                const {showPopup: T} = y.state, {disabled: E, titleClass: S} = y;
                return h("div", {
                    id: `${n}-${x}`,
                    role: "button",
                    tabindex: E ? void 0 : 0,
                    class: [As("item", {disabled: E, grow: u.value}), {[Cn]: !E}],
                    onClick: () => {
                        E || _(x)
                    }
                }, [h("span", {
                    class: [As("title", {
                        down: T === (e.direction === "down"),
                        active: T
                    }), S], style: {color: T ? e.activeColor : ""}
                }, [h("div", {class: "van-ellipsis"}, [y.renderTitle()])])])
            };
        return rt({close: f}), i({
            id: n,
            props: e,
            offset: r,
            updateOffset: p
        }), s2(o, m), Vt("scroll", g, {target: a, passive: !0}), () => {
            var y;
            return h("div", {ref: o, class: As()}, [h("div", {
                ref: s,
                style: d.value,
                class: As("bar", {opened: c.value, scrollable: u.value})
            }, [l.map(b)]), (y = t.default) == null ? void 0 : y.call(t)])
        }
    }
});
const [j4, Is] = le("dropdown-item"), U4 = {
    title: String,
    options: Dt(),
    disabled: Boolean,
    teleport: [String, Object],
    lazyRender: de,
    modelValue: st,
    titleClass: st
};
var H4 = re({
    name: j4,
    inheritAttrs: !1,
    props: U4,
    emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const s = Me({showPopup: !1, transition: !0, showWrapper: !1}),
            r = L(), {parent: l, index: i} = wt(E0);
        if (!l) return;
        const a = y => () => t(y), c = a("open"), u = a("close"),
            d = a("opened"), f = () => {
                s.showWrapper = !1, t("closed")
            }, m = y => {
                e.teleport && y.stopPropagation()
            }, p = (y = !s.showPopup, x = {}) => {
                y !== s.showPopup && (s.showPopup = y, s.transition = !x.immediate, y && (l.updateOffset(), s.showWrapper = !0))
            }, g = () => {
                if (n.title) return n.title();
                if (e.title) return e.title;
                const y = e.options.find(x => x.value === e.modelValue);
                return y ? y.text : ""
            }, _ = y => {
                const {activeColor: x} = l.props, {disabled: T} = y,
                    E = y.value === e.modelValue, S = () => {
                        T || (s.showPopup = !1, y.value !== e.modelValue && (t("update:modelValue", y.value), t("change", y.value)))
                    }, P = () => {
                        if (E) return h(Le, {
                            class: Is("icon"),
                            color: T ? void 0 : x,
                            name: "success"
                        }, null)
                    };
                return h(Xn, {
                    role: "menuitem",
                    key: String(y.value),
                    icon: y.icon,
                    title: y.text,
                    class: Is("option", {active: E, disabled: T}),
                    style: {color: E ? x : ""},
                    tabindex: E ? 0 : -1,
                    clickable: !T,
                    onClick: S
                }, {value: P})
            }, b = () => {
                const {offset: y} = l, {
                    autoLocate: x,
                    zIndex: T,
                    overlay: E,
                    duration: S,
                    direction: P,
                    closeOnClickOverlay: B
                } = l.props, $ = is(T);
                let F = y.value;
                if (x && r.value) {
                    const I = m2(r.value);
                    I && (F -= jn(I).top)
                }
                return P === "down" ? $.top = `${F}px` : $.bottom = `${F}px`, Nn(h("div", qe({
                    ref: r,
                    style: $,
                    class: Is([P]),
                    onClick: m
                }, o), [h(cs, {
                    show: s.showPopup,
                    "onUpdate:show": I => s.showPopup = I,
                    role: "menu",
                    class: Is("content"),
                    overlay: E,
                    position: P === "down" ? "top" : "bottom",
                    duration: s.transition ? S : 0,
                    lazyRender: e.lazyRender,
                    overlayStyle: {position: "absolute"},
                    "aria-labelledby": `${l.id}-${i.value}`,
                    closeOnClickOverlay: B,
                    onOpen: c,
                    onClose: u,
                    onOpened: d,
                    onClosed: f
                }, {
                    default: () => {
                        var I;
                        return [e.options.map(_), (I = n.default) == null ? void 0 : I.call(n)]
                    }
                })]), [[go, s.showWrapper]])
            };
        return rt({
            state: s,
            toggle: p,
            renderTitle: g
        }), () => e.teleport ? h(Gl, {to: e.teleport}, {default: () => [b()]}) : b()
    }
});
const z4 = he(H4), q4 = he(M4), [T0, K4] = le("grid"), W4 = {
    square: Boolean,
    center: de,
    border: de,
    gutter: te,
    reverse: Boolean,
    iconSize: te,
    direction: String,
    clickable: Boolean,
    columnNum: Je(4)
}, k0 = Symbol(T0);
var G4 = re({
    name: T0, props: W4, setup(e, {slots: t}) {
        const {linkChildren: n} = Ft(k0);
        return n({props: e}), () => {
            var o;
            return h("div", {
                style: {paddingLeft: Ve(e.gutter)},
                class: [K4(), {[ju]: e.border && !e.gutter}]
            }, [(o = t.default) == null ? void 0 : o.call(t)])
        }
    }
});
const li = he(G4), [J4, Ps] = le("grid-item"), Y4 = Ce({}, Jn, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: te,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
});
var X4 = re({
    name: J4, props: Y4, setup(e, {slots: t}) {
        const {parent: n, index: o} = wt(k0), s = Yn();
        if (!n) return;
        const r = J(() => {
            const {square: u, gutter: d, columnNum: f} = n.props,
                m = `${100 / +f}%`, p = {flexBasis: m};
            if (u) p.paddingTop = m; else if (d) {
                const g = Ve(d);
                p.paddingRight = g, o.value >= +f && (p.marginTop = g)
            }
            return p
        }), l = J(() => {
            const {square: u, gutter: d} = n.props;
            if (u && d) {
                const f = Ve(d);
                return {right: f, bottom: f, height: "auto"}
            }
        }), i = () => {
            if (t.icon) return h(as, qe({
                dot: e.dot,
                content: e.badge
            }, e.badgeProps), {default: t.icon});
            if (e.icon) return h(Le, {
                dot: e.dot,
                name: e.icon,
                size: n.props.iconSize,
                badge: e.badge,
                class: Ps("icon"),
                color: e.iconColor,
                badgeProps: e.badgeProps,
                classPrefix: e.iconPrefix
            }, null)
        }, a = () => {
            if (t.text) return t.text();
            if (e.text) return h("span", {class: Ps("text")}, [e.text])
        }, c = () => t.default ? t.default() : [i(), a()];
        return () => {
            const {
                center: u,
                border: d,
                square: f,
                gutter: m,
                reverse: p,
                direction: g,
                clickable: _
            } = n.props, b = [Ps("content", [g, {
                center: u,
                square: f,
                reverse: p,
                clickable: _,
                surround: d && m
            }]), {[Gn]: d}];
            return h("div", {
                class: [Ps({square: f})],
                style: r.value
            }, [h("div", {
                role: _ ? "button" : void 0,
                class: b,
                style: l.value,
                tabindex: _ ? 0 : void 0,
                onClick: s
            }, [c()])])
        }
    }
});
const ii = he(X4), [Q4, lo, Z4] = le("list"), em = {
    error: Boolean,
    offset: Je(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: me("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: de
};
var tm = re({
    name: Q4,
    props: em,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {emit: t, slots: n}) {
        const o = L(e.loading), s = L(), r = L(), l = U3(), i = Lu(s),
            a = J(() => e.scroller || i.value), c = () => {
                Ge(() => {
                    if (o.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1) return;
                    const {direction: p} = e, g = +e.offset, _ = jn(a);
                    if (!_.height || ul(s)) return;
                    let b = !1;
                    const y = jn(r);
                    p === "up" ? b = _.top - y.top <= g : b = y.bottom - _.bottom <= g, b && (o.value = !0, t("update:loading", !0), t("load"))
                })
            }, u = () => {
                if (e.finished) {
                    const p = n.finished ? n.finished() : e.finishedText;
                    if (p) return h("div", {class: lo("finished-text")}, [p])
                }
            }, d = () => {
                t("update:error", !1), c()
            }, f = () => {
                if (e.error) {
                    const p = n.error ? n.error() : e.errorText;
                    if (p) return h("div", {
                        role: "button",
                        class: lo("error-text"),
                        tabindex: 0,
                        onClick: d
                    }, [p])
                }
            }, m = () => {
                if (o.value && !e.finished && !e.disabled) return h("div", {class: lo("loading")}, [n.loading ? n.loading() : h(Eo, {class: lo("loading-icon")}, {default: () => [e.loadingText || Z4("loading")]})])
            };
        return Ee(() => [e.loading, e.finished, e.error], c), l && Ee(l, p => {
            p && c()
        }), su(() => {
            o.value = e.loading
        }), ht(() => {
            e.immediateCheck && c()
        }), rt({check: c}), Vt("scroll", c, {target: a, passive: !0}), () => {
            var p;
            const g = (p = n.default) == null ? void 0 : p.call(n),
                _ = h("div", {ref: r, class: lo("placeholder")}, null);
            return h("div", {
                ref: s,
                role: "feed",
                class: lo(),
                "aria-busy": o.value
            }, [e.direction === "down" ? g : _, m(), u(), f(), e.direction === "up" ? g : _])
        }
    }
});
const ai = he(tm), [nm, Yt] = le("nav-bar"), om = {
    title: String,
    fixed: Boolean,
    zIndex: te,
    border: de,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: de
};
var sm = re({
    name: nm,
    props: om,
    emits: ["clickLeft", "clickRight"],
    setup(e, {emit: t, slots: n}) {
        const o = L(), s = dr(o, Yt), r = u => {
                e.leftDisabled || t("clickLeft", u)
            }, l = u => {
                e.rightDisabled || t("clickRight", u)
            }, i = () => n.left ? n.left() : [e.leftArrow && h(Le, {
                class: Yt("arrow"),
                name: "arrow-left"
            }, null), e.leftText && h("span", {class: Yt("text")}, [e.leftText])],
            a = () => n.right ? n.right() : h("span", {class: Yt("text")}, [e.rightText]),
            c = () => {
                const {title: u, fixed: d, border: f, zIndex: m} = e, p = is(m),
                    g = e.leftArrow || e.leftText || n.left,
                    _ = e.rightText || n.right;
                return h("div", {
                    ref: o,
                    style: p,
                    class: [Yt({fixed: d}), {
                        [R2]: f,
                        "van-safe-area-top": e.safeAreaInsetTop
                    }]
                }, [h("div", {class: Yt("content")}, [g && h("div", {
                    class: [Yt("left", {disabled: e.leftDisabled}), e.clickable && !e.leftDisabled ? Cn : ""],
                    onClick: r
                }, [i()]), h("div", {class: [Yt("title"), "van-ellipsis"]}, [n.title ? n.title() : u]), _ && h("div", {
                    class: [Yt("right", {disabled: e.rightDisabled}), e.clickable && !e.rightDisabled ? Cn : ""],
                    onClick: l
                }, [a()])])])
            };
        return () => e.fixed && e.placeholder ? s(c) : c()
    }
});
const Mt = he(sm), [rm, Rs] = le("rate");

function lm(e, t, n, o) {
    return e >= t ? {
        status: "full",
        value: 1
    } : e + .5 >= t && n && !o ? {
        status: "half",
        value: .5
    } : e + 1 >= t && n && o ? {
        status: "half",
        value: Math.round((e - t + 1) * 1e10) / 1e10
    } : {status: "void", value: 0}
}

const im = {
    size: te,
    icon: me("star"),
    color: String,
    count: Je(5),
    gutter: te,
    clearable: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: me("star-o"),
    allowHalf: Boolean,
    voidColor: String,
    touchable: de,
    iconPrefix: String,
    modelValue: Ou(0),
    disabledColor: String
};
var am = re({
    name: rm,
    props: im,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = hr(), [o, s] = F3(), r = L(),
            l = J(() => e.readonly || e.disabled),
            i = J(() => l.value || !e.touchable),
            a = J(() => Array(+e.count).fill("").map((x, T) => lm(e.modelValue, T + 1, e.allowHalf, e.readonly)));
        let c, u, d = Number.MAX_SAFE_INTEGER, f = Number.MIN_SAFE_INTEGER;
        const m = () => {
            u = jn(r);
            const x = o.value.map(jn);
            c = [], x.forEach((T, E) => {
                d = Math.min(T.top, d), f = Math.max(T.top, f), e.allowHalf ? c.push({
                    score: E + .5,
                    left: T.left,
                    top: T.top,
                    height: T.height
                }, {
                    score: E + 1,
                    left: T.left + T.width / 2,
                    top: T.top,
                    height: T.height
                }) : c.push({
                    score: E + 1,
                    left: T.left,
                    top: T.top,
                    height: T.height
                })
            })
        }, p = (x, T) => {
            for (let E = c.length - 1; E > 0; E--) if (T >= u.top && T <= u.bottom) {
                if (x > c[E].left && T >= c[E].top && T <= c[E].top + c[E].height) return c[E].score
            } else {
                const S = T < u.top ? d : f;
                if (x > c[E].left && c[E].top === S) return c[E].score
            }
            return e.allowHalf ? .5 : 1
        }, g = x => {
            l.value || x === e.modelValue || (t("update:modelValue", x), t("change", x))
        }, _ = x => {
            i.value || (n.start(x), m())
        }, b = x => {
            if (!i.value && (n.move(x), n.isHorizontal() && !n.isTap.value)) {
                const {clientX: T, clientY: E} = x.touches[0];
                At(x), g(p(T, E))
            }
        }, y = (x, T) => {
            const {
                    icon: E,
                    size: S,
                    color: P,
                    count: B,
                    gutter: $,
                    voidIcon: F,
                    disabled: I,
                    voidColor: A,
                    allowHalf: H,
                    iconPrefix: Z,
                    disabledColor: ae
                } = e, ne = T + 1, oe = x.status === "full",
                fe = x.status === "void", et = H && x.value > 0 && x.value < 1;
            let lt;
            $ && ne !== +B && (lt = {paddingRight: Ve($)});
            const ee = _e => {
                m();
                let Te = H ? p(_e.clientX, _e.clientY) : ne;
                e.clearable && n.isTap.value && Te === e.modelValue && (Te = 0), g(Te)
            };
            return h("div", {
                key: T,
                ref: s(T),
                role: "radio",
                style: lt,
                class: Rs("item"),
                tabindex: I ? void 0 : 0,
                "aria-setsize": B,
                "aria-posinset": ne,
                "aria-checked": !fe,
                onClick: ee
            }, [h(Le, {
                size: S,
                name: oe ? E : F,
                class: Rs("icon", {disabled: I, full: oe}),
                color: I ? ae : oe ? P : A,
                classPrefix: Z
            }, null), et && h(Le, {
                size: S,
                style: {width: x.value + "em"},
                name: fe ? F : E,
                class: Rs("icon", ["half", {disabled: I, full: !fe}]),
                color: I ? ae : fe ? A : P,
                classPrefix: Z
            }, null)])
        };
        return ls(() => e.modelValue), Vt("touchmove", b, {target: r}), () => h("div", {
            ref: r,
            role: "radiogroup",
            class: Rs({readonly: e.readonly, disabled: e.disabled}),
            tabindex: e.disabled ? void 0 : 0,
            "aria-disabled": e.disabled,
            "aria-readonly": e.readonly,
            onTouchstartPassive: _
        }, [a.value.map(y)])
    }
});
const cm = he(am), Gt = he(A4), [um, Bo, dm] = le("search"), fm = Ce({}, ni, {
    label: String,
    shape: me("square"),
    leftIcon: me("search"),
    clearable: de,
    actionText: String,
    background: String,
    showAction: Boolean
});
var hm = re({
    name: um,
    props: fm,
    emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const s = ti(), r = L(), l = () => {
                n.action || (t("update:modelValue", ""), t("cancel"))
            }, i = E => {
                E.keyCode === 13 && (At(E), t("search", e.modelValue))
            }, a = () => e.id || `${s}-input`, c = () => {
                if (n.label || e.label) return h("label", {
                    class: Bo("label"),
                    for: a()
                }, [n.label ? n.label() : e.label])
            }, u = () => {
                if (e.showAction) {
                    const E = e.actionText || dm("cancel");
                    return h("div", {
                        class: Bo("action"),
                        role: "button",
                        tabindex: 0,
                        onClick: l
                    }, [n.action ? n.action() : E])
                }
            }, d = () => {
                var E;
                return (E = r.value) == null ? void 0 : E.blur()
            }, f = () => {
                var E;
                return (E = r.value) == null ? void 0 : E.focus()
            }, m = E => t("blur", E), p = E => t("focus", E),
            g = E => t("clear", E), _ = E => t("clickInput", E),
            b = E => t("clickLeftIcon", E), y = E => t("clickRightIcon", E),
            x = Object.keys(ni), T = () => {
                const E = Ce({}, o, Pt(e, x), {id: a()}),
                    S = P => t("update:modelValue", P);
                return h(Vn, qe({
                    ref: r,
                    type: "search",
                    class: Bo("field", {"with-message": E.errorMessage}),
                    border: !1,
                    onBlur: m,
                    onFocus: p,
                    onClear: g,
                    onKeypress: i,
                    onClickInput: _,
                    onClickLeftIcon: b,
                    onClickRightIcon: y,
                    "onUpdate:modelValue": S
                }, E), Pt(n, ["left-icon", "right-icon"]))
            };
        return rt({focus: f, blur: d}), () => {
            var E;
            return h("div", {
                class: Bo({"show-action": e.showAction}),
                style: {background: e.background}
            }, [(E = n.left) == null ? void 0 : E.call(n), h("div", {class: Bo("content", e.shape)}, [c(), T()]), u()])
        }
    }
});
const gr = he(hm), [A0, mm] = le("sidebar"), I0 = Symbol(A0),
    gm = {modelValue: Je(0)};
var pm = re({
    name: A0,
    props: gm,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = Ft(I0), s = () => +e.modelValue;
        return o({
            getActive: s, setActive: l => {
                l !== s() && (t("update:modelValue", l), t("change", l))
            }
        }), () => {
            var l;
            return h("div", {
                role: "tablist",
                class: mm()
            }, [(l = n.default) == null ? void 0 : l.call(n)])
        }
    }
});
const vm = he(pm), [_m, Da] = le("sidebar-item"), bm = Ce({}, Jn, {
    dot: Boolean,
    title: String,
    badge: te,
    disabled: Boolean,
    badgeProps: Object
});
var ym = re({
    name: _m,
    props: bm,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Yn(), {parent: s, index: r} = wt(I0);
        if (!s) return;
        const l = () => {
            e.disabled || (t("click", r.value), s.setActive(r.value), o())
        };
        return () => {
            const {dot: i, badge: a, title: c, disabled: u} = e,
                d = r.value === s.getActive();
            return h("div", {
                role: "tab",
                class: Da({select: d, disabled: u}),
                tabindex: u ? void 0 : 0,
                "aria-selected": d,
                onClick: l
            }, [h(as, qe({
                dot: i,
                class: Da("text"),
                content: a
            }, e.badgeProps), {default: () => [n.title ? n.title() : c]})])
        }
    }
});
const wm = he(ym), [Cm, $t, Sm] = le("submit-bar"), xm = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: me("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: me("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: Je(2),
    safeAreaInsetBottom: de
};
var Em = re({
    name: Cm, props: xm, emits: ["submit"], setup(e, {emit: t, slots: n}) {
        const o = L(), s = dr(o, $t), r = () => {
            const {
                price: u,
                label: d,
                currency: f,
                textAlign: m,
                suffixLabel: p,
                decimalLength: g
            } = e;
            if (typeof u == "number") {
                const _ = (u / 100).toFixed(+g).split("."),
                    b = g ? `.${_[1]}` : "";
                return h("div", {
                    class: $t("text"),
                    style: {textAlign: m}
                }, [h("span", null, [d || Sm("label")]), h("span", {class: $t("price")}, [f, h("span", {class: $t("price-integer")}, [_[0]]), b]), p && h("span", {class: $t("suffix-label")}, [p])])
            }
        }, l = () => {
            var u;
            const {tip: d, tipIcon: f} = e;
            if (n.tip || d) return h("div", {class: $t("tip")}, [f && h(Le, {
                class: $t("tip-icon"),
                name: f
            }, null), d && h("span", {class: $t("tip-text")}, [d]), (u = n.tip) == null ? void 0 : u.call(n)])
        }, i = () => t("submit"), a = () => n.button ? n.button() : h(vt, {
            round: !0,
            type: e.buttonType,
            text: e.buttonText,
            class: $t("button", e.buttonType),
            color: e.buttonColor,
            loading: e.loading,
            disabled: e.disabled,
            onClick: i
        }, null), c = () => {
            var u, d;
            return h("div", {
                ref: o,
                class: [$t(), {"van-safe-area-bottom": e.safeAreaInsetBottom}]
            }, [(u = n.top) == null ? void 0 : u.call(n), l(), h("div", {class: $t("bar")}, [(d = n.default) == null ? void 0 : d.call(n), r(), a()])])
        };
        return () => e.placeholder ? s(c) : c()
    }
});
const Tm = he(Em), [P0, Na] = le("tabbar"), km = {
    route: Boolean,
    fixed: de,
    border: de,
    zIndex: te,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: Je(0),
    safeAreaInsetBottom: {type: Boolean, default: null}
}, R0 = Symbol(P0);
var Am = re({
    name: P0,
    props: km,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = L(), {linkChildren: s} = Ft(R0), r = dr(o, Na), l = () => {
            var c;
            return (c = e.safeAreaInsetBottom) != null ? c : e.fixed
        }, i = () => {
            var c;
            const {fixed: u, zIndex: d, border: f} = e;
            return h("div", {
                ref: o,
                role: "tablist",
                style: is(d),
                class: [Na({fixed: u}), {[Uu]: f, "van-safe-area-bottom": l()}]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        };
        return s({
            props: e, setActive: (c, u) => {
                Zl(e.beforeChange, {
                    args: [c], done() {
                        t("update:modelValue", c), t("change", c), u()
                    }
                })
            }
        }), () => e.fixed && e.placeholder ? r(i) : i()
    }
});
const Im = he(Am), [Pm, Ur] = le("tabbar-item"), Rm = Ce({}, Jn, {
    dot: Boolean,
    icon: String,
    name: te,
    badge: te,
    badgeProps: Object,
    iconPrefix: String
});
var Om = re({
    name: Pm,
    props: Rm,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Yn(), s = Wt().proxy, {parent: r, index: l} = wt(R0);
        if (!r) return;
        const i = J(() => {
            var u;
            const {route: d, modelValue: f} = r.props;
            if (d && "$route" in s) {
                const {$route: m} = s, {to: p} = e, g = Wn(p) ? p : {path: p};
                return !!m.matched.find(_ => {
                    const b = "path" in g && g.path === _.path,
                        y = "name" in g && g.name === _.name;
                    return b || y
                })
            }
            return ((u = e.name) != null ? u : l.value) === f
        }), a = u => {
            var d;
            i.value || r.setActive((d = e.name) != null ? d : l.value, o), t("click", u)
        }, c = () => {
            if (n.icon) return n.icon({active: i.value});
            if (e.icon) return h(Le, {
                name: e.icon,
                classPrefix: e.iconPrefix
            }, null)
        };
        return () => {
            var u;
            const {dot: d, badge: f} = e, {
                activeColor: m,
                inactiveColor: p
            } = r.props, g = i.value ? m : p;
            return h("div", {
                role: "tab",
                class: Ur({active: i.value}),
                style: {color: g},
                tabindex: 0,
                "aria-selected": i.value,
                onClick: a
            }, [h(as, qe({
                dot: d,
                class: Ur("icon"),
                content: f
            }, e.badgeProps), {default: c}), h("div", {class: Ur("text")}, [(u = n.default) == null ? void 0 : u.call(n, {active: i.value})])])
        }
    }
});
const $m = he(Om), [Bm, Fa] = le("text-ellipsis"), Lm = {
    rows: Je(1),
    dots: me("..."),
    content: me(""),
    expandText: me(""),
    collapseText: me(""),
    position: me("end")
};
var Dm = re({
    name: Bm, props: Lm, emits: ["clickAction"], setup(e, {emit: t, slots: n}) {
        const o = L(""), s = L(!1), r = L(!1), l = L();
        let i = !1;
        const a = J(() => s.value ? e.collapseText : e.expandText), c = g => {
            if (!g) return 0;
            const _ = g.match(/^\d*(\.\d*)?/);
            return _ ? Number(_[0]) : 0
        }, u = () => {
            if (!l.value || !l.value.isConnected) return;
            const g = window.getComputedStyle(l.value),
                _ = document.createElement("div");
            return Array.prototype.slice.apply(g).forEach(y => {
                _.style.setProperty(y, g.getPropertyValue(y))
            }), _.style.position = "fixed", _.style.zIndex = "-9999", _.style.top = "-9999px", _.style.height = "auto", _.style.minHeight = "auto", _.style.maxHeight = "auto", _.innerText = e.content, document.body.appendChild(_), _
        }, d = () => {
            const g = (E, S) => {
                const {content: P, position: B, dots: $} = e, F = P.length,
                    I = () => {
                        const Z = (ae, ne) => {
                            if (ne - ae <= 1) return B === "end" ? P.slice(0, ae) + $ : $ + P.slice(ne, F);
                            const oe = Math.round((ae + ne) / 2);
                            return B === "end" ? E.innerText = P.slice(0, oe) + $ + a.value : E.innerText = $ + P.slice(oe, F) + a.value, E.offsetHeight > S ? B === "end" ? Z(ae, oe) : Z(oe, ne) : B === "end" ? Z(oe, ne) : Z(ae, oe)
                        };
                        E.innerText = Z(0, F)
                    }, A = (Z, ae) => {
                        if (Z[1] - Z[0] <= 1 && ae[1] - ae[0] <= 1) return P.slice(0, Z[0]) + $ + P.slice(ae[1], F);
                        const ne = Math.floor((Z[0] + Z[1]) / 2),
                            oe = Math.ceil((ae[0] + ae[1]) / 2);
                        return E.innerText = e.content.slice(0, ne) + e.dots + e.content.slice(oe, F) + e.expandText, E.offsetHeight >= S ? A([Z[0], ne], [oe, ae[1]]) : A([ne, Z[1]], [ae[0], oe])
                    }, H = 0 + F >> 1;
                return e.position === "middle" ? E.innerText = A([0, H], [H, F]) : I(), E.innerText
            }, _ = u();
            if (!_) {
                i = !0;
                return
            }
            const {paddingBottom: b, paddingTop: y, lineHeight: x} = _.style,
                T = Math.ceil((Number(e.rows) + .5) * c(x) + c(y) + c(b));
            T < _.offsetHeight ? (r.value = !0, o.value = g(_, T)) : (r.value = !1, o.value = e.content), document.body.removeChild(_)
        }, f = (g = !s.value) => {
            s.value = g
        }, m = g => {
            f(), t("clickAction", g)
        }, p = () => {
            const g = n.action ? n.action({expanded: s.value}) : a.value;
            return h("span", {class: Fa("action"), onClick: m}, [g])
        };
        return ht(d), wo(() => {
            i && (i = !1, d())
        }), Ee([cr, () => [e.content, e.rows, e.position]], d), rt({toggle: f}), () => h("div", {
            ref: l,
            class: Fa()
        }, [s.value ? e.content : o.value, r.value ? p() : null])
    }
});
const us = he(Dm);
var Nm = !1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let O0;
const pr = e => O0 = e, $0 = Symbol();

function pl(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}

var zo;
(function (e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(zo || (zo = {}));

function Fm() {
    const e = Ac(!0), t = e.run(() => L({}));
    let n = [], o = [];
    const s = Ml({
        install(r) {
            pr(s), s._a = r, r.provide($0, s), r.config.globalProperties.$pinia = s, o.forEach(l => n.push(l)), o = []
        }, use(r) {
            return !this._a && !Nm ? o.push(r) : n.push(r), this
        }, _p: n, _a: null, _e: e, _s: new Map, state: t
    });
    return s
}

const B0 = () => {
};

function Va(e, t, n, o = B0) {
    e.push(t);
    const s = () => {
        const r = e.indexOf(t);
        r > -1 && (e.splice(r, 1), o())
    };
    return !n && Ic() && Fd(s), s
}

function io(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}

const Vm = e => e();

function vl(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const o = t[n], s = e[n];
        pl(s) && pl(o) && e.hasOwnProperty(n) && !Re(o) && !Dn(o) ? e[n] = vl(s, o) : e[n] = o
    }
    return e
}

const Mm = Symbol();

function jm(e) {
    return !pl(e) || !e.hasOwnProperty(Mm)
}

const {assign: dn} = Object;

function Um(e) {
    return !!(Re(e) && e.effect)
}

function Hm(e, t, n, o) {
    const {state: s, actions: r, getters: l} = t, i = n.state.value[e];
    let a;

    function c() {
        i || (n.state.value[e] = s ? s() : {});
        const u = uf(n.state.value[e]);
        return dn(u, r, Object.keys(l || {}).reduce((d, f) => (d[f] = Ml(J(() => {
            pr(n);
            const m = n._s.get(e);
            return l[f].call(m, m)
        })), d), {}))
    }

    return a = L0(e, c, t, n, o, !0), a
}

function L0(e, t, n = {}, o, s, r) {
    let l;
    const i = dn({actions: {}}, n), a = {deep: !0};
    let c, u, d = [], f = [], m;
    const p = o.state.value[e];
    !r && !p && (o.state.value[e] = {}), L({});
    let g;

    function _(B) {
        let $;
        c = u = !1, typeof B == "function" ? (B(o.state.value[e]), $ = {
            type: zo.patchFunction,
            storeId: e,
            events: m
        }) : (vl(o.state.value[e], B), $ = {
            type: zo.patchObject,
            payload: B,
            storeId: e,
            events: m
        });
        const F = g = Symbol();
        Ge().then(() => {
            g === F && (c = !0)
        }), u = !0, io(d, $, o.state.value[e])
    }

    const b = r ? function () {
        const {state: $} = n, F = $ ? $() : {};
        this.$patch(I => {
            dn(I, F)
        })
    } : B0;

    function y() {
        l.stop(), d = [], f = [], o._s.delete(e)
    }

    function x(B, $) {
        return function () {
            pr(o);
            const F = Array.from(arguments), I = [], A = [];

            function H(ne) {
                I.push(ne)
            }

            function Z(ne) {
                A.push(ne)
            }

            io(f, {args: F, name: B, store: E, after: H, onError: Z});
            let ae;
            try {
                ae = $.apply(this && this.$id === e ? this : E, F)
            } catch (ne) {
                throw io(A, ne), ne
            }
            return ae instanceof Promise ? ae.then(ne => (io(I, ne), ne)).catch(ne => (io(A, ne), Promise.reject(ne))) : (io(I, ae), ae)
        }
    }

    const T = {
        _p: o,
        $id: e,
        $onAction: Va.bind(null, f),
        $patch: _,
        $reset: b,
        $subscribe(B, $ = {}) {
            const F = Va(d, B, $.detached, () => I()),
                I = l.run(() => Ee(() => o.state.value[e], A => {
                    ($.flush === "sync" ? u : c) && B({
                        storeId: e,
                        type: zo.direct,
                        events: m
                    }, A)
                }, dn({}, a, $)));
            return F
        },
        $dispose: y
    }, E = Me(T);
    o._s.set(e, E);
    const P = (o._a && o._a.runWithContext || Vm)(() => o._e.run(() => (l = Ac()).run(t)));
    for (const B in P) {
        const $ = P[B];
        if (Re($) && !Um($) || Dn($)) r || (p && jm($) && (Re($) ? $.value = p[B] : vl($, p[B])), o.state.value[e][B] = $); else if (typeof $ == "function") {
            const F = x(B, $);
            P[B] = F, i.actions[B] = $
        }
    }
    return dn(E, P), dn(Pe(E), P), Object.defineProperty(E, "$state", {
        get: () => o.state.value[e],
        set: B => {
            _($ => {
                dn($, B)
            })
        }
    }), o._p.forEach(B => {
        dn(E, l.run(() => B({store: E, app: o._a, pinia: o, options: i})))
    }), p && r && n.hydrate && n.hydrate(E.$state, p), c = !0, u = !0, E
}

function D0(e, t, n) {
    let o, s;
    const r = typeof t == "function";
    typeof e == "string" ? (o = e, s = r ? n : t) : (s = e, o = e.id);

    function l(i, a) {
        const c = Mf();
        return i = i || (c ? it($0, null) : null), i && pr(i), i = O0, i._s.has(o) || (r ? L0(o, t, s, i) : Hm(o, s, i)), i._s.get(o)
    }

    return l.$id = o, l
}

const We = D0("cartStore", () => {
        let e = Me({cartList: [], totalPrice: 0, totalNum: 0});

        function t(l) {
            e.cartList = l
        }

        function n() {
            return e.cartList
        }

        function o(l) {
            e.totalPrice = l
        }

        function s(l) {
            e.totalNum += l
        }

        function r(l) {
            e.totalNum = l
        }

        return {
            cartInfo: e,
            setCartList: t,
            getCartList: n,
            setTotalPrice: o,
            addTotalNum: s,
            getTotalNum: r
        }
    }, {persist: !0}), zm = {
        __name: "index", setup(e) {
            const t = L(0), n = o => Un(`标签 ${o}`);
            return (o, s) => {
                const r = eu("router-view"), l = $m, i = Im;
                return Q(), ye(Fe, null, [h(r), h(i, {
                    modelValue: t.value,
                    "onUpdate:modelValue": s[0] || (s[0] = a => t.value = a),
                    onChange: n,
                    "active-color": "#ee0a24",
                    route: "",
                    fixed: ""
                }, {
                    default: D(() => [h(l, {
                        icon: "wap-home-o",
                        to: "/home"
                    }, {
                        default: D(() => [ke("首页 ")]),
                        _: 1
                    }), h(l, {
                        icon: "apps-o",
                        to: "/category"
                    }, {
                        default: D(() => [ke("分类")]),
                        _: 1
                    }), V(We)().cartInfo.totalNum > 0 ? (Q(), He(l, {
                        key: 0,
                        icon: "shopping-cart-o",
                        to: "/cart",
                        badge: V(We)().cartInfo.totalNum
                    }, {
                        default: D(() => [ke("购物车 ")]),
                        _: 1
                    }, 8, ["badge"])) : (Q(), He(l, {
                        key: 1,
                        icon: "shopping-cart-o",
                        to: "/cart"
                    }, {
                        default: D(() => [ke("购物车 ")]),
                        _: 1
                    })), h(l, {
                        icon: "user-o",
                        to: "/user"
                    }, {default: D(() => [ke("我的")]), _: 1})]), _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    }, N0 = "history_list", Hr = () => {
        const e = localStorage.getItem(N0);
        return e ? JSON.parse(e) : []
    }, Ma = e => {
        localStorage.setItem(N0, JSON.stringify(e))
    }, qm = e => (qn("data-v-a54b5d90"), e = e(), Kn(), e), Km = {class: "search"},
    Wm = {key: 0, class: "search-history"}, Gm = {class: "title"},
    Jm = qm(() => R("span", null, "最近搜索", -1)), Ym = {
        __name: "index", setup(e) {
            let t = L(Hr());
            console.log("history", t);
            let n = L("");
            const o = r => {
                console.log("items", r);
                const l = t.value.indexOf(r);
                l > -1 && t.value.splice(l, 1), t.value.unshift(r), Ma(t.value), console.log("history.value", t.value), console.log("getHistoryList", Hr()), xe.push(`/searchList?search=${r}`)
            }, s = () => {
                Ma([]), t.value = Hr(), console.log("history", t)
            };
            return (r, l) => {
                var m;
                const i = Mt, a = vt, c = gr, u = Le, d = on, f = Gt;
                return Q(), ye("div", Km, [h(i, {
                    title: "商品搜索",
                    "left-arrow": "",
                    onClickLeft: l[0] || (l[0] = p => V(xe).go(-1))
                }), h(c, {
                    modelValue: V(n),
                    "onUpdate:modelValue": l[2] || (l[2] = p => Re(n) ? n.value = p : n = p),
                    "show-action": "",
                    placeholder: "请输入搜索关键词"
                }, {
                    action: D(() => [h(a, {
                        type: "danger",
                        text: "搜索",
                        size: "small",
                        onClick: l[1] || (l[1] = p => o(V(n)))
                    })]), _: 1
                }, 8, ["modelValue"]), ((m = V(t)) == null ? void 0 : m.length) > 0 ? (Q(), ye("div", Wm, [R("div", Gm, [h(i, null, {
                    left: D(() => [Jm]),
                    right: D(() => [h(u, {
                        name: "delete-o",
                        size: "16",
                        color: "#000000",
                        onClick: s
                    })]),
                    _: 1
                })])])) : Jl("", !0), h(f, {gutter: [10, 10]}, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(t), (p, g) => (Q(), He(d, {
                        span: "8",
                        key: g,
                        onClick: _ => o(p)
                    }, {
                        default: D(() => [h(a, {
                            type: "default",
                            round: "",
                            block: ""
                        }, {default: D(() => [ke(Ie(p), 1)]), _: 2}, 1024)]), _: 2
                    }, 1032, ["onClick"]))), 128))]), _: 1
                })])
            }
        }
    }, Xm = at(Ym, [["__scopeId", "data-v-a54b5d90"]]);/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const ao = typeof document < "u";

function Qm(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}

const Ne = Object.assign;

function zr(e, t) {
    const n = {};
    for (const o in t) {
        const s = t[o];
        n[o] = Nt(s) ? s.map(e) : e(s)
    }
    return n
}

const qo = () => {
    }, Nt = Array.isArray, F0 = /#/g, Zm = /&/g, eg = /\//g, tg = /=/g, ng = /\?/g,
    V0 = /\+/g, og = /%5B/g, sg = /%5D/g, M0 = /%5E/g, rg = /%60/g, j0 = /%7B/g,
    lg = /%7C/g, U0 = /%7D/g, ig = /%20/g;

function ci(e) {
    return encodeURI("" + e).replace(lg, "|").replace(og, "[").replace(sg, "]")
}

function ag(e) {
    return ci(e).replace(j0, "{").replace(U0, "}").replace(M0, "^")
}

function _l(e) {
    return ci(e).replace(V0, "%2B").replace(ig, "+").replace(F0, "%23").replace(Zm, "%26").replace(rg, "`").replace(j0, "{").replace(U0, "}").replace(M0, "^")
}

function cg(e) {
    return _l(e).replace(tg, "%3D")
}

function ug(e) {
    return ci(e).replace(F0, "%23").replace(ng, "%3F")
}

function dg(e) {
    return e == null ? "" : ug(e).replace(eg, "%2F")
}

function es(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {
    }
    return "" + e
}

const fg = /\/$/, hg = e => e.replace(fg, "");

function qr(e, t, n = "/") {
    let o, s = {}, r = "", l = "";
    const i = t.indexOf("#");
    let a = t.indexOf("?");
    return i < a && i >= 0 && (a = -1), a > -1 && (o = t.slice(0, a), r = t.slice(a + 1, i > -1 ? i : t.length), s = e(r)), i > -1 && (o = o || t.slice(0, i), l = t.slice(i, t.length)), o = vg(o ?? t, n), {
        fullPath: o + (r && "?") + r + l,
        path: o,
        query: s,
        hash: es(l)
    }
}

function mg(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function ja(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function gg(e, t, n) {
    const o = t.matched.length - 1, s = n.matched.length - 1;
    return o > -1 && o === s && _o(t.matched[o], n.matched[s]) && H0(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function _o(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function H0(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!pg(e[n], t[n])) return !1;
    return !0
}

function pg(e, t) {
    return Nt(e) ? Ua(e, t) : Nt(t) ? Ua(t, e) : e === t
}

function Ua(e, t) {
    return Nt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}

function vg(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
    (s === ".." || s === ".") && o.push("");
    let r = n.length - 1, l, i;
    for (l = 0; l < o.length; l++) if (i = o[l], i !== ".") if (i === "..") r > 1 && r--; else break;
    return n.slice(0, r).join("/") + "/" + o.slice(l).join("/")
}

const cn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var ts;
(function (e) {
    e.pop = "pop", e.push = "push"
})(ts || (ts = {}));
var Ko;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Ko || (Ko = {}));

function _g(e) {
    if (!e) if (ao) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), hg(e)
}

const bg = /^[^#]+#/;

function yg(e, t) {
    return e.replace(bg, "#") + t
}

function wg(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0)
    }
}

const vr = () => ({left: window.scrollX, top: window.scrollY});

function Cg(e) {
    let t;
    if ("el" in e) {
        const n = e.el, o = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s) return;
        t = wg(s, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Ha(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}

const bl = new Map;

function Sg(e, t) {
    bl.set(e, t)
}

function xg(e) {
    const t = bl.get(e);
    return bl.delete(e), t
}

let Eg = () => location.protocol + "//" + location.host;

function z0(e, t) {
    const {pathname: n, search: o, hash: s} = t, r = e.indexOf("#");
    if (r > -1) {
        let i = s.includes(e.slice(r)) ? e.slice(r).length : 1, a = s.slice(i);
        return a[0] !== "/" && (a = "/" + a), ja(a, "")
    }
    return ja(n, e) + o + s
}

function Tg(e, t, n, o) {
    let s = [], r = [], l = null;
    const i = ({state: f}) => {
        const m = z0(e, location), p = n.value, g = t.value;
        let _ = 0;
        if (f) {
            if (n.value = m, t.value = f, l && l === p) {
                l = null;
                return
            }
            _ = g ? f.position - g.position : 0
        } else o(m);
        s.forEach(b => {
            b(n.value, p, {
                delta: _,
                type: ts.pop,
                direction: _ ? _ > 0 ? Ko.forward : Ko.back : Ko.unknown
            })
        })
    };

    function a() {
        l = n.value
    }

    function c(f) {
        s.push(f);
        const m = () => {
            const p = s.indexOf(f);
            p > -1 && s.splice(p, 1)
        };
        return r.push(m), m
    }

    function u() {
        const {history: f} = window;
        f.state && f.replaceState(Ne({}, f.state, {scroll: vr()}), "")
    }

    function d() {
        for (const f of r) f();
        r = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", u)
    }

    return window.addEventListener("popstate", i), window.addEventListener("beforeunload", u, {passive: !0}), {
        pauseListeners: a,
        listen: c,
        destroy: d
    }
}

function za(e, t, n, o = !1, s = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: o,
        position: window.history.length,
        scroll: s ? vr() : null
    }
}

function kg(e) {
    const {history: t, location: n} = window, o = {value: z0(e, n)},
        s = {value: t.state};
    s.value || r(o.value, {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function r(a, c, u) {
        const d = e.indexOf("#"),
            f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a : Eg() + e + a;
        try {
            t[u ? "replaceState" : "pushState"](c, "", f), s.value = c
        } catch (m) {
            console.error(m), n[u ? "replace" : "assign"](f)
        }
    }

    function l(a, c) {
        const u = Ne({}, t.state, za(s.value.back, a, s.value.forward, !0), c, {position: s.value.position});
        r(a, u, !0), o.value = a
    }

    function i(a, c) {
        const u = Ne({}, s.value, t.state, {forward: a, scroll: vr()});
        r(u.current, u, !0);
        const d = Ne({}, za(o.value, a, null), {position: u.position + 1}, c);
        r(a, d, !1), o.value = a
    }

    return {location: o, state: s, push: i, replace: l}
}

function Ag(e) {
    e = _g(e);
    const t = kg(e), n = Tg(e, t.state, t.location, t.replace);

    function o(r, l = !0) {
        l || n.pauseListeners(), history.go(r)
    }

    const s = Ne({
        location: "",
        base: e,
        go: o,
        createHref: yg.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), s
}

function Ig(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function q0(e) {
    return typeof e == "string" || typeof e == "symbol"
}

const K0 = Symbol("");
var qa;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(qa || (qa = {}));

function bo(e, t) {
    return Ne(new Error, {type: e, [K0]: !0}, t)
}

function Xt(e, t) {
    return e instanceof Error && K0 in e && (t == null || !!(e.type & t))
}

const Ka = "[^/]+?", Pg = {sensitive: !1, strict: !1, start: !0, end: !0},
    Rg = /[.+*?^${}()[\]/\\]/g;

function Og(e, t) {
    const n = Ne({}, Pg, t), o = [];
    let s = n.start ? "^" : "";
    const r = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (s += "/");
        for (let d = 0; d < c.length; d++) {
            const f = c[d];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0) d || (s += "/"), s += f.value.replace(Rg, "\\$&"), m += 40; else if (f.type === 1) {
                const {value: p, repeatable: g, optional: _, regexp: b} = f;
                r.push({name: p, repeatable: g, optional: _});
                const y = b || Ka;
                if (y !== Ka) {
                    m += 10;
                    try {
                        new RegExp(`(${y})`)
                    } catch (T) {
                        throw new Error(`Invalid custom RegExp for param "${p}" (${y}): ` + T.message)
                    }
                }
                let x = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
                d || (x = _ && c.length < 2 ? `(?:/${x})` : "/" + x), _ && (x += "?"), s += x, m += 20, _ && (m += -8), g && (m += -20), y === ".*" && (m += -50)
            }
            u.push(m)
        }
        o.push(u)
    }
    if (n.strict && n.end) {
        const c = o.length - 1;
        o[c][o[c].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const l = new RegExp(s, n.sensitive ? "" : "i");

    function i(c) {
        const u = c.match(l), d = {};
        if (!u) return null;
        for (let f = 1; f < u.length; f++) {
            const m = u[f] || "", p = r[f - 1];
            d[p.name] = m && p.repeatable ? m.split("/") : m
        }
        return d
    }

    function a(c) {
        let u = "", d = !1;
        for (const f of e) {
            (!d || !u.endsWith("/")) && (u += "/"), d = !1;
            for (const m of f) if (m.type === 0) u += m.value; else if (m.type === 1) {
                const {value: p, repeatable: g, optional: _} = m,
                    b = p in c ? c[p] : "";
                if (Nt(b) && !g) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
                const y = Nt(b) ? b.join("/") : b;
                if (!y) if (_) f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0); else throw new Error(`Missing required param "${p}"`);
                u += y
            }
        }
        return u || "/"
    }

    return {re: l, score: o, keys: r, parse: i, stringify: a}
}

function $g(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const o = t[n] - e[n];
        if (o) return o;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function W0(e, t) {
    let n = 0;
    const o = e.score, s = t.score;
    for (; n < o.length && n < s.length;) {
        const r = $g(o[n], s[n]);
        if (r) return r;
        n++
    }
    if (Math.abs(s.length - o.length) === 1) {
        if (Wa(o)) return 1;
        if (Wa(s)) return -1
    }
    return s.length - o.length
}

function Wa(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}

const Bg = {type: 0, value: ""}, Lg = /[a-zA-Z0-9_]/;

function Dg(e) {
    if (!e) return [[]];
    if (e === "/") return [[Bg]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(m) {
        throw new Error(`ERR (${n})/"${c}": ${m}`)
    }

    let n = 0, o = n;
    const s = [];
    let r;

    function l() {
        r && s.push(r), r = []
    }

    let i = 0, a, c = "", u = "";

    function d() {
        c && (n === 0 ? r.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function f() {
        c += a
    }

    for (; i < e.length;) {
        if (a = e[i++], a === "\\" && n !== 2) {
            o = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                a === "/" ? (c && d(), l()) : a === ":" ? (d(), n = 1) : f();
                break;
            case 4:
                f(), n = o;
                break;
            case 1:
                a === "(" ? n = 2 : Lg.test(a) ? f() : (d(), n = 0, a !== "*" && a !== "?" && a !== "+" && i--);
                break;
            case 2:
                a === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + a : n = 3 : u += a;
                break;
            case 3:
                d(), n = 0, a !== "*" && a !== "?" && a !== "+" && i--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), l(), s
}

function Ng(e, t, n) {
    const o = Og(Dg(e.path), n),
        s = Ne(o, {record: e, parent: t, children: [], alias: []});
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function Fg(e, t) {
    const n = [], o = new Map;
    t = Ya({strict: !1, end: !0, sensitive: !1}, t);

    function s(d) {
        return o.get(d)
    }

    function r(d, f, m) {
        const p = !m, g = Vg(d);
        g.aliasOf = m && m.record;
        const _ = Ya(t, d), b = [g];
        if ("alias" in d) {
            const T = typeof d.alias == "string" ? [d.alias] : d.alias;
            for (const E of T) b.push(Ne({}, g, {
                components: m ? m.record.components : g.components,
                path: E,
                aliasOf: m ? m.record : g
            }))
        }
        let y, x;
        for (const T of b) {
            const {path: E} = T;
            if (f && E[0] !== "/") {
                const S = f.record.path, P = S[S.length - 1] === "/" ? "" : "/";
                T.path = f.record.path + (E && P + E)
            }
            if (y = Ng(T, f, _), m ? m.alias.push(y) : (x = x || y, x !== y && x.alias.push(y), p && d.name && !Ja(y) && l(d.name)), G0(y) && a(y), g.children) {
                const S = g.children;
                for (let P = 0; P < S.length; P++) r(S[P], y, m && m.children[P])
            }
            m = m || y
        }
        return x ? () => {
            l(x)
        } : qo
    }

    function l(d) {
        if (q0(d)) {
            const f = o.get(d);
            f && (o.delete(d), n.splice(n.indexOf(f), 1), f.children.forEach(l), f.alias.forEach(l))
        } else {
            const f = n.indexOf(d);
            f > -1 && (n.splice(f, 1), d.record.name && o.delete(d.record.name), d.children.forEach(l), d.alias.forEach(l))
        }
    }

    function i() {
        return n
    }

    function a(d) {
        const f = Ug(d, n);
        n.splice(f, 0, d), d.record.name && !Ja(d) && o.set(d.record.name, d)
    }

    function c(d, f) {
        let m, p = {}, g, _;
        if ("name" in d && d.name) {
            if (m = o.get(d.name), !m) throw bo(1, {location: d});
            _ = m.record.name, p = Ne(Ga(f.params, m.keys.filter(x => !x.optional).concat(m.parent ? m.parent.keys.filter(x => x.optional) : []).map(x => x.name)), d.params && Ga(d.params, m.keys.map(x => x.name))), g = m.stringify(p)
        } else if (d.path != null) g = d.path, m = n.find(x => x.re.test(g)), m && (p = m.parse(g), _ = m.record.name); else {
            if (m = f.name ? o.get(f.name) : n.find(x => x.re.test(f.path)), !m) throw bo(1, {
                location: d,
                currentLocation: f
            });
            _ = m.record.name, p = Ne({}, f.params, d.params), g = m.stringify(p)
        }
        const b = [];
        let y = m;
        for (; y;) b.unshift(y.record), y = y.parent;
        return {name: _, path: g, params: p, matched: b, meta: jg(b)}
    }

    e.forEach(d => r(d));

    function u() {
        n.length = 0, o.clear()
    }

    return {
        addRoute: r,
        resolve: c,
        removeRoute: l,
        clearRoutes: u,
        getRoutes: i,
        getRecordMatcher: s
    }
}

function Ga(e, t) {
    const n = {};
    for (const o of t) o in e && (n[o] = e[o]);
    return n
}

function Vg(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Mg(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {default: e.component}
    }
}

function Mg(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n; else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
    return t
}

function Ja(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function jg(e) {
    return e.reduce((t, n) => Ne(t, n.meta), {})
}

function Ya(e, t) {
    const n = {};
    for (const o in e) n[o] = o in t ? t[o] : e[o];
    return n
}

function Ug(e, t) {
    let n = 0, o = t.length;
    for (; n !== o;) {
        const r = n + o >> 1;
        W0(e, t[r]) < 0 ? o = r : n = r + 1
    }
    const s = Hg(e);
    return s && (o = t.lastIndexOf(s, o - 1)), o
}

function Hg(e) {
    let t = e;
    for (; t = t.parent;) if (G0(t) && W0(e, t) === 0) return t
}

function G0({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function zg(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const o = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < o.length; ++s) {
        const r = o[s].replace(V0, " "), l = r.indexOf("="),
            i = es(l < 0 ? r : r.slice(0, l)),
            a = l < 0 ? null : es(r.slice(l + 1));
        if (i in t) {
            let c = t[i];
            Nt(c) || (c = t[i] = [c]), c.push(a)
        } else t[i] = a
    }
    return t
}

function Xa(e) {
    let t = "";
    for (let n in e) {
        const o = e[n];
        if (n = cg(n), o == null) {
            o !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Nt(o) ? o.map(r => r && _l(r)) : [o && _l(o)]).forEach(r => {
            r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r))
        })
    }
    return t
}

function qg(e) {
    const t = {};
    for (const n in e) {
        const o = e[n];
        o !== void 0 && (t[n] = Nt(o) ? o.map(s => s == null ? null : "" + s) : o == null ? o : "" + o)
    }
    return t
}

const Kg = Symbol(""), Qa = Symbol(""), _r = Symbol(""), ui = Symbol(""),
    yl = Symbol("");

function Lo() {
    let e = [];

    function t(o) {
        return e.push(o), () => {
            const s = e.indexOf(o);
            s > -1 && e.splice(s, 1)
        }
    }

    function n() {
        e = []
    }

    return {add: t, list: () => e.slice(), reset: n}
}

function gn(e, t, n, o, s, r = l => l()) {
    const l = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
    return () => new Promise((i, a) => {
        const c = f => {
            f === !1 ? a(bo(4, {
                from: n,
                to: t
            })) : f instanceof Error ? a(f) : Ig(f) ? a(bo(2, {
                from: t,
                to: f
            })) : (l && o.enterCallbacks[s] === l && typeof f == "function" && l.push(f), i())
        }, u = r(() => e.call(o && o.instances[s], t, n, c));
        let d = Promise.resolve(u);
        e.length < 3 && (d = d.then(c)), d.catch(f => a(f))
    })
}

function Kr(e, t, n, o, s = r => r()) {
    const r = [];
    for (const l of e) for (const i in l.components) {
        let a = l.components[i];
        if (!(t !== "beforeRouteEnter" && !l.instances[i])) if (Wg(a)) {
            const u = (a.__vccOpts || a)[t];
            u && r.push(gn(u, n, o, l, i, s))
        } else {
            let c = a();
            r.push(() => c.then(u => {
                if (!u) return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));
                const d = Qm(u) ? u.default : u;
                l.components[i] = d;
                const m = (d.__vccOpts || d)[t];
                return m && gn(m, n, o, l, i, s)()
            }))
        }
    }
    return r
}

function Wg(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Za(e) {
    const t = it(_r), n = it(ui), o = J(() => {
            const a = V(e.to);
            return t.resolve(a)
        }), s = J(() => {
            const {matched: a} = o.value, {length: c} = a, u = a[c - 1],
                d = n.matched;
            if (!u || !d.length) return -1;
            const f = d.findIndex(_o.bind(null, u));
            if (f > -1) return f;
            const m = ec(a[c - 2]);
            return c > 1 && ec(u) === m && d[d.length - 1].path !== m ? d.findIndex(_o.bind(null, a[c - 2])) : f
        }), r = J(() => s.value > -1 && Xg(n.params, o.value.params)),
        l = J(() => s.value > -1 && s.value === n.matched.length - 1 && H0(n.params, o.value.params));

    function i(a = {}) {
        return Yg(a) ? t[V(e.replace) ? "replace" : "push"](V(e.to)).catch(qo) : Promise.resolve()
    }

    return {
        route: o,
        href: J(() => o.value.href),
        isActive: r,
        isExactActive: l,
        navigate: i
    }
}

const Gg = re({
    name: "RouterLink",
    compatConfig: {MODE: 3},
    props: {
        to: {type: [String, Object], required: !0},
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {type: String, default: "page"}
    },
    useLink: Za,
    setup(e, {slots: t}) {
        const n = Me(Za(e)), {options: o} = it(_r), s = J(() => ({
            [tc(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
            [tc(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const r = t.default && t.default(n);
            return e.custom ? r : Xl("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, r)
        }
    }
}), Jg = Gg;

function Yg(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Xg(e, t) {
    for (const n in t) {
        const o = t[n], s = e[n];
        if (typeof o == "string") {
            if (o !== s) return !1
        } else if (!Nt(s) || s.length !== o.length || o.some((r, l) => r !== s[l])) return !1
    }
    return !0
}

function ec(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

const tc = (e, t, n) => e ?? t ?? n, Qg = re({
    name: "RouterView",
    inheritAttrs: !1,
    props: {name: {type: String, default: "default"}, route: Object},
    compatConfig: {MODE: 3},
    setup(e, {attrs: t, slots: n}) {
        const o = it(yl), s = J(() => e.route || o.value), r = it(Qa, 0),
            l = J(() => {
                let c = V(r);
                const {matched: u} = s.value;
                let d;
                for (; (d = u[c]) && !d.components;) c++;
                return c
            }), i = J(() => s.value.matched[l.value]);
        Fn(Qa, J(() => l.value + 1)), Fn(Kg, i), Fn(yl, s);
        const a = L();
        return Ee(() => [a.value, i.value, e.name], ([c, u, d], [f, m, p]) => {
            u && (u.instances[d] = c, m && m !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), c && u && (!m || !_o(u, m) || !f) && (u.enterCallbacks[d] || []).forEach(g => g(c))
        }, {flush: "post"}), () => {
            const c = s.value, u = e.name, d = i.value,
                f = d && d.components[u];
            if (!f) return nc(n.default, {Component: f, route: c});
            const m = d.props[u],
                p = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null,
                _ = Xl(f, Ne({}, p, t, {
                    onVnodeUnmounted: b => {
                        b.component.isUnmounted && (d.instances[u] = null)
                    }, ref: a
                }));
            return nc(n.default, {Component: _, route: c}) || _
        }
    }
});

function nc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}

const Zg = Qg;

function ep(e) {
    const t = Fg(e.routes, e), n = e.parseQuery || zg,
        o = e.stringifyQuery || Xa, s = e.history, r = Lo(), l = Lo(), i = Lo(),
        a = lf(cn);
    let c = cn;
    ao && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = zr.bind(null, C => "" + C), d = zr.bind(null, dg),
        f = zr.bind(null, es);

    function m(C, U) {
        let M, W;
        return q0(C) ? (M = t.getRecordMatcher(C), W = U) : W = C, t.addRoute(W, M)
    }

    function p(C) {
        const U = t.getRecordMatcher(C);
        U && t.removeRoute(U)
    }

    function g() {
        return t.getRoutes().map(C => C.record)
    }

    function _(C) {
        return !!t.getRecordMatcher(C)
    }

    function b(C, U) {
        if (U = Ne({}, U || a.value), typeof C == "string") {
            const w = qr(n, C, U.path), k = t.resolve({path: w.path}, U),
                j = s.createHref(w.fullPath);
            return Ne(w, k, {
                params: f(k.params),
                hash: es(w.hash),
                redirectedFrom: void 0,
                href: j
            })
        }
        let M;
        if (C.path != null) M = Ne({}, C, {path: qr(n, C.path, U.path).path}); else {
            const w = Ne({}, C.params);
            for (const k in w) w[k] == null && delete w[k];
            M = Ne({}, C, {params: d(w)}), U.params = d(U.params)
        }
        const W = t.resolve(M, U), ue = C.hash || "";
        W.params = u(f(W.params));
        const we = mg(o, Ne({}, C, {hash: ag(ue), path: W.path})),
            v = s.createHref(we);
        return Ne({
            fullPath: we,
            hash: ue,
            query: o === Xa ? qg(C.query) : C.query || {}
        }, W, {redirectedFrom: void 0, href: v})
    }

    function y(C) {
        return typeof C == "string" ? qr(n, C, a.value.path) : Ne({}, C)
    }

    function x(C, U) {
        if (c !== C) return bo(8, {from: U, to: C})
    }

    function T(C) {
        return P(C)
    }

    function E(C) {
        return T(Ne(y(C), {replace: !0}))
    }

    function S(C) {
        const U = C.matched[C.matched.length - 1];
        if (U && U.redirect) {
            const {redirect: M} = U;
            let W = typeof M == "function" ? M(C) : M;
            return typeof W == "string" && (W = W.includes("?") || W.includes("#") ? W = y(W) : {path: W}, W.params = {}), Ne({
                query: C.query,
                hash: C.hash,
                params: W.path != null ? {} : C.params
            }, W)
        }
    }

    function P(C, U) {
        const M = c = b(C), W = a.value, ue = C.state, we = C.force,
            v = C.replace === !0, w = S(M);
        if (w) return P(Ne(y(w), {
            state: typeof w == "object" ? Ne({}, ue, w.state) : ue,
            force: we,
            replace: v
        }), U || M);
        const k = M;
        k.redirectedFrom = U;
        let j;
        return !we && gg(o, W, M) && (j = bo(16, {
            to: k,
            from: W
        }), ee(W, W, !0, !1)), (j ? Promise.resolve(j) : F(k, W)).catch(N => Xt(N) ? Xt(N, 2) ? N : lt(N) : fe(N, k, W)).then(N => {
            if (N) {
                if (Xt(N, 2)) return P(Ne({replace: v}, y(N.to), {
                    state: typeof N.to == "object" ? Ne({}, ue, N.to.state) : ue,
                    force: we
                }), U || k)
            } else N = A(k, W, !0, v, ue);
            return I(k, W, N), N
        })
    }

    function B(C, U) {
        const M = x(C, U);
        return M ? Promise.reject(M) : Promise.resolve()
    }

    function $(C) {
        const U = Ke.values().next().value;
        return U && typeof U.runWithContext == "function" ? U.runWithContext(C) : C()
    }

    function F(C, U) {
        let M;
        const [W, ue, we] = tp(C, U);
        M = Kr(W.reverse(), "beforeRouteLeave", C, U);
        for (const w of W) w.leaveGuards.forEach(k => {
            M.push(gn(k, C, U))
        });
        const v = B.bind(null, C, U);
        return M.push(v), $e(M).then(() => {
            M = [];
            for (const w of r.list()) M.push(gn(w, C, U));
            return M.push(v), $e(M)
        }).then(() => {
            M = Kr(ue, "beforeRouteUpdate", C, U);
            for (const w of ue) w.updateGuards.forEach(k => {
                M.push(gn(k, C, U))
            });
            return M.push(v), $e(M)
        }).then(() => {
            M = [];
            for (const w of we) if (w.beforeEnter) if (Nt(w.beforeEnter)) for (const k of w.beforeEnter) M.push(gn(k, C, U)); else M.push(gn(w.beforeEnter, C, U));
            return M.push(v), $e(M)
        }).then(() => (C.matched.forEach(w => w.enterCallbacks = {}), M = Kr(we, "beforeRouteEnter", C, U, $), M.push(v), $e(M))).then(() => {
            M = [];
            for (const w of l.list()) M.push(gn(w, C, U));
            return M.push(v), $e(M)
        }).catch(w => Xt(w, 8) ? w : Promise.reject(w))
    }

    function I(C, U, M) {
        i.list().forEach(W => $(() => W(C, U, M)))
    }

    function A(C, U, M, W, ue) {
        const we = x(C, U);
        if (we) return we;
        const v = U === cn, w = ao ? history.state : {};
        M && (W || v ? s.replace(C.fullPath, Ne({scroll: v && w && w.scroll}, ue)) : s.push(C.fullPath, ue)), a.value = C, ee(C, U, M, v), lt()
    }

    let H;

    function Z() {
        H || (H = s.listen((C, U, M) => {
            if (!be.listening) return;
            const W = b(C), ue = S(W);
            if (ue) {
                P(Ne(ue, {replace: !0}), W).catch(qo);
                return
            }
            c = W;
            const we = a.value;
            ao && Sg(Ha(we.fullPath, M.delta), vr()), F(W, we).catch(v => Xt(v, 12) ? v : Xt(v, 2) ? (P(v.to, W).then(w => {
                Xt(w, 20) && !M.delta && M.type === ts.pop && s.go(-1, !1)
            }).catch(qo), Promise.reject()) : (M.delta && s.go(-M.delta, !1), fe(v, W, we))).then(v => {
                v = v || A(W, we, !1), v && (M.delta && !Xt(v, 8) ? s.go(-M.delta, !1) : M.type === ts.pop && Xt(v, 20) && s.go(-1, !1)), I(W, we, v)
            }).catch(qo)
        }))
    }

    let ae = Lo(), ne = Lo(), oe;

    function fe(C, U, M) {
        lt(C);
        const W = ne.list();
        return W.length ? W.forEach(ue => ue(C, U, M)) : console.error(C), Promise.reject(C)
    }

    function et() {
        return oe && a.value !== cn ? Promise.resolve() : new Promise((C, U) => {
            ae.add([C, U])
        })
    }

    function lt(C) {
        return oe || (oe = !C, Z(), ae.list().forEach(([U, M]) => C ? M(C) : U()), ae.reset()), C
    }

    function ee(C, U, M, W) {
        const {scrollBehavior: ue} = e;
        if (!ao || !ue) return Promise.resolve();
        const we = !M && xg(Ha(C.fullPath, 0)) || (W || !M) && history.state && history.state.scroll || null;
        return Ge().then(() => ue(C, U, we)).then(v => v && Cg(v)).catch(v => fe(v, C, U))
    }

    const _e = C => s.go(C);
    let Te;
    const Ke = new Set, be = {
        currentRoute: a,
        listening: !0,
        addRoute: m,
        removeRoute: p,
        clearRoutes: t.clearRoutes,
        hasRoute: _,
        getRoutes: g,
        resolve: b,
        options: e,
        push: T,
        replace: E,
        go: _e,
        back: () => _e(-1),
        forward: () => _e(1),
        beforeEach: r.add,
        beforeResolve: l.add,
        afterEach: i.add,
        onError: ne.add,
        isReady: et,
        install(C) {
            const U = this;
            C.component("RouterLink", Jg), C.component("RouterView", Zg), C.config.globalProperties.$router = U, Object.defineProperty(C.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => V(a)
            }), ao && !Te && a.value === cn && (Te = !0, T(s.location).catch(ue => {
            }));
            const M = {};
            for (const ue in cn) Object.defineProperty(M, ue, {
                get: () => a.value[ue],
                enumerable: !0
            });
            C.provide(_r, U), C.provide(ui, jc(M)), C.provide(yl, a);
            const W = C.unmount;
            Ke.add(C), C.unmount = function () {
                Ke.delete(C), Ke.size < 1 && (c = cn, H && H(), H = null, a.value = cn, Te = !1, oe = !1), W()
            }
        }
    };

    function $e(C) {
        return C.reduce((U, M) => U.then(() => $(M)), Promise.resolve())
    }

    return be
}

function tp(e, t) {
    const n = [], o = [], s = [],
        r = Math.max(t.matched.length, e.matched.length);
    for (let l = 0; l < r; l++) {
        const i = t.matched[l];
        i && (e.matched.find(c => _o(c, i)) ? o.push(i) : n.push(i));
        const a = e.matched[l];
        a && (t.matched.find(c => _o(c, a)) || s.push(a))
    }
    return [n, o, s]
}

function np() {
    return it(_r)
}

function On(e) {
    return it(ui)
}

function J0(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}

const {toString: op} = Object.prototype, {getPrototypeOf: di} = Object,
    br = (e => t => {
        const n = op.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), jt = e => (e = e.toLowerCase(), t => br(t) === e),
    yr = e => t => typeof t === e, {isArray: To} = Array, ns = yr("undefined");

function sp(e) {
    return e !== null && !ns(e) && e.constructor !== null && !ns(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}

const Y0 = jt("ArrayBuffer");

function rp(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Y0(e.buffer), t
}

const lp = yr("string"), It = yr("function"), X0 = yr("number"),
    wr = e => e !== null && typeof e == "object",
    ip = e => e === !0 || e === !1, Fs = e => {
        if (br(e) !== "object") return !1;
        const t = di(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }, ap = jt("Date"), cp = jt("File"), up = jt("Blob"), dp = jt("FileList"),
    fp = e => wr(e) && It(e.pipe), hp = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = br(e)) === "formdata" || t === "object" && It(e.toString) && e.toString() === "[object FormData]"))
    },
    mp = jt("URLSearchParams"), [gp, pp, vp, _p] = ["ReadableStream", "Request", "Response", "Headers"].map(jt),
    bp = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function ds(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u") return;
    let o, s;
    if (typeof e != "object" && (e = [e]), To(e)) for (o = 0, s = e.length; o < s; o++) t.call(null, e[o], o, e); else {
        const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = r.length;
        let i;
        for (o = 0; o < l; o++) i = r[o], t.call(null, e[i], i, e)
    }
}

function Q0(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let o = n.length, s;
    for (; o-- > 0;) if (s = n[o], t === s.toLowerCase()) return s;
    return null
}

const Z0 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    ed = e => !ns(e) && e !== Z0;

function wl() {
    const {caseless: e} = ed(this) && this || {}, t = {}, n = (o, s) => {
        const r = e && Q0(t, s) || s;
        Fs(t[r]) && Fs(o) ? t[r] = wl(t[r], o) : Fs(o) ? t[r] = wl({}, o) : To(o) ? t[r] = o.slice() : t[r] = o
    };
    for (let o = 0, s = arguments.length; o < s; o++) arguments[o] && ds(arguments[o], n);
    return t
}

const yp = (e, t, n, {allOwnKeys: o} = {}) => (ds(t, (s, r) => {
        n && It(s) ? e[r] = J0(s, n) : e[r] = s
    }, {allOwnKeys: o}), e),
    wp = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Cp = (e, t, n, o) => {
        e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
    }, Sp = (e, t, n, o) => {
        let s, r, l;
        const i = {};
        if (t = t || {}, e == null) return t;
        do {
            for (s = Object.getOwnPropertyNames(e), r = s.length; r-- > 0;) l = s[r], (!o || o(l, e, t)) && !i[l] && (t[l] = e[l], i[l] = !0);
            e = n !== !1 && di(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }, xp = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const o = e.indexOf(t, n);
        return o !== -1 && o === n
    }, Ep = e => {
        if (!e) return null;
        if (To(e)) return e;
        let t = e.length;
        if (!X0(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    Tp = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && di(Uint8Array)),
    kp = (e, t) => {
        const o = (e && e[Symbol.iterator]).call(e);
        let s;
        for (; (s = o.next()) && !s.done;) {
            const r = s.value;
            t.call(e, r[0], r[1])
        }
    }, Ap = (e, t) => {
        let n;
        const o = [];
        for (; (n = e.exec(t)) !== null;) o.push(n);
        return o
    }, Ip = jt("HTMLFormElement"),
    Pp = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, o, s) {
        return o.toUpperCase() + s
    }),
    oc = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype),
    Rp = jt("RegExp"), td = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e), o = {};
        ds(n, (s, r) => {
            let l;
            (l = t(s, r, e)) !== !1 && (o[r] = l || s)
        }), Object.defineProperties(e, o)
    }, Op = e => {
        td(e, (t, n) => {
            if (It(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const o = e[n];
            if (It(o)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    }, $p = (e, t) => {
        const n = {}, o = s => {
            s.forEach(r => {
                n[r] = !0
            })
        };
        return To(e) ? o(e) : o(String(e).split(t)), n
    }, Bp = () => {
    }, Lp = (e, t) => e != null && Number.isFinite(e = +e) ? e : t,
    Wr = "abcdefghijklmnopqrstuvwxyz", sc = "0123456789",
    nd = {DIGIT: sc, ALPHA: Wr, ALPHA_DIGIT: Wr + Wr.toUpperCase() + sc},
    Dp = (e = 16, t = nd.ALPHA_DIGIT) => {
        let n = "";
        const {length: o} = t;
        for (; e--;) n += t[Math.random() * o | 0];
        return n
    };

function Np(e) {
    return !!(e && It(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}

const Fp = e => {
        const t = new Array(10), n = (o, s) => {
            if (wr(o)) {
                if (t.indexOf(o) >= 0) return;
                if (!("toJSON" in o)) {
                    t[s] = o;
                    const r = To(o) ? [] : {};
                    return ds(o, (l, i) => {
                        const a = n(l, s + 1);
                        !ns(a) && (r[i] = a)
                    }), t[s] = void 0, r
                }
            }
            return o
        };
        return n(e, 0)
    }, Vp = jt("AsyncFunction"),
    Mp = e => e && (wr(e) || It(e)) && It(e.then) && It(e.catch), O = {
        isArray: To,
        isArrayBuffer: Y0,
        isBuffer: sp,
        isFormData: hp,
        isArrayBufferView: rp,
        isString: lp,
        isNumber: X0,
        isBoolean: ip,
        isObject: wr,
        isPlainObject: Fs,
        isReadableStream: gp,
        isRequest: pp,
        isResponse: vp,
        isHeaders: _p,
        isUndefined: ns,
        isDate: ap,
        isFile: cp,
        isBlob: up,
        isRegExp: Rp,
        isFunction: It,
        isStream: fp,
        isURLSearchParams: mp,
        isTypedArray: Tp,
        isFileList: dp,
        forEach: ds,
        merge: wl,
        extend: yp,
        trim: bp,
        stripBOM: wp,
        inherits: Cp,
        toFlatObject: Sp,
        kindOf: br,
        kindOfTest: jt,
        endsWith: xp,
        toArray: Ep,
        forEachEntry: kp,
        matchAll: Ap,
        isHTMLForm: Ip,
        hasOwnProperty: oc,
        hasOwnProp: oc,
        reduceDescriptors: td,
        freezeMethods: Op,
        toObjectSet: $p,
        toCamelCase: Pp,
        noop: Bp,
        toFiniteNumber: Lp,
        findKey: Q0,
        global: Z0,
        isContextDefined: ed,
        ALPHABET: nd,
        generateString: Dp,
        isSpecCompliantForm: Np,
        toJSONObject: Fp,
        isAsyncFn: Vp,
        isThenable: Mp
    };

function ve(e, t, n, o, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), s && (this.response = s)
}

O.inherits(ve, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: O.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const od = ve.prototype, sd = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    sd[e] = {value: e}
});
Object.defineProperties(ve, sd);
Object.defineProperty(od, "isAxiosError", {value: !0});
ve.from = (e, t, n, o, s, r) => {
    const l = Object.create(od);
    return O.toFlatObject(e, l, function (a) {
        return a !== Error.prototype
    }, i => i !== "isAxiosError"), ve.call(l, e.message, t, n, o, s), l.cause = e, l.name = e.name, r && Object.assign(l, r), l
};
const jp = null;

function Cl(e) {
    return O.isPlainObject(e) || O.isArray(e)
}

function rd(e) {
    return O.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function rc(e, t, n) {
    return e ? e.concat(t).map(function (s, r) {
        return s = rd(s), !n && r ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}

function Up(e) {
    return O.isArray(e) && !e.some(Cl)
}

const Hp = O.toFlatObject(O, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});

function Cr(e, t, n) {
    if (!O.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = O.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function (g, _) {
        return !O.isUndefined(_[g])
    });
    const o = n.metaTokens, s = n.visitor || u, r = n.dots, l = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
    if (!O.isFunction(s)) throw new TypeError("visitor must be a function");

    function c(p) {
        if (p === null) return "";
        if (O.isDate(p)) return p.toISOString();
        if (!a && O.isBlob(p)) throw new ve("Blob is not supported. Use a Buffer instead.");
        return O.isArrayBuffer(p) || O.isTypedArray(p) ? a && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }

    function u(p, g, _) {
        let b = p;
        if (p && !_ && typeof p == "object") {
            if (O.endsWith(g, "{}")) g = o ? g : g.slice(0, -2), p = JSON.stringify(p); else if (O.isArray(p) && Up(p) || (O.isFileList(p) || O.endsWith(g, "[]")) && (b = O.toArray(p))) return g = rd(g), b.forEach(function (x, T) {
                !(O.isUndefined(x) || x === null) && t.append(l === !0 ? rc([g], T, r) : l === null ? g : g + "[]", c(x))
            }), !1
        }
        return Cl(p) ? !0 : (t.append(rc(_, g, r), c(p)), !1)
    }

    const d = [], f = Object.assign(Hp, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: Cl
    });

    function m(p, g) {
        if (!O.isUndefined(p)) {
            if (d.indexOf(p) !== -1) throw Error("Circular reference detected in " + g.join("."));
            d.push(p), O.forEach(p, function (b, y) {
                (!(O.isUndefined(b) || b === null) && s.call(t, b, O.isString(y) ? y.trim() : y, g, f)) === !0 && m(b, g ? g.concat(y) : [y])
            }), d.pop()
        }
    }

    if (!O.isObject(e)) throw new TypeError("data must be an object");
    return m(e), t
}

function lc(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (o) {
        return t[o]
    })
}

function fi(e, t) {
    this._pairs = [], e && Cr(e, this, t)
}

const ld = fi.prototype;
ld.append = function (t, n) {
    this._pairs.push([t, n])
};
ld.toString = function (t) {
    const n = t ? function (o) {
        return t.call(this, o, lc)
    } : lc;
    return this._pairs.map(function (s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
};

function zp(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function id(e, t, n) {
    if (!t) return e;
    const o = n && n.encode || zp, s = n && n.serialize;
    let r;
    if (s ? r = s(t, n) : r = O.isURLSearchParams(t) ? t.toString() : new fi(t, n).toString(o), r) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + r
    }
    return e
}

class ic {
    constructor() {
        this.handlers = []
    }

    use(t, n, o) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: o ? o.synchronous : !1,
            runWhen: o ? o.runWhen : null
        }), this.handlers.length - 1
    }

    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(t) {
        O.forEach(this.handlers, function (o) {
            o !== null && t(o)
        })
    }
}

const ad = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }, qp = typeof URLSearchParams < "u" ? URLSearchParams : fi,
    Kp = typeof FormData < "u" ? FormData : null,
    Wp = typeof Blob < "u" ? Blob : null, Gp = {
        isBrowser: !0,
        classes: {URLSearchParams: qp, FormData: Kp, Blob: Wp},
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }, hi = typeof window < "u" && typeof document < "u",
    Jp = (e => hi && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    Yp = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    Xp = hi && window.location.href || "http://localhost",
    Qp = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: hi,
        hasStandardBrowserEnv: Jp,
        hasStandardBrowserWebWorkerEnv: Yp,
        origin: Xp
    }, Symbol.toStringTag, {value: "Module"})), Lt = {...Qp, ...Gp};

function Zp(e, t) {
    return Cr(e, new Lt.classes.URLSearchParams, Object.assign({
        visitor: function (n, o, s, r) {
            return Lt.isNode && O.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function e5(e) {
    return O.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function t5(e) {
    const t = {}, n = Object.keys(e);
    let o;
    const s = n.length;
    let r;
    for (o = 0; o < s; o++) r = n[o], t[r] = e[r];
    return t
}

function cd(e) {
    function t(n, o, s, r) {
        let l = n[r++];
        if (l === "__proto__") return !0;
        const i = Number.isFinite(+l), a = r >= n.length;
        return l = !l && O.isArray(s) ? s.length : l, a ? (O.hasOwnProp(s, l) ? s[l] = [s[l], o] : s[l] = o, !i) : ((!s[l] || !O.isObject(s[l])) && (s[l] = []), t(n, o, s[l], r) && O.isArray(s[l]) && (s[l] = t5(s[l])), !i)
    }

    if (O.isFormData(e) && O.isFunction(e.entries)) {
        const n = {};
        return O.forEachEntry(e, (o, s) => {
            t(e5(o), s, n, 0)
        }), n
    }
    return null
}

function n5(e, t, n) {
    if (O.isString(e)) try {
        return (t || JSON.parse)(e), O.trim(e)
    } catch (o) {
        if (o.name !== "SyntaxError") throw o
    }
    return (n || JSON.stringify)(e)
}

const fs = {
    transitional: ad,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (t, n) {
        const o = n.getContentType() || "",
            s = o.indexOf("application/json") > -1, r = O.isObject(t);
        if (r && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)) return s ? JSON.stringify(cd(t)) : t;
        if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t)) return t;
        if (O.isArrayBufferView(t)) return t.buffer;
        if (O.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let i;
        if (r) {
            if (o.indexOf("application/x-www-form-urlencoded") > -1) return Zp(t, this.formSerializer).toString();
            if ((i = O.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return Cr(i ? {"files[]": t} : t, a && new a, this.formSerializer)
            }
        }
        return r || s ? (n.setContentType("application/json", !1), n5(t)) : t
    }],
    transformResponse: [function (t) {
        const n = this.transitional || fs.transitional,
            o = n && n.forcedJSONParsing, s = this.responseType === "json";
        if (O.isResponse(t) || O.isReadableStream(t)) return t;
        if (t && O.isString(t) && (o && !this.responseType || s)) {
            const l = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (i) {
                if (l) throw i.name === "SyntaxError" ? ve.from(i, ve.ERR_BAD_RESPONSE, this, null, this.response) : i
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: Lt.classes.FormData, Blob: Lt.classes.Blob},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    fs.headers[e] = {}
});
const o5 = O.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    s5 = e => {
        const t = {};
        let n, o, s;
        return e && e.split(`
`).forEach(function (l) {
            s = l.indexOf(":"), n = l.substring(0, s).trim().toLowerCase(), o = l.substring(s + 1).trim(), !(!n || t[n] && o5[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o)
        }), t
    }, ac = Symbol("internals");

function Do(e) {
    return e && String(e).trim().toLowerCase()
}

function Vs(e) {
    return e === !1 || e == null ? e : O.isArray(e) ? e.map(Vs) : String(e)
}

function r5(e) {
    const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = n.exec(e);) t[o[1]] = o[2];
    return t
}

const l5 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Gr(e, t, n, o, s) {
    if (O.isFunction(o)) return o.call(this, t, n);
    if (s && (t = n), !!O.isString(t)) {
        if (O.isString(o)) return t.indexOf(o) !== -1;
        if (O.isRegExp(o)) return o.test(t)
    }
}

function i5(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o)
}

function a5(e, t) {
    const n = O.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(o => {
        Object.defineProperty(e, o + n, {
            value: function (s, r, l) {
                return this[o].call(this, t, s, r, l)
            }, configurable: !0
        })
    })
}

class gt {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, o) {
        const s = this;

        function r(i, a, c) {
            const u = Do(a);
            if (!u) throw new Error("header name must be a non-empty string");
            const d = O.findKey(s, u);
            (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || a] = Vs(i))
        }

        const l = (i, a) => O.forEach(i, (c, u) => r(c, u, a));
        if (O.isPlainObject(t) || t instanceof this.constructor) l(t, n); else if (O.isString(t) && (t = t.trim()) && !l5(t)) l(s5(t), n); else if (O.isHeaders(t)) for (const [i, a] of t.entries()) r(a, i, o); else t != null && r(n, t, o);
        return this
    }

    get(t, n) {
        if (t = Do(t), t) {
            const o = O.findKey(this, t);
            if (o) {
                const s = this[o];
                if (!n) return s;
                if (n === !0) return r5(s);
                if (O.isFunction(n)) return n.call(this, s, o);
                if (O.isRegExp(n)) return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = Do(t), t) {
            const o = O.findKey(this, t);
            return !!(o && this[o] !== void 0 && (!n || Gr(this, this[o], o, n)))
        }
        return !1
    }

    delete(t, n) {
        const o = this;
        let s = !1;

        function r(l) {
            if (l = Do(l), l) {
                const i = O.findKey(o, l);
                i && (!n || Gr(o, o[i], i, n)) && (delete o[i], s = !0)
            }
        }

        return O.isArray(t) ? t.forEach(r) : r(t), s
    }

    clear(t) {
        const n = Object.keys(this);
        let o = n.length, s = !1;
        for (; o--;) {
            const r = n[o];
            (!t || Gr(this, this[r], r, t, !0)) && (delete this[r], s = !0)
        }
        return s
    }

    normalize(t) {
        const n = this, o = {};
        return O.forEach(this, (s, r) => {
            const l = O.findKey(o, r);
            if (l) {
                n[l] = Vs(s), delete n[r];
                return
            }
            const i = t ? i5(r) : String(r).trim();
            i !== r && delete n[r], n[i] = Vs(s), o[i] = !0
        }), this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return O.forEach(this, (o, s) => {
            o != null && o !== !1 && (n[s] = t && O.isArray(o) ? o.join(", ") : o)
        }), n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const o = new this(t);
        return n.forEach(s => o.set(s)), o
    }

    static accessor(t) {
        const o = (this[ac] = this[ac] = {accessors: {}}).accessors,
            s = this.prototype;

        function r(l) {
            const i = Do(l);
            o[i] || (a5(s, l), o[i] = !0)
        }

        return O.isArray(t) ? t.forEach(r) : r(t), this
    }
}

gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(gt.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e, set(o) {
            this[n] = o
        }
    }
});
O.freezeMethods(gt);

function Jr(e, t) {
    const n = this || fs, o = t || n, s = gt.from(o.headers);
    let r = o.data;
    return O.forEach(e, function (i) {
        r = i.call(n, r, s.normalize(), t ? t.status : void 0)
    }), s.normalize(), r
}

function ud(e) {
    return !!(e && e.__CANCEL__)
}

function ko(e, t, n) {
    ve.call(this, e ?? "canceled", ve.ERR_CANCELED, t, n), this.name = "CanceledError"
}

O.inherits(ko, ve, {__CANCEL__: !0});

function dd(e, t, n) {
    const o = n.config.validateStatus;
    !n.status || !o || o(n.status) ? e(n) : t(new ve("Request failed with status code " + n.status, [ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function c5(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function u5(e, t) {
    e = e || 10;
    const n = new Array(e), o = new Array(e);
    let s = 0, r = 0, l;
    return t = t !== void 0 ? t : 1e3, function (a) {
        const c = Date.now(), u = o[r];
        l || (l = c), n[s] = a, o[s] = c;
        let d = r, f = 0;
        for (; d !== s;) f += n[d++], d = d % e;
        if (s = (s + 1) % e, s === r && (r = (r + 1) % e), c - l < t) return;
        const m = u && c - u;
        return m ? Math.round(f * 1e3 / m) : void 0
    }
}

function d5(e, t) {
    let n = 0;
    const o = 1e3 / t;
    let s = null;
    return function () {
        const l = this === !0, i = Date.now();
        if (l || i - n > o) return s && (clearTimeout(s), s = null), n = i, e.apply(null, arguments);
        s || (s = setTimeout(() => (s = null, n = Date.now(), e.apply(null, arguments)), o - (i - n)))
    }
}

const Gs = (e, t, n = 3) => {
    let o = 0;
    const s = u5(50, 250);
    return d5(r => {
        const l = r.loaded, i = r.lengthComputable ? r.total : void 0,
            a = l - o, c = s(a), u = l <= i;
        o = l;
        const d = {
            loaded: l,
            total: i,
            progress: i ? l / i : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && i && u ? (i - l) / c : void 0,
            event: r,
            lengthComputable: i != null
        };
        d[t ? "download" : "upload"] = !0, e(d)
    }, n)
}, f5 = Lt.hasStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let o;

    function s(r) {
        let l = r;
        return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }

    return o = s(window.location.href), function (l) {
        const i = O.isString(l) ? s(l) : l;
        return i.protocol === o.protocol && i.host === o.host
    }
}() : function () {
    return function () {
        return !0
    }
}(), h5 = Lt.hasStandardBrowserEnv ? {
    write(e, t, n, o, s, r) {
        const l = [e + "=" + encodeURIComponent(t)];
        O.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), O.isString(o) && l.push("path=" + o), O.isString(s) && l.push("domain=" + s), r === !0 && l.push("secure"), document.cookie = l.join("; ")
    }, read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    }, remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {
    }, read() {
        return null
    }, remove() {
    }
};

function m5(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function g5(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function fd(e, t) {
    return e && !m5(t) ? g5(e, t) : t
}

const cc = e => e instanceof gt ? {...e} : e;

function Hn(e, t) {
    t = t || {};
    const n = {};

    function o(c, u, d) {
        return O.isPlainObject(c) && O.isPlainObject(u) ? O.merge.call({caseless: d}, c, u) : O.isPlainObject(u) ? O.merge({}, u) : O.isArray(u) ? u.slice() : u
    }

    function s(c, u, d) {
        if (O.isUndefined(u)) {
            if (!O.isUndefined(c)) return o(void 0, c, d)
        } else return o(c, u, d)
    }

    function r(c, u) {
        if (!O.isUndefined(u)) return o(void 0, u)
    }

    function l(c, u) {
        if (O.isUndefined(u)) {
            if (!O.isUndefined(c)) return o(void 0, c)
        } else return o(void 0, u)
    }

    function i(c, u, d) {
        if (d in t) return o(c, u);
        if (d in e) return o(void 0, c)
    }

    const a = {
        url: r,
        method: r,
        data: r,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: i,
        headers: (c, u) => s(cc(c), cc(u), !0)
    };
    return O.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const d = a[u] || s, f = d(e[u], t[u], u);
        O.isUndefined(f) && d !== i || (n[u] = f)
    }), n
}

const hd = e => {
        const t = Hn({}, e);
        let {
            data: n,
            withXSRFToken: o,
            xsrfHeaderName: s,
            xsrfCookieName: r,
            headers: l,
            auth: i
        } = t;
        t.headers = l = gt.from(l), t.url = id(fd(t.baseURL, t.url), e.params, e.paramsSerializer), i && l.set("Authorization", "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")));
        let a;
        if (O.isFormData(n)) {
            if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0); else if ((a = l.getContentType()) !== !1) {
                const [c, ...u] = a ? a.split(";").map(d => d.trim()).filter(Boolean) : [];
                l.setContentType([c || "multipart/form-data", ...u].join("; "))
            }
        }
        if (Lt.hasStandardBrowserEnv && (o && O.isFunction(o) && (o = o(t)), o || o !== !1 && f5(t.url))) {
            const c = s && r && h5.read(r);
            c && l.set(s, c)
        }
        return t
    }, p5 = typeof XMLHttpRequest < "u", v5 = p5 && function (e) {
        return new Promise(function (n, o) {
            const s = hd(e);
            let r = s.data;
            const l = gt.from(s.headers).normalize();
            let {responseType: i} = s, a;

            function c() {
                s.cancelToken && s.cancelToken.unsubscribe(a), s.signal && s.signal.removeEventListener("abort", a)
            }

            let u = new XMLHttpRequest;
            u.open(s.method.toUpperCase(), s.url, !0), u.timeout = s.timeout;

            function d() {
                if (!u) return;
                const m = gt.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                    g = {
                        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
                        status: u.status,
                        statusText: u.statusText,
                        headers: m,
                        config: e,
                        request: u
                    };
                dd(function (b) {
                    n(b), c()
                }, function (b) {
                    o(b), c()
                }, g), u = null
            }

            "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function () {
                !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d)
            }, u.onabort = function () {
                u && (o(new ve("Request aborted", ve.ECONNABORTED, s, u)), u = null)
            }, u.onerror = function () {
                o(new ve("Network Error", ve.ERR_NETWORK, s, u)), u = null
            }, u.ontimeout = function () {
                let p = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
                const g = s.transitional || ad;
                s.timeoutErrorMessage && (p = s.timeoutErrorMessage), o(new ve(p, g.clarifyTimeoutError ? ve.ETIMEDOUT : ve.ECONNABORTED, s, u)), u = null
            }, r === void 0 && l.setContentType(null), "setRequestHeader" in u && O.forEach(l.toJSON(), function (p, g) {
                u.setRequestHeader(g, p)
            }), O.isUndefined(s.withCredentials) || (u.withCredentials = !!s.withCredentials), i && i !== "json" && (u.responseType = s.responseType), typeof s.onDownloadProgress == "function" && u.addEventListener("progress", Gs(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Gs(s.onUploadProgress)), (s.cancelToken || s.signal) && (a = m => {
                u && (o(!m || m.type ? new ko(null, e, u) : m), u.abort(), u = null)
            }, s.cancelToken && s.cancelToken.subscribe(a), s.signal && (s.signal.aborted ? a() : s.signal.addEventListener("abort", a)));
            const f = c5(s.url);
            if (f && Lt.protocols.indexOf(f) === -1) {
                o(new ve("Unsupported protocol " + f + ":", ve.ERR_BAD_REQUEST, e));
                return
            }
            u.send(r || null)
        })
    }, _5 = (e, t) => {
        let n = new AbortController, o;
        const s = function (a) {
            if (!o) {
                o = !0, l();
                const c = a instanceof Error ? a : this.reason;
                n.abort(c instanceof ve ? c : new ko(c instanceof Error ? c.message : c))
            }
        };
        let r = t && setTimeout(() => {
            s(new ve(`timeout ${t} of ms exceeded`, ve.ETIMEDOUT))
        }, t);
        const l = () => {
            e && (r && clearTimeout(r), r = null, e.forEach(a => {
                a && (a.removeEventListener ? a.removeEventListener("abort", s) : a.unsubscribe(s))
            }), e = null)
        };
        e.forEach(a => a && a.addEventListener && a.addEventListener("abort", s));
        const {signal: i} = n;
        return i.unsubscribe = l, [i, () => {
            r && clearTimeout(r), r = null
        }]
    }, b5 = function* (e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return
        }
        let o = 0, s;
        for (; o < n;) s = o + t, yield e.slice(o, s), o = s
    }, y5 = async function* (e, t, n) {
        for await(const o of e) yield* b5(ArrayBuffer.isView(o) ? o : await n(String(o)), t)
    }, uc = (e, t, n, o, s) => {
        const r = y5(e, t, s);
        let l = 0;
        return new ReadableStream({
            type: "bytes", async pull(i) {
                const {done: a, value: c} = await r.next();
                if (a) {
                    i.close(), o();
                    return
                }
                let u = c.byteLength;
                n && n(l += u), i.enqueue(new Uint8Array(c))
            }, cancel(i) {
                return o(i), r.return()
            }
        }, {highWaterMark: 2})
    }, dc = (e, t) => {
        const n = e != null;
        return o => setTimeout(() => t({lengthComputable: n, total: e, loaded: o}))
    },
    Sr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
    md = Sr && typeof ReadableStream == "function",
    Sl = Sr && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
    w5 = md && (() => {
        let e = !1;
        const t = new Request(Lt.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return e = !0, "half"
            }
        }).headers.has("Content-Type");
        return e && !t
    })(), fc = 64 * 1024, xl = md && !!(() => {
        try {
            return O.isReadableStream(new Response("").body)
        } catch {
        }
    })(), Js = {stream: xl && (e => e.body)};
Sr && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Js[t] && (Js[t] = O.isFunction(e[t]) ? n => n[t]() : (n, o) => {
            throw new ve(`Response type '${t}' is not supported`, ve.ERR_NOT_SUPPORT, o)
        })
    })
})(new Response);
const C5 = async e => {
    if (e == null) return 0;
    if (O.isBlob(e)) return e.size;
    if (O.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
    if (O.isArrayBufferView(e)) return e.byteLength;
    if (O.isURLSearchParams(e) && (e = e + ""), O.isString(e)) return (await Sl(e)).byteLength
}, S5 = async (e, t) => {
    const n = O.toFiniteNumber(e.getContentLength());
    return n ?? C5(t)
}, x5 = Sr && (async e => {
    let {
        url: t,
        method: n,
        data: o,
        signal: s,
        cancelToken: r,
        timeout: l,
        onDownloadProgress: i,
        onUploadProgress: a,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: f
    } = hd(e);
    c = c ? (c + "").toLowerCase() : "text";
    let [m, p] = s || r || l ? _5([s, r], l) : [], g, _;
    const b = () => {
        !g && setTimeout(() => {
            m && m.unsubscribe()
        }), g = !0
    };
    let y;
    try {
        if (a && w5 && n !== "get" && n !== "head" && (y = await S5(u, o)) !== 0) {
            let S = new Request(t, {method: "POST", body: o, duplex: "half"}),
                P;
            O.isFormData(o) && (P = S.headers.get("content-type")) && u.setContentType(P), S.body && (o = uc(S.body, fc, dc(y, Gs(a)), null, Sl))
        }
        O.isString(d) || (d = d ? "cors" : "omit"), _ = new Request(t, {
            ...f,
            signal: m,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: o,
            duplex: "half",
            withCredentials: d
        });
        let x = await fetch(_);
        const T = xl && (c === "stream" || c === "response");
        if (xl && (i || T)) {
            const S = {};
            ["status", "statusText", "headers"].forEach(B => {
                S[B] = x[B]
            });
            const P = O.toFiniteNumber(x.headers.get("content-length"));
            x = new Response(uc(x.body, fc, i && dc(P, Gs(i, !0)), T && b, Sl), S)
        }
        c = c || "text";
        let E = await Js[O.findKey(Js, c) || "text"](x, e);
        return !T && b(), p && p(), await new Promise((S, P) => {
            dd(S, P, {
                data: E,
                headers: gt.from(x.headers),
                status: x.status,
                statusText: x.statusText,
                config: e,
                request: _
            })
        })
    } catch (x) {
        throw b(), x && x.name === "TypeError" && /fetch/i.test(x.message) ? Object.assign(new ve("Network Error", ve.ERR_NETWORK, e, _), {cause: x.cause || x}) : ve.from(x, x && x.code, e, _)
    }
}), El = {http: jp, xhr: v5, fetch: x5};
O.forEach(El, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch {
        }
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const hc = e => `- ${e}`, E5 = e => O.isFunction(e) || e === null || e === !1,
    gd = {
        getAdapter: e => {
            e = O.isArray(e) ? e : [e];
            const {length: t} = e;
            let n, o;
            const s = {};
            for (let r = 0; r < t; r++) {
                n = e[r];
                let l;
                if (o = n, !E5(n) && (o = El[(l = String(n)).toLowerCase()], o === void 0)) throw new ve(`Unknown adapter '${l}'`);
                if (o) break;
                s[l || "#" + r] = o
            }
            if (!o) {
                const r = Object.entries(s).map(([i, a]) => `adapter ${i} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
                let l = t ? r.length > 1 ? `since :
` + r.map(hc).join(`
`) : " " + hc(r[0]) : "as no adapter specified";
                throw new ve("There is no suitable adapter to dispatch the request " + l, "ERR_NOT_SUPPORT")
            }
            return o
        }, adapters: El
    };

function Yr(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ko(null, e)
}

function mc(e) {
    return Yr(e), e.headers = gt.from(e.headers), e.data = Jr.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gd.getAdapter(e.adapter || fs.adapter)(e).then(function (o) {
        return Yr(e), o.data = Jr.call(e, e.transformResponse, o), o.headers = gt.from(o.headers), o
    }, function (o) {
        return ud(o) || (Yr(e), o && o.response && (o.response.data = Jr.call(e, e.transformResponse, o.response), o.response.headers = gt.from(o.response.headers))), Promise.reject(o)
    })
}

const pd = "1.7.2", mi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    mi[e] = function (o) {
        return typeof o === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const gc = {};
mi.transitional = function (t, n, o) {
    function s(r, l) {
        return "[Axios v" + pd + "] Transitional option '" + r + "'" + l + (o ? ". " + o : "")
    }

    return (r, l, i) => {
        if (t === !1) throw new ve(s(l, " has been removed" + (n ? " in " + n : "")), ve.ERR_DEPRECATED);
        return n && !gc[l] && (gc[l] = !0, console.warn(s(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(r, l, i) : !0
    }
};

function T5(e, t, n) {
    if (typeof e != "object") throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(e);
    let s = o.length;
    for (; s-- > 0;) {
        const r = o[s], l = t[r];
        if (l) {
            const i = e[r], a = i === void 0 || l(i, r, e);
            if (a !== !0) throw new ve("option " + r + " must be " + a, ve.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new ve("Unknown option " + r, ve.ERR_BAD_OPTION)
    }
}

const Tl = {assertOptions: T5, validators: mi}, un = Tl.validators;

class Mn {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new ic,
            response: new ic
        }
    }

    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (o) {
            if (o instanceof Error) {
                let s;
                Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error;
                const r = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                try {
                    o.stack ? r && !String(o.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + r) : o.stack = r
                } catch {
                }
            }
            throw o
        }
    }

    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Hn(this.defaults, n);
        const {transitional: o, paramsSerializer: s, headers: r} = n;
        o !== void 0 && Tl.assertOptions(o, {
            silentJSONParsing: un.transitional(un.boolean),
            forcedJSONParsing: un.transitional(un.boolean),
            clarifyTimeoutError: un.transitional(un.boolean)
        }, !1), s != null && (O.isFunction(s) ? n.paramsSerializer = {serialize: s} : Tl.assertOptions(s, {
            encode: un.function,
            serialize: un.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l = r && O.merge(r.common, r[n.method]);
        r && O.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p => {
            delete r[p]
        }), n.headers = gt.concat(l, r);
        const i = [];
        let a = !0;
        this.interceptors.request.forEach(function (g) {
            typeof g.runWhen == "function" && g.runWhen(n) === !1 || (a = a && g.synchronous, i.unshift(g.fulfilled, g.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function (g) {
            c.push(g.fulfilled, g.rejected)
        });
        let u, d = 0, f;
        if (!a) {
            const p = [mc.bind(this), void 0];
            for (p.unshift.apply(p, i), p.push.apply(p, c), f = p.length, u = Promise.resolve(n); d < f;) u = u.then(p[d++], p[d++]);
            return u
        }
        f = i.length;
        let m = n;
        for (d = 0; d < f;) {
            const p = i[d++], g = i[d++];
            try {
                m = p(m)
            } catch (_) {
                g.call(this, _);
                break
            }
        }
        try {
            u = mc.call(this, m)
        } catch (p) {
            return Promise.reject(p)
        }
        for (d = 0, f = c.length; d < f;) u = u.then(c[d++], c[d++]);
        return u
    }

    getUri(t) {
        t = Hn(this.defaults, t);
        const n = fd(t.baseURL, t.url);
        return id(n, t.params, t.paramsSerializer)
    }
}

O.forEach(["delete", "get", "head", "options"], function (t) {
    Mn.prototype[t] = function (n, o) {
        return this.request(Hn(o || {}, {
            method: t,
            url: n,
            data: (o || {}).data
        }))
    }
});
O.forEach(["post", "put", "patch"], function (t) {
    function n(o) {
        return function (r, l, i) {
            return this.request(Hn(i || {}, {
                method: t,
                headers: o ? {"Content-Type": "multipart/form-data"} : {},
                url: r,
                data: l
            }))
        }
    }

    Mn.prototype[t] = n(), Mn.prototype[t + "Form"] = n(!0)
});

class gi {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (r) {
            n = r
        });
        const o = this;
        this.promise.then(s => {
            if (!o._listeners) return;
            let r = o._listeners.length;
            for (; r-- > 0;) o._listeners[r](s);
            o._listeners = null
        }), this.promise.then = s => {
            let r;
            const l = new Promise(i => {
                o.subscribe(i), r = i
            }).then(s);
            return l.cancel = function () {
                o.unsubscribe(r)
            }, l
        }, t(function (r, l, i) {
            o.reason || (o.reason = new ko(r, l, i), n(o.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }

    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }

    static source() {
        let t;
        return {
            token: new gi(function (s) {
                t = s
            }), cancel: t
        }
    }
}

function k5(e) {
    return function (n) {
        return e.apply(null, n)
    }
}

function A5(e) {
    return O.isObject(e) && e.isAxiosError === !0
}

const kl = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(kl).forEach(([e, t]) => {
    kl[t] = e
});

function vd(e) {
    const t = new Mn(e), n = J0(Mn.prototype.request, t);
    return O.extend(n, Mn.prototype, t, {allOwnKeys: !0}), O.extend(n, t, null, {allOwnKeys: !0}), n.create = function (s) {
        return vd(Hn(e, s))
    }, n
}

const Ze = vd(fs);
Ze.Axios = Mn;
Ze.CanceledError = ko;
Ze.CancelToken = gi;
Ze.isCancel = ud;
Ze.VERSION = pd;
Ze.toFormData = Cr;
Ze.AxiosError = ve;
Ze.Cancel = Ze.CanceledError;
Ze.all = function (t) {
    return Promise.all(t)
};
Ze.spread = k5;
Ze.isAxiosError = A5;
Ze.mergeConfig = Hn;
Ze.AxiosHeaders = gt;
Ze.formToJSON = e => cd(O.isHTMLForm(e) ? new FormData(e) : e);
Ze.getAdapter = gd.getAdapter;
Ze.HttpStatusCode = kl;
Ze.default = Ze;
const Oe = D0("userStore", () => {
    let e = Me({token: "", userId: ""});

    function t(o) {
        e.token = o
    }

    function n(o) {
        e.userId = o
    }

    return {userInfo: e, setToken: t, setUserId: n}
}, {persist: !0}), De = Ze.create({baseURL: "/another-api", timeout: 5e3});
De.interceptors.request.use(function (e) {
    Ih({message: "加载中...", forbidClick: !0, loadingType: "spinner"});
    const t = Oe().userInfo.token;
    return t && (e.headers.token = t), e
}, function (e) {
    return Promise.reject(e)
});
De.interceptors.response.use(function (e) {
    console.log("response:", e);
    const t = e.data;
    return t.code !== 200 ? (ml({message: t.message}), Promise.reject(t.message)) : (Ph(), t)
}, function (e) {
    return ml(e), Promise.reject(e)
});
const I5 = e => {
        const {categoryId: t, goodsName: n, page: o, travelPageSize: s} = e;
        return De("/products/by_Category/id&&name", {
            params: {
                categoryId: t,
                goodsName: n,
                page: o,
                travelPageSize: s
            }
        })
    }, P5 = e => De({
        method: "get",
        url: "/products/detail",
        params: {productId: e}
    }),
    R5 = (e, t, n) => (console.log(e, t, n), De("/products/productDetail/reviewList", {
        params: {
            productId: e,
            page: t,
            pageSize: n
        }
    })), O5 = {class: "sold"}, $5 = {
        __name: "GoodsItem", props: ["dataItem"], setup(e) {
            const t = o => {
                console.log("id", o), xe.push({
                    name: "ProDetail",
                    params: {id: o}
                }), console.log("router", xe)
            };
            return console.log(e.dataItem), (o, s) => {
                const r = Qn, l = on, i = us, a = Gt;
                return Q(), He(a, {
                    justify: "end",
                    class: "main",
                    gutter: "20",
                    onClick: s[0] || (s[0] = c => t(e.dataItem.productId))
                }, {
                    default: D(() => [h(l, {span: "8"}, {
                        default: D(() => [h(r, {src: e.dataItem.productImage}, null, 8, ["src"])]),
                        _: 1
                    }), h(l, {span: "16"}, {
                        default: D(() => [R("p", null, [h(i, {
                            rows: "2",
                            content: e.dataItem.name
                        }, null, 8, ["content"])]), R("div", O5, "已售" + Ie(e.dataItem.productSales) + "件", 1), h(a, null, {
                            default: D(() => [h(l, {
                                span: "8",
                                class: "value new-value"
                            }, {
                                default: D(() => [ke("￥" + Ie(e.dataItem.originalPrice), 1)]),
                                _: 1
                            }), h(l, {
                                span: "8",
                                class: "value old-value"
                            }, {
                                default: D(() => [ke(" ￥" + Ie(e.dataItem.discountPrice), 1)]),
                                _: 1
                            })]), _: 1
                        })]), _: 1
                    })]), _: 1
                })
            }
        }
    }, _d = at($5, [["__scopeId", "data-v-dfc4bcf9"]]), B5 = {class: "search"},
    L5 = {class: "main"}, D5 = {
        __name: "list", setup(e) {
            let t = L(""), n = L("");
            const o = On(), s = L([]), r = async () => {
                let {data: {productsData: i}} = await I5({
                    goodsName: t.value,
                    categoryId: n.value
                });
                s.value = i.list
            }, l = () => {
                xe.push({name: "search"})
            };
            return ht(() => {
                r()
            }), nu(() => {
                t.value = o.query.search, n.value = o.query.categoryId
            }), (i, a) => {
                const c = Mt, u = Le, d = gr, f = on, m = Gt;
                return Q(), ye("div", B5, [h(c, {
                    title: "商品列表",
                    "left-arrow": "",
                    fixed: "",
                    onClickLeft: a[0] || (a[0] = p => V(xe).go(-1))
                }), h(d, {
                    modelValue: V(t),
                    "onUpdate:modelValue": a[1] || (a[1] = p => Re(t) ? t.value = p : t = p),
                    placeholder: "请输入搜索关键词",
                    shape: "round",
                    onClickLeftIcon: l,
                    onFocus: l,
                    "show-action": ""
                }, {
                    action: D(() => [h(u, {name: "apps-o"})]),
                    _: 1
                }, 8, ["modelValue"]), h(m, {gutter: "20"}, {
                    default: D(() => [h(f, {span: "8"}, {
                        default: D(() => [ke("综合")]),
                        _: 1
                    }), h(f, {span: "8"}, {
                        default: D(() => [ke("销量")]),
                        _: 1
                    }), h(f, {span: "8"}, {default: D(() => [ke("价格")]), _: 1})]),
                    _: 1
                }), R("div", L5, [(Q(!0), ye(Fe, null, kt(s.value, (p, g) => (Q(), He(_d, {
                    key: g,
                    "data-item": p
                }, null, 8, ["data-item"]))), 128))])])
            }
        }
    }, N5 = at(D5, [["__scopeId", "data-v-b406602a"]]), F5 = {class: "count-box"},
    V5 = ["value"], M5 = {
        __name: "CountBox",
        props: {
            value: {type: Number, default: 1},
            index: {type: Number},
            updateCount: {type: Function}
        },
        setup(e) {
            const t = e;
            let n = L(t.value);
            const o = () => {
                n.value === 1 || n.value--, t.updateCount(n.value, t.index)
            }, s = l => {
                console.log(l), /^(0*[1-9][0-9]*)$/.test(l) || (l = l.replace(/\D/g, "")), n.value = Number(l), t.updateCount(n.value, t.index), console.log("props.value", n.value), console.log("type props.value", typeof n.value)
            }, r = () => {
                n.value++, t.updateCount(n.value, t.index), console.log(n.value)
            };
            return (l, i) => {
                const a = vt;
                return Q(), ye("div", F5, [h(a, {
                    type: "default",
                    class: "minus",
                    onClick: o
                }, {default: D(() => [ke("-")]), _: 1}), R("input", {
                    value: V(n),
                    class: "inp",
                    type: "number",
                    onInput: i[0] || (i[0] = c => s(c.target.value))
                }, null, 40, V5), h(a, {
                    type: "default",
                    class: "add",
                    onClick: r
                }, {default: D(() => [ke("+")]), _: 1})])
            }
        }
    }, bd = at(M5, [["__scopeId", "data-v-fcdb47b5"]]), j5 = (e, t, n) => De({
        url: "/cartDetail/add/product",
        method: "post",
        params: {productId: e, quantity: t, customerId: n}
    }), U5 = e => De({url: "/cart/total", params: {customerId: e}}),
    yd = (e, t) => De({
        url: "/cart/list",
        params: {customerId: e, detailId: t}
    }), H5 = (e, t, n, o) => De({
        url: "/cartDetail/update/product",
        method: "put",
        data: {productId: e, customerId: t, quantity: n, itemTotalPrice: o}
    }), z5 = e => De.post("/cartDetail/delete", {shoppingCartDetails: e}),
    hs = e => (qn("data-v-d96460ed"), e = e(), Kn(), e),
    q5 = {class: "proDetail"}, K5 = {class: "content"},
    W5 = {class: "custom-indicator"}, G5 = {class: "info"},
    J5 = {class: "title"}, Y5 = {class: "price"}, X5 = {class: "now"},
    Q5 = {class: "oldPrice"}, Z5 = {class: "sellCount"},
    ev = {class: "service"}, tv = {class: "left-words"},
    nv = {class: "right-icon"}, ov = {class: "comment"},
    sv = {class: "comment-title"}, rv = {class: "left"},
    lv = {class: "comment-list"}, iv = {class: "top"}, av = ["src"],
    cv = {class: "name"}, uv = {class: "content"}, dv = {class: "time"},
    fv = {class: "desc"},
    hv = hs(() => R("div", {class: "tips"}, "商品描述", -1)),
    mv = ["innerHTML"], gv = {class: "footer"}, pv = {class: "product"},
    vv = ["src"], _v = {class: "price"},
    bv = hs(() => R("span", null, "￥", -1)), yv = {class: "nowPrice"},
    wv = {class: "count"}, Cv = hs(() => R("span", null, "库存", -1)),
    Sv = hs(() => R("span", null, "数量", -1)),
    xv = {key: 0, class: "showButton"}, Ev = {key: 1, class: "showButton"},
    Tv = hs(() => R("p", null, "此时需要登录才能继续操作", -1)), kv = {
        __name: "index", setup(e) {
            let t = L();
            (() => {
                t.value = On().params.id
            })();
            let o = L({});
            (async () => {
                const {data: {productData: B}} = await P5(t.value);
                console.log(B), o.value = B
            })();
            let r = L(0), l = L([]), i = L(0), a = 3, c = L(!1),
                u = "http://smart-shop.itheima.net/uploads/10001/20230321/a0db9adb2e666a65bc8dd133fbed7834.png";
            const d = async () => {
                if (!c.value) {
                    const {
                        data: {
                            proReviews: {
                                list: B,
                                total: $,
                                isLastPage: F
                            }
                        }
                    } = await R5(t.value, i.value, a);
                    l.value.push(...B), r.value = $, F ? c.value = !0 : i.value++
                }
            };
            d();
            let f = L(!1), m = L(""), p = L(0);
            const g = () => {
                f.value = !0, m.value = "cart"
            }, _ = () => {
                console.log(1), f.value = !0, m.value = "buy"
            };
            let b = L(!1), y = L(1);
            const x = B => {
                console.log("value", B), y.value > o.value.stockTotal ? (Un({message: "所选数量大于该商品的库存量，请重新选择"}), y.value = 1, b.value = !0) : y.value = B
            };
            let T = L(!1);
            const E = async () => {
                Oe().userInfo.token === "" || Oe().userInfo.token === null ? T.value = !0 : (p.value = y.value, b.value ? Un({message: "所选数量大于该商品的库存量，请重新选择"}) : (await j5(o.value.productId, y.value, Oe().userInfo.userId), We().addTotalNum(y.value), f.value = !1))
            }, S = () => {
                Oe().userInfo.token === "" || Oe().userInfo.token === null ? T.value = !0 : (f.value = !1, xe.push({name: "pay"}))
            }, P = () => {
                xe.push({name: "login"})
            };
            return (B, $) => {
                const F = Mt, I = Qn, A = n0, H = t0, Z = us, ae = Le, ne = cm,
                    oe = u3, fe = vt, et = Gt, lt = Wu, ee = on, _e = E3, Te = S0,
                    Ke = b4;
                return Q(), ye("div", q5, [h(F, {
                    title: "商品详情页",
                    "left-arrow": "",
                    onClickLeft: $[0] || ($[0] = be => V(xe).go(-1)),
                    fixed: "",
                    placeholder: ""
                }), R("div", K5, [h(H, {
                    autoplay: 3e3,
                    "lazy-render": ""
                }, {
                    indicator: D(({
                                      active: be,
                                      total: $e
                                  }) => [R("div", W5, Ie(be + 1) + "/" + Ie($e), 1)]),
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(o).productDetail, (be, $e) => (Q(), He(A, {key: $e}, {
                        default: D(() => [h(I, {
                            src: be.productCarousel,
                            fit: "cover"
                        }, null, 8, ["src"])]), _: 2
                    }, 1024))), 128))]),
                    _: 1
                }), R("div", G5, [R("div", J5, [R("div", Y5, [R("span", X5, " ￥" + Ie(V(o).discountPrice), 1), R("span", Q5, " ￥" + Ie(V(o).originalPrice), 1)]), R("div", Z5, " 已售" + Ie(V(o).productSales) + "件 ", 1)]), h(Z, {
                    rows: "2",
                    content: V(o).name,
                    class: "msg"
                }, null, 8, ["content"]), R("div", ev, [R("div", tv, [R("span", null, [h(ae, {
                    name: "passed",
                    color: "#fa3030"
                }), ke(" 七天无理由退货 ")]), R("span", null, [h(ae, {
                    name: "passed",
                    color: "#fa3030"
                }), ke(" 48小时发货 ")])]), R("div", nv, [h(ae, {name: "arrow"})])])]), R("div", ov, [R("div", sv, [R("div", rv, "商品评价(" + Ie(V(r)) + "条）", 1), R("div", {
                    class: "right",
                    onClick: d
                }, [R("span", null, Ie(V(c) === !1 ? "查看更多" : "暂无更多"), 1), h(ae, {
                    name: "arrow",
                    color: "#959595"
                })])]), R("div", lv, [(Q(!0), ye(Fe, null, kt(V(l), (be, $e) => {
                    var C;
                    return Q(), ye("div", {
                        class: "comment-item",
                        key: $e
                    }, [R("div", iv, [R("img", {
                        src: be.customers.avatar || V(u),
                        alt: ""
                    }, null, 8, av), R("div", cv, Ie((C = be.customers) == null ? void 0 : C.pickName), 1), h(ne, {
                        size: 16,
                        color: "#ffd21e",
                        "void-icon": "star",
                        "void-color": "#eee",
                        modelValue: be.satisfaction,
                        "onUpdate:modelValue": U => be.satisfaction = U
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]), R("div", uv, [h(Z, {
                        rows: "1",
                        content: be.review
                    }, null, 8, ["content"])]), R("div", dv, Ie(be.createTime), 1)])
                }), 128))])])]), R("div", fv, [hv, R("div", {
                    class: "desc",
                    innerHTML: V(o).content
                }, null, 8, mv)]), R("div", gv, [h(lt, {placeholder: ""}, {
                    default: D(() => [h(oe, {
                        icon: "wap-home-o",
                        text: "首页",
                        to: "/home"
                    }), V(We)().cartInfo.totalNum > 0 ? (Q(), He(oe, {
                        key: 0,
                        icon: "shopping-cart-o",
                        text: "购物车",
                        badge: V(We)().cartInfo.totalNum,
                        to: "/cart"
                    }, null, 8, ["badge"])) : (Q(), He(oe, {
                        key: 1,
                        icon: "shopping-cart-o",
                        text: "购物车",
                        to: "/cart"
                    })), h(et, null, {
                        default: D(() => [h(fe, {
                            type: "warning",
                            color: "#ffa900",
                            round: "",
                            onClick: g
                        }, {
                            default: D(() => [ke("加入购物车 ")]),
                            _: 1
                        }), h(fe, {
                            type: "danger",
                            round: "",
                            onClick: _
                        }, {default: D(() => [ke("立即购买 ")]), _: 1})]), _: 1
                    })]), _: 1
                })]), h(_e, {
                    show: V(f),
                    "onUpdate:show": $[2] || ($[2] = be => Re(f) ? f.value = be : f = be),
                    title: V(m) === "cart" ? "加入购物车" : "立即购买"
                }, {
                    default: D(() => [R("div", pv, [h(et, {
                        class: "product-title",
                        gutter: "20"
                    }, {
                        default: D(() => [h(ee, {
                            span: "8",
                            class: "left"
                        }, {
                            default: D(() => [R("img", {
                                src: V(o).productImage,
                                alt: "",
                                srcset: "",
                                width: "100%"
                            }, null, 8, vv)]), _: 1
                        }), h(ee, {class: "right"}, {
                            default: D(() => [R("div", _v, [bv, R("span", yv, Ie(V(o).discountPrice), 1)]), R("div", wv, [Cv, R("span", null, Ie(V(o).stockTotal), 1)])]),
                            _: 1
                        })]), _: 1
                    }), h(et, {class: "num-box"}, {
                        default: D(() => [Sv, h(bd, {
                            value: V(y),
                            "onUpdate:value": $[1] || ($[1] = be => Re(y) ? y.value = be : y = be),
                            "update-count": x
                        }, null, 8, ["value"])]), _: 1
                    }), V(o).stockTotal > 0 ? (Q(), ye("div", xv, [V(m) === "cart" ? (Q(), He(fe, {
                        key: 0,
                        onClick: E,
                        color: "#ff9402",
                        round: ""
                    }, {
                        default: D(() => [ke("加入购物车 ")]),
                        _: 1
                    })) : (Q(), He(fe, {
                        key: 1,
                        onClick: S,
                        color: "#fe5630",
                        round: ""
                    }, {
                        default: D(() => [ke("立即购物 ")]),
                        _: 1
                    }))])) : (Q(), ye("div", Ev, [h(fe, {
                        color: "#cccccc",
                        round: ""
                    }, {default: D(() => [ke("该商品已抢空")]), _: 1})]))])]), _: 1
                }, 8, ["show", "title"]), h(Te, {
                    show: V(T),
                    "onUpdate:show": $[3] || ($[3] = be => Re(T) ? T.value = be : T = be),
                    title: "温馨提示",
                    "show-cancel-button": "",
                    "cancel-button-text": "再逛逛",
                    "confirm-button-text": "去登录",
                    "confirm-button-color": "#ee0a24",
                    onConfirm: P
                }, {default: D(() => [Tv]), _: 1}, 8, ["show"]), h(Ke, {
                    right: "10",
                    bottom: "60"
                })])
            }
        }
    }, Av = at(kv, [["__scopeId", "data-v-d96460ed"]]),
    Iv = () => De("/ImageCaptcha"), Pv = (e, t) => De({
        url: "/verify/imageCode",
        method: "post",
        params: {uid: e, imageCode: t}
    }), Rv = (e, t, n) => De({url: "/messageCode", method: "get"}),
    Ov = (e, t) => De({
        url: "/verify/messageCode",
        method: "post",
        params: {msgCodeId: e, msgCode: t}
    }), $v = e => De({
        method: "post",
        url: "/logIn",
        data: {phone: e},
        headers: {platform: ["H5"]}
    }), pi = e => (qn("data-v-3bb9ae1a"), e = e(), Kn(), e),
    Bv = pi(() => R("div", null, "会员登录", -1)), Lv = pi(() => R("h1", {
        style: {
            color: "#181818",
            "margin-bottom": "20px",
            "margin-top": "40px"
        }
    }, " 手机登录", -1)),
    Dv = pi(() => R("div", null, "未注册的手机好登录后将自动注册", -1)), Nv = {
        __name: "index", setup(e) {
            let t = L(), n = L(""), o = L(""), s = L(), r = L(60), l = L(60),
                i = L(""), a = L(""), c = null;
            const u = async () => {
                const {data: {baseImageCode: p, uuid: g}} = await Iv();
                console.log("uuid", g), n.value = p, o.value = g
            };
            u();
            const d = () => /^1[3-9]\d{9}$/.test(t.value) ? /^\w{4}$/.test(s.value) ? !0 : (Un("请输入正确的图形验证码格式"), !1) : (Un("请输入正确的手机号格式"), !1),
                f = async () => {
                    if (!d()) {
                        console.log(1);
                        return
                    }
                    if (console.log(2), !c && (await Pv(o.value, s.value)).code === 200 && l.value === r.value) {
                        let {data: g} = await Rv();
                        i.value = g.msgCodeId, Ho({message: "短信验证码" + g.msgCode}), c = setInterval(() => {
                            l.value--, l.value <= 0 && (clearInterval(c), c = null, l.value = r.value)
                        }, 1e3)
                    }
                }, m = async () => {
                    if (!d()) return;
                    if (!/^\d{6}$/.test(a.value)) {
                        ml("请输入正确格式的手机验证码");
                        return
                    }
                    if ((await Ov(i.value, a.value)).code === 200) {
                        const {data: {token: g, customerId: _}} = await $v(t.value);
                        Oe().setToken(g), Oe().setUserId(_), Ho("登录成功");
                        let {data: {total: b}} = await U5(Oe().userInfo.userId);
                        b > 0 && We().getTotalNum(b), $n === "/" ? await xe.replace("/home") : (xe.go(-1), Jb("/"))
                    }
                };
            return yo(() => {
                clearInterval(c)
            }), (p, g) => {
                const _ = Le, b = Mt, y = Vn, x = Qn, T = vt, E = _0, S = Gt;
                return Q(), ye(Fe, null, [h(b, null, {
                    left: D(() => [h(_, {
                        name: "arrow-left",
                        color: "#181818",
                        onClick: g[0] || (g[0] = () => {
                            V(xe).go(-1)
                        })
                    })]), title: D(() => [Bv]), _: 1
                }), h(E, {inset: ""}, {
                    title: D(() => [Lv, Dv]),
                    default: D(() => [h(y, {
                        modelValue: V(t),
                        "onUpdate:modelValue": g[1] || (g[1] = P => Re(t) ? t.value = P : t = P),
                        placeholder: "请输入手机号码",
                        maxlength: "11",
                        type: "text"
                    }, null, 8, ["modelValue"]), h(y, {
                        modelValue: V(s),
                        "onUpdate:modelValue": g[2] || (g[2] = P => Re(s) ? s.value = P : s = P),
                        placeholder: "请输入图形验证码",
                        maxlength: "5"
                    }, {
                        "right-icon": D(() => [h(x, {
                            src: "data:image/jpg;base64," + V(n),
                            width: "75",
                            height: "5vh",
                            onClick: u
                        }, null, 8, ["src"])]), _: 1
                    }, 8, ["modelValue"]), h(y, {
                        modelValue: V(a),
                        "onUpdate:modelValue": g[3] || (g[3] = P => Re(a) ? a.value = P : a = P),
                        placeholder: "请输入短信验证码",
                        required: "",
                        type: "number"
                    }, {
                        button: D(() => [h(T, {
                            plain: "",
                            color: "#cea26a",
                            size: "small",
                            type: "primary",
                            onClick: f
                        }, {
                            default: D(() => [ke(Ie(V(l) === V(r) ? "获取验证码" : V(l) + "秒后重新发送"), 1)]),
                            _: 1
                        })]), _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                }), h(S, {style: {"justify-content": "space-around"}}, {
                    default: D(() => [h(T, {
                        type: "primary",
                        size: "large",
                        style: {
                            "border-radius": "10vw",
                            "background-color": "#f3a72b",
                            "border-color": "#f3a72b",
                            "margin-top": "30px",
                            width: "80%"
                        },
                        onClick: m
                    }, {default: D(() => [ke(" 登录 ")]), _: 1})]), _: 1
                })], 64)
            }
        }
    }, Fv = at(Nv, [["__scopeId", "data-v-3bb9ae1a"]]),
    Vv = e => De("/address//get/list", {params: {customerId: e}}),
    Mv = e => De.post("/address/detail/add", e),
    jv = e => De("/address/detail/getInfo", {params: {addressDetailId: e}}),
    Uv = (e, t) => De("/address/detail/default", {
        params: {
            isDefault: e,
            customerId: t
        }
    }), wd = (e, t) => De.put("/address/detail/update/default", {
        addressDetailId: e,
        customerId: t
    }), Hv = e => De.put("/address/detail/update", e),
    zv = e => De.delete("/address/detail/delete", {params: {address_detail_id: e}}),
    qv = e => De.post("/orderDetail/add", e),
    Kv = (e, t, n) => De("/orderDetail/get/list", {
        params: {
            customerId: e,
            pageNum: t,
            pageSize: n
        }
    }), Ao = e => (qn("data-v-7827edf5"), e = e(), Kn(), e),
    Wv = {class: "pay"}, Gv = {class: "left-icon"},
    Jv = {key: 0, class: "info"}, Yv = {class: "info-content"},
    Xv = {class: "name"}, Qv = {class: "mobile"}, Zv = {key: 1, class: "info"},
    e_ = Ao(() => R("span", null, "请填写配送地址", -1)), t_ = [e_],
    n_ = {class: "right-icon"}, o_ = {class: "pay-list"},
    s_ = {class: "custom-class"}, r_ = {class: "pay-info"},
    l_ = Ao(() => R("div", null, "订单总金额：", -1)),
    i_ = {class: "custom-class"}, a_ = Ao(() => R("div", null, "优惠券：", -1)),
    c_ = Ao(() => R("div", null, "无优惠券可用", -1)),
    u_ = Ao(() => R("div", null, "配送费用：", -1)), d_ = {key: 0},
    f_ = {key: 1, class: "custom-class"}, h_ = {class: "pay-cell"},
    m_ = {style: {width: "100%"}},
    g_ = Ao(() => R("span", null, "实付金额", -1)),
    p_ = {class: "custom-class"}, v_ = {
        __name: "index", setup(e) {
            let t = L();
            L([]), J(() => {
                const g = defaultAddress.value.region;
                return g.province + g.city + g.region + defaultAddress.value.detail
            });
            let n = L();
            (() => {
                n.value = On().query.shopping_detailIdList
            })();
            let s = L({});
            (async () => {
                let {data: {cartList: g}} = await yd(Oe().userInfo.userId, n.value);
                s.value = g
            })();
            let l = J(() => {
                let g = 0;
                for (let _ = 0; _ < s.value.length; _++) g = Number((g + s.value[_].shoppingCartDetails[0].itemTotalPrice).toFixed(2));
                return g
            });
            const i = async () => {
                if (!f.value) ri({title: "未选择收货地址，请先选择收货地址"}).then(() => {
                    xe.push({name: "addressList"})
                }).catch(() => {
                }); else {
                    let g = [];
                    for (let _ = 0; _ < s.value.length; _++) g.push({
                        customerId: Oe().userInfo.userId,
                        productId: s.value[_].shoppingCartDetails[0].productId,
                        addressDetailId: f.value.addressDetailId,
                        shoppingCartId: s.value[_].id,
                        shoppingCartDetailId: s.value[_].shoppingCartDetails[0].detailId,
                        itemTotalPrice: s.value[_].shoppingCartDetails[0].itemTotalPrice,
                        num: s.value[_].shoppingCartDetails[0].quantity,
                        paymentMethod: c.value
                    });
                    await qv(g), await C0({title: "支付成功"}).then(xe.push({name: "cart"}))
                }
            }, a = L(0), c = L("wechat_pay"), u = L(), d = [{
                text: "微信支付",
                value: 0,
                icon: "iconalis icon-weixinzhifu1"
            }, {
                text: "银行卡支付",
                value: 1,
                icon: "iconalis icon-yinhangqiazhifu"
            }, {
                text: "抖音支付",
                value: 2,
                icon: "iconalis icon-svg-plat-douyin000"
            }];
            let f = L();
            (async () => {
                let {data: {defaultAddress: g}} = await Uv("true", Oe().userInfo.userId);
                g !== null && (f.value = g)
            })();
            const p = g => {
                g === 0 ? c.value = "wechat_pay" : (g === 1 && (c.value = "bank_card_pay"), g === 2 && (c.value = "douyin_pay"))
            };
            return (g, _) => {
                const b = Mt, y = Le, x = us, T = Gt, E = Qn, S = on, P = z4,
                    B = q4, $ = Vn, F = _0, I = vt, A = Tm;
                return Q(), ye("div", Wv, [h(b, {
                    title: "订单结算台",
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = H => V(xe).go(-1)),
                    border: "",
                    fixed: "",
                    placeholder: ""
                }), h(T, {
                    class: "address", onClick: _[1] || (_[1] = () => {
                        V(xe).push({name: "addressList"})
                    })
                }, {
                    default: D(() => [R("div", Gv, [h(y, {name: "logistics"})]), V(f) ? (Q(), ye("div", Jv, [R("div", Yv, [R("span", Xv, Ie(V(f).name), 1), R("span", Qv, Ie(V(f).tel), 1)]), h(x, {
                        rows: "2",
                        class: "info-address",
                        content: V(f).province + V(f).city + V(f).county + V(f).addressDetail
                    }, null, 8, ["content"])])) : (Q(), ye("div", Zv, t_)), R("div", n_, [h(y, {name: "arrow"})])]),
                    _: 1
                }), R("div", o_, [V(s) ? (Q(!0), ye(Fe, {key: 0}, kt(V(s), (H, Z) => (Q(), He(T, {
                    gutter: "20",
                    align: "center",
                    key: Z
                }, {
                    default: D(() => [h(S, {span: "8"}, {
                        default: D(() => [h(E, {
                            src: H.shoppingCartDetails[0].products.productImage,
                            width: "100%"
                        }, null, 8, ["src"])]), _: 2
                    }, 1024), h(S, {
                        span: "16",
                        class: "right"
                    }, {
                        default: D(() => [h(x, {
                            rows: "2",
                            content: H.shoppingCartDetails[0].products.name
                        }, null, 8, ["content"]), h(T, {
                            class: "info",
                            justify: "space-between"
                        }, {
                            default: D(() => [R("div", null, [R("span", null, "*" + Ie(H.shoppingCartDetails[0].quantity), 1)]), R("div", null, [R("span", s_, "¥" + Ie(H.shoppingCartDetails[0].itemTotalPrice), 1)])]),
                            _: 2
                        }, 1024)]), _: 2
                    }, 1024)]), _: 2
                }, 1024))), 128)) : Jl("", !0)]), R("div", r_, [h(T, {class: "pay-detail"}, {
                    default: D(() => [l_, R("div", i_, "￥" + Ie(V(l)), 1)]),
                    _: 1
                }), h(T, {class: "pay-cell"}, {
                    default: D(() => [a_, c_]),
                    _: 1
                }), h(T, {class: "pay-cell"}, {
                    default: D(() => [u_, V(f) ? (Q(), ye("div", f_, "+￥0.00")) : (Q(), ye("div", d_, "请先选择配送地址"))]),
                    _: 1
                })]), R("div", h_, [h(T, {style: {color: "#c21401"}}, {
                    default: D(() => [ke("支付方式:")]),
                    _: 1
                }), h(T, {
                    class: "pay-cell-item",
                    justify: "space-between"
                }, {
                    default: D(() => [R("div", m_, [h(B, {
                        class: "van-icon-iconalis",
                        direction: "up"
                    }, {
                        default: D(() => [h(P, {
                            ref_key: "itemRef",
                            ref: u,
                            modelValue: a.value,
                            "onUpdate:modelValue": _[2] || (_[2] = H => a.value = H),
                            options: d,
                            "title-class": d[a.value].icon,
                            onChange: p
                        }, null, 8, ["modelValue", "title-class"])]), _: 1
                    })])]), _: 1
                })]), h(F, {inset: ""}, {
                    default: D(() => [h($, {
                        modelValue: V(t),
                        "onUpdate:modelValue": _[3] || (_[3] = H => Re(t) ? t.value = H : t = H),
                        rows: "2",
                        autosize: "",
                        type: "textarea",
                        maxlength: "50",
                        placeholder: "选填：买家留言（50字以内）",
                        "show-word-limit": "",
                        border: ""
                    }, null, 8, ["modelValue"])]), _: 1
                }), h(A, null, {
                    default: D(() => [R("div", null, [g_, R("span", p_, "：￥" + Ie(V(l)), 1)])]),
                    button: D(() => [h(I, {
                        type: "danger",
                        onClick: i,
                        style: {height: "100%"}
                    }, {default: D(() => [ke("提交订单 ")]), _: 1})]),
                    _: 1
                })])
            }
        }
    }, __ = at(v_, [["__scopeId", "data-v-7827edf5"]]), b_ = {};

function y_(e, t) {
    return " 111 "
}

const w_ = at(b_, [["render", y_]]), C_ = () => De("/ParentCategory"),
    S_ = e => De("/Category", {params: {parent_category_id: e}}),
    x_ = {class: "category"}, E_ = {class: "left"}, T_ = {class: "right"},
    k_ = {style: {"text-align": "center"}}, A_ = {
        __name: "category", setup(e) {
            let t = L(0), n = Me([]);
            (async () => {
                let {data: {parentCategory: l}} = await C_();
                n.push(...l), await r(n[0].id)
            })();
            let s = L([]), r = async l => {
                let {data: {categoryList: i}} = await S_(l);
                s.value = i
            };
            return (l, i) => {
                const a = Mt, c = gr, u = wm, d = vm, f = Qn, m = on, p = Gt;
                return Q(), ye("div", x_, [h(a, {title: "全部分类"}), h(c, {
                    placeholder: "请输入搜索关键词",
                    background: "#f1f1f2",
                    shape: "round",
                    onFocus: i[0] || (i[0] = g => V(xe).push({name: "search"}))
                }), R("main", null, [R("div", E_, [h(d, {
                    modelValue: V(t),
                    "onUpdate:modelValue": i[1] || (i[1] = g => Re(t) ? t.value = g : t = g)
                }, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(n), (g, _) => (Q(), He(u, {
                        title: g.name,
                        key: _,
                        onClick: b => V(r)(g.id)
                    }, null, 8, ["title", "onClick"]))), 128))]), _: 1
                }, 8, ["modelValue"])]), R("div", T_, [h(p, {align: "center"}, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(s), (g, _) => (Q(), He(m, {
                        span: "8",
                        key: _,
                        onClick: b => V(xe).push({
                            name: "SearchList",
                            query: {categoryId: g.id}
                        }),
                        align: "center"
                    }, {
                        default: D(() => [h(f, {
                            src: g.previewImageUrl,
                            width: "90"
                        }, null, 8, ["src"]), R("div", k_, Ie(g.name), 1)]), _: 2
                    }, 1032, ["onClick"]))), 128))]), _: 1
                })])])])
            }
        }
    }, I_ = at(A_, [["__scopeId", "data-v-4c811bc4"]]),
    vi = e => (qn("data-v-451aade7"), e = e(), Kn(), e), P_ = {class: "cart"},
    R_ = {key: 2, class: "non-empty-cart"}, O_ = {class: "cart-title"},
    $_ = {class: "total-num"}, B_ = vi(() => R("span", null, "编辑", -1)),
    L_ = {class: "car-list"}, D_ = {class: "info"}, N_ = {class: "bottom"},
    F_ = {class: "price"}, V_ = {key: 3, class: "empty-cart"},
    M_ = vi(() => R("div", {class: "tips"}, " 您的购物车是空的，快去逛逛吧 ", -1)),
    j_ = vi(() => R("span", null, "合计:￥", -1)), U_ = {class: "totalProPrice"},
    H_ = {class: "button"}, z_ = {
        __name: "cart", setup(e) {
            let t = L(!1), n = Me([]), o = Me([]), s = L(0), r = L(0), l = L(!1);
            const i = () => {
                t.value = !!Oe().userInfo.token
            }, a = async () => {
                if (Oe().userInfo.userId) {
                    let {data: {cartList: b}} = await yd(Oe().userInfo.userId);
                    console.log(b.totalQuantity), We().cartInfo.totalNum = b[0].totalQuantity, We().cartInfo.totalPrice = b[0].totalPrice, r.value = b[0].totalPrice;
                    for (const y of b[0].shoppingCartDetails) y.isChecked = !0, s.value += y.quantity, o.push({goods_num: y.quantity});
                    l.value = !0, n.push(...b[0].shoppingCartDetails)
                }
            }, c = async (b, y) => {
                o[y].goods_num = b, r.value = r.value + (b - n[y].quantity) * n[y].products.discountPrice, n[y].quantity = b;
                let x = await H5(n[y].products.productId, Oe().userInfo.userId, n[y].quantity, n[y].products.discountPrice * n[y].quantity);
                We().cartInfo.totalNum = x.data.shoppingCart.totalQuantity, s.value = x.data.shoppingCart.totalQuantity
            }, u = b => {
                console.log("toggleCheck"), d(b)
            }, d = b => {
                console.log("updateTotalProNum"), n[b].isChecked ? (s.value += n[b].quantity, r.value += n[b].itemTotalPrice) : (s.value -= n[b].quantity, r.value -= n[b].itemTotalPrice)
            }, f = b => {
                console.log("toggleAllCheck"), l.value = b;
                for (let y = 0; y < n.length; y++) n[y].isChecked = l.value
            };
            let m = L(!1);
            const p = () => {
                l.value = !1;
                for (let b = 0; b < n.length; b++) n[b].isChecked = !1;
                m.value = !m.value
            }, g = async () => {
                let b = [];
                for (let y = 0; y < n.length; y++) n[y].isChecked && b.push({
                    productId: n[y].productId,
                    customerId: Oe().userInfo.userId
                });
                await z5(b), n.splice(0, n.length), o.splice(0, o.length), await a()
            }, _ = () => {
                let b = "";
                for (let y = 0; y < n.length; y++) n[y].isChecked && (b = b.concat(n[y].detailId + ","));
                b.lastIndexOf(",") === b.length - 1 && (b = b.slice(0, b.length - 1)), console.log("settlement"), We().setCartList(n[0]), We().setTotalPrice(r.value), xe.push({
                    name: "pay",
                    query: {shopping_detailIdList: b}
                })
            };
            return Ee(m, () => {
                if (console.log("watch"), m.value) s.value = 0, r.value = 0; else {
                    l.value = !0;
                    for (let b = 0; b < n.length; b++) n[b].isChecked = !0, r.value += n[b].itemTotalPrice, s.value += n[b].quantity
                }
            }), pn(() => {
                console.log("watchEffect"), We().setTotalPrice(r.value)
            }), pn(() => {
                console.log("watchEffect"), We().setCartList(n)
            }), pn(() => {
                console.log("watchEffect"), r.value = Number(Number(r.value).toFixed(2))
            }), pn(() => {
                console.log("watchEffect");
                for (let b = 0; b < n.length; b++) if (n[b].isChecked === !1) {
                    l.value = !1;
                    return
                }
                return l.value = !0
            }), i(), a(), pn(() => {
            }), (b, y) => {
                const x = Mt, T = Le, E = v0, S = on, P = Qn, B = us, $ = Gt,
                    F = ai, I = vt;
                return Q(), ye("div", P_, [V($n) === "/" ? (Q(), He(x, {
                    key: 0,
                    title: "购物车",
                    fixed: "",
                    placeholder: ""
                })) : (Q(), He(x, {
                    key: 1,
                    title: "购物车",
                    fixed: "",
                    placeholder: "",
                    "left-arrow": "",
                    onClickLeft: y[0] || (y[0] = () => {
                        V(xe).go(-1)
                    })
                })), V(t) && V(n).length > 0 ? (Q(), ye("div", R_, [R("div", O_, [R("div", $_, [R("span", null, [ke("共"), R("i", null, Ie(V(We)().cartInfo.totalNum), 1), ke("件商品")])]), R("div", {
                    class: "edit",
                    onClick: p
                }, [h(T, {
                    name: "edit",
                    color: "#000000"
                }), B_])]), R("div", L_, [h(F, null, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(n), (A, H) => (Q(), He($, {gutter: "10"}, {
                        default: D(() => [h(S, {span: "3"}, {
                            default: D(() => [h(E, {
                                modelValue: A.isChecked,
                                "onUpdate:modelValue": Z => A.isChecked = Z,
                                onClick: Z => u(H)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"])]),
                            _: 2
                        }, 1024), h(S, {span: "6"}, {
                            default: D(() => [h(P, {src: A.products.productImage}, null, 8, ["src"])]),
                            _: 2
                        }, 1024), h(S, {span: "15"}, {
                            default: D(() => [R("div", D_, [h(B, {
                                content: A.products.name,
                                rows: "2"
                            }, null, 8, ["content"]), R("div", N_, [R("span", F_, " ￥" + Ie(A.products.discountPrice), 1), h(bd, {
                                value: V(o)[H].goods_num,
                                "onUpdate:value": Z => V(o)[H].goods_num = Z,
                                index: H,
                                "update-count": c
                            }, null, 8, ["value", "onUpdate:value", "index"])])])]),
                            _: 2
                        }, 1024)]), _: 2
                    }, 1024))), 256))]), _: 1
                })])])) : (Q(), ye("div", V_, [h(P, {
                    src: "src/assets/empty.png",
                    alt: ""
                }), M_, h(I, {type: "danger"}, {
                    default: D(() => [ke("去逛逛")]),
                    _: 1
                })])), V(n).length > 0 ? (Q(), He($, {
                    key: 4,
                    class: "footer-fixed"
                }, {
                    default: D(() => [R("div", null, [h(E, {
                        modelValue: V(l),
                        "onUpdate:modelValue": y[1] || (y[1] = A => Re(l) ? l.value = A : l = A),
                        onClick: y[2] || (y[2] = A => f(V(l)))
                    }, {
                        default: D(() => [ke(" 全选 ")]),
                        _: 1
                    }, 8, ["modelValue"])]), h(S, {span: "18"}, {
                        default: D(() => [h($, {
                            gutter: "10",
                            justify: "end"
                        }, {
                            default: D(() => [h(S, null, {
                                default: D(() => [j_, R("span", U_, Ie(V(r)), 1)]),
                                _: 1
                            }), h(S, {span: "10"}, {
                                default: D(() => [R("div", H_, [V(m) === !1 ? (Q(), He(I, {
                                    key: 0,
                                    color: "#fa2f21",
                                    round: "",
                                    onClick: _
                                }, {
                                    default: D(() => [ke("结算(" + Ie(V(s)) + ") ", 1)]),
                                    _: 1
                                })) : (Q(), He(I, {
                                    key: 1,
                                    color: "#fa2f21",
                                    round: "",
                                    onClick: g
                                }, {
                                    default: D(() => [ke("删除(" + Ie(V(s)) + ") ", 1)]),
                                    _: 1
                                }))])]), _: 1
                            })]), _: 1
                        })]), _: 1
                    })]), _: 1
                })) : Jl("", !0)])
            }
        }
    }, q_ = at(z_, [["__scopeId", "data-v-451aade7"]]),
    Cd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEXp6en////9/f3o6Ojw8PDj4+Pl5eXh4eHs7Oz7+/v09PTy8vL4+Pj29vY+GdZKAAADDElEQVRYw+3Wv0sbYRjA8ZNwp+Li89YhUQO+b6F0PDTx6NBBtHXpcBDPRkvhakiC1CGghqIIyRCdOqQlHdouUoqlm1Co0KUZhK4tFPvn9MnF5n6+P4R2KT6EhJe8n3y5ewOJduXJXZNr8l+Tecd5uFu6CinbS18+LR06pjJxxl4ATuZD2anMaXMKxHkOl/P6LFVxCnJi3YXAvP34zZWR1A6E54aUVI8j5J4mIcZBRExLr8WKRk5cGdmHyFyYEqI3o2SqJiH5NkRHl5B9iE3HFBJjI07StpDoC3Ey7QrJfBviYwiJCwmzLCQ7SeRCSNaTyEtTQFKbSSTtishsIrEFxBi6Jn+FFAWk+iSR1PnEyHWTSObM5pJSG5KnxSWPgDMdk0ce88gMl6zzyE0uWRnsoWFyziUubiWMAiMM8AmdtwT4zL38fJcxRnAXw6EI+0sGBpfoTUJIbxfF6ZnL5aTNP/0DklSht1w+KVFK4xVY1vjkqEkSKtltAdH2IF6Bjisi1vd4BfSGiByukWiFjtvi35dKO1qBI01M8AZEKtmahKQ2wxVK07aEaCuRCj3XZKTSDl8L6FIyPESCFZisSYm2F76Wjisn5TZlgYrekJPWLPErdKKm8kfxGfgVODFVyHATBpXJbU2FpDYGdwzGi2rkzqBC064a2fIrSP5VZTZQsZVIa8i/Y1M1JTJ86p9LZrWhdpSB01c6SqtJ/ApM1RtSYmDErzB4b0uJc0qYXyEsUzUlpDoKNFgh9LZjCkn1KTAWqhD4umvyScrJUULDFTTvsMMhxu4YimiFUfhVLSSTvPsAUMQqhMKbw0ICGckXf3giVsEHZO6vxsiIVewC7kqsUAZksR4lerENjPAquCCLhTAxtrv4Lr+CT6Rlh4hzCpSKKozQrGUGiDUKjIkrjMBEvTEg+FXsfyJWiLfRm96LV+unGPy0B6R83NuI73qAeKq/9h4epjgZ6w/Rt8Db2EeBCq4DFdQztUuy2mWKA0d9oq8RVULTNY+UMaKcyfdIao+oE/rKRqIvsCtMtpT7DVEPKD7Ga13IAAAAAElFTkSuQmCC",
    K_ = e => De.get(`/customer/getBasicInfo?userId=${e}`),
    tt = e => (qn("data-v-58a7b08f"), e = e(), Kn(), e), W_ = {class: "user"},
    G_ = {key: 0, class: "head-page"},
    J_ = tt(() => R("div", {class: "head-img"}, [R("img", {
        src: Cd,
        alt: ""
    })], -1)), Y_ = {class: "info"}, X_ = {class: "mobile"},
    Q_ = {class: "vip"}, Z_ = {key: 1},
    eb = c1('<div class="head-img" data-v-58a7b08f><img src="' + Cd + '" alt="" srcset="" data-v-58a7b08f></div><div class="info" data-v-58a7b08f><div class="mobile" data-v-58a7b08f>未登录</div><div class="words" data-v-58a7b08f>点击登录账号</div></div>', 2),
    tb = [eb], nb = {class: "my-asset"},
    ob = tt(() => R("span", null, "账户余额", -1)),
    sb = tt(() => R("span", null, "0", -1)),
    rb = tt(() => R("span", null, "积分", -1)),
    lb = tt(() => R("span", null, "0", -1)),
    ib = tt(() => R("span", null, "优惠券", -1)),
    ab = tt(() => R("span", null, "积分", -1)), cb = {class: "order-navbar"},
    ub = tt(() => R("span", null, "全部订单", -1)),
    db = tt(() => R("span", null, "待支付", -1)),
    fb = tt(() => R("span", null, "待发货", -1)),
    hb = tt(() => R("span", null, "待收货", -1)), mb = {class: "service"},
    gb = tt(() => R("div", {class: "title"}, "我的服务", -1)),
    pb = tt(() => R("span", null, "收货地址", -1)),
    vb = tt(() => R("span", null, "领券中心", -1)),
    _b = tt(() => R("span", null, "优惠券", -1)),
    bb = tt(() => R("span", null, "我的帮助", -1)),
    yb = tt(() => R("span", null, "我的积分", -1)),
    wb = tt(() => R("span", null, "退换/售后", -1)), Cb = {class: "logout-btn"},
    Sb = tt(() => R("p", null, "你确认要退出么", -1)), xb = {
        __name: "user", setup(e) {
            let t = L(!1), n = Me({mobile: "", pickName: ""});

            function o() {
                xe.push({name: "login"})
            }

            let s = L(!1);
            const r = () => {
                for (let u in Oe().userInfo) console.log("key", u, ":", Oe().userInfo[u]), Oe().userInfo[u] = "";
                for (let u in We().cartInfo) console.log(typeof We().cartInfo[u]), typeof We().cartInfo[u] == "object" ? We().cartInfo[u] = {} : typeof We().cartInfo[u] == "number" && (We().cartInfo[u] = 0);
                console.log(We().cartInfo)
            };
            pn(() => {
                t.value = !!Oe().userInfo.token
            });
            let l = async () => {
                let {data: {info: u}} = await K_(Oe().userInfo.userId);
                n.mobile = u.phone, n.pickName = u.pickName
            };
            pn(() => {
                t.value === !0 && l()
            });
            const i = () => {
                ri({title: "暂未登录，请先登录"}).then(() => {
                    xe.push({name: "login"})
                }).catch(() => {
                })
            }, a = () => {
                Oe().userInfo.userId ? xe.push({name: "addressList"}) : i()
            }, c = () => {
                Oe().userInfo.userId ? xe.push({name: "orderList"}) : i()
            };
            return (u, d) => {
                const f = Le, m = on, p = Gt, g = ii, _ = li, b = vt, y = S0;
                return Q(), ye("div", W_, [V(t) ? (Q(), ye("div", G_, [J_, R("div", Y_, [R("div", X_, Ie(V(n).pickName ? V(n).pickName : V(n).phone), 1), R("div", Q_, [h(f, {name: "diamond-o"}), ke(" 普通会员 ")])])])) : (Q(), ye("div", Z_, [R("div", {
                    onClick: o,
                    class: "head-page"
                }, tb)])), R("div", nb, [h(p, {gutter: [20, 20]}, {
                    default: D(() => [h(m, {span: "6"}, {
                        default: D(() => [R("span", null, Ie(V(n).payMoney || 0), 1), ob]),
                        _: 1
                    }), h(m, {span: "6"}, {
                        default: D(() => [sb, rb]),
                        _: 1
                    }), h(m, {span: "6"}, {
                        default: D(() => [lb, ib]),
                        _: 1
                    }), h(m, {span: "6"}, {
                        default: D(() => [h(f, {name: "balance-pay"}), ab]),
                        _: 1
                    })]), _: 1
                })]), R("div", cb, [h(p, {getter: "[20,20]"}, {
                    default: D(() => [h(m, {
                        span: "6",
                        onClick: c
                    }, {
                        default: D(() => [h(f, {name: "balance-list-o"}), ub]),
                        _: 1
                    }), h(m, {span: "6"}, {
                        default: D(() => [h(f, {name: "clock-o"}), db]),
                        _: 1
                    }), h(m, {span: "6"}, {
                        default: D(() => [h(f, {name: "logistics"}), fb]),
                        _: 1
                    }), h(m, {span: "6"}, {
                        default: D(() => [h(f, {name: "send-gift-o"}), hb]),
                        _: 1
                    })]), _: 1
                })]), R("div", mb, [gb, h(_, {
                    clickable: "",
                    "column-num": 4,
                    border: !1,
                    gutter: 10
                }, {
                    default: D(() => [h(g, {onClick: a}, {
                        default: D(() => [h(f, {name: "records"}), pb]),
                        _: 1
                    }), h(g, {to: "/"}, {
                        default: D(() => [h(f, {name: "gift-o"}), vb]),
                        _: 1
                    }), h(g, {to: "/"}, {
                        default: D(() => [h(f, {name: "gift-card-o"}), _b]),
                        _: 1
                    }), h(g, {to: "/"}, {
                        default: D(() => [h(f, {name: "question-o"}), bb]),
                        _: 1
                    }), h(g, {to: "/"}, {
                        default: D(() => [h(f, {name: "balance-o"}), yb]),
                        _: 1
                    }), h(g, {to: "/"}, {
                        default: D(() => [h(f, {name: "refund-o"}), wb]),
                        _: 1
                    })]), _: 1
                })]), R("div", Cb, [h(b, {
                    color: "#ee0a24",
                    onClick: d[0] || (d[0] = () => {
                        V(Oe)().userInfo.userId && (Re(s) ? s.value = !0 : s = !0)
                    })
                }, {default: D(() => [ke("退出登录 ")]), _: 1})]), h(y, {
                    show: V(s),
                    "onUpdate:show": d[1] || (d[1] = x => Re(s) ? s.value = x : s = x),
                    title: "温馨提示",
                    "show-cancel-button": "",
                    "cancel-button-text": "取消",
                    "confirm-button-text": "确认",
                    "confirm-button-color": "#ee0a24",
                    onConfirm: r
                }, {default: D(() => [Sb]), _: 1}, 8, ["show"])])
            }
        }
    }, Eb = at(xb, [["__scopeId", "data-v-58a7b08f"]]),
    Tb = "" + new URL("main-DzTgNESy.png", import.meta.url).href,
    kb = () => De("/carousel/get/img"), Ab = () => De("/topCategorise"),
    Ib = (e, t) => De("/products/recommend", {
        params: {
            page: e,
            travelPageSize: t
        }
    }), Sd = e => (qn("data-v-36053726"), e = e(), Kn(), e),
    Pb = {class: "page"}, Rb = ["src"],
    Ob = Sd(() => R("div", {class: "main"}, [R("img", {
        src: Tb,
        alt: ""
    })], -1)), $b = {class: "guess"},
    Bb = Sd(() => R("p", {class: "guess-title"}, "——猜你喜欢——", -1)), Lb = {
        __name: "home", setup(e) {
            let t = Me([]), n = Me([]), o = Me([]);
            const s = np();
            (async () => {
                let {data: {carouselImg: f}} = await kb();
                t.splice(0, t.length, ...f)
            })(), (async () => {
                let {data: {topCategorise: f}} = await Ab();
                n.splice(0, n.length, ...f)
            })(), L([]);
            const i = L(!1), a = L(!1);
            let c = L(1);
            const u = async () => {
                let {
                    data: {
                        productsData: {
                            list: f,
                            isLastPage: m
                        }
                    }
                } = await Ib(c.value, 3);
                o.push(...f), i.value = !1, m ? a.value = !0 : c.value++, console.log(f, m)
            }, d = () => {
                s.push("/search")
            };
            return (f, m) => {
                const p = Mt, g = gr, _ = n0, b = t0, y = ii, x = li, T = Xn,
                    E = ai;
                return Q(), ye("div", Pb, [h(p, {
                    title: "小小商城",
                    fixed: ""
                }), h(g, {
                    placeholder: "请输入搜索关键词",
                    background: "#f1f1f2",
                    readonly: "",
                    shape: "round",
                    onClick: d
                }), R("main", null, [h(b, {
                    class: "my-swipe",
                    autoplay: 3e3,
                    "indicator-color": "white"
                }, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(t), (S, P) => (Q(), He(_, {key: P}, {
                        default: D(() => [R("img", {
                            src: S.imageUrl,
                            alt: ""
                        }, null, 8, Rb)]), _: 2
                    }, 1024))), 128))]), _: 1
                }), h(x, {"column-num": 5}, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(n), (S, P) => (Q(), He(y, {
                        key: P,
                        icon: S.imageUrl,
                        text: S.text
                    }, null, 8, ["icon", "text"]))), 128))]), _: 1
                }), Ob, R("div", $b, [Bb, h(E, {
                    loading: i.value,
                    "onUpdate:loading": m[0] || (m[0] = S => i.value = S),
                    finished: a.value,
                    "finished-text": "没有更多了",
                    onLoad: u,
                    offset: "30"
                }, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(o), (S, P) => (Q(), He(T, {key: S}, {
                        default: D(() => [h(_d, {"data-item": S}, null, 8, ["data-item"])]),
                        _: 2
                    }, 1024))), 128))]), _: 1
                }, 8, ["loading", "finished"])])])])
            }
        }
    }, Db = at(Lb, [["__scopeId", "data-v-36053726"]]);
var Nb = {
    province_list: {
        11e4: "北京市",
        12e4: "天津市",
        13e4: "河北省",
        14e4: "山西省",
        15e4: "内蒙古自治区",
        21e4: "辽宁省",
        22e4: "吉林省",
        23e4: "黑龙江省",
        31e4: "上海市",
        32e4: "江苏省",
        33e4: "浙江省",
        34e4: "安徽省",
        35e4: "福建省",
        36e4: "江西省",
        37e4: "山东省",
        41e4: "河南省",
        42e4: "湖北省",
        43e4: "湖南省",
        44e4: "广东省",
        45e4: "广西壮族自治区",
        46e4: "海南省",
        5e5: "重庆市",
        51e4: "四川省",
        52e4: "贵州省",
        53e4: "云南省",
        54e4: "西藏自治区",
        61e4: "陕西省",
        62e4: "甘肃省",
        63e4: "青海省",
        64e4: "宁夏回族自治区",
        65e4: "新疆维吾尔自治区",
        71e4: "台湾省",
        81e4: "香港特别行政区",
        82e4: "澳门特别行政区"
    }, city_list: {
        110100: "北京市",
        120100: "天津市",
        130100: "石家庄市",
        130200: "唐山市",
        130300: "秦皇岛市",
        130400: "邯郸市",
        130500: "邢台市",
        130600: "保定市",
        130700: "张家口市",
        130800: "承德市",
        130900: "沧州市",
        131e3: "廊坊市",
        131100: "衡水市",
        140100: "太原市",
        140200: "大同市",
        140300: "阳泉市",
        140400: "长治市",
        140500: "晋城市",
        140600: "朔州市",
        140700: "晋中市",
        140800: "运城市",
        140900: "忻州市",
        141e3: "临汾市",
        141100: "吕梁市",
        150100: "呼和浩特市",
        150200: "包头市",
        150300: "乌海市",
        150400: "赤峰市",
        150500: "通辽市",
        150600: "鄂尔多斯市",
        150700: "呼伦贝尔市",
        150800: "巴彦淖尔市",
        150900: "乌兰察布市",
        152200: "兴安盟",
        152500: "锡林郭勒盟",
        152900: "阿拉善盟",
        210100: "沈阳市",
        210200: "大连市",
        210300: "鞍山市",
        210400: "抚顺市",
        210500: "本溪市",
        210600: "丹东市",
        210700: "锦州市",
        210800: "营口市",
        210900: "阜新市",
        211e3: "辽阳市",
        211100: "盘锦市",
        211200: "铁岭市",
        211300: "朝阳市",
        211400: "葫芦岛市",
        220100: "长春市",
        220200: "吉林市",
        220300: "四平市",
        220400: "辽源市",
        220500: "通化市",
        220600: "白山市",
        220700: "松原市",
        220800: "白城市",
        222400: "延边朝鲜族自治州",
        230100: "哈尔滨市",
        230200: "齐齐哈尔市",
        230300: "鸡西市",
        230400: "鹤岗市",
        230500: "双鸭山市",
        230600: "大庆市",
        230700: "伊春市",
        230800: "佳木斯市",
        230900: "七台河市",
        231e3: "牡丹江市",
        231100: "黑河市",
        231200: "绥化市",
        232700: "大兴安岭地区",
        310100: "上海市",
        320100: "南京市",
        320200: "无锡市",
        320300: "徐州市",
        320400: "常州市",
        320500: "苏州市",
        320600: "南通市",
        320700: "连云港市",
        320800: "淮安市",
        320900: "盐城市",
        321e3: "扬州市",
        321100: "镇江市",
        321200: "泰州市",
        321300: "宿迁市",
        330100: "杭州市",
        330200: "宁波市",
        330300: "温州市",
        330400: "嘉兴市",
        330500: "湖州市",
        330600: "绍兴市",
        330700: "金华市",
        330800: "衢州市",
        330900: "舟山市",
        331e3: "台州市",
        331100: "丽水市",
        340100: "合肥市",
        340200: "芜湖市",
        340300: "蚌埠市",
        340400: "淮南市",
        340500: "马鞍山市",
        340600: "淮北市",
        340700: "铜陵市",
        340800: "安庆市",
        341e3: "黄山市",
        341100: "滁州市",
        341200: "阜阳市",
        341300: "宿州市",
        341500: "六安市",
        341600: "亳州市",
        341700: "池州市",
        341800: "宣城市",
        350100: "福州市",
        350200: "厦门市",
        350300: "莆田市",
        350400: "三明市",
        350500: "泉州市",
        350600: "漳州市",
        350700: "南平市",
        350800: "龙岩市",
        350900: "宁德市",
        360100: "南昌市",
        360200: "景德镇市",
        360300: "萍乡市",
        360400: "九江市",
        360500: "新余市",
        360600: "鹰潭市",
        360700: "赣州市",
        360800: "吉安市",
        360900: "宜春市",
        361e3: "抚州市",
        361100: "上饶市",
        370100: "济南市",
        370200: "青岛市",
        370300: "淄博市",
        370400: "枣庄市",
        370500: "东营市",
        370600: "烟台市",
        370700: "潍坊市",
        370800: "济宁市",
        370900: "泰安市",
        371e3: "威海市",
        371100: "日照市",
        371300: "临沂市",
        371400: "德州市",
        371500: "聊城市",
        371600: "滨州市",
        371700: "菏泽市",
        410100: "郑州市",
        410200: "开封市",
        410300: "洛阳市",
        410400: "平顶山市",
        410500: "安阳市",
        410600: "鹤壁市",
        410700: "新乡市",
        410800: "焦作市",
        410900: "濮阳市",
        411e3: "许昌市",
        411100: "漯河市",
        411200: "三门峡市",
        411300: "南阳市",
        411400: "商丘市",
        411500: "信阳市",
        411600: "周口市",
        411700: "驻马店市",
        419e3: "省直辖县",
        420100: "武汉市",
        420200: "黄石市",
        420300: "十堰市",
        420500: "宜昌市",
        420600: "襄阳市",
        420700: "鄂州市",
        420800: "荆门市",
        420900: "孝感市",
        421e3: "荆州市",
        421100: "黄冈市",
        421200: "咸宁市",
        421300: "随州市",
        422800: "恩施土家族苗族自治州",
        429e3: "省直辖县",
        430100: "长沙市",
        430200: "株洲市",
        430300: "湘潭市",
        430400: "衡阳市",
        430500: "邵阳市",
        430600: "岳阳市",
        430700: "常德市",
        430800: "张家界市",
        430900: "益阳市",
        431e3: "郴州市",
        431100: "永州市",
        431200: "怀化市",
        431300: "娄底市",
        433100: "湘西土家族苗族自治州",
        440100: "广州市",
        440200: "韶关市",
        440300: "深圳市",
        440400: "珠海市",
        440500: "汕头市",
        440600: "佛山市",
        440700: "江门市",
        440800: "湛江市",
        440900: "茂名市",
        441200: "肇庆市",
        441300: "惠州市",
        441400: "梅州市",
        441500: "汕尾市",
        441600: "河源市",
        441700: "阳江市",
        441800: "清远市",
        441900: "东莞市",
        442e3: "中山市",
        445100: "潮州市",
        445200: "揭阳市",
        445300: "云浮市",
        450100: "南宁市",
        450200: "柳州市",
        450300: "桂林市",
        450400: "梧州市",
        450500: "北海市",
        450600: "防城港市",
        450700: "钦州市",
        450800: "贵港市",
        450900: "玉林市",
        451e3: "百色市",
        451100: "贺州市",
        451200: "河池市",
        451300: "来宾市",
        451400: "崇左市",
        460100: "海口市",
        460200: "三亚市",
        460300: "三沙市",
        460400: "儋州市",
        469e3: "省直辖县",
        500100: "重庆市",
        500200: "县",
        510100: "成都市",
        510300: "自贡市",
        510400: "攀枝花市",
        510500: "泸州市",
        510600: "德阳市",
        510700: "绵阳市",
        510800: "广元市",
        510900: "遂宁市",
        511e3: "内江市",
        511100: "乐山市",
        511300: "南充市",
        511400: "眉山市",
        511500: "宜宾市",
        511600: "广安市",
        511700: "达州市",
        511800: "雅安市",
        511900: "巴中市",
        512e3: "资阳市",
        513200: "阿坝藏族羌族自治州",
        513300: "甘孜藏族自治州",
        513400: "凉山彝族自治州",
        520100: "贵阳市",
        520200: "六盘水市",
        520300: "遵义市",
        520400: "安顺市",
        520500: "毕节市",
        520600: "铜仁市",
        522300: "黔西南布依族苗族自治州",
        522600: "黔东南苗族侗族自治州",
        522700: "黔南布依族苗族自治州",
        530100: "昆明市",
        530300: "曲靖市",
        530400: "玉溪市",
        530500: "保山市",
        530600: "昭通市",
        530700: "丽江市",
        530800: "普洱市",
        530900: "临沧市",
        532300: "楚雄彝族自治州",
        532500: "红河哈尼族彝族自治州",
        532600: "文山壮族苗族自治州",
        532800: "西双版纳傣族自治州",
        532900: "大理白族自治州",
        533100: "德宏傣族景颇族自治州",
        533300: "怒江傈僳族自治州",
        533400: "迪庆藏族自治州",
        540100: "拉萨市",
        540200: "日喀则市",
        540300: "昌都市",
        540400: "林芝市",
        540500: "山南市",
        540600: "那曲市",
        542500: "阿里地区",
        610100: "西安市",
        610200: "铜川市",
        610300: "宝鸡市",
        610400: "咸阳市",
        610500: "渭南市",
        610600: "延安市",
        610700: "汉中市",
        610800: "榆林市",
        610900: "安康市",
        611e3: "商洛市",
        620100: "兰州市",
        620200: "嘉峪关市",
        620300: "金昌市",
        620400: "白银市",
        620500: "天水市",
        620600: "武威市",
        620700: "张掖市",
        620800: "平凉市",
        620900: "酒泉市",
        621e3: "庆阳市",
        621100: "定西市",
        621200: "陇南市",
        622900: "临夏回族自治州",
        623e3: "甘南藏族自治州",
        630100: "西宁市",
        630200: "海东市",
        632200: "海北藏族自治州",
        632300: "黄南藏族自治州",
        632500: "海南藏族自治州",
        632600: "果洛藏族自治州",
        632700: "玉树藏族自治州",
        632800: "海西蒙古族藏族自治州",
        640100: "银川市",
        640200: "石嘴山市",
        640300: "吴忠市",
        640400: "固原市",
        640500: "中卫市",
        650100: "乌鲁木齐市",
        650200: "克拉玛依市",
        650400: "吐鲁番市",
        650500: "哈密市",
        652300: "昌吉回族自治州",
        652700: "博尔塔拉蒙古自治州",
        652800: "巴音郭楞蒙古自治州",
        652900: "阿克苏地区",
        653e3: "克孜勒苏柯尔克孜自治州",
        653100: "喀什地区",
        653200: "和田地区",
        654e3: "伊犁哈萨克自治州",
        654200: "塔城地区",
        654300: "阿勒泰地区",
        659e3: "自治区直辖县级行政区划",
        710100: "台北市",
        710200: "高雄市",
        710300: "台南市",
        710400: "台中市",
        710500: "金门县",
        710600: "南投县",
        710700: "基隆市",
        710800: "新竹市",
        710900: "嘉义市",
        711100: "新北市",
        711200: "宜兰县",
        711300: "新竹县",
        711400: "桃园市",
        711500: "苗栗县",
        711700: "彰化县",
        711900: "嘉义县",
        712100: "云林县",
        712400: "屏东县",
        712500: "台东县",
        712600: "花莲县",
        712700: "澎湖县",
        712800: "连江县",
        810100: "香港岛",
        810200: "九龙",
        810300: "新界",
        820100: "澳门半岛",
        820200: "离岛"
    }, county_list: {
        110101: "东城区",
        110102: "西城区",
        110105: "朝阳区",
        110106: "丰台区",
        110107: "石景山区",
        110108: "海淀区",
        110109: "门头沟区",
        110111: "房山区",
        110112: "通州区",
        110113: "顺义区",
        110114: "昌平区",
        110115: "大兴区",
        110116: "怀柔区",
        110117: "平谷区",
        110118: "密云区",
        110119: "延庆区",
        120101: "和平区",
        120102: "河东区",
        120103: "河西区",
        120104: "南开区",
        120105: "河北区",
        120106: "红桥区",
        120110: "东丽区",
        120111: "西青区",
        120112: "津南区",
        120113: "北辰区",
        120114: "武清区",
        120115: "宝坻区",
        120116: "滨海新区",
        120117: "宁河区",
        120118: "静海区",
        120119: "蓟州区",
        130102: "长安区",
        130104: "桥西区",
        130105: "新华区",
        130107: "井陉矿区",
        130108: "裕华区",
        130109: "藁城区",
        130110: "鹿泉区",
        130111: "栾城区",
        130121: "井陉县",
        130123: "正定县",
        130125: "行唐县",
        130126: "灵寿县",
        130127: "高邑县",
        130128: "深泽县",
        130129: "赞皇县",
        130130: "无极县",
        130131: "平山县",
        130132: "元氏县",
        130133: "赵县",
        130171: "石家庄高新技术产业开发区",
        130172: "石家庄循环化工园区",
        130181: "辛集市",
        130183: "晋州市",
        130184: "新乐市",
        130202: "路南区",
        130203: "路北区",
        130204: "古冶区",
        130205: "开平区",
        130207: "丰南区",
        130208: "丰润区",
        130209: "曹妃甸区",
        130224: "滦南县",
        130225: "乐亭县",
        130227: "迁西县",
        130229: "玉田县",
        130273: "唐山高新技术产业开发区",
        130274: "河北唐山海港经济开发区",
        130281: "遵化市",
        130283: "迁安市",
        130284: "滦州市",
        130302: "海港区",
        130303: "山海关区",
        130304: "北戴河区",
        130306: "抚宁区",
        130321: "青龙满族自治县",
        130322: "昌黎县",
        130324: "卢龙县",
        130371: "秦皇岛市经济技术开发区",
        130372: "北戴河新区",
        130390: "经济技术开发区",
        130402: "邯山区",
        130403: "丛台区",
        130404: "复兴区",
        130406: "峰峰矿区",
        130407: "肥乡区",
        130408: "永年区",
        130423: "临漳县",
        130424: "成安县",
        130425: "大名县",
        130426: "涉县",
        130427: "磁县",
        130430: "邱县",
        130431: "鸡泽县",
        130432: "广平县",
        130433: "馆陶县",
        130434: "魏县",
        130435: "曲周县",
        130471: "邯郸经济技术开发区",
        130473: "邯郸冀南新区",
        130481: "武安市",
        130502: "襄都区",
        130503: "信都区",
        130505: "任泽区",
        130506: "南和区",
        130522: "临城县",
        130523: "内丘县",
        130524: "柏乡县",
        130525: "隆尧县",
        130528: "宁晋县",
        130529: "巨鹿县",
        130530: "新河县",
        130531: "广宗县",
        130532: "平乡县",
        130533: "威县",
        130534: "清河县",
        130535: "临西县",
        130571: "河北邢台经济开发区",
        130581: "南宫市",
        130582: "沙河市",
        130602: "竞秀区",
        130606: "莲池区",
        130607: "满城区",
        130608: "清苑区",
        130609: "徐水区",
        130623: "涞水县",
        130624: "阜平县",
        130626: "定兴县",
        130627: "唐县",
        130628: "高阳县",
        130629: "容城县",
        130630: "涞源县",
        130631: "望都县",
        130632: "安新县",
        130633: "易县",
        130634: "曲阳县",
        130635: "蠡县",
        130636: "顺平县",
        130637: "博野县",
        130638: "雄县",
        130671: "保定高新技术产业开发区",
        130672: "保定白沟新城",
        130681: "涿州市",
        130682: "定州市",
        130683: "安国市",
        130684: "高碑店市",
        130702: "桥东区",
        130703: "桥西区",
        130705: "宣化区",
        130706: "下花园区",
        130708: "万全区",
        130709: "崇礼区",
        130722: "张北县",
        130723: "康保县",
        130724: "沽源县",
        130725: "尚义县",
        130726: "蔚县",
        130727: "阳原县",
        130728: "怀安县",
        130730: "怀来县",
        130731: "涿鹿县",
        130732: "赤城县",
        130772: "张家口市察北管理区",
        130802: "双桥区",
        130803: "双滦区",
        130804: "鹰手营子矿区",
        130821: "承德县",
        130822: "兴隆县",
        130824: "滦平县",
        130825: "隆化县",
        130826: "丰宁满族自治县",
        130827: "宽城满族自治县",
        130828: "围场满族蒙古族自治县",
        130871: "承德高新技术产业开发区",
        130881: "平泉市",
        130902: "新华区",
        130903: "运河区",
        130921: "沧县",
        130922: "青县",
        130923: "东光县",
        130924: "海兴县",
        130925: "盐山县",
        130926: "肃宁县",
        130927: "南皮县",
        130928: "吴桥县",
        130929: "献县",
        130930: "孟村回族自治县",
        130971: "河北沧州经济开发区",
        130972: "沧州高新技术产业开发区",
        130973: "沧州渤海新区",
        130981: "泊头市",
        130982: "任丘市",
        130983: "黄骅市",
        130984: "河间市",
        131002: "安次区",
        131003: "广阳区",
        131022: "固安县",
        131023: "永清县",
        131024: "香河县",
        131025: "大城县",
        131026: "文安县",
        131028: "大厂回族自治县",
        131071: "廊坊经济技术开发区",
        131081: "霸州市",
        131082: "三河市",
        131090: "开发区",
        131102: "桃城区",
        131103: "冀州区",
        131121: "枣强县",
        131122: "武邑县",
        131123: "武强县",
        131124: "饶阳县",
        131125: "安平县",
        131126: "故城县",
        131127: "景县",
        131128: "阜城县",
        131171: "河北衡水经济开发区",
        131172: "衡水滨湖新区",
        131182: "深州市",
        140105: "小店区",
        140106: "迎泽区",
        140107: "杏花岭区",
        140108: "尖草坪区",
        140109: "万柏林区",
        140110: "晋源区",
        140121: "清徐县",
        140122: "阳曲县",
        140123: "娄烦县",
        140181: "古交市",
        140212: "新荣区",
        140213: "平城区",
        140214: "云冈区",
        140215: "云州区",
        140221: "阳高县",
        140222: "天镇县",
        140223: "广灵县",
        140224: "灵丘县",
        140225: "浑源县",
        140226: "左云县",
        140271: "山西大同经济开发区",
        140302: "城区",
        140303: "矿区",
        140311: "郊区",
        140321: "平定县",
        140322: "盂县",
        140403: "潞州区",
        140404: "上党区",
        140405: "屯留区",
        140406: "潞城区",
        140423: "襄垣县",
        140425: "平顺县",
        140426: "黎城县",
        140427: "壶关县",
        140428: "长子县",
        140429: "武乡县",
        140430: "沁县",
        140431: "沁源县",
        140471: "山西长治高新技术产业园区",
        140502: "城区",
        140521: "沁水县",
        140522: "阳城县",
        140524: "陵川县",
        140525: "泽州县",
        140581: "高平市",
        140602: "朔城区",
        140603: "平鲁区",
        140621: "山阴县",
        140622: "应县",
        140623: "右玉县",
        140671: "山西朔州经济开发区",
        140681: "怀仁市",
        140702: "榆次区",
        140703: "太谷区",
        140721: "榆社县",
        140722: "左权县",
        140723: "和顺县",
        140724: "昔阳县",
        140725: "寿阳县",
        140727: "祁县",
        140728: "平遥县",
        140729: "灵石县",
        140781: "介休市",
        140802: "盐湖区",
        140821: "临猗县",
        140822: "万荣县",
        140823: "闻喜县",
        140824: "稷山县",
        140825: "新绛县",
        140826: "绛县",
        140827: "垣曲县",
        140828: "夏县",
        140829: "平陆县",
        140830: "芮城县",
        140881: "永济市",
        140882: "河津市",
        140902: "忻府区",
        140921: "定襄县",
        140922: "五台县",
        140923: "代县",
        140924: "繁峙县",
        140925: "宁武县",
        140926: "静乐县",
        140927: "神池县",
        140928: "五寨县",
        140929: "岢岚县",
        140930: "河曲县",
        140931: "保德县",
        140932: "偏关县",
        140971: "五台山风景名胜区",
        140981: "原平市",
        141002: "尧都区",
        141021: "曲沃县",
        141022: "翼城县",
        141023: "襄汾县",
        141024: "洪洞县",
        141025: "古县",
        141026: "安泽县",
        141027: "浮山县",
        141028: "吉县",
        141029: "乡宁县",
        141030: "大宁县",
        141031: "隰县",
        141032: "永和县",
        141033: "蒲县",
        141034: "汾西县",
        141081: "侯马市",
        141082: "霍州市",
        141102: "离石区",
        141121: "文水县",
        141122: "交城县",
        141123: "兴县",
        141124: "临县",
        141125: "柳林县",
        141126: "石楼县",
        141127: "岚县",
        141128: "方山县",
        141129: "中阳县",
        141130: "交口县",
        141181: "孝义市",
        141182: "汾阳市",
        150102: "新城区",
        150103: "回民区",
        150104: "玉泉区",
        150105: "赛罕区",
        150121: "土默特左旗",
        150122: "托克托县",
        150123: "和林格尔县",
        150124: "清水河县",
        150125: "武川县",
        150172: "呼和浩特经济技术开发区",
        150202: "东河区",
        150203: "昆都仑区",
        150204: "青山区",
        150205: "石拐区",
        150206: "白云鄂博矿区",
        150207: "九原区",
        150221: "土默特右旗",
        150222: "固阳县",
        150223: "达尔罕茂明安联合旗",
        150271: "包头稀土高新技术产业开发区",
        150302: "海勃湾区",
        150303: "海南区",
        150304: "乌达区",
        150402: "红山区",
        150403: "元宝山区",
        150404: "松山区",
        150421: "阿鲁科尔沁旗",
        150422: "巴林左旗",
        150423: "巴林右旗",
        150424: "林西县",
        150425: "克什克腾旗",
        150426: "翁牛特旗",
        150428: "喀喇沁旗",
        150429: "宁城县",
        150430: "敖汉旗",
        150502: "科尔沁区",
        150521: "科尔沁左翼中旗",
        150522: "科尔沁左翼后旗",
        150523: "开鲁县",
        150524: "库伦旗",
        150525: "奈曼旗",
        150526: "扎鲁特旗",
        150571: "通辽经济技术开发区",
        150581: "霍林郭勒市",
        150602: "东胜区",
        150603: "康巴什区",
        150621: "达拉特旗",
        150622: "准格尔旗",
        150623: "鄂托克前旗",
        150624: "鄂托克旗",
        150625: "杭锦旗",
        150626: "乌审旗",
        150627: "伊金霍洛旗",
        150702: "海拉尔区",
        150703: "扎赉诺尔区",
        150721: "阿荣旗",
        150722: "莫力达瓦达斡尔族自治旗",
        150723: "鄂伦春自治旗",
        150724: "鄂温克族自治旗",
        150725: "陈巴尔虎旗",
        150726: "新巴尔虎左旗",
        150727: "新巴尔虎右旗",
        150781: "满洲里市",
        150782: "牙克石市",
        150783: "扎兰屯市",
        150784: "额尔古纳市",
        150785: "根河市",
        150802: "临河区",
        150821: "五原县",
        150822: "磴口县",
        150823: "乌拉特前旗",
        150824: "乌拉特中旗",
        150825: "乌拉特后旗",
        150826: "杭锦后旗",
        150902: "集宁区",
        150921: "卓资县",
        150922: "化德县",
        150923: "商都县",
        150924: "兴和县",
        150925: "凉城县",
        150926: "察哈尔右翼前旗",
        150927: "察哈尔右翼中旗",
        150928: "察哈尔右翼后旗",
        150929: "四子王旗",
        150981: "丰镇市",
        152201: "乌兰浩特市",
        152202: "阿尔山市",
        152221: "科尔沁右翼前旗",
        152222: "科尔沁右翼中旗",
        152223: "扎赉特旗",
        152224: "突泉县",
        152501: "二连浩特市",
        152502: "锡林浩特市",
        152522: "阿巴嘎旗",
        152523: "苏尼特左旗",
        152524: "苏尼特右旗",
        152525: "东乌珠穆沁旗",
        152526: "西乌珠穆沁旗",
        152527: "太仆寺旗",
        152528: "镶黄旗",
        152529: "正镶白旗",
        152530: "正蓝旗",
        152531: "多伦县",
        152571: "乌拉盖管委会",
        152921: "阿拉善左旗",
        152922: "阿拉善右旗",
        152923: "额济纳旗",
        152971: "内蒙古阿拉善经济开发区",
        210102: "和平区",
        210103: "沈河区",
        210104: "大东区",
        210105: "皇姑区",
        210106: "铁西区",
        210111: "苏家屯区",
        210112: "浑南区",
        210113: "沈北新区",
        210114: "于洪区",
        210115: "辽中区",
        210123: "康平县",
        210124: "法库县",
        210181: "新民市",
        210190: "经济技术开发区",
        210202: "中山区",
        210203: "西岗区",
        210204: "沙河口区",
        210211: "甘井子区",
        210212: "旅顺口区",
        210213: "金州区",
        210214: "普兰店区",
        210224: "长海县",
        210281: "瓦房店市",
        210283: "庄河市",
        210302: "铁东区",
        210303: "铁西区",
        210304: "立山区",
        210311: "千山区",
        210321: "台安县",
        210323: "岫岩满族自治县",
        210381: "海城市",
        210390: "高新区",
        210402: "新抚区",
        210403: "东洲区",
        210404: "望花区",
        210411: "顺城区",
        210421: "抚顺县",
        210422: "新宾满族自治县",
        210423: "清原满族自治县",
        210502: "平山区",
        210503: "溪湖区",
        210504: "明山区",
        210505: "南芬区",
        210521: "本溪满族自治县",
        210522: "桓仁满族自治县",
        210602: "元宝区",
        210603: "振兴区",
        210604: "振安区",
        210624: "宽甸满族自治县",
        210681: "东港市",
        210682: "凤城市",
        210702: "古塔区",
        210703: "凌河区",
        210711: "太和区",
        210726: "黑山县",
        210727: "义县",
        210781: "凌海市",
        210782: "北镇市",
        210793: "经济技术开发区",
        210802: "站前区",
        210803: "西市区",
        210804: "鲅鱼圈区",
        210811: "老边区",
        210881: "盖州市",
        210882: "大石桥市",
        210902: "海州区",
        210903: "新邱区",
        210904: "太平区",
        210905: "清河门区",
        210911: "细河区",
        210921: "阜新蒙古族自治县",
        210922: "彰武县",
        211002: "白塔区",
        211003: "文圣区",
        211004: "宏伟区",
        211005: "弓长岭区",
        211011: "太子河区",
        211021: "辽阳县",
        211081: "灯塔市",
        211102: "双台子区",
        211103: "兴隆台区",
        211104: "大洼区",
        211122: "盘山县",
        211202: "银州区",
        211204: "清河区",
        211221: "铁岭县",
        211223: "西丰县",
        211224: "昌图县",
        211281: "调兵山市",
        211282: "开原市",
        211302: "双塔区",
        211303: "龙城区",
        211321: "朝阳县",
        211322: "建平县",
        211324: "喀喇沁左翼蒙古族自治县",
        211381: "北票市",
        211382: "凌源市",
        211402: "连山区",
        211403: "龙港区",
        211404: "南票区",
        211421: "绥中县",
        211422: "建昌县",
        211481: "兴城市",
        220102: "南关区",
        220103: "宽城区",
        220104: "朝阳区",
        220105: "二道区",
        220106: "绿园区",
        220112: "双阳区",
        220113: "九台区",
        220122: "农安县",
        220171: "长春经济技术开发区",
        220172: "长春净月高新技术产业开发区",
        220173: "长春高新技术产业开发区",
        220174: "长春汽车经济技术开发区",
        220182: "榆树市",
        220183: "德惠市",
        220192: "经济技术开发区",
        220202: "昌邑区",
        220203: "龙潭区",
        220204: "船营区",
        220211: "丰满区",
        220221: "永吉县",
        220271: "吉林经济开发区",
        220272: "吉林高新技术产业开发区",
        220281: "蛟河市",
        220282: "桦甸市",
        220283: "舒兰市",
        220284: "磐石市",
        220302: "铁西区",
        220303: "铁东区",
        220322: "梨树县",
        220323: "伊通满族自治县",
        220381: "公主岭市",
        220382: "双辽市",
        220402: "龙山区",
        220403: "西安区",
        220421: "东丰县",
        220422: "东辽县",
        220502: "东昌区",
        220503: "二道江区",
        220521: "通化县",
        220523: "辉南县",
        220524: "柳河县",
        220581: "梅河口市",
        220582: "集安市",
        220602: "浑江区",
        220605: "江源区",
        220621: "抚松县",
        220622: "靖宇县",
        220623: "长白朝鲜族自治县",
        220681: "临江市",
        220702: "宁江区",
        220721: "前郭尔罗斯蒙古族自治县",
        220722: "长岭县",
        220723: "乾安县",
        220771: "吉林松原经济开发区",
        220781: "扶余市",
        220802: "洮北区",
        220821: "镇赉县",
        220822: "通榆县",
        220871: "吉林白城经济开发区",
        220881: "洮南市",
        220882: "大安市",
        222401: "延吉市",
        222402: "图们市",
        222403: "敦化市",
        222404: "珲春市",
        222405: "龙井市",
        222406: "和龙市",
        222424: "汪清县",
        222426: "安图县",
        230102: "道里区",
        230103: "南岗区",
        230104: "道外区",
        230108: "平房区",
        230109: "松北区",
        230110: "香坊区",
        230111: "呼兰区",
        230112: "阿城区",
        230113: "双城区",
        230123: "依兰县",
        230124: "方正县",
        230125: "宾县",
        230126: "巴彦县",
        230127: "木兰县",
        230128: "通河县",
        230129: "延寿县",
        230183: "尚志市",
        230184: "五常市",
        230202: "龙沙区",
        230203: "建华区",
        230204: "铁锋区",
        230205: "昂昂溪区",
        230206: "富拉尔基区",
        230207: "碾子山区",
        230208: "梅里斯达斡尔族区",
        230221: "龙江县",
        230223: "依安县",
        230224: "泰来县",
        230225: "甘南县",
        230227: "富裕县",
        230229: "克山县",
        230230: "克东县",
        230231: "拜泉县",
        230281: "讷河市",
        230302: "鸡冠区",
        230303: "恒山区",
        230304: "滴道区",
        230305: "梨树区",
        230306: "城子河区",
        230307: "麻山区",
        230321: "鸡东县",
        230381: "虎林市",
        230382: "密山市",
        230402: "向阳区",
        230403: "工农区",
        230404: "南山区",
        230405: "兴安区",
        230406: "东山区",
        230407: "兴山区",
        230421: "萝北县",
        230422: "绥滨县",
        230502: "尖山区",
        230503: "岭东区",
        230505: "四方台区",
        230506: "宝山区",
        230521: "集贤县",
        230522: "友谊县",
        230523: "宝清县",
        230524: "饶河县",
        230602: "萨尔图区",
        230603: "龙凤区",
        230604: "让胡路区",
        230605: "红岗区",
        230606: "大同区",
        230621: "肇州县",
        230622: "肇源县",
        230623: "林甸县",
        230624: "杜尔伯特蒙古族自治县",
        230671: "大庆高新技术产业开发区",
        230717: "伊美区",
        230718: "乌翠区",
        230719: "友好区",
        230722: "嘉荫县",
        230723: "汤旺县",
        230724: "丰林县",
        230725: "大箐山县",
        230726: "南岔县",
        230751: "金林区",
        230781: "铁力市",
        230803: "向阳区",
        230804: "前进区",
        230805: "东风区",
        230811: "郊区",
        230822: "桦南县",
        230826: "桦川县",
        230828: "汤原县",
        230881: "同江市",
        230882: "富锦市",
        230883: "抚远市",
        230902: "新兴区",
        230903: "桃山区",
        230904: "茄子河区",
        230921: "勃利县",
        231002: "东安区",
        231003: "阳明区",
        231004: "爱民区",
        231005: "西安区",
        231025: "林口县",
        231081: "绥芬河市",
        231083: "海林市",
        231084: "宁安市",
        231085: "穆棱市",
        231086: "东宁市",
        231102: "爱辉区",
        231123: "逊克县",
        231124: "孙吴县",
        231181: "北安市",
        231182: "五大连池市",
        231183: "嫩江市",
        231202: "北林区",
        231221: "望奎县",
        231222: "兰西县",
        231223: "青冈县",
        231224: "庆安县",
        231225: "明水县",
        231226: "绥棱县",
        231281: "安达市",
        231282: "肇东市",
        231283: "海伦市",
        232701: "漠河市",
        232721: "呼玛县",
        232722: "塔河县",
        232761: "加格达奇区",
        232762: "松岭区",
        232763: "新林区",
        232764: "呼中区",
        310101: "黄浦区",
        310104: "徐汇区",
        310105: "长宁区",
        310106: "静安区",
        310107: "普陀区",
        310109: "虹口区",
        310110: "杨浦区",
        310112: "闵行区",
        310113: "宝山区",
        310114: "嘉定区",
        310115: "浦东新区",
        310116: "金山区",
        310117: "松江区",
        310118: "青浦区",
        310120: "奉贤区",
        310151: "崇明区",
        320102: "玄武区",
        320104: "秦淮区",
        320105: "建邺区",
        320106: "鼓楼区",
        320111: "浦口区",
        320112: "江北新区",
        320113: "栖霞区",
        320114: "雨花台区",
        320115: "江宁区",
        320116: "六合区",
        320117: "溧水区",
        320118: "高淳区",
        320205: "锡山区",
        320206: "惠山区",
        320211: "滨湖区",
        320213: "梁溪区",
        320214: "新吴区",
        320281: "江阴市",
        320282: "宜兴市",
        320302: "鼓楼区",
        320303: "云龙区",
        320305: "贾汪区",
        320311: "泉山区",
        320312: "铜山区",
        320321: "丰县",
        320322: "沛县",
        320324: "睢宁县",
        320371: "徐州经济技术开发区",
        320381: "新沂市",
        320382: "邳州市",
        320391: "工业园区",
        320402: "天宁区",
        320404: "钟楼区",
        320411: "新北区",
        320412: "武进区",
        320413: "金坛区",
        320481: "溧阳市",
        320505: "虎丘区",
        320506: "吴中区",
        320507: "相城区",
        320508: "姑苏区",
        320509: "吴江区",
        320571: "苏州工业园区",
        320581: "常熟市",
        320582: "张家港市",
        320583: "昆山市",
        320585: "太仓市",
        320590: "工业园区",
        320591: "高新区",
        320602: "崇川区",
        320611: "港闸区",
        320612: "通州区",
        320623: "如东县",
        320681: "启东市",
        320682: "如皋市",
        320684: "海门市",
        320685: "海安市",
        320691: "高新区",
        320703: "连云区",
        320706: "海州区",
        320707: "赣榆区",
        320722: "东海县",
        320723: "灌云县",
        320724: "灌南县",
        320771: "连云港经济技术开发区",
        320803: "淮安区",
        320804: "淮阴区",
        320812: "清江浦区",
        320813: "洪泽区",
        320826: "涟水县",
        320830: "盱眙县",
        320831: "金湖县",
        320871: "淮安经济技术开发区",
        320890: "经济开发区",
        320902: "亭湖区",
        320903: "盐都区",
        320904: "大丰区",
        320921: "响水县",
        320922: "滨海县",
        320923: "阜宁县",
        320924: "射阳县",
        320925: "建湖县",
        320971: "盐城经济技术开发区",
        320981: "东台市",
        321002: "广陵区",
        321003: "邗江区",
        321012: "江都区",
        321023: "宝应县",
        321071: "扬州经济技术开发区",
        321081: "仪征市",
        321084: "高邮市",
        321090: "经济开发区",
        321102: "京口区",
        321111: "润州区",
        321112: "丹徒区",
        321150: "镇江新区",
        321181: "丹阳市",
        321182: "扬中市",
        321183: "句容市",
        321202: "海陵区",
        321203: "高港区",
        321204: "姜堰区",
        321271: "泰州医药高新技术产业开发区",
        321281: "兴化市",
        321282: "靖江市",
        321283: "泰兴市",
        321302: "宿城区",
        321311: "宿豫区",
        321322: "沭阳县",
        321323: "泗阳县",
        321324: "泗洪县",
        321371: "宿迁经济技术开发区",
        330102: "上城区",
        330105: "拱墅区",
        330106: "西湖区",
        330108: "滨江区",
        330109: "萧山区",
        330110: "余杭区",
        330111: "富阳区",
        330112: "临安区",
        330113: "临平区",
        330114: "钱塘区",
        330122: "桐庐县",
        330127: "淳安县",
        330182: "建德市",
        330203: "海曙区",
        330205: "江北区",
        330206: "北仑区",
        330211: "镇海区",
        330212: "鄞州区",
        330213: "奉化区",
        330225: "象山县",
        330226: "宁海县",
        330281: "余姚市",
        330282: "慈溪市",
        330302: "鹿城区",
        330303: "龙湾区",
        330304: "瓯海区",
        330305: "洞头区",
        330324: "永嘉县",
        330326: "平阳县",
        330327: "苍南县",
        330328: "文成县",
        330329: "泰顺县",
        330381: "瑞安市",
        330382: "乐清市",
        330383: "龙港市",
        330402: "南湖区",
        330411: "秀洲区",
        330421: "嘉善县",
        330424: "海盐县",
        330481: "海宁市",
        330482: "平湖市",
        330483: "桐乡市",
        330502: "吴兴区",
        330503: "南浔区",
        330521: "德清县",
        330522: "长兴县",
        330523: "安吉县",
        330602: "越城区",
        330603: "柯桥区",
        330604: "上虞区",
        330624: "新昌县",
        330681: "诸暨市",
        330683: "嵊州市",
        330702: "婺城区",
        330703: "金东区",
        330723: "武义县",
        330726: "浦江县",
        330727: "磐安县",
        330781: "兰溪市",
        330782: "义乌市",
        330783: "东阳市",
        330784: "永康市",
        330802: "柯城区",
        330803: "衢江区",
        330822: "常山县",
        330824: "开化县",
        330825: "龙游县",
        330881: "江山市",
        330902: "定海区",
        330903: "普陀区",
        330921: "岱山县",
        330922: "嵊泗县",
        331002: "椒江区",
        331003: "黄岩区",
        331004: "路桥区",
        331022: "三门县",
        331023: "天台县",
        331024: "仙居县",
        331081: "温岭市",
        331082: "临海市",
        331083: "玉环市",
        331102: "莲都区",
        331121: "青田县",
        331122: "缙云县",
        331123: "遂昌县",
        331124: "松阳县",
        331125: "云和县",
        331126: "庆元县",
        331127: "景宁畲族自治县",
        331181: "龙泉市",
        340102: "瑶海区",
        340103: "庐阳区",
        340104: "蜀山区",
        340111: "包河区",
        340121: "长丰县",
        340122: "肥东县",
        340123: "肥西县",
        340124: "庐江县",
        340171: "合肥高新技术产业开发区",
        340172: "合肥经济技术开发区",
        340173: "合肥新站高新技术产业开发区",
        340181: "巢湖市",
        340190: "高新技术开发区",
        340191: "经济技术开发区",
        340202: "镜湖区",
        340207: "鸠江区",
        340209: "弋江区",
        340210: "湾沚区",
        340212: "繁昌区",
        340223: "南陵县",
        340281: "无为市",
        340302: "龙子湖区",
        340303: "蚌山区",
        340304: "禹会区",
        340311: "淮上区",
        340321: "怀远县",
        340322: "五河县",
        340323: "固镇县",
        340371: "蚌埠市高新技术开发区",
        340372: "蚌埠市经济开发区",
        340402: "大通区",
        340403: "田家庵区",
        340404: "谢家集区",
        340405: "八公山区",
        340406: "潘集区",
        340421: "凤台县",
        340422: "寿县",
        340503: "花山区",
        340504: "雨山区",
        340506: "博望区",
        340521: "当涂县",
        340522: "含山县",
        340523: "和县",
        340602: "杜集区",
        340603: "相山区",
        340604: "烈山区",
        340621: "濉溪县",
        340705: "铜官区",
        340706: "义安区",
        340711: "郊区",
        340722: "枞阳县",
        340802: "迎江区",
        340803: "大观区",
        340811: "宜秀区",
        340822: "怀宁县",
        340825: "太湖县",
        340826: "宿松县",
        340827: "望江县",
        340828: "岳西县",
        340881: "桐城市",
        340882: "潜山市",
        341002: "屯溪区",
        341003: "黄山区",
        341004: "徽州区",
        341021: "歙县",
        341022: "休宁县",
        341023: "黟县",
        341024: "祁门县",
        341102: "琅琊区",
        341103: "南谯区",
        341122: "来安县",
        341124: "全椒县",
        341125: "定远县",
        341126: "凤阳县",
        341181: "天长市",
        341182: "明光市",
        341202: "颍州区",
        341203: "颍东区",
        341204: "颍泉区",
        341221: "临泉县",
        341222: "太和县",
        341225: "阜南县",
        341226: "颍上县",
        341271: "阜阳合肥现代产业园区",
        341282: "界首市",
        341302: "埇桥区",
        341321: "砀山县",
        341322: "萧县",
        341323: "灵璧县",
        341324: "泗县",
        341371: "宿州马鞍山现代产业园区",
        341372: "宿州经济技术开发区",
        341390: "经济开发区",
        341502: "金安区",
        341503: "裕安区",
        341504: "叶集区",
        341522: "霍邱县",
        341523: "舒城县",
        341524: "金寨县",
        341525: "霍山县",
        341602: "谯城区",
        341621: "涡阳县",
        341622: "蒙城县",
        341623: "利辛县",
        341702: "贵池区",
        341721: "东至县",
        341722: "石台县",
        341723: "青阳县",
        341802: "宣州区",
        341821: "郎溪县",
        341823: "泾县",
        341824: "绩溪县",
        341825: "旌德县",
        341871: "宣城市经济开发区",
        341881: "宁国市",
        341882: "广德市",
        350102: "鼓楼区",
        350103: "台江区",
        350104: "仓山区",
        350105: "马尾区",
        350111: "晋安区",
        350112: "长乐区",
        350121: "闽侯县",
        350122: "连江县",
        350123: "罗源县",
        350124: "闽清县",
        350125: "永泰县",
        350128: "平潭县",
        350181: "福清市",
        350203: "思明区",
        350205: "海沧区",
        350206: "湖里区",
        350211: "集美区",
        350212: "同安区",
        350213: "翔安区",
        350302: "城厢区",
        350303: "涵江区",
        350304: "荔城区",
        350305: "秀屿区",
        350322: "仙游县",
        350402: "梅列区",
        350403: "三元区",
        350421: "明溪县",
        350423: "清流县",
        350424: "宁化县",
        350425: "大田县",
        350426: "尤溪县",
        350427: "沙县",
        350428: "将乐县",
        350429: "泰宁县",
        350430: "建宁县",
        350481: "永安市",
        350502: "鲤城区",
        350503: "丰泽区",
        350504: "洛江区",
        350505: "泉港区",
        350521: "惠安县",
        350524: "安溪县",
        350525: "永春县",
        350526: "德化县",
        350527: "金门县",
        350581: "石狮市",
        350582: "晋江市",
        350583: "南安市",
        350602: "芗城区",
        350603: "龙文区",
        350622: "云霄县",
        350623: "漳浦县",
        350624: "诏安县",
        350625: "长泰县",
        350626: "东山县",
        350627: "南靖县",
        350628: "平和县",
        350629: "华安县",
        350681: "龙海市",
        350702: "延平区",
        350703: "建阳区",
        350721: "顺昌县",
        350722: "浦城县",
        350723: "光泽县",
        350724: "松溪县",
        350725: "政和县",
        350781: "邵武市",
        350782: "武夷山市",
        350783: "建瓯市",
        350802: "新罗区",
        350803: "永定区",
        350821: "长汀县",
        350823: "上杭县",
        350824: "武平县",
        350825: "连城县",
        350881: "漳平市",
        350902: "蕉城区",
        350921: "霞浦县",
        350922: "古田县",
        350923: "屏南县",
        350924: "寿宁县",
        350925: "周宁县",
        350926: "柘荣县",
        350981: "福安市",
        350982: "福鼎市",
        360102: "东湖区",
        360103: "西湖区",
        360104: "青云谱区",
        360111: "青山湖区",
        360112: "新建区",
        360113: "红谷滩区",
        360121: "南昌县",
        360123: "安义县",
        360124: "进贤县",
        360190: "经济技术开发区",
        360192: "高新区",
        360202: "昌江区",
        360203: "珠山区",
        360222: "浮梁县",
        360281: "乐平市",
        360302: "安源区",
        360313: "湘东区",
        360321: "莲花县",
        360322: "上栗县",
        360323: "芦溪县",
        360402: "濂溪区",
        360403: "浔阳区",
        360404: "柴桑区",
        360423: "武宁县",
        360424: "修水县",
        360425: "永修县",
        360426: "德安县",
        360428: "都昌县",
        360429: "湖口县",
        360430: "彭泽县",
        360481: "瑞昌市",
        360482: "共青城市",
        360483: "庐山市",
        360490: "经济技术开发区",
        360502: "渝水区",
        360521: "分宜县",
        360602: "月湖区",
        360603: "余江区",
        360681: "贵溪市",
        360702: "章贡区",
        360703: "南康区",
        360704: "赣县区",
        360722: "信丰县",
        360723: "大余县",
        360724: "上犹县",
        360725: "崇义县",
        360726: "安远县",
        360728: "定南县",
        360729: "全南县",
        360730: "宁都县",
        360731: "于都县",
        360732: "兴国县",
        360733: "会昌县",
        360734: "寻乌县",
        360735: "石城县",
        360781: "瑞金市",
        360783: "龙南市",
        360802: "吉州区",
        360803: "青原区",
        360821: "吉安县",
        360822: "吉水县",
        360823: "峡江县",
        360824: "新干县",
        360825: "永丰县",
        360826: "泰和县",
        360827: "遂川县",
        360828: "万安县",
        360829: "安福县",
        360830: "永新县",
        360881: "井冈山市",
        360902: "袁州区",
        360921: "奉新县",
        360922: "万载县",
        360923: "上高县",
        360924: "宜丰县",
        360925: "靖安县",
        360926: "铜鼓县",
        360981: "丰城市",
        360982: "樟树市",
        360983: "高安市",
        361002: "临川区",
        361003: "东乡区",
        361021: "南城县",
        361022: "黎川县",
        361023: "南丰县",
        361024: "崇仁县",
        361025: "乐安县",
        361026: "宜黄县",
        361027: "金溪县",
        361028: "资溪县",
        361030: "广昌县",
        361102: "信州区",
        361103: "广丰区",
        361104: "广信区",
        361123: "玉山县",
        361124: "铅山县",
        361125: "横峰县",
        361126: "弋阳县",
        361127: "余干县",
        361128: "鄱阳县",
        361129: "万年县",
        361130: "婺源县",
        361181: "德兴市",
        370102: "历下区",
        370103: "市中区",
        370104: "槐荫区",
        370105: "天桥区",
        370112: "历城区",
        370113: "长清区",
        370114: "章丘区",
        370115: "济阳区",
        370116: "莱芜区",
        370117: "钢城区",
        370124: "平阴县",
        370126: "商河县",
        370171: "济南高新技术产业开发区",
        370190: "高新区",
        370202: "市南区",
        370203: "市北区",
        370211: "黄岛区",
        370212: "崂山区",
        370213: "李沧区",
        370214: "城阳区",
        370215: "即墨区",
        370271: "青岛高新技术产业开发区",
        370281: "胶州市",
        370283: "平度市",
        370285: "莱西市",
        370290: "开发区",
        370302: "淄川区",
        370303: "张店区",
        370304: "博山区",
        370305: "临淄区",
        370306: "周村区",
        370321: "桓台县",
        370322: "高青县",
        370323: "沂源县",
        370402: "市中区",
        370403: "薛城区",
        370404: "峄城区",
        370405: "台儿庄区",
        370406: "山亭区",
        370481: "滕州市",
        370502: "东营区",
        370503: "河口区",
        370505: "垦利区",
        370522: "利津县",
        370523: "广饶县",
        370571: "东营经济技术开发区",
        370572: "东营港经济开发区",
        370602: "芝罘区",
        370611: "福山区",
        370612: "牟平区",
        370613: "莱山区",
        370634: "长岛县",
        370671: "烟台高新技术产业开发区",
        370672: "烟台经济技术开发区",
        370681: "龙口市",
        370682: "莱阳市",
        370683: "莱州市",
        370684: "蓬莱市",
        370685: "招远市",
        370686: "栖霞市",
        370687: "海阳市",
        370690: "开发区",
        370702: "潍城区",
        370703: "寒亭区",
        370704: "坊子区",
        370705: "奎文区",
        370724: "临朐县",
        370725: "昌乐县",
        370772: "潍坊滨海经济技术开发区",
        370781: "青州市",
        370782: "诸城市",
        370783: "寿光市",
        370784: "安丘市",
        370785: "高密市",
        370786: "昌邑市",
        370790: "开发区",
        370791: "高新区",
        370811: "任城区",
        370812: "兖州区",
        370826: "微山县",
        370827: "鱼台县",
        370828: "金乡县",
        370829: "嘉祥县",
        370830: "汶上县",
        370831: "泗水县",
        370832: "梁山县",
        370871: "济宁高新技术产业开发区",
        370881: "曲阜市",
        370883: "邹城市",
        370890: "高新区",
        370902: "泰山区",
        370911: "岱岳区",
        370921: "宁阳县",
        370923: "东平县",
        370982: "新泰市",
        370983: "肥城市",
        371002: "环翠区",
        371003: "文登区",
        371071: "威海火炬高技术产业开发区",
        371072: "威海经济技术开发区",
        371082: "荣成市",
        371083: "乳山市",
        371091: "经济技术开发区",
        371102: "东港区",
        371103: "岚山区",
        371121: "五莲县",
        371122: "莒县",
        371171: "日照经济技术开发区",
        371302: "兰山区",
        371311: "罗庄区",
        371312: "河东区",
        371321: "沂南县",
        371322: "郯城县",
        371323: "沂水县",
        371324: "兰陵县",
        371325: "费县",
        371326: "平邑县",
        371327: "莒南县",
        371328: "蒙阴县",
        371329: "临沭县",
        371371: "临沂高新技术产业开发区",
        371402: "德城区",
        371403: "陵城区",
        371422: "宁津县",
        371423: "庆云县",
        371424: "临邑县",
        371425: "齐河县",
        371426: "平原县",
        371427: "夏津县",
        371428: "武城县",
        371472: "德州运河经济开发区",
        371481: "乐陵市",
        371482: "禹城市",
        371502: "东昌府区",
        371503: "茌平区",
        371521: "阳谷县",
        371522: "莘县",
        371524: "东阿县",
        371525: "冠县",
        371526: "高唐县",
        371581: "临清市",
        371602: "滨城区",
        371603: "沾化区",
        371621: "惠民县",
        371622: "阳信县",
        371623: "无棣县",
        371625: "博兴县",
        371681: "邹平市",
        371702: "牡丹区",
        371703: "定陶区",
        371721: "曹县",
        371722: "单县",
        371723: "成武县",
        371724: "巨野县",
        371725: "郓城县",
        371726: "鄄城县",
        371728: "东明县",
        371771: "菏泽经济技术开发区",
        371772: "菏泽高新技术开发区",
        410102: "中原区",
        410103: "二七区",
        410104: "管城回族区",
        410105: "金水区",
        410106: "上街区",
        410108: "惠济区",
        410122: "中牟县",
        410171: "郑州经济技术开发区",
        410172: "郑州高新技术产业开发区",
        410173: "郑州航空港经济综合实验区",
        410181: "巩义市",
        410182: "荥阳市",
        410183: "新密市",
        410184: "新郑市",
        410185: "登封市",
        410190: "高新技术开发区",
        410191: "经济技术开发区",
        410202: "龙亭区",
        410203: "顺河回族区",
        410204: "鼓楼区",
        410205: "禹王台区",
        410212: "祥符区",
        410221: "杞县",
        410222: "通许县",
        410223: "尉氏县",
        410225: "兰考县",
        410302: "老城区",
        410303: "西工区",
        410304: "瀍河回族区",
        410305: "涧西区",
        410306: "吉利区",
        410311: "洛龙区",
        410322: "孟津县",
        410323: "新安县",
        410324: "栾川县",
        410325: "嵩县",
        410326: "汝阳县",
        410327: "宜阳县",
        410328: "洛宁县",
        410329: "伊川县",
        410381: "偃师市",
        410402: "新华区",
        410403: "卫东区",
        410404: "石龙区",
        410411: "湛河区",
        410421: "宝丰县",
        410422: "叶县",
        410423: "鲁山县",
        410425: "郏县",
        410471: "平顶山高新技术产业开发区",
        410481: "舞钢市",
        410482: "汝州市",
        410502: "文峰区",
        410503: "北关区",
        410505: "殷都区",
        410506: "龙安区",
        410522: "安阳县",
        410523: "汤阴县",
        410526: "滑县",
        410527: "内黄县",
        410581: "林州市",
        410590: "开发区",
        410602: "鹤山区",
        410603: "山城区",
        410611: "淇滨区",
        410621: "浚县",
        410622: "淇县",
        410702: "红旗区",
        410703: "卫滨区",
        410704: "凤泉区",
        410711: "牧野区",
        410721: "新乡县",
        410724: "获嘉县",
        410725: "原阳县",
        410726: "延津县",
        410727: "封丘县",
        410771: "新乡高新技术产业开发区",
        410772: "新乡经济技术开发区",
        410781: "卫辉市",
        410782: "辉县市",
        410783: "长垣市",
        410802: "解放区",
        410803: "中站区",
        410804: "马村区",
        410811: "山阳区",
        410821: "修武县",
        410822: "博爱县",
        410823: "武陟县",
        410825: "温县",
        410871: "焦作城乡一体化示范区",
        410882: "沁阳市",
        410883: "孟州市",
        410902: "华龙区",
        410922: "清丰县",
        410923: "南乐县",
        410926: "范县",
        410927: "台前县",
        410928: "濮阳县",
        410971: "河南濮阳工业园区",
        411002: "魏都区",
        411003: "建安区",
        411024: "鄢陵县",
        411025: "襄城县",
        411071: "许昌经济技术开发区",
        411081: "禹州市",
        411082: "长葛市",
        411102: "源汇区",
        411103: "郾城区",
        411104: "召陵区",
        411121: "舞阳县",
        411122: "临颍县",
        411171: "漯河经济技术开发区",
        411202: "湖滨区",
        411203: "陕州区",
        411221: "渑池县",
        411224: "卢氏县",
        411271: "河南三门峡经济开发区",
        411281: "义马市",
        411282: "灵宝市",
        411302: "宛城区",
        411303: "卧龙区",
        411321: "南召县",
        411322: "方城县",
        411323: "西峡县",
        411324: "镇平县",
        411325: "内乡县",
        411326: "淅川县",
        411327: "社旗县",
        411328: "唐河县",
        411329: "新野县",
        411330: "桐柏县",
        411372: "南阳市城乡一体化示范区",
        411381: "邓州市",
        411402: "梁园区",
        411403: "睢阳区",
        411421: "民权县",
        411422: "睢县",
        411423: "宁陵县",
        411424: "柘城县",
        411425: "虞城县",
        411426: "夏邑县",
        411481: "永城市",
        411502: "浉河区",
        411503: "平桥区",
        411521: "罗山县",
        411522: "光山县",
        411523: "新县",
        411524: "商城县",
        411525: "固始县",
        411526: "潢川县",
        411527: "淮滨县",
        411528: "息县",
        411602: "川汇区",
        411603: "淮阳区",
        411621: "扶沟县",
        411622: "西华县",
        411623: "商水县",
        411624: "沈丘县",
        411625: "郸城县",
        411627: "太康县",
        411628: "鹿邑县",
        411671: "河南周口经济开发区",
        411681: "项城市",
        411690: "经济开发区",
        411702: "驿城区",
        411721: "西平县",
        411722: "上蔡县",
        411723: "平舆县",
        411724: "正阳县",
        411725: "确山县",
        411726: "泌阳县",
        411727: "汝南县",
        411728: "遂平县",
        411729: "新蔡县",
        419001: "济源市",
        420102: "江岸区",
        420103: "江汉区",
        420104: "硚口区",
        420105: "汉阳区",
        420106: "武昌区",
        420107: "青山区",
        420111: "洪山区",
        420112: "东西湖区",
        420113: "汉南区",
        420114: "蔡甸区",
        420115: "江夏区",
        420116: "黄陂区",
        420117: "新洲区",
        420202: "黄石港区",
        420203: "西塞山区",
        420204: "下陆区",
        420205: "铁山区",
        420222: "阳新县",
        420281: "大冶市",
        420302: "茅箭区",
        420303: "张湾区",
        420304: "郧阳区",
        420322: "郧西县",
        420323: "竹山县",
        420324: "竹溪县",
        420325: "房县",
        420381: "丹江口市",
        420502: "西陵区",
        420503: "伍家岗区",
        420504: "点军区",
        420505: "猇亭区",
        420506: "夷陵区",
        420525: "远安县",
        420526: "兴山县",
        420527: "秭归县",
        420528: "长阳土家族自治县",
        420529: "五峰土家族自治县",
        420581: "宜都市",
        420582: "当阳市",
        420583: "枝江市",
        420590: "经济开发区",
        420602: "襄城区",
        420606: "樊城区",
        420607: "襄州区",
        420624: "南漳县",
        420625: "谷城县",
        420626: "保康县",
        420682: "老河口市",
        420683: "枣阳市",
        420684: "宜城市",
        420702: "梁子湖区",
        420703: "华容区",
        420704: "鄂城区",
        420802: "东宝区",
        420804: "掇刀区",
        420822: "沙洋县",
        420881: "钟祥市",
        420882: "京山市",
        420902: "孝南区",
        420921: "孝昌县",
        420922: "大悟县",
        420923: "云梦县",
        420981: "应城市",
        420982: "安陆市",
        420984: "汉川市",
        421002: "沙市区",
        421003: "荆州区",
        421022: "公安县",
        421023: "监利县",
        421024: "江陵县",
        421081: "石首市",
        421083: "洪湖市",
        421087: "松滋市",
        421102: "黄州区",
        421121: "团风县",
        421122: "红安县",
        421123: "罗田县",
        421124: "英山县",
        421125: "浠水县",
        421126: "蕲春县",
        421127: "黄梅县",
        421171: "龙感湖管理区",
        421181: "麻城市",
        421182: "武穴市",
        421202: "咸安区",
        421221: "嘉鱼县",
        421222: "通城县",
        421223: "崇阳县",
        421224: "通山县",
        421281: "赤壁市",
        421303: "曾都区",
        421321: "随县",
        421381: "广水市",
        422801: "恩施市",
        422802: "利川市",
        422822: "建始县",
        422823: "巴东县",
        422825: "宣恩县",
        422826: "咸丰县",
        422827: "来凤县",
        422828: "鹤峰县",
        429004: "仙桃市",
        429005: "潜江市",
        429006: "天门市",
        429021: "神农架林区",
        430102: "芙蓉区",
        430103: "天心区",
        430104: "岳麓区",
        430105: "开福区",
        430111: "雨花区",
        430112: "望城区",
        430121: "长沙县",
        430181: "浏阳市",
        430182: "宁乡市",
        430202: "荷塘区",
        430203: "芦淞区",
        430204: "石峰区",
        430211: "天元区",
        430212: "渌口区",
        430223: "攸县",
        430224: "茶陵县",
        430225: "炎陵县",
        430271: "云龙示范区",
        430281: "醴陵市",
        430302: "雨湖区",
        430304: "岳塘区",
        430321: "湘潭县",
        430373: "湘潭九华示范区",
        430381: "湘乡市",
        430382: "韶山市",
        430405: "珠晖区",
        430406: "雁峰区",
        430407: "石鼓区",
        430408: "蒸湘区",
        430412: "南岳区",
        430421: "衡阳县",
        430422: "衡南县",
        430423: "衡山县",
        430424: "衡东县",
        430426: "祁东县",
        430481: "耒阳市",
        430482: "常宁市",
        430502: "双清区",
        430503: "大祥区",
        430511: "北塔区",
        430522: "新邵县",
        430523: "邵阳县",
        430524: "隆回县",
        430525: "洞口县",
        430527: "绥宁县",
        430528: "新宁县",
        430529: "城步苗族自治县",
        430581: "武冈市",
        430582: "邵东市",
        430602: "岳阳楼区",
        430603: "云溪区",
        430611: "君山区",
        430621: "岳阳县",
        430623: "华容县",
        430624: "湘阴县",
        430626: "平江县",
        430681: "汨罗市",
        430682: "临湘市",
        430702: "武陵区",
        430703: "鼎城区",
        430721: "安乡县",
        430722: "汉寿县",
        430723: "澧县",
        430724: "临澧县",
        430725: "桃源县",
        430726: "石门县",
        430781: "津市市",
        430802: "永定区",
        430811: "武陵源区",
        430821: "慈利县",
        430822: "桑植县",
        430902: "资阳区",
        430903: "赫山区",
        430921: "南县",
        430922: "桃江县",
        430923: "安化县",
        430971: "益阳市大通湖管理区",
        430981: "沅江市",
        431002: "北湖区",
        431003: "苏仙区",
        431021: "桂阳县",
        431022: "宜章县",
        431023: "永兴县",
        431024: "嘉禾县",
        431025: "临武县",
        431026: "汝城县",
        431027: "桂东县",
        431028: "安仁县",
        431081: "资兴市",
        431102: "零陵区",
        431103: "冷水滩区",
        431121: "祁阳县",
        431122: "东安县",
        431123: "双牌县",
        431124: "道县",
        431125: "江永县",
        431126: "宁远县",
        431127: "蓝山县",
        431128: "新田县",
        431129: "江华瑶族自治县",
        431202: "鹤城区",
        431221: "中方县",
        431222: "沅陵县",
        431223: "辰溪县",
        431224: "溆浦县",
        431225: "会同县",
        431226: "麻阳苗族自治县",
        431227: "新晃侗族自治县",
        431228: "芷江侗族自治县",
        431229: "靖州苗族侗族自治县",
        431230: "通道侗族自治县",
        431271: "怀化市洪江管理区",
        431281: "洪江市",
        431302: "娄星区",
        431321: "双峰县",
        431322: "新化县",
        431381: "冷水江市",
        431382: "涟源市",
        433101: "吉首市",
        433122: "泸溪县",
        433123: "凤凰县",
        433124: "花垣县",
        433125: "保靖县",
        433126: "古丈县",
        433127: "永顺县",
        433130: "龙山县",
        440103: "荔湾区",
        440104: "越秀区",
        440105: "海珠区",
        440106: "天河区",
        440111: "白云区",
        440112: "黄埔区",
        440113: "番禺区",
        440114: "花都区",
        440115: "南沙区",
        440117: "从化区",
        440118: "增城区",
        440203: "武江区",
        440204: "浈江区",
        440205: "曲江区",
        440222: "始兴县",
        440224: "仁化县",
        440229: "翁源县",
        440232: "乳源瑶族自治县",
        440233: "新丰县",
        440281: "乐昌市",
        440282: "南雄市",
        440303: "罗湖区",
        440304: "福田区",
        440305: "南山区",
        440306: "宝安区",
        440307: "龙岗区",
        440308: "盐田区",
        440309: "龙华区",
        440310: "坪山区",
        440311: "光明区",
        440402: "香洲区",
        440403: "斗门区",
        440404: "金湾区",
        440507: "龙湖区",
        440511: "金平区",
        440512: "濠江区",
        440513: "潮阳区",
        440514: "潮南区",
        440515: "澄海区",
        440523: "南澳县",
        440604: "禅城区",
        440605: "南海区",
        440606: "顺德区",
        440607: "三水区",
        440608: "高明区",
        440703: "蓬江区",
        440704: "江海区",
        440705: "新会区",
        440781: "台山市",
        440783: "开平市",
        440784: "鹤山市",
        440785: "恩平市",
        440802: "赤坎区",
        440803: "霞山区",
        440804: "坡头区",
        440811: "麻章区",
        440823: "遂溪县",
        440825: "徐闻县",
        440881: "廉江市",
        440882: "雷州市",
        440883: "吴川市",
        440890: "经济技术开发区",
        440902: "茂南区",
        440904: "电白区",
        440981: "高州市",
        440982: "化州市",
        440983: "信宜市",
        441202: "端州区",
        441203: "鼎湖区",
        441204: "高要区",
        441223: "广宁县",
        441224: "怀集县",
        441225: "封开县",
        441226: "德庆县",
        441284: "四会市",
        441302: "惠城区",
        441303: "惠阳区",
        441322: "博罗县",
        441323: "惠东县",
        441324: "龙门县",
        441402: "梅江区",
        441403: "梅县区",
        441422: "大埔县",
        441423: "丰顺县",
        441424: "五华县",
        441426: "平远县",
        441427: "蕉岭县",
        441481: "兴宁市",
        441502: "城区",
        441521: "海丰县",
        441523: "陆河县",
        441581: "陆丰市",
        441602: "源城区",
        441621: "紫金县",
        441622: "龙川县",
        441623: "连平县",
        441624: "和平县",
        441625: "东源县",
        441702: "江城区",
        441704: "阳东区",
        441721: "阳西县",
        441781: "阳春市",
        441802: "清城区",
        441803: "清新区",
        441821: "佛冈县",
        441823: "阳山县",
        441825: "连山壮族瑶族自治县",
        441826: "连南瑶族自治县",
        441881: "英德市",
        441882: "连州市",
        441901: "中堂镇",
        441903: "南城街道",
        441904: "长安镇",
        441905: "东坑镇",
        441906: "樟木头镇",
        441907: "莞城街道",
        441908: "石龙镇",
        441909: "桥头镇",
        441910: "万江街道",
        441911: "麻涌镇",
        441912: "虎门镇",
        441913: "谢岗镇",
        441914: "石碣镇",
        441915: "茶山镇",
        441916: "东城街道",
        441917: "洪梅镇",
        441918: "道滘镇",
        441919: "高埗镇",
        441920: "企石镇",
        441921: "凤岗镇",
        441922: "大岭山镇",
        441923: "松山湖",
        441924: "清溪镇",
        441925: "望牛墩镇",
        441926: "厚街镇",
        441927: "常平镇",
        441928: "寮步镇",
        441929: "石排镇",
        441930: "横沥镇",
        441931: "塘厦镇",
        441932: "黄江镇",
        441933: "大朗镇",
        441934: "东莞港",
        441935: "东莞生态园",
        441990: "沙田镇",
        442001: "南头镇",
        442002: "神湾镇",
        442003: "东凤镇",
        442004: "五桂山街道",
        442005: "黄圃镇",
        442006: "小榄镇",
        442007: "石岐街道",
        442008: "横栏镇",
        442009: "三角镇",
        442010: "三乡镇",
        442011: "港口镇",
        442012: "沙溪镇",
        442013: "板芙镇",
        442015: "东升镇",
        442016: "阜沙镇",
        442017: "民众镇",
        442018: "东区街道",
        442019: "火炬开发区街道办事处",
        442020: "西区街道",
        442021: "南区街道",
        442022: "古镇镇",
        442023: "坦洲镇",
        442024: "大涌镇",
        442025: "南朗镇",
        445102: "湘桥区",
        445103: "潮安区",
        445122: "饶平县",
        445202: "榕城区",
        445203: "揭东区",
        445222: "揭西县",
        445224: "惠来县",
        445281: "普宁市",
        445302: "云城区",
        445303: "云安区",
        445321: "新兴县",
        445322: "郁南县",
        445381: "罗定市",
        450102: "兴宁区",
        450103: "青秀区",
        450105: "江南区",
        450107: "西乡塘区",
        450108: "良庆区",
        450109: "邕宁区",
        450110: "武鸣区",
        450123: "隆安县",
        450124: "马山县",
        450125: "上林县",
        450126: "宾阳县",
        450127: "横县",
        450202: "城中区",
        450203: "鱼峰区",
        450204: "柳南区",
        450205: "柳北区",
        450206: "柳江区",
        450222: "柳城县",
        450223: "鹿寨县",
        450224: "融安县",
        450225: "融水苗族自治县",
        450226: "三江侗族自治县",
        450302: "秀峰区",
        450303: "叠彩区",
        450304: "象山区",
        450305: "七星区",
        450311: "雁山区",
        450312: "临桂区",
        450321: "阳朔县",
        450323: "灵川县",
        450324: "全州县",
        450325: "兴安县",
        450326: "永福县",
        450327: "灌阳县",
        450328: "龙胜各族自治县",
        450329: "资源县",
        450330: "平乐县",
        450332: "恭城瑶族自治县",
        450381: "荔浦市",
        450403: "万秀区",
        450405: "长洲区",
        450406: "龙圩区",
        450421: "苍梧县",
        450422: "藤县",
        450423: "蒙山县",
        450481: "岑溪市",
        450502: "海城区",
        450503: "银海区",
        450512: "铁山港区",
        450521: "合浦县",
        450602: "港口区",
        450603: "防城区",
        450621: "上思县",
        450681: "东兴市",
        450702: "钦南区",
        450703: "钦北区",
        450721: "灵山县",
        450722: "浦北县",
        450802: "港北区",
        450803: "港南区",
        450804: "覃塘区",
        450821: "平南县",
        450881: "桂平市",
        450902: "玉州区",
        450903: "福绵区",
        450921: "容县",
        450922: "陆川县",
        450923: "博白县",
        450924: "兴业县",
        450981: "北流市",
        451002: "右江区",
        451003: "田阳区",
        451022: "田东县",
        451024: "德保县",
        451026: "那坡县",
        451027: "凌云县",
        451028: "乐业县",
        451029: "田林县",
        451030: "西林县",
        451031: "隆林各族自治县",
        451081: "靖西市",
        451082: "平果市",
        451102: "八步区",
        451103: "平桂区",
        451121: "昭平县",
        451122: "钟山县",
        451123: "富川瑶族自治县",
        451202: "金城江区",
        451203: "宜州区",
        451221: "南丹县",
        451222: "天峨县",
        451223: "凤山县",
        451224: "东兰县",
        451225: "罗城仫佬族自治县",
        451226: "环江毛南族自治县",
        451227: "巴马瑶族自治县",
        451228: "都安瑶族自治县",
        451229: "大化瑶族自治县",
        451302: "兴宾区",
        451321: "忻城县",
        451322: "象州县",
        451323: "武宣县",
        451324: "金秀瑶族自治县",
        451381: "合山市",
        451402: "江州区",
        451421: "扶绥县",
        451422: "宁明县",
        451423: "龙州县",
        451424: "大新县",
        451425: "天等县",
        451481: "凭祥市",
        460105: "秀英区",
        460106: "龙华区",
        460107: "琼山区",
        460108: "美兰区",
        460202: "海棠区",
        460203: "吉阳区",
        460204: "天涯区",
        460205: "崖州区",
        460321: "西沙区",
        460322: "南沙区",
        460401: "那大镇",
        460402: "和庆镇",
        460403: "南丰镇",
        460404: "大成镇",
        460405: "雅星镇",
        460406: "兰洋镇",
        460407: "光村镇",
        460408: "木棠镇",
        460409: "海头镇",
        460410: "峨蔓镇",
        460411: "王五镇",
        460412: "白马井镇",
        460413: "中和镇",
        460414: "排浦镇",
        460415: "东成镇",
        460416: "新州镇",
        460417: "洋浦经济开发区",
        460418: "华南热作学院",
        469001: "五指山市",
        469002: "琼海市",
        469005: "文昌市",
        469006: "万宁市",
        469007: "东方市",
        469021: "定安县",
        469022: "屯昌县",
        469023: "澄迈县",
        469024: "临高县",
        469025: "白沙黎族自治县",
        469026: "昌江黎族自治县",
        469027: "乐东黎族自治县",
        469028: "陵水黎族自治县",
        469029: "保亭黎族苗族自治县",
        469030: "琼中黎族苗族自治县",
        500101: "万州区",
        500102: "涪陵区",
        500103: "渝中区",
        500104: "大渡口区",
        500105: "江北区",
        500106: "沙坪坝区",
        500107: "九龙坡区",
        500108: "南岸区",
        500109: "北碚区",
        500110: "綦江区",
        500111: "大足区",
        500112: "渝北区",
        500113: "巴南区",
        500114: "黔江区",
        500115: "长寿区",
        500116: "江津区",
        500117: "合川区",
        500118: "永川区",
        500119: "南川区",
        500120: "璧山区",
        500151: "铜梁区",
        500152: "潼南区",
        500153: "荣昌区",
        500154: "开州区",
        500155: "梁平区",
        500156: "武隆区",
        500229: "城口县",
        500230: "丰都县",
        500231: "垫江县",
        500233: "忠县",
        500235: "云阳县",
        500236: "奉节县",
        500237: "巫山县",
        500238: "巫溪县",
        500240: "石柱土家族自治县",
        500241: "秀山土家族苗族自治县",
        500242: "酉阳土家族苗族自治县",
        500243: "彭水苗族土家族自治县",
        510104: "锦江区",
        510105: "青羊区",
        510106: "金牛区",
        510107: "武侯区",
        510108: "成华区",
        510112: "龙泉驿区",
        510113: "青白江区",
        510114: "新都区",
        510115: "温江区",
        510116: "双流区",
        510117: "郫都区",
        510121: "金堂县",
        510129: "大邑县",
        510131: "蒲江县",
        510132: "新津县",
        510181: "都江堰市",
        510182: "彭州市",
        510183: "邛崃市",
        510184: "崇州市",
        510185: "简阳市",
        510191: "高新区",
        510302: "自流井区",
        510303: "贡井区",
        510304: "大安区",
        510311: "沿滩区",
        510321: "荣县",
        510322: "富顺县",
        510402: "东区",
        510403: "西区",
        510411: "仁和区",
        510421: "米易县",
        510422: "盐边县",
        510502: "江阳区",
        510503: "纳溪区",
        510504: "龙马潭区",
        510521: "泸县",
        510522: "合江县",
        510524: "叙永县",
        510525: "古蔺县",
        510603: "旌阳区",
        510604: "罗江区",
        510623: "中江县",
        510681: "广汉市",
        510682: "什邡市",
        510683: "绵竹市",
        510703: "涪城区",
        510704: "游仙区",
        510705: "安州区",
        510722: "三台县",
        510723: "盐亭县",
        510725: "梓潼县",
        510726: "北川羌族自治县",
        510727: "平武县",
        510781: "江油市",
        510791: "高新区",
        510802: "利州区",
        510811: "昭化区",
        510812: "朝天区",
        510821: "旺苍县",
        510822: "青川县",
        510823: "剑阁县",
        510824: "苍溪县",
        510903: "船山区",
        510904: "安居区",
        510921: "蓬溪县",
        510923: "大英县",
        510981: "射洪市",
        511002: "市中区",
        511011: "东兴区",
        511024: "威远县",
        511025: "资中县",
        511083: "隆昌市",
        511102: "市中区",
        511111: "沙湾区",
        511112: "五通桥区",
        511113: "金口河区",
        511123: "犍为县",
        511124: "井研县",
        511126: "夹江县",
        511129: "沐川县",
        511132: "峨边彝族自治县",
        511133: "马边彝族自治县",
        511181: "峨眉山市",
        511302: "顺庆区",
        511303: "高坪区",
        511304: "嘉陵区",
        511321: "南部县",
        511322: "营山县",
        511323: "蓬安县",
        511324: "仪陇县",
        511325: "西充县",
        511381: "阆中市",
        511402: "东坡区",
        511403: "彭山区",
        511421: "仁寿县",
        511423: "洪雅县",
        511424: "丹棱县",
        511425: "青神县",
        511502: "翠屏区",
        511503: "南溪区",
        511504: "叙州区",
        511523: "江安县",
        511524: "长宁县",
        511525: "高县",
        511526: "珙县",
        511527: "筠连县",
        511528: "兴文县",
        511529: "屏山县",
        511602: "广安区",
        511603: "前锋区",
        511621: "岳池县",
        511622: "武胜县",
        511623: "邻水县",
        511681: "华蓥市",
        511702: "通川区",
        511703: "达川区",
        511722: "宣汉县",
        511723: "开江县",
        511724: "大竹县",
        511725: "渠县",
        511781: "万源市",
        511802: "雨城区",
        511803: "名山区",
        511822: "荥经县",
        511823: "汉源县",
        511824: "石棉县",
        511825: "天全县",
        511826: "芦山县",
        511827: "宝兴县",
        511902: "巴州区",
        511903: "恩阳区",
        511921: "通江县",
        511922: "南江县",
        511923: "平昌县",
        511971: "巴中经济开发区",
        512002: "雁江区",
        512021: "安岳县",
        512022: "乐至县",
        513201: "马尔康市",
        513221: "汶川县",
        513222: "理县",
        513223: "茂县",
        513224: "松潘县",
        513225: "九寨沟县",
        513226: "金川县",
        513227: "小金县",
        513228: "黑水县",
        513230: "壤塘县",
        513231: "阿坝县",
        513232: "若尔盖县",
        513233: "红原县",
        513301: "康定市",
        513322: "泸定县",
        513323: "丹巴县",
        513324: "九龙县",
        513325: "雅江县",
        513326: "道孚县",
        513327: "炉霍县",
        513328: "甘孜县",
        513329: "新龙县",
        513330: "德格县",
        513331: "白玉县",
        513332: "石渠县",
        513333: "色达县",
        513334: "理塘县",
        513335: "巴塘县",
        513336: "乡城县",
        513337: "稻城县",
        513338: "得荣县",
        513401: "西昌市",
        513422: "木里藏族自治县",
        513423: "盐源县",
        513424: "德昌县",
        513425: "会理县",
        513426: "会东县",
        513427: "宁南县",
        513428: "普格县",
        513429: "布拖县",
        513430: "金阳县",
        513431: "昭觉县",
        513432: "喜德县",
        513433: "冕宁县",
        513434: "越西县",
        513435: "甘洛县",
        513436: "美姑县",
        513437: "雷波县",
        520102: "南明区",
        520103: "云岩区",
        520111: "花溪区",
        520112: "乌当区",
        520113: "白云区",
        520115: "观山湖区",
        520121: "开阳县",
        520122: "息烽县",
        520123: "修文县",
        520181: "清镇市",
        520201: "钟山区",
        520203: "六枝特区",
        520221: "水城县",
        520281: "盘州市",
        520302: "红花岗区",
        520303: "汇川区",
        520304: "播州区",
        520322: "桐梓县",
        520323: "绥阳县",
        520324: "正安县",
        520325: "道真仡佬族苗族自治县",
        520326: "务川仡佬族苗族自治县",
        520327: "凤冈县",
        520328: "湄潭县",
        520329: "余庆县",
        520330: "习水县",
        520381: "赤水市",
        520382: "仁怀市",
        520402: "西秀区",
        520403: "平坝区",
        520422: "普定县",
        520423: "镇宁布依族苗族自治县",
        520424: "关岭布依族苗族自治县",
        520425: "紫云苗族布依族自治县",
        520502: "七星关区",
        520521: "大方县",
        520522: "黔西县",
        520523: "金沙县",
        520524: "织金县",
        520525: "纳雍县",
        520526: "威宁彝族回族苗族自治县",
        520527: "赫章县",
        520602: "碧江区",
        520603: "万山区",
        520621: "江口县",
        520622: "玉屏侗族自治县",
        520623: "石阡县",
        520624: "思南县",
        520625: "印江土家族苗族自治县",
        520626: "德江县",
        520627: "沿河土家族自治县",
        520628: "松桃苗族自治县",
        522301: "兴义市",
        522302: "兴仁市",
        522323: "普安县",
        522324: "晴隆县",
        522325: "贞丰县",
        522326: "望谟县",
        522327: "册亨县",
        522328: "安龙县",
        522601: "凯里市",
        522622: "黄平县",
        522623: "施秉县",
        522624: "三穗县",
        522625: "镇远县",
        522626: "岑巩县",
        522627: "天柱县",
        522628: "锦屏县",
        522629: "剑河县",
        522630: "台江县",
        522631: "黎平县",
        522632: "榕江县",
        522633: "从江县",
        522634: "雷山县",
        522635: "麻江县",
        522636: "丹寨县",
        522701: "都匀市",
        522702: "福泉市",
        522722: "荔波县",
        522723: "贵定县",
        522725: "瓮安县",
        522726: "独山县",
        522727: "平塘县",
        522728: "罗甸县",
        522729: "长顺县",
        522730: "龙里县",
        522731: "惠水县",
        522732: "三都水族自治县",
        530102: "五华区",
        530103: "盘龙区",
        530111: "官渡区",
        530112: "西山区",
        530113: "东川区",
        530114: "呈贡区",
        530115: "晋宁区",
        530124: "富民县",
        530125: "宜良县",
        530126: "石林彝族自治县",
        530127: "嵩明县",
        530128: "禄劝彝族苗族自治县",
        530129: "寻甸回族彝族自治县",
        530181: "安宁市",
        530302: "麒麟区",
        530303: "沾益区",
        530304: "马龙区",
        530322: "陆良县",
        530323: "师宗县",
        530324: "罗平县",
        530325: "富源县",
        530326: "会泽县",
        530381: "宣威市",
        530402: "红塔区",
        530403: "江川区",
        530423: "通海县",
        530424: "华宁县",
        530425: "易门县",
        530426: "峨山彝族自治县",
        530427: "新平彝族傣族自治县",
        530428: "元江哈尼族彝族傣族自治县",
        530481: "澄江市",
        530502: "隆阳区",
        530521: "施甸县",
        530523: "龙陵县",
        530524: "昌宁县",
        530581: "腾冲市",
        530602: "昭阳区",
        530621: "鲁甸县",
        530622: "巧家县",
        530623: "盐津县",
        530624: "大关县",
        530625: "永善县",
        530626: "绥江县",
        530627: "镇雄县",
        530628: "彝良县",
        530629: "威信县",
        530681: "水富市",
        530702: "古城区",
        530721: "玉龙纳西族自治县",
        530722: "永胜县",
        530723: "华坪县",
        530724: "宁蒗彝族自治县",
        530802: "思茅区",
        530821: "宁洱哈尼族彝族自治县",
        530822: "墨江哈尼族自治县",
        530823: "景东彝族自治县",
        530824: "景谷傣族彝族自治县",
        530825: "镇沅彝族哈尼族拉祜族自治县",
        530826: "江城哈尼族彝族自治县",
        530827: "孟连傣族拉祜族佤族自治县",
        530828: "澜沧拉祜族自治县",
        530829: "西盟佤族自治县",
        530902: "临翔区",
        530921: "凤庆县",
        530922: "云县",
        530923: "永德县",
        530924: "镇康县",
        530925: "双江拉祜族佤族布朗族傣族自治县",
        530926: "耿马傣族佤族自治县",
        530927: "沧源佤族自治县",
        532301: "楚雄市",
        532322: "双柏县",
        532323: "牟定县",
        532324: "南华县",
        532325: "姚安县",
        532326: "大姚县",
        532327: "永仁县",
        532328: "元谋县",
        532329: "武定县",
        532331: "禄丰县",
        532501: "个旧市",
        532502: "开远市",
        532503: "蒙自市",
        532504: "弥勒市",
        532523: "屏边苗族自治县",
        532524: "建水县",
        532525: "石屏县",
        532527: "泸西县",
        532528: "元阳县",
        532529: "红河县",
        532530: "金平苗族瑶族傣族自治县",
        532531: "绿春县",
        532532: "河口瑶族自治县",
        532601: "文山市",
        532622: "砚山县",
        532623: "西畴县",
        532624: "麻栗坡县",
        532625: "马关县",
        532626: "丘北县",
        532627: "广南县",
        532628: "富宁县",
        532801: "景洪市",
        532822: "勐海县",
        532823: "勐腊县",
        532901: "大理市",
        532922: "漾濞彝族自治县",
        532923: "祥云县",
        532924: "宾川县",
        532925: "弥渡县",
        532926: "南涧彝族自治县",
        532927: "巍山彝族回族自治县",
        532928: "永平县",
        532929: "云龙县",
        532930: "洱源县",
        532931: "剑川县",
        532932: "鹤庆县",
        533102: "瑞丽市",
        533103: "芒市",
        533122: "梁河县",
        533123: "盈江县",
        533124: "陇川县",
        533301: "泸水市",
        533323: "福贡县",
        533324: "贡山独龙族怒族自治县",
        533325: "兰坪白族普米族自治县",
        533401: "香格里拉市",
        533422: "德钦县",
        533423: "维西傈僳族自治县",
        540102: "城关区",
        540103: "堆龙德庆区",
        540104: "达孜区",
        540121: "林周县",
        540122: "当雄县",
        540123: "尼木县",
        540124: "曲水县",
        540127: "墨竹工卡县",
        540202: "桑珠孜区",
        540221: "南木林县",
        540222: "江孜县",
        540223: "定日县",
        540224: "萨迦县",
        540225: "拉孜县",
        540226: "昂仁县",
        540227: "谢通门县",
        540228: "白朗县",
        540229: "仁布县",
        540230: "康马县",
        540231: "定结县",
        540232: "仲巴县",
        540233: "亚东县",
        540234: "吉隆县",
        540235: "聂拉木县",
        540236: "萨嘎县",
        540237: "岗巴县",
        540302: "卡若区",
        540321: "江达县",
        540322: "贡觉县",
        540323: "类乌齐县",
        540324: "丁青县",
        540325: "察雅县",
        540326: "八宿县",
        540327: "左贡县",
        540328: "芒康县",
        540329: "洛隆县",
        540330: "边坝县",
        540402: "巴宜区",
        540421: "工布江达县",
        540422: "米林县",
        540423: "墨脱县",
        540424: "波密县",
        540425: "察隅县",
        540426: "朗县",
        540502: "乃东区",
        540521: "扎囊县",
        540522: "贡嘎县",
        540523: "桑日县",
        540524: "琼结县",
        540525: "曲松县",
        540526: "措美县",
        540527: "洛扎县",
        540528: "加查县",
        540529: "隆子县",
        540530: "错那县",
        540531: "浪卡子县",
        540602: "色尼区",
        540621: "嘉黎县",
        540622: "比如县",
        540623: "聂荣县",
        540624: "安多县",
        540625: "申扎县",
        540626: "索县",
        540627: "班戈县",
        540628: "巴青县",
        540629: "尼玛县",
        540630: "双湖县",
        542521: "普兰县",
        542522: "札达县",
        542523: "噶尔县",
        542524: "日土县",
        542525: "革吉县",
        542526: "改则县",
        542527: "措勤县",
        610102: "新城区",
        610103: "碑林区",
        610104: "莲湖区",
        610111: "灞桥区",
        610112: "未央区",
        610113: "雁塔区",
        610114: "阎良区",
        610115: "临潼区",
        610116: "长安区",
        610117: "高陵区",
        610118: "鄠邑区",
        610122: "蓝田县",
        610124: "周至县",
        610202: "王益区",
        610203: "印台区",
        610204: "耀州区",
        610222: "宜君县",
        610302: "渭滨区",
        610303: "金台区",
        610304: "陈仓区",
        610322: "凤翔县",
        610323: "岐山县",
        610324: "扶风县",
        610326: "眉县",
        610327: "陇县",
        610328: "千阳县",
        610329: "麟游县",
        610330: "凤县",
        610331: "太白县",
        610402: "秦都区",
        610403: "杨陵区",
        610404: "渭城区",
        610422: "三原县",
        610423: "泾阳县",
        610424: "乾县",
        610425: "礼泉县",
        610426: "永寿县",
        610428: "长武县",
        610429: "旬邑县",
        610430: "淳化县",
        610431: "武功县",
        610481: "兴平市",
        610482: "彬州市",
        610502: "临渭区",
        610503: "华州区",
        610522: "潼关县",
        610523: "大荔县",
        610524: "合阳县",
        610525: "澄城县",
        610526: "蒲城县",
        610527: "白水县",
        610528: "富平县",
        610581: "韩城市",
        610582: "华阴市",
        610602: "宝塔区",
        610603: "安塞区",
        610621: "延长县",
        610622: "延川县",
        610625: "志丹县",
        610626: "吴起县",
        610627: "甘泉县",
        610628: "富县",
        610629: "洛川县",
        610630: "宜川县",
        610631: "黄龙县",
        610632: "黄陵县",
        610681: "子长市",
        610702: "汉台区",
        610703: "南郑区",
        610722: "城固县",
        610723: "洋县",
        610724: "西乡县",
        610725: "勉县",
        610726: "宁强县",
        610727: "略阳县",
        610728: "镇巴县",
        610729: "留坝县",
        610730: "佛坪县",
        610802: "榆阳区",
        610803: "横山区",
        610822: "府谷县",
        610824: "靖边县",
        610825: "定边县",
        610826: "绥德县",
        610827: "米脂县",
        610828: "佳县",
        610829: "吴堡县",
        610830: "清涧县",
        610831: "子洲县",
        610881: "神木市",
        610902: "汉滨区",
        610921: "汉阴县",
        610922: "石泉县",
        610923: "宁陕县",
        610924: "紫阳县",
        610925: "岚皋县",
        610926: "平利县",
        610927: "镇坪县",
        610928: "旬阳县",
        610929: "白河县",
        611002: "商州区",
        611021: "洛南县",
        611022: "丹凤县",
        611023: "商南县",
        611024: "山阳县",
        611025: "镇安县",
        611026: "柞水县",
        620102: "城关区",
        620103: "七里河区",
        620104: "西固区",
        620105: "安宁区",
        620111: "红古区",
        620121: "永登县",
        620122: "皋兰县",
        620123: "榆中县",
        620171: "兰州新区",
        620201: "市辖区",
        620290: "雄关区",
        620291: "长城区",
        620292: "镜铁区",
        620293: "新城镇",
        620294: "峪泉镇",
        620295: "文殊镇",
        620302: "金川区",
        620321: "永昌县",
        620402: "白银区",
        620403: "平川区",
        620421: "靖远县",
        620422: "会宁县",
        620423: "景泰县",
        620502: "秦州区",
        620503: "麦积区",
        620521: "清水县",
        620522: "秦安县",
        620523: "甘谷县",
        620524: "武山县",
        620525: "张家川回族自治县",
        620602: "凉州区",
        620621: "民勤县",
        620622: "古浪县",
        620623: "天祝藏族自治县",
        620702: "甘州区",
        620721: "肃南裕固族自治县",
        620722: "民乐县",
        620723: "临泽县",
        620724: "高台县",
        620725: "山丹县",
        620802: "崆峒区",
        620821: "泾川县",
        620822: "灵台县",
        620823: "崇信县",
        620825: "庄浪县",
        620826: "静宁县",
        620881: "华亭市",
        620902: "肃州区",
        620921: "金塔县",
        620922: "瓜州县",
        620923: "肃北蒙古族自治县",
        620924: "阿克塞哈萨克族自治县",
        620981: "玉门市",
        620982: "敦煌市",
        621002: "西峰区",
        621021: "庆城县",
        621022: "环县",
        621023: "华池县",
        621024: "合水县",
        621025: "正宁县",
        621026: "宁县",
        621027: "镇原县",
        621102: "安定区",
        621121: "通渭县",
        621122: "陇西县",
        621123: "渭源县",
        621124: "临洮县",
        621125: "漳县",
        621126: "岷县",
        621202: "武都区",
        621221: "成县",
        621222: "文县",
        621223: "宕昌县",
        621224: "康县",
        621225: "西和县",
        621226: "礼县",
        621227: "徽县",
        621228: "两当县",
        622901: "临夏市",
        622921: "临夏县",
        622922: "康乐县",
        622923: "永靖县",
        622924: "广河县",
        622925: "和政县",
        622926: "东乡族自治县",
        622927: "积石山保安族东乡族撒拉族自治县",
        623001: "合作市",
        623021: "临潭县",
        623022: "卓尼县",
        623023: "舟曲县",
        623024: "迭部县",
        623025: "玛曲县",
        623026: "碌曲县",
        623027: "夏河县",
        630102: "城东区",
        630103: "城中区",
        630104: "城西区",
        630105: "城北区",
        630106: "湟中区",
        630121: "大通回族土族自治县",
        630123: "湟源县",
        630202: "乐都区",
        630203: "平安区",
        630222: "民和回族土族自治县",
        630223: "互助土族自治县",
        630224: "化隆回族自治县",
        630225: "循化撒拉族自治县",
        632221: "门源回族自治县",
        632222: "祁连县",
        632223: "海晏县",
        632224: "刚察县",
        632321: "同仁县",
        632322: "尖扎县",
        632323: "泽库县",
        632324: "河南蒙古族自治县",
        632521: "共和县",
        632522: "同德县",
        632523: "贵德县",
        632524: "兴海县",
        632525: "贵南县",
        632621: "玛沁县",
        632622: "班玛县",
        632623: "甘德县",
        632624: "达日县",
        632625: "久治县",
        632626: "玛多县",
        632701: "玉树市",
        632722: "杂多县",
        632723: "称多县",
        632724: "治多县",
        632725: "囊谦县",
        632726: "曲麻莱县",
        632801: "格尔木市",
        632802: "德令哈市",
        632803: "茫崖市",
        632821: "乌兰县",
        632822: "都兰县",
        632823: "天峻县",
        632857: "大柴旦行政委员会",
        640104: "兴庆区",
        640105: "西夏区",
        640106: "金凤区",
        640121: "永宁县",
        640122: "贺兰县",
        640181: "灵武市",
        640202: "大武口区",
        640205: "惠农区",
        640221: "平罗县",
        640302: "利通区",
        640303: "红寺堡区",
        640323: "盐池县",
        640324: "同心县",
        640381: "青铜峡市",
        640402: "原州区",
        640422: "西吉县",
        640423: "隆德县",
        640424: "泾源县",
        640425: "彭阳县",
        640502: "沙坡头区",
        640521: "中宁县",
        640522: "海原县",
        650102: "天山区",
        650103: "沙依巴克区",
        650104: "新市区",
        650105: "水磨沟区",
        650106: "头屯河区",
        650107: "达坂城区",
        650109: "米东区",
        650121: "乌鲁木齐县",
        650202: "独山子区",
        650203: "克拉玛依区",
        650204: "白碱滩区",
        650205: "乌尔禾区",
        650402: "高昌区",
        650421: "鄯善县",
        650422: "托克逊县",
        650502: "伊州区",
        650521: "巴里坤哈萨克自治县",
        650522: "伊吾县",
        652301: "昌吉市",
        652302: "阜康市",
        652323: "呼图壁县",
        652324: "玛纳斯县",
        652325: "奇台县",
        652327: "吉木萨尔县",
        652328: "木垒哈萨克自治县",
        652701: "博乐市",
        652702: "阿拉山口市",
        652722: "精河县",
        652723: "温泉县",
        652801: "库尔勒市",
        652822: "轮台县",
        652823: "尉犁县",
        652824: "若羌县",
        652825: "且末县",
        652826: "焉耆回族自治县",
        652827: "和静县",
        652828: "和硕县",
        652829: "博湖县",
        652901: "阿克苏市",
        652902: "库车市",
        652922: "温宿县",
        652924: "沙雅县",
        652925: "新和县",
        652926: "拜城县",
        652927: "乌什县",
        652928: "阿瓦提县",
        652929: "柯坪县",
        653001: "阿图什市",
        653022: "阿克陶县",
        653023: "阿合奇县",
        653024: "乌恰县",
        653101: "喀什市",
        653121: "疏附县",
        653122: "疏勒县",
        653123: "英吉沙县",
        653124: "泽普县",
        653125: "莎车县",
        653126: "叶城县",
        653127: "麦盖提县",
        653128: "岳普湖县",
        653129: "伽师县",
        653130: "巴楚县",
        653131: "塔什库尔干塔吉克自治县",
        653201: "和田市",
        653221: "和田县",
        653222: "墨玉县",
        653223: "皮山县",
        653224: "洛浦县",
        653225: "策勒县",
        653226: "于田县",
        653227: "民丰县",
        654002: "伊宁市",
        654003: "奎屯市",
        654004: "霍尔果斯市",
        654021: "伊宁县",
        654022: "察布查尔锡伯自治县",
        654023: "霍城县",
        654024: "巩留县",
        654025: "新源县",
        654026: "昭苏县",
        654027: "特克斯县",
        654028: "尼勒克县",
        654201: "塔城市",
        654202: "乌苏市",
        654221: "额敏县",
        654223: "沙湾县",
        654224: "托里县",
        654225: "裕民县",
        654226: "和布克赛尔蒙古自治县",
        654301: "阿勒泰市",
        654321: "布尔津县",
        654322: "富蕴县",
        654323: "福海县",
        654324: "哈巴河县",
        654325: "青河县",
        654326: "吉木乃县",
        659001: "石河子市",
        659002: "阿拉尔市",
        659003: "图木舒克市",
        659004: "五家渠市",
        659005: "北屯市",
        659006: "铁门关市",
        659007: "双河市",
        659008: "可克达拉市",
        659009: "昆玉市",
        659010: "胡杨河市",
        710101: "中正区",
        710102: "大同区",
        710103: "中山区",
        710104: "松山区",
        710105: "大安区",
        710106: "万华区",
        710107: "信义区",
        710108: "士林区",
        710109: "北投区",
        710110: "内湖区",
        710111: "南港区",
        710112: "文山区",
        710199: "其它区",
        710201: "新兴区",
        710202: "前金区",
        710203: "芩雅区",
        710204: "盐埕区",
        710205: "鼓山区",
        710206: "旗津区",
        710207: "前镇区",
        710208: "三民区",
        710209: "左营区",
        710210: "楠梓区",
        710211: "小港区",
        710241: "苓雅区",
        710242: "仁武区",
        710243: "大社区",
        710244: "冈山区",
        710245: "路竹区",
        710246: "阿莲区",
        710247: "田寮区",
        710248: "燕巢区",
        710249: "桥头区",
        710250: "梓官区",
        710251: "弥陀区",
        710252: "永安区",
        710253: "湖内区",
        710254: "凤山区",
        710255: "大寮区",
        710256: "林园区",
        710257: "鸟松区",
        710258: "大树区",
        710259: "旗山区",
        710260: "美浓区",
        710261: "六龟区",
        710262: "内门区",
        710263: "杉林区",
        710264: "甲仙区",
        710265: "桃源区",
        710266: "那玛夏区",
        710267: "茂林区",
        710268: "茄萣区",
        710299: "其它区",
        710301: "中西区",
        710302: "东区",
        710303: "南区",
        710304: "北区",
        710305: "安平区",
        710306: "安南区",
        710339: "永康区",
        710340: "归仁区",
        710341: "新化区",
        710342: "左镇区",
        710343: "玉井区",
        710344: "楠西区",
        710345: "南化区",
        710346: "仁德区",
        710347: "关庙区",
        710348: "龙崎区",
        710349: "官田区",
        710350: "麻豆区",
        710351: "佳里区",
        710352: "西港区",
        710353: "七股区",
        710354: "将军区",
        710355: "学甲区",
        710356: "北门区",
        710357: "新营区",
        710358: "后壁区",
        710359: "白河区",
        710360: "东山区",
        710361: "六甲区",
        710362: "下营区",
        710363: "柳营区",
        710364: "盐水区",
        710365: "善化区",
        710366: "大内区",
        710367: "山上区",
        710368: "新市区",
        710369: "安定区",
        710399: "其它区",
        710401: "中区",
        710402: "东区",
        710403: "南区",
        710404: "西区",
        710405: "北区",
        710406: "北屯区",
        710407: "西屯区",
        710408: "南屯区",
        710431: "太平区",
        710432: "大里区",
        710433: "雾峰区",
        710434: "乌日区",
        710435: "丰原区",
        710436: "后里区",
        710437: "石冈区",
        710438: "东势区",
        710439: "和平区",
        710440: "新社区",
        710441: "潭子区",
        710442: "大雅区",
        710443: "神冈区",
        710444: "大肚区",
        710445: "沙鹿区",
        710446: "龙井区",
        710447: "梧栖区",
        710448: "清水区",
        710449: "大甲区",
        710450: "外埔区",
        710451: "大安区",
        710499: "其它区",
        710507: "金沙镇",
        710508: "金湖镇",
        710509: "金宁乡",
        710510: "金城镇",
        710511: "烈屿乡",
        710512: "乌坵乡",
        710614: "南投市",
        710615: "中寮乡",
        710616: "草屯镇",
        710617: "国姓乡",
        710618: "埔里镇",
        710619: "仁爱乡",
        710620: "名间乡",
        710621: "集集镇",
        710622: "水里乡",
        710623: "鱼池乡",
        710624: "信义乡",
        710625: "竹山镇",
        710626: "鹿谷乡",
        710701: "仁爱区",
        710702: "信义区",
        710703: "中正区",
        710704: "中山区",
        710705: "安乐区",
        710706: "暖暖区",
        710707: "七堵区",
        710799: "其它区",
        710801: "东区",
        710802: "北区",
        710803: "香山区",
        710899: "其它区",
        710901: "东区",
        710902: "西区",
        710999: "其它区",
        711130: "万里区",
        711132: "板桥区",
        711133: "汐止区",
        711134: "深坑区",
        711135: "石碇区",
        711136: "瑞芳区",
        711137: "平溪区",
        711138: "双溪区",
        711139: "贡寮区",
        711140: "新店区",
        711141: "坪林区",
        711142: "乌来区",
        711143: "永和区",
        711144: "中和区",
        711145: "土城区",
        711146: "三峡区",
        711147: "树林区",
        711148: "莺歌区",
        711149: "三重区",
        711150: "新庄区",
        711151: "泰山区",
        711152: "林口区",
        711153: "芦洲区",
        711154: "五股区",
        711155: "八里区",
        711156: "淡水区",
        711157: "三芝区",
        711158: "石门区",
        711287: "宜兰市",
        711288: "头城镇",
        711289: "礁溪乡",
        711290: "壮围乡",
        711291: "员山乡",
        711292: "罗东镇",
        711293: "三星乡",
        711294: "大同乡",
        711295: "五结乡",
        711296: "冬山乡",
        711297: "苏澳镇",
        711298: "南澳乡",
        711299: "钓鱼台",
        711387: "竹北市",
        711388: "湖口乡",
        711389: "新丰乡",
        711390: "新埔镇",
        711391: "关西镇",
        711392: "芎林乡",
        711393: "宝山乡",
        711394: "竹东镇",
        711395: "五峰乡",
        711396: "横山乡",
        711397: "尖石乡",
        711398: "北埔乡",
        711399: "峨眉乡",
        711414: "中坜区",
        711415: "平镇区",
        711417: "杨梅区",
        711418: "新屋区",
        711419: "观音区",
        711420: "桃园区",
        711421: "龟山区",
        711422: "八德区",
        711423: "大溪区",
        711425: "大园区",
        711426: "芦竹区",
        711487: "中坜市",
        711488: "平镇市",
        711489: "龙潭乡",
        711490: "杨梅市",
        711491: "新屋乡",
        711492: "观音乡",
        711493: "桃园市",
        711494: "龟山乡",
        711495: "八德市",
        711496: "大溪镇",
        711497: "复兴乡",
        711498: "大园乡",
        711499: "芦竹乡",
        711520: "头份市",
        711582: "竹南镇",
        711583: "头份镇",
        711584: "三湾乡",
        711585: "南庄乡",
        711586: "狮潭乡",
        711587: "后龙镇",
        711588: "通霄镇",
        711589: "苑里镇",
        711590: "苗栗市",
        711591: "造桥乡",
        711592: "头屋乡",
        711593: "公馆乡",
        711594: "大湖乡",
        711595: "泰安乡",
        711596: "铜锣乡",
        711597: "三义乡",
        711598: "西湖乡",
        711599: "卓兰镇",
        711736: "员林市",
        711774: "彰化市",
        711775: "芬园乡",
        711776: "花坛乡",
        711777: "秀水乡",
        711778: "鹿港镇",
        711779: "福兴乡",
        711780: "线西乡",
        711781: "和美镇",
        711782: "伸港乡",
        711783: "员林镇",
        711784: "社头乡",
        711785: "永靖乡",
        711786: "埔心乡",
        711787: "溪湖镇",
        711788: "大村乡",
        711789: "埔盐乡",
        711790: "田中镇",
        711791: "北斗镇",
        711792: "田尾乡",
        711793: "埤头乡",
        711794: "溪州乡",
        711795: "竹塘乡",
        711796: "二林镇",
        711797: "大城乡",
        711798: "芳苑乡",
        711799: "二水乡",
        711982: "番路乡",
        711983: "梅山乡",
        711984: "竹崎乡",
        711985: "阿里山乡",
        711986: "中埔乡",
        711987: "大埔乡",
        711988: "水上乡",
        711989: "鹿草乡",
        711990: "太保市",
        711991: "朴子市",
        711992: "东石乡",
        711993: "六脚乡",
        711994: "新港乡",
        711995: "民雄乡",
        711996: "大林镇",
        711997: "溪口乡",
        711998: "义竹乡",
        711999: "布袋镇",
        712180: "斗南镇",
        712181: "大埤乡",
        712182: "虎尾镇",
        712183: "土库镇",
        712184: "褒忠乡",
        712185: "东势乡",
        712186: "台西乡",
        712187: "仑背乡",
        712188: "麦寮乡",
        712189: "斗六市",
        712190: "林内乡",
        712191: "古坑乡",
        712192: "莿桐乡",
        712193: "西螺镇",
        712194: "二仑乡",
        712195: "北港镇",
        712196: "水林乡",
        712197: "口湖乡",
        712198: "四湖乡",
        712199: "元长乡",
        712451: "崁顶乡",
        712467: "屏东市",
        712468: "三地门乡",
        712469: "雾台乡",
        712470: "玛家乡",
        712471: "九如乡",
        712472: "里港乡",
        712473: "高树乡",
        712474: "盐埔乡",
        712475: "长治乡",
        712476: "麟洛乡",
        712477: "竹田乡",
        712478: "内埔乡",
        712479: "万丹乡",
        712480: "潮州镇",
        712481: "泰武乡",
        712482: "来义乡",
        712483: "万峦乡",
        712484: "莰顶乡",
        712485: "新埤乡",
        712486: "南州乡",
        712487: "林边乡",
        712488: "东港镇",
        712489: "琉球乡",
        712490: "佳冬乡",
        712491: "新园乡",
        712492: "枋寮乡",
        712493: "枋山乡",
        712494: "春日乡",
        712495: "狮子乡",
        712496: "车城乡",
        712497: "牡丹乡",
        712498: "恒春镇",
        712499: "满州乡",
        712584: "台东市",
        712585: "绿岛乡",
        712586: "兰屿乡",
        712587: "延平乡",
        712588: "卑南乡",
        712589: "鹿野乡",
        712590: "关山镇",
        712591: "海端乡",
        712592: "池上乡",
        712593: "东河乡",
        712594: "成功镇",
        712595: "长滨乡",
        712596: "金峰乡",
        712597: "大武乡",
        712598: "达仁乡",
        712599: "太麻里乡",
        712686: "花莲市",
        712687: "新城乡",
        712688: "太鲁阁",
        712689: "秀林乡",
        712690: "吉安乡",
        712691: "寿丰乡",
        712692: "凤林镇",
        712693: "光复乡",
        712694: "丰滨乡",
        712695: "瑞穗乡",
        712696: "万荣乡",
        712697: "玉里镇",
        712698: "卓溪乡",
        712699: "富里乡",
        712794: "马公市",
        712795: "西屿乡",
        712796: "望安乡",
        712797: "七美乡",
        712798: "白沙乡",
        712799: "湖西乡",
        712896: "南竿乡",
        712897: "北竿乡",
        712898: "东引乡",
        712899: "莒光乡",
        810101: "中西区",
        810102: "湾仔区",
        810103: "东区",
        810104: "南区",
        810201: "九龙城区",
        810202: "油尖旺区",
        810203: "深水埗区",
        810204: "黄大仙区",
        810205: "观塘区",
        810301: "北区",
        810302: "大埔区",
        810303: "沙田区",
        810304: "西贡区",
        810305: "元朗区",
        810306: "屯门区",
        810307: "荃湾区",
        810308: "葵青区",
        810309: "离岛区",
        820102: "花地玛堂区",
        820103: "花王堂区",
        820104: "望德堂区",
        820105: "大堂区",
        820106: "风顺堂区",
        820202: "嘉模堂区",
        820203: "路氹填海区",
        820204: "圣方济各堂区"
    }
};
const Fb = {
        __name: "addressEdit", setup(e) {
            let t = L(), n = L();
            const o = On(), s = async u => {
                let {data: {addressDetail: d}} = await jv(u);
                n.value = {
                    name: d.name,
                    province: d.province,
                    city: d.city,
                    county: d.county,
                    addressDetail: d.addressDetail,
                    isDefault: d.isDefault === "true",
                    tel: d.tel
                }
            };
            (() => {
                console.log(On()), t.value = On().query.type, t.value === "update" && s(On().query.addressDetailId)
            })();
            const l = async u => {
                if (u.customerId = Oe().userInfo.userId, t.value === "add") {
                    let {code: d} = await Mv(u);
                    d === 200 && Ho("添加成功")
                } else if (t.value === "update") {
                    u.addressDetailId = o.query.addressDetailId, console.log(u);
                    let {code: d} = await Hv(u);
                    if (u.isDefault) {
                        let f = await wd(u.addressDetailId, u.customerId);
                        d === 200 && f.code === 200 && Ho("修改成功")
                    } else d === 200 && res.code === 200 && Ho("修改成功")
                }
                xe.go(-1)
            }, i = L([]), a = u => {
                u ? i.value = [{
                    name: "黄龙万科中心",
                    address: "杭州市西湖区"
                }] : i.value = []
            }, c = () => {
                ri({title: "是否删除该地址"}).then(async () => {
                    await zv(o.query.addressDetailId), xe.go(-1)
                }).catch(() => {
                })
            };
            return (u, d) => {
                const f = Mt, m = Mh;
                return Q(), ye("div", null, [h(f, {
                    title: V(t) === "add" ? "新建收货地址" : "修改收货地址",
                    "left-arrow": "",
                    "right-text": V(t) === "add" ? "" : "删除",
                    onClickRight: c,
                    onClickLeft: d[0] || (d[0] = p => V(xe).go(-1)),
                    fixed: "",
                    placeholder: ""
                }, null, 8, ["title", "right-text"]), R("main", null, [h(m, {
                    "area-list": V(Nb),
                    "address-info": V(n),
                    "show-set-default": "",
                    "show-search-result": "",
                    "show-area": "",
                    "search-result": i.value,
                    "area-columns-placeholder": ["请选择", "请选择", "请选择"],
                    onSave: l,
                    onChangeDetail: a
                }, null, 8, ["area-list", "address-info", "search-result"])])])
            }
        }
    }, Vb = at(Fb, [["__scopeId", "data-v-603a2ba0"]]), Mb = {
        __name: "addressList", setup(e) {
            const t = L("1");
            let n = Me([]);
            (async () => {
                var a;
                const {data: {shoppAddressList: i}} = await Vv(Oe().userInfo.userId);
                if ((i == null ? void 0 : i.length) > 0 && ((a = i[0].shoppingAddressDetails) == null ? void 0 : a.length) > 0) for (let c = 0; c < i[0].shoppingAddressDetails.length; c++) n.push({
                    id: i[0].shoppingAddressDetails[c].addressDetailId,
                    name: i[0].shoppingAddressDetails[c].name,
                    tel: i[0].shoppingAddressDetails[c].tel,
                    address: i[0].shoppingAddressDetails[c].province !== i[0].shoppingAddressDetails[c].city ? i[0].shoppingAddressDetails[c].province + i[0].shoppingAddressDetails[c].city + i[0].shoppingAddressDetails[c].county + i[0].shoppingAddressDetails[c].addressDetail : i[0].shoppingAddressDetails[c].city + i[0].shoppingAddressDetails[c].county + i[0].shoppingAddressDetails[c].addressDetail,
                    isDefault: i[0].shoppingAddressDetails[c].isDefault === "true" ? i[0].shoppingAddressDetails[c].isDefault : null
                })
            })();
            const s = () => {
                xe.push({name: "addressEdit", query: {type: "add"}})
            }, r = (i, a) => {
                console.log(i), xe.push({
                    name: "addressEdit",
                    query: {type: "update", addressDetailId: i.id}
                })
            }, l = async (i, a) => {
                await wd(i.id, Oe().userInfo.userId), await xe.push({name: "pay"})
            };
            return (i, a) => {
                const c = Mt, u = m4;
                return Q(), ye("div", null, [h(c, {
                    title: V(n).length > 0 ? "收货地址" : "新建收货地址",
                    "left-arrow": "",
                    onClickLeft: a[0] || (a[0] = d => V(xe).go(-1)),
                    fixed: "",
                    placeholder: ""
                }, null, 8, ["title"]), R("main", null, [h(u, {
                    modelValue: t.value,
                    "onUpdate:modelValue": a[1] || (a[1] = d => t.value = d),
                    list: V(n),
                    "default-tag-text": "默认",
                    onAdd: s,
                    onSelect: l,
                    onEdit: r
                }, null, 8, ["modelValue", "list"])])])
            }
        }
    }, jb = at(Mb, [["__scopeId", "data-v-90549ebb"]]), Ub = {
        style: {
            "font-weight": "bolder",
            "font-size": "15px",
            color: "#252527"
        }
    }, Hb = {
        style: {
            "font-weight": "bolder",
            "font-size": "15px",
            color: "#252527"
        }
    }, zb = {
        __name: "OrderComponent", props: ["content"], setup(e) {
            return (t, n) => {
                const o = Qn, s = on, r = us, l = ii, i = li, a = Gt;
                return Q(), ye("main", null, [h(a, {gutter: [15, 15]}, {
                    default: D(() => [h(s, {span: "6"}, {
                        default: D(() => [h(o, {src: e.content.products.productImage}, null, 8, ["src"])]),
                        _: 1
                    }), h(s, {span: "14"}, {
                        default: D(() => [h(r, {
                            rows: "3",
                            content: e.content.products.name
                        }, null, 8, ["content"])]), _: 1
                    }), h(s, {span: "4"}, {
                        default: D(() => [h(i, {border: !1}, {
                            default: D(() => [h(l, {class: "price"}, {
                                default: D(() => [R("span", Ub, " ￥" + Ie(e.content.products.discountPrice), 1)]),
                                _: 1
                            }), h(l, null, {
                                default: D(() => [ke("x" + Ie(e.content.num), 1)]),
                                _: 1
                            })]), _: 1
                        })]), _: 1
                    })]), _: 1
                }), h(a, {class: "pay"}, {
                    default: D(() => [R("span", Hb, " 实付款￥" + Ie(e.content.itemTotalPrice), 1)]),
                    _: 1
                })])
            }
        }
    }, qb = at(zb, [["__scopeId", "data-v-18cea7d1"]]), Kb = {class: "order"},
    Wb = {
        __name: "OrderList", setup(e) {
            const t = L(!1), n = L(!1);
            let o = Me([]), s = L(1);
            return (async () => {
                let {
                    data: {
                        orderDetailList: {
                            list: l,
                            isLastPage: i
                        }
                    }
                } = await Kv(Oe().userInfo.userId, s.value);
                for (let a = 0; a < l.length; a++) o.push(l[a]);
                i ? n.value = !0 : s.value++
            })(), (l, i) => {
                const a = Mt, c = Xn, u = ai;
                return Q(), ye("div", Kb, [h(a, {
                    title: "我的订单",
                    "left-arrow": "",
                    onClickLeft: i[0] || (i[0] = d => V(xe).go(-1))
                }), R("main", null, [h(u, {
                    loading: t.value,
                    "onUpdate:loading": i[1] || (i[1] = d => t.value = d),
                    finished: n.value,
                    "finished-text": "没有更多了",
                    onLoad: V(o)
                }, {
                    default: D(() => [(Q(!0), ye(Fe, null, kt(V(o), (d, f) => (Q(), He(c, {key: d}, {
                        default: D(() => [h(qb, {content: d}, null, 8, ["content"])]),
                        _: 2
                    }, 1024))), 128))]), _: 1
                }, 8, ["loading", "finished", "onLoad"])])])
            }
        }
    }, Gb = at(Wb, [["__scopeId", "data-v-97859f84"]]), xe = ep({
        history: Ag(),
        routes: [{path: "/login", name: "login", component: Fv}, {
            path: "/",
            component: zm,
            redirect: "/home",
            children: [{
                path: "home",
                component: Db,
                name: "home"
            }, {path: "category", component: I_, name: "category"}, {
                path: "cart",
                component: q_,
                name: "cart"
            }, {path: "user", component: Eb, name: "user"}]
        }, {path: "/search", name: "search", component: Xm}, {
            path: "/searchList",
            name: "SearchList",
            component: N5
        }, {
            path: "/proDetail/:id",
            name: "ProDetail",
            component: Av
        }, {path: "/pay", name: "pay", component: __}, {
            path: "/myOrder",
            name: "myOrder",
            component: w_
        }, {
            path: "/shoppingAddress/edit",
            name: "addressEdit",
            component: Vb,
            beforeEnter: (e, t) => {
                if (!Oe().userInfo.token) return xe.push({name: "login"}), !1
            }
        }, {
            path: "/shoppingAddress/list",
            name: "addressList",
            component: jb,
            beforeEnter: (e, t) => {
                if (!Oe().userInfo.token) return xe.push({name: "login"}), !1
            }
        }, {
            path: "/order/list",
            name: "orderList",
            component: Gb,
            beforeEnter: (e, t) => {
                if (!Oe().userInfo.token) return xe.push({name: "login"}), !1
            }
        }]
    });
let $n = "/";

function Jb(e) {
    $n = e
}

xe.beforeResolve((e, t) => {
    t.name === "ProDetail" && e.name === "login" && ($n = t.path), t.name === "ProDetail" && e.name === "cart" && ($n = t.path), console.log($n), e.name === "ProDetail" && ($n = "/")
});

function Yb(e) {
    return typeof e == "object" && e !== null
}

function pc(e, t) {
    return e = Yb(e) ? e : Object.create(null), new Proxy(e, {
        get(n, o, s) {
            return o === "key" ? Reflect.get(n, o, s) : Reflect.get(n, o, s) || Reflect.get(t, o, s)
        }
    })
}

function Xb(e, t) {
    return t.reduce((n, o) => n == null ? void 0 : n[o], e)
}

function Qb(e, t, n) {
    return t.slice(0, -1).reduce((o, s) => /^(__proto__)$/.test(s) ? {} : o[s] = o[s] || {}, e)[t[t.length - 1]] = n, e
}

function Zb(e, t) {
    return t.reduce((n, o) => {
        const s = o.split(".");
        return Qb(n, s, Xb(e, s))
    }, {})
}

function ey(e, t) {
    return n => {
        var o;
        try {
            const {
                storage: s = localStorage,
                beforeRestore: r = void 0,
                afterRestore: l = void 0,
                serializer: i = {
                    serialize: JSON.stringify,
                    deserialize: JSON.parse
                },
                key: a = t.$id,
                paths: c = null,
                debug: u = !1
            } = n;
            return {
                storage: s,
                beforeRestore: r,
                afterRestore: l,
                serializer: i,
                key: ((o = e.key) != null ? o : d => d)(typeof a == "string" ? a : a(t.$id)),
                paths: c,
                debug: u
            }
        } catch (s) {
            return n.debug && console.error("[pinia-plugin-persistedstate]", s), null
        }
    }
}

function vc(e, {storage: t, serializer: n, key: o, debug: s}) {
    try {
        const r = t == null ? void 0 : t.getItem(o);
        r && e.$patch(n == null ? void 0 : n.deserialize(r))
    } catch (r) {
        s && console.error("[pinia-plugin-persistedstate]", r)
    }
}

function _c(e, {storage: t, serializer: n, key: o, paths: s, debug: r}) {
    try {
        const l = Array.isArray(s) ? Zb(e, s) : e;
        t.setItem(o, n.serialize(l))
    } catch (l) {
        r && console.error("[pinia-plugin-persistedstate]", l)
    }
}

function ty(e = {}) {
    return t => {
        const {auto: n = !1} = e, {
            options: {persist: o = n},
            store: s,
            pinia: r
        } = t;
        if (!o) return;
        if (!(s.$id in r.state.value)) {
            const i = r._s.get(s.$id.replace("__hot:", ""));
            i && Promise.resolve().then(() => i.$persist());
            return
        }
        const l = (Array.isArray(o) ? o.map(i => pc(i, e)) : [pc(o, e)]).map(ey(e, s)).filter(Boolean);
        s.$persist = () => {
            l.forEach(i => {
                _c(s.$state, i)
            })
        }, s.$hydrate = ({runHooks: i = !0} = {}) => {
            l.forEach(a => {
                const {beforeRestore: c, afterRestore: u} = a;
                i && (c == null || c(t)), vc(s, a), i && (u == null || u(t))
            })
        }, l.forEach(i => {
            const {beforeRestore: a, afterRestore: c} = i;
            a == null || a(t), vc(s, i), c == null || c(t), s.$subscribe((u, d) => {
                _c(d, i)
            }, {detached: !0})
        })
    }
}

var ny = ty();
const _i = Iu(Q1);
_i.use(Fm().use(ny));
_i.use(xe);
_i.mount("#app");
