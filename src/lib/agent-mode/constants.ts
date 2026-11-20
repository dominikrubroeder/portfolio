// Agent switch: `NEXT_PUBLIC_AGENT_MODE="true"` (set it in the untracked `.env.local`) makes the page
// ready for agents and inspections: animations are forced off before first paint (no typewriter
// intro, scroll reveals show their final state at once, no hover transitions, no snowfall) and are
// not saved to the visitor's storage. `NEXT_PUBLIC_` on purpose: the theme store and `IntroProvider`
// are client code and must agree with the server HTML. Restart `next dev` after changing it.
export const AGENT_MODE = process.env.NEXT_PUBLIC_AGENT_MODE === 'true';
