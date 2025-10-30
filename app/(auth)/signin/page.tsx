'use client';

import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("https://backendregister-dem3.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
console.log("🔐 Backend response data:", data); // ✅ LOG HERE

if (!res.ok) throw new Error(data.message || "Login failed");
setMessage("✅ Login successful!");

localStorage.setItem("smartassessUser", JSON.stringify(data.user));
console.log("📦 Saved user to localStorage:", data.user); // ✅ LOG HERE

      if (!res.ok) throw new Error(data.message || "Login failed");

      setMessage("✅ Login successful!");

      // 👉 Store locally (optional)
      localStorage.setItem("smartassessUser", JSON.stringify(data.user));

      // ✅ Encode user data into query params
      const name = encodeURIComponent(data.user.name);
      const email = encodeURIComponent(data.user.email);

      // 🔁 Redirect to external AI Grader page with query params
      setTimeout(() => {
        window.location.href = `  https://smartassesgrader-wz54.onrender.com#name=${name}&email=${email}`;

      }, 1200);

    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back
            </h1>
          </div>

          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label className="block text-sm font-medium text-indigo-200/65" htmlFor="password">
                    Password
                  </label>
                  <Link className="text-sm text-gray-600 hover:underline" href="/reset-password">
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {message && (
              <p className={`mt-4 text-sm ${message.includes("✅") ? "text-green-400" : "text-red-400"}`}>
                {message}
              </p>
            )}

            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Don&apos;t you have an account?{" "}
            <Link className="font-medium text-indigo-500" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
