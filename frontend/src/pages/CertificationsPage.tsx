const certifications = [
  {
    standard: "ISO 9001:2015",
    title: "Quality Management System",
    certNo: "QSR/QS/2603392923",
    issued: "23-03-2026",
    surveillance: "Per certification cycle (annual surveillance as scheduled by QSR)",
    expiry: "22-03-2029",
    scope:
      "Manufacturing of plastic bio-medical and bio-degradable compostable waste bags and other packaging goods",
    body: "QSR (Quality System Registrars)",
    pdfLabel: "Certificate PDF",
    pdfHref: "#",
  },
  {
    standard: "ISO 13485:2016",
    title: "Medical devices — QMS",
    certNo: "IN01232718",
    issued: "25-03-2026",
    surveillance: "Per certification cycle (per US Certification body schedule)",
    expiry: "24-03-2029",
    scope:
      "Manufacturing of plastic bio-medical and bio-degradable compostable waste bags and other packaging goods (medical device QMS context)",
    body: "US Certification body",
    pdfLabel: "Certificate PDF",
    pdfHref: "#",
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-swaroop-50/80 to-white">
      <main className="max-w-6xl mx-auto px-4 py-14">
        <header className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-swaroop-600 mb-2">
            Compliance &amp; quality
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Certifications
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Swaroop Formulation Industries maintains internationally recognized quality
            certifications for manufacturing of biodegradable and biomedical packaging.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert) => (
            <article
              key={cert.certNo}
              className="bg-white rounded-2xl border border-swaroop-100 shadow-lg shadow-swaroop-100/40 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-swaroop-600 to-swaroop-700 px-6 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 text-white font-black text-sm ring-2 ring-white/30">
                    ISO
                  </span>
                  <div>
                    <p className="text-white font-bold leading-tight">{cert.standard}</p>
                    <p className="text-swaroop-100 text-xs mt-0.5">{cert.title}</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold text-white/90 bg-white/10 px-2 py-1 rounded-md">
                  Active
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col gap-4 text-sm text-gray-700">
                <dl className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="font-medium text-gray-500">Certificate number</dt>
                    <dd className="font-mono text-gray-900">{cert.certNo}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="font-medium text-gray-500">Issue date</dt>
                    <dd>{cert.issued}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="font-medium text-gray-500">Surveillance</dt>
                    <dd className="text-gray-600">{cert.surveillance}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="font-medium text-gray-500">Valid until</dt>
                    <dd className="font-semibold text-swaroop-800">{cert.expiry}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="font-medium text-gray-500">Issuing body</dt>
                    <dd>{cert.body}</dd>
                  </div>
                </dl>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Scope
                  </p>
                  <p className="text-gray-600 leading-relaxed">{cert.scope}</p>
                </div>

                <div className="pt-2 mt-auto">
                  <a
                    href={cert.pdfHref}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-lg bg-swaroop-600 text-white font-semibold text-sm hover:bg-swaroop-700 transition shadow-md shadow-swaroop-200"
                  >
                    {cert.pdfLabel}
                  </a>
                  <p className="text-xs text-gray-400 mt-2">
                    PDF assets can be linked here when hosted in Level 3+.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-dashed border-swaroop-200 bg-swaroop-50/50 p-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Add certificate</h2>
            <p className="text-sm text-gray-600 mb-6">
              Upload new standards, renewal dates, and scope documents.{" "}
              <span className="font-semibold text-swaroop-700">Coming in Level 3</span>{" "}
              — form actions are disabled for now.
            </p>
            <form className="grid sm:grid-cols-2 gap-4 text-left opacity-60 pointer-events-none">
              <label className="block text-xs font-medium text-gray-600">
                Standard
                <input
                  type="text"
                  disabled
                  placeholder="e.g. ISO 14001:2015"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white"
                />
              </label>
              <label className="block text-xs font-medium text-gray-600">
                Certificate number
                <input
                  type="text"
                  disabled
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white"
                />
              </label>
              <label className="block text-xs font-medium text-gray-600">
                Issue date
                <input type="date" disabled className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white" />
              </label>
              <label className="block text-xs font-medium text-gray-600">
                Expiry date
                <input type="date" disabled className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white" />
              </label>
              <label className="sm:col-span-2 block text-xs font-medium text-gray-600">
                Scope
                <textarea
                  disabled
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white resize-none"
                />
              </label>
              <label className="sm:col-span-2 block text-xs font-medium text-gray-600">
                PDF upload
                <input type="file" accept=".pdf" disabled className="mt-1 block w-full text-sm" />
              </label>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500 border-t border-gray-100 bg-white">
        Swaroop Formulation Industries Pvt. Ltd. · Chukkusehri, Hasanganj, Unnao, UP 209841
      </footer>
    </div>
  );
}
