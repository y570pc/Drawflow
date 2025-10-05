var If = Object.defineProperty;
var Ef = (e, t, s) => t in e ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var nt = (e, t, s) => Ef(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function We(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const dt = Object.freeze({}), Xs = Object.freeze([]), Wt = () => {
}, _c = () => !1, ti = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ki = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, Tr = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Af = Object.prototype.hasOwnProperty, at = (e, t) => Af.call(e, t), W = Array.isArray, Ss = (e) => ei(e) === "[object Map]", ln = (e) => ei(e) === "[object Set]", ga = (e) => ei(e) === "[object Date]", Q = (e) => typeof e == "function", St = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", ut = (e) => e !== null && typeof e == "object", Dr = (e) => (ut(e) || Q(e)) && Q(e.then) && Q(e.catch), bc = Object.prototype.toString, ei = (e) => bc.call(e), Pr = (e) => ei(e).slice(8, -1), mo = (e) => ei(e) === "[object Object]", Ir = (e) => St(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Cn = /* @__PURE__ */ We(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rf = /* @__PURE__ */ We(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), _o = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Lf = /-\w/g, Rt = _o(
  (e) => e.replace(Lf, (t) => t.slice(1).toUpperCase())
), $f = /\B([A-Z])/g, ie = _o(
  (e) => e.replace($f, "-$1").toLowerCase()
), As = _o((e) => e.charAt(0).toUpperCase() + e.slice(1)), ms = _o(
  (e) => e ? `on${As(e)}` : ""
), as = (e, t) => !Object.is(e, t), Ys = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Yi = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, qi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ma = (e) => {
  const t = St(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let _a;
const si = () => _a || (_a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ze(e) {
  if (W(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = St(n) ? Vf(n) : Ze(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (St(e) || ut(e))
    return e;
}
const Ff = /;(?![^(]*\))/g, Nf = /:([^]+)/, jf = /\/\*[^]*?\*\//g;
function Vf(e) {
  const t = {};
  return e.replace(jf, "").split(Ff).forEach((s) => {
    if (s) {
      const n = s.split(Nf);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ze(e) {
  let t = "";
  if (St(e))
    t = e;
  else if (W(e))
    for (let s = 0; s < e.length; s++) {
      const n = ze(e[s]);
      n && (t += n + " ");
    }
  else if (ut(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Hf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", zf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Bf = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Uf = /* @__PURE__ */ We(Hf), Wf = /* @__PURE__ */ We(zf), Kf = /* @__PURE__ */ We(Bf), Yf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qf = /* @__PURE__ */ We(Yf);
function yc(e) {
  return !!e || e === "";
}
function Gf(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ni(e[n], t[n]);
  return s;
}
function ni(e, t) {
  if (e === t) return !0;
  let s = ga(e), n = ga(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ie(e), n = Ie(t), s || n)
    return e === t;
  if (s = W(e), n = W(t), s || n)
    return s && n ? Gf(e, t) : !1;
  if (s = ut(e), n = ut(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !ni(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Er(e, t) {
  return e.findIndex((s) => ni(s, t));
}
const vc = (e) => !!(e && e.__v_isRef === !0), Ot = (e) => St(e) ? e : e == null ? "" : W(e) || ut(e) && (e.toString === bc || !Q(e.toString)) ? vc(e) ? Ot(e.value) : JSON.stringify(e, xc, 2) : String(e), xc = (e, t) => vc(t) ? xc(e, t.value) : Ss(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[Eo(n, o) + " =>"] = i, s),
    {}
  )
} : ln(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Eo(s))
} : Ie(t) ? Eo(t) : ut(t) && !W(t) && !mo(t) ? String(t) : t, Eo = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ie(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
var Xf = { NODE_ENV: '"production"', npm_package_version: '"1.0.0"' };
function le(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Bt;
class wc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Bt, !t && Bt && (this.index = (Bt.scopes || (Bt.scopes = [])).push(
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
      const s = Bt;
      try {
        return Bt = this, t();
      } finally {
        Bt = s;
      }
    } else
      le("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Bt, Bt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Bt = this.prevScope, this.prevScope = void 0);
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
function Sc(e) {
  return new wc(e);
}
function kc() {
  return Bt;
}
function Jf(e, t = !1) {
  Bt ? Bt.cleanups.push(e) : t || le(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let ft;
const Ao = /* @__PURE__ */ new WeakSet();
class Oc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Bt && Bt.active && Bt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ao.has(this) && (Ao.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ba(this), Tc(this);
    const t = ft, s = pe;
    ft = this, pe = !0;
    try {
      return this.fn();
    } finally {
      ft !== this && le(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Dc(this), ft = t, pe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Lr(t);
      this.deps = this.depsTail = void 0, ba(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ao.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zo(this) && this.run();
  }
  get dirty() {
    return Zo(this);
  }
}
let Mc = 0, Tn, Dn;
function Cc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dn, Dn = e;
    return;
  }
  e.next = Tn, Tn = e;
}
function Ar() {
  Mc++;
}
function Rr() {
  if (--Mc > 0)
    return;
  if (Dn) {
    let t = Dn;
    for (Dn = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Tn; ) {
    let t = Tn;
    for (Tn = void 0; t; ) {
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
function Tc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Dc(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Lr(n), Qf(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Zo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Pc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Pc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ft, n = pe;
  ft = e, pe = !0;
  try {
    Tc(e);
    const i = e.fn(e._value);
    (t.version === 0 || as(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ft = s, pe = n, Dc(e), e.flags &= -3;
  }
}
function Lr(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subsHead === e && (s.subsHead = i), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      Lr(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Qf(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let pe = !0;
const Ic = [];
function me() {
  Ic.push(pe), pe = !1;
}
function _e() {
  const e = Ic.pop();
  pe = e === void 0 ? !0 : e;
}
function ba(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = ft;
    ft = void 0;
    try {
      t();
    } finally {
      ft = s;
    }
  }
}
let Hn = 0;
class Zf {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $r {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, this.subsHead = void 0;
  }
  track(t) {
    if (!ft || !pe || ft === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ft)
      s = this.activeLink = new Zf(ft, this), ft.deps ? (s.prevDep = ft.depsTail, ft.depsTail.nextDep = s, ft.depsTail = s) : ft.deps = ft.depsTail = s, Ec(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ft.depsTail, s.nextDep = void 0, ft.depsTail.nextDep = s, ft.depsTail = s, ft.deps === s && (ft.deps = n);
    }
    return ft.onTrack && ft.onTrack(
      Mt(
        {
          effect: ft
        },
        t
      )
    ), s;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
  }
  notify(t) {
    Ar();
    try {
      if (Xf.NODE_ENV !== "production")
        for (let s = this.subsHead; s; s = s.nextSub)
          s.sub.onTrigger && !(s.sub.flags & 8) && s.sub.onTrigger(
            Mt(
              {
                effect: s.sub
              },
              t
            )
          );
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Rr();
    }
  }
}
function Ec(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ec(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Gi = /* @__PURE__ */ new WeakMap(), ks = Symbol(
  "Object iterate"
), tr = Symbol(
  "Map keys iterate"
), zn = Symbol(
  "Array iterate"
);
function Et(e, t, s) {
  if (pe && ft) {
    let n = Gi.get(e);
    n || Gi.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new $r()), i.map = n, i.key = s), i.track({
      target: e,
      type: t,
      key: s
    });
  }
}
function Oe(e, t, s, n, i, o) {
  const r = Gi.get(e);
  if (!r) {
    Hn++;
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
  if (Ar(), t === "clear")
    r.forEach(a);
  else {
    const l = W(e), c = l && Ir(s);
    if (l && s === "length") {
      const u = Number(n);
      r.forEach((f, d) => {
        (d === "length" || d === zn || !Ie(d) && d >= u) && a(f);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && a(r.get(s)), c && a(r.get(zn)), t) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(ks)), Ss(e) && a(r.get(tr)));
          break;
        case "delete":
          l || (a(r.get(ks)), Ss(e) && a(r.get(tr)));
          break;
        case "set":
          Ss(e) && a(r.get(ks));
          break;
      }
  }
  Rr();
}
function td(e, t) {
  const s = Gi.get(e);
  return s && s.get(t);
}
function Vs(e) {
  const t = J(e);
  return t === e ? t : (Et(t, "iterate", zn), Jt(e) ? t : t.map(Ft));
}
function bo(e) {
  return Et(e = J(e), "iterate", zn), e;
}
const ed = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ro(this, Symbol.iterator, Ft);
  },
  concat(...e) {
    return Vs(this).concat(
      ...e.map((t) => W(t) ? Vs(t) : t)
    );
  },
  entries() {
    return Ro(this, "entries", (e) => (e[1] = Ft(e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(this, "filter", e, t, (s) => s.map(Ft), arguments);
  },
  find(e, t) {
    return Le(this, "find", e, t, Ft, arguments);
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(this, "findLast", e, t, Ft, arguments);
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Lo(this, "includes", e);
  },
  indexOf(...e) {
    return Lo(this, "indexOf", e);
  },
  join(e) {
    return Vs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Lo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return hn(this, "pop");
  },
  push(...e) {
    return hn(this, "push", e);
  },
  reduce(e, ...t) {
    return ya(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ya(this, "reduceRight", e, t);
  },
  shift() {
    return hn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return hn(this, "splice", e);
  },
  toReversed() {
    return Vs(this).toReversed();
  },
  toSorted(e) {
    return Vs(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vs(this).toSpliced(...e);
  },
  unshift(...e) {
    return hn(this, "unshift", e);
  },
  values() {
    return Ro(this, "values", Ft);
  }
};
function Ro(e, t, s) {
  const n = bo(e), i = n[t]();
  return n !== e && !Jt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = s(o.value)), o;
  }), i;
}
const sd = Array.prototype;
function Le(e, t, s, n, i, o) {
  const r = bo(e), a = r !== e && !Jt(e), l = r[t];
  if (l !== sd[t]) {
    const f = l.apply(e, o);
    return a ? Ft(f) : f;
  }
  let c = s;
  r !== e && (a ? c = function(f, d) {
    return s.call(this, Ft(f), d, e);
  } : s.length > 2 && (c = function(f, d) {
    return s.call(this, f, d, e);
  }));
  const u = l.call(r, c, n);
  return a && i ? i(u) : u;
}
function ya(e, t, s, n) {
  const i = bo(e);
  let o = s;
  return i !== e && (Jt(e) ? s.length > 3 && (o = function(r, a, l) {
    return s.call(this, r, a, l, e);
  }) : o = function(r, a, l) {
    return s.call(this, r, Ft(a), l, e);
  }), i[t](o, ...n);
}
function Lo(e, t, s) {
  const n = J(e);
  Et(n, "iterate", zn);
  const i = n[t](...s);
  return (i === -1 || i === !1) && Rs(s[0]) ? (s[0] = J(s[0]), n[t](...s)) : i;
}
function hn(e, t, s = []) {
  me(), Ar();
  const n = J(e)[t].apply(e, s);
  return Rr(), _e(), n;
}
const nd = /* @__PURE__ */ We("__proto__,__v_isRef,__isVue"), Ac = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ie)
);
function id(e) {
  Ie(e) || (e = String(e));
  const t = J(this);
  return Et(t, "has", e), t.hasOwnProperty(e);
}
class Rc {
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
      return n === (i ? o ? Vc : jc : o ? Nc : Fc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = W(t);
    if (!i) {
      let l;
      if (r && (l = ed[s]))
        return l;
      if (s === "hasOwnProperty")
        return id;
    }
    const a = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      mt(t) ? t : n
    );
    return (Ie(s) ? Ac.has(s) : nd(s)) || (i || Et(t, "get", s), o) ? a : mt(a) ? r && Ir(s) ? a : a.value : ut(a) ? i ? Hc(a) : ii(a) : a;
  }
}
class Lc extends Rc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    if (!this._isShallow) {
      const l = Ee(o);
      if (!Jt(n) && !Ee(n) && (o = J(o), n = J(n)), !W(t) && mt(o) && !mt(n))
        return l ? (le(
          `Set operation on key "${String(s)}" failed: target is readonly.`,
          t[s]
        ), !0) : (o.value = n, !0);
    }
    const r = W(t) && Ir(s) ? Number(s) < t.length : at(t, s), a = Reflect.set(
      t,
      s,
      n,
      mt(t) ? t : i
    );
    return t === J(i) && (r ? as(n, o) && Oe(t, "set", s, n, o) : Oe(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = at(t, s), i = t[s], o = Reflect.deleteProperty(t, s);
    return o && n && Oe(t, "delete", s, void 0, i), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ie(s) || !Ac.has(s)) && Et(t, "has", s), n;
  }
  ownKeys(t) {
    return Et(
      t,
      "iterate",
      W(t) ? "length" : ks
    ), Reflect.ownKeys(t);
  }
}
class $c extends Rc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return le(
      `Set operation on key "${String(s)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, s) {
    return le(
      `Delete operation on key "${String(s)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const od = /* @__PURE__ */ new Lc(), rd = /* @__PURE__ */ new $c(), ad = /* @__PURE__ */ new Lc(!0), ld = /* @__PURE__ */ new $c(!0), er = (e) => e, fi = (e) => Reflect.getPrototypeOf(e);
function cd(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = J(i), r = Ss(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = i[e](...n), u = s ? er : t ? Xi : Ft;
    return !t && Et(
      o,
      "iterate",
      l ? tr : ks
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
function di(e) {
  return function(...t) {
    {
      const s = t[0] ? `on key "${t[0]}" ` : "";
      le(
        `${As(e)} operation ${s}failed: target is readonly.`,
        J(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ud(e, t) {
  const s = {
    get(i) {
      const o = this.__v_raw, r = J(o), a = J(i);
      e || (as(i, a) && Et(r, "get", i), Et(r, "get", a));
      const { has: l } = fi(r), c = t ? er : e ? Xi : Ft;
      if (l.call(r, i))
        return c(o.get(i));
      if (l.call(r, a))
        return c(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Et(J(i), "iterate", ks), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = J(o), a = J(i);
      return e || (as(i, a) && Et(r, "has", i), Et(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = J(a), c = t ? er : e ? Xi : Ft;
      return !e && Et(l, "iterate", ks), a.forEach((u, f) => i.call(o, c(u), c(f), r));
    }
  };
  return Mt(
    s,
    e ? {
      add: di("add"),
      set: di("set"),
      delete: di("delete"),
      clear: di("clear")
    } : {
      add(i) {
        !t && !Jt(i) && !Ee(i) && (i = J(i));
        const o = J(this);
        return fi(o).has.call(o, i) || (o.add(i), Oe(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !Jt(o) && !Ee(o) && (o = J(o));
        const r = J(this), { has: a, get: l } = fi(r);
        let c = a.call(r, i);
        c ? va(r, a, i) : (i = J(i), c = a.call(r, i));
        const u = l.call(r, i);
        return r.set(i, o), c ? as(o, u) && Oe(r, "set", i, o, u) : Oe(r, "add", i, o), this;
      },
      delete(i) {
        const o = J(this), { has: r, get: a } = fi(o);
        let l = r.call(o, i);
        l ? va(o, r, i) : (i = J(i), l = r.call(o, i));
        const c = a ? a.call(o, i) : void 0, u = o.delete(i);
        return l && Oe(o, "delete", i, void 0, c), u;
      },
      clear() {
        const i = J(this), o = i.size !== 0, r = Ss(i) ? new Map(i) : new Set(i), a = i.clear();
        return o && Oe(
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
    s[i] = cd(i, e, t);
  }), s;
}
function yo(e, t) {
  const s = ud(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    at(s, i) && i in n ? s : n,
    i,
    o
  );
}
const fd = {
  get: /* @__PURE__ */ yo(!1, !1)
}, dd = {
  get: /* @__PURE__ */ yo(!1, !0)
}, hd = {
  get: /* @__PURE__ */ yo(!0, !1)
}, pd = {
  get: /* @__PURE__ */ yo(!0, !0)
};
function va(e, t, s) {
  const n = J(s);
  if (n !== s && t.call(e, n)) {
    const i = Pr(e);
    le(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Fc = /* @__PURE__ */ new WeakMap(), Nc = /* @__PURE__ */ new WeakMap(), jc = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ new WeakMap();
function gd(e) {
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
function md(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gd(Pr(e));
}
function ii(e) {
  return Ee(e) ? e : vo(
    e,
    !1,
    od,
    fd,
    Fc
  );
}
function _d(e) {
  return vo(
    e,
    !1,
    ad,
    dd,
    Nc
  );
}
function Hc(e) {
  return vo(
    e,
    !0,
    rd,
    hd,
    jc
  );
}
function Ce(e) {
  return vo(
    e,
    !0,
    ld,
    pd,
    Vc
  );
}
function vo(e, t, s, n, i) {
  if (!ut(e))
    return le(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = md(e);
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
function ge(e) {
  return Ee(e) ? ge(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ee(e) {
  return !!(e && e.__v_isReadonly);
}
function Jt(e) {
  return !!(e && e.__v_isShallow);
}
function Rs(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function es(e) {
  return !at(e, "__v_skip") && Object.isExtensible(e) && Yi(e, "__v_skip", !0), e;
}
const Ft = (e) => ut(e) ? ii(e) : e, Xi = (e) => ut(e) ? Hc(e) : e;
function mt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function gt(e) {
  return Bc(e, !1);
}
function zc(e) {
  return Bc(e, !0);
}
function Bc(e, t) {
  return mt(e) ? e : new bd(e, t);
}
class bd {
  constructor(t, s) {
    this.dep = new $r(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : J(t), this._value = s ? t : Ft(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || Jt(t) || Ee(t);
    t = n ? t : J(t), as(t, s) && (this._rawValue = t, this._value = n ? t : Ft(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: s
    }));
  }
}
function xt(e) {
  return mt(e) ? e.value : e;
}
const yd = {
  get: (e, t, s) => t === "__v_raw" ? e : xt(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return mt(i) && !mt(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Uc(e) {
  return ge(e) ? e : new Proxy(e, yd);
}
function xa(e) {
  Rs(e) || le("toRefs() expects a reactive object but received a plain one.");
  const t = W(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Wc(e, s);
  return t;
}
class vd {
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
    return td(J(this._object), this._key);
  }
}
class xd {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Ii(e, t, s) {
  return mt(e) ? e : Q(e) ? new xd(e) : ut(e) && arguments.length > 1 ? Wc(e, t, s) : gt(e);
}
function Wc(e, t, s) {
  const n = e[t];
  return mt(n) ? n : new vd(e, t, s);
}
class wd {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new $r(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ft !== this)
      return Cc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return Pc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : le("Write operation failed: computed value is readonly");
  }
}
function Sd(e, t, s = !1) {
  let n, i;
  return Q(e) ? n = e : (n = e.get, i = e.set), new wd(n, i, s);
}
const hi = {}, Ji = /* @__PURE__ */ new WeakMap();
let _s;
function kd(e, t = !1, s = _s) {
  if (s) {
    let n = Ji.get(s);
    n || Ji.set(s, n = []), n.push(e);
  } else t || le(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Od(e, t, s = dt) {
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = s, c = (S) => {
    (s.onWarn || le)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (S) => i ? S : Jt(S) || i === !1 || i === 0 ? He(S, 1) : He(S);
  let f, d, h, _, m = !1, y = !1;
  if (mt(e) ? (d = () => e.value, m = Jt(e)) : ge(e) ? (d = () => u(e), m = !0) : W(e) ? (y = !0, m = e.some((S) => ge(S) || Jt(S)), d = () => e.map((S) => {
    if (mt(S))
      return S.value;
    if (ge(S))
      return u(S);
    if (Q(S))
      return l ? l(S, 2) : S();
    c(S);
  })) : Q(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (h) {
      me();
      try {
        h();
      } finally {
        _e();
      }
    }
    const S = _s;
    _s = f;
    try {
      return l ? l(e, 3, [_]) : e(_);
    } finally {
      _s = S;
    }
  } : (d = Wt, c(e)), t && i) {
    const S = d, U = i === !0 ? 1 / 0 : i;
    d = () => He(S(), U);
  }
  const k = kc(), R = () => {
    f.stop(), k && k.active && Tr(k.effects, f);
  };
  if (o && t) {
    const S = t;
    t = (...U) => {
      S(...U), R();
    };
  }
  let z = y ? new Array(e.length).fill(hi) : hi;
  const K = (S) => {
    if (!(!(f.flags & 1) || !f.dirty && !S))
      if (t) {
        const U = f.run();
        if (i || m || (y ? U.some((v, x) => as(v, z[x])) : as(U, z))) {
          h && h();
          const v = _s;
          _s = f;
          try {
            const x = [
              U,
              // pass undefined as the old value when it's changed for the first time
              z === hi ? void 0 : y && z[0] === hi ? [] : z,
              _
            ];
            z = U, l ? l(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            _s = v;
          }
        }
      } else
        f.run();
  };
  return a && a(K), f = new Oc(d), f.scheduler = r ? () => r(K, !1) : K, _ = (S) => kd(S, !1, f), h = f.onStop = () => {
    const S = Ji.get(f);
    if (S) {
      if (l)
        l(S, 4);
      else
        for (const U of S) U();
      Ji.delete(f);
    }
  }, f.onTrack = s.onTrack, f.onTrigger = s.onTrigger, t ? n ? K(!0) : z = f.run() : r ? r(K.bind(null, !0), !0) : f.run(), R.pause = f.pause.bind(f), R.resume = f.resume.bind(f), R.stop = R, R;
}
function He(e, t = 1 / 0, s) {
  if (t <= 0 || !ut(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, mt(e))
    He(e.value, t, s);
  else if (W(e))
    for (let n = 0; n < e.length; n++)
      He(e[n], t, s);
  else if (ln(e) || Ss(e))
    e.forEach((n) => {
      He(n, t, s);
    });
  else if (mo(e)) {
    for (const n in e)
      He(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && He(e[n], t, s);
  }
  return e;
}
var Xe = { NODE_ENV: '"production"', npm_package_version: '"1.0.0"' };
const Os = [];
function Ei(e) {
  Os.push(e);
}
function Ai() {
  Os.pop();
}
let $o = !1;
function F(e, ...t) {
  if ($o) return;
  $o = !0, me();
  const s = Os.length ? Os[Os.length - 1].component : null, n = s && s.appContext.config.warnHandler, i = Md();
  if (n)
    cn(
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
          ({ vnode: o }) => `at <${Co(s, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Cd(i)), console.warn(...o);
  }
  _e(), $o = !1;
}
function Md() {
  let e = Os[Os.length - 1];
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
function Cd(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Td(s));
  }), t;
}
function Td({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, i = ` at <${Co(
    e.component,
    e.type,
    n
  )}`, o = ">" + s;
  return e.props ? [i, ...Dd(e.props), o] : [i + o];
}
function Dd(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...Kc(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function Kc(e, t, s) {
  return St(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : mt(t) ? (t = Kc(e, J(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : Q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = J(t), s ? t : [`${e}=`, t]);
}
const Fr = {
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
function cn(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    oi(i, t, s);
  }
}
function Ae(e, t, s, n) {
  if (Q(e)) {
    const i = cn(e, t, s, n);
    return i && Dr(i) && i.catch((o) => {
      oi(o, t, s);
    }), i;
  }
  if (W(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ae(e[o], t, s, n));
    return i;
  } else
    F(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function oi(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || dt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = Fr[s];
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
      me(), cn(o, null, 10, [
        e,
        l,
        c
      ]), _e();
      return;
    }
  }
  Pd(e, s, i, n, r);
}
function Pd(e, t, s, n = !0, i = !1) {
  {
    const o = Fr[t];
    if (s && Ei(s), F(`Unhandled error${o ? ` during execution of ${o}` : ""}`), s && Ai(), n)
      throw e;
    console.error(e);
  }
}
const Xt = [];
let Se = -1;
const Js = [];
let Je = null, qs = 0;
const Yc = /* @__PURE__ */ Promise.resolve();
let Qi = null;
const Id = 100;
function Ls(e) {
  const t = Qi || Yc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ed(e) {
  let t = Se + 1, s = Xt.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Xt[n], o = Bn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function xo(e) {
  if (!(e.flags & 1)) {
    const t = Bn(e), s = Xt[Xt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Bn(s) ? Xt.push(e) : Xt.splice(Ed(t), 0, e), e.flags |= 1, qc();
  }
}
function qc() {
  Qi || (Qi = Yc.then(Jc));
}
function Gc(e) {
  W(e) ? Js.push(...e) : Je && e.id === -1 ? Je.splice(qs + 1, 0, e) : e.flags & 1 || (Js.push(e), e.flags |= 1), qc();
}
function wa(e, t, s = Se + 1) {
  for (t = t || /* @__PURE__ */ new Map(); s < Xt.length; s++) {
    const n = Xt[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid || Nr(t, n))
        continue;
      Xt.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Xc(e) {
  if (Js.length) {
    const t = [...new Set(Js)].sort(
      (s, n) => Bn(s) - Bn(n)
    );
    if (Js.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, e = e || /* @__PURE__ */ new Map(), qs = 0; qs < Je.length; qs++) {
      const s = Je[qs];
      Nr(e, s) || (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2);
    }
    Je = null, qs = 0;
  }
}
const Bn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Jc(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (s) => Nr(e, s);
  try {
    for (Se = 0; Se < Xt.length; Se++) {
      const s = Xt[Se];
      if (s && !(s.flags & 8)) {
        if (Xe.NODE_ENV !== "production" && t(s))
          continue;
        s.flags & 4 && (s.flags &= -2), cn(
          s,
          s.i,
          s.i ? 15 : 14
        ), s.flags & 4 || (s.flags &= -2);
      }
    }
  } finally {
    for (; Se < Xt.length; Se++) {
      const s = Xt[Se];
      s && (s.flags &= -2);
    }
    Se = -1, Xt.length = 0, Xc(e), Qi = null, (Xt.length || Js.length) && Jc(e);
  }
}
function Nr(e, t) {
  const s = e.get(t) || 0;
  if (s > Id) {
    const n = t.i, i = n && qr(n.type);
    return oi(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, s + 1), !1;
}
let Te = !1;
const Ri = /* @__PURE__ */ new Map();
{
  const e = si();
  e.__VUE_HMR_RUNTIME__ || (e.__VUE_HMR_RUNTIME__ = {
    createRecord: Fo(Qc),
    rerender: Fo(Ld),
    reload: Fo($d)
  });
}
const $s = /* @__PURE__ */ new Map();
function Ad(e) {
  const t = e.type.__hmrId;
  let s = $s.get(t);
  s || (Qc(t, e.type), s = $s.get(t)), s.instances.add(e);
}
function Rd(e) {
  $s.get(e.type.__hmrId).instances.delete(e);
}
function Qc(e, t) {
  return $s.has(e) ? !1 : ($s.set(e, {
    initialDef: Zi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Zi(e) {
  return Iu(e) ? e.__vccOpts : e;
}
function Ld(e, t) {
  const s = $s.get(e);
  s && (s.initialDef.render = t, [...s.instances].forEach((n) => {
    t && (n.render = t, Zi(n.type).render = t), n.renderCache = [], Te = !0, n.job.flags & 8 || n.update(), Te = !1;
  }));
}
function $d(e, t) {
  const s = $s.get(e);
  if (!s) return;
  t = Zi(t), Sa(s.initialDef, t);
  const n = [...s.instances];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], r = Zi(o.type);
    let a = Ri.get(r);
    a || (r !== s.initialDef && Sa(r, t), Ri.set(r, a = /* @__PURE__ */ new Set())), a.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (a.add(o), o.ceReload(t.styles), a.delete(o)) : o.parent ? xo(() => {
      o.job.flags & 8 || (Te = !0, o.parent.update(), Te = !1, a.delete(o));
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(r);
  }
  Gc(() => {
    Ri.clear();
  });
}
function Sa(e, t) {
  Mt(e, t);
  for (const s in e)
    s !== "__file" && !(s in t) && delete e[s];
}
function Fo(e) {
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
let Me, wn = [], sr = !1;
function ri(e, ...t) {
  Me ? Me.emit(e, ...t) : sr || wn.push({ event: e, args: t });
}
function Zc(e, t) {
  var s, n;
  Me = e, Me ? (Me.enabled = !0, wn.forEach(({ event: i, args: o }) => Me.emit(i, ...o)), wn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (s = window.navigator) == null ? void 0 : s.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Zc(o, t);
  }), setTimeout(() => {
    Me || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, sr = !0, wn = []);
  }, 3e3)) : (sr = !0, wn = []);
}
function Fd(e, t) {
  ri("app:init", e, t, {
    Fragment: Nt,
    Text: ai,
    Comment: re,
    Static: Li
  });
}
function Nd(e) {
  ri("app:unmount", e);
}
const jd = /* @__PURE__ */ jr(
  "component:added"
  /* COMPONENT_ADDED */
), tu = /* @__PURE__ */ jr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Vd = /* @__PURE__ */ jr(
  "component:removed"
  /* COMPONENT_REMOVED */
), Hd = (e) => {
  Me && typeof Me.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Me.cleanupBuffer(e) && Vd(e);
};
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return (t) => {
    ri(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const zd = /* @__PURE__ */ eu(
  "perf:start"
  /* PERFORMANCE_START */
), Bd = /* @__PURE__ */ eu(
  "perf:end"
  /* PERFORMANCE_END */
);
function eu(e) {
  return (t, s, n) => {
    ri(e, t.appContext.app, t.uid, t, s, n);
  };
}
function Ud(e, t, s) {
  ri(
    "component:emit",
    e.appContext.app,
    e,
    t,
    s
  );
}
let Kt = null, su = null;
function to(e) {
  const t = Kt;
  return Kt = e, su = e && e.type.__scopeId || null, t;
}
function Wd(e, t = Kt, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && oo(-1);
    const o = to(t);
    let r;
    try {
      r = e(...i);
    } finally {
      to(o), n._d && oo(1);
    }
    return tu(t), r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function nu(e) {
  Rf(e) && F("Do not use built-in directive ids as custom directive id: " + e);
}
function Ye(e, t) {
  if (Kt === null)
    return F("withDirectives can only be used inside render functions."), e;
  const s = Mo(Kt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, a, l = dt] = t[i];
    o && (Q(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && He(r), n.push({
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
function fs(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[n];
    l && (me(), Ae(l, s, 8, [
      e.el,
      a,
      e,
      t
    ]), _e());
  }
}
const Kd = Symbol("_vte"), Yd = (e) => e.__isTeleport, qd = Symbol("_leaveCb");
function Vr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function js(e, t) {
  return Q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function iu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ka = /* @__PURE__ */ new WeakSet(), eo = /* @__PURE__ */ new WeakMap();
function Pn(e, t, s, n, i = !1) {
  if (W(e)) {
    e.forEach(
      (m, y) => Pn(
        m,
        t && (W(t) ? t[y] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (In(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Pn(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Mo(n.component) : n.el, r = i ? null : o, { i: a, r: l } = e;
  if (!a) {
    F(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, u = a.refs === dt ? a.refs = {} : a.refs, f = a.setupState, d = J(f), h = f === dt ? _c : (m) => (at(d, m) && !mt(d[m]) && F(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), ka.has(d[m]) ? !1 : at(d, m)), _ = (m) => !ka.has(m);
  if (c != null && c !== l) {
    if (Oa(t), St(c))
      u[c] = null, h(c) && (f[c] = null);
    else if (mt(c)) {
      _(c) && (c.value = null);
      const m = t;
      m.k && (u[m.k] = null);
    }
  }
  if (Q(l))
    cn(l, a, 12, [r, u]);
  else {
    const m = St(l), y = mt(l);
    if (m || y) {
      const k = () => {
        if (e.f) {
          const R = m ? h(l) ? f[l] : u[l] : _(l) || !e.k ? l.value : u[e.k];
          if (i)
            W(R) && Tr(R, o);
          else if (W(R))
            R.includes(o) || R.push(o);
          else if (m)
            u[l] = [o], h(l) && (f[l] = u[l]);
          else {
            const z = [o];
            _(l) && (l.value = z), e.k && (u[e.k] = z);
          }
        } else m ? (u[l] = r, h(l) && (f[l] = r)) : y ? (_(l) && (l.value = r), e.k && (u[e.k] = r)) : F("Invalid template ref type:", l, `(${typeof l})`);
      };
      if (r) {
        const R = () => {
          k(), eo.delete(e);
        };
        R.id = -1, eo.set(e, R), ne(R, s);
      } else
        Oa(e), k();
    } else
      F("Invalid template ref type:", l, `(${typeof l})`);
  }
}
function Oa(e) {
  const t = eo.get(e);
  t && (t.flags |= 8, eo.delete(e));
}
si().requestIdleCallback;
si().cancelIdleCallback;
const In = (e) => !!e.type.__asyncLoader, Hr = (e) => e.type.__isKeepAlive;
function Gd(e, t) {
  ou(e, "a", t);
}
function Xd(e, t) {
  ou(e, "da", t);
}
function ou(e, t, s = At) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (wo(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Hr(i.parent.vnode) && Jd(n, t, s, i), i = i.parent;
  }
}
function Jd(e, t, s, n) {
  const i = wo(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  So(() => {
    Tr(n[t], i);
  }, s);
}
function wo(e, t, s = At, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      me();
      const a = li(s), l = Ae(t, s, e, r);
      return a(), _e(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  } else {
    const i = ms(Fr[e].replace(/ hook$/, ""));
    F(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ke = (e) => (t, s = At) => {
  (!Wn || e === "sp") && wo(e, (...n) => t(...n), s);
}, Qd = Ke("bm"), zr = Ke("m"), Zd = Ke(
  "bu"
), th = Ke("u"), eh = Ke(
  "bum"
), So = Ke("um"), sh = Ke(
  "sp"
), nh = Ke("rtg"), ih = Ke("rtc");
function oh(e, t = At) {
  wo("ec", e, t);
}
const rh = "components", ru = Symbol.for("v-ndc");
function au(e) {
  return St(e) ? ah(rh, e, !1) || e : e || ru;
}
function ah(e, t, s = !0, n = !1) {
  const i = Kt || At;
  if (i) {
    const o = i.type;
    {
      const a = qr(
        o,
        !1
      );
      if (a && (a === t || a === Rt(t) || a === As(Rt(t))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ma(i[e] || o[e], t) || // global registration
      Ma(i.appContext[e], t)
    );
    return !r && n ? o : (s && !r && F(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else
    F(
      `resolve${As(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Ma(e, t) {
  return e && (e[t] || e[Rt(t)] || e[As(Rt(t))]);
}
function Ms(e, t, s, n) {
  let i;
  const o = s, r = W(e);
  if (r || St(e)) {
    const a = r && ge(e);
    let l = !1, c = !1;
    a && (l = !Jt(e), c = Ee(e), e = bo(e)), i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      i[u] = t(
        l ? c ? Xi(Ft(e[u])) : Ft(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || F(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (ut(e))
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
const nr = (e) => e ? Du(e) ? Mo(e) : nr(e.parent) : null, Cs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Ce(e.props),
    $attrs: (e) => Ce(e.attrs),
    $slots: (e) => Ce(e.slots),
    $refs: (e) => Ce(e.refs),
    $parent: (e) => nr(e.parent),
    $root: (e) => nr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => uu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      xo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => Hh.bind(e)
  })
), Br = (e) => e === "_" || e === "$", No = (e, t) => e !== dt && !e.__isScriptSetup && at(e, t), lu = {
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
        if (No(n, t))
          return r[t] = 1, n[t];
        if (i !== dt && at(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && at(c, t)
        )
          return r[t] = 3, o[t];
        if (s !== dt && at(s, t))
          return r[t] = 4, s[t];
        ir && (r[t] = 0);
      }
    }
    const u = Cs[t];
    let f, d;
    if (u)
      return t === "$attrs" ? (Et(e.attrs, "get", ""), io()) : t === "$slots" && Et(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (s !== dt && at(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      d = l.config.globalProperties, at(d, t)
    )
      return d[t];
    Kt && (!St(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== dt && Br(t[0]) && at(i, t) ? F(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Kt && F(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return No(i, t) ? (i[t] = s, !0) : i.__isScriptSetup && at(i, t) ? (F(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== dt && at(n, t) ? (n[t] = s, !0) : at(e.props, t) ? (F(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (F(
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
    return !!(s[a] || e !== dt && a[0] !== "$" && at(e, a) || No(t, a) || (l = o[0]) && at(l, a) || at(n, a) || at(Cs, a) || at(i.config.globalProperties, a) || (c = r.__cssModules) && c[a]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : at(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
lu.ownKeys = (e) => (F(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function lh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Cs).forEach((s) => {
    Object.defineProperty(t, s, {
      configurable: !0,
      enumerable: !1,
      get: () => Cs[s](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Wt
    });
  }), t;
}
function ch(e) {
  const {
    ctx: t,
    propsOptions: [s]
  } = e;
  s && Object.keys(s).forEach((n) => {
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[n],
      set: Wt
    });
  });
}
function uh(e) {
  const { ctx: t, setupState: s } = e;
  Object.keys(J(s)).forEach((n) => {
    if (!s.__isScriptSetup) {
      if (Br(n[0])) {
        F(
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
        set: Wt
      });
    }
  });
}
function Ca(e) {
  return W(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
function fh() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, s) => {
    e[s] ? F(`${t} property "${s}" is already defined in ${e[s]}.`) : e[s] = t;
  };
}
let ir = !0;
function dh(e) {
  const t = uu(e), s = e.proxy, n = e.ctx;
  ir = !1, t.beforeCreate && Ta(t.beforeCreate, e, "bc");
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
    beforeDestroy: k,
    beforeUnmount: R,
    destroyed: z,
    unmounted: K,
    render: S,
    renderTracked: U,
    renderTriggered: v,
    errorCaptured: x,
    serverPrefetch: D,
    // public API
    expose: P,
    inheritAttrs: C,
    // assets
    components: B,
    directives: rt,
    filters: Tt
  } = t, it = fh();
  {
    const [G] = e.propsOptions;
    if (G)
      for (const Z in G)
        it("Props", Z);
  }
  if (c && hh(c, n, it), r)
    for (const G in r) {
      const Z = r[G];
      Q(Z) ? (Object.defineProperty(n, G, {
        value: Z.bind(s),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), it("Methods", G)) : F(
        `Method "${G}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    Q(i) || F(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = i.call(s, s);
    if (Dr(G) && F(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ut(G))
      F("data() should return an object.");
    else {
      e.data = ii(G);
      for (const Z in G)
        it("Data", Z), Br(Z[0]) || Object.defineProperty(n, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => G[Z],
          set: Wt
        });
    }
  }
  if (ir = !0, o)
    for (const G in o) {
      const Z = o[G], ct = Q(Z) ? Z.bind(s, s) : Q(Z.get) ? Z.get.bind(s, s) : Wt;
      ct === Wt && F(`Computed property "${G}" has no getter.`);
      const vt = !Q(Z) && Q(Z.set) ? Z.set.bind(s) : () => {
        F(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      }, se = jt({
        get: ct,
        set: vt
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => se.value,
        set: (Ht) => se.value = Ht
      }), it("Computed", G);
    }
  if (a)
    for (const G in a)
      cu(a[G], n, s, G);
  if (l) {
    const G = Q(l) ? l.call(s) : l;
    Reflect.ownKeys(G).forEach((Z) => {
      yh(Z, G[Z]);
    });
  }
  u && Ta(u, e, "c");
  function ot(G, Z) {
    W(Z) ? Z.forEach((ct) => G(ct.bind(s))) : Z && G(Z.bind(s));
  }
  if (ot(Qd, f), ot(zr, d), ot(Zd, h), ot(th, _), ot(Gd, m), ot(Xd, y), ot(oh, x), ot(ih, U), ot(nh, v), ot(eh, R), ot(So, K), ot(sh, D), W(P))
    if (P.length) {
      const G = e.exposed || (e.exposed = {});
      P.forEach((Z) => {
        Object.defineProperty(G, Z, {
          get: () => s[Z],
          set: (ct) => s[Z] = ct,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Wt && (e.render = S), C != null && (e.inheritAttrs = C), B && (e.components = B), rt && (e.directives = rt), D && iu(e);
}
function hh(e, t, s = Wt) {
  W(e) && (e = or(e));
  for (const n in e) {
    const i = e[n];
    let o;
    ut(i) ? "default" in i ? o = En(
      i.from || n,
      i.default,
      !0
    ) : o = En(i.from || n) : o = En(i), mt(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o, s("Inject", n);
  }
}
function Ta(e, t, s) {
  Ae(
    W(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function cu(e, t, s, n) {
  let i = n.includes(".") ? wu(s, n) : () => s[n];
  if (St(e)) {
    const o = t[e];
    Q(o) ? Qs(i, o) : F(`Invalid watch handler specified by key "${e}"`, o);
  } else if (Q(e))
    Qs(i, e.bind(s));
  else if (ut(e))
    if (W(e))
      e.forEach((o) => cu(o, t, s, n));
    else {
      const o = Q(e.handler) ? e.handler.bind(s) : t[e.handler];
      Q(o) ? Qs(i, o, e) : F(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    F(`Invalid watch option: "${n}"`, e);
}
function uu(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !s && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => so(l, c, r, !0)
  ), so(l, t, r)), ut(t) && o.set(t, l), l;
}
function so(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && so(e, o, s, !0), i && i.forEach(
    (r) => so(e, r, s, !0)
  );
  for (const r in t)
    if (n && r === "expose")
      F(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ph[r] || s && s[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const ph = {
  data: Da,
  props: Pa,
  emits: Pa,
  // objects
  methods: Sn,
  computed: Sn,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: Sn,
  directives: Sn,
  // watch
  watch: mh,
  // provide / inject
  provide: Da,
  inject: gh
};
function Da(e, t) {
  return t ? e ? function() {
    return Mt(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gh(e, t) {
  return Sn(or(e), or(t));
}
function or(e) {
  if (W(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Gt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sn(e, t) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pa(e, t) {
  return e ? W(e) && W(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Ca(e),
    Ca(t ?? {})
  ) : t;
}
function mh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Gt(e[n], t[n]);
  return s;
}
function fu() {
  return {
    app: null,
    config: {
      isNativeTag: _c,
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
let _h = 0;
function bh(e, t) {
  return function(n, i = null) {
    Q(n) || (n = Mt({}, n)), i != null && !ut(i) && (F("root props passed to app.mount() must be an object."), i = null);
    const o = fu(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: _h++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: dr,
      get config() {
        return o.config;
      },
      set config(u) {
        F(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return r.has(u) ? F("Plugin has already been applied to target app.") : u && Q(u.install) ? (r.add(u), u.install(c, ...f)) : Q(u) ? (r.add(u), u(c, ...f)) : F(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return o.mixins.includes(u) ? F(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : o.mixins.push(u), c;
      },
      component(u, f) {
        return fr(u, o.config), f ? (o.components[u] && F(`Component "${u}" has already been registered in target app.`), o.components[u] = f, c) : o.components[u];
      },
      directive(u, f) {
        return nu(u), f ? (o.directives[u] && F(`Directive "${u}" has already been registered in target app.`), o.directives[u] = f, c) : o.directives[u];
      },
      mount(u, f, d) {
        if (l)
          F(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          u.__vue_app__ && F(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = c._ceVNode || bt(n, i);
          return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), o.reload = () => {
            const _ = cs(h);
            _.el = null, e(_, u, d);
          }, e(h, u, d), l = !0, c._container = u, u.__vue_app__ = c, c._instance = h.component, Fd(c, dr), Mo(h.component);
        }
      },
      onUnmount(u) {
        typeof u != "function" && F(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (Ae(
          a,
          c._instance,
          16
        ), e(null, c._container), c._instance = null, Nd(c), delete c._container.__vue_app__) : F("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return u in o.provides && (at(o.provides, u) ? F(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : F(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = Ts;
        Ts = c;
        try {
          return u();
        } finally {
          Ts = f;
        }
      }
    };
    return c;
  };
}
let Ts = null;
function yh(e, t) {
  if (!At)
    F("provide() can only be used inside setup().");
  else {
    let s = At.provides;
    const n = At.parent && At.parent.provides;
    n === s && (s = At.provides = Object.create(n)), s[e] = t;
  }
}
function En(e, t, s = !1) {
  const n = Oo();
  if (n || Ts) {
    let i = Ts ? Ts._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Q(t) ? t.call(n && n.proxy) : t;
    F(`injection "${String(e)}" not found.`);
  } else
    F("inject() can only be used inside setup() or functional components.");
}
function vh() {
  return !!(Oo() || Ts);
}
const du = {}, hu = () => Object.create(du), pu = (e) => Object.getPrototypeOf(e) === du;
function xh(e, t, s, n = !1) {
  const i = {}, o = hu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gu(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  _u(t || {}, i, e), s ? e.props = n ? i : _d(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function wh(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Sh(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, a = J(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !wh(e) && (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (ko(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (at(o, d))
            h !== o[d] && (o[d] = h, c = !0);
          else {
            const _ = Rt(d);
            i[_] = rr(
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
    gu(e, t, i, o) && (c = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !at(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ie(f)) === f || !at(t, u))) && (l ? s && // for camelCase
      (s[f] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[f] = rr(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (o !== a)
      for (const f in o)
        (!t || !at(t, f)) && (delete o[f], c = !0);
  }
  c && Oe(e.attrs, "set", ""), _u(t || {}, i, e);
}
function gu(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Cn(l))
        continue;
      const c = t[l];
      let u;
      i && at(i, u = Rt(l)) ? !o || !o.includes(u) ? s[u] = c : (a || (a = {}))[u] = c : ko(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
    }
  if (o) {
    const l = J(s), c = a || dt;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      s[f] = rr(
        i,
        l,
        f,
        c[f],
        e,
        !at(c, f)
      );
    }
  }
  return r;
}
function rr(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const a = at(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && Q(l)) {
        const { propsDefaults: c } = i;
        if (s in c)
          n = c[s];
        else {
          const u = li(i);
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
    ] && (n === "" || n === ie(s)) && (n = !0));
  }
  return n;
}
const kh = /* @__PURE__ */ new WeakMap();
function mu(e, t, s = !1) {
  const n = s ? kh : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, a = [];
  let l = !1;
  if (!Q(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = mu(f, t, !0);
      Mt(r, d), h && a.push(...h);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return ut(e) && n.set(e, Xs), Xs;
  if (W(o))
    for (let u = 0; u < o.length; u++) {
      St(o[u]) || F("props must be strings when using array syntax.", o[u]);
      const f = Rt(o[u]);
      Ia(f) && (r[f] = dt);
    }
  else if (o) {
    ut(o) || F("invalid props options", o);
    for (const u in o) {
      const f = Rt(u);
      if (Ia(f)) {
        const d = o[u], h = r[f] = W(d) || Q(d) ? { type: d } : Mt({}, d), _ = h.type;
        let m = !1, y = !0;
        if (W(_))
          for (let k = 0; k < _.length; ++k) {
            const R = _[k], z = Q(R) && R.name;
            if (z === "Boolean") {
              m = !0;
              break;
            } else z === "String" && (y = !1);
          }
        else
          m = Q(_) && _.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = y, (m || at(h, "default")) && a.push(f);
      }
    }
  }
  const c = [r, a];
  return ut(e) && n.set(e, c), c;
}
function Ia(e) {
  return e[0] !== "$" && !Cn(e) ? !0 : (F(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Oh(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function _u(e, t, s) {
  const n = J(t), i = s.propsOptions[0], o = Object.keys(e).map((r) => Rt(r));
  for (const r in i) {
    let a = i[r];
    a != null && Mh(
      r,
      n[r],
      a,
      Ce(n),
      !o.includes(r)
    );
  }
}
function Mh(e, t, s, n, i) {
  const { type: o, required: r, validator: a, skipCheck: l } = s;
  if (r && i) {
    F('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !l) {
      let c = !1;
      const u = W(o) ? o : [o], f = [];
      for (let d = 0; d < u.length && !c; d++) {
        const { valid: h, expectedType: _ } = Th(t, u[d]);
        f.push(_ || ""), c = h;
      }
      if (!c) {
        F(Dh(e, t, f));
        return;
      }
    }
    a && !a(t, n) && F('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ch = /* @__PURE__ */ We(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Th(e, t) {
  let s;
  const n = Oh(t);
  if (n === "null")
    s = e === null;
  else if (Ch(n)) {
    const i = typeof e;
    s = i === n.toLowerCase(), !s && i === "object" && (s = e instanceof t);
  } else n === "Object" ? s = ut(e) : n === "Array" ? s = W(e) : s = e instanceof t;
  return {
    valid: s,
    expectedType: n
  };
}
function Dh(e, t, s) {
  if (s.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${e}". Expected ${s.map(As).join(" | ")}`;
  const i = s[0], o = Pr(t), r = Ea(t, i), a = Ea(t, o);
  return s.length === 1 && Aa(i) && !Ph(i, o) && (n += ` with value ${r}`), n += `, got ${o} `, Aa(o) && (n += `with value ${a}.`), n;
}
function Ea(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Aa(e) {
  return ["string", "number", "boolean"].some((s) => e.toLowerCase() === s);
}
function Ph(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ur = (e) => e === "_" || e === "_ctx" || e === "$stable", Wr = (e) => W(e) ? e.map(he) : [he(e)], Ih = (e, t, s) => {
  if (t._n)
    return t;
  const n = Wd((...i) => (Xe.NODE_ENV !== "production" && At && !(s === null && Kt) && !(s && s.root !== At.root) && F(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Wr(t(...i))), s);
  return n._c = !1, n;
}, bu = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ur(i)) continue;
    const o = e[i];
    if (Q(o))
      t[i] = Ih(i, o, n);
    else if (o != null) {
      F(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Wr(o);
      t[i] = () => r;
    }
  }
}, yu = (e, t) => {
  Hr(e.vnode) || F(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const s = Wr(t);
  e.slots.default = () => s;
}, ar = (e, t, s) => {
  for (const n in t)
    (s || !Ur(n)) && (e[n] = t[n]);
}, Eh = (e, t, s) => {
  const n = e.slots = hu();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ar(n, t, s), s && Yi(n, "_", i, !0)) : bu(t, n);
  } else t && yu(e, t);
}, Ah = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = dt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? Te ? (ar(i, t, s), Oe(e, "set", "$slots")) : s && a === 1 ? o = !1 : ar(i, t, s) : (o = !t.$stable, bu(t, i)), r = t;
  } else t && (yu(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !Ur(a) && r[a] == null && delete i[a];
};
let pn, je;
function Hs(e, t) {
  e.appContext.config.performance && no() && je.mark(`vue-${t}-${e.uid}`), zd(e, t, no() ? je.now() : Date.now());
}
function zs(e, t) {
  if (e.appContext.config.performance && no()) {
    const s = `vue-${t}-${e.uid}`, n = s + ":end", i = `<${Co(e, e.type)}> ${t}`;
    je.mark(n), je.measure(i, s, n), je.clearMeasures(i), je.clearMarks(s), je.clearMarks(n);
  }
  Bd(e, t, no() ? je.now() : Date.now());
}
function no() {
  return pn !== void 0 || (typeof window < "u" && window.performance ? (pn = !0, je = window.performance) : pn = !1), pn;
}
function Rh() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ne = Gh;
function Lh(e) {
  return $h(e);
}
function $h(e, t) {
  Rh();
  const s = si();
  s.__VUE__ = !0, Zc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__, s);
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
    setScopeId: h = Wt,
    insertStaticContent: _
  } = e, m = (p, g, w, E = null, T = null, M = null, j = void 0, N = null, $ = Te ? !1 : !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !gn(p, g) && (E = st(p), Lt(p, T, M, !0), p = null), g.patchFlag === -2 && ($ = !1, g.dynamicChildren = null);
    const { type: A, ref: X, shapeFlag: H } = g;
    switch (A) {
      case ai:
        y(p, g, w, E);
        break;
      case re:
        k(p, g, w, E);
        break;
      case Li:
        p == null ? R(g, w, E, j) : z(p, g, w, j);
        break;
      case Nt:
        rt(
          p,
          g,
          w,
          E,
          T,
          M,
          j,
          N,
          $
        );
        break;
      default:
        H & 1 ? U(
          p,
          g,
          w,
          E,
          T,
          M,
          j,
          N,
          $
        ) : H & 6 ? Tt(
          p,
          g,
          w,
          E,
          T,
          M,
          j,
          N,
          $
        ) : H & 64 || H & 128 ? A.process(
          p,
          g,
          w,
          E,
          T,
          M,
          j,
          N,
          $,
          Ct
        ) : F("Invalid VNode type:", A, `(${typeof A})`);
    }
    X != null && T ? Pn(X, p && p.ref, M, g || p, !g) : X == null && p && p.ref != null && Pn(p.ref, null, M, p, !0);
  }, y = (p, g, w, E) => {
    if (p == null)
      n(
        g.el = a(g.children),
        w,
        E
      );
    else {
      const T = g.el = p.el;
      g.children !== p.children && c(T, g.children);
    }
  }, k = (p, g, w, E) => {
    p == null ? n(
      g.el = l(g.children || ""),
      w,
      E
    ) : g.el = p.el;
  }, R = (p, g, w, E) => {
    [p.el, p.anchor] = _(
      p.children,
      g,
      w,
      E,
      p.el,
      p.anchor
    );
  }, z = (p, g, w, E) => {
    if (g.children !== p.children) {
      const T = d(p.anchor);
      S(p), [g.el, g.anchor] = _(
        g.children,
        w,
        T,
        E
      );
    } else
      g.el = p.el, g.anchor = p.anchor;
  }, K = ({ el: p, anchor: g }, w, E) => {
    let T;
    for (; p && p !== g; )
      T = d(p), n(p, w, E), p = T;
    n(g, w, E);
  }, S = ({ el: p, anchor: g }) => {
    let w;
    for (; p && p !== g; )
      w = d(p), i(p), p = w;
    i(g);
  }, U = (p, g, w, E, T, M, j, N, $) => {
    g.type === "svg" ? j = "svg" : g.type === "math" && (j = "mathml"), p == null ? v(
      g,
      w,
      E,
      T,
      M,
      j,
      N,
      $
    ) : P(
      p,
      g,
      T,
      M,
      j,
      N,
      $
    );
  }, v = (p, g, w, E, T, M, j, N) => {
    let $, A;
    const { props: X, shapeFlag: H, transition: q, dirs: et } = p;
    if ($ = p.el = r(
      p.type,
      M,
      X && X.is,
      X
    ), H & 8 ? u($, p.children) : H & 16 && D(
      p.children,
      $,
      null,
      E,
      T,
      jo(p, M),
      j,
      N
    ), et && fs(p, null, E, "created"), x($, p, p.scopeId, j, E), X) {
      for (const _t in X)
        _t !== "value" && !Cn(_t) && o($, _t, null, X[_t], M, E);
      "value" in X && o($, "value", null, X.value, M), (A = X.onVnodeBeforeMount) && xe(A, E, p);
    }
    Yi($, "__vnode", p, !0), Yi($, "__vueParentComponent", E, !0), et && fs(p, null, E, "beforeMount");
    const lt = Fh(T, q);
    lt && q.beforeEnter($), n($, g, w), ((A = X && X.onVnodeMounted) || lt || et) && ne(() => {
      A && xe(A, E, p), lt && q.enter($), et && fs(p, null, E, "mounted");
    }, T);
  }, x = (p, g, w, E, T) => {
    if (w && h(p, w), E)
      for (let M = 0; M < E.length; M++)
        h(p, E[M]);
    if (T) {
      let M = T.subTree;
      if (M.patchFlag > 0 && M.patchFlag & 2048 && (M = Kr(M.children) || M), g === M || Ou(M.type) && (M.ssContent === g || M.ssFallback === g)) {
        const j = T.vnode;
        x(
          p,
          j,
          j.scopeId,
          j.slotScopeIds,
          T.parent
        );
      }
    }
  }, D = (p, g, w, E, T, M, j, N, $ = 0) => {
    for (let A = $; A < p.length; A++) {
      const X = p[A] = N ? Qe(p[A]) : he(p[A]);
      m(
        null,
        X,
        g,
        w,
        E,
        T,
        M,
        j,
        N
      );
    }
  }, P = (p, g, w, E, T, M, j) => {
    const N = g.el = p.el;
    N.__vnode = g;
    let { patchFlag: $, dynamicChildren: A, dirs: X } = g;
    $ |= p.patchFlag & 16;
    const H = p.props || dt, q = g.props || dt;
    let et;
    if (w && ds(w, !1), (et = q.onVnodeBeforeUpdate) && xe(et, w, g, p), X && fs(g, p, w, "beforeUpdate"), w && ds(w, !0), Te && ($ = 0, j = !1, A = null), (H.innerHTML && q.innerHTML == null || H.textContent && q.textContent == null) && u(N, ""), A ? (C(
      p.dynamicChildren,
      A,
      N,
      w,
      E,
      jo(g, T),
      M
    ), lr(p, g)) : j || ct(
      p,
      g,
      N,
      null,
      w,
      E,
      jo(g, T),
      M,
      !1
    ), $ > 0) {
      if ($ & 16)
        B(N, H, q, w, T);
      else if ($ & 2 && H.class !== q.class && o(N, "class", null, q.class, T), $ & 4 && o(N, "style", H.style, q.style, T), $ & 8) {
        const lt = g.dynamicProps;
        for (let _t = 0; _t < lt.length; _t++) {
          const pt = lt[_t], Zt = H[pt], te = q[pt];
          (te !== Zt || pt === "value") && o(N, pt, Zt, te, T, w);
        }
      }
      $ & 1 && p.children !== g.children && u(N, g.children);
    } else !j && A == null && B(N, H, q, w, T);
    ((et = q.onVnodeUpdated) || X) && ne(() => {
      et && xe(et, w, g, p), X && fs(g, p, w, "updated");
    }, E);
  }, C = (p, g, w, E, T, M, j) => {
    for (let N = 0; N < g.length; N++) {
      const $ = p[N], A = g[N], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === Nt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gn($, A) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 198) ? f($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      m(
        $,
        A,
        X,
        null,
        E,
        T,
        M,
        j,
        !0
      );
    }
  }, B = (p, g, w, E, T) => {
    if (g !== w) {
      if (g !== dt)
        for (const M in g)
          !Cn(M) && !(M in w) && o(
            p,
            M,
            g[M],
            null,
            T,
            E
          );
      for (const M in w) {
        if (Cn(M)) continue;
        const j = w[M], N = g[M];
        j !== N && M !== "value" && o(p, M, N, j, T, E);
      }
      "value" in w && o(p, "value", g.value, w.value, T);
    }
  }, rt = (p, g, w, E, T, M, j, N, $) => {
    const A = g.el = p ? p.el : a(""), X = g.anchor = p ? p.anchor : a("");
    let { patchFlag: H, dynamicChildren: q, slotScopeIds: et } = g;
    // #5523 dev root fragment may inherit directives
    (Te || H & 2048) && (H = 0, $ = !1, q = null), et && (N = N ? N.concat(et) : et), p == null ? (n(A, w, E), n(X, w, E), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      w,
      X,
      T,
      M,
      j,
      N,
      $
    )) : H > 0 && H & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (C(
      p.dynamicChildren,
      q,
      w,
      T,
      M,
      j,
      N
    ), lr(p, g)) : ct(
      p,
      g,
      w,
      X,
      T,
      M,
      j,
      N,
      $
    );
  }, Tt = (p, g, w, E, T, M, j, N, $) => {
    g.slotScopeIds = N, p == null ? g.shapeFlag & 512 ? T.ctx.activate(
      g,
      w,
      E,
      j,
      $
    ) : it(
      g,
      w,
      E,
      T,
      M,
      j,
      $
    ) : ot(p, g, $);
  }, it = (p, g, w, E, T, M, j) => {
    const N = p.component = np(
      p,
      E,
      T
    );
    if (N.type.__hmrId && Ad(N), Ei(p), Hs(N, "mount"), Hr(p) && (N.ctx.renderer = Ct), Hs(N, "init"), op(N, !1, j), zs(N, "init"), Te && (p.el = null), N.asyncDep) {
      if (T && T.registerDep(N, G, j), !p.el) {
        const $ = N.subTree = bt(re);
        k(null, $, g, w), p.placeholder = $.el;
      }
    } else
      G(
        N,
        p,
        g,
        w,
        T,
        M,
        j
      );
    Ai(), zs(N, "mount");
  }, ot = (p, g, w) => {
    const E = g.component = p.component;
    if (Yh(p, g, w))
      if (E.asyncDep && !E.asyncResolved) {
        Ei(g), Z(E, g, w), Ai();
        return;
      } else
        E.next = g, E.update();
    else
      g.el = p.el, E.vnode = g;
  }, G = (p, g, w, E, T, M, j) => {
    const N = () => {
      if (p.isMounted) {
        let { next: H, bu: q, u: et, parent: lt, vnode: _t } = p;
        {
          const ye = vu(p);
          if (ye) {
            H && (H.el = _t.el, Z(p, H, j)), ye.asyncDep.then(() => {
              p.isUnmounted || N();
            });
            return;
          }
        }
        let pt = H, Zt;
        Ei(H || p.vnode), ds(p, !1), H ? (H.el = _t.el, Z(p, H, j)) : H = _t, q && Ys(q), (Zt = H.props && H.props.onVnodeBeforeUpdate) && xe(Zt, lt, H, _t), ds(p, !0), Hs(p, "render");
        const te = La(p);
        zs(p, "render");
        const be = p.subTree;
        p.subTree = te, Hs(p, "patch"), m(
          be,
          te,
          // parent may have changed if it's in a teleport
          f(be.el),
          // anchor may have changed if it's in a fragment
          st(be),
          p,
          T,
          M
        ), zs(p, "patch"), H.el = te.el, pt === null && qh(p, te.el), et && ne(et, T), (Zt = H.props && H.props.onVnodeUpdated) && ne(
          () => xe(Zt, lt, H, _t),
          T
        ), tu(p), Ai();
      } else {
        let H;
        const { el: q, props: et } = g, { bm: lt, m: _t, parent: pt, root: Zt, type: te } = p, be = In(g);
        ds(p, !1), lt && Ys(lt), !be && (H = et && et.onVnodeBeforeMount) && xe(H, pt, g), ds(p, !0);
        {
          Zt.ce && // @ts-expect-error _def is private
          Zt.ce._def.shadowRoot !== !1 && Zt.ce._injectChildStyle(te), Hs(p, "render");
          const ye = p.subTree = La(p);
          zs(p, "render"), Hs(p, "patch"), m(
            null,
            ye,
            w,
            E,
            p,
            T,
            M
          ), zs(p, "patch"), g.el = ye.el;
        }
        if (_t && ne(_t, T), !be && (H = et && et.onVnodeMounted)) {
          const ye = g;
          ne(
            () => xe(H, pt, ye),
            T
          );
        }
        (g.shapeFlag & 256 || pt && In(pt.vnode) && pt.vnode.shapeFlag & 256) && p.a && ne(p.a, T), p.isMounted = !0, jd(p), g = w = E = null;
      }
    };
    p.scope.on();
    const $ = p.effect = new Oc(N);
    p.scope.off();
    const A = p.update = $.run.bind($), X = p.job = $.runIfDirty.bind($);
    X.i = p, X.id = p.uid, $.scheduler = () => xo(X), ds(p, !0), $.onTrack = p.rtc ? (H) => Ys(p.rtc, H) : void 0, $.onTrigger = p.rtg ? (H) => Ys(p.rtg, H) : void 0, A();
  }, Z = (p, g, w) => {
    g.component = p;
    const E = p.vnode.props;
    p.vnode = g, p.next = null, Sh(p, g.props, E, w), Ah(p, g.children, w), me(), wa(p), _e();
  }, ct = (p, g, w, E, T, M, j, N, $ = !1) => {
    const A = p && p.children, X = p ? p.shapeFlag : 0, H = g.children, { patchFlag: q, shapeFlag: et } = g;
    if (q > 0) {
      if (q & 128) {
        se(
          A,
          H,
          w,
          E,
          T,
          M,
          j,
          N,
          $
        );
        return;
      } else if (q & 256) {
        vt(
          A,
          H,
          w,
          E,
          T,
          M,
          j,
          N,
          $
        );
        return;
      }
    }
    et & 8 ? (X & 16 && V(A, T, M), H !== A && u(w, H)) : X & 16 ? et & 16 ? se(
      A,
      H,
      w,
      E,
      T,
      M,
      j,
      N,
      $
    ) : V(A, T, M, !0) : (X & 8 && u(w, ""), et & 16 && D(
      H,
      w,
      E,
      T,
      M,
      j,
      N,
      $
    ));
  }, vt = (p, g, w, E, T, M, j, N, $) => {
    p = p || Xs, g = g || Xs;
    const A = p.length, X = g.length, H = Math.min(A, X);
    let q;
    for (q = 0; q < H; q++) {
      const et = g[q] = $ ? Qe(g[q]) : he(g[q]);
      m(
        p[q],
        et,
        w,
        null,
        T,
        M,
        j,
        N,
        $
      );
    }
    A > X ? V(
      p,
      T,
      M,
      !0,
      !1,
      H
    ) : D(
      g,
      w,
      E,
      T,
      M,
      j,
      N,
      $,
      H
    );
  }, se = (p, g, w, E, T, M, j, N, $) => {
    let A = 0;
    const X = g.length;
    let H = p.length - 1, q = X - 1;
    for (; A <= H && A <= q; ) {
      const et = p[A], lt = g[A] = $ ? Qe(g[A]) : he(g[A]);
      if (gn(et, lt))
        m(
          et,
          lt,
          w,
          null,
          T,
          M,
          j,
          N,
          $
        );
      else
        break;
      A++;
    }
    for (; A <= H && A <= q; ) {
      const et = p[H], lt = g[q] = $ ? Qe(g[q]) : he(g[q]);
      if (gn(et, lt))
        m(
          et,
          lt,
          w,
          null,
          T,
          M,
          j,
          N,
          $
        );
      else
        break;
      H--, q--;
    }
    if (A > H) {
      if (A <= q) {
        const et = q + 1, lt = et < X ? g[et].el : E;
        for (; A <= q; )
          m(
            null,
            g[A] = $ ? Qe(g[A]) : he(g[A]),
            w,
            lt,
            T,
            M,
            j,
            N,
            $
          ), A++;
      }
    } else if (A > q)
      for (; A <= H; )
        Lt(p[A], T, M, !0), A++;
    else {
      const et = A, lt = A, _t = /* @__PURE__ */ new Map();
      for (A = lt; A <= q; A++) {
        const qt = g[A] = $ ? Qe(g[A]) : he(g[A]);
        qt.key != null && (_t.has(qt.key) && F(
          "Duplicate keys found during update:",
          JSON.stringify(qt.key),
          "Make sure keys are unique."
        ), _t.set(qt.key, A));
      }
      let pt, Zt = 0;
      const te = q - lt + 1;
      let be = !1, ye = 0;
      const dn = new Array(te);
      for (A = 0; A < te; A++) dn[A] = 0;
      for (A = et; A <= H; A++) {
        const qt = p[A];
        if (Zt >= te) {
          Lt(qt, T, M, !0);
          continue;
        }
        let ve;
        if (qt.key != null)
          ve = _t.get(qt.key);
        else
          for (pt = lt; pt <= q; pt++)
            if (dn[pt - lt] === 0 && gn(qt, g[pt])) {
              ve = pt;
              break;
            }
        ve === void 0 ? Lt(qt, T, M, !0) : (dn[ve - lt] = A + 1, ve >= ye ? ye = ve : be = !0, m(
          qt,
          g[ve],
          w,
          null,
          T,
          M,
          j,
          N,
          $
        ), Zt++);
      }
      const da = be ? Nh(dn) : Xs;
      for (pt = da.length - 1, A = te - 1; A >= 0; A--) {
        const qt = lt + A, ve = g[qt], ha = g[qt + 1], pa = qt + 1 < X ? (
          // #13559, fallback to el placeholder for unresolved async component
          ha.el || ha.placeholder
        ) : E;
        dn[A] === 0 ? m(
          null,
          ve,
          w,
          pa,
          T,
          M,
          j,
          N,
          $
        ) : be && (pt < 0 || A !== da[pt] ? Ht(ve, w, pa, 2) : pt--);
      }
    }
  }, Ht = (p, g, w, E, T = null) => {
    const { el: M, type: j, transition: N, children: $, shapeFlag: A } = p;
    if (A & 6) {
      Ht(p.component.subTree, g, w, E);
      return;
    }
    if (A & 128) {
      p.suspense.move(g, w, E);
      return;
    }
    if (A & 64) {
      j.move(p, g, w, Ct);
      return;
    }
    if (j === Nt) {
      n(M, g, w);
      for (let H = 0; H < $.length; H++)
        Ht($[H], g, w, E);
      n(p.anchor, g, w);
      return;
    }
    if (j === Li) {
      K(p, g, w);
      return;
    }
    if (E !== 2 && A & 1 && N)
      if (E === 0)
        N.beforeEnter(M), n(M, g, w), ne(() => N.enter(M), T);
      else {
        const { leave: H, delayLeave: q, afterLeave: et } = N, lt = () => {
          p.ctx.isUnmounted ? i(M) : n(M, g, w);
        }, _t = () => {
          M._isLeaving && M[qd](
            !0
            /* cancelled */
          ), H(M, () => {
            lt(), et && et();
          });
        };
        q ? q(M, lt, _t) : _t();
      }
    else
      n(M, g, w);
  }, Lt = (p, g, w, E = !1, T = !1) => {
    const {
      type: M,
      props: j,
      ref: N,
      children: $,
      dynamicChildren: A,
      shapeFlag: X,
      patchFlag: H,
      dirs: q,
      cacheIndex: et
    } = p;
    if (H === -2 && (T = !1), N != null && (me(), Pn(N, null, w, p, !0), _e()), et != null && (g.renderCache[et] = void 0), X & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const lt = X & 1 && q, _t = !In(p);
    let pt;
    if (_t && (pt = j && j.onVnodeBeforeUnmount) && xe(pt, g, p), X & 6)
      O(p.component, w, E);
    else {
      if (X & 128) {
        p.suspense.unmount(w, E);
        return;
      }
      lt && fs(p, null, g, "beforeUnmount"), X & 64 ? p.type.remove(
        p,
        g,
        w,
        Ct,
        E
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Nt || H > 0 && H & 64) ? V(
        A,
        g,
        w,
        !1,
        !0
      ) : (M === Nt && H & 384 || !T && X & 16) && V($, g, w), E && I(p);
    }
    (_t && (pt = j && j.onVnodeUnmounted) || lt) && ne(() => {
      pt && xe(pt, g, p), lt && fs(p, null, g, "unmounted");
    }, w);
  }, I = (p) => {
    const { type: g, el: w, anchor: E, transition: T } = p;
    if (g === Nt) {
      p.patchFlag > 0 && p.patchFlag & 2048 && T && !T.persisted ? p.children.forEach((j) => {
        j.type === re ? i(j.el) : I(j);
      }) : b(w, E);
      return;
    }
    if (g === Li) {
      S(p);
      return;
    }
    const M = () => {
      i(w), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: j, delayLeave: N } = T, $ = () => j(w, M);
      N ? N(p.el, M, $) : $();
    } else
      M();
  }, b = (p, g) => {
    let w;
    for (; p !== g; )
      w = d(p), i(p), p = w;
    i(g);
  }, O = (p, g, w) => {
    p.type.__hmrId && Rd(p);
    const { bum: E, scope: T, job: M, subTree: j, um: N, m: $, a: A } = p;
    Ra($), Ra(A), E && Ys(E), T.stop(), M && (M.flags |= 8, Lt(j, p, g, w)), N && ne(N, g), ne(() => {
      p.isUnmounted = !0;
    }, g), Hd(p);
  }, V = (p, g, w, E = !1, T = !1, M = 0) => {
    for (let j = M; j < p.length; j++)
      Lt(p[j], g, w, E, T);
  }, st = (p) => {
    if (p.shapeFlag & 6)
      return st(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = d(p.anchor || p.el), w = g && g[Kd];
    return w ? d(w) : g;
  };
  let kt = !1;
  const $t = (p, g, w) => {
    p == null ? g._vnode && Lt(g._vnode, null, null, !0) : m(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      w
    ), g._vnode = p, kt || (kt = !0, wa(), Xc(), kt = !1);
  }, Ct = {
    p: m,
    um: Lt,
    m: Ht,
    r: I,
    mt: it,
    mc: D,
    pc: ct,
    pbc: C,
    n: st,
    o: e
  };
  return {
    render: $t,
    hydrate: void 0,
    createApp: bh($t)
  };
}
function jo({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ds({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (W(n) && W(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Qe(i[o]), a.el = r.el), !s && a.patchFlag !== -2 && lr(r, a)), a.type === ai && // avoid cached text nodes retaining detached dom nodes
      a.patchFlag !== -1 && (a.el = r.el), a.type === re && !a.el && (a.el = r.el), a.el && (a.el.__vnode = a);
    }
}
function Nh(e) {
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
function vu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vu(t);
}
function Ra(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const jh = Symbol.for("v-scx"), Vh = () => {
  {
    const e = En(jh);
    return e || F(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Qs(e, t, s) {
  return Q(t) || F(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xu(e, t, s);
}
function xu(e, t, s = dt) {
  const { immediate: n, deep: i, flush: o, once: r } = s;
  t || (n !== void 0 && F(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && F(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && F(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Mt({}, s);
  a.onWarn = F;
  const l = t && n || !t && o !== "post";
  let c;
  if (Wn) {
    if (o === "sync") {
      const h = Vh();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Wt, h.resume = Wt, h.pause = Wt, h;
    }
  }
  const u = At;
  a.call = (h, _, m) => Ae(h, u, _, m);
  let f = !1;
  o === "post" ? a.scheduler = (h) => {
    ne(h, u && u.suspense);
  } : o !== "sync" && (f = !0, a.scheduler = (h, _) => {
    _ ? h() : xo(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const d = Od(e, t, a);
  return Wn && (c ? c.push(d) : l && d()), d;
}
function Hh(e, t, s) {
  const n = this.proxy, i = St(e) ? e.includes(".") ? wu(n, e) : () => n[e] : e.bind(n, n);
  let o;
  Q(t) ? o = t : (o = t.handler, s = t);
  const r = li(this), a = xu(i, o.bind(n), s);
  return r(), a;
}
function wu(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const zh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function Bh(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || dt;
  {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(ms(Rt(t)) in f)) && F(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ms(Rt(t))}" prop.`
        );
      else {
        const d = u[t];
        Q(d) && (d(...s) || F(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = s;
  const o = t.startsWith("update:"), r = o && zh(n, t.slice(7));
  r && (r.trim && (i = s.map((u) => St(u) ? u.trim() : u)), r.number && (i = s.map(qi))), Ud(e, t, i);
  {
    const u = t.toLowerCase();
    u !== t && n[ms(u)] && F(
      `Event "${u}" is emitted in component ${Co(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ie(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = n[a = ms(t)] || // also try camelCase event handler (#2249)
  n[a = ms(Rt(t))];
  !l && o && (l = n[a = ms(ie(t))]), l && Ae(
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
    e.emitted[a] = !0, Ae(
      c,
      e,
      6,
      i
    );
  }
}
const Uh = /* @__PURE__ */ new WeakMap();
function Su(e, t, s = !1) {
  const n = s ? Uh : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, a = !1;
  if (!Q(e)) {
    const l = (c) => {
      const u = Su(c, t, !0);
      u && (a = !0, Mt(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (ut(e) && n.set(e, null), null) : (W(o) ? o.forEach((l) => r[l] = null) : Mt(r, o), ut(e) && n.set(e, r), r);
}
function ko(e, t) {
  return !e || !ti(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), at(e, t[0].toLowerCase() + t.slice(1)) || at(e, ie(t)) || at(e, t));
}
let cr = !1;
function io() {
  cr = !0;
}
function La(e) {
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
  } = e, y = to(e);
  let k, R;
  cr = !1;
  try {
    if (s.shapeFlag & 4) {
      const S = i || n, U = Xe.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(S, {
        get(v, x, D) {
          return F(
            `Property '${String(
              x
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(v, x, D);
        }
      }) : S;
      k = he(
        c.call(
          U,
          S,
          u,
          Xe.NODE_ENV !== "production" ? Ce(f) : f,
          h,
          d,
          _
        )
      ), R = a;
    } else {
      const S = t;
      Xe.NODE_ENV !== "production" && a === f && io(), k = he(
        S.length > 1 ? S(
          Xe.NODE_ENV !== "production" ? Ce(f) : f,
          Xe.NODE_ENV !== "production" ? {
            get attrs() {
              return io(), Ce(a);
            },
            slots: r,
            emit: l
          } : { attrs: a, slots: r, emit: l }
        ) : S(
          Xe.NODE_ENV !== "production" ? Ce(f) : f,
          null
        )
      ), R = t.props ? a : Wh(a);
    }
  } catch (S) {
    An.length = 0, oi(S, e, 1), k = bt(re);
  }
  let z = k, K;
  if (k.patchFlag > 0 && k.patchFlag & 2048 && ([z, K] = ku(k)), R && m !== !1) {
    const S = Object.keys(R), { shapeFlag: U } = z;
    if (S.length) {
      if (U & 7)
        o && S.some(Ki) && (R = Kh(
          R,
          o
        )), z = cs(z, R, !1, !0);
      else if (!cr && z.type !== re) {
        const v = Object.keys(a), x = [], D = [];
        for (let P = 0, C = v.length; P < C; P++) {
          const B = v[P];
          ti(B) ? Ki(B) || x.push(B[2].toLowerCase() + B.slice(3)) : D.push(B);
        }
        D.length && F(
          `Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), x.length && F(
          `Extraneous non-emits event listeners (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return s.dirs && ($a(z) || F(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), z = cs(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(s.dirs) : s.dirs), s.transition && ($a(z) || F(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Vr(z, s.transition)), K ? K(z) : k = z, to(y), k;
}
const ku = (e) => {
  const t = e.children, s = e.dynamicChildren, n = Kr(t, !1);
  if (n) {
    if (n.patchFlag > 0 && n.patchFlag & 2048)
      return ku(n);
  } else return [e, void 0];
  const i = t.indexOf(n), o = s ? s.indexOf(n) : -1, r = (a) => {
    t[i] = a, s && (o > -1 ? s[o] = a : a.patchFlag > 0 && (e.dynamicChildren = [...s, a]));
  };
  return [he(n), r];
};
function Kr(e, t = !0) {
  let s;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (tn(i)) {
      if (i.type !== re || i.children === "v-if") {
        if (s)
          return;
        if (s = i, t && s.patchFlag > 0 && s.patchFlag & 2048)
          return Kr(s.children);
      }
    } else
      return;
  }
  return s;
}
const Wh = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || ti(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Kh = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ki(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
}, $a = (e) => e.shapeFlag & 7 || e.type === re;
function Yh(e, t, s) {
  const { props: n, children: i, component: o } = e, { props: r, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if ((i || a) && Te || t.dirs || t.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Fa(n, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (r[d] !== n[d] && !ko(c, d))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? Fa(n, r, c) : !0 : !!r;
  return !1;
}
function Fa(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (t[o] !== e[o] && !ko(s, o))
      return !0;
  }
  return !1;
}
function qh({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Ou = (e) => e.__isSuspense;
function Gh(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : Gc(e);
}
const Nt = Symbol.for("v-fgt"), ai = Symbol.for("v-txt"), re = Symbol.for("v-cmt"), Li = Symbol.for("v-stc"), An = [];
let oe = null;
function Y(e = !1) {
  An.push(oe = e ? null : []);
}
function Xh() {
  An.pop(), oe = An[An.length - 1] || null;
}
let Un = 1;
function oo(e, t = !1) {
  Un += e, e < 0 && oe && t && (oe.hasOnce = !0);
}
function Mu(e) {
  return e.dynamicChildren = Un > 0 ? oe || Xs : null, Xh(), Un > 0 && oe && oe.push(e), e;
}
function tt(e, t, s, n, i, o) {
  return Mu(
    L(
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
function Ds(e, t, s, n, i) {
  return Mu(
    bt(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gn(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const s = Ri.get(t.type);
    if (s && s.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Jh = (...e) => Qh(
  ...e
), Cu = ({ key: e }) => e ?? null, $i = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? St(e) || mt(e) || Q(e) ? { i: Kt, r: e, k: t, f: !!s } : e : null);
function L(e, t = null, s = null, n = 0, i = null, o = e === Nt ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cu(t),
    ref: t && $i(t),
    scopeId: su,
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
    ctx: Kt
  };
  return a ? (Yr(l, s), o & 128 && e.normalize(l)) : s && (l.shapeFlag |= St(s) ? 8 : 16), l.key !== l.key && F("VNode created with invalid key (NaN). VNode type:", l.type), Un > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && oe.push(l), l;
}
const bt = Jh;
function Qh(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === ru) && (e || F(`Invalid vnode type when creating vnode: ${e}.`), e = re), tn(e)) {
    const a = cs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Yr(a, s), Un > 0 && !o && oe && (a.shapeFlag & 6 ? oe[oe.indexOf(e)] = a : oe.push(a)), a.patchFlag = -2, a;
  }
  if (Iu(e) && (e = e.__vccOpts), t) {
    t = Zh(t);
    let { class: a, style: l } = t;
    a && !St(a) && (t.class = ze(a)), ut(l) && (Rs(l) && !W(l) && (l = Mt({}, l)), t.style = Ze(l));
  }
  const r = St(e) ? 1 : Ou(e) ? 128 : Yd(e) ? 64 : ut(e) ? 4 : Q(e) ? 2 : 0;
  return r & 4 && Rs(e) && (e = J(e), F(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), L(
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
function Zh(e) {
  return e ? Rs(e) || pu(e) ? Mt({}, e) : e : null;
}
function cs(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, c = t ? tp(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Cu(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? W(o) ? o.concat($i(t)) : [o, $i(t)] : $i(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r === -1 && W(a) ? a.map(Tu) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Nt ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && cs(e.ssContent),
    ssFallback: e.ssFallback && cs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Vr(
    u,
    l.clone(u)
  ), u;
}
function Tu(e) {
  const t = cs(e);
  return W(e.children) && (t.children = e.children.map(Tu)), t;
}
function Zs(e = " ", t = 0) {
  return bt(ai, null, e, t);
}
function ss(e = "", t = !1) {
  return t ? (Y(), Ds(re, null, e)) : bt(re, null, e);
}
function he(e) {
  return e == null || typeof e == "boolean" ? bt(re) : W(e) ? bt(
    Nt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tn(e) ? Qe(e) : bt(ai, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : cs(e);
}
function Yr(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (W(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Yr(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !pu(t) ? t._ctx = Kt : i === 3 && Kt && (Kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Q(t) ? (t = { default: t, _ctx: Kt }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Zs(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function tp(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ze([t.class, n.class]));
      else if (i === "style")
        t.style = Ze([t.style, n.style]);
      else if (ti(i)) {
        const o = t[i], r = n[i];
        r && o !== r && !(W(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function xe(e, t, s, n = null) {
  Ae(e, t, 7, [
    s,
    n
  ]);
}
const ep = fu();
let sp = 0;
function np(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || ep, o = {
    uid: sp++,
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
    scope: new wc(
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
    propsOptions: mu(n, i),
    emitsOptions: Su(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: dt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: dt,
    data: dt,
    props: dt,
    attrs: dt,
    slots: dt,
    refs: dt,
    setupState: dt,
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
  return o.ctx = lh(o), o.root = t ? t.root : o, o.emit = Bh.bind(null, o), e.ce && e.ce(o), o;
}
let At = null;
const Oo = () => At || Kt;
let ro, ur;
{
  const e = si(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  ro = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => At = s
  ), ur = t(
    "__VUE_SSR_SETTERS__",
    (s) => Wn = s
  );
}
const li = (e) => {
  const t = At;
  return ro(e), e.scope.on(), () => {
    e.scope.off(), ro(t);
  };
}, Na = () => {
  At && At.scope.off(), ro(null);
}, ip = /* @__PURE__ */ We("slot,component");
function fr(e, { isNativeTag: t }) {
  (ip(e) || t(e)) && F(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Du(e) {
  return e.vnode.shapeFlag & 4;
}
let Wn = !1;
function op(e, t = !1, s = !1) {
  t && ur(t);
  const { props: n, children: i } = e.vnode, o = Du(e);
  xh(e, n, o, t), Eh(e, i, s || t);
  const r = o ? rp(e, t) : void 0;
  return t && ur(!1), r;
}
function rp(e, t) {
  var s;
  const n = e.type;
  {
    if (n.name && fr(n.name, e.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let r = 0; r < o.length; r++)
        fr(o[r], e.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let r = 0; r < o.length; r++)
        nu(o[r]);
    }
    n.compilerOptions && ap() && F(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, lu), ch(e);
  const { setup: i } = n;
  if (i) {
    me();
    const o = e.setupContext = i.length > 1 ? up(e) : null, r = li(e), a = cn(
      i,
      e,
      0,
      [
        Ce(e.props),
        o
      ]
    ), l = Dr(a);
    if (_e(), r(), (l || e.sp) && !In(e) && iu(e), l) {
      if (a.then(Na, Na), t)
        return a.then((c) => {
          ja(e, c, t);
        }).catch((c) => {
          oi(c, e, 0);
        });
      if (e.asyncDep = a, !e.suspense) {
        const c = (s = n.name) != null ? s : "Anonymous";
        F(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ja(e, a, t);
  } else
    Pu(e, t);
}
function ja(e, t, s) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ut(t) ? (tn(t) && F(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Uc(t), uh(e)) : t !== void 0 && F(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Pu(e, s);
}
const ap = () => !0;
function Pu(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Wt);
  {
    const i = li(e);
    me();
    try {
      dh(e);
    } finally {
      _e(), i();
    }
  }
  !n.render && e.render === Wt && !t && (n.template ? F(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : F("Component is missing template or render function: ", n));
}
const lp = {
  get(e, t) {
    return io(), Et(e, "get", ""), e[t];
  },
  set() {
    return F("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return F("setupContext.attrs is readonly."), !1;
  }
};
function cp(e) {
  return new Proxy(e.slots, {
    get(t, s) {
      return Et(e, "get", "$slots"), t[s];
    }
  });
}
function up(e) {
  const t = (s) => {
    if (e.exposed && F("expose() should be called only once per setup()."), s != null) {
      let n = typeof s;
      n === "object" && (W(s) ? n = "array" : mt(s) && (n = "ref")), n !== "object" && F(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    e.exposed = s || {};
  };
  {
    let s, n;
    return Object.freeze({
      get attrs() {
        return s || (s = new Proxy(e.attrs, lp));
      },
      get slots() {
        return n || (n = cp(e));
      },
      get emit() {
        return (i, ...o) => e.emit(i, ...o);
      },
      expose: t
    });
  }
}
function Mo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Uc(es(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Cs)
        return Cs[s](e);
    },
    has(t, s) {
      return s in t || s in Cs;
    }
  })) : e.proxy;
}
const fp = /(?:^|[-_])\w/g, dp = (e) => e.replace(fp, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function qr(e, t = !0) {
  return Q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Co(e, t, s = !1) {
  let n = qr(t);
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
  return n ? dp(n) : s ? "App" : "Anonymous";
}
function Iu(e) {
  return Q(e) && "__vccOpts" in e;
}
const jt = (e, t) => {
  const s = Sd(e, t, Wn);
  {
    const n = Oo();
    n && n.appContext.config.warnRecursiveComputed && (s._warnRecursive = !0);
  }
  return s;
};
function en(e, t, s) {
  const n = (o, r, a) => {
    oo(-1);
    try {
      return bt(o, r, a);
    } finally {
      oo(1);
    }
  }, i = arguments.length;
  return i === 2 ? ut(t) && !W(t) ? tn(t) ? n(e, null, [t]) : n(e, t) : n(e, null, t) : (i > 3 ? s = Array.prototype.slice.call(arguments, 2) : i === 3 && tn(s) && (s = [s]), n(e, t, s));
}
function hp() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, s = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!ut(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (mt(f)) {
        me();
        const d = f.value;
        return _e(), [
          "div",
          {},
          ["span", e, u(f)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (ge(f))
          return [
            "div",
            {},
            ["span", e, Jt(f) ? "ShallowReactive" : "Reactive"],
            "<",
            a(f),
            `>${Ee(f) ? " (readonly)" : ""}`
          ];
        if (Ee(f))
          return [
            "div",
            {},
            ["span", e, Jt(f) ? "ShallowReadonly" : "Readonly"],
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
    f.type.props && f.props && d.push(r("props", J(f.props))), f.setupState !== dt && d.push(r("setup", f.setupState)), f.data !== dt && d.push(r("data", J(f.data)));
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
    return d = Mt({}, d), Object.keys(d).length ? [
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
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", s, JSON.stringify(f)] : typeof f == "boolean" ? ["span", n, f] : ut(f) ? ["object", { object: d ? J(f) : f }] : ["span", s, String(f)];
  }
  function l(f, d) {
    const h = f.type;
    if (Q(h))
      return;
    const _ = {};
    for (const m in f.ctx)
      c(h, m, d) && (_[m] = f.ctx[m]);
    return _;
  }
  function c(f, d, h) {
    const _ = f[h];
    if (W(_) && _.includes(d) || ut(_) && d in _ || f.extends && c(f.extends, d, h) || f.mixins && f.mixins.some((m) => c(m, d, h)))
      return !0;
  }
  function u(f) {
    return Jt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const dr = "3.5.21", ae = F;
let hr;
const Va = typeof window < "u" && window.trustedTypes;
if (Va)
  try {
    hr = /* @__PURE__ */ Va.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ae(`Error creating trusted types policy: ${e}`);
  }
const Eu = hr ? (e) => hr.createHTML(e) : (e) => e, pp = "http://www.w3.org/2000/svg", gp = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, Ha = Ne && /* @__PURE__ */ Ne.createElement("template"), mp = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Ne.createElementNS(pp, e) : t === "mathml" ? Ne.createElementNS(gp, e) : s ? Ne.createElement(e, { is: s }) : Ne.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ne.createTextNode(e),
  createComment: (e) => Ne.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ne.querySelector(e),
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
      Ha.innerHTML = Eu(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ha.content;
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
}, _p = Symbol("_vtc");
function bp(e, t, s) {
  const n = e[_p];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const za = Symbol("_vod"), yp = Symbol("_vsh"), vp = Symbol("CSS_VAR_TEXT"), xp = /(?:^|;)\s*display\s*:/;
function wp(e, t, s) {
  const n = e.style, i = St(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (St(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          s[a] == null && Fi(n, a, "");
        }
      else
        for (const r in t)
          s[r] == null && Fi(n, r, "");
    for (const r in s)
      r === "display" && (o = !0), Fi(n, r, s[r]);
  } else if (i) {
    if (t !== s) {
      const r = n[vp];
      r && (s += ";" + r), n.cssText = s, o = xp.test(s);
    }
  } else t && e.removeAttribute("style");
  za in e && (e[za] = o ? n.display : "", e[yp] && (n.display = "none"));
}
const Sp = /[^\\];\s*$/, Ba = /\s*!important$/;
function Fi(e, t, s) {
  if (W(s))
    s.forEach((n) => Fi(e, t, n));
  else if (s == null && (s = ""), Sp.test(s) && ae(
    `Unexpected semicolon at the end of '${t}' style value: '${s}'`
  ), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = kp(e, t);
    Ba.test(s) ? e.setProperty(
      ie(n),
      s.replace(Ba, ""),
      "important"
    ) : e[n] = s;
  }
}
const Ua = ["Webkit", "Moz", "ms"], Vo = {};
function kp(e, t) {
  const s = Vo[t];
  if (s)
    return s;
  let n = Rt(t);
  if (n !== "filter" && n in e)
    return Vo[t] = n;
  n = As(n);
  for (let i = 0; i < Ua.length; i++) {
    const o = Ua[i] + n;
    if (o in e)
      return Vo[t] = o;
  }
  return t;
}
const Wa = "http://www.w3.org/1999/xlink";
function Ka(e, t, s, n, i, o = qf(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Wa, t.slice(6, t.length)) : e.setAttributeNS(Wa, t, s) : s == null || o && !yc(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ie(s) ? String(s) : s
  );
}
function Ya(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Eu(s) : s);
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
    a === "boolean" ? s = yc(s) : s == null && a === "string" ? (s = "", r = !0) : a === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch (a) {
    r || ae(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${s} is invalid.`,
      a
    );
  }
  r && e.removeAttribute(i || t);
}
function ts(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Op(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const qa = Symbol("_vei");
function Mp(e, t, s, n, i = null) {
  const o = e[qa] || (e[qa] = {}), r = o[t];
  if (n && r)
    r.value = Xa(n, t);
  else {
    const [a, l] = Cp(t);
    if (n) {
      const c = o[t] = Pp(
        Xa(n, t),
        i
      );
      ts(e, a, c, l);
    } else r && (Op(e, a, r, l), o[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function Cp(e) {
  let t;
  if (Ga.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ga); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
let Ho = 0;
const Tp = /* @__PURE__ */ Promise.resolve(), Dp = () => Ho || (Tp.then(() => Ho = 0), Ho = Date.now());
function Pp(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ae(
      Ip(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Dp(), s;
}
function Xa(e, t) {
  return Q(e) || W(e) ? e : (ae(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Wt);
}
function Ip(e, t) {
  if (W(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Ja = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ep = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? bp(e, n, r) : t === "style" ? wp(e, s, n) : ti(t) ? Ki(t) || Mp(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ap(e, t, n, r)) ? (Ya(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !St(n)) ? Ya(e, Rt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ka(e, t, n, r));
};
function Ap(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ja(t) && Q(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ja(t) && St(s) ? !1 : t in e;
}
const Qa = {};
// @__NO_SIDE_EFFECTS__
function Rp(e, t, s) {
  let n = /* @__PURE__ */ js(e, t);
  mo(n) && (n = Mt({}, n, t));
  class i extends Gr {
    constructor(r) {
      super(n, r, s);
    }
  }
  return i.def = n, i;
}
const Lp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Gr extends Lp {
  constructor(t, s = {}, n = pr) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== pr ? this._root = this.shadowRoot : (this.shadowRoot && ae(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Gr) {
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
    this._connected = !1, Ls(() => {
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
      if (o && !W(o))
        for (const l in o) {
          const c = o[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = ma(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Rt(l)] = !0);
        }
      this._numberProps = a, this._resolveProps(n), this.shadowRoot ? this._applyStyles(r) : r && ae(
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
        at(this, n) ? ae(`Exposed property "${n}" already exists on custom element.`) : Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => xt(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = W(s) ? s : Object.keys(s || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i]);
    for (const i of n.map(Rt))
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
    let n = s ? this.getAttribute(t) : Qa;
    const i = Rt(t);
    s && this._numberProps && this._numberProps[i] && (n = ma(n)), this._setProp(i, n, !1, !0);
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
    if (s !== this._props[t] && (s === Qa ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), i && this._instance && this._update(), n)) {
      const o = this._ob;
      o && o.disconnect(), s === !0 ? this.setAttribute(ie(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ie(t), s + "") : s || this.removeAttribute(ie(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Hp(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = bt(this._def, Mt(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0, n.ceReload = (o) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      };
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            mo(r[0]) ? Mt({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      n.emit = (o, ...r) => {
        i(o, r), ie(o) !== o && i(ie(o), r);
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
const sn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return W(t) ? (s) => Ys(t, s) : t;
};
function $p(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Be = Symbol("_assign"), mn = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Be] = sn(i);
    const o = n || i.props && i.props.type === "number";
    ts(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let a = e.value;
      s && (a = a.trim()), o && (a = qi(a)), e[Be](a);
    }), s && ts(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ts(e, "compositionstart", $p), ts(e, "compositionend", Za), ts(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[Be] = sn(r), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? qi(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === l) || (e.value = l));
  }
}, tl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e[Be] = sn(s), ts(e, "change", () => {
      const n = e._modelValue, i = Kn(e), o = e.checked, r = e[Be];
      if (W(n)) {
        const a = Er(n, i), l = a !== -1;
        if (o && !l)
          r(n.concat(i));
        else if (!o && l) {
          const c = [...n];
          c.splice(a, 1), r(c);
        }
      } else if (ln(n)) {
        const a = new Set(n);
        o ? a.add(i) : a.delete(i), r(a);
      } else
        r(Au(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: el,
  beforeUpdate(e, t, s) {
    e[Be] = sn(s), el(e, t, s);
  }
};
function el(e, { value: t, oldValue: s }, n) {
  e._modelValue = t;
  let i;
  if (W(t))
    i = Er(t, n.props.value) > -1;
  else if (ln(t))
    i = t.has(n.props.value);
  else {
    if (t === s) return;
    i = ni(t, Au(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const Fp = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const i = ln(t);
    ts(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => s ? qi(Kn(r)) : Kn(r)
      );
      e[Be](
        e.multiple ? i ? new Set(o) : o : o[0]
      ), e._assigning = !0, Ls(() => {
        e._assigning = !1;
      });
    }), e[Be] = sn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    sl(e, t);
  },
  beforeUpdate(e, t, s) {
    e[Be] = sn(s);
  },
  updated(e, { value: t }) {
    e._assigning || sl(e, t);
  }
};
function sl(e, t) {
  const s = e.multiple, n = W(t);
  if (s && !n && !ln(t)) {
    ae(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, o = e.options.length; i < o; i++) {
    const r = e.options[i], a = Kn(r);
    if (s)
      if (n) {
        const l = typeof a;
        l === "string" || l === "number" ? r.selected = t.some((c) => String(c) === String(a)) : r.selected = Er(t, a) > -1;
      } else
        r.selected = t.has(a);
    else if (ni(Kn(r), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Kn(e) {
  return "_value" in e ? e._value : e.value;
}
function Au(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
const Np = ["ctrl", "shift", "alt", "meta"], jp = {
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
  exact: (e, t) => Np.some((s) => e[`${s}Key`] && !t.includes(s))
}, Ps = (e, t) => {
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const a = jp[t[r]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, Vp = /* @__PURE__ */ Mt({ patchProp: Ep }, mp);
let nl;
function Ru() {
  return nl || (nl = Lh(Vp));
}
const Hp = (...e) => {
  Ru().render(...e);
}, pr = (...e) => {
  const t = Ru().createApp(...e);
  Bp(t), Up(t);
  const { mount: s } = t;
  return t.mount = (n) => {
    const i = Wp(n);
    if (!i) return;
    const o = t._component;
    !Q(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, zp(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function zp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Uf(t) || Wf(t) || Kf(t),
    writable: !1
  });
}
function Up(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ae(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const s = e.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ae(n), s;
      },
      set() {
        ae(n);
      }
    });
  }
}
function Wp(e) {
  if (St(e)) {
    const t = document.querySelector(e);
    return t || ae(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ae(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Kp() {
  hp();
}
Kp();
function pi(e, t, s) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, s), s) : (e[t] = s, s);
}
function zo(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Yp() {
  return Lu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Lu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const qp = typeof Proxy == "function", Gp = "devtools-plugin:setup", Xp = "plugin:settings:set";
let Bs, gr;
function Jp() {
  var e;
  return Bs !== void 0 || (typeof window < "u" && window.performance ? (Bs = !0, gr = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Bs = !0, gr = globalThis.perf_hooks.performance) : Bs = !1), Bs;
}
function Qp() {
  return Jp() ? gr.now() : Date.now();
}
class Zp {
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
        return Qp();
      }
    }, s && s.on(Xp, (r, a) => {
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
function $u(e, t) {
  const s = e, n = Lu(), i = Yp(), o = qp && s.enableEarlyProxy;
  if (i && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(Gp, e, t);
  else {
    const r = o ? new Zp(s, i) : null;
    (n.__VUE_DEVTOOLS_PLUGINS__ = n.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: s,
      setupFn: t,
      proxy: r
    }), r && t(r.proxiedTarget);
  }
}
let mr;
const Yn = (e) => mr = e, Fu = Symbol("pinia");
function Fs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Pe;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Pe || (Pe = {}));
const Is = typeof window < "u", il = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function tg(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Xr(e, t, s) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = function() {
    Vu(n.response, t, s);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function Nu(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ni(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const s = document.createEvent("MouseEvents");
    s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(s);
  }
}
const ji = typeof navigator == "object" ? navigator : { userAgent: "" }, ju = /Macintosh/.test(ji.userAgent) && /AppleWebKit/.test(ji.userAgent) && !/Safari/.test(ji.userAgent), Vu = Is ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ju ? eg : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in ji ? sg : (
      // Fallback to using FileReader and a popup
      ng
    )
  )
) : () => {
};
function eg(e, t = "download", s) {
  const n = document.createElement("a");
  n.download = t, n.rel = "noopener", typeof e == "string" ? (n.href = e, n.origin !== location.origin ? Nu(n.href) ? Xr(e, t, s) : (n.target = "_blank", Ni(n)) : Ni(n)) : (n.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(n.href);
  }, 4e4), setTimeout(function() {
    Ni(n);
  }, 0));
}
function sg(e, t = "download", s) {
  if (typeof e == "string")
    if (Nu(e))
      Xr(e, t, s);
    else {
      const n = document.createElement("a");
      n.href = e, n.target = "_blank", setTimeout(function() {
        Ni(n);
      });
    }
  else
    navigator.msSaveOrOpenBlob(tg(e, s), t);
}
function ng(e, t, s, n) {
  if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof e == "string")
    return Xr(e, t, s);
  const i = e.type === "application/octet-stream", o = /constructor/i.test(String(il.HTMLElement)) || "safari" in il, r = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((r || i && o || ju) && typeof FileReader < "u") {
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
function It(e, t) {
  const s = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(s, t) : t === "error" ? console.error(s) : t === "warn" ? console.warn(s) : console.log(s);
}
function Jr(e) {
  return "_a" in e && "install" in e;
}
function Hu() {
  if (!("clipboard" in navigator))
    return It("Your browser doesn't support the Clipboard API", "error"), !0;
}
function zu(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (It('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function ig(e) {
  if (!Hu())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), It("Global state copied to clipboard.");
    } catch (t) {
      if (zu(t))
        return;
      It("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function og(e) {
  if (!Hu())
    try {
      Bu(e, JSON.parse(await navigator.clipboard.readText())), It("Global state pasted from clipboard.");
    } catch (t) {
      if (zu(t))
        return;
      It("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function rg(e) {
  try {
    Vu(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    It("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let $e;
function ag() {
  $e || ($e = document.createElement("input"), $e.type = "file", $e.accept = ".json");
  function e() {
    return new Promise((t, s) => {
      $e.onchange = async () => {
        const n = $e.files;
        if (!n)
          return t(null);
        const i = n.item(0);
        return t(i ? { text: await i.text(), file: i } : null);
      }, $e.oncancel = () => t(null), $e.onerror = s, $e.click();
    });
  }
  return e;
}
async function lg(e) {
  try {
    const s = await ag()();
    if (!s)
      return;
    const { text: n, file: i } = s;
    Bu(e, JSON.parse(n)), It(`Global state imported from "${i.name}".`);
  } catch (t) {
    It("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Bu(e, t) {
  for (const s in t) {
    const n = e.state.value[s];
    n ? Object.assign(n, t[s]) : e.state.value[s] = t[s];
  }
}
function de(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Uu = "🍍 Pinia (root)", Vi = "_root";
function cg(e) {
  return Jr(e) ? {
    id: Vi,
    label: Uu
  } : {
    id: e.$id,
    label: e.$id
  };
}
function ug(e) {
  if (Jr(e)) {
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
function fg(e) {
  return e ? Array.isArray(e) ? e.reduce((t, s) => (t.keys.push(s.key), t.operations.push(s.type), t.oldValue[s.key] = s.oldValue, t.newValue[s.key] = s.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: de(e.type),
    key: de(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function dg(e) {
  switch (e) {
    case Pe.direct:
      return "mutation";
    case Pe.patchFunction:
      return "$patch";
    case Pe.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Gs = !0;
const Hi = [], bs = "pinia:mutations", Ut = "pinia", { assign: hg } = Object, ao = (e) => "🍍 " + e;
function pg(e, t) {
  $u({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Hi,
    app: e
  }, (s) => {
    typeof s.now != "function" && It("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.addTimelineLayer({
      id: bs,
      label: "Pinia 🍍",
      color: 15064968
    }), s.addInspector({
      id: Ut,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            ig(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await og(t), s.sendInspectorTree(Ut), s.sendInspectorState(Ut);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            rg(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await lg(t), s.sendInspectorTree(Ut), s.sendInspectorState(Ut);
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
            i ? typeof i.$reset != "function" ? It(`Cannot reset "${n}" store because it doesn't have a "$reset" method implemented.`, "warn") : (i.$reset(), It(`Store "${n}" reset.`)) : It(`Cannot reset "${n}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), s.on.inspectComponent((n, i) => {
      const o = n.componentInstance && n.componentInstance.proxy;
      if (o && o._pStores) {
        const r = n.componentInstance.proxy._pStores;
        Object.values(r).forEach((a) => {
          n.instanceData.state.push({
            type: ao(a.$id),
            key: "state",
            editable: !0,
            value: a._isOptionsAPI ? {
              _custom: {
                value: J(a.$state),
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
            type: ao(a.$id),
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
      if (n.app === e && n.inspectorId === Ut) {
        let i = [t];
        i = i.concat(Array.from(t._s.values())), n.rootNodes = (n.filter ? i.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(n.filter.toLowerCase()) : Uu.toLowerCase().includes(n.filter.toLowerCase())) : i).map(cg);
      }
    }), globalThis.$pinia = t, s.on.getInspectorState((n) => {
      if (n.app === e && n.inspectorId === Ut) {
        const i = n.nodeId === Vi ? t : t._s.get(n.nodeId);
        if (!i)
          return;
        i && (n.nodeId !== Vi && (globalThis.$store = J(i)), n.state = ug(i));
      }
    }), s.on.editInspectorState((n, i) => {
      if (n.app === e && n.inspectorId === Ut) {
        const o = n.nodeId === Vi ? t : t._s.get(n.nodeId);
        if (!o)
          return It(`store "${n.nodeId}" not found`, "error");
        const { path: r } = n;
        Jr(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), Gs = !1, n.set(o, r, n.state.value), Gs = !0;
      }
    }), s.on.editComponentState((n) => {
      if (n.type.startsWith("🍍")) {
        const i = n.type.replace(/^🍍\s*/, ""), o = t._s.get(i);
        if (!o)
          return It(`store "${i}" not found`, "error");
        const { path: r } = n;
        if (r[0] !== "state")
          return It(`Invalid path for store "${i}":
${r}
Only state can be modified.`);
        r[0] = "$state", Gs = !1, n.set(o, r, n.state.value), Gs = !0;
      }
    });
  });
}
function gg(e, t) {
  Hi.includes(ao(t.$id)) || Hi.push(ao(t.$id)), $u({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Hi,
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
      const u = Wu++;
      s.addTimelineEvent({
        layerId: bs,
        event: {
          time: n(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: de(t.$id),
            action: de(l),
            args: c
          },
          groupId: u
        }
      }), r((f) => {
        ns = void 0, s.addTimelineEvent({
          layerId: bs,
          event: {
            time: n(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: de(t.$id),
              action: de(l),
              args: c,
              result: f
            },
            groupId: u
          }
        });
      }), a((f) => {
        ns = void 0, s.addTimelineEvent({
          layerId: bs,
          event: {
            time: n(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: de(t.$id),
              action: de(l),
              args: c,
              error: f
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((r) => {
      Qs(() => xt(t[r]), (a, l) => {
        s.notifyComponentUpdate(), s.sendInspectorState(Ut), Gs && s.addTimelineEvent({
          layerId: bs,
          event: {
            time: n(),
            title: "Change",
            subtitle: r,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: ns
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: r, type: a }, l) => {
      if (s.notifyComponentUpdate(), s.sendInspectorState(Ut), !Gs)
        return;
      const c = {
        time: n(),
        title: dg(a),
        data: hg({ store: de(t.$id) }, fg(r)),
        groupId: ns
      };
      a === Pe.patchFunction ? c.subtitle = "⤵️" : a === Pe.patchObject ? c.subtitle = "🧩" : r && !Array.isArray(r) && (c.subtitle = r.type), r && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: r
        }
      }), s.addTimelineEvent({
        layerId: bs,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const i = t._hotUpdate;
    t._hotUpdate = es((r) => {
      i(r), s.addTimelineEvent({
        layerId: bs,
        event: {
          time: n(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: de(t.$id),
            info: de("HMR update")
          }
        }
      }), s.notifyComponentUpdate(), s.sendInspectorTree(Ut), s.sendInspectorState(Ut);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), s.notifyComponentUpdate(), s.sendInspectorTree(Ut), s.sendInspectorState(Ut), s.getSettings().logStoreChanges && It(`Disposed "${t.$id}" store 🗑`);
    }, s.notifyComponentUpdate(), s.sendInspectorTree(Ut), s.sendInspectorState(Ut), s.getSettings().logStoreChanges && It(`"${t.$id}" store installed 🆕`);
  });
}
let Wu = 0, ns;
function ol(e, t, s) {
  const n = t.reduce((i, o) => (i[o] = J(e)[o], i), {});
  for (const i in n)
    e[i] = function() {
      const o = Wu, r = s ? new Proxy(e, {
        get(...l) {
          return ns = o, Reflect.get(...l);
        },
        set(...l) {
          return ns = o, Reflect.set(...l);
        }
      }) : e;
      ns = o;
      const a = n[i].apply(r, arguments);
      return ns = void 0, a;
    };
}
function mg({ app: e, store: t, options: s }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!s.state, !t._p._testing) {
      ol(t, Object.keys(s.actions), t._isOptionsAPI);
      const n = t._hotUpdate;
      J(t)._hotUpdate = function(i) {
        n.apply(this, arguments), ol(t, Object.keys(i._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    gg(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function _g() {
  const e = Sc(!0), t = e.run(() => gt({}));
  let s = [], n = [];
  const i = es({
    install(o) {
      Yn(i), i._a = o, o.provide(Fu, i), o.config.globalProperties.$pinia = i, Is && pg(o, i), n.forEach((r) => s.push(r)), n = [];
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
  return Is && typeof Proxy < "u" && i.use(mg), i;
}
function Ku(e, t) {
  for (const s in t) {
    const n = t[s];
    if (!(s in e))
      continue;
    const i = e[s];
    Fs(i) && Fs(n) && !mt(n) && !ge(n) ? e[s] = Ku(i, n) : e[s] = n;
  }
  return e;
}
const bg = () => {
};
function rl(e, t, s, n = bg) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && kc() && Jf(i), i;
}
function Us(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const yg = (e) => e(), al = Symbol(), Bo = Symbol();
function _r(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Fs(i) && Fs(n) && e.hasOwnProperty(s) && !mt(n) && !ge(n) ? e[s] = _r(i, n) : e[s] = n;
  }
  return e;
}
const vg = Symbol("pinia:skipHydration");
function xg(e) {
  return !Fs(e) || !e.hasOwnProperty(vg);
}
const { assign: ue } = Object;
function ll(e) {
  return !!(mt(e) && e.effect);
}
function cl(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, a = s.state.value[e];
  let l;
  function c() {
    !a && !n && (s.state.value[e] = i ? i() : {});
    const u = /* use ref() to unwrap refs inside state TODO: check if this is still necessary */ xa(n ? gt(i ? i() : {}).value : s.state.value[e]);
    return ue(u, o, Object.keys(r || {}).reduce((f, d) => (d in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), f[d] = es(jt(() => {
      Yn(s);
      const h = s._s.get(e);
      return r[d].call(h, h);
    })), f), {}));
  }
  return l = br(e, c, t, s, n, !0), l;
}
function br(e, t, s = {}, n, i, o) {
  let r;
  const a = ue({ actions: {} }, s);
  if (!n._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  l.onTrigger = (P) => {
    c ? h = P : c == !1 && !v._hotUpdating && (Array.isArray(h) ? h.push(P) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  };
  let c, u, f = [], d = [], h;
  const _ = n.state.value[e];
  !o && !_ && !i && (n.state.value[e] = {});
  const m = gt({});
  let y;
  function k(P) {
    let C;
    c = u = !1, h = [], typeof P == "function" ? (P(n.state.value[e]), C = {
      type: Pe.patchFunction,
      storeId: e,
      events: h
    }) : (_r(n.state.value[e], P), C = {
      type: Pe.patchObject,
      payload: P,
      storeId: e,
      events: h
    });
    const B = y = Symbol();
    Ls().then(() => {
      y === B && (c = !0);
    }), u = !0, Us(f, C, n.state.value[e]);
  }
  const R = o ? function() {
    const { state: C } = s, B = C ? C() : {};
    this.$patch((rt) => {
      ue(rt, B);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function z() {
    r.stop(), f = [], d = [], n._s.delete(e);
  }
  const K = (P, C = "") => {
    if (al in P)
      return P[Bo] = C, P;
    const B = function() {
      Yn(n);
      const rt = Array.from(arguments), Tt = [], it = [];
      function ot(ct) {
        Tt.push(ct);
      }
      function G(ct) {
        it.push(ct);
      }
      Us(d, {
        args: rt,
        name: B[Bo],
        store: v,
        after: ot,
        onError: G
      });
      let Z;
      try {
        Z = P.apply(this && this.$id === e ? this : v, rt);
      } catch (ct) {
        throw Us(it, ct), ct;
      }
      return Z instanceof Promise ? Z.then((ct) => (Us(Tt, ct), ct)).catch((ct) => (Us(it, ct), Promise.reject(ct))) : (Us(Tt, Z), Z);
    };
    return B[al] = !0, B[Bo] = C, B;
  }, S = /* @__PURE__ */ es({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), U = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: rl.bind(null, d),
    $patch: k,
    $reset: R,
    $subscribe(P, C = {}) {
      const B = rl(f, P, C.detached, () => rt()), rt = r.run(() => Qs(() => n.state.value[e], (Tt) => {
        (C.flush === "sync" ? u : c) && P({
          storeId: e,
          type: Pe.direct,
          events: h
        }, Tt);
      }, ue({}, l, C)));
      return B;
    },
    $dispose: z
  }, v = ii(ue(
    {
      _hmrPayload: S,
      _customProperties: es(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    U
    // must be added later
    // setupStore
  ));
  n._s.set(e, v);
  const D = (n._a && n._a.runWithContext || yg)(() => n._e.run(() => (r = Sc()).run(() => t({ action: K }))));
  for (const P in D) {
    const C = D[P];
    if (mt(C) && !ll(C) || ge(C))
      i ? pi(m.value, P, Ii(D, P)) : o || (_ && xg(C) && (mt(C) ? C.value = _[P] : _r(C, _[P])), n.state.value[e][P] = C), S.state.push(P);
    else if (typeof C == "function") {
      const B = i ? C : K(C, P);
      D[P] = B, S.actions[P] = C, a.actions[P] = C;
    } else
      ll(C) && (S.getters[P] = o ? (
        // @ts-expect-error
        s.getters[P]
      ) : C, Is && (D._getters || // @ts-expect-error: same
      (D._getters = es([]))).push(P));
  }
  if (ue(v, D), ue(J(v), D), Object.defineProperty(v, "$state", {
    get: () => i ? m.value : n.state.value[e],
    set: (P) => {
      if (i)
        throw new Error("cannot set hotState");
      k((C) => {
        ue(C, P);
      });
    }
  }), v._hotUpdate = es((P) => {
    v._hotUpdating = !0, P._hmrPayload.state.forEach((C) => {
      if (C in v.$state) {
        const B = P.$state[C], rt = v.$state[C];
        typeof B == "object" && Fs(B) && Fs(rt) ? Ku(B, rt) : P.$state[C] = rt;
      }
      pi(v, C, Ii(P.$state, C));
    }), Object.keys(v.$state).forEach((C) => {
      C in P.$state || zo(v, C);
    }), c = !1, u = !1, n.state.value[e] = Ii(P._hmrPayload, "hotState"), u = !0, Ls().then(() => {
      c = !0;
    });
    for (const C in P._hmrPayload.actions) {
      const B = P[C];
      pi(v, C, K(B, C));
    }
    for (const C in P._hmrPayload.getters) {
      const B = P._hmrPayload.getters[C], rt = o ? (
        // special handling of options api
        jt(() => (Yn(n), B.call(v, v)))
      ) : B;
      pi(v, C, rt);
    }
    Object.keys(v._hmrPayload.getters).forEach((C) => {
      C in P._hmrPayload.getters || zo(v, C);
    }), Object.keys(v._hmrPayload.actions).forEach((C) => {
      C in P._hmrPayload.actions || zo(v, C);
    }), v._hmrPayload = P._hmrPayload, v._getters = P._getters, v._hotUpdating = !1;
  }), Is) {
    const P = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((C) => {
      Object.defineProperty(v, C, ue({ value: v[C] }, P));
    });
  }
  return n._p.forEach((P) => {
    if (Is) {
      const C = r.run(() => P({
        store: v,
        app: n._a,
        pinia: n,
        options: a
      }));
      Object.keys(C || {}).forEach((B) => v._customProperties.add(B)), ue(v, C);
    } else
      ue(v, r.run(() => P({
        store: v,
        app: n._a,
        pinia: n,
        options: a
      })));
  }), v.$state && typeof v.$state == "object" && typeof v.$state.constructor == "function" && !v.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${v.$id}".`), _ && o && s.hydrate && s.hydrate(v.$state, _), c = !0, u = !0, v;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wg(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  n = e, i = o ? s : t;
  function r(a, l) {
    const c = vh();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? En(Fu, null) : null), a && Yn(a), !mr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = mr, a._s.has(n) || (o ? br(n, t, i, a) : cl(n, i, a), r._pinia = a);
    const u = a._s.get(n);
    if (l) {
      const f = "__hot:" + n, d = o ? br(f, t, i, a, !0) : cl(f, ue({}, i), a, !0);
      l._hotUpdate(d), delete a.state.value[f], a._s.delete(f);
    }
    if (Is) {
      const f = Oo();
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
function Sg(e) {
  {
    const t = J(e), s = {};
    for (const n in t) {
      const i = t[n];
      i.effect ? s[n] = // ...
      jt({
        get: () => e[n],
        set(o) {
          e[n] = o;
        }
      }) : (mt(i) || ge(i)) && (s[n] = // ---
      Ii(e, n));
    }
    return s;
  }
}
function gi() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function Yu(e) {
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
function kg(e) {
  return "logic" in e && "rules" in e;
}
const Qr = /* @__PURE__ */ wg("table", () => {
  const e = gt([]), t = gt([]), s = gt(!1), n = gt(null), i = gt([
    {
      id: "table",
      name: "任务管理表",
      type: "table",
      icon: "Table",
      fields: e.value.map((I) => I.id),
      filters: { id: gi(), logic: "and", rules: [] },
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
      fields: e.value.map((I) => I.id),
      filters: { id: gi(), logic: "and", rules: [] },
      sorts: []
    }
  ]), o = gt({ id: "root", logic: "and", rules: [] }), r = gt("table"), a = gt([]), l = gt(null), c = gt([]), u = gt("priority"), f = jt(() => {
    var I;
    return ((I = i.value) == null ? void 0 : I.find((b) => b.id === r.value)) || null;
  }), d = jt(() => (e.value || []).filter((I) => I.visible)), h = jt(() => {
    let I = [...t.value];
    return o.value && Array.isArray(o.value.rules) && o.value.rules.length > 0 && (I = I.filter((b) => C(b, o.value))), c.value && c.value.length > 0 && I.sort((b, O) => {
      for (const V of c.value) {
        const st = b[V.fieldId], kt = O[V.fieldId];
        let $t = 0;
        if (st < kt ? $t = -1 : st > kt && ($t = 1), $t !== 0)
          return V.direction === "desc" ? -$t : $t;
      }
      return 0;
    }), I;
  }), _ = (I) => {
    o.value = I;
  }, m = (I) => {
    o.value = I || { id: "root", logic: "and", rules: [] };
  }, y = jt(() => {
    var V;
    if (!u.value) return [];
    const I = /* @__PURE__ */ new Map();
    (V = e.value) == null || V.find((st) => st.id === u.value), h.value && h.value.forEach((st) => {
      const kt = st[u.value] || "未分组";
      I.has(kt) || I.set(kt, []), I.get(kt).push(st);
    });
    const b = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#a8e6cf", "#ff8b94"];
    let O = 0;
    return Array.from(I.entries()).map(([st, kt]) => ({
      key: st,
      label: st,
      color: b[O++ % b.length],
      records: kt,
      expanded: !0
    }));
  }), k = async (I) => {
    s.value = !0, n.value = null;
    const b = `http://127.0.0.1:5000/api/shared-data/${I}`;
    try {
      const O = await fetch(b);
      if (!O.ok)
        throw new Error(`网络请求失败，状态码: ${O.status}`);
      const V = await O.json();
      e.value = V.fields, t.value = V.records;
    } catch (O) {
      const V = O instanceof Error ? O.message : "发生未知错误";
      console.error("从 Flask API 获取数据失败:", V), n.value = V;
    } finally {
      s.value = !1;
    }
  }, R = (I = {}) => {
    try {
      const b = {
        id: gi(),
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
        ...I
      };
      return t.value.push(b), vt(), b;
    } catch (b) {
      return console.error("添加记录失败:", b), null;
    }
  }, z = (I, b) => {
    var O;
    try {
      const V = ((O = t.value) == null ? void 0 : O.findIndex((st) => st.id === I)) ?? -1;
      V !== -1 && (t.value[V] = {
        ...t.value[V],
        ...b,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }, vt());
    } catch (V) {
      console.error("更新记录失败:", V);
    }
  }, K = (I) => {
    var b;
    try {
      const O = ((b = t.value) == null ? void 0 : b.findIndex((V) => V.id === I)) ?? -1;
      O !== -1 && (t.value.splice(O, 1), a.value = a.value.filter((V) => V !== I), vt());
    } catch (O) {
      console.error("删除记录失败:", O);
    }
  }, S = (I) => {
    try {
      const b = {
        id: gi(),
        ...I
      };
      return e.value.push(b), vt(), b;
    } catch (b) {
      return console.error("添加字段失败:", b), null;
    }
  }, U = (I, b) => {
    var O;
    try {
      const V = ((O = e.value) == null ? void 0 : O.findIndex((st) => st.id === I)) ?? -1;
      V !== -1 && (e.value[V] = { ...e.value[V], ...b }, vt());
    } catch (V) {
      console.error("更新字段失败:", V);
    }
  }, v = (I) => {
    var b, O;
    try {
      const V = ((b = e.value) == null ? void 0 : b.findIndex((st) => st.id === I)) ?? -1;
      V !== -1 && (e.value.splice(V, 1), (O = t.value) == null || O.forEach((st) => {
        delete st[I];
      }), vt());
    } catch (V) {
      console.error("删除字段失败:", V);
    }
  }, x = (I, b) => {
    try {
      if (!e.value || I < 0 || b < 0 || I >= e.value.length || b >= e.value.length)
        return;
      const O = e.value.splice(I, 1)[0];
      e.value.splice(b, 0, O), vt();
    } catch (O) {
      console.error("重排字段失败:", O);
    }
  }, D = (I, b, O) => {
    var V, st;
    try {
      if (O) {
        const kt = (V = y.value) == null ? void 0 : V.find(($t) => $t.key === O);
        if (kt && kt.records) {
          const $t = kt.records.splice(I, 1)[0];
          kt.records.splice(b, 0, $t);
          const Ct = ((st = t.value) == null ? void 0 : st.findIndex((Yt) => Yt.id === $t.id)) ?? -1;
          Ct !== -1 && (t.value.splice(Ct, 1), t.value.splice(b, 0, $t));
        }
      } else {
        if (!t.value || I < 0 || b < 0 || I >= t.value.length || b >= t.value.length)
          return;
        const kt = t.value.splice(I, 1)[0];
        t.value.splice(b, 0, kt);
      }
      vt();
    } catch (kt) {
      console.error("重排记录失败:", kt);
    }
  }, P = (I, b) => {
    const O = I[b.fieldId], V = b.value;
    switch (b.operator) {
      case "equals":
        return O === V;
      case "not_equals":
        return O !== V;
      case "contains":
        return String(O).toLowerCase().includes(String(V).toLowerCase());
      case "not_contains":
        return !String(O).toLowerCase().includes(String(V).toLowerCase());
      case "starts_with":
        return String(O).toLowerCase().startsWith(String(V).toLowerCase());
      case "ends_with":
        return String(O).toLowerCase().endsWith(String(V).toLowerCase());
      case "is_empty":
        return O == null || O === "";
      case "is_not_empty":
        return O != null && O !== "";
      case "greater_than":
        return Number(O) > Number(V);
      case "less_than":
        return Number(O) < Number(V);
      case "greater_equal":
        return Number(O) >= Number(V);
      case "less_equal":
        return Number(O) <= Number(V);
      default:
        return !0;
    }
  }, C = (I, b) => {
    const O = (V) => kg(V) ? C(I, V) : P(I, V);
    return b.logic === "and" ? b.rules.every(O) : b.logic === "or" ? b.rules.some(O) : !0;
  }, B = (I) => {
    c.value = I || [];
  }, rt = (I) => {
    u.value = I;
  }, Tt = (I) => {
    var b;
    try {
      r.value = I;
      const O = (b = i.value) == null ? void 0 : b.find((V) => V.id === I);
      O && (o.value = O.filters || { id: "root", logic: "and", rules: [] }, c.value = O.sorts || [], u.value = O.groupBy || null);
    } catch (O) {
      console.error("切换视图失败:", O);
    }
  }, it = (I) => {
    try {
      a.value || (a.value = []);
      const b = a.value.indexOf(I);
      b > -1 ? a.value.splice(b, 1) : a.value.push(I);
    } catch (b) {
      console.error("切换记录选择失败:", b);
    }
  }, ot = () => {
    var I;
    try {
      a.value = ((I = h.value) == null ? void 0 : I.map((b) => b.id)) || [];
    } catch (b) {
      console.error("全选记录失败:", b);
    }
  }, G = () => {
    a.value = [];
  }, Z = (I, b) => {
    l.value = { recordId: I, fieldId: b };
  }, ct = () => {
    l.value = null;
  }, vt = () => {
    try {
      const I = {
        fields: e.value,
        records: t.value,
        views: i.value,
        currentViewId: r.value,
        filters: o.value,
        sorts: c.value,
        groupBy: u.value
      };
      localStorage.setItem("multidimensional-table-data", JSON.stringify(I));
    } catch (I) {
      console.error("保存到本地存储失败:", I);
    }
  };
  return {
    // 状态
    fields: e,
    records: t,
    views: i,
    currentViewId: r,
    selectedRecords: a,
    editingCell: l,
    filters: o,
    sorts: c,
    groupBy: u,
    // 计算属性
    currentView: f,
    visibleFields: d,
    filteredRecords: h,
    groupedRecords: y,
    // 方法
    fetchTableData: k,
    addRecord: R,
    updateRecord: z,
    deleteRecord: K,
    addField: S,
    updateField: U,
    deleteField: v,
    reorderFields: x,
    reorderRecords: D,
    updateFilters: m,
    updateSorts: B,
    updateGroupBy: rt,
    switchView: Tt,
    toggleRecordSelection: it,
    selectAllRecords: ot,
    clearSelection: G,
    startEditCell: Z,
    finishEditCell: ct,
    saveToStorage: vt,
    loadFromStorage: () => {
      try {
        const I = localStorage.getItem("multidimensional-table-data");
        if (I) {
          const b = JSON.parse(I);
          b.fields && (e.value = b.fields), b.records && (t.value = b.records), b.views && (i.value = b.views), b.currentViewId && (r.value = b.currentViewId), b.filters && (o.value = b.filters), b.sorts && (c.value = b.sorts), b.groupBy !== void 0 && (u.value = b.groupBy);
        }
      } catch (I) {
        console.error("从本地存储加载失败:", I);
      }
    },
    exportData: () => {
      try {
        const I = {
          fields: e.value,
          records: t.value,
          exportedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, b = new Blob([JSON.stringify(I, null, 2)], { type: "application/json" }), O = URL.createObjectURL(b), V = document.createElement("a");
        V.href = O, V.download = `table-data-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, V.click(), URL.revokeObjectURL(O);
      } catch (I) {
        console.error("导出数据失败:", I);
      }
    },
    setFilters: _,
    importData: (I) => {
      try {
        const b = JSON.parse(I);
        b.fields && (e.value = b.fields), b.records && (t.value = b.records), b.views && (i.value = b.views), b.currentViewId && (r.value = b.currentViewId), b.filters && (o.value = b.filters), b.sorts && (c.value = b.sorts), b.groupBy !== void 0 && (u.value = b.groupBy);
      } catch (b) {
        console.error("导入数据失败:", b);
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
var mi = {
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
const Og = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Re = (e, t) => ({ size: s, strokeWidth: n = 2, absoluteStrokeWidth: i, color: o, class: r, ...a }, { attrs: l, slots: c }) => en(
  "svg",
  {
    ...mi,
    width: s || mi.width,
    height: s || mi.height,
    stroke: o || mi.stroke,
    "stroke-width": i ? Number(n) * 24 / Number(s) : n,
    ...l,
    class: ["lucide", `lucide-${Og(e)}`],
    ...a
  },
  [
    ...t.map((u) => en(...u)),
    ...c.default ? [c.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = Re("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = Re("ExternalLinkIcon", [
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
const yr = Re("GripVerticalIcon", [
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
const Tg = Re("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = Re("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = Re("PhoneIcon", [
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
const ul = Re("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = Re("SquarePenIcon", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-vue-next v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = Re("Trash2Icon", [
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
const zi = Re("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Zr = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
};
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ci(e) {
  return e + 0.5 | 0;
}
const is = (e, t, s) => Math.max(Math.min(e, s), t);
function kn(e) {
  return is(ci(e * 2.55), 0, 255);
}
function ls(e) {
  return is(ci(e * 255), 0, 255);
}
function Ve(e) {
  return is(ci(e / 2.55) / 100, 0, 1);
}
function fl(e) {
  return is(ci(e * 100), 0, 100);
}
const ce = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, vr = [..."0123456789ABCDEF"], Ag = (e) => vr[e & 15], Rg = (e) => vr[(e & 240) >> 4] + vr[e & 15], _i = (e) => (e & 240) >> 4 === (e & 15), Lg = (e) => _i(e.r) && _i(e.g) && _i(e.b) && _i(e.a);
function $g(e) {
  var t = e.length, s;
  return e[0] === "#" && (t === 4 || t === 5 ? s = {
    r: 255 & ce[e[1]] * 17,
    g: 255 & ce[e[2]] * 17,
    b: 255 & ce[e[3]] * 17,
    a: t === 5 ? ce[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (s = {
    r: ce[e[1]] << 4 | ce[e[2]],
    g: ce[e[3]] << 4 | ce[e[4]],
    b: ce[e[5]] << 4 | ce[e[6]],
    a: t === 9 ? ce[e[7]] << 4 | ce[e[8]] : 255
  })), s;
}
const Fg = (e, t) => e < 255 ? t(e) : "";
function Ng(e) {
  var t = Lg(e) ? Ag : Rg;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Fg(e.a, t) : void 0;
}
const jg = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function qu(e, t, s) {
  const n = t * Math.min(s, 1 - s), i = (o, r = (o + e / 30) % 12) => s - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [i(0), i(8), i(4)];
}
function Vg(e, t, s) {
  const n = (i, o = (i + e / 60) % 6) => s - s * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Hg(e, t, s) {
  const n = qu(e, 1, 0.5);
  let i;
  for (t + s > 1 && (i = 1 / (t + s), t *= i, s *= i), i = 0; i < 3; i++)
    n[i] *= 1 - t - s, n[i] += t;
  return n;
}
function zg(e, t, s, n, i) {
  return e === i ? (t - s) / n + (t < s ? 6 : 0) : t === i ? (s - e) / n + 2 : (e - t) / n + 4;
}
function ta(e) {
  const s = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.max(s, n, i), r = Math.min(s, n, i), a = (o + r) / 2;
  let l, c, u;
  return o !== r && (u = o - r, c = a > 0.5 ? u / (2 - o - r) : u / (o + r), l = zg(s, n, i, u, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function ea(e, t, s, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, s, n)).map(ls);
}
function sa(e, t, s) {
  return ea(qu, e, t, s);
}
function Bg(e, t, s) {
  return ea(Hg, e, t, s);
}
function Ug(e, t, s) {
  return ea(Vg, e, t, s);
}
function Gu(e) {
  return (e % 360 + 360) % 360;
}
function Wg(e) {
  const t = jg.exec(e);
  let s = 255, n;
  if (!t)
    return;
  t[5] !== n && (s = t[6] ? kn(+t[5]) : ls(+t[5]));
  const i = Gu(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? n = Bg(i, o, r) : t[1] === "hsv" ? n = Ug(i, o, r) : n = sa(i, o, r), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: s
  };
}
function Kg(e, t) {
  var s = ta(e);
  s[0] = Gu(s[0] + t), s = sa(s), e.r = s[0], e.g = s[1], e.b = s[2];
}
function Yg(e) {
  if (!e)
    return;
  const t = ta(e), s = t[0], n = fl(t[1]), i = fl(t[2]);
  return e.a < 255 ? `hsla(${s}, ${n}%, ${i}%, ${Ve(e.a)})` : `hsl(${s}, ${n}%, ${i}%)`;
}
const dl = {
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
}, hl = {
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
function qg() {
  const e = {}, t = Object.keys(hl), s = Object.keys(dl);
  let n, i, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], i = 0; i < s.length; i++)
      o = s[i], a = a.replace(o, dl[o]);
    o = parseInt(hl[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let bi;
function Gg(e) {
  bi || (bi = qg(), bi.transparent = [0, 0, 0, 0]);
  const t = bi[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Xg = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Jg(e) {
  const t = Xg.exec(e);
  let s = 255, n, i, o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      s = t[8] ? kn(r) : is(r * 255, 0, 255);
    }
    return n = +t[1], i = +t[3], o = +t[5], n = 255 & (t[2] ? kn(n) : is(n, 0, 255)), i = 255 & (t[4] ? kn(i) : is(i, 0, 255)), o = 255 & (t[6] ? kn(o) : is(o, 0, 255)), {
      r: n,
      g: i,
      b: o,
      a: s
    };
  }
}
function Qg(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Ve(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Uo = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, Ws = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function Zg(e, t, s) {
  const n = Ws(Ve(e.r)), i = Ws(Ve(e.g)), o = Ws(Ve(e.b));
  return {
    r: ls(Uo(n + s * (Ws(Ve(t.r)) - n))),
    g: ls(Uo(i + s * (Ws(Ve(t.g)) - i))),
    b: ls(Uo(o + s * (Ws(Ve(t.b)) - o))),
    a: e.a + s * (t.a - e.a)
  };
}
function yi(e, t, s) {
  if (e) {
    let n = ta(e);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * s, t === 0 ? 360 : 1)), n = sa(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function Xu(e, t) {
  return e && Object.assign(t || {}, e);
}
function pl(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = ls(e[3]))) : (t = Xu(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = ls(t.a)), t;
}
function tm(e) {
  return e.charAt(0) === "r" ? Jg(e) : Wg(e);
}
class qn {
  constructor(t) {
    if (t instanceof qn)
      return t;
    const s = typeof t;
    let n;
    s === "object" ? n = pl(t) : s === "string" && (n = $g(t) || Gg(t) || tm(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Xu(this._rgb);
    return t && (t.a = Ve(t.a)), t;
  }
  set rgb(t) {
    this._rgb = pl(t);
  }
  rgbString() {
    return this._valid ? Qg(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ng(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Yg(this._rgb) : void 0;
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
    return t && (this._rgb = Zg(this._rgb, t._rgb, s)), this;
  }
  clone() {
    return new qn(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ls(t), this;
  }
  clearer(t) {
    const s = this._rgb;
    return s.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, s = ci(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return yi(this._rgb, 2, t), this;
  }
  darken(t) {
    return yi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return yi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return yi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Kg(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
const em = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function wt(e) {
  return e == null;
}
function Vt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ht(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function fe(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function we(e, t) {
  return fe(e) ? e : t;
}
function yt(e, t) {
  return typeof e > "u" ? t : e;
}
const sm = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Dt(e, t, s) {
  if (e && typeof e.call == "function")
    return e.apply(s, t);
}
function zt(e, t, s, n) {
  let i, o, r;
  if (Vt(e))
    for (o = e.length, i = 0; i < o; i++)
      t.call(s, e[i], i);
  else if (ht(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(s, e[r[i]], r[i]);
}
function gl(e, t) {
  let s, n, i, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (s = 0, n = e.length; s < n; ++s)
    if (i = e[s], o = t[s], i.datasetIndex !== o.datasetIndex || i.index !== o.index)
      return !1;
  return !0;
}
function lo(e) {
  if (Vt(e))
    return e.map(lo);
  if (ht(e)) {
    const t = /* @__PURE__ */ Object.create(null), s = Object.keys(e), n = s.length;
    let i = 0;
    for (; i < n; ++i)
      t[s[i]] = lo(e[s[i]]);
    return t;
  }
  return e;
}
function Ju(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function nm(e, t, s, n) {
  if (!Ju(e))
    return;
  const i = t[e], o = s[e];
  ht(i) && ht(o) ? Gn(i, o, n) : t[e] = lo(o);
}
function Gn(e, t, s) {
  const n = Vt(t) ? t : [
    t
  ], i = n.length;
  if (!ht(e))
    return e;
  s = s || {};
  const o = s.merger || nm;
  let r;
  for (let a = 0; a < i; ++a) {
    if (r = n[a], !ht(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], e, r, s);
  }
  return e;
}
function Rn(e, t) {
  return Gn(e, t, {
    merger: im
  });
}
function im(e, t, s) {
  if (!Ju(e))
    return;
  const n = t[e], i = s[e];
  ht(n) && ht(i) ? Rn(n, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = lo(i));
}
const ml = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function om(e) {
  const t = e.split("."), s = [];
  let n = "";
  for (const i of t)
    n += i, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (s.push(n), n = "");
  return s;
}
function rm(e) {
  const t = om(e);
  return (s) => {
    for (const n of t) {
      if (n === "")
        break;
      s = s && s[n];
    }
    return s;
  };
}
function co(e, t) {
  return (ml[t] || (ml[t] = rm(t)))(e);
}
function na(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const uo = (e) => typeof e < "u", us = (e) => typeof e == "function", _l = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const s of e)
    if (!t.has(s))
      return !1;
  return !0;
};
function am(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Qt = Math.PI, Ue = 2 * Qt, lm = Ue + Qt, fo = Number.POSITIVE_INFINITY, cm = Qt / 180, os = Qt / 2, hs = Qt / 4, bl = Qt * 2 / 3, Qu = Math.log10, nn = Math.sign;
function Ln(e, t, s) {
  return Math.abs(e - t) < s;
}
function yl(e) {
  const t = Math.round(e);
  e = Ln(e, t, e / 1e3) ? t : e;
  const s = Math.pow(10, Math.floor(Qu(e))), n = e / s;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * s;
}
function um(e) {
  const t = [], s = Math.sqrt(e);
  let n;
  for (n = 1; n < s; n++)
    e % n === 0 && (t.push(n), t.push(e / n));
  return s === (s | 0) && t.push(s), t.sort((i, o) => i - o).pop(), t;
}
function fm(e) {
  return typeof e == "symbol" || typeof e == "object" && e !== null && !(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e);
}
function Xn(e) {
  return !fm(e) && !isNaN(parseFloat(e)) && isFinite(e);
}
function dm(e, t) {
  const s = Math.round(e);
  return s - t <= e && s + t >= e;
}
function hm(e, t, s) {
  let n, i, o;
  for (n = 0, i = e.length; n < i; n++)
    o = e[n][s], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function xs(e) {
  return e * (Qt / 180);
}
function pm(e) {
  return e * (180 / Qt);
}
function vl(e) {
  if (!fe(e))
    return;
  let t = 1, s = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, s++;
  return s;
}
function gm(e, t) {
  const s = t.x - e.x, n = t.y - e.y, i = Math.sqrt(s * s + n * n);
  let o = Math.atan2(n, s);
  return o < -0.5 * Qt && (o += Ue), {
    angle: o,
    distance: i
  };
}
function xl(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function mm(e, t) {
  return (e - t + lm) % Ue - Qt;
}
function Ge(e) {
  return (e % Ue + Ue) % Ue;
}
function Zu(e, t, s, n) {
  const i = Ge(e), o = Ge(t), r = Ge(s), a = Ge(o - i), l = Ge(r - i), c = Ge(i - o), u = Ge(i - r);
  return i === o || i === r || n && o === r || a > l && c < u;
}
function De(e, t, s) {
  return Math.max(t, Math.min(s, e));
}
function _m(e) {
  return De(e, -32768, 32767);
}
function bm(e, t, s, n = 1e-6) {
  return e >= Math.min(t, s) - n && e <= Math.max(t, s) + n;
}
function ia(e, t, s) {
  s = s || ((r) => e[r] < t);
  let n = e.length - 1, i = 0, o;
  for (; n - i > 1; )
    o = i + n >> 1, s(o) ? i = o : n = o;
  return {
    lo: i,
    hi: n
  };
}
const ws = (e, t, s, n) => ia(e, s, n ? (i) => {
  const o = e[i][t];
  return o < s || o === s && e[i + 1][t] === s;
} : (i) => e[i][t] < s), ym = (e, t, s) => ia(e, s, (n) => e[n][t] >= s);
function vm(e, t, s) {
  let n = 0, i = e.length;
  for (; n < i && e[n] < t; )
    n++;
  for (; i > n && e[i - 1] > s; )
    i--;
  return n > 0 || i < e.length ? e.slice(n, i) : e;
}
const tf = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function xm(e, t) {
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
  }), tf.forEach((s) => {
    const n = "_onData" + na(s), i = e[s];
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
function wl(e, t) {
  const s = e._chartjs;
  if (!s)
    return;
  const n = s.listeners, i = n.indexOf(t);
  i !== -1 && n.splice(i, 1), !(n.length > 0) && (tf.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function wm(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const ef = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function sf(e, t) {
  let s = [], n = !1;
  return function(...i) {
    s = i, n || (n = !0, ef.call(window, () => {
      n = !1, e.apply(t, s);
    }));
  };
}
function Sm(e, t) {
  let s;
  return function(...n) {
    return t ? (clearTimeout(s), s = setTimeout(e, t, n)) : e.apply(this, n), t;
  };
}
const nf = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", $n = (e, t, s) => e === "start" ? t : e === "end" ? s : (t + s) / 2;
function km(e, t, s) {
  const n = t.length;
  let i = 0, o = n;
  if (e._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = e, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, u = r.axis, { min: f, max: d, minDefined: h, maxDefined: _ } = r.getUserBounds();
    if (h) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        ws(l, u, f).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? n : ws(t, u, r.getPixelForValue(f)).lo
      ), c) {
        const m = l.slice(0, i + 1).reverse().findIndex((y) => !wt(y[a.axis]));
        i -= Math.max(0, m);
      }
      i = De(i, 0, n - 1);
    }
    if (_) {
      let m = Math.max(
        // @ts-expect-error Need to type _parsed
        ws(l, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? 0 : ws(t, u, r.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const y = l.slice(m - 1).findIndex((k) => !wt(k[a.axis]));
        m += Math.max(0, y);
      }
      o = De(m, i, n) - i;
    } else
      o = n - i;
  }
  return {
    start: i,
    count: o
  };
}
function Om(e) {
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
const vi = (e) => e === 0 || e === 1, Sl = (e, t, s) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * Ue / s)), kl = (e, t, s) => Math.pow(2, -10 * e) * Math.sin((e - t) * Ue / s) + 1, Fn = {
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
  easeInSine: (e) => -Math.cos(e * os) + 1,
  easeOutSine: (e) => Math.sin(e * os),
  easeInOutSine: (e) => -0.5 * (Math.cos(Qt * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => vi(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => vi(e) ? e : Sl(e, 0.075, 0.3),
  easeOutElastic: (e) => vi(e) ? e : kl(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return vi(e) ? e : e < 0.5 ? 0.5 * Sl(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * kl(e * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (e) => 1 - Fn.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Fn.easeInBounce(e * 2) * 0.5 : Fn.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function oa(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Ol(e) {
  return oa(e) ? e : new qn(e);
}
function Wo(e) {
  return oa(e) ? e : new qn(e).saturate(0.5).darken(0.1).hexString();
}
const Mm = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Cm = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Tm(e) {
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
      properties: Cm
    },
    numbers: {
      type: "number",
      properties: Mm
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
function Dm(e) {
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
const Ml = /* @__PURE__ */ new Map();
function Pm(e, t) {
  t = t || {};
  const s = e + JSON.stringify(t);
  let n = Ml.get(s);
  return n || (n = new Intl.NumberFormat(e, t), Ml.set(s, n)), n;
}
function of(e, t, s) {
  return Pm(t, s).format(e);
}
const Im = {
  values(e) {
    return Vt(e) ? e : "" + e;
  },
  numeric(e, t, s) {
    if (e === 0)
      return "0";
    const n = this.chart.options.locale;
    let i, o = e;
    if (s.length > 1) {
      const c = Math.max(Math.abs(s[0].value), Math.abs(s[s.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), o = Em(e, s);
    }
    const r = Qu(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: i,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), of(e, n, l);
  }
};
function Em(e, t) {
  let s = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(s) >= 1 && e !== Math.floor(e) && (s = e - Math.floor(e)), s;
}
var rf = {
  formatters: Im
};
function Am(e) {
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
      callback: rf.formatters.values,
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
const Ns = /* @__PURE__ */ Object.create(null), xr = /* @__PURE__ */ Object.create(null);
function Nn(e, t) {
  if (!t)
    return e;
  const s = t.split(".");
  for (let n = 0, i = s.length; n < i; ++n) {
    const o = s[n];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Ko(e, t, s) {
  return typeof t == "string" ? Gn(Nn(e, t), s) : Gn(Nn(e, ""), t);
}
class Rm {
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
    }, this.hover = {}, this.hoverBackgroundColor = (n, i) => Wo(i.backgroundColor), this.hoverBorderColor = (n, i) => Wo(i.borderColor), this.hoverColor = (n, i) => Wo(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(s);
  }
  set(t, s) {
    return Ko(this, t, s);
  }
  get(t) {
    return Nn(this, t);
  }
  describe(t, s) {
    return Ko(xr, t, s);
  }
  override(t, s) {
    return Ko(Ns, t, s);
  }
  route(t, s, n, i) {
    const o = Nn(this, t), r = Nn(this, n), a = "_" + s;
    Object.defineProperties(o, {
      [a]: {
        value: o[s],
        writable: !0
      },
      [s]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[i];
          return ht(l) ? Object.assign({}, c, l) : yt(l, c);
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
var Pt = /* @__PURE__ */ new Rm({
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
  Tm,
  Dm,
  Am
]);
function Lm(e) {
  return !e || wt(e.size) || wt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Cl(e, t, s, n, i) {
  let o = t[i];
  return o || (o = t[i] = e.measureText(i).width, s.push(i)), o > n && (n = o), n;
}
function ps(e, t, s) {
  const n = e.currentDevicePixelRatio, i = s !== 0 ? Math.max(s / 2, 0.5) : 0;
  return Math.round((t - i) * n) / n + i;
}
function Tl(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function $m(e, t, s, n) {
  Fm(e, t, s, n);
}
function Fm(e, t, s, n, i) {
  let o, r, a, l, c, u, f, d;
  const h = t.pointStyle, _ = t.rotation, m = t.radius;
  let y = (_ || 0) * cm;
  if (h && typeof h == "object" && (o = h.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(s, n), e.rotate(y), e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), e.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch (e.beginPath(), h) {
      default:
        e.arc(s, n, m, 0, Ue), e.closePath();
        break;
      case "triangle":
        u = m, e.moveTo(s + Math.sin(y) * u, n - Math.cos(y) * m), y += bl, e.lineTo(s + Math.sin(y) * u, n - Math.cos(y) * m), y += bl, e.lineTo(s + Math.sin(y) * u, n - Math.cos(y) * m), e.closePath();
        break;
      case "rectRounded":
        c = m * 0.516, l = m - c, r = Math.cos(y + hs) * l, f = Math.cos(y + hs) * l, a = Math.sin(y + hs) * l, d = Math.sin(y + hs) * l, e.arc(s - f, n - a, c, y - Qt, y - os), e.arc(s + d, n - r, c, y - os, y), e.arc(s + f, n + a, c, y, y + os), e.arc(s - d, n + r, c, y + os, y + Qt), e.closePath();
        break;
      case "rect":
        if (!_) {
          l = Math.SQRT1_2 * m, u = l, e.rect(s - u, n - l, 2 * u, 2 * l);
          break;
        }
        y += hs;
      case "rectRot":
        f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + d, n - r), e.lineTo(s + f, n + a), e.lineTo(s - d, n + r), e.closePath();
        break;
      case "crossRot":
        y += hs;
      case "cross":
        f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r);
        break;
      case "star":
        f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r), y += hs, f = Math.cos(y) * m, r = Math.cos(y) * m, a = Math.sin(y) * m, d = Math.sin(y) * m, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r);
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
function Jn(e, t, s) {
  return s = s || 0.5, !t || e && e.x > t.left - s && e.x < t.right + s && e.y > t.top - s && e.y < t.bottom + s;
}
function af(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function lf(e) {
  e.restore();
}
function Nm(e, t, s, n, i) {
  if (!t)
    return e.lineTo(s.x, s.y);
  if (i === "middle") {
    const o = (t.x + s.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, s.y);
  } else i === "after" != !!n ? e.lineTo(t.x, s.y) : e.lineTo(s.x, t.y);
  e.lineTo(s.x, s.y);
}
function jm(e, t, s, n) {
  if (!t)
    return e.lineTo(s.x, s.y);
  e.bezierCurveTo(n ? t.cp1x : t.cp2x, n ? t.cp1y : t.cp2y, n ? s.cp2x : s.cp1x, n ? s.cp2y : s.cp1y, s.x, s.y);
}
function Vm(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), wt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Hm(e, t, s, n, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(n), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = s - o.actualBoundingBoxAscent, c = s + o.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(r, u), e.lineTo(a, u), e.stroke();
  }
}
function zm(e, t) {
  const s = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = s;
}
function wr(e, t, s, n, i, o = {}) {
  const r = Vt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, Vm(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && zm(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), wt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, s, n, o.maxWidth)), e.fillText(c, s, n, o.maxWidth), Hm(e, s, n, c, o), n += Number(i.lineHeight);
  e.restore();
}
const Bm = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Um = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Wm(e, t) {
  const s = ("" + e).match(Bm);
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
const Km = (e) => +e || 0;
function Ym(e, t) {
  const s = {}, n = ht(t), i = n ? Object.keys(t) : t, o = ht(e) ? n ? (r) => yt(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of i)
    s[r] = Km(o(r));
  return s;
}
function qm(e) {
  return Ym(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function on(e) {
  const t = qm(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Qn(e, t) {
  e = e || {}, t = t || Pt.font;
  let s = yt(e.size, t.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let n = yt(e.style, t.style);
  n && !("" + n).match(Um) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const i = {
    family: yt(e.family, t.family),
    lineHeight: Wm(yt(e.lineHeight, t.lineHeight), s),
    size: s,
    style: n,
    weight: yt(e.weight, t.weight),
    string: ""
  };
  return i.string = Lm(i), i;
}
function xi(e, t, s, n) {
  let i, o, r;
  for (i = 0, o = e.length; i < o; ++i)
    if (r = e[i], r !== void 0 && r !== void 0)
      return r;
}
function Gm(e, t, s) {
  const { min: n, max: i } = e, o = sm(t, (i - n) / 2), r = (a, l) => s && a === 0 ? 0 : a + l;
  return {
    min: r(n, -Math.abs(o)),
    max: r(i, o)
  };
}
function un(e, t) {
  return Object.assign(Object.create(e), t);
}
function ra(e, t = [
  ""
], s, n, i = () => e[0]) {
  const o = s || e;
  typeof n > "u" && (n = df("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: n,
    _getTarget: i,
    override: (a) => ra([
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
      return uf(a, l, () => n_(l, t, e, a));
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
      return Pl(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Pl(a);
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
function rn(e, t, s, n) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: s,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: cf(e, n),
    setContext: (o) => rn(e, o, s, n),
    override: (o) => rn(e.override(o), t, s, n)
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
      return uf(o, r, () => Jm(o, r, a));
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
function cf(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: s = t.scriptable, _indexable: n = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: s,
    indexable: n,
    isScriptable: us(s) ? s : () => s,
    isIndexable: us(n) ? n : () => n
  };
}
const Xm = (e, t) => e ? e + na(t) : t, aa = (e, t) => ht(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function uf(e, t, s) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const n = s();
  return e[t] = n, n;
}
function Jm(e, t, s) {
  const { _proxy: n, _context: i, _subProxy: o, _descriptors: r } = e;
  let a = n[t];
  return us(a) && r.isScriptable(t) && (a = Qm(t, a, e, s)), Vt(a) && a.length && (a = Zm(t, a, e, r.isIndexable)), aa(t, a) && (a = rn(a, i, o && o[t], r)), a;
}
function Qm(e, t, s, n) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = s;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let l = t(o, r || n);
  return a.delete(e), aa(e, l) && (l = la(i._scopes, i, e, l)), l;
}
function Zm(e, t, s, n) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = s;
  if (typeof o.index < "u" && n(e))
    return t[o.index % t.length];
  if (ht(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const f = la(c, i, e, u);
      t.push(rn(f, o, r && r[e], a));
    }
  }
  return t;
}
function ff(e, t, s) {
  return us(e) ? e(t, s) : e;
}
const t_ = (e, t) => e === !0 ? t : typeof e == "string" ? co(t, e) : void 0;
function e_(e, t, s, n, i) {
  for (const o of t) {
    const r = t_(s, o);
    if (r) {
      e.add(r);
      const a = ff(r._fallback, s, i);
      if (typeof a < "u" && a !== s && a !== n)
        return a;
    } else if (r === !1 && typeof n < "u" && s !== n)
      return null;
  }
  return !1;
}
function la(e, t, s, n) {
  const i = t._rootScopes, o = ff(t._fallback, s, n), r = [
    ...e,
    ...i
  ], a = /* @__PURE__ */ new Set();
  a.add(n);
  let l = Dl(a, r, s, o || s, n);
  return l === null || typeof o < "u" && o !== s && (l = Dl(a, r, o, l, n), l === null) ? !1 : ra(Array.from(a), [
    ""
  ], i, o, () => s_(t, s, n));
}
function Dl(e, t, s, n, i) {
  for (; s; )
    s = e_(e, t, s, n, i);
  return s;
}
function s_(e, t, s) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const i = n[t];
  return Vt(i) && ht(s) ? s : i || {};
}
function n_(e, t, s, n) {
  let i;
  for (const o of t)
    if (i = df(Xm(o, e), s), typeof i < "u")
      return aa(e, i) ? la(s, n, e, i) : i;
}
function df(e, t) {
  for (const s of t) {
    if (!s)
      continue;
    const n = s[e];
    if (typeof n < "u")
      return n;
  }
}
function Pl(e) {
  let t = e._keys;
  return t || (t = e._keys = i_(e._scopes)), t;
}
function i_(e) {
  const t = /* @__PURE__ */ new Set();
  for (const s of e)
    for (const n of Object.keys(s).filter((i) => !i.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
const o_ = Number.EPSILON || 1e-14, an = (e, t) => t < e.length && !e[t].skip && e[t], hf = (e) => e === "x" ? "y" : "x";
function r_(e, t, s, n) {
  const i = e.skip ? t : e, o = t, r = s.skip ? t : s, a = xl(o, i), l = xl(r, o);
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
function a_(e, t, s) {
  const n = e.length;
  let i, o, r, a, l, c = an(e, 0);
  for (let u = 0; u < n - 1; ++u)
    if (l = c, c = an(e, u + 1), !(!l || !c)) {
      if (Ln(t[u], 0, o_)) {
        s[u] = s[u + 1] = 0;
        continue;
      }
      i = s[u] / t[u], o = s[u + 1] / t[u], a = Math.pow(i, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), s[u] = i * r * t[u], s[u + 1] = o * r * t[u]);
    }
}
function l_(e, t, s = "x") {
  const n = hf(s), i = e.length;
  let o, r, a, l = an(e, 0);
  for (let c = 0; c < i; ++c) {
    if (r = a, a = l, l = an(e, c + 1), !a)
      continue;
    const u = a[s], f = a[n];
    r && (o = (u - r[s]) / 3, a[`cp1${s}`] = u - o, a[`cp1${n}`] = f - o * t[c]), l && (o = (l[s] - u) / 3, a[`cp2${s}`] = u + o, a[`cp2${n}`] = f + o * t[c]);
  }
}
function c_(e, t = "x") {
  const s = hf(t), n = e.length, i = Array(n).fill(0), o = Array(n);
  let r, a, l, c = an(e, 0);
  for (r = 0; r < n; ++r)
    if (a = l, l = c, c = an(e, r + 1), !!l) {
      if (c) {
        const u = c[t] - l[t];
        i[r] = u !== 0 ? (c[s] - l[s]) / u : 0;
      }
      o[r] = a ? c ? nn(i[r - 1]) !== nn(i[r]) ? 0 : (i[r - 1] + i[r]) / 2 : i[r - 1] : i[r];
    }
  a_(e, i, o), l_(e, o, t);
}
function wi(e, t, s) {
  return Math.max(Math.min(e, s), t);
}
function u_(e, t) {
  let s, n, i, o, r, a = Jn(e[0], t);
  for (s = 0, n = e.length; s < n; ++s)
    r = o, o = a, a = s < n - 1 && Jn(e[s + 1], t), o && (i = e[s], r && (i.cp1x = wi(i.cp1x, t.left, t.right), i.cp1y = wi(i.cp1y, t.top, t.bottom)), a && (i.cp2x = wi(i.cp2x, t.left, t.right), i.cp2y = wi(i.cp2y, t.top, t.bottom)));
}
function f_(e, t, s, n, i) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    c_(e, i);
  else {
    let c = n ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = r_(c, a, e[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && u_(e, s);
}
function ca() {
  return typeof window < "u" && typeof document < "u";
}
function ua(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function ho(e, t, s) {
  let n;
  return typeof e == "string" ? (n = parseInt(e, 10), e.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[s])) : n = e, n;
}
const To = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function d_(e, t) {
  return To(e).getPropertyValue(t);
}
const h_ = [
  "top",
  "right",
  "bottom",
  "left"
];
function Es(e, t, s) {
  const n = {};
  s = s ? "-" + s : "";
  for (let i = 0; i < 4; i++) {
    const o = h_[i];
    n[o] = parseFloat(e[t + "-" + o + s]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const p_ = (e, t, s) => (e > 0 || t > 0) && (!s || !s.shadowRoot);
function g_(e, t) {
  const s = e.touches, n = s && s.length ? s[0] : e, { offsetX: i, offsetY: o } = n;
  let r = !1, a, l;
  if (p_(i, o, e.target))
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
function ys(e, t) {
  if ("native" in e)
    return e;
  const { canvas: s, currentDevicePixelRatio: n } = t, i = To(s), o = i.boxSizing === "border-box", r = Es(i, "padding"), a = Es(i, "border", "width"), { x: l, y: c, box: u } = g_(e, s), f = r.left + (u && a.left), d = r.top + (u && a.top);
  let { width: h, height: _ } = t;
  return o && (h -= r.width + a.width, _ -= r.height + a.height), {
    x: Math.round((l - f) / h * s.width / n),
    y: Math.round((c - d) / _ * s.height / n)
  };
}
function m_(e, t, s) {
  let n, i;
  if (t === void 0 || s === void 0) {
    const o = e && ua(e);
    if (!o)
      t = e.clientWidth, s = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = To(o), l = Es(a, "border", "width"), c = Es(a, "padding");
      t = r.width - c.width - l.width, s = r.height - c.height - l.height, n = ho(a.maxWidth, o, "clientWidth"), i = ho(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: s,
    maxWidth: n || fo,
    maxHeight: i || fo
  };
}
const Si = (e) => Math.round(e * 10) / 10;
function __(e, t, s, n) {
  const i = To(e), o = Es(i, "margin"), r = ho(i.maxWidth, e, "clientWidth") || fo, a = ho(i.maxHeight, e, "clientHeight") || fo, l = m_(e, t, s);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const d = Es(i, "border", "width"), h = Es(i, "padding");
    c -= h.width + d.width, u -= h.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, n ? c / n : u - o.height), c = Si(Math.min(c, r, l.maxWidth)), u = Si(Math.min(u, a, l.maxHeight)), c && !u && (u = Si(c / 2)), (t !== void 0 || s !== void 0) && n && l.height && u > l.height && (u = l.height, c = Si(Math.floor(u * n))), {
    width: c,
    height: u
  };
}
function Il(e, t, s) {
  const n = t || 1, i = Math.floor(e.height * n), o = Math.floor(e.width * n);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (s || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== n || r.height !== i || r.width !== o ? (e.currentDevicePixelRatio = n, r.height = i, r.width = o, e.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const b_ = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    ca() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function El(e, t) {
  const s = d_(e, t), n = s && s.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function vs(e, t, s, n) {
  return {
    x: e.x + s * (t.x - e.x),
    y: e.y + s * (t.y - e.y)
  };
}
function y_(e, t, s, n) {
  return {
    x: e.x + s * (t.x - e.x),
    y: n === "middle" ? s < 0.5 ? e.y : t.y : n === "after" ? s < 1 ? e.y : t.y : s > 0 ? t.y : e.y
  };
}
function v_(e, t, s, n) {
  const i = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = vs(e, i, s), a = vs(i, o, s), l = vs(o, t, s), c = vs(r, a, s), u = vs(a, l, s);
  return vs(c, u, s);
}
function pf(e) {
  return e === "angle" ? {
    between: Zu,
    compare: mm,
    normalize: Ge
  } : {
    between: bm,
    compare: (t, s) => t - s,
    normalize: (t) => t
  };
}
function Al({ start: e, end: t, count: s, loop: n, style: i }) {
  return {
    start: e % s,
    end: t % s,
    loop: n && (t - e + 1) % s === 0,
    style: i
  };
}
function x_(e, t, s) {
  const { property: n, start: i, end: o } = s, { between: r, normalize: a } = pf(n), l = t.length;
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
function w_(e, t, s) {
  if (!s)
    return [
      e
    ];
  const { property: n, start: i, end: o } = s, r = t.length, { compare: a, between: l, normalize: c } = pf(n), { start: u, end: f, loop: d, style: h } = x_(e, t, s), _ = [];
  let m = !1, y = null, k, R, z;
  const K = () => l(i, z, k) && a(i, z) !== 0, S = () => a(o, k) === 0 || l(o, z, k), U = () => m || K(), v = () => !m || S();
  for (let x = u, D = u; x <= f; ++x)
    R = t[x % r], !R.skip && (k = c(R[n]), k !== z && (m = l(k, i, o), y === null && U() && (y = a(k, i) === 0 ? x : D), y !== null && v() && (_.push(Al({
      start: y,
      end: x,
      loop: d,
      count: r,
      style: h
    })), y = null), D = x, z = k));
  return y !== null && _.push(Al({
    start: y,
    end: f,
    loop: d,
    count: r,
    style: h
  })), _;
}
function S_(e, t) {
  const s = [], n = e.segments;
  for (let i = 0; i < n.length; i++) {
    const o = w_(n[i], e.points, t);
    o.length && s.push(...o);
  }
  return s;
}
function k_(e, t, s, n) {
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
function O_(e, t, s, n) {
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
function M_(e, t) {
  const s = e.points, n = e.options.spanGaps, i = s.length;
  if (!i)
    return [];
  const o = !!e._loop, { start: r, end: a } = k_(s, i, o, n);
  if (n === !0)
    return Rl(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], s, t);
  const l = a < r ? a + i : a, c = !!e._fullLoop && r === 0 && a === i - 1;
  return Rl(e, O_(s, r, l, c), s, t);
}
function Rl(e, t, s, n) {
  return !n || !n.setContext || !s ? t : C_(e, t, s, n);
}
function C_(e, t, s, n) {
  const i = e._chart.getContext(), o = Ll(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = s.length, c = [];
  let u = o, f = t[0].start, d = f;
  function h(_, m, y, k) {
    const R = a ? -1 : 1;
    if (_ !== m) {
      for (_ += l; s[_ % l].skip; )
        _ -= R;
      for (; s[m % l].skip; )
        m += R;
      _ % l !== m % l && (c.push({
        start: _ % l,
        end: m % l,
        loop: y,
        style: k
      }), u = k, f = m % l);
    }
  }
  for (const _ of t) {
    f = a ? f : _.start;
    let m = s[f % l], y;
    for (d = f + 1; d <= _.end; d++) {
      const k = s[d % l];
      y = Ll(n.setContext(un(i, {
        type: "segment",
        p0: m,
        p1: k,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), T_(y, u) && h(f, d - 1, _.loop, u), m = k, u = y;
    }
    f < d - 1 && h(f, d - 1, _.loop, u);
  }
  return c;
}
function Ll(e) {
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
function T_(e, t) {
  if (!t)
    return !1;
  const s = [], n = function(i, o) {
    return oa(o) ? (s.includes(o) || s.push(o), s.indexOf(o)) : o;
  };
  return JSON.stringify(e, n) !== JSON.stringify(t, n);
}
function ki(e, t, s) {
  return e.options.clip ? e[s] : t[s];
}
function D_(e, t) {
  const { xScale: s, yScale: n } = e;
  return s && n ? {
    left: ki(s, t, "left"),
    right: ki(s, t, "right"),
    top: ki(n, t, "top"),
    bottom: ki(n, t, "bottom")
  } : t;
}
function P_(e, t) {
  const s = t._clip;
  if (s.disabled)
    return !1;
  const n = D_(t, e.chartArea);
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
class I_ {
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
    this._request || (this._running = !0, this._request = ef.call(window, () => {
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
var Fe = /* @__PURE__ */ new I_();
const $l = "transparent", E_ = {
  boolean(e, t, s) {
    return s > 0.5 ? t : e;
  },
  color(e, t, s) {
    const n = Ol(e || $l), i = n.valid && Ol(t || $l);
    return i && i.valid ? i.mix(n, s).hexString() : t;
  },
  number(e, t, s) {
    return e + (t - e) * s;
  }
};
class A_ {
  constructor(t, s, n, i) {
    const o = s[n];
    i = xi([
      t.to,
      i,
      o,
      t.from
    ]);
    const r = xi([
      t.from,
      o,
      i
    ]);
    this._active = !0, this._fn = t.fn || E_[t.type || typeof r], this._easing = Fn[t.easing] || Fn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = s, this._prop = n, this._from = r, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, s, n) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], o = n - this._start, r = this._duration - o;
      this._start = n, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = xi([
        t.to,
        s,
        i,
        t.from
      ]), this._from = xi([
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
class R_ {
  constructor(t, s) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(s);
  }
  configure(t) {
    if (!ht(t))
      return;
    const s = Object.keys(Pt.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!ht(o))
        return;
      const r = {};
      for (const a of s)
        r[a] = o[a];
      (Vt(o.properties) && o.properties || [
        i
      ]).forEach((a) => {
        (a === i || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, s) {
    const n = s.options, i = $_(t, n);
    if (!i)
      return [];
    const o = this._createAnimations(i, n);
    return n.$shared && L_(t.options.$animations, n).then(() => {
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
      o[c] = f = new A_(d, t, c, u), i.push(f);
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
      return Fe.add(this._chart, n), !0;
  }
}
function L_(e, t) {
  const s = [], n = Object.keys(t);
  for (let i = 0; i < n.length; i++) {
    const o = e[n[i]];
    o && o.active() && s.push(o.wait());
  }
  return Promise.all(s);
}
function $_(e, t) {
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
function Fl(e, t) {
  const s = e && e.options || {}, n = s.reverse, i = s.min === void 0 ? t : 0, o = s.max === void 0 ? t : 0;
  return {
    start: n ? o : i,
    end: n ? i : o
  };
}
function F_(e, t, s) {
  if (s === !1)
    return !1;
  const n = Fl(e, s), i = Fl(t, s);
  return {
    top: i.end,
    right: n.end,
    bottom: i.start,
    left: n.start
  };
}
function N_(e) {
  let t, s, n, i;
  return ht(e) ? (t = e.top, s = e.right, n = e.bottom, i = e.left) : t = s = n = i = e, {
    top: t,
    right: s,
    bottom: n,
    left: i,
    disabled: e === !1
  };
}
function gf(e, t) {
  const s = [], n = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = n.length; i < o; ++i)
    s.push(n[i].index);
  return s;
}
function Nl(e, t, s, n = {}) {
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
    c = e.values[l], fe(c) && (o || t === 0 || nn(t) === nn(c)) && (t += c);
  }
  return !u && !n.all ? 0 : t;
}
function j_(e, t) {
  const { iScale: s, vScale: n } = t, i = s.axis === "x" ? "x" : "y", o = n.axis === "x" ? "x" : "y", r = Object.keys(e), a = new Array(r.length);
  let l, c, u;
  for (l = 0, c = r.length; l < c; ++l)
    u = r[l], a[l] = {
      [i]: u,
      [o]: e[u]
    };
  return a;
}
function Yo(e, t) {
  const s = e && e.options.stacked;
  return s || s === void 0 && t.stack !== void 0;
}
function V_(e, t, s) {
  return `${e.id}.${t.id}.${s.stack || s.type}`;
}
function H_(e) {
  const { min: t, max: s, minDefined: n, maxDefined: i } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: i ? s : Number.POSITIVE_INFINITY
  };
}
function z_(e, t, s) {
  const n = e[t] || (e[t] = {});
  return n[s] || (n[s] = {});
}
function jl(e, t, s, n) {
  for (const i of t.getMatchingVisibleMetas(n).reverse()) {
    const o = e[i.index];
    if (s && o > 0 || !s && o < 0)
      return i.index;
  }
  return null;
}
function Vl(e, t) {
  const { chart: s, _cachedMeta: n } = e, i = s._stacks || (s._stacks = {}), { iScale: o, vScale: r, index: a } = n, l = o.axis, c = r.axis, u = V_(o, r, n), f = t.length;
  let d;
  for (let h = 0; h < f; ++h) {
    const _ = t[h], { [l]: m, [c]: y } = _, k = _._stacks || (_._stacks = {});
    d = k[c] = z_(i, u, m), d[a] = y, d._top = jl(d, r, !0, n.type), d._bottom = jl(d, r, !1, n.type);
    const R = d._visualValues || (d._visualValues = {});
    R[a] = y;
  }
}
function qo(e, t) {
  const s = e.scales;
  return Object.keys(s).filter((n) => s[n].axis === t).shift();
}
function B_(e, t) {
  return un(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function U_(e, t, s) {
  return un(e, {
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
function _n(e, t) {
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
const Go = (e) => e === "reset" || e === "none", Hl = (e, t) => t ? e : Object.assign({}, e), W_ = (e, t, s) => e && !t.hidden && t._stacked && {
  keys: gf(s, !0),
  values: null
};
class jn {
  constructor(t, s) {
    this.chart = t, this._ctx = t.ctx, this.index = s, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Yo(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && _n(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, s = this._cachedMeta, n = this.getDataset(), i = (f, d, h, _) => f === "x" ? d : f === "r" ? _ : h, o = s.xAxisID = yt(n.xAxisID, qo(t, "x")), r = s.yAxisID = yt(n.yAxisID, qo(t, "y")), a = s.rAxisID = yt(n.rAxisID, qo(t, "r")), l = s.indexAxis, c = s.iAxisID = i(l, o, r, a), u = s.vAxisID = i(l, r, o, a);
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
    this._data && wl(this._data, this), t._stacked && _n(t);
  }
  _dataCheck() {
    const t = this.getDataset(), s = t.data || (t.data = []), n = this._data;
    if (ht(s)) {
      const i = this._cachedMeta;
      this._data = j_(s, i);
    } else if (n !== s) {
      if (n) {
        wl(n, this);
        const i = this._cachedMeta;
        _n(i), i._parsed = [];
      }
      s && Object.isExtensible(s) && xm(s, this), this._syncList = [], this._data = s;
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
    s._stacked = Yo(s.vScale, s), s.stack !== n.stack && (i = !0, _n(s), s.stack = n.stack), this._resyncElements(t), (i || o !== s._stacked) && (Vl(this, s._parsed), s._stacked = Yo(s.vScale, s));
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
      Vt(i[t]) ? d = this.parseArrayData(n, i, t, s) : ht(i[t]) ? d = this.parseObjectData(n, i, t, s) : d = this.parsePrimitiveData(n, i, t, s);
      const h = () => f[a] === null || c && f[a] < c[a];
      for (u = 0; u < s; ++u)
        n._parsed[u + t] = f = d[u], l && (h() && (l = !1), c = f);
      n._sorted = l;
    }
    r && Vl(this, d);
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
        x: o.parse(co(h, a), d),
        y: r.parse(co(h, l), d)
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
      keys: gf(i, !0),
      values: s._stacks[t.axis]._visualValues
    };
    return Nl(a, r, o.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, s, n, i) {
    const o = n[s.axis];
    let r = o === null ? NaN : o;
    const a = i && n._stacks[s.axis];
    i && a && (i.values = a, r = Nl(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, s) {
    const n = this._cachedMeta, i = n._parsed, o = n._sorted && t === n.iScale, r = i.length, a = this._getOtherScale(t), l = W_(s, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: f } = H_(a);
    let d, h;
    function _() {
      h = i[d];
      const m = h[a.axis];
      return !fe(h[t.axis]) || u > m || f < m;
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
      r = s[i][t.axis], fe(r) && n.push(r);
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
    this.update(t || "default"), s._clip = N_(yt(this.options.clip, F_(s.xScale, s.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = U_(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = B_(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
    return o.active = !!s, o.mode = n, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, s) {
    return this._resolveElementOptions(this.dataElementType.id, s, t);
  }
  _resolveElementOptions(t, s = "default", n) {
    const i = s === "active", o = this._cachedDataOpts, r = t + "-" + s, a = o[r], l = this.enableOptionSharing && uo(n);
    if (a)
      return Hl(a, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), f = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), h = Object.keys(Pt.elements[t]), _ = () => this.getContext(n, i, s), m = c.resolveNamedOptions(d, h, _, f);
    return m.$shared && (m.$shared = l, o[r] = Object.freeze(Hl(m, l))), m;
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
    const c = new R_(i, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, s) {
    return !s || Go(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, s) {
    const n = this.resolveDataElementOptions(t, s), i = this._sharedOptions, o = this.getSharedOptions(n), r = this.includeOptions(s, o) || o !== i;
    return this.updateSharedOptions(o, s, n), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, s, n, i) {
    Go(i) ? Object.assign(t, n) : this._resolveAnimations(s, i).update(t, n);
  }
  updateSharedOptions(t, s, n) {
    t && !Go(s) && this._resolveAnimations(void 0, s).update(t, n);
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
      n._stacked && _n(n, i);
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
nt(jn, "defaults", {}), nt(jn, "datasetElementType", null), nt(jn, "dataElementType", null);
class Vn extends jn {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const s = this._cachedMeta, { dataset: n, data: i = [], _dataset: o } = s, r = this.chart._animationsDisabled;
    let { start: a, count: l } = km(s, i, r);
    this._drawStart = a, this._drawCount = l, Om(s) && (a = 0, l = i.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(n, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(i, a, l, t);
  }
  updateElements(t, s, n, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: f } = this._getSharedOptions(s, i), d = r.axis, h = a.axis, { spanGaps: _, segment: m } = this.options, y = Xn(_) ? _ : Number.POSITIVE_INFINITY, k = this.chart._animationsDisabled || o || i === "none", R = s + n, z = t.length;
    let K = s > 0 && this.getParsed(s - 1);
    for (let S = 0; S < z; ++S) {
      const U = t[S], v = k ? U : {};
      if (S < s || S >= R) {
        v.skip = !0;
        continue;
      }
      const x = this.getParsed(S), D = wt(x[h]), P = v[d] = r.getPixelForValue(x[d], S), C = v[h] = o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, x, l) : x[h], S);
      v.skip = isNaN(P) || isNaN(C) || D, v.stop = S > 0 && Math.abs(x[d] - K[d]) > y, m && (v.parsed = x, v.raw = c.data[S]), f && (v.options = u || this.resolveDataElementOptions(S, U.active ? "active" : i)), k || this.updateElement(U, S, v, i), K = x;
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
nt(Vn, "id", "line"), nt(Vn, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), nt(Vn, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
function gs() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class fa {
  constructor(t) {
    nt(this, "options");
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
    Object.assign(fa.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return gs();
  }
  parse() {
    return gs();
  }
  format() {
    return gs();
  }
  add() {
    return gs();
  }
  diff() {
    return gs();
  }
  startOf() {
    return gs();
  }
  endOf() {
    return gs();
  }
}
var K_ = {
  _date: fa
};
function Y_(e, t, s, n) {
  const { controller: i, data: o, _sorted: r } = e, a = i._cachedMeta.iScale, l = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? ym : ws;
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
        const { vScale: f } = i._cachedMeta, { _parsed: d } = e, h = d.slice(0, u.lo + 1).reverse().findIndex((m) => !wt(m[f.axis]));
        u.lo -= Math.max(0, h);
        const _ = d.slice(u.hi).findIndex((m) => !wt(m[f.axis]));
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
function Do(e, t, s, n, i) {
  const o = e.getSortedVisibleDatasetMetas(), r = s[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: u } = o[a], { lo: f, hi: d } = Y_(o[a], t, r, i);
    for (let h = f; h <= d; ++h) {
      const _ = u[h];
      _.skip || n(_, c, h);
    }
  }
}
function q_(e) {
  const t = e.indexOf("x") !== -1, s = e.indexOf("y") !== -1;
  return function(n, i) {
    const o = t ? Math.abs(n.x - i.x) : 0, r = s ? Math.abs(n.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Xo(e, t, s, n, i) {
  const o = [];
  return !i && !e.isPointInArea(t) || Do(e, s, t, function(a, l, c) {
    !i && !Jn(a, e.chartArea, 0) || a.inRange(t.x, t.y, n) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function G_(e, t, s, n) {
  let i = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: u } = r.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: f } = gm(r, {
      x: t.x,
      y: t.y
    });
    Zu(f, c, u) && i.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Do(e, s, t, o), i;
}
function X_(e, t, s, n, i, o) {
  let r = [];
  const a = q_(s);
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
  return Do(e, s, t, c), r;
}
function Jo(e, t, s, n, i, o) {
  return !o && !e.isPointInArea(t) ? [] : s === "r" && !n ? G_(e, t, s, i) : X_(e, t, s, n, i, o);
}
function zl(e, t, s, n, i) {
  const o = [], r = s === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Do(e, s, t, (l, c, u) => {
    l[r] && l[r](t[s], i) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), a = a || l.inRange(t.x, t.y, i));
  }), n && !a ? [] : o;
}
var J_ = {
  modes: {
    index(e, t, s, n) {
      const i = ys(t, e), o = s.axis || "x", r = s.includeInvisible || !1, a = s.intersect ? Xo(e, i, o, n, r) : Jo(e, i, o, !1, n, r), l = [];
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
      const i = ys(t, e), o = s.axis || "xy", r = s.includeInvisible || !1;
      let a = s.intersect ? Xo(e, i, o, n, r) : Jo(e, i, o, !1, n, r);
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
      const i = ys(t, e), o = s.axis || "xy", r = s.includeInvisible || !1;
      return Xo(e, i, o, n, r);
    },
    nearest(e, t, s, n) {
      const i = ys(t, e), o = s.axis || "xy", r = s.includeInvisible || !1;
      return Jo(e, i, o, s.intersect, n, r);
    },
    x(e, t, s, n) {
      const i = ys(t, e);
      return zl(e, i, "x", s.intersect, n);
    },
    y(e, t, s, n) {
      const i = ys(t, e);
      return zl(e, i, "y", s.intersect, n);
    }
  }
};
const mf = [
  "left",
  "top",
  "right",
  "bottom"
];
function bn(e, t) {
  return e.filter((s) => s.pos === t);
}
function Bl(e, t) {
  return e.filter((s) => mf.indexOf(s.pos) === -1 && s.box.axis === t);
}
function yn(e, t) {
  return e.sort((s, n) => {
    const i = t ? n : s, o = t ? s : n;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function Q_(e) {
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
function Z_(e) {
  const t = {};
  for (const s of e) {
    const { stack: n, pos: i, stackWeight: o } = s;
    if (!n || !mf.includes(i))
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
function tb(e, t) {
  const s = Z_(e), { vBoxMaxWidth: n, hBoxMaxHeight: i } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = s[a.stack], u = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = u ? u * n : l && t.availableWidth, a.height = i) : (a.width = n, a.height = u ? u * i : l && t.availableHeight);
  }
  return s;
}
function eb(e) {
  const t = Q_(e), s = yn(t.filter((c) => c.box.fullSize), !0), n = yn(bn(t, "left"), !0), i = yn(bn(t, "right")), o = yn(bn(t, "top"), !0), r = yn(bn(t, "bottom")), a = Bl(t, "x"), l = Bl(t, "y");
  return {
    fullSize: s,
    leftAndTop: n.concat(o),
    rightAndBottom: i.concat(l).concat(r).concat(a),
    chartArea: bn(t, "chartArea"),
    vertical: n.concat(i).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Ul(e, t, s, n) {
  return Math.max(e[s], t[s]) + Math.max(e[n], t[n]);
}
function _f(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function sb(e, t, s, n) {
  const { pos: i, box: o } = s, r = e.maxPadding;
  if (!ht(i)) {
    s.size && (e[i] -= s.size);
    const f = n[s.stack] || {
      size: 0,
      count: 1
    };
    f.size = Math.max(f.size, s.horizontal ? o.height : o.width), s.size = f.size / f.count, e[i] += s.size;
  }
  o.getPadding && _f(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Ul(r, e, "left", "right")), l = Math.max(0, t.outerHeight - Ul(r, e, "top", "bottom")), c = a !== e.w, u = l !== e.h;
  return e.w = a, e.h = l, s.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function nb(e) {
  const t = e.maxPadding;
  function s(n) {
    const i = Math.max(t[n] - e[n], 0);
    return e[n] += i, i;
  }
  e.y += s("top"), e.x += s("left"), s("right"), s("bottom");
}
function ib(e, t) {
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
function On(e, t, s, n) {
  const i = [];
  let o, r, a, l, c, u;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, ib(a.horizontal, t));
    const { same: f, other: d } = sb(t, s, a, n);
    c |= f && i.length, u = u || d, l.fullSize || i.push(a);
  }
  return c && On(i, t, s, n) || u;
}
function Oi(e, t, s, n, i) {
  e.top = s, e.left = t, e.right = t + n, e.bottom = s + i, e.width = n, e.height = i;
}
function Wl(e, t, s, n) {
  const i = s.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = n[a.stack] || {
      placed: 0,
      weight: 1
    }, u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const f = t.w * u, d = c.size || l.height;
      uo(c.start) && (r = c.start), l.fullSize ? Oi(l, i.left, r, s.outerWidth - i.right - i.left, d) : Oi(l, t.left + c.placed, r, f, d), c.start = r, c.placed += f, r = l.bottom;
    } else {
      const f = t.h * u, d = c.size || l.width;
      uo(c.start) && (o = c.start), l.fullSize ? Oi(l, o, i.top, d, s.outerHeight - i.bottom - i.top) : Oi(l, o, t.top + c.placed, d, f), c.start = o, c.placed += f, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var rs = {
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
    const i = on(e.options.layout.padding), o = Math.max(t - i.width, 0), r = Math.max(s - i.height, 0), a = eb(e.boxes), l = a.vertical, c = a.horizontal;
    zt(e.boxes, (m) => {
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
    _f(d, on(n));
    const h = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), _ = tb(l.concat(c), f);
    On(a.fullSize, h, f, _), On(l, h, f, _), On(c, h, f, _) && On(l, h, f, _), nb(h), Wl(a.leftAndTop, h, f, _), h.x += h.w, h.y += h.h, Wl(a.rightAndBottom, h, f, _), e.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, zt(a.chartArea, (m) => {
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
class bf {
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
class ob extends bf {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Bi = "$chartjs", rb = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Kl = (e) => e === null || e === "";
function ab(e, t) {
  const s = e.style, n = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[Bi] = {
    initial: {
      height: n,
      width: i,
      style: {
        display: s.display,
        height: s.height,
        width: s.width
      }
    }
  }, s.display = s.display || "block", s.boxSizing = s.boxSizing || "border-box", Kl(i)) {
    const o = El(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Kl(n))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = El(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const yf = b_ ? {
  passive: !0
} : !1;
function lb(e, t, s) {
  e && e.addEventListener(t, s, yf);
}
function cb(e, t, s) {
  e && e.canvas && e.canvas.removeEventListener(t, s, yf);
}
function ub(e, t) {
  const s = rb[e.type] || e.type, { x: n, y: i } = ys(e, t);
  return {
    type: s,
    chart: t,
    native: e,
    x: n !== void 0 ? n : null,
    y: i !== void 0 ? i : null
  };
}
function po(e, t) {
  for (const s of e)
    if (s === t || s.contains(t))
      return !0;
}
function fb(e, t, s) {
  const n = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || po(a.addedNodes, n), r = r && !po(a.removedNodes, n);
    r && s();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function db(e, t, s) {
  const n = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || po(a.removedNodes, n), r = r && !po(a.addedNodes, n);
    r && s();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const Zn = /* @__PURE__ */ new Map();
let Yl = 0;
function vf() {
  const e = window.devicePixelRatio;
  e !== Yl && (Yl = e, Zn.forEach((t, s) => {
    s.currentDevicePixelRatio !== e && t();
  }));
}
function hb(e, t) {
  Zn.size || window.addEventListener("resize", vf), Zn.set(e, t);
}
function pb(e) {
  Zn.delete(e), Zn.size || window.removeEventListener("resize", vf);
}
function gb(e, t, s) {
  const n = e.canvas, i = n && ua(n);
  if (!i)
    return;
  const o = sf((a, l) => {
    const c = i.clientWidth;
    s(a, l), c < i.clientWidth && s();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return r.observe(i), hb(e, o), r;
}
function Qo(e, t, s) {
  s && s.disconnect(), t === "resize" && pb(e);
}
function mb(e, t, s) {
  const n = e.canvas, i = sf((o) => {
    e.ctx !== null && s(ub(o, e));
  }, e);
  return lb(n, t, i), i;
}
class _b extends bf {
  acquireContext(t, s) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (ab(t, s), n) : null;
  }
  releaseContext(t) {
    const s = t.canvas;
    if (!s[Bi])
      return !1;
    const n = s[Bi].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = n[o];
      wt(r) ? s.removeAttribute(o) : s.setAttribute(o, r);
    });
    const i = n.style || {};
    return Object.keys(i).forEach((o) => {
      s.style[o] = i[o];
    }), s.width = s.width, delete s[Bi], !0;
  }
  addEventListener(t, s, n) {
    this.removeEventListener(t, s);
    const i = t.$proxies || (t.$proxies = {}), r = {
      attach: fb,
      detach: db,
      resize: gb
    }[s] || mb;
    i[s] = r(t, s, n);
  }
  removeEventListener(t, s) {
    const n = t.$proxies || (t.$proxies = {}), i = n[s];
    if (!i)
      return;
    ({
      attach: Qo,
      detach: Qo,
      resize: Qo
    }[s] || cb)(t, s, i), n[s] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, s, n, i) {
    return __(t, s, n, i);
  }
  isAttached(t) {
    const s = t && ua(t);
    return !!(s && s.isConnected);
  }
}
function bb(e) {
  return !ca() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? ob : _b;
}
var Pi;
let ui = (Pi = class {
  constructor() {
    nt(this, "x");
    nt(this, "y");
    nt(this, "active", !1);
    nt(this, "options");
    nt(this, "$animations");
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
    return Xn(this.x) && Xn(this.y);
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
}, nt(Pi, "defaults", {}), nt(Pi, "defaultRoutes"), Pi);
function yb(e, t) {
  const s = e.options.ticks, n = vb(e), i = Math.min(s.maxTicksLimit || n, n), o = s.major.enabled ? wb(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > i)
    return Sb(t, c, o, r / i), c;
  const u = xb(o, t, i);
  if (r > 0) {
    let f, d;
    const h = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Mi(t, c, u, wt(h) ? 0 : a - h, a), f = 0, d = r - 1; f < d; f++)
      Mi(t, c, u, o[f], o[f + 1]);
    return Mi(t, c, u, l, wt(h) ? t.length : l + h), c;
  }
  return Mi(t, c, u), c;
}
function vb(e) {
  const t = e.options.offset, s = e._tickSize(), n = e._length / s + (t ? 0 : 1), i = e._maxLength / s;
  return Math.floor(Math.min(n, i));
}
function xb(e, t, s) {
  const n = kb(e), i = t.length / s;
  if (!n)
    return Math.max(i, 1);
  const o = um(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function wb(e) {
  const t = [];
  let s, n;
  for (s = 0, n = e.length; s < n; s++)
    e[s].major && t.push(s);
  return t;
}
function Sb(e, t, s, n) {
  let i = 0, o = s[0], r;
  for (n = Math.ceil(n), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, o = s[i * n]);
}
function Mi(e, t, s, n, i) {
  const o = yt(n, 0), r = Math.min(yt(i, e.length), e.length);
  let a = 0, l, c, u;
  for (s = Math.ceil(s), i && (l = i - n, s = l / Math.floor(l / s)), u = o; u < 0; )
    a++, u = Math.round(o + a * s);
  for (c = Math.max(o, 0); c < r; c++)
    c === u && (t.push(e[c]), a++, u = Math.round(o + a * s));
}
function kb(e) {
  const t = e.length;
  let s, n;
  if (t < 2)
    return !1;
  for (n = e[0], s = 1; s < t; ++s)
    if (e[s] - e[s - 1] !== n)
      return !1;
  return n;
}
const Ob = (e) => e === "left" ? "right" : e === "right" ? "left" : e, ql = (e, t, s) => t === "top" || t === "left" ? e[t] + s : e[t] - s, Gl = (e, t) => Math.min(t || e, e);
function Xl(e, t) {
  const s = [], n = e.length / t, i = e.length;
  let o = 0;
  for (; o < i; o += n)
    s.push(e[Math.floor(o)]);
  return s;
}
function Mb(e, t, s) {
  const n = e.ticks.length, i = Math.min(t, n - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(s && (n === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Cb(e, t) {
  zt(e, (s) => {
    const n = s.gc, i = n.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o)
        delete s.data[n[o]];
      n.splice(0, i);
    }
  });
}
function vn(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Jl(e, t) {
  if (!e.display)
    return 0;
  const s = Qn(e.font, t), n = on(e.padding);
  return (Vt(e.text) ? e.text.length : 1) * s.lineHeight + n.height;
}
function Tb(e, t) {
  return un(e, {
    scale: t,
    type: "scale"
  });
}
function Db(e, t, s) {
  return un(e, {
    tick: s,
    index: t,
    type: "tick"
  });
}
function Pb(e, t, s) {
  let n = nf(e);
  return (s && t !== "right" || !s && t === "right") && (n = Ob(n)), n;
}
function Ib(e, t, s, n) {
  const { top: i, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: u } = l;
  let f = 0, d, h, _;
  const m = r - i, y = a - o;
  if (e.isHorizontal()) {
    if (h = $n(n, o, a), ht(s)) {
      const k = Object.keys(s)[0], R = s[k];
      _ = u[k].getPixelForValue(R) + m - t;
    } else s === "center" ? _ = (c.bottom + c.top) / 2 + m - t : _ = ql(e, s, t);
    d = a - o;
  } else {
    if (ht(s)) {
      const k = Object.keys(s)[0], R = s[k];
      h = u[k].getPixelForValue(R) - y + t;
    } else s === "center" ? h = (c.left + c.right) / 2 - y + t : h = ql(e, s, t);
    _ = $n(n, r, i), f = s === "left" ? -os : os;
  }
  return {
    titleX: h,
    titleY: _,
    maxWidth: d,
    rotation: f
  };
}
class fn extends ui {
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
    return t = we(t, Number.POSITIVE_INFINITY), s = we(s, Number.NEGATIVE_INFINITY), n = we(n, Number.POSITIVE_INFINITY), i = we(i, Number.NEGATIVE_INFINITY), {
      min: we(t, n),
      max: we(s, i),
      minDefined: fe(t),
      maxDefined: fe(s)
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
      min: we(s, we(n, s)),
      max: we(n, we(s, n))
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
    Dt(this.options.beforeUpdate, [
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
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Gm(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Xl(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = yb(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, s, n;
    this.isHorizontal() ? (s = this.left, n = this.right) : (s = this.top, n = this.bottom, t = !t), this._startPixel = s, this._endPixel = n, this._reversePixels = t, this._length = n - s, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Dt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Dt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Dt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Dt(this.options[t], [
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
    Dt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const s = this.options.ticks;
    let n, i, o;
    for (n = 0, i = t.length; n < i; n++)
      o = t[n], o.label = Dt(s.callback, [
        o.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Dt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Dt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, s = t.ticks, n = Gl(this.ticks.length, t.ticks.maxTicksLimit), i = s.minRotation || 0, o = s.maxRotation;
    let r = i, a, l, c;
    if (!this._isVisible() || !s.display || i >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), f = u.widest.width, d = u.highest.height, h = De(this.chart.width - f, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / n : h / (n - 1), f + 6 > a && (a = h / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - vn(t.grid) - s.padding - Jl(t.title, this.chart.options.font), c = Math.sqrt(f * f + d * d), r = pm(Math.min(Math.asin(De((u.highest.height + 6) / a, -1, 1)), Math.asin(De(l / c, -1, 1)) - Math.asin(De(d / c, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    Dt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Dt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: s, options: { ticks: n, title: i, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Jl(i, s.options.font);
      if (a ? (t.width = this.maxWidth, t.height = vn(o) + l) : (t.height = this.maxHeight, t.width = vn(o) + l), n.display && this.ticks.length) {
        const { first: c, last: u, widest: f, highest: d } = this._getLabelSizes(), h = n.padding * 2, _ = xs(this.labelRotation), m = Math.cos(_), y = Math.sin(_);
        if (a) {
          const k = n.mirror ? 0 : y * f.width + m * d.height;
          t.height = Math.min(this.maxHeight, t.height + k + h);
        } else {
          const k = n.mirror ? 0 : m * f.width + y * d.height;
          t.width = Math.min(this.maxWidth, t.width + k + h);
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
    Dt(this.options.afterFit, [
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
      wt(t[s].label) && (t.splice(s, 1), n--, s--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const s = this.options.ticks.sampleSize;
      let n = this.ticks;
      s < n.length && (n = Xl(n, s)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, s, n) {
    const { ctx: i, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(s / Gl(s, n));
    let c = 0, u = 0, f, d, h, _, m, y, k, R, z, K, S;
    for (f = 0; f < s; f += l) {
      if (_ = t[f].label, m = this._resolveTickFontOptions(f), i.font = y = m.string, k = o[y] = o[y] || {
        data: {},
        gc: []
      }, R = m.lineHeight, z = K = 0, !wt(_) && !Vt(_))
        z = Cl(i, k.data, k.gc, z, _), K = R;
      else if (Vt(_))
        for (d = 0, h = _.length; d < h; ++d)
          S = _[d], !wt(S) && !Vt(S) && (z = Cl(i, k.data, k.gc, z, S), K += R);
      r.push(z), a.push(K), c = Math.max(z, c), u = Math.max(K, u);
    }
    Cb(o, s);
    const U = r.indexOf(c), v = a.indexOf(u), x = (D) => ({
      width: r[D] || 0,
      height: a[D] || 0
    });
    return {
      first: x(0),
      last: x(s - 1),
      widest: x(U),
      highest: x(v),
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
    return _m(this._alignToPixels ? ps(this.chart, s, 0) : s);
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
      return n.$context || (n.$context = Db(this.getContext(), t, n));
    }
    return this.$context || (this.$context = Tb(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, s = xs(this.labelRotation), n = Math.abs(Math.cos(s)), i = Math.abs(Math.sin(s)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * n > a * i ? a / n : l / i : l * i < a * n ? l / n : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const s = this.axis, n = this.chart, i = this.options, { grid: o, position: r, border: a } = i, l = o.offset, c = this.isHorizontal(), f = this.ticks.length + (l ? 1 : 0), d = vn(o), h = [], _ = a.setContext(this.getContext()), m = _.display ? _.width : 0, y = m / 2, k = function(ot) {
      return ps(n, ot, m);
    };
    let R, z, K, S, U, v, x, D, P, C, B, rt;
    if (r === "top")
      R = k(this.bottom), v = this.bottom - d, D = R - y, C = k(t.top) + y, rt = t.bottom;
    else if (r === "bottom")
      R = k(this.top), C = t.top, rt = k(t.bottom) - y, v = R + y, D = this.top + d;
    else if (r === "left")
      R = k(this.right), U = this.right - d, x = R - y, P = k(t.left) + y, B = t.right;
    else if (r === "right")
      R = k(this.left), P = t.left, B = k(t.right) - y, U = R + y, x = this.left + d;
    else if (s === "x") {
      if (r === "center")
        R = k((t.top + t.bottom) / 2 + 0.5);
      else if (ht(r)) {
        const ot = Object.keys(r)[0], G = r[ot];
        R = k(this.chart.scales[ot].getPixelForValue(G));
      }
      C = t.top, rt = t.bottom, v = R + y, D = v + d;
    } else if (s === "y") {
      if (r === "center")
        R = k((t.left + t.right) / 2);
      else if (ht(r)) {
        const ot = Object.keys(r)[0], G = r[ot];
        R = k(this.chart.scales[ot].getPixelForValue(G));
      }
      U = R - y, x = U - d, P = t.left, B = t.right;
    }
    const Tt = yt(i.ticks.maxTicksLimit, f), it = Math.max(1, Math.ceil(f / Tt));
    for (z = 0; z < f; z += it) {
      const ot = this.getContext(z), G = o.setContext(ot), Z = a.setContext(ot), ct = G.lineWidth, vt = G.color, se = Z.dash || [], Ht = Z.dashOffset, Lt = G.tickWidth, I = G.tickColor, b = G.tickBorderDash || [], O = G.tickBorderDashOffset;
      K = Mb(this, z, l), K !== void 0 && (S = ps(n, K, ct), c ? U = x = P = B = S : v = D = C = rt = S, h.push({
        tx1: U,
        ty1: v,
        tx2: x,
        ty2: D,
        x1: P,
        y1: C,
        x2: B,
        y2: rt,
        width: ct,
        color: vt,
        borderDash: se,
        borderDashOffset: Ht,
        tickWidth: Lt,
        tickColor: I,
        tickBorderDash: b,
        tickBorderDashOffset: O
      }));
    }
    return this._ticksLength = f, this._borderValue = R, h;
  }
  _computeLabelItems(t) {
    const s = this.axis, n = this.options, { position: i, ticks: o } = n, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: u, mirror: f } = o, d = vn(n.grid), h = d + u, _ = f ? -u : h, m = -xs(this.labelRotation), y = [];
    let k, R, z, K, S, U, v, x, D, P, C, B, rt = "middle";
    if (i === "top")
      U = this.bottom - _, v = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      U = this.top + _, v = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const it = this._getYAxisLabelAlignment(d);
      v = it.textAlign, S = it.x;
    } else if (i === "right") {
      const it = this._getYAxisLabelAlignment(d);
      v = it.textAlign, S = it.x;
    } else if (s === "x") {
      if (i === "center")
        U = (t.top + t.bottom) / 2 + h;
      else if (ht(i)) {
        const it = Object.keys(i)[0], ot = i[it];
        U = this.chart.scales[it].getPixelForValue(ot) + h;
      }
      v = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (i === "center")
        S = (t.left + t.right) / 2 - h;
      else if (ht(i)) {
        const it = Object.keys(i)[0], ot = i[it];
        S = this.chart.scales[it].getPixelForValue(ot);
      }
      v = this._getYAxisLabelAlignment(d).textAlign;
    }
    s === "y" && (l === "start" ? rt = "top" : l === "end" && (rt = "bottom"));
    const Tt = this._getLabelSizes();
    for (k = 0, R = a.length; k < R; ++k) {
      z = a[k], K = z.label;
      const it = o.setContext(this.getContext(k));
      x = this.getPixelForTick(k) + o.labelOffset, D = this._resolveTickFontOptions(k), P = D.lineHeight, C = Vt(K) ? K.length : 1;
      const ot = C / 2, G = it.color, Z = it.textStrokeColor, ct = it.textStrokeWidth;
      let vt = v;
      r ? (S = x, v === "inner" && (k === R - 1 ? vt = this.options.reverse ? "left" : "right" : k === 0 ? vt = this.options.reverse ? "right" : "left" : vt = "center"), i === "top" ? c === "near" || m !== 0 ? B = -C * P + P / 2 : c === "center" ? B = -Tt.highest.height / 2 - ot * P + P : B = -Tt.highest.height + P / 2 : c === "near" || m !== 0 ? B = P / 2 : c === "center" ? B = Tt.highest.height / 2 - ot * P : B = Tt.highest.height - C * P, f && (B *= -1), m !== 0 && !it.showLabelBackdrop && (S += P / 2 * Math.sin(m))) : (U = x, B = (1 - C) * P / 2);
      let se;
      if (it.showLabelBackdrop) {
        const Ht = on(it.backdropPadding), Lt = Tt.heights[k], I = Tt.widths[k];
        let b = B - Ht.top, O = 0 - Ht.left;
        switch (rt) {
          case "middle":
            b -= Lt / 2;
            break;
          case "bottom":
            b -= Lt;
            break;
        }
        switch (v) {
          case "center":
            O -= I / 2;
            break;
          case "right":
            O -= I;
            break;
          case "inner":
            k === R - 1 ? O -= I : k > 0 && (O -= I / 2);
            break;
        }
        se = {
          left: O,
          top: b,
          width: I + Ht.width,
          height: Lt + Ht.height,
          color: it.backdropColor
        };
      }
      y.push({
        label: K,
        font: D,
        textOffset: B,
        options: {
          rotation: m,
          color: G,
          strokeColor: Z,
          strokeWidth: ct,
          textAlign: vt,
          textBaseline: rt,
          translation: [
            S,
            U
          ],
          backdrop: se
        }
      });
    }
    return y;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: s } = this.options;
    if (-xs(this.labelRotation))
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
    this.isHorizontal() ? (c = ps(t, this.left, r) - r / 2, u = ps(t, this.right, a) + a / 2, f = d = l) : (f = ps(t, this.top, r) - r / 2, d = ps(t, this.bottom, a) + a / 2, c = u = l), s.save(), s.lineWidth = o.width, s.strokeStyle = o.color, s.beginPath(), s.moveTo(c, f), s.lineTo(u, d), s.stroke(), s.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, i = this._computeLabelArea();
    i && af(n, i);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, u = r.textOffset;
      wr(n, c, 0, u, l, a);
    }
    i && lf(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: s, title: n, reverse: i } } = this;
    if (!n.display)
      return;
    const o = Qn(n.font), r = on(n.padding), a = n.align;
    let l = o.lineHeight / 2;
    s === "bottom" || s === "center" || ht(s) ? (l += r.bottom, Vt(n.text) && (l += o.lineHeight * (n.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: u, maxWidth: f, rotation: d } = Ib(this, l, s, a);
    wr(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: f,
      rotation: d,
      textAlign: Pb(a, s, i),
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
    const t = this.options, s = t.ticks && t.ticks.z || 0, n = yt(t.grid && t.grid.z, -1), i = yt(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== fn.prototype.draw ? [
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
    return Qn(s.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ci {
  constructor(t, s, n) {
    this.type = t, this.scope = s, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const s = Object.getPrototypeOf(t);
    let n;
    Rb(s) && (n = this.register(s));
    const i = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in i || (i[o] = t, Eb(t, r, n), this.override && Pt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const s = this.items, n = t.id, i = this.scope;
    n in s && delete s[n], i && n in Pt[i] && (delete Pt[i][n], this.override && delete Ns[n]);
  }
}
function Eb(e, t, s) {
  const n = Gn(/* @__PURE__ */ Object.create(null), [
    s ? Pt.get(s) : {},
    Pt.get(t),
    e.defaults
  ]);
  Pt.set(t, n), e.defaultRoutes && Ab(t, e.defaultRoutes), e.descriptors && Pt.describe(t, e.descriptors);
}
function Ab(e, t) {
  Object.keys(t).forEach((s) => {
    const n = s.split("."), i = n.pop(), o = [
      e
    ].concat(n).join("."), r = t[s].split("."), a = r.pop(), l = r.join(".");
    Pt.route(o, i, l, a);
  });
}
function Rb(e) {
  return "id" in e && "defaults" in e;
}
class Lb {
  constructor() {
    this.controllers = new Ci(jn, "datasets", !0), this.elements = new Ci(ui, "elements"), this.plugins = new Ci(Object, "plugins"), this.scales = new Ci(fn, "scales"), this._typedRegistries = [
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
      n || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : zt(i, (r) => {
        const a = n || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, s, n) {
    const i = na(t);
    Dt(n["before" + i], [], n), s[t](n), Dt(n["after" + i], [], n);
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
var ke = /* @__PURE__ */ new Lb();
class $b {
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
      if (Dt(a, l, r) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    wt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const s = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), s;
  }
  _createDescriptors(t, s) {
    const n = t && t.config, i = yt(n.options && n.options.plugins, {}), o = Fb(n);
    return i === !1 && !s ? [] : jb(t, o, i, s);
  }
  _notifyStateChanges(t) {
    const s = this._oldCache || [], n = this._cache, i = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(s, n), t, "stop"), this._notify(i(n, s), t, "start");
  }
}
function Fb(e) {
  const t = {}, s = [], n = Object.keys(ke.plugins.items);
  for (let o = 0; o < n.length; o++)
    s.push(ke.getPlugin(n[o]));
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
function Nb(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function jb(e, { plugins: t, localIds: s }, n, i) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = Nb(n[l], i);
    c !== null && o.push({
      plugin: a,
      options: Vb(e.config, {
        plugin: a,
        local: s[l]
      }, c, r)
    });
  }
  return o;
}
function Vb(e, { plugin: t, local: s }, n, i) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(n, o);
  return s && t.defaults && r.push(t.defaults), e.createResolver(r, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Sr(e, t) {
  const s = Pt.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || s.indexAxis || "x";
}
function Hb(e, t) {
  let s = e;
  return e === "_index_" ? s = t : e === "_value_" && (s = t === "x" ? "y" : "x"), s;
}
function zb(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Ql(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function Bb(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function kr(e, ...t) {
  if (Ql(e))
    return e;
  for (const s of t) {
    const n = s.axis || Bb(s.position) || e.length > 1 && Ql(e[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Zl(e, t, s) {
  if (s[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function Ub(e, t) {
  if (t.data && t.data.datasets) {
    const s = t.data.datasets.filter((n) => n.xAxisID === e || n.yAxisID === e);
    if (s.length)
      return Zl(e, "x", s[0]) || Zl(e, "y", s[0]);
  }
  return {};
}
function Wb(e, t) {
  const s = Ns[e.type] || {
    scales: {}
  }, n = t.scales || {}, i = Sr(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((r) => {
    const a = n[r];
    if (!ht(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = kr(r, a, Ub(r, e), Pt.scales[a.type]), c = zb(l, i), u = s.scales || {};
    o[r] = Rn(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || Sr(a, t), u = (Ns[a] || {}).scales || {};
    Object.keys(u).forEach((f) => {
      const d = Hb(f, l), h = r[d + "AxisID"] || d;
      o[h] = o[h] || /* @__PURE__ */ Object.create(null), Rn(o[h], [
        {
          axis: d
        },
        n[h],
        u[f]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Rn(a, [
      Pt.scales[a.type],
      Pt.scale
    ]);
  }), o;
}
function xf(e) {
  const t = e.options || (e.options = {});
  t.plugins = yt(t.plugins, {}), t.scales = Wb(e, t);
}
function wf(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function Kb(e) {
  return e = e || {}, e.data = wf(e.data), xf(e), e;
}
const tc = /* @__PURE__ */ new Map(), Sf = /* @__PURE__ */ new Set();
function Ti(e, t) {
  let s = tc.get(e);
  return s || (s = t(), tc.set(e, s), Sf.add(s)), s;
}
const xn = (e, t, s) => {
  const n = co(t, s);
  n !== void 0 && e.add(n);
};
class Yb {
  constructor(t) {
    this._config = Kb(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = wf(t);
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
    this.clearCache(), xf(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ti(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, s) {
    return Ti(`${t}.transition.${s}`, () => [
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
    return Ti(`${t}-${s}`, () => [
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
    return Ti(`${n}-plugin-${s}`, () => [
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
      t && (l.add(t), u.forEach((f) => xn(l, t, f))), u.forEach((f) => xn(l, i, f)), u.forEach((f) => xn(l, Ns[o] || {}, f)), u.forEach((f) => xn(l, Pt, f)), u.forEach((f) => xn(l, xr, f));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Sf.has(s) && r.set(s, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: s } = this;
    return [
      t,
      Ns[s] || {},
      Pt.datasets[s] || {},
      {
        type: s
      },
      Pt,
      xr
    ];
  }
  resolveNamedOptions(t, s, n, i = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = ec(this._resolverCache, t, i);
    let l = r;
    if (Gb(r, s)) {
      o.$shared = !1, n = us(n) ? n() : n;
      const c = this.createResolver(t, n, a);
      l = rn(r, n, c);
    }
    for (const c of s)
      o[c] = l[c];
    return o;
  }
  createResolver(t, s, n = [
    ""
  ], i) {
    const { resolver: o } = ec(this._resolverCache, t, n);
    return ht(s) ? rn(o, s, void 0, i) : o;
  }
}
function ec(e, t, s) {
  let n = e.get(t);
  n || (n = /* @__PURE__ */ new Map(), e.set(t, n));
  const i = s.join();
  let o = n.get(i);
  return o || (o = {
    resolver: ra(t, s),
    subPrefixes: s.filter((a) => !a.toLowerCase().includes("hover"))
  }, n.set(i, o)), o;
}
const qb = (e) => ht(e) && Object.getOwnPropertyNames(e).some((t) => us(e[t]));
function Gb(e, t) {
  const { isScriptable: s, isIndexable: n } = cf(e);
  for (const i of t) {
    const o = s(i), r = n(i), a = (r || o) && e[i];
    if (o && (us(a) || qb(a)) || r && Vt(a))
      return !0;
  }
  return !1;
}
var Xb = "4.5.0";
const Jb = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function sc(e, t) {
  return e === "top" || e === "bottom" || Jb.indexOf(e) === -1 && t === "x";
}
function nc(e, t) {
  return function(s, n) {
    return s[e] === n[e] ? s[t] - n[t] : s[e] - n[e];
  };
}
function ic(e) {
  const t = e.chart, s = t.options.animation;
  t.notifyPlugins("afterRender"), Dt(s && s.onComplete, [
    e
  ], t);
}
function Qb(e) {
  const t = e.chart, s = t.options.animation;
  Dt(s && s.onProgress, [
    e
  ], t);
}
function kf(e) {
  return ca() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Ui = {}, oc = (e) => {
  const t = kf(e);
  return Object.values(Ui).filter((s) => s.canvas === t).pop();
};
function Zb(e, t, s) {
  const n = Object.keys(e);
  for (const i of n) {
    const o = +i;
    if (o >= t) {
      const r = e[i];
      delete e[i], (s > 0 || o > t) && (e[o + s] = r);
    }
  }
}
function ty(e, t, s, n) {
  return !s || e.type === "mouseout" ? null : n ? t : e;
}
var qe;
let Po = (qe = class {
  static register(...t) {
    ke.add(...t), rc();
  }
  static unregister(...t) {
    ke.remove(...t), rc();
  }
  constructor(t, s) {
    const n = this.config = new Yb(s), i = kf(t), o = oc(i);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || bb(i))(), this.platform.updateConfig(n);
    const a = this.platform.acquireContext(i, r.aspectRatio), l = a && a.canvas, c = l && l.height, u = l && l.width;
    if (this.id = em(), this.ctx = a, this.canvas = l, this.width = u, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new $b(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Sm((f) => this.update(f), r.resizeDelay || 0), this._dataChanges = [], Ui[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Fe.listen(this, "complete", ic), Fe.listen(this, "progress", Qb), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: s }, width: n, height: i, _aspectRatio: o } = this;
    return wt(t) ? s && o ? o : i ? n / i : null : t;
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
    return ke;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Il(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Tl(this.canvas, this.ctx), this;
  }
  stop() {
    return Fe.stop(this), this;
  }
  resize(t, s) {
    Fe.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: s
    } : this._resize(t, s);
  }
  _resize(t, s) {
    const n = this.options, i = this.canvas, o = n.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(i, t, s, o), a = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Il(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), Dt(n.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const s = this.options.scales || {};
    zt(s, (n, i) => {
      n.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, s = t.scales, n = this.scales, i = Object.keys(n).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    s && (o = o.concat(Object.keys(s).map((r) => {
      const a = s[r], l = kr(r, a), c = l === "r", u = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), zt(o, (r) => {
      const a = r.options, l = a.id, c = kr(l, a), u = yt(a.type, r.dtype);
      (a.position === void 0 || sc(a.position, c) !== sc(r.dposition)) && (a.position = r.dposition), i[l] = !0;
      let f = null;
      if (l in n && n[l].type === u)
        f = n[l];
      else {
        const d = ke.getScale(u);
        f = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), n[f.id] = f;
      }
      f.init(a, t);
    }), zt(i, (r, a) => {
      r || delete n[a];
    }), zt(n, (r) => {
      rs.configure(this, r, r.options), rs.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, s = this.data.datasets.length, n = t.length;
    if (t.sort((i, o) => i.index - o.index), n > s) {
      for (let i = s; i < n; ++i)
        this._destroyDatasetMeta(i);
      t.splice(s, n - s);
    }
    this._sortedMetasets = t.slice(0).sort(nc("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)), r.type = a, r.indexAxis = o.indexAxis || Sr(a, this.options), r.order = o.order || 0, r.index = n, r.label = "" + o.label, r.visible = this.isDatasetVisible(n), r.controller)
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = ke.getController(a), { datasetElementType: c, dataElementType: u } = Pt.datasets[a];
        Object.assign(l, {
          dataElementType: ke.getElement(u),
          datasetElementType: c && ke.getElement(c)
        }), r.controller = new l(this, n), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    zt(this.data.datasets, (t, s) => {
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
    r = this._minPadding = n.layout.autoPadding ? r : 0, this._updateLayout(r), i || zt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(nc("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    zt(this.scales, (t) => {
      rs.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, s = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!_l(s, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, s = this._getUniformDataChanges() || [];
    for (const { method: n, start: i, count: o } of s) {
      const r = n === "_removeElements" ? -o : o;
      Zb(t, i, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const s = this.data.datasets.length, n = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), i = n(0);
    for (let o = 1; o < s; o++)
      if (!_l(i, n(o)))
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
    rs.update(this, this.width, this.height, t);
    const s = this.chartArea, n = s.width <= 0 || s.height <= 0;
    this._layers = [], zt(this.boxes, (i) => {
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
        this._updateDataset(s, us(t) ? t({
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
    }) !== !1 && (Fe.has(this) ? this.attached && !Fe.running(this) && Fe.start(this) : (this.draw(), ic({
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
    }, i = P_(this, t);
    this.notifyPlugins("beforeDatasetDraw", n) !== !1 && (i && af(s, i), t.controller.draw(), i && lf(s), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n));
  }
  isPointInArea(t) {
    return Jn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, s, n, i) {
    const o = J_.modes[s];
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
    return this.$context || (this.$context = un(null, {
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
    uo(s) ? (o.data[s].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), r.update(o, {
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
    for (this.stop(), Fe.remove(this), t = 0, s = this.data.datasets.length; t < s; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: s } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Tl(t, s), this.platform.releaseContext(s), this.canvas = null, this.ctx = null), delete Ui[this.id], this.notifyPlugins("afterDestroy");
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
    zt(this.options.events, (o) => n(o, i));
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
    zt(this._listeners, (t, s) => {
      this.platform.removeEventListener(this, s, t);
    }), this._listeners = {}, zt(this._responsiveListeners, (t, s) => {
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
    !gl(n, s) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, s));
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
    const { _active: i = [], options: o } = this, r = s, a = this._getActiveElements(t, i, n, r), l = am(t), c = ty(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, Dt(o.onHover, [
      t,
      a,
      this
    ], this), l && Dt(o.onClick, [
      t,
      a,
      this
    ], this));
    const u = !gl(a, i);
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
}, nt(qe, "defaults", Pt), nt(qe, "instances", Ui), nt(qe, "overrides", Ns), nt(qe, "registry", ke), nt(qe, "version", Xb), nt(qe, "getChart", oc), qe);
function rc() {
  return zt(Po.instances, (e) => e._plugins.invalidate());
}
function Of(e, t, s = t) {
  e.lineCap = yt(s.borderCapStyle, t.borderCapStyle), e.setLineDash(yt(s.borderDash, t.borderDash)), e.lineDashOffset = yt(s.borderDashOffset, t.borderDashOffset), e.lineJoin = yt(s.borderJoinStyle, t.borderJoinStyle), e.lineWidth = yt(s.borderWidth, t.borderWidth), e.strokeStyle = yt(s.borderColor, t.borderColor);
}
function ey(e, t, s) {
  e.lineTo(s.x, s.y);
}
function sy(e) {
  return e.stepped ? Nm : e.tension || e.cubicInterpolationMode === "monotone" ? jm : ey;
}
function Mf(e, t, s = {}) {
  const n = e.length, { start: i = 0, end: o = n - 1 } = s, { start: r, end: a } = t, l = Math.max(i, r), c = Math.min(o, a), u = i < r && o < r || i > a && o > a;
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? n + c - l : c - l
  };
}
function ny(e, t, s, n) {
  const { points: i, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Mf(i, s, n), u = sy(o);
  let { move: f = !0, reverse: d } = n || {}, h, _, m;
  for (h = 0; h <= c; ++h)
    _ = i[(a + (d ? c - h : h)) % r], !_.skip && (f ? (e.moveTo(_.x, _.y), f = !1) : u(e, m, _, d, o.stepped), m = _);
  return l && (_ = i[(a + (d ? c : 0)) % r], u(e, m, _, d, o.stepped)), !!l;
}
function iy(e, t, s, n) {
  const i = t.points, { count: o, start: r, ilen: a } = Mf(i, s, n), { move: l = !0, reverse: c } = n || {};
  let u = 0, f = 0, d, h, _, m, y, k;
  const R = (K) => (r + (c ? a - K : K)) % o, z = () => {
    m !== y && (e.lineTo(u, y), e.lineTo(u, m), e.lineTo(u, k));
  };
  for (l && (h = i[R(0)], e.moveTo(h.x, h.y)), d = 0; d <= a; ++d) {
    if (h = i[R(d)], h.skip)
      continue;
    const K = h.x, S = h.y, U = K | 0;
    U === _ ? (S < m ? m = S : S > y && (y = S), u = (f * u + K) / ++f) : (z(), e.lineTo(K, S), _ = U, f = 0, m = y = S), k = S;
  }
  z();
}
function Or(e) {
  const t = e.options, s = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !s ? iy : ny;
}
function oy(e) {
  return e.stepped ? y_ : e.tension || e.cubicInterpolationMode === "monotone" ? v_ : vs;
}
function ry(e, t, s, n) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, s, n) && i.closePath()), Of(e, t.options), e.stroke(i);
}
function ay(e, t, s, n) {
  const { segments: i, options: o } = t, r = Or(t);
  for (const a of i)
    Of(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: s,
      end: s + n - 1
    }) && e.closePath(), e.stroke();
}
const ly = typeof Path2D == "function";
function cy(e, t, s, n) {
  ly && !t.options.segment ? ry(e, t, s, n) : ay(e, t, s, n);
}
class Mn extends ui {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, s) {
    const n = this.options;
    if ((n.tension || n.cubicInterpolationMode === "monotone") && !n.stepped && !this._pointsUpdated) {
      const i = n.spanGaps ? this._loop : this._fullLoop;
      f_(this._points, n, t, i, s), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = M_(this, this.options.segment));
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
    const n = this.options, i = t[s], o = this.points, r = S_(this, {
      property: s,
      start: i,
      end: i
    });
    if (!r.length)
      return;
    const a = [], l = oy(n);
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
    return Or(this)(t, this, s, n);
  }
  path(t, s, n) {
    const i = this.segments, o = Or(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), cy(t, this, n, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
nt(Mn, "id", "line"), nt(Mn, "defaults", {
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
}), nt(Mn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), nt(Mn, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function ac(e, t, s, n) {
  const i = e.options, { [s]: o } = e.getProps([
    s
  ], n);
  return Math.abs(t - o) < i.radius + i.hitRadius;
}
class Wi extends ui {
  constructor(s) {
    super();
    nt(this, "parsed");
    nt(this, "skip");
    nt(this, "stop");
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
    return ac(this, s, "x", n);
  }
  inYRange(s, n) {
    return ac(this, s, "y", n);
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
    this.skip || i.radius < 0.1 || !Jn(this, n, this.size(i) / 2) || (s.strokeStyle = i.borderColor, s.lineWidth = i.borderWidth, s.fillStyle = i.backgroundColor, $m(s, i, this.x, this.y));
  }
  getRange() {
    const s = this.options || {};
    return s.radius + s.hitRadius;
  }
}
nt(Wi, "id", "point"), /**
* @type {any}
*/
nt(Wi, "defaults", {
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
nt(Wi, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
class Cf extends ui {
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
    const i = Vt(n.text) ? n.text.length : 1;
    this._padding = on(n.padding);
    const o = i * Qn(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: s, left: n, bottom: i, right: o, options: r } = this, a = r.align;
    let l = 0, c, u, f;
    return this.isHorizontal() ? (u = $n(a, n, o), f = s + t, c = o - n) : (r.position === "left" ? (u = n + t, f = $n(a, i, s), l = Qt * -0.5) : (u = o - t, f = $n(a, s, i), l = Qt * 0.5), c = i - s), {
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
    const n = Qn(s.font), o = n.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    wr(t, s.text, 0, 0, n, {
      color: s.color,
      maxWidth: l,
      rotation: c,
      textAlign: nf(s.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function uy(e, t) {
  const s = new Cf({
    ctx: e.ctx,
    options: t,
    chart: e
  });
  rs.configure(e, s, t), rs.addBox(e, s), e.titleBlock = s;
}
var fy = {
  id: "title",
  _element: Cf,
  start(e, t, s) {
    uy(e, s);
  },
  stop(e) {
    const t = e.titleBlock;
    rs.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, s) {
    const n = e.titleBlock;
    rs.configure(e, n, s), n.options = s;
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
const dy = (e, t, s, n) => (typeof t == "string" ? (s = e.push(t) - 1, n.unshift({
  index: s,
  label: t
})) : isNaN(t) && (s = null), s);
function hy(e, t, s, n) {
  const i = e.indexOf(t);
  if (i === -1)
    return dy(e, t, s, n);
  const o = e.lastIndexOf(t);
  return i !== o ? s : i;
}
const py = (e, t) => e === null ? null : De(Math.round(e), 0, t);
function lc(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class Mr extends fn {
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
    if (wt(t))
      return null;
    const n = this.getLabels();
    return s = isFinite(s) && n[s] === t ? s : hy(n, t, yt(s, t), this._addedLabels), py(s, n.length - 1);
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
    return lc.call(this, t);
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
nt(Mr, "id", "category"), nt(Mr, "defaults", {
  ticks: {
    callback: lc
  }
});
function gy(e, t) {
  const s = [], { bounds: i, step: o, min: r, max: a, precision: l, count: c, maxTicks: u, maxDigits: f, includeBounds: d } = e, h = o || 1, _ = u - 1, { min: m, max: y } = t, k = !wt(r), R = !wt(a), z = !wt(c), K = (y - m) / (f + 1);
  let S = yl((y - m) / _ / h) * h, U, v, x, D;
  if (S < 1e-14 && !k && !R)
    return [
      {
        value: m
      },
      {
        value: y
      }
    ];
  D = Math.ceil(y / S) - Math.floor(m / S), D > _ && (S = yl(D * S / _ / h) * h), wt(l) || (U = Math.pow(10, l), S = Math.ceil(S * U) / U), i === "ticks" ? (v = Math.floor(m / S) * S, x = Math.ceil(y / S) * S) : (v = m, x = y), k && R && o && dm((a - r) / o, S / 1e3) ? (D = Math.round(Math.min((a - r) / S, u)), S = (a - r) / D, v = r, x = a) : z ? (v = k ? r : v, x = R ? a : x, D = c - 1, S = (x - v) / D) : (D = (x - v) / S, Ln(D, Math.round(D), S / 1e3) ? D = Math.round(D) : D = Math.ceil(D));
  const P = Math.max(vl(S), vl(v));
  U = Math.pow(10, wt(l) ? P : l), v = Math.round(v * U) / U, x = Math.round(x * U) / U;
  let C = 0;
  for (k && (d && v !== r ? (s.push({
    value: r
  }), v < r && C++, Ln(Math.round((v + C * S) * U) / U, r, cc(r, K, e)) && C++) : v < r && C++); C < D; ++C) {
    const B = Math.round((v + C * S) * U) / U;
    if (R && B > a)
      break;
    s.push({
      value: B
    });
  }
  return R && d && x !== a ? s.length && Ln(s[s.length - 1].value, a, cc(a, K, e)) ? s[s.length - 1].value = a : s.push({
    value: a
  }) : (!R || x === a) && s.push({
    value: x
  }), s;
}
function cc(e, t, { horizontal: s, minRotation: n }) {
  const i = xs(n), o = (s ? Math.sin(i) : Math.cos(i)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class my extends fn {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, s) {
    return wt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: s, maxDefined: n } = this.getUserBounds();
    let { min: i, max: o } = this;
    const r = (l) => i = s ? i : l, a = (l) => o = n ? o : l;
    if (t) {
      const l = nn(i), c = nn(o);
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
    }, o = this._range || this, r = gy(i, o);
    return t.bounds === "ticks" && hm(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return of(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Cr extends my {
  determineDataLimits() {
    const { min: t, max: s } = this.getMinMax(!0);
    this.min = fe(t) ? t : 0, this.max = fe(s) ? s : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), s = t ? this.width : this.height, n = xs(this.options.ticks.minRotation), i = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(s / Math.min(40, o.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
nt(Cr, "id", "linear"), nt(Cr, "defaults", {
  ticks: {
    callback: rf.formatters.numeric
  }
});
const Io = {
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
}, ee = /* @__PURE__ */ Object.keys(Io);
function uc(e, t) {
  return e - t;
}
function fc(e, t) {
  if (wt(t))
    return null;
  const s = e._adapter, { parser: n, round: i, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof n == "function" && (r = n(r)), fe(r) || (r = typeof n == "string" ? s.parse(r, n) : s.parse(r)), r === null ? null : (i && (r = i === "week" && (Xn(o) || o === !0) ? s.startOf(r, "isoWeek", o) : s.startOf(r, i)), +r);
}
function dc(e, t, s, n) {
  const i = ee.length;
  for (let o = ee.indexOf(e); o < i - 1; ++o) {
    const r = Io[ee[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((s - t) / (a * r.size)) <= n)
      return ee[o];
  }
  return ee[i - 1];
}
function _y(e, t, s, n, i) {
  for (let o = ee.length - 1; o >= ee.indexOf(s); o--) {
    const r = ee[o];
    if (Io[r].common && e._adapter.diff(i, n, r) >= t - 1)
      return r;
  }
  return ee[s ? ee.indexOf(s) : 0];
}
function by(e) {
  for (let t = ee.indexOf(e) + 1, s = ee.length; t < s; ++t)
    if (Io[ee[t]].common)
      return ee[t];
}
function hc(e, t, s) {
  if (!s)
    e[t] = !0;
  else if (s.length) {
    const { lo: n, hi: i } = ia(s, t), o = s[n] >= t ? s[n] : s[i];
    e[o] = !0;
  }
}
function yy(e, t, s, n) {
  const i = e._adapter, o = +i.startOf(t[0].value, n), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +i.add(a, 1, n))
    l = s[a], l >= 0 && (t[l].major = !0);
  return t;
}
function pc(e, t, s) {
  const n = [], i = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], i[a] = r, n.push({
      value: a,
      major: !1
    });
  return o === 0 || !s ? n : yy(e, n, i, s);
}
class go extends fn {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, s = {}) {
    const n = t.time || (t.time = {}), i = this._adapter = new K_._date(t.adapters.date);
    i.init(s), Rn(n.displayFormats, i.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = s.normalized;
  }
  parse(t, s) {
    return t === void 0 ? null : fc(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = fe(i) && !isNaN(i) ? i : +s.startOf(Date.now(), n), o = fe(o) && !isNaN(o) ? o : +s.endOf(Date.now(), n) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o);
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
    const o = this.min, r = this.max, a = vm(i, o, r);
    return this._unit = s.unit || (n.autoSkip ? dc(s.minUnit, this.min, this.max, this._getLabelCapacity(o)) : _y(this, a.length, s.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : by(this._unit), this.initOffsets(i), t.reverse && a.reverse(), pc(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let s = 0, n = 0, i, o;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? s = 1 - i : s = (this.getDecimalForValue(t[1]) - i) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = o : n = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    s = De(s, 0, r), n = De(n, 0, r), this._offsets = {
      start: s,
      end: n,
      factor: 1 / (s + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, s = this.min, n = this.max, i = this.options, o = i.time, r = o.unit || dc(o.minUnit, s, n, this._getLabelCapacity(s)), a = yt(i.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Xn(l) || l === !0, u = {};
    let f = s, d, h;
    if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : r), t.diff(n, s, r) > 1e5 * a)
      throw new Error(s + " and " + n + " are too far apart with stepSize of " + a + " " + r);
    const _ = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, h = 0; d < n; d = +t.add(d, a, r), h++)
      hc(u, d, _);
    return (d === n || i.bounds === "ticks" || h === 1) && hc(u, d, _), Object.keys(u).sort(uc).map((m) => +m);
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
      return Dt(r, [
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
    const s = this.options.ticks, n = this.ctx.measureText(t).width, i = xs(this.isHorizontal() ? s.maxRotation : s.minRotation), o = Math.cos(i), r = Math.sin(i), a = this._resolveTickFontOptions(0).size;
    return {
      w: n * o + a * r,
      h: n * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const s = this.options.time, n = s.displayFormats, i = n[s.unit] || n.millisecond, o = this._tickFormatFunction(t, 0, pc(this, [
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
      t.push(fc(this, i[s]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return wm(t.sort(uc));
  }
}
nt(go, "id", "time"), nt(go, "defaults", {
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
function Di(e, t, s) {
  let n = 0, i = e.length - 1, o, r, a, l;
  s ? (t >= e[n].pos && t <= e[i].pos && ({ lo: n, hi: i } = ws(e, "pos", t)), { pos: o, time: a } = e[n], { pos: r, time: l } = e[i]) : (t >= e[n].time && t <= e[i].time && ({ lo: n, hi: i } = ws(e, "time", t)), { time: o, pos: a } = e[n], { time: r, pos: l } = e[i]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class gc extends go {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), s = this._table = this.buildLookupTable(t);
    this._minPos = Di(s, this.min), this._tableRange = Di(s, this.max) - this._minPos, super.initOffsets(t);
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
    return (Di(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const s = this._offsets, n = this.getDecimalForPixel(t) / s.factor - s.end;
    return Di(this._table, n * this._tableRange + this._minPos, !0);
  }
}
nt(gc, "id", "timeseries"), nt(gc, "defaults", go.defaults);
const Tf = {
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
}, vy = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, xy = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Tf,
  ...vy
}, wy = dr[0] === "2" ? (e, t) => Object.assign(e, {
  attrs: t
}) : (e, t) => Object.assign(e, t);
function Ks(e) {
  return Rs(e) ? J(e) : e;
}
function Sy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return Rs(t) ? new Proxy(e, {}) : e;
}
function ky(e, t) {
  const s = e.options;
  s && t && Object.assign(s, t);
}
function Df(e, t) {
  e.labels = t;
}
function Pf(e, t, s) {
  const n = [];
  e.datasets = t.map((i) => {
    const o = e.datasets.find((r) => r[s] === i[s]);
    return !o || !i.data || n.includes(o) ? {
      ...i
    } : (n.push(o), Object.assign(o, i), o);
  });
}
function Oy(e, t) {
  const s = {
    labels: [],
    datasets: []
  };
  return Df(s, e.labels), Pf(s, e.datasets, t), s;
}
const My = /* @__PURE__ */ js({
  props: xy,
  setup(e, t) {
    let { expose: s, slots: n } = t;
    const i = gt(null), o = zc(null);
    s({
      chart: o
    });
    const r = () => {
      if (!i.value) return;
      const { type: c, data: u, options: f, plugins: d, datasetIdKey: h } = e, _ = Oy(u, h), m = Sy(_, u);
      o.value = new Po(i.value, {
        type: c,
        data: m,
        options: {
          ...f
        },
        plugins: d
      });
    }, a = () => {
      const c = J(o.value);
      c && (e.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, e.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(e.updateMode);
    };
    return zr(r), So(a), Qs([
      () => e.options,
      () => e.data
    ], (c, u) => {
      let [f, d] = c, [h, _] = u;
      const m = J(o.value);
      if (!m)
        return;
      let y = !1;
      if (f) {
        const k = Ks(f), R = Ks(h);
        k && k !== R && (ky(m, k), y = !0);
      }
      if (d) {
        const k = Ks(d.labels), R = Ks(_.labels), z = Ks(d.datasets), K = Ks(_.datasets);
        k !== R && (Df(m.config.data, k), y = !0), z && z !== K && (Pf(m.config.data, z, e.datasetIdKey), y = !0);
      }
      y && Ls(() => {
        l(m);
      });
    }, {
      deep: !0
    }), () => en("canvas", {
      role: "img",
      ariaLabel: e.ariaLabel,
      ariaDescribedby: e.ariaDescribedby,
      ref: i
    }, [
      en("p", {}, [
        n.default ? n.default() : ""
      ])
    ]);
  }
});
function Cy(e, t) {
  return Po.register(t), /* @__PURE__ */ js({
    props: Tf,
    setup(s, n) {
      let { expose: i } = n;
      const o = zc(null), r = (a) => {
        o.value = a == null ? void 0 : a.chart;
      };
      return i({
        chart: o
      }), () => en(My, wy({
        ref: r
      }, {
        type: e,
        ...s
      }));
    }
  });
}
const Ty = /* @__PURE__ */ Cy("line", Vn), Dy = ["title"], Py = {
  key: 1,
  class: "cell-number"
}, Iy = {
  key: 2,
  class: "cell-date"
}, Ey = {
  key: 3,
  class: "cell-select"
}, Ay = {
  key: 1,
  class: "empty-value"
}, Ry = {
  key: 4,
  class: "cell-multi-select"
}, Ly = {
  key: 0,
  class: "empty-value"
}, $y = {
  key: 5,
  class: "cell-user"
}, Fy = {
  key: 0,
  class: "user-info"
}, Ny = { class: "user-avatar" }, jy = { class: "user-name" }, Vy = {
  key: 1,
  class: "empty-value"
}, Hy = {
  key: 6,
  class: "cell-checkbox"
}, zy = {
  key: 7,
  class: "cell-url"
}, By = ["href"], Uy = {
  key: 1,
  class: "empty-value"
}, Wy = {
  key: 8,
  class: "cell-email"
}, Ky = ["href"], Yy = {
  key: 1,
  class: "empty-value"
}, qy = {
  key: 9,
  class: "cell-phone"
}, Gy = ["href"], Xy = {
  key: 1,
  class: "empty-value"
}, Jy = {
  key: 10,
  class: "cell-sparkline",
  style: { height: "30px", width: "100%" }
}, Qy = {
  key: 1,
  class: "empty-value"
}, Zy = ["title"], tv = /* @__PURE__ */ js({
  __name: "CellDisplay",
  props: {
    value: {},
    field: {},
    editing: { type: Boolean }
  },
  setup(e) {
    Po.register(Vn, Mn, Wi, Cr, Mr, fy);
    const t = e, s = jt(() => {
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
    }, i = jt(() => t.value === null || t.value === void 0 || t.value === "" ? "-" : String(t.value)), o = (d) => {
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
    return (d, h) => (Y(), tt("div", {
      class: ze(["cell-display", { clickable: !d.editing }])
    }, [
      d.field.type === "text" ? (Y(), tt("span", {
        key: 0,
        class: "cell-text",
        title: i.value
      }, Ot(i.value), 9, Dy)) : d.field.type === "number" ? (Y(), tt("span", Py, Ot(o(d.value)), 1)) : d.field.type === "date" ? (Y(), tt("span", Iy, Ot(r(d.value)), 1)) : d.field.type === "select" ? (Y(), tt("div", Ey, [
        d.value ? (Y(), tt("span", {
          key: 0,
          class: ze(["select-tag", c(d.value)])
        }, Ot(d.value), 3)) : (Y(), tt("span", Ay, "-"))
      ])) : d.field.type === "multiSelect" ? (Y(), tt("div", Ry, [
        (Y(!0), tt(Nt, null, Ms(Array.isArray(d.value) ? d.value : [], (_) => (Y(), tt("span", {
          key: _,
          class: "multi-select-tag"
        }, Ot(_), 1))), 128)),
        !d.value || Array.isArray(d.value) && d.value.length === 0 ? (Y(), tt("span", Ly, "-")) : ss("", !0)
      ])) : d.field.type === "user" ? (Y(), tt("div", $y, [
        d.value ? (Y(), tt("div", Fy, [
          L("div", Ny, Ot(l(d.value)), 1),
          L("span", jy, Ot(d.value), 1)
        ])) : (Y(), tt("span", Vy, "-"))
      ])) : d.field.type === "checkbox" ? (Y(), tt("div", Hy, [
        L("div", {
          class: ze(["checkbox-display", { checked: !!d.value }])
        }, [
          d.value ? (Y(), Ds(xt(Mg), {
            key: 0,
            class: "w-3 h-3"
          })) : (Y(), Ds(xt(zi), {
            key: 1,
            class: "w-3 h-3"
          }))
        ], 2)
      ])) : d.field.type === "url" ? (Y(), tt("div", zy, [
        d.value && u(d.value) ? (Y(), tt("a", {
          key: 0,
          href: d.value,
          target: "_blank",
          class: "url-link",
          onClick: h[0] || (h[0] = Ps(() => {
          }, ["stop"]))
        }, [
          bt(xt(Cg), { class: "w-3 h-3" }),
          Zs(" " + Ot(a(d.value)), 1)
        ], 8, By)) : (Y(), tt("span", Uy, "-"))
      ])) : d.field.type === "email" ? (Y(), tt("div", Wy, [
        d.value && f(d.value) ? (Y(), tt("a", {
          key: 0,
          href: `mailto:${d.value}`,
          class: "email-link",
          onClick: h[1] || (h[1] = Ps(() => {
          }, ["stop"]))
        }, [
          bt(xt(Dg), { class: "w-3 h-3" }),
          Zs(" " + Ot(d.value), 1)
        ], 8, Ky)) : (Y(), tt("span", Yy, "-"))
      ])) : d.field.type === "phone" ? (Y(), tt("div", qy, [
        d.value ? (Y(), tt("a", {
          key: 0,
          href: `tel:${d.value}`,
          class: "phone-link",
          onClick: h[2] || (h[2] = Ps(() => {
          }, ["stop"]))
        }, [
          bt(xt(Pg), { class: "w-3 h-3" }),
          Zs(" " + Ot(d.value), 1)
        ], 8, Gy)) : (Y(), tt("span", Xy, "-"))
      ])) : d.field.type === "sparkline" ? (Y(), tt("div", Jy, [
        d.value ? (Y(), Ds(xt(Ty), {
          key: 0,
          data: s.value,
          options: n
        }, null, 8, ["data"])) : (Y(), tt("span", Qy, "-"))
      ])) : (Y(), tt("span", {
        key: 11,
        class: "cell-text",
        title: i.value
      }, Ot(i.value), 9, Zy))
    ], 2));
  }
}), ev = /* @__PURE__ */ Zr(tv, [["__scopeId", "data-v-d8826fe1"]]), sv = { class: "modal-header" }, nv = { class: "modal-body" }, iv = { class: "field-list" }, ov = { class: "field-list-header" }, rv = { class: "field-items" }, av = ["onDragstart", "onDragover", "onDrop"], lv = { class: "field-drag-handle" }, cv = { class: "field-info" }, uv = { class: "field-icon" }, fv = { class: "field-details" }, dv = { class: "field-name" }, hv = { class: "field-meta" }, pv = { class: "field-type" }, gv = { class: "field-width" }, mv = {
  key: 0,
  class: "field-required"
}, _v = { class: "field-visibility" }, bv = { class: "visibility-toggle" }, yv = ["checked", "onChange"], vv = { class: "field-actions" }, xv = ["onClick", "title"], wv = ["onClick", "title"], Sv = {
  key: 0,
  class: "field-form"
}, kv = { class: "form-header" }, Ov = { class: "form-row" }, Mv = { class: "form-group" }, Cv = { class: "form-group" }, Tv = ["value"], Dv = { class: "form-row" }, Pv = { class: "form-group" }, Iv = { class: "form-group" }, Ev = {
  key: 0,
  class: "form-group"
}, Av = { class: "options-config" }, Rv = ["onUpdate:modelValue"], Lv = ["onClick"], $v = { class: "form-row" }, Fv = { class: "form-group checkbox-group" }, Nv = { class: "checkbox-label" }, jv = { class: "form-group checkbox-group" }, Vv = { class: "checkbox-label" }, Hv = { class: "form-group" }, zv = { class: "form-actions" }, Bv = {
  type: "submit",
  class: "btn-primary"
}, Uv = /* @__PURE__ */ js({
  __name: "FieldManagerModal",
  emits: ["close", "fieldUpdated"],
  setup(e, { emit: t }) {
    const s = Qr(), n = gt(!1), i = gt(null), o = gt({
      isDragging: !1,
      dragIndex: -1,
      dropTarget: -1
    }), r = ii({
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
    ], l = jt(() => s.fields || []), c = t, u = (v) => ({
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
    })[v] || "未知", f = (v, x) => {
      s.updateField(v, { visible: x }), c("fieldUpdated");
    }, d = (v) => {
      i.value = v, n.value = !1, Object.assign(r, {
        name: v.name,
        type: v.type,
        width: v.width,
        visible: v.visible,
        required: v.required || !1,
        options: v.options ? [...v.options] : [],
        defaultValue: v.defaultValue || "",
        description: v.description || ""
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
      const v = {
        name: r.name,
        type: r.type,
        width: r.width,
        visible: r.visible,
        required: r.required,
        options: r.options.filter((x) => x.trim()),
        defaultValue: r.defaultValue,
        description: r.description
      };
      i.value ? s.updateField(i.value.id, v) : s.addField(v), c("fieldUpdated"), h();
    }, y = (v) => {
      const x = l.value.find((D) => D.id === v);
      x && confirm(`确定要删除字段"${x.name}"吗？删除后相关数据将丢失。`) && (s.deleteField(v), c("fieldUpdated"));
    }, k = () => {
      r.options.push("");
    }, R = (v) => {
      r.options.splice(v, 1);
    }, z = (v, x) => {
      o.value = {
        isDragging: !0,
        dragIndex: x,
        dropTarget: -1
      }, v.dataTransfer && (v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", x.toString()));
    }, K = (v, x) => {
      v.preventDefault(), o.value.dragIndex !== x && (o.value.dropTarget = x);
    }, S = (v, x) => {
      v.preventDefault(), o.value.dragIndex !== x && (s.reorderFields(o.value.dragIndex, x), c("fieldUpdated"));
    }, U = () => {
      o.value = {
        isDragging: !1,
        dragIndex: -1,
        dropTarget: -1
      };
    };
    return (v, x) => (Y(), tt("div", {
      class: "modal-overlay",
      onClick: x[10] || (x[10] = (D) => v.$emit("close"))
    }, [
      L("div", {
        class: "modal-content",
        onClick: x[9] || (x[9] = Ps(() => {
        }, ["stop"]))
      }, [
        L("div", sv, [
          x[11] || (x[11] = L("h3", null, "字段管理", -1)),
          L("button", {
            onClick: x[0] || (x[0] = (D) => v.$emit("close")),
            class: "close-btn"
          }, [
            bt(xt(zi), { class: "w-4 h-4" })
          ])
        ]),
        L("div", nv, [
          L("div", iv, [
            L("div", ov, [
              x[13] || (x[13] = L("span", { class: "header-text" }, "字段列表", -1)),
              L("button", {
                onClick: x[1] || (x[1] = (D) => n.value = !0),
                class: "add-field-btn"
              }, [
                bt(xt(ul), { class: "w-4 h-4" }),
                x[12] || (x[12] = Zs(" 添加字段 ", -1))
              ])
            ]),
            L("div", rv, [
              (Y(!0), tt(Nt, null, Ms(l.value, (D, P) => {
                var C;
                return Y(), tt("div", {
                  key: D.id,
                  class: ze(["field-item", { editing: ((C = i.value) == null ? void 0 : C.id) === D.id }]),
                  draggable: "true",
                  onDragstart: (B) => z(B, P),
                  onDragend: U,
                  onDragover: (B) => K(B, P),
                  onDrop: (B) => S(B, P)
                }, [
                  L("div", lv, [
                    bt(xt(yr), { class: "w-4 h-4" })
                  ]),
                  L("div", cv, [
                    L("div", uv, [
                      (Y(), Ds(au(xt(Yu)(D.type)), { class: "w-4 h-4" }))
                    ]),
                    L("div", fv, [
                      L("div", dv, Ot(D.name), 1),
                      L("div", hv, [
                        L("span", pv, Ot(u(D.type)), 1),
                        L("span", gv, "宽度: " + Ot(D.width) + "px", 1),
                        D.required ? (Y(), tt("span", mv, "必填")) : ss("", !0)
                      ])
                    ])
                  ]),
                  L("div", _v, [
                    L("label", bv, [
                      L("input", {
                        type: "checkbox",
                        checked: D.visible,
                        onChange: (B) => {
                          var rt;
                          return f(D.id, (rt = B.target) == null ? void 0 : rt.checked);
                        }
                      }, null, 40, yv),
                      x[14] || (x[14] = L("span", { class: "toggle-slider" }, null, -1))
                    ])
                  ]),
                  L("div", vv, [
                    L("button", {
                      class: "action-btn edit",
                      onClick: (B) => d(D),
                      title: "编辑 " + D.name
                    }, [
                      bt(xt(Ig), { class: "w-3 h-3" })
                    ], 8, xv),
                    L("button", {
                      class: "action-btn delete",
                      onClick: (B) => y(D.id),
                      title: "删除 " + D.name
                    }, [
                      bt(xt(Eg), { class: "w-3 h-3" })
                    ], 8, wv)
                  ])
                ], 42, av);
              }), 128))
            ])
          ]),
          n.value || i.value ? (Y(), tt("div", Sv, [
            L("div", kv, [
              L("h4", null, Ot(i.value ? "编辑字段" : "添加字段"), 1),
              L("button", {
                onClick: h,
                class: "cancel-btn"
              }, [
                bt(xt(zi), { class: "w-4 h-4" })
              ])
            ]),
            L("form", {
              onSubmit: Ps(m, ["prevent"]),
              class: "form-content"
            }, [
              L("div", Ov, [
                L("div", Mv, [
                  x[15] || (x[15] = L("label", null, "字段名称", -1)),
                  Ye(L("input", {
                    "onUpdate:modelValue": x[2] || (x[2] = (D) => r.name = D),
                    type: "text",
                    class: "form-input",
                    placeholder: "请输入字段名称",
                    required: ""
                  }, null, 512), [
                    [mn, r.name]
                  ])
                ]),
                L("div", Cv, [
                  x[17] || (x[17] = L("label", null, "字段类型", -1)),
                  Ye(L("select", {
                    "onUpdate:modelValue": x[3] || (x[3] = (D) => r.type = D),
                    class: "form-select",
                    required: ""
                  }, [
                    x[16] || (x[16] = L("option", { value: "" }, "请选择类型", -1)),
                    (Y(), tt(Nt, null, Ms(a, (D) => L("option", {
                      key: D.value,
                      value: D.value
                    }, Ot(D.label), 9, Tv)), 64))
                  ], 512), [
                    [Fp, r.type]
                  ])
                ])
              ]),
              L("div", Dv, [
                L("div", Pv, [
                  x[18] || (x[18] = L("label", null, "列宽度", -1)),
                  Ye(L("input", {
                    "onUpdate:modelValue": x[4] || (x[4] = (D) => r.width = D),
                    type: "number",
                    class: "form-input",
                    placeholder: "120",
                    min: "80",
                    max: "500"
                  }, null, 512), [
                    [
                      mn,
                      r.width,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                L("div", Iv, [
                  x[19] || (x[19] = L("label", null, "默认值", -1)),
                  Ye(L("input", {
                    "onUpdate:modelValue": x[5] || (x[5] = (D) => r.defaultValue = D),
                    type: "text",
                    class: "form-input",
                    placeholder: "可选"
                  }, null, 512), [
                    [mn, r.defaultValue]
                  ])
                ])
              ]),
              r.type === "select" || r.type === "multiSelect" ? (Y(), tt("div", Ev, [
                x[21] || (x[21] = L("label", null, "选项配置", -1)),
                L("div", Av, [
                  (Y(!0), tt(Nt, null, Ms(r.options, (D, P) => (Y(), tt("div", {
                    key: P,
                    class: "option-item"
                  }, [
                    Ye(L("input", {
                      "onUpdate:modelValue": (C) => r.options[P] = C,
                      type: "text",
                      class: "option-input",
                      placeholder: "选项名称"
                    }, null, 8, Rv), [
                      [mn, r.options[P]]
                    ]),
                    L("button", {
                      type: "button",
                      onClick: (C) => R(P),
                      class: "remove-option-btn"
                    }, [
                      bt(xt(zi), { class: "w-3 h-3" })
                    ], 8, Lv)
                  ]))), 128)),
                  L("button", {
                    type: "button",
                    onClick: k,
                    class: "add-option-btn"
                  }, [
                    bt(xt(ul), { class: "w-3 h-3" }),
                    x[20] || (x[20] = Zs(" 添加选项 ", -1))
                  ])
                ])
              ])) : ss("", !0),
              L("div", $v, [
                L("div", Fv, [
                  L("label", Nv, [
                    Ye(L("input", {
                      "onUpdate:modelValue": x[6] || (x[6] = (D) => r.visible = D),
                      type: "checkbox",
                      class: "form-checkbox"
                    }, null, 512), [
                      [tl, r.visible]
                    ]),
                    x[22] || (x[22] = L("span", null, "显示字段", -1))
                  ])
                ]),
                L("div", jv, [
                  L("label", Vv, [
                    Ye(L("input", {
                      "onUpdate:modelValue": x[7] || (x[7] = (D) => r.required = D),
                      type: "checkbox",
                      class: "form-checkbox"
                    }, null, 512), [
                      [tl, r.required]
                    ]),
                    x[23] || (x[23] = L("span", null, "必填字段", -1))
                  ])
                ])
              ]),
              L("div", Hv, [
                x[24] || (x[24] = L("label", null, "字段描述", -1)),
                Ye(L("textarea", {
                  "onUpdate:modelValue": x[8] || (x[8] = (D) => r.description = D),
                  class: "form-textarea",
                  placeholder: "字段描述（可选）",
                  rows: "3"
                }, null, 512), [
                  [mn, r.description]
                ])
              ]),
              L("div", zv, [
                L("button", {
                  type: "button",
                  onClick: h,
                  class: "btn-secondary"
                }, " 取消 "),
                L("button", Bv, Ot(i.value ? "更新字段" : "添加字段"), 1)
              ])
            ], 32)
          ])) : ss("", !0)
        ])
      ])
    ]));
  }
}), Wv = /* @__PURE__ */ Zr(Uv, [["__scopeId", "data-v-14c82743"]]), Kv = { class: "table-container" }, Yv = { class: "table-stats" }, qv = { class: "stats-item" }, Gv = { class: "stats-item" }, Xv = {
  key: 0,
  class: "table-wrapper"
}, Jv = { class: "table-header-wrapper" }, Qv = { class: "header-cell checkbox-cell" }, Zv = ["checked"], t0 = ["draggable", "onDragstart", "onDragover", "onDrop"], e0 = ["onMousedown"], s0 = { class: "field-name" }, n0 = ["draggable", "onDragstart", "onDragover", "onDrop"], i0 = { class: "row-cell checkbox-cell" }, o0 = ["checked", "onChange"], r0 = ["onClick", "onDblclick"], a0 = {
  key: 0,
  class: "column-indicator"
}, l0 = {
  key: 1,
  class: "row-indicator"
}, c0 = {
  key: 3,
  class: "loading-overlay"
}, u0 = { class: "loading-spinner" }, f0 = /* @__PURE__ */ js({
  __name: "ShareContainer",
  setup(e) {
    const t = Qr(), s = gt(!1), n = gt(), i = gt(), o = gt(!1), r = gt(!1), a = gt(!1), l = gt({
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
    }), u = gt(null), f = jt(() => t.selectedRecords || []), d = t.toggleRecordSelection || (() => {
    }), h = t.clearSelection || (() => {
    }), _ = t.selectAllRecords || (() => {
    }), m = t.reorderFields || (() => {
    }), y = t.reorderRecords || (() => {
    }), k = jt(() => (t.records || []).length), R = jt(() => f.value.length === k.value), z = jt(() => {
      const b = t.records;
      return b ? b.slice(0, 100) : [];
    }), K = jt(() => t.fields.reduce((O, V) => O + V.width, 0) + 48), S = (b) => ({
      width: `${b.width}px`,
      minWidth: `${b.width}px`,
      maxWidth: `${b.width}px`,
      flexShrink: 0
    }), U = jt(() => ({
      left: l.value.currentX + "px",
      top: l.value.currentY + "px",
      transform: "translate(-50%, -50%)"
    })), v = (b) => {
      if (a.value) return;
      r.value = !0;
      const O = b.target;
      i.value && (i.value.scrollLeft = O.scrollLeft), requestAnimationFrame(() => {
        r.value = !1;
      });
    }, x = (b) => {
      if (r.value) return;
      a.value = !0;
      const O = b.target;
      n.value && (n.value.scrollLeft = O.scrollLeft), requestAnimationFrame(() => {
        a.value = !1;
      });
    }, D = (b) => {
      c.value.isResizing && (b.preventDefault(), b.stopPropagation());
    }, P = (b, O) => {
      if (c.value.isResizing) {
        b.preventDefault(), b.stopPropagation();
        return;
      }
    }, C = (b, O) => {
      if (c.value.isResizing) {
        b.preventDefault();
        return;
      }
      const V = t.fields[O];
      if (V) {
        if (l.value = {
          isDragging: !0,
          dragType: "column",
          dragIndex: O,
          dragData: V,
          dropTarget: -1,
          startX: b.clientX,
          startY: b.clientY,
          currentX: b.clientX,
          currentY: b.clientY
        }, b.dataTransfer) {
          b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", O.toString());
          const st = document.createElement("div");
          st.style.opacity = "0", st.style.position = "absolute", st.style.top = "-1000px", document.body.appendChild(st), b.dataTransfer.setDragImage(st, 0, 0), setTimeout(() => document.body.removeChild(st), 0);
        }
        document.addEventListener("dragover", vt), document.body.classList.add("dragging-column");
      }
    }, B = (b, O) => {
      b.preventDefault(), l.value.dragType === "column" && l.value.dragIndex !== O && (l.value.dropTarget = O);
    }, rt = (b, O) => {
      if (b.preventDefault(), l.value.dragType === "column" && l.value.dragIndex !== O) {
        const V = l.value.dragIndex;
        m(V, O);
      }
    }, Tt = () => {
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
      }, document.removeEventListener("dragover", vt), document.body.classList.remove("dragging-column");
    }, it = (b, O) => {
      if (u.value || c.value.isResizing) {
        b.preventDefault();
        return;
      }
      const V = z.value[O];
      if (V) {
        if (l.value = {
          isDragging: !0,
          dragType: "row",
          dragIndex: O,
          dragData: V,
          dropTarget: -1,
          startX: b.clientX,
          startY: b.clientY,
          currentX: b.clientX,
          currentY: b.clientY
        }, b.dataTransfer) {
          b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", O.toString());
          const st = document.createElement("div");
          st.style.opacity = "0", st.style.position = "absolute", st.style.top = "-1000px", document.body.appendChild(st), b.dataTransfer.setDragImage(st, 0, 0), setTimeout(() => document.body.removeChild(st), 0);
        }
        document.addEventListener("dragover", vt), document.body.classList.add("dragging-row");
      }
    }, ot = (b, O) => {
      b.preventDefault(), l.value.dragType === "row" && l.value.dragIndex !== O && (l.value.dropTarget = O);
    }, G = (b, O) => {
      if (b.preventDefault(), l.value.dragType === "row" && l.value.dragIndex !== O) {
        const V = l.value.dragIndex;
        y(V, O);
      }
    }, Z = () => {
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
      }, document.removeEventListener("dragover", vt), document.body.classList.remove("dragging-row");
    }, ct = () => {
      c.value = {
        isResizing: !1,
        columnIndex: -1,
        startX: 0,
        startWidth: 0
      }, document.removeEventListener("mouseup", ct), document.body.classList.remove("resizing-column"), document.body.style.userSelect = "";
    }, vt = (b) => {
      l.value.currentX = b.clientX, l.value.currentY = b.clientY;
    }, se = (b, O) => {
    }, Ht = (b, O) => {
      u.value = { recordId: b, fieldId: O };
    }, Lt = () => {
      Ls(() => {
      });
    }, I = () => {
      R.value ? h() : _();
    };
    return So(() => {
      document.removeEventListener("dragover", vt), document.removeEventListener("mouseup", ct), document.body.classList.remove("dragging-column", "dragging-row", "resizing-column"), document.body.style.userSelect = "";
    }), (b, O) => {
      var V, st, kt, $t;
      return Y(), tt("div", Kv, [
        L("div", Yv, [
          L("span", qv, " 总计 " + Ot(k.value) + " 条记录 ", 1),
          L("span", Gv, " 已选择 " + Ot(((V = f.value) == null ? void 0 : V.length) || 0) + " 条 ", 1)
        ]),
        s.value ? ss("", !0) : (Y(), tt("div", Xv, [
          L("div", Jv, [
            L("div", {
              class: "table-header-scroll",
              ref_key: "headerScrollRef",
              ref: n,
              onScroll: v
            }, [
              L("div", {
                class: "table-header",
                style: Ze({ width: K.value + "px" })
              }, [
                L("div", Qv, [
                  L("input", {
                    type: "checkbox",
                    checked: R.value,
                    onChange: I
                  }, null, 40, Zv)
                ]),
                (Y(!0), tt(Nt, null, Ms(xt(t).fields, (Ct, Yt) => (Y(), tt("div", {
                  key: `header-${Ct.id}`,
                  class: ze(["header-cell", {
                    dragging: l.value.isDragging && l.value.dragIndex === Yt && l.value.dragType === "column",
                    "drop-target": l.value.dropTarget === Yt && l.value.dragType === "column",
                    resizing: c.value.isResizing && c.value.columnIndex === Yt
                  }]),
                  style: Ze(S(Ct)),
                  draggable: !c.value.isResizing,
                  onDragstart: (p) => C(p, Yt),
                  onDragend: Tt,
                  onDragover: (p) => B(p, Yt),
                  onDrop: (p) => rt(p, Yt)
                }, [
                  L("div", {
                    class: "header-content",
                    onMousedown: D
                  }, [
                    L("div", {
                      class: "drag-handle",
                      onMousedown: Ps((p) => P(p), ["stop"])
                    }, [
                      bt(xt(yr), { class: "w-4 h-4" })
                    ], 40, e0),
                    L("span", s0, Ot(Ct.name), 1)
                  ], 32)
                ], 46, t0))), 128))
              ], 4)
            ], 544)
          ]),
          L("div", {
            class: "table-body-wrapper",
            ref_key: "bodyScrollRef",
            ref: i,
            onScroll: x
          }, [
            L("div", {
              class: "table-body",
              style: Ze({ width: K.value + "px" })
            }, [
              (Y(!0), tt(Nt, null, Ms(z.value, (Ct, Yt) => (Y(), tt("div", {
                key: `row-${Ct.id}`,
                class: ze(["table-row", {
                  selected: f.value.includes(Ct.id),
                  dragging: l.value.isDragging && l.value.dragType === "row" && l.value.dragIndex === Yt,
                  "drop-target": l.value.dropTarget === Yt && l.value.dragType === "row"
                }]),
                draggable: !u.value && !c.value.isResizing,
                onDragstart: (p) => it(p, Yt),
                onDragend: Z,
                onDragover: (p) => ot(p, Yt),
                onDrop: (p) => G(p, Yt)
              }, [
                L("div", i0, [
                  L("input", {
                    type: "checkbox",
                    checked: f.value.includes(Ct.id),
                    onChange: (p) => xt(d)(Ct.id)
                  }, null, 40, o0)
                ]),
                L("div", {
                  class: "row-drag-handle",
                  onMousedown: O[0] || (O[0] = Ps(() => {
                  }, ["stop"]))
                }, [
                  bt(xt(yr), { class: "w-4 h-4" })
                ], 32),
                (Y(!0), tt(Nt, null, Ms(xt(t).fields, (p, g) => (Y(), tt("div", {
                  key: `cell-${Ct.id}-${p.id}`,
                  class: "row-cell",
                  style: Ze(S(p)),
                  onClick: (w) => se(Ct.id, p.id),
                  onDblclick: (w) => Ht(Ct.id, p.id)
                }, [
                  bt(ev, {
                    value: Ct[p.id],
                    field: p,
                    editing: !1
                  }, null, 8, ["value", "field"])
                ], 44, r0))), 128))
              ], 42, n0))), 128))
            ], 4)
          ], 544)
        ])),
        l.value.isDragging ? (Y(), tt("div", {
          key: 1,
          class: "drag-indicator",
          style: Ze(U.value)
        }, [
          l.value.dragType === "column" ? (Y(), tt("div", a0, [
            (Y(), Ds(au(xt(Yu)((st = l.value.dragData) == null ? void 0 : st.type)), { class: "w-4 h-4" })),
            L("span", null, Ot((kt = l.value.dragData) == null ? void 0 : kt.name), 1)
          ])) : (Y(), tt("div", l0, [
            L("span", null, Ot((($t = l.value.dragData) == null ? void 0 : $t.title) || "记录"), 1)
          ]))
        ], 4)) : ss("", !0),
        o.value ? (Y(), Ds(Wv, {
          key: 2,
          onClose: O[1] || (O[1] = (Ct) => o.value = !1),
          onFieldUpdated: Lt
        })) : ss("", !0),
        s.value ? (Y(), tt("div", c0, [
          L("div", u0, [
            bt(xt(Tg), { class: "w-6 h-6 animate-spin" }),
            O[2] || (O[2] = L("span", null, "加载中...", -1))
          ])
        ])) : ss("", !0)
      ]);
    };
  }
}), d0 = /* @__PURE__ */ Zr(f0, [["__scopeId", "data-v-b913ae1b"]]), h0 = { class: "table-view" }, p0 = { class: "main-content" }, g0 = { class: "content" }, mc = /* @__PURE__ */ js({
  __name: "ShareView",
  props: {
    stepName: { default: "default-step" }
  },
  setup(e) {
    const t = e, s = Qr(), { fields: n, records: i } = Sg(s);
    return zr(() => {
      t.stepName ? (console.log("ShareView: 使用 stepName =", t.stepName), console.log("tableStore.fetchTableData:", s.fetchTableData), s.fetchTableData(t.stepName)) : console.error("ShareView: 未提供 stepName prop。");
    }), (o, r) => (Y(), tt("div", h0, [
      L("div", p0, [
        L("main", g0, [
          bt(d0)
        ])
      ])
    ]));
  }
}), m0 = /* @__PURE__ */ Rp({
  // 继承 ShareView 组件
  extends: mc,
  // setup 函数用于注入依赖
  setup(e) {
    const t = _g();
    return pr({}).use(t), () => en(mc, { ...e, pinia: t });
  }
  // ⚠️ 如果 ShareView 内部使用 <script setup>，需确保它能接收 pinia prop
}, { shadowRoot: !1 });
customElements.define("share-view", m0);
export {
  m0 as default
};
