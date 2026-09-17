import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Events.vue
var _sfc_main = {
	__name: "Events",
	__ssrInlineRender: true,
	setup(__props) {
		const team = [
			{
				no: "No. 01",
				name: "Eleanor Marsh",
				role: "Founder · Master Colourist",
				notes: "Balayage · Grey blending · Redken Master",
				years: "18 yrs",
				tag: "Founder",
				tagColor: "bg-brand-700 text-cream-50",
				swatch: "linear-gradient(135deg, #f4dcd2 0%, #bd6c79 60%, #5f2a37 100%)",
				initial: "E"
			},
			{
				no: "No. 02",
				name: "Iris Whittaker",
				role: "Senior Stylist",
				notes: "Precision cuts · Curtain bangs · Curl specialist",
				years: "11 yrs",
				tag: "Senior",
				tagColor: "bg-accent-500 text-cream-50",
				swatch: "linear-gradient(135deg, #f4e8cf 0%, #c2953d 55%, #604718 100%)",
				initial: "I"
			},
			{
				no: "No. 03",
				name: "Saoirse Doyle",
				role: "Colour Technician",
				notes: "Lived-in blondes · Foilyage · Toning",
				years: "9 yrs",
				tag: "Colour",
				tagColor: "bg-scent-rose text-cream-50",
				swatch: "linear-gradient(135deg, #fbeee8 0%, #d99aa3 55%, #7a3645 100%)",
				initial: "S"
			},
			{
				no: "No. 04",
				name: "Theo Ainsworth",
				role: "Stylist · Bridal",
				notes: "Updos · Editorial finishing · On-location",
				years: "7 yrs",
				tag: "Bridal",
				tagColor: "bg-scent-cedar text-cream-50",
				swatch: "linear-gradient(135deg, #f1ebe5 0%, #c8b9ac 55%, #5a4c42 100%)",
				initial: "T"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "team",
				class: "py-24 lg:py-32 bg-cream-50"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5"><div class="max-w-lg"><p class="eyebrow text-brand-600 mb-5">The Team</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display"> Stylists who <span class="italic font-normal text-brand-700">listen</span> first. </h2></div><a href="#book" class="inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1"> Book with a stylist <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"><!--[-->`);
			ssrRenderList(team, (member) => {
				_push(`<article class="group cursor-pointer"><div class="relative aspect-square overflow-hidden mb-5" style="${ssrRenderStyle({ background: member.swatch })}"><div class="absolute inset-0 opacity-[0.08]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, white 1px, transparent 1px)",
					"background-size": "18px 18px"
				})}"></div><span class="${ssrRenderClass([member.tagColor, "absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold"])}">${ssrInterpolate(member.tag)}</span><span class="absolute top-4 right-4 px-2.5 py-1 bg-cream-50/95 text-warm-800 text-[10px] tracking-[0.2em] uppercase font-semibold">${ssrInterpolate(member.years)}</span><div class="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105"><div class="relative w-28 h-28 rounded-full bg-cream-50/85 flex items-center justify-center shadow-inner"><p class="font-display italic text-5xl text-brand-700 tracking-display">${ssrInterpolate(member.initial)}</p></div></div></div><p class="eyebrow text-warm-400 mb-2">${ssrInterpolate(member.no)}</p><h3 class="font-display text-xl font-medium text-warm-900 tracking-display mb-1 leading-snug group-hover:text-brand-700 transition-colors">${ssrInterpolate(member.name)}</h3><p class="text-sm text-warm-700 mb-3">${ssrInterpolate(member.role)}</p><p class="text-xs text-warm-500 italic leading-relaxed mb-4">${ssrInterpolate(member.notes)}</p><span class="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-700 group-hover:underline">Book ${ssrInterpolate(member.name.split(" ")[0])}</span></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Events.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
