import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import heroImage from "@/assets/womens-day-hero.png";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Crown, Flower2, Gift } from "lucide-react";
import { FlowerSVG, SmallFlowerSVG, LeafSVG, PetalSVG } from "@/components/FlowerSVGs";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const quotes = [
  { text: "A woman is the full circle. Within her is the power to create, nurture and transform.", author: "Diane Mariechild" },
  { text: "There is no limit to what we, as women, can accomplish.", author: "Michelle Obama" },
  { text: "She believed she could, so she did.", author: "R.S. Grey" },
  { text: "The future is female.", author: "Popular Saying" },
  { text: "Well-behaved women seldom make history.", author: "Laurel Thatcher Ulrich" },
  { text: "A woman with a voice is, by definition, a strong woman.", author: "Melinda Gates" },
];

const celebrations = [
  { icon: Crown, title: "Strength", description: "Celebrating the incredible strength women carry every single day." },
  { icon: Heart, title: "Love", description: "Honoring the boundless love women share with the world." },
  { icon: Sparkles, title: "Brilliance", description: "Recognizing the brilliant minds shaping our future." },
  { icon: Star, title: "Courage", description: "Applauding the courage to break barriers and rise above." },
  { icon: Flower2, title: "Grace", description: "Admiring the grace with which women navigate life's journey." },
  { icon: Gift, title: "Legacy", description: "Cherishing the powerful legacies women leave behind." },
];

const flowerPositions = [
  { top: "3%", left: "5%", size: 48, rotate: 15, type: "flower" },
  { top: "8%", right: "8%", size: 36, rotate: -20, type: "small" },
  { top: "18%", left: "2%", size: 30, rotate: 30, type: "leaf" },
  { top: "22%", right: "4%", size: 52, rotate: -10, type: "flower" },
  { top: "35%", left: "7%", size: 28, rotate: 25, type: "petal" },
  { top: "38%", right: "6%", size: 34, rotate: -15, type: "small" },
  { top: "48%", left: "3%", size: 44, rotate: 10, type: "flower" },
  { top: "52%", right: "10%", size: 26, rotate: -30, type: "leaf" },
  { top: "62%", left: "8%", size: 38, rotate: 20, type: "small" },
  { top: "66%", right: "5%", size: 50, rotate: -8, type: "flower" },
  { top: "78%", left: "4%", size: 32, rotate: -18, type: "petal" },
  { top: "82%", right: "12%", size: 40, rotate: 12, type: "small" },
  { top: "90%", left: "10%", size: 36, rotate: 22, type: "flower" },
  { top: "92%", right: "8%", size: 28, rotate: -25, type: "leaf" },
  { top: "14%", left: "42%", size: 22, rotate: 35, type: "petal" },
  { top: "45%", left: "48%", size: 20, rotate: -12, type: "petal" },
  { top: "72%", left: "45%", size: 24, rotate: 18, type: "petal" },
];

const FlowerElement = ({ type, size, rotate }: { type: string; size: number; rotate: number }) => {
  const colors = {
    flower: ["hsl(340 50% 85%)", "hsl(330 45% 80%)", "hsl(350 55% 88%)"],
    small: ["hsl(270 50% 78%)", "hsl(280 45% 82%)", "hsl(260 40% 80%)"],
    leaf: ["hsl(140 35% 72%)", "hsl(150 30% 68%)"],
    petal: ["hsl(330 55% 82%)", "hsl(340 50% 78%)", "hsl(320 45% 85%)"],
  };
  const colorSet = colors[type as keyof typeof colors] || colors.flower;
  const color = colorSet[Math.floor(Math.random() * colorSet.length)];

  switch (type) {
    case "flower": return <FlowerSVG size={size} color={color} />;
    case "small": return <SmallFlowerSVG size={size} color={color} />;
    case "leaf": return <LeafSVG size={size} color={color} />;
    case "petal": return <PetalSVG size={size} color={color} />;
    default: return <FlowerSVG size={size} color={color} />;
  }
};

const Index = () => {
  const [wished, setWished] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const fireConfetti = useCallback(() => {
    setWished(true);
    // Fire multiple bursts
    const defaults = { startVelocity: 30, spread: 360, ticks: 80, zIndex: 100 };
    const colors = ["#c084fc", "#f9a8d4", "#fda4af", "#a78bfa", "#fbcfe8", "#e9d5ff"];

    confetti({ ...defaults, particleCount: 80, origin: { x: 0.5, y: 0.5 }, colors });
    setTimeout(() => confetti({ ...defaults, particleCount: 50, origin: { x: 0.3, y: 0.6 }, colors }), 200);
    setTimeout(() => confetti({ ...defaults, particleCount: 50, origin: { x: 0.7, y: 0.4 }, colors }), 400);
    setTimeout(() => confetti({ ...defaults, particleCount: 40, origin: { x: 0.5, y: 0.3 }, colors }), 600);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-44 h-44 rounded-full bg-lavender/12 blur-3xl" />
        <div className="absolute top-40 right-20 w-52 h-52 rounded-full bg-rose/12 blur-3xl" />
        <div className="absolute top-[40%] left-1/4 w-56 h-56 rounded-full bg-lilac/10 blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-44 h-44 rounded-full bg-mint/12 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-rose/10 blur-3xl" />
      </div>

      {/* Flower decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {flowerPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: pos.top,
              left: "left" in pos ? pos.left : undefined,
              right: "right" in pos ? pos.right : undefined,
              rotate: pos.rotate,
            }}
            animate={{
              y: [0, -4, 0],
              rotate: [pos.rotate, pos.rotate + 2, pos.rotate],
            }}
            transition={{
              duration: 7 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FlowerElement type={pos.type} size={pos.size} rotate={pos.rotate} />
          </motion.div>
        ))}
      </div>

      {/* Cute boxes bg */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "6%", left: "12%", size: 50, rotate: 12, color: "bg-lavender/6" },
          { top: "20%", right: "14%", size: 38, rotate: -18, color: "bg-rose/8" },
          { top: "45%", left: "5%", size: 60, rotate: 8, color: "bg-lilac/5" },
          { top: "60%", right: "7%", size: 44, rotate: -10, color: "bg-lavender/7" },
          { top: "80%", left: "15%", size: 34, rotate: 22, color: "bg-mint/6" },
          { top: "88%", right: "18%", size: 46, rotate: -14, color: "bg-rose/6" },
        ].map((box, i) => (
          <motion.div
            key={`box-${i}`}
            className={`absolute ${box.color} rounded-2xl border border-lavender/8`}
            style={{
              top: box.top,
              left: "left" in box ? box.left : undefined,
              right: "right" in box ? box.right : undefined,
              width: box.size,
              height: box.size,
              rotate: box.rotate,
            }}
            animate={{ y: [0, -5, 0], rotate: [box.rotate, box.rotate + 2, box.rotate] }}
            transition={{ duration: 8 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Flower2 className="w-7 h-7 text-lavender" />
          <span className="font-display font-bold text-lg text-foreground">Women's Day</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          <a href="#celebrate" className="hover:text-foreground transition-colors duration-300">Celebrate</a>
          <a href="#quotes" className="hover:text-foreground transition-colors duration-300">Quotes</a>
          <a href="#wish" className="hover:text-foreground transition-colors duration-300">Wish</a>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        className="relative z-10 flex flex-col items-center text-center px-6 pt-8 pb-24 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <img src={heroImage} alt="Women's Day celebration" className="w-56 h-56 md:w-72 md:h-72 drop-shadow-lg" />
        </motion.div>

        <motion.p variants={fadeUp} className="text-lavender font-semibold text-sm tracking-widest uppercase mb-4">
          March 8, 2026
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Happy{" "}
          <span className="text-gradient">Women's Day</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Celebrating the strength, grace, and brilliance of every woman.
          You make the world more beautiful just by being in it. 🌸
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            size="lg"
            onClick={fireConfetti}
            className="gradient-lavender border-0 text-primary-foreground shadow-lg px-10 text-base"
          >
            💐 Wish Women's Day to Me
          </Button>
        </motion.div>

        <AnimatePresence>
          {wished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="mt-8 gradient-card rounded-3xl p-8 border border-border/50 shadow-lg max-w-lg"
            >
              <p className="text-2xl mb-2">🎉✨💐</p>
              <h3 className="font-display font-bold text-xl mb-2 text-gradient">
                Happy Women's Day!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You are strong, beautiful, and absolutely amazing. May your day be filled with
                love, laughter, and everything wonderful. The world is brighter because of you! 💜
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Divider flowers */}
      <div className="relative z-10 flex justify-center gap-4 py-4">
        <FlowerSVG size={28} color="hsl(340 50% 85%)" />
        <SmallFlowerSVG size={22} color="hsl(270 50% 78%)" />
        <FlowerSVG size={28} color="hsl(330 45% 80%)" />
      </div>

      {/* Celebrate Section */}
      <motion.section
        id="celebrate"
        className="relative z-10 px-6 py-24 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
        >
          Celebrating Women 💜
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
          Every woman carries within her the power to change the world
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {celebrations.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="gradient-card rounded-2xl p-7 border border-border/50 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-lavender-dark" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quotes Section */}
      <motion.section
        id="quotes"
        className="relative z-10 px-6 py-24 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
        >
          Words of Power 🌺
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-16 text-lg">
          Inspiring words from incredible women
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="gradient-card rounded-2xl p-8 border border-border/50 shadow-sm"
            >
              <p className="text-foreground italic text-base leading-relaxed mb-4">"{quote.text}"</p>
              <p className="text-lavender-dark font-semibold text-sm">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Big Wish CTA */}
      <motion.section
        id="wish"
        className="relative z-10 px-6 py-24 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="gradient-lavender rounded-3xl p-12 md:p-20 shadow-xl relative overflow-hidden"
        >
          {/* Decorative flowers inside CTA */}
          <div className="absolute top-4 left-4 opacity-30">
            <FlowerSVG size={40} color="hsl(0 0% 100%)" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-30">
            <SmallFlowerSVG size={32} color="hsl(0 0% 100%)" />
          </div>
          <div className="absolute top-4 right-12 opacity-20">
            <LeafSVG size={24} color="hsl(0 0% 100%)" />
          </div>

          <p className="text-4xl mb-4">🌷</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            You Are Amazing
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Every woman deserves to be celebrated — not just today, but every single day.
            Share the love and make someone smile.
          </p>
          <Button
            size="lg"
            onClick={fireConfetti}
            className="bg-background text-foreground shadow-lg px-10 text-base font-bold"
          >
            🎉 Send Me Wishes!
          </Button>
        </motion.div>
      </motion.section>

      {/* Stats/facts section */}
      <motion.section
        className="relative z-10 px-6 py-24 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-3xl md:text-4xl text-center mb-16"
        >
          Women Inspire Us 🌸
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "∞", label: "Reasons to Celebrate" },
            { number: "365", label: "Days of Strength" },
            { number: "💜", label: "Infinite Love" },
            { number: "1", label: "Amazing You" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="gradient-card rounded-2xl p-6 border border-border/50 text-center"
            >
              <p className="font-display font-extrabold text-3xl md:text-4xl text-gradient mb-2">{stat.number}</p>
              <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final message */}
      <motion.section
        className="relative z-10 px-6 py-24 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <div className="flex justify-center gap-3 mb-6">
            <FlowerSVG size={36} color="hsl(340 50% 85%)" />
            <SmallFlowerSVG size={28} color="hsl(270 50% 78%)" />
            <FlowerSVG size={36} color="hsl(330 45% 80%)" />
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-4">
            To every woman reading this...
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            You are enough. You are worthy. You are powerful.
            Never let anyone dim your light. The world needs your magic. ✨
          </p>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-10 text-center text-muted-foreground text-sm border-t border-border/50">
        <div className="flex justify-center gap-2 mb-3">
          <SmallFlowerSVG size={18} color="hsl(270 50% 78%)" />
          <FlowerSVG size={18} color="hsl(340 50% 85%)" />
          <SmallFlowerSVG size={18} color="hsl(270 50% 78%)" />
        </div>
        <p className="font-body">Happy Women's Day 💜 · March 8, 2026</p>
        <p className="font-body mt-2">Made with 💜 by <a href="https://github.com/khushichetule09" target="_blank" rel="noopener noreferrer" className="text-lavender-dark hover:underline font-semibold">Khushi</a></p>
      </footer>
    </div>
  );
};

export default Index;
