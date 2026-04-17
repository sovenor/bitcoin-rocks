/**
 * JsonLd — render a JSON-LD <script> tag for Schema.org structured data.
 *
 * Accepts any value `JSON.stringify()` can handle (plain objects, arrays,
 * null, string/number/boolean). We deliberately avoid a narrow type
 * union here: every schema builder in `lib/schema/*` returns a plain
 * record-with-unknown-values, and forcing a stricter shape at the JSX
 * site just creates noise without catching real bugs.
 *
 * Escapes `</` sequences so a malicious translated string can never
 * close the script tag and inject arbitrary markup.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JsonLd({ data }: { data: any }) {
	if (data == null) return null;
	const json = JSON.stringify(data).replace(/</g, "\\u003c");
	return (
		<script
			type="application/ld+json"
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: json }}
		/>
	);
}
