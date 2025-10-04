var Dh = Object.defineProperty;
var Ih = (e, t, s) => t in e ? Dh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var pt = (e, t, s) => Ih(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const kt = Object.freeze({}), wn = Object.freeze([]), Qt = () => {
}, cu = () => !1, ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), wo = (e) => e.startsWith("onUpdate:"), Lt = Object.assign, da = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ph = Object.prototype.hasOwnProperty, mt = (e, t) => Ph.call(e, t), Q = Array.isArray, Ks = (e) => Oi(e) === "[object Map]", Pn = (e) => Oi(e) === "[object Set]", ll = (e) => Oi(e) === "[object Date]", it = (e) => typeof e == "function", Et = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", ha = (e) => (xt(e) || it(e)) && it(e.then) && it(e.catch), uu = Object.prototype.toString, Oi = (e) => uu.call(e), pa = (e) => Oi(e).slice(8, -1), Ko = (e) => Oi(e) === "[object Object]", ga = (e) => Et(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xn = /* @__PURE__ */ as(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Eh = /* @__PURE__ */ as(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Go = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ah = /-\w/g, Ut = Go(
  (e) => e.replace(Ah, (t) => t.slice(1).toUpperCase())
), Rh = /\B([A-Z])/g, he = Go(
  (e) => e.replace(Rh, "-$1").toLowerCase()
), en = Go((e) => e.charAt(0).toUpperCase() + e.slice(1)), Vs = Go(
  (e) => e ? `on${en(e)}` : ""
), ks = (e, t) => !Object.is(e, t), yn = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, So = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ko = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, cl = (e) => {
  const t = Et(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ul;
const Mi = () => ul || (ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ms(e) {
  if (Q(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = Et(n) ? jh(n) : ms(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Et(e) || xt(e))
    return e;
}
const $h = /;(?![^(]*\))/g, Lh = /:([^]+)/, Fh = /\/\*[^]*?\*\//g;
function jh(e) {
  const t = {};
  return e.replace(Fh, "").split($h).forEach((s) => {
    if (s) {
      const n = s.split(Lh);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function is(e) {
  let t = "";
  if (Et(e))
    t = e;
  else if (Q(e))
    for (let s = 0; s < e.length; s++) {
      const n = is(e[s]);
      n && (t += n + " ");
    }
  else if (xt(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Vh = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Nh = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Hh = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", zh = /* @__PURE__ */ as(Vh), Bh = /* @__PURE__ */ as(Nh), Uh = /* @__PURE__ */ as(Hh), Wh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kh = /* @__PURE__ */ as(Wh);
function fu(e) {
  return !!e || e === "";
}
function Gh(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Ci(e[n], t[n]);
  return s;
}
function Ci(e, t) {
  if (e === t) return !0;
  let s = ll(e), n = ll(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ke(e), n = Ke(t), s || n)
    return e === t;
  if (s = Q(e), n = Q(t), s || n)
    return s && n ? Gh(e, t) : !1;
  if (s = xt(e), n = xt(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !Ci(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ma(e, t) {
  return e.findIndex((s) => Ci(s, t));
}
const du = (e) => !!(e && e.__v_isRef === !0), Mt = (e) => Et(e) ? e : e == null ? "" : Q(e) || xt(e) && (e.toString === uu || !it(e.toString)) ? du(e) ? Mt(e.value) : JSON.stringify(e, hu, 2) : String(e), hu = (e, t) => du(t) ? hu(e, t.value) : Ks(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[pr(n, o) + " =>"] = i, s),
    {}
  )
} : Pn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => pr(s))
} : Ke(t) ? pr(t) : xt(t) && !Q(t) && !Ko(t) ? String(t) : t, pr = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
var Yh = { NODE_ENV: '"production"', npm_package_version: '"1.0.0"' };
function ve(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Jt;
class pu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !t && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = Jt;
      try {
        return Jt = this, t();
      } finally {
        Jt = s;
      }
    } else
      ve("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Jt, Jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Jt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function gu(e) {
  return new pu(e);
}
function mu() {
  return Jt;
}
function qh(e, t = !1) {
  Jt ? Jt.cleanups.push(e) : t || ve(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let St;
const gr = /* @__PURE__ */ new WeakSet();
class _u {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, gr.has(this) && (gr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fl(this), vu(this);
    const t = St, s = Ee;
    St = this, Ee = !0;
    try {
      return this.fn();
    } finally {
      St !== this && ve(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), xu(this), St = t, Ee = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ya(t);
      this.deps = this.depsTail = void 0, fl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? gr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lr(this) && this.run();
  }
  get dirty() {
    return Lr(this);
  }
}
let bu = 0, Jn, Zn;
function yu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zn, Zn = e;
    return;
  }
  e.next = Jn, Jn = e;
}
function _a() {
  bu++;
}
function ba() {
  if (--bu > 0)
    return;
  if (Zn) {
    let t = Zn;
    for (Zn = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Jn; ) {
    let t = Jn;
    for (Jn = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function vu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xu(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), ya(n), Xh(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Lr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wu(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fi) || (e.globalVersion = fi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = St, n = Ee;
  St = e, Ee = !0;
  try {
    vu(e);
    const i = e.fn(e._value);
    (t.version === 0 || ks(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    St = s, Ee = n, xu(e), e.flags &= -3;
  }
}
function ya(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subsHead === e && (s.subsHead = i), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      ya(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Xh(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ee = !0;
const Su = [];
function Ae() {
  Su.push(Ee), Ee = !1;
}
function Re() {
  const e = Su.pop();
  Ee = e === void 0 ? !0 : e;
}
function fl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = St;
    St = void 0;
    try {
      t();
    } finally {
      St = s;
    }
  }
}
let fi = 0;
class Jh {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class va {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, this.subsHead = void 0;
  }
  track(t) {
    if (!St || !Ee || St === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== St)
      s = this.activeLink = new Jh(St, this), St.deps ? (s.prevDep = St.depsTail, St.depsTail.nextDep = s, St.depsTail = s) : St.deps = St.depsTail = s, ku(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = St.depsTail, s.nextDep = void 0, St.depsTail.nextDep = s, St.depsTail = s, St.deps === s && (St.deps = n);
    }
    return St.onTrack && St.onTrack(
      Lt(
        {
          effect: St
        },
        t
      )
    ), s;
  }
  trigger(t) {
    this.version++, fi++, this.notify(t);
  }
  notify(t) {
    _a();
    try {
      if (Yh.NODE_ENV !== "production")
        for (let s = this.subsHead; s; s = s.nextSub)
          s.sub.onTrigger && !(s.sub.flags & 8) && s.sub.onTrigger(
            Lt(
              {
                effect: s.sub
              },
              t
            )
          );
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ba();
    }
  }
}
function ku(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ku(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Oo = /* @__PURE__ */ new WeakMap(), Gs = Symbol(
  "Object iterate"
), Fr = Symbol(
  "Map keys iterate"
), di = Symbol(
  "Array iterate"
);
function zt(e, t, s) {
  if (Ee && St) {
    let n = Oo.get(e);
    n || Oo.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new va()), i.map = n, i.key = s), i.track({
      target: e,
      type: t,
      key: s
    });
  }
}
function Ve(e, t, s, n, i, o) {
  const r = Oo.get(e);
  if (!r) {
    fi++;
    return;
  }
  const a = (l) => {
    l && l.trigger({
      target: e,
      type: t,
      key: s,
      newValue: n,
      oldValue: i,
      oldTarget: o
    });
  };
  if (_a(), t === "clear")
    r.forEach(a);
  else {
    const l = Q(e), c = l && ga(s);
    if (l && s === "length") {
      const u = Number(n);
      r.forEach((f, d) => {
        (d === "length" || d === di || !Ke(d) && d >= u) && a(f);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && a(r.get(s)), c && a(r.get(di)), t) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(Gs)), Ks(e) && a(r.get(Fr)));
          break;
        case "delete":
          l || (a(r.get(Gs)), Ks(e) && a(r.get(Fr)));
          break;
        case "set":
          Ks(e) && a(r.get(Gs));
          break;
      }
  }
  ba();
}
function Zh(e, t) {
  const s = Oo.get(e);
  return s && s.get(t);
}
function dn(e) {
  const t = ot(e);
  return t === e ? t : (zt(t, "iterate", di), ae(e) ? t : t.map(Yt));
}
function Yo(e) {
  return zt(e = ot(e), "iterate", di), e;
}
const Qh = {
  __proto__: null,
  [Symbol.iterator]() {
    return mr(this, Symbol.iterator, Yt);
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => Q(t) ? dn(t) : t)
    );
  },
  entries() {
    return mr(this, "entries", (e) => (e[1] = Yt(e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(this, "filter", e, t, (s) => s.map(Yt), arguments);
  },
  find(e, t) {
    return Je(this, "find", e, t, Yt, arguments);
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(this, "findLast", e, t, Yt, arguments);
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _r(this, "includes", e);
  },
  indexOf(...e) {
    return _r(this, "indexOf", e);
  },
  join(e) {
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _r(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ln(this, "pop");
  },
  push(...e) {
    return Ln(this, "push", e);
  },
  reduce(e, ...t) {
    return dl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dl(this, "reduceRight", e, t);
  },
  shift() {
    return Ln(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ln(this, "splice", e);
  },
  toReversed() {
    return dn(this).toReversed();
  },
  toSorted(e) {
    return dn(this).toSorted(e);
  },
  toSpliced(...e) {
    return dn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ln(this, "unshift", e);
  },
  values() {
    return mr(this, "values", Yt);
  }
};
function mr(e, t, s) {
  const n = Yo(e), i = n[t]();
  return n !== e && !ae(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = s(o.value)), o;
  }), i;
}
const tp = Array.prototype;
function Je(e, t, s, n, i, o) {
  const r = Yo(e), a = r !== e && !ae(e), l = r[t];
  if (l !== tp[t]) {
    const f = l.apply(e, o);
    return a ? Yt(f) : f;
  }
  let c = s;
  r !== e && (a ? c = function(f, d) {
    return s.call(this, Yt(f), d, e);
  } : s.length > 2 && (c = function(f, d) {
    return s.call(this, f, d, e);
  }));
  const u = l.call(r, c, n);
  return a && i ? i(u) : u;
}
function dl(e, t, s, n) {
  const i = Yo(e);
  let o = s;
  return i !== e && (ae(e) ? s.length > 3 && (o = function(r, a, l) {
    return s.call(this, r, a, l, e);
  }) : o = function(r, a, l) {
    return s.call(this, r, Yt(a), l, e);
  }), i[t](o, ...n);
}
function _r(e, t, s) {
  const n = ot(e);
  zt(n, "iterate", di);
  const i = n[t](...s);
  return (i === -1 || i === !1) && sn(s[0]) ? (s[0] = ot(s[0]), n[t](...s)) : i;
}
function Ln(e, t, s = []) {
  Ae(), _a();
  const n = ot(e)[t].apply(e, s);
  return ba(), Re(), n;
}
const ep = /* @__PURE__ */ as("__proto__,__v_isRef,__isVue"), Ou = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function sp(e) {
  Ke(e) || (e = String(e));
  const t = ot(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class Mu {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (i ? o ? Eu : Pu : o ? Iu : Du).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = Q(t);
    if (!i) {
      let l;
      if (r && (l = Qh[s]))
        return l;
      if (s === "hasOwnProperty")
        return sp;
    }
    const a = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Dt(t) ? t : n
    );
    return (Ke(s) ? Ou.has(s) : ep(s)) || (i || zt(t, "get", s), o) ? a : Dt(a) ? r && ga(s) ? a : a.value : xt(a) ? i ? Au(a) : Ti(a) : a;
  }
}
class Cu extends Mu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    if (!this._isShallow) {
      const l = Ge(o);
      if (!ae(n) && !Ge(n) && (o = ot(o), n = ot(n)), !Q(t) && Dt(o) && !Dt(n))
        return l ? (ve(
          `Set operation on key "${String(s)}" failed: target is readonly.`,
          t[s]
        ), !0) : (o.value = n, !0);
    }
    const r = Q(t) && ga(s) ? Number(s) < t.length : mt(t, s), a = Reflect.set(
      t,
      s,
      n,
      Dt(t) ? t : i
    );
    return t === ot(i) && (r ? ks(n, o) && Ve(t, "set", s, n, o) : Ve(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = mt(t, s), i = t[s], o = Reflect.deleteProperty(t, s);
    return o && n && Ve(t, "delete", s, void 0, i), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ke(s) || !Ou.has(s)) && zt(t, "has", s), n;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Q(t) ? "length" : Gs
    ), Reflect.ownKeys(t);
  }
}
class Tu extends Mu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return ve(
      `Set operation on key "${String(s)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, s) {
    return ve(
      `Delete operation on key "${String(s)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const np = /* @__PURE__ */ new Cu(), ip = /* @__PURE__ */ new Tu(), op = /* @__PURE__ */ new Cu(!0), rp = /* @__PURE__ */ new Tu(!0), jr = (e) => e, zi = (e) => Reflect.getPrototypeOf(e);
function ap(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = ot(i), r = Ks(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = i[e](...n), u = s ? jr : t ? Mo : Yt;
    return !t && zt(
      o,
      "iterate",
      l ? Fr : Gs
    ), {
      // iterator protocol
      next() {
        const { value: f, done: d } = c.next();
        return d ? { value: f, done: d } : {
          value: a ? [u(f[0]), u(f[1])] : u(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Bi(e) {
  return function(...t) {
    {
      const s = t[0] ? `on key "${t[0]}" ` : "";
      ve(
        `${en(e)} operation ${s}failed: target is readonly.`,
        ot(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function lp(e, t) {
  const s = {
    get(i) {
      const o = this.__v_raw, r = ot(o), a = ot(i);
      e || (ks(i, a) && zt(r, "get", i), zt(r, "get", a));
      const { has: l } = zi(r), c = t ? jr : e ? Mo : Yt;
      if (l.call(r, i))
        return c(o.get(i));
      if (l.call(r, a))
        return c(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && zt(ot(i), "iterate", Gs), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = ot(o), a = ot(i);
      return e || (ks(i, a) && zt(r, "has", i), zt(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = ot(a), c = t ? jr : e ? Mo : Yt;
      return !e && zt(l, "iterate", Gs), a.forEach((u, f) => i.call(o, c(u), c(f), r));
    }
  };
  return Lt(
    s,
    e ? {
      add: Bi("add"),
      set: Bi("set"),
      delete: Bi("delete"),
      clear: Bi("clear")
    } : {
      add(i) {
        !t && !ae(i) && !Ge(i) && (i = ot(i));
        const o = ot(this);
        return zi(o).has.call(o, i) || (o.add(i), Ve(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !ae(o) && !Ge(o) && (o = ot(o));
        const r = ot(this), { has: a, get: l } = zi(r);
        let c = a.call(r, i);
        c ? hl(r, a, i) : (i = ot(i), c = a.call(r, i));
        const u = l.call(r, i);
        return r.set(i, o), c ? ks(o, u) && Ve(r, "set", i, o, u) : Ve(r, "add", i, o), this;
      },
      delete(i) {
        const o = ot(this), { has: r, get: a } = zi(o);
        let l = r.call(o, i);
        l ? hl(o, r, i) : (i = ot(i), l = r.call(o, i));
        const c = a ? a.call(o, i) : void 0, u = o.delete(i);
        return l && Ve(o, "delete", i, void 0, c), u;
      },
      clear() {
        const i = ot(this), o = i.size !== 0, r = Ks(i) ? new Map(i) : new Set(i), a = i.clear();
        return o && Ve(
          i,
          "clear",
          void 0,
          void 0,
          r
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = ap(i, e, t);
  }), s;
}
function qo(e, t) {
  const s = lp(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    mt(s, i) && i in n ? s : n,
    i,
    o
  );
}
const cp = {
  get: /* @__PURE__ */ qo(!1, !1)
}, up = {
  get: /* @__PURE__ */ qo(!1, !0)
}, fp = {
  get: /* @__PURE__ */ qo(!0, !1)
}, dp = {
  get: /* @__PURE__ */ qo(!0, !0)
};
function hl(e, t, s) {
  const n = ot(s);
  if (n !== s && t.call(e, n)) {
    const i = pa(e);
    ve(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Du = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Pu = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap();
function hp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function pp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hp(pa(e));
}
function Ti(e) {
  return Ge(e) ? e : Xo(
    e,
    !1,
    np,
    cp,
    Du
  );
}
function gp(e) {
  return Xo(
    e,
    !1,
    op,
    up,
    Iu
  );
}
function Au(e) {
  return Xo(
    e,
    !0,
    ip,
    fp,
    Pu
  );
}
function He(e) {
  return Xo(
    e,
    !0,
    rp,
    dp,
    Eu
  );
}
function Xo(e, t, s, n, i) {
  if (!xt(e))
    return ve(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = pp(e);
  if (o === 0)
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const a = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, a), a;
}
function Ue(e) {
  return Ge(e) ? Ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function sn(e) {
  return e ? !!e.__v_raw : !1;
}
function ot(e) {
  const t = e && e.__v_raw;
  return t ? ot(t) : e;
}
function bs(e) {
  return !mt(e, "__v_skip") && Object.isExtensible(e) && So(e, "__v_skip", !0), e;
}
const Yt = (e) => xt(e) ? Ti(e) : e, Mo = (e) => xt(e) ? Au(e) : e;
function Dt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function gt(e) {
  return $u(e, !1);
}
function Ru(e) {
  return $u(e, !0);
}
function $u(e, t) {
  return Dt(e) ? e : new mp(e, t);
}
class mp {
  constructor(t, s) {
    this.dep = new va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : ot(t), this._value = s ? t : Yt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || ae(t) || Ge(t);
    t = n ? t : ot(t), ks(t, s) && (this._rawValue = t, this._value = n ? t : Yt(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: s
    }));
  }
}
function Ct(e) {
  return Dt(e) ? e.value : e;
}
const _p = {
  get: (e, t, s) => t === "__v_raw" ? e : Ct(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return Dt(i) && !Dt(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Lu(e) {
  return Ue(e) ? e : new Proxy(e, _p);
}
function pl(e) {
  sn(e) || ve("toRefs() expects a reactive object but received a plain one.");
  const t = Q(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Fu(e, s);
  return t;
}
class bp {
  constructor(t, s, n) {
    this._object = t, this._key = s, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Zh(ot(this._object), this._key);
  }
}
class yp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function br(e, t, s) {
  return Dt(e) ? e : it(e) ? new yp(e) : xt(e) && arguments.length > 1 ? Fu(e, t, s) : gt(e);
}
function Fu(e, t, s) {
  const n = e[t];
  return Dt(n) ? n : new bp(e, t, s);
}
class vp {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    St !== this)
      return yu(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return wu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ve("Write operation failed: computed value is readonly");
  }
}
function xp(e, t, s = !1) {
  let n, i;
  return it(e) ? n = e : (n = e.get, i = e.set), new vp(n, i, s);
}
const Ui = {}, Co = /* @__PURE__ */ new WeakMap();
let Ns;
function wp(e, t = !1, s = Ns) {
  if (s) {
    let n = Co.get(s);
    n || Co.set(s, n = []), n.push(e);
  } else t || ve(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Sp(e, t, s = kt) {
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = s, c = (M) => {
    (s.onWarn || ve)(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (M) => i ? M : ae(M) || i === !1 || i === 0 ? ns(M, 1) : ns(M);
  let f, d, h, _, m = !1, y = !1;
  if (Dt(e) ? (d = () => e.value, m = ae(e)) : Ue(e) ? (d = () => u(e), m = !0) : Q(e) ? (y = !0, m = e.some((M) => Ue(M) || ae(M)), d = () => e.map((M) => {
    if (Dt(M))
      return M.value;
    if (Ue(M))
      return u(M);
    if (it(M))
      return l ? l(M, 2) : M();
    c(M);
  })) : it(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (h) {
      Ae();
      try {
        h();
      } finally {
        Re();
      }
    }
    const M = Ns;
    Ns = f;
    try {
      return l ? l(e, 3, [_]) : e(_);
    } finally {
      Ns = M;
    }
  } : (d = Qt, c(e)), t && i) {
    const M = d, X = i === !0 ? 1 / 0 : i;
    d = () => ns(M(), X);
  }
  const C = mu(), j = () => {
    f.stop(), C && C.active && da(C.effects, f);
  };
  if (o && t) {
    const M = t;
    t = (...X) => {
      M(...X), j();
    };
  }
  let Y = y ? new Array(e.length).fill(Ui) : Ui;
  const tt = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const X = f.run();
        if (i || m || (y ? X.some((S, k) => ks(S, Y[k])) : ks(X, Y))) {
          h && h();
          const S = Ns;
          Ns = f;
          try {
            const k = [
              X,
              // pass undefined as the old value when it's changed for the first time
              Y === Ui ? void 0 : y && Y[0] === Ui ? [] : Y,
              _
            ];
            Y = X, l ? l(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            Ns = S;
          }
        }
      } else
        f.run();
  };
  return a && a(tt), f = new _u(d), f.scheduler = r ? () => r(tt, !1) : tt, _ = (M) => wp(M, !1, f), h = f.onStop = () => {
    const M = Co.get(f);
    if (M) {
      if (l)
        l(M, 4);
      else
        for (const X of M) X();
      Co.delete(f);
    }
  }, f.onTrack = s.onTrack, f.onTrigger = s.onTrigger, t ? n ? tt(!0) : Y = f.run() : r ? r(tt.bind(null, !0), !0) : f.run(), j.pause = f.pause.bind(f), j.resume = f.resume.bind(f), j.stop = j, j;
}
function ns(e, t = 1 / 0, s) {
  if (t <= 0 || !xt(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, Dt(e))
    ns(e.value, t, s);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      ns(e[n], t, s);
  else if (Pn(e) || Ks(e))
    e.forEach((n) => {
      ns(n, t, s);
    });
  else if (Ko(e)) {
    for (const n in e)
      ns(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ns(e[n], t, s);
  }
  return e;
}
var hs = { NODE_ENV: '"production"', npm_package_version: '"1.0.0"' };
const Ys = [];
function lo(e) {
  Ys.push(e);
}
function co() {
  Ys.pop();
}
let yr = !1;
function B(e, ...t) {
  if (yr) return;
  yr = !0, Ae();
  const s = Ys.length ? Ys[Ys.length - 1].component : null, n = s && s.appContext.config.warnHandler, i = kp();
  if (n)
    En(
      n,
      s,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var r, a;
          return (a = (r = o.toString) == null ? void 0 : r.call(o)) != null ? a : JSON.stringify(o);
        }).join(""),
        s && s.proxy,
        i.map(
          ({ vnode: o }) => `at <${sr(s, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Op(i)), console.warn(...o);
  }
  Re(), yr = !1;
}
function kp() {
  let e = Ys[Ys.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Op(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Mp(s));
  }), t;
}
function Mp({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, i = ` at <${sr(
    e.component,
    e.type,
    n
  )}`, o = ">" + s;
  return e.props ? [i, ...Cp(e.props), o] : [i + o];
}
function Cp(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...ju(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function ju(e, t, s) {
  return Et(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : Dt(t) ? (t = ju(e, ot(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : it(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ot(t), s ? t : [`${e}=`, t]);
}
const xa = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function En(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Di(i, t, s);
  }
}
function Ye(e, t, s, n) {
  if (it(e)) {
    const i = En(e, t, s, n);
    return i && ha(i) && i.catch((o) => {
      Di(o, t, s);
    }), i;
  }
  if (Q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ye(e[o], t, s, n));
    return i;
  } else
    B(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Di(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || kt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = xa[s];
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Ae(), En(o, null, 10, [
        e,
        l,
        c
      ]), Re();
      return;
    }
  }
  Tp(e, s, i, n, r);
}
function Tp(e, t, s, n = !0, i = !1) {
  {
    const o = xa[t];
    if (s && lo(s), B(`Unhandled error${o ? ` during execution of ${o}` : ""}`), s && co(), n)
      throw e;
    console.error(e);
  }
}
const oe = [];
let Fe = -1;
const Sn = [];
let ps = null, vn = 0;
const Vu = /* @__PURE__ */ Promise.resolve();
let To = null;
const Dp = 100;
function Cs(e) {
  const t = To || Vu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ip(e) {
  let t = Fe + 1, s = oe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = oe[n], o = hi(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Jo(e) {
  if (!(e.flags & 1)) {
    const t = hi(e), s = oe[oe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hi(s) ? oe.push(e) : oe.splice(Ip(t), 0, e), e.flags |= 1, Nu();
  }
}
function Nu() {
  To || (To = Vu.then(Bu));
}
function Hu(e) {
  Q(e) ? Sn.push(...e) : ps && e.id === -1 ? ps.splice(vn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1), Nu();
}
function gl(e, t, s = Fe + 1) {
  for (t = t || /* @__PURE__ */ new Map(); s < oe.length; s++) {
    const n = oe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid || wa(t, n))
        continue;
      oe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function zu(e) {
  if (Sn.length) {
    const t = [...new Set(Sn)].sort(
      (s, n) => hi(s) - hi(n)
    );
    if (Sn.length = 0, ps) {
      ps.push(...t);
      return;
    }
    for (ps = t, e = e || /* @__PURE__ */ new Map(), vn = 0; vn < ps.length; vn++) {
      const s = ps[vn];
      wa(e, s) || (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2);
    }
    ps = null, vn = 0;
  }
}
const hi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bu(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (s) => wa(e, s);
  try {
    for (Fe = 0; Fe < oe.length; Fe++) {
      const s = oe[Fe];
      if (s && !(s.flags & 8)) {
        if (hs.NODE_ENV !== "production" && t(s))
          continue;
        s.flags & 4 && (s.flags &= -2), En(
          s,
          s.i,
          s.i ? 15 : 14
        ), s.flags & 4 || (s.flags &= -2);
      }
    }
  } finally {
    for (; Fe < oe.length; Fe++) {
      const s = oe[Fe];
      s && (s.flags &= -2);
    }
    Fe = -1, oe.length = 0, zu(e), To = null, (oe.length || Sn.length) && Bu(e);
  }
}
function wa(e, t) {
  const s = e.get(t) || 0;
  if (s > Dp) {
    const n = t.i, i = n && Ea(n.type);
    return Di(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, s + 1), !1;
}
let ze = !1;
const uo = /* @__PURE__ */ new Map();
{
  const e = Mi();
  e.__VUE_HMR_RUNTIME__ || (e.__VUE_HMR_RUNTIME__ = {
    createRecord: vr(Uu),
    rerender: vr(Ap),
    reload: vr(Rp)
  });
}
const nn = /* @__PURE__ */ new Map();
function Pp(e) {
  const t = e.type.__hmrId;
  let s = nn.get(t);
  s || (Uu(t, e.type), s = nn.get(t)), s.instances.add(e);
}
function Ep(e) {
  nn.get(e.type.__hmrId).instances.delete(e);
}
function Uu(e, t) {
  return nn.has(e) ? !1 : (nn.set(e, {
    initialDef: Do(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Do(e) {
  return Mf(e) ? e.__vccOpts : e;
}
function Ap(e, t) {
  const s = nn.get(e);
  s && (s.initialDef.render = t, [...s.instances].forEach((n) => {
    t && (n.render = t, Do(n.type).render = t), n.renderCache = [], ze = !0, n.job.flags & 8 || n.update(), ze = !1;
  }));
}
function Rp(e, t) {
  const s = nn.get(e);
  if (!s) return;
  t = Do(t), ml(s.initialDef, t);
  const n = [...s.instances];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], r = Do(o.type);
    let a = uo.get(r);
    a || (r !== s.initialDef && ml(r, t), uo.set(r, a = /* @__PURE__ */ new Set())), a.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (a.add(o), o.ceReload(t.styles), a.delete(o)) : o.parent ? Jo(() => {
      o.job.flags & 8 || (ze = !0, o.parent.update(), ze = !1, a.delete(o));
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(r);
  }
  Hu(() => {
    uo.clear();
  });
}
function ml(e, t) {
  Lt(e, t);
  for (const s in e)
    s !== "__file" && !(s in t) && delete e[s];
}
function vr(e) {
  return (t, s) => {
    try {
      return e(t, s);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ne, Un = [], Vr = !1;
function Ii(e, ...t) {
  Ne ? Ne.emit(e, ...t) : Vr || Un.push({ event: e, args: t });
}
function Wu(e, t) {
  var s, n;
  Ne = e, Ne ? (Ne.enabled = !0, Un.forEach(({ event: i, args: o }) => Ne.emit(i, ...o)), Un = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (s = window.navigator) == null ? void 0 : s.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Wu(o, t);
  }), setTimeout(() => {
    Ne || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Vr = !0, Un = []);
  }, 3e3)) : (Vr = !0, Un = []);
}
function $p(e, t) {
  Ii("app:init", e, t, {
    Fragment: $t,
    Text: Ei,
    Comment: be,
    Static: fo
  });
}
function Lp(e) {
  Ii("app:unmount", e);
}
const Fp = /* @__PURE__ */ Sa(
  "component:added"
  /* COMPONENT_ADDED */
), Ku = /* @__PURE__ */ Sa(
  "component:updated"
  /* COMPONENT_UPDATED */
), jp = /* @__PURE__ */ Sa(
  "component:removed"
  /* COMPONENT_REMOVED */
), Vp = (e) => {
  Ne && typeof Ne.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ne.cleanupBuffer(e) && jp(e);
};
// @__NO_SIDE_EFFECTS__
function Sa(e) {
  return (t) => {
    Ii(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Np = /* @__PURE__ */ Gu(
  "perf:start"
  /* PERFORMANCE_START */
), Hp = /* @__PURE__ */ Gu(
  "perf:end"
  /* PERFORMANCE_END */
);
function Gu(e) {
  return (t, s, n) => {
    Ii(e, t.appContext.app, t.uid, t, s, n);
  };
}
function zp(e, t, s) {
  Ii(
    "component:emit",
    e.appContext.app,
    e,
    t,
    s
  );
}
let te = null, Yu = null;
function Io(e) {
  const t = te;
  return te = e, Yu = e && e.type.__scopeId || null, t;
}
function Bp(e, t = te, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && $o(-1);
    const o = Io(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Io(o), n._d && $o(1);
    }
    return Ku(t), r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qu(e) {
  Eh(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function At(e, t) {
  if (te === null)
    return B("withDirectives can only be used inside render functions."), e;
  const s = er(te), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, a, l = kt] = t[i];
    o && (it(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ns(r), n.push({
      dir: o,
      instance: s,
      value: r,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Rs(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[n];
    l && (Ae(), Ye(l, s, 8, [
      e.el,
      a,
      e,
      t
    ]), Re());
  }
}
const Up = Symbol("_vte"), Wp = (e) => e.__isTeleport, Kp = Symbol("_leaveCb");
function ka(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ka(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  return it(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Lt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const _l = /* @__PURE__ */ new WeakSet(), Po = /* @__PURE__ */ new WeakMap();
function Qn(e, t, s, n, i = !1) {
  if (Q(e)) {
    e.forEach(
      (m, y) => Qn(
        m,
        t && (Q(t) ? t[y] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (ti(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Qn(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? er(n.component) : n.el, r = i ? null : o, { i: a, r: l } = e;
  if (!a) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, u = a.refs === kt ? a.refs = {} : a.refs, f = a.setupState, d = ot(f), h = f === kt ? cu : (m) => (mt(d, m) && !Dt(d[m]) && B(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), _l.has(d[m]) ? !1 : mt(d, m)), _ = (m) => !_l.has(m);
  if (c != null && c !== l) {
    if (bl(t), Et(c))
      u[c] = null, h(c) && (f[c] = null);
    else if (Dt(c)) {
      _(c) && (c.value = null);
      const m = t;
      m.k && (u[m.k] = null);
    }
  }
  if (it(l))
    En(l, a, 12, [r, u]);
  else {
    const m = Et(l), y = Dt(l);
    if (m || y) {
      const C = () => {
        if (e.f) {
          const j = m ? h(l) ? f[l] : u[l] : _(l) || !e.k ? l.value : u[e.k];
          if (i)
            Q(j) && da(j, o);
          else if (Q(j))
            j.includes(o) || j.push(o);
          else if (m)
            u[l] = [o], h(l) && (f[l] = u[l]);
          else {
            const Y = [o];
            _(l) && (l.value = Y), e.k && (u[e.k] = Y);
          }
        } else m ? (u[l] = r, h(l) && (f[l] = r)) : y ? (_(l) && (l.value = r), e.k && (u[e.k] = r)) : B("Invalid template ref type:", l, `(${typeof l})`);
      };
      if (r) {
        const j = () => {
          C(), Po.delete(e);
        };
        j.id = -1, Po.set(e, j), ge(j, s);
      } else
        bl(e), C();
    } else
      B("Invalid template ref type:", l, `(${typeof l})`);
  }
}
function bl(e) {
  const t = Po.get(e);
  t && (t.flags |= 8, Po.delete(e));
}
Mi().requestIdleCallback;
Mi().cancelIdleCallback;
const ti = (e) => !!e.type.__asyncLoader, Oa = (e) => e.type.__isKeepAlive;
function Gp(e, t) {
  Ju(e, "a", t);
}
function Yp(e, t) {
  Ju(e, "da", t);
}
function Ju(e, t, s = Bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Zo(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Oa(i.parent.vnode) && qp(n, t, s, i), i = i.parent;
  }
}
function qp(e, t, s, n) {
  const i = Zo(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Pi(() => {
    da(n[t], i);
  }, s);
}
function Zo(e, t, s = Bt, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Ae();
      const a = Ai(s), l = Ye(t, s, e, r);
      return a(), Re(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  } else {
    const i = Vs(xa[e].replace(/ hook$/, ""));
    B(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ls = (e) => (t, s = Bt) => {
  (!gi || e === "sp") && Zo(e, (...n) => t(...n), s);
}, Xp = ls("bm"), Ma = ls("m"), Jp = ls(
  "bu"
), Zp = ls("u"), Qp = ls(
  "bum"
), Pi = ls("um"), tg = ls(
  "sp"
), eg = ls("rtg"), sg = ls("rtc");
function ng(e, t = Bt) {
  Zo("ec", e, t);
}
const Zu = "components";
function ig(e, t) {
  return ef(Zu, e, !0, t) || e;
}
const Qu = Symbol.for("v-ndc");
function tf(e) {
  return Et(e) ? ef(Zu, e, !1) || e : e || Qu;
}
function ef(e, t, s = !0, n = !1) {
  const i = te || Bt;
  if (i) {
    const o = i.type;
    {
      const a = Ea(
        o,
        !1
      );
      if (a && (a === t || a === Ut(t) || a === en(Ut(t))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      yl(i[e] || o[e], t) || // global registration
      yl(i.appContext[e], t)
    );
    return !r && n ? o : (s && !r && B(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else
    B(
      `resolve${en(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function yl(e, t) {
  return e && (e[t] || e[Ut(t)] || e[en(Ut(t))]);
}
function ke(e, t, s, n) {
  let i;
  const o = s, r = Q(e);
  if (r || Et(e)) {
    const a = r && Ue(e);
    let l = !1, c = !1;
    a && (l = !ae(e), c = Ge(e), e = Yo(e)), i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      i[u] = t(
        l ? c ? Mo(Yt(e[u])) : Yt(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || B(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (xt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Nr = (e) => e ? kf(e) ? er(e) : Nr(e.parent) : null, qs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Lt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => He(e.props),
    $attrs: (e) => He(e.attrs),
    $slots: (e) => He(e.slots),
    $refs: (e) => He(e.refs),
    $parent: (e) => Nr(e.parent),
    $root: (e) => Nr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => of(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Jo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cs.bind(e.proxy)),
    $watch: (e) => Fg.bind(e)
  })
), Ca = (e) => e === "_" || e === "$", xr = (e, t) => e !== kt && !e.__isScriptSetup && mt(e, t), sf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: a, appContext: l } = e;
    if (t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const h = r[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (xr(n, t))
          return r[t] = 1, n[t];
        if (i !== kt && mt(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && mt(c, t)
        )
          return r[t] = 3, o[t];
        if (s !== kt && mt(s, t))
          return r[t] = 4, s[t];
        Hr && (r[t] = 0);
      }
    }
    const u = qs[t];
    let f, d;
    if (u)
      return t === "$attrs" ? (zt(e.attrs, "get", ""), Ro()) : t === "$slots" && zt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (s !== kt && mt(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      d = l.config.globalProperties, mt(d, t)
    )
      return d[t];
    te && (!Et(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== kt && Ca(t[0]) && mt(i, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === te && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return xr(i, t) ? (i[t] = s, !0) : i.__isScriptSetup && mt(i, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== kt && mt(n, t) ? (n[t] = s, !0) : mt(e.props, t) ? (B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: s
    }) : o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, propsOptions: o, type: r }
  }, a) {
    let l, c;
    return !!(s[a] || e !== kt && a[0] !== "$" && mt(e, a) || xr(t, a) || (l = o[0]) && mt(l, a) || mt(n, a) || mt(qs, a) || mt(i.config.globalProperties, a) || (c = r.__cssModules) && c[a]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : mt(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
sf.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function og(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(qs).forEach((s) => {
    Object.defineProperty(t, s, {
      configurable: !0,
      enumerable: !1,
      get: () => qs[s](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Qt
    });
  }), t;
}
function rg(e) {
  const {
    ctx: t,
    propsOptions: [s]
  } = e;
  s && Object.keys(s).forEach((n) => {
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[n],
      set: Qt
    });
  });
}
function ag(e) {
  const { ctx: t, setupState: s } = e;
  Object.keys(ot(s)).forEach((n) => {
    if (!s.__isScriptSetup) {
      if (Ca(n[0])) {
        B(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => s[n],
        set: Qt
      });
    }
  });
}
function vl(e) {
  return Q(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
function lg() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, s) => {
    e[s] ? B(`${t} property "${s}" is already defined in ${e[s]}.`) : e[s] = t;
  };
}
let Hr = !0;
function cg(e) {
  const t = of(e), s = e.proxy, n = e.ctx;
  Hr = !1, t.beforeCreate && xl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: _,
    activated: m,
    deactivated: y,
    beforeDestroy: C,
    beforeUnmount: j,
    destroyed: Y,
    unmounted: tt,
    render: M,
    renderTracked: X,
    renderTriggered: S,
    errorCaptured: k,
    serverPrefetch: R,
    // public API
    expose: L,
    inheritAttrs: $,
    // assets
    components: q,
    directives: ht,
    filters: It
  } = t, ct = lg();
  {
    const [Z] = e.propsOptions;
    if (Z)
      for (const st in Z)
        ct("Props", st);
  }
  if (c && ug(c, n, ct), r)
    for (const Z in r) {
      const st = r[Z];
      it(st) ? (Object.defineProperty(n, Z, {
        value: st.bind(s),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), ct("Methods", Z)) : B(
        `Method "${Z}" has type "${typeof st}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    it(i) || B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Z = i.call(s, s);
    if (ha(Z) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !xt(Z))
      B("data() should return an object.");
    else {
      e.data = Ti(Z);
      for (const st in Z)
        ct("Data", st), Ca(st[0]) || Object.defineProperty(n, st, {
          configurable: !0,
          enumerable: !0,
          get: () => Z[st],
          set: Qt
        });
    }
  }
  if (Hr = !0, o)
    for (const Z in o) {
      const st = o[Z], bt = it(st) ? st.bind(s, s) : it(st.get) ? st.get.bind(s, s) : Qt;
      bt === Qt && B(`Computed property "${Z}" has no getter.`);
      const ft = !it(st) && it(st.set) ? st.set.bind(s) : () => {
        B(
          `Write operation failed: computed property "${Z}" is readonly.`
        );
      }, V = Rt({
        get: bt,
        set: ft
      });
      Object.defineProperty(n, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: (T) => V.value = T
      }), ct("Computed", Z);
    }
  if (a)
    for (const Z in a)
      nf(a[Z], n, s, Z);
  if (l) {
    const Z = it(l) ? l.call(s) : l;
    Reflect.ownKeys(Z).forEach((st) => {
      Kn(st, Z[st]);
    });
  }
  u && xl(u, e, "c");
  function ut(Z, st) {
    Q(st) ? st.forEach((bt) => Z(bt.bind(s))) : st && Z(st.bind(s));
  }
  if (ut(Xp, f), ut(Ma, d), ut(Jp, h), ut(Zp, _), ut(Gp, m), ut(Yp, y), ut(ng, k), ut(sg, X), ut(eg, S), ut(Qp, j), ut(Pi, tt), ut(tg, R), Q(L))
    if (L.length) {
      const Z = e.exposed || (e.exposed = {});
      L.forEach((st) => {
        Object.defineProperty(Z, st, {
          get: () => s[st],
          set: (bt) => s[st] = bt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === Qt && (e.render = M), $ != null && (e.inheritAttrs = $), q && (e.components = q), ht && (e.directives = ht), R && Xu(e);
}
function ug(e, t, s = Qt) {
  Q(e) && (e = zr(e));
  for (const n in e) {
    const i = e[n];
    let o;
    xt(i) ? "default" in i ? o = ei(
      i.from || n,
      i.default,
      !0
    ) : o = ei(i.from || n) : o = ei(i), Dt(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o, s("Inject", n);
  }
}
function xl(e, t, s) {
  Ye(
    Q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function nf(e, t, s, n) {
  let i = n.includes(".") ? _f(s, n) : () => s[n];
  if (Et(e)) {
    const o = t[e];
    it(o) ? Js(i, o) : B(`Invalid watch handler specified by key "${e}"`, o);
  } else if (it(e))
    Js(i, e.bind(s));
  else if (xt(e))
    if (Q(e))
      e.forEach((o) => nf(o, t, s, n));
    else {
      const o = it(e.handler) ? e.handler.bind(s) : t[e.handler];
      it(o) ? Js(i, o, e) : B(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    B(`Invalid watch option: "${n}"`, e);
}
function of(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !s && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Eo(l, c, r, !0)
  ), Eo(l, t, r)), xt(t) && o.set(t, l), l;
}
function Eo(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Eo(e, o, s, !0), i && i.forEach(
    (r) => Eo(e, r, s, !0)
  );
  for (const r in t)
    if (n && r === "expose")
      B(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = fg[r] || s && s[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const fg = {
  data: wl,
  props: Sl,
  emits: Sl,
  // objects
  methods: Wn,
  computed: Wn,
  // lifecycle
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  // assets
  components: Wn,
  directives: Wn,
  // watch
  watch: hg,
  // provide / inject
  provide: wl,
  inject: dg
};
function wl(e, t) {
  return t ? e ? function() {
    return Lt(
      it(e) ? e.call(this, this) : e,
      it(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function dg(e, t) {
  return Wn(zr(e), zr(t));
}
function zr(e) {
  if (Q(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wn(e, t) {
  return e ? Lt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sl(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Lt(
    /* @__PURE__ */ Object.create(null),
    vl(e),
    vl(t ?? {})
  ) : t;
}
function hg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Lt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ne(e[n], t[n]);
  return s;
}
function rf() {
  return {
    app: null,
    config: {
      isNativeTag: cu,
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
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let pg = 0;
function gg(e, t) {
  return function(n, i = null) {
    it(n) || (n = Lt({}, n)), i != null && !xt(i) && (B("root props passed to app.mount() must be an object."), i = null);
    const o = rf(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: pg++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: qr,
      get config() {
        return o.config;
      },
      set config(u) {
        B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return r.has(u) ? B("Plugin has already been applied to target app.") : u && it(u.install) ? (r.add(u), u.install(c, ...f)) : it(u) ? (r.add(u), u(c, ...f)) : B(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return o.mixins.includes(u) ? B(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : o.mixins.push(u), c;
      },
      component(u, f) {
        return Yr(u, o.config), f ? (o.components[u] && B(`Component "${u}" has already been registered in target app.`), o.components[u] = f, c) : o.components[u];
      },
      directive(u, f) {
        return qu(u), f ? (o.directives[u] && B(`Directive "${u}" has already been registered in target app.`), o.directives[u] = f, c) : o.directives[u];
      },
      mount(u, f, d) {
        if (l)
          B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          u.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = c._ceVNode || vt(n, i);
          return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), o.reload = () => {
            const _ = Ts(h);
            _.el = null, e(_, u, d);
          }, e(h, u, d), l = !0, c._container = u, u.__vue_app__ = c, c._instance = h.component, $p(c, qr), er(h.component);
        }
      },
      onUnmount(u) {
        typeof u != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (Ye(
          a,
          c._instance,
          16
        ), e(null, c._container), c._instance = null, Lp(c), delete c._container.__vue_app__) : B("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return u in o.provides && (mt(o.provides, u) ? B(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = Xs;
        Xs = c;
        try {
          return u();
        } finally {
          Xs = f;
        }
      }
    };
    return c;
  };
}
let Xs = null;
function Kn(e, t) {
  if (!Bt)
    B("provide() can only be used inside setup().");
  else {
    let s = Bt.provides;
    const n = Bt.parent && Bt.parent.provides;
    n === s && (s = Bt.provides = Object.create(n)), s[e] = t;
  }
}
function ei(e, t, s = !1) {
  const n = tr();
  if (n || Xs) {
    let i = Xs ? Xs._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && it(t) ? t.call(n && n.proxy) : t;
    B(`injection "${String(e)}" not found.`);
  } else
    B("inject() can only be used inside setup() or functional components.");
}
function mg() {
  return !!(tr() || Xs);
}
const af = {}, lf = () => Object.create(af), cf = (e) => Object.getPrototypeOf(e) === af;
function _g(e, t, s, n = !1) {
  const i = {}, o = lf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), uf(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  df(t || {}, i, e), s ? e.props = n ? i : gp(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function bg(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function yg(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, a = ot(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !bg(e) && (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Qo(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (mt(o, d))
            h !== o[d] && (o[d] = h, c = !0);
          else {
            const _ = Ut(d);
            i[_] = Br(
              l,
              a,
              _,
              h,
              e,
              !1
            );
          }
        else
          h !== o[d] && (o[d] = h, c = !0);
      }
    }
  } else {
    uf(e, t, i, o) && (c = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !mt(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = he(f)) === f || !mt(t, u))) && (l ? s && // for camelCase
      (s[f] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[f] = Br(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (o !== a)
      for (const f in o)
        (!t || !mt(t, f)) && (delete o[f], c = !0);
  }
  c && Ve(e.attrs, "set", ""), df(t || {}, i, e);
}
function uf(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Xn(l))
        continue;
      const c = t[l];
      let u;
      i && mt(i, u = Ut(l)) ? !o || !o.includes(u) ? s[u] = c : (a || (a = {}))[u] = c : Qo(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
    }
  if (o) {
    const l = ot(s), c = a || kt;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      s[f] = Br(
        i,
        l,
        f,
        c[f],
        e,
        !mt(c, f)
      );
    }
  }
  return r;
}
function Br(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const a = mt(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && it(l)) {
        const { propsDefaults: c } = i;
        if (s in c)
          n = c[s];
        else {
          const u = Ai(i);
          n = c[s] = l.call(
            null,
            t
          ), u();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(s, n);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === he(s)) && (n = !0));
  }
  return n;
}
const vg = /* @__PURE__ */ new WeakMap();
function ff(e, t, s = !1) {
  const n = s ? vg : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, a = [];
  let l = !1;
  if (!it(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = ff(f, t, !0);
      Lt(r, d), h && a.push(...h);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return xt(e) && n.set(e, wn), wn;
  if (Q(o))
    for (let u = 0; u < o.length; u++) {
      Et(o[u]) || B("props must be strings when using array syntax.", o[u]);
      const f = Ut(o[u]);
      kl(f) && (r[f] = kt);
    }
  else if (o) {
    xt(o) || B("invalid props options", o);
    for (const u in o) {
      const f = Ut(u);
      if (kl(f)) {
        const d = o[u], h = r[f] = Q(d) || it(d) ? { type: d } : Lt({}, d), _ = h.type;
        let m = !1, y = !0;
        if (Q(_))
          for (let C = 0; C < _.length; ++C) {
            const j = _[C], Y = it(j) && j.name;
            if (Y === "Boolean") {
              m = !0;
              break;
            } else Y === "String" && (y = !1);
          }
        else
          m = it(_) && _.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = y, (m || mt(h, "default")) && a.push(f);
      }
    }
  }
  const c = [r, a];
  return xt(e) && n.set(e, c), c;
}
function kl(e) {
  return e[0] !== "$" && !Xn(e) ? !0 : (B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function xg(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function df(e, t, s) {
  const n = ot(t), i = s.propsOptions[0], o = Object.keys(e).map((r) => Ut(r));
  for (const r in i) {
    let a = i[r];
    a != null && wg(
      r,
      n[r],
      a,
      He(n),
      !o.includes(r)
    );
  }
}
function wg(e, t, s, n, i) {
  const { type: o, required: r, validator: a, skipCheck: l } = s;
  if (r && i) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !l) {
      let c = !1;
      const u = Q(o) ? o : [o], f = [];
      for (let d = 0; d < u.length && !c; d++) {
        const { valid: h, expectedType: _ } = kg(t, u[d]);
        f.push(_ || ""), c = h;
      }
      if (!c) {
        B(Og(e, t, f));
        return;
      }
    }
    a && !a(t, n) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Sg = /* @__PURE__ */ as(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function kg(e, t) {
  let s;
  const n = xg(t);
  if (n === "null")
    s = e === null;
  else if (Sg(n)) {
    const i = typeof e;
    s = i === n.toLowerCase(), !s && i === "object" && (s = e instanceof t);
  } else n === "Object" ? s = xt(e) : n === "Array" ? s = Q(e) : s = e instanceof t;
  return {
    valid: s,
    expectedType: n
  };
}
function Og(e, t, s) {
  if (s.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${e}". Expected ${s.map(en).join(" | ")}`;
  const i = s[0], o = pa(t), r = Ol(t, i), a = Ol(t, o);
  return s.length === 1 && Ml(i) && !Mg(i, o) && (n += ` with value ${r}`), n += `, got ${o} `, Ml(o) && (n += `with value ${a}.`), n;
}
function Ol(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ml(e) {
  return ["string", "number", "boolean"].some((s) => e.toLowerCase() === s);
}
function Mg(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ta = (e) => e === "_" || e === "_ctx" || e === "$stable", Da = (e) => Q(e) ? e.map(Pe) : [Pe(e)], Cg = (e, t, s) => {
  if (t._n)
    return t;
  const n = Bp((...i) => (hs.NODE_ENV !== "production" && Bt && !(s === null && te) && !(s && s.root !== Bt.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Da(t(...i))), s);
  return n._c = !1, n;
}, hf = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ta(i)) continue;
    const o = e[i];
    if (it(o))
      t[i] = Cg(i, o, n);
    else if (o != null) {
      B(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Da(o);
      t[i] = () => r;
    }
  }
}, pf = (e, t) => {
  Oa(e.vnode) || B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const s = Da(t);
  e.slots.default = () => s;
}, Ur = (e, t, s) => {
  for (const n in t)
    (s || !Ta(n)) && (e[n] = t[n]);
}, Tg = (e, t, s) => {
  const n = e.slots = lf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ur(n, t, s), s && So(n, "_", i, !0)) : hf(t, n);
  } else t && pf(e, t);
}, Dg = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = kt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? ze ? (Ur(i, t, s), Ve(e, "set", "$slots")) : s && a === 1 ? o = !1 : Ur(i, t, s) : (o = !t.$stable, hf(t, i)), r = t;
  } else t && (pf(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !Ta(a) && r[a] == null && delete i[a];
};
let Fn, es;
function hn(e, t) {
  e.appContext.config.performance && Ao() && es.mark(`vue-${t}-${e.uid}`), Np(e, t, Ao() ? es.now() : Date.now());
}
function pn(e, t) {
  if (e.appContext.config.performance && Ao()) {
    const s = `vue-${t}-${e.uid}`, n = s + ":end", i = `<${sr(e, e.type)}> ${t}`;
    es.mark(n), es.measure(i, s, n), es.clearMeasures(i), es.clearMarks(s), es.clearMarks(n);
  }
  Hp(e, t, Ao() ? es.now() : Date.now());
}
function Ao() {
  return Fn !== void 0 || (typeof window < "u" && window.performance ? (Fn = !0, es = window.performance) : Fn = !1), Fn;
}
function Ig() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ge = Wg;
function Pg(e) {
  return Eg(e);
}
function Eg(e, t) {
  Ig();
  const s = Mi();
  s.__VUE__ = !0, Wu(s.__VUE_DEVTOOLS_GLOBAL_HOOK__, s);
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = Qt,
    insertStaticContent: _
  } = e, m = (g, b, O, F = null, A = null, P = null, U = void 0, z = null, H = ze ? !1 : !!b.dynamicChildren) => {
    if (g === b)
      return;
    g && !jn(g, b) && (F = Te(g), W(g, A, P, !0), g = null), b.patchFlag === -2 && (H = !1, b.dynamicChildren = null);
    const { type: v, ref: I, shapeFlag: E } = b;
    switch (v) {
      case Ei:
        y(g, b, O, F);
        break;
      case be:
        C(g, b, O, F);
        break;
      case fo:
        g == null ? j(b, O, F, U) : Y(g, b, O, U);
        break;
      case $t:
        ht(
          g,
          b,
          O,
          F,
          A,
          P,
          U,
          z,
          H
        );
        break;
      default:
        E & 1 ? X(
          g,
          b,
          O,
          F,
          A,
          P,
          U,
          z,
          H
        ) : E & 6 ? It(
          g,
          b,
          O,
          F,
          A,
          P,
          U,
          z,
          H
        ) : E & 64 || E & 128 ? v.process(
          g,
          b,
          O,
          F,
          A,
          P,
          U,
          z,
          H,
          ce
        ) : B("Invalid VNode type:", v, `(${typeof v})`);
    }
    I != null && A ? Qn(I, g && g.ref, P, b || g, !b) : I == null && g && g.ref != null && Qn(g.ref, null, P, g, !0);
  }, y = (g, b, O, F) => {
    if (g == null)
      n(
        b.el = a(b.children),
        O,
        F
      );
    else {
      const A = b.el = g.el;
      b.children !== g.children && c(A, b.children);
    }
  }, C = (g, b, O, F) => {
    g == null ? n(
      b.el = l(b.children || ""),
      O,
      F
    ) : b.el = g.el;
  }, j = (g, b, O, F) => {
    [g.el, g.anchor] = _(
      g.children,
      b,
      O,
      F,
      g.el,
      g.anchor
    );
  }, Y = (g, b, O, F) => {
    if (b.children !== g.children) {
      const A = d(g.anchor);
      M(g), [b.el, b.anchor] = _(
        b.children,
        O,
        A,
        F
      );
    } else
      b.el = g.el, b.anchor = g.anchor;
  }, tt = ({ el: g, anchor: b }, O, F) => {
    let A;
    for (; g && g !== b; )
      A = d(g), n(g, O, F), g = A;
    n(b, O, F);
  }, M = ({ el: g, anchor: b }) => {
    let O;
    for (; g && g !== b; )
      O = d(g), i(g), g = O;
    i(b);
  }, X = (g, b, O, F, A, P, U, z, H) => {
    b.type === "svg" ? U = "svg" : b.type === "math" && (U = "mathml"), g == null ? S(
      b,
      O,
      F,
      A,
      P,
      U,
      z,
      H
    ) : L(
      g,
      b,
      A,
      P,
      U,
      z,
      H
    );
  }, S = (g, b, O, F, A, P, U, z) => {
    let H, v;
    const { props: I, shapeFlag: E, transition: G, dirs: nt } = g;
    if (H = g.el = r(
      g.type,
      P,
      I && I.is,
      I
    ), E & 8 ? u(H, g.children) : E & 16 && R(
      g.children,
      H,
      null,
      F,
      A,
      wr(g, P),
      U,
      z
    ), nt && Rs(g, null, F, "created"), k(H, g, g.scopeId, U, F), I) {
      for (const rt in I)
        rt !== "value" && !Xn(rt) && o(H, rt, null, I[rt], P, F);
      "value" in I && o(H, "value", null, I.value, P), (v = I.onVnodeBeforeMount) && $e(v, F, g);
    }
    So(H, "__vnode", g, !0), So(H, "__vueParentComponent", F, !0), nt && Rs(g, null, F, "beforeMount");
    const dt = Ag(A, G);
    dt && G.beforeEnter(H), n(H, b, O), ((v = I && I.onVnodeMounted) || dt || nt) && ge(() => {
      v && $e(v, F, g), dt && G.enter(H), nt && Rs(g, null, F, "mounted");
    }, A);
  }, k = (g, b, O, F, A) => {
    if (O && h(g, O), F)
      for (let P = 0; P < F.length; P++)
        h(g, F[P]);
    if (A) {
      let P = A.subTree;
      if (P.patchFlag > 0 && P.patchFlag & 2048 && (P = Ia(P.children) || P), b === P || vf(P.type) && (P.ssContent === b || P.ssFallback === b)) {
        const U = A.vnode;
        k(
          g,
          U,
          U.scopeId,
          U.slotScopeIds,
          A.parent
        );
      }
    }
  }, R = (g, b, O, F, A, P, U, z, H = 0) => {
    for (let v = H; v < g.length; v++) {
      const I = g[v] = z ? gs(g[v]) : Pe(g[v]);
      m(
        null,
        I,
        b,
        O,
        F,
        A,
        P,
        U,
        z
      );
    }
  }, L = (g, b, O, F, A, P, U) => {
    const z = b.el = g.el;
    z.__vnode = b;
    let { patchFlag: H, dynamicChildren: v, dirs: I } = b;
    H |= g.patchFlag & 16;
    const E = g.props || kt, G = b.props || kt;
    let nt;
    if (O && $s(O, !1), (nt = G.onVnodeBeforeUpdate) && $e(nt, O, b, g), I && Rs(b, g, O, "beforeUpdate"), O && $s(O, !0), ze && (H = 0, U = !1, v = null), (E.innerHTML && G.innerHTML == null || E.textContent && G.textContent == null) && u(z, ""), v ? ($(
      g.dynamicChildren,
      v,
      z,
      O,
      F,
      wr(b, A),
      P
    ), Wr(g, b)) : U || bt(
      g,
      b,
      z,
      null,
      O,
      F,
      wr(b, A),
      P,
      !1
    ), H > 0) {
      if (H & 16)
        q(z, E, G, O, A);
      else if (H & 2 && E.class !== G.class && o(z, "class", null, G.class, A), H & 4 && o(z, "style", E.style, G.style, A), H & 8) {
        const dt = b.dynamicProps;
        for (let rt = 0; rt < dt.length; rt++) {
          const at = dt[rt], lt = E[at], Wt = G[at];
          (Wt !== lt || at === "value") && o(z, at, lt, Wt, A, O);
        }
      }
      H & 1 && g.children !== b.children && u(z, b.children);
    } else !U && v == null && q(z, E, G, O, A);
    ((nt = G.onVnodeUpdated) || I) && ge(() => {
      nt && $e(nt, O, b, g), I && Rs(b, g, O, "updated");
    }, F);
  }, $ = (g, b, O, F, A, P, U) => {
    for (let z = 0; z < b.length; z++) {
      const H = g[z], v = b[z], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === $t || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jn(H, v) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? f(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      m(
        H,
        v,
        I,
        null,
        F,
        A,
        P,
        U,
        !0
      );
    }
  }, q = (g, b, O, F, A) => {
    if (b !== O) {
      if (b !== kt)
        for (const P in b)
          !Xn(P) && !(P in O) && o(
            g,
            P,
            b[P],
            null,
            A,
            F
          );
      for (const P in O) {
        if (Xn(P)) continue;
        const U = O[P], z = b[P];
        U !== z && P !== "value" && o(g, P, z, U, A, F);
      }
      "value" in O && o(g, "value", b.value, O.value, A);
    }
  }, ht = (g, b, O, F, A, P, U, z, H) => {
    const v = b.el = g ? g.el : a(""), I = b.anchor = g ? g.anchor : a("");
    let { patchFlag: E, dynamicChildren: G, slotScopeIds: nt } = b;
    // #5523 dev root fragment may inherit directives
    (ze || E & 2048) && (E = 0, H = !1, G = null), nt && (z = z ? z.concat(nt) : nt), g == null ? (n(v, O, F), n(I, O, F), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      O,
      I,
      A,
      P,
      U,
      z,
      H
    )) : E > 0 && E & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? ($(
      g.dynamicChildren,
      G,
      O,
      A,
      P,
      U,
      z
    ), Wr(g, b)) : bt(
      g,
      b,
      O,
      I,
      A,
      P,
      U,
      z,
      H
    );
  }, It = (g, b, O, F, A, P, U, z, H) => {
    b.slotScopeIds = z, g == null ? b.shapeFlag & 512 ? A.ctx.activate(
      b,
      O,
      F,
      U,
      H
    ) : ct(
      b,
      O,
      F,
      A,
      P,
      U,
      H
    ) : ut(g, b, H);
  }, ct = (g, b, O, F, A, P, U) => {
    const z = g.component = Qg(
      g,
      F,
      A
    );
    if (z.type.__hmrId && Pp(z), lo(g), hn(z, "mount"), Oa(g) && (z.ctx.renderer = ce), hn(z, "init"), em(z, !1, U), pn(z, "init"), ze && (g.el = null), z.asyncDep) {
      if (A && A.registerDep(z, Z, U), !g.el) {
        const H = z.subTree = vt(be);
        C(null, H, b, O), g.placeholder = H.el;
      }
    } else
      Z(
        z,
        g,
        b,
        O,
        A,
        P,
        U
      );
    co(), pn(z, "mount");
  }, ut = (g, b, O) => {
    const F = b.component = g.component;
    if (Bg(g, b, O))
      if (F.asyncDep && !F.asyncResolved) {
        lo(b), st(F, b, O), co();
        return;
      } else
        F.next = b, F.update();
    else
      b.el = g.el, F.vnode = b;
  }, Z = (g, b, O, F, A, P, U) => {
    const z = () => {
      if (g.isMounted) {
        let { next: E, bu: G, u: nt, parent: dt, vnode: rt } = g;
        {
          const se = gf(g);
          if (se) {
            E && (E.el = rt.el, st(g, E, U)), se.asyncDep.then(() => {
              g.isUnmounted || z();
            });
            return;
          }
        }
        let at = E, lt;
        lo(E || g.vnode), $s(g, !1), E ? (E.el = rt.el, st(g, E, U)) : E = rt, G && yn(G), (lt = E.props && E.props.onVnodeBeforeUpdate) && $e(lt, dt, E, rt), $s(g, !0), hn(g, "render");
        const Wt = Tl(g);
        pn(g, "render");
        const ee = g.subTree;
        g.subTree = Wt, hn(g, "patch"), m(
          ee,
          Wt,
          // parent may have changed if it's in a teleport
          f(ee.el),
          // anchor may have changed if it's in a fragment
          Te(ee),
          g,
          A,
          P
        ), pn(g, "patch"), E.el = Wt.el, at === null && Ug(g, Wt.el), nt && ge(nt, A), (lt = E.props && E.props.onVnodeUpdated) && ge(
          () => $e(lt, dt, E, rt),
          A
        ), Ku(g), co();
      } else {
        let E;
        const { el: G, props: nt } = b, { bm: dt, m: rt, parent: at, root: lt, type: Wt } = g, ee = ti(b);
        $s(g, !1), dt && yn(dt), !ee && (E = nt && nt.onVnodeBeforeMount) && $e(E, at, b), $s(g, !0);
        {
          lt.ce && // @ts-expect-error _def is private
          lt.ce._def.shadowRoot !== !1 && lt.ce._injectChildStyle(Wt), hn(g, "render");
          const se = g.subTree = Tl(g);
          pn(g, "render"), hn(g, "patch"), m(
            null,
            se,
            O,
            F,
            g,
            A,
            P
          ), pn(g, "patch"), b.el = se.el;
        }
        if (rt && ge(rt, A), !ee && (E = nt && nt.onVnodeMounted)) {
          const se = b;
          ge(
            () => $e(E, at, se),
            A
          );
        }
        (b.shapeFlag & 256 || at && ti(at.vnode) && at.vnode.shapeFlag & 256) && g.a && ge(g.a, A), g.isMounted = !0, Fp(g), b = O = F = null;
      }
    };
    g.scope.on();
    const H = g.effect = new _u(z);
    g.scope.off();
    const v = g.update = H.run.bind(H), I = g.job = H.runIfDirty.bind(H);
    I.i = g, I.id = g.uid, H.scheduler = () => Jo(I), $s(g, !0), H.onTrack = g.rtc ? (E) => yn(g.rtc, E) : void 0, H.onTrigger = g.rtg ? (E) => yn(g.rtg, E) : void 0, v();
  }, st = (g, b, O) => {
    b.component = g;
    const F = g.vnode.props;
    g.vnode = b, g.next = null, yg(g, b.props, F, O), Dg(g, b.children, O), Ae(), gl(g), Re();
  }, bt = (g, b, O, F, A, P, U, z, H = !1) => {
    const v = g && g.children, I = g ? g.shapeFlag : 0, E = b.children, { patchFlag: G, shapeFlag: nt } = b;
    if (G > 0) {
      if (G & 128) {
        V(
          v,
          E,
          O,
          F,
          A,
          P,
          U,
          z,
          H
        );
        return;
      } else if (G & 256) {
        ft(
          v,
          E,
          O,
          F,
          A,
          P,
          U,
          z,
          H
        );
        return;
      }
    }
    nt & 8 ? (I & 16 && Ft(v, A, P), E !== v && u(O, E)) : I & 16 ? nt & 16 ? V(
      v,
      E,
      O,
      F,
      A,
      P,
      U,
      z,
      H
    ) : Ft(v, A, P, !0) : (I & 8 && u(O, ""), nt & 16 && R(
      E,
      O,
      F,
      A,
      P,
      U,
      z,
      H
    ));
  }, ft = (g, b, O, F, A, P, U, z, H) => {
    g = g || wn, b = b || wn;
    const v = g.length, I = b.length, E = Math.min(v, I);
    let G;
    for (G = 0; G < E; G++) {
      const nt = b[G] = H ? gs(b[G]) : Pe(b[G]);
      m(
        g[G],
        nt,
        O,
        null,
        A,
        P,
        U,
        z,
        H
      );
    }
    v > I ? Ft(
      g,
      A,
      P,
      !0,
      !1,
      E
    ) : R(
      b,
      O,
      F,
      A,
      P,
      U,
      z,
      H,
      E
    );
  }, V = (g, b, O, F, A, P, U, z, H) => {
    let v = 0;
    const I = b.length;
    let E = g.length - 1, G = I - 1;
    for (; v <= E && v <= G; ) {
      const nt = g[v], dt = b[v] = H ? gs(b[v]) : Pe(b[v]);
      if (jn(nt, dt))
        m(
          nt,
          dt,
          O,
          null,
          A,
          P,
          U,
          z,
          H
        );
      else
        break;
      v++;
    }
    for (; v <= E && v <= G; ) {
      const nt = g[E], dt = b[G] = H ? gs(b[G]) : Pe(b[G]);
      if (jn(nt, dt))
        m(
          nt,
          dt,
          O,
          null,
          A,
          P,
          U,
          z,
          H
        );
      else
        break;
      E--, G--;
    }
    if (v > E) {
      if (v <= G) {
        const nt = G + 1, dt = nt < I ? b[nt].el : F;
        for (; v <= G; )
          m(
            null,
            b[v] = H ? gs(b[v]) : Pe(b[v]),
            O,
            dt,
            A,
            P,
            U,
            z,
            H
          ), v++;
      }
    } else if (v > G)
      for (; v <= E; )
        W(g[v], A, P, !0), v++;
    else {
      const nt = v, dt = v, rt = /* @__PURE__ */ new Map();
      for (v = dt; v <= G; v++) {
        const Kt = b[v] = H ? gs(b[v]) : Pe(b[v]);
        Kt.key != null && (rt.has(Kt.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(Kt.key),
          "Make sure keys are unique."
        ), rt.set(Kt.key, v));
      }
      let at, lt = 0;
      const Wt = G - dt + 1;
      let ee = !1, se = 0;
      const xe = new Array(Wt);
      for (v = 0; v < Wt; v++) xe[v] = 0;
      for (v = nt; v <= E; v++) {
        const Kt = g[v];
        if (lt >= Wt) {
          W(Kt, A, P, !0);
          continue;
        }
        let ue;
        if (Kt.key != null)
          ue = rt.get(Kt.key);
        else
          for (at = dt; at <= G; at++)
            if (xe[at - dt] === 0 && jn(Kt, b[at])) {
              ue = at;
              break;
            }
        ue === void 0 ? W(Kt, A, P, !0) : (xe[ue - dt] = v + 1, ue >= se ? se = ue : ee = !0, m(
          Kt,
          b[ue],
          O,
          null,
          A,
          P,
          U,
          z,
          H
        ), lt++);
      }
      const Fi = ee ? Rg(xe) : wn;
      for (at = Fi.length - 1, v = Wt - 1; v >= 0; v--) {
        const Kt = dt + v, ue = b[Kt], us = b[Kt + 1], an = Kt + 1 < I ? (
          // #13559, fallback to el placeholder for unresolved async component
          us.el || us.placeholder
        ) : F;
        xe[v] === 0 ? m(
          null,
          ue,
          O,
          an,
          A,
          P,
          U,
          z,
          H
        ) : ee && (at < 0 || v !== Fi[at] ? T(ue, O, an, 2) : at--);
      }
    }
  }, T = (g, b, O, F, A = null) => {
    const { el: P, type: U, transition: z, children: H, shapeFlag: v } = g;
    if (v & 6) {
      T(g.component.subTree, b, O, F);
      return;
    }
    if (v & 128) {
      g.suspense.move(b, O, F);
      return;
    }
    if (v & 64) {
      U.move(g, b, O, ce);
      return;
    }
    if (U === $t) {
      n(P, b, O);
      for (let E = 0; E < H.length; E++)
        T(H[E], b, O, F);
      n(g.anchor, b, O);
      return;
    }
    if (U === fo) {
      tt(g, b, O);
      return;
    }
    if (F !== 2 && v & 1 && z)
      if (F === 0)
        z.beforeEnter(P), n(P, b, O), ge(() => z.enter(P), A);
      else {
        const { leave: E, delayLeave: G, afterLeave: nt } = z, dt = () => {
          g.ctx.isUnmounted ? i(P) : n(P, b, O);
        }, rt = () => {
          P._isLeaving && P[Kp](
            !0
            /* cancelled */
          ), E(P, () => {
            dt(), nt && nt();
          });
        };
        G ? G(P, dt, rt) : rt();
      }
    else
      n(P, b, O);
  }, W = (g, b, O, F = !1, A = !1) => {
    const {
      type: P,
      props: U,
      ref: z,
      children: H,
      dynamicChildren: v,
      shapeFlag: I,
      patchFlag: E,
      dirs: G,
      cacheIndex: nt
    } = g;
    if (E === -2 && (A = !1), z != null && (Ae(), Qn(z, null, O, g, !0), Re()), nt != null && (b.renderCache[nt] = void 0), I & 256) {
      b.ctx.deactivate(g);
      return;
    }
    const dt = I & 1 && G, rt = !ti(g);
    let at;
    if (rt && (at = U && U.onVnodeBeforeUnmount) && $e(at, b, g), I & 6)
      wt(g.component, O, F);
    else {
      if (I & 128) {
        g.suspense.unmount(O, F);
        return;
      }
      dt && Rs(g, null, b, "beforeUnmount"), I & 64 ? g.type.remove(
        g,
        b,
        O,
        ce,
        F
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== $t || E > 0 && E & 64) ? Ft(
        v,
        b,
        O,
        !1,
        !0
      ) : (P === $t && E & 384 || !A && I & 16) && Ft(H, b, O), F && J(g);
    }
    (rt && (at = U && U.onVnodeUnmounted) || dt) && ge(() => {
      at && $e(at, b, g), dt && Rs(g, null, b, "unmounted");
    }, O);
  }, J = (g) => {
    const { type: b, el: O, anchor: F, transition: A } = g;
    if (b === $t) {
      g.patchFlag > 0 && g.patchFlag & 2048 && A && !A.persisted ? g.children.forEach((U) => {
        U.type === be ? i(U.el) : J(U);
      }) : _t(O, F);
      return;
    }
    if (b === fo) {
      M(g);
      return;
    }
    const P = () => {
      i(O), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (g.shapeFlag & 1 && A && !A.persisted) {
      const { leave: U, delayLeave: z } = A, H = () => U(O, P);
      z ? z(g.el, P, H) : H();
    } else
      P();
  }, _t = (g, b) => {
    let O;
    for (; g !== b; )
      O = d(g), i(g), g = O;
    i(b);
  }, wt = (g, b, O) => {
    g.type.__hmrId && Ep(g);
    const { bum: F, scope: A, job: P, subTree: U, um: z, m: H, a: v } = g;
    Cl(H), Cl(v), F && yn(F), A.stop(), P && (P.flags |= 8, W(U, g, b, O)), z && ge(z, b), ge(() => {
      g.isUnmounted = !0;
    }, b), Vp(g);
  }, Ft = (g, b, O, F = !1, A = !1, P = 0) => {
    for (let U = P; U < g.length; U++)
      W(g[U], b, O, F, A);
  }, Te = (g) => {
    if (g.shapeFlag & 6)
      return Te(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const b = d(g.anchor || g.el), O = b && b[Up];
    return O ? d(O) : b;
  };
  let De = !1;
  const cs = (g, b, O) => {
    g == null ? b._vnode && W(b._vnode, null, null, !0) : m(
      b._vnode || null,
      g,
      b,
      null,
      null,
      null,
      O
    ), b._vnode = g, De || (De = !0, gl(), zu(), De = !1);
  }, ce = {
    p: m,
    um: W,
    m: T,
    r: J,
    mt: ct,
    mc: R,
    pc: bt,
    pbc: $,
    n: Te,
    o: e
  };
  return {
    render: cs,
    hydrate: void 0,
    createApp: gg(cs)
  };
}
function wr({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function $s({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ag(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (Q(n) && Q(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = gs(i[o]), a.el = r.el), !s && a.patchFlag !== -2 && Wr(r, a)), a.type === Ei && // avoid cached text nodes retaining detached dom nodes
      a.patchFlag !== -1 && (a.el = r.el), a.type === be && !a.el && (a.el = r.el), a.el && (a.el.__vnode = a);
    }
}
function Rg(e) {
  const t = e.slice(), s = [0];
  let n, i, o, r, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = s[s.length - 1], e[i] < c) {
        t[n] = i, s.push(n);
        continue;
      }
      for (o = 0, r = s.length - 1; o < r; )
        a = o + r >> 1, e[s[a]] < c ? o = a + 1 : r = a;
      c < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; )
    s[o] = r, r = t[r];
  return s;
}
function gf(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gf(t);
}
function Cl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const $g = Symbol.for("v-scx"), Lg = () => {
  {
    const e = ei($g);
    return e || B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Js(e, t, s) {
  return it(t) || B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), mf(e, t, s);
}
function mf(e, t, s = kt) {
  const { immediate: n, deep: i, flush: o, once: r } = s;
  t || (n !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Lt({}, s);
  a.onWarn = B;
  const l = t && n || !t && o !== "post";
  let c;
  if (gi) {
    if (o === "sync") {
      const h = Lg();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Qt, h.resume = Qt, h.pause = Qt, h;
    }
  }
  const u = Bt;
  a.call = (h, _, m) => Ye(h, u, _, m);
  let f = !1;
  o === "post" ? a.scheduler = (h) => {
    ge(h, u && u.suspense);
  } : o !== "sync" && (f = !0, a.scheduler = (h, _) => {
    _ ? h() : Jo(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const d = Sp(e, t, a);
  return gi && (c ? c.push(d) : l && d()), d;
}
function Fg(e, t, s) {
  const n = this.proxy, i = Et(e) ? e.includes(".") ? _f(n, e) : () => n[e] : e.bind(n, n);
  let o;
  it(t) ? o = t : (o = t.handler, s = t);
  const r = Ai(this), a = mf(i, o.bind(n), s);
  return r(), a;
}
function _f(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const jg = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${he(t)}Modifiers`];
function Vg(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || kt;
  {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(Vs(Ut(t)) in f)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Vs(Ut(t))}" prop.`
        );
      else {
        const d = u[t];
        it(d) && (d(...s) || B(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = s;
  const o = t.startsWith("update:"), r = o && jg(n, t.slice(7));
  r && (r.trim && (i = s.map((u) => Et(u) ? u.trim() : u)), r.number && (i = s.map(ko))), zp(e, t, i);
  {
    const u = t.toLowerCase();
    u !== t && n[Vs(u)] && B(
      `Event "${u}" is emitted in component ${sr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${he(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = n[a = Vs(t)] || // also try camelCase event handler (#2249)
  n[a = Vs(Ut(t))];
  !l && o && (l = n[a = Vs(he(t))]), l && Ye(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ye(
      c,
      e,
      6,
      i
    );
  }
}
const Ng = /* @__PURE__ */ new WeakMap();
function bf(e, t, s = !1) {
  const n = s ? Ng : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, a = !1;
  if (!it(e)) {
    const l = (c) => {
      const u = bf(c, t, !0);
      u && (a = !0, Lt(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (xt(e) && n.set(e, null), null) : (Q(o) ? o.forEach((l) => r[l] = null) : Lt(r, o), xt(e) && n.set(e, r), r);
}
function Qo(e, t) {
  return !e || !ki(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, he(t)) || mt(e, t));
}
let Kr = !1;
function Ro() {
  Kr = !0;
}
function Tl(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: d,
    setupState: h,
    ctx: _,
    inheritAttrs: m
  } = e, y = Io(e);
  let C, j;
  Kr = !1;
  try {
    if (s.shapeFlag & 4) {
      const M = i || n, X = hs.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(M, {
        get(S, k, R) {
          return B(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(S, k, R);
        }
      }) : M;
      C = Pe(
        c.call(
          X,
          M,
          u,
          hs.NODE_ENV !== "production" ? He(f) : f,
          h,
          d,
          _
        )
      ), j = a;
    } else {
      const M = t;
      hs.NODE_ENV !== "production" && a === f && Ro(), C = Pe(
        M.length > 1 ? M(
          hs.NODE_ENV !== "production" ? He(f) : f,
          hs.NODE_ENV !== "production" ? {
            get attrs() {
              return Ro(), He(a);
            },
            slots: r,
            emit: l
          } : { attrs: a, slots: r, emit: l }
        ) : M(
          hs.NODE_ENV !== "production" ? He(f) : f,
          null
        )
      ), j = t.props ? a : Hg(a);
    }
  } catch (M) {
    si.length = 0, Di(M, e, 1), C = vt(be);
  }
  let Y = C, tt;
  if (C.patchFlag > 0 && C.patchFlag & 2048 && ([Y, tt] = yf(C)), j && m !== !1) {
    const M = Object.keys(j), { shapeFlag: X } = Y;
    if (M.length) {
      if (X & 7)
        o && M.some(wo) && (j = zg(
          j,
          o
        )), Y = Ts(Y, j, !1, !0);
      else if (!Kr && Y.type !== be) {
        const S = Object.keys(a), k = [], R = [];
        for (let L = 0, $ = S.length; L < $; L++) {
          const q = S[L];
          ki(q) ? wo(q) || k.push(q[2].toLowerCase() + q.slice(3)) : R.push(q);
        }
        R.length && B(
          `Extraneous non-props attributes (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), k.length && B(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return s.dirs && (Dl(Y) || B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), Y = Ts(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(s.dirs) : s.dirs), s.transition && (Dl(Y) || B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ka(Y, s.transition)), tt ? tt(Y) : C = Y, Io(y), C;
}
const yf = (e) => {
  const t = e.children, s = e.dynamicChildren, n = Ia(t, !1);
  if (n) {
    if (n.patchFlag > 0 && n.patchFlag & 2048)
      return yf(n);
  } else return [e, void 0];
  const i = t.indexOf(n), o = s ? s.indexOf(n) : -1, r = (a) => {
    t[i] = a, s && (o > -1 ? s[o] = a : a.patchFlag > 0 && (e.dynamicChildren = [...s, a]));
  };
  return [Pe(n), r];
};
function Ia(e, t = !0) {
  let s;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (kn(i)) {
      if (i.type !== be || i.children === "v-if") {
        if (s)
          return;
        if (s = i, t && s.patchFlag > 0 && s.patchFlag & 2048)
          return Ia(s.children);
      }
    } else
      return;
  }
  return s;
}
const Hg = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || ki(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, zg = (e, t) => {
  const s = {};
  for (const n in e)
    (!wo(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
}, Dl = (e) => e.shapeFlag & 7 || e.type === be;
function Bg(e, t, s) {
  const { props: n, children: i, component: o } = e, { props: r, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if ((i || a) && ze || t.dirs || t.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Il(n, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (r[d] !== n[d] && !Qo(c, d))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? Il(n, r, c) : !0 : !!r;
  return !1;
}
function Il(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (t[o] !== e[o] && !Qo(s, o))
      return !0;
  }
  return !1;
}
function Ug({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const vf = (e) => e.__isSuspense;
function Wg(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Hu(e);
}
const $t = Symbol.for("v-fgt"), Ei = Symbol.for("v-txt"), be = Symbol.for("v-cmt"), fo = Symbol.for("v-stc"), si = [];
let me = null;
function N(e = !1) {
  si.push(me = e ? null : []);
}
function Kg() {
  si.pop(), me = si[si.length - 1] || null;
}
let pi = 1;
function $o(e, t = !1) {
  pi += e, e < 0 && me && t && (me.hasOnce = !0);
}
function xf(e) {
  return e.dynamicChildren = pi > 0 ? me || wn : null, Kg(), pi > 0 && me && me.push(e), e;
}
function K(e, t, s, n, i, o) {
  return xf(
    w(
      e,
      t,
      s,
      n,
      i,
      o,
      !0
    )
  );
}
function re(e, t, s, n, i) {
  return xf(
    vt(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jn(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const s = uo.get(t.type);
    if (s && s.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Gg = (...e) => Yg(
  ...e
), wf = ({ key: e }) => e ?? null, ho = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Et(e) || Dt(e) || it(e) ? { i: te, r: e, k: t, f: !!s } : e : null);
function w(e, t = null, s = null, n = 0, i = null, o = e === $t ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wf(t),
    ref: t && ho(t),
    scopeId: Yu,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: te
  };
  return a ? (Pa(l, s), o & 128 && e.normalize(l)) : s && (l.shapeFlag |= Et(s) ? 8 : 16), l.key !== l.key && B("VNode created with invalid key (NaN). VNode type:", l.type), pi > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && me.push(l), l;
}
const vt = Gg;
function Yg(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === Qu) && (e || B(`Invalid vnode type when creating vnode: ${e}.`), e = be), kn(e)) {
    const a = Ts(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Pa(a, s), pi > 0 && !o && me && (a.shapeFlag & 6 ? me[me.indexOf(e)] = a : me.push(a)), a.patchFlag = -2, a;
  }
  if (Mf(e) && (e = e.__vccOpts), t) {
    t = qg(t);
    let { class: a, style: l } = t;
    a && !Et(a) && (t.class = is(a)), xt(l) && (sn(l) && !Q(l) && (l = Lt({}, l)), t.style = ms(l));
  }
  const r = Et(e) ? 1 : vf(e) ? 128 : Wp(e) ? 64 : xt(e) ? 4 : it(e) ? 2 : 0;
  return r & 4 && sn(e) && (e = ot(e), B(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), w(
    e,
    t,
    s,
    n,
    i,
    r,
    o,
    !0
  );
}
function qg(e) {
  return e ? sn(e) || cf(e) ? Lt({}, e) : e : null;
}
function Ts(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, c = t ? Xg(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && wf(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? Q(o) ? o.concat(ho(t)) : [o, ho(t)] : ho(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r === -1 && Q(a) ? a.map(Sf) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $t ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ts(e.ssContent),
    ssFallback: e.ssFallback && Ts(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && ka(
    u,
    l.clone(u)
  ), u;
}
function Sf(e) {
  const t = Ts(e);
  return Q(e.children) && (t.children = e.children.map(Sf)), t;
}
function Os(e = " ", t = 0) {
  return vt(Ei, null, e, t);
}
function Nt(e = "", t = !1) {
  return t ? (N(), re(be, null, e)) : vt(be, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? vt(be) : Q(e) ? vt(
    $t,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? gs(e) : vt(Ei, null, String(e));
}
function gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ts(e);
}
function Pa(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Pa(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !cf(t) ? t._ctx = te : i === 3 && te && (te.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else it(t) ? (t = { default: t, _ctx: te }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Os(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Xg(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = is([t.class, n.class]));
      else if (i === "style")
        t.style = ms([t.style, n.style]);
      else if (ki(i)) {
        const o = t[i], r = n[i];
        r && o !== r && !(Q(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function $e(e, t, s, n = null) {
  Ye(e, t, 7, [
    s,
    n
  ]);
}
const Jg = rf();
let Zg = 0;
function Qg(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Jg, o = {
    uid: Zg++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ff(n, i),
    emitsOptions: bf(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: kt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: kt,
    data: kt,
    props: kt,
    attrs: kt,
    slots: kt,
    refs: kt,
    setupState: kt,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
  return o.ctx = og(o), o.root = t ? t.root : o, o.emit = Vg.bind(null, o), e.ce && e.ce(o), o;
}
let Bt = null;
const tr = () => Bt || te;
let Lo, Gr;
{
  const e = Mi(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  Lo = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Bt = s
  ), Gr = t(
    "__VUE_SSR_SETTERS__",
    (s) => gi = s
  );
}
const Ai = (e) => {
  const t = Bt;
  return Lo(e), e.scope.on(), () => {
    e.scope.off(), Lo(t);
  };
}, Pl = () => {
  Bt && Bt.scope.off(), Lo(null);
}, tm = /* @__PURE__ */ as("slot,component");
function Yr(e, { isNativeTag: t }) {
  (tm(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function kf(e) {
  return e.vnode.shapeFlag & 4;
}
let gi = !1;
function em(e, t = !1, s = !1) {
  t && Gr(t);
  const { props: n, children: i } = e.vnode, o = kf(e);
  _g(e, n, o, t), Tg(e, i, s || t);
  const r = o ? sm(e, t) : void 0;
  return t && Gr(!1), r;
}
function sm(e, t) {
  var s;
  const n = e.type;
  {
    if (n.name && Yr(n.name, e.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let r = 0; r < o.length; r++)
        Yr(o[r], e.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let r = 0; r < o.length; r++)
        qu(o[r]);
    }
    n.compilerOptions && nm() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sf), rg(e);
  const { setup: i } = n;
  if (i) {
    Ae();
    const o = e.setupContext = i.length > 1 ? rm(e) : null, r = Ai(e), a = En(
      i,
      e,
      0,
      [
        He(e.props),
        o
      ]
    ), l = ha(a);
    if (Re(), r(), (l || e.sp) && !ti(e) && Xu(e), l) {
      if (a.then(Pl, Pl), t)
        return a.then((c) => {
          El(e, c, t);
        }).catch((c) => {
          Di(c, e, 0);
        });
      if (e.asyncDep = a, !e.suspense) {
        const c = (s = n.name) != null ? s : "Anonymous";
        B(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      El(e, a, t);
  } else
    Of(e, t);
}
function El(e, t, s) {
  it(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) ? (kn(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Lu(t), ag(e)) : t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Of(e, s);
}
const nm = () => !0;
function Of(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Qt);
  {
    const i = Ai(e);
    Ae();
    try {
      cg(e);
    } finally {
      Re(), i();
    }
  }
  !n.render && e.render === Qt && !t && (n.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", n));
}
const im = {
  get(e, t) {
    return Ro(), zt(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
};
function om(e) {
  return new Proxy(e.slots, {
    get(t, s) {
      return zt(e, "get", "$slots"), t[s];
    }
  });
}
function rm(e) {
  const t = (s) => {
    if (e.exposed && B("expose() should be called only once per setup()."), s != null) {
      let n = typeof s;
      n === "object" && (Q(s) ? n = "array" : Dt(s) && (n = "ref")), n !== "object" && B(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    e.exposed = s || {};
  };
  {
    let s, n;
    return Object.freeze({
      get attrs() {
        return s || (s = new Proxy(e.attrs, im));
      },
      get slots() {
        return n || (n = om(e));
      },
      get emit() {
        return (i, ...o) => e.emit(i, ...o);
      },
      expose: t
    });
  }
}
function er(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lu(bs(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in qs)
        return qs[s](e);
    },
    has(t, s) {
      return s in t || s in qs;
    }
  })) : e.proxy;
}
const am = /(?:^|[-_])\w/g, lm = (e) => e.replace(am, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ea(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sr(e, t, s = !1) {
  let n = Ea(t);
  if (!n && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (n = i[1]);
  }
  if (!n && e && e.parent) {
    const i = (o) => {
      for (const r in o)
        if (o[r] === t)
          return r;
    };
    n = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return n ? lm(n) : s ? "App" : "Anonymous";
}
function Mf(e) {
  return it(e) && "__vccOpts" in e;
}
const Rt = (e, t) => {
  const s = xp(e, t, gi);
  {
    const n = tr();
    n && n.appContext.config.warnRecursiveComputed && (s._warnRecursive = !0);
  }
  return s;
};
function On(e, t, s) {
  const n = (o, r, a) => {
    $o(-1);
    try {
      return vt(o, r, a);
    } finally {
      $o(1);
    }
  }, i = arguments.length;
  return i === 2 ? xt(t) && !Q(t) ? kn(t) ? n(e, null, [t]) : n(e, t) : n(e, null, t) : (i > 3 ? s = Array.prototype.slice.call(arguments, 2) : i === 3 && kn(s) && (s = [s]), n(e, t, s));
}
function cm() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, s = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!xt(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (Dt(f)) {
        Ae();
        const d = f.value;
        return Re(), [
          "div",
          {},
          ["span", e, u(f)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (Ue(f))
          return [
            "div",
            {},
            ["span", e, ae(f) ? "ShallowReactive" : "Reactive"],
            "<",
            a(f),
            `>${Ge(f) ? " (readonly)" : ""}`
          ];
        if (Ge(f))
          return [
            "div",
            {},
            ["span", e, ae(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...o(f.$)
        ];
    }
  };
  function o(f) {
    const d = [];
    f.type.props && f.props && d.push(r("props", ot(f.props))), f.setupState !== kt && d.push(r("setup", f.setupState)), f.data !== kt && d.push(r("data", ot(f.data)));
    const h = l(f, "computed");
    h && d.push(r("computed", h));
    const _ = l(f, "inject");
    return _ && d.push(r("injected", _)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), d;
  }
  function r(f, d) {
    return d = Lt({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((h) => [
          "div",
          {},
          ["span", n, h + ": "],
          a(d[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(f, d = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", s, JSON.stringify(f)] : typeof f == "boolean" ? ["span", n, f] : xt(f) ? ["object", { object: d ? ot(f) : f }] : ["span", s, String(f)];
  }
  function l(f, d) {
    const h = f.type;
    if (it(h))
      return;
    const _ = {};
    for (const m in f.ctx)
      c(h, m, d) && (_[m] = f.ctx[m]);
    return _;
  }
  function c(f, d, h) {
    const _ = f[h];
    if (Q(_) && _.includes(d) || xt(_) && d in _ || f.extends && c(f.extends, d, h) || f.mixins && f.mixins.some((m) => c(m, d, h)))
      return !0;
  }
  function u(f) {
    return ae(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const qr = "3.5.21", ye = B;
let Xr;
const Al = typeof window < "u" && window.trustedTypes;
if (Al)
  try {
    Xr = /* @__PURE__ */ Al.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ye(`Error creating trusted types policy: ${e}`);
  }
const Cf = Xr ? (e) => Xr.createHTML(e) : (e) => e, um = "http://www.w3.org/2000/svg", fm = "http://www.w3.org/1998/Math/MathML", ts = typeof document < "u" ? document : null, Rl = ts && /* @__PURE__ */ ts.createElement("template"), dm = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? ts.createElementNS(um, e) : t === "mathml" ? ts.createElementNS(fm, e) : s ? ts.createElement(e, { is: s }) : ts.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => ts.createTextNode(e),
  createComment: (e) => ts.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ts.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, o) {
    const r = s ? s.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Rl.innerHTML = Cf(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Rl.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, s);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, hm = Symbol("_vtc");
function pm(e, t, s) {
  const n = e[hm];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const $l = Symbol("_vod"), gm = Symbol("_vsh"), mm = Symbol("CSS_VAR_TEXT"), _m = /(?:^|;)\s*display\s*:/;
function bm(e, t, s) {
  const n = e.style, i = Et(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (Et(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          s[a] == null && po(n, a, "");
        }
      else
        for (const r in t)
          s[r] == null && po(n, r, "");
    for (const r in s)
      r === "display" && (o = !0), po(n, r, s[r]);
  } else if (i) {
    if (t !== s) {
      const r = n[mm];
      r && (s += ";" + r), n.cssText = s, o = _m.test(s);
    }
  } else t && e.removeAttribute("style");
  $l in e && (e[$l] = o ? n.display : "", e[gm] && (n.display = "none"));
}
const ym = /[^\\];\s*$/, Ll = /\s*!important$/;
function po(e, t, s) {
  if (Q(s))
    s.forEach((n) => po(e, t, n));
  else if (s == null && (s = ""), ym.test(s) && ye(
    `Unexpected semicolon at the end of '${t}' style value: '${s}'`
  ), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = vm(e, t);
    Ll.test(s) ? e.setProperty(
      he(n),
      s.replace(Ll, ""),
      "important"
    ) : e[n] = s;
  }
}
const Fl = ["Webkit", "Moz", "ms"], Sr = {};
function vm(e, t) {
  const s = Sr[t];
  if (s)
    return s;
  let n = Ut(t);
  if (n !== "filter" && n in e)
    return Sr[t] = n;
  n = en(n);
  for (let i = 0; i < Fl.length; i++) {
    const o = Fl[i] + n;
    if (o in e)
      return Sr[t] = o;
  }
  return t;
}
const jl = "http://www.w3.org/1999/xlink";
function Vl(e, t, s, n, i, o = Kh(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(jl, t.slice(6, t.length)) : e.setAttributeNS(jl, t, s) : s == null || o && !fu(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ke(s) ? String(s) : s
  );
}
function Nl(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Cf(s) : s);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (a !== l || !("_value" in e)) && (e.value = l), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean" ? s = fu(s) : s == null && a === "string" ? (s = "", r = !0) : a === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch (a) {
    r || ye(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${s} is invalid.`,
      a
    );
  }
  r && e.removeAttribute(i || t);
}
function _s(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function xm(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Hl = Symbol("_vei");
function wm(e, t, s, n, i = null) {
  const o = e[Hl] || (e[Hl] = {}), r = o[t];
  if (n && r)
    r.value = Bl(n, t);
  else {
    const [a, l] = Sm(t);
    if (n) {
      const c = o[t] = Mm(
        Bl(n, t),
        i
      );
      _s(e, a, c, l);
    } else r && (xm(e, a, r, l), o[t] = void 0);
  }
}
const zl = /(?:Once|Passive|Capture)$/;
function Sm(e) {
  let t;
  if (zl.test(e)) {
    t = {};
    let n;
    for (; n = e.match(zl); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let kr = 0;
const km = /* @__PURE__ */ Promise.resolve(), Om = () => kr || (km.then(() => kr = 0), kr = Date.now());
function Mm(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ye(
      Cm(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Om(), s;
}
function Bl(e, t) {
  return it(e) || Q(e) ? e : (ye(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Qt);
}
function Cm(e, t) {
  if (Q(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Ul = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tm = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? pm(e, n, r) : t === "style" ? bm(e, s, n) : ki(t) ? wo(t) || wm(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dm(e, t, n, r)) ? (Nl(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vl(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Et(n)) ? Nl(e, Ut(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Vl(e, t, n, r));
};
function Dm(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ul(t) && it(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ul(t) && Et(s) ? !1 : t in e;
}
const Wl = {};
// @__NO_SIDE_EFFECTS__
function Im(e, t, s) {
  let n = /* @__PURE__ */ Me(e, t);
  Ko(n) && (n = Lt({}, n, t));
  class i extends Aa {
    constructor(r) {
      super(n, r, s);
    }
  }
  return i.def = n, i;
}
const Pm = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Aa extends Pm {
  constructor(t, s = {}, n = Zr) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== Zr ? this._root = this.shadowRoot : (this.shadowRoot && ye(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Aa) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Cs(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const i of n)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: r } = n;
      let a;
      if (o && !Q(o))
        for (const l in o) {
          const c = o[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = cl(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ut(l)] = !0);
        }
      this._numberProps = a, this._resolveProps(n), this.shadowRoot ? this._applyStyles(r) : r && ye(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then((n) => {
      n.configureApp = this._def.configureApp, t(this._def = n, !0);
    }) : t(this._def);
  }
  _mount(t) {
    t.name || (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        mt(this, n) ? ye(`Exposed property "${n}" already exists on custom element.`) : Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ct(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = Q(s) ? s : Object.keys(s || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i]);
    for (const i of n.map(Ut))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let n = s ? this.getAttribute(t) : Wl;
    const i = Ut(t);
    s && this._numberProps && this._numberProps[i] && (n = cl(n)), this._setProp(i, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, i = !1) {
    if (s !== this._props[t] && (s === Wl ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), i && this._instance && this._update(), n)) {
      const o = this._ob;
      o && o.disconnect(), s === !0 ? this.setAttribute(he(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(he(t), s + "") : s || this.removeAttribute(he(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Fm(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = vt(this._def, Lt(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0, n.ceReload = (o) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      };
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            Ko(r[0]) ? Lt({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      n.emit = (o, ...r) => {
        i(o, r), he(o) !== o && i(he(o), r);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const o = document.createElement("style");
      if (n && o.setAttribute("nonce", n), o.textContent = t[i], this.shadowRoot.prepend(o), s) {
        if (s.__hmrId) {
          this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
          let r = this._childStyles.get(s.__hmrId);
          r || this._childStyles.set(s.__hmrId, r = []), r.push(o);
        }
      } else
        (this._styles || (this._styles = [])).push(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], o = i.getAttribute("name") || "default", r = this._slots[o], a = i.parentNode;
      if (r)
        for (const l of r) {
          if (s && l.nodeType === 1) {
            const c = s + "-s", u = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let f;
            for (; f = u.nextNode(); )
              f.setAttribute(c, "");
          }
          a.insertBefore(l, i);
        }
      else
        for (; i.firstChild; ) a.insertBefore(i.firstChild, i);
      a.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (this._styleChildren.delete(t), this._childStyles && t.__hmrId) {
      const s = this._childStyles.get(t.__hmrId);
      s && (s.forEach((n) => this._root.removeChild(n)), s.length = 0);
    }
  }
}
const Mn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (s) => yn(t, s) : t;
};
function Em(e) {
  e.target.composing = !0;
}
function Kl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const os = Symbol("_assign"), ie = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[os] = Mn(i);
    const o = n || i.props && i.props.type === "number";
    _s(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let a = e.value;
      s && (a = a.trim()), o && (a = ko(a)), e[os](a);
    }), s && _s(e, "change", () => {
      e.value = e.value.trim();
    }), t || (_s(e, "compositionstart", Em), _s(e, "compositionend", Kl), _s(e, "change", Kl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[os] = Mn(r), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? ko(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === l) || (e.value = l));
  }
}, Jr = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e[os] = Mn(s), _s(e, "change", () => {
      const n = e._modelValue, i = mi(e), o = e.checked, r = e[os];
      if (Q(n)) {
        const a = ma(n, i), l = a !== -1;
        if (o && !l)
          r(n.concat(i));
        else if (!o && l) {
          const c = [...n];
          c.splice(a, 1), r(c);
        }
      } else if (Pn(n)) {
        const a = new Set(n);
        o ? a.add(i) : a.delete(i), r(a);
      } else
        r(Tf(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Gl,
  beforeUpdate(e, t, s) {
    e[os] = Mn(s), Gl(e, t, s);
  }
};
function Gl(e, { value: t, oldValue: s }, n) {
  e._modelValue = t;
  let i;
  if (Q(t))
    i = ma(t, n.props.value) > -1;
  else if (Pn(t))
    i = t.has(n.props.value);
  else {
    if (t === s) return;
    i = Ci(t, Tf(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const ni = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const i = Pn(t);
    _s(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => s ? ko(mi(r)) : mi(r)
      );
      e[os](
        e.multiple ? i ? new Set(o) : o : o[0]
      ), e._assigning = !0, Cs(() => {
        e._assigning = !1;
      });
    }), e[os] = Mn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Yl(e, t);
  },
  beforeUpdate(e, t, s) {
    e[os] = Mn(s);
  },
  updated(e, { value: t }) {
    e._assigning || Yl(e, t);
  }
};
function Yl(e, t) {
  const s = e.multiple, n = Q(t);
  if (s && !n && !Pn(t)) {
    ye(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, o = e.options.length; i < o; i++) {
    const r = e.options[i], a = mi(r);
    if (s)
      if (n) {
        const l = typeof a;
        l === "string" || l === "number" ? r.selected = t.some((c) => String(c) === String(a)) : r.selected = ma(t, a) > -1;
      } else
        r.selected = t.has(a);
    else if (Ci(mi(r), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function mi(e) {
  return "_value" in e ? e._value : e.value;
}
function Tf(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
const Am = ["ctrl", "shift", "alt", "meta"], Rm = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Am.some((s) => e[`${s}Key`] && !t.includes(s))
}, _e = (e, t) => {
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const a = Rm[t[r]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, $m = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yt = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const o = he(i.key);
    if (t.some(
      (r) => r === o || $m[r] === o
    ))
      return e(i);
  });
}, Lm = /* @__PURE__ */ Lt({ patchProp: Tm }, dm);
let ql;
function Df() {
  return ql || (ql = Pg(Lm));
}
const Fm = (...e) => {
  Df().render(...e);
}, Zr = (...e) => {
  const t = Df().createApp(...e);
  Vm(t), Nm(t);
  const { mount: s } = t;
  return t.mount = (n) => {
    const i = Hm(n);
    if (!i) return;
    const o = t._component;
    !it(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, jm(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function jm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Vm(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => zh(t) || Bh(t) || Uh(t),
    writable: !1
  });
}
function Nm(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ye(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const s = e.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ye(n), s;
      },
      set() {
        ye(n);
      }
    });
  }
}
function Hm(e) {
  if (Et(e)) {
    const t = document.querySelector(e);
    return t || ye(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ye(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function zm() {
  cm();
}
zm();
function Wi(e, t, s) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, s), s) : (e[t] = s, s);
}
function Or(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Bm() {
  return If().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function If() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Um = typeof Proxy == "function", Wm = "devtools-plugin:setup", Km = "plugin:settings:set";
let gn, Qr;
function Gm() {
  var e;
  return gn !== void 0 || (typeof window < "u" && window.performance ? (gn = !0, Qr = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (gn = !0, Qr = globalThis.perf_hooks.performance) : gn = !1), gn;
}
function Ym() {
  return Gm() ? Qr.now() : Date.now();
}
class qm {
  constructor(t, s) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = s;
    const n = {};
    if (t.settings)
      for (const r in t.settings) {
        const a = t.settings[r];
        n[r] = a.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, n);
    try {
      const r = localStorage.getItem(i), a = JSON.parse(r);
      Object.assign(o, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(r) {
        try {
          localStorage.setItem(i, JSON.stringify(r));
        } catch {
        }
        o = r;
      },
      now() {
        return Ym();
      }
    }, s && s.on(Km, (r, a) => {
      r === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const s of this.onQueue)
      this.target.on[s.method](...s.args);
    for (const s of this.targetQueue)
      s.resolve(await this.target[s.method](...s.args));
  }
}
function Pf(e, t) {
  const s = e, n = If(), i = Bm(), o = Um && s.enableEarlyProxy;
  if (i && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(Wm, e, t);
  else {
    const r = o ? new qm(s, i) : null;
    (n.__VUE_DEVTOOLS_PLUGINS__ = n.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: s,
      setupFn: t,
      proxy: r
    }), r && t(r.proxiedTarget);
  }
}
let ta;
const _i = (e) => ta = e, Ef = Symbol("pinia");
function on(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var We;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(We || (We = {}));
const Zs = typeof window < "u", Xl = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Xm(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ra(e, t, s) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = function() {
    $f(n.response, t, s);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function Af(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function go(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const s = document.createEvent("MouseEvents");
    s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(s);
  }
}
const mo = typeof navigator == "object" ? navigator : { userAgent: "" }, Rf = /Macintosh/.test(mo.userAgent) && /AppleWebKit/.test(mo.userAgent) && !/Safari/.test(mo.userAgent), $f = Zs ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Rf ? Jm : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in mo ? Zm : (
      // Fallback to using FileReader and a popup
      Qm
    )
  )
) : () => {
};
function Jm(e, t = "download", s) {
  const n = document.createElement("a");
  n.download = t, n.rel = "noopener", typeof e == "string" ? (n.href = e, n.origin !== location.origin ? Af(n.href) ? Ra(e, t, s) : (n.target = "_blank", go(n)) : go(n)) : (n.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(n.href);
  }, 4e4), setTimeout(function() {
    go(n);
  }, 0));
}
function Zm(e, t = "download", s) {
  if (typeof e == "string")
    if (Af(e))
      Ra(e, t, s);
    else {
      const n = document.createElement("a");
      n.href = e, n.target = "_blank", setTimeout(function() {
        go(n);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Xm(e, s), t);
}
function Qm(e, t, s, n) {
  if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof e == "string")
    return Ra(e, t, s);
  const i = e.type === "application/octet-stream", o = /constructor/i.test(String(Xl.HTMLElement)) || "safari" in Xl, r = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((r || i && o || Rf) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let l = a.result;
      if (typeof l != "string")
        throw n = null, new Error("Wrong reader.result type");
      l = r ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = l : location.assign(l), n = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    n ? n.location.assign(a) : location.href = a, n = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function Ht(e, t) {
  const s = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(s, t) : t === "error" ? console.error(s) : t === "warn" ? console.warn(s) : console.log(s);
}
function $a(e) {
  return "_a" in e && "install" in e;
}
function Lf() {
  if (!("clipboard" in navigator))
    return Ht("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Ff(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Ht('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function t_(e) {
  if (!Lf())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Ht("Global state copied to clipboard.");
    } catch (t) {
      if (Ff(t))
        return;
      Ht("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function e_(e) {
  if (!Lf())
    try {
      jf(e, JSON.parse(await navigator.clipboard.readText())), Ht("Global state pasted from clipboard.");
    } catch (t) {
      if (Ff(t))
        return;
      Ht("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function s_(e) {
  try {
    $f(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Ht("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ze;
function n_() {
  Ze || (Ze = document.createElement("input"), Ze.type = "file", Ze.accept = ".json");
  function e() {
    return new Promise((t, s) => {
      Ze.onchange = async () => {
        const n = Ze.files;
        if (!n)
          return t(null);
        const i = n.item(0);
        return t(i ? { text: await i.text(), file: i } : null);
      }, Ze.oncancel = () => t(null), Ze.onerror = s, Ze.click();
    });
  }
  return e;
}
async function i_(e) {
  try {
    const s = await n_()();
    if (!s)
      return;
    const { text: n, file: i } = s;
    jf(e, JSON.parse(n)), Ht(`Global state imported from "${i.name}".`);
  } catch (t) {
    Ht("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function jf(e, t) {
  for (const s in t) {
    const n = e.state.value[s];
    n ? Object.assign(n, t[s]) : e.state.value[s] = t[s];
  }
}
function Ie(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Vf = "🍍 Pinia (root)", _o = "_root";
function o_(e) {
  return $a(e) ? {
    id: _o,
    label: Vf
  } : {
    id: e.$id,
    label: e.$id
  };
}
function r_(e) {
  if ($a(e)) {
    const s = Array.from(e._s.keys()), n = e._s;
    return {
      state: s.map((o) => ({
        editable: !0,
        key: o,
        value: e.state.value[o]
      })),
      getters: s.filter((o) => n.get(o)._getters).map((o) => {
        const r = n.get(o);
        return {
          editable: !1,
          key: o,
          value: r._getters.reduce((a, l) => (a[l] = r[l], a), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((s) => ({
      editable: !0,
      key: s,
      value: e.$state[s]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((s) => ({
    editable: !1,
    key: s,
    value: e[s]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((s) => ({
    editable: !0,
    key: s,
    value: e[s]
  }))), t;
}
function a_(e) {
  return e ? Array.isArray(e) ? e.reduce((t, s) => (t.keys.push(s.key), t.operations.push(s.type), t.oldValue[s.key] = s.oldValue, t.newValue[s.key] = s.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Ie(e.type),
    key: Ie(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function l_(e) {
  switch (e) {
    case We.direct:
      return "mutation";
    case We.patchFunction:
      return "$patch";
    case We.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let xn = !0;
const bo = [], Hs = "pinia:mutations", Zt = "pinia", { assign: c_ } = Object, Fo = (e) => "🍍 " + e;
function u_(e, t) {
  Pf({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: bo,
    app: e
  }, (s) => {
    typeof s.now != "function" && Ht("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.addTimelineLayer({
      id: Hs,
      label: "Pinia 🍍",
      color: 15064968
    }), s.addInspector({
      id: Zt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            t_(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await e_(t), s.sendInspectorTree(Zt), s.sendInspectorState(Zt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            s_(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await i_(t), s.sendInspectorTree(Zt), s.sendInspectorState(Zt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (n) => {
            const i = t._s.get(n);
            i ? typeof i.$reset != "function" ? Ht(`Cannot reset "${n}" store because it doesn't have a "$reset" method implemented.`, "warn") : (i.$reset(), Ht(`Store "${n}" reset.`)) : Ht(`Cannot reset "${n}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), s.on.inspectComponent((n, i) => {
      const o = n.componentInstance && n.componentInstance.proxy;
      if (o && o._pStores) {
        const r = n.componentInstance.proxy._pStores;
        Object.values(r).forEach((a) => {
          n.instanceData.state.push({
            type: Fo(a.$id),
            key: "state",
            editable: !0,
            value: a._isOptionsAPI ? {
              _custom: {
                value: ot(a.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => a.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(a.$state).reduce((l, c) => (l[c] = a.$state[c], l), {})
            )
          }), a._getters && a._getters.length && n.instanceData.state.push({
            type: Fo(a.$id),
            key: "getters",
            editable: !1,
            value: a._getters.reduce((l, c) => {
              try {
                l[c] = a[c];
              } catch (u) {
                l[c] = u;
              }
              return l;
            }, {})
          });
        });
      }
    }), s.on.getInspectorTree((n) => {
      if (n.app === e && n.inspectorId === Zt) {
        let i = [t];
        i = i.concat(Array.from(t._s.values())), n.rootNodes = (n.filter ? i.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(n.filter.toLowerCase()) : Vf.toLowerCase().includes(n.filter.toLowerCase())) : i).map(o_);
      }
    }), globalThis.$pinia = t, s.on.getInspectorState((n) => {
      if (n.app === e && n.inspectorId === Zt) {
        const i = n.nodeId === _o ? t : t._s.get(n.nodeId);
        if (!i)
          return;
        i && (n.nodeId !== _o && (globalThis.$store = ot(i)), n.state = r_(i));
      }
    }), s.on.editInspectorState((n, i) => {
      if (n.app === e && n.inspectorId === Zt) {
        const o = n.nodeId === _o ? t : t._s.get(n.nodeId);
        if (!o)
          return Ht(`store "${n.nodeId}" not found`, "error");
        const { path: r } = n;
        $a(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), xn = !1, n.set(o, r, n.state.value), xn = !0;
      }
    }), s.on.editComponentState((n) => {
      if (n.type.startsWith("🍍")) {
        const i = n.type.replace(/^🍍\s*/, ""), o = t._s.get(i);
        if (!o)
          return Ht(`store "${i}" not found`, "error");
        const { path: r } = n;
        if (r[0] !== "state")
          return Ht(`Invalid path for store "${i}":
${r}
Only state can be modified.`);
        r[0] = "$state", xn = !1, n.set(o, r, n.state.value), xn = !0;
      }
    });
  });
}
function f_(e, t) {
  bo.includes(Fo(t.$id)) || bo.push(Fo(t.$id)), Pf({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: bo,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (s) => {
    const n = typeof s.now == "function" ? s.now.bind(s) : Date.now;
    t.$onAction(({ after: r, onError: a, name: l, args: c }) => {
      const u = Nf++;
      s.addTimelineEvent({
        layerId: Hs,
        event: {
          time: n(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: Ie(t.$id),
            action: Ie(l),
            args: c
          },
          groupId: u
        }
      }), r((f) => {
        ys = void 0, s.addTimelineEvent({
          layerId: Hs,
          event: {
            time: n(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: Ie(t.$id),
              action: Ie(l),
              args: c,
              result: f
            },
            groupId: u
          }
        });
      }), a((f) => {
        ys = void 0, s.addTimelineEvent({
          layerId: Hs,
          event: {
            time: n(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: Ie(t.$id),
              action: Ie(l),
              args: c,
              error: f
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((r) => {
      Js(() => Ct(t[r]), (a, l) => {
        s.notifyComponentUpdate(), s.sendInspectorState(Zt), xn && s.addTimelineEvent({
          layerId: Hs,
          event: {
            time: n(),
            title: "Change",
            subtitle: r,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: ys
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: r, type: a }, l) => {
      if (s.notifyComponentUpdate(), s.sendInspectorState(Zt), !xn)
        return;
      const c = {
        time: n(),
        title: l_(a),
        data: c_({ store: Ie(t.$id) }, a_(r)),
        groupId: ys
      };
      a === We.patchFunction ? c.subtitle = "⤵️" : a === We.patchObject ? c.subtitle = "🧩" : r && !Array.isArray(r) && (c.subtitle = r.type), r && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: r
        }
      }), s.addTimelineEvent({
        layerId: Hs,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const i = t._hotUpdate;
    t._hotUpdate = bs((r) => {
      i(r), s.addTimelineEvent({
        layerId: Hs,
        event: {
          time: n(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Ie(t.$id),
            info: Ie("HMR update")
          }
        }
      }), s.notifyComponentUpdate(), s.sendInspectorTree(Zt), s.sendInspectorState(Zt);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), s.notifyComponentUpdate(), s.sendInspectorTree(Zt), s.sendInspectorState(Zt), s.getSettings().logStoreChanges && Ht(`Disposed "${t.$id}" store 🗑`);
    }, s.notifyComponentUpdate(), s.sendInspectorTree(Zt), s.sendInspectorState(Zt), s.getSettings().logStoreChanges && Ht(`"${t.$id}" store installed 🆕`);
  });
}
let Nf = 0, ys;
function Jl(e, t, s) {
  const n = t.reduce((i, o) => (i[o] = ot(e)[o], i), {});
  for (const i in n)
    e[i] = function() {
      const o = Nf, r = s ? new Proxy(e, {
        get(...l) {
          return ys = o, Reflect.get(...l);
        },
        set(...l) {
          return ys = o, Reflect.set(...l);
        }
      }) : e;
      ys = o;
      const a = n[i].apply(r, arguments);
      return ys = void 0, a;
    };
}
function d_({ app: e, store: t, options: s }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!s.state, !t._p._testing) {
      Jl(t, Object.keys(s.actions), t._isOptionsAPI);
      const n = t._hotUpdate;
      ot(t)._hotUpdate = function(i) {
        n.apply(this, arguments), Jl(t, Object.keys(i._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    f_(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function h_() {
  const e = gu(!0), t = e.run(() => gt({}));
  let s = [], n = [];
  const i = bs({
    install(o) {
      _i(i), i._a = o, o.provide(Ef, i), o.config.globalProperties.$pinia = i, Zs && u_(o, i), n.forEach((r) => s.push(r)), n = [];
    },
    use(o) {
      return this._a ? s.push(o) : n.push(o), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Zs && typeof Proxy < "u" && i.use(d_), i;
}
function Hf(e, t) {
  for (const s in t) {
    const n = t[s];
    if (!(s in e))
      continue;
    const i = e[s];
    on(i) && on(n) && !Dt(n) && !Ue(n) ? e[s] = Hf(i, n) : e[s] = n;
  }
  return e;
}
const p_ = () => {
};
function Zl(e, t, s, n = p_) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && mu() && qh(i), i;
}
function mn(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const g_ = (e) => e(), Ql = Symbol(), Mr = Symbol();
function ea(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    on(i) && on(n) && e.hasOwnProperty(s) && !Dt(n) && !Ue(n) ? e[s] = ea(i, n) : e[s] = n;
  }
  return e;
}
const m_ = Symbol("pinia:skipHydration");
function __(e) {
  return !on(e) || !e.hasOwnProperty(m_);
}
const { assign: Se } = Object;
function tc(e) {
  return !!(Dt(e) && e.effect);
}
function ec(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, a = s.state.value[e];
  let l;
  function c() {
    !a && !n && (s.state.value[e] = i ? i() : {});
    const u = /* use ref() to unwrap refs inside state TODO: check if this is still necessary */ pl(n ? gt(i ? i() : {}).value : s.state.value[e]);
    return Se(u, o, Object.keys(r || {}).reduce((f, d) => (d in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), f[d] = bs(Rt(() => {
      _i(s);
      const h = s._s.get(e);
      return r[d].call(h, h);
    })), f), {}));
  }
  return l = sa(e, c, t, s, n, !0), l;
}
function sa(e, t, s = {}, n, i, o) {
  let r;
  const a = Se({ actions: {} }, s);
  if (!n._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  l.onTrigger = (L) => {
    c ? h = L : c == !1 && !S._hotUpdating && (Array.isArray(h) ? h.push(L) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  };
  let c, u, f = [], d = [], h;
  const _ = n.state.value[e];
  !o && !_ && !i && (n.state.value[e] = {});
  const m = gt({});
  let y;
  function C(L) {
    let $;
    c = u = !1, h = [], typeof L == "function" ? (L(n.state.value[e]), $ = {
      type: We.patchFunction,
      storeId: e,
      events: h
    }) : (ea(n.state.value[e], L), $ = {
      type: We.patchObject,
      payload: L,
      storeId: e,
      events: h
    });
    const q = y = Symbol();
    Cs().then(() => {
      y === q && (c = !0);
    }), u = !0, mn(f, $, n.state.value[e]);
  }
  const j = o ? function() {
    const { state: $ } = s, q = $ ? $() : {};
    this.$patch((ht) => {
      Se(ht, q);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function Y() {
    r.stop(), f = [], d = [], n._s.delete(e);
  }
  const tt = (L, $ = "") => {
    if (Ql in L)
      return L[Mr] = $, L;
    const q = function() {
      _i(n);
      const ht = Array.from(arguments), It = [], ct = [];
      function ut(bt) {
        It.push(bt);
      }
      function Z(bt) {
        ct.push(bt);
      }
      mn(d, {
        args: ht,
        name: q[Mr],
        store: S,
        after: ut,
        onError: Z
      });
      let st;
      try {
        st = L.apply(this && this.$id === e ? this : S, ht);
      } catch (bt) {
        throw mn(ct, bt), bt;
      }
      return st instanceof Promise ? st.then((bt) => (mn(It, bt), bt)).catch((bt) => (mn(ct, bt), Promise.reject(bt))) : (mn(It, st), st);
    };
    return q[Ql] = !0, q[Mr] = $, q;
  }, M = /* @__PURE__ */ bs({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), X = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Zl.bind(null, d),
    $patch: C,
    $reset: j,
    $subscribe(L, $ = {}) {
      const q = Zl(f, L, $.detached, () => ht()), ht = r.run(() => Js(() => n.state.value[e], (It) => {
        ($.flush === "sync" ? u : c) && L({
          storeId: e,
          type: We.direct,
          events: h
        }, It);
      }, Se({}, l, $)));
      return q;
    },
    $dispose: Y
  }, S = Ti(Se(
    {
      _hmrPayload: M,
      _customProperties: bs(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    X
    // must be added later
    // setupStore
  ));
  n._s.set(e, S);
  const R = (n._a && n._a.runWithContext || g_)(() => n._e.run(() => (r = gu()).run(() => t({ action: tt }))));
  for (const L in R) {
    const $ = R[L];
    if (Dt($) && !tc($) || Ue($))
      i ? Wi(m.value, L, br(R, L)) : o || (_ && __($) && (Dt($) ? $.value = _[L] : ea($, _[L])), n.state.value[e][L] = $), M.state.push(L);
    else if (typeof $ == "function") {
      const q = i ? $ : tt($, L);
      R[L] = q, M.actions[L] = $, a.actions[L] = $;
    } else
      tc($) && (M.getters[L] = o ? (
        // @ts-expect-error
        s.getters[L]
      ) : $, Zs && (R._getters || // @ts-expect-error: same
      (R._getters = bs([]))).push(L));
  }
  if (Se(S, R), Se(ot(S), R), Object.defineProperty(S, "$state", {
    get: () => i ? m.value : n.state.value[e],
    set: (L) => {
      if (i)
        throw new Error("cannot set hotState");
      C(($) => {
        Se($, L);
      });
    }
  }), S._hotUpdate = bs((L) => {
    S._hotUpdating = !0, L._hmrPayload.state.forEach(($) => {
      if ($ in S.$state) {
        const q = L.$state[$], ht = S.$state[$];
        typeof q == "object" && on(q) && on(ht) ? Hf(q, ht) : L.$state[$] = ht;
      }
      Wi(S, $, br(L.$state, $));
    }), Object.keys(S.$state).forEach(($) => {
      $ in L.$state || Or(S, $);
    }), c = !1, u = !1, n.state.value[e] = br(L._hmrPayload, "hotState"), u = !0, Cs().then(() => {
      c = !0;
    });
    for (const $ in L._hmrPayload.actions) {
      const q = L[$];
      Wi(S, $, tt(q, $));
    }
    for (const $ in L._hmrPayload.getters) {
      const q = L._hmrPayload.getters[$], ht = o ? (
        // special handling of options api
        Rt(() => (_i(n), q.call(S, S)))
      ) : q;
      Wi(S, $, ht);
    }
    Object.keys(S._hmrPayload.getters).forEach(($) => {
      $ in L._hmrPayload.getters || Or(S, $);
    }), Object.keys(S._hmrPayload.actions).forEach(($) => {
      $ in L._hmrPayload.actions || Or(S, $);
    }), S._hmrPayload = L._hmrPayload, S._getters = L._getters, S._hotUpdating = !1;
  }), Zs) {
    const L = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach(($) => {
      Object.defineProperty(S, $, Se({ value: S[$] }, L));
    });
  }
  return n._p.forEach((L) => {
    if (Zs) {
      const $ = r.run(() => L({
        store: S,
        app: n._a,
        pinia: n,
        options: a
      }));
      Object.keys($ || {}).forEach((q) => S._customProperties.add(q)), Se(S, $);
    } else
      Se(S, r.run(() => L({
        store: S,
        app: n._a,
        pinia: n,
        options: a
      })));
  }), S.$state && typeof S.$state == "object" && typeof S.$state.constructor == "function" && !S.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`), _ && o && s.hydrate && s.hydrate(S.$state, _), c = !0, u = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function b_(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  n = e, i = o ? s : t;
  function r(a, l) {
    const c = mg();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? ei(Ef, null) : null), a && _i(a), !ta)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = ta, a._s.has(n) || (o ? sa(n, t, i, a) : ec(n, i, a), r._pinia = a);
    const u = a._s.get(n);
    if (l) {
      const f = "__hot:" + n, d = o ? sa(f, t, i, a, !0) : ec(f, Se({}, i), a, !0);
      l._hotUpdate(d), delete a.state.value[f], a._s.delete(f);
    }
    if (Zs) {
      const f = tr();
      if (f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const d = f.proxy, h = "_pStores" in d ? d._pStores : d._pStores = {};
        h[n] = u;
      }
    }
    return u;
  }
  return r.$id = n, r;
}
function vs() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function zf(e) {
  return {
    text: "Type",
    number: "Hash",
    date: "Calendar",
    select: "ChevronDown",
    multiSelect: "Tags",
    user: "User",
    checkbox: "CheckSquare",
    url: "Link",
    email: "Mail",
    phone: "Phone"
  }[e] || "Type";
}
function y_(e) {
  return "logic" in e && "rules" in e;
}
const La = /* @__PURE__ */ b_("table", () => {
  const e = gt([
    { id: "title", name: "任务描述", type: "text", width: 200, visible: !0, required: !0 },
    { id: "details", name: "任务情况总结", type: "text", width: 250, visible: !0 },
    { id: "assignee", name: "任务执行人", type: "user", width: 120, visible: !0 },
    { id: "status", name: "进展", type: "select", width: 100, visible: !0, options: ["进行中", "已完成", "待开始"] },
    { id: "startDate", name: "开始日期", type: "date", width: 120, visible: !0 },
    { id: "endDate", name: "预计完成日期", type: "date", width: 140, visible: !0 },
    { id: "isOverdue", name: "是否延期", type: "checkbox", width: 100, visible: !0 },
    { id: "completedDate", name: "实际完成日期", type: "date", width: 140, visible: !0 },
    { id: "sparkline", name: "折线图", type: "sparkline", width: 140, visible: !0 },
    {
      id: "priority",
      name: "优先级",
      type: "select",
      width: 100,
      visible: !0,
      options: ["重要紧急", "紧急不重要", "重要不紧急"]
    }
  ]), t = gt([
    {
      id: "1",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
      title: "完成年度财务报告",
      details: "任务执行人于小平正在进行年度财务报告的整理工作",
      assignee: "周北北",
      status: "进行中",
      startDate: "2024-11-18",
      endDate: "2025-11-01",
      isOverdue: !1,
      completedDate: "",
      priority: "重要紧急",
      sparkline: "5,6,7,9,8,7,6,5,4,6,7,8"
    },
    {
      id: "2",
      createdAt: "2024-01-02T00:00:00Z",
      updatedAt: "2024-01-02T00:00:00Z",
      title: "组织年度员工团建活动",
      details: "任务已经完成，团建活动成功举办",
      assignee: "周北北",
      status: "已完成",
      startDate: "2024-11-08",
      endDate: "2025-12-26",
      isOverdue: !1,
      completedDate: "2024-11-16",
      priority: "重要紧急"
    },
    {
      id: "3",
      createdAt: "2024-01-03T00:00:00Z",
      updatedAt: "2024-01-03T00:00:00Z",
      title: "更新公司网站",
      details: "网站更新任务由黄泡泡负责，正在进行中",
      assignee: "黄泡泡",
      status: "进行中",
      startDate: "2023-02-04",
      endDate: "2025-11-20",
      isOverdue: !1,
      completedDate: "",
      priority: "紧急不重要"
    },
    {
      id: "4",
      createdAt: "2024-01-04T00:00:00Z",
      updatedAt: "2024-01-04T00:00:00Z",
      title: "招聘新员工",
      details: "招聘新员工的任务正在进行中",
      assignee: "周北北",
      status: "进行中",
      startDate: "2024-11-27",
      endDate: "2025-11-20",
      isOverdue: !1,
      completedDate: "",
      priority: "紧急不重要"
    },
    {
      id: "5",
      createdAt: "2024-01-05T00:00:00Z",
      updatedAt: "2024-01-05T00:00:00Z",
      title: "开发新产品",
      details: "任务执行人黄泡泡准备开始新产品开发",
      assignee: "黄泡泡",
      status: "待开始",
      startDate: "2024-12-03",
      endDate: "2025-10-01",
      isOverdue: !1,
      completedDate: "",
      priority: "重要不紧急"
    }
  ]), s = gt([
    {
      id: "table",
      name: "任务管理表",
      type: "table",
      icon: "Table",
      fields: e.value.map((V) => V.id),
      filters: { id: vs(), logic: "and", rules: [] },
      sorts: []
    },
    // {
    //   id: "kanban",
    //   name: "进度看板",
    //   type: "kanban",
    //   icon: "Kanban",
    //   fields: fields.value.map((f) => f.id),
    //   filters: [],
    //   sorts: [],
    //   groupBy: "status",
    // },
    {
      id: "form",
      name: "表单视图",
      type: "form",
      icon: "FileText",
      fields: e.value.map((V) => V.id),
      filters: { id: vs(), logic: "and", rules: [] },
      sorts: []
    }
  ]), n = gt({ id: "root", logic: "and", rules: [] }), i = gt("table"), o = gt([]), r = gt(null), a = gt([]), l = gt("priority"), c = Rt(() => {
    var V;
    return ((V = s.value) == null ? void 0 : V.find((T) => T.id === i.value)) || null;
  }), u = Rt(() => (e.value || []).filter((V) => V.visible)), f = Rt(() => {
    let V = [...t.value];
    return n.value && Array.isArray(n.value.rules) && n.value.rules.length > 0 && (V = V.filter((T) => k(T, n.value))), a.value && a.value.length > 0 && V.sort((T, W) => {
      for (const J of a.value) {
        const _t = T[J.fieldId], wt = W[J.fieldId];
        let Ft = 0;
        if (_t < wt ? Ft = -1 : _t > wt && (Ft = 1), Ft !== 0)
          return J.direction === "desc" ? -Ft : Ft;
      }
      return 0;
    }), V;
  }), d = (V) => {
    n.value = V;
  }, h = (V) => {
    n.value = V || { id: "root", logic: "and", rules: [] };
  }, _ = Rt(() => {
    var J;
    if (!l.value) return [];
    const V = /* @__PURE__ */ new Map();
    (J = e.value) == null || J.find((_t) => _t.id === l.value), f.value && f.value.forEach((_t) => {
      const wt = _t[l.value] || "未分组";
      V.has(wt) || V.set(wt, []), V.get(wt).push(_t);
    });
    const T = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#a8e6cf", "#ff8b94"];
    let W = 0;
    return Array.from(V.entries()).map(([_t, wt]) => ({
      key: _t,
      label: _t,
      color: T[W++ % T.length],
      records: wt,
      expanded: !0
    }));
  }), m = (V = {}) => {
    try {
      const T = {
        id: vs(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        title: "新任务",
        details: "",
        assignee: "",
        status: "待开始",
        startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        endDate: "",
        isOverdue: !1,
        completedDate: "",
        priority: "重要不紧急",
        ...V
      };
      return t.value.push(T), Z(), T;
    } catch (T) {
      return console.error("添加记录失败:", T), null;
    }
  }, y = (V, T) => {
    var W;
    try {
      const J = ((W = t.value) == null ? void 0 : W.findIndex((_t) => _t.id === V)) ?? -1;
      J !== -1 && (t.value[J] = {
        ...t.value[J],
        ...T,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }, Z());
    } catch (J) {
      console.error("更新记录失败:", J);
    }
  }, C = (V) => {
    var T;
    try {
      const W = ((T = t.value) == null ? void 0 : T.findIndex((J) => J.id === V)) ?? -1;
      W !== -1 && (t.value.splice(W, 1), o.value = o.value.filter((J) => J !== V), Z());
    } catch (W) {
      console.error("删除记录失败:", W);
    }
  }, j = (V) => {
    try {
      const T = {
        id: vs(),
        ...V
      };
      return e.value.push(T), Z(), T;
    } catch (T) {
      return console.error("添加字段失败:", T), null;
    }
  }, Y = (V, T) => {
    var W;
    try {
      const J = ((W = e.value) == null ? void 0 : W.findIndex((_t) => _t.id === V)) ?? -1;
      J !== -1 && (e.value[J] = { ...e.value[J], ...T }, Z());
    } catch (J) {
      console.error("更新字段失败:", J);
    }
  }, tt = (V) => {
    var T, W;
    try {
      const J = ((T = e.value) == null ? void 0 : T.findIndex((_t) => _t.id === V)) ?? -1;
      J !== -1 && (e.value.splice(J, 1), (W = t.value) == null || W.forEach((_t) => {
        delete _t[V];
      }), Z());
    } catch (J) {
      console.error("删除字段失败:", J);
    }
  }, M = (V, T) => {
    try {
      if (!e.value || V < 0 || T < 0 || V >= e.value.length || T >= e.value.length)
        return;
      const W = e.value.splice(V, 1)[0];
      e.value.splice(T, 0, W), Z();
    } catch (W) {
      console.error("重排字段失败:", W);
    }
  }, X = (V, T, W) => {
    var J, _t;
    try {
      if (W) {
        const wt = (J = _.value) == null ? void 0 : J.find((Ft) => Ft.key === W);
        if (wt && wt.records) {
          const Ft = wt.records.splice(V, 1)[0];
          wt.records.splice(T, 0, Ft);
          const Te = ((_t = t.value) == null ? void 0 : _t.findIndex((De) => De.id === Ft.id)) ?? -1;
          Te !== -1 && (t.value.splice(Te, 1), t.value.splice(T, 0, Ft));
        }
      } else {
        if (!t.value || V < 0 || T < 0 || V >= t.value.length || T >= t.value.length)
          return;
        const wt = t.value.splice(V, 1)[0];
        t.value.splice(T, 0, wt);
      }
      Z();
    } catch (wt) {
      console.error("重排记录失败:", wt);
    }
  }, S = (V, T) => {
    const W = V[T.fieldId], J = T.value;
    switch (T.operator) {
      case "equals":
        return W === J;
      case "not_equals":
        return W !== J;
      case "contains":
        return String(W).toLowerCase().includes(String(J).toLowerCase());
      case "not_contains":
        return !String(W).toLowerCase().includes(String(J).toLowerCase());
      case "starts_with":
        return String(W).toLowerCase().startsWith(String(J).toLowerCase());
      case "ends_with":
        return String(W).toLowerCase().endsWith(String(J).toLowerCase());
      case "is_empty":
        return W == null || W === "";
      case "is_not_empty":
        return W != null && W !== "";
      case "greater_than":
        return Number(W) > Number(J);
      case "less_than":
        return Number(W) < Number(J);
      case "greater_equal":
        return Number(W) >= Number(J);
      case "less_equal":
        return Number(W) <= Number(J);
      default:
        return !0;
    }
  }, k = (V, T) => {
    const W = (J) => y_(J) ? k(V, J) : S(V, J);
    return T.logic === "and" ? T.rules.every(W) : T.logic === "or" ? T.rules.some(W) : !0;
  }, R = (V) => {
    a.value = V || [];
  }, L = (V) => {
    l.value = V;
  }, $ = (V) => {
    var T;
    try {
      i.value = V;
      const W = (T = s.value) == null ? void 0 : T.find((J) => J.id === V);
      W && (n.value = W.filters || { id: "root", logic: "and", rules: [] }, a.value = W.sorts || [], l.value = W.groupBy || null);
    } catch (W) {
      console.error("切换视图失败:", W);
    }
  }, q = (V) => {
    try {
      o.value || (o.value = []);
      const T = o.value.indexOf(V);
      T > -1 ? o.value.splice(T, 1) : o.value.push(V);
    } catch (T) {
      console.error("切换记录选择失败:", T);
    }
  }, ht = () => {
    var V;
    try {
      o.value = ((V = f.value) == null ? void 0 : V.map((T) => T.id)) || [];
    } catch (T) {
      console.error("全选记录失败:", T);
    }
  }, It = () => {
    o.value = [];
  }, ct = (V, T) => {
    r.value = { recordId: V, fieldId: T };
  }, ut = () => {
    r.value = null;
  }, Z = () => {
    try {
      const V = {
        fields: e.value,
        records: t.value,
        views: s.value,
        currentViewId: i.value,
        filters: n.value,
        sorts: a.value,
        groupBy: l.value
      };
      localStorage.setItem("multidimensional-table-data", JSON.stringify(V));
    } catch (V) {
      console.error("保存到本地存储失败:", V);
    }
  };
  return {
    // 状态
    fields: e,
    records: t,
    views: s,
    currentViewId: i,
    selectedRecords: o,
    editingCell: r,
    filters: n,
    sorts: a,
    groupBy: l,
    // 计算属性
    currentView: c,
    visibleFields: u,
    filteredRecords: f,
    groupedRecords: _,
    // 方法
    addRecord: m,
    updateRecord: y,
    deleteRecord: C,
    addField: j,
    updateField: Y,
    deleteField: tt,
    reorderFields: M,
    reorderRecords: X,
    updateFilters: h,
    updateSorts: R,
    updateGroupBy: L,
    switchView: $,
    toggleRecordSelection: q,
    selectAllRecords: ht,
    clearSelection: It,
    startEditCell: ct,
    finishEditCell: ut,
    saveToStorage: Z,
    loadFromStorage: () => {
      try {
        const V = localStorage.getItem("multidimensional-table-data");
        if (V) {
          const T = JSON.parse(V);
          T.fields && (e.value = T.fields), T.records && (t.value = T.records), T.views && (s.value = T.views), T.currentViewId && (i.value = T.currentViewId), T.filters && (n.value = T.filters), T.sorts && (a.value = T.sorts), T.groupBy !== void 0 && (l.value = T.groupBy);
        }
      } catch (V) {
        console.error("从本地存储加载失败:", V);
      }
    },
    exportData: () => {
      try {
        const V = {
          fields: e.value,
          records: t.value,
          exportedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, T = new Blob([JSON.stringify(V, null, 2)], { type: "application/json" }), W = URL.createObjectURL(T), J = document.createElement("a");
        J.href = W, J.download = `table-data-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, J.click(), URL.revokeObjectURL(W);
      } catch (V) {
        console.error("导出数据失败:", V);
      }
    },
    setFilters: d,
    importData: (V) => {
      try {
        const T = JSON.parse(V);
        T.fields && (e.value = T.fields), T.records && (t.value = T.records), T.views && (s.value = T.views), T.currentViewId && (i.value = T.currentViewId), T.filters && (n.value = T.filters), T.sorts && (a.value = T.sorts), T.groupBy !== void 0 && (l.value = T.groupBy);
      } catch (T) {
        console.error("导入数据失败:", T);
      }
    }
  };
});
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ki = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ce = (e, t) => ({ size: s, strokeWidth: n = 2, absoluteStrokeWidth: i, color: o, class: r, ...a }, { attrs: l, slots: c }) => On(
  "svg",
  {
    ...Ki,
    width: s || Ki.width,
    height: s || Ki.height,
    stroke: o || Ki.stroke,
    "stroke-width": i ? Number(n) * 24 / Number(s) : n,
    ...l,
    class: ["lucide", `lucide-${v_(e)}`],
    ...a
  },
  [
    ...t.map((u) => On(...u)),
    ...c.default ? [c.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x_ = Ce("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = Ce("DatabaseIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = Ce("ExternalLinkIcon", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = Ce("GripVerticalIcon", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = Ce("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = Ce("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M_ = Ce("PhoneIcon", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = Ce("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = Ce("RefreshCwIcon", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T_ = Ce("SquarePenIcon", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = Ce("Trash2Icon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = Ce("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), D_ = ["value"], I_ = {
  key: 4,
  class: "multi-select-editor"
}, P_ = ["id", "value", "checked", "onChange"], E_ = ["for"], A_ = {
  key: 5,
  class: "checkbox-editor"
}, R_ = {
  key: 8,
  class: "sparkline-editor"
}, $_ = {
  ref: "sparklineCanvas",
  width: "100",
  height: "30",
  style: { "margin-top": "4px" }
}, L_ = /* @__PURE__ */ Me({
  __name: "CellEditor",
  props: {
    value: {},
    field: {}
  },
  emits: ["update", "finish", "cancel"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = gt(), o = gt(), r = gt(s.value), a = gt(s.value), l = gt(!1);
    Ma(async () => {
      s.field.type === "multiSelect" && !Array.isArray(r.value) && (r.value = r.value ? [r.value] : []), await Cs(), i.value && (i.value.focus(), (i.value.type === "text" || i.value.type === "url" || i.value.type === "email") && i.value.select()), document.addEventListener("click", c);
    }), Pi(() => {
      document.removeEventListener("click", c);
    });
    const c = (_) => {
      !_.target.closest(".cell-editor") && !l.value && u();
    }, u = () => {
      l.value || (l.value = !0, r.value !== a.value ? n("update", r.value) : n("finish"));
    }, f = () => {
      l.value || (l.value = !0, r.value = a.value, n("cancel"));
    }, d = () => {
      setTimeout(() => {
        l.value || u();
      }, 150);
    }, h = (_) => {
      const m = r.value || [], y = m.indexOf(_);
      y > -1 ? m.splice(y, 1) : m.push(_), r.value = [...m];
    };
    return (_, m) => (N(), K("div", {
      class: "cell-editor",
      onClick: m[11] || (m[11] = _e(() => {
      }, ["stop"]))
    }, [
      _.field.type === "text" ? At((N(), K("input", {
        key: 0,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[0] || (m[0] = (y) => r.value = y),
        type: "text",
        class: "cell-input",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ]) : _.field.type === "number" ? At((N(), K("input", {
        key: 1,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[1] || (m[1] = (y) => r.value = y),
        type: "number",
        class: "cell-input",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [
          ie,
          r.value,
          void 0,
          { number: !0 }
        ]
      ]) : _.field.type === "date" ? At((N(), K("input", {
        key: 2,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[2] || (m[2] = (y) => r.value = y),
        type: "date",
        class: "cell-input",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ]) : _.field.type === "select" ? At((N(), K("select", {
        key: 3,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[3] || (m[3] = (y) => r.value = y),
        class: "cell-select",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, [
        m[12] || (m[12] = w("option", { value: "" }, "请选择", -1)),
        (N(!0), K($t, null, ke(_.field.options, (y) => (N(), K("option", {
          key: y,
          value: y
        }, Mt(y), 9, D_))), 128))
      ], 544)), [
        [ni, r.value]
      ]) : _.field.type === "multiSelect" ? (N(), K("div", I_, [
        w("div", {
          class: "multi-select-dropdown",
          ref_key: "dropdownRef",
          ref: o
        }, [
          (N(!0), K($t, null, ke(_.field.options, (y) => {
            var C;
            return N(), K("div", {
              key: y,
              class: "option-item"
            }, [
              w("input", {
                id: `${_.field.id}-${y}`,
                type: "checkbox",
                value: y,
                checked: (C = r.value) == null ? void 0 : C.includes(y),
                onChange: (j) => h(y)
              }, null, 40, P_),
              w("label", {
                for: `${_.field.id}-${y}`
              }, Mt(y), 9, E_)
            ]);
          }), 128))
        ], 512)
      ])) : _.field.type === "checkbox" ? (N(), K("div", A_, [
        At(w("input", {
          ref_key: "inputRef",
          ref: i,
          "onUpdate:modelValue": m[4] || (m[4] = (y) => r.value = y),
          type: "checkbox",
          class: "cell-checkbox",
          onBlur: d,
          onKeydown: [
            yt(u, ["enter"]),
            yt(f, ["escape"]),
            yt(u, ["tab"])
          ]
        }, null, 544), [
          [Jr, r.value]
        ])
      ])) : _.field.type === "url" ? At((N(), K("input", {
        key: 6,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[5] || (m[5] = (y) => r.value = y),
        type: "url",
        class: "cell-input",
        placeholder: "https://",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ]) : _.field.type === "email" ? At((N(), K("input", {
        key: 7,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[6] || (m[6] = (y) => r.value = y),
        type: "email",
        class: "cell-input",
        placeholder: "example@email.com",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ]) : _.field.type === "sparkline" ? (N(), K("div", R_, [
        At(w("input", {
          ref_key: "inputRef",
          ref: i,
          "onUpdate:modelValue": m[7] || (m[7] = (y) => r.value = y),
          type: "text",
          class: "cell-input",
          placeholder: "如：1,2,3,4",
          onBlur: d,
          onKeydown: [
            yt(u, ["enter"]),
            yt(f, ["escape"]),
            yt(u, ["tab"])
          ]
        }, null, 544), [
          [ie, r.value]
        ]),
        w("canvas", $_, null, 512)
      ])) : _.field.type === "phone" ? At((N(), K("input", {
        key: 9,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[8] || (m[8] = (y) => r.value = y),
        type: "tel",
        class: "cell-input",
        placeholder: "手机号码",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ]) : _.field.type === "user" ? At((N(), K("input", {
        key: 10,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[9] || (m[9] = (y) => r.value = y),
        type: "text",
        class: "cell-input",
        placeholder: "输入用户名",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ]) : At((N(), K("input", {
        key: 11,
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": m[10] || (m[10] = (y) => r.value = y),
        type: "text",
        class: "cell-input",
        onBlur: d,
        onKeydown: [
          yt(u, ["enter"]),
          yt(f, ["escape"]),
          yt(u, ["tab"])
        ]
      }, null, 544)), [
        [ie, r.value]
      ])
    ]));
  }
}), Is = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, F_ = /* @__PURE__ */ Is(L_, [["__scopeId", "data-v-06ec0923"]]);
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Ri(e) {
  return e + 0.5 | 0;
}
const xs = (e, t, s) => Math.max(Math.min(e, s), t);
function Gn(e) {
  return xs(Ri(e * 2.55), 0, 255);
}
function Ms(e) {
  return xs(Ri(e * 255), 0, 255);
}
function ss(e) {
  return xs(Ri(e / 2.55) / 100, 0, 1);
}
function nc(e) {
  return xs(Ri(e * 100), 0, 100);
}
const we = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, ia = [..."0123456789ABCDEF"], j_ = (e) => ia[e & 15], V_ = (e) => ia[(e & 240) >> 4] + ia[e & 15], Gi = (e) => (e & 240) >> 4 === (e & 15), N_ = (e) => Gi(e.r) && Gi(e.g) && Gi(e.b) && Gi(e.a);
function H_(e) {
  var t = e.length, s;
  return e[0] === "#" && (t === 4 || t === 5 ? s = {
    r: 255 & we[e[1]] * 17,
    g: 255 & we[e[2]] * 17,
    b: 255 & we[e[3]] * 17,
    a: t === 5 ? we[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (s = {
    r: we[e[1]] << 4 | we[e[2]],
    g: we[e[3]] << 4 | we[e[4]],
    b: we[e[5]] << 4 | we[e[6]],
    a: t === 9 ? we[e[7]] << 4 | we[e[8]] : 255
  })), s;
}
const z_ = (e, t) => e < 255 ? t(e) : "";
function B_(e) {
  var t = N_(e) ? j_ : V_;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + z_(e.a, t) : void 0;
}
const U_ = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Uf(e, t, s) {
  const n = t * Math.min(s, 1 - s), i = (o, r = (o + e / 30) % 12) => s - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [i(0), i(8), i(4)];
}
function W_(e, t, s) {
  const n = (i, o = (i + e / 60) % 6) => s - s * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function K_(e, t, s) {
  const n = Uf(e, 1, 0.5);
  let i;
  for (t + s > 1 && (i = 1 / (t + s), t *= i, s *= i), i = 0; i < 3; i++)
    n[i] *= 1 - t - s, n[i] += t;
  return n;
}
function G_(e, t, s, n, i) {
  return e === i ? (t - s) / n + (t < s ? 6 : 0) : t === i ? (s - e) / n + 2 : (e - t) / n + 4;
}
function Fa(e) {
  const s = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.max(s, n, i), r = Math.min(s, n, i), a = (o + r) / 2;
  let l, c, u;
  return o !== r && (u = o - r, c = a > 0.5 ? u / (2 - o - r) : u / (o + r), l = G_(s, n, i, u, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function ja(e, t, s, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, s, n)).map(Ms);
}
function Va(e, t, s) {
  return ja(Uf, e, t, s);
}
function Y_(e, t, s) {
  return ja(K_, e, t, s);
}
function q_(e, t, s) {
  return ja(W_, e, t, s);
}
function Wf(e) {
  return (e % 360 + 360) % 360;
}
function X_(e) {
  const t = U_.exec(e);
  let s = 255, n;
  if (!t)
    return;
  t[5] !== n && (s = t[6] ? Gn(+t[5]) : Ms(+t[5]));
  const i = Wf(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? n = Y_(i, o, r) : t[1] === "hsv" ? n = q_(i, o, r) : n = Va(i, o, r), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: s
  };
}
function J_(e, t) {
  var s = Fa(e);
  s[0] = Wf(s[0] + t), s = Va(s), e.r = s[0], e.g = s[1], e.b = s[2];
}
function Z_(e) {
  if (!e)
    return;
  const t = Fa(e), s = t[0], n = nc(t[1]), i = nc(t[2]);
  return e.a < 255 ? `hsla(${s}, ${n}%, ${i}%, ${ss(e.a)})` : `hsl(${s}, ${n}%, ${i}%)`;
}
const ic = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, oc = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Q_() {
  const e = {}, t = Object.keys(oc), s = Object.keys(ic);
  let n, i, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], i = 0; i < s.length; i++)
      o = s[i], a = a.replace(o, ic[o]);
    o = parseInt(oc[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Yi;
function tb(e) {
  Yi || (Yi = Q_(), Yi.transparent = [0, 0, 0, 0]);
  const t = Yi[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const eb = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function sb(e) {
  const t = eb.exec(e);
  let s = 255, n, i, o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      s = t[8] ? Gn(r) : xs(r * 255, 0, 255);
    }
    return n = +t[1], i = +t[3], o = +t[5], n = 255 & (t[2] ? Gn(n) : xs(n, 0, 255)), i = 255 & (t[4] ? Gn(i) : xs(i, 0, 255)), o = 255 & (t[6] ? Gn(o) : xs(o, 0, 255)), {
      r: n,
      g: i,
      b: o,
      a: s
    };
  }
}
function nb(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${ss(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Cr = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, _n = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function ib(e, t, s) {
  const n = _n(ss(e.r)), i = _n(ss(e.g)), o = _n(ss(e.b));
  return {
    r: Ms(Cr(n + s * (_n(ss(t.r)) - n))),
    g: Ms(Cr(i + s * (_n(ss(t.g)) - i))),
    b: Ms(Cr(o + s * (_n(ss(t.b)) - o))),
    a: e.a + s * (t.a - e.a)
  };
}
function qi(e, t, s) {
  if (e) {
    let n = Fa(e);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * s, t === 0 ? 360 : 1)), n = Va(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function Kf(e, t) {
  return e && Object.assign(t || {}, e);
}
function rc(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = Ms(e[3]))) : (t = Kf(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = Ms(t.a)), t;
}
function ob(e) {
  return e.charAt(0) === "r" ? sb(e) : X_(e);
}
class bi {
  constructor(t) {
    if (t instanceof bi)
      return t;
    const s = typeof t;
    let n;
    s === "object" ? n = rc(t) : s === "string" && (n = H_(t) || tb(t) || ob(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Kf(this._rgb);
    return t && (t.a = ss(t.a)), t;
  }
  set rgb(t) {
    this._rgb = rc(t);
  }
  rgbString() {
    return this._valid ? nb(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? B_(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Z_(this._rgb) : void 0;
  }
  mix(t, s) {
    if (t) {
      const n = this.rgb, i = t.rgb;
      let o;
      const r = s === o ? 0.5 : s, a = 2 * r - 1, l = n.a - i.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, n.r = 255 & c * n.r + o * i.r + 0.5, n.g = 255 & c * n.g + o * i.g + 0.5, n.b = 255 & c * n.b + o * i.b + 0.5, n.a = r * n.a + (1 - r) * i.a, this.rgb = n;
    }
    return this;
  }
  interpolate(t, s) {
    return t && (this._rgb = ib(this._rgb, t._rgb, s)), this;
  }
  clone() {
    return new bi(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Ms(t), this;
  }
  clearer(t) {
    const s = this._rgb;
    return s.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, s = Ri(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = s, this;
  }
  opaquer(t) {
    const s = this._rgb;
    return s.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return qi(this._rgb, 2, t), this;
  }
  darken(t) {
    return qi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return qi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return qi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return J_(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
const rb = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function Pt(e) {
  return e == null;
}
function qt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function Ot(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Oe(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Le(e, t) {
  return Oe(e) ? e : t;
}
function Tt(e, t) {
  return typeof e > "u" ? t : e;
}
const ab = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function jt(e, t, s) {
  if (e && typeof e.call == "function")
    return e.apply(s, t);
}
function Xt(e, t, s, n) {
  let i, o, r;
  if (qt(e))
    for (o = e.length, i = 0; i < o; i++)
      t.call(s, e[i], i);
  else if (Ot(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(s, e[r[i]], r[i]);
}
function ac(e, t) {
  let s, n, i, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (s = 0, n = e.length; s < n; ++s)
    if (i = e[s], o = t[s], i.datasetIndex !== o.datasetIndex || i.index !== o.index)
      return !1;
  return !0;
}
function jo(e) {
  if (qt(e))
    return e.map(jo);
  if (Ot(e)) {
    const t = /* @__PURE__ */ Object.create(null), s = Object.keys(e), n = s.length;
    let i = 0;
    for (; i < n; ++i)
      t[s[i]] = jo(e[s[i]]);
    return t;
  }
  return e;
}
function Gf(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function lb(e, t, s, n) {
  if (!Gf(e))
    return;
  const i = t[e], o = s[e];
  Ot(i) && Ot(o) ? yi(i, o, n) : t[e] = jo(o);
}
function yi(e, t, s) {
  const n = qt(t) ? t : [
    t
  ], i = n.length;
  if (!Ot(e))
    return e;
  s = s || {};
  const o = s.merger || lb;
  let r;
  for (let a = 0; a < i; ++a) {
    if (r = n[a], !Ot(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], e, r, s);
  }
  return e;
}
function ii(e, t) {
  return yi(e, t, {
    merger: cb
  });
}
function cb(e, t, s) {
  if (!Gf(e))
    return;
  const n = t[e], i = s[e];
  Ot(n) && Ot(i) ? ii(n, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = jo(i));
}
const lc = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function ub(e) {
  const t = e.split("."), s = [];
  let n = "";
  for (const i of t)
    n += i, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (s.push(n), n = "");
  return s;
}
function fb(e) {
  const t = ub(e);
  return (s) => {
    for (const n of t) {
      if (n === "")
        break;
      s = s && s[n];
    }
    return s;
  };
}
function Vo(e, t) {
  return (lc[t] || (lc[t] = fb(t)))(e);
}
function Na(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const No = (e) => typeof e < "u", Ds = (e) => typeof e == "function", cc = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const s of e)
    if (!t.has(s))
      return !1;
  return !0;
};
function db(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const le = Math.PI, rs = 2 * le, hb = rs + le, Ho = Number.POSITIVE_INFINITY, pb = le / 180, ws = le / 2, Ls = le / 4, uc = le * 2 / 3, Yf = Math.log10, Cn = Math.sign;
function oi(e, t, s) {
  return Math.abs(e - t) < s;
}
function fc(e) {
  const t = Math.round(e);
  e = oi(e, t, e / 1e3) ? t : e;
  const s = Math.pow(10, Math.floor(Yf(e))), n = e / s;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * s;
}
function gb(e) {
  const t = [], s = Math.sqrt(e);
  let n;
  for (n = 1; n < s; n++)
    e % n === 0 && (t.push(n), t.push(e / n));
  return s === (s | 0) && t.push(s), t.sort((i, o) => i - o).pop(), t;
}
function mb(e) {
  return typeof e == "symbol" || typeof e == "object" && e !== null && !(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e);
}
function vi(e) {
  return !mb(e) && !isNaN(parseFloat(e)) && isFinite(e);
}
function _b(e, t) {
  const s = Math.round(e);
  return s - t <= e && s + t >= e;
}
function bb(e, t, s) {
  let n, i, o;
  for (n = 0, i = e.length; n < i; n++)
    o = e[n][s], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Us(e) {
  return e * (le / 180);
}
function yb(e) {
  return e * (180 / le);
}
function dc(e) {
  if (!Oe(e))
    return;
  let t = 1, s = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, s++;
  return s;
}
function vb(e, t) {
  const s = t.x - e.x, n = t.y - e.y, i = Math.sqrt(s * s + n * n);
  let o = Math.atan2(n, s);
  return o < -0.5 * le && (o += rs), {
    angle: o,
    distance: i
  };
}
function hc(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function xb(e, t) {
  return (e - t + hb) % rs - le;
}
function ds(e) {
  return (e % rs + rs) % rs;
}
function qf(e, t, s, n) {
  const i = ds(e), o = ds(t), r = ds(s), a = ds(o - i), l = ds(r - i), c = ds(i - o), u = ds(i - r);
  return i === o || i === r || n && o === r || a > l && c < u;
}
function Be(e, t, s) {
  return Math.max(t, Math.min(s, e));
}
function wb(e) {
  return Be(e, -32768, 32767);
}
function Sb(e, t, s, n = 1e-6) {
  return e >= Math.min(t, s) - n && e <= Math.max(t, s) + n;
}
function Ha(e, t, s) {
  s = s || ((r) => e[r] < t);
  let n = e.length - 1, i = 0, o;
  for (; n - i > 1; )
    o = i + n >> 1, s(o) ? i = o : n = o;
  return {
    lo: i,
    hi: n
  };
}
const Ws = (e, t, s, n) => Ha(e, s, n ? (i) => {
  const o = e[i][t];
  return o < s || o === s && e[i + 1][t] === s;
} : (i) => e[i][t] < s), kb = (e, t, s) => Ha(e, s, (n) => e[n][t] >= s);
function Ob(e, t, s) {
  let n = 0, i = e.length;
  for (; n < i && e[n] < t; )
    n++;
  for (; i > n && e[i - 1] > s; )
    i--;
  return n > 0 || i < e.length ? e.slice(n, i) : e;
}
const Xf = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Mb(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Xf.forEach((s) => {
    const n = "_onData" + Na(s), i = e[s];
    Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = i.apply(this, o);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[n] == "function" && a[n](...o);
        }), r;
      }
    });
  });
}
function pc(e, t) {
  const s = e._chartjs;
  if (!s)
    return;
  const n = s.listeners, i = n.indexOf(t);
  i !== -1 && n.splice(i, 1), !(n.length > 0) && (Xf.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function Cb(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const Jf = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function Zf(e, t) {
  let s = [], n = !1;
  return function(...i) {
    s = i, n || (n = !0, Jf.call(window, () => {
      n = !1, e.apply(t, s);
    }));
  };
}
function Tb(e, t) {
  let s;
  return function(...n) {
    return t ? (clearTimeout(s), s = setTimeout(e, t, n)) : e.apply(this, n), t;
  };
}
const Qf = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", ri = (e, t, s) => e === "start" ? t : e === "end" ? s : (t + s) / 2;
function Db(e, t, s) {
  const n = t.length;
  let i = 0, o = n;
  if (e._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = e, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, u = r.axis, { min: f, max: d, minDefined: h, maxDefined: _ } = r.getUserBounds();
    if (h) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        Ws(l, u, f).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? n : Ws(t, u, r.getPixelForValue(f)).lo
      ), c) {
        const m = l.slice(0, i + 1).reverse().findIndex((y) => !Pt(y[a.axis]));
        i -= Math.max(0, m);
      }
      i = Be(i, 0, n - 1);
    }
    if (_) {
      let m = Math.max(
        // @ts-expect-error Need to type _parsed
        Ws(l, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? 0 : Ws(t, u, r.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const y = l.slice(m - 1).findIndex((C) => !Pt(C[a.axis]));
        m += Math.max(0, y);
      }
      o = Be(m, i, n) - i;
    } else
      o = n - i;
  }
  return {
    start: i,
    count: o
  };
}
function Ib(e) {
  const { xScale: t, yScale: s, _scaleRanges: n } = e, i = {
    xmin: t.min,
    xmax: t.max,
    ymin: s.min,
    ymax: s.max
  };
  if (!n)
    return e._scaleRanges = i, !0;
  const o = n.xmin !== t.min || n.xmax !== t.max || n.ymin !== s.min || n.ymax !== s.max;
  return Object.assign(n, i), o;
}
const Xi = (e) => e === 0 || e === 1, gc = (e, t, s) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * rs / s)), mc = (e, t, s) => Math.pow(2, -10 * e) * Math.sin((e - t) * rs / s) + 1, ai = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * ws) + 1,
  easeOutSine: (e) => Math.sin(e * ws),
  easeInOutSine: (e) => -0.5 * (Math.cos(le * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => Xi(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => Xi(e) ? e : gc(e, 0.075, 0.3),
  easeOutElastic: (e) => Xi(e) ? e : mc(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return Xi(e) ? e : e < 0.5 ? 0.5 * gc(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * mc(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - ai.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? ai.easeInBounce(e * 2) * 0.5 : ai.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function za(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function _c(e) {
  return za(e) ? e : new bi(e);
}
function Tr(e) {
  return za(e) ? e : new bi(e).saturate(0.5).darken(0.1).hexString();
}
const Pb = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Eb = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Ab(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: Eb
    },
    numbers: {
      type: "number",
      properties: Pb
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Rb(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const bc = /* @__PURE__ */ new Map();
function $b(e, t) {
  t = t || {};
  const s = e + JSON.stringify(t);
  let n = bc.get(s);
  return n || (n = new Intl.NumberFormat(e, t), bc.set(s, n)), n;
}
function td(e, t, s) {
  return $b(t, s).format(e);
}
const Lb = {
  values(e) {
    return qt(e) ? e : "" + e;
  },
  numeric(e, t, s) {
    if (e === 0)
      return "0";
    const n = this.chart.options.locale;
    let i, o = e;
    if (s.length > 1) {
      const c = Math.max(Math.abs(s[0].value), Math.abs(s[s.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), o = Fb(e, s);
    }
    const r = Yf(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: i,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), td(e, n, l);
  }
};
function Fb(e, t) {
  let s = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(s) >= 1 && e !== Math.floor(e) && (s = e - Math.floor(e)), s;
}
var ed = {
  formatters: Lb
};
function jb(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, s) => s.lineWidth,
      tickColor: (t, s) => s.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: ed.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const rn = /* @__PURE__ */ Object.create(null), oa = /* @__PURE__ */ Object.create(null);
function li(e, t) {
  if (!t)
    return e;
  const s = t.split(".");
  for (let n = 0, i = s.length; n < i; ++n) {
    const o = s[n];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Dr(e, t, s) {
  return typeof t == "string" ? yi(li(e, t), s) : yi(li(e, ""), t);
}
class Vb {
  constructor(t, s) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (n, i) => Tr(i.backgroundColor), this.hoverBorderColor = (n, i) => Tr(i.borderColor), this.hoverColor = (n, i) => Tr(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(s);
  }
  set(t, s) {
    return Dr(this, t, s);
  }
  get(t) {
    return li(this, t);
  }
  describe(t, s) {
    return Dr(oa, t, s);
  }
  override(t, s) {
    return Dr(rn, t, s);
  }
  route(t, s, n, i) {
    const o = li(this, t), r = li(this, n), a = "_" + s;
    Object.defineProperties(o, {
      [a]: {
        value: o[s],
        writable: !0
      },
      [s]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[i];
          return Ot(l) ? Object.assign({}, c, l) : Tt(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((s) => s(this));
  }
}
var Vt = /* @__PURE__ */ new Vb({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Ab,
  Rb,
  jb
]);
function Nb(e) {
  return !e || Pt(e.size) || Pt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function yc(e, t, s, n, i) {
  let o = t[i];
  return o || (o = t[i] = e.measureText(i).width, s.push(i)), o > n && (n = o), n;
}
function Fs(e, t, s) {
  const n = e.currentDevicePixelRatio, i = s !== 0 ? Math.max(s / 2, 0.5) : 0;
  return Math.round((t - i) * n) / n + i;
}
function vc(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function Hb(e, t, s, n) {
  zb(e, t, s, n);
}
function zb(e, t, s, n, i) {
  let o, r, a, l, c, u, f, d;
  const h = t.pointStyle, _ = t.rotation, m = t.radius;
  let y = (_ || 0) * pb;
  if (h && typeof h == "object" && (o = h.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(s, n), e.rotate(y), e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), e.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch (e.beginPath(), h) {
      default:
        e.arc(s, n, m, 0, rs), e.closePath();
        break;
      case "triangle":
        u = m, e.moveTo(s + Math.sin(y) * u, n - Math.cos(y) * m), y += uc, e.lineTo(s + Math.sin(y) * u, n - Math.cos(y) * m), y += uc, e.lineTo(s + Math.sin(y) * u, n - Math.cos(y) * m), e.closePath();
        break;
      case "rectRounded":
        c = m * 0.516, l = m - c, r = Math.cos(y + Ls) * l, f = Math.cos(y + Ls) * l, a = Math.sin(y + Ls) * l, d = Math.sin(y + Ls) * l, e.arc(s - f, n - a, c, y - le, y - ws), e.arc(s + d, n - r, c, y - ws, y), e.arc(s + f, n + a, c, y, y + ws), e.arc(s - d, n + r, c, y + ws, y + le), e.closePath();
        break;
      case "rect":
        if (!_) {
          l = Math.SQRT1_2 * m, u = l, e.rect(s - u, n - l, 2 * u, 2 * l);
          break;
        }
        y += Ls;
      case "rectRot":
        f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + d, n - r), e.lineTo(s + f, n + a), e.lineTo(s - d, n + r), e.closePath();
        break;
      case "crossRot":
        y += Ls;
      case "cross":
        f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r);
        break;
      case "star":
        f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r), y += Ls, f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r);
        break;
      case "line":
        r = Math.cos(y) * m, a = Math.sin(y) * m, e.moveTo(s - r, n - a), e.lineTo(s + r, n + a);
        break;
      case "dash":
        e.moveTo(s, n), e.lineTo(s + Math.cos(y) * m, n + Math.sin(y) * m);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function xi(e, t, s) {
  return s = s || 0.5, !t || e && e.x > t.left - s && e.x < t.right + s && e.y > t.top - s && e.y < t.bottom + s;
}
function sd(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function nd(e) {
  e.restore();
}
function Bb(e, t, s, n, i) {
  if (!t)
    return e.lineTo(s.x, s.y);
  if (i === "middle") {
    const o = (t.x + s.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, s.y);
  } else i === "after" != !!n ? e.lineTo(t.x, s.y) : e.lineTo(s.x, t.y);
  e.lineTo(s.x, s.y);
}
function Ub(e, t, s, n) {
  if (!t)
    return e.lineTo(s.x, s.y);
  e.bezierCurveTo(n ? t.cp1x : t.cp2x, n ? t.cp1y : t.cp2y, n ? s.cp2x : s.cp1x, n ? s.cp2y : s.cp1y, s.x, s.y);
}
function Wb(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), Pt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Kb(e, t, s, n, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(n), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = s - o.actualBoundingBoxAscent, c = s + o.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(r, u), e.lineTo(a, u), e.stroke();
  }
}
function Gb(e, t) {
  const s = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = s;
}
function ra(e, t, s, n, i, o = {}) {
  const r = qt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, Wb(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Gb(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), Pt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, s, n, o.maxWidth)), e.fillText(c, s, n, o.maxWidth), Kb(e, s, n, c, o), n += Number(i.lineHeight);
  e.restore();
}
const Yb = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, qb = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Xb(e, t) {
  const s = ("" + e).match(Yb);
  if (!s || s[1] === "normal")
    return t * 1.2;
  switch (e = +s[2], s[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const Jb = (e) => +e || 0;
function Zb(e, t) {
  const s = {}, n = Ot(t), i = n ? Object.keys(t) : t, o = Ot(e) ? n ? (r) => Tt(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of i)
    s[r] = Jb(o(r));
  return s;
}
function Qb(e) {
  return Zb(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Tn(e) {
  const t = Qb(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function wi(e, t) {
  e = e || {}, t = t || Vt.font;
  let s = Tt(e.size, t.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let n = Tt(e.style, t.style);
  n && !("" + n).match(qb) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const i = {
    family: Tt(e.family, t.family),
    lineHeight: Xb(Tt(e.lineHeight, t.lineHeight), s),
    size: s,
    style: n,
    weight: Tt(e.weight, t.weight),
    string: ""
  };
  return i.string = Nb(i), i;
}
function Ji(e, t, s, n) {
  let i, o, r;
  for (i = 0, o = e.length; i < o; ++i)
    if (r = e[i], r !== void 0 && r !== void 0)
      return r;
}
function ty(e, t, s) {
  const { min: n, max: i } = e, o = ab(t, (i - n) / 2), r = (a, l) => s && a === 0 ? 0 : a + l;
  return {
    min: r(n, -Math.abs(o)),
    max: r(i, o)
  };
}
function An(e, t) {
  return Object.assign(Object.create(e), t);
}
function Ba(e, t = [
  ""
], s, n, i = () => e[0]) {
  const o = s || e;
  typeof n > "u" && (n = ad("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: n,
    _getTarget: i,
    override: (a) => Ba([
      a,
      ...e
    ], t, o, n)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return od(a, l, () => ly(l, t, e, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return wc(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return wc(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const u = a._storage || (a._storage = i());
      return a[l] = u[l] = c, delete a._keys, !0;
    }
  });
}
function Dn(e, t, s, n) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: s,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: id(e, n),
    setContext: (o) => Dn(e, o, s, n),
    override: (o) => Dn(e.override(o), t, s, n)
  };
  return new Proxy(i, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return od(o, r, () => sy(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(e, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(e, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return e[r] = a, delete o[r], !0;
    }
  });
}
function id(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: s = t.scriptable, _indexable: n = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: s,
    indexable: n,
    isScriptable: Ds(s) ? s : () => s,
    isIndexable: Ds(n) ? n : () => n
  };
}
const ey = (e, t) => e ? e + Na(t) : t, Ua = (e, t) => Ot(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function od(e, t, s) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const n = s();
  return e[t] = n, n;
}
function sy(e, t, s) {
  const { _proxy: n, _context: i, _subProxy: o, _descriptors: r } = e;
  let a = n[t];
  return Ds(a) && r.isScriptable(t) && (a = ny(t, a, e, s)), qt(a) && a.length && (a = iy(t, a, e, r.isIndexable)), Ua(t, a) && (a = Dn(a, i, o && o[t], r)), a;
}
function ny(e, t, s, n) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = s;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let l = t(o, r || n);
  return a.delete(e), Ua(e, l) && (l = Wa(i._scopes, i, e, l)), l;
}
function iy(e, t, s, n) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = s;
  if (typeof o.index < "u" && n(e))
    return t[o.index % t.length];
  if (Ot(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const f = Wa(c, i, e, u);
      t.push(Dn(f, o, r && r[e], a));
    }
  }
  return t;
}
function rd(e, t, s) {
  return Ds(e) ? e(t, s) : e;
}
const oy = (e, t) => e === !0 ? t : typeof e == "string" ? Vo(t, e) : void 0;
function ry(e, t, s, n, i) {
  for (const o of t) {
    const r = oy(s, o);
    if (r) {
      e.add(r);
      const a = rd(r._fallback, s, i);
      if (typeof a < "u" && a !== s && a !== n)
        return a;
    } else if (r === !1 && typeof n < "u" && s !== n)
      return null;
  }
  return !1;
}
function Wa(e, t, s, n) {
  const i = t._rootScopes, o = rd(t._fallback, s, n), r = [
    ...e,
    ...i
  ], a = /* @__PURE__ */ new Set();
  a.add(n);
  let l = xc(a, r, s, o || s, n);
  return l === null || typeof o < "u" && o !== s && (l = xc(a, r, o, l, n), l === null) ? !1 : Ba(Array.from(a), [
    ""
  ], i, o, () => ay(t, s, n));
}
function xc(e, t, s, n, i) {
  for (; s; )
    s = ry(e, t, s, n, i);
  return s;
}
function ay(e, t, s) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const i = n[t];
  return qt(i) && Ot(s) ? s : i || {};
}
function ly(e, t, s, n) {
  let i;
  for (const o of t)
    if (i = ad(ey(o, e), s), typeof i < "u")
      return Ua(e, i) ? Wa(s, n, e, i) : i;
}
function ad(e, t) {
  for (const s of t) {
    if (!s)
      continue;
    const n = s[e];
    if (typeof n < "u")
      return n;
  }
}
function wc(e) {
  let t = e._keys;
  return t || (t = e._keys = cy(e._scopes)), t;
}
function cy(e) {
  const t = /* @__PURE__ */ new Set();
  for (const s of e)
    for (const n of Object.keys(s).filter((i) => !i.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
const uy = Number.EPSILON || 1e-14, In = (e, t) => t < e.length && !e[t].skip && e[t], ld = (e) => e === "x" ? "y" : "x";
function fy(e, t, s, n) {
  const i = e.skip ? t : e, o = t, r = s.skip ? t : s, a = hc(o, i), l = hc(r, o);
  let c = a / (a + l), u = l / (a + l);
  c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
  const f = n * c, d = n * u;
  return {
    previous: {
      x: o.x - f * (r.x - i.x),
      y: o.y - f * (r.y - i.y)
    },
    next: {
      x: o.x + d * (r.x - i.x),
      y: o.y + d * (r.y - i.y)
    }
  };
}
function dy(e, t, s) {
  const n = e.length;
  let i, o, r, a, l, c = In(e, 0);
  for (let u = 0; u < n - 1; ++u)
    if (l = c, c = In(e, u + 1), !(!l || !c)) {
      if (oi(t[u], 0, uy)) {
        s[u] = s[u + 1] = 0;
        continue;
      }
      i = s[u] / t[u], o = s[u + 1] / t[u], a = Math.pow(i, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), s[u] = i * r * t[u], s[u + 1] = o * r * t[u]);
    }
}
function hy(e, t, s = "x") {
  const n = ld(s), i = e.length;
  let o, r, a, l = In(e, 0);
  for (let c = 0; c < i; ++c) {
    if (r = a, a = l, l = In(e, c + 1), !a)
      continue;
    const u = a[s], f = a[n];
    r && (o = (u - r[s]) / 3, a[`cp1${s}`] = u - o, a[`cp1${n}`] = f - o * t[c]), l && (o = (l[s] - u) / 3, a[`cp2${s}`] = u + o, a[`cp2${n}`] = f + o * t[c]);
  }
}
function py(e, t = "x") {
  const s = ld(t), n = e.length, i = Array(n).fill(0), o = Array(n);
  let r, a, l, c = In(e, 0);
  for (r = 0; r < n; ++r)
    if (a = l, l = c, c = In(e, r + 1), !!l) {
      if (c) {
        const u = c[t] - l[t];
        i[r] = u !== 0 ? (c[s] - l[s]) / u : 0;
      }
      o[r] = a ? c ? Cn(i[r - 1]) !== Cn(i[r]) ? 0 : (i[r - 1] + i[r]) / 2 : i[r - 1] : i[r];
    }
  dy(e, i, o), hy(e, o, t);
}
function Zi(e, t, s) {
  return Math.max(Math.min(e, s), t);
}
function gy(e, t) {
  let s, n, i, o, r, a = xi(e[0], t);
  for (s = 0, n = e.length; s < n; ++s)
    r = o, o = a, a = s < n - 1 && xi(e[s + 1], t), o && (i = e[s], r && (i.cp1x = Zi(i.cp1x, t.left, t.right), i.cp1y = Zi(i.cp1y, t.top, t.bottom)), a && (i.cp2x = Zi(i.cp2x, t.left, t.right), i.cp2y = Zi(i.cp2y, t.top, t.bottom)));
}
function my(e, t, s, n, i) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    py(e, i);
  else {
    let c = n ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = fy(c, a, e[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && gy(e, s);
}
function Ka() {
  return typeof window < "u" && typeof document < "u";
}
function Ga(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function zo(e, t, s) {
  let n;
  return typeof e == "string" ? (n = parseInt(e, 10), e.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[s])) : n = e, n;
}
const nr = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function _y(e, t) {
  return nr(e).getPropertyValue(t);
}
const by = [
  "top",
  "right",
  "bottom",
  "left"
];
function tn(e, t, s) {
  const n = {};
  s = s ? "-" + s : "";
  for (let i = 0; i < 4; i++) {
    const o = by[i];
    n[o] = parseFloat(e[t + "-" + o + s]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const yy = (e, t, s) => (e > 0 || t > 0) && (!s || !s.shadowRoot);
function vy(e, t) {
  const s = e.touches, n = s && s.length ? s[0] : e, { offsetX: i, offsetY: o } = n;
  let r = !1, a, l;
  if (yy(i, o, e.target))
    a = i, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = n.clientX - c.left, l = n.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function zs(e, t) {
  if ("native" in e)
    return e;
  const { canvas: s, currentDevicePixelRatio: n } = t, i = nr(s), o = i.boxSizing === "border-box", r = tn(i, "padding"), a = tn(i, "border", "width"), { x: l, y: c, box: u } = vy(e, s), f = r.left + (u && a.left), d = r.top + (u && a.top);
  let { width: h, height: _ } = t;
  return o && (h -= r.width + a.width, _ -= r.height + a.height), {
    x: Math.round((l - f) / h * s.width / n),
    y: Math.round((c - d) / _ * s.height / n)
  };
}
function xy(e, t, s) {
  let n, i;
  if (t === void 0 || s === void 0) {
    const o = e && Ga(e);
    if (!o)
      t = e.clientWidth, s = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = nr(o), l = tn(a, "border", "width"), c = tn(a, "padding");
      t = r.width - c.width - l.width, s = r.height - c.height - l.height, n = zo(a.maxWidth, o, "clientWidth"), i = zo(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: s,
    maxWidth: n || Ho,
    maxHeight: i || Ho
  };
}
const Qi = (e) => Math.round(e * 10) / 10;
function wy(e, t, s, n) {
  const i = nr(e), o = tn(i, "margin"), r = zo(i.maxWidth, e, "clientWidth") || Ho, a = zo(i.maxHeight, e, "clientHeight") || Ho, l = xy(e, t, s);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const d = tn(i, "border", "width"), h = tn(i, "padding");
    c -= h.width + d.width, u -= h.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, n ? c / n : u - o.height), c = Qi(Math.min(c, r, l.maxWidth)), u = Qi(Math.min(u, a, l.maxHeight)), c && !u && (u = Qi(c / 2)), (t !== void 0 || s !== void 0) && n && l.height && u > l.height && (u = l.height, c = Qi(Math.floor(u * n))), {
    width: c,
    height: u
  };
}
function Sc(e, t, s) {
  const n = t || 1, i = Math.floor(e.height * n), o = Math.floor(e.width * n);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (s || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== n || r.height !== i || r.width !== o ? (e.currentDevicePixelRatio = n, r.height = i, r.width = o, e.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const Sy = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    Ka() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function kc(e, t) {
  const s = _y(e, t), n = s && s.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function Bs(e, t, s, n) {
  return {
    x: e.x + s * (t.x - e.x),
    y: e.y + s * (t.y - e.y)
  };
}
function ky(e, t, s, n) {
  return {
    x: e.x + s * (t.x - e.x),
    y: n === "middle" ? s < 0.5 ? e.y : t.y : n === "after" ? s < 1 ? e.y : t.y : s > 0 ? t.y : e.y
  };
}
function Oy(e, t, s, n) {
  const i = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Bs(e, i, s), a = Bs(i, o, s), l = Bs(o, t, s), c = Bs(r, a, s), u = Bs(a, l, s);
  return Bs(c, u, s);
}
function cd(e) {
  return e === "angle" ? {
    between: qf,
    compare: xb,
    normalize: ds
  } : {
    between: Sb,
    compare: (t, s) => t - s,
    normalize: (t) => t
  };
}
function Oc({ start: e, end: t, count: s, loop: n, style: i }) {
  return {
    start: e % s,
    end: t % s,
    loop: n && (t - e + 1) % s === 0,
    style: i
  };
}
function My(e, t, s) {
  const { property: n, start: i, end: o } = s, { between: r, normalize: a } = cd(n), l = t.length;
  let { start: c, end: u, loop: f } = e, d, h;
  if (f) {
    for (c += l, u += l, d = 0, h = l; d < h && r(a(t[c % l][n]), i, o); ++d)
      c--, u--;
    c %= l, u %= l;
  }
  return u < c && (u += l), {
    start: c,
    end: u,
    loop: f,
    style: e.style
  };
}
function Cy(e, t, s) {
  if (!s)
    return [
      e
    ];
  const { property: n, start: i, end: o } = s, r = t.length, { compare: a, between: l, normalize: c } = cd(n), { start: u, end: f, loop: d, style: h } = My(e, t, s), _ = [];
  let m = !1, y = null, C, j, Y;
  const tt = () => l(i, Y, C) && a(i, Y) !== 0, M = () => a(o, C) === 0 || l(o, Y, C), X = () => m || tt(), S = () => !m || M();
  for (let k = u, R = u; k <= f; ++k)
    j = t[k % r], !j.skip && (C = c(j[n]), C !== Y && (m = l(C, i, o), y === null && X() && (y = a(C, i) === 0 ? k : R), y !== null && S() && (_.push(Oc({
      start: y,
      end: k,
      loop: d,
      count: r,
      style: h
    })), y = null), R = k, Y = C));
  return y !== null && _.push(Oc({
    start: y,
    end: f,
    loop: d,
    count: r,
    style: h
  })), _;
}
function Ty(e, t) {
  const s = [], n = e.segments;
  for (let i = 0; i < n.length; i++) {
    const o = Cy(n[i], e.points, t);
    o.length && s.push(...o);
  }
  return s;
}
function Dy(e, t, s, n) {
  let i = 0, o = t - 1;
  if (s && !n)
    for (; i < t && !e[i].skip; )
      i++;
  for (; i < t && e[i].skip; )
    i++;
  for (i %= t, s && (o += i); o > i && e[o % t].skip; )
    o--;
  return o %= t, {
    start: i,
    end: o
  };
}
function Iy(e, t, s, n) {
  const i = e.length, o = [];
  let r = t, a = e[t], l;
  for (l = t + 1; l <= s; ++l) {
    const c = e[l % i];
    c.skip || c.stop ? a.skip || (n = !1, o.push({
      start: t % i,
      end: (l - 1) % i,
      loop: n
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % i,
    end: r % i,
    loop: n
  }), o;
}
function Py(e, t) {
  const s = e.points, n = e.options.spanGaps, i = s.length;
  if (!i)
    return [];
  const o = !!e._loop, { start: r, end: a } = Dy(s, i, o, n);
  if (n === !0)
    return Mc(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], s, t);
  const l = a < r ? a + i : a, c = !!e._fullLoop && r === 0 && a === i - 1;
  return Mc(e, Iy(s, r, l, c), s, t);
}
function Mc(e, t, s, n) {
  return !n || !n.setContext || !s ? t : Ey(e, t, s, n);
}
function Ey(e, t, s, n) {
  const i = e._chart.getContext(), o = Cc(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = s.length, c = [];
  let u = o, f = t[0].start, d = f;
  function h(_, m, y, C) {
    const j = a ? -1 : 1;
    if (_ !== m) {
      for (_ += l; s[_ % l].skip; )
        _ -= j;
      for (; s[m % l].skip; )
        m += j;
      _ % l !== m % l && (c.push({
        start: _ % l,
        end: m % l,
        loop: y,
        style: C
      }), u = C, f = m % l);
    }
  }
  for (const _ of t) {
    f = a ? f : _.start;
    let m = s[f % l], y;
    for (d = f + 1; d <= _.end; d++) {
      const C = s[d % l];
      y = Cc(n.setContext(An(i, {
        type: "segment",
        p0: m,
        p1: C,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), Ay(y, u) && h(f, d - 1, _.loop, u), m = C, u = y;
    }
    f < d - 1 && h(f, d - 1, _.loop, u);
  }
  return c;
}
function Cc(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  };
}
function Ay(e, t) {
  if (!t)
    return !1;
  const s = [], n = function(i, o) {
    return za(o) ? (s.includes(o) || s.push(o), s.indexOf(o)) : o;
  };
  return JSON.stringify(e, n) !== JSON.stringify(t, n);
}
function to(e, t, s) {
  return e.options.clip ? e[s] : t[s];
}
function Ry(e, t) {
  const { xScale: s, yScale: n } = e;
  return s && n ? {
    left: to(s, t, "left"),
    right: to(s, t, "right"),
    top: to(n, t, "top"),
    bottom: to(n, t, "bottom")
  } : t;
}
function $y(e, t) {
  const s = t._clip;
  if (s.disabled)
    return !1;
  const n = Ry(t, e.chartArea);
  return {
    left: s.left === !1 ? 0 : n.left - (s.left === !0 ? 0 : s.left),
    right: s.right === !1 ? e.width : n.right + (s.right === !0 ? 0 : s.right),
    top: s.top === !1 ? 0 : n.top - (s.top === !0 ? 0 : s.top),
    bottom: s.bottom === !1 ? e.height : n.bottom + (s.bottom === !0 ? 0 : s.bottom)
  };
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Ly {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, s, n, i) {
    const o = s.listeners[i], r = s.duration;
    o.forEach((a) => a({
      chart: t,
      initial: s.initial,
      numSteps: r,
      currentStep: Math.min(n - s.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Jf.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let s = 0;
    this._charts.forEach((n, i) => {
      if (!n.running || !n.items.length)
        return;
      const o = n.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > n.duration && (n.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (i.draw(), this._notify(i, n, t, "progress")), o.length || (n.running = !1, this._notify(i, n, t, "complete"), n.initial = !1), s += o.length;
    }), this._lastDate = t, s === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const s = this._charts;
    let n = s.get(t);
    return n || (n = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, s.set(t, n)), n;
  }
  listen(t, s, n) {
    this._getAnims(t).listeners[s].push(n);
  }
  add(t, s) {
    !s || !s.length || this._getAnims(t).items.push(...s);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const s = this._charts.get(t);
    s && (s.running = !0, s.start = Date.now(), s.duration = s.items.reduce((n, i) => Math.max(n, i._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const s = this._charts.get(t);
    return !(!s || !s.running || !s.items.length);
  }
  stop(t) {
    const s = this._charts.get(t);
    if (!s || !s.items.length)
      return;
    const n = s.items;
    let i = n.length - 1;
    for (; i >= 0; --i)
      n[i].cancel();
    s.items = [], this._notify(t, s, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Qe = /* @__PURE__ */ new Ly();
const Tc = "transparent", Fy = {
  boolean(e, t, s) {
    return s > 0.5 ? t : e;
  },
  color(e, t, s) {
    const n = _c(e || Tc), i = n.valid && _c(t || Tc);
    return i && i.valid ? i.mix(n, s).hexString() : t;
  },
  number(e, t, s) {
    return e + (t - e) * s;
  }
};
class jy {
  constructor(t, s, n, i) {
    const o = s[n];
    i = Ji([
      t.to,
      i,
      o,
      t.from
    ]);
    const r = Ji([
      t.from,
      o,
      i
    ]);
    this._active = !0, this._fn = t.fn || Fy[t.type || typeof r], this._easing = ai[t.easing] || ai.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = s, this._prop = n, this._from = r, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, s, n) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], o = n - this._start, r = this._duration - o;
      this._start = n, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Ji([
        t.to,
        s,
        i,
        t.from
      ]), this._from = Ji([
        t.from,
        i,
        s
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const s = t - this._start, n = this._duration, i = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || s < n), !this._active) {
      this._target[i] = a, this._notify(!0);
      return;
    }
    if (s < 0) {
      this._target[i] = o;
      return;
    }
    l = s / n % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[i] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((s, n) => {
      t.push({
        res: s,
        rej: n
      });
    });
  }
  _notify(t) {
    const s = t ? "res" : "rej", n = this._promises || [];
    for (let i = 0; i < n.length; i++)
      n[i][s]();
  }
}
class Vy {
  constructor(t, s) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(s);
  }
  configure(t) {
    if (!Ot(t))
      return;
    const s = Object.keys(Vt.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!Ot(o))
        return;
      const r = {};
      for (const a of s)
        r[a] = o[a];
      (qt(o.properties) && o.properties || [
        i
      ]).forEach((a) => {
        (a === i || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, s) {
    const n = s.options, i = Hy(t, n);
    if (!i)
      return [];
    const o = this._createAnimations(i, n);
    return n.$shared && Ny(t.options.$animations, n).then(() => {
      t.options = n;
    }, () => {
    }), o;
  }
  _createAnimations(t, s) {
    const n = this._properties, i = [], o = t.$animations || (t.$animations = {}), r = Object.keys(s), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, s));
        continue;
      }
      const u = s[c];
      let f = o[c];
      const d = n.get(c);
      if (f)
        if (d && f.active()) {
          f.update(d, u, a);
          continue;
        } else
          f.cancel();
      if (!d || !d.duration) {
        t[c] = u;
        continue;
      }
      o[c] = f = new jy(d, t, c, u), i.push(f);
    }
    return i;
  }
  update(t, s) {
    if (this._properties.size === 0) {
      Object.assign(t, s);
      return;
    }
    const n = this._createAnimations(t, s);
    if (n.length)
      return Qe.add(this._chart, n), !0;
  }
}
function Ny(e, t) {
  const s = [], n = Object.keys(t);
  for (let i = 0; i < n.length; i++) {
    const o = e[n[i]];
    o && o.active() && s.push(o.wait());
  }
  return Promise.all(s);
}
function Hy(e, t) {
  if (!t)
    return;
  let s = e.options;
  if (!s) {
    e.options = t;
    return;
  }
  return s.$shared && (e.options = s = Object.assign({}, s, {
    $shared: !1,
    $animations: {}
  })), s;
}
function Dc(e, t) {
  const s = e && e.options || {}, n = s.reverse, i = s.min === void 0 ? t : 0, o = s.max === void 0 ? t : 0;
  return {
    start: n ? o : i,
    end: n ? i : o
  };
}
function zy(e, t, s) {
  if (s === !1)
    return !1;
  const n = Dc(e, s), i = Dc(t, s);
  return {
    top: i.end,
    right: n.end,
    bottom: i.start,
    left: n.start
  };
}
function By(e) {
  let t, s, n, i;
  return Ot(e) ? (t = e.top, s = e.right, n = e.bottom, i = e.left) : t = s = n = i = e, {
    top: t,
    right: s,
    bottom: n,
    left: i,
    disabled: e === !1
  };
}
function ud(e, t) {
  const s = [], n = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = n.length; i < o; ++i)
    s.push(n[i].index);
  return s;
}
function Ic(e, t, s, n = {}) {
  const i = e.keys, o = n.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let u = !1;
  for (r = 0, a = i.length; r < a; ++r) {
    if (l = +i[r], l === s) {
      if (u = !0, n.all)
        continue;
      break;
    }
    c = e.values[l], Oe(c) && (o || t === 0 || Cn(t) === Cn(c)) && (t += c);
  }
  return !u && !n.all ? 0 : t;
}
function Uy(e, t) {
  const { iScale: s, vScale: n } = t, i = s.axis === "x" ? "x" : "y", o = n.axis === "x" ? "x" : "y", r = Object.keys(e), a = new Array(r.length);
  let l, c, u;
  for (l = 0, c = r.length; l < c; ++l)
    u = r[l], a[l] = {
      [i]: u,
      [o]: e[u]
    };
  return a;
}
function Ir(e, t) {
  const s = e && e.options.stacked;
  return s || s === void 0 && t.stack !== void 0;
}
function Wy(e, t, s) {
  return `${e.id}.${t.id}.${s.stack || s.type}`;
}
function Ky(e) {
  const { min: t, max: s, minDefined: n, maxDefined: i } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: i ? s : Number.POSITIVE_INFINITY
  };
}
function Gy(e, t, s) {
  const n = e[t] || (e[t] = {});
  return n[s] || (n[s] = {});
}
function Pc(e, t, s, n) {
  for (const i of t.getMatchingVisibleMetas(n).reverse()) {
    const o = e[i.index];
    if (s && o > 0 || !s && o < 0)
      return i.index;
  }
  return null;
}
function Ec(e, t) {
  const { chart: s, _cachedMeta: n } = e, i = s._stacks || (s._stacks = {}), { iScale: o, vScale: r, index: a } = n, l = o.axis, c = r.axis, u = Wy(o, r, n), f = t.length;
  let d;
  for (let h = 0; h < f; ++h) {
    const _ = t[h], { [l]: m, [c]: y } = _, C = _._stacks || (_._stacks = {});
    d = C[c] = Gy(i, u, m), d[a] = y, d._top = Pc(d, r, !0, n.type), d._bottom = Pc(d, r, !1, n.type);
    const j = d._visualValues || (d._visualValues = {});
    j[a] = y;
  }
}
function Pr(e, t) {
  const s = e.scales;
  return Object.keys(s).filter((n) => s[n].axis === t).shift();
}
function Yy(e, t) {
  return An(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function qy(e, t, s) {
  return An(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: s,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Vn(e, t) {
  const s = e.controller.index, n = e.vScale && e.vScale.axis;
  if (n) {
    t = t || e._parsed;
    for (const i of t) {
      const o = i._stacks;
      if (!o || o[n] === void 0 || o[n][s] === void 0)
        return;
      delete o[n][s], o[n]._visualValues !== void 0 && o[n]._visualValues[s] !== void 0 && delete o[n]._visualValues[s];
    }
  }
}
const Er = (e) => e === "reset" || e === "none", Ac = (e, t) => t ? e : Object.assign({}, e), Xy = (e, t, s) => e && !t.hidden && t._stacked && {
  keys: ud(s, !0),
  values: null
};
class ci {
  constructor(t, s) {
    this.chart = t, this._ctx = t.ctx, this.index = s, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Ir(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Vn(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, s = this._cachedMeta, n = this.getDataset(), i = (f, d, h, _) => f === "x" ? d : f === "r" ? _ : h, o = s.xAxisID = Tt(n.xAxisID, Pr(t, "x")), r = s.yAxisID = Tt(n.yAxisID, Pr(t, "y")), a = s.rAxisID = Tt(n.rAxisID, Pr(t, "r")), l = s.indexAxis, c = s.iAxisID = i(l, o, r, a), u = s.vAxisID = i(l, r, o, a);
    s.xScale = this.getScaleForId(o), s.yScale = this.getScaleForId(r), s.rScale = this.getScaleForId(a), s.iScale = this.getScaleForId(c), s.vScale = this.getScaleForId(u);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const s = this._cachedMeta;
    return t === s.iScale ? s.vScale : s.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && pc(this._data, this), t._stacked && Vn(t);
  }
  _dataCheck() {
    const t = this.getDataset(), s = t.data || (t.data = []), n = this._data;
    if (Ot(s)) {
      const i = this._cachedMeta;
      this._data = Uy(s, i);
    } else if (n !== s) {
      if (n) {
        pc(n, this);
        const i = this._cachedMeta;
        Vn(i), i._parsed = [];
      }
      s && Object.isExtensible(s) && Mb(s, this), this._syncList = [], this._data = s;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const s = this._cachedMeta, n = this.getDataset();
    let i = !1;
    this._dataCheck();
    const o = s._stacked;
    s._stacked = Ir(s.vScale, s), s.stack !== n.stack && (i = !0, Vn(s), s.stack = n.stack), this._resyncElements(t), (i || o !== s._stacked) && (Ec(this, s._parsed), s._stacked = Ir(s.vScale, s));
  }
  configure() {
    const t = this.chart.config, s = t.datasetScopeKeys(this._type), n = t.getOptionScopes(this.getDataset(), s, !0);
    this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, s) {
    const { _cachedMeta: n, _data: i } = this, { iScale: o, _stacked: r } = n, a = o.axis;
    let l = t === 0 && s === i.length ? !0 : n._sorted, c = t > 0 && n._parsed[t - 1], u, f, d;
    if (this._parsing === !1)
      n._parsed = i, n._sorted = !0, d = i;
    else {
      qt(i[t]) ? d = this.parseArrayData(n, i, t, s) : Ot(i[t]) ? d = this.parseObjectData(n, i, t, s) : d = this.parsePrimitiveData(n, i, t, s);
      const h = () => f[a] === null || c && f[a] < c[a];
      for (u = 0; u < s; ++u)
        n._parsed[u + t] = f = d[u], l && (h() && (l = !1), c = f);
      n._sorted = l;
    }
    r && Ec(this, d);
  }
  parsePrimitiveData(t, s, n, i) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), u = o === r, f = new Array(i);
    let d, h, _;
    for (d = 0, h = i; d < h; ++d)
      _ = d + n, f[d] = {
        [a]: u || o.parse(c[_], _),
        [l]: r.parse(s[_], _)
      };
    return f;
  }
  parseArrayData(t, s, n, i) {
    const { xScale: o, yScale: r } = t, a = new Array(i);
    let l, c, u, f;
    for (l = 0, c = i; l < c; ++l)
      u = l + n, f = s[u], a[l] = {
        x: o.parse(f[0], u),
        y: r.parse(f[1], u)
      };
    return a;
  }
  parseObjectData(t, s, n, i) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(i);
    let u, f, d, h;
    for (u = 0, f = i; u < f; ++u)
      d = u + n, h = s[d], c[u] = {
        x: o.parse(Vo(h, a), d),
        y: r.parse(Vo(h, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, s, n) {
    const i = this.chart, o = this._cachedMeta, r = s[t.axis], a = {
      keys: ud(i, !0),
      values: s._stacks[t.axis]._visualValues
    };
    return Ic(a, r, o.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, s, n, i) {
    const o = n[s.axis];
    let r = o === null ? NaN : o;
    const a = i && n._stacks[s.axis];
    i && a && (i.values = a, r = Ic(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, s) {
    const n = this._cachedMeta, i = n._parsed, o = n._sorted && t === n.iScale, r = i.length, a = this._getOtherScale(t), l = Xy(s, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: f } = Ky(a);
    let d, h;
    function _() {
      h = i[d];
      const m = h[a.axis];
      return !Oe(h[t.axis]) || u > m || f < m;
    }
    for (d = 0; d < r && !(!_() && (this.updateRangeFromParsed(c, t, h, l), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!_()) {
          this.updateRangeFromParsed(c, t, h, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const s = this._cachedMeta._parsed, n = [];
    let i, o, r;
    for (i = 0, o = s.length; i < o; ++i)
      r = s[i][t.axis], Oe(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const s = this._cachedMeta, n = s.iScale, i = s.vScale, o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: i ? "" + i.getLabelForValue(o[i.axis]) : ""
    };
  }
  _update(t) {
    const s = this._cachedMeta;
    this.update(t || "default"), s._clip = By(Tt(this.options.clip, zy(s.xScale, s.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, s = this.chart, n = this._cachedMeta, i = n.data || [], o = s.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || i.length - a, c = this.options.drawActiveElementsOnTop;
    let u;
    for (n.dataset && n.dataset.draw(t, o, a, l), u = a; u < a + l; ++u) {
      const f = i[u];
      f.hidden || (f.active && c ? r.push(f) : f.draw(t, o));
    }
    for (u = 0; u < r.length; ++u)
      r[u].draw(t, o);
  }
  getStyle(t, s) {
    const n = s ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, s, n) {
    const i = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = qy(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Yy(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
    return o.active = !!s, o.mode = n, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, s) {
    return this._resolveElementOptions(this.dataElementType.id, s, t);
  }
  _resolveElementOptions(t, s = "default", n) {
    const i = s === "active", o = this._cachedDataOpts, r = t + "-" + s, a = o[r], l = this.enableOptionSharing && No(n);
    if (a)
      return Ac(a, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), f = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), h = Object.keys(Vt.elements[t]), _ = () => this.getContext(n, i, s), m = c.resolveNamedOptions(d, h, _, f);
    return m.$shared && (m.$shared = l, o[r] = Object.freeze(Ac(m, l))), m;
  }
  _resolveAnimations(t, s, n) {
    const i = this.chart, o = this._cachedDataOpts, r = `animation-${s}`, a = o[r];
    if (a)
      return a;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config, f = u.datasetAnimationScopeKeys(this._type, s), d = u.getOptionScopes(this.getDataset(), f);
      l = u.createResolver(d, this.getContext(t, n, s));
    }
    const c = new Vy(i, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, s) {
    return !s || Er(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, s) {
    const n = this.resolveDataElementOptions(t, s), i = this._sharedOptions, o = this.getSharedOptions(n), r = this.includeOptions(s, o) || o !== i;
    return this.updateSharedOptions(o, s, n), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, s, n, i) {
    Er(i) ? Object.assign(t, n) : this._resolveAnimations(s, i).update(t, n);
  }
  updateSharedOptions(t, s, n) {
    t && !Er(s) && this._resolveAnimations(void 0, s).update(t, n);
  }
  _setStyle(t, s, n, i) {
    t.active = i;
    const o = this.getStyle(s, i);
    this._resolveAnimations(s, n, i).update(t, {
      options: !i && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, s, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, s, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const s = this._data, n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const i = n.length, o = s.length, r = Math.min(o, i);
    r && this.parse(0, r), o > i ? this._insertElements(i, o - i, t) : o < i && this._removeElements(o, i - o);
  }
  _insertElements(t, s, n = !0) {
    const i = this._cachedMeta, o = i.data, r = t + s;
    let a;
    const l = (c) => {
      for (c.length += s, a = c.length - 1; a >= r; a--)
        c[a] = c[a - s];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(i._parsed), this.parse(t, s), n && this.updateElements(o, t, s, "reset");
  }
  updateElements(t, s, n, i) {
  }
  _removeElements(t, s) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const i = n._parsed.splice(t, s);
      n._stacked && Vn(n, i);
    }
    n.data.splice(t, s);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [s, n, i] = t;
      this[s](n, i);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, s) {
    s && this._sync([
      "_removeElements",
      t,
      s
    ]);
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      t,
      n
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
pt(ci, "defaults", {}), pt(ci, "datasetElementType", null), pt(ci, "dataElementType", null);
class ui extends ci {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const s = this._cachedMeta, { dataset: n, data: i = [], _dataset: o } = s, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Db(s, i, r);
    this._drawStart = a, this._drawCount = l, Ib(s) && (a = 0, l = i.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(n, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(i, a, l, t);
  }
  updateElements(t, s, n, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: f } = this._getSharedOptions(s, i), d = r.axis, h = a.axis, { spanGaps: _, segment: m } = this.options, y = vi(_) ? _ : Number.POSITIVE_INFINITY, C = this.chart._animationsDisabled || o || i === "none", j = s + n, Y = t.length;
    let tt = s > 0 && this.getParsed(s - 1);
    for (let M = 0; M < Y; ++M) {
      const X = t[M], S = C ? X : {};
      if (M < s || M >= j) {
        S.skip = !0;
        continue;
      }
      const k = this.getParsed(M), R = Pt(k[h]), L = S[d] = r.getPixelForValue(k[d], M), $ = S[h] = o || R ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[h], M);
      S.skip = isNaN(L) || isNaN($) || R, S.stop = M > 0 && Math.abs(k[d] - tt[d]) > y, m && (S.parsed = k, S.raw = c.data[M]), f && (S.options = u || this.resolveDataElementOptions(M, X.active ? "active" : i)), C || this.updateElement(X, M, S, i), tt = k;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, s = t.dataset, n = s.options && s.options.borderWidth || 0, i = t.data || [];
    if (!i.length)
      return n;
    const o = i[0].size(this.resolveDataElementOptions(0)), r = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(n, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
pt(ui, "id", "line"), pt(ui, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), pt(ui, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
function js() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Ya {
  constructor(t) {
    pt(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Ya.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return js();
  }
  parse() {
    return js();
  }
  format() {
    return js();
  }
  add() {
    return js();
  }
  diff() {
    return js();
  }
  startOf() {
    return js();
  }
  endOf() {
    return js();
  }
}
var Jy = {
  _date: Ya
};
function Zy(e, t, s, n) {
  const { controller: i, data: o, _sorted: r } = e, a = i._cachedMeta.iScale, l = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? kb : Ws;
    if (n) {
      if (i._sharedOptions) {
        const u = o[0], f = typeof u.getRange == "function" && u.getRange(t);
        if (f) {
          const d = c(o, t, s - f), h = c(o, t, s + f);
          return {
            lo: d.lo,
            hi: h.hi
          };
        }
      }
    } else {
      const u = c(o, t, s);
      if (l) {
        const { vScale: f } = i._cachedMeta, { _parsed: d } = e, h = d.slice(0, u.lo + 1).reverse().findIndex((m) => !Pt(m[f.axis]));
        u.lo -= Math.max(0, h);
        const _ = d.slice(u.hi).findIndex((m) => !Pt(m[f.axis]));
        u.hi += Math.max(0, _);
      }
      return u;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function ir(e, t, s, n, i) {
  const o = e.getSortedVisibleDatasetMetas(), r = s[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: u } = o[a], { lo: f, hi: d } = Zy(o[a], t, r, i);
    for (let h = f; h <= d; ++h) {
      const _ = u[h];
      _.skip || n(_, c, h);
    }
  }
}
function Qy(e) {
  const t = e.indexOf("x") !== -1, s = e.indexOf("y") !== -1;
  return function(n, i) {
    const o = t ? Math.abs(n.x - i.x) : 0, r = s ? Math.abs(n.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Ar(e, t, s, n, i) {
  const o = [];
  return !i && !e.isPointInArea(t) || ir(e, s, t, function(a, l, c) {
    !i && !xi(a, e.chartArea, 0) || a.inRange(t.x, t.y, n) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function tv(e, t, s, n) {
  let i = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: u } = r.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: f } = vb(r, {
      x: t.x,
      y: t.y
    });
    qf(f, c, u) && i.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return ir(e, s, t, o), i;
}
function ev(e, t, s, n, i, o) {
  let r = [];
  const a = Qy(s);
  let l = Number.POSITIVE_INFINITY;
  function c(u, f, d) {
    const h = u.inRange(t.x, t.y, i);
    if (n && !h)
      return;
    const _ = u.getCenterPoint(i);
    if (!(!!o || e.isPointInArea(_)) && !h)
      return;
    const y = a(t, _);
    y < l ? (r = [
      {
        element: u,
        datasetIndex: f,
        index: d
      }
    ], l = y) : y === l && r.push({
      element: u,
      datasetIndex: f,
      index: d
    });
  }
  return ir(e, s, t, c), r;
}
function Rr(e, t, s, n, i, o) {
  return !o && !e.isPointInArea(t) ? [] : s === "r" && !n ? tv(e, t, s, i) : ev(e, t, s, n, i, o);
}
function Rc(e, t, s, n, i) {
  const o = [], r = s === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return ir(e, s, t, (l, c, u) => {
    l[r] && l[r](t[s], i) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), a = a || l.inRange(t.x, t.y, i));
  }), n && !a ? [] : o;
}
var sv = {
  modes: {
    index(e, t, s, n) {
      const i = zs(t, e), o = s.axis || "x", r = s.includeInvisible || !1, a = s.intersect ? Ar(e, i, o, n, r) : Rr(e, i, o, !1, n, r), l = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = a[0].index, f = c.data[u];
        f && !f.skip && l.push({
          element: f,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(e, t, s, n) {
      const i = zs(t, e), o = s.axis || "xy", r = s.includeInvisible || !1;
      let a = s.intersect ? Ar(e, i, o, n, r) : Rr(e, i, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = e.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return a;
    },
    point(e, t, s, n) {
      const i = zs(t, e), o = s.axis || "xy", r = s.includeInvisible || !1;
      return Ar(e, i, o, n, r);
    },
    nearest(e, t, s, n) {
      const i = zs(t, e), o = s.axis || "xy", r = s.includeInvisible || !1;
      return Rr(e, i, o, s.intersect, n, r);
    },
    x(e, t, s, n) {
      const i = zs(t, e);
      return Rc(e, i, "x", s.intersect, n);
    },
    y(e, t, s, n) {
      const i = zs(t, e);
      return Rc(e, i, "y", s.intersect, n);
    }
  }
};
const fd = [
  "left",
  "top",
  "right",
  "bottom"
];
function Nn(e, t) {
  return e.filter((s) => s.pos === t);
}
function $c(e, t) {
  return e.filter((s) => fd.indexOf(s.pos) === -1 && s.box.axis === t);
}
function Hn(e, t) {
  return e.sort((s, n) => {
    const i = t ? n : s, o = t ? s : n;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function nv(e) {
  const t = [];
  let s, n, i, o, r, a;
  for (s = 0, n = (e || []).length; s < n; ++s)
    i = e[s], { position: o, options: { stack: r, stackWeight: a = 1 } } = i, t.push({
      index: s,
      box: i,
      pos: o,
      horizontal: i.isHorizontal(),
      weight: i.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function iv(e) {
  const t = {};
  for (const s of e) {
    const { stack: n, pos: i, stackWeight: o } = s;
    if (!n || !fd.includes(i))
      continue;
    const r = t[n] || (t[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function ov(e, t) {
  const s = iv(e), { vBoxMaxWidth: n, hBoxMaxHeight: i } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = s[a.stack], u = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = u ? u * n : l && t.availableWidth, a.height = i) : (a.width = n, a.height = u ? u * i : l && t.availableHeight);
  }
  return s;
}
function rv(e) {
  const t = nv(e), s = Hn(t.filter((c) => c.box.fullSize), !0), n = Hn(Nn(t, "left"), !0), i = Hn(Nn(t, "right")), o = Hn(Nn(t, "top"), !0), r = Hn(Nn(t, "bottom")), a = $c(t, "x"), l = $c(t, "y");
  return {
    fullSize: s,
    leftAndTop: n.concat(o),
    rightAndBottom: i.concat(l).concat(r).concat(a),
    chartArea: Nn(t, "chartArea"),
    vertical: n.concat(i).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Lc(e, t, s, n) {
  return Math.max(e[s], t[s]) + Math.max(e[n], t[n]);
}
function dd(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function av(e, t, s, n) {
  const { pos: i, box: o } = s, r = e.maxPadding;
  if (!Ot(i)) {
    s.size && (e[i] -= s.size);
    const f = n[s.stack] || {
      size: 0,
      count: 1
    };
    f.size = Math.max(f.size, s.horizontal ? o.height : o.width), s.size = f.size / f.count, e[i] += s.size;
  }
  o.getPadding && dd(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Lc(r, e, "left", "right")), l = Math.max(0, t.outerHeight - Lc(r, e, "top", "bottom")), c = a !== e.w, u = l !== e.h;
  return e.w = a, e.h = l, s.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function lv(e) {
  const t = e.maxPadding;
  function s(n) {
    const i = Math.max(t[n] - e[n], 0);
    return e[n] += i, i;
  }
  e.y += s("top"), e.x += s("left"), s("right"), s("bottom");
}
function cv(e, t) {
  const s = t.maxPadding;
  function n(i) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return i.forEach((r) => {
      o[r] = Math.max(t[r], s[r]);
    }), o;
  }
  return n(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Yn(e, t, s, n) {
  const i = [];
  let o, r, a, l, c, u;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, cv(a.horizontal, t));
    const { same: f, other: d } = av(t, s, a, n);
    c |= f && i.length, u = u || d, l.fullSize || i.push(a);
  }
  return c && Yn(i, t, s, n) || u;
}
function eo(e, t, s, n, i) {
  e.top = s, e.left = t, e.right = t + n, e.bottom = s + i, e.width = n, e.height = i;
}
function Fc(e, t, s, n) {
  const i = s.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = n[a.stack] || {
      placed: 0,
      weight: 1
    }, u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const f = t.w * u, d = c.size || l.height;
      No(c.start) && (r = c.start), l.fullSize ? eo(l, i.left, r, s.outerWidth - i.right - i.left, d) : eo(l, t.left + c.placed, r, f, d), c.start = r, c.placed += f, r = l.bottom;
    } else {
      const f = t.h * u, d = c.size || l.width;
      No(c.start) && (o = c.start), l.fullSize ? eo(l, o, i.top, d, s.outerHeight - i.bottom - i.top) : eo(l, o, t.top + c.placed, d, f), c.start = o, c.placed += f, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Ss = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(s) {
            t.draw(s);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const s = e.boxes ? e.boxes.indexOf(t) : -1;
    s !== -1 && e.boxes.splice(s, 1);
  },
  configure(e, t, s) {
    t.fullSize = s.fullSize, t.position = s.position, t.weight = s.weight;
  },
  update(e, t, s, n) {
    if (!e)
      return;
    const i = Tn(e.options.layout.padding), o = Math.max(t - i.width, 0), r = Math.max(s - i.height, 0), a = rv(e.boxes), l = a.vertical, c = a.horizontal;
    Xt(e.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const u = l.reduce((m, y) => y.box.options && y.box.options.display === !1 ? m : m + 1, 0) || 1, f = Object.freeze({
      outerWidth: t,
      outerHeight: s,
      padding: i,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, i);
    dd(d, Tn(n));
    const h = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), _ = ov(l.concat(c), f);
    Yn(a.fullSize, h, f, _), Yn(l, h, f, _), Yn(c, h, f, _) && Yn(l, h, f, _), lv(h), Fc(a.leftAndTop, h, f, _), h.x += h.w, h.y += h.h, Fc(a.rightAndBottom, h, f, _), e.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, Xt(a.chartArea, (m) => {
      const y = m.box;
      Object.assign(y, e.chartArea), y.update(h.w, h.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class hd {
  acquireContext(t, s) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, s, n) {
  }
  removeEventListener(t, s, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, s, n, i) {
    return s = Math.max(0, s || t.width), n = n || t.height, {
      width: s,
      height: Math.max(0, i ? Math.floor(s / i) : n)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class uv extends hd {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const yo = "$chartjs", fv = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, jc = (e) => e === null || e === "";
function dv(e, t) {
  const s = e.style, n = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[yo] = {
    initial: {
      height: n,
      width: i,
      style: {
        display: s.display,
        height: s.height,
        width: s.width
      }
    }
  }, s.display = s.display || "block", s.boxSizing = s.boxSizing || "border-box", jc(i)) {
    const o = kc(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (jc(n))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = kc(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const pd = Sy ? {
  passive: !0
} : !1;
function hv(e, t, s) {
  e && e.addEventListener(t, s, pd);
}
function pv(e, t, s) {
  e && e.canvas && e.canvas.removeEventListener(t, s, pd);
}
function gv(e, t) {
  const s = fv[e.type] || e.type, { x: n, y: i } = zs(e, t);
  return {
    type: s,
    chart: t,
    native: e,
    x: n !== void 0 ? n : null,
    y: i !== void 0 ? i : null
  };
}
function Bo(e, t) {
  for (const s of e)
    if (s === t || s.contains(t))
      return !0;
}
function mv(e, t, s) {
  const n = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Bo(a.addedNodes, n), r = r && !Bo(a.removedNodes, n);
    r && s();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function _v(e, t, s) {
  const n = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Bo(a.removedNodes, n), r = r && !Bo(a.addedNodes, n);
    r && s();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const Si = /* @__PURE__ */ new Map();
let Vc = 0;
function gd() {
  const e = window.devicePixelRatio;
  e !== Vc && (Vc = e, Si.forEach((t, s) => {
    s.currentDevicePixelRatio !== e && t();
  }));
}
function bv(e, t) {
  Si.size || window.addEventListener("resize", gd), Si.set(e, t);
}
function yv(e) {
  Si.delete(e), Si.size || window.removeEventListener("resize", gd);
}
function vv(e, t, s) {
  const n = e.canvas, i = n && Ga(n);
  if (!i)
    return;
  const o = Zf((a, l) => {
    const c = i.clientWidth;
    s(a, l), c < i.clientWidth && s();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return r.observe(i), bv(e, o), r;
}
function $r(e, t, s) {
  s && s.disconnect(), t === "resize" && yv(e);
}
function xv(e, t, s) {
  const n = e.canvas, i = Zf((o) => {
    e.ctx !== null && s(gv(o, e));
  }, e);
  return hv(n, t, i), i;
}
class wv extends hd {
  acquireContext(t, s) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (dv(t, s), n) : null;
  }
  releaseContext(t) {
    const s = t.canvas;
    if (!s[yo])
      return !1;
    const n = s[yo].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = n[o];
      Pt(r) ? s.removeAttribute(o) : s.setAttribute(o, r);
    });
    const i = n.style || {};
    return Object.keys(i).forEach((o) => {
      s.style[o] = i[o];
    }), s.width = s.width, delete s[yo], !0;
  }
  addEventListener(t, s, n) {
    this.removeEventListener(t, s);
    const i = t.$proxies || (t.$proxies = {}), r = {
      attach: mv,
      detach: _v,
      resize: vv
    }[s] || xv;
    i[s] = r(t, s, n);
  }
  removeEventListener(t, s) {
    const n = t.$proxies || (t.$proxies = {}), i = n[s];
    if (!i)
      return;
    ({
      attach: $r,
      detach: $r,
      resize: $r
    }[s] || pv)(t, s, i), n[s] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, s, n, i) {
    return wy(t, s, n, i);
  }
  isAttached(t) {
    const s = t && Ga(t);
    return !!(s && s.isConnected);
  }
}
function Sv(e) {
  return !Ka() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? uv : wv;
}
var ao;
let $i = (ao = class {
  constructor() {
    pt(this, "x");
    pt(this, "y");
    pt(this, "active", !1);
    pt(this, "options");
    pt(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: s, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: s,
      y: n
    };
  }
  hasValue() {
    return vi(this.x) && vi(this.y);
  }
  getProps(t, s) {
    const n = this.$animations;
    if (!s || !n)
      return this;
    const i = {};
    return t.forEach((o) => {
      i[o] = n[o] && n[o].active() ? n[o]._to : this[o];
    }), i;
  }
}, pt(ao, "defaults", {}), pt(ao, "defaultRoutes"), ao);
function kv(e, t) {
  const s = e.options.ticks, n = Ov(e), i = Math.min(s.maxTicksLimit || n, n), o = s.major.enabled ? Cv(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > i)
    return Tv(t, c, o, r / i), c;
  const u = Mv(o, t, i);
  if (r > 0) {
    let f, d;
    const h = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (so(t, c, u, Pt(h) ? 0 : a - h, a), f = 0, d = r - 1; f < d; f++)
      so(t, c, u, o[f], o[f + 1]);
    return so(t, c, u, l, Pt(h) ? t.length : l + h), c;
  }
  return so(t, c, u), c;
}
function Ov(e) {
  const t = e.options.offset, s = e._tickSize(), n = e._length / s + (t ? 0 : 1), i = e._maxLength / s;
  return Math.floor(Math.min(n, i));
}
function Mv(e, t, s) {
  const n = Dv(e), i = t.length / s;
  if (!n)
    return Math.max(i, 1);
  const o = gb(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function Cv(e) {
  const t = [];
  let s, n;
  for (s = 0, n = e.length; s < n; s++)
    e[s].major && t.push(s);
  return t;
}
function Tv(e, t, s, n) {
  let i = 0, o = s[0], r;
  for (n = Math.ceil(n), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, o = s[i * n]);
}
function so(e, t, s, n, i) {
  const o = Tt(n, 0), r = Math.min(Tt(i, e.length), e.length);
  let a = 0, l, c, u;
  for (s = Math.ceil(s), i && (l = i - n, s = l / Math.floor(l / s)), u = o; u < 0; )
    a++, u = Math.round(o + a * s);
  for (c = Math.max(o, 0); c < r; c++)
    c === u && (t.push(e[c]), a++, u = Math.round(o + a * s));
}
function Dv(e) {
  const t = e.length;
  let s, n;
  if (t < 2)
    return !1;
  for (n = e[0], s = 1; s < t; ++s)
    if (e[s] - e[s - 1] !== n)
      return !1;
  return n;
}
const Iv = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Nc = (e, t, s) => t === "top" || t === "left" ? e[t] + s : e[t] - s, Hc = (e, t) => Math.min(t || e, e);
function zc(e, t) {
  const s = [], n = e.length / t, i = e.length;
  let o = 0;
  for (; o < i; o += n)
    s.push(e[Math.floor(o)]);
  return s;
}
function Pv(e, t, s) {
  const n = e.ticks.length, i = Math.min(t, n - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(s && (n === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Ev(e, t) {
  Xt(e, (s) => {
    const n = s.gc, i = n.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o)
        delete s.data[n[o]];
      n.splice(0, i);
    }
  });
}
function zn(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Bc(e, t) {
  if (!e.display)
    return 0;
  const s = wi(e.font, t), n = Tn(e.padding);
  return (qt(e.text) ? e.text.length : 1) * s.lineHeight + n.height;
}
function Av(e, t) {
  return An(e, {
    scale: t,
    type: "scale"
  });
}
function Rv(e, t, s) {
  return An(e, {
    tick: s,
    index: t,
    type: "tick"
  });
}
function $v(e, t, s) {
  let n = Qf(e);
  return (s && t !== "right" || !s && t === "right") && (n = Iv(n)), n;
}
function Lv(e, t, s, n) {
  const { top: i, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: u } = l;
  let f = 0, d, h, _;
  const m = r - i, y = a - o;
  if (e.isHorizontal()) {
    if (h = ri(n, o, a), Ot(s)) {
      const C = Object.keys(s)[0], j = s[C];
      _ = u[C].getPixelForValue(j) + m - t;
    } else s === "center" ? _ = (c.bottom + c.top) / 2 + m - t : _ = Nc(e, s, t);
    d = a - o;
  } else {
    if (Ot(s)) {
      const C = Object.keys(s)[0], j = s[C];
      h = u[C].getPixelForValue(j) - y + t;
    } else s === "center" ? h = (c.left + c.right) / 2 - y + t : h = Nc(e, s, t);
    _ = ri(n, r, i), f = s === "left" ? -ws : ws;
  }
  return {
    titleX: h,
    titleY: _,
    maxWidth: d,
    rotation: f
  };
}
class Rn extends $i {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, s) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: s, _suggestedMin: n, _suggestedMax: i } = this;
    return t = Le(t, Number.POSITIVE_INFINITY), s = Le(s, Number.NEGATIVE_INFINITY), n = Le(n, Number.POSITIVE_INFINITY), i = Le(i, Number.NEGATIVE_INFINITY), {
      min: Le(t, n),
      max: Le(s, i),
      minDefined: Oe(t),
      maxDefined: Oe(s)
    };
  }
  getMinMax(t) {
    let { min: s, max: n, minDefined: i, maxDefined: o } = this.getUserBounds(), r;
    if (i && o)
      return {
        min: s,
        max: n
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), i || (s = Math.min(s, r.min)), o || (n = Math.max(n, r.max));
    return s = o && s > n ? n : s, n = i && s > n ? s : n, {
      min: Le(s, Le(n, s)),
      max: Le(n, Le(s, n))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    jt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, s, n) {
    const { beginAtZero: i, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = s, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ty(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? zc(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = kv(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, s, n;
    this.isHorizontal() ? (s = this.left, n = this.right) : (s = this.top, n = this.bottom, t = !t), this._startPixel = s, this._endPixel = n, this._reversePixels = t, this._length = n - s, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    jt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    jt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    jt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), jt(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    jt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const s = this.options.ticks;
    let n, i, o;
    for (n = 0, i = t.length; n < i; n++)
      o = t[n], o.label = jt(s.callback, [
        o.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    jt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    jt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, s = t.ticks, n = Hc(this.ticks.length, t.ticks.maxTicksLimit), i = s.minRotation || 0, o = s.maxRotation;
    let r = i, a, l, c;
    if (!this._isVisible() || !s.display || i >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), f = u.widest.width, d = u.highest.height, h = Be(this.chart.width - f, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / n : h / (n - 1), f + 6 > a && (a = h / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - zn(t.grid) - s.padding - Bc(t.title, this.chart.options.font), c = Math.sqrt(f * f + d * d), r = yb(Math.min(Math.asin(Be((u.highest.height + 6) / a, -1, 1)), Math.asin(Be(l / c, -1, 1)) - Math.asin(Be(d / c, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    jt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    jt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: s, options: { ticks: n, title: i, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Bc(i, s.options.font);
      if (a ? (t.width = this.maxWidth, t.height = zn(o) + l) : (t.height = this.maxHeight, t.width = zn(o) + l), n.display && this.ticks.length) {
        const { first: c, last: u, widest: f, highest: d } = this._getLabelSizes(), h = n.padding * 2, _ = Us(this.labelRotation), m = Math.cos(_), y = Math.sin(_);
        if (a) {
          const C = n.mirror ? 0 : y * f.width + m * d.height;
          t.height = Math.min(this.maxHeight, t.height + C + h);
        } else {
          const C = n.mirror ? 0 : m * f.width + y * d.height;
          t.width = Math.min(this.maxWidth, t.width + C + h);
        }
        this._calculatePadding(c, u, y, m);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = s.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = s.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, s, n, i) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, h = 0;
      l ? c ? (d = i * t.width, h = n * s.height) : (d = n * t.height, h = i * s.width) : o === "start" ? h = s.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, h = s.width / 2), this.paddingLeft = Math.max((d - u + r) * this.width / (this.width - u), 0), this.paddingRight = Math.max((h - f + r) * this.width / (this.width - f), 0);
    } else {
      let u = s.height / 2, f = t.height / 2;
      o === "start" ? (u = 0, f = t.height) : o === "end" && (u = s.height, f = 0), this.paddingTop = u + r, this.paddingBottom = f + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    jt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: s } = this.options;
    return s === "top" || s === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let s, n;
    for (s = 0, n = t.length; s < n; s++)
      Pt(t[s].label) && (t.splice(s, 1), n--, s--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const s = this.options.ticks.sampleSize;
      let n = this.ticks;
      s < n.length && (n = zc(n, s)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, s, n) {
    const { ctx: i, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(s / Hc(s, n));
    let c = 0, u = 0, f, d, h, _, m, y, C, j, Y, tt, M;
    for (f = 0; f < s; f += l) {
      if (_ = t[f].label, m = this._resolveTickFontOptions(f), i.font = y = m.string, C = o[y] = o[y] || {
        data: {},
        gc: []
      }, j = m.lineHeight, Y = tt = 0, !Pt(_) && !qt(_))
        Y = yc(i, C.data, C.gc, Y, _), tt = j;
      else if (qt(_))
        for (d = 0, h = _.length; d < h; ++d)
          M = _[d], !Pt(M) && !qt(M) && (Y = yc(i, C.data, C.gc, Y, M), tt += j);
      r.push(Y), a.push(tt), c = Math.max(Y, c), u = Math.max(tt, u);
    }
    Ev(o, s);
    const X = r.indexOf(c), S = a.indexOf(u), k = (R) => ({
      width: r[R] || 0,
      height: a[R] || 0
    });
    return {
      first: k(0),
      last: k(s - 1),
      widest: k(X),
      highest: k(S),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, s) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const s = this.ticks;
    return t < 0 || t > s.length - 1 ? null : this.getPixelForValue(s[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const s = this._startPixel + t * this._length;
    return wb(this._alignToPixels ? Fs(this.chart, s, 0) : s);
  }
  getDecimalForPixel(t) {
    const s = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - s : s;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: s } = this;
    return t < 0 && s < 0 ? s : t > 0 && s > 0 ? t : 0;
  }
  getContext(t) {
    const s = this.ticks || [];
    if (t >= 0 && t < s.length) {
      const n = s[t];
      return n.$context || (n.$context = Rv(this.getContext(), t, n));
    }
    return this.$context || (this.$context = Av(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, s = Us(this.labelRotation), n = Math.abs(Math.cos(s)), i = Math.abs(Math.sin(s)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * n > a * i ? a / n : l / i : l * i < a * n ? l / n : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const s = this.axis, n = this.chart, i = this.options, { grid: o, position: r, border: a } = i, l = o.offset, c = this.isHorizontal(), f = this.ticks.length + (l ? 1 : 0), d = zn(o), h = [], _ = a.setContext(this.getContext()), m = _.display ? _.width : 0, y = m / 2, C = function(ut) {
      return Fs(n, ut, m);
    };
    let j, Y, tt, M, X, S, k, R, L, $, q, ht;
    if (r === "top")
      j = C(this.bottom), S = this.bottom - d, R = j - y, $ = C(t.top) + y, ht = t.bottom;
    else if (r === "bottom")
      j = C(this.top), $ = t.top, ht = C(t.bottom) - y, S = j + y, R = this.top + d;
    else if (r === "left")
      j = C(this.right), X = this.right - d, k = j - y, L = C(t.left) + y, q = t.right;
    else if (r === "right")
      j = C(this.left), L = t.left, q = C(t.right) - y, X = j + y, k = this.left + d;
    else if (s === "x") {
      if (r === "center")
        j = C((t.top + t.bottom) / 2 + 0.5);
      else if (Ot(r)) {
        const ut = Object.keys(r)[0], Z = r[ut];
        j = C(this.chart.scales[ut].getPixelForValue(Z));
      }
      $ = t.top, ht = t.bottom, S = j + y, R = S + d;
    } else if (s === "y") {
      if (r === "center")
        j = C((t.left + t.right) / 2);
      else if (Ot(r)) {
        const ut = Object.keys(r)[0], Z = r[ut];
        j = C(this.chart.scales[ut].getPixelForValue(Z));
      }
      X = j - y, k = X - d, L = t.left, q = t.right;
    }
    const It = Tt(i.ticks.maxTicksLimit, f), ct = Math.max(1, Math.ceil(f / It));
    for (Y = 0; Y < f; Y += ct) {
      const ut = this.getContext(Y), Z = o.setContext(ut), st = a.setContext(ut), bt = Z.lineWidth, ft = Z.color, V = st.dash || [], T = st.dashOffset, W = Z.tickWidth, J = Z.tickColor, _t = Z.tickBorderDash || [], wt = Z.tickBorderDashOffset;
      tt = Pv(this, Y, l), tt !== void 0 && (M = Fs(n, tt, bt), c ? X = k = L = q = M : S = R = $ = ht = M, h.push({
        tx1: X,
        ty1: S,
        tx2: k,
        ty2: R,
        x1: L,
        y1: $,
        x2: q,
        y2: ht,
        width: bt,
        color: ft,
        borderDash: V,
        borderDashOffset: T,
        tickWidth: W,
        tickColor: J,
        tickBorderDash: _t,
        tickBorderDashOffset: wt
      }));
    }
    return this._ticksLength = f, this._borderValue = j, h;
  }
  _computeLabelItems(t) {
    const s = this.axis, n = this.options, { position: i, ticks: o } = n, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: u, mirror: f } = o, d = zn(n.grid), h = d + u, _ = f ? -u : h, m = -Us(this.labelRotation), y = [];
    let C, j, Y, tt, M, X, S, k, R, L, $, q, ht = "middle";
    if (i === "top")
      X = this.bottom - _, S = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      X = this.top + _, S = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const ct = this._getYAxisLabelAlignment(d);
      S = ct.textAlign, M = ct.x;
    } else if (i === "right") {
      const ct = this._getYAxisLabelAlignment(d);
      S = ct.textAlign, M = ct.x;
    } else if (s === "x") {
      if (i === "center")
        X = (t.top + t.bottom) / 2 + h;
      else if (Ot(i)) {
        const ct = Object.keys(i)[0], ut = i[ct];
        X = this.chart.scales[ct].getPixelForValue(ut) + h;
      }
      S = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (i === "center")
        M = (t.left + t.right) / 2 - h;
      else if (Ot(i)) {
        const ct = Object.keys(i)[0], ut = i[ct];
        M = this.chart.scales[ct].getPixelForValue(ut);
      }
      S = this._getYAxisLabelAlignment(d).textAlign;
    }
    s === "y" && (l === "start" ? ht = "top" : l === "end" && (ht = "bottom"));
    const It = this._getLabelSizes();
    for (C = 0, j = a.length; C < j; ++C) {
      Y = a[C], tt = Y.label;
      const ct = o.setContext(this.getContext(C));
      k = this.getPixelForTick(C) + o.labelOffset, R = this._resolveTickFontOptions(C), L = R.lineHeight, $ = qt(tt) ? tt.length : 1;
      const ut = $ / 2, Z = ct.color, st = ct.textStrokeColor, bt = ct.textStrokeWidth;
      let ft = S;
      r ? (M = k, S === "inner" && (C === j - 1 ? ft = this.options.reverse ? "left" : "right" : C === 0 ? ft = this.options.reverse ? "right" : "left" : ft = "center"), i === "top" ? c === "near" || m !== 0 ? q = -$ * L + L / 2 : c === "center" ? q = -It.highest.height / 2 - ut * L + L : q = -It.highest.height + L / 2 : c === "near" || m !== 0 ? q = L / 2 : c === "center" ? q = It.highest.height / 2 - ut * L : q = It.highest.height - $ * L, f && (q *= -1), m !== 0 && !ct.showLabelBackdrop && (M += L / 2 * Math.sin(m))) : (X = k, q = (1 - $) * L / 2);
      let V;
      if (ct.showLabelBackdrop) {
        const T = Tn(ct.backdropPadding), W = It.heights[C], J = It.widths[C];
        let _t = q - T.top, wt = 0 - T.left;
        switch (ht) {
          case "middle":
            _t -= W / 2;
            break;
          case "bottom":
            _t -= W;
            break;
        }
        switch (S) {
          case "center":
            wt -= J / 2;
            break;
          case "right":
            wt -= J;
            break;
          case "inner":
            C === j - 1 ? wt -= J : C > 0 && (wt -= J / 2);
            break;
        }
        V = {
          left: wt,
          top: _t,
          width: J + T.width,
          height: W + T.height,
          color: ct.backdropColor
        };
      }
      y.push({
        label: tt,
        font: R,
        textOffset: q,
        options: {
          rotation: m,
          color: Z,
          strokeColor: st,
          strokeWidth: bt,
          textAlign: ft,
          textBaseline: ht,
          translation: [
            M,
            X
          ],
          backdrop: V
        }
      });
    }
    return y;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: s } = this.options;
    if (-Us(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return s.align === "start" ? i = "left" : s.align === "end" ? i = "right" : s.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: s, ticks: { crossAlign: n, mirror: i, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, u;
    return s === "left" ? i ? (u = this.right + o, n === "near" ? c = "left" : n === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - a, n === "near" ? c = "right" : n === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : s === "right" ? i ? (u = this.left + o, n === "near" ? c = "right" : n === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + a, n === "near" ? c = "left" : n === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
      x: u
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, s = this.options.position;
    if (s === "left" || s === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (s === "top" || s === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: s }, left: n, top: i, width: o, height: r } = this;
    s && (t.save(), t.fillStyle = s, t.fillRect(n, i, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const s = this.options.grid;
    if (!this._isVisible() || !s.display)
      return 0;
    const i = this.ticks.findIndex((o) => o.value === t);
    return i >= 0 ? s.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const s = this.options.grid, n = this.ctx, i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, u) => {
      !u.width || !u.color || (n.save(), n.lineWidth = u.width, n.strokeStyle = u.color, n.setLineDash(u.borderDash || []), n.lineDashOffset = u.borderDashOffset, n.beginPath(), n.moveTo(l.x, l.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (s.display)
      for (o = 0, r = i.length; o < r; ++o) {
        const l = i[o];
        s.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), s.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: s, options: { border: n, grid: i } } = this, o = n.setContext(this.getContext()), r = n.display ? o.width : 0;
    if (!r)
      return;
    const a = i.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, u, f, d;
    this.isHorizontal() ? (c = Fs(t, this.left, r) - r / 2, u = Fs(t, this.right, a) + a / 2, f = d = l) : (f = Fs(t, this.top, r) - r / 2, d = Fs(t, this.bottom, a) + a / 2, c = u = l), s.save(), s.lineWidth = o.width, s.strokeStyle = o.color, s.beginPath(), s.moveTo(c, f), s.lineTo(u, d), s.stroke(), s.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, i = this._computeLabelArea();
    i && sd(n, i);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, u = r.textOffset;
      ra(n, c, 0, u, l, a);
    }
    i && nd(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: s, title: n, reverse: i } } = this;
    if (!n.display)
      return;
    const o = wi(n.font), r = Tn(n.padding), a = n.align;
    let l = o.lineHeight / 2;
    s === "bottom" || s === "center" || Ot(s) ? (l += r.bottom, qt(n.text) && (l += o.lineHeight * (n.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: u, maxWidth: f, rotation: d } = Lv(this, l, s, a);
    ra(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: f,
      rotation: d,
      textAlign: $v(a, s, i),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, s = t.ticks && t.ticks.z || 0, n = Tt(t.grid && t.grid.z, -1), i = Tt(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Rn.prototype.draw ? [
      {
        z: s,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: n,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: i,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: s,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const s = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", i = [];
    let o, r;
    for (o = 0, r = s.length; o < r; ++o) {
      const a = s[o];
      a[n] === this.id && (!t || a.type === t) && i.push(a);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const s = this.options.ticks.setContext(this.getContext(t));
    return wi(s.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class no {
  constructor(t, s, n) {
    this.type = t, this.scope = s, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const s = Object.getPrototypeOf(t);
    let n;
    Vv(s) && (n = this.register(s));
    const i = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in i || (i[o] = t, Fv(t, r, n), this.override && Vt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const s = this.items, n = t.id, i = this.scope;
    n in s && delete s[n], i && n in Vt[i] && (delete Vt[i][n], this.override && delete rn[n]);
  }
}
function Fv(e, t, s) {
  const n = yi(/* @__PURE__ */ Object.create(null), [
    s ? Vt.get(s) : {},
    Vt.get(t),
    e.defaults
  ]);
  Vt.set(t, n), e.defaultRoutes && jv(t, e.defaultRoutes), e.descriptors && Vt.describe(t, e.descriptors);
}
function jv(e, t) {
  Object.keys(t).forEach((s) => {
    const n = s.split("."), i = n.pop(), o = [
      e
    ].concat(n).join("."), r = t[s].split("."), a = r.pop(), l = r.join(".");
    Vt.route(o, i, l, a);
  });
}
function Vv(e) {
  return "id" in e && "defaults" in e;
}
class Nv {
  constructor() {
    this.controllers = new no(ci, "datasets", !0), this.elements = new no($i, "elements"), this.plugins = new no(Object, "plugins"), this.scales = new no(Rn, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, s, n) {
    [
      ...s
    ].forEach((i) => {
      const o = n || this._getRegistryForType(i);
      n || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : Xt(i, (r) => {
        const a = n || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, s, n) {
    const i = Na(t);
    jt(n["before" + i], [], n), s[t](n), jt(n["after" + i], [], n);
  }
  _getRegistryForType(t) {
    for (let s = 0; s < this._typedRegistries.length; s++) {
      const n = this._typedRegistries[s];
      if (n.isForType(t))
        return n;
    }
    return this.plugins;
  }
  _get(t, s, n) {
    const i = s.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return i;
  }
}
var je = /* @__PURE__ */ new Nv();
class Hv {
  constructor() {
    this._init = [];
  }
  notify(t, s, n, i) {
    s === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = i ? this._descriptors(t).filter(i) : this._descriptors(t), r = this._notify(o, t, s, n);
    return s === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, s, n, i) {
    i = i || {};
    for (const o of t) {
      const r = o.plugin, a = r[n], l = [
        s,
        i,
        o.options
      ];
      if (jt(a, l, r) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    Pt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const s = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), s;
  }
  _createDescriptors(t, s) {
    const n = t && t.config, i = Tt(n.options && n.options.plugins, {}), o = zv(n);
    return i === !1 && !s ? [] : Uv(t, o, i, s);
  }
  _notifyStateChanges(t) {
    const s = this._oldCache || [], n = this._cache, i = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(s, n), t, "stop"), this._notify(i(n, s), t, "start");
  }
}
function zv(e) {
  const t = {}, s = [], n = Object.keys(je.plugins.items);
  for (let o = 0; o < n.length; o++)
    s.push(je.getPlugin(n[o]));
  const i = e.plugins || [];
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    s.indexOf(r) === -1 && (s.push(r), t[r.id] = !0);
  }
  return {
    plugins: s,
    localIds: t
  };
}
function Bv(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Uv(e, { plugins: t, localIds: s }, n, i) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = Bv(n[l], i);
    c !== null && o.push({
      plugin: a,
      options: Wv(e.config, {
        plugin: a,
        local: s[l]
      }, c, r)
    });
  }
  return o;
}
function Wv(e, { plugin: t, local: s }, n, i) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(n, o);
  return s && t.defaults && r.push(t.defaults), e.createResolver(r, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function aa(e, t) {
  const s = Vt.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || s.indexAxis || "x";
}
function Kv(e, t) {
  let s = e;
  return e === "_index_" ? s = t : e === "_value_" && (s = t === "x" ? "y" : "x"), s;
}
function Gv(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Uc(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function Yv(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function la(e, ...t) {
  if (Uc(e))
    return e;
  for (const s of t) {
    const n = s.axis || Yv(s.position) || e.length > 1 && Uc(e[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Wc(e, t, s) {
  if (s[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function qv(e, t) {
  if (t.data && t.data.datasets) {
    const s = t.data.datasets.filter((n) => n.xAxisID === e || n.yAxisID === e);
    if (s.length)
      return Wc(e, "x", s[0]) || Wc(e, "y", s[0]);
  }
  return {};
}
function Xv(e, t) {
  const s = rn[e.type] || {
    scales: {}
  }, n = t.scales || {}, i = aa(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((r) => {
    const a = n[r];
    if (!Ot(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = la(r, a, qv(r, e), Vt.scales[a.type]), c = Gv(l, i), u = s.scales || {};
    o[r] = ii(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || aa(a, t), u = (rn[a] || {}).scales || {};
    Object.keys(u).forEach((f) => {
      const d = Kv(f, l), h = r[d + "AxisID"] || d;
      o[h] = o[h] || /* @__PURE__ */ Object.create(null), ii(o[h], [
        {
          axis: d
        },
        n[h],
        u[f]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    ii(a, [
      Vt.scales[a.type],
      Vt.scale
    ]);
  }), o;
}
function md(e) {
  const t = e.options || (e.options = {});
  t.plugins = Tt(t.plugins, {}), t.scales = Xv(e, t);
}
function _d(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function Jv(e) {
  return e = e || {}, e.data = _d(e.data), md(e), e;
}
const Kc = /* @__PURE__ */ new Map(), bd = /* @__PURE__ */ new Set();
function io(e, t) {
  let s = Kc.get(e);
  return s || (s = t(), Kc.set(e, s), bd.add(s)), s;
}
const Bn = (e, t, s) => {
  const n = Vo(t, s);
  n !== void 0 && e.add(n);
};
class Zv {
  constructor(t) {
    this._config = Jv(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = _d(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), md(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return io(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, s) {
    return io(`${t}.transition.${s}`, () => [
      [
        `datasets.${t}.transitions.${s}`,
        `transitions.${s}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, s) {
    return io(`${t}-${s}`, () => [
      [
        `datasets.${t}.elements.${s}`,
        `datasets.${t}`,
        `elements.${s}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const s = t.id, n = this.type;
    return io(`${n}-plugin-${s}`, () => [
      [
        `plugins.${s}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, s) {
    const n = this._scopeCache;
    let i = n.get(t);
    return (!i || s) && (i = /* @__PURE__ */ new Map(), n.set(t, i)), i;
  }
  getOptionScopes(t, s, n) {
    const { options: i, type: o } = this, r = this._cachedScopes(t, n), a = r.get(s);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    s.forEach((u) => {
      t && (l.add(t), u.forEach((f) => Bn(l, t, f))), u.forEach((f) => Bn(l, i, f)), u.forEach((f) => Bn(l, rn[o] || {}, f)), u.forEach((f) => Bn(l, Vt, f)), u.forEach((f) => Bn(l, oa, f));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), bd.has(s) && r.set(s, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: s } = this;
    return [
      t,
      rn[s] || {},
      Vt.datasets[s] || {},
      {
        type: s
      },
      Vt,
      oa
    ];
  }
  resolveNamedOptions(t, s, n, i = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Gc(this._resolverCache, t, i);
    let l = r;
    if (t0(r, s)) {
      o.$shared = !1, n = Ds(n) ? n() : n;
      const c = this.createResolver(t, n, a);
      l = Dn(r, n, c);
    }
    for (const c of s)
      o[c] = l[c];
    return o;
  }
  createResolver(t, s, n = [
    ""
  ], i) {
    const { resolver: o } = Gc(this._resolverCache, t, n);
    return Ot(s) ? Dn(o, s, void 0, i) : o;
  }
}
function Gc(e, t, s) {
  let n = e.get(t);
  n || (n = /* @__PURE__ */ new Map(), e.set(t, n));
  const i = s.join();
  let o = n.get(i);
  return o || (o = {
    resolver: Ba(t, s),
    subPrefixes: s.filter((a) => !a.toLowerCase().includes("hover"))
  }, n.set(i, o)), o;
}
const Qv = (e) => Ot(e) && Object.getOwnPropertyNames(e).some((t) => Ds(e[t]));
function t0(e, t) {
  const { isScriptable: s, isIndexable: n } = id(e);
  for (const i of t) {
    const o = s(i), r = n(i), a = (r || o) && e[i];
    if (o && (Ds(a) || Qv(a)) || r && qt(a))
      return !0;
  }
  return !1;
}
var e0 = "4.5.0";
const s0 = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Yc(e, t) {
  return e === "top" || e === "bottom" || s0.indexOf(e) === -1 && t === "x";
}
function qc(e, t) {
  return function(s, n) {
    return s[e] === n[e] ? s[t] - n[t] : s[e] - n[e];
  };
}
function Xc(e) {
  const t = e.chart, s = t.options.animation;
  t.notifyPlugins("afterRender"), jt(s && s.onComplete, [
    e
  ], t);
}
function n0(e) {
  const t = e.chart, s = t.options.animation;
  jt(s && s.onProgress, [
    e
  ], t);
}
function yd(e) {
  return Ka() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const vo = {}, Jc = (e) => {
  const t = yd(e);
  return Object.values(vo).filter((s) => s.canvas === t).pop();
};
function i0(e, t, s) {
  const n = Object.keys(e);
  for (const i of n) {
    const o = +i;
    if (o >= t) {
      const r = e[i];
      delete e[i], (s > 0 || o > t) && (e[o + s] = r);
    }
  }
}
function o0(e, t, s, n) {
  return !s || e.type === "mouseout" ? null : n ? t : e;
}
var fs;
let or = (fs = class {
  static register(...t) {
    je.add(...t), Zc();
  }
  static unregister(...t) {
    je.remove(...t), Zc();
  }
  constructor(t, s) {
    const n = this.config = new Zv(s), i = yd(t), o = Jc(i);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || Sv(i))(), this.platform.updateConfig(n);
    const a = this.platform.acquireContext(i, r.aspectRatio), l = a && a.canvas, c = l && l.height, u = l && l.width;
    if (this.id = rb(), this.ctx = a, this.canvas = l, this.width = u, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Hv(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Tb((f) => this.update(f), r.resizeDelay || 0), this._dataChanges = [], vo[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Qe.listen(this, "complete", Xc), Qe.listen(this, "progress", n0), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: s }, width: n, height: i, _aspectRatio: o } = this;
    return Pt(t) ? s && o ? o : i ? n / i : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return je;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Sc(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return vc(this.canvas, this.ctx), this;
  }
  stop() {
    return Qe.stop(this), this;
  }
  resize(t, s) {
    Qe.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: s
    } : this._resize(t, s);
  }
  _resize(t, s) {
    const n = this.options, i = this.canvas, o = n.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(i, t, s, o), a = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Sc(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), jt(n.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const s = this.options.scales || {};
    Xt(s, (n, i) => {
      n.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, s = t.scales, n = this.scales, i = Object.keys(n).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    s && (o = o.concat(Object.keys(s).map((r) => {
      const a = s[r], l = la(r, a), c = l === "r", u = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), Xt(o, (r) => {
      const a = r.options, l = a.id, c = la(l, a), u = Tt(a.type, r.dtype);
      (a.position === void 0 || Yc(a.position, c) !== Yc(r.dposition)) && (a.position = r.dposition), i[l] = !0;
      let f = null;
      if (l in n && n[l].type === u)
        f = n[l];
      else {
        const d = je.getScale(u);
        f = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), n[f.id] = f;
      }
      f.init(a, t);
    }), Xt(i, (r, a) => {
      r || delete n[a];
    }), Xt(n, (r) => {
      Ss.configure(this, r, r.options), Ss.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, s = this.data.datasets.length, n = t.length;
    if (t.sort((i, o) => i.index - o.index), n > s) {
      for (let i = s; i < n; ++i)
        this._destroyDatasetMeta(i);
      t.splice(s, n - s);
    }
    this._sortedMetasets = t.slice(0).sort(qc("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: s } } = this;
    t.length > s.length && delete this._stacks, t.forEach((n, i) => {
      s.filter((o) => o === n._dataset).length === 0 && this._destroyDatasetMeta(i);
    });
  }
  buildOrUpdateControllers() {
    const t = [], s = this.data.datasets;
    let n, i;
    for (this._removeUnreferencedMetasets(), n = 0, i = s.length; n < i; n++) {
      const o = s[n];
      let r = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)), r.type = a, r.indexAxis = o.indexAxis || aa(a, this.options), r.order = o.order || 0, r.index = n, r.label = "" + o.label, r.visible = this.isDatasetVisible(n), r.controller)
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = je.getController(a), { datasetElementType: c, dataElementType: u } = Vt.datasets[a];
        Object.assign(l, {
          dataElementType: je.getElement(u),
          datasetElementType: c && je.getElement(c)
        }), r.controller = new l(this, n), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Xt(this.data.datasets, (t, s) => {
      this.getDatasetMeta(s).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const s = this.config;
    s.update();
    const n = this._options = s.createResolver(s.chartOptionScopes(), this.getContext()), i = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: f } = this.getDatasetMeta(c), d = !i && o.indexOf(f) === -1;
      f.buildOrUpdateElements(d), r = Math.max(+f.getMaxOverflow(), r);
    }
    r = this._minPadding = n.layout.autoPadding ? r : 0, this._updateLayout(r), i || Xt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(qc("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    Xt(this.scales, (t) => {
      Ss.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, s = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!cc(s, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, s = this._getUniformDataChanges() || [];
    for (const { method: n, start: i, count: o } of s) {
      const r = n === "_removeElements" ? -o : o;
      i0(t, i, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const s = this.data.datasets.length, n = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), i = n(0);
    for (let o = 1; o < s; o++)
      if (!cc(i, n(o)))
        return;
    return Array.from(i).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Ss.update(this, this.width, this.height, t);
    const s = this.chartArea, n = s.width <= 0 || s.height <= 0;
    this._layers = [], Xt(this.boxes, (i) => {
      n && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers()));
    }, this), this._layers.forEach((i, o) => {
      i._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let s = 0, n = this.data.datasets.length; s < n; ++s)
        this.getDatasetMeta(s).controller.configure();
      for (let s = 0, n = this.data.datasets.length; s < n; ++s)
        this._updateDataset(s, Ds(t) ? t({
          datasetIndex: s
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, s) {
    const n = this.getDatasetMeta(t), i = {
      meta: n,
      index: t,
      mode: s,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (n.controller._update(s), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Qe.has(this) ? this.attached && !Qe.running(this) && Qe.start(this) : (this.draw(), Xc({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: i } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(n, i);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const s = this._layers;
    for (t = 0; t < s.length && s[t].z <= 0; ++t)
      s[t].draw(this.chartArea);
    for (this._drawDatasets(); t < s.length; ++t)
      s[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const s = this._sortedMetasets, n = [];
    let i, o;
    for (i = 0, o = s.length; i < o; ++i) {
      const r = s[i];
      (!t || r.visible) && n.push(r);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let s = t.length - 1; s >= 0; --s)
      this._drawDataset(t[s]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const s = this.ctx, n = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, i = $y(this, t);
    this.notifyPlugins("beforeDatasetDraw", n) !== !1 && (i && sd(s, i), t.controller.draw(), i && nd(s), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n));
  }
  isPointInArea(t) {
    return xi(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, s, n, i) {
    const o = sv.modes[s];
    return typeof o == "function" ? o(this, t, n, i) : [];
  }
  getDatasetMeta(t) {
    const s = this.data.datasets[t], n = this._metasets;
    let i = n.filter((o) => o && o._dataset === s).pop();
    return i || (i = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: s && s.order || 0,
      index: t,
      _dataset: s,
      _parsed: [],
      _sorted: !1
    }, n.push(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = An(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const s = this.data.datasets[t];
    if (!s)
      return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !s.hidden;
  }
  setDatasetVisibility(t, s) {
    const n = this.getDatasetMeta(t);
    n.hidden = !s;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, s, n) {
    const i = n ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, i);
    No(s) ? (o.data[s].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), r.update(o, {
      visible: n
    }), this.update((a) => a.datasetIndex === t ? i : void 0));
  }
  hide(t, s) {
    this._updateVisibility(t, s, !1);
  }
  show(t, s) {
    this._updateVisibility(t, s, !0);
  }
  _destroyDatasetMeta(t) {
    const s = this._metasets[t];
    s && s.controller && s.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, s;
    for (this.stop(), Qe.remove(this), t = 0, s = this.data.datasets.length; t < s; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: s } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), vc(t, s), this.platform.releaseContext(s), this.canvas = null, this.ctx = null), delete vo[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, s = this.platform, n = (o, r) => {
      s.addEventListener(this, o, r), t[o] = r;
    }, i = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    Xt(this.options.events, (o) => n(o, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, s = this.platform, n = (l, c) => {
      s.addEventListener(this, l, c), t[l] = c;
    }, i = (l, c) => {
      t[l] && (s.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      i("attach", a), this.attached = !0, this.resize(), n("resize", o), n("detach", r);
    };
    r = () => {
      this.attached = !1, i("resize", o), this._stop(), this._resize(0, 0), n("attach", a);
    }, s.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    Xt(this._listeners, (t, s) => {
      this.platform.removeEventListener(this, s, t);
    }), this._listeners = {}, Xt(this._responsiveListeners, (t, s) => {
      this.platform.removeEventListener(this, s, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, s, n) {
    const i = n ? "set" : "remove";
    let o, r, a, l;
    for (s === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + i + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[i + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const s = this._active || [], n = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !ac(n, s) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, s));
  }
  notifyPlugins(t, s, n) {
    return this._plugins.notify(this, t, s, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((s) => s.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, s, n) {
    const i = this.options.hover, o = (l, c) => l.filter((u) => !c.some((f) => u.datasetIndex === f.datasetIndex && u.index === f.index)), r = o(s, t), a = n ? t : o(t, s);
    r.length && this.updateHoverStyle(r, i.mode, !1), a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
  }
  _eventHandler(t, s) {
    const n = {
      event: t,
      replay: s,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, i = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, i) === !1)
      return;
    const o = this._handleEvent(t, s, n.inChartArea);
    return n.cancelable = !1, this.notifyPlugins("afterEvent", n, i), (o || n.changed) && this.render(), this;
  }
  _handleEvent(t, s, n) {
    const { _active: i = [], options: o } = this, r = s, a = this._getActiveElements(t, i, n, r), l = db(t), c = o0(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, jt(o.onHover, [
      t,
      a,
      this
    ], this), l && jt(o.onClick, [
      t,
      a,
      this
    ], this));
    const u = !ac(a, i);
    return (u || s) && (this._active = a, this._updateHoverStyles(a, i, s)), this._lastEvent = c, u;
  }
  _getActiveElements(t, s, n, i) {
    if (t.type === "mouseout")
      return [];
    if (!n)
      return s;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, i);
  }
}, pt(fs, "defaults", Vt), pt(fs, "instances", vo), pt(fs, "overrides", rn), pt(fs, "registry", je), pt(fs, "version", e0), pt(fs, "getChart", Jc), fs);
function Zc() {
  return Xt(or.instances, (e) => e._plugins.invalidate());
}
function vd(e, t, s = t) {
  e.lineCap = Tt(s.borderCapStyle, t.borderCapStyle), e.setLineDash(Tt(s.borderDash, t.borderDash)), e.lineDashOffset = Tt(s.borderDashOffset, t.borderDashOffset), e.lineJoin = Tt(s.borderJoinStyle, t.borderJoinStyle), e.lineWidth = Tt(s.borderWidth, t.borderWidth), e.strokeStyle = Tt(s.borderColor, t.borderColor);
}
function r0(e, t, s) {
  e.lineTo(s.x, s.y);
}
function a0(e) {
  return e.stepped ? Bb : e.tension || e.cubicInterpolationMode === "monotone" ? Ub : r0;
}
function xd(e, t, s = {}) {
  const n = e.length, { start: i = 0, end: o = n - 1 } = s, { start: r, end: a } = t, l = Math.max(i, r), c = Math.min(o, a), u = i < r && o < r || i > a && o > a;
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? n + c - l : c - l
  };
}
function l0(e, t, s, n) {
  const { points: i, options: o } = t, { count: r, start: a, loop: l, ilen: c } = xd(i, s, n), u = a0(o);
  let { move: f = !0, reverse: d } = n || {}, h, _, m;
  for (h = 0; h <= c; ++h)
    _ = i[(a + (d ? c - h : h)) % r], !_.skip && (f ? (e.moveTo(_.x, _.y), f = !1) : u(e, m, _, d, o.stepped), m = _);
  return l && (_ = i[(a + (d ? c : 0)) % r], u(e, m, _, d, o.stepped)), !!l;
}
function c0(e, t, s, n) {
  const i = t.points, { count: o, start: r, ilen: a } = xd(i, s, n), { move: l = !0, reverse: c } = n || {};
  let u = 0, f = 0, d, h, _, m, y, C;
  const j = (tt) => (r + (c ? a - tt : tt)) % o, Y = () => {
    m !== y && (e.lineTo(u, y), e.lineTo(u, m), e.lineTo(u, C));
  };
  for (l && (h = i[j(0)], e.moveTo(h.x, h.y)), d = 0; d <= a; ++d) {
    if (h = i[j(d)], h.skip)
      continue;
    const tt = h.x, M = h.y, X = tt | 0;
    X === _ ? (M < m ? m = M : M > y && (y = M), u = (f * u + tt) / ++f) : (Y(), e.lineTo(tt, M), _ = X, f = 0, m = y = M), C = M;
  }
  Y();
}
function ca(e) {
  const t = e.options, s = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !s ? c0 : l0;
}
function u0(e) {
  return e.stepped ? ky : e.tension || e.cubicInterpolationMode === "monotone" ? Oy : Bs;
}
function f0(e, t, s, n) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, s, n) && i.closePath()), vd(e, t.options), e.stroke(i);
}
function d0(e, t, s, n) {
  const { segments: i, options: o } = t, r = ca(t);
  for (const a of i)
    vd(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: s,
      end: s + n - 1
    }) && e.closePath(), e.stroke();
}
const h0 = typeof Path2D == "function";
function p0(e, t, s, n) {
  h0 && !t.options.segment ? f0(e, t, s, n) : d0(e, t, s, n);
}
class qn extends $i {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, s) {
    const n = this.options;
    if ((n.tension || n.cubicInterpolationMode === "monotone") && !n.stepped && !this._pointsUpdated) {
      const i = n.spanGaps ? this._loop : this._fullLoop;
      my(this._points, n, t, i, s), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Py(this, this.options.segment));
  }
  first() {
    const t = this.segments, s = this.points;
    return t.length && s[t[0].start];
  }
  last() {
    const t = this.segments, s = this.points, n = t.length;
    return n && s[t[n - 1].end];
  }
  interpolate(t, s) {
    const n = this.options, i = t[s], o = this.points, r = Ty(this, {
      property: s,
      start: i,
      end: i
    });
    if (!r.length)
      return;
    const a = [], l = u0(n);
    let c, u;
    for (c = 0, u = r.length; c < u; ++c) {
      const { start: f, end: d } = r[c], h = o[f], _ = o[d];
      if (h === _) {
        a.push(h);
        continue;
      }
      const m = Math.abs((i - h[s]) / (_[s] - h[s])), y = l(h, _, m, n.stepped);
      y[s] = t[s], a.push(y);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, s, n) {
    return ca(this)(t, this, s, n);
  }
  path(t, s, n) {
    const i = this.segments, o = ca(this);
    let r = this._loop;
    s = s || 0, n = n || this.points.length - s;
    for (const a of i)
      r &= o(t, this, a, {
        start: s,
        end: s + n - 1
      });
    return !!r;
  }
  draw(t, s, n, i) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), p0(t, this, n, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
pt(qn, "id", "line"), pt(qn, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), pt(qn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), pt(qn, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Qc(e, t, s, n) {
  const i = e.options, { [s]: o } = e.getProps([
    s
  ], n);
  return Math.abs(t - o) < i.radius + i.hitRadius;
}
class xo extends $i {
  constructor(s) {
    super();
    pt(this, "parsed");
    pt(this, "skip");
    pt(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, s && Object.assign(this, s);
  }
  inRange(s, n, i) {
    const o = this.options, { x: r, y: a } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(s - r, 2) + Math.pow(n - a, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(s, n) {
    return Qc(this, s, "x", n);
  }
  inYRange(s, n) {
    return Qc(this, s, "y", n);
  }
  getCenterPoint(s) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], s);
    return {
      x: n,
      y: i
    };
  }
  size(s) {
    s = s || this.options || {};
    let n = s.radius || 0;
    n = Math.max(n, n && s.hoverRadius || 0);
    const i = n && s.borderWidth || 0;
    return (n + i) * 2;
  }
  draw(s, n) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !xi(this, n, this.size(i) / 2) || (s.strokeStyle = i.borderColor, s.lineWidth = i.borderWidth, s.fillStyle = i.backgroundColor, Hb(s, i, this.x, this.y));
  }
  getRange() {
    const s = this.options || {};
    return s.radius + s.hitRadius;
  }
}
pt(xo, "id", "point"), /**
* @type {any}
*/
pt(xo, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
pt(xo, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
class wd extends $i {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, s) {
    const n = this.options;
    if (this.left = 0, this.top = 0, !n.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = s;
    const i = qt(n.text) ? n.text.length : 1;
    this._padding = Tn(n.padding);
    const o = i * wi(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: s, left: n, bottom: i, right: o, options: r } = this, a = r.align;
    let l = 0, c, u, f;
    return this.isHorizontal() ? (u = ri(a, n, o), f = s + t, c = o - n) : (r.position === "left" ? (u = n + t, f = ri(a, i, s), l = le * -0.5) : (u = o - t, f = ri(a, s, i), l = le * 0.5), c = i - s), {
      titleX: u,
      titleY: f,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, s = this.options;
    if (!s.display)
      return;
    const n = wi(s.font), o = n.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ra(t, s.text, 0, 0, n, {
      color: s.color,
      maxWidth: l,
      rotation: c,
      textAlign: Qf(s.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function g0(e, t) {
  const s = new wd({
    ctx: e.ctx,
    options: t,
    chart: e
  });
  Ss.configure(e, s, t), Ss.addBox(e, s), e.titleBlock = s;
}
var m0 = {
  id: "title",
  _element: wd,
  start(e, t, s) {
    g0(e, s);
  },
  stop(e) {
    const t = e.titleBlock;
    Ss.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, s) {
    const n = e.titleBlock;
    Ss.configure(e, n, s), n.options = s;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const _0 = (e, t, s, n) => (typeof t == "string" ? (s = e.push(t) - 1, n.unshift({
  index: s,
  label: t
})) : isNaN(t) && (s = null), s);
function b0(e, t, s, n) {
  const i = e.indexOf(t);
  if (i === -1)
    return _0(e, t, s, n);
  const o = e.lastIndexOf(t);
  return i !== o ? s : i;
}
const y0 = (e, t) => e === null ? null : Be(Math.round(e), 0, t);
function tu(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class ua extends Rn {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const s = this._addedLabels;
    if (s.length) {
      const n = this.getLabels();
      for (const { index: i, label: o } of s)
        n[i] === o && n.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, s) {
    if (Pt(t))
      return null;
    const n = this.getLabels();
    return s = isFinite(s) && n[s] === t ? s : b0(n, t, Tt(s, t), this._addedLabels), y0(s, n.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: s } = this.getUserBounds();
    let { min: n, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (n = 0), s || (i = this.getLabels().length - 1)), this.min = n, this.max = i;
  }
  buildTicks() {
    const t = this.min, s = this.max, n = this.options.offset, i = [];
    let o = this.getLabels();
    o = t === 0 && s === o.length - 1 ? o : o.slice(t, s + 1), this._valueRange = Math.max(o.length - (n ? 0 : 1), 1), this._startValue = this.min - (n ? 0.5 : 0);
    for (let r = t; r <= s; r++)
      i.push({
        value: r
      });
    return i;
  }
  getLabelForValue(t) {
    return tu.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const s = this.ticks;
    return t < 0 || t > s.length - 1 ? null : this.getPixelForValue(s[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
pt(ua, "id", "category"), pt(ua, "defaults", {
  ticks: {
    callback: tu
  }
});
function v0(e, t) {
  const s = [], { bounds: i, step: o, min: r, max: a, precision: l, count: c, maxTicks: u, maxDigits: f, includeBounds: d } = e, h = o || 1, _ = u - 1, { min: m, max: y } = t, C = !Pt(r), j = !Pt(a), Y = !Pt(c), tt = (y - m) / (f + 1);
  let M = fc((y - m) / _ / h) * h, X, S, k, R;
  if (M < 1e-14 && !C && !j)
    return [
      {
        value: m
      },
      {
        value: y
      }
    ];
  R = Math.ceil(y / M) - Math.floor(m / M), R > _ && (M = fc(R * M / _ / h) * h), Pt(l) || (X = Math.pow(10, l), M = Math.ceil(M * X) / X), i === "ticks" ? (S = Math.floor(m / M) * M, k = Math.ceil(y / M) * M) : (S = m, k = y), C && j && o && _b((a - r) / o, M / 1e3) ? (R = Math.round(Math.min((a - r) / M, u)), M = (a - r) / R, S = r, k = a) : Y ? (S = C ? r : S, k = j ? a : k, R = c - 1, M = (k - S) / R) : (R = (k - S) / M, oi(R, Math.round(R), M / 1e3) ? R = Math.round(R) : R = Math.ceil(R));
  const L = Math.max(dc(M), dc(S));
  X = Math.pow(10, Pt(l) ? L : l), S = Math.round(S * X) / X, k = Math.round(k * X) / X;
  let $ = 0;
  for (C && (d && S !== r ? (s.push({
    value: r
  }), S < r && $++, oi(Math.round((S + $ * M) * X) / X, r, eu(r, tt, e)) && $++) : S < r && $++); $ < R; ++$) {
    const q = Math.round((S + $ * M) * X) / X;
    if (j && q > a)
      break;
    s.push({
      value: q
    });
  }
  return j && d && k !== a ? s.length && oi(s[s.length - 1].value, a, eu(a, tt, e)) ? s[s.length - 1].value = a : s.push({
    value: a
  }) : (!j || k === a) && s.push({
    value: k
  }), s;
}
function eu(e, t, { horizontal: s, minRotation: n }) {
  const i = Us(n), o = (s ? Math.sin(i) : Math.cos(i)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class x0 extends Rn {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, s) {
    return Pt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: s, maxDefined: n } = this.getUserBounds();
    let { min: i, max: o } = this;
    const r = (l) => i = s ? i : l, a = (l) => o = n ? o : l;
    if (t) {
      const l = Cn(i), c = Cn(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (i === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(i - l);
    }
    this.min = i, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: s, stepSize: n } = t, i;
    return n ? (i = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), s = s || 11), s && (i = Math.min(s, i)), i;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, s = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const i = {
      maxTicks: n,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: s.precision,
      step: s.stepSize,
      count: s.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: s.minRotation || 0,
      includeBounds: s.includeBounds !== !1
    }, o = this._range || this, r = v0(i, o);
    return t.bounds === "ticks" && bb(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let s = this.min, n = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const i = (n - s) / Math.max(t.length - 1, 1) / 2;
      s -= i, n += i;
    }
    this._startValue = s, this._endValue = n, this._valueRange = n - s;
  }
  getLabelForValue(t) {
    return td(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class fa extends x0 {
  determineDataLimits() {
    const { min: t, max: s } = this.getMinMax(!0);
    this.min = Oe(t) ? t : 0, this.max = Oe(s) ? s : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), s = t ? this.width : this.height, n = Us(this.options.ticks.minRotation), i = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(s / Math.min(40, o.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
pt(fa, "id", "linear"), pt(fa, "defaults", {
  ticks: {
    callback: ed.formatters.numeric
  }
});
const rr = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, pe = /* @__PURE__ */ Object.keys(rr);
function su(e, t) {
  return e - t;
}
function nu(e, t) {
  if (Pt(t))
    return null;
  const s = e._adapter, { parser: n, round: i, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof n == "function" && (r = n(r)), Oe(r) || (r = typeof n == "string" ? s.parse(r, n) : s.parse(r)), r === null ? null : (i && (r = i === "week" && (vi(o) || o === !0) ? s.startOf(r, "isoWeek", o) : s.startOf(r, i)), +r);
}
function iu(e, t, s, n) {
  const i = pe.length;
  for (let o = pe.indexOf(e); o < i - 1; ++o) {
    const r = rr[pe[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((s - t) / (a * r.size)) <= n)
      return pe[o];
  }
  return pe[i - 1];
}
function w0(e, t, s, n, i) {
  for (let o = pe.length - 1; o >= pe.indexOf(s); o--) {
    const r = pe[o];
    if (rr[r].common && e._adapter.diff(i, n, r) >= t - 1)
      return r;
  }
  return pe[s ? pe.indexOf(s) : 0];
}
function S0(e) {
  for (let t = pe.indexOf(e) + 1, s = pe.length; t < s; ++t)
    if (rr[pe[t]].common)
      return pe[t];
}
function ou(e, t, s) {
  if (!s)
    e[t] = !0;
  else if (s.length) {
    const { lo: n, hi: i } = Ha(s, t), o = s[n] >= t ? s[n] : s[i];
    e[o] = !0;
  }
}
function k0(e, t, s, n) {
  const i = e._adapter, o = +i.startOf(t[0].value, n), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +i.add(a, 1, n))
    l = s[a], l >= 0 && (t[l].major = !0);
  return t;
}
function ru(e, t, s) {
  const n = [], i = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], i[a] = r, n.push({
      value: a,
      major: !1
    });
  return o === 0 || !s ? n : k0(e, n, i, s);
}
class Uo extends Rn {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, s = {}) {
    const n = t.time || (t.time = {}), i = this._adapter = new Jy._date(t.adapters.date);
    i.init(s), ii(n.displayFormats, i.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = s.normalized;
  }
  parse(t, s) {
    return t === void 0 ? null : nu(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, s = this._adapter, n = t.time.unit || "day";
    let { min: i, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (i = Math.min(i, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = Oe(i) && !isNaN(i) ? i : +s.startOf(Date.now(), n), o = Oe(o) && !isNaN(o) ? o : +s.endOf(Date.now(), n) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let s = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return t.length && (s = t[0], n = t[t.length - 1]), {
      min: s,
      max: n
    };
  }
  buildTicks() {
    const t = this.options, s = t.time, n = t.ticks, i = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
    const o = this.min, r = this.max, a = Ob(i, o, r);
    return this._unit = s.unit || (n.autoSkip ? iu(s.minUnit, this.min, this.max, this._getLabelCapacity(o)) : w0(this, a.length, s.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : S0(this._unit), this.initOffsets(i), t.reverse && a.reverse(), ru(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let s = 0, n = 0, i, o;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? s = 1 - i : s = (this.getDecimalForValue(t[1]) - i) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = o : n = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    s = Be(s, 0, r), n = Be(n, 0, r), this._offsets = {
      start: s,
      end: n,
      factor: 1 / (s + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, s = this.min, n = this.max, i = this.options, o = i.time, r = o.unit || iu(o.minUnit, s, n, this._getLabelCapacity(s)), a = Tt(i.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = vi(l) || l === !0, u = {};
    let f = s, d, h;
    if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : r), t.diff(n, s, r) > 1e5 * a)
      throw new Error(s + " and " + n + " are too far apart with stepSize of " + a + " " + r);
    const _ = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, h = 0; d < n; d = +t.add(d, a, r), h++)
      ou(u, d, _);
    return (d === n || i.bounds === "ticks" || h === 1) && ou(u, d, _), Object.keys(u).sort(su).map((m) => +m);
  }
  getLabelForValue(t) {
    const s = this._adapter, n = this.options.time;
    return n.tooltipFormat ? s.format(t, n.tooltipFormat) : s.format(t, n.displayFormats.datetime);
  }
  format(t, s) {
    const i = this.options.time.displayFormats, o = this._unit, r = s || i[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, s, n, i) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return jt(r, [
        t,
        s,
        n
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && a[l], f = c && a[c], d = n[s], h = c && f && d && d.major;
    return this._adapter.format(t, i || (h ? f : u));
  }
  generateTickLabels(t) {
    let s, n, i;
    for (s = 0, n = t.length; s < n; ++s)
      i = t[s], i.label = this._tickFormatFunction(i.value, s, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const s = this._offsets, n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((s.start + n) * s.factor);
  }
  getValueForPixel(t) {
    const s = this._offsets, n = this.getDecimalForPixel(t) / s.factor - s.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const s = this.options.ticks, n = this.ctx.measureText(t).width, i = Us(this.isHorizontal() ? s.maxRotation : s.minRotation), o = Math.cos(i), r = Math.sin(i), a = this._resolveTickFontOptions(0).size;
    return {
      w: n * o + a * r,
      h: n * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const s = this.options.time, n = s.displayFormats, i = n[s.unit] || n.millisecond, o = this._tickFormatFunction(t, 0, ru(this, [
      t
    ], this._majorUnit), i), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], s, n;
    if (t.length)
      return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return this._cache.data = i[0].controller.getAllParsedValues(this);
    for (s = 0, n = i.length; s < n; ++s)
      t = t.concat(i[s].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let s, n;
    if (t.length)
      return t;
    const i = this.getLabels();
    for (s = 0, n = i.length; s < n; ++s)
      t.push(nu(this, i[s]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Cb(t.sort(su));
  }
}
pt(Uo, "id", "time"), pt(Uo, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function oo(e, t, s) {
  let n = 0, i = e.length - 1, o, r, a, l;
  s ? (t >= e[n].pos && t <= e[i].pos && ({ lo: n, hi: i } = Ws(e, "pos", t)), { pos: o, time: a } = e[n], { pos: r, time: l } = e[i]) : (t >= e[n].time && t <= e[i].time && ({ lo: n, hi: i } = Ws(e, "time", t)), { time: o, pos: a } = e[n], { time: r, pos: l } = e[i]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class au extends Uo {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), s = this._table = this.buildLookupTable(t);
    this._minPos = oo(s, this.min), this._tableRange = oo(s, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: s, max: n } = this, i = [], o = [];
    let r, a, l, c, u;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= s && c <= n && i.push(c);
    if (i.length < 2)
      return [
        {
          time: s,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (r = 0, a = i.length; r < a; ++r)
      u = i[r + 1], l = i[r - 1], c = i[r], Math.round((u + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, s = this.max;
    let n = super.getDataTimestamps();
    return (!n.includes(t) || !n.length) && n.splice(0, 0, t), (!n.includes(s) || n.length === 1) && n.push(s), n.sort((i, o) => i - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const s = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return s.length && n.length ? t = this.normalize(s.concat(n)) : t = s.length ? s : n, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (oo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const s = this._offsets, n = this.getDecimalForPixel(t) / s.factor - s.end;
    return oo(this._table, n * this._tableRange + this._minPos, !0);
  }
}
pt(au, "id", "timeseries"), pt(au, "defaults", Uo.defaults);
const Sd = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, O0 = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, M0 = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Sd,
  ...O0
}, C0 = qr[0] === "2" ? (e, t) => Object.assign(e, {
  attrs: t
}) : (e, t) => Object.assign(e, t);
function bn(e) {
  return sn(e) ? ot(e) : e;
}
function T0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return sn(t) ? new Proxy(e, {}) : e;
}
function D0(e, t) {
  const s = e.options;
  s && t && Object.assign(s, t);
}
function kd(e, t) {
  e.labels = t;
}
function Od(e, t, s) {
  const n = [];
  e.datasets = t.map((i) => {
    const o = e.datasets.find((r) => r[s] === i[s]);
    return !o || !i.data || n.includes(o) ? {
      ...i
    } : (n.push(o), Object.assign(o, i), o);
  });
}
function I0(e, t) {
  const s = {
    labels: [],
    datasets: []
  };
  return kd(s, e.labels), Od(s, e.datasets, t), s;
}
const P0 = /* @__PURE__ */ Me({
  props: M0,
  setup(e, t) {
    let { expose: s, slots: n } = t;
    const i = gt(null), o = Ru(null);
    s({
      chart: o
    });
    const r = () => {
      if (!i.value) return;
      const { type: c, data: u, options: f, plugins: d, datasetIdKey: h } = e, _ = I0(u, h), m = T0(_, u);
      o.value = new or(i.value, {
        type: c,
        data: m,
        options: {
          ...f
        },
        plugins: d
      });
    }, a = () => {
      const c = ot(o.value);
      c && (e.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, e.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(e.updateMode);
    };
    return Ma(r), Pi(a), Js([
      () => e.options,
      () => e.data
    ], (c, u) => {
      let [f, d] = c, [h, _] = u;
      const m = ot(o.value);
      if (!m)
        return;
      let y = !1;
      if (f) {
        const C = bn(f), j = bn(h);
        C && C !== j && (D0(m, C), y = !0);
      }
      if (d) {
        const C = bn(d.labels), j = bn(_.labels), Y = bn(d.datasets), tt = bn(_.datasets);
        C !== j && (kd(m.config.data, C), y = !0), Y && Y !== tt && (Od(m.config.data, Y, e.datasetIdKey), y = !0);
      }
      y && Cs(() => {
        l(m);
      });
    }, {
      deep: !0
    }), () => On("canvas", {
      role: "img",
      ariaLabel: e.ariaLabel,
      ariaDescribedby: e.ariaDescribedby,
      ref: i
    }, [
      On("p", {}, [
        n.default ? n.default() : ""
      ])
    ]);
  }
});
function E0(e, t) {
  return or.register(t), /* @__PURE__ */ Me({
    props: Sd,
    setup(s, n) {
      let { expose: i } = n;
      const o = Ru(null), r = (a) => {
        o.value = a == null ? void 0 : a.chart;
      };
      return i({
        chart: o
      }), () => On(P0, C0({
        ref: r
      }, {
        type: e,
        ...s
      }));
    }
  });
}
const A0 = /* @__PURE__ */ E0("line", ui), R0 = ["title"], $0 = {
  key: 1,
  class: "cell-number"
}, L0 = {
  key: 2,
  class: "cell-date"
}, F0 = {
  key: 3,
  class: "cell-select"
}, j0 = {
  key: 1,
  class: "empty-value"
}, V0 = {
  key: 4,
  class: "cell-multi-select"
}, N0 = {
  key: 0,
  class: "empty-value"
}, H0 = {
  key: 5,
  class: "cell-user"
}, z0 = {
  key: 0,
  class: "user-info"
}, B0 = { class: "user-avatar" }, U0 = { class: "user-name" }, W0 = {
  key: 1,
  class: "empty-value"
}, K0 = {
  key: 6,
  class: "cell-checkbox"
}, G0 = {
  key: 7,
  class: "cell-url"
}, Y0 = ["href"], q0 = {
  key: 1,
  class: "empty-value"
}, X0 = {
  key: 8,
  class: "cell-email"
}, J0 = ["href"], Z0 = {
  key: 1,
  class: "empty-value"
}, Q0 = {
  key: 9,
  class: "cell-phone"
}, tx = ["href"], ex = {
  key: 1,
  class: "empty-value"
}, sx = {
  key: 10,
  class: "cell-sparkline",
  style: { height: "30px", width: "100%" }
}, nx = {
  key: 1,
  class: "empty-value"
}, ix = ["title"], ox = /* @__PURE__ */ Me({
  __name: "CellDisplay",
  props: {
    value: {},
    field: {},
    editing: { type: Boolean }
  },
  setup(e) {
    or.register(ui, qn, xo, fa, ua, m0);
    const t = e, s = Rt(() => {
      const d = String(t.value).split(",").map(Number).filter((h) => !isNaN(h));
      return {
        labels: d.map((h, _) => _ + 1),
        datasets: [
          {
            data: d,
            borderColor: "#3b82f6",
            borderWidth: 1,
            pointRadius: 2,
            fill: !1,
            tension: 0.3
          }
        ]
      };
    }), n = {
      responsive: !0,
      plugins: { legend: { display: !1 }, title: { display: !1 } },
      scales: {
        x: { display: !1 },
        y: { display: !1 }
      },
      elements: { line: { borderWidth: 2 }, point: { radius: 0 } }
    }, i = Rt(() => t.value === null || t.value === void 0 || t.value === "" ? "-" : String(t.value)), o = (d) => {
      if (d == null || d === "") return "-";
      const h = Number(d);
      return isNaN(h) ? "-" : h.toLocaleString();
    }, r = (d) => {
      if (!d) return "-";
      try {
        return new Date(d).toLocaleDateString("zh-CN");
      } catch {
        return "-";
      }
    }, a = (d) => {
      try {
        return new URL(d).hostname;
      } catch {
        return d;
      }
    }, l = (d) => d ? d.charAt(0).toUpperCase() : "?", c = (d) => ({
      进行中: "status-progress",
      已完成: "status-completed",
      待开始: "status-pending",
      重要紧急: "priority-urgent",
      紧急不重要: "priority-important",
      重要不紧急: "priority-normal"
    })[d] || "status-default", u = (d) => {
      try {
        return new URL(d), !0;
      } catch {
        return !1;
      }
    }, f = (d) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d);
    return (d, h) => (N(), K("div", {
      class: is(["cell-display", { clickable: !d.editing }])
    }, [
      d.field.type === "text" ? (N(), K("span", {
        key: 0,
        class: "cell-text",
        title: i.value
      }, Mt(i.value), 9, R0)) : d.field.type === "number" ? (N(), K("span", $0, Mt(o(d.value)), 1)) : d.field.type === "date" ? (N(), K("span", L0, Mt(r(d.value)), 1)) : d.field.type === "select" ? (N(), K("div", F0, [
        d.value ? (N(), K("span", {
          key: 0,
          class: is(["select-tag", c(d.value)])
        }, Mt(d.value), 3)) : (N(), K("span", j0, "-"))
      ])) : d.field.type === "multiSelect" ? (N(), K("div", V0, [
        (N(!0), K($t, null, ke(Array.isArray(d.value) ? d.value : [], (_) => (N(), K("span", {
          key: _,
          class: "multi-select-tag"
        }, Mt(_), 1))), 128)),
        !d.value || Array.isArray(d.value) && d.value.length === 0 ? (N(), K("span", N0, "-")) : Nt("", !0)
      ])) : d.field.type === "user" ? (N(), K("div", H0, [
        d.value ? (N(), K("div", z0, [
          w("div", B0, Mt(l(d.value)), 1),
          w("span", U0, Mt(d.value), 1)
        ])) : (N(), K("span", W0, "-"))
      ])) : d.field.type === "checkbox" ? (N(), K("div", K0, [
        w("div", {
          class: is(["checkbox-display", { checked: !!d.value }])
        }, [
          d.value ? (N(), re(Ct(x_), {
            key: 0,
            class: "w-3 h-3"
          })) : (N(), re(Ct(Qs), {
            key: 1,
            class: "w-3 h-3"
          }))
        ], 2)
      ])) : d.field.type === "url" ? (N(), K("div", G0, [
        d.value && u(d.value) ? (N(), K("a", {
          key: 0,
          href: d.value,
          target: "_blank",
          class: "url-link",
          onClick: h[0] || (h[0] = _e(() => {
          }, ["stop"]))
        }, [
          vt(Ct(S_), { class: "w-3 h-3" }),
          Os(" " + Mt(a(d.value)), 1)
        ], 8, Y0)) : (N(), K("span", q0, "-"))
      ])) : d.field.type === "email" ? (N(), K("div", X0, [
        d.value && f(d.value) ? (N(), K("a", {
          key: 0,
          href: `mailto:${d.value}`,
          class: "email-link",
          onClick: h[1] || (h[1] = _e(() => {
          }, ["stop"]))
        }, [
          vt(Ct(O_), { class: "w-3 h-3" }),
          Os(" " + Mt(d.value), 1)
        ], 8, J0)) : (N(), K("span", Z0, "-"))
      ])) : d.field.type === "phone" ? (N(), K("div", Q0, [
        d.value ? (N(), K("a", {
          key: 0,
          href: `tel:${d.value}`,
          class: "phone-link",
          onClick: h[2] || (h[2] = _e(() => {
          }, ["stop"]))
        }, [
          vt(Ct(M_), { class: "w-3 h-3" }),
          Os(" " + Mt(d.value), 1)
        ], 8, tx)) : (N(), K("span", ex, "-"))
      ])) : d.field.type === "sparkline" ? (N(), K("div", sx, [
        d.value ? (N(), re(Ct(A0), {
          key: 0,
          data: s.value,
          options: n
        }, null, 8, ["data"])) : (N(), K("span", nx, "-"))
      ])) : (N(), K("span", {
        key: 11,
        class: "cell-text",
        title: i.value
      }, Mt(i.value), 9, ix))
    ], 2));
  }
}), rx = /* @__PURE__ */ Is(ox, [["__scopeId", "data-v-d8826fe1"]]), ax = { class: "modal-header" }, lx = { class: "modal-body" }, cx = { class: "field-list" }, ux = { class: "field-list-header" }, fx = { class: "field-items" }, dx = ["onDragstart", "onDragover", "onDrop"], hx = { class: "field-drag-handle" }, px = { class: "field-info" }, gx = { class: "field-icon" }, mx = { class: "field-details" }, _x = { class: "field-name" }, bx = { class: "field-meta" }, yx = { class: "field-type" }, vx = { class: "field-width" }, xx = {
  key: 0,
  class: "field-required"
}, wx = { class: "field-visibility" }, Sx = { class: "visibility-toggle" }, kx = ["checked", "onChange"], Ox = { class: "field-actions" }, Mx = ["onClick", "title"], Cx = ["onClick", "title"], Tx = {
  key: 0,
  class: "field-form"
}, Dx = { class: "form-header" }, Ix = { class: "form-row" }, Px = { class: "form-group" }, Ex = { class: "form-group" }, Ax = ["value"], Rx = { class: "form-row" }, $x = { class: "form-group" }, Lx = { class: "form-group" }, Fx = {
  key: 0,
  class: "form-group"
}, jx = { class: "options-config" }, Vx = ["onUpdate:modelValue"], Nx = ["onClick"], Hx = { class: "form-row" }, zx = { class: "form-group checkbox-group" }, Bx = { class: "checkbox-label" }, Ux = { class: "form-group checkbox-group" }, Wx = { class: "checkbox-label" }, Kx = { class: "form-group" }, Gx = { class: "form-actions" }, Yx = {
  type: "submit",
  class: "btn-primary"
}, qx = /* @__PURE__ */ Me({
  __name: "FieldManagerModal",
  emits: ["close", "fieldUpdated"],
  setup(e, { emit: t }) {
    const s = La(), n = gt(!1), i = gt(null), o = gt({
      isDragging: !1,
      dragIndex: -1,
      dropTarget: -1
    }), r = Ti({
      name: "",
      type: "",
      width: 120,
      visible: !0,
      required: !1,
      options: [],
      defaultValue: "",
      description: ""
    }), a = [
      { value: "text", label: "文本" },
      { value: "number", label: "数字" },
      { value: "date", label: "日期" },
      { value: "select", label: "单选" },
      { value: "multiSelect", label: "多选" },
      { value: "user", label: "用户" },
      { value: "checkbox", label: "复选框" },
      { value: "url", label: "链接" },
      { value: "email", label: "邮箱" },
      { value: "phone", label: "电话" },
      { value: "sparkline", label: "火花图" }
    ], l = Rt(() => s.fields || []), c = t, u = (S) => ({
      text: "文本",
      number: "数字",
      date: "日期",
      select: "单选",
      multiSelect: "多选",
      user: "用户",
      checkbox: "复选框",
      url: "链接",
      email: "邮箱",
      phone: "电话"
    })[S] || "未知", f = (S, k) => {
      s.updateField(S, { visible: k }), c("fieldUpdated");
    }, d = (S) => {
      i.value = S, n.value = !1, Object.assign(r, {
        name: S.name,
        type: S.type,
        width: S.width,
        visible: S.visible,
        required: S.required || !1,
        options: S.options ? [...S.options] : [],
        defaultValue: S.defaultValue || "",
        description: S.description || ""
      });
    }, h = () => {
      i.value = null, n.value = !1, _();
    }, _ = () => {
      Object.assign(r, {
        name: "",
        type: "",
        width: 120,
        visible: !0,
        required: !1,
        options: [],
        defaultValue: "",
        description: ""
      });
    }, m = () => {
      if (!r.name || !r.type) {
        alert("请填写字段名称和类型");
        return;
      }
      const S = {
        name: r.name,
        type: r.type,
        width: r.width,
        visible: r.visible,
        required: r.required,
        options: r.options.filter((k) => k.trim()),
        defaultValue: r.defaultValue,
        description: r.description
      };
      i.value ? s.updateField(i.value.id, S) : s.addField(S), c("fieldUpdated"), h();
    }, y = (S) => {
      const k = l.value.find((R) => R.id === S);
      k && confirm(`确定要删除字段"${k.name}"吗？删除后相关数据将丢失。`) && (s.deleteField(S), c("fieldUpdated"));
    }, C = () => {
      r.options.push("");
    }, j = (S) => {
      r.options.splice(S, 1);
    }, Y = (S, k) => {
      o.value = {
        isDragging: !0,
        dragIndex: k,
        dropTarget: -1
      }, S.dataTransfer && (S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", k.toString()));
    }, tt = (S, k) => {
      S.preventDefault(), o.value.dragIndex !== k && (o.value.dropTarget = k);
    }, M = (S, k) => {
      S.preventDefault(), o.value.dragIndex !== k && (s.reorderFields(o.value.dragIndex, k), c("fieldUpdated"));
    }, X = () => {
      o.value = {
        isDragging: !1,
        dragIndex: -1,
        dropTarget: -1
      };
    };
    return (S, k) => (N(), K("div", {
      class: "modal-overlay",
      onClick: k[10] || (k[10] = (R) => S.$emit("close"))
    }, [
      w("div", {
        class: "modal-content",
        onClick: k[9] || (k[9] = _e(() => {
        }, ["stop"]))
      }, [
        w("div", ax, [
          k[11] || (k[11] = w("h3", null, "字段管理", -1)),
          w("button", {
            onClick: k[0] || (k[0] = (R) => S.$emit("close")),
            class: "close-btn"
          }, [
            vt(Ct(Qs), { class: "w-4 h-4" })
          ])
        ]),
        w("div", lx, [
          w("div", cx, [
            w("div", ux, [
              k[13] || (k[13] = w("span", { class: "header-text" }, "字段列表", -1)),
              w("button", {
                onClick: k[1] || (k[1] = (R) => n.value = !0),
                class: "add-field-btn"
              }, [
                vt(Ct(sc), { class: "w-4 h-4" }),
                k[12] || (k[12] = Os(" 添加字段 ", -1))
              ])
            ]),
            w("div", fx, [
              (N(!0), K($t, null, ke(l.value, (R, L) => {
                var $;
                return N(), K("div", {
                  key: R.id,
                  class: is(["field-item", { editing: (($ = i.value) == null ? void 0 : $.id) === R.id }]),
                  draggable: "true",
                  onDragstart: (q) => Y(q, L),
                  onDragend: X,
                  onDragover: (q) => tt(q, L),
                  onDrop: (q) => M(q, L)
                }, [
                  w("div", hx, [
                    vt(Ct(na), { class: "w-4 h-4" })
                  ]),
                  w("div", px, [
                    w("div", gx, [
                      (N(), re(tf(Ct(zf)(R.type)), { class: "w-4 h-4" }))
                    ]),
                    w("div", mx, [
                      w("div", _x, Mt(R.name), 1),
                      w("div", bx, [
                        w("span", yx, Mt(u(R.type)), 1),
                        w("span", vx, "宽度: " + Mt(R.width) + "px", 1),
                        R.required ? (N(), K("span", xx, "必填")) : Nt("", !0)
                      ])
                    ])
                  ]),
                  w("div", wx, [
                    w("label", Sx, [
                      w("input", {
                        type: "checkbox",
                        checked: R.visible,
                        onChange: (q) => {
                          var ht;
                          return f(R.id, (ht = q.target) == null ? void 0 : ht.checked);
                        }
                      }, null, 40, kx),
                      k[14] || (k[14] = w("span", { class: "toggle-slider" }, null, -1))
                    ])
                  ]),
                  w("div", Ox, [
                    w("button", {
                      class: "action-btn edit",
                      onClick: (q) => d(R),
                      title: "编辑 " + R.name
                    }, [
                      vt(Ct(T_), { class: "w-3 h-3" })
                    ], 8, Mx),
                    w("button", {
                      class: "action-btn delete",
                      onClick: (q) => y(R.id),
                      title: "删除 " + R.name
                    }, [
                      vt(Ct(Bf), { class: "w-3 h-3" })
                    ], 8, Cx)
                  ])
                ], 42, dx);
              }), 128))
            ])
          ]),
          n.value || i.value ? (N(), K("div", Tx, [
            w("div", Dx, [
              w("h4", null, Mt(i.value ? "编辑字段" : "添加字段"), 1),
              w("button", {
                onClick: h,
                class: "cancel-btn"
              }, [
                vt(Ct(Qs), { class: "w-4 h-4" })
              ])
            ]),
            w("form", {
              onSubmit: _e(m, ["prevent"]),
              class: "form-content"
            }, [
              w("div", Ix, [
                w("div", Px, [
                  k[15] || (k[15] = w("label", null, "字段名称", -1)),
                  At(w("input", {
                    "onUpdate:modelValue": k[2] || (k[2] = (R) => r.name = R),
                    type: "text",
                    class: "form-input",
                    placeholder: "请输入字段名称",
                    required: ""
                  }, null, 512), [
                    [ie, r.name]
                  ])
                ]),
                w("div", Ex, [
                  k[17] || (k[17] = w("label", null, "字段类型", -1)),
                  At(w("select", {
                    "onUpdate:modelValue": k[3] || (k[3] = (R) => r.type = R),
                    class: "form-select",
                    required: ""
                  }, [
                    k[16] || (k[16] = w("option", { value: "" }, "请选择类型", -1)),
                    (N(), K($t, null, ke(a, (R) => w("option", {
                      key: R.value,
                      value: R.value
                    }, Mt(R.label), 9, Ax)), 64))
                  ], 512), [
                    [ni, r.type]
                  ])
                ])
              ]),
              w("div", Rx, [
                w("div", $x, [
                  k[18] || (k[18] = w("label", null, "列宽度", -1)),
                  At(w("input", {
                    "onUpdate:modelValue": k[4] || (k[4] = (R) => r.width = R),
                    type: "number",
                    class: "form-input",
                    placeholder: "120",
                    min: "80",
                    max: "500"
                  }, null, 512), [
                    [
                      ie,
                      r.width,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                w("div", Lx, [
                  k[19] || (k[19] = w("label", null, "默认值", -1)),
                  At(w("input", {
                    "onUpdate:modelValue": k[5] || (k[5] = (R) => r.defaultValue = R),
                    type: "text",
                    class: "form-input",
                    placeholder: "可选"
                  }, null, 512), [
                    [ie, r.defaultValue]
                  ])
                ])
              ]),
              r.type === "select" || r.type === "multiSelect" ? (N(), K("div", Fx, [
                k[21] || (k[21] = w("label", null, "选项配置", -1)),
                w("div", jx, [
                  (N(!0), K($t, null, ke(r.options, (R, L) => (N(), K("div", {
                    key: L,
                    class: "option-item"
                  }, [
                    At(w("input", {
                      "onUpdate:modelValue": ($) => r.options[L] = $,
                      type: "text",
                      class: "option-input",
                      placeholder: "选项名称"
                    }, null, 8, Vx), [
                      [ie, r.options[L]]
                    ]),
                    w("button", {
                      type: "button",
                      onClick: ($) => j(L),
                      class: "remove-option-btn"
                    }, [
                      vt(Ct(Qs), { class: "w-3 h-3" })
                    ], 8, Nx)
                  ]))), 128)),
                  w("button", {
                    type: "button",
                    onClick: C,
                    class: "add-option-btn"
                  }, [
                    vt(Ct(sc), { class: "w-3 h-3" }),
                    k[20] || (k[20] = Os(" 添加选项 ", -1))
                  ])
                ])
              ])) : Nt("", !0),
              w("div", Hx, [
                w("div", zx, [
                  w("label", Bx, [
                    At(w("input", {
                      "onUpdate:modelValue": k[6] || (k[6] = (R) => r.visible = R),
                      type: "checkbox",
                      class: "form-checkbox"
                    }, null, 512), [
                      [Jr, r.visible]
                    ]),
                    k[22] || (k[22] = w("span", null, "显示字段", -1))
                  ])
                ]),
                w("div", Ux, [
                  w("label", Wx, [
                    At(w("input", {
                      "onUpdate:modelValue": k[7] || (k[7] = (R) => r.required = R),
                      type: "checkbox",
                      class: "form-checkbox"
                    }, null, 512), [
                      [Jr, r.required]
                    ]),
                    k[23] || (k[23] = w("span", null, "必填字段", -1))
                  ])
                ])
              ]),
              w("div", Kx, [
                k[24] || (k[24] = w("label", null, "字段描述", -1)),
                At(w("textarea", {
                  "onUpdate:modelValue": k[8] || (k[8] = (R) => r.description = R),
                  class: "form-textarea",
                  placeholder: "字段描述（可选）",
                  rows: "3"
                }, null, 512), [
                  [ie, r.description]
                ])
              ]),
              w("div", Gx, [
                w("button", {
                  type: "button",
                  onClick: h,
                  class: "btn-secondary"
                }, " 取消 "),
                w("button", Yx, Mt(i.value ? "更新字段" : "添加字段"), 1)
              ])
            ], 32)
          ])) : Nt("", !0)
        ])
      ])
    ]));
  }
}), Md = /* @__PURE__ */ Is(qx, [["__scopeId", "data-v-14c82743"]]), Xx = { class: "table-container" }, Jx = { class: "table-stats" }, Zx = { class: "stats-item" }, Qx = { class: "stats-item" }, tw = { class: "stats-item" }, ew = { class: "stats-actions" }, sw = {
  key: 0,
  class: "table-wrapper"
}, nw = { class: "table-header-wrapper" }, iw = { class: "header-cell checkbox-cell" }, ow = ["checked"], rw = ["draggable", "onDragstart", "onDragover", "onDrop"], aw = ["onMousedown"], lw = { class: "field-name" }, cw = ["onMousedown"], uw = ["draggable", "onDragstart", "onDragover", "onDrop"], fw = { class: "row-cell checkbox-cell" }, dw = ["checked", "onChange"], hw = ["onClick", "onDblclick"], pw = {
  key: 0,
  class: "column-indicator"
}, gw = {
  key: 1,
  class: "row-indicator"
}, mw = {
  key: 3,
  class: "loading-overlay"
}, _w = { class: "loading-spinner" }, bw = {
  key: 4,
  class: "empty-state"
}, yw = /* @__PURE__ */ Me({
  __name: "TableContainer",
  setup(e) {
    const t = La(), s = gt(!1), n = gt(), i = gt(), o = gt(!1), r = gt(!1), a = gt(!1), l = gt({
      isDragging: !1,
      dragType: null,
      dragIndex: -1,
      dragData: null,
      dropTarget: -1,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0
    }), c = gt({
      isResizing: !1,
      columnIndex: -1,
      startX: 0,
      startWidth: 0
    }), u = gt(null), f = Rt(() => t.visibleFields || []), d = Rt(() => t.filteredRecords || []), h = Rt(() => t.selectedRecords || []), _ = Rt(() => t.filters || []), m = t.deleteRecord || (() => {
    }), y = t.clearSelection || (() => {
    }), C = t.updateFilters || (() => {
    }), j = t.toggleRecordSelection || (() => {
    }), Y = t.selectAllRecords || (() => {
    }), tt = t.updateRecord || (() => {
    }), M = t.updateField || (() => {
    }), X = t.reorderFields || (() => {
    }), S = t.reorderRecords || (() => {
    }), k = Rt(() => (t.records || []).length), R = Rt(() => _.value.length > 0), L = Rt(() => {
      const v = d.value, I = h.value;
      return v.length > 0 && I.length === v.length;
    }), $ = Rt(() => {
      var v;
      return ((v = d.value) == null ? void 0 : v.length) || 0;
    }), q = Rt(() => {
      const v = d.value;
      return v ? v.slice(0, 100) : [];
    }), ht = Rt(() => f.value.reduce((I, E) => I + E.width, 0) + 48), It = (v) => ({
      width: `${v.width}px`,
      minWidth: `${v.width}px`,
      maxWidth: `${v.width}px`,
      flexShrink: 0
    }), ct = Rt(() => ({
      left: l.value.currentX + "px",
      top: l.value.currentY + "px",
      transform: "translate(-50%, -50%)"
    })), ut = (v) => {
      if (a.value) return;
      r.value = !0;
      const I = v.target;
      i.value && (i.value.scrollLeft = I.scrollLeft), requestAnimationFrame(() => {
        r.value = !1;
      });
    }, Z = (v) => {
      if (r.value) return;
      a.value = !0;
      const I = v.target;
      n.value && (n.value.scrollLeft = I.scrollLeft), requestAnimationFrame(() => {
        a.value = !1;
      });
    }, st = (v) => {
      c.value.isResizing && (v.preventDefault(), v.stopPropagation());
    }, bt = (v, I) => {
      if (c.value.isResizing) {
        v.preventDefault(), v.stopPropagation();
        return;
      }
    }, ft = (v, I) => {
      if (c.value.isResizing) {
        v.preventDefault();
        return;
      }
      const E = f.value[I];
      if (E) {
        if (l.value = {
          isDragging: !0,
          dragType: "column",
          dragIndex: I,
          dragData: E,
          dropTarget: -1,
          startX: v.clientX,
          startY: v.clientY,
          currentX: v.clientX,
          currentY: v.clientY
        }, v.dataTransfer) {
          v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", I.toString());
          const G = document.createElement("div");
          G.style.opacity = "0", G.style.position = "absolute", G.style.top = "-1000px", document.body.appendChild(G), v.dataTransfer.setDragImage(G, 0, 0), setTimeout(() => document.body.removeChild(G), 0);
        }
        document.addEventListener("dragover", ce), document.body.classList.add("dragging-column");
      }
    }, V = (v, I) => {
      v.preventDefault(), l.value.dragType === "column" && l.value.dragIndex !== I && (l.value.dropTarget = I);
    }, T = (v, I) => {
      if (v.preventDefault(), l.value.dragType === "column" && l.value.dragIndex !== I) {
        const E = l.value.dragIndex;
        X(E, I);
      }
    }, W = () => {
      l.value = {
        isDragging: !1,
        dragType: null,
        dragIndex: -1,
        dragData: null,
        dropTarget: -1,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0
      }, document.removeEventListener("dragover", ce), document.body.classList.remove("dragging-column");
    }, J = (v, I) => {
      if (u.value || c.value.isResizing) {
        v.preventDefault();
        return;
      }
      const E = q.value[I];
      if (E) {
        if (l.value = {
          isDragging: !0,
          dragType: "row",
          dragIndex: I,
          dragData: E,
          dropTarget: -1,
          startX: v.clientX,
          startY: v.clientY,
          currentX: v.clientX,
          currentY: v.clientY
        }, v.dataTransfer) {
          v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", I.toString());
          const G = document.createElement("div");
          G.style.opacity = "0", G.style.position = "absolute", G.style.top = "-1000px", document.body.appendChild(G), v.dataTransfer.setDragImage(G, 0, 0), setTimeout(() => document.body.removeChild(G), 0);
        }
        document.addEventListener("dragover", ce), document.body.classList.add("dragging-row");
      }
    }, _t = (v, I) => {
      v.preventDefault(), l.value.dragType === "row" && l.value.dragIndex !== I && (l.value.dropTarget = I);
    }, wt = (v, I) => {
      if (v.preventDefault(), l.value.dragType === "row" && l.value.dragIndex !== I) {
        const E = l.value.dragIndex;
        S(E, I);
      }
    }, Ft = () => {
      l.value = {
        isDragging: !1,
        dragType: null,
        dragIndex: -1,
        dragData: null,
        dropTarget: -1,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0
      }, document.removeEventListener("dragover", ce), document.body.classList.remove("dragging-row");
    }, Te = (v, I) => {
      const E = f.value[I];
      E && (c.value = {
        isResizing: !0,
        columnIndex: I,
        startX: v.clientX,
        startWidth: E.width
      }, document.addEventListener("mousemove", De), document.addEventListener("mouseup", cs), document.body.classList.add("resizing-column"), document.body.style.userSelect = "none");
    }, De = (v) => {
      if (!c.value.isResizing) return;
      const I = v.clientX - c.value.startX, E = Math.max(80, c.value.startWidth + I), G = f.value[c.value.columnIndex];
      G && M(G.id, { width: E });
    }, cs = () => {
      c.value = {
        isResizing: !1,
        columnIndex: -1,
        startX: 0,
        startWidth: 0
      }, document.removeEventListener("mousemove", De), document.removeEventListener("mouseup", cs), document.body.classList.remove("resizing-column"), document.body.style.userSelect = "";
    }, ce = (v) => {
      l.value.currentX = v.clientX, l.value.currentY = v.clientY;
    }, Li = (v, I) => {
    }, g = (v, I) => {
      u.value = { recordId: v, fieldId: I };
    }, b = () => {
      u.value = null;
    }, O = () => {
      u.value = null;
    }, F = (v, I, E) => {
      tt(v, { [I]: E }), b();
    }, A = () => {
      Cs(() => {
      });
    }, P = () => {
      L.value ? y() : Y();
    }, U = async () => {
      const v = h.value;
      if (!(!v || v.length === 0) && confirm(`确定要删除选中的 ${v.length} 条记录吗？`)) {
        s.value = !0;
        try {
          for (const I of v)
            m(I);
          y();
        } finally {
          s.value = !1;
        }
      }
    }, z = () => {
      t.loadFromStorage && t.loadFromStorage();
    }, H = () => {
      C({});
    };
    return Pi(() => {
      document.removeEventListener("dragover", ce), document.removeEventListener("mousemove", De), document.removeEventListener("mouseup", cs), document.body.classList.remove("dragging-column", "dragging-row", "resizing-column"), document.body.style.userSelect = "";
    }), (v, I) => {
      var E, G, nt, dt;
      return N(), K("div", Xx, [
        w("div", Jx, [
          w("span", Zx, " 总计 " + Mt(k.value) + " 条记录 ", 1),
          w("span", Qx, " 筛选后 " + Mt($.value) + " 条记录 ", 1),
          w("span", tw, " 已选择 " + Mt(((E = h.value) == null ? void 0 : E.length) || 0) + " 条 ", 1),
          w("div", ew, [
            h.value.length > 0 ? (N(), K("button", {
              key: 0,
              onClick: U,
              class: "action-btn danger"
            }, [
              vt(Ct(Bf), { class: "w-4 h-4" }),
              I[3] || (I[3] = Os(" 删除选中 ", -1))
            ])) : Nt("", !0),
            w("button", {
              onClick: z,
              class: "action-btn"
            }, [
              vt(Ct(C_), { class: "w-4 h-4" }),
              I[4] || (I[4] = Os(" 刷新 ", -1))
            ])
          ])
        ]),
        s.value ? Nt("", !0) : (N(), K("div", sw, [
          w("div", nw, [
            w("div", {
              class: "table-header-scroll",
              ref_key: "headerScrollRef",
              ref: n,
              onScroll: ut
            }, [
              w("div", {
                class: "table-header",
                style: ms({ width: ht.value + "px" })
              }, [
                w("div", iw, [
                  w("input", {
                    type: "checkbox",
                    checked: L.value,
                    onChange: P
                  }, null, 40, ow)
                ]),
                (N(!0), K($t, null, ke(f.value, (rt, at) => (N(), K("div", {
                  key: `header-${rt.id}`,
                  class: is(["header-cell", {
                    dragging: l.value.isDragging && l.value.dragIndex === at && l.value.dragType === "column",
                    "drop-target": l.value.dropTarget === at && l.value.dragType === "column",
                    resizing: c.value.isResizing && c.value.columnIndex === at
                  }]),
                  style: ms(It(rt)),
                  draggable: !c.value.isResizing,
                  onDragstart: (lt) => ft(lt, at),
                  onDragend: W,
                  onDragover: (lt) => V(lt, at),
                  onDrop: (lt) => T(lt, at)
                }, [
                  w("div", {
                    class: "header-content",
                    onMousedown: st
                  }, [
                    w("div", {
                      class: "drag-handle",
                      onMousedown: _e((lt) => bt(lt), ["stop"])
                    }, [
                      vt(Ct(na), { class: "w-4 h-4" })
                    ], 40, aw),
                    w("span", lw, Mt(rt.name), 1)
                  ], 32),
                  w("div", {
                    class: "resize-handle",
                    onMousedown: _e((lt) => Te(lt, at), ["stop", "prevent"]),
                    onDragstart: I[0] || (I[0] = _e(() => {
                    }, ["prevent"]))
                  }, null, 40, cw)
                ], 46, rw))), 128))
              ], 4)
            ], 544)
          ]),
          w("div", {
            class: "table-body-wrapper",
            ref_key: "bodyScrollRef",
            ref: i,
            onScroll: Z
          }, [
            w("div", {
              class: "table-body",
              style: ms({ width: ht.value + "px" })
            }, [
              (N(!0), K($t, null, ke(q.value, (rt, at) => (N(), K("div", {
                key: `row-${rt.id}`,
                class: is(["table-row", {
                  selected: h.value.includes(rt.id),
                  dragging: l.value.isDragging && l.value.dragType === "row" && l.value.dragIndex === at,
                  "drop-target": l.value.dropTarget === at && l.value.dragType === "row"
                }]),
                draggable: !u.value && !c.value.isResizing,
                onDragstart: (lt) => J(lt, at),
                onDragend: Ft,
                onDragover: (lt) => _t(lt, at),
                onDrop: (lt) => wt(lt, at)
              }, [
                w("div", fw, [
                  w("input", {
                    type: "checkbox",
                    checked: h.value.includes(rt.id),
                    onChange: (lt) => Ct(j)(rt.id)
                  }, null, 40, dw)
                ]),
                w("div", {
                  class: "row-drag-handle",
                  onMousedown: I[1] || (I[1] = _e(() => {
                  }, ["stop"]))
                }, [
                  vt(Ct(na), { class: "w-4 h-4" })
                ], 32),
                (N(!0), K($t, null, ke(f.value, (lt, Wt) => {
                  var ee, se;
                  return N(), K("div", {
                    key: `cell-${rt.id}-${lt.id}`,
                    class: "row-cell",
                    style: ms(It(lt)),
                    onClick: (xe) => Li(rt.id, lt.id),
                    onDblclick: (xe) => g(rt.id, lt.id)
                  }, [
                    ((ee = u.value) == null ? void 0 : ee.recordId) === rt.id && ((se = u.value) == null ? void 0 : se.fieldId) === lt.id ? (N(), re(F_, {
                      key: 0,
                      value: rt[lt.id],
                      field: lt,
                      onUpdate: (xe) => F(rt.id, lt.id, xe),
                      onFinish: b,
                      onCancel: O
                    }, null, 8, ["value", "field", "onUpdate"])) : (N(), re(rx, {
                      key: 1,
                      value: rt[lt.id],
                      field: lt,
                      editing: !1
                    }, null, 8, ["value", "field"]))
                  ], 44, hw);
                }), 128))
              ], 42, uw))), 128))
            ], 4)
          ], 544)
        ])),
        l.value.isDragging ? (N(), K("div", {
          key: 1,
          class: "drag-indicator",
          style: ms(ct.value)
        }, [
          l.value.dragType === "column" ? (N(), K("div", pw, [
            (N(), re(tf(Ct(zf)((G = l.value.dragData) == null ? void 0 : G.type)), { class: "w-4 h-4" })),
            w("span", null, Mt((nt = l.value.dragData) == null ? void 0 : nt.name), 1)
          ])) : (N(), K("div", gw, [
            w("span", null, Mt(((dt = l.value.dragData) == null ? void 0 : dt.title) || "记录"), 1)
          ]))
        ], 4)) : Nt("", !0),
        o.value ? (N(), re(Md, {
          key: 2,
          onClose: I[2] || (I[2] = (rt) => o.value = !1),
          onFieldUpdated: A
        })) : Nt("", !0),
        s.value ? (N(), K("div", mw, [
          w("div", _w, [
            vt(Ct(k_), { class: "w-6 h-6 animate-spin" }),
            I[5] || (I[5] = w("span", null, "加载中...", -1))
          ])
        ])) : Nt("", !0),
        !s.value && (!d.value || d.value.length === 0) ? (N(), K("div", bw, [
          vt(Ct(w_), { class: "w-16 h-16 text-gray-400" }),
          I[6] || (I[6] = w("h3", null, "暂无数据", -1)),
          w("p", null, Mt(R.value ? "当前筛选条件下没有找到数据" : "还没有任何记录，点击上方按钮添加第一条记录"), 1),
          R.value ? (N(), K("button", {
            key: 0,
            onClick: H,
            class: "btn-primary"
          }, " 清除筛选条件 ")) : Nt("", !0)
        ])) : Nt("", !0)
      ]);
    };
  }
}), vw = /* @__PURE__ */ Is(yw, [["__scopeId", "data-v-bdbbb0b0"]]), xw = { class: "filter-group" }, ww = { class: "group-header" }, Sw = { class: "group-rules" }, kw = ["onUpdate:modelValue"], Ow = ["value"], Mw = ["onUpdate:modelValue"], Cw = ["value"], Tw = ["onUpdate:modelValue"], Dw = ["onClick"], Iw = /* @__PURE__ */ Me({
  name: "FilterGroup",
  __name: "FilterGroup",
  props: {
    group: {},
    fields: {}
  },
  emits: ["remove-group"],
  setup(e, { emit: t }) {
    const s = e, n = t;
    Rt(() => s.group.rules ?? []);
    const i = [
      { value: "equals", label: "等于" },
      { value: "not_equals", label: "不等于" },
      { value: "contains", label: "包含" },
      { value: "not_contains", label: "不包含" },
      { value: "starts_with", label: "开头是" },
      { value: "ends_with", label: "结尾是" },
      { value: "is_empty", label: "为空" },
      { value: "is_not_empty", label: "不为空" },
      { value: "greater_than", label: "大于" },
      { value: "less_than", label: "小于" },
      { value: "greater_equal", label: "大于等于" },
      { value: "less_equal", label: "小于等于" }
    ], o = (u) => ["is_empty", "is_not_empty"].includes(u), r = (u) => {
      s.group.rules.splice(u, 1);
    }, a = () => {
      n("remove-group");
    }, l = () => {
      s.group.rules.push({
        id: vs(),
        fieldId: "",
        operator: "equals",
        value: ""
      });
    }, c = () => {
      s.group.rules.push({
        id: vs(),
        logic: "or",
        rules: []
      });
    };
    return (u, f) => {
      const d = ig("FilterGroup", !0);
      return N(), K("div", xw, [
        w("div", ww, [
          At(w("select", {
            "onUpdate:modelValue": f[0] || (f[0] = (h) => u.group.logic = h),
            class: "logic-select"
          }, [...f[1] || (f[1] = [
            w("option", { value: "and" }, "所有条件满足 (AND)", -1),
            w("option", { value: "or" }, "任一条件满足 (OR)", -1)
          ])], 512), [
            [ni, u.group.logic]
          ]),
          w("button", {
            onClick: a,
            class: "remove-btn"
          }, "×")
        ]),
        w("div", Sw, [
          (N(!0), K($t, null, ke(u.group.rules, (h, _) => (N(), K("div", {
            key: h.id,
            class: "rule-item"
          }, [
            "fieldId" in h ? (N(), K($t, { key: 0 }, [
              At(w("select", {
                "onUpdate:modelValue": (m) => h.fieldId = m,
                class: "field-select"
              }, [
                f[2] || (f[2] = w("option", {
                  disabled: "",
                  value: ""
                }, "选择字段", -1)),
                (N(!0), K($t, null, ke(u.fields, (m) => (N(), K("option", {
                  key: m.id,
                  value: m.id
                }, Mt(m.name), 9, Ow))), 128))
              ], 8, kw), [
                [ni, h.fieldId]
              ]),
              At(w("select", {
                "onUpdate:modelValue": (m) => h.operator = m,
                class: "operator-select"
              }, [
                f[3] || (f[3] = w("option", {
                  disabled: "",
                  value: ""
                }, "操作", -1)),
                (N(), K($t, null, ke(i, (m) => w("option", {
                  key: m.value,
                  value: m.value
                }, Mt(m.label), 9, Cw)), 64))
              ], 8, Mw), [
                [ni, h.operator]
              ]),
              o(h.operator) ? Nt("", !0) : At((N(), K("input", {
                key: 0,
                "onUpdate:modelValue": (m) => h.value = m,
                type: "text",
                class: "value-input",
                placeholder: "输入值"
              }, null, 8, Tw)), [
                [ie, h.value]
              ]),
              w("button", {
                onClick: (m) => r(_),
                class: "remove-rule-btn"
              }, "−", 8, Dw)
            ], 64)) : (N(), re(d, {
              key: 1,
              group: h,
              fields: u.fields,
              onRemoveGroup: () => r(_)
            }, null, 8, ["group", "fields", "onRemoveGroup"]))
          ]))), 128))
        ]),
        w("div", { class: "group-actions" }, [
          w("button", {
            onClick: l,
            class: "add-rule-btn"
          }, "+ 条件"),
          w("button", {
            onClick: c,
            class: "add-group-btn"
          }, "+ 分组")
        ])
      ]);
    };
  }
}), Pw = /* @__PURE__ */ Is(Iw, [["__scopeId", "data-v-cacae14a"]]);
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ew(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wo = { exports: {} };
Wo.exports;
(function(e, t) {
  var s = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", r = "[object Array]", a = "[object Boolean]", l = "[object Date]", c = "[object Error]", u = "[object Function]", f = "[object GeneratorFunction]", d = "[object Map]", h = "[object Number]", _ = "[object Object]", m = "[object Promise]", y = "[object RegExp]", C = "[object Set]", j = "[object String]", Y = "[object Symbol]", tt = "[object WeakMap]", M = "[object ArrayBuffer]", X = "[object DataView]", S = "[object Float32Array]", k = "[object Float64Array]", R = "[object Int8Array]", L = "[object Int16Array]", $ = "[object Int32Array]", q = "[object Uint8Array]", ht = "[object Uint8ClampedArray]", It = "[object Uint16Array]", ct = "[object Uint32Array]", ut = /[\\^$.*+?()[\]{}|]/g, Z = /\w*$/, st = /^\[object .+?Constructor\]$/, bt = /^(?:0|[1-9]\d*)$/, ft = {};
  ft[o] = ft[r] = ft[M] = ft[X] = ft[a] = ft[l] = ft[S] = ft[k] = ft[R] = ft[L] = ft[$] = ft[d] = ft[h] = ft[_] = ft[y] = ft[C] = ft[j] = ft[Y] = ft[q] = ft[ht] = ft[It] = ft[ct] = !0, ft[c] = ft[u] = ft[tt] = !1;
  var V = typeof ro == "object" && ro && ro.Object === Object && ro, T = typeof self == "object" && self && self.Object === Object && self, W = V || T || Function("return this")(), J = t && !t.nodeType && t, _t = J && !0 && e && !e.nodeType && e, wt = _t && _t.exports === J;
  function Ft(p, x) {
    return p.set(x[0], x[1]), p;
  }
  function Te(p, x) {
    return p.add(x), p;
  }
  function De(p, x) {
    for (var D = -1, et = p ? p.length : 0; ++D < et && x(p[D], D, p) !== !1; )
      ;
    return p;
  }
  function cs(p, x) {
    for (var D = -1, et = x.length, Gt = p.length; ++D < et; )
      p[Gt + D] = x[D];
    return p;
  }
  function ce(p, x, D, et) {
    for (var Gt = -1, fe = p ? p.length : 0; ++Gt < fe; )
      D = x(D, p[Gt], Gt, p);
    return D;
  }
  function Li(p, x) {
    for (var D = -1, et = Array(p); ++D < p; )
      et[D] = x(D);
    return et;
  }
  function g(p, x) {
    return p == null ? void 0 : p[x];
  }
  function b(p) {
    var x = !1;
    if (p != null && typeof p.toString != "function")
      try {
        x = !!(p + "");
      } catch {
      }
    return x;
  }
  function O(p) {
    var x = -1, D = Array(p.size);
    return p.forEach(function(et, Gt) {
      D[++x] = [Gt, et];
    }), D;
  }
  function F(p, x) {
    return function(D) {
      return p(x(D));
    };
  }
  function A(p) {
    var x = -1, D = Array(p.size);
    return p.forEach(function(et) {
      D[++x] = et;
    }), D;
  }
  var P = Array.prototype, U = Function.prototype, z = Object.prototype, H = W["__core-js_shared__"], v = function() {
    var p = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
    return p ? "Symbol(src)_1." + p : "";
  }(), I = U.toString, E = z.hasOwnProperty, G = z.toString, nt = RegExp(
    "^" + I.call(E).replace(ut, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), dt = wt ? W.Buffer : void 0, rt = W.Symbol, at = W.Uint8Array, lt = F(Object.getPrototypeOf, Object), Wt = Object.create, ee = z.propertyIsEnumerable, se = P.splice, xe = Object.getOwnPropertySymbols, Fi = dt ? dt.isBuffer : void 0, Kt = F(Object.keys, Object), ue = un(W, "DataView"), us = un(W, "Map"), an = un(W, "Promise"), ar = un(W, "Set"), lr = un(W, "WeakMap"), $n = un(Object, "create"), Cd = As(ue), Td = As(us), Dd = As(an), Id = As(ar), Pd = As(lr), qa = rt ? rt.prototype : void 0, Xa = qa ? qa.valueOf : void 0;
  function Ps(p) {
    var x = -1, D = p ? p.length : 0;
    for (this.clear(); ++x < D; ) {
      var et = p[x];
      this.set(et[0], et[1]);
    }
  }
  function Ed() {
    this.__data__ = $n ? $n(null) : {};
  }
  function Ad(p) {
    return this.has(p) && delete this.__data__[p];
  }
  function Rd(p) {
    var x = this.__data__;
    if ($n) {
      var D = x[p];
      return D === n ? void 0 : D;
    }
    return E.call(x, p) ? x[p] : void 0;
  }
  function $d(p) {
    var x = this.__data__;
    return $n ? x[p] !== void 0 : E.call(x, p);
  }
  function Ld(p, x) {
    var D = this.__data__;
    return D[p] = $n && x === void 0 ? n : x, this;
  }
  Ps.prototype.clear = Ed, Ps.prototype.delete = Ad, Ps.prototype.get = Rd, Ps.prototype.has = $d, Ps.prototype.set = Ld;
  function qe(p) {
    var x = -1, D = p ? p.length : 0;
    for (this.clear(); ++x < D; ) {
      var et = p[x];
      this.set(et[0], et[1]);
    }
  }
  function Fd() {
    this.__data__ = [];
  }
  function jd(p) {
    var x = this.__data__, D = ji(x, p);
    if (D < 0)
      return !1;
    var et = x.length - 1;
    return D == et ? x.pop() : se.call(x, D, 1), !0;
  }
  function Vd(p) {
    var x = this.__data__, D = ji(x, p);
    return D < 0 ? void 0 : x[D][1];
  }
  function Nd(p) {
    return ji(this.__data__, p) > -1;
  }
  function Hd(p, x) {
    var D = this.__data__, et = ji(D, p);
    return et < 0 ? D.push([p, x]) : D[et][1] = x, this;
  }
  qe.prototype.clear = Fd, qe.prototype.delete = jd, qe.prototype.get = Vd, qe.prototype.has = Nd, qe.prototype.set = Hd;
  function ln(p) {
    var x = -1, D = p ? p.length : 0;
    for (this.clear(); ++x < D; ) {
      var et = p[x];
      this.set(et[0], et[1]);
    }
  }
  function zd() {
    this.__data__ = {
      hash: new Ps(),
      map: new (us || qe)(),
      string: new Ps()
    };
  }
  function Bd(p) {
    return Vi(this, p).delete(p);
  }
  function Ud(p) {
    return Vi(this, p).get(p);
  }
  function Wd(p) {
    return Vi(this, p).has(p);
  }
  function Kd(p, x) {
    return Vi(this, p).set(p, x), this;
  }
  ln.prototype.clear = zd, ln.prototype.delete = Bd, ln.prototype.get = Ud, ln.prototype.has = Wd, ln.prototype.set = Kd;
  function cn(p) {
    this.__data__ = new qe(p);
  }
  function Gd() {
    this.__data__ = new qe();
  }
  function Yd(p) {
    return this.__data__.delete(p);
  }
  function qd(p) {
    return this.__data__.get(p);
  }
  function Xd(p) {
    return this.__data__.has(p);
  }
  function Jd(p, x) {
    var D = this.__data__;
    if (D instanceof qe) {
      var et = D.__data__;
      if (!us || et.length < s - 1)
        return et.push([p, x]), this;
      D = this.__data__ = new ln(et);
    }
    return D.set(p, x), this;
  }
  cn.prototype.clear = Gd, cn.prototype.delete = Yd, cn.prototype.get = qd, cn.prototype.has = Xd, cn.prototype.set = Jd;
  function Zd(p, x) {
    var D = fr(p) || wh(p) ? Li(p.length, String) : [], et = D.length, Gt = !!et;
    for (var fe in p)
      E.call(p, fe) && !(Gt && (fe == "length" || bh(fe, et))) && D.push(fe);
    return D;
  }
  function Ja(p, x, D) {
    var et = p[x];
    (!(E.call(p, x) && el(et, D)) || D === void 0 && !(x in p)) && (p[x] = D);
  }
  function ji(p, x) {
    for (var D = p.length; D--; )
      if (el(p[D][0], x))
        return D;
    return -1;
  }
  function Qd(p, x) {
    return p && Za(x, dr(x), p);
  }
  function cr(p, x, D, et, Gt, fe, Xe) {
    var de;
    if (et && (de = fe ? et(p, Gt, fe, Xe) : et(p)), de !== void 0)
      return de;
    if (!Ni(p))
      return p;
    var il = fr(p);
    if (il) {
      if (de = gh(p), !x)
        return dh(p, de);
    } else {
      var fn = Es(p), ol = fn == u || fn == f;
      if (kh(p))
        return oh(p, x);
      if (fn == _ || fn == o || ol && !fe) {
        if (b(p))
          return fe ? p : {};
        if (de = mh(ol ? {} : p), !x)
          return hh(p, Qd(de, p));
      } else {
        if (!ft[fn])
          return fe ? p : {};
        de = _h(p, fn, cr, x);
      }
    }
    Xe || (Xe = new cn());
    var rl = Xe.get(p);
    if (rl)
      return rl;
    if (Xe.set(p, de), !il)
      var al = D ? ph(p) : dr(p);
    return De(al || p, function(hr, Hi) {
      al && (Hi = hr, hr = p[Hi]), Ja(de, Hi, cr(hr, x, D, et, Hi, p, Xe));
    }), de;
  }
  function th(p) {
    return Ni(p) ? Wt(p) : {};
  }
  function eh(p, x, D) {
    var et = x(p);
    return fr(p) ? et : cs(et, D(p));
  }
  function sh(p) {
    return G.call(p);
  }
  function nh(p) {
    if (!Ni(p) || vh(p))
      return !1;
    var x = nl(p) || b(p) ? nt : st;
    return x.test(As(p));
  }
  function ih(p) {
    if (!tl(p))
      return Kt(p);
    var x = [];
    for (var D in Object(p))
      E.call(p, D) && D != "constructor" && x.push(D);
    return x;
  }
  function oh(p, x) {
    if (x)
      return p.slice();
    var D = new p.constructor(p.length);
    return p.copy(D), D;
  }
  function ur(p) {
    var x = new p.constructor(p.byteLength);
    return new at(x).set(new at(p)), x;
  }
  function rh(p, x) {
    var D = x ? ur(p.buffer) : p.buffer;
    return new p.constructor(D, p.byteOffset, p.byteLength);
  }
  function ah(p, x, D) {
    var et = x ? D(O(p), !0) : O(p);
    return ce(et, Ft, new p.constructor());
  }
  function lh(p) {
    var x = new p.constructor(p.source, Z.exec(p));
    return x.lastIndex = p.lastIndex, x;
  }
  function ch(p, x, D) {
    var et = x ? D(A(p), !0) : A(p);
    return ce(et, Te, new p.constructor());
  }
  function uh(p) {
    return Xa ? Object(Xa.call(p)) : {};
  }
  function fh(p, x) {
    var D = x ? ur(p.buffer) : p.buffer;
    return new p.constructor(D, p.byteOffset, p.length);
  }
  function dh(p, x) {
    var D = -1, et = p.length;
    for (x || (x = Array(et)); ++D < et; )
      x[D] = p[D];
    return x;
  }
  function Za(p, x, D, et) {
    D || (D = {});
    for (var Gt = -1, fe = x.length; ++Gt < fe; ) {
      var Xe = x[Gt], de = void 0;
      Ja(D, Xe, de === void 0 ? p[Xe] : de);
    }
    return D;
  }
  function hh(p, x) {
    return Za(p, Qa(p), x);
  }
  function ph(p) {
    return eh(p, dr, Qa);
  }
  function Vi(p, x) {
    var D = p.__data__;
    return yh(x) ? D[typeof x == "string" ? "string" : "hash"] : D.map;
  }
  function un(p, x) {
    var D = g(p, x);
    return nh(D) ? D : void 0;
  }
  var Qa = xe ? F(xe, Object) : Ch, Es = sh;
  (ue && Es(new ue(new ArrayBuffer(1))) != X || us && Es(new us()) != d || an && Es(an.resolve()) != m || ar && Es(new ar()) != C || lr && Es(new lr()) != tt) && (Es = function(p) {
    var x = G.call(p), D = x == _ ? p.constructor : void 0, et = D ? As(D) : void 0;
    if (et)
      switch (et) {
        case Cd:
          return X;
        case Td:
          return d;
        case Dd:
          return m;
        case Id:
          return C;
        case Pd:
          return tt;
      }
    return x;
  });
  function gh(p) {
    var x = p.length, D = p.constructor(x);
    return x && typeof p[0] == "string" && E.call(p, "index") && (D.index = p.index, D.input = p.input), D;
  }
  function mh(p) {
    return typeof p.constructor == "function" && !tl(p) ? th(lt(p)) : {};
  }
  function _h(p, x, D, et) {
    var Gt = p.constructor;
    switch (x) {
      case M:
        return ur(p);
      case a:
      case l:
        return new Gt(+p);
      case X:
        return rh(p, et);
      case S:
      case k:
      case R:
      case L:
      case $:
      case q:
      case ht:
      case It:
      case ct:
        return fh(p, et);
      case d:
        return ah(p, et, D);
      case h:
      case j:
        return new Gt(p);
      case y:
        return lh(p);
      case C:
        return ch(p, et, D);
      case Y:
        return uh(p);
    }
  }
  function bh(p, x) {
    return x = x ?? i, !!x && (typeof p == "number" || bt.test(p)) && p > -1 && p % 1 == 0 && p < x;
  }
  function yh(p) {
    var x = typeof p;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? p !== "__proto__" : p === null;
  }
  function vh(p) {
    return !!v && v in p;
  }
  function tl(p) {
    var x = p && p.constructor, D = typeof x == "function" && x.prototype || z;
    return p === D;
  }
  function As(p) {
    if (p != null) {
      try {
        return I.call(p);
      } catch {
      }
      try {
        return p + "";
      } catch {
      }
    }
    return "";
  }
  function xh(p) {
    return cr(p, !0, !0);
  }
  function el(p, x) {
    return p === x || p !== p && x !== x;
  }
  function wh(p) {
    return Sh(p) && E.call(p, "callee") && (!ee.call(p, "callee") || G.call(p) == o);
  }
  var fr = Array.isArray;
  function sl(p) {
    return p != null && Oh(p.length) && !nl(p);
  }
  function Sh(p) {
    return Mh(p) && sl(p);
  }
  var kh = Fi || Th;
  function nl(p) {
    var x = Ni(p) ? G.call(p) : "";
    return x == u || x == f;
  }
  function Oh(p) {
    return typeof p == "number" && p > -1 && p % 1 == 0 && p <= i;
  }
  function Ni(p) {
    var x = typeof p;
    return !!p && (x == "object" || x == "function");
  }
  function Mh(p) {
    return !!p && typeof p == "object";
  }
  function dr(p) {
    return sl(p) ? Zd(p) : ih(p);
  }
  function Ch() {
    return [];
  }
  function Th() {
    return !1;
  }
  e.exports = xh;
})(Wo, Wo.exports);
var Aw = Wo.exports;
const Rw = /* @__PURE__ */ Ew(Aw), $w = { class: "modal-content" }, Lw = { class: "modal-header" }, Fw = { class: "modal-body" }, jw = /* @__PURE__ */ Me({
  __name: "FilterModal",
  props: {
    show: { type: Boolean },
    fields: {},
    filters: {}
  },
  emits: ["apply", "close"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = () => {
      n("apply", r.value);
    }, o = () => {
      n("close");
    }, r = gt({ id: "root", logic: "and", rules: [] });
    Js(
      () => s.show,
      (f) => {
        f && (r.value = Rw(s.filters), console.log("✅ Modal opened, localFilters set to:", r.value));
      },
      { immediate: !0 }
    );
    const a = () => {
      r.value.rules || (r.value.rules = []), r.value.rules.push({
        id: vs(),
        fieldId: "",
        operator: "equals",
        value: ""
      });
    }, l = () => {
      r.value.rules || (r.value.rules = []), r.value.rules.push({
        id: vs(),
        logic: "or",
        rules: []
      });
    }, c = () => {
      r.value.rules = [];
    }, u = () => {
      n("close");
    };
    return (f, d) => f.show ? (N(), K("div", {
      key: 0,
      class: "modal-overlay",
      onClick: _e(u, ["self"])
    }, [
      w("div", $w, [
        w("div", Lw, [
          d[1] || (d[1] = w("h3", null, "高级筛选", -1)),
          w("button", {
            onClick: d[0] || (d[0] = (h) => f.$emit("close")),
            class: "close-btn"
          }, [
            vt(Ct(Qs), { class: "w-4 h-4" })
          ])
        ]),
        w("div", Fw, [
          r.value ? (N(), re(Pw, {
            key: 0,
            group: r.value,
            fields: f.fields,
            onRemoveGroup: c
          }, null, 8, ["group", "fields"])) : Nt("", !0),
          w("button", {
            onClick: a,
            class: "add-filter-btn"
          }, "+ 添加条件"),
          w("button", {
            onClick: l,
            class: "add-filter-btn"
          }, "+ 添加分组 (OR)")
        ]),
        w("div", { class: "modal-footer" }, [
          w("button", {
            onClick: o,
            class: "btn-secondary"
          }, "取消"),
          w("button", {
            onClick: i,
            class: "btn-primary"
          }, "应用")
        ])
      ])
    ])) : Nt("", !0);
  }
}), Vw = /* @__PURE__ */ Is(jw, [["__scopeId", "data-v-9e510c87"]]), Nw = { class: "modal-header" }, Hw = { class: "modal-footer" }, zw = /* @__PURE__ */ Me({
  __name: "GroupModal",
  emits: ["close"],
  setup(e) {
    return (t, s) => (N(), K("div", {
      class: "modal-overlay",
      onClick: s[3] || (s[3] = (n) => t.$emit("close"))
    }, [
      w("div", {
        class: "modal-content",
        onClick: s[2] || (s[2] = _e(() => {
        }, ["stop"]))
      }, [
        w("div", Nw, [
          s[4] || (s[4] = w("h3", null, "分组设置", -1)),
          w("button", {
            onClick: s[0] || (s[0] = (n) => t.$emit("close")),
            class: "close-btn"
          }, [
            vt(Ct(Qs), { class: "w-4 h-4" })
          ])
        ]),
        s[6] || (s[6] = w("div", { class: "modal-body" }, [
          w("p", { class: "text-gray-600" }, "分组功能开发中...")
        ], -1)),
        w("div", Hw, [
          w("button", {
            onClick: s[1] || (s[1] = (n) => t.$emit("close")),
            class: "btn-secondary"
          }, " 取消 "),
          s[5] || (s[5] = w("button", { class: "btn-primary" }, " 应用分组 ", -1))
        ])
      ])
    ]));
  }
}), Bw = /* @__PURE__ */ Is(zw, [["__scopeId", "data-v-96006ccd"]]), Uw = { class: "modal-header" }, Ww = { class: "modal-footer" }, Kw = /* @__PURE__ */ Me({
  __name: "FormGeneratorModal",
  emits: ["close"],
  setup(e) {
    return (t, s) => (N(), K("div", {
      class: "modal-overlay",
      onClick: s[3] || (s[3] = (n) => t.$emit("close"))
    }, [
      w("div", {
        class: "modal-content",
        onClick: s[2] || (s[2] = _e(() => {
        }, ["stop"]))
      }, [
        w("div", Uw, [
          s[4] || (s[4] = w("h3", null, "表单生成器", -1)),
          w("button", {
            onClick: s[0] || (s[0] = (n) => t.$emit("close")),
            class: "close-btn"
          }, [
            vt(Ct(Qs), { class: "w-4 h-4" })
          ])
        ]),
        s[6] || (s[6] = w("div", { class: "modal-body" }, [
          w("p", { class: "text-gray-600" }, "表单生成功能开发中...")
        ], -1)),
        w("div", Ww, [
          w("button", {
            onClick: s[1] || (s[1] = (n) => t.$emit("close")),
            class: "btn-secondary"
          }, " 取消 "),
          s[5] || (s[5] = w("button", { class: "btn-primary" }, " 生成表单 ", -1))
        ])
      ])
    ]));
  }
}), Gw = /* @__PURE__ */ Is(Kw, [["__scopeId", "data-v-37e4fd70"]]), Yw = { class: "table-view" }, qw = { class: "main-content" }, Xw = { class: "content" }, lu = /* @__PURE__ */ Me({
  __name: "ShareView",
  props: {
    data: {}
  },
  setup(e) {
    La();
    const t = gt(!1), s = gt(!1), n = gt(!1), i = gt(!1), o = e, r = Rt(() => o.data || []);
    return Kn("showFieldManager", t), Kn("showFilterModal", s), Kn("showGroupModal", n), Kn("showFormGenerator", i), (a, l) => (N(), K("div", Yw, [
      w("div", qw, [
        w("main", Xw, [
          vt(vw, { data: r.value }, null, 8, ["data"])
        ])
      ]),
      t.value ? (N(), re(Md, {
        key: 0,
        onClose: l[0] || (l[0] = (c) => t.value = !1)
      })) : Nt("", !0),
      s.value ? (N(), re(Vw, {
        key: 1,
        onClose: l[1] || (l[1] = (c) => s.value = !1)
      })) : Nt("", !0),
      n.value ? (N(), re(Bw, {
        key: 2,
        onClose: l[2] || (l[2] = (c) => n.value = !1)
      })) : Nt("", !0),
      i.value ? (N(), re(Gw, {
        key: 3,
        onClose: l[3] || (l[3] = (c) => i.value = !1)
      })) : Nt("", !0)
    ]));
  }
}), Jw = /* @__PURE__ */ Im({
  // 继承 ShareView 组件
  extends: lu,
  // setup 函数用于注入依赖
  setup(e) {
    const t = h_();
    return Zr({}).use(t), () => On(lu, { ...e, pinia: t });
  }
  // ⚠️ 如果 ShareView 内部使用 <script setup>，需确保它能接收 pinia prop
}, { shadowRoot: !1 });
customElements.define("share-view", Jw);
export {
  Jw as default
};
