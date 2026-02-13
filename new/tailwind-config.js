tailwind.config = {
    theme: {
        extend: {
            colors: {
                void: '#080808',      /* Tło Główne Dark */
                surface: '#121212',   /* Tło Kart Dark */
                diamond: '#F9FAFB',   /* Tło Główne Light */
                paper: '#FFFFFF',     /* Tło Kart Light */
                electric: '#007AFF',  /* Akcent Techniczny (Blue) */
                depth: '#6D28D9',     /* Akcent Transformacji (Purple) */

                /* Teksty */
                'on-dark': '#E5E7EB',
                'on-dim': '#9CA3AF',
                'on-light': '#111827',
                'on-light-dim': '#4B5563',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #007AFF 0%, #6D28D9 100%)',
                'void-glow': 'radial-gradient(circle at 70% 20%, rgba(109, 40, 217, 0.20) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(0, 122, 255, 0.15) 0%, transparent 60%)',
                'the-cut': 'linear-gradient(90deg, #080808 0%, #007AFF 45%, #6D28D9 55%, #F9FAFB 100%)',
                'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,250,251,1) 100%)',
            },
            boxShadow: {
                'neon': '0 0 30px rgba(0, 122, 255, 0.25)',
                'clarity': '0 20px 40px -5px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 20px 40px -10px rgba(0, 122, 255, 0.15)',
            }
        }
    }
}
