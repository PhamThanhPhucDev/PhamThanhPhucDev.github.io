import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function DeveloperProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-4">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between max-w-6xl mx-auto py-4"
      >
        <div className="flex items-center gap-3">
          {/* Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-12 h-12 text-teal-400"
          >
            <path
              d="M10 80 L50 10 L90 80 Z"
              fill="currentColor"
              className="drop-shadow-lg"
            />
          </svg>
          <span className="text-3xl font-bold tracking-wide">
            <span className="text-teal-400">A.</span>Dev
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#about" className="hover:text-teal-400">Giới thiệu</a>
          <a href="#skills" className="hover:text-teal-400">Kỹ năng</a>
          <a href="#experience" className="hover:text-teal-400">Kinh nghiệm</a>
          <a href="#contact" className="hover:text-teal-400">Liên hệ</a>
        </nav>
      </motion.header>

      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Xin chào, mình là{" "}
            <span className="text-teal-400">A. Developer</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Lập trình viên full‑stack với hơn <b>15 năm kinh nghiệm</b> xây dựng
            các hệ thống web hiệu năng cao. Thành thạo JavaScript, TypeScript,
            React, Node.js, và kiến trúc cloud‑native trên AWS. Đam mê tạo ra
            những giao diện trực quan, tối ưu trải nghiệm người dùng và tuân thủ
            tiêu chuẩn code hiện đại.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg" className="gap-2">
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Thuê tôi
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg" className="gap-2">
              <a href="https://github.com/yourhandle" target="_blank">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <motion.img
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80"
          alt="Developer at work"
          className="w-full rounded-2xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </motion.section>

      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-6xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-6">Kỹ năng chính</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "React / Next.js",
            "TypeScript",
            "Node.js",
            "GraphQL",
            "Tailwind CSS",
            "AWS & Serverless",
            "Docker & Kubernetes",
            "CI/CD & DevOps",
          ].map((skill) => (
            <Card key={skill} className="bg-slate-800 text-center">
              <CardContent className="py-6">
                <span className="text-lg font-semibold">{skill}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-6">Kinh nghiệm tiêu biểu</h2>
        <ol className="relative border-l border-teal-400">
          {[
            {
              year: "2021‑Nay",
              role: "Tech Lead - FinTech SaaS",
              details:
                "Dẫn dắt đội 8 dev xây dựng nền tảng quản lý tài chính xử lý 50k+ giao dịch/giờ, áp dụng micro‑frontends.",
            },
            {
              year: "2017‑2021",
              role: "Senior Full‑Stack - E‑commerce",
              details:
                "Thiết kế kiến trúc và triển khai hệ thống marketplace phục vụ 2M người dùng, giảm thời gian page load 38%.",
            },
            {
              year: "2010‑2017",
              role: "Web Developer - Agency",
              details:
                "Phát triển 100+ website cho khách hàng toàn cầu, tối ưu SEO & accessibility, đào tạo junior dev.",
            },
          ].map((item, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-400 ring-4 ring-slate-900"></span>
              <h3 className="flex items-center text-xl font-semibold">
                {item.role}
                {idx === 0 && (
                  <span className="ml-2 rounded bg-slate-700 px-2 py-0.5 text-sm font-medium">
                    Hiện tại
                  </span>
                )}
              </h3>
              <time className="mb-2 block text-sm leading-none opacity-70">
                {item.year}
              </time>
              <p className="text-base">{item.details}</p>
            </li>
          ))}
        </ol>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-6xl mx-auto mt-20 mb-28 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Liên hệ</h2>
        <p className="mb-8">
          Bạn đang có dự án thú vị? <br className="hidden md:block" />
          Hãy gửi cho tôi vài dòng để cùng hợp tác!
        </p>
        <div className="flex justify-center gap-6">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="mailto:yourmail@example.com">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="https://github.com/yourhandle" target="_blank">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="https://linkedin.com/in/yourhandle" target="_blank">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </motion.section>

      <footer className="text-sm text-center opacity-70 pb-6">
        © {new Date().getFullYear()} A. Developer. All rights reserved.
      </footer>
    </div>
  );
}
