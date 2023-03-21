! function () {
    "use strict";

    function t() {
        console.log.apply(console, arguments)
    }

    function e() {
        console.info.apply(console, arguments)
    }

    function n() {
        console.warn.apply(console, arguments)
    }

    function i() {
        console.error.apply(console, arguments)
    }

    function o(t) {
        alert(t)
    }

    function a() {
        return window.location.href
    }

    function r(t) {
        window.location.href = t
    }

    function l() {
        return window.location.hash
    }

    function c(t, e) {
        t !== Ii && t.addClass(e)
    }

    function s(t, e) {
        t !== Ii && t.removeClass(e)
    }

    function d(t, e, n) {
        t !== Ii && (t.removeClass(e), t.addClass(n))
    }

    function u(t) {
        return parseInt(t)
    }

    function h(t) {
        return parseFloat(t)
    }

    function f(t) {
        return Math.round(t)
    }

    function p(t) {
        return Math.ceil(t)
    }

    function v(t) {
        return decodeURI(t)
    }

    function m() {
        return _c === Ii && (_c = $("html"), 0 === _c.length && (_c = Ii, i("Failed [ DOM.html ]"))), _c
    }

    function g() {
        return jc === Ii && (jc = $("body"), 0 === jc.length && (jc = Ii, i("Failed [ DOM.body ]"))), jc
    }

    function b() {
        return Bc === Ii && (Bc = $("#write"), 0 === Bc.length && (Bc = Ii, i("Failed [ VOM.doc ]"))), Bc
    }

    function w() {
        return Zc === Ii && (Zc = $("#write>pre.md-meta-block:first-child + h6, #write>h6:first-child"), 0 === Zc.length && (Zc = Ii, k() === Ii && n("Failed [ VOM.c ], maybe no cover"))), Zc
    }

    function y() {
        if (Gc === Ii) {
            let t = $(".footnotes-area");
            if (t !== Ii) {
                let e = t.prev(),
                    n = e.prop(Bl);
                n !== Ii && "h1" === n.l() && (Gc = e)
            } else Gc = Ii, n("Failed [ VOM.bc ], maybe no backcover")
        }
        return Gc
    }

    function k() {
        return Xc === Ii && (Xc = $("#vk-id-doc-title"), 0 === Xc.length && (Xc = Ii, n("Failed [ VOM.dt ]"))), Xc
    }

    function x() {
        es = O(a());
        let t = H("vlook-query");
        ns = O("file.html" + (t !== Ii ? "?" + t : ""))
    }

    function T(...t) {
        Qc === Fi && n(...t)
    }

    function C(t) {
        return localStorage[lc + t]
    }

    function L(t, e) {
        localStorage[lc + t] = e
    }

    function M() {
        return $(document).a(Jl)
    }

    function H(t) {
        let e = $("meta[name='" + t + "']").a(ua);
        return e === "${" + t + "}" ? Ii : e
    }

    function z(t) {
        let e = es[t];
        return e === Ii && (e = ns[t]), e
    }

    function O(t) {
        let e = t.i("#"),
            n = (t = e > -1 ? t.s(0, e) : t).i("?"),
            i = t.s(n > -1 ? n + 1 : t.length, t.length),
            o = {},
            a = i.length > 0 ? i.split("&") : [],
            r = null,
            l = a.length;
        for (let t = 0; t < l; t++) r = a[t].split("="), o[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
        return o
    }

    function A(t) {
        return t.s(t.i("#"), t.length)
    }

    function S(t) {
        let e = t.i("?");
        return e > -1 ? t.s(e + 1, t.length) : ""
    }

    function I() {
        return event.altKey
    }

    function F(t, e) {
        let n = [];
        if (e !== Ii)
            for (let i = 0, o = t.length; i < o; i++) n.push(R(t[i] + "-" + e));
        for (let i = 0, o = t.length; i < o; i++) q(t[i], e !== Ii ? n[i] : 0)
    }

    function N(t) {
        let e = t.i("?"),
            n = t.s(0, e).lastIndexOf("/"),
            i = -1 === n ? 0 : n;
        return t.s(0, i + 1)
    }

    function P(t) {
        return 0 === t.length ? "" : t.r(/</g, "&lt;").r(/>/g, "&gt;")
    }

    function D(t) {
        return 0 === t.length ? "" : t.r(/'/g, "").r(/"/g, "")
    }

    function W(t, e) {
        function n(t, e, n) {
            let i = 0;
            for (; e > 0;) n.i(t[i]) > -1 ? e -= 2 : e--, i++;
            return t.s(0, i)
        }

        function i(t, e, n) {
            let i = 0,
                o = t.length - 1;
            for (; e > 0;) n.i(t[o - i]) > -1 ? e -= 2 : e--, i++;
            return t.s(o + 1 - i)
        }
        if ((t = t.r(/\s+/g, " ")).length <= 2 * e) return P(t);
        let o = t.s(0, e).x(),
            a = t.s(t.length - e, t.length).x(),
            r = o.m(/\p{Unified_Ideograph}/gu),
            l = a.m(/\p{Unified_Ideograph}/gu);
        return null != r && r.length > 0 && (o = n(o, e, r)), null != l && l.length > 0 && (a = i(a, e, l)), P(o + " . . . " + a)
    }

    function E() {
        let e = l();
        return e.length > 0 && "#vk-id-doc-title" !== e ? (t("    ↩ Redirect to h: " + v(e)), r("#"), r(e), setTimeout((function () {
            rt(e)
        }), 300), Fi) : Ni
    }

    function K(t) {
        let e = v(l());
        r(t), e === v(t) && rt(t)
    }

    function R(t) {
        return getComputedStyle(document.documentElement).getPropertyValue(t)
    }

    function q(t, e) {
        document.documentElement.style.setProperty(t, e)
    }

    function U(t) {
        return t.r(/(\d)(?=(\d{3})+(\.\d+)*(\D)*$)/g, "$1,")
    }

    function _(t) {
        return t.r(/\.(\d+)/, ".<span class='v-tbl-col-fmt-num-decimal'>$1</span>")
    }

    function j(t) {
        return t.r(/%</, "<span class='v-tbl-col-fmt-percent'> %</span><")
    }

    function B(t) {
        return t.r(/(>.{1,3}\s)/, "><span class='v-tbl-col-fmt-currency'$1</span>")
    }

    function Z() {
        let t = Fi,
            e = ["因以下原因无法激活 VLOOK 插件：\n\n", "The VLOOK plugin cannot be activated for the following reasons:\n\n"][as];
        return -1 === g().a(ra).i("typora-export") && (e += ["• 只支持由 Typora 导出的 HTML 文件\n", "• Only HTML files exported by Typora are supported\n"][as], t = Ni), 0 === $(".md-toc").length && (e += ["• 缺少 [TOC], 这是 GFM 标准的「目录」语法\n", '• Missing [TOC], the GFM standard "Table of Content"\n'][as]), t === Ni ? (e += ["\n建议参考文档模板：", "\nSuggestion Reference document template: "][as] + "\nreleased/demo/VLOOK-Document-Template.md", o(e), Ni) : Fi
    }

    function G() {
        let t = new Vt;
        t.st(), Kc = new ce(new xe(Nr, "center"), R("--v-f-theme")), Kc === Ni ? o("Failed [ iFntThm ]") : Kc.init(z("wf")), t.ed("    ├ Font Themer: "), t.st(), Wc = new Yt(180, new Fe(Wl)), Wc === Ni && o("Failed [ iSpotlight ]"), t.ed("    ├ Spotlight: "), Ec = new Jt(new Fe("laserPointe")), Ec === Ni && o("Failed [ iPter ]"), t.ed("    ├ LaserPointer: "), t.st(), Xs = z("cf") !== gl, Te(), t.ed("    ├ Content Folding: "), Ae(), qc = new Ie(new xe("info-tips", "center")), 0 === qc.length && o("Failed [ iInfoTips ]"), t.st();
        let e = z("nc");
        Nc = new te(new xe(pl, Jr, Fi), e), Nc === Ni && o("Failed [ iNavCenter ]"), t.ed("    ├ Nav Center: "), t.st(), Pc = new ee(Nc), Pc === Ni ? o("Failed [ iChapNav ]") : Nc.chpNav = Pc, t.ed("    ├ Chapter Nav: "), t.st(), Fc = new ae(Nc, Pc), Fc === Ni ? o("Failed [ iTb ]") : (Fc.add(pl, (function () {
            Nc.tg()
        })), Fc.add(Nr, (function () {
            Kc.tg()
        })), Fc.add(pa, (function () {
            re.tg()
        })), Fc.addSpliter(tc), Fc.add(Hl, (function () {
            qc.inform(["开启方式：<br /><strong>三击文档中的「任意段落」</strong>", 'Open method:<br /><strong>three click "any paragraph" in the document</strong>'][as], 1e4, Fi)
        })), Fc.add(Wl, (function () {
            Ec.hide(), Wc.tg() === Fi && Dc.hide()
        })), Fc.add(Yr, (function () {
            Wc.hide(), Ec.tg() === Fi && Dc.hide()
        })), Fc.add(Vl, (function () {
            Ct()
        })), Nc.toolbar = Fc, Wc.toolbar = Fc, Ec.toolbar = Fc, Kc.bindButton(Fc.btns[Nr])), t.ed("    ├ Toolbar: "), t.st(), Rc = new si, Rc === Ni && o("Failed [ iFigNav ]"), t.ed("    ├ Figure Nav: "), t.st(), Ne(), Uc = new se(new xe("foot-note", uo, Fi)), Uc === Ni && o("Failed [ iFootNote ]"), fe(), ve(), me(new xe("link-checker", Il, Fi)), de(), ue("doc-info", Ks), ue("zoom-view", Rs), ue("link-checker", qs), t.ed("    └ Misc: ")
    }

    function X() {
        Vi.st("* Document Logo");
        let t = $(".v-doc-logo-light").c(Yi),
            e = $(".v-doc-logo-dark").c(Yi);
        if ($("head").append("<link rel='icon' id='doc-icon-light' href='" + t.s(5, t.length - 2) + "' type='image/x-icon'/><link rel='icon' id='doc-icon-dark' href='" + e.s(5, e.length - 2) + "' type='image/x-icon'/>"), Vi.ed(Ki), w() === Ii) {
            let t = ts === dl ? " mini" : "";
            b().prepend('<div id="vk-id-doc-title" class="v-doc-title' + t + '">' + M() + "</div>")
        }
        Vi.st("* UI i18n"), ct(), Vi.ed(Ki), "on" === z("capauto") && (ud = Fi), Vi.st("* Audio: "), Wn(), Vi.ed(Ki), Vi.st("* Video: "), En(), Vi.ed(Ki), Vi.st("* Quote: "), nn(), ln(), Vi.ed(Ki), Vi.st("* Figure: "), ai(), Vi.ed(va), Vi.st("* Table: "), un(), Vi.ed(va), pn(), Pn(), Vi.st("* Code Block: "), Re(), Vi.ed(Ki), Vi.st("* Code°Magic: "), hi(), Vi.ed(Ki), Nc.catalog.hasIndexItem() === Ni && Nc.figure.hasIndexItem() === Ni && Nc.table.hasIndexItem() === Ni && Nc.media.hasIndexItem() === Ni && Nc.codeblock.hasIndexItem() === Ni && (Nc.runMode = "closed"), Vi.st("* Foot Note: "), se.init(), Vi.ed(Ki), ft(), Le(), Vi.st("* Adjust NavCenter/ChapterNav/FigureNav/Toolbar/StatusBar"), te.init() && (Yc.device.mobile || Nc.showHandle(), Nc.adjust(), Pc.adjust(), Fc.adjust(), he(), Nc.catalog.adjustHoverStyle(), Pc.adjustHoverStyle(), Rc.adjustHoverStyle()), Vi.ed(Ki), _e(), Vi.st("* Binding Event"), document.addEventListener("mousemove", (function () {
            Wc.repaint(event || window.event), Nc.snap(event || window.event)
        })), $(document).uC().ck((function () {
            wn()
        })), $(document).scroll((function () {
            let t = (new Date).getTime(),
                e = $(document).scrollTop();
            (e < 10 || e > e - 10 || t - ls > 500) && Pe(e), (e < 10 || e > e - 10 || t - ls > 500 || Math.abs(e - V.doc.scroll.lastTop) > 50 && t - ls > 500) && ($t(t, $(document).scrollTop()), ut()), Nc.catalog.focusHeader()
        })), $(window).resize((function () {
            wn(), Nc.catalog.focusHeader(), ut(), an()
        })), window.onbeforeprint = function () {
            ts !== dl && "VLOOK" !== ps && o(["注意！为确保打印正常，建议使用文档内工具栏左侧的【打印】按钮进行打印！", "Notice! To ensure normal printing, it is recommended to use the [Print] button on the left side of the toolbar in the document to print!"][as])
        }, window.onafterprint = function () {
            ts !== dl && Lt()
        }, $(window).on("hashchange", (function (t) {
            let e = l(),
                n = e.s(1, e.length);
            if (0 === n.x().length) return;
            Nc.history.add(e);
            let i = $("#" + v(n) + ", a[name='" + n + "']");
            if (i !== Ii && i.o() !== Ii && 0 === i.o().top) {
                let t = i.closest(eo);
                if (t.length > 0 && t.isHidden()) {
                    let n = t.prev().f(".v-blockquote-folder");
                    n.length > 0 && (n.tr(hl), r(e))
                }
            }
            null != Ei && Ei === e || setTimeout((function () {
                rt(v(n))
            }), Yc.browser.Firefox ? 300 : 0), Ei = e, Nc.showed === Ni && ht()
        })), Vi.ed(Ki)
    }

    function Y() {
        let t = new Vt;
        t.st(), di(), t.ed("    ├ TaskList: "), t.st(), ui(), t.ed("    └ Mermaid: ")
    }

    function J(t) {
        t !== Ii && t.c(zc, "visible").c(bl, 1)
    }

    function Q(t) {
        t !== Ii && t.c(zc, Kr).c(bl, 0)
    }

    function tt(t) {
        return "<kbd>" + t + "</kbd>"
    }

    function et() {
        return tt("⌃ control / Ctrl")
    }

    function nt() {
        return tt(Yc.os.macOS ? "⌥ option" : "Alt")
    }

    function it() {
        return tt(Yc.os.macOS ? "⌘ command" : "Win")
    }

    function ot() {
        return '<div class="v-copyright"><svg class="v-copyright-svg-ico" width="24px" height="24px" style="display: inline-block; vertical-align: middle; cursor: pointer;"><use xlink:href="#icoVLOOK"></use></svg>&nbsp;&nbsp;Published with <a href="https://github.com/MadMaxChow/VLOOK" target="_blank"><strong>VLOOK</strong></a>™ (V15.1) &amp; <a href="https://www.typora.io" target="_blank"><strong>Typora</strong></a>.&nbsp;&nbsp;Support: <strong><a href="https://qm.qq.com/cgi-bin/qm/qr?k=oB8wpFG_4SEMf1CL9qVy-jMw0CMfSwff&jump_from=webapi">QQ Group</a></strong> / <strong><a href="mailto:67870144@qq.com?subject=Feedback%20about%20VLOOK%20V15.1&body=Hi,%0D%0A%0D%0A====================%0D%0A%0D%0A' + encodeURI(Yc.print(Fi)) + '">Email</a></strong>.</div>'
    }

    function at() {
        return $(window).w() <= 1280
    }

    function rt(t) {
        if (t !== Ii && t.sW("#") && (t = t.s(1, t.length)), t === Ii || 0 === t.x().length) return;
        let e = u(Pc.ui.c(ec)),
            n = u(Pc.ui.c(Er)),
            i = 10,
            o = $("#" + v(t) + ", a[name='" + t + "']"),
            a = o.prop(Bl);
        a !== Ii && (a = a.l()), a !== Ii && "h1h2h3h4h5h6".i(a) > -1 ? (i += "h6" === a ? e + n + 16 : o.ht() + 10 + 6 * (u(a.s(1, 2)) - 1), i -= u(R("--v-top-margin"))) : t.sW("ref-footnote") ? i += 70 : i += e + n, $(document).scrollTop($(document).scrollTop() - i)
    }

    function lt(t, e, n, i, o) {
        return '<svg width="' + e + 'px" height="' + n + 'px"' + (o = o !== Ii ? ' style="' + o + '"' : "") + ' class="v-svg-small-ico"><use class="v-svg-ico-' + i + '" xlink:href="#' + t + '"></use></svg>'
    }

    function ct() {
        Ys !== Ii && Ys.f("div > span").a(Jl, ["查看更多", "View More"][as]), Fc.btns[pl].a(Tr, ["<strong>隐藏</strong> / <strong>显示</strong> 导航中心", "<strong>Hide</strong> / <strong>Show</strong> Navigation Center"][as] + "\n<sub>" + tt("O") + "</sub>"), Fc.btns[pa].a(Tr, ["切换 [ <strong>黑暗</strong> / <strong>明亮</strong> ] 模式", "Switch <strong>Dark</strong> / <strong>Light</strong> Mode"][as] + "\n<sub>" + tt("D") + "</sub>"), Fc.btns[Nr].a(Tr, ["切换 字体风格", "Switch Font Theme"][as] + "\n<sub>" + tt("A") + "</sub>"), Fc.btns[Hl].a(Tr, ["段落导航 模式", "Paragraph Navigation mode"][as]), Fc.btns.spotlight.a(Tr, ["聚光灯", Wl][as] + "\n<sub>" + tt("S") + "</sub>"), Fc.btns[Yr].a(Tr, ["激光笔", "Laser Pointer"][as] + "\n<sub>" + tt("P") + "</sub>"), Fc.btns.print.a(Tr, ["打印...", "Print..."][as]), Pc.prev.ui.a(Tr, ["前一章", "Previous Chapter"][as] + "\n<sub>" + tt("◄") + "</sub>"), Pc.next.ui.a(Tr, ["后一章", "Next Chapter"][as] + "\n<sub>" + tt("►") + "</sub>"), Pc.dt.a(Tr, ["回到封面", "Back to cover"][as]), Pc.current.ui.a(Tr, ["回到本章的开始", "Go back to the beginning of this chapter"][as]), Rc.btns.prev.a(Jl, "[ ← ] " + ["前一张", "Previous"][as]), Rc.btns.next.a(Jl, "[ → ] " + ["后一张", "Next"][as]), Rc.btns.close.a(Jl, "[ ESC ] " + ["关闭", "Close"][as]), Kc.ui.f(".v-font-package").t(["字体", "Font"][as] + " "), Kc.ui.f(".v-font-theme-info").h(["若无法连接互联网加载在线版本字体，建议将字体直接下载到本地", "If you cannot connect to the Internet to load the online version of the font, it is recommended to download the font directly to the local"][as] + " (<a href='https://github.com/MadMaxChow/VLOOK/blob/master/FONT.md'>" + ["主站", "Primary"][as] + "</a> | <a href='https://gitee.com/madmaxchow/VLOOK/blob/master/FONT.md'>" + ["备用", "Standby"][as] + "</a>)"), Uc.buttonSeeAll.ch("a").t(["查看所有脚注", "View all footnotes"][as] + " ▶"), Rs.t("⊖ " + ["缩放", "Zoom"][as] + " ⊕")
    }

    function st(t) {
        let e = ($(window).w() - t.w()) / 2,
            n = Bi;
        Yc.device.mobile && (e = 10, n = 10), t.c(Jr, e).c(Il, n).c(ec, ($(window).ht() - t.ht()) / 2)
    }

    function dt(t, e) {
        let n = e.o().left,
            i = t.w() + u(t.c(Cl)) + u(t.c(Ll)) + 2 * u(t.c(so));
        n + i + 10 > $(window).w() && (n = $(window).w() - i - 10), t.c(Jr, n).c(ec, e.o().top - $(document).scrollTop() + e.ht() + 10)
    }

    function ut() {
        os !== Fi && (os = Fi, Nc.adjust() === Fi && Le(), Pc.adjust(), Fc.adjust(), os = Ni)
    }

    function ht() {
        setTimeout((function () {
            ut(), an()
        }), 500)
    }

    function ft() {
        Yc.device.mobile ? ($(ko).uH(), $(".v-segment-btn").uH(), $(".v-accent-btn").uH(), Rs.uH(), $(".v-doc-lib-board>.item").uH(), $(".v-std-code, .v-tag, .v-badge-name").uH(), $(".v-badge-value").uH()) : (pt($(ko)), pt($(".v-segment-btn")), pt($(".v-accent-btn")), pt(Rs), pt($(".v-doc-lib-board>.item")), pt($(".v-std-code, .v-tag, .v-badge-name")), pt($(".v-badge-value"), Fi))
    }

    function pt(t, e) {
        t.hover((function () {
            let t = $(this);
            c(t, Rr), e === Fi && s(t.p(), Rr)
        }), (function () {
            let t = $(this);
            s(t, Rr), e === Fi && t.p().tr("mouseenter")
        }))
    }

    function vt(t) {
        t.unbind("mouseenter").unbind("mouseleave")
    }

    function mt() {
        is < 1 ? q("--v-trans-value", vl) : is >= 2 && c($(".v-backdrop-blurs"), Hr), gt($(".v-doc-lib-board>.flip")), gt($("a kbd, a img"))
    }

    function gt(t, e) {
        if (is >= 1)
            if (e === Ii) c(t, oa);
            else {
                let n = e.split(" ");
                for (let e = 0; e < n.length; e++) c(t, "v-transition-" + n[e])
            }
    }

    function bt(t, e) {
        if (e === Ii) s(t, oa);
        else {
            let n = e.split(" ");
            for (let e = 0; e < n.length; e++) s(t, "v-transition-" + n[e])
        }
    }

    function wt() {
        $(document).keydown((function (t) {
            const e = t.keyCode || t.which || t.charCode;
            let n = (t.ctrlKey ? "⌃ Ctrl _ " : "") + (t.shiftKey ? "⇧ Shift _ " : "") + (t.altKey ? "⌥ Alt / Option_ " : "") + (t.metaKey ? "Windows / ⌘ Command _ " : "");
            if (!0 === I() && (Wi = Fi, q("--cur-copy", R("--cur-copy-as-md")), Cs.h(lt("icoCopyAsMd", 16, 16, Qr))), !(t.ctrlKey || t.altKey || t.metaKey) && (Wc.disposeHotkey(e, n), Ec.disposeHotkey(e, n), Dc.disposeHotkey(e, n), Et(e), Rc.disposeHotkey(e, n), Nc.disposeHotkey(e, n), Kc.disposeHotkey(e, n), qc.disposeHotkey(e, n), Uc.disposeHotkey(e, n), ke(e), rs !== Fi && "body" === document.activeElement.tagName.l())) switch (Pc.disposeHotkey(e, n), e) {
                case 79:
                    if (Rc.ui.isShowed()) return;
                    Fc.btns[pl].tr(la);
                    break;
                case 76:
                    Nc.docLib.enabled === Fi && Nc.docLib.handle.tr(la);
                    break;
                case 68:
                    Fc.btns[pa].tr(la);
                    break;
                case 65:
                    Kc.ui.isHidden() ? Fc.btns[Nr].tr(la) : Kc.hide();
                    break;
                case 88:
                    vn();
                    break;
                case 80:
                    Dc.hide(), Wc.hide(), Ec.tg();
                    break;
                case 83:
                    Dc.hide(), Ec.hide(), Wc.tg();
                    break;
                case 27:
                    rs === Ni && (Ve(), $e()), Wd.isHidden() || gn(), window.event.returnValue = Ni;
                    break
            }
        })), $(document).keyup((function (t) {
            !0 === Wi && (Wi = Ni, q("--cur-copy", R("--cur-copy-normal")), Cs.h(lt("icoCopy", 16, 16, Qr)))
        }))
    }

    function yt() {
        switch (Yc.language.base) {
            case "zh":
                as = 0;
                break;
            default:
                as = 1
        }
    }

    function $t(t, e) {
        ls = t
    }

    function kt() {
        d(g(), rc, Dr)
    }

    function xt() {
        d(g(), Dr, rc)
    }

    function Tt() {
        $("a:not([href^='#'])").e((function () {
            let t = $(this);
            t.a(Zl, t.a(Ur))
        }))
    }

    function Ct() {
        ps = "VLOOK", re.scheme === ga && (re.schemeBeforePrint = re.scheme, re.scheme = Qr, re.refresh()), $(".v-caption.mermaid").e((function () {
            let t = $(this);
            t.a(Ji, t.c(Ac)), t.c(Ac, "100%")
        })), $(".v-caption.mermaid svg").e((function () {
            let t = $(this);
            "100%" === t.a(Ac) ? t.a(Rl).i("max-width:") > -1 ? (t.a(Qi, t.c(ll)), t.c(ll, "")) : t.a(Rl).i("width:") > -1 && (t.a(Ji, t.c(Ac)), t.c(Ac, "100%")) : (t.a(Ji, t.a(Ac)), t.c(Ac, "100%"))
        })), $("[d-blockquote-folded='true']").e((function () {
            sn($(this))
        })), $("[d-content-folded='true']").e((function () {
            $(this).next(".v-content-expander").ch(".v-btn").tr(la)
        })), $(".v-tbl-row-g-btn").e((function () {
            Fn($(this).p().p())
        })), Bt();
        let t = $(".v-rb-coat");
        t.length > 0 && confirm("文档含有「刮刮卡」内容，打印前是否显示实际内容？") === Fi && t.e((function () {
            let t = $(this);
            t.a(yr).sW("f") && ki(t)
        })), setTimeout((function () {
            window.print()
        }), 2e3)
    }

    function Lt() {
        re.schemeBeforePrint === ga && re.tg(), $(".v-caption.mermaid").e((function () {
            let t = $(this);
            t.c(Ac, t.a(Ji)), t.removeAttr(Ji)
        })), $(".v-caption.mermaid svg").e((function () {
            let t = $(this);
            "100%" === t.a(Ac) ? t.a(Rl).i("max-width:") > -1 ? (t.c(ll, t.a(Qi)), t.removeAttr(Qi)) : t.a(Rl).i("width:") > -1 && (t.c(Ac, t.a(Ji)), t.removeAttr(Ji)) : (t.c(Ac, t.a(Ji)), t.removeAttr(Ji))
        })), $(".v-rb-coat").e((function () {
            let t = $(this);
            t.a(yr).sW("t") && xi(t)
        })), ps = vl
    }

    function Mt(t) {
        let e = "?p=vlook&ver=V15.1&thm=" + R("--v-theme-name").rA('"', "").x();
        e += "&d=" + (Yc.device.mobile ? "mob" : "") + "&dpr=" + Yc.display.DPR, e += "&os=", Yc.os.macOS ? e += "macOS" : Yc.os.Windows ? e += "Windows" : Yc.os.iOS || Yc.os.Linux ? e += "iPhone" : e += "others", e += "&b=", Yc.browser.Edge ? e += "edge&bv=" + Yc.browserVer.Edge : Yc.browser.Chrome ? e += "chrome&bv=" + Yc.browserVer.Chrome : Yc.browser.Firefox ? e += "firefox&bv=" + Yc.browserVer.Firefox : Yc.browser.Safari ? e += "safari&bv=" + Yc.browserVer.Safari : e += "others&bv=", e += "&cs=" + R("--v-color-scheme").rA('"', "").x(), e += "&lang=" + as + "&size=" + b().t().length + "&time=" + t, e += "&img=" + $(".v-fig").length + "&img-fold=" + $("p[d-cntr='img'][d-content-folded='true']").length + "&img-fill=" + $("img:not([d-img-fill])").length + "&img-invert=" + $("img[d-darksrc='invert']").length + "&img-alter=" + $("img[d-darksrc='alter']").length + "&img-cap1=" + $("div[id^=vk-id-fig][d-id-fig-type='img'] .v-cap-1 strong").length + "&img-cap2=" + $("div[id^=vk-id-fig][d-id-fig-type='img'] .v-cap-2").length;
        let n = $(".md-diagram-panel");
        e += "&mm=" + n.length + "&mm-fold=" + $("div[d-cntr='svg'][d-content-folded='true']").length + "&mm-cap1=" + $("div[id^=vk-id-fig][d-id-fig-type='svg'] .v-cap-1 strong").length + "&mm-cap2=" + $("div[id^=vk-id-fig][d-id-fig-type='svg'] .v-cap-2").length, e += "&audio=" + $(_i).length + "&mm-cap1=" + $("div[id^=vk-id-audio] .v-cap-1 strong").length + "&mm-cap2=" + $("div[id^=vk-id-audio] .v-cap-2").length, e += "&video=" + $(Mc).length + "&mm-cap1=" + $("div[id^=vk-id-video] .v-cap-1 strong").length + "&mm-cap2=" + $("div[id^=vk-id-video] .v-cap-2").length;
        let i = 0,
            o = 0,
            r = 0,
            l = 0,
            c = 0,
            s = 0,
            d = 0,
            u = 0;
        n.e((function () {
            let t = $(this);
            t.f("g.legend").length > 0 ? i++ : t.f("g.output g.nodes").length > 0 ? (o++, t.f("g.output g.nodes g#START.node").length > 0 ? r++ : t.f("g.output g.nodes g#INIT.node").length > 0 && l++) : t.f("g.stateGroup").length > 0 ? c++ : t.f("g rect.actor").length > 0 ? s++ : t.f("g.classGroup").length > 0 ? d++ : t.f("g rect.section").length > 0 && u++
        })), e += "&mm-pie=" + i + "&mm-flow=" + o + "&mm-flow-S=" + r + "&mm-flow-I=" + l + "&mm-state=" + c + "&mm-seq=" + s + "&mm-class=" + d + "&mm-gantt=" + u, e += "&tbl=" + $(jl).length + "&tbl-fold=" + $("figure[d-cntr='table'][d-content-folded='true']").length + "&tbl-cap1=" + $("div[id^=vk-id-tbl] .v-cap-1 strong").length + "&tbl-cap2=" + $("div[id^=vk-id-tbl] .v-cap-2").length;
        let h = 0,
            f = 0,
            p = 0,
            v = 0,
            m = 0,
            g = 0,
            w = 0,
            y;
        $("table[d-column-fmting='true']").e((function () {
            let t = $(this);
            t.f("thead .v-tbl-col-fmt-bold").length > 0 && h++, t.f("thead .v-tbl-col-fmt-em").length > 0 && f++, t.f("thead u").length > 0 && p++, t.f("thead .v-tbl-col-fmt-mark").length > 0 && v++, t.f("thead del").length > 0 && m++, t.f("thead .v-tbl-col-fmt-checkbox").length > 0 && g++, t.f("thead .v-tbl-col-fmt-num").length > 0 && w++
        })), e += "&tbl-fm-b=" + h + "&tbl-fm-em=" + f + "&tbl-fm-u=" + p + "&tbl-fm-m=" + v + "&tbl-fm-d=" + m + "&tbl-fm-chk=" + g + "&tbl-fm-num=" + w, e += "&tbl-cell-merge=" + $("table[d-cell-merge='true']").length, e += "&tbl-row-group=" + $("table[d-row-group='true']").length, e += "&cb=" + $(".md-fences").length + "&cb-fold=" + $("p[d-cntr='pre'][d-content-folded='true']").length + "&cb-cap1=" + $("div[id^=vk-id-codeblock] .v-cap-1 strong").length + "&cb-cap2=" + $("div[id^=vk-id-codeblock] .v-cap-2").length, e += "&tag=" + $("code[class^=v-tag]").length + "&badge=" + $("code[class^=v-badge-name]").length, e += "&bq=" + $(eo).length + "&bq-fold=" + $("[d-blockquote-folded='true']").length, e += "&fn=" + $(".md-footnote").length, e += "&url=" + a(), $("iframe[name='vlook-stat-gitee']").a(El, "https://madmaxchow.gitee.io/vlook/act/" + (Qc ? "dev-" : "") + "stat-gitee.html" + encodeURI(e))
    }

    function Ht(t) {
        return !1
    }

    function zt(t) {
        return t.sW("i") ? "fig.img" : t.sW("s") ? "fig.svg" : t.sW("t") ? jl : t.sW("p") ? ca : "Unknown"
    }

    function Ot() {
        let t = [0, 0, 0];
        return t[0] = Math.floor(255 * Math.random()), t[1] = Math.floor(255 * Math.random()), t[2] = Math.floor(255 * Math.random()), t
    }

    function At() {
        let t = [0, 0, 0];
        if (0 === vs.length) return t = Ot(), vs.push(t), t;
        let e = Ni,
            n = 0,
            i = [0, 0, 0];
        for (; e === Ni && n < 20;) {
            t = Ot();
            let o = 0;
            for (let e = 0; e < vs.length && (o = e, i[0] = (vs[e][0] - t[0]) / 256, i[1] = (vs[e][1] - t[1]) / 256, i[2] = (vs[e][2] - t[2]) / 256, !(Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]) < .3)); e++);
            o === vs.length && (vs.push(t), e = Fi), n++
        }
        return t
    }

    function St(t, e) {
        return "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function Vt() {
        let o = this;
        o.sT = null, o.lT = null, o.reset = function () {
            o.sT = (new Date).getTime()
        }, o.st = function (e) {
            e !== Ii && t(e), o.lT = (new Date).getTime()
        }, o.ed = function (t, a) {
            let r = (new Date).getTime() - o.lT;
            if (a !== Fi) {
                let o = t + "⏱ " + r + " ms";
                r < 300 ? e(o) : r < 500 ? n(o) : i(o)
            }
            return r
        }, o.stop = function () {
            return (new Date).getTime() - o.sT
        }, o.reset()
    }

    function It(t) {
        gs = $(ms), bs = $(".v-welcome-page>.v-loading"), ws = $(".v-welcome-page>.v-tips"), ys = Ni, $s = t, $s === vl ? Wt() : J(gs)
    }

    function Ft() {
        bs.uC().ck((function () {
            Wt()
        })), gs.c(fa, "default"), Dt(), ws.c(ji, vl), Pt(null), c(bs, "v-btn-done"), ys = Fi, $s === Bi ? Nt() : $s === Oc && c(bs, Oc)
    }

    function Nt() {
        function t() {
            Pt(e), e--, e < 0 ? (clearTimeout(n), Wt()) : n = setTimeout(t, 1e3)
        }
        let e = 3,
            n = null;
        t()
    }

    function Pt(t) {
        bs.h(["开始阅览", "Start Reading"][as] + (null == t ? "" : " <span> (" + t + "s)</span>"))
    }

    function Dt() {
        ws.c(ji, vl)
    }

    function Wt() {
        gs.hide(), xt()
    }

    function Et(t, e) {
        if (ys !== Ni && !gs.isHidden()) switch (t) {
            case 13:
                Wt();
                break
        }
    }

    function Kt() {
        function t(t) {
            t.hover((function () {
                Se($(this), Bi)
            }), (function () {
                Ve()
            }))
        }
        ks = $(".v-content-assistor"), xs = $(".v-btn.assistor.open-in-figure-nav"), Ts = $(".v-btn.assistor.table-cross"), Cs = $(".v-btn.assistor.copy"), Ls = $(".v-btn.assistor.pic-in-pic"), xs.a(Tr, ["全屏显示", "Full screen"][as]), Ts.a(Tr, tt("X") + Ic + ["阅读模式", "Reading mode"][as]), Ls.a(Tr, ["画中画", "Picture in picture"][as]), xs.uC().ck((function () {
            Ut(), Rc.show(Ms)
        })), Ts.uC().ck((function () {
            vn(Ms)
        })), Cs.uC().ck((function () {
            if (Ms === Ii) return;
            let t = $(this);
            Hs === ca ? qe(t) : "fig.img" === Hs && ri(t)
        })), Ls.uC().ck((function () {
            jt(Ms)
        })), t(xs), t(Ts), t(Cs), t(Ls)
    }

    function Rt(t, e) {
        function n(t) {
            let e = event || window.event,
                n = e.pageX || e.clientX + document.body.scrollLeft,
                i = e.pageY || e.clientY + document.body.scrollTop,
                o = 2 * u(t.c(Ml));
            return !(n < t.o().left || n > t.o().left + t.w() + o || i < t.o().top || i > t.o().top + t.ht() + o)
        }
        t.hover((function () {
            bt(ks), Ms !== t && Ut(), Ms = t, Hs = e;
            let n = "\n<sub>" + ["按住", "Hold"][as] + Ic + nt() + [Ic + "- 复制为 Markdown", Ic + "- Copy as Markdown"][as] + "</sub>";
            e === ca ? Cs.a(Tr, ["复制全部代码", "Copy code"][as] + n) : "fig.img" === e && Cs.a(Tr, ["复制图片地址", "Copy Image Link"][as] + n), qt()
        }), (function () {
            n(Ms) === Ni && Ut()
        }))
    }

    function qt() {
        if (Yc.device.mobile) return;
        s(xs, "first enabled last"), s(Ts, "first enabled last"), s(Cs, "first enabled last"), s(Ls, "first enabled last"), Hs.sW(Sr) ? (c(xs, "enabled first"), Hs.eW("img") && c(Cs, Hr), c(Ls, "enabled last")) : Hs === jl ? (c(Ts, "enabled first"), c(Ls, "enabled last")) : Hs === ca && (c(Cs, "enabled first"), c(Ls, "enabled last"));
        let t = Ms.p(),
            e = t.a(ra),
            n = t.p(),
            i = 0;
        if (e !== Ii && e.i("v-caption") > -1 && n !== Ii && (e = n.a(ra), e !== Ii && e.i(To) > -1)) {
            let e = u(t.w()),
                o = u(n.w());
            e > o && (i = e - o + 1)
        }
        ks.c(Jr, Ms.o().left + Ms.w() + 1 - ks.w() + u(Ms.c(Cl)) + u(Ms.c(Ll)) - i).c(ec, Ms.o().top + 3), setTimeout((function () {
            gt(ks), J(ks)
        }), 50)
    }

    function Ut() {
        Q(ks)
    }

    function _t() {
        zs = $(".v-pic-in-pic"), Os = zs.ch(".v-content"), As = $(".v-pip-btn.v-zoom"), Ss = $(".v-pip-btn.v-close"), As.uC().ck((function () {
            let t = $(this),
                e = $(Eo);
            1 === Vs ? (Vs = .75, d(e, "zoom-in", "zoom-out"), t.h(lt("icoZoomIn", 16, 16, "theme"))) : (Vs = 1, d(e, "zoom-out", "zoom-in"), t.h(lt("icoZoomOut", 16, 16, "theme"))), Xt()
        })), Ss.uC().ck((function () {
            Bt()
        })), zs.hover((function () {
            zs.ht() < 30 ? (c(As, sl), c(Ss, sl)) : (s(As, sl), s(Ss, sl)), J(As), J(Ss)
        }), (function () {
            Q(As), Q(Ss)
        }))
    }

    function jt(t) {
        function e(t) {
            let e = Ni,
                n = t.prop(Bl).l();
            if (n === jl) {
                e = An(t, Bi);
                let n = t.p().p();
                n.a(Sa) === oc && Oe(n.next())
            }
            let i = t.clone();
            i.c(il, 0).c(io, 0), Os.append(i);
            let o, a = "svg" === n;
            return ("img" === n || a) && (i.removeAttr(Na), a && c(i, No)), e === Fi && (Vn(i), Sn(t, Bi)), i
        }
        Zt(), Os.empty();
        let n = e(t);
        Xt(), zs.show(), Gt(n), Os.scrollTop(0)
    }

    function Bt() {
        zs.hide()
    }

    function Zt() {
        let t = 550,
            e = 350,
            n = $(window).w() / 2.5,
            i = $(window).ht() / 3;
        Is = n < t ? t : n, Fs = i < e ? e : i, zs.c(Ac, Is).c(Er, Fs)
    }

    function Gt(t) {
        function e(t) {
            i = t.width, o = t.height
        }
        let n = t.prop(Bl).l(),
            i = t.w(),
            o = t.ht(),
            a = 2 * u(t.c(Ml)),
            r = 2 * u(zs.c(Ml));
        if ("img" === n) {
            let n = new Image;
            n.src = t.a(El), n.complete ? e(n) : n.onload = function () {
                e(n)
            }
        }
        let l = i + a;
        i > 0 && l < Is && (Is = i, zs.c(Ac, l).c(ic, Is + "px " + Fs + "px")), o = t.ht();
        let c = o + r + a;
        o > 0 && c < Fs && (("img" === n || "svg" === n) && o > t.ht() && (o = t.ht(), c = o + r + a), Fs = o, zs.c(Er, c).c(ic, Is + "px " + Fs + "px"))
    }

    function Xt() {
        bt(As), bt(Ss), zs.c(nc, "scale(" + Vs + ")").c(ic, Is + "px " + Fs + "px"), setTimeout((function () {
            gt(As), gt(Ss)
        }), 50)
    }

    function Yt(t, e) {
        let n = this;
        n.ui = $(".v-spotlight"), n.radius = t, n.tips = e, n.zoom = {
            normal: t,
            bigger: 1.4 * t
        }, n.lastPos = {
            x: -1,
            y: -1
        }, n.toolbar = Ii, n.toggleZoom = function () {
            n.ui.isHidden() || (n.radius = n.radius < n.zoom.bigger ? n.zoom.bigger : n.zoom.normal, n.repaint())
        }, n.useSpotlight = function () {
            s(n.toolbar.btns[Yr], Dl), c(n.toolbar.btns.spotlight, Dl), n.pointer = Ni, n.mode = "S", n.ui.show(), s($(n.pointerScope), Ho), n.repaint();
            let t = tt("⇧ Shift") + Ic,
                e = Ic + Ic + "-" + Ic + Ic + tt("ESC") + Ic;
            n.tips.show([t + "调整聚光灯大小" + e + "退出", t + "Adjust the size of the spotlight" + e + "Exit"][as])
        }, n.repaint = function (t) {
            t !== Ii && (t.clientX !== Ii && (n.lastPos.x = t.clientX), t.clientY !== Ii && (n.lastPos.y = t.clientY)), n.isEnabled() !== Ni && n.pointer === Ni && n.ui.c(Gi, "radial-gradient(circle at " + n.lastPos.x + "px " + n.lastPos.y + "px, transparent " + n.radius + "px, rgba(0, 0, 0, 0.4)" + (n.radius + 5) + "px, rgba(0, 0, 0, 0.9) 900px)")
        }, n.isEnabled = function () {
            return n.ui.isShowed()
        }, n.tg = function () {
            return n.isEnabled() ? (n.hide(), Ni) : (n.useSpotlight(), Fi)
        }, n.hide = function () {
            Pe(), n.tips.hide(), s(n.toolbar.btns.spotlight, Dl), n.ui.hide()
        }, n.disposeHotkey = function (t, e) {
            if (rs !== Fi) switch (t) {
                case 16:
                    n.pointer === Ni && n.toggleZoom();
                    break;
                case 27:
                    n.hide();
                    break
            }
        }
    }

    function Jt(t) {
        let e = this;
        e.tips = t, e.toolbar = Ii, e.enable = Ni, e.pointerScope = "body, rt, #write, .v-std-code, .v-tag, .v-badge-name, .v-badge-value, .v-textfield>input, .v-blockquote-folder, audio, video, .v-audio-mini-control, .v-tbl-row-g-btn, .v-textfield-action, .v-segment-btn, .v-nav-center, .md-toc-item, .v-toc-item, .v-btn, .v-accent-btn, .v-toolbar, .v-fig, .v-fig-nav, .v-fig-content, .v-fig-nav-btns, .v-btn-close-figure-nav, .v-rb-coat, a, img, .v-chapter-nav-prev, .v-chapter-nav-current, .v-chapter-nav-next, .v-link-chk-result.error, .v-toc-tab-button", e.useLaserPointer = function () {
            s(e.toolbar.btns.spotlight, Dl), c(e.toolbar.btns[Yr], Dl), e.enable = Fi, c($(e.pointerScope), Ho), e.tips.show(tt("ESC") + Ic + ["退出", "Exit"][as])
        }, e.isEnabled = function () {
            return e.enable === Fi
        }, e.tg = function () {
            return e.isEnabled() ? (e.hide(), Ni) : (e.useLaserPointer(), Fi)
        }, e.hide = function () {
            Pe(), e.tips.hide(), e.enable = Ni, s(e.toolbar.btns[Yr], Dl), s($(e.pointerScope), Ho)
        }, e.disposeHotkey = function (t, n) {
            if (rs !== Fi) switch (t) {
                case 27:
                    e.hide();
                    break
            }
        }
    }

    function Qt(t, e) {
        let n = this;
        n.ui = t, n.group = e, n.last = Ii, n.segs = [], n.segCnt = 0, n.ui.append('<span class="v-segment-indicator"></span>'), n.indicator = n.ui.ch(".v-segment-indicator"), gt(n.indicator), n.add = function (t, e, i, o) {
            function a(t) {
                n.last.ui.entry.h(lt(n.last.ui.entry.a(Za) + (t ? "-checked" : ""), 16, 16, ga))
            }
            let r = t.typeName();
            n.segCnt++, n.segs[r] = t;
            let l = n.group + "-" + r,
                c = '<input id="' + l + '" onfocus="T.blur()" type="radio" name="' + n.group + '"' + (o === Fi ? "" : ' d-result="none"') + ' value="' + r + '"' + (i === Fi ? " checked" : "") + ' /><label for="' + l + '" class="v-segment-btn ' + r + '" ' + 'd-icon="' + e + '">' + lt(e, 16, 16, ga) + "</label>";
            return n.ui.append(c), t.ui.entry = n.ui.ch(".v-segment-btn." + r), i === Fi && (n.last = t, a(Fi)), n.ui.f("input#" + l).change((function () {
                n.last.hide(), a(Ni), n.last = n.segs[$(this).val()], a(Fi), n.last.show(), n.update()
            })), n.segs[r]
        }, n.checkedItem = function () {
            return n.ui.f('input[name="' + n.group + '"]:checked').val()
        }, n.sts = function (t, e) {
            let i = n.group + "-" + t.typeName();
            if (e === Ii) return c(n.ui.f('label[for="' + i + '"]'), Ho), n.ui.f('input[id="' + i + '"]').a(br);
            e === Fi ? (s(n.ui.f('label[for="' + i + '"]'), Ho), n.ui.f('input[id="' + i + '"]').removeAttr(br)) : (c(n.ui.f('label[for="' + i + '"]'), Ho), n.ui.f('input[id="' + i + '"]').a(br, vl))
        }, n.update = function () {
            let t = 2,
                e, i = (100 - 2 * (n.segCnt - 1) / n.ui.w() * 100) / n.segCnt;
            if (n.ui.ch(".v-segment-btn").c(il, "0 0 0 2px").c(Ac, i + "%"), n.ui.ch(".v-segment-btn:first").c(il, 0), n.last === Ii) return;
            let o = n.last.ui.entry;
            n.indicator.c(Jr, o.position().left + u(o.c(al))).c(Ac, o.w())
        }
    }

    function te(t, e) {
        let n = this;
        n.ui = $(".v-nav-center"), n.handle = $(".v-toc-handle"), n.__keywordBody = $(".v-search-by-keyword"), n.keyword = new Kn(n.__keywordBody, "toc-filter-nav-center", Fi), n.runMode = e === Ii ? Bi : e, n.lastDisplayType = Fr, n.showed = Ni, n.width = n.ui.w(), n.chpNav = Ii, n.toolbar = Ii, n.snapTimer = null, n.segs = new Qt($(".v-segment.toc"), "toc-segment"), iu = n.segs, n.catalog = n.segs.add(new qn(this, Ni), "icoTocTabCatalog", Fi, Ni), n.figure = n.segs.add(new Qn(this, Fi), "icoTocTabFigure", Ni, Ni), n.table = n.segs.add(new ti(this, Fi), "icoTocTabTable", Ni, Ni), n.media = n.segs.add(new ei(this, Fi), "icoTocTabMedia", Ni, Ni), n.codeblock = n.segs.add(new ni(this, Fi), "icoTocTabCodeblock", Ni, Ni), n.history = n.segs.add(new ii(this, Fi), "icoTocTabHistory", Ni, Ni), n.docLib = new oi(new xe("doc-lib", "center"), this), n.mask = t, n.mask.bindPartner(this, n.ui), n.segs.update(), gt(n.handle), n.catalog.onChapterChanged = function () {
            n.chpNav !== Ii && n.chpNav.update()
        }, n.keyword.setIcon(lt("icoRetrieval", 16, 16, "alpha")), n.keyword.placeholder(["输入搜索", "Type to search"][as]), n.keyword.onInput = function (t, e) {
            n.catalog.resultNav.reset(), n.figure.resultNav.reset(), n.table.resultNav.reset(), n.table.resultNav.reset(), n.media.resultNav.reset(), n.codeblock.resultNav.reset(), 0 === e.x().length ? (n.catalog.ui.result.empty(), n.segs.checkedItem() === n.catalog.typeName() && n.catalog.ui.body.show(), n.catalog.hideFilterResult(), n.catalog.scrollToCurrent(), n.catalog.updateStatus(), _n(n.figure), _n(n.table), _n(n.media), _n(n.codeblock)) : (n.catalog.filter(e.l()), Gn(n.figure, e.l()), Gn(n.table, e.l()), Gn(n.media, e.l()), Gn(n.codeblock, e.l()))
        }, n.keyword.onFocus = function (t) {
            if (n.lastDisplayType !== Fr) {
                let t;
                c(b(), qi), c($(".v-focus-search"), qi)
            }
        }, n.keyword.onBlur = function (t) {
            s(b(), qi), s($(".v-focus-search"), qi)
        }, n.keyword.pressEnter = function (t, e) {
            n.keyword.input.focus()
        }, n.onInteractive = function () {
            n.adjustClickHash()
        }, ts !== dl && (0 === n.docLib.length ? o("Failed [ iDocLib ]") : z("dl") !== gl && n.docLib.init()), n.gotoCover = function () {
            r("#"), w() !== Ii ? (n.catalog.currentItem !== Ii && (s(n.catalog.currentItem, ia), n.catalog.currentHeaderIndex = -1), n.adjust(), n.chpNav.adjust(), n.toolbar.adjust()) : Ve()
        }, n.adjustClickHash = function () {
            n.lastDisplayType === Fr && n.hide(Bi)
        }, n.tg = function (t) {
            n.showed === Fi ? n.hide("closed") : (n.runMode = Bi, n.catalog.inHeader() === Ni || at() === Fi ? n.show(Fr) : n.runMode === Bi && n.show(to)), typeof t === Wr && t(), n.afterToggle()
        }, n.show = function (t) {
            return "max" !== ts || n.showed === Fi || n.ui.o().left > -n.width ? Ni : (n.ui.c(Jr, 20), n.handle.hide(), n.lastDisplayType = t, n.lastDisplayType === to ? (s(n.ui, Do), s(n.ui, Oo), c(n.ui, Po), Yc.device.mobile || c(n.toolbar.btns[pl], Dl), b().c(al, "calc(var(--v-nav-center-width) + 30px)"), n.showed !== Fi && setTimeout((function () {
                E(), an()
            }), 300)) : n.lastDisplayType === Fr && (s(n.ui, Po), c(n.ui, Do), c(n.ui, Oo), n.mask.show(), $(window).w() < n.width + 20 ? n.ui.c(Ac, $(window).w() - 20) : n.ui.c(Ac, n.width)), n.showed = Fi, Fi)
        }, n.hide = function (t) {
            return n.showed === Ni || n.ui.o().left < 10 ? Ni : (n.lastDisplayType === to && (n.runMode = t, an(), Yc.device.mobile || s(n.toolbar.btns[pl], Dl)), n.ui.c(Jr, R("--v-nav-center-hidden-left")), b().c(al, 0), n.mask.hide(), Yc.device.mobile || n.showHandle(), n.showed = Ni, Fi)
        }, n.adjust = function () {
            let t = Ni;
            return n.showed && n.lastDisplayType === to && b().c(al, "calc(var(--v-nav-center-width) + 30px)"), n.width = n.ui.w(), n.keyword.setWidth(n.width - 2 - 2 * u(n.__keywordBody.c(al))), n.segs.update(), n.catalog.inHeader() === Ni || at() === Fi ? (t = n.hide(Bi), n.ui.c(Jr, gc), Yc.device.mobile || s(n.toolbar.btns[pl], Dl)) : n.runMode === Bi && (t = n.show(to), n.ui.c(Ac, bc), Yc.device.mobile || c(n.toolbar.btns[pl], Dl)), t
        }, n.showHandle = function () {
            "max" === ts && (n.handle.c(ec, ($(window).ht() - n.handle.ht()) / 2), n.handle.show())
        }, n.snap = function (t) {
            if (n.showed !== Fi && !Yc.device.mobile)
                if (t.clientY > 200 && t.clientY < $(window).ht() - 300 && t.clientX <= 20) {
                    if (null != n.snapTimer) return;
                    c(n.handle, Rr), n.snapTimer = setTimeout((function () {
                        s(n.handle, Rr), n.show(Fr)
                    }), 1e3)
                } else null != n.snapTimer && (clearTimeout(n.snapTimer), n.snapTimer = null, s(n.handle, Rr))
        }, n.afterToggle = function () {
            Nc.lastDisplayType === to && Le()
        }, n.disposeHotkey = function (t, e) {
            if (n.docLib.disposeHotkey(t, e), !n.ui.isHidden()) switch (t) {
                case 27:
                    n.lastDisplayType === Fr && n.hide();
                    break
            }
        }
    }

    function ee() {
        function t(t, e) {
            pt(t), t.hover((function () {
                Se(t, e)
            }), (function () {
                Ve()
            }))
        }
        let e = this,
            n = ".v-chapter-nav-prev",
            i = ".v-chapter-nav-current",
            o = ".v-chapter-nav-next",
            a = ".v-chapter-nav-doc-title";
        e.ui = $(".v-chapter-nav"), e.prev = {
            ui: $(n),
            text: $(".v-chapter-nav-prev-text")
        }, e.current = {
            ui: $(i)
        }, e.next = {
            ui: $(o),
            text: $(".v-chapter-nav-next-text")
        }, e.dt = $(a), e.dt.t(M()), "max" !== ts && e.ui.hide(), e.adjustEffectLevel = function (t) {
            is >= 1 ? (c($(t), Mr), gt($(t + ".effect"))) : d($(t), Mr, "noeffect")
        }, e.adjustEffectLevel(n), e.adjustEffectLevel(i), e.adjustEffectLevel(o), e.adjustEffectLevel(a), e.prev.ui.uC().ck((function () {
            Ve(), e.prev.text.a(ya) === ma ? Nc.gotoCover() : Nc.catalog.gotoHeader(e.prev.text)
        })), e.dt.uC().ck((function () {
            Ve(), $(this).a(Cr) === Ii && Nc.gotoCover()
        })), e.current.ui.uC().ck((function () {
            Ve(), Nc.catalog.gotoHeader(e.current.ui)
        })), e.next.ui.uC().ck((function () {
            Ve(), Nc.catalog.gotoHeader(e.next.text)
        })), e.update = function () {
            let n = Nc.catalog.currentHeaderIndex;
            n > 0 ? (e.prev.ui.show(), e.prev.ui.c(Lr, to), e.prev.text.t($("#" + Nc.catalog.h[n - 1]).t()), e.prev.text.a(ya, Nc.catalog.h[n - 1]), w() === Ii && (s(e.dt, jr), e.dt.removeAttr(Cr), e.adjustEffectLevel(a), t(e.dt, "center"))) : Nc.catalog.inFirstHeader() ? (e.prev.text.t(["封面", "Cover"][as]), e.prev.text.a(ya, ma)) : Nc.catalog.inDocTitle() && (e.prev.ui.hide(), e.current.ui.hide(), s(e.dt, "noeffect effect hover"), c(e.dt, jr), e.dt.a(Cr, oc), vt(e.dt)), Nc.catalog.currentItem !== Ii && (Nc.catalog.inDocTitle() ? e.current.ui.hide() : e.current.ui.show(), e.current.ui.h("<span>" + Nc.catalog.currentItem.a(ja) + "</span>" + Nc.catalog.currentItem.a(Jl)), e.current.ui.a(ya, Nc.catalog.h[n])), n < Nc.catalog.h.length - 1 ? (e.next.ui.show(), e.next.text.t($("#" + Nc.catalog.h[n + 1]).t()), e.next.text.a(ya, Nc.catalog.h[n + 1])) : e.next.ui.hide()
        }, e.show = function () {
            "max" !== ts || u(e.ui.c(ec)) >= 0 || (c(e.ui, Oo), e.ui.c(ec, 0), e.ui.show())
        }, e.hide = function () {
            u(e.ui.c(ec)) < 0 || (s(e.ui, Oo), e.ui.c(ec, -50), e.ui.hide())
        }, e.adjust = function () {
            Nc.catalog.inHeader() === Ni ? (e.hide(), c(cd, ma), e.prev.text.a(ya, ma), e.next.text.a(ya, Nc.catalog.h[0])) : (s(cd, ma), e.show(), e.update())
        }, e.adjustHoverStyle = function () {
            Yc.device.mobile ? (e.prev.ui.uH(), e.current.ui.uH(), e.next.ui.uH()) : (t(e.prev.ui, Bi), t(e.dt, "center"), t(e.current.ui, "center"), t(e.next.ui, Il))
        }, e.disposeHotkey = function (t, n) {
            if (rs !== Fi) switch (t) {
                case 188:
                case 37:
                    e.prev.ui.tr(la), Nc.catalog.focusHeader();
                    break;
                case 190:
                case 39:
                    e.next.ui.tr(la), $t(0), Nc.catalog.focusHeader();
                    break
            }
        }
    }

    function ne(t) {
        let e = this;
        e.tips = t, e.count = 0, e.curIdx = -1, e.enabled = Ni, e.toolbar = Ii, e.cur = function () {
            return -1 === e.curIdx ? Ii : $("[d-id='vk-pg-" + e.curIdx + "']")
        }, e.tg = function (t) {
            if (e.enabled = !e.enabled, e.enabled === Fi) {
                c(e.toolbar.btns[Hl], Dl), De();
                let n = tt("J") + " / " + tt("K") + Ic,
                    i = Ic + Ic + tt("H") + " / " + tt("L") + Ic,
                    o = Ic + Ic + "-" + Ic + Ic + tt("ESC") + Ic;
                return e.tips.show([n + "前/后段落" + i + "前/后十个段落" + o + "退出", n + "front/back paragraph" + i + "front/back ten paragraphs" + o + "Exit"][as]), e.goto(t), Fi
            }
            return e.hide(), Ni
        }, e.add = function (t) {
            t.a(fr, "vk-pg-" + e.count), t.a(gr, e.count), e.count++, t.uC().ck((function () {
                Dc.enabled === Ni ? oe() === Fi && Dc.tg(t) === Fi && (Wc.hide(), Ec.hide()) : (e.goto(t), oe() === Fi && Dc.tg(t))
            }))
        }, e.prev = function (t) {
            if (e.enabled !== Ni) return e.blurFocus(), e.curIdx > 0 ? (e.curIdx = e.curIdx - t, e.curIdx < 0 && (e.curIdx = 0), e.goto() === Ni && e.prev(1), Fi) : Ni
        }, e.next = function (t) {
            if (e.enabled !== Ni) return e.blurFocus(), e.curIdx < e.count - 1 ? (e.curIdx = e.curIdx + t, e.curIdx > e.count - 1 && (e.curIdx = e.count - 1), e.goto() === Ni && e.next(1), Fi) : Ni
        }, e.goto = function (t) {
            e.blurFocus();
            let n = t !== Ii ? t : e.cur();
            if (n === Ii || n.isHidden() || n.o() === Ii) return Ni;
            c(n, Wo), e.curIdx = u(n.a(gr));
            let i = 3 * n.ht();
            return 0 !== n.o().top && (n.o().top - i < $(document).scrollTop() || n.o().top + i > $(document).scrollTop() + $(window).ht()) && m().scrollTop(n.o().top - $(window).ht() / 2), Fi
        }, e.blurFocus = function () {
            e.cur() !== Ii && s(e.cur(), Wo)
        }, e.hide = function () {
            Pe(), e.tips.hide(), s(e.toolbar.btns[Hl], Dl), e.enabled = Ni, e.blurFocus()
        }, e.disposeHotkey = function (t, n) {
            if (e.enabled !== Ni) switch (t) {
                case 74:
                    wn(), e.next(1) && dn();
                    break;
                case 75:
                    wn(), e.prev(1) && dn();
                    break;
                case 72:
                    wn(), e.prev(10) && dn();
                    break;
                case 76:
                    wn(), e.next(10) && dn();
                    break;
                case 27:
                    e.hide();
                    break
            }
        }
    }

    function ie() {
        Ns = (new Date).getTime()
    }

    function oe() {
        return 0 === Ns ? Ni : (new Date).getTime() - Ns < 300 ? (window.getSelection().removeAllRanges(), Fi) : (Ns = 0, Ni)
    }

    function ae(t) {
        let e = this;
        e.ui = $(".v-toolbar"), e.btns = [], e.chpNav = t, "max" !== ts && e.ui.hide(), e.add = function (t, n) {
            e.btns[t] = $(".v-btn." + t), e.btns[t].uC().ck((function () {
                Ve(), typeof n == Wr && n()
            })), e.btns[t].hover((function () {
                let t = $(this),
                    e = t.a(xa);
                e !== Ii && c($(".v-btn-group." + e), Rr), Se(t, Bi)
            }), (function () {
                let t = $(this).a(xa);
                t !== Ii && s($(".v-btn-group." + t), Rr), Ve()
            }))
        }, e.addSpliter = function (t) {
            e.btns[t] = $(".v-" + t)
        }, e.adjust = function () {
            if ("max" === ts) {
                if (Yc.device.mobile === Fi && (e.btns[Hl].hide(), e.btns.spotlight.hide(), e.btns[Yr].hide(), e.btns.print.hide(), e.btns[tc].hide()), at() || Nc.catalog.inHeader() === Ni) {
                    q("--v-toolbar-btn-space", "5px");
                    let t = 0;
                    at() && e.ui.c(Cl, 0).c(Ll, 0).c(ec, 50 + t), e.btns[tc].c(Ac, 20), s(e.ui, Oo), c(e.ui, ma), c(e.ui.ch(ko), Oo), c(e.ui.ch(ko), Fr), at() === Ni && Nc.catalog.inHeader() === Ni ? $(document).scrollTop() <= 5 ? e.ui.c(Cl, 10).c(Ll, 10).c(ec, 10) : e.ui.c(Cl, 10).c(Ll, 10).c(ec, 0) : at() && Nc.catalog.inHeader() ? e.ui.c(Cl, 0).c(Ll, 0).c(ec, 50 + t) : $(document).scrollTop() <= 5 ? e.ui.c(Cl, 10).c(Ll, 10).c(ec, 10) : e.ui.c(Cl, 10).c(Ll, 10).c(ec, 0)
                } else {
                    if (0 === e.ui.o().top) return;
                    q("--v-toolbar-btn-space", "2px"), s(e.ui, ma), c(e.ui, Oo);
                    let t = e.ui.f(".v-btn").length,
                        n = u(R("--v-toolbar-btn-width")),
                        i = u(R("--v-toolbar-btn-space"));
                    e.btns[tc].c(Ac, "calc((var(--v-nav-center-width) - " + (t * n + 2 * u(e.ui.c(Cl)) + (t - 4) * i) + "px) / 2)"), e.ui.c(Cl, 10).c(Ll, 10).c(ec, 0), s(e.ui.ch(ko), Oo), s(e.ui.ch(ko), Fr)
                }
                e.ui.show()
            }
        }, e.updateIcons = function () {
            re.scheme === Qr ? e.btns[pa].h("<svg width='18px' height='18px'><use xlink:href='#icoDarkMode' class='v-svg-ico-light'/></svg>") : e.btns[pa].h("<svg width='20px' height='20px'><use xlink:href='#icoLightMode' class='v-svg-ico-light'/></svg>")
        }
    }

    function re(t) {}

    function le(t, e) {
        let n = this;
        n.ui = t, n.fonts = e, n.fontCount = n.fonts.length
    }

    function ce(e, n) {
        let i = this;
        i.theme = n, i.ui = $(".v-font-theme"), i.localTheme = new le($(".v-font-theme-opt-local"), []), i.sansTheme = new le($(".v-font-theme-opt-sans"), ["VLOOK Number/normal/normal", "VLOOK Number/normal/bold", "VLOOK Number/italic/normal", "VLOOK Digital Sans/normal/normal", "VLOOK Digital Sans/normal/500", "VLOOK Digital Sans/normal/bold", "VLOOK Digital Sans/normal/900", "VLOOK Sans Mono/normal/normal", "VLOOK Sans Mono/normal/500", "VLOOK Sans Mono/normal/bold", "VLOOK Sans Mono/normal/900", "VLOOK Sans/normal/normal", "VLOOK Sans/normal/bold", "VLOOK Sans/normal/900"]), i.serifTheme = new le($(".v-font-theme-opt-serif"), ["VLOOK Number/normal/normal", "VLOOK Number/normal/bold", "VLOOK Number/italic/normal", "VLOOK Digital Serif/normal/normal", "VLOOK Digital Serif/normal/bold", "VLOOK Digital Serif/italic/normal", "VLOOK Digital Serif/italic/bold", "VLOOK Serif Mono/normal/normal", "VLOOK Serif Mono/normal/bold", "VLOOK Serif Mono/italic/normal", "VLOOK Serif Mono/italic/bold", "VLOOK Serif/normal/500", "VLOOK Serif/normal/900", "VLOOK Sans Mono/normal/normal", "VLOOK Sans Mono/normal/500", "VLOOK Sans Mono/normal/bold", "VLOOK Sans Mono/normal/900", "VLOOK Sans/normal/normal", "VLOOK Sans/normal/bold", "VLOOK Sans/normal/900"]), i.mask = e, i.mask.bindPartner(this, i.ui), gt(i.ui), i.localTheme.ui.uC().ck((function () {
            i.apply("local"), i.hide()
        })), i.sansTheme.ui.uC().ck((function () {
            i.apply("sans"), T("fontCount", i.sansTheme.fontCount, "fontLength", i.sansTheme.fonts.length), i.initWebFont(), i.hide()
        })), i.serifTheme.ui.uC().ck((function () {
            i.apply("serif"), T("fontCount", i.serifTheme.fontCount, "fontLength", i.serifTheme.fonts.length), i.initWebFont(), i.hide()
        })), i.init = function (e) {
            e !== Ii && null != e.m(/^(local|sans|serif)$/i) && e !== i.theme && (i.theme = e, i.apply(i.theme)), t("_____ FONT THEME (" + i.theme + ") _____ "), i.initWebFont(), $(".v-fontinfo-local > #fontset-status").t("✅ " + ["已就绪", "Ready"][as])
        }, i.initWebFont = function () {
            function t() {
                let t = "VLOOK Number",
                    e = "Altinn-DIN";
                i.loadFont(t, ml, ml, e, e, "otf", Sc), i.loadFont(t, ml, no, e, e + h, "otf", Sc), i.loadFont(t, Gr, ml, e, e + p, "otf", Sc)
            }

            function e() {
                let t = "VLOOK Digital Sans",
                    e = "NotoSansMono";
                i.loadFont(t, ml, ml, e, e + d, ac, Sc, v), i.loadFont(t, ml, c, e, e + u, ac, Sc, v), i.loadFont(t, ml, no, e, e + h, ac, Sc, v), i.loadFont(t, ml, s, e, e + f, ac, Sc, v)
            }

            function n() {
                let t = "VLOOK Digital Serif",
                    e = "LuxiMono",
                    n = e + p;
                i.loadFont(t, ml, ml, e, e + d, ac, Sc, v), i.loadFont(t, ml, no, e, e + h, ac, Sc, v), i.loadFont(t, Gr, ml, e, n + d, ac, Sc, v), i.loadFont(t, Gr, no, e, n + h, ac, Sc, v)
            }

            function o() {
                let t = "VLOOK Sans Mono",
                    e = "NotoSansMono";
                i.loadFont(t, ml, ml, e, e + d, ac, Sc), i.loadFont(t, ml, c, e, e + u, ac, Sc), i.loadFont(t, ml, no, e, e + h, ac, Sc), i.loadFont(t, ml, s, e, e + f, ac, Sc)
            }

            function a() {
                let t = "VLOOK Serif Mono",
                    e = "LuxiMono",
                    n = e + p;
                i.loadFont(t, ml, ml, e, e + d, ac, Sc), i.loadFont(t, ml, no, e, e + h, ac, Sc), i.loadFont(t, Gr, ml, e, n + d, ac, Sc), i.loadFont(t, Gr, no, e, n + h, ac, Sc)
            }

            function r() {
                let t = "VLOOK Sans",
                    e = "NotoSansCJKsc";
                i.loadFont(t, ml, ml, e, e + d, "otf", Sc), i.loadFont(t, ml, no, e, e + h, "otf", Sc), i.loadFont(t, ml, s, e, e + f, "otf", Sc)
            }

            function l() {
                let t = "VLOOK Serif",
                    e = "NotoSerifCJKsc";
                i.loadFont(t, ml, c, e, e + u, "otf", Sc), i.loadFont(t, ml, s, e, e + f, "otf", Sc)
            }
            let c = "500",
                s = "900",
                d = "-Regular",
                u = "-Medium",
                h = "-Bold",
                f = "-Black",
                p = "-Italic",
                v = "U+0021-002F,U+0030-0039,U+003A-0040,U+005B-0060,U+007B-007E",
                m = "❌ " + ["超时", "Timeout"][as];
            "local" === i.theme ? t() : "sans" === i.theme ? (t(), e(), o(), r(), setTimeout((function () {
                i.sansTheme.fonts.length > 0 && $(".v-fontinfo-sans > #fontset-status").t(m)
            }), 6e5)) : "serif" === i.theme && (t(), n(), a(), l(), o(), r(), setTimeout((function () {
                i.serifTheme.fonts.length > 0 && $(".v-fontinfo-serif > #fontset-status").t(m)
            }), 6e5))
        }, i.bindButton = function (t) {
            i.button = t
        }, i.loadFont = function (e, n, o, a, r, l, c, s) {
            if (document.fonts && !i.isExist(e, n, o)) {
                let l = "url('" + Ps + a + "-" + c + "/" + r + "." + c + "') format('woff2')",
                    d;
                d = s === Ii ? new FontFace(e, c !== Ii ? l : "", {
                    style: n,
                    weight: o,
                    display: "swap"
                }) : new FontFace(e, c !== Ii ? l : "", {
                    style: n,
                    weight: o,
                    display: "swap",
                    unicodeRange: "U+0030-0039"
                }), d.load().then((function (a) {
                    document.fonts.add(a);
                    let r = e + "/" + n + "/" + o,
                        l = "✅ " + ["已就绪", "Ready"][as],
                        c = ["加载中", "Loading"][as];
                    t("↓↓↓ FONT LOADED ↓↓↓"), t(r);
                    for (let t = 0; t < i.sansTheme.fonts.length; t++)
                        if (i.sansTheme.fonts[t] === r) {
                            i.sansTheme.fonts.splice(t, 1);
                            break
                        } let s = i.sansTheme.fontCount - i.sansTheme.fonts.length,
                        d = $(".v-fontinfo-sans > #fontset-status");
                    s < i.sansTheme.fontCount ? d.t(c + "... (" + f(s / i.sansTheme.fontCount * 100) + "%)") : d.t(l);
                    for (let t = 0; t < i.serifTheme.fonts.length; t++)
                        if (i.serifTheme.fonts[t] === r) {
                            i.serifTheme.fonts.splice(t, 1);
                            break
                        } let u = i.serifTheme.fontCount - i.serifTheme.fonts.length,
                        h = $(".v-fontinfo-serif > #fontset-status");
                    u < i.serifTheme.fontCount ? h.t(c + "... (" + f(u / i.serifTheme.fontCount * 100) + "%)") : h.t(l)
                }))
            }
        }, i.isExist = function (e, n, i) {
            let o = document.fonts.values(),
                a = Ni,
                r = o.next();
            for (; !r.done && a === Ni;) {
                let l = r.value;
                l.family === e && l.style === n && l.weight === i && (a = Fi, t("///// FONT IS EXIST /////"), t(e + "/" + n + "/" + i)), r = o.next()
            }
            return a
        }, i.show = function () {
            i.mask.show(), st(i.ui), i.ui.show(), t("'" + i.theme + "'"), "local" === i.theme ? (c(i.localTheme.ui, Dl), s(i.sansTheme.ui, Dl), s(i.serifTheme.ui, Dl)) : "sans" === i.theme ? (c(i.sansTheme.ui, Dl), s(i.localTheme.ui, Dl), s(i.serifTheme.ui, Dl)) : (c(i.serifTheme.ui, Dl), s(i.localTheme.ui, Dl), s(i.sansTheme.ui, Dl))
        }, i.tg = function () {
            i.ui.c(Lr) === to ? i.hide() : i.show()
        }, i.hide = function () {
            i.ui.hide(), i.mask.hide()
        }, i.apply = function (t) {
            t === Ii && (t = i.theme), i.theme = t;
            const e = ["--v-f-fm-title", "--v-f-fm-subtitle", "--v-f-fm-h", "--v-f-fm-text", "--v-f-fm-bd", "--v-f-fm-key", "--v-f-fm-num", "--v-f-fm-tag", "--v-f-fm-code", "--v-f-w-bd", "--v-f-w-title", "--v-f-w-text"];
            let n = [];
            for (let t = 0, o = e.length; t < o; t++) n.push(R(e[t] + "-" + i.theme));
            for (let t = 0, i = e.length; t < i; t++) q(e[t], n[t])
        }, i.disposeHotkey = function (t, e) {
            if (!i.ui.isHidden()) switch (t) {
                case 27:
                    i.hide();
                    break
            }
        }
    }

    function se(t) {
        let e = this;
        e.ui = $(".v-foot-note-panel"), e.content = $(".v-foot-note-panel-content"), e.buttonSeeAll = $(".v-foot-note-panel-all"), e.buttonSeeAll.uC().ck((function () {
            e.hide(), r("#vk-footer-area")
        })), e.mask = t, e.mask.bindPartner(this, e.ui), e.show = function () {
            e.mask.show(), at() ? e.ui.c(Jr, 20).c(Il, 20) : e.ui.c(Jr, "15%").c(Il, "15%"), e.ui.show()
        }, e.hide = function () {
            e.ui.hide(), e.mask.hide()
        }, e.disposeHotkey = function (t, n) {
            if (!e.ui.isHidden()) switch (t) {
                case 27:
                    e.hide();
                    break
            }
        }
    }

    function de() {
        Ds = $(".v-status-bar"), "max" !== ts && Ds.hide()
    }

    function ue(t, e) {
        Ws[t] = e, Es !== Ii && Es.i(t) > -1 && (e.enabled = Ni, e.ui.remove())
    }

    function he() {
        Yc.device.mobile === Fi && Ws["zoom-view"].remove()
    }

    function fe() {
        Ks = $(".v-doc-info")
    }

    function pe() {
        let t = b().t().m(/[\w\-]+/g),
            e = b().t().m(/\p{Unified_Ideograph}/gu),
            n = null == t ? 0 : t.length,
            i = null == e ? 0 : e.length,
            o = n + i,
            a = 180,
            r = o < a ? 1 : u(o / a),
            l = r + " " + ["分钟", "minutes"][as];
        r > 60 && (l = (r / 60).toFixed(1) + " " + ["小时", "hours"][as]), Ks.a(Ia, l + " / " + U(o.toString()) + " " + ["字", "words"][as]), Ks.a(Fa, " ( " + U(i.toString()) + " " + ["中日韩，", "CJK, "][as] + U(n.toString()) + " " + ["非中日韩", "Non-CJK"][as] + " )"), Ks.hover((function () {
            Ks.h(Ks.a(Ia) + " <span style='color: var(--d-f-c-alt)'>" + Ks.a(Fa) + "</span>")
        }), (function () {
            Ks.h(Ks.a(Ia))
        })), Ks.h(Ks.a(Ia))
    }

    function ve() {
        Rs = $(".v-zoom-view"), Rs.uC().ck((function () {
            let t = Yc.os.macOS ? it() : et();
            qc.inform(["放大 - ", "Zoom In - "][as] + Ic + t + Ic + tt("&nbsp;+&nbsp;") + ho + ho + ["缩小 - ", "Zoom Out - "][as] + Ic + t + Ic + tt("&nbsp;-&nbsp;") + ho + ho + ["实际大小 - ", "Actual Size - "][as] + Ic + t + Ic + tt("&nbsp;0&nbsp;"), null, Fi)
        }))
    }

    function me(t) {
        qs = $(".v-link-chk-result"), Us = $(".v-link-error-list"), _s = $(".v-link-error-list-header"), js = $(".v-link-error-list-items"), Bs = Fi, Zs = lt("icoLinkError", 16, 14, Qr), lt("icoClose", 16, 16, Qr), Gs = t, Gs.bindPartner((function () {
            $e()
        }), Us), js.scroll((function () {
            _s.isHidden() && js.scrollTop() > 10 ? _s.show() : js.scrollTop() <= 10 && _s.hide()
        }))
    }

    function ge() {
        let t = z("mdx"),
            e = ".html";
        t !== gl && (t !== Ii && (e = "." + t), $("a[href*='.md']").e((function () {
            let t = $(this),
                n = t.a(Ur),
                i = O(n).mdx;
            if (i === gl) return Ni;
            i !== Ii ? t.a(Ur, n.r(".md", "." + i)) : t.a(Ur, n.r(".md", e))
        })))
    }

    function be(t, e) {
        let n = $('<span d-anchor="#' + t + '" class="' + 'v-toc-item">' + e + "</span>");
        c($(n.a(ya)).a(_l, 0), "v-link-error-source"), js.append(n), n.uC().ck((function () {
            s(js.ch(".v-toc-item-current"), ia), c(n, ia), K(n.a(ya)), $e()
        }))
    }

    function we() {
        if (Bs === Ni) return;
        let t = 0;
        $("#write a").e((function () {
            let e = $(this),
                n = e.a(Ur);
            if (n === Ii || n.length <= 1) return Fi;
            if (n.sW("#") && !n.sW("#mjx-")) {
                let i = n.s(1, n.length);
                if (0 === $("#write #" + i + ", #write a[name='" + i + "']").length) {
                    t++;
                    let n = "vk-error-anchor" + t;
                    e.a(_r, n), be(n, "🔗 <strong>" + ["无效页内链接", "Invalid Inner Link"][as] + ":</strong> " + $(this).t())
                }
            }
        })), 0 === t ? qs.remove() : (c(qs, zr), qs.h(Zs), qs.uC().ck((function () {
            Us.isHidden() ? ye() : $e()
        })))
    }

    function ye() {
        Us.show(), Gs.show()
    }

    function $e() {
        Us.hide(), Gs.hide(), qs.h(Zs), xt()
    }

    function ke(t, e) {
        if (!Us.isHidden()) switch (t) {
            case 27:
                $e();
                break
        }
    }

    function xe(t, e, n) {
        let i = this;
        i.style = e, b().after('<div class="v-mask ' + (e !== Ii ? e + " " : "") + t + ' v-backdrop-blurs">' + ot() + "</div>"), mt(), i.ui = $(".v-mask." + t), i.close = Ii, n !== Ii && n === Fi && (i.ui.append('<div class="v-mask-close ' + i.style + '">' + lt("icoCloseTo-" + i.style, 60, 60, Qr) + "</div>"), i.close = i.ui.ch(".v-mask-close")), i.partner = Ii, i.partnerUI = Ii, i.bindPartner = function (t, e) {
            i.partner = t, i.partnerUI = e
        }, i.show = function () {
            if (kt(), rs = Fi, i.ui.c(Vc, i.partnerUI.c(Vc) - 1), i.close !== Ii) {
                let t = 30,
                    e = u(i.partnerUI.c(Jr)) + i.partnerUI.w() + t,
                    n = u(i.partnerUI.c(ec)) + (i.partnerUI.ht() - i.close.ht()) / 2;
                i.style === Jr || i.style === Il ? i.close.c(Jr, i.style === Il ? u(i.partnerUI.c(Jr)) - i.close.w() - t : e).c(ec, n) : i.style === uo && (n = u(i.partnerUI.c(uo)) + i.partnerUI.ht() + t, i.close.c(Jr, Bi).c(ec, Bi).c(uo, n).c(al, "-" + i.close.w() / 2 + "px").c(xl, "0px 50%"))
            }
            i.ui.f(".v-copyright .v-copyright-svg-ico").uC().ck((function () {
                Yc.show($(this))
            })), i.ui.uC().ck((function () {
                xt(), typeof i.partner == Wr ? i.partner() : i.partner.hide(), i.hide()
            })), i.ui.show()
        }, i.hide = function () {
            xt(), rs = Ni, i.ui.hide()
        }
    }

    function Te() {
        Xs && (Ys = $(".v-content-expander"))
    }

    function Ce(t) {
        Xs && Qs.push(t)
    }

    function Le() {
        if (Xs) {
            if (td.length > 0)
                for (let t = 0, e = td.length; t < e; t++) clearTimeout(td.shift());
            Me()
        }
    }

    function Me() {
        if (Xs)
            for (let t = 0, e = Qs.length; t < e; t++)
                if (Qs[t].prop(Bl).l().sW("i")) {
                    let e = new Image;
                    e.src = Qs[t].a(El), e.complete ? td.push(setTimeout((function () {
                        He(Qs[t], Fi)
                    }), 50)) : e.onload = function () {
                        He(Qs[t], Fi)
                    }
                } else td.push(setTimeout((function () {
                    He(Qs[t], Fi)
                }), 50))
    }

    function He(t, e) {
        if (!Xs) return;
        let n = t.p(),
            i = t.prop(Bl).l();
        e === Fi && (n = n.p());
        let o = n.next(),
            a = o.a(ra);
        a !== Ii && -1 !== a.i(Mo) || (o = Ii);
        let r = n.a(Aa);
        if (r !== Ii && r.sW("t")) {
            let t;
            if (n.a($a) !== Ii && startsWith("t") === Ni) return void td.shift()
        }
        i.sW("i") && n.a(Oa) === Ii && (n = n.p()), n.a(Sa, Ar), n.a(Aa, Ar), n.c(Er, Bi), i.sW("s") && n.c(Tl, "10px");
        let l = u(t.c(Er));
        l > Js ? ze(t, n, i, l, o) : o !== Ii && a !== Ii && a.i(Mo) > -1 && o.remove(), td.shift()
    }

    function ze(t, e, n, i, o) {
        if (!Xs) return;
        e.a(Sa, oc), n.sW("t") || n.sW("s") ? e.c(Er, Js).c($l, Bi).c(kl, Kr) : e.c(Er, Js).c(kl, Kr);
        let a, r = p(h(e.c(Ac)));
        o === Ii ? (a = Ys.clone(), e.after(a)) : a = o, e.f(jl).length > 0 && c(e.f(ed), Bo);
        let l = a.f("div>span");
        l.h(l.a(Jl) + " <span style='font-weight: normal;'>" + f(100 * (1 - Js / i)) + "%</span>");
        let s = p(h(t.c(Ac)));
        r > s && (r = s, a.c(oo, 0)), a.a(Va, n), a.c(al, e.c(al)).c(Ac, r + "px"), a.c(zc, "visible"), a.ch(".v-btn").uC().ck((function () {
            Oe(a)
        })), pt(a.ch(".v-btn"))
    }

    function Oe(t) {
        if (!Xs) return;
        let e = t.prev(),
            n = t.a(Va);
        zt(n), t.remove(), e.a(Sa, Ar), e.a(Aa, oc), e.c(Er, Bi), n.sW("t") || n.sW("s") ? e.c(yl, Bi) : e.c(kl, "initial"), e.f(jl).length > 0 && s(e.f(ed), Bo)
    }

    function Ae() {
        nd = $(".v-tool-tips"), gt(nd, bl)
    }

    function Se(t, e, n) {
        if (Yc.device.mobile === Fi) return;
        nd.h(t.a(Tr)), clearTimeout(ad), clearTimeout(rd), od = n;
        const i = nd.w(),
            o = $(window).w(),
            a = 20;
        let r = t.o().left,
            l;
        nd.c(lo, "0").c(co, wc), (e !== Bi || r + i + a > o) && (nd.c(lo, wc).c(co, "0"), r = t.o().left - i + t.w() - a, r + i + a >= o && (r -= a), "center" === e && (r = t.o().left + (t.w() - i) / 2 - 10, nd.c(lo, wc).c(co, wc))), r <= 0 && (r = 10), od !== Ii && c(nd, od), nd.c(Jr, r).c(ec, t.o().top - $(document).scrollTop() + t.ht() + 10), ad = setTimeout((function () {
            id = Fi, J(nd)
        }), id === Fi ? 0 : ld)
    }

    function Ve() {
        clearTimeout(rd), rd = setTimeout((function () {
            id = Ni
        }), ld), clearTimeout(ad), Q(nd), od !== Ii && s(nd, od)
    }

    function Ie(t) {
        let e = this;
        e.ui = $(".v-info-tips"), e.aniTimer = null, e.ui.uC().click = function () {
            e.hide()
        }, e.mask = t, e.mask.bindPartner(this, e.ui), e.inform = function (t, n, i, o) {
            e.show(t, n, i, "inform", o)
        }, e.bubble = function (t, n, i, o) {
            e.show(t, n, i, fo, o)
        }, e.error = function (t, n, i, o) {
            e.show(t, n, i, zr, o)
        }, e.show = function (t, n, i, o, a) {
            clearTimeout(e.aniTimer), e.ui.h(t), s(e.ui, zr), s(e.ui, fo), e.ui.c(Ac, "").c(Er, "").c(Il, Bi).c(uo, Bi).c(ro, wc), o === zr ? c(e.ui, zr) : o === fo && c(e.ui, fo), a !== Ii ? dt(e.ui, a) : st(e.ui), e.ui.show(), null != n && (e.aniTimer = setTimeout((function () {
                e.hide()
            }), n)), i === Fi && e.mask.show()
        }, e.hide = function () {
            e.ui.hide(), e.mask.hide()
        }, e.disposeHotkey = function (t, n) {
            if (!e.ui.isHidden()) switch (t) {
                case 27:
                    e.hide();
                    break
            }
        }
    }

    function Fe(t) {
        let e = this;
        b().after('<div class="v-bottom-tips ' + t + '"><div></div></div>'), e.ui = $(".v-bottom-tips." + t), e.show = function (t) {
            e.ui.ch("div").h(t), e.ui.show()
        }, e.hide = function () {
            e.ui.hide()
        }
    }

    function Ne() {
        cd = $(".v-more-doc-content-before"), sd = $(".v-more-doc-content-after")
    }

    function Pe(t) {
        t === Ii && (t = $(document).scrollTop()), t > 10 ? cd.show() : cd.hide(), t + $(window).ht() > $(document).ht() - 10 ? sd.hide() : sd.show()
    }

    function De() {
        sd.hide()
    }

    function We(t, e) {
        let n = "",
            i = Ii,
            o = "",
            a = "";
        e.sW("p") ? (i = Nc.codeblock, n = ["代码块 ", "Code Block "][as] + ds) : e.sW("t") && (i = Nc.table, n = ["表 ", "Table "][as] + ss);
        let r = Ke(t.p().prev(), e),
            l = r[0],
            c = r[1];
        null != l && 0 !== l.x().length || (l = "", ud === Fi && (e.sW("p") ? l = t.f(".CodeMirror-line").t().x() : e.sW("t") && (l = t.f("td").t().x().r(/(==|\[\s]|\.\.|<<|\^\^|##\s)/gi, "")), l = W(l.x(), 20))), n = "<span>" + n + ". </span>" + l, e.sW("p") ? (o = "vk-id-codeblock" + ds, t.wrap("<div id='" + o + "' class='v-caption' style='width: 100%'>"), a += t.f(".CodeMirror-line").t()) : e.sW("t") && (o = "vk-id-tbl" + ss, t.wrap("<div id='" + o + "' class='v-caption'>"), a += t.t()), t.before("<p class='v-cap-1'>" + n + "</p>");
        let s = null != c && c.length > 0;
        s && (t.after("<p class='v-cap-2'>" + c + "</p>"), t.p().a(Ta, "2")), i !== Ii && (a += s ? c : "", $("#" + o).a(hr, n), i.add(n, o, a))
    }

    function Ee(t, e) {
        let n = t.a(Ui),
            i = t.a(Jl),
            o = Nc.figure,
            a = "",
            r = "",
            l = null;
        n !== Ii && 0 !== n.x().length || (l = Ke(t.p().prev(), e), null != l[0] && (n = l[0]), null != l[1] && (i = l[1]));
        let c = ["图 ", "Figure "][as] + cs;
        e.sW("a") ? (o = Nc.media, c = ["音频 ", "Audio "][as] + us) : e.sW("v") && (o = Nc.media, c = ["视频 ", "Video "][as] + fs), null != n && 0 !== n.x().length || (n = "", ud === Fi && (e.sW("s") && (n = t.f("g").t().x()), n = W(n.x(), 20))), c = null != n && n.x().length > 0 ? "<span>" + c + ". </span>" + n : "<span>" + c + "</span>", e.sW("s") ? (a = "vk-id-fig" + cs, t.wrap("<div id='" + a + "' " + "d-fig-type='" + e + "' class='v-caption mermaid'></div>"), r += t.f("div, span, tspan, text").t()) : e.sW("i") ? (a = "vk-id-fig" + cs, t.wrap("<div id='" + a + "' " + "d-fig-type='" + e + "' class='v-caption'></div>"), r += t.a(El)) : e.sW("a") ? (a = "vk-id-audio" + us, t.wrap("<div id='" + a + "' " + "d-fig-type='" + e + "' class='v-caption'>"), r += t.a(El)) : e.sW("v") && (a = "vk-id-video" + fs, t.wrap("<div id='" + a + "' " + "d-fig-type='" + e + "' class='v-caption'>")), t.before("<p class='v-cap-1'>" + c + "</p>");
        let s = n !== Ii && null != i && i.length > 0;
        if (s && (t.after("<p class='v-cap-2'>" + i + "</p>"), t.p().a(Ta, "2")), o !== Ii && (r += s ? i : "", $("#" + a).a(hr, c), o.add(c, a, r)), e.sW("s")) {
            t.a(Er) === vl && t.c(Er) === vl || (t.removeAttr(Er), t.c(Er, ""));
            let e = Ii;
            t.c(ll) !== vl ? t.p().c(Ac, t.c(ll)) : (e = t.a(Rl)) !== Ii && e.i(Ac) > -1 ? t.p().c(Ac, t.c(Ac)) : "100%" !== t.a(Ac) ? t.p().c(Ac, u(t.a(Ac)) + 4) : t.a(Hc) !== vl ? t.p().c(Ac, t.a(Hc).split(" ")[2] + "px") : t.p().c(Ac, "100%")
        }
    }

    function Ke(t, e) {
        function n(t) {
            let e, n = /^!\[.+]$/,
                i = "";
            return /^!\[.+]".+"$/.test(t.t().x()) === Fi ? [100, 2] : n.test(t.t().x()) === Fi ? [100, 1] : (i = t.h()) !== Ii && i.sW("<em><mar") && i.eW("/em>") ? -1 === i.i("/u></mark>") ? [200, 1] : [200, 2] : [0, 0]
        }

        function i(t, e, n) {
            let i = [];
            if (100 === n) {
                let n = t.t().x();
                i[0] = n.s(2, n.i("]", 2)), 2 === e && (i[1] = "▲ " + n.s(n.i(']"', 2) + 2, n.length - 1))
            } else 200 === n && (2 === e && (i[1] = "▲ " + t.f("u").t().x()), t.f("mark > em").remove(), i[0] = t.t().x());
            return i
        }
        let o = [],
            a = t.prop(Bl),
            r = Ni;
        a !== Ii && (a = a.l());
        let l = n(t);
        return 2 === l[1] ? (o = i(t, 2, l[0]), r = Fi) : 1 === l[1] ? (o = i(t, 1, l[0]), o[1] = null, r = Fi) : a !== Ii && a.sW("h") && (o[0] = t.t().x(), o[1] = null, "h6" === a && t.c(zc, Kr).c(Al, Ri)), r !== Fi || e.sW("i") !== Ni && 200 !== l[0] || t.hide(), o
    }

    function Re() {
        let t = z("lmc");
        t = t === Ii ? 1 : u(t), $(".md-fences").e((function () {
            let e = $(this);
            Rt(e, ca), Ce(e), e.f(".CodeMirror-line").length > t ? (ds++, e.wrap("<p d-cntr='pre' class='v-cap-cntr'></p>"), We(e, "pre")) : e.a(Ya, oc)
        }))
    }

    function qe(t) {
        let e = "",
            n = Ms.ch().f(".CodeMirror-code .CodeMirror-line"),
            i = 0,
            o = n.length;
        if (n.e((function () {
                i++;
                let t = encodeURI($(this).t()),
                    n = ["%E2%80%8B", "%C2%A0"],
                    a = ["", "%20"];
                for (let e = 0; e < n.length; e++) t.i(n[e]) > -1 && (t = t.rA(n[e], a[e]));
                e += v(t) + (i < o ? "\n" : "")
            })), I() === Fi) {
            let t = "";
            Ms !== Ii && (t = Ms.a(Xr)), e = "```" + (t !== Ii ? t : "") + "\n" + e + "\n```"
        }
        Ue(t, e, (function () {
            let t = Ms.ch().f(".CodeMirror-sizer>div");
            bt(t), t.c(Xi, dc), setTimeout((function () {
                gt(t), t.c(Xi, "inherit")
            }), 500)
        }))
    }

    function Ue(t, e, n, i, o) {
        fd = Fi;
        let a = (new Date).getTime();
        if (a - hd < 200) return void(fd = Ni);
        hd = a;
        let r = "." + t.a(ra).rA(" ", ".");
        $(r).a(Ma, e);
        let l = new ClipboardJS(r);
        l.on("success", (function (e) {
            let o = n === Fi && I() === Fi ? " (<strong>as Markdown</strong>)" : "";
            qc.bubble(["已复制", "Copied"][as] + o, 2e3, Ni, t), e.clearSelection(), typeof i === Wr && i(), fd = Ni
        })), l.on(zr, (function () {
            qc.error("<strong>" + ["非常抱歉～暂不支持在该浏览器中复制", "I'm very sorry~ I don't support copying in this browser"][as] + "</strong>", 3e3, Ni, t), typeof o === Wr && o(), fd = Ni
        }))
    }

    function _e() {
        function t(t, e) {
            let n = e - md,
                i = Math.abs(n);
            if (n > 0)
                for (let t = 0; t < i; t++) je();
            else if (n < 0)
                for (let t = 0; t < i; t++) Be();
            else vd[md - 1]++;
            t.a(ja, Xe())
        }
        pd.isEmpty() || (Ge(), Ze(), pd.ch(".md-toc-item").e((function () {
            let e = $(this);
            t(e, Ye(e.a("class")))
        })), Ze(), b().ch("h1:not(:last-child), h2, h3, h4, h5").e((function () {
            let e = $(this);
            t(e, Ye(e.prop(Bl).l()))
        })), Ze(), b().ch("h6:not(:first-child)").e((function () {
            $(this).a(ja, xd[5])
        })))
    }

    function je() {
        md++, vd[md - 1] = 1
    }

    function Be() {
        vd[md - 1] = 0, md--, vd[md - 1]++
    }

    function Ze() {
        vd = [0, 0, 0, 0, 0, 0], md = 1
    }

    function Ge() {
        function t(t) {
            let e = null;
            null != (e = bd[t].m(wd)) && 8 === e.length && (xd[t] = e[2], yd[t] = e[4], $d[t] = e[5], kd[t] = "-min" === e[6] ? 1 : "-sup" === e[6] ? 2 : 0, Td[t] = e[7])
        }
        let e = H("vlook-chp-autonum");
        if (e !== Ii && (gd = e), 0 === gd.length) return;
        let n = gd.split(","),
            i;
        for (let t = 0; t < n.length; t++) i = n[t].s(1, 2), isNaN(i) || (bd[i - 1] = n[t].x());
        t(0), t(1), t(2), t(3), t(4), t(5)
    }

    function Xe() {
        function t(t, e) {
            let n = "",
                i = vd[t],
                o = null != $d[t].s(0, 1).m(/[A-Z]/),
                a = $d[t].l();
            return "#" === a ? n += Je(i, t) : "zh" === a ? n += 1 === md ? Qe(i, o) : Je(i, t) : "alpha" === a ? n += 1 === md || e > 0 ? tn(i, o) : Je(i, t) : "roman" === a ? n += 1 === md || e > 0 ? en(i, o) : Je(i, t) : "off" === a && (n += ""), n
        }
        let e = md - 1,
            n = e > 0 ? e - 1 : -1,
            i = kd[e],
            o = "";
        if (i > 0) return 2 === i && n >= 0 && (o = t(n, i) + "."), o += t(e, i), xd[e] + o + Td[e];
        for (let n = 0; n < md; n++) o += t(n, !1), n < e && (o += ".");
        return xd[e] + o + Td[e]
    }

    function Ye(t) {
        let e = t.m(/(h([1-5]))/)[2];
        return isNaN(e) ? 0 : u(e)
    }

    function Je(t, e) {
        let n, i = yd[e].length - t.toString().length,
            o = "";
        if (i > 0)
            for (let t = 0; t < i; t++) o += "0";
        return o + t
    }

    function Qe(t, e) {
        function n(t) {
            let e = t.toString().split("").reverse(),
                n = "";
            for (let t = 0; t < e.length; t++) n = (0 === t && 0 === e[t] || t > 0 && 0 === e[t] && 0 === e[t - 1] ? "" : Hd[e[t]] + (0 === e[t] ? zd[0] : zd[t])) + n;
            return n
        }

        function i(t) {
            return t.rA(/一/g, "壹").rA(/二/g, "贰").rA(/三/g, "叁").rA(/四/g, "肆").rA(/五/g, "伍").rA(/六/g, "陆").rA(/七/g, "柒").rA(/八/g, "捌").rA(/九/g, "玖").rA(/十/g, "拾").rA(/百/g, "佰").rA(/千/g, "仟")
        }
        let o = Math.floor(t / 1e4),
            a = t % 1e4;
        a.toString().length < 4 && (a = "0" + a);
        let r = o ? n(o) + "万" + n(a) : n(t);
        return t >= 10 && t <= 19 && (r = r.r("一十", "十")), e ? i(r) : r
    }

    function tn(t, e) {
        let n = "";
        for (; t > 0;) {
            let e = t % 26;
            0 === e && (e = 26), n = String.fromCharCode(64 + u(e)) + n, t = (t - e) / 26
        }
        return e ? n : n.l()
    }

    function en(t, e) {
        if (t <= 0 || t >= 4e3) return t;
        let n = "";
        for (let e = 0; e < Od.length; e++)
            for (; t >= Ad[e];) t -= Ad[e], n += Od[e];
        return e ? n : n.l()
    }

    function nn() {
        function t(t) {
            t.a(ka).sW("t") ? sn(t) : cn(t)
        }

        function e(e) {
            let i = e.next(eo),
                o = e.t(),
                a = Ni;
            return o.sW("[+] ") && i.length > 0 && i.prop(Bl).l().sW("bl") ? (a = Fi, n(e), e.next(eo).c(Lr, vl), e.rHTML("[+] ", "<span class='v-blockquote-folder'>" + Sd + "</span>"), e.a(ka, oc), e.f(".v-blockquote-folder").unbind(hl).mouseup((function () {
                t(e)
            }))) : o.sW("[-] ") && (a = Fi, n(e), e.rHTML("[-] ", "<span class='v-blockquote-folder'>" + Vd + "</span>"), e.a(ka, Ar), e.f(".v-blockquote-folder").unbind(hl).mouseup((function () {
                t(e)
            }))), a
        }

        function n(t) {
            let e = t.ch("span:first"),
                n = e.t();
            if (n.length > 4) {
                let t = n.s(0, 4);
                e.h(e.rHTML(/\[([+\-])]\s/, "")), e.before("<span>" + t + "</span>")
            }
        }
        let i = z("dc-quote");
        i !== Ii && (pu = i), $(eo).e((function () {
            let t = $(this),
                n = Ni;
            t.ch("p").e((function () {
                n = e($(this))
            })), t.f("li>p").e((function () {
                n = e($(this))
            })), n === Fi && t.a(Ka, Fi);
            let i = t.p().prop(Bl).l();
            if ("li" === i || i === eo) return Fi;
            let o = Ni;
            if (t.f("code").e((function () {
                    if (null != $(this).t().m(/^>(\(.+\))?$/i)) return o = Fi, Ni
                })), o === Ni) {
                let e = t.prev().a("class");
                e !== Ii && -1 === e.i("v-cap-") && t.append("<p><code>&gt;(" + pu + ")</code></p>")
            }
        })), on()
    }

    function on() {
        $("hr + blockquote").e((function () {
            function t(t) {
                t.a(Ka) !== Fi && (t.a(er, Id), i--)
            }
            Id++;
            let e = $(this),
                n = e.prev(),
                i = 0;
            n.c(Lr, vl), i = n.prevUntil(":not(hr)").length + 2, i > 2 && n.prevUntil(":not(hr)").c(Lr, vl), t(e), e.nextUntil(":not(blockquote)").e((function () {
                i > 0 && t($(this))
            }))
        }))
    }

    function an() {
        if (Fd !== Fi) {
            Fd = Fi;
            for (let t = 1; t <= Id; t++) rn(t);
            Fd = Ni
        }
    }

    function rn(t) {
        let e = 0,
            n = $("blockquote[d-quote-group=" + t + "]");
        n.e((function () {
            let t = $(this);
            if (t.c(Er, Bi), t.c(Lr) !== to) {
                let n = u(t.c(Er));
                n > e && (e = n)
            }
        })), n.c(Lr) !== to && n.c(Er, e)
    }

    function ln() {
        Yc.device.mobile ? $(".v-blockquote-folder").uH() : pt($(".v-blockquote-folder"))
    }

    function cn(t) {
        t.parentsUntil("blockquote[d-quote-group]").c(Er, Bi), t.next(eo).c(Lr, vl), t.a(ka, oc), t.f(".v-blockquote-folder").h(Sd)
    }

    function sn(t) {
        t.parentsUntil("blockquote[d-quote-group]").c(Er, Bi), t.p().c(Er, Bi), t.next(eo).c(Lr, to), t.a(ka, Ar), t.f(".v-blockquote-folder").h(Vd)
    }

    function dn() {
        if (Dc.cur() === Ii) return;
        let t = Dc.cur();
        if (t.a(ra) !== Ii) {
            let e = t.a(ka);
            e !== Ii && e.sW("t") && sn(t)
        }
    }

    function un() {
        function t(t) {
            let e = 0;
            t.f("thead>tr").e((function () {
                e = 0;
                let n = Fi,
                    i = Fi,
                    o = Fi;
                $(this).f("th").e((function () {
                    let a = $(this),
                        r = a.t();
                    n !== Fi || t.a(La) === oc || Nd.test(r) !== Fi && Pd.test(r) !== Fi || (t.a(La, oc), n = Ni), i === Fi && yn(t, a) === Fi && (i = Ni), o === Fi && 0 === e && Yd.test(r) === Fi && (t.a(xr, oc), a.rHTML("## ", ""), o = Ni), a.a(kr, "tbl-" + ss + "-" + e), e++, bn(t, a)
                }))
            })), t.f("tbody>tr").e((function () {
                let e = 0,
                    n = Fi,
                    i = Fi;
                $(this).f("td").e((function () {
                    let o = $(this),
                        a = o.t();
                    n !== Fi || t.a(La) === oc || Nd.test(a) !== Fi && Pd.test(a) !== Fi || (t.a(La, oc), n = Ni), i === Fi && 0 === e && t.a($r) !== oc && Ud.test(a) === Fi && (t.a($r, oc), i = Ni), /^<ma.+rk>$/.test(o.h()) === Fi && (o.ch().ch().unwrap(), c(o, Zo)), o.a(kr, "tbl-" + ss + "-" + e), e++, bn(t, o)
                }))
            }))
        }
        let e = new Vt;
        e.st(), $(jl).e((function () {
            let e = $(this),
                n = e.p();
            ss++, Rt(e, jl), n.a(Oa, jl), c(n, To), n.scroll((function () {
                wn()
            })), t(e), Ce(e), We(e, jl)
        })), e.ed("    ├ Prepare: "), e.st(), $("table[d-cell-merge='true']").e((function () {
            let t = $(this);
            hn(t), t.f("thead>tr>th").e((function () {
                yn(t, $(this))
            }))
        })), e.ed("    ├ Merge: "), e.st(), $("table[d-column-fmting='true']").e((function () {
            xn($(this))
        })), e.ed("    ├ Column Format: "), e.st(), $("table[d-row-group='true']").e((function () {
            let t = $(this);
            Ln(t), t.f("tr[d-folder='true']").e((function () {
                let t = $(this).ch("td:first");
                t.a(pr) !== Ii && t.c(Cl, "0.5em")
            }))
        })), e.ed("    ├ Row Group: "), e.st(), $("table[d-th-rpt='true']").e((function () {
            Dn($(this))
        })), e.ed("    └ Th Repeater: ")
    }

    function hn(t) {
        let e = 0,
            n = null,
            i = 0,
            o = 0,
            a = null,
            r = [],
            l = [],
            s = [],
            d = 0,
            u = Ni;
        if (t.f("tr").e((function () {
                r[d] = [], l[d] = [];
                let t = $(this);
                t.f("td, th").e((function () {
                    let t = $(this);
                    r[d][i] = t, l[d][i] = 0, Nd.test(t.t()) === Fi && (l[d][i] = 1, u = Fi), i++, o++, Pd.test(t.t()) === Fi ? (e++, t.remove(), 1 === e && (n = a)) : (e > 0 && null != n && (n.a(da, e + 1), fn(n), n.c(Xl, "center")), e = 0), a = t
                })), o === e + 1 && 0 === t.t().x().length && c(t, "v-table-colspan-all"), e > 0 && null != n && (n.a(da, e + 1), fn(n), n.c(Xl, "center")), e = 0, d++, i = 0, o = 0
            })), d = 0, u === Fi) {
            s = [];
            for (let t = 0, e = l[0].length; t < e; t++) {
                let e = 0,
                    n = null,
                    i = 0,
                    o = Ni;
                for (; i < l.length;) 1 === l[i][t] ? (e++, null == n && (n = r[i - 1][t]), 1 === i && (o = Fi), o === Fi && (s[s.length] = r[i][t].p()), r[i][t].remove(), t + 1 < l[i].length && r[i][t + 1].c(Cl, "5px")) : (o = Ni, e > 0 && null != n && (n.a(Fl, e + 1), fn(n), n.c(Lc, "middle"), e = 0, n = null)), i++;
                e > 0 && null != n && (n.a(Fl, e + 1), fn(n), n.c(Lc, "middle"))
            }
            for (let e = 0, n = s.length; e < n; e++) {
                r[0][0].p().p().append(s[e]);
                let n = Ni;
                s[e].f("td").e((function () {
                    n = Fi;
                    let t = $(this),
                        e = t.a(Rl),
                        i = t.a(kr),
                        o = t.a(ra),
                        a = t.a(Ha);
                    t.a(ur, oc), t.prop("outerHTML", t.prop("outerHTML").rA("<td ", "<th ")), t.p().a(Rl, e), t.p().a(kr, i), t.p().a(ra, o), t.p().a(Ha, a)
                })), n === Fi && s[e].f("th[d-td2th]").e((function () {
                    bn(t, $(this))
                }))
            }
        }
        u = Ni
    }

    function fn(t) {
        0 === t.t().x().length && (t.h(""), c(t, "v-empty-cell"))
    }

    function pn() {
        Wd = $(".v-table-cross"), gt(Wd)
    }

    function vn(t) {
        Dd ? gn() : mn(t)
    }

    function mn(t) {
        Dd = Fi, c(Ts, Dl), t !== Ii && null != t && t.p().p().next(".v-content-expander").ch(".v-btn").tr(la)
    }

    function gn() {
        Dd = Ni, s(Ts, Dl), wn()
    }

    function bn(t, e) {
        e.uC().ck((function () {
            if (Dd === Ni || fd === Fi) return;
            if (Ed !== t && bt(Wd), Kd === e) return;
            let n;
            if (t.p().p().a(Sa).sW("t")) return;
            fd === Ni && event.stopPropagation(), wn(), c(e, Uo), Kd = e, Ed = t;
            let i = u(t.c(Ac)),
                o = u(t.c(Er)),
                a = u(e.c(Ac)),
                r = u(e.c(Er)),
                l = t.o().left,
                s = t.o().top,
                d = e.o().left - t.o().left,
                h = e.o().top - t.o().top,
                f = e.o().left + a,
                p = e.o().top + r,
                v = i - d - a,
                m = o - h - r,
                g = $(".v-table-cross.left-up");
            g.c(Jr, l).c(ec, s).c(Ac, d).c(Er, h).c(Vc, 9);
            let b = $(".v-table-cross.right-up");
            b.c(Jr, f).c(ec, s).c(Ac, v).c(Er, h).c(Vc, 9);
            let w = $(".v-table-cross.left-down");
            w.c(Jr, l).c(ec, p).c(Ac, d).c(Er, m).c(Vc, 9);
            let y = $(".v-table-cross.right-down");
            y.c(Jr, f).c(ec, p).c(Ac, v).c(Er, m).c(Vc, 9), setTimeout((function () {
                gt(Wd), J(g), J(b), J(w), J(y)
            }), 50)
        }))
    }

    function wn() {
        Kd !== Ii && (Q(Wd), s(Kd, Uo), Ed = Ii)
    }

    function yn(t, e) {
        return t.a(za) !== oc && (e.f("strong, em, u, mark, del").length > 0 || e.c(Xl) === Il || Rd.test(e.t()) === Fi) ? (t.a(za, oc), Fi) : Ni
    }

    function $n(t, e, n) {
        return n === Ii && (n = t.f("[d-colspan!='true'][d-tbl-col='" + e.a(kr) + "']")), n
    }

    function kn(t, e, n) {
        return n === Ii && (n = t.f("td[d-tbl-col='" + e.a(kr) + "']")), n
    }

    function xn(t) {
        t.f("thead th").e((function () {
            let e = $(this),
                n = Ii,
                i = Ii,
                o = "";
            e.f("strong:first-child").length > 0 && (n = $n(t, e, n), o += "v-tbl-col-fmt-bold "), e.f("em:first-child").length > 0 && (n = $n(t, e, n), o += "v-tbl-col-fmt-em ");
            let a = e.h();
            (a.sW("<mar") && a.eW("rk>") || e.a(ra) !== Ii && e.a(ra).i(Zo) > -1) && ($("[d-tbl-col='" + e.a(kr) + "']").f("mark").ch().unwrap(), n = $n(t, e, n), o += "v-tbl-col-fmt-mark "), n !== Ii && o.length > 0 && c(n, o), e.f("u:first-child").length > 0 && (i = kn(t, e, i), i.contents().wrap("<u></u>")), e.f("del:first-child").length > 0 && (i = kn(t, e, i), i.contents().wrap("<del></del>")), Rd.test(e.t()) === Fi && (n = $n(t, e, n), c(n, "v-tbl-col-fmt-checkbox"), Cn(e), i = kn(t, e, i), i.e((function () {
                let t = $(this),
                    e = t.t(),
                    n = "uncheck",
                    i = ga;
                if (t.a(da) !== Ii) return Fi;
                Cn(t), e.sW("[x]") ? n = aa : e.sW("[-]") ? n = "indeterminate" : t.rHTML("&nbsp;", ""),
                    t.prepend("<svg width='14px' height='14px' class='v-svg-small-ico'><use xlink:href='#icoCheckbox_" + n + "' class='v-svg-ico-" + "dark'/></svg>")
            }))), e.c(Xl).sW("r") && (i = kn(t, e, i), c(i, "v-tbl-col-fmt-num"), i.e((function () {
                let t = $(this),
                    e = t.t();
                if (e.isNumber()) t.h(_(U(t.h()))), Tn(t, e, Fi);
                else if (e.isPercent()) {
                    t.h(j(_(t.h())));
                    let n = Tn(t, e, Fi),
                        i = e.r(/(-|\+|\s)/g, ""),
                        o = f(i.r("%", "")),
                        a = "rgba(128, 128, 128, 0.1)",
                        r = "rgba(128, 128, 128, 0.4)",
                        l = "rgba(128, 128, 128, 0.8)";
                    if (n === Fi) {
                        let e = t.c(sa).r("rgb", "rgba");
                        a = e.r(")", ", 0.05)"), r = e.r(")", ", 0.2)"), l = e.r(")", ", 0.7)")
                    }
                    t.c(Gi, "linear-gradient(90deg, " + a + " 0%, " + r + " " + (o > 1 ? o - 1 : 0) + "%, " + l + " " + i + ", transparent " + i + ")").c(ul, "100px"), t.h(t.h().r(">+", ">▴ ").r(">-", ">▾ "))
                } else e.isCurrency() && (t.h(_(U(B(t.h())))), Tn(t, e, Ni))
            }))), e.a(da) !== Ii ? e.a(Ha, oc) : e.a(Ha, Ar)
        }))
    }

    function Tn(t, e, n) {
        if (n === Fi) {
            if (e.sW("-")) return c(t, Go), Fi;
            if (e.sW("+")) return c(t, Xo), Fi
        } else {
            if (e.i("-") > -1) return c(t, Go), Fi;
            if (e.i("+") > -1) return c(t, Xo), Fi
        }
        return Ni
    }

    function Cn(t) {
        t.rHTML(/\[(\s|x|-)]\s*/, "")
    }

    function Ln(t) {
        c(t.f("[d-tbl-col$='-0']"), _o);
        let e = 0,
            n = 0;
        t.f("td:first-child").e((function () {
            let t = $(this),
                i = t.p(),
                o = t.t();
            if (Ud.test(o) === Ni) return e = 0, Bd.length = 0, Zd.length = 0, Fi;
            if (n = o.i(jd) + 1, n > e) {
                let o = e;
                e = n, zn(i, n, 0 === o, St(At(), Cc)), In(i, t, n)
            } else {
                let o = e - n;
                if (o > 0)
                    for (let t = 0; t < o; t++) Bd.pop(), Zd.pop();
                e = n, In(i, t, n)
            }
        }))
    }

    function Mn() {
        return Bd[Bd.length - 1]
    }

    function Hn() {
        return Zd[Zd.length - 1]
    }

    function zn(t, e, n, i) {
        function o(t) {
            let e = "";
            return t.e((function () {
                e += $(this).prop("outerHTML")
            })), e
        }
        let a = t.prev();
        qd++, Bd.push(qd), Zd.push(i), a.a(Ea, qd), a.a(Wa, oc), a.a(ir, oc);
        let r = a.ch("td:first"),
            l = r.f(".v-tbl-row-g-identer:last");
        l.length > 0 ? l.after("<span class='v-tbl-row-g-btn'>" + Gd + "</span>") : r.prepend("<label class='v-tbl-row-g-btn'>" + Gd + "</label>"), s(r, _o), c(r, "v-tbl-row-g-folder"), c(l, "v-tbl-row-g-identer-folder");
        let d = ".v-tbl-row-g-identer, .v-tbl-row-g-btn",
            u = r.f(d),
            h = r.clone();
        h.ch(d).remove(), r.h(o(u) + " <span class='folder-marker'>[</span> <strong>" + h.h() + " </strong><span class='folder-marker'>]</span>"), r.ch(jo).ck((function () {
            On(a)
        }))
    }

    function On(t) {
        event.stopPropagation(), t.a(ir).sW("t") ? Fn(t) : Nn(t), wn()
    }

    function An(t, e) {
        return t.a($r) !== oc ? Ni : (t.f(jo).e((function () {
            let t = $(this).p().p();
            t.a(ir) === oc && Fn(t, e)
        })), Fi)
    }

    function Sn(e, n) {
        return e.a($r) !== oc ? Ni : (e.f("label.v-tbl-row-g-btn").e((function () {
            let e = $(this).p().p();
            t(n, e.a(or), e.a(ir)), n === Bi ? e.a(or) === Bi && e.a(ir) === Ar && Nn(e) : e.a(ir) !== oc && Nn(e)
        })), Fi)
    }

    function Vn(t) {
        t.removeAttr($r), t.f("tr[d-parent-folder-id]").removeAttr(Qa)
    }

    function In(t, e, n) {
        e.rHTML(_d, ""), t.a(Qa, Mn()), e.a(pr, n), s(e, _o), c(e, "v-tbl-row-g-sub"), t.c(Xi, Hn());
        for (let t = 0; t < n; t++) {
            let t = e.f(".v-tbl-row-g-identer:last"),
                n = "<label class='v-tbl-row-g-identer'></label>";
            t.length > 0 ? t.after(n) : e.prepend(n)
        }
        t.c(Lr, "table-column")
    }

    function Fn(t, e) {
        let n = t.a(Ea),
            i = t.p().p(),
            o = i.f("tr[d-parent-folder-id='" + n + "']"),
            a = t.ch("td:first").ch(".v-tbl-row-g-btn:last");
        t.a(ir, Ar), e !== Ii && t.a(or, e), a.prop("innerHTML", Xd), o.c(Lr, "");
        let r = i.f("thead>tr:last-child");
        "group" === i.a(xr) && t.f("td:not(:first-child)").e((function () {
            let t = $(this),
                e = t.h().x();
            if (0 === e.length || "&nbsp;" === e) {
                let e = t.a(kr),
                    n = r.f("th[d-tbl-col='" + e + "']").h();
                if (n === Ii) {
                    let t = r.prev();
                    t !== Ii && (n = t.f("th[d-tbl-col='" + e + "']").h())
                }
                t.h(n), c(t, Qo)
            }
        }))
    }

    function Nn(t) {
        let e = t.a(Ea),
            n = $("tr[d-parent-folder-id='" + e + "']"),
            i = t.ch("td:first").ch(".v-tbl-row-g-btn:last"),
            o;
        t.a(ir, oc), t.removeAttr(or), i.prop("innerHTML", Gd), n.e((function () {
            let t = $(this),
                e = t.a(Wa);
            e !== Ii && e.sW("t") && Nn(t), t.c(Lr, "table-column")
        })), "group" === t.p().p().a(xr) && t.f("td:not(:first-child)").e((function () {
            let t = $(this);
            t.a(ra).i(Qo) > -1 && (t.h(""), s(t, Qo))
        }))
    }

    function Pn() {
        Yc.device.mobile ? $(jo).uH() : pt($(jo))
    }

    function Dn(t) {
        let e = t.a($r) === oc;
        if (t.a(xr, e ? "group" : "page"), e) return;
        let n = 1,
            i = 15 + n,
            o = t.f("thead>tr"),
            a = 0,
            r = 0,
            l = t.f("tbody>tr"),
            s = l.length;
        l.e((function () {
            let t = $(this),
                e = t.ch("td[rowspan]");
            if (e.length > 0 && e.e((function () {
                    let t = u($(this).a(Fl));
                    t > a && (a = t - 1), r = a - 1
                })), 0 === a && n % (i + r - 1) == 0 && n < s) {
                let e = 0;
                o.e((function () {
                    t.after($(this).prop("outerHTML").rA("<th ", "<td ")), c(t.next().ch("td"), Qo), c(t.next().ch(".v-th-repeater"), 0 === e ? "first" : "not-first"), t = t.next(), e++
                }))
            }
            n++, a > 0 ? a-- : r = 0
        }))
    }

    function Wn() {
        function t(t, e) {
            let n = ["您的浏览器不支持音频标签。", "Your browser does not support the audio tag."][as],
                i = O(e).autoplay,
                o = O(e).loop,
                a = O(e).preload;
            t.wrap("<audio src='" + e + "'>" + n + "</audio>");
            let r = t.p();
            return t.remove(), i !== Ii && r.a(Zi, Zi), o !== Ii && r.a(nl, nl), a !== Ii && r.a(Sl, Bi), r
        }

        function e(t, e) {
            let n = $(t);
            e.paused === Fi ? e.play() : (n.h(Qd), s(n, Ol), e.pause(), n.a(mr) === Ii && (e.currentTime = 0))
        }
        $("#write img[src$='.mp3'], #write [src$='.m4a'], #write [src$='.ogg'], #write [src$='.wav'],[src*='.mp3?'], #write [src*='.m4a?'], #write [src*='.ogg?'], #write [src*='.wav?']").e((function () {
            function n(t, e) {
                be(t, "🔈 <strong>" + ["无效的音频源", "Invalid audio source"][as] + ":</strong> " + e)
            }
            let i = $(this),
                o = Ii,
                a = i.a(El),
                r = i.p(),
                l = O(a);
            l.controls === dl ? (hs++, o = t(i, a), o.a(_r, "vk-id-mini-audio" + hs), o.after("<div id='vk-id-mini-audio" + hs + "-control' " + "d-title='mini audio " + hs + "' class='v-audio-mini-control'></div>"), o.bind("loadstart", (function () {
                let t = $("#" + $(this).a(_r) + "-control");
                c(t, wo), c(t, el), t.h(Jd)
            })), o.bind("canplay", (function () {
                let t = $("#" + $(this).a(_r) + "-control");
                s(t, el), t.uC().ck((function () {
                    e(this, o[0])
                })), t.h(Qd), t.a(mr, l.pause);
                let n = l.duration;
                if (n !== Ii && n.sW("t")) {
                    let t = o.a(Ua);
                    if (t === Ii || t.sW("t") === Ni) {
                        let t = o[0].duration,
                            e = Math.floor(t / 60),
                            n = Math.floor(t - 60 * e),
                            i = e > 0 ? e + "′" : "";
                        o.next().after(" <sup class='v-duration-info'>" + i + n + "″</sup>"), o.a(Ua, oc)
                    }
                }
            })), o.bind(Ol, (function () {
                let t = $("#" + $(this).a(_r) + "-control"),
                    e = t.a(mr);
                c(t, wo), c(t, Ol), e !== Ii && e.sW("t") ? t.h(tu) : (t.h(eu), o.currentTime = 0)
            })), o.bind("ended", (function () {
                let t = $("#" + $(this).a(_r) + "-control");
                t.h(Qd), s(t, Ol)
            })), o.bind("emptied", (function () {
                let t = $(this).a(_r) + "-control",
                    e = $("#" + t);
                s(e, el), e.h(nu), c(e, wo), c(e, Cr), n(t, e.a(hr))
            })), o.bind(zr, (function () {
                o.tr("emptied")
            })), o.hover((function () {
                let t = $(this); - 1 === t.a(ra).i(Cr) && c(t, Rr)
            }), (function () {
                s($(this), Rr)
            }))) : (us++, "p" !== r.prop(Bl).l() && (i.wrap("<p></p>"), r = i.p()), r.a(Oa, "audio"), c(r, To), Ee(i, _i), o = t(i, a), o.a(ha, ha), o.next(vo).length > 0 && o.c(ol, "-10px"), o.bind("emptied", (function () {
                n(o.p().a(_r), o.p().a(hr))
            })), o.bind(zr, (function () {
                o.tr("emptied")
            })))
        }))
    }

    function En() {
        function t(t, e) {
            be(t, "📺 <strong>" + ["无效的视频源", "Invalid video source"][as] + ":</strong> " + e)
        }

        function e(t, e) {
            let n = ["您的浏览器不支持视频标签。", "Your browser does not support the video tag."][as],
                i = O(e).autoplay,
                o = O(e).loop,
                a = O(e).preload,
                r = O(e).width,
                l = O(e).height;
            t.wrap("<video src='" + e + "'>" + n + "</video>");
            let c = t.p();
            return t.remove(), c.a(ha, ha), i !== Ii && c.a(Zi, Zi), o !== Ii && c.a(nl, nl), a !== Ii && c.a(Sl, Bi), r !== Ii && c.a(Ac, r), l !== Ii && c.a(Er, l), c
        }
        $("#write img[src$='.ogv'], #write img[src$='.mp4'], #write img[src$='.webm'],#write img[src*='.ogv?'], #write img[src*='.mp4?'], #write img[src*='.webm?']").e((function () {
            let n = $(this),
                i = Ii,
                o = n.a(El),
                a = n.p();
            fs++, "p" !== a.prop(Bl).l() && (n.wrap("<p></p>"), a = n.p()), a.a(Oa, "video"), c(a, To), Ee(n, Mc), i = e(n, o), i.bind("emptied", (function () {
                t(i.p().a(_r), i.p().a(hr))
            })), i.bind(zr, (function () {
                i.tr("emptied")
            }))
        }))
    }

    function Kn(t, e, n) {
        let i = this;
        i.ui = Ii, i.icon = Ii, i.input = Ii, i.reset = Ii, i.action = Ii, i.lastValue = "", i.timerValueChanged = null, i.onInput = Ii, i.onFocus = Ii, i.onBlur = Ii, i.onKeyDown = Ii, i.onAction = Ii, i.pressEnter = Ii, i.pressESC = Ii, i.__appendTo = function (t, e, n) {
            function o() {
                let t = i.input.val().x();
                "" === t ? (i.reset.hide(), i.action !== Ii && -1 !== i.action.a(ra).i(Hr) && (s(i.action, Hr), vt(i.action))) : (i.reset.show(), i.action !== Ii && -1 === i.action.a(ra).i(Hr) && (c(i.action, Hr), i.action.hover((function () {
                    i.actionHover(Fi)
                }), (function () {
                    i.actionHover(Ni)
                })))), typeof i.onInput == Wr && i.onInput(i.input, t)
            }
            let a = '<div class="v-textfield ' + e + '"><div class="v-textfield-icon" style="display: none"></div><input type=s_Text /><div class="v-textfield-action" style="display: none"></div><div class="v-textfield-reset">' + lt("icoResetInput", 16, 16, "alpha") + "</div></div>";
            n === Fi ? (t.append(a), i.ui = t.ch(".v-textfield." + e)) : (t.after(a), i.ui = t.p().ch(".v-textfield." + e)), i.input = i.ui.ch("input"), i.reset = i.ui.ch(".v-textfield-reset"), i.input.on("input", (function () {
                "start" !== $(this).prop("compositionStatus") && o()
            })), i.input.on("compositionstart", (function () {
                $(this).prop("compositionStatus", "start")
            })), i.input.on("compositionend", (function () {
                $(this).prop("compositionStatus", "end")
            })), i.input.on("keypress", (function (t) {
                o()
            })), i.input.focus((function () {
                function t() {
                    "start" !== i.input.prop("compositionStatus") && i.lastValue !== i.input.val() && (clearTimeout(i.timerValueChanged), i.lastValue = i.input.val(), o()), i.timerValueChanged = setTimeout(t, 800)
                }
                c(i.ui, Jo), t(), typeof i.onFocus == Wr && i.onFocus(i.input)
            })), i.input.blur((function () {
                s(i.ui, Jo), clearTimeout(i.timerValueChanged), typeof i.onBlur == Wr && i.onBlur(i.input)
            })), i.input.bind("keydown", (function (t) {
                let e = t.keyCode || t.which || t.charCode,
                    n = i.input.val();
                switch (e) {
                    case 13:
                        i.action !== Ii && i.action.tr(la), typeof i.pressEnter == Wr && i.pressEnter(i.input, n);
                        break;
                    case 27:
                        i.reset.tr(la), typeof i.pressESC == Wr && i.pressESC(i.input);
                        break
                }
                typeof i.onKeyDown == Wr && i.onKeyDown(i.input, n, e)
            })), i.reset.uC().ck((function () {
                i.input.val(""), i.input.select(), i.reset.hide(), i.action !== Ii && -1 !== i.action.a(ra).i(Hr) && (s(i.action, Hr), vt(i.action)), typeof i.onInput == Wr && i.onInput(i.input, "")
            }))
        }, i.clear = function () {
            i.reset.tr(la)
        }, i.setIcon = function (t) {
            i.icon = i.ui.ch(".v-textfield-icon"), i.icon.h(t), i.icon.show()
        }, i.setAction = function (t) {
            i.action = i.ui.ch(".v-textfield-action"), i.action.h(t), i.action.show(), i.action.hover((function () {
                i.actionHover(Fi)
            }), (function () {
                i.actionHover(Ni)
            })), i.action.uC().ck((function () {
                let t = i.input.val();
                t.length > 0 && i.input.select(), typeof i.onAction == Wr && i.onAction(i.input, t)
            }))
        }, i.actionHover = function (t) {
            t === Fi ? (c(i.action, Rr), -1 !== i.action.a(ra).i(Hr) && c(i.ui, qr)) : (s(i.action, Rr), s(i.ui, qr))
        }, i.placeholder = function (t) {
            i.input.a(zl, t)
        }, i.show = function () {
            i.ui.show()
        }, i.hide = function () {
            i.ui.hide()
        }, i.setWidth = function (t) {
            i.ui.c(Ac, t), i.input.c(Ac, t - (i.reset.w() + 2 * u(i.reset.c(Cl))) - (i.icon === Ii ? 0 : i.icon.w() + 2 * u(i.icon.c(Cl))) - (i.action === Ii ? 0 : i.action.w() + 2 * u(i.action.c(Cl)))), i.icon !== Ii && c(i.input, "set-icon")
        }, i.__appendTo(t, e, n)
    }

    function Rn(t) {
        let e = this;
        e.index = 0, e.result = t, e.nextItem = function () {
            if (e.result.isHidden()) return;
            let t = e.result.ch(":visible"),
                n = t.eq(e.index);
            return e.index++, e.index >= t.length && (e.index = 0), n
        }, e.reset = function () {
            e.index = 0
        }
    }

    function qn(t, e) {
        let n = this;
        n.ui = {
            entry: $(".v-segment-btn.catalog"),
            body: $(".v-toc-catalog-body"),
            result: $(".v-toc-filter-result.catalog")
        }, n.holder = t, n.h = [], w() === Ii && n.h.push("vk-id-doc-title"), n.currentHeaderIndex = -1, n.currentItem = Ii, n.foldItems = [], n.lastHeaderFolder = Ii, n.lastHeaderLevel = 0, n.lastDocScrollTop = 0, n.resultNav = new Rn(n.ui.result), n.onChapterChanged = Ii, n.icon = {
            folded: '<svg width="16px" height="16px" class="v-svg-small-ico"><use xlink:href="#icoFolded" class="v-toc-folder-ico"/></svg>',
            unfold: '<svg width="16px" height="16px" class="v-svg-small-ico"><use xlink:href="#icoUnfold" class="v-toc-folder-ico"/></svg>'
        }, n.ui.body.a(Ca, ["( 无目录 )", "( Catalog is Empty )"][as]), n.typeName = function () {
            return "catalog"
        }, n.hasIndexItem = function () {
            return n.ui.body.ch().length > 0
        }, n.adjustHoverStyle = function () {
            Yc.device.mobile ? $(ta).uH() : pt($(ta))
        }, n.add = function (t) {
            n.holder.segs.sts(this, Fi);
            let e = t.ch("a"),
                i = e.a(Ur);
            n.h.push(i.s(1, i.length)), t.a(_r, "vk-header-" + t.a(nr)), t.a(Ja, "0"), t.a(Da, Ar), t.a(Jl, e.t().x()), e.after(e.t()), e.t(""), t.uC().ck((function () {
                let e;
                K($("#" + t.a(_r)).ch("a").a(Ur)), typeof n.holder.onInteractive == Wr && n.holder.onInteractive()
            })), $("<div id='fd-vk-header-" + t.a(nr) + "' class='v-toc-folder'>&nbsp;</div>").insertBefore(t.f("a"));
            let o = Ye(t.a("class"));
            if (n.lastHeaderFolder !== Ii) {
                if (o > n.lastHeaderLevel) {
                    n.foldItems.push(n.lastHeaderFolder);
                    let t = n.lastHeaderFolder.h(n.icon.unfold),
                        e = t.p();
                    e.a(Ja, "1"), e.a(Da, Ar), t.uC().ck((function () {
                        let t = $(this).p().a(_r);
                        n.disposeFold(t, $("#" + t).a(Da).sW("t") ? "e" : "c", Fi), event.cancelBubble = Fi
                    }))
                } else o < n.lastHeaderLevel && n.foldItems.pop();
                n.foldItems.length > 0 && t.a(tr, n.foldItems[n.foldItems.length - 1].p().a(_r))
            }
            n.lastHeaderFolder = $("#fd-vk-header-" + t.a(nr)), n.lastHeaderLevel = o
        }, n.focusHeader = function () {
            function t(e) {
                n.disposeFold(e, "e", Fi);
                let i = $("#" + e),
                    o = i.prop(Bl);
                o !== Ii && "h1" !== o.l() && t(i.a(tr))
            }
            let e = $(document).scrollTop();
            if (Math.abs(e - n.lastDocScrollTop) < 20) return;
            n.lastDocScrollTop = e;
            let i = n.h.length - 1;
            for (let t = 0, e = n.h.length; t < e; t++) {
                let e = Yc.browser.Firefox === Ni ? n.h[t] : v(n.h[t]),
                    o = $("#" + v(e)),
                    a = o.ht();
                if (o.o().top - $(document).scrollTop() > 3 * a) {
                    i = t - 1;
                    break
                }
            }
            n.currentHeaderIndex !== i && (n.currentHeaderIndex = i, n.inHeader() === Fi && (n.currentItem !== Ii && s(n.currentItem, ia), n.currentItem = $("#vlook-toc a[href='#" + n.h[i] + "']").p(), c(n.currentItem, ia), n.currentItem.isHidden() && t(n.currentItem.a(tr)), n.scrollToCurrent()), typeof n.onChapterChanged == Wr && n.onChapterChanged())
        }, n.scrollToCurrent = function () {
            if (n.currentItem === Ii || n.currentItem.position() === Ii) return;
            const t = 3 * n.currentItem.ht(),
                e = n.ui.body.scrollTop(),
                i = e + n.ui.body.ht();
            n.currentItem.position().top < e ? n.ui.body.scrollTop(n.currentItem.position().top) : n.currentItem.position().top > i - t && n.ui.body.scrollTop(n.currentItem.position().top - n.ui.body.ht() + t)
        }, n.inHeader = function () {
            return n.currentHeaderIndex > -1
        }, n.inFirstHeader = function () {
            return w() !== Ii && 0 === n.currentHeaderIndex
        }, n.inDocTitle = function () {
            return w() === Ii && 0 === n.currentHeaderIndex
        }, n.filter = function (t) {
            if ("" === t.x()) return Ni;
            n.holder.segs.checkedItem() === n.typeName() && n.showFilterResult();
            let e = Ni;
            return n.ui.result.empty(), $(Ql).e((function () {
                let i = $(this),
                    o;
                if ((i.a(ja) + i.a(Jl)).l().i(t) > -1) {
                    let t = i.clone();
                    c(t, na), s(t, "md-toc-item md-toc-h1 md-toc-h2 md-toc-h3 md-toc-h4 md-toc-h5"), t.ch(ta).remove(), t.prepend("<span>" + t.a(ja) + " </span>"), t.show(), t.a(Xa, oc), t.uC().ck((function () {
                        s(n.ui.result.ch(".v-toc-item-current"), ia), i.tr(la), c($(this), ia)
                    })), n.ui.result.append(t), e = Fi
                }
            })), e === Ni && (n.ui.result.empty(), n.ui.result.append("<div class='v-toc-filter-result-none'>" + ["无匹配结果!", "No Results!"][as] + "</div>"), jn(this)), Fi
        }, n.updateStatus = function () {
            $(Ql).length > 0 ? n.holder.segs.sts(this, Fi) : n.holder.segs.sts(this, Ni)
        }, n.show = function () {
            n.holder.keyword.input.val().length > 0 ? (n.ui.body.hide(), n.showFilterResult()) : (n.ui.body.show(), n.hideFilterResult())
        }, n.hide = function () {
            n.ui.body.hide(), n.hideFilterResult()
        }, e && n.hide(), n.showFilterResult = function () {
            n.ui.body.hide(), n.ui.result.show(), s(n.ui.result.ch(".v-toc-item-current"), ia)
        }, n.hideFilterResult = function () {
            n.ui.result.hide()
        }, n.gotoHeader = function (t) {
            K("#" + t.a(ya))
        }, n.disposeFold = function (t, e, i) {
            let o = null,
                a = $("#" + t),
                r = a.nextAll(),
                l = $("#fd-" + t);
            a.a(Da, "e" === e ? Ar : oc), l.h("e" === e ? n.icon.unfold : n.icon.folded);
            for (let t = 0, a = r.length; t < a; t++) {
                let a = $(r[t]);
                if (null != o) {
                    const t = Ye(a.a("class")),
                        e = Ye(o.a("class"));
                    if (t > e) continue;
                    if (t < e) break
                }
                i === Fi && "1" === a.a(Ja) && a.a(Da).sW("f") && "c" === e && (a.a(Da, oc), n.disposeFold(a.a(_r), e, i)), a.c(Lr, "c" === e ? vl : to), o = a
            }
        }
    }

    function Un(t) {
        let e = t.ui;
        gt(e.entry), e.result.append("<div class='v-toc-filter-result-none'></div>"), e.tips = e.result.ch(".v-toc-filter-result-none"), Bn(e)
    }

    function _n(t) {
        let e = t.ui,
            n = e.result.ch(".v-toc-item");
        n.show(), 0 === n.length ? Bn(e) : (e.tips.hide(), n.a(Xa, oc), jn(t))
    }

    function jn(t) {
        iu.sts(t, t.ui.result.ch(".v-toc-item[d-keyword-match]").length > 0)
    }

    function Bn(t) {
        t.tips.t("( " + ["无此类内容", "No such content"][as] + " )"), t.tips.show()
    }

    function Zn(t, e, n, i) {
        iu.sts(t, Fi), t.ui.tips.isShowed() && t.ui.tips.hide();
        let o = $('<span class="v-toc-item" data-for-search="' + D(i === Ii || 0 === i.x().length ? "" : i) + '">' + e + "</span>");
        t.ui.result.append(o), o.uC().ck((function () {
            s(t.ui.result.ch(".v-toc-item-current"), ia), c(o, ia), K("#" + n), typeof t.holder.onInteractive == Wr && t.holder.onInteractive()
        }))
    }

    function Gn(t, e) {
        if (0 === e.x().length) return iu.sts(t, Ni), Ni;
        t.ui.tips.hide(), t.ui.result.ch().hide(), s(t.ui.result.ch(".v-toc-item-current"), ia), t.ui.result.ch().removeAttr(Xa);
        let n = Ni;
        return t.ui.result.ch(".v-toc-item").e((function () {
            let i = $(this),
                o = i.a(Ra);
            (i.t().l().i(e) > -1 || o !== Ii && o.l().i(e) > -1) && (i.show(), i.a(Xa, oc), iu.sts(t, Fi), n = Fi)
        })), n === Ni && (t.ui.tips.t(["无匹配结果!", "No Results!"][as]), t.ui.tips.show(), iu.sts(t, Ni)), Fi
    }

    function Xn(t) {
        return t.ui.result.ch("span").length > 0
    }

    function Yn(t) {
        t.ui.result.show(), s(t.ui.result.ch(".v-toc-item-current"), ia)
    }

    function Jn(t) {
        t.ui.result.hide()
    }

    function Qn(t, e) {
        let n = this;
        n.ui = {
            entry: $(".v-segment-btn.figure"),
            result: $(".v-toc-filter-result.figure"),
            tips: Ii
        }, n.holder = t, n.resultNav = new Rn(n.ui.result), Un(this), n.typeName = function () {
            return "figure"
        }, n.hasIndexItem = function () {
            return Xn(this)
        }, n.add = function (t, e, n) {
            Zn(this, t, e, n)
        }, n.updateStatus = function () {
            jn(this)
        }, n.show = function () {
            Yn(this)
        }, n.hide = function () {
            Jn(this)
        }, e && n.hide()
    }

    function ti(t, e) {
        let n = this;
        n.ui = {
            entry: $(".v-segment-btn.table"),
            result: $(".v-toc-filter-result.table"),
            tips: Ii
        }, n.holder = t, n.resultNav = new Rn(n.ui.result), Un(this), n.typeName = function () {
            return jl
        }, n.hasIndexItem = function () {
            return Xn(this)
        }, n.add = function (t, e, n) {
            Zn(this, t, e, n)
        }, n.updateStatus = function () {
            jn(this)
        }, n.show = function () {
            Yn(this)
        }, n.hide = function () {
            Jn(this)
        }, e && n.hide()
    }

    function ei(t, e) {
        let n = this;
        n.ui = {
            entry: $(".v-segment-btn.media"),
            result: $(".v-toc-filter-result.media"),
            tips: Ii
        }, n.holder = t, n.resultNav = new Rn(n.ui.result), Un(this), n.typeName = function () {
            return "mulitmedia"
        }, n.hasIndexItem = function () {
            return Xn(this)
        }, n.add = function (t, e, n) {
            Zn(this, t, e, n)
        }, n.updateStatus = function () {
            jn(this)
        }, n.show = function () {
            Yn(this)
        }, n.hide = function () {
            Jn(this)
        }, e && n.hide()
    }

    function ni(t, e) {
        let n = this;
        n.ui = {
            entry: $(".v-segment-btn.codeblock"),
            result: $(".v-toc-filter-result.codeblock"),
            tips: Ii
        }, n.holder = t, n.resultNav = new Rn(n.ui.result), Un(this), n.typeName = function () {
            return ca
        }, n.hasIndexItem = function () {
            return Xn(this)
        }, n.add = function (t, e, n) {
            Zn(this, t, e, n)
        }, n.updateStatus = function () {
            jn(this)
        }, n.show = function () {
            Yn(this)
        }, n.hide = function () {
            Jn(this)
        }, e && n.hide()
    }

    function ii(t, e) {
        let n = this;
        n.ui = {
            entry: $(".v-segment-btn.history"),
            title: $(".v-toc-history-title"),
            result: $(".v-toc-history-result")
        }, n.holder = t, n.typeName = function () {
            return "history"
        }, n.hasIndexItem = function () {
            return Xn(this)
        }, n.add = function (t) {
            if (t === Ii || "#" === t || 0 === t.x().length) return;
            s(n.ui.result.ch(".v-toc-item-current"), ia);
            let e = Ii,
                i = t.s(1, t.length);
            if (i.sW("vk-id") ? e = $(t).a(hr) : i.sW("vk-err") && (e = $(t).t()), e === Ii) {
                let n;
                e = "<span>" + $(Ql + ">.md-toc-inner[href='" + v(t) + "']").p().a(ja) + " </span>" + v(i)
            }
            let o = n.ui.result.ch("span[d-history='" + t + "']");
            if (0 === o.length) n.ui.result.prepend('<span d-history="' + t + '" class="' + 'v-toc-item">' + e + "</span>");
            else {
                let t = o.clone();
                n.ui.result.prepend(t), c(t, ia), o.remove()
            }
            let a = n.ui.result.ch("span[d-history='" + t + "']");
            c(a, ia), a.a(Xa, oc), a.uC().ck((function () {
                K(t), typeof n.holder.onInteractive == Wr && n.holder.onInteractive()
            })), n.updateStatus()
        }, n.updateStatus = function () {
            jn(this)
        }, n.show = function () {
            n.ui.title.show(), n.ui.result.show();
            let t = "span.v-toc-item",
                e = "div.v-toc-history-none";
            0 === n.ui.result.ch(t + ", " + e).length ? n.ui.result.append("<div class='v-toc-history-none'>" + ["暂无记录!", "No records!"][as] + "</div>") : n.ui.result.ch(t).length > 0 && n.ui.result.ch(e).remove()
        }, n.hide = function () {
            n.ui.title.hide(), n.ui.result.hide()
        }, e && n.hide()
    }

    function oi(e, o) {
        let a = this;
        a.ui = $(".v-doc-lib"), a.iframe = Ii, a.handle = $(".v-doc-lib-board>.item"), a.enabled = Ni, a.src = Ii, a.identifier = "vlook://doc-lib", a.holder = o, a.mask = e, a.mask.bindPartner(this, a.ui), gt(a.ui), a.init = function () {
            function e() {
                L("doc-lib-title", ""), r = setTimeout((function () {
                    l--, n("Try to get DocLib title (" + l + ")");
                    let t = C("doc-lib-title");
                    l > 0 && (t === Ii || 0 === t.length) ? e() : (l <= 0 && (t = ["浏 览 文 库", "Document Library"][as], i("    ├ DocLib: timeout")), o.show(), a.handle.t(t), a.handle.a(Jl, t), c($(".v-nav-center-body, .v-nav-center-footer"), "has-doc-lib"), clearTimeout(r))
                }), 1e3)
            }
            let o = $(".v-doc-lib-board"),
                r = null,
                l = 10;
            if (a.iframe = $("iframe[name='vlook-doc-lib']"), a.src = H("vlook-doc-lib"), a.src !== Ii) {
                t("    ├ DocLib: " + a.src), a.enabled = Fi;
                let n = z("wf");
                n = n !== Ii ? "&wf=" + n : "", a.iframe.a(El, a.src + "?ws=none&type=mini" + n), e()
            } else t("    ├ DocLib: none");
            a.handle.uC().ck((function () {
                a.show()
            })), $("a[href='" + a.identifier + "']").e((function () {
                let t = $(this);
                t.removeAttr(Ur), t.a(Zl, a.identifier), t.uC().ck((function () {
                    a.show()
                }))
            }))
        }, a.reload = function (t) {
            let e = "";
            t !== Ii && (e = "&cs=" + t), a.iframe.a(El, a.src + "?ws=none&type=mini" + e)
        }, a.show = function () {
            typeof a.holder.onInteractive == Wr && a.holder.onInteractive(), a.mask.show(), a.ui.show()
        }, a.hide = function () {
            a.ui.hide(), a.mask.hide()
        }, a.disposeHotkey = function (t, e) {
            if (!a.ui.isHidden()) switch (t) {
                case 27:
                    a.hide();
                    break
            }
        }
    }

    function ai() {
        function t(t, e) {
            t.a(Na, cs), c(t, Ao), Ee(t, e)
        }

        function e(t) {
            let e = t.a(El);
            t.bind(zr, (function () {
                {
                    let e = t.p().f(po).h(),
                        n = t.p().f(vo).t();
                    be(t.p().a(_r), "🖼 <strong>" + ["无效的图片源", "Invalid image source"][as] + ":</strong> " + e + (n.x().length > 0 ? " | " + n : ""))
                }
                d($(this))
            })), t.a(El, e)
        }

        function n(t) {
            let e = t.i("#", 4),
                n = t.i("mode", 5),
                i = t.i("#icon", e - 1) > -1 || t.i("=icon", n + 4) > -1,
                o = t.i("#logo", e - 1) > -1 || t.i("=logo", n + 4) > -1,
                a = t.i("#frame", e - 1) > -1 || t.i("=frame", n + 4) > -1;
            return i || o || a
        }

        function o(t, e, n) {
            let i = Ii;
            if (e.i("#center") > -1) i = "center";
            else if (i === Ii && e.i("#right") > -1) i = Il;
            else if (i === Ii && e.i("#left") > -1) i = Jr;
            else {
                if (i !== Ii || n.align === Ii) return;
                i = n.align
            }
            t.c(Xl, i)
        }

        function a(t, e) {
            let n = e.grid;
            n !== Ii && t.a(_a, n)
        }

        function r(t, e, o) {
            e.fill !== Ii && (t.a(vr, e.fill), o.i(Ul, 1) > -1 && SVGInject(t[0], {
                afterInject: function (t, e) {
                    let i = $(e);
                    n(o) || Rt(i, "fig.svg"), ci(i.a(vr), i)
                },
                onFail: function (t, e) {
                    i("SVGInject ERROR:", $(t).a(El))
                }
            }))
        }

        function l(t, e) {
            if (e.darksrc !== Ii)
                if (e.darksrc === Zr) t.a(qa, Zr);
                else {
                    t.a(qa, "alter");
                    let n = t.a(El),
                        i = N(n),
                        o = S(n),
                        a = e.darksrc + ("" !== o ? "?" + o : ""); - 1 === a.i("/") && (a = i + a), t.a(lr, t.a(El)), t.a(rr, a), e.srcset !== Ii && t.a(dr, e.srcset), e.darksrcset !== Ii && t.a(sr, e.darksrcset)
                }
        }

        function s(t, e) {
            let n = t.a(El),
                i = e.srcset,
                o = e.darksrcset;
            i !== Ii && (i = u(n, i), t.a(dr, i), t.a(Kl, i)), o !== Ii && (o = u(t.a(rr), o), t.a(sr, o))
        }

        function d(t) {
            let e = t.a(Ui);
            e !== Ii && e.length > 0 && (t.a(Jl, e), t.removeAttr(Ui)), c(t, "v-img-lost")
        }

        function u(t, e) {
            let n = N(t);
            if (/^@[2]x(,@[3]x)?$/.test(e) === Fi) {
                let n = t.s(0, t.i("?", 5)),
                    i = n.s(0, n.lastIndexOf(".")),
                    o = n.s(n.lastIndexOf("."), n.length);
                e = (e = e.r(/@2x/, i + "@2x" + o + " 2x")).r(/@3x/, i + "@3x" + o + " 3x")
            } else e = (e = e.rAfter(".", "@2x", " 2x")).rAfter(".", "@3x", " 3x");
            let i = e.split(",");
            return -1 === i[0].i("/") && (e = n + e), i.length > 1 && -1 === i[1].i("/") && (e = e.r(" 2x,", " 2x," + n)), e
        }
        let h = new Vt;
        h.st(), $(".md-diagram-panel>svg>svg>g").e((function () {
            $(this).unwrap()
        })), h.ed("    ├ prepare svg: "), h.st(), $("#write p>img, #write .md-diagram-panel svg,img[src*='mode=figure'], img[src*='mode=icon'], img[src*='mode=logo'], img[src*='mode=frame'], img[src*='#figure'], img[src*='#icon'], img[src*='#logo'], img[src*='#frame']").e((function () {
            let i = $(this),
                d = i.a(El),
                u = i.p(),
                h = d !== Ii ? "img" : "svg";
            if (d !== Ii) {
                let t = O(d),
                    c = A(d);
                if (r(i, t, d), l(i, t), s(i, t), e(i), n(d)) return Fi;
                a(i, t), u = i.p(), "p" !== u.prop(Bl).l() && (i.wrap("<p></p>"), u = i.p()), o(u, c, t)
            }
            Rt(i, d !== Ii ? "fig.img" : "fig.svg"), cs++, t(i, h), u.a(Oa, h), c(u, To), Ce(i)
        })), h.ed("    ├ figure set: "), h.st(), Yc.display.DPR > 1 && z(Kl) === Bi && $("p[d-cntr='img'] img").e((function () {
            let t = $(this); - 1 === t.a(El).i(Ul, 1) && t.a(Kl) === Ii && t.a(Kl, t.a(El) + " 2x")
        })), li(Ni), h.ed("    └ DPR & misc.: ")
    }

    function ri(t) {
        let e = Ms.a(El);
        if (I() === Fi) {
            let t = Ms.a(Ui),
                n = Ms.a(Jl);
            e = "![" + (t !== Ii ? t : "") + "](" + e + (n !== Ii ? ' "' + n + '"' : "") + ")"
        }
        Ue(t, e, Fi)
    }

    function li(t) {
        let e = re.scheme,
            n = e === ga;
        $("img[d-darksrc='invert'], svg[d-darksrc='invert']").e((function () {
            let t = $(this),
                e = t.a(El);
            n === Fi ? t.a(vr) === Ii && (e !== Ii && t.a(Kl, t.a(dr)), c(t, Fo)) : (s(t, Fo), e !== Ii && t.a(Kl, t.a(dr)))
        })), $("img[d-darksrc='alter']").e((function () {
            let t = $(this);
            s(t, Fo), t.a(El, t.a(ar + e)), t.a(Kl, t.a(cr + e))
        })), $("img[d-img-fill='text'], img[d-img-fill='theme1'], img[d-img-fill='theme2'], svg[d-img-fill='text'], svg[d-img-fill='theme1'], svg[d-img-fill='theme2']").e((function () {
            let t = $(this),
                e = t.a(vr);
            t.prop(Bl).l().sW("s") || t.a(El).i(Ul, 1) > -1 ? ci(e, t) : (e === Gl ? t.c(Ir, "drop-shadow(12345px 0px " + t.p().c(sa) + ")") : t.c(Ir, "drop-shadow(12345px 0px var(--ac-" + e + "-lg))"), t.a(Na) !== Ii && t.c(Gi, vl))
        })), t === Fi && $("img[d-fig-grid='line'],img[d-fig-grid='block']").e((function () {
            let t = $(this);
            n === Fi ? (s(t, "v-fig-solid-bg-light"), s(t, "v-fig-grid-line-light"), s(t, "v-fig-grid-block-light")) : (s(t, "v-fig-solid-bg-dark"), s(t, "v-fig-grid-line-dark"), s(t, "v-fig-grid-line-dark-invert"), s(t, "v-fig-grid-block-dark"), s(t, "v-fig-grid-block-dark-invert"));
            let i = t.a(_a),
                o = t.a(qa) === Zr;
            c(t, i === tl || i === to ? n === Fi && o === Fi ? "v-fig-grid-" + i + "-" + e + "-invert" : "v-fig-grid-" + i + "-" + e : "v-fig-solid-bg-" + e)
        }))
    }

    function ci(t, e) {
        e.c(Ir, vl), t === Gl ? e.f("path, rect, ellipse, polygon").c(Vr, e.p().c(sa)) : e.f("path, rect, ellipse, polygon").c(Vr, "var(--ac-" + t + "-lg)")
    }

    function si() {
        let t = this;
        t.ui = $(".v-fig-nav"), t.btns = {
            ui: $(So),
            prev: $(".v-fig-nav-btns.prev"),
            next: $(".v-fig-nav-btns.next"),
            close: $(".v-btn-close-figure-nav")
        }, t.content = $(".v-fig-content"), t.figNum = 1, gt(t.content.ch("img, svg")), t.btns.prev.uC().ck((function () {
            t.prev()
        })), t.btns.next.uC().ck((function () {
            t.next()
        })), t.btns.close.uC().ck((function () {
            t.hide()
        })), t.content.uC().ck((function () {
            t.hide()
        })), t.adjustHoverStyle = function () {
            Yc.device.mobile ? (t.btns.prev.uH(), t.btns.next.uH()) : (t.btns.ui.hover((function () {
                $(this).c(nc, "translateY(-2px)")
            }), (function () {
                $(this).c(nc, vl)
            })), t.btns.ui.mousedown((function () {
                $(this).c(nc, vl)
            })), t.btns.ui.mouseup((function () {
                $(this).c(nc, "translateY(-2px)")
            })))
        }, t.show = function (e) {
            0 !== cs && (kt(), rs = Fi, null == e && (e = $("[d-fig-num='" + t.figNum + "']")), t.figNum = u(e.a(Na)), J(t.ui), t.display(), t.updateUI())
        }, t.hide = function () {
            t.content.empty(), Q(t.ui), xt(), rs = Ni
        }, t.display = function () {
            let e = $("[d-fig-num='" + t.figNum + "']");
            t.content.empty(), t.content.show(), t.content.c(Ac, $(window).w()).c(Er, $(window).ht());
            let n = e.clone();
            n.c(ll, $(window).w() - 90).c(rl, $(window).ht() - 90).c(ro, wc), c(n, "v-interactive"), Q(n), pt(n), n.uC().ck((function () {
                K("#vk-id-fig" + t.figNum), t.hide()
            })), t.content.append(n), J(n)
        }, t.prev = function () {
            t.figNum > 1 && (t.figNum--, t.display(), t.updateUI())
        }, t.next = function () {
            t.figNum < cs && (t.figNum++, t.display(), t.updateUI())
        }, t.updateUI = function () {
            let e;
            $(".v-fig-nav-title").h("<span class='v-fig-page-num'>" + t.figNum + "/" + cs + "</span> " + $("#vk-id-fig" + t.figNum + ">.v-cap-1").t()), t.btns.prev.c(ec, (t.ui.ht() - t.btns.prev.ht()) / 2), t.btns.next.c(ec, t.btns.prev.c(ec)).c(Il, "10px"), t.btns.prev.c(bl, "0"), t.btns.next.c(bl, "0"), t.figNum > 1 && t.btns.prev.c(bl, "1"), t.figNum < cs && t.btns.next.c(bl, "1")
        }, t.disposeHotkey = function (e, n) {
            if (!Rc.ui.isHidden()) switch (e) {
                case 188:
                case 37:
                    t.prev();
                    break;
                case 190:
                case 39:
                    t.next();
                    break;
                case 27:
                    t.hide();
                    break
            }
        }
    }

    function di() {
        $("#write>ul").e((function () {
            $(this).f(".md-task-list-item input[type='checkbox']").e((function () {
                let t = $(this).p();
                t.ch("ul").e((function () {
                    let e = 0,
                        n = Ni;
                    $(this).ch("li").e((function () {
                        if (e > 0 && $(this).f("input").a(aa) === Ii) return n = Fi, Ni;
                        e++
                    })), n === Fi && (t.ch("input")[0].indeterminate = Fi)
                }))
            }))
        })), $("#write input[type='checkbox']").e((function () {
            let t = "uncheck",
                e = ga,
                n = $(this),
                i = n.a(aa);
            i !== Ii && i.sW("c") ? t = aa : n[0].indeterminate === Fi && (t = "indeterminate"), n.before("<svg width='14px' height='14px' class='v-svg-input-checkbox'><use xlink:href='#icoCheckbox_" + t + "' class='v-svg-ico-" + "dark'/></svg>"), n.remove()
        }))
    }

    function ui() {
        $(".md-diagram-panel svg[id^='mermaidChart'][viewBox^='-']").e((function () {
            let t = $(this),
                e = t.a(Hc).split(/\s+/),
                n = t.c(Tl);
            t.a(Hc, e[0] + " " + e[1] + " " + e[2] + " " + (u(e[3]) + u(n))), c(t, No)
        })), $(".md-diagram-panel svg[id^='mermaidChart']>g>rect[class='actor']").e((function () {
            let t = $(this),
                e = t.next(Gl).ch(),
                n = e.t(),
                i = "";
            const o = undefined,
                a = /^\*\*.+/g,
                r = /^--.+/g;
            if (/@.+/g.test(n) === Fi) {
                let o = t.ht(),
                    a = t.prev(tl);
                t.a(Nl, (o - 20) / 2), t.a(Pl, (o - 20) / 2), t.a("y", u(t.a("y")) + 10), t.a(Er, o - 20), a.a("y1", u(a.a("y1")) + 10), a.a("y2", u(a.a("y2")) - 20), c(t.prev(tl), "v-actor-person"), e.t(i + n.s(1, n.length))
            } else a.test(n) === Fi ? (c(t, go), c(t.prev(tl), go), c(t.nextAll(Gl).ch(), go), e.t(i + n.s(2, n.length))) : r.test(n) === Fi ? (c(t, bo), c(t.nextAll(Gl).ch(), bo), e.t(i + n.s(2, n.length))) : e.t(i + n)
        })), $(".md-diagram-panel svg[id^='mermaidChart']>text.sequenceNumber").e((function () {
            $(this).removeAttr(Yl)
        })), $(".md-diagram-panel polygon+.labelText").e((function () {
            let t = $(this),
                e = t.p(),
                n = fc,
                i = fc,
                o = fc,
                a = pc;
            t.t() === Ui ? (n = vc, i = vc, o = vc, a = mc) : t.t() === nl && (n = uc, i = uc, o = uc, a = hc), "opt" !== t.t() && (e.f("polygon.labelBox").c(Yo, "fill: " + n + " !important;"), e.f("line.loopLine").c(Yo, "stroke: " + i + " !important;"), e.f("text.labelText").c(Yo, "fill:" + a + " !important;"), e.f("text.labelText").c(Yo, "fill:" + a + " !important;"), e.f("text.loopText, text.loopText>tspan").c(Yo, "fill:" + o + " !important;")), t.t() === Ui ? t.t(["选择", "Alt."][as]) : "opt" === t.t() ? t.t(["可选", "Opt."][as]) : t.t() === nl ? t.t(["循环", "Loop."][as]) : "par" === t.t() && t.t(["平行", "Par."][as])
        })), $("svg text.loopText>tspan").e((function () {
            let t = $(this);
            t.p().a(Rl, "text-anchor: start");
            let e, n = t.p().p().f(".labelBox")[0].getBBox();
            t.a("x", n.x + n.width + 10);
            let i = t.p().next();
            i !== Ii && i.a(ra) !== Ii && i.a(ra).i("loopText") > -1 && i.a("x", n.x + n.width + 40)
        }));
        let t = R("--v-r-b");
        $("svg .cluster rect").e((function () {
            $(this).a(Nl, t), $(this).a(Pl, t)
        }))
    }

    function hi() {
        let t = z("dc-tag"),
            e = z("dc-badge"),
            n = z("dc-coat");
        t !== Ii && (cu = t), e !== Ii && (uu = e), n !== Ii && (mu = n), $("code").e((function () {
            let t = $(this),
                e = t.t(),
                n = 0,
                i;
            null != (i = e.m(su)) ? vi(t, i) : null != (i = e.m(ru)) ? fi(t, i) : null != (i = e.m(gu)) ? Ti(t, i) : null != (i = e.m(vu)) ? wi(t, i) : null != (i = e.m(fu)) ? gi(t, i) : (n++, c(t, "v-std-code id-" + n), t.uC().ck((function () {
                let e = t.t();
                I() === Fi && (e = "`" + e + "`"), Ue(t, e, Fi)
            })))
        }))
    }

    function fi(t, e) {
        function n(t) {
            let e = "#" + t + "#";
            return o !== uu && (e += "(" + o + ")"), e = "`" + e + "`", e
        }
        let i = e[1],
            o = pi(e[3]);
        lu++, t.t(i), t.a(ra, "v-tag " + o + " id-" + lu), t.uC().ck((function () {
            let t = $(this),
                e = t.t();
            I() === Fi && (e = n(e)), Ue(t, e, Fi)
        }))
    }

    function pi(t) {
        return t === Ii ? cu : t
    }

    function vi(t, e) {
        function n(t) {
            let e = "#" + a + "|" + t + "#";
            return i !== uu && (e += "(" + i + (o !== Ii ? "!" : "") + ")"), e = "`" + e + "`", e
        }
        let i = mi(e[4], t),
            o = e[5],
            a = e[1],
            r = e[2],
            l;
        hu++, t.wrap("<code class='v-badge-name " + i + " id-" + hu + "'>" + a + "</code>"), $(".v-badge-name." + i + ".id-" + hu).uC().ck((function () {
            if (fd === Fi) return;
            let t = a,
                e = $(this);
            I() === Fi && (t = n(e.ch().t())), Ue(e, t, Fi)
        })), c(t, "v-badge-value id-" + hu), null != (l = r.m(du)) && (r = r.r(l[2], "<span class='var " + i + "'>" + l[2] + "</span>")), t.h(r), o !== Ii && c(t, i), t.uC().ck((function () {
            if (fd === Fi) return;
            let t = $(this),
                e = t.t();
            I() === Fi && (e = n(t.t())), Ue(t, e, Fi)
        }))
    }

    function mi(t, e) {
        return t === Ii ? "h6" === e.p().prop(Bl).l() ? "theme2" : uu : t
    }

    function gi(t, e) {
        let n = t.p().p(),
            i = bi(e[1]),
            o = e[2] !== Ii ? " em" : " ";
        n.prop(Bl).l().sW("bl") && (t.p().children().length > 0 ? t.remove() : t.p().remove(), c(n, "v-q " + i + o), c(n.ch("h6"), "title-" + i + o))
    }

    function bi(t) {
        return t === Ii ? pu : t
    }

    function wi(t, e) {
        function n(t, e) {
            let n = 16,
                i = "linear-gradient(45deg, ";
            t <= 8 ? n = 4 : t <= 12 ? n = 8 : t <= 20 && (n = 10);
            let o = 100 / n;
            for (let t = 0; t < n; t++) {
                let a = t * o,
                    r, l = t % 2 == 0 ? e : sc;
                i += l + " " + a + "%, " + l + " " + (a + o) + "%", i += t < n - 1 ? "," : ")"
            }
            return i
        }
        let i = " **** ",
            o = e[2],
            a = "var(--ac-" + yi(e[4]) + "-lg)";
        e[1] !== Ii && "" !== e[1] && (i = e[1]), c(t, Ko), t.a(wr, o), t.a(yr, Ar), t.a(Jl, ["点击查看有效的原始内容", "Click to view valid original content"][as]), t.t(i), t.c(Gi, n(i.length, a)).c(ao, a), t.uC().ck((function () {
            $i($(this))
        }))
    }

    function yi(t) {
        return t === Ii ? mu : t
    }

    function $i(t) {
        event.stopPropagation(), t.a(yr).sW("f") ? ki(t) : xi(t)
    }

    function ki(t) {
        let e = t.t();
        c(t, wl), t.c(sa, t.c(ao)), t.t(t.a(wr)), t.a(wr, e), t.a(yr, oc)
    }

    function xi(t) {
        let e = t.t();
        s(t, wl), t.c(sa, cc), t.t(t.a(wr)), t.a(wr, e), t.a(yr, Ar)
    }

    function Ti(t, e) {
        let n = e[1],
            i = e[2];
        t.after("<ruby>" + n + "<rp>(</rp><rt onclick='TextPhonetic_translation(\"" + n + '", "' + i + "\")'>" + i + "</rt><rp>)&nbsp;</rp></ruby>"), t.remove()
    }

    function Ci() {
        let t = "",
            e = M(),
            n = H("date"),
            i = H("author"),
            o = (e !== Ii ? "<div>" + e + "</div>" : "") + (n !== Ii ? "<div class='v-date'>( " + n + " )</div>" : "") + (i !== Ii ? "<div class='v-author'>" + i + "</div>" : ""),
            a = H("vlook-welcome");
        return a === Ii && (a = o), a += ho + ho, t += '<div class="v-welcome-page"><div class="v-doc-logo-light"></div><div class="v-doc-logo-dark"></div><div class="v-tips">' + a.x() + '</div><div class="v-loading">Loading...</div></div>', t
    }

    function Li() {
        let t = '<svg style="display: none;">';
        return t += '<symbol id="icoVLOOK"><path d="M17.15 0c2.382 0 3.245.248 4.116.714a4.856 4.856 0 0 1 2.02 2.02c.466.87.714 1.734.714 4.116v10.3c0 2.382-.248 3.245-.714 4.116a4.856 4.856 0 0 1-2.02 2.02c-.87.466-1.734.714-4.116.714H6.85c-2.382 0-3.245-.248-4.116-.714a4.856 4.856 0 0 1-2.02-2.02C.248 20.396 0 19.532 0 17.15V6.85c0-2.382.248-3.245.714-4.116a4.856 4.856 0 0 1 2.02-2.02C3.604.248 4.468 0 6.85 0h10.3zm-4.935 16.976a.26.26 0 0 0-.334 0l-.956.795a.26.26 0 0 0-.05.345l.956 1.432a.26.26 0 0 0 .434 0l.956-1.432a.26.26 0 0 0-.05-.345zM7.27 9.292a4.34 4.34 0 0 0-4.343 4.336 4.34 4.34 0 0 0 4.343 4.336 4.34 4.34 0 0 0 4.343-4.336A4.34 4.34 0 0 0 7.27 9.292zm9.554 0a4.34 4.34 0 0 0-4.343 4.336 4.34 4.34 0 0 0 4.343 4.336 4.34 4.34 0 0 0 4.343-4.336 4.34 4.34 0 0 0-4.343-4.336zm-9.554 1.3a3.038 3.038 0 0 1 3.04 3.036 3.038 3.038 0 0 1-3.04 3.035 3.038 3.038 0 0 1-3.04-3.035 3.038 3.038 0 0 1 3.04-3.035zm9.554 0a3.038 3.038 0 0 1 3.04 3.036 3.038 3.038 0 0 1-3.04 3.035 3.038 3.038 0 0 1-3.04-3.035 3.038 3.038 0 0 1 3.04-3.035zm2.883-5.174a.652.652 0 0 0-.853-.32l-.013.005-6.795 2.83-6.793-2.83-.014-.006a.65.65 0 1 0-.537 1.185l7.035 2.931.014.006c.097.043.2.06.299.055a.649.649 0 0 0 .293-.055l.014-.006 7.035-2.93.084-.048a.65.65 0 0 0 .23-.817z" fill="#FFF" fill-rule="evenodd"/></symbol><symbol id="icoNavCenter"><path d="M10 0c5.518 0 10 4.482 10 10s-4.482 10-10 10S0 15.518 0 10 4.482 0 10 0zM4.286 4.286c.16.16 3.464 7.946 3.464 7.946s7.786 3.304 7.946 3.464c.09 0-3.482-7.946-3.482-7.946S4.125 4.125 4.286 4.286zm8.518 8.535c-.304-.66-1.25-3.071-1.572-3.803l-2.125 2.107c.59.268 3.572 1.643 3.697 1.696z"/></symbol><symbol id="icoTocTabCatalog"><path d="M13.5 1A2.5 2.5 0 0 1 16 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5v-9A2.5 2.5 0 0 1 2.5 1h11zm0 1h-11A1.5 1.5 0 0 0 1 3.5v9A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 13.5 2z"/><rect x="5" y="3.5" width="9" height="2" rx="1"/><rect x="2" y="3.5" width="2" height="2" rx="1"/><rect x="8" y="7" width="6" height="2" rx="1"/><rect x="5" y="7" width="2" height="2" rx="1"/><rect x="8" y="10.5" width="6" height="2" rx="1"/><rect x="5" y="10.5" width="2" height="2" rx="1"/></symbol><symbol id="icoTocTabCatalog-checked"><path d="M13.5 1A2.5 2.5 0 0 1 16 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5v-9A2.5 2.5 0 0 1 2.5 1h11zm-.5 9.5H9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM13 7H9a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2zM6 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7-3.5H6a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></symbol><symbol id="icoTocTabFigure"><path d="M13.5 1A2.5 2.5 0 0 1 16 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5v-9A2.5 2.5 0 0 1 2.5 1h11zm0 1h-11A1.5 1.5 0 0 0 1 3.5v9A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 13.5 2z"/><path d="M2.596 11.294l1.86-3.21a1 1 0 0 1 1.655-.112l1.821 2.343a1 1 0 0 0 1.34.221l1.567-1.034a1 1 0 0 1 1.331.21l1.188 1.483a.8.8 0 0 1-.624 1.3H3.288a.8.8 0 0 1-.692-1.201z"/><circle cx="10" cy="6" r="2"/></symbol><symbol id="icoTocTabFigure-checked"><path d="M13.5 1A2.5 2.5 0 0 1 16 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5v-9A2.5 2.5 0 0 1 2.5 1h11zM5.823 7.72a1 1 0 0 0-1.367.364l-1.86 3.21a.8.8 0 0 0 .692 1.201h9.446a.8.8 0 0 0 .624-1.3L12.17 9.712a1 1 0 0 0-1.331-.21l-1.567 1.034a1 1 0 0 1-1.34-.221L6.111 7.972a1 1 0 0 0-.288-.252zM10 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></symbol><symbol id="icoTocTabTable"><path d="M13.286 1H2.714A2.717 2.717 0 0 0 0 3.714v8.57A2.718 2.718 0 0 0 2.714 15h10.572A2.717 2.717 0 0 0 16 12.285V3.714A2.716 2.716 0 0 0 13.286 1zM1.2 6.508h6.298v2.986H1.2V6.508zM2.714 2.2h4.783v3.108H1.2V3.714c0-.836.68-1.514 1.514-1.514zm4.784 8.494V13.8H2.714A1.517 1.517 0 0 1 1.2 12.285v-1.591h6.298zm7.302 0v1.59c0 .837-.678 1.515-1.514 1.516H8.49v-3.106h6.31zm0-4.186v2.986H8.49V6.508h6.31zM13.286 2.2c.835 0 1.514.678 1.514 1.514v1.594H8.49V2.2h4.796z"/></symbol><symbol id="icoTocTabTable-checked"><path d="M7.5 11v4H2.714A2.718 2.718 0 0 1 0 12.285V11h7.5zm8.5 0v1.285A2.717 2.717 0 0 1 13.286 15H8.5v-4H16zM7.5 6.199V9.8H0V6.2l7.5-.001zM16 6.2v3.6H8.5V6.199L16 6.2zM13.286 1A2.716 2.716 0 0 1 16 3.714V5l-7.5-.001V1zM7.5 4.999L0 5V3.714A2.717 2.717 0 0 1 2.714 1H7.5v3.999z"/></symbol><symbol id="icoTocTabMedia"><path d="M9.748 8.4l-2.667 2a.503.503 0 0 1-.7-.1.495.495 0 0 1-.1-.3V6a.5.5 0 0 1 .8-.4l2.667 2a.499.499 0 0 1 0 .8zM2 1h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3c0-1.105.897-2 2-2zm10 1.001H4v12h8v-12zM1 5.001h2V2h-.998a1 1 0 0 0-1 1v2h-.002zM15 5V3a1 1 0 0 0-1-1h-.998v3h1.998zM1 10.999v2a1 1 0 0 0 1 1h.998v-3H1.001zm0-.999h2V6h-2v4zM15 11h-2v2.999h.998a1 1 0 0 0 1-1v-2h.002zm0-1V6h-2v4h2z"/></symbol><symbol id="icoTocTabMedia-checked"><path d="M3 11v4H2a2 2 0 0 1-2-2v-2h3zM14 1a2 2 0 0 1 2 2v2h-3V1h1zm-1 10h3v2a2 2 0 0 1-2 2h-1v-4zM6.78 5.5a.5.5 0 0 0-.499.5v4a.503.503 0 0 0 .8.4l2.667-2a.499.499 0 0 0 0-.8l-2.667-2a.515.515 0 0 0-.3-.1zM13 6h3v4h-3V6zM3 6v4H0V6h3zm0-5v4H0V3c0-1.105.897-2 2-2h1zm9 14H4V1h8v14z"/></symbol><symbol id="icoTocTabCodeblock"><path d="M13.333 1A2.667 2.667 0 0 1 16 3.667v8.666A2.667 2.667 0 0 1 13.333 15H2.667A2.667 2.667 0 0 1 0 12.333V3.667A2.667 2.667 0 0 1 2.667 1h10.666zm.164 1H2.503c-.733 0-1.445.673-1.5 1.41L1 3.514v8.97c0 .739.667 1.456 1.398 1.511l.105.004h10.994c.733 0 1.445-.673 1.5-1.41l.003-.105v-8.97c0-.739-.667-1.456-1.398-1.511L13.497 2zM9.701 3.817l-.02.076-2.08 8.642a.667.667 0 0 1-1.287-.342l.02-.075 2.08-8.643a.667.667 0 0 1 1.287.342zM5.396 5.768l-.047.07-1.61 2.147L5.35 10.13a.667.667 0 0 1-.07.88l-.063.054a.667.667 0 0 1-.88-.069l-.054-.064-1.91-2.547a.667.667 0 0 1-.048-.726l.048-.074 1.91-2.546a.667.667 0 0 1 1.113.729zm6.267-.793l.054.063 1.91 2.547.048.073a.667.667 0 0 1 0 .653l-.048.074-1.91 2.546-.054.065a.667.667 0 0 1-.809.115l-.07-.046-.064-.054a.667.667 0 0 1-.116-.809l.047-.07 1.61-2.147-1.61-2.147-.047-.07a.667.667 0 0 1 1.059-.793z"/></symbol><symbol id="icoTocTabCodeblock-checked"><path d="M13.333 1A2.667 2.667 0 0 1 16 3.667v8.666A2.667 2.667 0 0 1 13.333 15H2.667A2.667 2.667 0 0 1 0 12.333V3.667A2.667 2.667 0 0 1 2.667 1h10.666zM9.256 3.05a.667.667 0 0 0-.842.425l-2.08 8.643-.02.075a.667.667 0 0 0 1.287.342l2.08-8.642.02-.076a.667.667 0 0 0-.445-.766zM4.827 4.773l-.105.007a.667.667 0 0 0-.439.26l-1.91 2.546-.048.074c-.13.23-.11.515.048.726l1.91 2.547.054.064c.234.241.611.27.88.069l.063-.054a.667.667 0 0 0 .07-.88L3.74 7.985l1.61-2.147.046-.07a.666.666 0 0 0-.674-.99zm6.836.203a.666.666 0 0 0-1.059.793l.047.07 1.61 2.147-1.61 2.147-.047.07a.667.667 0 0 0 .116.81l.064.053.07.046c.264.15.597.103.809-.115l.054-.065 1.91-2.546.048-.074a.667.667 0 0 0 0-.653l-.048-.073-1.91-2.547z"/></symbol><symbol id="icoTocTabHistory"><path d="M8 0c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1C4.142 1 1 4.142 1 8s3.142 7 7 7 7-3.142 7-7-3.142-7-7-7zm.695 1.77v5.2l2.394 2.544c.28.298.27.764-.02 1.05l-.012.013a.752.752 0 0 1-1.05-.02l-.013-.012-2.599-2.76a.752.752 0 0 1-.204-.497V2.786a.752.752 0 0 1 1.504-.016z"/></symbol><symbol id="icoTocTabHistory-checked"><path d="M8 0c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-.057 2.034a.752.752 0 0 0-.752.752v5.502a.752.752 0 0 0 .204.496l2.599 2.76.012.014c.286.29.753.3 1.05.019l.014-.013c.29-.286.3-.752.019-1.05L8.695 7.97v-5.2a.752.752 0 0 0-.752-.736z"/></symbol><symbol id="icoRetrieval"><path d="M14.999 14.596a1.375 1.375 0 0 1-1.953 0L11.46 12.94a6.372 6.372 0 0 1-3.466 1.032c-3.559 0-6.444-2.904-6.444-6.486S4.435 1 7.994 1c3.56 0 6.445 2.904 6.445 6.486a6.47 6.47 0 0 1-1.026 3.488l1.586 1.656c.54.543.54 1.423 0 1.966zM7.993 2.32c-2.834 0-5.132 2.313-5.132 5.166s2.298 5.165 5.132 5.165c2.835 0 5.133-2.312 5.133-5.165s-2.298-5.166-5.133-5.166z"/></symbol><symbol id="icoCloseTo-left"><path d="M13.98.176l.035.013c1.506.534 2.311 2.123 1.86 3.607L6.21 30l9.61 26.04c.546 1.475-.186 3.097-1.64 3.707l-.2.077c-1.502.532-3.154-.18-3.781-1.597l-.065-.16L.315 31.916a5.987 5.987 0 0 1 0-3.832l9.818-26.151C10.702.41 12.422-.375 13.979.176z"/></symbol><symbol id="icoCloseTo-right"><path d="M2.02.176L1.986.19C.479.723-.326 2.312.125 3.796L9.79 30 .181 56.04c-.546 1.475.186 3.097 1.64 3.707l.2.077c1.502.532 3.154-.18 3.781-1.597l.065-.16 9.818-26.151a5.987 5.987 0 0 0 0-3.832L5.867 1.933C5.298.41 3.578-.375 2.021.176z"/></symbol><symbol id="icoCloseTo-bottom"><path d="M.176 2.02l.013-.035C.723.479 2.312-.326 3.796.125L30 9.79 56.04.181c1.475-.546 3.097.186 3.707 1.64l.077.2c.532 1.502-.18 3.154-1.597 3.781l-.16.065-26.151 9.818a5.987 5.987 0 0 1-3.832 0L1.933 5.867C.41 5.298-.375 3.578.176 2.021z"/></symbol><symbol id="icoPrevFig"><path d="M11.03.091c.765.284 1.159 1.147.88 1.927L3.002 27l8.91 24.982a1.516 1.516 0 0 1-.75 1.87l-.13.057a1.462 1.462 0 0 1-1.834-.765l-.055-.134L.12 27.705C.112 27.685 0 27.435 0 27c0-.435.111-.684.12-.706L9.141.99A1.465 1.465 0 0 1 11.03.09z"/></symbol><symbol id="icoNextFig"><path d="M.97.091C.205.375-.19 1.238.09 2.018L8.998 27 .089 51.982a1.516 1.516 0 0 0 .75 1.87l.13.057c.72.267 1.511-.073 1.834-.765l.055-.134 9.023-25.305c.007-.02.119-.27.119-.705 0-.435-.111-.684-.12-.706L2.859.99A1.465 1.465 0 0 0 .97.09z"/></symbol><symbol id="icoPrevChapter"><path d="M7.364.293a1 1 0 0 1 0 1.414l-4.97 4.969 4.974 4.974a1 1 0 0 1-1.415 1.414L.296 7.407a.996.996 0 0 1-.291-.658.995.995 0 0 1 .288-.8L5.95.294a1 1 0 0 1 1.414 0z"/></symbol><symbol id="icoNextChapter"><path d="M.296.293a1 1 0 0 0 0 1.414l4.97 4.969L.293 11.65a1 1 0 0 0 1.414 1.414l5.657-5.657a.996.996 0 0 0 .292-.658.995.995 0 0 0-.288-.8L1.71.294a1 1 0 0 0-1.415 0z"/></symbol><symbol id="icoFolded"><path fill="none" d="M0 0h16v16H0z"/><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm-.336 2.757A1 1 0 1 0 6.25 5.172l2.835 2.835-2.835 2.836a1 1 0 1 0 1.414 1.414l3.535-3.536a.997.997 0 0 0 .293-.707V8a.997.997 0 0 0-.293-.707z"/></symbol><symbol id="icoUnfold"><path fill="none" d="M0 0h16v16H0z"/><path d="M2.337 7.075A1 1 0 1 1 3.751 5.66l4.247 4.247 4.246-4.247a1 1 0 0 1 1.414 1.415l-4.95 4.95a.997.997 0 0 1-.71.292.996.996 0 0 1-.711-.293l-4.95-4.95z"/></symbol><symbol id="icoExtend"><path fill="none" d="M0 1h20v20H0z"/><path d="M5.05 6.364A1 1 0 0 1 6.464 4.95L10 8.485l3.536-3.535a1 1 0 1 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L5.05 6.364z" fill="#FFF"/><path d="M5.05 12.364a1 1 0 0 1 1.414-1.414L10 14.485l3.536-3.535a1 1 0 1 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L5.05 12.364z"/></symbol><symbol id="icoClose"><path d="M7,7 L7,-1 C7,-1.55228475 7.44771525,-2 8,-2 C8.55228475,-2 9,-1.55228475 9,-1 L9,7 L17,7 C17.5522847,7 18,7.44771525 18,8 C18,8.55228475 17.5522847,9 17,9 L9,9 L9,17 C9,17.5522847 8.55228475,18 8,18 C7.44771525,18 7,17.5522847 7,17 L7,9 L-1,9 C-1.55228475,9 -2,8.55228475 -2,8 C-2,7.44771525 -1.55228475,7 -1,7 L7,7 Z" transform="translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) "></path></symbol><symbol id="icoResetInput"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM5.737 4.606a.8.8 0 0 0-1.131 1.131L6.869 8l-2.263 2.263a.8.8 0 1 0 1.131 1.131L8 9.131l2.263 2.263a.8.8 0 1 0 1.131-1.131L9.131 8l2.263-2.263a.8.8 0 1 0-1.131-1.131L8 6.869z"/></symbol><symbol id="icoLightMode"><path d="M10 17a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 1 1 1.414-1.414zm-11.314 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm9 5a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zM2 9a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h1zm15.071-6.071a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm-12.728 0l.707.707A1 1 0 1 1 3.636 5.05l-.707-.707A1 1 0 0 1 4.343 2.93zM10 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"/></symbol><symbol id="icoDarkMode"><path d="M11.338 0C15.176 1.107 18 4.605 18 8.8c0 5.08-4.117 9.2-9.198 9.2C4.607 18 1.107 15.174 0 11.338c1.226.705 2.628 1.14 4.144 1.14a8.336 8.336 0 0 0 8.336-8.336c0-1.516-.435-2.919-1.142-4.142zM4.743 5.243l.83 2.106a1 1 0 0 0 .564.563l2.106.83-2.106.831a1 1 0 0 0-.564.564l-.83 2.106-.831-2.106a1 1 0 0 0-.563-.564l-2.106-.83 2.106-.831a1 1 0 0 0 .563-.563l.83-2.106zM8.828.828l.69 1.748a1 1 0 0 0 .563.563l1.747.69-1.747.689a1 1 0 0 0-.563.563l-.69 1.747-.689-1.747a1 1 0 0 0-.563-.563l-1.748-.69 1.748-.689a1 1 0 0 0 .563-.563L8.83.828zm-5.5 0l.548 1.39a1 1 0 0 0 .564.563l1.388.547-1.388.548a1 1 0 0 0-.564.564l-.548 1.388-.547-1.388a1 1 0 0 0-.564-.564L.828 3.328l1.39-.547a1 1 0 0 0 .563-.564L3.328.828z"/></symbol><symbol id="icoSpotlight"><path d="M7 0a7 7 0 0 1 6.992 6.67A7.002 7.002 0 0 1 11 20a7 7 0 0 1-6.992-6.67A7.002 7.002 0 0 1 7 0zm4 6a7 7 0 0 0-6.992 7.33 7 7 0 0 0 9.985-6.662A6.984 6.984 0 0 0 11 6.001z"/></symbol><symbol id="icoLaserPointer"><path d="M10.951 5.006L12.04 6.57l5.306 7.63a3.662 3.662 0 0 1-.89 5.074l-.096.067a3.602 3.602 0 0 1-1.829.65l-.218.009a3.615 3.615 0 0 1-2.991-1.553L4.929 9.253a3.662 3.662 0 0 1 .887-5.075l.098-.067a3.602 3.602 0 0 1 5.037.895zm-3.853.504l-.147.094v-.002l-.097.07a1.83 1.83 0 0 0-.538 2.387l.094.148 1.088 1.565 3.06-2.158L9.47 6.051a1.801 1.801 0 0 0-2.372-.541zm-6.012.836l1.102.125a.862.862 0 0 1 .595.343c.143.192.2.435.159.672a.98.98 0 0 1-1.072.807L.767 8.168a.862.862 0 0 1-.595-.343.874.874 0 0 1-.16-.67v-.002a.98.98 0 0 1 1.074-.807zM4.608.696l.78 1.12A.93.93 0 0 1 5.15 3.09a.916.916 0 0 1-1.27-.213L3.1 1.757A.93.93 0 0 1 3.328.468h-.001a.916.916 0 0 1 1.28.228zm5.91-.681c.237.042.446.18.58.38.134.201.18.448.129.685l-.222 1.023a.957.957 0 0 1-1.102.743.882.882 0 0 1-.579-.38.893.893 0 0 1-.13-.684L9.418.76a.957.957 0 0 1 1.101-.744z"/></symbol><symbol id="icoParagraphNav"><path d="M3.698 17.714v-5.036A.68.68 0 0 0 3.02 12a.68.68 0 0 0-.678.678v5.047L1.155 16.54a.689.689 0 0 0-.96 0c-.26.26-.26.69 0 .96l2.294 2.294a.67.67 0 0 0 .474.204h.068a.65.65 0 0 0 .475-.204L5.799 17.5c.26-.26.26-.689 0-.96-.237-.271-.666-.271-.926 0l-1.175 1.175zm0-15.432V7.32a.68.68 0 0 1-.678.678.68.68 0 0 1-.678-.678V2.27L1.155 3.458c-.26.26-.689.26-.96 0a.689.689 0 0 1 0-.96L2.489.202A.67.67 0 0 1 2.963 0h.068c.17 0 .35.068.475.203l2.293 2.294c.26.26.26.69 0 .96-.237.272-.666.272-.926 0L3.698 2.283zM8 9h11a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 3.5h7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM8 16h11a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM8 5.5h7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM8 2h11a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z"/></symbol><symbol id="icoFont"><path d="M13.576 0l6.048 2.73a.5.5 0 0 1 .28.57l-.978 4.134a1 1 0 0 1-1.224.737l-1.093-.283.391 9.065a1 1 0 0 1-.999 1.043H4.022a1 1 0 0 1-1-1.04l.369-9.068-1.093.283a1 1 0 0 1-1.224-.737L.095 3.3a.5.5 0 0 1 .28-.571L6.425 0c.417 1.178 1.926 1.92 3.603 1.92 1.677 0 3.131-.742 3.55-1.92zm.76 15h-9a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1zm0-2h-9a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1zM10.17 4h-.675a1 1 0 0 0-.905.573L5.513 11.08a.644.644 0 0 0 .582.919h.38a1 1 0 0 0 .906-.578l.604-1.299h3.703l.566 1.28a1 1 0 0 0 .914.597h.391a.659.659 0 0 0 .595-.941L11.073 4.57A1 1 0 0 0 10.169 4zm-.333 1.813l1.308 2.967h-2.59l1.282-2.967z"/></symbol><symbol id="icoPrint"><path d="M15 0a2 2 0 0 1 2 2v4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V2a2 2 0 0 1 2-2h10zm1 13H4v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4zm-2 2v1H6v-1h8zm3.5-7h-1a.5.5 0 1 0 0 1h1a.5.5 0 1 0 0-1zm-3.372 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM15 1H5a1 1 0 0 0-1 1v4h12V2a1 1 0 0 0-.883-.993L15 1z"/></symbol><symbol id="icoOpenInFigureNav"><path d="M13 0a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10zm.25 6.5a.75.75 0 0 0-.75.75v2.996l-.007.057a.25.25 0 0 1-.244.193H9.25l-.102.006a.75.75 0 0 0 .102 1.494h3l.143-.006A1.75 1.75 0 0 0 14 10.246V7.25l-.007-.102a.75.75 0 0 0-.743-.648zM6.748 2H3.75l-.144.006A1.75 1.75 0 0 0 2 3.75v2.996l.007.101A.75.75 0 0 0 3.5 6.746V3.75l.007-.057A.25.25 0 0 1 3.75 3.5h2.998l.101-.007A.75.75 0 0 0 6.748 2z"/></symbol><symbol id="icoTableCross"><path d="M13 0a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10zM1 11a2 2 0 0 0 1.85 1.995L3 13h2v-3h6v3h2a2 2 0 0 0 1.995-1.85L15 11v-1h-4V7h4V3a2 2 0 0 0-2-2h-2v6H5V1H3a2 2 0 0 0-1.995 1.85L1 3v4h4v3H1v1z"/></symbol><symbol id="icoPicInPic"><path d="M14 7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4zm-2-7a3 3 0 0 1 3 3v3h-1V3a2 2 0 0 0-1.85-1.995L12 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4v1H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h9zM2.663 2.663a.556.556 0 0 1 .786 0l2.94 2.909V3.61a.556.556 0 1 1 1.111 0v3.334a.556.556 0 0 1-.556.556H3.611a.556.556 0 0 1 0-1.111h2.023l-2.971-2.94a.556.556 0 0 1 0-.786z"/></symbol><symbol id="icoZoomIn"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.5 6.75a.75.75 0 0 0-.75.75v2.996l-.007.057a.25.25 0 0 1-.244.193H7.5l-.102.006a.75.75 0 0 0 .102 1.494h3l.143-.006a1.75 1.75 0 0 0 1.607-1.744V7.5l-.007-.102a.75.75 0 0 0-.743-.648zm-3.002-3H5.5l-.144.006A1.75 1.75 0 0 0 3.75 5.5v2.996l.007.101a.75.75 0 0 0 1.493-.101V5.5l.007-.057A.25.25 0 0 1 5.5 5.25h2.998l.101-.007a.75.75 0 0 0-.101-1.493z"/></symbol><symbol id="icoZoomOut"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm4.998 8.25H10l-.144.006A1.75 1.75 0 0 0 8.25 10v2.996l.007.101a.75.75 0 0 0 1.493-.101V10l.007-.057A.25.25 0 0 1 10 9.75h2.998l.101-.007a.75.75 0 0 0-.101-1.493zM7 2.25a.75.75 0 0 0-.75.75v2.996l-.007.057a.25.25 0 0 1-.244.193H3l-.102.006A.75.75 0 0 0 3 7.746h3l.143-.006A1.75 1.75 0 0 0 7.75 5.996V3l-.007-.102A.75.75 0 0 0 7 2.25z"/></symbol><symbol id="icoCopy"><path d="M14.15 0A1.851 1.851 0 0 1 16 1.849V12.15A1.851 1.851 0 0 1 14.15 14H11.6v.151A1.85 1.85 0 0 1 9.751 16H1.85A1.85 1.85 0 0 1 0 14.151V3.85A1.85 1.85 0 0 1 1.849 2H4.4v-.151A1.851 1.851 0 0 1 6.25 0h7.9zM1.85 14.8h7.9a.65.65 0 0 0 .65-.649V3.85a.65.65 0 0 0-.649-.649H1.85a.65.65 0 0 0-.649.649V14.15a.65.65 0 0 0 .65.649zM8.2 5.6a.6.6 0 0 1 0 1.2H3.4a.6.6 0 0 1 0-1.2h4.8zm0 2.8a.6.6 0 0 1 0 1.2H3.4a.6.6 0 0 1 0-1.2h4.8zm-1.6 2.8a.6.6 0 0 1 0 1.2H3.4a.6.6 0 1 1 0-1.2h3.2z"/></symbol><symbol id="icoCopyAsMd"><path d="M14.15 0A1.851 1.851 0 0 1 16 1.849V12.15A1.851 1.851 0 0 1 14.15 14H11.6v.151A1.85 1.85 0 0 1 9.751 16H1.85A1.85 1.85 0 0 1 0 14.151V3.85A1.85 1.85 0 0 1 1.849 2H4.4v-.151A1.851 1.851 0 0 1 6.25 0h7.9zM9.752 3.2H1.85a.65.65 0 0 0-.649.649V14.15a.65.65 0 0 0 .65.649h7.9a.65.65 0 0 0 .65-.649V3.85a.65.65 0 0 0-.649-.649zM13.897 6h-1.549v2.574H10.8L13.123 11l2.322-2.426h-1.548V6zM4.248 6l1.549 1.838L7.345 6h1.549v5H7.345V8.132L5.797 9.971 4.248 8.132V11H2.7V6h1.548z"/></symbol><symbol id="icoLoading"><rect x="7" width="2" height="4" rx="1"/><rect transform="rotate(45 12.243 3.757)" x="11.243" y="1.757" width="2" height="4" rx="1"/><rect transform="rotate(90 14 8)" x="13" y="6" width="2" height="4" rx="1"/><rect transform="rotate(135 12.243 12.243)" x="11.243" y="10.243" width="2" height="4" rx="1"/><rect transform="rotate(180 8 14)" x="7" y="12" width="2" height="4" rx="1"/><rect transform="rotate(-135 3.757 12.243)" x="2.757" y="10.243" width="2" height="4" rx="1"/><rect transform="rotate(-90 2 8)" x="1" y="6" width="2" height="4" rx="1"/><rect transform="rotate(-45 3.757 3.757)" x="2.757" y="1.757" width="2" height="4" rx="1"/></symbol><symbol id="icoPlay"><path d="M14.133 9.605l-7.86 6.028c-.93.633-2.223.427-2.887-.459A1.909 1.909 0 0 1 3 14.028V1.972C3 .882 3.927 0 5.07 0c.432 0 .852.128 1.203.367l7.86 6.028c.93.633 1.146 1.865.481 2.751a2.024 2.024 0 0 1-.481.459z"/><path fill="none" d="M0 0h16v16H0z"/></symbol><symbol id="icoPause"><path d="M3 2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm9 0h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path fill="none" d="M0 0h16v16H0z"/></symbol><symbol id="icoStop"><rect x="2" y="2" width="12" height="12" rx="2"/><path fill="none" d="M0 0h16v16H0z"/></symbol><symbol id="icoForbidden"><path d="M3.11 4.523a6.001 6.001 0 0 0 8.368 8.367L3.11 4.523zM4.522 3.11l8.368 8.367A6 6 0 0 0 4.522 3.11zM8 16A8.001 8.001 0 1 1 8.002.002 8.001 8.001 0 0 1 8 16z" /><path fill="none" d="M0 0h16v16H0z"/></symbol><symbol id="icoCheckbox_uncheck"><path d="M10 0a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6zm0 1H4l-.205.007a2.99 2.99 0 0 0-1.916.872A2.99 2.99 0 0 0 1 4v6l.007.205a2.99 2.99 0 0 0 .872 1.916A2.99 2.99 0 0 0 4 13h6l.205-.007a2.99 2.99 0 0 0 1.916-.872A2.99 2.99 0 0 0 13 10V4l-.007-.205a2.99 2.99 0 0 0-.872-1.916A2.99 2.99 0 0 0 10 1z"/></symbol><symbol id="icoCheckbox_checked"><path d="M10 0a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6zm.435 3.36a1 1 0 0 0-1.393.245L5.703 8.372 4.421 7.09a1 1 0 1 0-1.414 1.414l2.121 2.121a1 1 0 0 0 1.225.15l.01-.007.01-.005a.997.997 0 0 0 .292-.277l4.015-5.734a1 1 0 0 0-.245-1.393z"/></symbol><symbol id="icoCheckbox_indeterminate"><path d="M10 0a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6zm0 6H4a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2z" opacity=".5"/><path d="M10 0a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6zm0 1H4l-.205.007a2.99 2.99 0 0 0-1.916.872A2.99 2.99 0 0 0 1 4v6l.007.205a2.99 2.99 0 0 0 .872 1.916A2.99 2.99 0 0 0 4 13h6l.205-.007a2.99 2.99 0 0 0 1.916-.872A2.99 2.99 0 0 0 13 10V4l-.007-.205a2.99 2.99 0 0 0-.872-1.916A2.99 2.99 0 0 0 10 1z"/></symbol><symbol id="icoLinkError"><path d="M8 0c.462 0 .887.24 1.11.626l6.73 11.572c.219.375.213.834-.016 1.204-.228.371-.645.598-1.095.598H1.271c-.45 0-.867-.227-1.095-.598a1.166 1.166 0 0 1-.016-1.204L6.89.626A1.28 1.28 0 0 1 8 0zm0 10.361c-.841 0-1.524.652-1.524 1.456 0 .52.29 1 .762 1.26.472.26 1.052.26 1.524 0 .471-.26.762-.74.762-1.26 0-.804-.683-1.456-1.524-1.456zm0-7.278l-.154.005c-.744.047-1.116.45-1.116 1.208v3.64c0 .808.424 1.212 1.27 1.212l.154-.005c.744-.047 1.116-.45 1.116-1.208V4.296c0-.808-.424-1.213-1.27-1.213z"/></symbol></svg>', t
    }

    function Mi() {
        let t = "";
        return t += '<div class="v-toolbar v-focus-search"><div class="v-btn nav-center">' + lt("icoNavCenter", 20, 20, Qr) + '</div><div class="v-btn print">' + lt("icoPrint", 20, 19, Qr) + '</div><div class="v-btn-group prs"><div ' + 'd-btn-group="prs" class="v-btn paragraph-nav">' + lt("icoParagraphNav", 20, 20, Qr) + "</div><div " + 'd-btn-group="prs" class="v-btn spotlight">' + lt("icoSpotlight", 18, 20, Qr) + "</div><div " + 'd-btn-group="prs" class="v-btn laser-pointer">' + lt("icoLaserPointer", 18, 20, Qr) + '</div></div><div class="v-toolbar-spliter"></div><div class="v-btn color-scheme">' + lt("icoDarkMode", 18, 18, Qr) + '</div><div class="v-btn font-theme">' + lt("icoFont", 20, 18, Qr) + "</div></div>", t += '<div class="v-chapter-nav v-focus-search"><div class="v-chapter-nav-prev">' + lt("icoPrevChapter", 10, 15, Qr, "position: absolute; top: 18px; left: 15px;") + '<div class="v-chapter-nav-prev-text"></div></div><div class="v-chapter-nav-doc-title">Document title</div><div class="v-chapter-nav-current"></div><div class="v-chapter-nav-next"><div class="v-chapter-nav-next-text">next</div>' + lt("icoNextChapter", 10, 15, Qr, "position: absolute; top: 18px; right: 15px;") + "</div></div>", t
    }

    function Hi() {
        let t = "";
        return t += '<div class="v-nav-center v-float-card"><div class="v-nav-center-header"><div class="v-search-by-keyword"></div><div class="v-segment toc"></div><div class="v-toc-history-title">访问历史</div></div><div class="v-nav-center-body"><div class="v-toc-catalog-body" d-catalog-empty="( Catalog is Empty )"></div><div class="v-toc-filter-result catalog"></div><div class="v-toc-filter-result figure"></div><div class="v-toc-filter-result table"></div><div class="v-toc-filter-result media"></div><div class="v-toc-filter-result codeblock"></div><div class="v-toc-history-result"></div></div><div class="v-nav-center-footer"></div><div class="v-doc-lib-board"><div class="item"></div><div class="flip"></div><div class="flip"></div></div></div>', t += '<div class="v-toc-handle"></div>', t
    }

    function zi() {
        let t = "";
        return t += '<div class="v-spotlight"><div></div></div>', t += '<div class="v-font-theme"><div style="display: inline-block; margin: 0 0 30px 0;"><img alt="系统默认" class="v-font-theme-opt-local" src="https://madmaxchow.gitee.io/vlook/pic/fs-local.png" srcset="https://madmaxchow.gitee.io/vlook/pic/fs-local@2x.png 2x"><div class="v-fontinfo-local"><div class="v-font-package">Font</div><div id="fontset-status">Ready</div></div></div><div style="display: inline-block; margin: 0 0 30px 10px;"><img alt="小清新" class="v-font-theme-opt-sans" src="https://madmaxchow.gitee.io/vlook/pic/fs-sans.png" srcset="https://madmaxchow.gitee.io/vlook/pic/fs-sans@2x.png 2x"><div class="v-fontinfo-sans"><div class="v-font-package">Font</div><div id="fontset-status">NOT LOADED</div></div></div><div style="display: inline-block; margin: 0 0 30px 10px;"><img alt="文艺范" class="v-font-theme-opt-serif" src="https://madmaxchow.gitee.io/vlook/pic/fs-serif.png" srcset="https://madmaxchow.gitee.io/vlook/pic/fs-serif@2x.png 2x"><div class="v-fontinfo-serif"><div class="v-font-package">Font</div><div id="fontset-status">NOT LOADED</div></div></div><div class="v-font-theme-info">Download Font Package</div></div>', t += '<div class="v-fig-nav v-backdrop-blurs"><div class="v-fig-content"></div><div class="v-fig-nav-title"></div><div class="v-fig-nav-btns prev">' + lt("icoPrevFig", 12, 54, Qr) + '</div><div class="v-fig-nav-btns next">' + lt("icoNextFig", 12, 54, Qr) + '</div><div class="v-btn-close-figure-nav">' + lt("icoClose", 16, 16, Qr) + "</div>" + ot() + "</div>", t += '<div class="v-foot-note-panel"><div class="v-foot-note-panel-content"></div><div class="v-foot-note-panel-header"></div><div class="v-foot-note-panel-all"><a>查看所有脚注</a></div><a id="vk-footer-area"></a></div>', t += '<div class="v-content-assistor v-float-card"><div class="v-btn assistor open-in-figure-nav">' + lt("icoOpenInFigureNav", 16, 14, Qr) + '</div><div class="v-btn assistor table-cross">' + lt("icoTableCross", 16, 14, Qr) + '</div><div class="v-btn assistor copy">' + lt("icoCopy", 16, 16, Qr) + '</div><div class="v-btn assistor pic-in-pic">' + lt("icoPicInPic", 16, 16, Qr) + "</div></div>", t += '<div class="v-pic-in-pic"><div class="v-pip-btn v-zoom zoom-out v-float-card">' + lt("icoZoomIn", 16, 16, "theme") + '</div><div class="v-pip-btn v-close zoom-out v-float-card">' + lt("icoResetInput", 16, 16, "theme") + '</div><div class="v-content"></div></div>', t += '<div class="v-tool-tips"></div><div class="v-info-tips v-float-card"></div>', t += '<div class="v-more-doc-content-before cover"></div><div class="v-more-doc-content-after"></div>', t += '<div d-direction="1" class="v-table-cross left-up">&nbsp;</div><div d-direction="2" class="v-table-cross right-up">&nbsp;</div><div d-direction="3" class="v-table-cross left-down">&nbsp;</div><div d-direction="4" class="v-table-cross right-down">&nbsp;</div>', t += '<div class="v-content-expander"><div class="v-btn"><span></span>' + lt("icoExtend", 20, 20, Qr) + "</div></div>", t += '<div class="v-link-error-list v-float-card"><div class="v-link-error-list-header"></div><div class="v-link-error-list-body"><div class="v-link-error-list-items"></div></div><div class="v-link-error-list-footer"></div></div><div class="v-status-bar v-float-card v-backdrop-blurs v-focus-search"><div class="v-doc-info">- - / - -</div><div class="v-zoom-view">- Zoom +</div><div class="v-link-chk-result">' + lt("icoLoading", 16, 16, Qr) + "</div></div>", t += '<iframe name="vlook-stat-gitee" style="display: block; margin: 0; border: none; overflow: hidden; width: 100%; height: 0;"></iframe>', t += '<div class="v-doc-lib v-float-card"><iframe name="vlook-doc-lib"></iframe></div>', t
    }

    function Oi() {
        $(".v-vlook-inside").after(Ci() + Li() + Mi() + Hi() + zi())
    }

    function Ai() {
        function t(t, e, n) {
            setTimeout((function () {
                let n = new Vt;
                n.st("* thread * [" + t + "]"), typeof e === Wr && e(), n.ed(Ki)
            }), n)
        }
        Vi.st("* Browser Check"), Yc.browser.Chrome === Ni && Yc.browser.Firefox === Ni && Yc.browser.Safari === Ni && o(["为获得最佳兼容性，建议使用 Chrome / Firefox / Edge 浏览器", "For best compatibility, it is recommended to use Chrome / Firefox / Edge browser"][as]), Vi.ed(Ki), X();
        let n = z("radius");
        "small" === n || "big" === n ? F([yc, kc, xc, Tc, $c], n) : n === vl && F([yc, kc, xc, Tc, $c]), t("Quote Unite Columns Height", (function () {
            an()
        }), 1e3), t("Paragraph Nav", (function () {
            ne.init()
        }), 100), Vi.st("* Write Ready"), c(b(), "v-load-done v-focus-search"), Vi.ed(Ki), t("External Link", (function () {
            Tt()
        }), 100), t("Hotkey", (function () {
            wt()
        }), 150), t("Restyle", (function () {
            Y()
        }), 200), t("Check Hash Link", (function () {
            ge(), we()
        }), 250), t("Color Scheme", (function () {
            re.scheme = R("--v-color-scheme").x(), e("    System [ " + re.scheme + " ]"), re.init();
            let t = z("cs");
            t === Qr || t === ga ? (e("    Force use [ " + t + " ]"), re.tg(t)) : re.scheme === ga && re.tg(re.scheme)
        }), 300), t("Push Stat", (function () {
            Mt(Di - Pi)
        }), 350), t("Content Assistor", (function () {
            Kt(), _t(), z("tr") !== gl && vn()
        }), 400), t("Redirect to Hash", (function () {
            let t = E();
            w() === Ii && t === Ni && (Nc.catalog.currentHeaderIndex = 0, ut(), an())
        }), 450), t("Words count", (function () {
            pe()
        }), 500), Vi.st(), e("* Welcome Page Done (" + $s + ")"), Ft(), Vi.ed(va), Di = Vi.stop() - 200, e("=== !!! MAIN PROCESS DONE !!! ==="), e("TOTAL COST   ⏱ " + Di + " ms"), e("    ├ HTML   ⏱ " + Pi + " ms"), e("    └ VLOOK  ⏱ " + (Di - Pi) + " ms")
    }
    let Si = "V15.1",
        Vi = new Vt,
        Ii, Fi = !0,
        Ni = !1,
        Pi = 0,
        Di = 0,
        Wi = Ni,
        Ei = null,
        Ki = "    ",
        Ri = "absolute",
        qi = "actived",
        Ui = "alt",
        _i = "audio",
        ji = "animation",
        Bi = "auto",
        Zi = "autoplay",
        Gi = "background",
        Xi = "background-color",
        Yi = "background-image",
        Ji = "before-print-width",
        Qi = "before-print-max-width",
        to = "block",
        eo = "blockquote",
        no = "bold",
        io = "border",
        oo = "border-bottom-right-radius",
        ao = "border-color",
        ro = "border-radius",
        lo = "border-top-left-radius",
        co = "border-top-right-radius",
        so = "border-width",
        uo = "bottom",
        ho = "<br>",
        fo = "bubble",
        po = ".v-cap-1",
        vo = ".v-cap-2",
        mo = "v-accent-btn",
        go = "v-actor-key-sys",
        bo = "v-actor-ext-sys",
        wo = "v-audio-mini-control",
        yo = "v-badge-value",
        $o = "v-blockquote-folder",
        ko = ".v-btn, .v-btn-group",
        xo = ".v-btn.assistor",
        To = "v-cap-cntr",
        Co = "v-caption.mermaid",
        Lo = "CodeMirror-line",
        Mo = "v-content-expander",
        Ho = "v-cursor-laser",
        zo = "md-fences",
        Oo = "v-float-card",
        Ao = "v-fig",
        So = ".v-fig-nav-btns",
        Vo = "v-focus-search",
        Io = "v-toc-history",
        Fo = "v-img-invert-dark",
        No = "v-mermaid-restyler",
        Po = "v-nav-center-block",
        Do = "v-nav-center-float",
        Wo = "v-pg-current-item",
        Eo = ".v-pip-btn",
        Ko = "v-rb-coat",
        Ro = "v-segment-btn",
        qo = ".v-table-cross",
        Uo = "v-table-cross-cell",
        _o = "v-tbl-row-g-not-folder",
        jo = ".v-tbl-row-g-btn",
        Bo = "v-tbl-row-num-hidden",
        Zo = "v-tbl-col-fmt-mark",
        Go = "v-tbl-col-fmt-num-negative",
        Xo = "v-tbl-col-fmt-num-positive",
        Yo = "cssText",
        Jo = "v-textfield-focus",
        Qo = "v-th-repeater",
        ta = ".v-toc-folder",
        ea = "v-toc-filter-result",
        na = "v-toc-item",
        ia = "v-toc-item-current",
        oa = "v-transition-all",
        aa = "checked",
        ra = "class",
        la = "click",
        ca = "codeblock",
        sa = "color",
        da = "colspan",
        ua = "content",
        ha = "controls",
        fa = "cursor",
        pa = "color-scheme",
        va = "    COST ",
        ma = "cover",
        ga = "dark",
        ba = "darksrc",
        wa = "darksrcset",
        ya = "d-anchor",
        $a = "d-before-print-folded",
        ka = "d-blockquote-folded",
        xa = "d-btn-group",
        Ta = "d-cap-count",
        Ca = "d-catalog-empty",
        La = "d-cell-merge",
        Ma = "data-clipboard-text",
        Ha = "d-colspan",
        za = "d-column-fmting",
        Oa = "d-cntr",
        Aa = "d-content-expanded",
        Sa = "d-content-folded",
        Va = "d-content-type",
        Ia = "d-default",
        Fa = "d-extend",
        Na = "d-fig-num",
        Pa = "d-fig-type",
        Da = "d-folded",
        Wa = "d-folder",
        Ea = "d-folder-id",
        Ka = "d-folding-quote",
        Ra = "data-for-search",
        qa = "d-darksrc",
        Ua = "d-duration",
        _a = "d-fig-grid",
        ja = "d-header-num",
        Ba = "d-history",
        Za = "d-icon",
        Ga = "d-id-fig-type",
        Xa = "d-keyword-match",
        Ya = "d-lmc",
        Ja = "d-node",
        Qa = "d-parent-folder-id",
        tr = "d-pid",
        er = "d-quote-group",
        nr = "data-ref",
        ir = "d-row-folded",
        or = "d-row-open-mode",
        ar = "d-src-",
        rr = "d-src-dark",
        lr = "d-src-light",
        cr = "d-srcset-",
        sr = "d-srcset-dark",
        dr = "d-srcset-light",
        ur = "d-td2th",
        hr = "d-title",
        fr = "d-id",
        pr = "d-ident-level",
        vr = "d-img-fill",
        mr = "d-pause",
        gr = "d-pg-idx",
        br = "d-result",
        wr = "d-rb-coat-data",
        yr = "d-rb-coat-showed",
        $r = "d-row-group",
        kr = "d-tbl-col",
        xr = "d-th-rpt",
        Tr = "d-tips",
        Cr = "disabled",
        Lr = "display",
        Mr = "effect",
        Hr = "enabled",
        zr = "error",
        Or = "Failed [ ",
        Ar = "false",
        Sr = "fig",
        Vr = "fill",
        Ir = "filter",
        Fr = "float",
        Nr = "font-theme",
        Pr = "footnotes-area",
        Dr = "freeze",
        Wr = "function",
        Er = "height",
        Kr = "hidden",
        Rr = "hover",
        qr = "hover-action",
        Ur = "href",
        _r = "id",
        jr = "in-start",
        Br = "Interactive",
        Zr = "invert",
        Gr = "italic",
        Xr = "lang",
        Yr = "laser-pointer",
        Jr = "left",
        Qr = "light",
        tl = "line",
        el = "loading",
        nl = "loop",
        il = "margin",
        ol = "margin-bottom",
        al = "margin-left",
        rl = "max-height",
        ll = "max-width",
        cl = "md-toc",
        sl = "min",
        dl = "mini",
        ul = "min-width",
        hl = "mouseup",
        fl = "name",
        pl = "nav-center",
        vl = "none",
        ml = "normal",
        gl = "off",
        bl = "opacity",
        wl = "opened",
        yl = "overflow",
        $l = "overflow-x",
        kl = "overflow-y",
        xl = "padding",
        Tl = "padding-bottom",
        Cl = "padding-left",
        Ll = "padding-right",
        Ml = "padding-top",
        Hl = "paragraph-nav",
        zl = "placeholder",
        Ol = "playing",
        Al = "position",
        Sl = "preload",
        Vl = "print",
        Il = "right",
        Fl = "rowspan",
        Nl = "rx",
        Pl = "ry",
        Dl = "selected",
        Wl = "spotlight",
        El = "src",
        Kl = "srcset",
        Rl = "style",
        ql = ".img",
        Ul = ".svg",
        _l = "tabindex",
        jl = "table",
        Bl = "tagName",
        Zl = "target",
        Gl = "text",
        Xl = "text-align",
        Yl = "textLength",
        Jl = "title",
        Ql = "#vlook-toc>.md-toc-item",
        tc = "toolbar-spliter",
        ec = "top",
        nc = "transform",
        ic = "transform-origin",
        oc = "true",
        ac = "ttf",
        rc = "unfreeze",
        lc = "VLOOK-",
        cc = "var(--d-bc)",
        sc = "var(--d-f-c)",
        dc = "var(--mark-bg)",
        uc = "var(--mm-c-cyan-lg)",
        hc = "var(--mm-c-cyan-alt-lg)",
        fc = "var(--mm-c-orange-lg)",
        pc = "var(--mm-c-orange-alt-lg)",
        vc = "var(--mm-c-red-lg)",
        mc = "var(--mm-c-red-alt-lg)",
        gc = "var(--v-nav-center-hidden-left)",
        bc = "var(--v-nav-center-width)",
        wc = "var(--v-r-b)",
        yc = "--v-r-b",
        $c = "--v-r-c",
        kc = "--v-r-s",
        xc = "--v-r-t",
        Tc = "--v-r-tag",
        Cc = "var(--tbl-row-g-alpha)",
        Lc = "vertical-align",
        Mc = "video",
        Hc = "viewBox",
        zc = "visibility",
        Oc = "wait",
        Ac = "width",
        Sc = "woff2",
        Vc = "z-index",
        Ic = "&nbsp;&nbsp;";
    Vi.st(), $.prototype.a = function (t, e) {
        return e === Ii ? this.attr(t) : this.attr(t, e)
    }, $.prototype.c = function (t, e) {
        return e === Ii ? this.css(t) : this.css(t, e)
    }, $.prototype.ck = function (t) {
        this.click(t)
    }, $.prototype.ch = function (t) {
        return this.children(t)
    }, $.prototype.e = function (t) {
        this.each(t)
    }, $.prototype.f = function (t) {
        return this.find(t)
    }, $.prototype.h = function (t) {
        return t === Ii ? this.html() : this.html(t)
    }, $.prototype.ht = function () {
        return this.height()
    }, $.prototype.o = function () {
        return this.offset()
    }, $.prototype.p = function () {
        return this.parent()
    }, $.prototype.t = function (t) {
        return t === Ii ? this.text() : this.text(t)
    }, $.prototype.tg = function (t) {
        this.toggle(t)
    }, $.prototype.tr = function (t) {
        this.trigger(t)
    }, $.prototype.uC = function () {
        return this.unbind(la)
    }, $.prototype.uH = function () {
        return this.unbind(Rr)
    }, $.prototype.w = function () {
        return this.width()
    }, String.prototype.m = function (t) {
        return this.match(t)
    }, String.prototype.r = function (t, e) {
        return this.replace(t, e)
    }, String.prototype.x = function (t) {
        return this.trim(t)
    }, String.prototype.rA = function (t, e) {
        const n = new RegExp(t, "g");
        return this.replaceAll(n, e)
    }, String.prototype.sW = function (t) {
        return this.startsWith(t)
    }, String.prototype.eW = function (t) {
        return this.endsWith(t)
    }, String.prototype.i = function (t) {
        return this.indexOf(t)
    }, String.prototype.l = function (t) {
        return this.toLowerCase(t)
    }, String.prototype.s = function (t, e) {
        return this.substring(t, e)
    }, t(":::::::::::::::::::"), t("!!! " + (devMode === Fi ? "- DEV -" : "RELEASED") + " !!!"), t("::: V15.1 :::"), t(":::::::::::::::::::"), e("=== Load Document ===");
    let Fc = Ii,
        Nc = Ii,
        Pc = Ii,
        Dc = Ii,
        Wc = Ii,
        Ec = Ii,
        Kc = Ii,
        Rc = Ii,
        qc = Ii,
        Uc = Ii,
        _c = Ii,
        jc = Ii,
        Bc = Ii,
        Zc = Ii,
        Gc = Ii,
        Xc = Ii;
    $.prototype.isEmpty = function () {
        return void 0 === this
    }, $.prototype.isHidden = function () {
        let t = this;
        return t !== Ii && (t.c(Lr) === vl || t.c(zc) === Kr || "0" === t.c(bl))
    }, $.prototype.isShowed = function () {
        return !this.isHidden()
    }, $.prototype.wrapText = function (t, e) {
        this.h(t + this.h() + e)
    }, $.prototype.rHTML = function (t, e) {
        this.h(this.h().replace(t, e))
    }, String.prototype.rAfter = function (t, e, n) {
        let i = this,
            o = i.i(t);
        if (o > -1) {
            let t, a;
            return i.s(0, o) + i.s(o, i.length).r(e, n)
        }
        return this
    }, String.prototype.isNumber = function () {
        return /^([-+])*\d+(\.\d+)?$/.test(this)
    }, String.prototype.isPercent = function () {
        return /^([-+])*\d+(\.\d+)?%$/.test(this)
    }, String.prototype.isCurrency = function () {
        return /^(.{1,3}\s)([-+])*\d+(\.\d+)?$/.test(this)
    };
    const Yc = {
        core: function () {
            const t = navigator.userAgent;
            return {
                trident: t.i("Trident") > -1,
                presto: t.i("Presto") > -1,
                webkit: t.i("AppleWebKit") > -1,
                gecko: t.i("Gecko") > -1 && -1 === t.i("KHTML")
            }
        }(),
        device: function () {
            const t = navigator.userAgent;
            return {
                mobile: t.i("Mobile") > -1,
                iOS: t.i("iPhone") > -1,
                android: t.i("Android") > -1 || t.i("Linux") > -1,
                iPhone: t.i("iPhone") > -1,
                iPad: t.i("iPad") > -1
            }
        }(),
        browser: function () {
            const t = navigator.userAgent;
            return {
                Chrome: t.i("Chrome") > -1 || t.i(") CriOS") > -1,
                Firefox: t.i("Firefox") > -1 || t.i(") FxiOS") > -1,
                Safari: t.i("Safari") > -1,
                Edge: t.i(" Edg/") > -1
            }
        }(),
        browserVer: function () {
            const t = navigator.userAgent;
            return {
                Chrome: t.m(/Chrome\/[\d.]+/gi) ? t.m(/Chrome\/[\d.]+/gi)[0].m(/\d+/)[0] : "0",
                Firefox: t.m(/Firefox\/[\d.]+/gi) ? t.m(/Firefox\/[\d.]+/gi)[0].m(/\d+/)[0] : "0",
                Safari: t.m(/Version\/[\d.]+.+Safari\/[\d.]+/gi) ? t.m(/Version\/[\d.]+.+Safari\/[\d.]+/gi)[0].m(/\d+/)[0] : "0",
                Edge: t.m(/Edg\/[\d.]+/gi) ? t.m(/Edg\/[\d.]+/gi)[0].m(/\d+/)[0] : "0"
            }
        }(),
        os: function () {
            const t = navigator.userAgent;
            return {
                Windows: /windows|win32|win64/i.test(t),
                macOS: /macintosh/i.test(t),
                iOS: /iphone os/i.test(t),
                Linux: /linux/i.test(t)
            }
        }(),
        language: function () {
            const t = navigator.language;
            return {
                full: t.l(),
                base: t.s(0, 2),
                subset: t.s(3, t.length)
            }
        }(),
        display: {
            DPR: window.devicePixelRatio
        },
        print: function (e) {
            let n = "::: Environmental :::\n",
                i = n;
            return e || t(n), n = "    ├ Language   [ " + Yc.language.base + (Yc.language.subset.length > 0 ? "_" + Yc.language.subset : "") + " ]\n", i += n, e || t(n), n = "    ├ Device     [ " + (Yc.device.mobile ? "Mobile" : "") + (Yc.device.iOS ? "/iOS" : "") + (Yc.device.android ? "/Android" : "") + (Yc.device.iPhone ? "/iPhone" : "") + (Yc.device.iPad ? "/iPad" : "") + "]\n", i += n, e || t(n), n = "    ├ OS         " + (Yc.os.macOS ? "[ macOS ]" : Yc.os.Windows ? "[ Windows ]" : Yc.os.iOS ? "[ iOS ]" : Yc.os.Linux ? "[Linux]" : "[Others]") + "\n", i += n, e || t(n), n = "    ├ Browser    [ " + (Yc.browser.Chrome ? "Chrome / " + Yc.browserVer.Chrome : "") + (Yc.browser.Firefox ? " Firefox / " + Yc.browserVer.Firefox : "") + (Yc.browser.Safari ? " Safari / " + Yc.browserVer.Safari : "") + (Yc.browser.Edge ? " Edge / " + Yc.browserVer.Edge : "") + " ]\n", i += n, e || t(n), n = "    ├ Core       [ " + (Yc.core.gecko ? "Gecko" : "") + (Yc.core.presto ? "Presto" : "") + (Yc.core.trident ? "Trident" : "") + (Yc.core.webkit ? "WebKit" : "") + " ]\n", i += n, e || t(n), n = "    └ DPR        [ " + Yc.display.DPR + " ]\n", i += n, e || t(n), n = "    └ VLOOK Type [ " + ts + " ]\n", i += n, e || t(n), n = navigator.userAgent + "\n", i += n, e || t(n), i
        },
        printMermaidDPR: function () {
            let e = "::: Mermaid DPR :::\n    ├ DPR of builder  [ " + ou + " ]\n    └ DPR of render   [ " + au + " ]\n";
            return t(e), e
        },
        show: function (t) {
            let e = Yc.print() + Yc.printMermaidDPR() + "\n----------\nPowered by MAX°孟兆\n";
            console.log(e), Ue(t, e, Ni), o(e)
        }
    };
    let Jc = Si,
        Qc = debugMode,
        ts = "max",
        es = [],
        ns = [],
        is = 0,
        os = Ni,
        as = 1,
        rs = Ni,
        ls = 0,
        cs = 0,
        ss = 0,
        ds = 0,
        us = 0,
        hs = 0,
        fs = 0,
        ps = vl,
        vs = [],
        ms = ".v-welcome-page",
        gs = Ii,
        bs = Ii,
        ws = Ii,
        ys = Ni,
        $s = "auto",
        ks = Ii,
        xs = Ii,
        Ts = Ii,
        Cs = Ii,
        Ls = Ii,
        Ms = Ii,
        Hs = Ii,
        zs = Ii,
        Os = Ii,
        As = Ii,
        Ss = Ii,
        Vs = .75,
        Is = 0,
        Fs = 0;
    te.init = function () {
        let t = $(".md-toc");
        if (t.isEmpty()) return te.hideOnError(), Ni;
        let e = t.clone();
        if (t.hide(), e.f(".md-toc-content").a(_r, "vlook-toc"), Nc.catalog.ui.body.append(e), pd = $("#vlook-toc"), pd.isEmpty()) return te.hideOnError(), Ni;
        let n = pd.ch(".md-toc-h1, .md-toc-h2, .md-toc-h3, .md-toc-h4, .md-toc-h5, .md-toc-h6"),
            i = n.length,
            o = w() !== Ii;
        n.e((function (t) {
            let e = $(this); - 1 === e.a(ra).i("md-toc-h6") ? o ? t < i - 1 ? Nc.catalog.add(e) : e.remove() : Nc.catalog.add(e) : e.remove()
        }));
        let a = z("toc");
        return a = a !== Ii ? u(a) : 2, a >= 1 && a <= 5 && pd.ch(".md-toc-h" + a + "[" + "d-node='1'][" + "d-folded='false']").e((function () {
            Nc.catalog.disposeFold($(this).a(_r), "c", Fi)
        })), Fi
    }, te.hideOnError = function () {
        Nc.hide(), i(["文档中没有找到目录信息，请用Typora最新版本导出，并应用最新VLOOK插件", "No [TOC] information was found in the document, export it with the latest version of Typora and apply the latest VLOOK plug-in."][as])
    }, ne.init = function () {
        Dc = new ne(new Fe(Hl)), Dc.toolbar = Fc, $("li>p:only-child").contents().unwrap(), $("h1, h2, h3, h4, h5, h6, ul>li, ol>li, p[class!=md-toc-content][class!=v-cap-1][class!=v-cap-2], figure, .md-diagram-panel, .MathJax_SVG_Display").e((function () {
            let t = $(this);
            t.is(":visible") && 0 === t.ch("p").length && (Dc.add(t), t.dblclick((function () {
                ie()
            })))
        }))
    };
    let Ns = 0;
    re.scheme = Qr, re.schemeBeforePrint = Qr, re.init = function () {
        function t() {
            a.remove(), document.head.append(o)
        }

        function e() {
            o.remove(), document.head.append(a)
        }

        function n(t) {
            t.matches === Fi ? (i(Fi), re.tg(ga)) : (i(Ni), re.tg(Qr))
        }

        function i(n) {
            n === Fi ? (e(), re.scheme = ga) : (t(), re.scheme = Qr), Fc.updateIcons()
        }
        const o = document.querySelector("link#doc-icon-light"),
            a = document.querySelector("link#doc-icon-dark"),
            r = window.matchMedia("(prefers-color-scheme:dark)");
        r.addListener(n), i(r.matches)
    }, re.tg = function (t) {
        t === Ii && (t = re.scheme === Qr ? ga : Qr), re.scheme = t, e("    Switch to ... [ " + re.scheme + " ]"), re.refresh(), Nc.docLib.enabled === Fi && Nc.docLib.reload(re.scheme), e("    DONE!")
    }, re.refresh = function () {
        Fc.updateIcons();
        let t = "--ac-",
            e = "-alt",
            n = "-fade",
            i = "-title",
            o = t + "red",
            a = t + "orange",
            r = t + "yellow",
            l = t + "lime",
            c = t + "green",
            s = t + "aqua",
            d = t + "cyan",
            u = t + "blue",
            h = t + "sea",
            f = t + "steel",
            p = t + "purple",
            v = t + "rose",
            m = t + "pink",
            g = t + "gold",
            b = t + "brown",
            w = t + "gray",
            y = t + "theme1",
            k = t + "theme2",
            x = "--mm-c-",
            T = x + "red",
            C = x + "orange",
            L = x + "yellow",
            M = x + "green",
            H = x + "cyan",
            z = x + "blue",
            O = x + "purple",
            A = x + "pink",
            S = x + "brown",
            V = x + "gray",
            I = "--cm-";
        F(["--v-invert-dark", "--v-brightness-dark", "--d-bc", "--d-bc-tsp", "--d-f-c", "--pn-c", "--pn-c-alt", "--pn-c-tsp", "--blockquote-bg", "--a-color", "--mark-bg", "--tbl-bder", "--tbl-th-bg", "--tbl-td-bg", "--tbl-cell-bder", "--tbl-row-g-alpha", "--toc-h-num-color", "--h-f", "--h-box-shadow", "--h-bg-start", "--h-bg-end", "--code-bg", "--std-code-shadow", "--rb-code-shadow", "--key-bg", "--key-reflect", "--key-shadow", o, o + e, o + n, o + i, a, a + e, a + n, a + i, r, r + e, r + n, r + i, l, l + e, l + n, l + i, c, c + e, c + n, c + i, s, s + e, s + n, s + i, d, d + e, d + n, d + i, u, u + e, u + n, u + i, h, h + e, h + n, h + i, f, f + e, f + n, f + i, p, p + e, p + n, p + i, v, v + e, v + n, v + i, m, m + e, m + n, m + i, g, g + e, g + n, g + i, b, b + e, b + n, b + i, w, w + e, w + n, w + i, y, y + e, y + n, y + i, k, k + e, k + n, k + i, T, T + e, C, C + e, L, L + e, M, M + e, H, H + e, z, z + e, O, O + e, A, A + e, S, S + e, V, V + e, I + "keyword", I + "variable", I + "variable-2", I + "variable-3", I + "tag", I + "attribute", I + "CodeMirror-cursor", I + "string", I + "string-2", I + "comment", I + "header", I + "quote", I + "hr", I + "link", I + "negative", I + "positive", I + "meta", I + "bulidin", I + "bracket", I + "atom", I + "number"], re.scheme === ga ? "dk" : "lg"), li(Fi)
    };
    let Ps = "https://madmaxchow.github.io/openfonts/";
    se.init = function () {
        let e = $(".footnotes-area");
        y() !== Ii ? e.insertBefore(y()) : b().append(e), $("#vk-footer-area").insertBefore(e);
        let n = $("a[name^='ref-footnote-'], a[id^='ref-footnote-']");
        n.removeAttr(Ur), n.uC().ck((function () {
            let e = $(this),
                n = $("a[name='df" + e.a(fl) + "'], a[id='df" + e.a(fl) + "']").p().clone();
            t(n, n.t()), Uc.content.h(n), n.f("a[name^='dfref-footnote'], a[id^='dfref-footnote']").remove(), Uc.show()
        }))
    };
    let Ds = Ii,
        Ws = [],
        Es = z("stsbar"),
        Ks = Ii,
        Rs = Ii,
        qs = Ii,
        Us = Ii,
        _s = Ii,
        js = Ii,
        Bs = Fi,
        Zs = "",
        Gs = Ii,
        Xs = !0,
        Ys = Ii,
        Js = Qc ? 300 : 600,
        Qs = [],
        td = [],
        ed = "table tbody tr",
        nd = Ii,
        id = Ni,
        od = Ii,
        ad = null,
        rd = null,
        ld = 2e3,
        cd = Ii,
        sd = Ii,
        dd = ". ",
        ud = Ni,
        hd = 0,
        fd = Ni,
        pd = Ii,
        vd = [],
        md = 1,
        gd = "h1{{###. }},h2{{### }},h3{{### }},h4{{### }},h5{{### }},h6{{❖ ### }}",
        bd = gd.split(","),
        wd = /h([1-6]){{(.*)(#(0*)(#|zh|ZH|alpha|ALPHA|roman|ROMAN|none)(-min|-sup)?#)(.*)}}/,
        yd = ["", "", "", "", "", ""],
        $d = ["#", "#", "#", "#", "#", "#"],
        kd = [0, 0, 0, 0, 0, 0],
        xd = ["", "", "", "", "", ""],
        Td = ["", "", "", "", "", ""];
    const Cd = 0,
        Ld = 1,
        Md = 2;
    let Hd = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        zd = ["", "十", "百", "千", "万"],
        Od = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        Ad = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        Sd = '<svg width="16px" height="16px" class="v-svg-small-ico"><use xlink:href="#icoFolded" class="v-blockquote-folder-ico"/></svg>&nbsp;',
        Vd = '<svg width="16px" height="16px" class="v-svg-small-ico"><use xlink:href="#icoUnfold" class="v-blockquote-folder-ico"/></svg>&nbsp;',
        Id = 0,
        Fd = Ni,
        Nd = /^(:|\^\^)$/,
        Pd = /^(==|<<)$/,
        Dd = Ni,
        Wd = Ii,
        Ed = Ii,
        Kd = Ii,
        Rd = /^\[(\s|x|-)](\s.+)*/,
        qd = 0,
        Ud = /^>+(\s)./,
        _d = /(&gt;)+(\s)/,
        jd = "> ",
        Bd = [],
        Zd = [],
        Gd = '<svg width="16px" height="16px" class="v-svg-small-ico"><use xlink:href="#icoFolded" class="v-rowgroup-folder-ico"/></svg>',
        Xd = '<svg width="16px" height="16px" class="v-svg-small-ico"><use xlink:href="#icoUnfold" class="v-rowgroup-folder-ico"/></svg>',
        Yd = /^(##\s).+/,
        Jd = lt("icoLoading", 16, 16, Qr),
        Qd = lt("icoPlay", 16, 16, Qr),
        tu = lt("icoPause", 16, 16, Qr),
        eu = lt("icoStop", 16, 16, Qr),
        nu = lt("icoForbidden", 16, 16, Qr),
        iu = Ii,
        ou = 1,
        au = 1,
        ru = /^#(.+)#(\((red|orange|yellow|lime|green|aqua|cyan|blue|sea|steel|purple|rose|pink|gold|brown|gray|black|theme1|theme2)\))?$/i,
        lu = 0,
        cu = "theme1",
        su = /^#(.+)\|(.+)#(\((red|orange|yellow|lime|green|aqua|cyan|blue|sea|steel|purple|rose|pink|gold|brown|gray|black|theme1|theme2)(!)?\))?$/i,
        du = /^(.*)({{.+}}|%.+%|\${.+}|#{.+}|\$.+\$|var\(.+\))(.*)$/i,
        uu = "gray",
        hu = 0,
        fu = /^>\((red|orange|yellow|lime|green|aqua|cyan|blue|sea|steel|purple|rose|pink|gold|brown|gray|theme1|theme2)(!)?\)$/i,
        pu = "theme1!",
        vu = /^\*{(.*)}\(([^"]+)(\s"(red|orange|yellow|lime|green|aqua|cyan|blue|sea|steel|purple|rose|pink|gold|brown|gray|theme1|theme2)")?\)$/,
        mu = "gray",
        gu = /^{(.+)}\((.+)\)$/i;
    $(document).ready((function () {
        $("#VLOOK").remove(), x(), z("type") === dl && (ts = dl, L("doc-lib-title", M())), e("- Ready"), Pi = Vi.ed(Ki), Yc.print(), Vi.st(), e("=== Load VLOOK ==="), yt(), Oi(), Vi.st("* Effect");
        let n = z(Mr);
        is = n === Ii ? 2 : u(n), is = Yc.device.mobile ? 0 : is, t("    └ Level [ " + is + " ]"), mt(), Vi.ed(va), b().hide(), Vi.st("* Welcome Page Init");
        let i = z("ws");
        if (i = i === Ii ? Bi : i, t("    └ mode: " + i), It(i), Z() === Ni) return $(".v-welcome-page").hide(), $(".v-toolbar").hide(), void $(".v-btn").hide();
        Vi.ed(va), Vi.st("* Intance"), G(), Vi.ed(va), setTimeout(Ai, 100)
    })), document.fonts.ready.then((function () {
        t("!!! ALL FONT READY !!!")
    }))
}();
//# sourceMappingURL=vlook-min.js.map