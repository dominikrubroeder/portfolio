export default function ComponentDrivenDevelopment() {
  return (
    <>
      <section className="grid gap-8">
        <div className="mx-auto grid w-full max-w-screen-lg gap-2 px-4">
          <h2>How i work</h2>
          <h1 className="text-6xl font-bold text-theme-contrary">
            Component-driven Development
          </h1>
        </div>

        <div className="mx-auto grid w-full max-w-screen-lg gap-2 px-4">
          <p>
            Starting on a new, clean project is fun. In best case, all the
            designs and layouts are already prepared – you&apos;re ready to go
            into typing position. Yea, i know, this also sound like wishland to
            me, and it&apos;s often not the reality–sadly.
            <br />
            <br />
            But, at the same time, this
            <span className="mx-1">hasn&apos;t to be the case</span>
            after all. Designing and implementing new feature into standalone
            components can be quite straightforward.
          </p>
        </div>

        <div className="mx-32 mt-32 h-96 animate-fadeUp rounded-2xl bg-gray-5"></div>
      </section>
    </>
  );
}
