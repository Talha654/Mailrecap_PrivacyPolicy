import Image from "next/image";
import Link from "next/link";

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function AlertIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}

function MailIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                            <Image
                                src="/logo.jpg"
                                alt="MailRecap Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">MailRecap</span>
                    </div>
                    <nav>
                        <Link
                            href="mailto:support@mailrecap.co"
                            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            Contact Support
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">

                    {/* Document Header Card */}
                    <div className="mb-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Privacy Policy
                        </h1>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500 border-t border-slate-100 pt-6">
                            <div>
                                <span className="block font-medium text-slate-900 mb-1">Version</span>
                                1.2
                            </div>
                            <div>
                                <span className="block font-medium text-slate-900 mb-1">Effective Date</span>
                                December 23, 2025
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <span className="block font-medium text-slate-900 mb-1">Contact</span>
                                <a href="mailto:support@mailrecap.co" className="text-blue-600 hover:underline">support@mailrecap.co</a>
                            </div>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 sm:p-10 prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-ul:my-2 prose-li:my-1">

                        <p className="lead text-xl text-slate-600">
                            Your privacy is our priority. MailRecap is designed from the ground up to minimize the data we store and maximize your control.
                        </p>

                        <p className="text-sm text-slate-500 not-prose border-b border-slate-100 pb-6 mb-8">
                            <strong>Company:</strong> Gamut Creative, LLC (“MailRecap,” “we,” “us”) <br />
                            <strong>Posted at:</strong> <a href="https://mailrecap.co/privacy" className="text-blue-600 hover:underline">mailrecap.co/privacy</a>
                        </p>

                        <h2>1) What MailRecap does</h2>
                        <p>
                            MailRecap helps you capture mail you own or are authorized to manage and provides:
                        </p>
                        <ul className="grid sm:grid-cols-3 gap-4 not-prose my-6">
                            <li className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <strong className="block text-slate-900 mb-1">Summary</strong>
                                <span className="text-sm text-slate-600">A plain-language overview of your document.</span>
                            </li>
                            <li className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <strong className="block text-slate-900 mb-1">Key Details</strong>
                                <span className="text-sm text-slate-600">Up to three items, such as Date, Amount, or Contact.</span>
                            </li>
                            <li className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <strong className="block text-slate-900 mb-1">Next Steps</strong>
                                <span className="text-sm text-slate-600">General informational guidance and common follow-ups.</span>
                            </li>
                        </ul>
                        <p className="text-sm text-slate-500 italic">
                            MailRecap is a document organization and information tool. It is not a law firm and does not provide legal advice.
                        </p>

                        <h2 className="mt-12">2) The most important concept: processing vs. storing</h2>
                        <p>
                            Mail can contain personal information and sometimes sensitive information. MailRecap is designed to minimize what is stored.
                        </p>
                        <ul>
                            <li>We <strong>process</strong> a mail image to extract text (OCR) and generate outputs (Summary, Key Details, Next Steps).</li>
                            <li>We <strong>do not store</strong> the original image after processing is complete (see Retention).</li>
                            <li>We <strong>store only what you choose to keep</strong>—typically the Summary + up to three Key Details + Next Steps, after applying automated PII-minimization steps intended to reduce common sensitive identifiers.</li>
                        </ul>

                        <h2 className="mt-12">3) Information we collect and process</h2>

                        <h3>A) Content you provide</h3>
                        <ul>
                            <li>Mail images you capture or upload in the app (used for processing).</li>
                            <li>Optional labels or notes you add.</li>
                        </ul>

                        <h3>B) Information we generate (outputs)</h3>
                        <ul>
                            <li>Extracted text (OCR) derived from the image (used for processing).</li>
                            <li>PII-minimized text derived from OCR (used to generate outputs).</li>
                            <li>Summary, Key Details, and Next Steps generated from the mail content.</li>
                            <li>Organizational metadata (e.g., category tags, timestamps).</li>
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-6 not-prose flex items-start gap-3">
                            <AlertIcon className="text-amber-600 h-6 w-6 mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-amber-900 text-sm">Important</p>
                                <p className="text-sm text-amber-800 mt-1">
                                    Outputs may be inaccurate, incomplete, or misleading. Always verify the original document.
                                </p>
                            </div>
                        </div>

                        <h3>C) Account and subscription data</h3>
                        <ul>
                            <li>Account identifiers (e.g., email, authentication tokens).</li>
                            <li>Subscription status and purchase confirmations.</li>
                            <li><strong>Payments:</strong> Purchases may be processed by the Apple App Store and/or Google Play (as applicable). We do not store full payment card numbers.</li>
                        </ul>

                        <h3>D) Device and usage data (minimized)</h3>
                        <ul>
                            <li>Device type, OS version, app version.</li>
                            <li>Diagnostics and crash logs.</li>
                            <li>Limited feature usage events (to improve reliability and performance).</li>
                        </ul>

                        <h2 className="mt-12">4) What we store (and what we don’t)</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
                            <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-1.5 bg-red-100 rounded-md text-red-600">
                                        <XIcon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900">We do not store</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-sm text-slate-700">
                                        <span className="block h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                                        <span>The original mail image after processing is complete (except brief technical handling in secure queues/caches).</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-slate-700">
                                        <span className="block h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                                        <span>Full OCR text long-term.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-1.5 bg-teal-100 rounded-md text-teal-600">
                                        <CheckIcon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900">We store (if you save)</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-sm text-slate-700">
                                        <span className="block h-1.5 w-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                                        <span>The Summary and Next Steps you save.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-slate-700">
                                        <span className="block h-1.5 w-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                                        <span>Up to three Key Details you save.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-slate-700">
                                        <span className="block h-1.5 w-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                                        <span>Minimal metadata required to display and manage your saved items.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-slate-700">
                                        <span className="block h-1.5 w-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                                        <span>Account identifiers and subscription status.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-6 not-prose flex items-start gap-3">
                            <AlertIcon className="text-amber-600 h-6 w-6 mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-amber-900 text-sm">PII Warning</p>
                                <p className="text-sm text-amber-800 mt-1">
                                    Saved outputs can still contain personal information if it appears in the source mail and is not detected/removed by automated methods.
                                </p>
                            </div>
                        </div>

                        <h2 className="mt-12">5) PII minimization and redaction (not guaranteed)</h2>
                        <p>
                            We use automated methods intended to reduce common sensitive content before storing outputs (for example, patterns resembling account numbers, long identifier strings, or barcode/tracking-like sequences). Minimization is not guaranteed and may miss content or remove content you wanted to keep. You are responsible for reviewing saved outputs.
                        </p>

                        <h2 className="mt-12">6) How we use information</h2>
                        <p>We use information to:</p>
                        <ul>
                            <li>Provide OCR, summarization, Key Details extraction, and Next Steps generation.</li>
                            <li>Organize saved items and improve usability.</li>
                            <li>Maintain security, prevent abuse, troubleshoot issues, and provide support.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>

                        <h2 className="mt-12">7) Service providers and third-party processing (including AI)</h2>
                        <p>We may use service providers for:</p>
                        <ul>
                            <li>Hosting and infrastructure</li>
                            <li>OCR and summarization (including AI services)</li>
                            <li>Customer support tools</li>
                            <li>Analytics/diagnostics (minimized)</li>
                        </ul>
                        <p>
                            We require service providers to process information only to provide services to MailRecap, subject to their terms and applicable law.
                        </p>

                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl my-6 not-prose">
                            <h4 className="font-semibold text-blue-900 mb-2">No training on user content</h4>
                            <p className="text-sm text-blue-800">
                                We do not use your mail content (including images, extracted text, or saved outputs) to train public models. We do not permit our service providers to use your content to train their models for their general purposes.
                            </p>
                        </div>

                        <p>
                            If you want the current list of core service providers used in production, contact us at <a href="mailto:support@mailrecap.co">support@mailrecap.co</a>.
                        </p>

                        <h2 className="mt-12">8) Sharing</h2>
                        <p>
                            We <strong>do not sell</strong> your mail content.
                        </p>
                        <p>We may share information:</p>
                        <ul>
                            <li>With service providers described above (to operate the app).</li>
                            <li>To comply with law or lawful requests, or to protect rights, safety, and security.</li>
                            <li>In connection with a merger, acquisition, or asset sale (with notice where required).</li>
                        </ul>
                        <p>
                            <strong>Advertising:</strong> MailRecap does not use your mail content for targeted advertising and does not share mail content for cross-context behavioral advertising.
                        </p>

                        <h2 className="mt-12">9) Retention</h2>
                        <p>
                            We retain information only as long as necessary for the purposes described above.
                        </p>
                        <h3>Default retention (Version 1.2):</h3>
                        <ul>
                            <li><strong>Mail images:</strong> deleted after processing is completed, typically immediately after processing and in any event within 24 hours. Brief retention may occur in secure processing queues/caches needed to complete processing and error recovery.</li>
                            <li><strong>Backups:</strong> our systems are designed to exclude mail images from backups.</li>
                            <li><strong>Extracted text (OCR):</strong> used transiently for processing and not stored long-term.</li>
                            <li><strong>Saved outputs (Summary + Key Details + Next Steps):</strong> retained until you delete them, delete your account, or we must retain limited records for support, security, dispute resolution, or legal compliance.</li>
                            <li><strong>Diagnostics logs:</strong> retained for up to 90 days.</li>
                            <li><strong>Backups of saved outputs/account data:</strong> retained on a rolling basis for up to 30 days, then overwritten in the ordinary course.</li>
                        </ul>

                        <h2 className="mt-12">10) Your choices and controls</h2>
                        <ul className="grid sm:grid-cols-3 gap-6 not-prose my-6">
                            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="block text-slate-900 mb-1">Delete saved items</strong>
                                <p className="text-sm text-slate-600">You can delete saved items directly in the app.</p>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="block text-slate-900 mb-1">Delete account</strong>
                                <p className="text-sm text-slate-600">Request account deletion by contacting support.</p>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="block text-slate-900 mb-1">Export</strong>
                                <p className="text-sm text-slate-600">Export your summaries and next steps (where offered).</p>
                            </li>
                        </ul>
                        <p>
                            We may need to retain limited information for security, fraud prevention, dispute resolution, or legal compliance.
                        </p>

                        <h2 className="mt-12">11) Security</h2>
                        <p>
                            We use reasonable administrative, technical, and organizational safeguards designed to protect information, such as encryption in transit and access controls. No system can be guaranteed 100% secure.
                        </p>

                        <h2 className="mt-12">12) Children</h2>
                        <p>
                            MailRecap is not intended for children under 13 (or under 16 where required by law), and we do not knowingly collect personal information from children.
                        </p>

                        <h2 className="mt-12">13) Region-specific notices</h2>
                        <ul>
                            <li><strong>United States (general):</strong> You can request access, correction, or deletion by contacting <a href="mailto:support@mailrecap.co">support@mailrecap.co</a>. We will verify your request as appropriate.</li>
                            <li><strong>California:</strong> You may have rights to request access, deletion, or correction of certain personal information, and to opt out of “sharing” for cross-context behavioral advertising. MailRecap does not share mail content for that purpose. Submit requests to <a href="mailto:support@mailrecap.co">support@mailrecap.co</a>.</li>
                        </ul>

                        <h2 className="mt-12">14) Changes to this policy</h2>
                        <p>
                            We may update this policy. We will update the effective date and provide additional notice where required.
                        </p>

                        <h2 className="mt-12">15) Contact</h2>
                        <p>
                            Questions, support, or privacy requests: <a href="mailto:support@mailrecap.co">support@mailrecap.co</a>
                        </p>

                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white py-12">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-center md:justify-start gap-6">
                            <span className="text-sm text-slate-500">
                                © {new Date().getFullYear()} Gamut Creative, LLC. All rights reserved.
                            </span>
                        </div>
                        <div className="mt-8 md:mt-0 flex justify-center md:justify-end gap-6">
                            <Link href="mailto:support@mailrecap.co" className="text-sm font-medium text-slate-600 hover:text-blue-600">
                                Contact Support
                            </Link>
                            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600">
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
