import { usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, unref, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/About.vue
var _sfc_main = {
	__name: "About",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "about",
				class: "py-24 lg:py-32 bg-cream-50"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"><div class="lg:col-span-6 order-2 lg:order-1"><div class="relative"><div class="relative aspect-[4/5] w-full overflow-hidden" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #f4dcd2 0%, #bd6c79 55%, #5f2a37 100%)" })}"><div class="absolute inset-0 opacity-10" style="${ssrRenderStyle({
				"background-image": "radial-gradient(circle, #181311 1px, transparent 1px)",
				"background-size": "24px 24px"
			})}"></div><svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><circle cx="150" cy="160" r="62" fill="#fdf8f5" opacity="0.85"></circle><path d="M88 145 Q60 90 95 50 Q135 30 170 45 Q220 65 220 130 Q230 170 235 220 Q245 290 215 360 Q200 380 175 380 L175 220 Q175 200 165 200 L135 200 Q125 200 125 220 L125 380 Q100 380 85 360 Q55 290 65 220 Q72 175 88 145 Z" fill="#181311" opacity="0.85"></path><path d="M110 80 Q120 150 105 240" stroke="#c2953d" stroke-width="2" opacity="0.5" fill="none"></path><path d="M190 80 Q200 160 205 250" stroke="#c2953d" stroke-width="2" opacity="0.5" fill="none"></path><path d="M150 50 Q150 130 150 195" stroke="#d99aa3" stroke-width="2" opacity="0.4" fill="none"></path></svg></div><div class="hidden sm:block absolute -bottom-10 -right-6 lg:-right-12 w-60 bg-cream-50 border border-warm-200 p-6 shadow-md"><p class="font-display italic text-warm-700 text-base leading-snug">&quot;We only book the kind of day where there&#39;s time to chat, time to think, and time to get it right.&quot;</p><p class="eyebrow text-warm-500 mt-3">— Eleanor, founder</p></div></div></div><div class="lg:col-span-6 order-1 lg:order-2"><p class="eyebrow text-brand-600 mb-5">Our Salon</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display mb-8"> Slow chairs,<br><span class="italic font-normal text-brand-700">unhurried colour.</span></h2><p class="text-warm-600 leading-relaxed mb-5 text-[15px]"> Acme Hairdressers opened on Penwortham high street in ${ssrInterpolate(unref(page).props.site.established)} with a simple idea: senior stylists, longer appointments, and proper consultations before anyone picks up the scissors. </p><p class="text-warm-600 leading-relaxed mb-10 text-[15px]"> No assistants finishing your blow-dry, no rushed colour, no upsell. Just six experienced stylists, ammonia-free colour from Davines and Wella, and a chair that&#39;s yours for as long as you need it. </p><div class="flex flex-wrap gap-3 items-center"><a href="#services" class="inline-flex items-center gap-3 px-8 py-4 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors"> Browse the Menu </a><a href="#contact" class="inline-flex items-center gap-2 px-2 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700"> Visit the salon </a></div></div></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/About.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
