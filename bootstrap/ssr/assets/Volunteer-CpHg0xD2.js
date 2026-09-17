import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Volunteer.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<section${ssrRenderAttrs(mergeProps({
		id: "book",
		class: "relative py-24 lg:py-32 overflow-hidden bg-brand-gradient"
	}, _attrs))}><div class="absolute -top-20 -right-10 w-[480px] h-[480px] rounded-full bg-accent-400/20 blur-3xl"></div><div class="absolute -bottom-32 -left-10 w-[420px] h-[420px] rounded-full bg-brand-400/25 blur-3xl"></div><div class="absolute inset-0 opacity-[0.05]" style="${ssrRenderStyle({
		"background-image": "radial-gradient(circle, white 1px, transparent 1px)",
		"background-size": "40px 40px"
	})}"></div><div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-cream-50"><div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-8"><svg class="w-6 h-auto animate-snip" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "transform-origin": "70% 70%" })}"><path d="M20 80 L65 35" stroke="#fdf8f5" stroke-width="5" stroke-linecap="round"></path><path d="M20 20 L65 65" stroke="#fdf8f5" stroke-width="5" stroke-linecap="round"></path><circle cx="45" cy="50" r="3.5" fill="#c2953d"></circle><circle cx="14" cy="82" r="9" stroke="#fdf8f5" stroke-width="4" fill="none"></circle><circle cx="14" cy="18" r="9" stroke="#fdf8f5" stroke-width="4" fill="none"></circle></svg></div><p class="eyebrow text-accent-200 mb-6">Book a chair</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] mb-7 tracking-display"> Find a slot that <span class="italic font-normal text-accent-200">fits</span> your week. </h2><p class="text-cream-100/75 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"> Online booking is open seven days a week. New here? Pop your email below and we&#39;ll send a quick consultation form so your first appointment starts already understood. </p><form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"><input type="email" placeholder="your@email.com" class="flex-1 px-5 py-4 text-sm bg-white/5 border border-white/25 text-cream-50 placeholder:text-cream-100/40 focus:outline-none focus:border-accent-300 transition"><button type="submit" class="px-8 py-4 bg-cream-50 text-brand-900 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-cream-100 transition-colors whitespace-nowrap"> Request a slot </button></form><p class="text-cream-100/40 text-xs mt-5">We reply within one working day. Or call us — we love a chat.</p></div></section>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Volunteer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Volunteer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { Volunteer_default as default };
