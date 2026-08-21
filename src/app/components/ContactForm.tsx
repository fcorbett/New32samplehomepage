import { useId, useState, type FormEvent } from "react";
import { phone } from "../../content/siteFacts";

const HEAR_ABOUT_OPTIONS = [
  "Direct Mail Invitation",
  "Internet",
  "Print Ad",
  "Family/Friend Referral",
  "new32 Team",
  "Email",
] as const;

const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 40,
  comments: 2000,
  hearAbout: 80,
  contactPreference: 20,
} as const;

type ContactPreference = "Email" | "Phone";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactPreference: ContactPreference | "";
  comments: string;
  hearAbout: string;
  /** Honeypot — must stay empty */
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const FIELD_FOCUS_ORDER: (keyof FormState)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "contactPreference",
  "comments",
  "hearAbout",
];

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  contactPreference: "",
  comments: "",
  hearAbout: "",
  website: "",
};

function getEndpoint(): string {
  const fromEnv = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  if (fromEnv && fromEnv.trim()) return fromEnv.trim();
  const base = import.meta.env.BASE_URL || "/";
  const normalized = base.endsWith("/") ? base : `${base}/`;
  return `${normalized}api/contact.php`;
}

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.firstName.trim()) errors.firstName = "First name is required.";
  else if (form.firstName.length > LIMITS.firstName)
    errors.firstName = "First name is too long.";

  if (!form.lastName.trim()) errors.lastName = "Last name is required.";
  else if (form.lastName.length > LIMITS.lastName)
    errors.lastName = "Last name is too long.";

  if (!form.email.trim()) errors.email = "Email is required.";
  else if (form.email.length > LIMITS.email)
    errors.email = "Email is too long.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!form.phone.trim()) errors.phone = "Phone is required.";
  else if (form.phone.length > LIMITS.phone)
    errors.phone = "Phone number is too long.";

  if (!form.contactPreference)
    errors.contactPreference = "Please choose how you’d like to be contacted.";

  if (form.comments.length > LIMITS.comments)
    errors.comments = "Comments are too long.";

  if (form.hearAbout && form.hearAbout.length > LIMITS.hearAbout)
    errors.hearAbout = "Please choose an option from the list.";

  return errors;
}

const labelClass =
  "block text-xs font-semibold tracking-wide uppercase text-[var(--pnw-ink-soft,#5b5646)] mb-1.5";
const inputClass =
  "w-full rounded-md border border-[var(--pnw-border,#ddd2ba)] bg-white px-3 py-2.5 text-sm text-[var(--pnw-ink,#232019)] outline-none transition-colors focus:border-[var(--pnw-moss,#5f6b4f)] focus:ring-1 focus:ring-[var(--pnw-moss,#5f6b4f)] disabled:opacity-60";
const errorClass = "mt-1 text-xs text-[var(--pnw-clay,#a9784f)]";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className = "" }: ContactFormProps) {
  const formId = useId();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedPreference, setSubmittedPreference] = useState<
    ContactPreference | ""
  >("");

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setServerError(null);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      const firstInvalid = FIELD_FOCUS_ORDER.find((key) => nextErrors[key]);
      if (firstInvalid) {
        const idSuffix: Record<keyof FormState, string> = {
          firstName: "first",
          lastName: "last",
          email: "email",
          phone: "phone",
          contactPreference: "pref-email",
          comments: "comments",
          hearAbout: "hear",
          website: "website",
        };
        requestAnimationFrame(() => {
          document.getElementById(`${formId}-${idSuffix[firstInvalid]}`)?.focus();
        });
      }
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(getEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          contactPreference: form.contactPreference,
          comments: form.comments.trim(),
          hearAbout: form.hearAbout,
          website: form.website,
        }),
      });

      let payload: { ok?: boolean; error?: string } = {};
      try {
        payload = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        payload = {};
      }

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setServerError(
          payload.error ||
            "Something went wrong sending your message. Please try again or call us.",
        );
        return;
      }

      setSubmittedPreference(form.contactPreference);
      setStatus("success");
      setForm(emptyForm);
      setErrors({});
    } catch {
      setStatus("error");
      setServerError(
        "We couldn’t reach the server. Please check your connection or call us.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className={`contact-thanks contact-thanks-enter rounded-2xl border border-[var(--pnw-border,#ddd2ba)] bg-[var(--pnw-white,#fffcf6)] px-6 py-10 md:px-10 md:py-12 text-center ${className}`}
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-3xl md:text-4xl text-[var(--pnw-ink,#232019)] mb-3 tracking-tight">
          Thank you
        </p>
        <p className="text-[var(--pnw-ink,#232019)] text-base md:text-lg leading-relaxed max-w-md mx-auto mb-2">
          We’ve received your message at{" "}
          <span className="font-medium">new32 Cosmetic and Family Dentistry</span>.
        </p>
        <p className="text-[var(--pnw-ink-soft,#5b5646)] text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
          Someone from our team will follow up soon
          {submittedPreference
            ? ` by ${submittedPreference.toLowerCase()}`
            : ""}
          . We look forward to connecting with you.
        </p>
        <a
          href={phone.tel}
          className="inline-flex items-center justify-center rounded-full bg-[var(--pnw-moss,#5f6b4f)] px-6 py-3 text-sm font-medium text-[var(--pnw-white,#fffcf6)] hover:bg-[var(--pnw-moss-deep,#333b29)] transition-colors md:rounded-none md:bg-transparent md:px-0 md:py-0 md:font-normal md:text-[var(--pnw-moss,#5f6b4f)] md:underline md:hover:bg-transparent md:hover:text-[var(--pnw-clay,#9a6b4f)]"
        >
          Call {phone.display}
        </a>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setServerError(null);
          }}
          className="mt-6 block mx-auto text-sm underline text-[var(--pnw-ink-soft,#5b5646)] hover:text-[var(--pnw-ink,#232019)] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`contact-form relative flex flex-col gap-5 ${className}`}
      noValidate
      aria-busy={status === "submitting"}
    >
      {/* Honeypot — visually hidden from users */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setField("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor={`${formId}-first`}>
            First name *
          </label>
          <input
            id={`${formId}-first`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            maxLength={LIMITS.firstName}
            required
            disabled={status === "submitting"}
            value={form.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={
              errors.firstName ? `${formId}-first-error` : undefined
            }
          />
          {errors.firstName ? (
            <p id={`${formId}-first-error`} className={errorClass}>
              {errors.firstName}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor={`${formId}-last`}>
            Last name *
          </label>
          <input
            id={`${formId}-last`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            maxLength={LIMITS.lastName}
            required
            disabled={status === "submitting"}
            value={form.lastName}
            onChange={(e) => setField("lastName", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={
              errors.lastName ? `${formId}-last-error` : undefined
            }
          />
          {errors.lastName ? (
            <p id={`${formId}-last-error`} className={errorClass}>
              {errors.lastName}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            Email *
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={LIMITS.email}
            required
            disabled={status === "submitting"}
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone *
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={LIMITS.phone}
            required
            disabled={status === "submitting"}
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          />
          {errors.phone ? (
            <p id={`${formId}-phone-error`} className={errorClass}>
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset
        aria-invalid={Boolean(errors.contactPreference)}
        aria-describedby={
          errors.contactPreference ? `${formId}-pref-error` : undefined
        }
      >
        <legend className={labelClass}>I prefer to be contacted by *</legend>
        <div className="flex flex-wrap gap-4 mt-1">
          {(["Email", "Phone"] as const).map((option) => (
            <label
              key={option}
              className="inline-flex items-center gap-2 text-sm text-[var(--pnw-ink,#232019)] cursor-pointer"
            >
              <input
                id={`${formId}-pref-${option.toLowerCase()}`}
                type="radio"
                name="contactPreference"
                value={option}
                checked={form.contactPreference === option}
                disabled={status === "submitting"}
                onChange={() => setField("contactPreference", option)}
                className="accent-[var(--pnw-moss,#5f6b4f)]"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.contactPreference ? (
          <p id={`${formId}-pref-error`} className={errorClass}>
            {errors.contactPreference}
          </p>
        ) : null}
      </fieldset>

      <div>
        <label className={labelClass} htmlFor={`${formId}-comments`}>
          Questions / Comments
        </label>
        <textarea
          id={`${formId}-comments`}
          name="comments"
          rows={4}
          maxLength={LIMITS.comments}
          disabled={status === "submitting"}
          value={form.comments}
          onChange={(e) => setField("comments", e.target.value)}
          className={`${inputClass} resize-y min-h-[6rem]`}
          aria-invalid={Boolean(errors.comments)}
          aria-describedby={
            errors.comments ? `${formId}-comments-error` : undefined
          }
        />
        {errors.comments ? (
          <p id={`${formId}-comments-error`} className={errorClass}>
            {errors.comments}
          </p>
        ) : null}
      </div>

      <div>
        <label className={labelClass} htmlFor={`${formId}-hear`}>
          How did you hear about us?
        </label>
        <select
          id={`${formId}-hear`}
          name="hearAbout"
          disabled={status === "submitting"}
          value={form.hearAbout}
          onChange={(e) => setField("hearAbout", e.target.value)}
          className={inputClass}
        >
          <option value="">— Choose one —</option>
          {HEAR_ABOUT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {serverError ? (
        <p className="text-sm text-[var(--pnw-clay,#a9784f)]" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-block w-full sm:w-auto px-6 py-3 bg-[var(--pnw-moss,#5f6b4f)] text-[var(--pnw-white,#fffcf6)] text-sm font-semibold uppercase tracking-wide hover:bg-[var(--pnw-moss-deep,#333b29)] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
