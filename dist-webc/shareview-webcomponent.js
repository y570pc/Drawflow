var If = Object.defineProperty;
var Ef = (e, t, s) => t in e ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var st = (e, t, s) => Ef(e, typeof t != "symbol" ? t + "" : t, s);
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
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ki = (e) => e.startsWith("onUpdate:"), Ct = Object.assign, Tr = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Af = Object.prototype.hasOwnProperty, rt = (e, t) => Af.call(e, t), W = Array.isArray, Ss = (e) => ei(e) === "[object Map]", ln = (e) => ei(e) === "[object Set]", ga = (e) => ei(e) === "[object Date]", Q = (e) => typeof e == "function", kt = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", ut = (e) => e !== null && typeof e == "object", Dr = (e) => (ut(e) || Q(e)) && Q(e.then) && Q(e.catch), bc = Object.prototype.toString, ei = (e) => bc.call(e), Pr = (e) => ei(e).slice(8, -1), mo = (e) => ei(e) === "[object Object]", Ir = (e) => kt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Cn = /* @__PURE__ */ We(
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
  const t = kt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let _a;
const si = () => _a || (_a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ze(e) {
  if (W(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = kt(n) ? Vf(n) : Ze(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (kt(e) || ut(e))
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
  if (kt(e))
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
const vc = (e) => !!(e && e.__v_isRef === !0), Mt = (e) => kt(e) ? e : e == null ? "" : W(e) || ut(e) && (e.toString === bc || !Q(e.toString)) ? vc(e) ? Mt(e.value) : JSON.stringify(e, xc, 2) : String(e), xc = (e, t) => vc(t) ? xc(e, t.value) : Ss(t) ? {
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
      Ct(
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
            Ct(
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
  return t === e ? t : (Et(t, "iterate", zn), Xt(e) ? t : t.map($t));
}
function bo(e) {
  return Et(e = J(e), "iterate", zn), e;
}
const ed = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ro(this, Symbol.iterator, $t);
  },
  concat(...e) {
    return Vs(this).concat(
      ...e.map((t) => W(t) ? Vs(t) : t)
    );
  },
  entries() {
    return Ro(this, "entries", (e) => (e[1] = $t(e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(this, "filter", e, t, (s) => s.map($t), arguments);
  },
  find(e, t) {
    return Le(this, "find", e, t, $t, arguments);
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(this, "findLast", e, t, $t, arguments);
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
    return Ro(this, "values", $t);
  }
};
function Ro(e, t, s) {
  const n = bo(e), i = n[t]();
  return n !== e && !Xt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = s(o.value)), o;
  }), i;
}
const sd = Array.prototype;
function Le(e, t, s, n, i, o) {
  const r = bo(e), a = r !== e && !Xt(e), l = r[t];
  if (l !== sd[t]) {
    const f = l.apply(e, o);
    return a ? $t(f) : f;
  }
  let c = s;
  r !== e && (a ? c = function(f, d) {
    return s.call(this, $t(f), d, e);
  } : s.length > 2 && (c = function(f, d) {
    return s.call(this, f, d, e);
  }));
  const u = l.call(r, c, n);
  return a && i ? i(u) : u;
}
function ya(e, t, s, n) {
  const i = bo(e);
  let o = s;
  return i !== e && (Xt(e) ? s.length > 3 && (o = function(r, a, l) {
    return s.call(this, r, a, l, e);
  }) : o = function(r, a, l) {
    return s.call(this, r, $t(a), l, e);
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
      _t(t) ? t : n
    );
    return (Ie(s) ? Ac.has(s) : nd(s)) || (i || Et(t, "get", s), o) ? a : _t(a) ? r && Ir(s) ? a : a.value : ut(a) ? i ? Hc(a) : ii(a) : a;
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
      if (!Xt(n) && !Ee(n) && (o = J(o), n = J(n)), !W(t) && _t(o) && !_t(n))
        return l ? (le(
          `Set operation on key "${String(s)}" failed: target is readonly.`,
          t[s]
        ), !0) : (o.value = n, !0);
    }
    const r = W(t) && Ir(s) ? Number(s) < t.length : rt(t, s), a = Reflect.set(
      t,
      s,
      n,
      _t(t) ? t : i
    );
    return t === J(i) && (r ? as(n, o) && Oe(t, "set", s, n, o) : Oe(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = rt(t, s), i = t[s], o = Reflect.deleteProperty(t, s);
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
    const i = this.__v_raw, o = J(i), r = Ss(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = i[e](...n), u = s ? er : t ? Xi : $t;
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
      const { has: l } = fi(r), c = t ? er : e ? Xi : $t;
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
      const r = this, a = r.__v_raw, l = J(a), c = t ? er : e ? Xi : $t;
      return !e && Et(l, "iterate", ks), a.forEach((u, f) => i.call(o, c(u), c(f), r));
    }
  };
  return Ct(
    s,
    e ? {
      add: di("add"),
      set: di("set"),
      delete: di("delete"),
      clear: di("clear")
    } : {
      add(i) {
        !t && !Xt(i) && !Ee(i) && (i = J(i));
        const o = J(this);
        return fi(o).has.call(o, i) || (o.add(i), Oe(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !Xt(o) && !Ee(o) && (o = J(o));
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
    rt(s, i) && i in n ? s : n,
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
function Xt(e) {
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
  return !rt(e, "__v_skip") && Object.isExtensible(e) && Yi(e, "__v_skip", !0), e;
}
const $t = (e) => ut(e) ? ii(e) : e, Xi = (e) => ut(e) ? Hc(e) : e;
function _t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function mt(e) {
  return Bc(e, !1);
}
function zc(e) {
  return Bc(e, !0);
}
function Bc(e, t) {
  return _t(e) ? e : new bd(e, t);
}
class bd {
  constructor(t, s) {
    this.dep = new $r(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : J(t), this._value = s ? t : $t(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || Xt(t) || Ee(t);
    t = n ? t : J(t), as(t, s) && (this._rawValue = t, this._value = n ? t : $t(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: s
    }));
  }
}
function wt(e) {
  return _t(e) ? e.value : e;
}
const yd = {
  get: (e, t, s) => t === "__v_raw" ? e : wt(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return _t(i) && !_t(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
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
  return _t(e) ? e : Q(e) ? new xd(e) : ut(e) && arguments.length > 1 ? Wc(e, t, s) : mt(e);
}
function Wc(e, t, s) {
  const n = e[t];
  return _t(n) ? n : new vd(e, t, s);
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
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = s, c = (O) => {
    (s.onWarn || le)(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (O) => i ? O : Xt(O) || i === !1 || i === 0 ? He(O, 1) : He(O);
  let f, d, p, b, _ = !1, g = !1;
  if (_t(e) ? (d = () => e.value, _ = Xt(e)) : ge(e) ? (d = () => u(e), _ = !0) : W(e) ? (g = !0, _ = e.some((O) => ge(O) || Xt(O)), d = () => e.map((O) => {
    if (_t(O))
      return O.value;
    if (ge(O))
      return u(O);
    if (Q(O))
      return l ? l(O, 2) : O();
    c(O);
  })) : Q(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      me();
      try {
        p();
      } finally {
        _e();
      }
    }
    const O = _s;
    _s = f;
    try {
      return l ? l(e, 3, [b]) : e(b);
    } finally {
      _s = O;
    }
  } : (d = Wt, c(e)), t && i) {
    const O = d, U = i === !0 ? 1 / 0 : i;
    d = () => He(O(), U);
  }
  const x = kc(), M = () => {
    f.stop(), x && x.active && Tr(x.effects, f);
  };
  if (o && t) {
    const O = t;
    t = (...U) => {
      O(...U), M();
    };
  }
  let H = g ? new Array(e.length).fill(hi) : hi;
  const K = (O) => {
    if (!(!(f.flags & 1) || !f.dirty && !O))
      if (t) {
        const U = f.run();
        if (i || _ || (g ? U.some((w, S) => as(w, H[S])) : as(U, H))) {
          p && p();
          const w = _s;
          _s = f;
          try {
            const S = [
              U,
              // pass undefined as the old value when it's changed for the first time
              H === hi ? void 0 : g && H[0] === hi ? [] : H,
              b
            ];
            H = U, l ? l(t, 3, S) : (
              // @ts-expect-error
              t(...S)
            );
          } finally {
            _s = w;
          }
        }
      } else
        f.run();
  };
  return a && a(K), f = new Oc(d), f.scheduler = r ? () => r(K, !1) : K, b = (O) => kd(O, !1, f), p = f.onStop = () => {
    const O = Ji.get(f);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const U of O) U();
      Ji.delete(f);
    }
  }, f.onTrack = s.onTrack, f.onTrigger = s.onTrigger, t ? n ? K(!0) : H = f.run() : r ? r(K.bind(null, !0), !0) : f.run(), M.pause = f.pause.bind(f), M.resume = f.resume.bind(f), M.stop = M, M;
}
function He(e, t = 1 / 0, s) {
  if (t <= 0 || !ut(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, _t(e))
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
function $(e, ...t) {
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
  return kt(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : _t(t) ? (t = Kc(e, J(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : Q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = J(t), s ? t : [`${e}=`, t]);
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
    $(
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
    if (s && Ei(s), $(`Unhandled error${o ? ` during execution of ${o}` : ""}`), s && Ai(), n)
      throw e;
    console.error(e);
  }
}
const Gt = [];
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
  let t = Se + 1, s = Gt.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Gt[n], o = Bn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function xo(e) {
  if (!(e.flags & 1)) {
    const t = Bn(e), s = Gt[Gt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Bn(s) ? Gt.push(e) : Gt.splice(Ed(t), 0, e), e.flags |= 1, qc();
  }
}
function qc() {
  Qi || (Qi = Yc.then(Jc));
}
function Gc(e) {
  W(e) ? Js.push(...e) : Je && e.id === -1 ? Je.splice(qs + 1, 0, e) : e.flags & 1 || (Js.push(e), e.flags |= 1), qc();
}
function wa(e, t, s = Se + 1) {
  for (t = t || /* @__PURE__ */ new Map(); s < Gt.length; s++) {
    const n = Gt[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid || Nr(t, n))
        continue;
      Gt.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
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
    for (Se = 0; Se < Gt.length; Se++) {
      const s = Gt[Se];
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
    for (; Se < Gt.length; Se++) {
      const s = Gt[Se];
      s && (s.flags &= -2);
    }
    Se = -1, Gt.length = 0, Xc(e), Qi = null, (Gt.length || Js.length) && Jc(e);
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
  Ct(e, t);
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
    Fragment: Ft,
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
  Rf(e) && $("Do not use built-in directive ids as custom directive id: " + e);
}
function Ye(e, t) {
  if (Kt === null)
    return $("withDirectives can only be used inside render functions."), e;
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
    Ct({ name: e.name }, t, { setup: e })
  ) : e;
}
function iu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ka = /* @__PURE__ */ new WeakSet(), eo = /* @__PURE__ */ new WeakMap();
function Pn(e, t, s, n, i = !1) {
  if (W(e)) {
    e.forEach(
      (_, g) => Pn(
        _,
        t && (W(t) ? t[g] : t),
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
    $(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, u = a.refs === dt ? a.refs = {} : a.refs, f = a.setupState, d = J(f), p = f === dt ? _c : (_) => (rt(d, _) && !_t(d[_]) && $(
    `Template ref "${_}" used on a non-ref value. It will not work in the production build.`
  ), ka.has(d[_]) ? !1 : rt(d, _)), b = (_) => !ka.has(_);
  if (c != null && c !== l) {
    if (Oa(t), kt(c))
      u[c] = null, p(c) && (f[c] = null);
    else if (_t(c)) {
      b(c) && (c.value = null);
      const _ = t;
      _.k && (u[_.k] = null);
    }
  }
  if (Q(l))
    cn(l, a, 12, [r, u]);
  else {
    const _ = kt(l), g = _t(l);
    if (_ || g) {
      const x = () => {
        if (e.f) {
          const M = _ ? p(l) ? f[l] : u[l] : b(l) || !e.k ? l.value : u[e.k];
          if (i)
            W(M) && Tr(M, o);
          else if (W(M))
            M.includes(o) || M.push(o);
          else if (_)
            u[l] = [o], p(l) && (f[l] = u[l]);
          else {
            const H = [o];
            b(l) && (l.value = H), e.k && (u[e.k] = H);
          }
        } else _ ? (u[l] = r, p(l) && (f[l] = r)) : g ? (b(l) && (l.value = r), e.k && (u[e.k] = r)) : $("Invalid template ref type:", l, `(${typeof l})`);
      };
      if (r) {
        const M = () => {
          x(), eo.delete(e);
        };
        M.id = -1, eo.set(e, M), ne(M, s);
      } else
        Oa(e), x();
    } else
      $("Invalid template ref type:", l, `(${typeof l})`);
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
    $(
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
  return kt(e) ? ah(rh, e, !1) || e : e || ru;
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
    return !r && n ? o : (s && !r && $(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else
    $(
      `resolve${As(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Ma(e, t) {
  return e && (e[t] || e[Rt(t)] || e[As(Rt(t))]);
}
function Ms(e, t, s, n) {
  let i;
  const o = s, r = W(e);
  if (r || kt(e)) {
    const a = r && ge(e);
    let l = !1, c = !1;
    a && (l = !Xt(e), c = Ee(e), e = bo(e)), i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      i[u] = t(
        l ? c ? Xi($t(e[u])) : $t(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || $(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
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
  /* @__PURE__ */ Ct(/* @__PURE__ */ Object.create(null), {
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
), Br = (e) => e === "_" || e === "$", No = (e, t) => e !== dt && !e.__isScriptSetup && rt(e, t), lu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: a, appContext: l } = e;
    if (t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const p = r[t];
      if (p !== void 0)
        switch (p) {
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
        if (i !== dt && rt(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && rt(c, t)
        )
          return r[t] = 3, o[t];
        if (s !== dt && rt(s, t))
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
    if (s !== dt && rt(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      d = l.config.globalProperties, rt(d, t)
    )
      return d[t];
    Kt && (!kt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== dt && Br(t[0]) && rt(i, t) ? $(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Kt && $(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return No(i, t) ? (i[t] = s, !0) : i.__isScriptSetup && rt(i, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== dt && rt(n, t) ? (n[t] = s, !0) : rt(e.props, t) ? ($(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ($(
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
    return !!(s[a] || e !== dt && a[0] !== "$" && rt(e, a) || No(t, a) || (l = o[0]) && rt(l, a) || rt(n, a) || rt(Cs, a) || rt(i.config.globalProperties, a) || (c = r.__cssModules) && c[a]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : rt(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
lu.ownKeys = (e) => ($(
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
        $(
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
    e[s] ? $(`${t} property "${s}" is already defined in ${e[s]}.`) : e[s] = t;
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
    beforeUpdate: p,
    updated: b,
    activated: _,
    deactivated: g,
    beforeDestroy: x,
    beforeUnmount: M,
    destroyed: H,
    unmounted: K,
    render: O,
    renderTracked: U,
    renderTriggered: w,
    errorCaptured: S,
    serverPrefetch: P,
    // public API
    expose: I,
    inheritAttrs: T,
    // assets
    components: B,
    directives: ot,
    filters: Tt
  } = t, nt = fh();
  {
    const [G] = e.propsOptions;
    if (G)
      for (const Z in G)
        nt("Props", Z);
  }
  if (c && hh(c, n, nt), r)
    for (const G in r) {
      const Z = r[G];
      Q(Z) ? (Object.defineProperty(n, G, {
        value: Z.bind(s),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), nt("Methods", G)) : $(
        `Method "${G}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    Q(i) || $(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = i.call(s, s);
    if (Dr(G) && $(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ut(G))
      $("data() should return an object.");
    else {
      e.data = ii(G);
      for (const Z in G)
        nt("Data", Z), Br(Z[0]) || Object.defineProperty(n, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => G[Z],
          set: Wt
        });
    }
  }
  if (ir = !0, o)
    for (const G in o) {
      const Z = o[G], lt = Q(Z) ? Z.bind(s, s) : Q(Z.get) ? Z.get.bind(s, s) : Wt;
      lt === Wt && $(`Computed property "${G}" has no getter.`);
      const xt = !Q(Z) && Q(Z.set) ? Z.set.bind(s) : () => {
        $(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      }, se = Nt({
        get: lt,
        set: xt
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => se.value,
        set: (Vt) => se.value = Vt
      }), nt("Computed", G);
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
  function it(G, Z) {
    W(Z) ? Z.forEach((lt) => G(lt.bind(s))) : Z && G(Z.bind(s));
  }
  if (it(Qd, f), it(zr, d), it(Zd, p), it(th, b), it(Gd, _), it(Xd, g), it(oh, S), it(ih, U), it(nh, w), it(eh, M), it(So, K), it(sh, P), W(I))
    if (I.length) {
      const G = e.exposed || (e.exposed = {});
      I.forEach((Z) => {
        Object.defineProperty(G, Z, {
          get: () => s[Z],
          set: (lt) => s[Z] = lt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Wt && (e.render = O), T != null && (e.inheritAttrs = T), B && (e.components = B), ot && (e.directives = ot), P && iu(e);
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
    ) : o = En(i.from || n) : o = En(i), _t(o) ? Object.defineProperty(t, n, {
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
  if (kt(e)) {
    const o = t[e];
    Q(o) ? Qs(i, o) : $(`Invalid watch handler specified by key "${e}"`, o);
  } else if (Q(e))
    Qs(i, e.bind(s));
  else if (ut(e))
    if (W(e))
      e.forEach((o) => cu(o, t, s, n));
    else {
      const o = Q(e.handler) ? e.handler.bind(s) : t[e.handler];
      Q(o) ? Qs(i, o, e) : $(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    $(`Invalid watch option: "${n}"`, e);
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
      $(
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
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
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
    return Ct(
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
function qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sn(e, t) {
  return e ? Ct(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pa(e, t) {
  return e ? W(e) && W(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ct(
    /* @__PURE__ */ Object.create(null),
    Ca(e),
    Ca(t ?? {})
  ) : t;
}
function mh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Ct(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = qt(e[n], t[n]);
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
    Q(n) || (n = Ct({}, n)), i != null && !ut(i) && ($("root props passed to app.mount() must be an object."), i = null);
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
        $(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return r.has(u) ? $("Plugin has already been applied to target app.") : u && Q(u.install) ? (r.add(u), u.install(c, ...f)) : Q(u) ? (r.add(u), u(c, ...f)) : $(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return o.mixins.includes(u) ? $(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : o.mixins.push(u), c;
      },
      component(u, f) {
        return fr(u, o.config), f ? (o.components[u] && $(`Component "${u}" has already been registered in target app.`), o.components[u] = f, c) : o.components[u];
      },
      directive(u, f) {
        return nu(u), f ? (o.directives[u] && $(`Directive "${u}" has already been registered in target app.`), o.directives[u] = f, c) : o.directives[u];
      },
      mount(u, f, d) {
        if (l)
          $(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          u.__vue_app__ && $(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = c._ceVNode || yt(n, i);
          return p.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), o.reload = () => {
            const b = cs(p);
            b.el = null, e(b, u, d);
          }, e(p, u, d), l = !0, c._container = u, u.__vue_app__ = c, c._instance = p.component, Fd(c, dr), Mo(p.component);
        }
      },
      onUnmount(u) {
        typeof u != "function" && $(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (Ae(
          a,
          c._instance,
          16
        ), e(null, c._container), c._instance = null, Nd(c), delete c._container.__vue_app__) : $("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return u in o.provides && (rt(o.provides, u) ? $(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : $(
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
    $("provide() can only be used inside setup().");
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
    $(`injection "${String(e)}" not found.`);
  } else
    $("inject() can only be used inside setup() or functional components.");
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
        const p = t[d];
        if (l)
          if (rt(o, d))
            p !== o[d] && (o[d] = p, c = !0);
          else {
            const b = Rt(d);
            i[b] = rr(
              l,
              a,
              b,
              p,
              e,
              !1
            );
          }
        else
          p !== o[d] && (o[d] = p, c = !0);
      }
    }
  } else {
    gu(e, t, i, o) && (c = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !rt(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ie(f)) === f || !rt(t, u))) && (l ? s && // for camelCase
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
        (!t || !rt(t, f)) && (delete o[f], c = !0);
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
      i && rt(i, u = Rt(l)) ? !o || !o.includes(u) ? s[u] = c : (a || (a = {}))[u] = c : ko(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
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
        !rt(c, f)
      );
    }
  }
  return r;
}
function rr(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const a = rt(r, "default");
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
      const [d, p] = mu(f, t, !0);
      Ct(r, d), p && a.push(...p);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return ut(e) && n.set(e, Xs), Xs;
  if (W(o))
    for (let u = 0; u < o.length; u++) {
      kt(o[u]) || $("props must be strings when using array syntax.", o[u]);
      const f = Rt(o[u]);
      Ia(f) && (r[f] = dt);
    }
  else if (o) {
    ut(o) || $("invalid props options", o);
    for (const u in o) {
      const f = Rt(u);
      if (Ia(f)) {
        const d = o[u], p = r[f] = W(d) || Q(d) ? { type: d } : Ct({}, d), b = p.type;
        let _ = !1, g = !0;
        if (W(b))
          for (let x = 0; x < b.length; ++x) {
            const M = b[x], H = Q(M) && M.name;
            if (H === "Boolean") {
              _ = !0;
              break;
            } else H === "String" && (g = !1);
          }
        else
          _ = Q(b) && b.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = g, (_ || rt(p, "default")) && a.push(f);
      }
    }
  }
  const c = [r, a];
  return ut(e) && n.set(e, c), c;
}
function Ia(e) {
  return e[0] !== "$" && !Cn(e) ? !0 : ($(`Invalid prop name: "${e}" is a reserved property.`), !1);
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
    $('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !l) {
      let c = !1;
      const u = W(o) ? o : [o], f = [];
      for (let d = 0; d < u.length && !c; d++) {
        const { valid: p, expectedType: b } = Th(t, u[d]);
        f.push(b || ""), c = p;
      }
      if (!c) {
        $(Dh(e, t, f));
        return;
      }
    }
    a && !a(t, n) && $('Invalid prop: custom validator check failed for prop "' + e + '".');
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
  const n = Wd((...i) => (Xe.NODE_ENV !== "production" && At && !(s === null && Kt) && !(s && s.root !== At.root) && $(
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
      $(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Wr(o);
      t[i] = () => r;
    }
  }
}, yu = (e, t) => {
  Hr(e.vnode) || $(
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
    setScopeId: p = Wt,
    insertStaticContent: b
  } = e, _ = (h, m, k, E = null, D = null, C = null, V = void 0, F = null, L = Te ? !1 : !!m.dynamicChildren) => {
    if (h === m)
      return;
    h && !gn(h, m) && (E = j(h), Lt(h, D, C, !0), h = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: A, ref: X, shapeFlag: z } = m;
    switch (A) {
      case ai:
        g(h, m, k, E);
        break;
      case re:
        x(h, m, k, E);
        break;
      case Li:
        h == null ? M(m, k, E, V) : H(h, m, k, V);
        break;
      case Ft:
        ot(
          h,
          m,
          k,
          E,
          D,
          C,
          V,
          F,
          L
        );
        break;
      default:
        z & 1 ? U(
          h,
          m,
          k,
          E,
          D,
          C,
          V,
          F,
          L
        ) : z & 6 ? Tt(
          h,
          m,
          k,
          E,
          D,
          C,
          V,
          F,
          L
        ) : z & 64 || z & 128 ? A.process(
          h,
          m,
          k,
          E,
          D,
          C,
          V,
          F,
          L,
          ct
        ) : $("Invalid VNode type:", A, `(${typeof A})`);
    }
    X != null && D ? Pn(X, h && h.ref, C, m || h, !m) : X == null && h && h.ref != null && Pn(h.ref, null, C, h, !0);
  }, g = (h, m, k, E) => {
    if (h == null)
      n(
        m.el = a(m.children),
        k,
        E
      );
    else {
      const D = m.el = h.el;
      m.children !== h.children && c(D, m.children);
    }
  }, x = (h, m, k, E) => {
    h == null ? n(
      m.el = l(m.children || ""),
      k,
      E
    ) : m.el = h.el;
  }, M = (h, m, k, E) => {
    [h.el, h.anchor] = b(
      h.children,
      m,
      k,
      E,
      h.el,
      h.anchor
    );
  }, H = (h, m, k, E) => {
    if (m.children !== h.children) {
      const D = d(h.anchor);
      O(h), [m.el, m.anchor] = b(
        m.children,
        k,
        D,
        E
      );
    } else
      m.el = h.el, m.anchor = h.anchor;
  }, K = ({ el: h, anchor: m }, k, E) => {
    let D;
    for (; h && h !== m; )
      D = d(h), n(h, k, E), h = D;
    n(m, k, E);
  }, O = ({ el: h, anchor: m }) => {
    let k;
    for (; h && h !== m; )
      k = d(h), i(h), h = k;
    i(m);
  }, U = (h, m, k, E, D, C, V, F, L) => {
    m.type === "svg" ? V = "svg" : m.type === "math" && (V = "mathml"), h == null ? w(
      m,
      k,
      E,
      D,
      C,
      V,
      F,
      L
    ) : I(
      h,
      m,
      D,
      C,
      V,
      F,
      L
    );
  }, w = (h, m, k, E, D, C, V, F) => {
    let L, A;
    const { props: X, shapeFlag: z, transition: q, dirs: et } = h;
    if (L = h.el = r(
      h.type,
      C,
      X && X.is,
      X
    ), z & 8 ? u(L, h.children) : z & 16 && P(
      h.children,
      L,
      null,
      E,
      D,
      jo(h, C),
      V,
      F
    ), et && fs(h, null, E, "created"), S(L, h, h.scopeId, V, E), X) {
      for (const bt in X)
        bt !== "value" && !Cn(bt) && o(L, bt, null, X[bt], C, E);
      "value" in X && o(L, "value", null, X.value, C), (A = X.onVnodeBeforeMount) && xe(A, E, h);
    }
    Yi(L, "__vnode", h, !0), Yi(L, "__vueParentComponent", E, !0), et && fs(h, null, E, "beforeMount");
    const at = Fh(D, q);
    at && q.beforeEnter(L), n(L, m, k), ((A = X && X.onVnodeMounted) || at || et) && ne(() => {
      A && xe(A, E, h), at && q.enter(L), et && fs(h, null, E, "mounted");
    }, D);
  }, S = (h, m, k, E, D) => {
    if (k && p(h, k), E)
      for (let C = 0; C < E.length; C++)
        p(h, E[C]);
    if (D) {
      let C = D.subTree;
      if (C.patchFlag > 0 && C.patchFlag & 2048 && (C = Kr(C.children) || C), m === C || Ou(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const V = D.vnode;
        S(
          h,
          V,
          V.scopeId,
          V.slotScopeIds,
          D.parent
        );
      }
    }
  }, P = (h, m, k, E, D, C, V, F, L = 0) => {
    for (let A = L; A < h.length; A++) {
      const X = h[A] = F ? Qe(h[A]) : he(h[A]);
      _(
        null,
        X,
        m,
        k,
        E,
        D,
        C,
        V,
        F
      );
    }
  }, I = (h, m, k, E, D, C, V) => {
    const F = m.el = h.el;
    F.__vnode = m;
    let { patchFlag: L, dynamicChildren: A, dirs: X } = m;
    L |= h.patchFlag & 16;
    const z = h.props || dt, q = m.props || dt;
    let et;
    if (k && ds(k, !1), (et = q.onVnodeBeforeUpdate) && xe(et, k, m, h), X && fs(m, h, k, "beforeUpdate"), k && ds(k, !0), Te && (L = 0, V = !1, A = null), (z.innerHTML && q.innerHTML == null || z.textContent && q.textContent == null) && u(F, ""), A ? (T(
      h.dynamicChildren,
      A,
      F,
      k,
      E,
      jo(m, D),
      C
    ), lr(h, m)) : V || lt(
      h,
      m,
      F,
      null,
      k,
      E,
      jo(m, D),
      C,
      !1
    ), L > 0) {
      if (L & 16)
        B(F, z, q, k, D);
      else if (L & 2 && z.class !== q.class && o(F, "class", null, q.class, D), L & 4 && o(F, "style", z.style, q.style, D), L & 8) {
        const at = m.dynamicProps;
        for (let bt = 0; bt < at.length; bt++) {
          const pt = at[bt], Zt = z[pt], te = q[pt];
          (te !== Zt || pt === "value") && o(F, pt, Zt, te, D, k);
        }
      }
      L & 1 && h.children !== m.children && u(F, m.children);
    } else !V && A == null && B(F, z, q, k, D);
    ((et = q.onVnodeUpdated) || X) && ne(() => {
      et && xe(et, k, m, h), X && fs(m, h, k, "updated");
    }, E);
  }, T = (h, m, k, E, D, C, V) => {
    for (let F = 0; F < m.length; F++) {
      const L = h[F], A = m[F], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === Ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gn(L, A) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? f(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      _(
        L,
        A,
        X,
        null,
        E,
        D,
        C,
        V,
        !0
      );
    }
  }, B = (h, m, k, E, D) => {
    if (m !== k) {
      if (m !== dt)
        for (const C in m)
          !Cn(C) && !(C in k) && o(
            h,
            C,
            m[C],
            null,
            D,
            E
          );
      for (const C in k) {
        if (Cn(C)) continue;
        const V = k[C], F = m[C];
        V !== F && C !== "value" && o(h, C, F, V, D, E);
      }
      "value" in k && o(h, "value", m.value, k.value, D);
    }
  }, ot = (h, m, k, E, D, C, V, F, L) => {
    const A = m.el = h ? h.el : a(""), X = m.anchor = h ? h.anchor : a("");
    let { patchFlag: z, dynamicChildren: q, slotScopeIds: et } = m;
    // #5523 dev root fragment may inherit directives
    (Te || z & 2048) && (z = 0, L = !1, q = null), et && (F = F ? F.concat(et) : et), h == null ? (n(A, k, E), n(X, k, E), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      k,
      X,
      D,
      C,
      V,
      F,
      L
    )) : z > 0 && z & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (T(
      h.dynamicChildren,
      q,
      k,
      D,
      C,
      V,
      F
    ), lr(h, m)) : lt(
      h,
      m,
      k,
      X,
      D,
      C,
      V,
      F,
      L
    );
  }, Tt = (h, m, k, E, D, C, V, F, L) => {
    m.slotScopeIds = F, h == null ? m.shapeFlag & 512 ? D.ctx.activate(
      m,
      k,
      E,
      V,
      L
    ) : nt(
      m,
      k,
      E,
      D,
      C,
      V,
      L
    ) : it(h, m, L);
  }, nt = (h, m, k, E, D, C, V) => {
    const F = h.component = np(
      h,
      E,
      D
    );
    if (F.type.__hmrId && Ad(F), Ei(h), Hs(F, "mount"), Hr(h) && (F.ctx.renderer = ct), Hs(F, "init"), op(F, !1, V), zs(F, "init"), Te && (h.el = null), F.asyncDep) {
      if (D && D.registerDep(F, G, V), !h.el) {
        const L = F.subTree = yt(re);
        x(null, L, m, k), h.placeholder = L.el;
      }
    } else
      G(
        F,
        h,
        m,
        k,
        D,
        C,
        V
      );
    Ai(), zs(F, "mount");
  }, it = (h, m, k) => {
    const E = m.component = h.component;
    if (Yh(h, m, k))
      if (E.asyncDep && !E.asyncResolved) {
        Ei(m), Z(E, m, k), Ai();
        return;
      } else
        E.next = m, E.update();
    else
      m.el = h.el, E.vnode = m;
  }, G = (h, m, k, E, D, C, V) => {
    const F = () => {
      if (h.isMounted) {
        let { next: z, bu: q, u: et, parent: at, vnode: bt } = h;
        {
          const ye = vu(h);
          if (ye) {
            z && (z.el = bt.el, Z(h, z, V)), ye.asyncDep.then(() => {
              h.isUnmounted || F();
            });
            return;
          }
        }
        let pt = z, Zt;
        Ei(z || h.vnode), ds(h, !1), z ? (z.el = bt.el, Z(h, z, V)) : z = bt, q && Ys(q), (Zt = z.props && z.props.onVnodeBeforeUpdate) && xe(Zt, at, z, bt), ds(h, !0), Hs(h, "render");
        const te = La(h);
        zs(h, "render");
        const be = h.subTree;
        h.subTree = te, Hs(h, "patch"), _(
          be,
          te,
          // parent may have changed if it's in a teleport
          f(be.el),
          // anchor may have changed if it's in a fragment
          j(be),
          h,
          D,
          C
        ), zs(h, "patch"), z.el = te.el, pt === null && qh(h, te.el), et && ne(et, D), (Zt = z.props && z.props.onVnodeUpdated) && ne(
          () => xe(Zt, at, z, bt),
          D
        ), tu(h), Ai();
      } else {
        let z;
        const { el: q, props: et } = m, { bm: at, m: bt, parent: pt, root: Zt, type: te } = h, be = In(m);
        ds(h, !1), at && Ys(at), !be && (z = et && et.onVnodeBeforeMount) && xe(z, pt, m), ds(h, !0);
        {
          Zt.ce && // @ts-expect-error _def is private
          Zt.ce._def.shadowRoot !== !1 && Zt.ce._injectChildStyle(te), Hs(h, "render");
          const ye = h.subTree = La(h);
          zs(h, "render"), Hs(h, "patch"), _(
            null,
            ye,
            k,
            E,
            h,
            D,
            C
          ), zs(h, "patch"), m.el = ye.el;
        }
        if (bt && ne(bt, D), !be && (z = et && et.onVnodeMounted)) {
          const ye = m;
          ne(
            () => xe(z, pt, ye),
            D
          );
        }
        (m.shapeFlag & 256 || pt && In(pt.vnode) && pt.vnode.shapeFlag & 256) && h.a && ne(h.a, D), h.isMounted = !0, jd(h), m = k = E = null;
      }
    };
    h.scope.on();
    const L = h.effect = new Oc(F);
    h.scope.off();
    const A = h.update = L.run.bind(L), X = h.job = L.runIfDirty.bind(L);
    X.i = h, X.id = h.uid, L.scheduler = () => xo(X), ds(h, !0), L.onTrack = h.rtc ? (z) => Ys(h.rtc, z) : void 0, L.onTrigger = h.rtg ? (z) => Ys(h.rtg, z) : void 0, A();
  }, Z = (h, m, k) => {
    m.component = h;
    const E = h.vnode.props;
    h.vnode = m, h.next = null, Sh(h, m.props, E, k), Ah(h, m.children, k), me(), wa(h), _e();
  }, lt = (h, m, k, E, D, C, V, F, L = !1) => {
    const A = h && h.children, X = h ? h.shapeFlag : 0, z = m.children, { patchFlag: q, shapeFlag: et } = m;
    if (q > 0) {
      if (q & 128) {
        se(
          A,
          z,
          k,
          E,
          D,
          C,
          V,
          F,
          L
        );
        return;
      } else if (q & 256) {
        xt(
          A,
          z,
          k,
          E,
          D,
          C,
          V,
          F,
          L
        );
        return;
      }
    }
    et & 8 ? (X & 16 && N(A, D, C), z !== A && u(k, z)) : X & 16 ? et & 16 ? se(
      A,
      z,
      k,
      E,
      D,
      C,
      V,
      F,
      L
    ) : N(A, D, C, !0) : (X & 8 && u(k, ""), et & 16 && P(
      z,
      k,
      E,
      D,
      C,
      V,
      F,
      L
    ));
  }, xt = (h, m, k, E, D, C, V, F, L) => {
    h = h || Xs, m = m || Xs;
    const A = h.length, X = m.length, z = Math.min(A, X);
    let q;
    for (q = 0; q < z; q++) {
      const et = m[q] = L ? Qe(m[q]) : he(m[q]);
      _(
        h[q],
        et,
        k,
        null,
        D,
        C,
        V,
        F,
        L
      );
    }
    A > X ? N(
      h,
      D,
      C,
      !0,
      !1,
      z
    ) : P(
      m,
      k,
      E,
      D,
      C,
      V,
      F,
      L,
      z
    );
  }, se = (h, m, k, E, D, C, V, F, L) => {
    let A = 0;
    const X = m.length;
    let z = h.length - 1, q = X - 1;
    for (; A <= z && A <= q; ) {
      const et = h[A], at = m[A] = L ? Qe(m[A]) : he(m[A]);
      if (gn(et, at))
        _(
          et,
          at,
          k,
          null,
          D,
          C,
          V,
          F,
          L
        );
      else
        break;
      A++;
    }
    for (; A <= z && A <= q; ) {
      const et = h[z], at = m[q] = L ? Qe(m[q]) : he(m[q]);
      if (gn(et, at))
        _(
          et,
          at,
          k,
          null,
          D,
          C,
          V,
          F,
          L
        );
      else
        break;
      z--, q--;
    }
    if (A > z) {
      if (A <= q) {
        const et = q + 1, at = et < X ? m[et].el : E;
        for (; A <= q; )
          _(
            null,
            m[A] = L ? Qe(m[A]) : he(m[A]),
            k,
            at,
            D,
            C,
            V,
            F,
            L
          ), A++;
      }
    } else if (A > q)
      for (; A <= z; )
        Lt(h[A], D, C, !0), A++;
    else {
      const et = A, at = A, bt = /* @__PURE__ */ new Map();
      for (A = at; A <= q; A++) {
        const Yt = m[A] = L ? Qe(m[A]) : he(m[A]);
        Yt.key != null && (bt.has(Yt.key) && $(
          "Duplicate keys found during update:",
          JSON.stringify(Yt.key),
          "Make sure keys are unique."
        ), bt.set(Yt.key, A));
      }
      let pt, Zt = 0;
      const te = q - at + 1;
      let be = !1, ye = 0;
      const dn = new Array(te);
      for (A = 0; A < te; A++) dn[A] = 0;
      for (A = et; A <= z; A++) {
        const Yt = h[A];
        if (Zt >= te) {
          Lt(Yt, D, C, !0);
          continue;
        }
        let ve;
        if (Yt.key != null)
          ve = bt.get(Yt.key);
        else
          for (pt = at; pt <= q; pt++)
            if (dn[pt - at] === 0 && gn(Yt, m[pt])) {
              ve = pt;
              break;
            }
        ve === void 0 ? Lt(Yt, D, C, !0) : (dn[ve - at] = A + 1, ve >= ye ? ye = ve : be = !0, _(
          Yt,
          m[ve],
          k,
          null,
          D,
          C,
          V,
          F,
          L
        ), Zt++);
      }
      const da = be ? Nh(dn) : Xs;
      for (pt = da.length - 1, A = te - 1; A >= 0; A--) {
        const Yt = at + A, ve = m[Yt], ha = m[Yt + 1], pa = Yt + 1 < X ? (
          // #13559, fallback to el placeholder for unresolved async component
          ha.el || ha.placeholder
        ) : E;
        dn[A] === 0 ? _(
          null,
          ve,
          k,
          pa,
          D,
          C,
          V,
          F,
          L
        ) : be && (pt < 0 || A !== da[pt] ? Vt(ve, k, pa, 2) : pt--);
      }
    }
  }, Vt = (h, m, k, E, D = null) => {
    const { el: C, type: V, transition: F, children: L, shapeFlag: A } = h;
    if (A & 6) {
      Vt(h.component.subTree, m, k, E);
      return;
    }
    if (A & 128) {
      h.suspense.move(m, k, E);
      return;
    }
    if (A & 64) {
      V.move(h, m, k, ct);
      return;
    }
    if (V === Ft) {
      n(C, m, k);
      for (let z = 0; z < L.length; z++)
        Vt(L[z], m, k, E);
      n(h.anchor, m, k);
      return;
    }
    if (V === Li) {
      K(h, m, k);
      return;
    }
    if (E !== 2 && A & 1 && F)
      if (E === 0)
        F.beforeEnter(C), n(C, m, k), ne(() => F.enter(C), D);
      else {
        const { leave: z, delayLeave: q, afterLeave: et } = F, at = () => {
          h.ctx.isUnmounted ? i(C) : n(C, m, k);
        }, bt = () => {
          C._isLeaving && C[qd](
            !0
            /* cancelled */
          ), z(C, () => {
            at(), et && et();
          });
        };
        q ? q(C, at, bt) : bt();
      }
    else
      n(C, m, k);
  }, Lt = (h, m, k, E = !1, D = !1) => {
    const {
      type: C,
      props: V,
      ref: F,
      children: L,
      dynamicChildren: A,
      shapeFlag: X,
      patchFlag: z,
      dirs: q,
      cacheIndex: et
    } = h;
    if (z === -2 && (D = !1), F != null && (me(), Pn(F, null, k, h, !0), _e()), et != null && (m.renderCache[et] = void 0), X & 256) {
      m.ctx.deactivate(h);
      return;
    }
    const at = X & 1 && q, bt = !In(h);
    let pt;
    if (bt && (pt = V && V.onVnodeBeforeUnmount) && xe(pt, m, h), X & 6)
      v(h.component, k, E);
    else {
      if (X & 128) {
        h.suspense.unmount(k, E);
        return;
      }
      at && fs(h, null, m, "beforeUnmount"), X & 64 ? h.type.remove(
        h,
        m,
        k,
        ct,
        E
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== Ft || z > 0 && z & 64) ? N(
        A,
        m,
        k,
        !1,
        !0
      ) : (C === Ft && z & 384 || !D && X & 16) && N(L, m, k), E && Qt(h);
    }
    (bt && (pt = V && V.onVnodeUnmounted) || at) && ne(() => {
      pt && xe(pt, m, h), at && fs(h, null, m, "unmounted");
    }, k);
  }, Qt = (h) => {
    const { type: m, el: k, anchor: E, transition: D } = h;
    if (m === Ft) {
      h.patchFlag > 0 && h.patchFlag & 2048 && D && !D.persisted ? h.children.forEach((V) => {
        V.type === re ? i(V.el) : Qt(V);
      }) : y(k, E);
      return;
    }
    if (m === Li) {
      O(h);
      return;
    }
    const C = () => {
      i(k), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (h.shapeFlag & 1 && D && !D.persisted) {
      const { leave: V, delayLeave: F } = D, L = () => V(k, C);
      F ? F(h.el, C, L) : L();
    } else
      C();
  }, y = (h, m) => {
    let k;
    for (; h !== m; )
      k = d(h), i(h), h = k;
    i(m);
  }, v = (h, m, k) => {
    h.type.__hmrId && Rd(h);
    const { bum: E, scope: D, job: C, subTree: V, um: F, m: L, a: A } = h;
    Ra(L), Ra(A), E && Ys(E), D.stop(), C && (C.flags |= 8, Lt(V, h, m, k)), F && ne(F, m), ne(() => {
      h.isUnmounted = !0;
    }, m), Hd(h);
  }, N = (h, m, k, E = !1, D = !1, C = 0) => {
    for (let V = C; V < h.length; V++)
      Lt(h[V], m, k, E, D);
  }, j = (h) => {
    if (h.shapeFlag & 6)
      return j(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const m = d(h.anchor || h.el), k = m && m[Kd];
    return k ? d(k) : m;
  };
  let gt = !1;
  const Ot = (h, m, k) => {
    h == null ? m._vnode && Lt(m._vnode, null, null, !0) : _(
      m._vnode || null,
      h,
      m,
      null,
      null,
      null,
      k
    ), m._vnode = h, gt || (gt = !0, wa(), Xc(), gt = !1);
  }, ct = {
    p: _,
    um: Lt,
    m: Vt,
    r: Qt,
    mt: nt,
    mc: P,
    pc: lt,
    pbc: T,
    n: j,
    o: e
  };
  return {
    render: Ot,
    hydrate: void 0,
    createApp: bh(Ot)
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
    return e || $(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Qs(e, t, s) {
  return Q(t) || $(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xu(e, t, s);
}
function xu(e, t, s = dt) {
  const { immediate: n, deep: i, flush: o, once: r } = s;
  t || (n !== void 0 && $(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && $(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && $(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Ct({}, s);
  a.onWarn = $;
  const l = t && n || !t && o !== "post";
  let c;
  if (Wn) {
    if (o === "sync") {
      const p = Vh();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Wt, p.resume = Wt, p.pause = Wt, p;
    }
  }
  const u = At;
  a.call = (p, b, _) => Ae(p, u, b, _);
  let f = !1;
  o === "post" ? a.scheduler = (p) => {
    ne(p, u && u.suspense);
  } : o !== "sync" && (f = !0, a.scheduler = (p, b) => {
    b ? p() : xo(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const d = Od(e, t, a);
  return Wn && (c ? c.push(d) : l && d()), d;
}
function Hh(e, t, s) {
  const n = this.proxy, i = kt(e) ? e.includes(".") ? wu(n, e) : () => n[e] : e.bind(n, n);
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
        (!f || !(ms(Rt(t)) in f)) && $(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ms(Rt(t))}" prop.`
        );
      else {
        const d = u[t];
        Q(d) && (d(...s) || $(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = s;
  const o = t.startsWith("update:"), r = o && zh(n, t.slice(7));
  r && (r.trim && (i = s.map((u) => kt(u) ? u.trim() : u)), r.number && (i = s.map(qi))), Ud(e, t, i);
  {
    const u = t.toLowerCase();
    u !== t && n[ms(u)] && $(
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
      u && (a = !0, Ct(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (ut(e) && n.set(e, null), null) : (W(o) ? o.forEach((l) => r[l] = null) : Ct(r, o), ut(e) && n.set(e, r), r);
}
function ko(e, t) {
  return !e || !ti(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, ie(t)) || rt(e, t));
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
    setupState: p,
    ctx: b,
    inheritAttrs: _
  } = e, g = to(e);
  let x, M;
  cr = !1;
  try {
    if (s.shapeFlag & 4) {
      const O = i || n, U = Xe.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(O, {
        get(w, S, P) {
          return $(
            `Property '${String(
              S
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(w, S, P);
        }
      }) : O;
      x = he(
        c.call(
          U,
          O,
          u,
          Xe.NODE_ENV !== "production" ? Ce(f) : f,
          p,
          d,
          b
        )
      ), M = a;
    } else {
      const O = t;
      Xe.NODE_ENV !== "production" && a === f && io(), x = he(
        O.length > 1 ? O(
          Xe.NODE_ENV !== "production" ? Ce(f) : f,
          Xe.NODE_ENV !== "production" ? {
            get attrs() {
              return io(), Ce(a);
            },
            slots: r,
            emit: l
          } : { attrs: a, slots: r, emit: l }
        ) : O(
          Xe.NODE_ENV !== "production" ? Ce(f) : f,
          null
        )
      ), M = t.props ? a : Wh(a);
    }
  } catch (O) {
    An.length = 0, oi(O, e, 1), x = yt(re);
  }
  let H = x, K;
  if (x.patchFlag > 0 && x.patchFlag & 2048 && ([H, K] = ku(x)), M && _ !== !1) {
    const O = Object.keys(M), { shapeFlag: U } = H;
    if (O.length) {
      if (U & 7)
        o && O.some(Ki) && (M = Kh(
          M,
          o
        )), H = cs(H, M, !1, !0);
      else if (!cr && H.type !== re) {
        const w = Object.keys(a), S = [], P = [];
        for (let I = 0, T = w.length; I < T; I++) {
          const B = w[I];
          ti(B) ? Ki(B) || S.push(B[2].toLowerCase() + B.slice(3)) : P.push(B);
        }
        P.length && $(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), S.length && $(
          `Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return s.dirs && ($a(H) || $(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = cs(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(s.dirs) : s.dirs), s.transition && ($a(H) || $(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Vr(H, s.transition)), K ? K(H) : x = H, to(g), x;
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
const Ft = Symbol.for("v-fgt"), ai = Symbol.for("v-txt"), re = Symbol.for("v-cmt"), Li = Symbol.for("v-stc"), An = [];
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
    R(
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
    yt(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? kt(e) || _t(e) || Q(e) ? { i: Kt, r: e, k: t, f: !!s } : e : null);
function R(e, t = null, s = null, n = 0, i = null, o = e === Ft ? 0 : 1, r = !1, a = !1) {
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
  return a ? (Yr(l, s), o & 128 && e.normalize(l)) : s && (l.shapeFlag |= kt(s) ? 8 : 16), l.key !== l.key && $("VNode created with invalid key (NaN). VNode type:", l.type), Un > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && oe.push(l), l;
}
const yt = Jh;
function Qh(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === ru) && (e || $(`Invalid vnode type when creating vnode: ${e}.`), e = re), tn(e)) {
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
    a && !kt(a) && (t.class = ze(a)), ut(l) && (Rs(l) && !W(l) && (l = Ct({}, l)), t.style = Ze(l));
  }
  const r = kt(e) ? 1 : Ou(e) ? 128 : Yd(e) ? 64 : ut(e) ? 4 : Q(e) ? 2 : 0;
  return r & 4 && Rs(e) && (e = J(e), $(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), R(
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
  return e ? Rs(e) || pu(e) ? Ct({}, e) : e : null;
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
    patchFlag: t && e.type !== Ft ? r === -1 ? 16 : r | 16 : r,
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
  return yt(ai, null, e, t);
}
function ss(e = "", t = !1) {
  return t ? (Y(), Ds(re, null, e)) : yt(re, null, e);
}
function he(e) {
  return e == null || typeof e == "boolean" ? yt(re) : W(e) ? yt(
    Ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tn(e) ? Qe(e) : yt(ai, null, String(e));
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
  (ip(e) || t(e)) && $(
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
    n.compilerOptions && ap() && $(
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
        $(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ja(e, a, t);
  } else
    Pu(e, t);
}
function ja(e, t, s) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ut(t) ? (tn(t) && $(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Uc(t), uh(e)) : t !== void 0 && $(
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
  !n.render && e.render === Wt && !t && (n.template ? $(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : $("Component is missing template or render function: ", n));
}
const lp = {
  get(e, t) {
    return io(), Et(e, "get", ""), e[t];
  },
  set() {
    return $("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return $("setupContext.attrs is readonly."), !1;
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
    if (e.exposed && $("expose() should be called only once per setup()."), s != null) {
      let n = typeof s;
      n === "object" && (W(s) ? n = "array" : _t(s) && (n = "ref")), n !== "object" && $(
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
const Nt = (e, t) => {
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
      return yt(o, r, a);
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
      if (_t(f)) {
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
            ["span", e, Xt(f) ? "ShallowReactive" : "Reactive"],
            "<",
            a(f),
            `>${Ee(f) ? " (readonly)" : ""}`
          ];
        if (Ee(f))
          return [
            "div",
            {},
            ["span", e, Xt(f) ? "ShallowReadonly" : "Readonly"],
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
    const p = l(f, "computed");
    p && d.push(r("computed", p));
    const b = l(f, "inject");
    return b && d.push(r("injected", b)), d.push([
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
    return d = Ct({}, d), Object.keys(d).length ? [
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
        ...Object.keys(d).map((p) => [
          "div",
          {},
          ["span", n, p + ": "],
          a(d[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(f, d = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", s, JSON.stringify(f)] : typeof f == "boolean" ? ["span", n, f] : ut(f) ? ["object", { object: d ? J(f) : f }] : ["span", s, String(f)];
  }
  function l(f, d) {
    const p = f.type;
    if (Q(p))
      return;
    const b = {};
    for (const _ in f.ctx)
      c(p, _, d) && (b[_] = f.ctx[_]);
    return b;
  }
  function c(f, d, p) {
    const b = f[p];
    if (W(b) && b.includes(d) || ut(b) && d in b || f.extends && c(f.extends, d, p) || f.mixins && f.mixins.some((_) => c(_, d, p)))
      return !0;
  }
  function u(f) {
    return Xt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const dr = "3.5.21", ae = $;
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
  const n = e.style, i = kt(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (kt(t))
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
  t === "class" ? bp(e, n, r) : t === "style" ? wp(e, s, n) : ti(t) ? Ki(t) || Mp(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ap(e, t, n, r)) ? (Ya(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !kt(n)) ? Ya(e, Rt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ka(e, t, n, r));
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
  return Ja(t) && kt(s) ? !1 : t in e;
}
const Qa = {};
// @__NO_SIDE_EFFECTS__
function Rp(e, t, s) {
  let n = /* @__PURE__ */ js(e, t);
  mo(n) && (n = Ct({}, n, t));
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
        rt(this, n) ? ae(`Exposed property "${n}" already exists on custom element.`) : Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => wt(s[n])
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
    const s = yt(this._def, Ct(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0, n.ceReload = (o) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      };
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            mo(r[0]) ? Ct({ detail: r }, r[0]) : { detail: r }
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
}, Vp = /* @__PURE__ */ Ct({ patchProp: Ep }, mp);
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
  if (kt(e)) {
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
      Qs(() => wt(t[r]), (a, l) => {
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
  const e = Sc(!0), t = e.run(() => mt({}));
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
    Fs(i) && Fs(n) && !_t(n) && !ge(n) ? e[s] = Ku(i, n) : e[s] = n;
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
    Fs(i) && Fs(n) && e.hasOwnProperty(s) && !_t(n) && !ge(n) ? e[s] = _r(i, n) : e[s] = n;
  }
  return e;
}
const vg = Symbol("pinia:skipHydration");
function xg(e) {
  return !Fs(e) || !e.hasOwnProperty(vg);
}
const { assign: ue } = Object;
function ll(e) {
  return !!(_t(e) && e.effect);
}
function cl(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, a = s.state.value[e];
  let l;
  function c() {
    !a && !n && (s.state.value[e] = i ? i() : {});
    const u = /* use ref() to unwrap refs inside state TODO: check if this is still necessary */ xa(n ? mt(i ? i() : {}).value : s.state.value[e]);
    return ue(u, o, Object.keys(r || {}).reduce((f, d) => (d in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), f[d] = es(Nt(() => {
      Yn(s);
      const p = s._s.get(e);
      return r[d].call(p, p);
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
  l.onTrigger = (I) => {
    c ? p = I : c == !1 && !w._hotUpdating && (Array.isArray(p) ? p.push(I) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  };
  let c, u, f = [], d = [], p;
  const b = n.state.value[e];
  !o && !b && !i && (n.state.value[e] = {});
  const _ = mt({});
  let g;
  function x(I) {
    let T;
    c = u = !1, p = [], typeof I == "function" ? (I(n.state.value[e]), T = {
      type: Pe.patchFunction,
      storeId: e,
      events: p
    }) : (_r(n.state.value[e], I), T = {
      type: Pe.patchObject,
      payload: I,
      storeId: e,
      events: p
    });
    const B = g = Symbol();
    Ls().then(() => {
      g === B && (c = !0);
    }), u = !0, Us(f, T, n.state.value[e]);
  }
  const M = o ? function() {
    const { state: T } = s, B = T ? T() : {};
    this.$patch((ot) => {
      ue(ot, B);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function H() {
    r.stop(), f = [], d = [], n._s.delete(e);
  }
  const K = (I, T = "") => {
    if (al in I)
      return I[Bo] = T, I;
    const B = function() {
      Yn(n);
      const ot = Array.from(arguments), Tt = [], nt = [];
      function it(lt) {
        Tt.push(lt);
      }
      function G(lt) {
        nt.push(lt);
      }
      Us(d, {
        args: ot,
        name: B[Bo],
        store: w,
        after: it,
        onError: G
      });
      let Z;
      try {
        Z = I.apply(this && this.$id === e ? this : w, ot);
      } catch (lt) {
        throw Us(nt, lt), lt;
      }
      return Z instanceof Promise ? Z.then((lt) => (Us(Tt, lt), lt)).catch((lt) => (Us(nt, lt), Promise.reject(lt))) : (Us(Tt, Z), Z);
    };
    return B[al] = !0, B[Bo] = T, B;
  }, O = /* @__PURE__ */ es({
    actions: {},
    getters: {},
    state: [],
    hotState: _
  }), U = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: rl.bind(null, d),
    $patch: x,
    $reset: M,
    $subscribe(I, T = {}) {
      const B = rl(f, I, T.detached, () => ot()), ot = r.run(() => Qs(() => n.state.value[e], (Tt) => {
        (T.flush === "sync" ? u : c) && I({
          storeId: e,
          type: Pe.direct,
          events: p
        }, Tt);
      }, ue({}, l, T)));
      return B;
    },
    $dispose: H
  }, w = ii(ue(
    {
      _hmrPayload: O,
      _customProperties: es(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    U
    // must be added later
    // setupStore
  ));
  n._s.set(e, w);
  const P = (n._a && n._a.runWithContext || yg)(() => n._e.run(() => (r = Sc()).run(() => t({ action: K }))));
  for (const I in P) {
    const T = P[I];
    if (_t(T) && !ll(T) || ge(T))
      i ? pi(_.value, I, Ii(P, I)) : o || (b && xg(T) && (_t(T) ? T.value = b[I] : _r(T, b[I])), n.state.value[e][I] = T), O.state.push(I);
    else if (typeof T == "function") {
      const B = i ? T : K(T, I);
      P[I] = B, O.actions[I] = T, a.actions[I] = T;
    } else
      ll(T) && (O.getters[I] = o ? (
        // @ts-expect-error
        s.getters[I]
      ) : T, Is && (P._getters || // @ts-expect-error: same
      (P._getters = es([]))).push(I));
  }
  if (ue(w, P), ue(J(w), P), Object.defineProperty(w, "$state", {
    get: () => i ? _.value : n.state.value[e],
    set: (I) => {
      if (i)
        throw new Error("cannot set hotState");
      x((T) => {
        ue(T, I);
      });
    }
  }), w._hotUpdate = es((I) => {
    w._hotUpdating = !0, I._hmrPayload.state.forEach((T) => {
      if (T in w.$state) {
        const B = I.$state[T], ot = w.$state[T];
        typeof B == "object" && Fs(B) && Fs(ot) ? Ku(B, ot) : I.$state[T] = ot;
      }
      pi(w, T, Ii(I.$state, T));
    }), Object.keys(w.$state).forEach((T) => {
      T in I.$state || zo(w, T);
    }), c = !1, u = !1, n.state.value[e] = Ii(I._hmrPayload, "hotState"), u = !0, Ls().then(() => {
      c = !0;
    });
    for (const T in I._hmrPayload.actions) {
      const B = I[T];
      pi(w, T, K(B, T));
    }
    for (const T in I._hmrPayload.getters) {
      const B = I._hmrPayload.getters[T], ot = o ? (
        // special handling of options api
        Nt(() => (Yn(n), B.call(w, w)))
      ) : B;
      pi(w, T, ot);
    }
    Object.keys(w._hmrPayload.getters).forEach((T) => {
      T in I._hmrPayload.getters || zo(w, T);
    }), Object.keys(w._hmrPayload.actions).forEach((T) => {
      T in I._hmrPayload.actions || zo(w, T);
    }), w._hmrPayload = I._hmrPayload, w._getters = I._getters, w._hotUpdating = !1;
  }), Is) {
    const I = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((T) => {
      Object.defineProperty(w, T, ue({ value: w[T] }, I));
    });
  }
  return n._p.forEach((I) => {
    if (Is) {
      const T = r.run(() => I({
        store: w,
        app: n._a,
        pinia: n,
        options: a
      }));
      Object.keys(T || {}).forEach((B) => w._customProperties.add(B)), ue(w, T);
    } else
      ue(w, r.run(() => I({
        store: w,
        app: n._a,
        pinia: n,
        options: a
      })));
  }), w.$state && typeof w.$state == "object" && typeof w.$state.constructor == "function" && !w.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${w.$id}".`), b && o && s.hydrate && s.hydrate(w.$state, b), c = !0, u = !0, w;
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
        const d = f.proxy, p = "_pStores" in d ? d._pStores : d._pStores = {};
        p[n] = u;
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
      Nt({
        get: () => e[n],
        set(o) {
          e[n] = o;
        }
      }) : (_t(i) || ge(i)) && (s[n] = // ---
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
  const e = mt([]), t = mt([]), s = mt(!1), n = mt(null), i = mt([
    {
      id: "table",
      name: "任务管理表",
      type: "table",
      icon: "Table",
      fields: e.value.map((y) => y.id),
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
      fields: e.value.map((y) => y.id),
      filters: { id: gi(), logic: "and", rules: [] },
      sorts: []
    }
  ]), o = mt({ id: "root", logic: "and", rules: [] }), r = mt("table"), a = mt([]), l = mt(null), c = mt([]), u = mt("priority"), f = Nt(() => {
    var y;
    return ((y = i.value) == null ? void 0 : y.find((v) => v.id === r.value)) || null;
  }), d = Nt(() => (e.value || []).filter((y) => y.visible)), p = Nt(() => {
    let y = [...t.value];
    return o.value && Array.isArray(o.value.rules) && o.value.rules.length > 0 && (y = y.filter((v) => T(v, o.value))), c.value && c.value.length > 0 && y.sort((v, N) => {
      for (const j of c.value) {
        const gt = v[j.fieldId], Ot = N[j.fieldId];
        let ct = 0;
        if (gt < Ot ? ct = -1 : gt > Ot && (ct = 1), ct !== 0)
          return j.direction === "desc" ? -ct : ct;
      }
      return 0;
    }), y;
  }), b = (y) => {
    o.value = y;
  }, _ = (y) => {
    o.value = y || { id: "root", logic: "and", rules: [] };
  }, g = Nt(() => {
    var j;
    if (!u.value) return [];
    const y = /* @__PURE__ */ new Map();
    (j = e.value) == null || j.find((gt) => gt.id === u.value), p.value && p.value.forEach((gt) => {
      const Ot = gt[u.value] || "未分组";
      y.has(Ot) || y.set(Ot, []), y.get(Ot).push(gt);
    });
    const v = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#a8e6cf", "#ff8b94"];
    let N = 0;
    return Array.from(y.entries()).map(([gt, Ot]) => ({
      key: gt,
      label: gt,
      color: v[N++ % v.length],
      records: Ot,
      expanded: !0
    }));
  }), x = async (y) => {
    s.value = !0, n.value = null;
    const v = `http://127.0.0.1:5000/api/shared-data/${y}`;
    try {
      const N = await fetch(v);
      if (!N.ok)
        throw new Error(`网络请求失败，状态码: ${N.status}`);
      const j = await N.json();
      e.value = j.fields, t.value = j.records;
    } catch (N) {
      const j = N instanceof Error ? N.message : "发生未知错误";
      console.error("从 Flask API 获取数据失败:", j), n.value = j;
    } finally {
      s.value = !1;
    }
  }, M = (y = {}) => {
    try {
      const v = {
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
        ...y
      };
      return t.value.push(v), xt(), v;
    } catch (v) {
      return console.error("添加记录失败:", v), null;
    }
  }, H = (y, v) => {
    var N;
    try {
      const j = ((N = t.value) == null ? void 0 : N.findIndex((gt) => gt.id === y)) ?? -1;
      j !== -1 && (t.value[j] = {
        ...t.value[j],
        ...v,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }, xt());
    } catch (j) {
      console.error("更新记录失败:", j);
    }
  }, K = (y) => {
    var v;
    try {
      const N = ((v = t.value) == null ? void 0 : v.findIndex((j) => j.id === y)) ?? -1;
      N !== -1 && (t.value.splice(N, 1), a.value = a.value.filter((j) => j !== y), xt());
    } catch (N) {
      console.error("删除记录失败:", N);
    }
  }, O = (y) => {
    try {
      const v = {
        id: gi(),
        ...y
      };
      return e.value.push(v), xt(), v;
    } catch (v) {
      return console.error("添加字段失败:", v), null;
    }
  }, U = (y, v) => {
    var N;
    try {
      const j = ((N = e.value) == null ? void 0 : N.findIndex((gt) => gt.id === y)) ?? -1;
      j !== -1 && (e.value[j] = { ...e.value[j], ...v }, xt());
    } catch (j) {
      console.error("更新字段失败:", j);
    }
  }, w = (y) => {
    var v, N;
    try {
      const j = ((v = e.value) == null ? void 0 : v.findIndex((gt) => gt.id === y)) ?? -1;
      j !== -1 && (e.value.splice(j, 1), (N = t.value) == null || N.forEach((gt) => {
        delete gt[y];
      }), xt());
    } catch (j) {
      console.error("删除字段失败:", j);
    }
  }, S = (y, v) => {
    try {
      if (!e.value || y < 0 || v < 0 || y >= e.value.length || v >= e.value.length)
        return;
      const N = e.value.splice(y, 1)[0];
      e.value.splice(v, 0, N), xt();
    } catch (N) {
      console.error("重排字段失败:", N);
    }
  }, P = (y, v, N) => {
    var j, gt;
    try {
      if (N) {
        const Ot = (j = g.value) == null ? void 0 : j.find((ct) => ct.key === N);
        if (Ot && Ot.records) {
          const ct = Ot.records.splice(y, 1)[0];
          Ot.records.splice(v, 0, ct);
          const Ht = ((gt = t.value) == null ? void 0 : gt.findIndex((h) => h.id === ct.id)) ?? -1;
          Ht !== -1 && (t.value.splice(Ht, 1), t.value.splice(v, 0, ct));
        }
      } else {
        if (!t.value || y < 0 || v < 0 || y >= t.value.length || v >= t.value.length)
          return;
        const Ot = t.value.splice(y, 1)[0];
        t.value.splice(v, 0, Ot);
      }
      xt();
    } catch (Ot) {
      console.error("重排记录失败:", Ot);
    }
  }, I = (y, v) => {
    const N = y[v.fieldId], j = v.value;
    switch (v.operator) {
      case "equals":
        return N === j;
      case "not_equals":
        return N !== j;
      case "contains":
        return String(N).toLowerCase().includes(String(j).toLowerCase());
      case "not_contains":
        return !String(N).toLowerCase().includes(String(j).toLowerCase());
      case "starts_with":
        return String(N).toLowerCase().startsWith(String(j).toLowerCase());
      case "ends_with":
        return String(N).toLowerCase().endsWith(String(j).toLowerCase());
      case "is_empty":
        return N == null || N === "";
      case "is_not_empty":
        return N != null && N !== "";
      case "greater_than":
        return Number(N) > Number(j);
      case "less_than":
        return Number(N) < Number(j);
      case "greater_equal":
        return Number(N) >= Number(j);
      case "less_equal":
        return Number(N) <= Number(j);
      default:
        return !0;
    }
  }, T = (y, v) => {
    const N = (j) => kg(j) ? T(y, j) : I(y, j);
    return v.logic === "and" ? v.rules.every(N) : v.logic === "or" ? v.rules.some(N) : !0;
  }, B = (y) => {
    c.value = y || [];
  }, ot = (y) => {
    u.value = y;
  }, Tt = (y) => {
    var v;
    try {
      r.value = y;
      const N = (v = i.value) == null ? void 0 : v.find((j) => j.id === y);
      N && (o.value = N.filters || { id: "root", logic: "and", rules: [] }, c.value = N.sorts || [], u.value = N.groupBy || null);
    } catch (N) {
      console.error("切换视图失败:", N);
    }
  }, nt = (y) => {
    try {
      a.value || (a.value = []);
      const v = a.value.indexOf(y);
      v > -1 ? a.value.splice(v, 1) : a.value.push(y);
    } catch (v) {
      console.error("切换记录选择失败:", v);
    }
  }, it = () => {
    var y;
    try {
      a.value = ((y = p.value) == null ? void 0 : y.map((v) => v.id)) || [];
    } catch (v) {
      console.error("全选记录失败:", v);
    }
  }, G = () => {
    a.value = [];
  }, Z = (y, v) => {
    l.value = { recordId: y, fieldId: v };
  }, lt = () => {
    l.value = null;
  }, xt = () => {
    try {
      const y = {
        fields: e.value,
        records: t.value,
        views: i.value,
        currentViewId: r.value,
        filters: o.value,
        sorts: c.value,
        groupBy: u.value
      };
      localStorage.setItem("multidimensional-table-data", JSON.stringify(y));
    } catch (y) {
      console.error("保存到本地存储失败:", y);
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
    filteredRecords: p,
    groupedRecords: g,
    // 方法
    fetchTableData: x,
    addRecord: M,
    updateRecord: H,
    deleteRecord: K,
    addField: O,
    updateField: U,
    deleteField: w,
    reorderFields: S,
    reorderRecords: P,
    updateFilters: _,
    updateSorts: B,
    updateGroupBy: ot,
    switchView: Tt,
    toggleRecordSelection: nt,
    selectAllRecords: it,
    clearSelection: G,
    startEditCell: Z,
    finishEditCell: lt,
    saveToStorage: xt,
    loadFromStorage: () => {
      try {
        const y = localStorage.getItem("multidimensional-table-data");
        if (y) {
          const v = JSON.parse(y);
          v.fields && (e.value = v.fields), v.records && (t.value = v.records), v.views && (i.value = v.views), v.currentViewId && (r.value = v.currentViewId), v.filters && (o.value = v.filters), v.sorts && (c.value = v.sorts), v.groupBy !== void 0 && (u.value = v.groupBy);
        }
      } catch (y) {
        console.error("从本地存储加载失败:", y);
      }
    },
    exportData: () => {
      try {
        const y = {
          fields: e.value,
          records: t.value,
          exportedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, v = new Blob([JSON.stringify(y, null, 2)], { type: "application/json" }), N = URL.createObjectURL(v), j = document.createElement("a");
        j.href = N, j.download = `table-data-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, j.click(), URL.revokeObjectURL(N);
      } catch (y) {
        console.error("导出数据失败:", y);
      }
    },
    setFilters: b,
    importData: (y) => {
      try {
        const v = JSON.parse(y);
        v.fields && (e.value = v.fields), v.records && (t.value = v.records), v.views && (i.value = v.views), v.currentViewId && (r.value = v.currentViewId), v.filters && (o.value = v.filters), v.sorts && (c.value = v.sorts), v.groupBy !== void 0 && (u.value = v.groupBy);
      } catch (v) {
        console.error("导入数据失败:", v);
      }
    },
    loadShareData: (y, v) => {
      e.value = y, t.value = v, o.value = { id: "root", logic: "and", rules: [] }, c.value = [], u.value = null, a.value = [], l.value = null;
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
function St(e) {
  return e == null;
}
function jt(e) {
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
function vt(e, t) {
  return typeof e > "u" ? t : e;
}
const sm = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Dt(e, t, s) {
  if (e && typeof e.call == "function")
    return e.apply(s, t);
}
function zt(e, t, s, n) {
  let i, o, r;
  if (jt(e))
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
  if (jt(e))
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
  const n = jt(t) ? t : [
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
const Jt = Math.PI, Ue = 2 * Jt, lm = Ue + Jt, fo = Number.POSITIVE_INFINITY, cm = Jt / 180, os = Jt / 2, hs = Jt / 4, bl = Jt * 2 / 3, Qu = Math.log10, nn = Math.sign;
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
  return e * (Jt / 180);
}
function pm(e) {
  return e * (180 / Jt);
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
  return o < -0.5 * Jt && (o += Ue), {
    angle: o,
    distance: i
  };
}
function xl(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function mm(e, t) {
  return (e - t + lm) % Ue - Jt;
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
    const { iScale: r, vScale: a, _parsed: l } = e, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, u = r.axis, { min: f, max: d, minDefined: p, maxDefined: b } = r.getUserBounds();
    if (p) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        ws(l, u, f).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? n : ws(t, u, r.getPixelForValue(f)).lo
      ), c) {
        const _ = l.slice(0, i + 1).reverse().findIndex((g) => !St(g[a.axis]));
        i -= Math.max(0, _);
      }
      i = De(i, 0, n - 1);
    }
    if (b) {
      let _ = Math.max(
        // @ts-expect-error Need to type _parsed
        ws(l, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? 0 : ws(t, u, r.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const g = l.slice(_ - 1).findIndex((x) => !St(x[a.axis]));
        _ += Math.max(0, g);
      }
      o = De(_, i, n) - i;
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
  easeInOutSine: (e) => -0.5 * (Math.cos(Jt * e) - 1),
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
    return jt(e) ? e : "" + e;
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
          return ht(l) ? Object.assign({}, c, l) : vt(l, c);
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
  return !e || St(e.size) || St(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
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
  const p = t.pointStyle, b = t.rotation, _ = t.radius;
  let g = (b || 0) * cm;
  if (p && typeof p == "object" && (o = p.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(s, n), e.rotate(g), e.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height), e.restore();
    return;
  }
  if (!(isNaN(_) || _ <= 0)) {
    switch (e.beginPath(), p) {
      default:
        e.arc(s, n, _, 0, Ue), e.closePath();
        break;
      case "triangle":
        u = _, e.moveTo(s + Math.sin(g) * u, n - Math.cos(g) * _), g += bl, e.lineTo(s + Math.sin(g) * u, n - Math.cos(g) * _), g += bl, e.lineTo(s + Math.sin(g) * u, n - Math.cos(g) * _), e.closePath();
        break;
      case "rectRounded":
        c = _ * 0.516, l = _ - c, r = Math.cos(g + hs) * l, f = Math.cos(g + hs) * l, a = Math.sin(g + hs) * l, d = Math.sin(g + hs) * l, e.arc(s - f, n - a, c, g - Jt, g - os), e.arc(s + d, n - r, c, g - os, g), e.arc(s + f, n + a, c, g, g + os), e.arc(s - d, n + r, c, g + os, g + Jt), e.closePath();
        break;
      case "rect":
        if (!b) {
          l = Math.SQRT1_2 * _, u = l, e.rect(s - u, n - l, 2 * u, 2 * l);
          break;
        }
        g += hs;
      case "rectRot":
        f = Math.cos(g) * _, r = Math.cos(g) * _, a = Math.sin(g) * _, d = Math.sin(g) * _, e.moveTo(s - f, n - a), e.lineTo(s + d, n - r), e.lineTo(s + f, n + a), e.lineTo(s - d, n + r), e.closePath();
        break;
      case "crossRot":
        g += hs;
      case "cross":
        f = Math.cos(g) * _, r = Math.cos(g) * _, a = Math.sin(g) * _, d = Math.sin(g) * _, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r);
        break;
      case "star":
        f = Math.cos(g) * _, r = Math.cos(g) * _, a = Math.sin(g) * _, d = Math.sin(g) * _, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r), g += hs, f = Math.cos(g) * _, r = Math.cos(g) * _, a = Math.sin(g) * _, d = Math.sin(g) * _, e.moveTo(s - f, n - a), e.lineTo(s + f, n + a), e.moveTo(s + d, n - r), e.lineTo(s - d, n + r);
        break;
      case "line":
        r = Math.cos(g) * _, a = Math.sin(g) * _, e.moveTo(s - r, n - a), e.lineTo(s + r, n + a);
        break;
      case "dash":
        e.moveTo(s, n), e.lineTo(s + Math.cos(g) * _, n + Math.sin(g) * _);
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
  t.translation && e.translate(t.translation[0], t.translation[1]), St(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
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
  const r = jt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, Vm(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && zm(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), St(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, s, n, o.maxWidth)), e.fillText(c, s, n, o.maxWidth), Hm(e, s, n, c, o), n += Number(i.lineHeight);
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
  const s = {}, n = ht(t), i = n ? Object.keys(t) : t, o = ht(e) ? n ? (r) => vt(e[r], e[t[r]]) : (r) => e[r] : () => e;
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
  let s = vt(e.size, t.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let n = vt(e.style, t.style);
  n && !("" + n).match(Um) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const i = {
    family: vt(e.family, t.family),
    lineHeight: Wm(vt(e.lineHeight, t.lineHeight), s),
    size: s,
    style: n,
    weight: vt(e.weight, t.weight),
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
  return us(a) && r.isScriptable(t) && (a = Qm(t, a, e, s)), jt(a) && a.length && (a = Zm(t, a, e, r.isIndexable)), aa(t, a) && (a = rn(a, i, o && o[t], r)), a;
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
  return jt(i) && ht(s) ? s : i || {};
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
  let { width: p, height: b } = t;
  return o && (p -= r.width + a.width, b -= r.height + a.height), {
    x: Math.round((l - f) / p * s.width / n),
    y: Math.round((c - d) / b * s.height / n)
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
    const d = Es(i, "border", "width"), p = Es(i, "padding");
    c -= p.width + d.width, u -= p.height + d.height;
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
  let { start: c, end: u, loop: f } = e, d, p;
  if (f) {
    for (c += l, u += l, d = 0, p = l; d < p && r(a(t[c % l][n]), i, o); ++d)
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
  const { property: n, start: i, end: o } = s, r = t.length, { compare: a, between: l, normalize: c } = pf(n), { start: u, end: f, loop: d, style: p } = x_(e, t, s), b = [];
  let _ = !1, g = null, x, M, H;
  const K = () => l(i, H, x) && a(i, H) !== 0, O = () => a(o, x) === 0 || l(o, H, x), U = () => _ || K(), w = () => !_ || O();
  for (let S = u, P = u; S <= f; ++S)
    M = t[S % r], !M.skip && (x = c(M[n]), x !== H && (_ = l(x, i, o), g === null && U() && (g = a(x, i) === 0 ? S : P), g !== null && w() && (b.push(Al({
      start: g,
      end: S,
      loop: d,
      count: r,
      style: p
    })), g = null), P = S, H = x));
  return g !== null && b.push(Al({
    start: g,
    end: f,
    loop: d,
    count: r,
    style: p
  })), b;
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
  function p(b, _, g, x) {
    const M = a ? -1 : 1;
    if (b !== _) {
      for (b += l; s[b % l].skip; )
        b -= M;
      for (; s[_ % l].skip; )
        _ += M;
      b % l !== _ % l && (c.push({
        start: b % l,
        end: _ % l,
        loop: g,
        style: x
      }), u = x, f = _ % l);
    }
  }
  for (const b of t) {
    f = a ? f : b.start;
    let _ = s[f % l], g;
    for (d = f + 1; d <= b.end; d++) {
      const x = s[d % l];
      g = Ll(n.setContext(un(i, {
        type: "segment",
        p0: _,
        p1: x,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), T_(g, u) && p(f, d - 1, b.loop, u), _ = x, u = g;
    }
    f < d - 1 && p(f, d - 1, b.loop, u);
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
      (jt(o.properties) && o.properties || [
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
  for (let p = 0; p < f; ++p) {
    const b = t[p], { [l]: _, [c]: g } = b, x = b._stacks || (b._stacks = {});
    d = x[c] = z_(i, u, _), d[a] = g, d._top = jl(d, r, !0, n.type), d._bottom = jl(d, r, !1, n.type);
    const M = d._visualValues || (d._visualValues = {});
    M[a] = g;
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
    const t = this.chart, s = this._cachedMeta, n = this.getDataset(), i = (f, d, p, b) => f === "x" ? d : f === "r" ? b : p, o = s.xAxisID = vt(n.xAxisID, qo(t, "x")), r = s.yAxisID = vt(n.yAxisID, qo(t, "y")), a = s.rAxisID = vt(n.rAxisID, qo(t, "r")), l = s.indexAxis, c = s.iAxisID = i(l, o, r, a), u = s.vAxisID = i(l, r, o, a);
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
      jt(i[t]) ? d = this.parseArrayData(n, i, t, s) : ht(i[t]) ? d = this.parseObjectData(n, i, t, s) : d = this.parsePrimitiveData(n, i, t, s);
      const p = () => f[a] === null || c && f[a] < c[a];
      for (u = 0; u < s; ++u)
        n._parsed[u + t] = f = d[u], l && (p() && (l = !1), c = f);
      n._sorted = l;
    }
    r && Vl(this, d);
  }
  parsePrimitiveData(t, s, n, i) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), u = o === r, f = new Array(i);
    let d, p, b;
    for (d = 0, p = i; d < p; ++d)
      b = d + n, f[d] = {
        [a]: u || o.parse(c[b], b),
        [l]: r.parse(s[b], b)
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
    let u, f, d, p;
    for (u = 0, f = i; u < f; ++u)
      d = u + n, p = s[d], c[u] = {
        x: o.parse(co(p, a), d),
        y: r.parse(co(p, l), d)
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
    let d, p;
    function b() {
      p = i[d];
      const _ = p[a.axis];
      return !fe(p[t.axis]) || u > _ || f < _;
    }
    for (d = 0; d < r && !(!b() && (this.updateRangeFromParsed(c, t, p, l), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!b()) {
          this.updateRangeFromParsed(c, t, p, l);
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
    this.update(t || "default"), s._clip = N_(vt(this.options.clip, F_(s.xScale, s.yScale, this.getMaxOverflow())));
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
    ], d = c.getOptionScopes(this.getDataset(), u), p = Object.keys(Pt.elements[t]), b = () => this.getContext(n, i, s), _ = c.resolveNamedOptions(d, p, b, f);
    return _.$shared && (_.$shared = l, o[r] = Object.freeze(Hl(_, l))), _;
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
st(jn, "defaults", {}), st(jn, "datasetElementType", null), st(jn, "dataElementType", null);
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
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: f } = this._getSharedOptions(s, i), d = r.axis, p = a.axis, { spanGaps: b, segment: _ } = this.options, g = Xn(b) ? b : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || i === "none", M = s + n, H = t.length;
    let K = s > 0 && this.getParsed(s - 1);
    for (let O = 0; O < H; ++O) {
      const U = t[O], w = x ? U : {};
      if (O < s || O >= M) {
        w.skip = !0;
        continue;
      }
      const S = this.getParsed(O), P = St(S[p]), I = w[d] = r.getPixelForValue(S[d], O), T = w[p] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, S, l) : S[p], O);
      w.skip = isNaN(I) || isNaN(T) || P, w.stop = O > 0 && Math.abs(S[d] - K[d]) > g, _ && (w.parsed = S, w.raw = c.data[O]), f && (w.options = u || this.resolveDataElementOptions(O, U.active ? "active" : i)), x || this.updateElement(U, O, w, i), K = S;
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
st(Vn, "id", "line"), st(Vn, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), st(Vn, "overrides", {
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
    st(this, "options");
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
          const d = c(o, t, s - f), p = c(o, t, s + f);
          return {
            lo: d.lo,
            hi: p.hi
          };
        }
      }
    } else {
      const u = c(o, t, s);
      if (l) {
        const { vScale: f } = i._cachedMeta, { _parsed: d } = e, p = d.slice(0, u.lo + 1).reverse().findIndex((_) => !St(_[f.axis]));
        u.lo -= Math.max(0, p);
        const b = d.slice(u.hi).findIndex((_) => !St(_[f.axis]));
        u.hi += Math.max(0, b);
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
    for (let p = f; p <= d; ++p) {
      const b = u[p];
      b.skip || n(b, c, p);
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
    const p = u.inRange(t.x, t.y, i);
    if (n && !p)
      return;
    const b = u.getCenterPoint(i);
    if (!(!!o || e.isPointInArea(b)) && !p)
      return;
    const g = a(t, b);
    g < l ? (r = [
      {
        element: u,
        datasetIndex: f,
        index: d
      }
    ], l = g) : g === l && r.push({
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
    zt(e.boxes, (_) => {
      typeof _.beforeLayout == "function" && _.beforeLayout();
    });
    const u = l.reduce((_, g) => g.box.options && g.box.options.display === !1 ? _ : _ + 1, 0) || 1, f = Object.freeze({
      outerWidth: t,
      outerHeight: s,
      padding: i,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, i);
    _f(d, on(n));
    const p = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), b = tb(l.concat(c), f);
    On(a.fullSize, p, f, b), On(l, p, f, b), On(c, p, f, b) && On(l, p, f, b), nb(p), Wl(a.leftAndTop, p, f, b), p.x += p.w, p.y += p.h, Wl(a.rightAndBottom, p, f, b), e.chartArea = {
      left: p.left,
      top: p.top,
      right: p.left + p.w,
      bottom: p.top + p.h,
      height: p.h,
      width: p.w
    }, zt(a.chartArea, (_) => {
      const g = _.box;
      Object.assign(g, e.chartArea), g.update(p.w, p.h, {
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
      St(r) ? s.removeAttribute(o) : s.setAttribute(o, r);
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
    st(this, "x");
    st(this, "y");
    st(this, "active", !1);
    st(this, "options");
    st(this, "$animations");
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
}, st(Pi, "defaults", {}), st(Pi, "defaultRoutes"), Pi);
function yb(e, t) {
  const s = e.options.ticks, n = vb(e), i = Math.min(s.maxTicksLimit || n, n), o = s.major.enabled ? wb(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > i)
    return Sb(t, c, o, r / i), c;
  const u = xb(o, t, i);
  if (r > 0) {
    let f, d;
    const p = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Mi(t, c, u, St(p) ? 0 : a - p, a), f = 0, d = r - 1; f < d; f++)
      Mi(t, c, u, o[f], o[f + 1]);
    return Mi(t, c, u, l, St(p) ? t.length : l + p), c;
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
  const o = vt(n, 0), r = Math.min(vt(i, e.length), e.length);
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
  return (jt(e.text) ? e.text.length : 1) * s.lineHeight + n.height;
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
  let f = 0, d, p, b;
  const _ = r - i, g = a - o;
  if (e.isHorizontal()) {
    if (p = $n(n, o, a), ht(s)) {
      const x = Object.keys(s)[0], M = s[x];
      b = u[x].getPixelForValue(M) + _ - t;
    } else s === "center" ? b = (c.bottom + c.top) / 2 + _ - t : b = ql(e, s, t);
    d = a - o;
  } else {
    if (ht(s)) {
      const x = Object.keys(s)[0], M = s[x];
      p = u[x].getPixelForValue(M) - g + t;
    } else s === "center" ? p = (c.left + c.right) / 2 - g + t : p = ql(e, s, t);
    b = $n(n, r, i), f = s === "left" ? -os : os;
  }
  return {
    titleX: p,
    titleY: b,
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
    const u = this._getLabelSizes(), f = u.widest.width, d = u.highest.height, p = De(this.chart.width - f, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / n : p / (n - 1), f + 6 > a && (a = p / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - vn(t.grid) - s.padding - Jl(t.title, this.chart.options.font), c = Math.sqrt(f * f + d * d), r = pm(Math.min(Math.asin(De((u.highest.height + 6) / a, -1, 1)), Math.asin(De(l / c, -1, 1)) - Math.asin(De(d / c, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
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
        const { first: c, last: u, widest: f, highest: d } = this._getLabelSizes(), p = n.padding * 2, b = xs(this.labelRotation), _ = Math.cos(b), g = Math.sin(b);
        if (a) {
          const x = n.mirror ? 0 : g * f.width + _ * d.height;
          t.height = Math.min(this.maxHeight, t.height + x + p);
        } else {
          const x = n.mirror ? 0 : _ * f.width + g * d.height;
          t.width = Math.min(this.maxWidth, t.width + x + p);
        }
        this._calculatePadding(c, u, g, _);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = s.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = s.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, s, n, i) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, p = 0;
      l ? c ? (d = i * t.width, p = n * s.height) : (d = n * t.height, p = i * s.width) : o === "start" ? p = s.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, p = s.width / 2), this.paddingLeft = Math.max((d - u + r) * this.width / (this.width - u), 0), this.paddingRight = Math.max((p - f + r) * this.width / (this.width - f), 0);
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
      St(t[s].label) && (t.splice(s, 1), n--, s--);
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
    let c = 0, u = 0, f, d, p, b, _, g, x, M, H, K, O;
    for (f = 0; f < s; f += l) {
      if (b = t[f].label, _ = this._resolveTickFontOptions(f), i.font = g = _.string, x = o[g] = o[g] || {
        data: {},
        gc: []
      }, M = _.lineHeight, H = K = 0, !St(b) && !jt(b))
        H = Cl(i, x.data, x.gc, H, b), K = M;
      else if (jt(b))
        for (d = 0, p = b.length; d < p; ++d)
          O = b[d], !St(O) && !jt(O) && (H = Cl(i, x.data, x.gc, H, O), K += M);
      r.push(H), a.push(K), c = Math.max(H, c), u = Math.max(K, u);
    }
    Cb(o, s);
    const U = r.indexOf(c), w = a.indexOf(u), S = (P) => ({
      width: r[P] || 0,
      height: a[P] || 0
    });
    return {
      first: S(0),
      last: S(s - 1),
      widest: S(U),
      highest: S(w),
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
    const s = this.axis, n = this.chart, i = this.options, { grid: o, position: r, border: a } = i, l = o.offset, c = this.isHorizontal(), f = this.ticks.length + (l ? 1 : 0), d = vn(o), p = [], b = a.setContext(this.getContext()), _ = b.display ? b.width : 0, g = _ / 2, x = function(it) {
      return ps(n, it, _);
    };
    let M, H, K, O, U, w, S, P, I, T, B, ot;
    if (r === "top")
      M = x(this.bottom), w = this.bottom - d, P = M - g, T = x(t.top) + g, ot = t.bottom;
    else if (r === "bottom")
      M = x(this.top), T = t.top, ot = x(t.bottom) - g, w = M + g, P = this.top + d;
    else if (r === "left")
      M = x(this.right), U = this.right - d, S = M - g, I = x(t.left) + g, B = t.right;
    else if (r === "right")
      M = x(this.left), I = t.left, B = x(t.right) - g, U = M + g, S = this.left + d;
    else if (s === "x") {
      if (r === "center")
        M = x((t.top + t.bottom) / 2 + 0.5);
      else if (ht(r)) {
        const it = Object.keys(r)[0], G = r[it];
        M = x(this.chart.scales[it].getPixelForValue(G));
      }
      T = t.top, ot = t.bottom, w = M + g, P = w + d;
    } else if (s === "y") {
      if (r === "center")
        M = x((t.left + t.right) / 2);
      else if (ht(r)) {
        const it = Object.keys(r)[0], G = r[it];
        M = x(this.chart.scales[it].getPixelForValue(G));
      }
      U = M - g, S = U - d, I = t.left, B = t.right;
    }
    const Tt = vt(i.ticks.maxTicksLimit, f), nt = Math.max(1, Math.ceil(f / Tt));
    for (H = 0; H < f; H += nt) {
      const it = this.getContext(H), G = o.setContext(it), Z = a.setContext(it), lt = G.lineWidth, xt = G.color, se = Z.dash || [], Vt = Z.dashOffset, Lt = G.tickWidth, Qt = G.tickColor, y = G.tickBorderDash || [], v = G.tickBorderDashOffset;
      K = Mb(this, H, l), K !== void 0 && (O = ps(n, K, lt), c ? U = S = I = B = O : w = P = T = ot = O, p.push({
        tx1: U,
        ty1: w,
        tx2: S,
        ty2: P,
        x1: I,
        y1: T,
        x2: B,
        y2: ot,
        width: lt,
        color: xt,
        borderDash: se,
        borderDashOffset: Vt,
        tickWidth: Lt,
        tickColor: Qt,
        tickBorderDash: y,
        tickBorderDashOffset: v
      }));
    }
    return this._ticksLength = f, this._borderValue = M, p;
  }
  _computeLabelItems(t) {
    const s = this.axis, n = this.options, { position: i, ticks: o } = n, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: u, mirror: f } = o, d = vn(n.grid), p = d + u, b = f ? -u : p, _ = -xs(this.labelRotation), g = [];
    let x, M, H, K, O, U, w, S, P, I, T, B, ot = "middle";
    if (i === "top")
      U = this.bottom - b, w = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      U = this.top + b, w = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const nt = this._getYAxisLabelAlignment(d);
      w = nt.textAlign, O = nt.x;
    } else if (i === "right") {
      const nt = this._getYAxisLabelAlignment(d);
      w = nt.textAlign, O = nt.x;
    } else if (s === "x") {
      if (i === "center")
        U = (t.top + t.bottom) / 2 + p;
      else if (ht(i)) {
        const nt = Object.keys(i)[0], it = i[nt];
        U = this.chart.scales[nt].getPixelForValue(it) + p;
      }
      w = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (i === "center")
        O = (t.left + t.right) / 2 - p;
      else if (ht(i)) {
        const nt = Object.keys(i)[0], it = i[nt];
        O = this.chart.scales[nt].getPixelForValue(it);
      }
      w = this._getYAxisLabelAlignment(d).textAlign;
    }
    s === "y" && (l === "start" ? ot = "top" : l === "end" && (ot = "bottom"));
    const Tt = this._getLabelSizes();
    for (x = 0, M = a.length; x < M; ++x) {
      H = a[x], K = H.label;
      const nt = o.setContext(this.getContext(x));
      S = this.getPixelForTick(x) + o.labelOffset, P = this._resolveTickFontOptions(x), I = P.lineHeight, T = jt(K) ? K.length : 1;
      const it = T / 2, G = nt.color, Z = nt.textStrokeColor, lt = nt.textStrokeWidth;
      let xt = w;
      r ? (O = S, w === "inner" && (x === M - 1 ? xt = this.options.reverse ? "left" : "right" : x === 0 ? xt = this.options.reverse ? "right" : "left" : xt = "center"), i === "top" ? c === "near" || _ !== 0 ? B = -T * I + I / 2 : c === "center" ? B = -Tt.highest.height / 2 - it * I + I : B = -Tt.highest.height + I / 2 : c === "near" || _ !== 0 ? B = I / 2 : c === "center" ? B = Tt.highest.height / 2 - it * I : B = Tt.highest.height - T * I, f && (B *= -1), _ !== 0 && !nt.showLabelBackdrop && (O += I / 2 * Math.sin(_))) : (U = S, B = (1 - T) * I / 2);
      let se;
      if (nt.showLabelBackdrop) {
        const Vt = on(nt.backdropPadding), Lt = Tt.heights[x], Qt = Tt.widths[x];
        let y = B - Vt.top, v = 0 - Vt.left;
        switch (ot) {
          case "middle":
            y -= Lt / 2;
            break;
          case "bottom":
            y -= Lt;
            break;
        }
        switch (w) {
          case "center":
            v -= Qt / 2;
            break;
          case "right":
            v -= Qt;
            break;
          case "inner":
            x === M - 1 ? v -= Qt : x > 0 && (v -= Qt / 2);
            break;
        }
        se = {
          left: v,
          top: y,
          width: Qt + Vt.width,
          height: Lt + Vt.height,
          color: nt.backdropColor
        };
      }
      g.push({
        label: K,
        font: P,
        textOffset: B,
        options: {
          rotation: _,
          color: G,
          strokeColor: Z,
          strokeWidth: lt,
          textAlign: xt,
          textBaseline: ot,
          translation: [
            O,
            U
          ],
          backdrop: se
        }
      });
    }
    return g;
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
    s === "bottom" || s === "center" || ht(s) ? (l += r.bottom, jt(n.text) && (l += o.lineHeight * (n.text.length - 1))) : l += r.top;
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
    const t = this.options, s = t.ticks && t.ticks.z || 0, n = vt(t.grid && t.grid.z, -1), i = vt(t.border && t.border.z, 0);
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
    St(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const s = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), s;
  }
  _createDescriptors(t, s) {
    const n = t && t.config, i = vt(n.options && n.options.plugins, {}), o = Fb(n);
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
      const d = Hb(f, l), p = r[d + "AxisID"] || d;
      o[p] = o[p] || /* @__PURE__ */ Object.create(null), Rn(o[p], [
        {
          axis: d
        },
        n[p],
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
  t.plugins = vt(t.plugins, {}), t.scales = Wb(e, t);
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
    if (o && (us(a) || qb(a)) || r && jt(a))
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
    return St(t) ? s && o ? o : i ? n / i : null : t;
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
      const a = r.options, l = a.id, c = kr(l, a), u = vt(a.type, r.dtype);
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
}, st(qe, "defaults", Pt), st(qe, "instances", Ui), st(qe, "overrides", Ns), st(qe, "registry", ke), st(qe, "version", Xb), st(qe, "getChart", oc), qe);
function rc() {
  return zt(Po.instances, (e) => e._plugins.invalidate());
}
function Of(e, t, s = t) {
  e.lineCap = vt(s.borderCapStyle, t.borderCapStyle), e.setLineDash(vt(s.borderDash, t.borderDash)), e.lineDashOffset = vt(s.borderDashOffset, t.borderDashOffset), e.lineJoin = vt(s.borderJoinStyle, t.borderJoinStyle), e.lineWidth = vt(s.borderWidth, t.borderWidth), e.strokeStyle = vt(s.borderColor, t.borderColor);
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
  let { move: f = !0, reverse: d } = n || {}, p, b, _;
  for (p = 0; p <= c; ++p)
    b = i[(a + (d ? c - p : p)) % r], !b.skip && (f ? (e.moveTo(b.x, b.y), f = !1) : u(e, _, b, d, o.stepped), _ = b);
  return l && (b = i[(a + (d ? c : 0)) % r], u(e, _, b, d, o.stepped)), !!l;
}
function iy(e, t, s, n) {
  const i = t.points, { count: o, start: r, ilen: a } = Mf(i, s, n), { move: l = !0, reverse: c } = n || {};
  let u = 0, f = 0, d, p, b, _, g, x;
  const M = (K) => (r + (c ? a - K : K)) % o, H = () => {
    _ !== g && (e.lineTo(u, g), e.lineTo(u, _), e.lineTo(u, x));
  };
  for (l && (p = i[M(0)], e.moveTo(p.x, p.y)), d = 0; d <= a; ++d) {
    if (p = i[M(d)], p.skip)
      continue;
    const K = p.x, O = p.y, U = K | 0;
    U === b ? (O < _ ? _ = O : O > g && (g = O), u = (f * u + K) / ++f) : (H(), e.lineTo(K, O), b = U, f = 0, _ = g = O), x = O;
  }
  H();
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
      const { start: f, end: d } = r[c], p = o[f], b = o[d];
      if (p === b) {
        a.push(p);
        continue;
      }
      const _ = Math.abs((i - p[s]) / (b[s] - p[s])), g = l(p, b, _, n.stepped);
      g[s] = t[s], a.push(g);
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
st(Mn, "id", "line"), st(Mn, "defaults", {
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
}), st(Mn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), st(Mn, "descriptors", {
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
    st(this, "parsed");
    st(this, "skip");
    st(this, "stop");
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
st(Wi, "id", "point"), /**
* @type {any}
*/
st(Wi, "defaults", {
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
st(Wi, "defaultRoutes", {
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
    const i = jt(n.text) ? n.text.length : 1;
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
    return this.isHorizontal() ? (u = $n(a, n, o), f = s + t, c = o - n) : (r.position === "left" ? (u = n + t, f = $n(a, i, s), l = Jt * -0.5) : (u = o - t, f = $n(a, s, i), l = Jt * 0.5), c = i - s), {
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
    if (St(t))
      return null;
    const n = this.getLabels();
    return s = isFinite(s) && n[s] === t ? s : hy(n, t, vt(s, t), this._addedLabels), py(s, n.length - 1);
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
st(Mr, "id", "category"), st(Mr, "defaults", {
  ticks: {
    callback: lc
  }
});
function gy(e, t) {
  const s = [], { bounds: i, step: o, min: r, max: a, precision: l, count: c, maxTicks: u, maxDigits: f, includeBounds: d } = e, p = o || 1, b = u - 1, { min: _, max: g } = t, x = !St(r), M = !St(a), H = !St(c), K = (g - _) / (f + 1);
  let O = yl((g - _) / b / p) * p, U, w, S, P;
  if (O < 1e-14 && !x && !M)
    return [
      {
        value: _
      },
      {
        value: g
      }
    ];
  P = Math.ceil(g / O) - Math.floor(_ / O), P > b && (O = yl(P * O / b / p) * p), St(l) || (U = Math.pow(10, l), O = Math.ceil(O * U) / U), i === "ticks" ? (w = Math.floor(_ / O) * O, S = Math.ceil(g / O) * O) : (w = _, S = g), x && M && o && dm((a - r) / o, O / 1e3) ? (P = Math.round(Math.min((a - r) / O, u)), O = (a - r) / P, w = r, S = a) : H ? (w = x ? r : w, S = M ? a : S, P = c - 1, O = (S - w) / P) : (P = (S - w) / O, Ln(P, Math.round(P), O / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
  const I = Math.max(vl(O), vl(w));
  U = Math.pow(10, St(l) ? I : l), w = Math.round(w * U) / U, S = Math.round(S * U) / U;
  let T = 0;
  for (x && (d && w !== r ? (s.push({
    value: r
  }), w < r && T++, Ln(Math.round((w + T * O) * U) / U, r, cc(r, K, e)) && T++) : w < r && T++); T < P; ++T) {
    const B = Math.round((w + T * O) * U) / U;
    if (M && B > a)
      break;
    s.push({
      value: B
    });
  }
  return M && d && S !== a ? s.length && Ln(s[s.length - 1].value, a, cc(a, K, e)) ? s[s.length - 1].value = a : s.push({
    value: a
  }) : (!M || S === a) && s.push({
    value: S
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
    return St(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
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
st(Cr, "id", "linear"), st(Cr, "defaults", {
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
  if (St(t))
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
    const t = this._adapter, s = this.min, n = this.max, i = this.options, o = i.time, r = o.unit || dc(o.minUnit, s, n, this._getLabelCapacity(s)), a = vt(i.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Xn(l) || l === !0, u = {};
    let f = s, d, p;
    if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : r), t.diff(n, s, r) > 1e5 * a)
      throw new Error(s + " and " + n + " are too far apart with stepSize of " + a + " " + r);
    const b = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, p = 0; d < n; d = +t.add(d, a, r), p++)
      hc(u, d, b);
    return (d === n || i.bounds === "ticks" || p === 1) && hc(u, d, b), Object.keys(u).sort(uc).map((_) => +_);
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
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && a[l], f = c && a[c], d = n[s], p = c && f && d && d.major;
    return this._adapter.format(t, i || (p ? f : u));
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
st(go, "id", "time"), st(go, "defaults", {
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
st(gc, "id", "timeseries"), st(gc, "defaults", go.defaults);
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
    const i = mt(null), o = zc(null);
    s({
      chart: o
    });
    const r = () => {
      if (!i.value) return;
      const { type: c, data: u, options: f, plugins: d, datasetIdKey: p } = e, b = Oy(u, p), _ = Sy(b, u);
      o.value = new Po(i.value, {
        type: c,
        data: _,
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
      let [f, d] = c, [p, b] = u;
      const _ = J(o.value);
      if (!_)
        return;
      let g = !1;
      if (f) {
        const x = Ks(f), M = Ks(p);
        x && x !== M && (ky(_, x), g = !0);
      }
      if (d) {
        const x = Ks(d.labels), M = Ks(b.labels), H = Ks(d.datasets), K = Ks(b.datasets);
        x !== M && (Df(_.config.data, x), g = !0), H && H !== K && (Pf(_.config.data, H, e.datasetIdKey), g = !0);
      }
      g && Ls(() => {
        l(_);
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
const Ty = /* @__PURE__ */ Cy("line", Vn), Dy = {
  key: 0,
  class: "cell-text"
}, Py = {
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
    const t = e, s = Nt(() => {
      const g = String(t.value).split(",").map(Number).filter((x) => !isNaN(x));
      return {
        labels: g.map((x, M) => M + 1),
        datasets: [
          {
            data: g,
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
    }, i = Nt(() => t.value === null || t.value === void 0 || t.value === "" ? "-" : String(t.value)), o = (g) => {
      if (g == null || g === "") return "-";
      const x = Number(g);
      return isNaN(x) ? "-" : x.toLocaleString();
    }, r = (g) => {
      if (!g) return "-";
      try {
        return new Date(g).toLocaleDateString("zh-CN");
      } catch {
        return "-";
      }
    }, a = (g) => {
      try {
        return new URL(g).hostname;
      } catch {
        return g;
      }
    }, l = (g) => g ? g.charAt(0).toUpperCase() : "?", c = [
      "bg-blue-100 text-blue-800",
      // 蓝
      "bg-green-100 text-green-800",
      // 绿
      "bg-yellow-100 text-yellow-800",
      // 黄
      "bg-purple-100 text-purple-800",
      // 紫
      "bg-pink-100 text-pink-800",
      // 粉
      "bg-indigo-100 text-indigo-800",
      // 靛
      "bg-red-100 text-red-800",
      // 红
      "bg-orange-100 text-orange-800",
      // 橙
      "bg-teal-100 text-teal-800",
      // 青
      "bg-gray-100 text-gray-800"
      // 灰
    ], u = (g) => {
      let x = 0;
      for (let M = 0; M < g.length; M++) {
        const H = g.charCodeAt(M);
        x = (x << 5) - x + H, x = x & x;
      }
      return Math.abs(x);
    }, f = (g) => {
      const x = u(g) % c.length;
      return c[x];
    }, d = {
      重要紧急: "priority-urgent",
      紧急不重要: "priority-important",
      重要不紧急: "priority-normal",
      充电: "status-charge",
      放电: "status-discharge"
    }, p = (g) => {
      if (!g) return "status-default";
      const x = d;
      return x[g] ? x[g] : f(g);
    }, b = (g) => {
      try {
        return new URL(g), !0;
      } catch {
        return !1;
      }
    }, _ = (g) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
    return (g, x) => (Y(), tt("div", {
      class: ze(["cell-display", { clickable: !g.editing }])
    }, [
      g.field.type === "text" ? (Y(), tt("span", Dy, Mt(i.value), 1)) : g.field.type === "number" ? (Y(), tt("span", Py, Mt(o(g.value)), 1)) : g.field.type === "date" ? (Y(), tt("span", Iy, Mt(r(g.value)), 1)) : g.field.type === "select" ? (Y(), tt("div", Ey, [
        g.value ? (Y(), tt("span", {
          key: 0,
          class: ze(["select-tag", p(g.value)])
        }, Mt(g.value), 3)) : (Y(), tt("span", Ay, "-"))
      ])) : g.field.type === "multiSelect" ? (Y(), tt("div", Ry, [
        (Y(!0), tt(Ft, null, Ms(Array.isArray(g.value) ? g.value : [], (M) => (Y(), tt("span", {
          key: M,
          class: "multi-select-tag"
        }, Mt(M), 1))), 128)),
        !g.value || Array.isArray(g.value) && g.value.length === 0 ? (Y(), tt("span", Ly, "-")) : ss("", !0)
      ])) : g.field.type === "user" ? (Y(), tt("div", $y, [
        g.value ? (Y(), tt("div", Fy, [
          R("div", Ny, Mt(l(g.value)), 1),
          R("span", jy, Mt(g.value), 1)
        ])) : (Y(), tt("span", Vy, "-"))
      ])) : g.field.type === "checkbox" ? (Y(), tt("div", Hy, [
        R("div", {
          class: ze(["checkbox-display", { checked: !!g.value }])
        }, [
          g.value ? (Y(), Ds(wt(Mg), {
            key: 0,
            class: "w-3 h-3"
          })) : (Y(), Ds(wt(zi), {
            key: 1,
            class: "w-3 h-3"
          }))
        ], 2)
      ])) : g.field.type === "url" ? (Y(), tt("div", zy, [
        g.value && b(g.value) ? (Y(), tt("a", {
          key: 0,
          href: g.value,
          target: "_blank",
          class: "url-link",
          onClick: x[0] || (x[0] = Ps(() => {
          }, ["stop"]))
        }, [
          yt(wt(Cg), { class: "w-3 h-3" }),
          Zs(" " + Mt(a(g.value)), 1)
        ], 8, By)) : (Y(), tt("span", Uy, "-"))
      ])) : g.field.type === "email" ? (Y(), tt("div", Wy, [
        g.value && _(g.value) ? (Y(), tt("a", {
          key: 0,
          href: `mailto:${g.value}`,
          class: "email-link",
          onClick: x[1] || (x[1] = Ps(() => {
          }, ["stop"]))
        }, [
          yt(wt(Dg), { class: "w-3 h-3" }),
          Zs(" " + Mt(g.value), 1)
        ], 8, Ky)) : (Y(), tt("span", Yy, "-"))
      ])) : g.field.type === "phone" ? (Y(), tt("div", qy, [
        g.value ? (Y(), tt("a", {
          key: 0,
          href: `tel:${g.value}`,
          class: "phone-link",
          onClick: x[2] || (x[2] = Ps(() => {
          }, ["stop"]))
        }, [
          yt(wt(Pg), { class: "w-3 h-3" }),
          Zs(" " + Mt(g.value), 1)
        ], 8, Gy)) : (Y(), tt("span", Xy, "-"))
      ])) : g.field.type === "sparkline" ? (Y(), tt("div", Jy, [
        g.value ? (Y(), Ds(wt(Ty), {
          key: 0,
          data: s.value,
          options: n
        }, null, 8, ["data"])) : (Y(), tt("span", Qy, "-"))
      ])) : (Y(), tt("span", {
        key: 11,
        class: "cell-text",
        title: i.value
      }, Mt(i.value), 9, Zy))
    ], 2));
  }
}), ev = /* @__PURE__ */ Zr(tv, [["__scopeId", "data-v-20935d66"]]), sv = { class: "modal-header" }, nv = { class: "modal-body" }, iv = { class: "field-list" }, ov = { class: "field-list-header" }, rv = { class: "field-items" }, av = ["onDragstart", "onDragover", "onDrop"], lv = { class: "field-drag-handle" }, cv = { class: "field-info" }, uv = { class: "field-icon" }, fv = { class: "field-details" }, dv = { class: "field-name" }, hv = { class: "field-meta" }, pv = { class: "field-type" }, gv = { class: "field-width" }, mv = {
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
    const s = Qr(), n = mt(!1), i = mt(null), o = mt({
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
    ], l = Nt(() => s.fields || []), c = t, u = (w) => ({
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
    })[w] || "未知", f = (w, S) => {
      s.updateField(w, { visible: S }), c("fieldUpdated");
    }, d = (w) => {
      i.value = w, n.value = !1, Object.assign(r, {
        name: w.name,
        type: w.type,
        width: w.width,
        visible: w.visible,
        required: w.required || !1,
        options: w.options ? [...w.options] : [],
        defaultValue: w.defaultValue || "",
        description: w.description || ""
      });
    }, p = () => {
      i.value = null, n.value = !1, b();
    }, b = () => {
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
    }, _ = () => {
      if (!r.name || !r.type) {
        alert("请填写字段名称和类型");
        return;
      }
      const w = {
        name: r.name,
        type: r.type,
        width: r.width,
        visible: r.visible,
        required: r.required,
        options: r.options.filter((S) => S.trim()),
        defaultValue: r.defaultValue,
        description: r.description
      };
      i.value ? s.updateField(i.value.id, w) : s.addField(w), c("fieldUpdated"), p();
    }, g = (w) => {
      const S = l.value.find((P) => P.id === w);
      S && confirm(`确定要删除字段"${S.name}"吗？删除后相关数据将丢失。`) && (s.deleteField(w), c("fieldUpdated"));
    }, x = () => {
      r.options.push("");
    }, M = (w) => {
      r.options.splice(w, 1);
    }, H = (w, S) => {
      o.value = {
        isDragging: !0,
        dragIndex: S,
        dropTarget: -1
      }, w.dataTransfer && (w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", S.toString()));
    }, K = (w, S) => {
      w.preventDefault(), o.value.dragIndex !== S && (o.value.dropTarget = S);
    }, O = (w, S) => {
      w.preventDefault(), o.value.dragIndex !== S && (s.reorderFields(o.value.dragIndex, S), c("fieldUpdated"));
    }, U = () => {
      o.value = {
        isDragging: !1,
        dragIndex: -1,
        dropTarget: -1
      };
    };
    return (w, S) => (Y(), tt("div", {
      class: "modal-overlay",
      onClick: S[10] || (S[10] = (P) => w.$emit("close"))
    }, [
      R("div", {
        class: "modal-content",
        onClick: S[9] || (S[9] = Ps(() => {
        }, ["stop"]))
      }, [
        R("div", sv, [
          S[11] || (S[11] = R("h3", null, "字段管理", -1)),
          R("button", {
            onClick: S[0] || (S[0] = (P) => w.$emit("close")),
            class: "close-btn"
          }, [
            yt(wt(zi), { class: "w-4 h-4" })
          ])
        ]),
        R("div", nv, [
          R("div", iv, [
            R("div", ov, [
              S[13] || (S[13] = R("span", { class: "header-text" }, "字段列表", -1)),
              R("button", {
                onClick: S[1] || (S[1] = (P) => n.value = !0),
                class: "add-field-btn"
              }, [
                yt(wt(ul), { class: "w-4 h-4" }),
                S[12] || (S[12] = Zs(" 添加字段 ", -1))
              ])
            ]),
            R("div", rv, [
              (Y(!0), tt(Ft, null, Ms(l.value, (P, I) => {
                var T;
                return Y(), tt("div", {
                  key: P.id,
                  class: ze(["field-item", { editing: ((T = i.value) == null ? void 0 : T.id) === P.id }]),
                  draggable: "true",
                  onDragstart: (B) => H(B, I),
                  onDragend: U,
                  onDragover: (B) => K(B, I),
                  onDrop: (B) => O(B, I)
                }, [
                  R("div", lv, [
                    yt(wt(yr), { class: "w-4 h-4" })
                  ]),
                  R("div", cv, [
                    R("div", uv, [
                      (Y(), Ds(au(wt(Yu)(P.type)), { class: "w-4 h-4" }))
                    ]),
                    R("div", fv, [
                      R("div", dv, Mt(P.name), 1),
                      R("div", hv, [
                        R("span", pv, Mt(u(P.type)), 1),
                        R("span", gv, "宽度: " + Mt(P.width) + "px", 1),
                        P.required ? (Y(), tt("span", mv, "必填")) : ss("", !0)
                      ])
                    ])
                  ]),
                  R("div", _v, [
                    R("label", bv, [
                      R("input", {
                        type: "checkbox",
                        checked: P.visible,
                        onChange: (B) => {
                          var ot;
                          return f(P.id, (ot = B.target) == null ? void 0 : ot.checked);
                        }
                      }, null, 40, yv),
                      S[14] || (S[14] = R("span", { class: "toggle-slider" }, null, -1))
                    ])
                  ]),
                  R("div", vv, [
                    R("button", {
                      class: "action-btn edit",
                      onClick: (B) => d(P),
                      title: "编辑 " + P.name
                    }, [
                      yt(wt(Ig), { class: "w-3 h-3" })
                    ], 8, xv),
                    R("button", {
                      class: "action-btn delete",
                      onClick: (B) => g(P.id),
                      title: "删除 " + P.name
                    }, [
                      yt(wt(Eg), { class: "w-3 h-3" })
                    ], 8, wv)
                  ])
                ], 42, av);
              }), 128))
            ])
          ]),
          n.value || i.value ? (Y(), tt("div", Sv, [
            R("div", kv, [
              R("h4", null, Mt(i.value ? "编辑字段" : "添加字段"), 1),
              R("button", {
                onClick: p,
                class: "cancel-btn"
              }, [
                yt(wt(zi), { class: "w-4 h-4" })
              ])
            ]),
            R("form", {
              onSubmit: Ps(_, ["prevent"]),
              class: "form-content"
            }, [
              R("div", Ov, [
                R("div", Mv, [
                  S[15] || (S[15] = R("label", null, "字段名称", -1)),
                  Ye(R("input", {
                    "onUpdate:modelValue": S[2] || (S[2] = (P) => r.name = P),
                    type: "text",
                    class: "form-input",
                    placeholder: "请输入字段名称",
                    required: ""
                  }, null, 512), [
                    [mn, r.name]
                  ])
                ]),
                R("div", Cv, [
                  S[17] || (S[17] = R("label", null, "字段类型", -1)),
                  Ye(R("select", {
                    "onUpdate:modelValue": S[3] || (S[3] = (P) => r.type = P),
                    class: "form-select",
                    required: ""
                  }, [
                    S[16] || (S[16] = R("option", { value: "" }, "请选择类型", -1)),
                    (Y(), tt(Ft, null, Ms(a, (P) => R("option", {
                      key: P.value,
                      value: P.value
                    }, Mt(P.label), 9, Tv)), 64))
                  ], 512), [
                    [Fp, r.type]
                  ])
                ])
              ]),
              R("div", Dv, [
                R("div", Pv, [
                  S[18] || (S[18] = R("label", null, "列宽度", -1)),
                  Ye(R("input", {
                    "onUpdate:modelValue": S[4] || (S[4] = (P) => r.width = P),
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
                R("div", Iv, [
                  S[19] || (S[19] = R("label", null, "默认值", -1)),
                  Ye(R("input", {
                    "onUpdate:modelValue": S[5] || (S[5] = (P) => r.defaultValue = P),
                    type: "text",
                    class: "form-input",
                    placeholder: "可选"
                  }, null, 512), [
                    [mn, r.defaultValue]
                  ])
                ])
              ]),
              r.type === "select" || r.type === "multiSelect" ? (Y(), tt("div", Ev, [
                S[21] || (S[21] = R("label", null, "选项配置", -1)),
                R("div", Av, [
                  (Y(!0), tt(Ft, null, Ms(r.options, (P, I) => (Y(), tt("div", {
                    key: I,
                    class: "option-item"
                  }, [
                    Ye(R("input", {
                      "onUpdate:modelValue": (T) => r.options[I] = T,
                      type: "text",
                      class: "option-input",
                      placeholder: "选项名称"
                    }, null, 8, Rv), [
                      [mn, r.options[I]]
                    ]),
                    R("button", {
                      type: "button",
                      onClick: (T) => M(I),
                      class: "remove-option-btn"
                    }, [
                      yt(wt(zi), { class: "w-3 h-3" })
                    ], 8, Lv)
                  ]))), 128)),
                  R("button", {
                    type: "button",
                    onClick: x,
                    class: "add-option-btn"
                  }, [
                    yt(wt(ul), { class: "w-3 h-3" }),
                    S[20] || (S[20] = Zs(" 添加选项 ", -1))
                  ])
                ])
              ])) : ss("", !0),
              R("div", $v, [
                R("div", Fv, [
                  R("label", Nv, [
                    Ye(R("input", {
                      "onUpdate:modelValue": S[6] || (S[6] = (P) => r.visible = P),
                      type: "checkbox",
                      class: "form-checkbox"
                    }, null, 512), [
                      [tl, r.visible]
                    ]),
                    S[22] || (S[22] = R("span", null, "显示字段", -1))
                  ])
                ]),
                R("div", jv, [
                  R("label", Vv, [
                    Ye(R("input", {
                      "onUpdate:modelValue": S[7] || (S[7] = (P) => r.required = P),
                      type: "checkbox",
                      class: "form-checkbox"
                    }, null, 512), [
                      [tl, r.required]
                    ]),
                    S[23] || (S[23] = R("span", null, "必填字段", -1))
                  ])
                ])
              ]),
              R("div", Hv, [
                S[24] || (S[24] = R("label", null, "字段描述", -1)),
                Ye(R("textarea", {
                  "onUpdate:modelValue": S[8] || (S[8] = (P) => r.description = P),
                  class: "form-textarea",
                  placeholder: "字段描述（可选）",
                  rows: "3"
                }, null, 512), [
                  [mn, r.description]
                ])
              ]),
              R("div", zv, [
                R("button", {
                  type: "button",
                  onClick: p,
                  class: "btn-secondary"
                }, " 取消 "),
                R("button", Bv, Mt(i.value ? "更新字段" : "添加字段"), 1)
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
}, Jv = { class: "table-header-wrapper" }, Qv = { class: "header-cell checkbox-cell" }, Zv = ["checked"], t0 = ["draggable", "onDragstart", "onDragover", "onDrop"], e0 = ["onMousedown"], s0 = ["title"], n0 = ["draggable", "onDragstart", "onDragover", "onDrop"], i0 = { class: "row-cell checkbox-cell" }, o0 = ["checked", "onChange"], r0 = ["onClick", "onDblclick"], a0 = {
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
    const t = Qr(), s = mt(!1), n = mt(), i = mt(), o = mt(!1), r = mt(!1), a = mt(!1), l = mt({
      isDragging: !1,
      dragType: null,
      dragIndex: -1,
      dragData: null,
      dropTarget: -1,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0
    }), c = mt({
      isResizing: !1,
      columnIndex: -1,
      startX: 0,
      startWidth: 0
    }), u = mt(null), f = Nt(() => t.selectedRecords || []), d = t.toggleRecordSelection || (() => {
    }), p = t.clearSelection || (() => {
    }), b = t.selectAllRecords || (() => {
    }), _ = t.reorderFields || (() => {
    }), g = t.reorderRecords || (() => {
    }), x = Nt(() => (t.records || []).length), M = Nt(() => f.value.length === x.value), H = Nt(() => {
      const y = t.records;
      return y ? y.slice(0, 100) : [];
    }), K = Nt(() => t.fields.reduce((v, N) => v + N.width, 0) + 48), O = (y) => ({
      width: `${y.width}px`,
      minWidth: `${y.width}px`,
      maxWidth: `${y.width}px`,
      flexShrink: 0
    }), U = Nt(() => ({
      left: l.value.currentX + "px",
      top: l.value.currentY + "px",
      transform: "translate(-50%, -50%)"
    })), w = (y) => {
      if (a.value) return;
      r.value = !0;
      const v = y.target;
      i.value && (i.value.scrollLeft = v.scrollLeft), requestAnimationFrame(() => {
        r.value = !1;
      });
    }, S = (y) => {
      if (r.value) return;
      a.value = !0;
      const v = y.target;
      n.value && (n.value.scrollLeft = v.scrollLeft), requestAnimationFrame(() => {
        a.value = !1;
      });
    }, P = (y) => {
      c.value.isResizing && (y.preventDefault(), y.stopPropagation());
    }, I = (y, v) => {
      if (c.value.isResizing) {
        y.preventDefault(), y.stopPropagation();
        return;
      }
    }, T = (y, v) => {
      if (c.value.isResizing) {
        y.preventDefault();
        return;
      }
      const N = t.fields[v];
      if (N) {
        if (l.value = {
          isDragging: !0,
          dragType: "column",
          dragIndex: v,
          dragData: N,
          dropTarget: -1,
          startX: y.clientX,
          startY: y.clientY,
          currentX: y.clientX,
          currentY: y.clientY
        }, y.dataTransfer) {
          y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", v.toString());
          const j = document.createElement("div");
          j.style.opacity = "0", j.style.position = "absolute", j.style.top = "-1000px", document.body.appendChild(j), y.dataTransfer.setDragImage(j, 0, 0), setTimeout(() => document.body.removeChild(j), 0);
        }
        document.addEventListener("dragover", xt), document.body.classList.add("dragging-column");
      }
    }, B = (y, v) => {
      y.preventDefault(), l.value.dragType === "column" && l.value.dragIndex !== v && (l.value.dropTarget = v);
    }, ot = (y, v) => {
      if (y.preventDefault(), l.value.dragType === "column" && l.value.dragIndex !== v) {
        const N = l.value.dragIndex;
        _(N, v);
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
      }, document.removeEventListener("dragover", xt), document.body.classList.remove("dragging-column");
    }, nt = (y, v) => {
      if (u.value || c.value.isResizing) {
        y.preventDefault();
        return;
      }
      const N = H.value[v];
      if (N) {
        if (l.value = {
          isDragging: !0,
          dragType: "row",
          dragIndex: v,
          dragData: N,
          dropTarget: -1,
          startX: y.clientX,
          startY: y.clientY,
          currentX: y.clientX,
          currentY: y.clientY
        }, y.dataTransfer) {
          y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", v.toString());
          const j = document.createElement("div");
          j.style.opacity = "0", j.style.position = "absolute", j.style.top = "-1000px", document.body.appendChild(j), y.dataTransfer.setDragImage(j, 0, 0), setTimeout(() => document.body.removeChild(j), 0);
        }
        document.addEventListener("dragover", xt), document.body.classList.add("dragging-row");
      }
    }, it = (y, v) => {
      y.preventDefault(), l.value.dragType === "row" && l.value.dragIndex !== v && (l.value.dropTarget = v);
    }, G = (y, v) => {
      if (y.preventDefault(), l.value.dragType === "row" && l.value.dragIndex !== v) {
        const N = l.value.dragIndex;
        g(N, v);
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
      }, document.removeEventListener("dragover", xt), document.body.classList.remove("dragging-row");
    }, lt = () => {
      c.value = {
        isResizing: !1,
        columnIndex: -1,
        startX: 0,
        startWidth: 0
      }, document.removeEventListener("mouseup", lt), document.body.classList.remove("resizing-column"), document.body.style.userSelect = "";
    }, xt = (y) => {
      l.value.currentX = y.clientX, l.value.currentY = y.clientY;
    }, se = (y, v) => {
    }, Vt = (y, v) => {
      u.value = { recordId: y, fieldId: v };
    }, Lt = () => {
      Ls(() => {
      });
    }, Qt = () => {
      M.value ? p() : b();
    };
    return So(() => {
      document.removeEventListener("dragover", xt), document.removeEventListener("mouseup", lt), document.body.classList.remove("dragging-column", "dragging-row", "resizing-column"), document.body.style.userSelect = "";
    }), (y, v) => {
      var N, j, gt, Ot;
      return Y(), tt("div", Kv, [
        R("div", Yv, [
          R("span", qv, " 总计 " + Mt(x.value) + " 条记录 ", 1),
          R("span", Gv, " 已选择 " + Mt(((N = f.value) == null ? void 0 : N.length) || 0) + " 条 ", 1)
        ]),
        s.value ? ss("", !0) : (Y(), tt("div", Xv, [
          R("div", Jv, [
            R("div", {
              class: "table-header-scroll",
              ref_key: "headerScrollRef",
              ref: n,
              onScroll: w
            }, [
              R("div", {
                class: "table-header",
                style: Ze({ width: K.value + "px" })
              }, [
                R("div", Qv, [
                  R("input", {
                    type: "checkbox",
                    checked: M.value,
                    onChange: Qt
                  }, null, 40, Zv)
                ]),
                (Y(!0), tt(Ft, null, Ms(wt(t).fields, (ct, Ht) => (Y(), tt("div", {
                  key: `header-${ct.id}`,
                  class: ze(["header-cell", {
                    dragging: l.value.isDragging && l.value.dragIndex === Ht && l.value.dragType === "column",
                    "drop-target": l.value.dropTarget === Ht && l.value.dragType === "column",
                    resizing: c.value.isResizing && c.value.columnIndex === Ht
                  }]),
                  style: Ze(O(ct)),
                  draggable: !c.value.isResizing,
                  onDragstart: (h) => T(h, Ht),
                  onDragend: Tt,
                  onDragover: (h) => B(h, Ht),
                  onDrop: (h) => ot(h, Ht)
                }, [
                  R("div", {
                    class: "header-content",
                    onMousedown: P
                  }, [
                    R("div", {
                      class: "drag-handle",
                      onMousedown: Ps((h) => I(h), ["stop"])
                    }, [
                      yt(wt(yr), { class: "w-4 h-4" })
                    ], 40, e0),
                    R("span", {
                      class: "field-name",
                      title: ct.tooltip
                    }, Mt(ct.name), 9, s0)
                  ], 32)
                ], 46, t0))), 128))
              ], 4)
            ], 544)
          ]),
          R("div", {
            class: "table-body-wrapper",
            ref_key: "bodyScrollRef",
            ref: i,
            onScroll: S
          }, [
            R("div", {
              class: "table-body",
              style: Ze({ width: K.value + "px" })
            }, [
              (Y(!0), tt(Ft, null, Ms(H.value, (ct, Ht) => (Y(), tt("div", {
                key: `row-${ct.id}`,
                class: ze(["table-row", {
                  selected: f.value.includes(ct.id),
                  dragging: l.value.isDragging && l.value.dragType === "row" && l.value.dragIndex === Ht,
                  "drop-target": l.value.dropTarget === Ht && l.value.dragType === "row"
                }]),
                draggable: !u.value && !c.value.isResizing,
                onDragstart: (h) => nt(h, Ht),
                onDragend: Z,
                onDragover: (h) => it(h, Ht),
                onDrop: (h) => G(h, Ht)
              }, [
                R("div", i0, [
                  R("input", {
                    type: "checkbox",
                    checked: f.value.includes(ct.id),
                    onChange: (h) => wt(d)(ct.id)
                  }, null, 40, o0)
                ]),
                R("div", {
                  class: "row-drag-handle",
                  onMousedown: v[0] || (v[0] = Ps(() => {
                  }, ["stop"]))
                }, [
                  yt(wt(yr), { class: "w-4 h-4" })
                ], 32),
                (Y(!0), tt(Ft, null, Ms(wt(t).fields, (h, m) => (Y(), tt("div", {
                  key: `cell-${ct.id}-${h.id}`,
                  class: "row-cell",
                  style: Ze(O(h)),
                  onClick: (k) => se(ct.id, h.id),
                  onDblclick: (k) => Vt(ct.id, h.id)
                }, [
                  yt(ev, {
                    value: ct[h.id],
                    field: h,
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
            (Y(), Ds(au(wt(Yu)((j = l.value.dragData) == null ? void 0 : j.type)), { class: "w-4 h-4" })),
            R("span", null, Mt((gt = l.value.dragData) == null ? void 0 : gt.name), 1)
          ])) : (Y(), tt("div", l0, [
            R("span", null, Mt(((Ot = l.value.dragData) == null ? void 0 : Ot.title) || "记录"), 1)
          ]))
        ], 4)) : ss("", !0),
        o.value ? (Y(), Ds(Wv, {
          key: 2,
          onClose: v[1] || (v[1] = (ct) => o.value = !1),
          onFieldUpdated: Lt
        })) : ss("", !0),
        s.value ? (Y(), tt("div", c0, [
          R("div", u0, [
            yt(wt(Tg), { class: "w-6 h-6 animate-spin" }),
            v[2] || (v[2] = R("span", null, "加载中...", -1))
          ])
        ])) : ss("", !0)
      ]);
    };
  }
}), d0 = /* @__PURE__ */ Zr(f0, [["__scopeId", "data-v-77e75fd8"]]), h0 = { class: "table-view" }, p0 = { class: "main-content" }, g0 = { class: "content" }, mc = /* @__PURE__ */ js({
  __name: "ShareView",
  props: {
    stepName: { default: "default-step" }
  },
  setup(e) {
    const t = e, s = Qr(), { fields: n, records: i } = Sg(s);
    return zr(() => {
      t.stepName ? s.fetchTableData(t.stepName) : console.error("ShareView: 未提供 stepName prop。");
    }), (o, r) => (Y(), tt("div", h0, [
      R("div", p0, [
        R("main", g0, [
          yt(d0)
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
