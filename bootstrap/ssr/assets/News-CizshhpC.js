import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { createBlock, createTextVNode, createVNode, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Home/Partials/News.vue
var _sfc_main = {
	__name: "News",
	__ssrInlineRender: true,
	setup(__props) {
		const journal = [
			{
				date: "12 May 2026",
				title: "Our spring colour edit: copper, caramel and quiet brunette",
				excerpt: "Eleanor walks through the four shades booking out fastest this season — what they suit, how to maintain them, and what to bring to your consultation.",
				tag: "Colour"
			},
			{
				date: "02 May 2026",
				title: "A proper bond-builder routine for over-processed hair",
				excerpt: "Olaplex No. 0 to No. 9, and what to actually use day to day. A practical guide for anyone whose hair has had a hard year.",
				tag: "Hair Care"
			},
			{
				date: "18 Apr 2026",
				title: "Bridal trials are now open for summer weddings",
				excerpt: "Limited Saturday slots through to August. Bring your veil, your accessories and a couple of references — we will do the rest.",
				tag: "Bridal"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "journal",
				class: "py-24 lg:py-32 bg-cream-100"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-5"><div class="max-w-lg"><p class="eyebrow text-brand-600 mb-5">The Journal</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display"> Notes from <span class="italic font-normal text-brand-700">the chair.</span></h2></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/news-updates",
				class: "inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Read the journal <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
					else return [createTextVNode(" Read the journal "), (openBlock(), createBlock("svg", {
						class: "w-3 h-3",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M9 5l7 7-7 7"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid md:grid-cols-3 gap-x-8 gap-y-12"><!--[-->`);
			ssrRenderList(journal, (item) => {
				_push(`<article class="group cursor-pointer"><div class="aspect-[4/3] mb-6 overflow-hidden" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #fbeee8 0%, #d99aa3 60%, #5f2a37 100%)" })}"><div class="w-full h-full opacity-[0.08]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, #181311 1px, transparent 1px)",
					"background-size": "22px 22px"
				})}"></div></div><div class="flex items-center justify-between mb-3"><span class="eyebrow text-accent-500">${ssrInterpolate(item.tag)}</span><time class="text-xs text-warm-400">${ssrInterpolate(item.date)}</time></div><h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-3 leading-snug group-hover:text-brand-700 transition-colors">${item.title ?? ""}</h3><p class="text-sm text-warm-600 leading-relaxed mb-5">${ssrInterpolate(item.excerpt)}</p><span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700"> Read on <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/News.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
