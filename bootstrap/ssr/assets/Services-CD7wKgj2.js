import { ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Services.vue
var _sfc_main = {
	__name: "Services",
	__ssrInlineRender: true,
	setup(__props) {
		const services = [
			{
				no: "01",
				title: "Cut & Style",
				desc: "Consultation-led cuts, blow-dries and finishing — for hair you can re-create at home.",
				color: "linear-gradient(135deg, #f4dcd2 0%, #bd6c79 60%, #5f2a37 100%)",
				icon: `<path d="M30 70 L62 38" stroke="#fdf8f5" stroke-width="3" stroke-linecap="round"/>
               <path d="M30 30 L62 62" stroke="#fdf8f5" stroke-width="3" stroke-linecap="round"/>
               <circle cx="48" cy="50" r="2.5" fill="#fdf8f5"/>
               <circle cx="24" cy="72" r="7" stroke="#fdf8f5" stroke-width="3" fill="none"/>
               <circle cx="24" cy="28" r="7" stroke="#fdf8f5" stroke-width="3" fill="none"/>`
			},
			{
				no: "02",
				title: "Colour & Highlights",
				desc: "Balayage, foils, gloss and grey blending using vegan, ammonia-free formulas.",
				color: "linear-gradient(135deg, #f4e8cf 0%, #c2953d 60%, #604718 100%)",
				icon: `<rect x="22" y="22" width="14" height="56" rx="3" fill="#fdf8f5" opacity="0.95"/>
               <rect x="42" y="22" width="14" height="56" rx="3" fill="#fdf8f5" opacity="0.7"/>
               <rect x="62" y="22" width="14" height="56" rx="3" fill="#fdf8f5" opacity="0.45"/>`
			},
			{
				no: "03",
				title: "Treatments",
				desc: "Olaplex, K18 and bond-building masks to bring tired hair back to life.",
				color: "linear-gradient(135deg, #fbeee8 0%, #d99aa3 50%, #7a3645 100%)",
				icon: `<rect x="38" y="12" width="24" height="8" fill="#fdf8f5"/>
               <path d="M34 20 L34 82 Q34 88 40 88 L60 88 Q66 88 66 82 L66 20 Z" fill="#fdf8f5"/>
               <rect x="38" y="42" width="24" height="20" fill="#bd6c79" opacity="0.6"/>`
			},
			{
				no: "04",
				title: "Bridal & Events",
				desc: "Pre-wedding trials, on-the-day styling and group appointments at the salon or on location.",
				color: "linear-gradient(135deg, #f1ebe5 0%, #c8b9ac 50%, #5a4c42 100%)",
				icon: `<ellipse cx="50" cy="44" rx="22" ry="28" stroke="#fdf8f5" stroke-width="3" fill="none"/>
               <rect x="48" y="72" width="4" height="14" fill="#fdf8f5"/>
               <rect x="38" y="84" width="24" height="3" rx="1" fill="#fdf8f5"/>
               <path d="M40 30 L40 50" stroke="#fdf8f5" stroke-width="2" opacity="0.6" stroke-linecap="round"/>`
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "services",
				class: "py-24 lg:py-32 bg-cream-100"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-16 lg:mb-20 max-w-2xl mx-auto"><p class="eyebrow text-brand-600 mb-5">The Menu</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-display leading-[1.05] text-warm-900 mb-6"> Four ways into <span class="italic font-normal text-brand-700">the chair</span></h2><p class="text-warm-600 text-[15px] leading-relaxed"> Cuts, colour, restorative care and event styling — every appointment starts with a free consultation, so we agree on the plan before we begin. </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"><!--[-->`);
			ssrRenderList(services, (service) => {
				_push(`<a href="#book" class="group block"><div class="relative aspect-[4/5] overflow-hidden mb-5" style="${ssrRenderStyle({ background: service.color })}"><div class="absolute inset-0 opacity-[0.08]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, white 1px, transparent 1px)",
					"background-size": "20px 20px"
				})}"></div><div class="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105"><svg class="w-20 h-auto opacity-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">${service.icon ?? ""}</svg></div><p class="absolute top-5 left-5 font-display text-3xl font-medium text-cream-50/95 tracking-display">No. ${ssrInterpolate(service.no)}</p></div><h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-2 group-hover:text-brand-700 transition-colors">${ssrInterpolate(service.title)}</h3><p class="text-sm text-warm-600 leading-relaxed mb-4">${service.desc ?? ""}</p><span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700"> Book ${ssrInterpolate(service.title)} <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Services.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
